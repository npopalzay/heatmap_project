(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[9701],{69701:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ce});var i=r(87397),a=(r(1867),r(18029)),s=(r(9783),r(9385)),n=r(82203),o=r(73471),l=r(65482),u=r(29107),c=r(17593),p=(r(15392),r(11786),r(10114)),y=r(15982),d=r(58464),h=r(65869),f=r(41857),m=r(90102),b=r(23889),g=r(12031),S=r(83746),v=r(83374);let _=class extends v.Z{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};(0,i._)([(0,n.Cb)({type:g.Z})],_.prototype,"outSpatialReference",void 0),(0,i._)([(0,n.Cb)({type:S.Z})],_.prototype,"processExtent",void 0),(0,i._)([(0,n.Cb)({type:g.Z})],_.prototype,"processSpatialReference",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],_.prototype,"returnFeatureCollection",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],_.prototype,"returnM",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],_.prototype,"returnZ",void 0),_=(0,i._)([(0,l.j)("esri/rest/geoprocessor/GPOptions")],_),_.from=(0,s.se)(_);const w=_;var P=r(53557),O=r(42176),L=r(16450),J=r(60042),x=r(12377),M=r(49886);let N=class extends M.wq{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};(0,i._)([(0,n.Cb)({type:S.Z})],N.prototype,"extent",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"height",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"href",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"rotation",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"scale",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"visible",void 0),(0,i._)([(0,n.Cb)()],N.prototype,"width",void 0),N=(0,i._)([(0,l.j)("esri.layer.support.MapImage")],N);const C=N;let I=class extends M.wq{constructor(e){super(e),this.itemId=null,this.url=null}};(0,i._)([(0,n.Cb)({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],I.prototype,"itemId",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],I.prototype,"url",void 0),I=(0,i._)([(0,l.j)("esri.tasks.support.DataFile")],I);const D=I,G=new o.Xn({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let T=class extends M.wq{constructor(e){super(e),this.distance=0,this.units=null}};(0,i._)([(0,n.Cb)({json:{write:!0}})],T.prototype,"distance",void 0),(0,i._)([(0,n.Cb)({json:{read:G.read,write:G.write}})],T.prototype,"units",void 0),T=(0,i._)([(0,l.j)("esri/tasks/support/LinearUnit")],T);const V=T,F=new o.Xn({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let R=class extends M.wq{constructor(e){super(e),this.dataType=null,this.value=null}};(0,i._)([(0,n.Cb)({json:{read:F.read,write:F.write}})],R.prototype,"dataType",void 0),(0,i._)([(0,n.Cb)()],R.prototype,"value",void 0),R=(0,i._)([(0,l.j)("esri.tasks.support.ParameterValue")],R);const j=R;let k=class extends M.wq{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};(0,i._)([(0,n.Cb)()],k.prototype,"format",void 0),(0,i._)([(0,n.Cb)({json:{read:{source:"itemID"},write:{target:"itemID"}}})],k.prototype,"itemId",void 0),(0,i._)([(0,n.Cb)()],k.prototype,"url",void 0),k=(0,i._)([(0,l.j)("esri/tasks/support/RasterData")],k);const E=k;async function A(e,t,r,i,a){const s={},n={},o=[];return function(e,t,r){for(const i in e){const a=e[i];if(a&&"object"==typeof a&&a instanceof J.default){const{features:e}=a;r[i]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}}}(i,o,s),(0,O.aX)(o).then((o=>{const{outSpatialReference:l,processExtent:u,processSpatialReference:c,returnFeatureCollection:p,returnM:y,returnZ:d}=r,{path:f}=(0,x.en)(e);for(const e in s){const t=s[e];n[e]=o.slice(t[0],t[1])}const m=l?l.wkid||l:null,b=c?c.wkid||c:null,g="execute"===t?{returnFeatureCollection:p||void 0,returnM:y||void 0,returnZ:d||void 0}:null,S=Z({...u?{context:{extent:u,outSR:m,processSR:b}}:{"env:outSR":m,"env:processSR":b},...i,...g,f:"json"},null,n),v={...a,query:S};return(0,h.default)(`${f}/${t}`,v)}))}function U(e){const t=e.dataType,r=j.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=D.fromJSON(r.value);break;case"GPLinearUnit":r.value=V.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?D.fromJSON(r.value):J.default.fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?C.fromJSON(t):E.fromJSON(r.value);break}case"GPField":r.value=L.Z.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":r.value=r.value.map((e=>D.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map((e=>V.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map((e=>J.default.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map((e=>e?C.fromJSON(e):E.fromJSON(r.value)));break;case"GPMultiValue:GPField":r.value=r.value.map((e=>L.Z.fromJSON(e)))}return r}function Z(e,t,r){for(const t in e){const r=e[t];Array.isArray(r)?e[t]=JSON.stringify(r.map((e=>Z({item:e},!0).item))):r instanceof Date&&(e[t]=r.getTime())}return(0,x.cv)(e,t,r)}var q,z=r(14790);const $=new o.Xn({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let W=q=class extends M.wq{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:r}=this,{path:i}=(0,x.en)(r),a={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),(0,h.default)(`${i}/jobs/${t}/cancel`,a).then((e=>{const t=q.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=(0,x.en)(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},i=`${t}/jobs/${this.jobId}`;return(0,h.default)(i,r).then((({data:e})=>{const t=q.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,t,r){t=w.from(t);const{returnFeatureCollection:i,returnM:a,returnZ:s,outSpatialReference:n}=t,{path:o}=(0,x.en)(this.sourceUrl),l=Z({returnFeatureCollection:i||void 0,returnM:a||void 0,returnZ:s||void 0,outSR:n,returnType:"data",f:"json"},null),u={...this.requestOptions,...r,query:l},c=`${o}/jobs/${this.jobId}/results/${e}`;return(0,h.default)(c,u).then((e=>U(e.data)))}fetchResultImage(e,t,r){const{path:i}=(0,x.en)(this.sourceUrl),a=Z({...t.toJSON(),f:"json"}),s={...this.requestOptions,...r,query:a},n=`${i}/jobs/${this.jobId}/results/${e}`;return(0,h.default)(n,s).then((e=>U(e.data)))}async fetchResultMapImageLayer(){const{path:e}=(0,x.en)(this.sourceUrl),t=e.indexOf("/GPServer/"),i=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await r.e(4736).then(r.bind(r,94736))).default)({url:i})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:r,statusCallback:i}=e;return new Promise(((e,a)=>{(0,z.fu)(r,(()=>{this._clearTimer(),a((0,z.zE)())})),this._clearTimer();const s=setInterval((()=>{this._timer||a((0,z.zE)()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":i&&i(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this)}}))}),t);this._timer=s}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};(0,i._)([(0,n.Cb)()],W.prototype,"jobId",void 0),(0,i._)([(0,n.Cb)({json:{read:$.read}})],W.prototype,"jobStatus",void 0),(0,i._)([(0,n.Cb)({type:[P.Z]})],W.prototype,"messages",void 0),(0,i._)([(0,n.Cb)()],W.prototype,"requestOptions",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],W.prototype,"sourceUrl",void 0),W=q=(0,i._)([(0,l.j)("esri.tasks.support.JobInfo")],W);const B=W;let X=class extends b.Z{constructor(e){super(e),this._jobs=new Map,this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}destroy(){this._jobs.forEach((e=>e.destroy())),this._jobs.clear()}cancelJob(e,t){const r=this._jobs.get(e),i={...this.requestOptions,...t};return r.cancelJob(i)}checkJobStatus(e,t){const r=this._jobs.get(e),i={...this.requestOptions,...t};return r.checkJobStatus(i)}execute(e,t){const r=new w({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),i={...this.requestOptions,...t};return async function(e,t,r,i){return A(e,"execute",r=w.from(r),t,i).then((e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(U),messages:r.map((e=>P.Z.fromJSON(e)))}}))}(this.url,e,r,i)}getResultData(e,t,r){const i=this._jobs.get(e),{returnFeatureCollection:a,returnM:s,returnZ:n,outSpatialReference:o}=this,l=new w({returnFeatureCollection:a,returnM:s,returnZ:n,outSpatialReference:o,url:this.url}),u={...this.requestOptions,...r};return i.fetchResultData(t,l,u)}getResultImage(e,t,r,i){const a=this._jobs.get(e),s={...this.requestOptions,...i};return a.fetchResultImage(t,r,s)}async getResultMapImageLayer(e){return this._jobs.get(e).fetchResultMapImageLayer()}submitJob(e,t){const r=new w({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),i={...this.requestOptions,...t};return async function(e,t,r,i){return r=w.from(r),A(e,"submitJob",r,t,i).then((t=>{const r=B.fromJSON(t.data);return r.sourceUrl=e,r}))}(this.url,e,r,i).then((e=>(e.sourceUrl=this.url,this._jobs.set(e.jobId,e),e)))}waitForJobCompletion(e,t={}){return this._jobs.get(e).waitForJobCompletion(t)}};(0,i._)([(0,n.Cb)({type:g.Z})],X.prototype,"outSpatialReference",void 0),(0,i._)([(0,n.Cb)({type:S.Z})],X.prototype,"processExtent",void 0),(0,i._)([(0,n.Cb)({type:g.Z})],X.prototype,"processSpatialReference",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],X.prototype,"returnFeatureCollection",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],X.prototype,"returnM",void 0),(0,i._)([(0,n.Cb)({nonNullable:!0})],X.prototype,"returnZ",void 0),X=(0,i._)([(0,l.j)("esri/tasks/Geoprocessor")],X);const K=X,Q=new o.Xn({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),Y=(Q.fromJSON.bind(Q),Q.toJSON.bind(Q)),H=new o.Xn({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),ee=(H.fromJSON.bind(H),H.toJSON.bind(H)),te="simple-marker",re="simple-line";function ie(e,t){const{graphic:r,renderer:i,symbol:a}=t,s=a.type;if("text"===s||"shield-label-symbol"===s||!("visualVariables"in i)||!i.visualVariables)return;const n=i.getVisualVariablesForType("size"),o=i.getVisualVariablesForType("color"),l=i.getVisualVariablesForType("opacity"),u=i.getVisualVariablesForType("rotation"),c=n&&n[0],p=o&&o[0],d=l&&l[0],h=u&&u[0];if(c){const t=s===te?a.style:null,i=(0,f.getSize)(c,r,{shape:t});null!=i&&(s===te?e.size=(0,y.Wz)(i):"picture-marker"===s?(e.width=(0,y.Wz)(i),e.height=(0,y.Wz)(i)):s===re?e.width=(0,y.Wz)(i):e.outline&&(e.outline.width=(0,y.Wz)(i)))}if(p){const t=(0,f.getColor)(p,r);(t&&s===te||s===re||"simple-fill"===s)&&(e.color=t?t.toJSON():void 0)}if(d){const t=(0,f.getOpacity)(d,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}h&&(e.angle=-(0,f.getRotationAngle)(i,r))}function ae(e){return e&&"bing-maps"===e.type}function se(e){return e&&"csv"===e.type}function ne(e){return e&&"feature"===e.type}function oe(e){return e&&"geojson"===e.type}function le(e){return e&&"graphics"===e.type}function ue(e){return e&&"group"===e.type}function ce(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function pe(e){return e&&"imagery"===e.type}function ye(e){return e&&"kml"===e.type}function de(e){return e&&"map-image"===e.type}function he(e){return e&&"map-notes"===e.type}function fe(e){return e&&"open-street-map"===e.type}function me(e){return e&&"stream"===e.type}function be(e){return e&&"tile"===e.type}function ge(e){return e&&"vector-tile"===e.type}function Se(e){return e&&"web-tile"===e.type}function ve(e){return e&&"wms"===e.type}function _e(e){return e&&"wmts"===e.type}let we=class extends v.Z{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};(0,i._)([(0,n.Cb)()],we.prototype,"attributionVisible",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"exportOptions",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"forceFeatureAttributes",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"format",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"label",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"layout",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"layoutOptions",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"outScale",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"scalePreserved",void 0),(0,i._)([(0,n.Cb)()],we.prototype,"showLabels",void 0),we=(0,i._)([(0,l.j)("esri.tasks.support.PrintTemplate")],we);const Pe=we,Oe={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Le=new o.Xn({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Je=new o.Xn({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),xe=new m.Z({returnGeometry:!0});function Me(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}let Ne=class extends b.Z{constructor(...e){super(...e),this._ssExtent=null,this._legendLayers=[],this._legendLayerNameMap={},this._gpServerUrl=null,this._cimVersion=null,this._is11xService=!1,this._gpMetadata=null,this.updateDelay=1e3}get _geoprocessor(){return new K({url:this.url})}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?Je.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){let r=this.url;const i=r.lastIndexOf("/GPServer/");return i>0&&(r=r.slice(0,i+9)),Promise.resolve().then((()=>this._gpServerUrl===r?{data:this._gpMetadata}:(this._gpServerUrl=r,(0,h.default)(r,{query:{f:"json"}})))).then((t=>(this._gpMetadata=t.data,this._cimVersion=this._gpMetadata.cimVersion,this._is11xService=!!this._cimVersion,this._getGpPrintParams(e)))).then((e=>{const r=e=>"sync"===this.mode?e.results&&e.results[0]&&e.results[0].value:this._geoprocessor.getResultData(e.jobId,"Output_File",t).then((e=>e.value));return"async"===this.mode?this._geoprocessor.submitJob(e,t).then((e=>this._geoprocessor.waitForJobCompletion(e.jobId,{interval:this.updateDelay}).then(r))):this._geoprocessor.execute(e,t).then(r)}))}async _createOperationalLayers(e,t){const r=[],i={layerView:null,printTemplate:t,view:e};let a=0;t.scalePreserved&&(a=t.outScale||e.scale);const s=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const i=new Array;for(const e of r)ce(e.parent)&&!i.includes(e.parent)||!e.visible||t&&"isVisibleAtScale"in e&&!e.isVisibleAtScale(t)||i.push(e);return i}(e,a);for(const e of s){const t=e.layer;if(!t.loaded||ue(t))continue;let a;i.layerView=e,a=ae(t)?this._createBingMapsLayerJSON(t):se(t)?await this._createCSVLayerJSON(t,i):ne(t)?await this._createFeatureLayerJSON(t,i):oe(t)?await this._createGeoJSONLayer(t,i):le(t)?await this._createGraphicsLayerJSON(t,i):pe(t)?this._createImageryLayerJSON(t):ye(t)?await this._createKMLLayerJSON(t,i):de(t)?this._createMapImageLayerJSON(t,i):he(t)?await this._createMapNotesLayerJSON(i):fe(t)?this._createOpenStreetMapLayerJSON():me(t)?await this._createStreamLayerJSON(t,i):be(t)?this._createTileLayerJSON(t):ge(t)?await this._createVectorTileLayerJSON(t,i):Se(t)?this._createWebTileLayerJSON(t):ve(t)?this._createWMSLayerJSON(t):_e(t)?this._createWMTSLayerJSON(t):await this._createScreenshotJSON(t,i),a&&(Array.isArray(a)?r.push(...a):(a.id=t.id,a.title=this._legendLayerNameMap[t.id]||t.title,a.opacity=t.opacity,a.minScale=t.minScale||0,a.maxScale=t.maxScale||0,r.push(a)))}if(a&&r.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const i=await this._createFeatureCollectionJSON(null,e.graphics,t);i&&r.push(i)}return r}_createBingMapsLayerJSON(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async _createCSVLayerJSON(e,{layerView:t,printTemplate:r}){let i;if(this._legendLayers&&this._legendLayers.push({id:e.id}),!this._is11xService){const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}return i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=r.showLabels&&e.labelsVisible,i}async _createFeatureCollectionJSON(e,t,r){let i;const a={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},n={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},o={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},l={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?a.layerDefinition.name=s.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=this._legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();a.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,c;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(c=u.drawingInfo)?void 0:c.labelingInfo;t&&(i=!0,a.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let y;null!=e&&e.renderer||i||(delete a.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const d=e&&e.fields,h=e&&e.renderer;if(d&&h&&"function"==typeof h.collectRequiredFields){const e=new Set;await h.collectRequiredFields(e,d),y=Array.from(e)}if(d){const e=d.map((e=>e.toJSON()));a.layerDefinition.fields=e,s.layerDefinition.fields=e,n.layerDefinition.fields=e,o.layerDefinition.fields=e}const f=t&&t.length;let m;for(let i=0;i<f;i++){const u=t[i]||t.getItemAt(i);if(!1===u.visible||!u.geometry)continue;if(m=u.toJSON(),m.hasOwnProperty("popupTemplate")&&delete m.popupTemplate,m.geometry&&m.geometry.z&&delete m.geometry.z,m.symbol&&m.symbol.outline&&"esriCLS"===m.symbol.outline.type&&!this._is11xService)continue;!this._is11xService&&m.symbol&&m.symbol.outline&&m.symbol.outline.color&&m.symbol.outline.color[3]&&(m.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!m.symbol&&e&&e.renderer&&c&&!this._is11xService){const t=e.renderer,r=await t.getSymbolAsync(u);if(!r)continue;m.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&ie(m.symbol,{renderer:t,graphic:u,symbol:r})}if(m.symbol&&(m.symbol.angle||delete m.symbol.angle,Me(m.symbol)?m.symbol=await this._convertSvgToPictureMarkerSymbolJson(m.symbol):m.symbol.text&&delete m.attributes),(!r||!r.forceFeatureAttributes)&&y&&y.length){const e={};y.forEach((t=>{m.attributes&&m.attributes.hasOwnProperty(t)&&(e[t]=m.attributes[t])})),m.attributes=e}"polygon"===u.geometry.type?a.featureSet.features.push(m):"polyline"===u.geometry.type?s.featureSet.features.push(m):"point"===u.geometry.type?m.symbol&&m.symbol.text?l.featureSet.features.push(m):n.featureSet.features.push(m):"multipoint"===u.geometry.type?o.featureSet.features.push(m):"extent"===u.geometry.type&&(m.geometry=p.Z.fromExtent(u.geometry).toJSON(),a.featureSet.features.push(m))}const b=[a,s,o,n,l].filter((e=>e.featureSet.features.length>0));for(const e of b){const t=e.featureSet.features.every((e=>e.symbol));!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach((e=>{delete e.attributes})),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&await this._convertSvgRenderer(e.layerDefinition.drawingInfo.renderer)}return b.length?{featureCollection:{layers:b},showLabels:i}:null}async _createFeatureLayerJSON(e,t){var r,i;let a;this._legendLayers&&this._legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!this._is11xService||parseFloat(this._cimVersion)<2.6))return this._createScreenshotJSON(e,t);const{layerView:n,printTemplate:o,view:l}=t,u=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),c="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!this._is11xService&&u||e.featureReduction||c||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await this._getGraphics(n);a=await this._createFeatureCollectionJSON(e,t,o)}else{var p,y;if(a={id:(d=e.write()).id,title:d.title,opacity:d.opacity,minScale:d.minScale,maxScale:d.maxScale,url:d.url,layerDefinition:d.layerDefinition},a.showLabels=o.showLabels&&e.labelsVisible,this._setURLandToken(a,e),null!=(p=a.layerDefinition)&&null!=(y=p.drawingInfo)&&y.renderer&&(delete a.layerDefinition.minScale,delete a.layerDefinition.maxScale,await this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=(0,f.getSizeRangeAtScale)(e,l.scale);a.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,a.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var d;return a}async _createGeoJSONLayer(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}async _createGraphicsLayerJSON(e,{printTemplate:t}){return this._createFeatureCollectionJSON(e,null,t)}_createImageryLayerJSON(e){this._legendLayers&&this._legendLayers.push({id:e.id});const t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t}async _createKMLLayerJSON(e,t){const r=t.printTemplate;if(this._is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=(0,c.Fv)(e.url),t}{const i=[],a=t.layerView;a.allVisibleMapImages.forEach(((t,r)=>{const a={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?a.imageData=t.href.substr(22):a.url=t.href,i.push(a)}));const s=[...a.allVisiblePoints.items,...a.allVisiblePolylines.items,...a.allVisiblePolygons.items],n={id:e.id,...await this._createFeatureCollectionJSON(null,s,r)};return i.push(n),i}}_createMapImageLayerJSON(e,{view:t}){let r;const i={id:e.id,subLayerIds:[]};let a=[];const s=t.scale,n=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,o=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&o))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};a.unshift(r),i.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(n),a.length&&(a=a.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),r={layers:a,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(i)),r}async _createMapNotesLayerJSON({layerView:e,printTemplate:t}){const r=[],i=e.layer;if((0,a.pC)(i.featureCollections))for(const e of i.featureCollections){const i=await this._createFeatureCollectionJSON(e,e.source,t);i&&r.push(...i.featureCollection.layers)}else if((0,a.pC)(i.sublayers))for(const e of i.sublayers){const i=await this._createFeatureCollectionJSON(null,e.graphics,t);i&&r.push(...i.featureCollection.layers)}return{featureCollection:{layers:r}}}_createOpenStreetMapLayerJSON(){return{type:"OpenStreetMap"}}async _createScreenshotJSON(e,{printTemplate:t,view:r}){const i={type:"image"},a={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=this._ssExtent||r.extent.clone();let n=96,o=!0,l=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(n=e.dpi),e.width>0&&(o=e.width%2==r.width%2),e.height>0&&(l=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===n&&(!o||!l)&&(a.area={x:0,y:0,width:r.width,height:r.height},o||(a.area.width-=1),l||(a.area.height-=1),!this._ssExtent)){const e=r.toMap((0,y.vW)(a.area.width,a.area.height));s.ymin=e.y,s.xmax=e.x,this._ssExtent=s}i.extent=s.clone()._normalize(!0).toJSON();const u=await r.takeScreenshot(a),p=(0,c.sJ)(u.dataUrl);return i.imageData=p.data,i}async _createStreamLayerJSON(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}_createTileLayerJSON(e){const t={customParameters:e.customParameters};return this._setURLandToken(t,e),t}async _createVectorTileLayerJSON(e,t){if(this._is11xService&&e.serviceUrl&&e.styleUrl){const t=d.id&&d.id.findCredential(e.styleUrl),r=d.id&&d.id.findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==this._cimVersion){const i={type:"VectorTileLayer"};return i.styleUrl=(0,c.Fv)(e.styleUrl),t&&(i.token=t.token),r&&r.token!==i.token&&(i.additionalTokens=[{url:e.serviceUrl,token:r.token}]),i}}return this._createScreenshotJSON(e,t)}_createWebTileLayerJSON(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}_createWMSLayerJSON(e){let t;const r=[],i=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(i):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(i),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:(0,c.Fv)(e.url),version:e.version}),t}_createWMTSLayerJSON(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:(0,c.Fv)(e.url)}}_setURLandToken(e,t){var r;if(!t.url)return;e.url=(0,c.Fv)(e.url||t.url);const i=null==(r=d.id)?void 0:r.findCredential(t.url);i&&(e.token=i.token)}async _convertSvgToPictureMarkerSymbolJson(e){this._canvas||(this._canvas=document.createElement("canvas"));const t=1024;this._canvas.width=t,this._canvas.height=t;const r=this._canvas.getContext("2d");let i,a;if(e.path){var s;const n=new Path2D(e.path);n.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(n);const o=function(e,t=15){const r=e.canvas.width,i=e.canvas.height,a=e.getImageData(0,0,r,i).data;let s,n,o,l,u,c;e:for(n=i;n--;)for(s=r;s--;)if(a[4*(r*n+s)+3]>t){c=n;break e}if(!c)return null;e:for(s=r;s--;)for(n=c+1;n--;)if(a[4*(r*n+s)+3]>t){u=s;break e}e:for(s=0;s<=u;++s)for(n=c+1;n--;)if(a[4*(r*n+s)+3]>t){o=s;break e}e:for(n=0;n<=c;++n)for(s=o;s<=u;++s)if(a[4*(r*n+s)+3]>t){l=n;break e}return{x:o,y:l,width:u-o,height:c-l}}(r);if(!o)return null;r.clearRect(0,0,t,t);const l=(0,y.F2)(e.size)/Math.max(o.width,o.height);r.scale(l,l);const u=t/l,c=u/2-o.width/2-o.x,p=u/2-o.height/2-o.y;if(r.translate(c,p),Array.isArray(e.color)&&r.fill(n),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const t=e.outline;r.lineWidth=(0,y.F2)(t.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${t.color[0]},${t.color[1]},${t.color[2]},${t.color[3]/255})`,r.stroke(n),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const d=r.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));i=d.width,a=d.height,r.canvas.width=i,r.canvas.height=a,r.putImageData(d,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await(0,h.default)(t,{responseType:"image"})).data;i=(0,y.F2)(e.width),a=(0,y.F2)(e.height),r.canvas.width=i,r.canvas.height=a,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:(0,y.Wz)(a),width:(0,y.Wz)(i),xoffset:e.xoffset,yoffset:e.yoffset}}async _convertSvgRenderer(e){const t=e.type;if("simple"===t&&Me(e.symbol))e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("uniqueValue"===t||"classBreaks"===t){Me(e.defaultSymbol)&&(e.defaultSymbol=await this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));const r=e["uniqueValue"===t?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Me(e.symbol)&&(e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol))}}_getGraphics(e){return e.queryFeatures(xe).then((e=>e.features))}async _getPrintDefinition(e,t){const r=e.view;let i=r.spatialReference;const a={operationalLayers:await this._createOperationalLayers(r,t)};let s=this._ssExtent||e.extent||r.extent;return i&&i.isWrappable&&(s=s.clone()._normalize(!0),i=s.spatialReference),a.mapOptions={extent:s&&s.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.background&&(a.background=r.background.toJSON()),r.rotation&&(a.mapOptions.rotation=-r.rotation),t.scalePreserved&&(a.mapOptions.scale=t.outScale||r.scale),a}async _getGpPrintParams(e){const t=e.template||new Pe;null==t.showLabels&&(t.showLabels=!0);const r=t.exportOptions;let i;const a=ee(t.layout);if(r&&(i={dpi:r.dpi},"map_only"===a.toLowerCase()||""===a)){const e=r.width,t=r.height;i.outputSize=[e,t]}const s=t.layoutOptions;let n;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),n={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Le.toJSON(e),metricLabel:Oe[e],nonMetricUnit:Le.toJSON(t),nonMetricLabel:Oe[t]}}}let o=null;s&&s.legendLayers&&(o=s.legendLayers.map((e=>{this._legendLayerNameMap[e.layerId]=e.title;const t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t})));const l=await this._getPrintDefinition(e,t);if(l.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,r=r=>{const i=r.text,a=r.font,s=a&&a.family&&a.family.toLowerCase();i&&a&&("arial"===s||"arial unicode ms"===s)&&(a.family=e.test(i)?"Arial Unicode MS":"Arial","normal"!==a.style&&t.test(i)&&(a.family="Arial Unicode MS"))},i=()=>{throw new u.Z("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};l.operationalLayers.forEach((e=>{var t,a,s;null!=(t=e.featureCollection)&&t.layers?e.featureCollection.layers.forEach((e=>{var t,a,s,n;if(null!=(t=e.layerDefinition)&&null!=(a=t.drawingInfo)&&null!=(s=a.renderer)&&s.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?r(t.symbol):"CIMSymbolReference"!==t.symbol.type||this._is11xService||i()}null!=(n=e.featureSet)&&n.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||this._is11xService||i())}))})):!this._is11xService&&null!=(a=e.layerDefinition)&&null!=(s=a.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()}))}e.outSpatialReference&&(l.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(l,{exportOptions:i,layoutOptions:n||{}}),Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:null!=o?o:this._legendLayers.slice()}}),this._legendLayers.length=0;const c={Web_Map_as_JSON:JSON.stringify(l),Format:Y(t.format),Layout_Template:a};return e.extraParameters&&Object.assign(c,e.extraParameters),c}};(0,i._)([(0,n.Cb)()],Ne.prototype,"_geoprocessor",null),(0,i._)([(0,n.Cb)()],Ne.prototype,"_gpMetadata",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],Ne.prototype,"mode",null),(0,i._)([(0,n.Cb)()],Ne.prototype,"updateDelay",void 0),Ne=(0,i._)([(0,l.j)("esri.tasks.PrintTask")],Ne);const Ce=Ne},53557:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(87397),a=(r(1867),r(9783),r(9385),r(82203)),s=r(73471),n=r(65482),o=(r(17593),r(15392),r(11786),r(49886));const l=new s.Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let u=class extends o.wq{constructor(e){super(e),this.description=null,this.type=null}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,i._)([(0,n.j)("esri.tasks.support.GPMessage")],u);const c=u}}]);