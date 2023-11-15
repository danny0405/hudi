"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79139:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(26396),a(58215);const i={title:"Release 1.0.0-beta1",sidebar_position:1,layout:"releases",toc:!0},o=void 0,l={unversionedId:"release-1.0.0-beta1",id:"release-1.0.0-beta1",title:"Release 1.0.0-beta1",description:"Release 1.0.0-beta1 (docs)",source:"@site/releases/release-1.0.0-beta1.md",sourceDirName:".",slug:"/release-1.0.0-beta1",permalink:"/cn/releases/release-1.0.0-beta1",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Release 1.0.0-beta1",sidebar_position:1,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Download",permalink:"/cn/releases/download"},next:{title:"Release 0.14.0",permalink:"/cn/releases/release-0.14.0"}},s=[{value:"Release 1.0.0-beta1 (docs)",id:"release-100-beta1-docs",children:[],level:2},{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Highlights",id:"highlights",children:[{value:"Format changes",id:"format-changes",children:[{value:"Timeline",id:"timeline",children:[],level:4},{value:"Log File Format",id:"log-file-format",children:[],level:4},{value:"Multiple base file formats",id:"multiple-base-file-formats",children:[],level:4}],level:3},{value:"Concurrency Control",id:"concurrency-control",children:[],level:3},{value:"Functional Index",id:"functional-index",children:[],level:3},{value:"API changes",id:"api-changes",children:[{value:"Record Merger API",id:"record-merger-api",children:[],level:4},{value:"New FileGroup Reader",id:"new-filegroup-reader",children:[],level:4}],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-100-beta1-docs"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-1.0.0-beta1"},"Release 1.0.0-beta1")," (",(0,r.kt)("a",{parentName:"h2",href:"/docs/next/quick-start-guide"},"docs"),")"),(0,r.kt)("p",null,"Apache Hudi 1.0.0-beta1 is the first beta release of Apache Hudi. This release is meant for early adopters to try\nout the new features and provide feedback. The release is not meant for production use."),(0,r.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("p",null,"This release contains major format changes as we will see in highlights below. As such, migration would be required when\nthe release is made generally available (GA). However, we encourage users to try out the features on new tables."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Given that timeline format and log file format has changed in this beta release, it is recommended not to attempt to do\nrolling upgrades from older versions to this release."))),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("h3",{id:"format-changes"},"Format changes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6242"},"HUDI-6242")," is the main epic covering all the format changes proposals. The following are the main changes in this release:"),(0,r.kt)("h4",{id:"timeline"},"Timeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now all commit metadata is serialized to avro. This allows us to add new fields in the future without breaking\ncompatibility and also maintain uniformity in metadata across all actions."),(0,r.kt)("li",{parentName:"ul"},"All completed commit metadata file name will also have completion time. All the actions in requested/inflight states\nare stored in the active timeline as files named <begin",(0,r.kt)("em",{parentName:"li"},"instant_time>.<action_type>.<requested|inflight>. Completed\nactions are stored along with a time that denotes when the action was completed, in a file named <\nbegin_instant_time>"),"<completion_instant_time>.<action_type>. This allows us to implement file slicing for non-blocking\nconcurrecy control."),(0,r.kt)("li",{parentName:"ul"},"Completed actions, their plans and completion metadata are stored in a more\nscalable ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree"},"LSM tree")," based timeline organized in an *\n*",(0,r.kt)("em",{parentName:"li"},"archived"),"** storage location under the .hoodie metadata path. It consists of Apache Parquet files with action\ninstant data and bookkeeping metadata files, in the following manner. Checkout ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/timeline#lsm-timeline"},"timeline")," docs for more details.")),(0,r.kt)("h4",{id:"log-file-format"},"Log File Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In addition to the fields in the log file header, we also store record positions. Refer to the\nlatest ",(0,r.kt)("a",{parentName:"li",href:"/tech-specs-1point0#log-format"},"spec")," for more details. This allows us to do\nposition-based merging (apart from key-based merging) and skip pages based on positions."),(0,r.kt)("li",{parentName:"ul"},"Log file name will now have the deltacommit instant time instead of base commit instant time.")),(0,r.kt)("h4",{id:"multiple-base-file-formats"},"Multiple base file formats"),(0,r.kt)("p",null,"Now you can have multiple base files formats in a Hudi table. Even the same filegroup can have multiple base file\nformats. We need to set a table config ",(0,r.kt)("inlineCode",{parentName:"p"},"hoodie.table.multiple.base.file.formats.enable")," to use this feature. And\nwhenever we need to change the format, then just specify the format in the ",(0,r.kt)("inlineCode",{parentName:"p"},'hoodie.base.file.format"')," config. Currently,\nonly Parquet, Orc and HFile formats are supported. This unlocks multiple benefits including choosing file format\nsuitable to index, and supporting emerging formats for ML/AI. "),(0,r.kt)("h3",{id:"concurrency-control"},"Concurrency Control"),(0,r.kt)("p",null,"A new concurrency control mode called ",(0,r.kt)("inlineCode",{parentName:"p"},"NON_BLOCKING_CONCURRENCY_CONTROL")," is introduced in this release, where unlike\nOCC, multiple writers can operate on the table with non-blocking conflict resolution. The writers can write into the\nsame file group with the conflicts resolved automatically by the query reader and the compactor. The new concurrency\nmode is currently available for preview in version 1.0.0-beta only. You can read more about it under\nsection ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concurrency_control#non-blocking-concurrency-control-mode-experimental"},"Model C: Multi-writer"),". A complete example with multiple\nFlink streaming writers is available ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/writing_data#non-blocking-concurrency-control-experimental"},"here"),". You\ncan follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-66/rfc-66.md"},"RFC")," and\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6640"},"JIRA")," for more details."),(0,r.kt)("h3",{id:"functional-index"},"Functional Index"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/00ece7bce0a4a8d0019721a28049723821e01842/rfc/rfc-63/rfc-63.md"},"functional index"),"\nis an index on a function of a column. It is a new addition to Hudi's ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2022/05/17/Introducing-Multi-Modal-Index-for-the-Lakehouse-in-Apache-Hudi"},"multi-modal indexing"),"\nsubsystem which provides faster access method and also absorbs partitioning as part of the indexing system. Now you can\nsimply create and drop index using SQL syntax as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create Index\nCREATE INDEX [IF NOT EXISTS] index_name ON [TABLE] table_name \n[USING index_type] \n(column_name1 [OPTIONS(key1=value1, key2=value2, ...)], column_name2 [OPTIONS(key1=value1, key2=value2, ...)], ...) \n[OPTIONS (key1=value1, key2=value2, ...)]\n\n-- Drop Index\nDROP INDEX [IF EXISTS] index_name ON [TABLE] table_name\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index_name")," is the name of the index to be created or dropped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table_name")," is the name of the table on which the index is created or dropped."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index_type")," is the type of the index to be created. Currently, only ",(0,r.kt)("inlineCode",{parentName:"li"},"files"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"column_stats")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bloom_filters")," is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column_name")," is the name of the column on which the index is created."),(0,r.kt)("li",{parentName:"ul"},"Both index and column on which the index is created can be qualified with some options in the form of key-value pairs.")),(0,r.kt)("p",null,"To see some examples of creating and using a functional index, please checkout the Spark SQL DDL\ndocs ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/sql_ddl#create-index"},"here"),". You can follow\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md"},"RFC")," and\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-512"},"JIRA")," to keep track of ongoing work on this feature."),(0,r.kt)("h3",{id:"api-changes"},"API changes"),(0,r.kt)("h4",{id:"record-merger-api"},"Record Merger API"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieRecordPayload")," interface was deprecated in favor of the new ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieRecordMerger")," interface in version 0.13.0.\nThe new interface has been further enhanced to support all kinds of merging operations. In particular, the new interface\nsupports partial merge and support custom checks before flushing merged records to disk. Please check\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/3a1d4fb03b1ab8e3cf27073053a4fab0a56a26d2/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordMerger.java"},"javadoc"),"\nof the API for more details."),(0,r.kt)("h4",{id:"new-filegroup-reader"},"New FileGroup Reader"),(0,r.kt)("p",null,"In addition to key-based merging of records in log files with base files for queries on MOR table, we have implemented\nposition-based merging and skipping pages based on positions. The new reader has shown impressive performance gains for\n",(0,r.kt)("strong",{parentName:"p"},"partial updates")," with key-based merging. For a MOR table of size 1TB with 100 partitions and 80% random updates in\nsubsequent commits, the new reader is ",(0,r.kt)("strong",{parentName:"p"},"5.7x faster")," for snapshot queries with ",(0,r.kt)("strong",{parentName:"p"},"70x reduced write amplification"),".\nHowever, for position-based merging, the gains are yet to be realized as filter pushdown support\nis ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/10030"},"in progress"),". The new reader is enabled by default for all new tables.\nFollowing configs are used to control the reader:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# enabled by default\nhoodie.file.group.reader.enabled=true\nhoodie.datasource.read.use.new.parquet.file.format=true\n# need to enable position-based merging if required\nhoodie.merge.use.record.positions=true\n")),(0,r.kt)("p",null,"Few things to note for the new reader:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is only applicable to COW or MOR tables with base files in Parquet format."),(0,r.kt)("li",{parentName:"ul"},"Only snapshot queries for COW table, and snapshot queries and read-optimized queries for MOR table are supported."),(0,r.kt)("li",{parentName:"ul"},"Currently, the reader will not be able to push down the data filters to scan. It is recommended to use key-based\nmerging for now.")),(0,r.kt)("p",null,"You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6243"},"HUDI-6243"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-6722"},"HUDI-6722")," to keep track of ongoing work related to reader/writer\nAPI changes and performance improvements."),(0,r.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,r.kt)("p",null,"The raw release notes are available ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351210"},"here"),"."))}u.isMDXComponent=!0},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),i=a(72389),o=a(79443);const l=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(53810),c=a(86010);const d={tabItem:"tabItem_vU9c"};function u(e){const{lazy:t,block:a,defaultValue:i,values:o,groupId:u,className:p}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=o??m.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=l(),[v,w]=(0,r.useState)(b),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=u){const e=g[u];null!=e&&e!==v&&h.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=y.indexOf(t),n=h[a].value;n!==v&&(N(t),w(n),null!=u&&k(u,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]||y[y.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},p)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>y.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,c.Z)("tabs__item",d.tabItem,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(m.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function p(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}}}]);