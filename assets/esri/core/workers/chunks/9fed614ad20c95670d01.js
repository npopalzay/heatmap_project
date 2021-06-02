self.webpackChunkRemoteClient([76],{234:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var i=r(0),s=r(69),a=r(86),o=r(117);async function n(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],n=(...e)=>{for(const t of e)Object(i.g)(t)||(Array.isArray(t)?n(...t):s.a.isCollection(t)?t.forEach((e=>n(e))):a.a.isLoadable(t)&&r.push(t))};t(n);let l=null;if(await Object(o.b)(r,(async e=>{!1!==(await Object(o.c)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||l||(l=e)})),l)throw l.loadError;return e}},287:function(e,t,r){"use strict";var i=r(13),s=r(15),a=r(18),o=r(69),n=r(134);let l=class extends o.a{constructor(e){super(e),this._handles=new n.a,this.root=null}initialize(){this._handles.add(this.rootCollectionNames.map((e=>this.watch("root."+e,(()=>this.updateCollections()),!0)))),this.updateCollections()}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null}updateCollections(){this._collections=this.rootCollectionNames.map((e=>this.get("root."+e))).filter((e=>null!=e)),this.refresh()}refresh(){const e=this._handles;e.remove("collections");const t=new Array;let r=0;for(const e of this._collections)r=this._processCollection(t,r,e);this.splice(r,this.length);for(const r of t)e.add(r.on("after-changes",(()=>this.refresh())),"collections")}_createNewInstance(e){return new o.a(e)}_processCollection(e,t,r){return r?(e.push(r),r.forEach((r=>{if(r){if(!this.itemFilterFunction||this.itemFilterFunction(r)){const e=this.indexOf(r,t);e>=0?e!==t&&this.reorder(r,t):this.add(r,t),++t}this.getChildrenFunction&&(t=this._processCollection(e,t,this.getChildrenFunction(r)))}})),t):t}};Object(i.a)([Object(s.b)()],l.prototype,"rootCollectionNames",void 0),Object(i.a)([Object(s.b)()],l.prototype,"root",void 0),Object(i.a)([Object(s.b)()],l.prototype,"getChildrenFunction",void 0),Object(i.a)([Object(s.b)()],l.prototype,"itemFilterFunction",void 0),l=Object(i.a)([Object(a.a)("esri.core.CollectionFlattener")],l);var c=l;t.a=c},408:function(e,t,r){"use strict";r.r(t);var i=r(13),s=(r(3),r(6)),a=r(0),o=r(2),n=r(5),l=r(15),c=r(57),p=r(18),d=r(16),y=r(21),b=r(36),u=(r(37),r(4)),O=r(60),j=r(69),h=r(234),f=r(287),v=r(87),g=r(84),m=r(73),w=r(99),S=r(166),F=r(96),x=r(107),I=r(59),L=r(58),T=r(61),B=r(146),A=r(54),E=r(218),_=r(86),N=r(125),q=(r(135),r(187),r(200),r(222),r(226),r(227),r(223),r(233)),k=(r(242),r(144)),C=r(343),P=r(235),R=r(82),M=r(167),Q=r(142);let U=class extends(Object(Q.a)(g.b)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};Object(i.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],U.prototype,"title",void 0),Object(i.a)([Object(c.a)("service","title",["alias","name"])],U.prototype,"readTitle",null),Object(i.a)([Object(l.b)()],U.prototype,"layer",void 0),Object(i.a)([Object(l.b)({type:n.a,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],U.prototype,"id",void 0),Object(i.a)([Object(c.a)("service","id")],U.prototype,"readIdOnlyOnce",null),Object(i.a)([Object(l.b)(Object(m.k)(String))],U.prototype,"modelName",void 0),Object(i.a)([Object(l.b)(Object(m.k)(Boolean))],U.prototype,"isEmpty",void 0),Object(i.a)([Object(l.b)({type:Boolean,json:{name:"visibility",write:!0}})],U.prototype,"visible",void 0),Object(i.a)([Object(l.b)({type:Number,json:{write:!0}})],U.prototype,"opacity",void 0),U=Object(i.a)([Object(p.a)("esri.layers.buildingSublayers.BuildingSublayer")],U);var D=U,V=r(516),K=r(309),J=r(392);const H=o.a.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Z=Object(C.a)();let z=class extends(_.a.LoadableMixin(Object(E.b)(D))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new k.a(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return Object(a.h)(r)&&"number"==typeof i?new M.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return Object(a.h)(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=Object(a.h)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t).then((()=>{this.indexInfo=Object(K.a)(this.parsedUrl.path,this.rootNode,this.nodePages,H,t)}))),Promise.resolve(this)}createPopupTemplate(e){return Object(P.a)(this,e)}async _fetchService(e){const t=(await Object(A.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=Object(a.h)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:V.a,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new R.a;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:Object(a.h)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return Object(a.h)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Object(a.g)(this.associatedLayer))throw new d.a("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d.a("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};Object(i.a)([Object(l.b)({readOnly:!0})],z.prototype,"parsedUrl",null),Object(i.a)([Object(l.b)({type:J.c,readOnly:!0})],z.prototype,"nodePages",void 0),Object(i.a)([Object(l.b)({type:[J.b],readOnly:!0})],z.prototype,"materialDefinitions",void 0),Object(i.a)([Object(l.b)({type:[J.d],readOnly:!0})],z.prototype,"textureSetDefinitions",void 0),Object(i.a)([Object(l.b)({type:[J.a],readOnly:!0})],z.prototype,"geometryDefinitions",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],z.prototype,"serviceUpdateTimeStamp",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],z.prototype,"store",void 0),Object(i.a)([Object(l.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],z.prototype,"rootNode",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],z.prototype,"attributeStorageInfo",void 0),Object(i.a)([Object(l.b)(Z.fields)],z.prototype,"fields",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],z.prototype,"fieldsIndex",null),Object(i.a)([Object(l.b)({readOnly:!0,type:M.default})],z.prototype,"associatedLayer",void 0),Object(i.a)([Object(c.a)("service","associatedLayer",["associatedLayerID"])],z.prototype,"readAssociatedLayer",null),Object(i.a)([Object(l.b)(Z.outFields)],z.prototype,"outFields",void 0),Object(i.a)([Object(l.b)({type:String,readOnly:!0})],z.prototype,"objectIdField",null),Object(i.a)([Object(l.b)({readOnly:!0,type:String,json:{read:!1}})],z.prototype,"displayField",null),Object(i.a)([Object(l.b)({readOnly:!0,type:T.a,aliasOf:"layer.fullExtent"})],z.prototype,"fullExtent",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:O.a,aliasOf:"layer.spatialReference"})],z.prototype,"spatialReference",void 0),Object(i.a)([Object(l.b)({readOnly:!0,aliasOf:"layer.version"})],z.prototype,"version",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:N.a,aliasOf:"layer.elevationInfo"})],z.prototype,"elevationInfo",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],z.prototype,"minScale",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],z.prototype,"maxScale",void 0),Object(i.a)([Object(l.b)({type:["hide","show"],json:{write:!0}})],z.prototype,"listMode",void 0),Object(i.a)([Object(l.b)({types:q.b,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],z.prototype,"renderer",void 0),Object(i.a)([Object(l.b)({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],z.prototype,"definitionExpression",void 0),Object(i.a)([Object(l.b)(m.j)],z.prototype,"popupEnabled",void 0),Object(i.a)([Object(l.b)({type:B.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],z.prototype,"popupTemplate",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],z.prototype,"normalReferenceFrame",void 0),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],z.prototype,"defaultPopupTemplate",null),Object(i.a)([Object(l.b)({json:{write:!1}}),Object(L.a)(new I.a({"3DObject":"3d-object",Point:"point"}))],z.prototype,"layerType",void 0),Object(i.a)([Object(l.b)()],z.prototype,"geometryType",null),Object(i.a)([Object(l.b)()],z.prototype,"profile",null),Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],z.prototype,"capabilities",null),z=Object(i.a)([Object(p.a)("esri.layers.buildingSublayers.BuildingComponentSublayer")],z);var G,$=z,W=r(40);const X={type:j.a,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new j.a(e.map((e=>{const t=function(e){return"group"===e.layerType?ee:$}(e);if(t){const i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new W.a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ee=G=class extends D{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Object(h.b)(this,(e=>G.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var te;Object(i.a)([Object(l.b)({type:["hide","show","hide-children"],json:{write:!0}})],ee.prototype,"listMode",void 0),Object(i.a)([Object(l.b)(X)],ee.prototype,"sublayers",void 0),ee=G=Object(i.a)([Object(p.a)("esri.layers.buildingSublayers.BuildingGroupSublayer")],ee),(te=ee||(ee={})).sublayersProperty=X,te.readSublayers=Y,te.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};var re=ee,ie=r(318),se=r(55);let ae=class extends se.a{constructor(){super(...arguments),this.type=null}};Object(i.a)([Object(l.b)({type:String,readOnly:!0,json:{write:!0}})],ae.prototype,"type",void 0),ae=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterAuthoringInfo")],ae);var oe,ne=ae;let le=oe=class extends se.a{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new oe({filterType:this.filterType,filterValues:Object(s.a)(this.filterValues)})}};Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],le.prototype,"filterType",void 0),Object(i.a)([Object(l.b)({type:[String],json:{write:!0}})],le.prototype,"filterValues",void 0),le=oe=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterAuthoringInfoType")],le);var ce,pe=le;const de=j.a.ofType(pe);let ye=ce=class extends se.a{clone(){return new ce({filterTypes:Object(s.a)(this.filterTypes)})}};Object(i.a)([Object(l.b)({type:de,json:{write:!0}})],ye.prototype,"filterTypes",void 0),ye=ce=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],ye);var be,ue=ye;const Oe=j.a.ofType(ue);let je=be=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new be({filterBlocks:Object(s.a)(this.filterBlocks)})}};Object(i.a)([Object(l.b)({type:["checkbox"]})],je.prototype,"type",void 0),Object(i.a)([Object(l.b)({type:Oe,json:{write:!0}})],je.prototype,"filterBlocks",void 0),je=be=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],je);var he=je;let fe=class extends se.a{};Object(i.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],fe.prototype,"type",void 0),fe=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterMode")],fe);var ve,ge=fe;let me=ve=class extends ge{constructor(){super(...arguments),this.type="solid"}clone(){return new ve}};Object(i.a)([Object(l.b)({type:["solid"],readOnly:!0,json:{write:!0}})],me.prototype,"type",void 0),me=ve=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterModeSolid")],me);var we,Se=me,Fe=r(247);let xe=we=class extends ge{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new we({edges:Object(s.a)(this.edges)})}};Object(i.a)([Object(L.a)({wireFrame:"wire-frame"})],xe.prototype,"type",void 0),Object(i.a)([Object(l.b)(Fe.a)],xe.prototype,"edges",void 0),xe=we=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterModeWireFrame")],xe);var Ie,Le=xe;let Te=Ie=class extends ge{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ie}};Object(i.a)([Object(l.b)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Te.prototype,"type",void 0),Te=Ie=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterModeXRay")],Te);var Be,Ae=Te;const Ee={nonNullable:!0,types:{key:"type",base:ge,typeMap:{solid:Se,"wire-frame":Le,"x-ray":Ae}},json:{read:e=>{switch(e&&e.type){case"solid":return Se.fromJSON(e);case"wireFrame":return Le.fromJSON(e);case"x-ray":return Ae.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let _e=Be=class extends se.a{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Se,this.title=""}clone(){return new Be({filterExpression:this.filterExpression,filterMode:Object(s.a)(this.filterMode),title:this.title})}};Object(i.a)([Object(l.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_e.prototype,"filterExpression",void 0),Object(i.a)([Object(l.b)(Ee)],_e.prototype,"filterMode",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_e.prototype,"title",void 0),_e=Be=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilterBlock")],_e);var Ne,qe=_e;const ke=j.a.ofType(qe);let Ce=Ne=class extends se.a{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Object(b.a)(),this.name=null}clone(){return new Ne({description:this.description,filterBlocks:Object(s.a)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:Object(s.a)(this.filterAuthoringInfo)})}};Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],Ce.prototype,"description",void 0),Object(i.a)([Object(l.b)({type:ke,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"filterBlocks",void 0),Object(i.a)([Object(l.b)({types:{key:"type",base:ne,typeMap:{checkbox:he}},json:{read:e=>{switch(e&&e.type){case"checkbox":return he.fromJSON(e);default:return null}},write:!0}})],Ce.prototype,"filterAuthoringInfo",void 0),Object(i.a)([Object(l.b)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"id",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ce.prototype,"name",void 0),Ce=Ne=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFilter")],Ce);var Pe=Ce;const Re=o.a.getLogger("esri.layers.support.BuildingSummaryStatistics");let Me=class extends se.a{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};Object(i.a)([Object(l.b)({type:String})],Me.prototype,"fieldName",void 0),Object(i.a)([Object(l.b)({type:String})],Me.prototype,"modelName",void 0),Object(i.a)([Object(l.b)({type:String})],Me.prototype,"label",void 0),Object(i.a)([Object(l.b)({type:Number})],Me.prototype,"min",void 0),Object(i.a)([Object(l.b)({type:Number})],Me.prototype,"max",void 0),Object(i.a)([Object(l.b)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Me.prototype,"mostFrequentValues",void 0),Object(i.a)([Object(l.b)({type:[Number]})],Me.prototype,"subLayerIds",void 0),Me=Object(i.a)([Object(p.a)("esri.layers.support.BuildingFieldStatistics")],Me);let Qe=class extends(_.a.LoadableMixin(Object(E.b)(se.a))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Re.error("building summary statistics are not loaded"),null)}load(e){const t=Object(a.h)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await Object(A.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};Object(i.a)([Object(l.b)({constructOnly:!0,type:String})],Qe.prototype,"url",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:[Me],json:{read:{source:"summary"}}})],Qe.prototype,"fields",null),Qe=Object(i.a)([Object(p.a)("esri.layers.support.BuildingSummaryStatistics")],Qe);var Ue=Qe,De=r(517);const Ve=o.a.getLogger("esri.layers.BuildingSceneLayer"),Ke=j.a.ofType(Pe),Je=Object(s.a)(re.sublayersProperty);Je.json.origins["web-scene"]={type:[$],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Je.json.origins["portal-item"]={type:[$],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let He=class extends(Object(ie.a)(Object(S.a)(Object(w.a)(Object(F.a)(Object(x.a)(Object(g.a)(v.a))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new f.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Ke,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=re.readSublayers(e,t,r);return re.forEachSublayer(i,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){re.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages.push(new d.a("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];re.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(Object(s.a)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=Object(y.x)(this.parsedUrl.path,t.statisticsHRef);return new Ue({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=Object(a.h)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.s).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return Object(h.a)(this,(e=>{re.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new d.a("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ve.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ve.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new De.a(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Ve.warn("Associated feature service item could not be loaded",e)}}};Object(i.a)([Object(l.b)({type:["BuildingSceneLayer"]})],He.prototype,"operationalLayerType",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],He.prototype,"allSublayers",void 0),Object(i.a)([Object(l.b)(Je)],He.prototype,"sublayers",void 0),Object(i.a)([Object(c.a)("service","sublayers")],He.prototype,"readSublayers",null),Object(i.a)([Object(l.b)({type:Ke,nonNullable:!0,json:{write:!0}})],He.prototype,"filters",void 0),Object(i.a)([Object(l.b)({type:String,json:{write:!0}})],He.prototype,"activeFilterId",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:Ue})],He.prototype,"summaryStatistics",void 0),Object(i.a)([Object(c.a)("summaryStatistics",["statisticsHRef"])],He.prototype,"readSummaryStatistics",null),Object(i.a)([Object(l.b)({type:[String],json:{read:!1}})],He.prototype,"outFields",void 0),Object(i.a)([Object(l.b)(m.l)],He.prototype,"fullExtent",void 0),Object(i.a)([Object(l.b)({type:["show","hide","hide-children"]})],He.prototype,"listMode",void 0),Object(i.a)([Object(l.b)(Object(m.k)(O.a))],He.prototype,"spatialReference",void 0),Object(i.a)([Object(l.b)(m.b)],He.prototype,"elevationInfo",null),Object(i.a)([Object(l.b)({json:{read:!1},readOnly:!0})],He.prototype,"type",void 0),Object(i.a)([Object(l.b)()],He.prototype,"associatedFeatureServiceItem",void 0),He=Object(i.a)([Object(p.a)("esri.layers.BuildingSceneLayer")],He);var Ze=He;t.default=Ze}});