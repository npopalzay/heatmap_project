(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[4154],{64154:(e,s,t)=>{"use strict";t.r(s),t.d(s,{execute:()=>o});var r=t(86530),n=t(29107);let a;function o(e,s={}){let t=s.responseType;t?"json"!==t&&"text"!==t&&"blob"!==t&&"array-buffer"!==t&&(t="text"):t="json";const o=s&&s.signal;return delete s.signal,r.Z.invokeStaticMessage("request",{url:e,options:s},{signal:o}).then((r=>{const o=r.data;let l,u,c,i;if(o&&!("json"!==t&&"text"!==t&&"blob"!==t||(l=new Blob([o]),"json"!==t&&"text"!==t||(a||(a=new FileReaderSync),u=a.readAsText(l),"json"!==t)))){try{c=JSON.parse(u||null)}catch(t){const r={...t,url:e,requestOptions:s};throw new n.Z("request:server",t.message,r)}if(c.error){const t={...c.error,url:e,requestOptions:s};throw new n.Z("request:server",c.error.message,t)}}switch(t){case"json":i=c;break;case"text":i=u;break;case"blob":i=l;break;default:i=o}return{data:i,requestOptions:s,ssl:r.ssl,url:e}}))}}}]);