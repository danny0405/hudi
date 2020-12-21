/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi;

import org.apache.hudi.common.model.OverwriteWithLatestAvroPayload;
import org.apache.hudi.common.model.WriteOperationType;
import org.apache.hudi.keygen.SimpleAvroKeyGenerator;
import org.apache.hudi.operator.HoodieOptions;
import org.apache.hudi.operator.StreamWriteOperatorFactory;
import org.apache.hudi.util.StreamerUtil;

import com.beust.jcommander.IStringConverter;
import com.beust.jcommander.JCommander;
import com.beust.jcommander.Parameter;
import com.beust.jcommander.ParameterException;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.formats.avro.typeutils.AvroSchemaConverter;
import org.apache.flink.formats.json.JsonRowDataDeserializationSchema;
import org.apache.flink.formats.json.TimestampFormat;
import org.apache.flink.runtime.state.filesystem.FsStateBackend;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.connectors.kafka.FlinkKafkaConsumer;
import org.apache.flink.table.data.RowData;
import org.apache.flink.table.runtime.typeutils.InternalTypeInfo;
import org.apache.flink.table.types.logical.LogicalType;
import org.apache.flink.table.types.logical.RowType;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * An Utility which can incrementally consume data from Kafka and apply it to the target table.
 * currently, it only support COW table and insert, upsert operation.
 */
public class HoodieFlinkStreamer {
  public static void main(String[] args) throws Exception {
    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

    final Config cfg = new Config();
    JCommander cmd = new JCommander(cfg, null, args);
    if (cfg.help || args.length == 0) {
      cmd.usage();
      System.exit(1);
    }
    env.enableCheckpointing(cfg.checkpointInterval);
    env.getConfig().setGlobalJobParameters(cfg);
    // We use checkpoint to trigger write operation, including instant generating and committing,
    // There can only be one checkpoint at one time.
    env.getCheckpointConfig().setMaxConcurrentCheckpoints(1);
    env.disableOperatorChaining();

    if (cfg.flinkCheckPointPath != null) {
      env.setStateBackend(new FsStateBackend(cfg.flinkCheckPointPath));
    }

    Properties kafkaProps = StreamerUtil.getKafkaProps(cfg);

    // Read from kafka source
    RowType rowType =
        (RowType) AvroSchemaConverter.convertToDataType(StreamerUtil.getSourceSchema(cfg).toString())
            .getLogicalType();
    Configuration conf = HoodieOptions.fromStreamerConfig(cfg);
    StreamWriteOperatorFactory<RowData> operatorFactory =
        new StreamWriteOperatorFactory<>(rowType, conf, 10);

    int partitionFieldIndex = rowType.getFieldIndex(conf.getString(HoodieOptions.PARTITION_PATH_FIELD));
    LogicalType partitionFieldType = rowType.getTypeAt(partitionFieldIndex);
    final RowData.FieldGetter partitionFieldGetter =
        RowData.createFieldGetter(partitionFieldType, partitionFieldIndex);

    DataStream<Object> dataStream = env.addSource(new FlinkKafkaConsumer<>(
        cfg.kafkaTopic,
        new JsonRowDataDeserializationSchema(
            rowType,
            InternalTypeInfo.of(rowType),
            false,
            true,
            TimestampFormat.ISO_8601
        ), kafkaProps))
        .name("kafka_source")
        .uid("uid_kafka_source")
        // Key-by partition path, to avoid multiple subtasks write to a partition at the same time
        .keyBy(partitionFieldGetter::getFieldOrNull)
        .transform("hoodie_stream_write", null, operatorFactory)
        .uid("uid_hoodie_stream_write")
        .setParallelism(10); // should make it configurable

    env.addOperator(dataStream.getTransformation());

    env.execute(cfg.targetTableName);
  }

  public static class Config extends Configuration {
    @Parameter(names = {"--kafka-topic"}, description = "kafka topic", required = true)
    public String kafkaTopic;

    @Parameter(names = {"--kafka-group-id"}, description = "kafka consumer group id", required = true)
    public String kafkaGroupId;

    @Parameter(names = {"--kafka-bootstrap-servers"}, description = "kafka bootstrap.servers", required = true)
    public String kafkaBootstrapServers;

    @Parameter(names = {"--flink-checkpoint-path"}, description = "flink checkpoint path")
    public String flinkCheckPointPath;

    @Parameter(names = {"--flink-block-retry-times"}, description = "Times to retry when latest instant has not completed")
    public String blockRetryTime = "10";

    @Parameter(names = {"--flink-block-retry-interval"}, description = "Seconds between two tries when latest instant has not completed")
    public String blockRetryInterval = "1";

    @Parameter(names = {"--target-base-path"},
        description = "base path for the target hoodie table. "
            + "(Will be created if did not exist first time around. If exists, expected to be a hoodie table)",
        required = true)
    public String targetBasePath;

    @Parameter(names = {"--read-schema-path"},
        description = "Avro schema file path, the parsed schema is used for deserializing",
        required = true)
    public String readSchemaFilePath;

    @Parameter(names = {"--target-table"}, description = "name of the target table in Hive", required = true)
    public String targetTableName;

    @Parameter(names = {"--table-type"}, description = "Type of table. COPY_ON_WRITE (or) MERGE_ON_READ", required = true)
    public String tableType;

    @Parameter(names = {"--props"}, description = "path to properties file on localfs or dfs, with configurations for "
        + "hoodie client, schema provider, key generator and data source. For hoodie client props, sane defaults are "
        + "used, but recommend use to provide basic things like metrics endpoints, hive configs etc. For sources, refer"
        + "to individual classes, for supported properties.")
    public String propsFilePath =
        "file://" + System.getProperty("user.dir") + "/src/test/resources/delta-streamer-config/dfs-source.properties";

    @Parameter(names = {"--hoodie-conf"}, description = "Any configuration that can be set in the properties file "
        + "(using the CLI parameter \"--props\") can also be passed command line using this parameter.")
    public List<String> configs = new ArrayList<>();

    @Parameter(names = {"--record-key-field"}, description = "Record key field. Value to be used as the `recordKey` component of `HoodieKey`.\n"
        + "Actual value will be obtained by invoking .toString() on the field value. Nested fields can be specified using "
        + "the dot notation eg: `a.b.c`. By default `uuid`.")
    public String recordKeyField = "uuid";

    @Parameter(names = {"--partition-path-field"}, description = "Partition path field. Value to be used at \n"
        + "the `partitionPath` component of `HoodieKey`. Actual value obtained by invoking .toString(). By default `partitionpath`.")
    public String partitionPathField = "partitionpath";

    @Parameter(names = {"--partition-path-field"}, description = "Key generator class, that implements will extract the key out of incoming record.\n"
        + "By default `SimpleAvroKeyGenerator`.")
    public String keygenClass = SimpleAvroKeyGenerator.class.getName();

    @Parameter(names = {"--source-ordering-field"}, description = "Field within source record to decide how"
        + " to break ties between records with same key in input data. Default: 'ts' holding unix timestamp of record")
    public String sourceOrderingField = "ts";

    @Parameter(names = {"--payload-class"}, description = "subclass of HoodieRecordPayload, that works off "
        + "a GenericRecord. Implement your own, if you want to do something other than overwriting existing value")
    public String payloadClassName = OverwriteWithLatestAvroPayload.class.getName();

    @Parameter(names = {"--op"}, description = "Takes one of these values : UPSERT (default), INSERT (use when input "
        + "is purely new data/inserts to gain speed)", converter = OperationConverter.class)
    public WriteOperationType operation = WriteOperationType.UPSERT;

    @Parameter(names = {"--filter-dupes"},
        description = "Should duplicate records from source be dropped/filtered out before insert/bulk-insert")
    public Boolean filterDupes = false;

    @Parameter(names = {"--commit-on-errors"}, description = "Commit even when some records failed to be written")
    public Boolean commitOnErrors = false;

    /**
     * Flink checkpoint interval.
     */
    @Parameter(names = {"--checkpoint-interval"}, description = "Flink checkpoint interval.")
    public Long checkpointInterval = 1000 * 5L;

    @Parameter(names = {"--help", "-h"}, help = true)
    public Boolean help = false;
  }

  private static class OperationConverter implements IStringConverter<WriteOperationType> {

    @Override
    public WriteOperationType convert(String value) throws ParameterException {
      return WriteOperationType.valueOf(value);
    }
  }
}
