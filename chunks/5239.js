(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[5239],{76437:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>V});var r=i(87397),l=i(86530),s=(i(1867),i(31641)),o=i(9783),a=(i(9385),i(82203)),n=i(23757),c=i(65482),h=i(17808),u=i(29107),p=i(17593),y=(i(15392),i(11786),i(14790)),d=i(12031),m=i(83746),f=i(65869),v=i(71604),g=i(47596),_=i(4425),S=i(83320),A=i(17398),b=i(80157),w=i(17060),x=i(47449),C=i(28384),T=i(85564);const U=o.Z.getLogger("esri.layers.support.SpriteSource"),I=class{constructor(e,t,i,r){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=i,this._spriteImageFormat=r,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=(0,p.mN)(this.baseURL),i=t.query?"?"+(0,p.B7)(t.query):"",r=this._isRetina?"@2x":"",l=`${t.path}${r}.${this._spriteImageFormat}${i}`,s=`${t.path}${r}.json${i}`;return Promise.all([(0,f.default)(s,e),(0,f.default)(l,{responseType:"image",...e})]).then((([e,i])=>{const r=Object.keys(e.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=e.data;const l=i.data,s=Math.max(this.maxTextureSize,4096);if(l.width>s||l.height>s){const e=`Sprite resource for style ${t.path} is bigger than the maximum allowed of ${s} pixels}`;throw U.error(e),new u.Z("SpriteSource",e)}this.width=l.width,this.height=l.height;const o=document.createElement("canvas"),a=o.getContext("2d");o.width=l.width,o.height=l.height,a.drawImage(l,0,0,l.width,l.height);const n=a.getImageData(0,0,l.width,l.height),c=new Uint8Array(n.data);let h;for(let e=0;e<c.length;e+=4)h=c[e+3]/255,c[e]=c[e]*h,c[e+1]=c[e+1]*h,c[e+2]=c[e+2]*h;this.image=c}))}};var P=i(18575),R=i(70977),O=i(14361);const L=P.Z.defaults&&P.Z.defaults.io.corsEnabledServers;function D(e){if(!e)return;const t=(0,p.P$)(e);L&&-1===L.indexOf(t)&&L.push(t)}function N(...e){let t;for(let i=0;i<e.length;++i)if((0,p.oC)(e[i])){if(t){const r=t.split("://")[0];t=r+":"+e[i].trim()}}else t=(0,p.YP)(e[i])?e[i]:(0,p.v_)(t,e[i]);return(0,p.Qj)(t)}async function z(e,t,i,r,l){let s,o,a;if((0,y.k_)(l),"string"==typeof i){const e=(0,p.Fv)(i);D(e);const t=(0,p.mN)(e);a=await(0,f.default)(t.path,{query:{f:"json"},responseType:"json",...l}),s=e,o=e}else a={data:i},s=i.jsonUrl||null,o=r;const n=a.data;return a.ssl&&(s&&(s=s.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),E(n)?(e.styleUrl=s||null,async function(e,t,i,r){const l=i?(0,p.Yd)(i):p.AX;e.styleBase=l,e.style=t,e.styleUrl&&D(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const s=[];if(t.sources&&t.sources.esri){const i=t.sources.esri;i.url?await z(e,"esri",N(l,i.url),void 0,r):s.push(z(e,"esri",i,l,r))}for(const i of Object.keys(t.sources))"esri"!==i&&"vector"===t.sources[i].type&&(t.sources[i].url?s.push(z(e,i,N(l,t.sources[i].url),void 0,r)):t.sources[i].tiles&&s.push(z(e,i,t.sources[i],l,r)));await Promise.all(s)}(e,n,o,l)):function(e){return!E(e)}(n)?e.sourceUrl?Z(e,n,o,!1,t,l):(e.sourceUrl=s||null,Z(e,n,o,!0,t,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function E(e){return!!e.sources}async function Z(e,t,i,r,l,o){const a=i?(0,p.Qj)(i)+"/":p.AX,n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const i={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let r=78271.51696400007,l=295828763.7957775;const s=[],o=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,a=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=a;e++)e>=o&&s.push({level:e,scale:l,resolution:r}),r/=2,l/=2;for(const i of e.tiles)D(N(t,i));return{capabilities:"TilesOnly",initialExtent:i,fullExtent:i,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:s,spatialReference:{wkid:102100}}}}(t,a),c=new class{constructor(e,t,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=(0,p.mN)(this.sourceUrl));const r=this.parsedUrl.path,l=this.parsedUrl.query?"?"+(0,p.B7)(this.parsedUrl.query):"",o=(0,s.d9)(i),a=o.tiles;t&&a.forEach(((e,t)=>{(0,p.YP)(e)||(a[t]=(0,p.v_)(r,e)+l)})),this.tileServers=a,i.tileMap&&(this.tileMapURL=(0,p.v_)(t,i.tileMap));const n=i.capabilities&&i.capabilities.split(",").map((e=>e.toLowerCase().trim())),c=!!i.exportTilesAllowed,h=!!n&&-1!==n.indexOf("tilemap"),u=c&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:h},exportTiles:c?{maxExportTilesCount:+u}:null},this.tileInfo=(0,R.d)(o.tileInfo,o,null,{ignoreMinMaxLOD:!0}),h&&(this.type="vector-tile",this.tilemapCache=new C.y({layer:this}),this.tilemapCache&&(this.tileIndex=new O.Z(this.tilemapCache))),this.fullExtent=m.Z.fromJSON(i.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const r=t.lods,l=i.lods,s=Math.min(r.length,l.length);for(let e=0;e<s;e++){const t=r[e],i=l[e];if(t.level!==i.level||Math.round(t.scale)!==Math.round(i.scale))return!1}return!0}}(l,a,n);if(!r&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(c))return Promise.resolve();null!=c.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(c.fullExtent):t.fullExtent=c.fullExtent.clone()),t.tileInfo.lods.length<c.tileInfo.lods.length&&(t.tileInfo=c.tileInfo)}if(r?(e.sourceBase=a,e.source=t,e.validatedSource=n,e.primarySourceName=l,e.sourceUrl&&D(e.sourceUrl)):D(a),e.sourceNameToSource[l]=c,!e.style)return null==t.defaultStyles?Promise.reject():"string"==typeof t.defaultStyles?z(e,"",N(a,t.defaultStyles,"root.json"),void 0,o):z(e,"",t.defaultStyles,N(a,"root.json"),o)}var M=i(38984),j=i(85789);const $=class{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let i=0,r=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(i=t),e[1]%2&&(r=t)),[i,r]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,i=[],r=e.lods.length;for(let l=0;l<r;l++){const r=e.lods[l],s=t?r.resolution:2*r.resolution;i.push(new j.Z({level:r.level,scale:r.scale,resolution:s}))}return new x.Z({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],i=e.lods.length;for(let r=0;r<i;r++){const i=e.lods[r],l=.5*i.resolution;t.push(new j.Z({level:i.level,scale:i.scale,resolution:l}))}return new x.Z({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}},B=1e-6;function k(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const i=e.origin,r=t.origin;if(Math.abs(i.x-r.x)>=B||Math.abs(i.y-r.y)>=B)return!1;let l,s;e.lods[0].scale>t.lods[0].scale?(l=e,s=t):(s=e,l=t);for(let e=l.lods[0].scale;e>=s.lods[s.lods.length-1].scale-B;e/=2)if(Math.abs(e-s.lods[0].scale)<B)return!0;return!1}function q(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const i=e.size[0],r=e.format,l=e.dpi,s={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=a.scale,h=a.resolution,u=n.scale,p=[];let y=c,d=h,m=0;for(;y>u;)p.push({level:m,resolution:d,scale:y}),m++,y/=2,d/=2;return new x.Z({size:[i,i],dpi:l,format:r||"pbf",origin:s,lods:p,spatialReference:o})}var Q=i(7889),F=i(47282);let J=class extends((0,A.h)((0,w.M)((0,T.Z)((0,S.Y)((0,_.q)((0,b.I)((0,g.R)(v.Z)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(l.Z.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await(0,f.default)(t,{...e,query:{f:"json"}})).data&&this.read({url:t},(0,M.m)(this.portalItem))})).then((()=>this._loadStyle(e)),(()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&(0,p.mN)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?(0,p.mN)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&(0,p.oC)(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let i=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new x.Z;if(t.length>1)for(let e=0;e<t.length;e++)k(i,t[e].tileInfo)&&(i=q(i,t[e].tileInfo));return i}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return $.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return $.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const i=(0,F.Z)(),r=new I(this.styleRepository.sprite,e,i.maxTextureSize,this.currentStyleInfo.spriteFormat);await r.load(t),this._spriteSourceMap.set(e,r)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const i=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof i&&this.url===i&&!(0,y.Hc)(this._abortController))return this._loadingPromise;const r=this._abortController;r&&r.abort();const l=(0,y.yi)();return this._loadingPromise=new Promise(((e,r)=>{const s={signal:l.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(i,s).then(e,r),(0,y.fu)(t,(()=>{l.abort()}))})),this._abortController=l,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return(0,s.d9)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const i=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const r=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:i||r})}getStyleLayer(e){return(0,s.d9)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return(0,s.d9)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new u.Z("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const i=await async function(e,t){const i={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[r,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],s=r?(0,p.mN)(r):null;await z(i,"esri",e,l,t);const o={layerDefinition:i.validatedSource,url:r,parsedUrl:s,serviceUrl:i.sourceUrl,style:i.style,styleUrl:i.styleUrl,spriteUrl:i.style.sprite&&N(i.styleBase,i.style.sprite),spriteFormat:i.spriteFormat,glyphsUrl:i.style.glyphs&&N(i.styleBase,i.style.glyphs),sourceNameToSource:i.sourceNameToSource,primarySourceName:i.primarySourceName};return D(o.spriteUrl),D(o.glyphsUrl),o}(e,t);"webp"===i.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((e=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,e(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,e(!1)},i.src="data:image/webp;base64,"+t.lossy}))}()||(i.spriteFormat="png")),this._set("currentStyleInfo",{...i}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",i.sourceNameToSource),this._set("primarySourceName",i.primarySourceName),this._set("styleRepository",new Q.Z(i.style,i)),this.read(i.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),i=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const r=t[2]&&t[2].toLowerCase();if(!r)return;const l=t[1]||"";for(const e of i)if(e.toLowerCase().indexOf(r)>-1)return(0,p.Fv)(`//static.arcgis.com/attribution/Vector${l}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"attributionDataUrl",null),(0,r._)([(0,a.Cb)({type:["show","hide"]})],J.prototype,"listMode",void 0),(0,r._)([(0,a.Cb)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],J.prototype,"capabilities",null),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"currentStyleInfo",void 0),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0,type:m.Z})],J.prototype,"fullExtent",null),(0,r._)([(0,a.Cb)()],J.prototype,"style",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,r._)([(0,a.Cb)({type:["VectorTileLayer"]})],J.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"parsedUrl",null),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"serviceUrl",null),(0,r._)([(0,a.Cb)({type:d.Z,readOnly:!0})],J.prototype,"spatialReference",null),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"styleRepository",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"sourceNameToSource",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"primarySourceName",void 0),(0,r._)([(0,a.Cb)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"styleUrl",null),(0,r._)([(0,h.c)(["portal-item","web-document"],"styleUrl")],J.prototype,"writeStyleUrl",null),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"tileIndexType",null),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"tileIndexUrl",null),(0,r._)([(0,a.Cb)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:x.Z})],J.prototype,"tileInfo",null),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0,type:C.y})],J.prototype,"tilemapCache",null),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"tileServers",null),(0,r._)([(0,a.Cb)({json:{read:!1},readOnly:!0,value:"vector-tile"})],J.prototype,"type",void 0),(0,r._)([(0,a.Cb)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],J.prototype,"url",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"version",void 0),(0,r._)([(0,n.r)("version",["version","currentVersion"])],J.prototype,"readVersion",null),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"compatibleTileInfo256",null),(0,r._)([(0,a.Cb)({readOnly:!0})],J.prototype,"compatibleTileInfo512",null),J=(0,r._)([(0,c.j)("esri.layers.VectorTileLayer")],J);const V=J},85564:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var r=i(87397),l=(i(1867),i(9783),i(9385),i(82203)),s=i(23757),o=i(65482),a=(i(17593),i(15392),i(11786),i(12031)),n=(i(36458),i(70977)),c=i(28384);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.y({layer:this}):null}};return(0,r._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"minScale",void 0),(0,r._)([(0,s.r)("service","minScale")],t.prototype,"readMinScale",null),(0,r._)([(0,l.Cb)()],t.prototype,"maxScale",void 0),(0,r._)([(0,s.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,r._)([(0,l.Cb)({type:a.Z})],t.prototype,"spatialReference",void 0),(0,r._)([(0,l.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,r._)([(0,l.Cb)(n.h)],t.prototype,"tileInfo",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"tilemapCache",void 0),(0,r._)([(0,s.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,r._)([(0,l.Cb)()],t.prototype,"version",void 0),t=(0,r._)([(0,o.j)("esri.layers.mixins.ArcGISCachedService")],t),t}},28384:(e,t,i)=>{"use strict";i.d(t,{y:()=>x});var r,l=i(87397),s=(i(1867),i(9783)),o=i(82203),a=i(60697),n=i(65482),c=i(29107),h=i(17593),u=(i(15392),i(11786),i(63268)),p=i(14790),y=i(80148),d=i(83374),m=i(65869),f=i(70314),v=i(66119),g=i(98140),_=i(31641),S=i(69770);class A{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,s=this._tileAvailabilityBitSet;return l<0||l>s.length?"unknown":s[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const s=Math.ceil(t*i/8),o=new Uint8Array(s);let a=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(l=!1,o[a]|=1<<i):r=!1,7===i&&++a}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=o,this.byteSize+=o.length)}static fromDefinition(e,t){const i=e.service.request||m.default,{row:r,col:l,width:s,height:o}=e,a={query:{f:"json"}};return t=t?{...a,...t}:a,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:s,height:o},valid:!0,data:(0,S.a9)(s*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==s||e.location.height!==o))throw new c.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:s,height:o}});return A.fromJSON(e)}))}static fromJSON(e){A.validateJSON(e);const t=new A;return t.location=Object.freeze((0,_.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new c.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new c.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new c.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new c.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new c.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function b(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const w=s.Z.getLogger("esri.layers.support.TilemapCache");let x=r=class extends d.Z{constructor(e){super(e),this._handles=new f.Z,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=m.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new g.Z(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),(0,v.S1)(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(w.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Promise.reject(new c.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const o=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,p.fu)(o,(()=>t((0,p.zE)())));const i=b(l);let s=this._pendingTilemapRequests[i];if(!s){s=A.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,r){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!l.upsampleTile(r))return"unavailable"}}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof A){const l=r.getAvailability(t,i);return"unavailable"===l?Promise.reject(new c.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if((0,p.D_)(r))throw r;return"unknown"})):Promise.reject(new c.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const s=this.layer.tileInfo;s.updateTileInfo(r);const o=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,p.D_)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,s,o){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this._handles.has(a))return;const n=(0,p.yi)();o.then((()=>n.abort()),(()=>n.abort()));let c=!1;const h={remove(){c||(c=!0,n.abort())}};if(this._handles.add(h,a),await(0,y.MU)(10,n.signal).catch((()=>{})),c||(c=!0,this._handles.remove(a)),(0,p.Hc)(n))return;const u={id:e,level:t,row:i,col:l},d={...s,signal:n.signal},m=this.layer.tileInfo;for(let e=0;r._prefetches.length<r._maxPrefetch&&m.upsampleTile(u);++e){const e=this.fetchAvailability(u.level,u.row,u.col,d);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?(0,h.B7)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=b(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};x._maxPrefetch=4,x._prefetches=new u.Z({initialSize:r._maxPrefetch}),(0,l._)([(0,o.Cb)({constructOnly:!0,type:Number})],x.prototype,"levels",void 0),(0,l._)([(0,a.p)("levels")],x.prototype,"castLevels",null),(0,l._)([(0,o.Cb)({readOnly:!0,type:Number})],x.prototype,"size",null),(0,l._)([(0,o.Cb)({constructOnly:!0,type:Number})],x.prototype,"cacheByteSize",void 0),(0,l._)([(0,o.Cb)({constructOnly:!0})],x.prototype,"layer",void 0),(0,l._)([(0,o.Cb)({constructOnly:!0})],x.prototype,"request",void 0),x=r=(0,l._)([(0,n.j)("esri.layers.support.TilemapCache")],x)},70977:(e,t,i)=>{"use strict";i.d(t,{d:()=>s,h:()=>l});var r=i(47449);const l={type:r.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}};function s(e,t,i,l){if(!e)return null;const{minScale:s,maxScale:o,minLOD:a,maxLOD:n}=t;if(null!=a&&null!=n)return l&&l.ignoreMinMaxLOD?r.Z.fromJSON(e):r.Z.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=a&&e<=n))});if(0!==s&&0!==o){const t=e=>Math.round(1e4*e)/1e4,i=s?t(s):1/0,l=o?t(o):-1/0;return r.Z.fromJSON({...e,lods:e.lods.filter((e=>{const r=t(e.scale);return r<=i&&r>=l}))})}return r.Z.fromJSON(e)}},38984:(e,t,i)=>{"use strict";i.d(t,{m:()=>s});var r=i(17593),l=i(79707);function s(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||l.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},14361:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(14790),l=i(28384),s=i(70473);const o=class{constructor(e){if(e instanceof l.y)this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(e,t){if(this._tilemapCache){const{level:i,row:l,col:o}=e,a=new s.Z(e);return this._tilemapCache.fetchAvailabilityUpsample(i,l,o,a,t).then((()=>(a.world=e.world,a))).catch((e=>{if((0,r.D_)(e))throw e;return null}))}return this._getIndexedDataKey(e)}forEach(e,t,i,r,l){this._callback=l,this._maxLevel=t+e,this._forEach(this._tilemap,t,i,r)}_forEach(e,t,i,r){0!==e&&(this._callback(t,i,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*i,2*r),this._forEach(e[1],t+1,2*i,2*r+1),this._forEach(e[2],t+1,2*i+1,2*r),this._forEach(e[3],t+1,2*i+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);let i=e;for(;0!==i.level;)i=new s.Z(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);let r,l,o=this._tilemap,a=t.pop();if(1===o)return Promise.resolve(a);for(;t.length;)if(r=t.pop(),l=(1&r.col)+((1&r.row)<<1),o){if(0===o[l]){a=null;break}if(1===o[l]){a=r;break}a=r,o=o[l]}return Promise.resolve(a)}}},33142:(e,t,i)=>{"use strict";i.d(t,{xl:()=>b,aK:()=>w,eF:()=>h,eq:()=>E,wz:()=>n,XJ:()=>N,$0:()=>o,iV:()=>U,Zd:()=>T,uG:()=>C,Jc:()=>P,xm:()=>a,m4:()=>x,AI:()=>r,Ip:()=>z,ru:()=>l,fL:()=>D,iJ:()=>d,nM:()=>m,Ij:()=>f,f2:()=>v,Ic:()=>y,Al:()=>p,QU:()=>g,Jw:()=>_,kF:()=>S,yP:()=>A,D3:()=>u,Iw:()=>c,OM:()=>I,I_:()=>s,a:()=>L,CU:()=>O,V4:()=>R});const r=1e-30,l=4294967295,s=512,o=8,a=29,n=16,c=8,h={metrics:{width:15,height:17,left:0,top:-7,advance:14}},u=0,p=0,y=0,d=1,m=2,f=3,v=4,g=5,_=6,S=5,A=6,b=1,w=2,x=2,C=1,T=2,U=4,I=2.5,P=6,R=5,O=6,L=1.15,D=2,N=7,z=500,E=128}}]);