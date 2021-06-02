(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[2933,9737],{92933:(e,a,r)=>{"use strict";r.r(a),r.d(a,{populateOperationalLayers:()=>d}),r(1867);var t=r(14790),n=r(50519),y=r(88143),i=r(70494),l=r(63308),c=r(69290);function s(e,a){return u(e,a,"notes","Map Notes")}function o(e,a){return u(e,a,"route","Route Layer")}async function u(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new y.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&(0,c._$)(r,t)}return!1}var L=r(69737);async function d(e,a,r){if(!a)return;const n=[];for(const e of a){const a=g(e,r);"GroupLayer"===e.layerType?n.push(b(a,e,r)):n.push(a)}const y=await(0,t.as)(n);for(const a of y)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},f={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function g(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await async function(e,a,r){const t=l.T.FeatureLayer,n=await t(),y=a.featureCollection,i=y.showLegend,c=y.layers.map((e=>{const a=new n;return a.read(e,r),null!=i&&a.read({showLegend:i},r),a}));e.layers.addMany(c)}(t,a,r.context),await(0,i.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=M(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const i=t[n];let c=i?l.T[i]:l.T.UnknownLayer;const u=r&&r.portal;if(h(e)){if(e.itemId){const a=new y.default({id:e.itemId,portal:u});await a.load();const r=(await(0,L.selectLayerClassPath)(a)).className||"UnknownLayer";c=l.T[r]}}else"ArcGISFeatureLayer"===n&&(await s(e,u)?c=l.T.MapNotesLayer:await o(e,u)?c=l.T.RouteLayer:w(e)&&(c=l.T.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=l.T.WMTSLayer),c()}(e,a),e,a)}function w(e){if("ArcGISFeatureLayer"!==e.layerType||h(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function h(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=S;break;case"ground":a=f;break;default:a=p}break;default:switch(e.layerContainerType){case"basemap":a=T;break;case"tables":a=I;break;default:a=m}}return a}async function b(e,a,r){const t=new n.Z,y=d(t,Array.isArray(a.layers)?a.layers:[],r),i=await e;if(await y,"group"===i.type)return i.layers.addMany(t),i}},63308:(e,a,r)=>{"use strict";r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(2944).then(r.bind(r,2944))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(6733),r.e(3711)]).then(r.bind(r,73711))).default,CSVLayer:async()=>(await r.e(1039).then(r.bind(r,81039))).default,ElevationLayer:async()=>(await r.e(901).then(r.bind(r,60901))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,89307))).default,GroupLayer:async()=>(await r.e(5045).then(r.bind(r,85045))).default,GeoRSSLayer:async()=>(await r.e(8988).then(r.bind(r,65900))).default,ImageryLayer:async()=>(await Promise.all([r.e(8678),r.e(2061),r.e(2577),r.e(9459)]).then(r.bind(r,29459))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(8678),r.e(2061),r.e(2577),r.e(9166)]).then(r.bind(r,39166))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(6733),r.e(1930)]).then(r.bind(r,31930))).default,KMLLayer:async()=>(await r.e(476).then(r.bind(r,40476))).default,MapImageLayer:async()=>(await r.e(4736).then(r.bind(r,94736))).default,MapNotesLayer:async()=>(await r.e(88).then(r.bind(r,10088))).default,OpenStreetMapLayer:async()=>(await r.e(67).then(r.bind(r,60067))).default,PointCloudLayer:async()=>(await r.e(6097).then(r.bind(r,66097))).default,RouteLayer:async()=>(await r.e(5377).then(r.bind(r,5377))).default,SceneLayer:async()=>(await Promise.all([r.e(6733),r.e(3970)]).then(r.bind(r,43970))).default,StreamLayer:async()=>(await r.e(6214).then(r.bind(r,26214))).default,TileLayer:async()=>(await r.e(9655).then(r.bind(r,69655))).default,UnknownLayer:async()=>(await r.e(416).then(r.bind(r,80416))).default,UnsupportedLayer:async()=>(await r.e(8351).then(r.bind(r,38351))).default,VectorTileLayer:async()=>(await Promise.all([r.e(7889),r.e(5239)]).then(r.bind(r,76437))).default,WebTileLayer:async()=>(await r.e(5150).then(r.bind(r,55150))).default,WMSLayer:async()=>(await r.e(9717).then(r.bind(r,89717))).default,WMTSLayer:async()=>(await r.e(83).then(r.bind(r,80083))).default}},69290:(e,a,r)=>{"use strict";function t(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}r.d(a,{_$:()=>t})},69737:(e,a,r)=>{"use strict";r.r(a),r.d(a,{fromItem:()=>s,selectLayerClassPath:()=>o});var t=r(18029),n=r(29107),y=r(65869),i=r(88143),l=r(69290),c=r(63308);function s(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(o).then(u)}(e.portalItem).then((a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))}))}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return S(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return L(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),(0,l._$)(e,"Map Notes")?{className:"MapNotesLayer"}:(0,l._$)(e,"Route Layer")?{className:"RouteLayer"}:1===f(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then((a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return S(t).then((e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const y=await e.fetchData(),i=null==y?void 0:y.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(t=(await S(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new n.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return(0,c.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((a=>f(a)>0?d(a):S(e.url).then(d)))}function d(e){return 1===f(e)&&{id:(0,t.Wg)(p(e))}}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function f(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function S(e){return(0,y.default)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}}}]);