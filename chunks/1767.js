(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[1767],{31767:(e,a,r)=>{"use strict";r.r(a),r.d(a,{fromUrl:()=>y});var t=r(18029),n=r(29107),l=r(17593),s=r(65869),i=r(43505),u=r(63308);async function y(e){var a;const s=null==(a=e.properties)?void 0:a.customParameters,y=await async function(e,a){let r=(0,i.Qc)(e);if((0,t.Wi)(r)&&(r=await async function(e,a){const r=await f(e,a);let n=null,s=null;const u=r.type;if("Feature Layer"===u||"Table"===u?(n="FeatureServer",s=r.id):"indexedVector"===u?n="VectorTileServer":r.hasOwnProperty("mapName")?n="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?n="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?n="FeatureServer":r.hasOwnProperty("streamUrls")&&(n="StreamServer"),!n)return null;const y=null!=s?(0,i.DR)(e):null;return{title:(0,t.pC)(y)&&r.name||(0,l.vt)(e),serverType:n,sublayer:s,url:{path:(0,t.pC)(y)?y.serviceUrl:(0,l.mN)(e).path}}}(e,a)),(0,t.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:s,sublayer:y}=r;let o;const c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":o=null!=y?"FeatureLayer":async function(e,a){return(await f(e,a)).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":o=f(e,a).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!a||"LERC"!==a.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":o=f(r.url.path,a).then((e=>{const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const r=e.layers[0].layerType;if(null!=a[r])return a[r]}return"SceneLayer"}));break;default:o=c[s]}const b="FeatureServer"===s,h={parsedUrl:r,Constructor:null,layerOrTableId:b?y:null,sublayerIds:null,tableIds:null},w=await o;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==y){const r=await d(e,s,a);if(b&&(h.sublayerInfos=r.layerInfos,h.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)h.sublayerIds=r.layerIds,h.tableIds=r.tableIds;else if(b){var p,L;h.layerOrTableId=null!=(p=r.layerIds[0])?p:r.tableIds[0],h.sourceJSON=null!=(L=r.layerInfos[0])?L:r.tableInfos[0]}}return h.Constructor=await async function(e){return(0,u.T[e])()}(w),h}(e.url,s),c={...e.properties,url:e.url};if(!y.sublayerIds)return null!=y.layerOrTableId&&(c.layerId=y.layerOrTableId,c.sourceJSON=y.sourceJSON),new y.Constructor(c);const b=new(0,(await r.e(5045).then(r.bind(r,85045))).default)({title:y.parsedUrl.title});return function(e,a,r){function n(e,n){const l={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,t.pC)(n)&&(l.sourceJSON=n),new a.Constructor(l)}a.sublayerIds.forEach((r=>{const t=n(r,o(a.sublayerInfos,r));e.add(t)})),a.tableIds.forEach((r=>{const t=n(r,o(a.tableInfos,r));e.tables.add(t)}))}(b,y,c),b}function o(e,a){return e?e.find((e=>e.id===a)):null}async function d(e,a,r){var t,n;let l,s=!1;if("FeatureServer"===a){const a=await async function(e,a){var r,t;let n=await f(e,a);n=n||{},n.layers=(null==(r=n.layers)?void 0:r.filter(c))||[];const l={serviceJSON:n};if(n.currentVersion<10.5)return l;const s=await f(e+"/layers",a);return l.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(c))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,r);s=!!a.layersJSON,l=a.layersJSON||a.serviceJSON}else l=await f(e,r);const i=null==(t=l)?void 0:t.layers,u=null==(n=l)?void 0:n.tables;return{layerIds:(null==i?void 0:i.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?i:[],tableInfos:s?u:[]}}function c(e){return!e.type||"Feature Layer"===e.type}async function f(e,a){return(await(0,s.default)(e,{responseType:"json",query:{f:"json",...a}})).data}},63308:(e,a,r)=>{"use strict";r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(2944).then(r.bind(r,2944))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(6733),r.e(3711)]).then(r.bind(r,73711))).default,CSVLayer:async()=>(await r.e(1039).then(r.bind(r,81039))).default,ElevationLayer:async()=>(await r.e(901).then(r.bind(r,60901))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,89307))).default,GroupLayer:async()=>(await r.e(5045).then(r.bind(r,85045))).default,GeoRSSLayer:async()=>(await r.e(8988).then(r.bind(r,65900))).default,ImageryLayer:async()=>(await Promise.all([r.e(8678),r.e(2061),r.e(2577),r.e(9459)]).then(r.bind(r,29459))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(8678),r.e(2061),r.e(2577),r.e(9166)]).then(r.bind(r,39166))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(6733),r.e(1930)]).then(r.bind(r,31930))).default,KMLLayer:async()=>(await r.e(476).then(r.bind(r,40476))).default,MapImageLayer:async()=>(await r.e(4736).then(r.bind(r,94736))).default,MapNotesLayer:async()=>(await r.e(88).then(r.bind(r,10088))).default,OpenStreetMapLayer:async()=>(await r.e(67).then(r.bind(r,60067))).default,PointCloudLayer:async()=>(await r.e(6097).then(r.bind(r,66097))).default,RouteLayer:async()=>(await r.e(5377).then(r.bind(r,5377))).default,SceneLayer:async()=>(await Promise.all([r.e(6733),r.e(3970)]).then(r.bind(r,43970))).default,StreamLayer:async()=>(await r.e(6214).then(r.bind(r,26214))).default,TileLayer:async()=>(await r.e(9655).then(r.bind(r,69655))).default,UnknownLayer:async()=>(await r.e(416).then(r.bind(r,80416))).default,UnsupportedLayer:async()=>(await r.e(8351).then(r.bind(r,38351))).default,VectorTileLayer:async()=>(await Promise.all([r.e(7889),r.e(5239)]).then(r.bind(r,76437))).default,WebTileLayer:async()=>(await r.e(5150).then(r.bind(r,55150))).default,WMSLayer:async()=>(await r.e(9717).then(r.bind(r,89717))).default,WMTSLayer:async()=>(await r.e(83).then(r.bind(r,80083))).default}}}]);