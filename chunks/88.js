(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[88],{10088:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>W});var o=r(87397),i=(r(1867),r(31641)),l=r(65393),a=r(18029),n=(r(9783),r(9385),r(82203)),s=r(23757),y=r(15404),p=r(65482),u=r(17808),d=r(29107),c=(r(17593),r(15392),r(11786),r(85376)),m=r(12031),f=r(83746),b=(r(36458),r(50519)),g=r(44765),S=r(4129),h=r(72593),w=r(53124),C=(r(72769),r(67794)),O=r(71604),_=r(47596),N=r(12750),v=r(4425),J=r(42176),L=r(16450),T=r(17398),x=r(80157),M=r(17060),I=r(89307),Z=r(65515),R=r(95866);function j(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const D=new L.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),E=new L.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let F=class extends Z.Z{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,o._)([(0,n.Cb)({readOnly:!0})],F.prototype,"sublayers",null),(0,o._)([(0,n.Cb)()],F.prototype,"layer",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],F.prototype,"visibilityMode",void 0),F=(0,o._)([(0,p.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],F);const G=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new S.default).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new g.default).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new h.default).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new h.default).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new w.Z).toJSON()}];let P=class extends((0,T.h)((0,M.M)((0,v.q)((0,x.I)((0,_.R)(O.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=m.Z.WGS84,this.sublayers=new b.Z(G.map((e=>new F({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!j(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!j(t))return null;const o=t.layers.map((e=>{const t=new I.default;return t.read(e,r),t}));return new b.Z({items:o})}readLegacyfeatureCollectionJSON(e,t){return j(t)?(0,i.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new f.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:m.Z.WGS84});const r=m.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?f.Z.fromJSON(r).union(e):e}),new f.Z({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?m.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):m.Z.WGS84}readSublayers(e,t,r){if(j(t))return null;const o=[];for(let e=0;e<t.layers.length;e++){var i;const{layerDefinition:r,featureSet:l}=t.layers[e],a=null!=(i=r.geometryType)?i:l.geometryType,n=G.find((e=>{var t,o,i;return a===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(o=t.renderer)||null==(i=o.symbol)?void 0:i.type)===e.identifyingSymbol.type}));if(n){const e=new F({id:n.layerId,title:r.name,layer:this,graphics:l.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>C.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new b.Z(o)}writeSublayers(e,t,r,o){const{minScale:i,maxScale:n}=this;if((0,a.Wi)(e))return;const s=e.some((e=>e.graphics.length>0));var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null==o||null==(y=o.messages)||y.push(new d.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,a.pC)(e.geometry)){u=e.geometry.spatialReference.toJSON();break e}for(const t of G){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(p,r,t,i,n,u,o)}(0,l.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,i.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,a.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if((0,a.pC)(o.geometry)){const r=o.geometry;e?(0,c.fS)(r.spatialReference,e)||((0,N.Up)(r.spatialReference,e)||(0,N.kR)()||await(0,N.zD)(),o.geometry=(0,N.iV)(r,e)):e=r.spatialReference,t.push(o)}const r=await(0,J.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return(0,a.Wi)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,l,n,s){const y=[];if(!(0,a.Wi)(t)){for(const e of t.graphics)this._writeMapNote(y,e,r.geometryType,s);this._normalizeObjectIds(y,D),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,i.d9)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[D.toJSON(),E.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if((0,a.Wi)(t))return;const{geometry:i,symbol:l,popupTemplate:n}=t;if((0,a.Wi)(i))return;var s,p;if(i.type!==r)return void(null==o||null==(s=o.messages)||s.push(new y.Z("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if((0,a.Wi)(l))return void(null==o||null==(p=o.messages)||p.push(new y.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:i.toJSON(),symbol:l.toJSON()};(0,a.pC)(n)&&(u.popupInfo=n.toJSON()),e.push(u)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,R.S)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"capabilities",void 0),(0,o._)([(0,s.r)(["portal-item","web-map"],"capabilities",["layers"])],P.prototype,"readCapabilities",null),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"featureCollections",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"featureCollections",["layers"])],P.prototype,"readFeatureCollections",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],P.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],P.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],P.prototype,"featureCollectionType",void 0),(0,o._)([(0,n.Cb)({json:{write:!1}})],P.prototype,"fullExtent",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"fullExtent",["layers"])],P.prototype,"readFullExtent",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],P.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"minScale",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"minScale",["layers"])],P.prototype,"readMinScale",null),(0,o._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"maxScale",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"maxScale",["layers"])],P.prototype,"readMaxScale",null),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"multipointLayer",null),(0,o._)([(0,n.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],P.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"pointLayer",null),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"polygonLayer",null),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"polylineLayer",null),(0,o._)([(0,n.Cb)({type:m.Z})],P.prototype,"spatialReference",void 0),(0,o._)([(0,s.r)(["web-map","portal-item"],"spatialReference",["layers"])],P.prototype,"readSpatialReference",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],P.prototype,"sublayers",void 0),(0,o._)([(0,s.r)("web-map","sublayers",["layers"])],P.prototype,"readSublayers",null),(0,o._)([(0,u.c)("web-map","sublayers")],P.prototype,"writeSublayers",null),(0,o._)([(0,n.Cb)({readOnly:!0})],P.prototype,"textLayer",null),(0,o._)([(0,n.Cb)()],P.prototype,"title",void 0),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),P=(0,o._)([(0,p.j)("esri.layers.MapNotesLayer")],P);const W=P},95866:(e,t,r)=>{"use strict";r.d(t,{S:()=>i,X:()=>o});const o=1;function i(e,t){let r=0;for(const i of t){var o;const t=null==(o=i.attributes)?void 0:o[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);