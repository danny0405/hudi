"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6782:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},s=void 0,i={unversionedId:"s3_hoodie",id:"version-0.14.0/s3_hoodie",title:"AWS S3",description:"In this page, we explain how to get your Hudi spark job to store into AWS S3.",source:"@site/versioned_docs/version-0.14.0/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/cn/docs/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/s3_hoodie.md",tags:[],version:"0.14.0",frontMatter:{title:"AWS S3",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Cloud Storage",permalink:"/cn/docs/cloud"},next:{title:"Google Cloud",permalink:"/cn/docs/gcs_hoodie"}},l=[{value:"AWS configs",id:"aws-configs",children:[{value:"AWS Credentials",id:"aws-credentials",children:[],level:3},{value:"AWS Libs",id:"aws-libs",children:[],level:3}],level:2},{value:"AWS S3 Versioned Bucket",id:"aws-s3-versioned-bucket",children:[],level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into AWS S3."),(0,n.kt)("h2",{id:"aws-configs"},"AWS configs"),(0,n.kt)("p",null,"There are two configurations required for Hudi-S3 compatibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding AWS Credentials for Hudi"),(0,n.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,n.kt)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,n.kt)("p",null,"The simplest way to use Hudi with S3, is to configure your ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"SparkContext")," with S3 credentials. Hudi will automatically pick this up and talk to S3."),(0,n.kt)("p",null,"Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your S3 bucket name and Hudi should be able to read/write from the bucket."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>s3://ysharma</value>\n  </property>\n\n  <property>\n    <name>fs.s3.awsAccessKeyId</name>\n    <value>AWS_KEY</value>\n  </property>\n\n  <property>\n    <name>fs.s3.awsSecretAccessKey</name>\n    <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n    <name>fs.s3a.awsAccessKeyId</name>\n    <value>AWS_KEY</value>\n  </property>\n\n  <property>\n    <name>fs.s3a.awsSecretAccessKey</name>\n    <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n    <name>fs.s3a.endpoint</name>\n    <value>http://IP-Address:Port</value>\n  </property>\n\n  <property>\n    <name>fs.s3a.path.style.access</name>\n    <value>true</value>\n  </property>\n\n  <property>\n    <name>fs.s3a.signing-algorithm</name>\n    <value>S3SignerType</value>\n  </property>\n")),(0,n.kt)("p",null,"Utilities such as hudi-cli or Hudi Streamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"HOODIE_ENV_"),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\n")),(0,n.kt)("h3",{id:"aws-libs"},"AWS Libs"),(0,n.kt)("p",null,"AWS hadoop libraries to add to our classpath"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,n.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,n.kt)("p",null,"AWS glue data libraries are needed if AWS glue data is used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,n.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")),(0,n.kt)("h2",{id:"aws-s3-versioned-bucket"},"AWS S3 Versioned Bucket"),(0,n.kt)("p",null,"With versioned buckets any object deleted creates a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html"},"Delete Marker"),", as Hudi cleans up files using ",(0,n.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_cleaner"},"Cleaner utility")," the number of Delete Markers increases over time.\nIt is important to configure the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"},"Lifecycle Rule")," correctly\nto clean up these delete markers as the List operation can choke if the number of delete markers reaches 1000.\nWe recommend cleaning up Delete Markers after 1 day in Lifecycle Rule."))}u.isMDXComponent=!0}}]);