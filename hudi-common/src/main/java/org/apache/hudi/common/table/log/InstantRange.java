/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.common.table.log;

import org.apache.hudi.common.table.timeline.HoodieTimeline;
import org.apache.hudi.common.util.ValidationUtils;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * A instant commits range used for incremental reader filtering.
 */
public abstract class InstantRange implements Serializable {
  private static final long serialVersionUID = 1L;

  protected final String startInstant;
  protected final String endInstant;

  public InstantRange(String startInstant, String endInstant) {
    this.startInstant = startInstant;
    this.endInstant = endInstant;
  }

  /**
   * Returns the builder.
   */
  public static Builder builder() {
    return new Builder();
  }

  public String getStartInstant() {
    return startInstant;
  }

  public String getEndInstant() {
    return endInstant;
  }

  public abstract boolean isInRange(String instant);

  @Override
  public String toString() {
    return "InstantRange{"
        + "startInstant='" + (startInstant == null ? "null" : startInstant) + '\''
        + ", endInstant='" + (endInstant == null ? "null" : endInstant) + '\''
        + ", rangeType='" + this.getClass().getSimpleName() + '\''
        + '}';
  }

  // -------------------------------------------------------------------------
  //  Inner Class
  // -------------------------------------------------------------------------

  /**
   * Represents a range type.
   */
  public enum RangeType {
    OPEN_CLOSE, CLOSE_CLOSE, EXPLICIT_MATCH, COMPOSITION
  }

  private static class OpenCloseRange extends InstantRange {

    public OpenCloseRange(String startInstant, String endInstant) {
      super(Objects.requireNonNull(startInstant), endInstant);
    }

    @Override
    public boolean isInRange(String instant) {
      // No need to do comparison:
      // HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant)
      // because the logic is ensured by the log scanner
      return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN, startInstant);
    }
  }

  private static class OpenCloseRangeNullableBoundary extends InstantRange {

    public OpenCloseRangeNullableBoundary(String startInstant, String endInstant) {
      super(startInstant, endInstant);
      ValidationUtils.checkArgument(startInstant != null || endInstant != null,
          "Start and end instants can not both be null");
    }

    @Override
    public boolean isInRange(String instant) {
      if (startInstant == null) {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant);
      } else if (endInstant == null) {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN, startInstant);
      } else {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN, startInstant)
            && HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant);
      }
    }
  }

  private static class CloseCloseRange extends InstantRange {

    public CloseCloseRange(String startInstant, String endInstant) {
      super(Objects.requireNonNull(startInstant), endInstant);
    }

    @Override
    public boolean isInRange(String instant) {
      // No need to do comparison:
      // HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant)
      // because the logic is ensured by the log scanner
      return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN_OR_EQUALS, startInstant);
    }
  }

  private static class CloseCloseRangeNullableBoundary extends InstantRange {

    public CloseCloseRangeNullableBoundary(String startInstant, String endInstant) {
      super(startInstant, endInstant);
      ValidationUtils.checkArgument(startInstant != null || endInstant != null,
          "Start and end instants can not both be null");
    }

    @Override
    public boolean isInRange(String instant) {
      if (startInstant == null) {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant);
      } else if (endInstant == null) {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN_OR_EQUALS, startInstant);
      } else {
        return HoodieTimeline.compareTimestamps(instant, HoodieTimeline.GREATER_THAN_OR_EQUALS, startInstant)
            && HoodieTimeline.compareTimestamps(instant, HoodieTimeline.LESSER_THAN_OR_EQUALS, endInstant);
      }
    }
  }

  /**
   * Class to assist in checking if an instant is part of a set of instants.
   */
  private static class ExplicitMatchRange extends InstantRange {
    Set<String> instants;

    public ExplicitMatchRange(Set<String> instants) {
      super(Collections.min(instants), Collections.max(instants));
      this.instants = instants;
    }

    @Override
    public boolean isInRange(String instant) {
      return this.instants.contains(instant);
    }
  }

  /**
   * Composition of multiple instant ranges in disjunctive form.
   */
  private static class CompositionRange extends InstantRange {
    List<InstantRange> instantRanges;

    public CompositionRange(List<InstantRange> instantRanges) {
      super(null, null);
      this.instantRanges = Objects.requireNonNull(instantRanges, "Instant ranges should not be null");
    }

    @Override
    public boolean isInRange(String instant) {
      for (InstantRange range : instantRanges) {
        if (range.isInRange(instant)) {
          return true;
        }
      }
      return false;
    }
  }

  // -------------------------------------------------------------------------
  //  Inner Class
  // -------------------------------------------------------------------------

  /**
   * Builder for {@link InstantRange}.
   */
  public static class Builder {
    private String startInstant;
    private String endInstant;
    private RangeType rangeType;
    private boolean nullableBoundary = false;
    private Set<String> explicitInstants;
    private List<InstantRange> instantRanges;

    private Builder() {
    }

    public Builder startInstant(String startInstant) {
      this.startInstant = startInstant;
      return this;
    }

    public Builder endInstant(String endInstant) {
      this.endInstant = endInstant;
      return this;
    }

    public Builder rangeType(RangeType rangeType) {
      this.rangeType = rangeType;
      return this;
    }

    public Builder nullableBoundary(boolean nullable) {
      this.nullableBoundary = nullable;
      return this;
    }

    public Builder explicitInstants(Set<String> instants) {
      this.explicitInstants = instants;
      return this;
    }

    public Builder instantRanges(InstantRange... instantRanges) {
      this.instantRanges = Arrays.stream(instantRanges).collect(Collectors.toList());
      return this;
    }

    public InstantRange build() {
      ValidationUtils.checkState(this.rangeType != null, "Range type is required");
      switch (rangeType) {
        case OPEN_CLOSE:
          return nullableBoundary
              ? new OpenCloseRangeNullableBoundary(startInstant, endInstant)
              : new OpenCloseRange(startInstant, endInstant);
        case CLOSE_CLOSE:
          return nullableBoundary
              ? new CloseCloseRangeNullableBoundary(startInstant, endInstant)
              : new CloseCloseRange(startInstant, endInstant);
        case EXPLICIT_MATCH:
          return new ExplicitMatchRange(this.explicitInstants);
        case COMPOSITION:
          return new CompositionRange(this.instantRanges);
        default:
          throw new AssertionError();
      }
    }
  }
}
