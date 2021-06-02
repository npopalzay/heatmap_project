/*! For license information please see index.js.LICENSE.txt */
(()=>{var e,t,i,r,s={58882:(e,t,i)=>{var r={"./calcite-accordion_2.entry.js":[43411,3411],"./calcite-action_5.entry.js":[43546,3546],"./calcite-alert.entry.js":[19937,9937],"./calcite-avatar.entry.js":[57252,7252],"./calcite-block_2.entry.js":[63170,3170],"./calcite-button.entry.js":[63038,3038],"./calcite-card.entry.js":[94823,4823],"./calcite-checkbox.entry.js":[83830,3830],"./calcite-chip.entry.js":[26079,6079],"./calcite-color-picker_3.entry.js":[58606,8606],"./calcite-combobox_3.entry.js":[53890,573,3890],"./calcite-date-picker_4.entry.js":[56199,6199],"./calcite-dropdown_3.entry.js":[96564,573,6564],"./calcite-fab.entry.js":[96869,6869],"./calcite-filter.entry.js":[37343,7343],"./calcite-flow_2.entry.js":[57511,7511],"./calcite-graph.entry.js":[37659,7659],"./calcite-handle.entry.js":[44180,4180],"./calcite-icon.entry.js":[20581,581],"./calcite-inline-editable.entry.js":[18757,8757],"./calcite-input-date-picker.entry.js":[21494,573,1494],"./calcite-input-message.entry.js":[49753,9753],"./calcite-input.entry.js":[96886,6886],"./calcite-label.entry.js":[94801,4801],"./calcite-link.entry.js":[81738,1738],"./calcite-loader.entry.js":[6684,6684],"./calcite-modal.entry.js":[95194,5194],"./calcite-notice.entry.js":[7649,7649],"./calcite-option_3.entry.js":[20037,37],"./calcite-pagination.entry.js":[33260,3260],"./calcite-pick-list-group.entry.js":[22477,2477],"./calcite-pick-list-item.entry.js":[57161,7161],"./calcite-pick-list.entry.js":[55810,5810],"./calcite-popover_2.entry.js":[88626,573,8626],"./calcite-progress.entry.js":[48779,8779],"./calcite-radio-button-group.entry.js":[22809,2809],"./calcite-radio-button.entry.js":[77019,7019],"./calcite-radio-group_2.entry.js":[81135,1135],"./calcite-radio.entry.js":[70786,786],"./calcite-rating.entry.js":[74177,4177],"./calcite-scrim.entry.js":[62952,2952],"./calcite-shell-center-row.entry.js":[53193,3193],"./calcite-shell_2.entry.js":[79195,9195],"./calcite-slider.entry.js":[96622,6622],"./calcite-sortable-list.entry.js":[98783,1461,8783],"./calcite-split-button.entry.js":[15312,5312],"./calcite-stepper_2.entry.js":[12209,2209],"./calcite-switch.entry.js":[31521,1521],"./calcite-tab_4.entry.js":[48206,8206],"./calcite-tile-select-group.entry.js":[78003,8003],"./calcite-tile-select.entry.js":[16654,6654],"./calcite-tile.entry.js":[29083,9083],"./calcite-tip_3.entry.js":[54938,4938],"./calcite-tooltip_2.entry.js":[39712,573,9712],"./calcite-tree_2.entry.js":[82598,2598],"./calcite-value-list-item.entry.js":[3471,3471],"./calcite-value-list.entry.js":[57958,1461,7958]};function s(e){if(!i.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(i.e)).then((()=>i(s)))}s.keys=()=>Object.keys(r),s.id=58882,e.exports=s},3573:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>I});var r,s=i(87397),n=(i(1867),i(31641)),o=i(18029),a=i(9783),l=(i(9385),i(82203)),c=i(65482),u=i(17808),d=i(17593),h=(i(15392),i(11786),i(14790)),p=i(49886),f=i(12031),m=i(50519),y=i(46581),g=i(262),v=i(79707),_=i(36040),b=i(88143),w=i(98095),x=i(77354);let C=0;const S=a.Z.getLogger("esri.Basemap");let M=r=class extends((0,p.eC)(g.Z)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+C++,this.baseLayers=new m.Z,this.referenceLayers=new m.Z;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&S.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=e=>{e.parent=null};this.baseLayers.on("after-add",(e=>t(e.item))),this.referenceLayers.on("after-add",(e=>t(e.item))),this.baseLayers.on("after-remove",(e=>i(e.item))),this.referenceLayers.on("after-remove",(e=>i(e.item)))}initialize(){this.when().catch((e=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e;const t=this.baseLayers.removeAll();for(const e of t)e.destroy();const i=this.referenceLayers.removeAll();for(const e of i)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",(0,y.Z)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,i){const r=[];e?(i={...i,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const t=(0,x.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,o.pC)(t)&&r.push(t)})),this.referenceLayers.forEach((e=>{const t=(0,x.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,o.pC)(t)&&(t.isReference=!0,r.push(t))})),t.baseMapLayers=r):t.baseMapLayers=r}set referenceLayers(e){this._set("referenceLayers",(0,y.Z)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return(0,_.GZ)(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new r({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const t=(0,n.d9)(e);return t.url&&(0,d.oC)(t.url)&&(t.url=`https:${t.url}`),t.templateUrl&&(0,d.oC)(t.templateUrl)&&(t.templateUrl=`https:${t.templateUrl}`),t}))),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:i}=this;(0,h.k_)(e);const r=[];if(t){const i=t.context?t.context.url:null;if(r.push(this._loadLayersFromJSON(t.data,i,e)),t.data.id&&!t.data.title){const e=t.data.id;r.push((0,w.g)(e).then((e=>{e&&this.read({title:e},t.context)})))}}else i&&r.push(this._loadFromItem(i,e));await Promise.all(r)}async _loadLayersFromJSON(e,t,r){const s=this.resourceInfo&&this.resourceInfo.context,n=this.portalItem&&this.portalItem.portal||s&&s.portal||null,o=s&&"web-scene"===s.origin?"web-scene":"web-map",{populateOperationalLayers:a}=await i.e(2933).then(i.bind(i,92933)),l=[];if((0,h.k_)(r),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const i={context:{origin:o,url:t,portal:n,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},r=a(this.baseLayers,e.baseMapLayers.filter((e=>!e.isReference)),i);l.push(r);const s=a(this.referenceLayers,e.baseMapLayers.filter((e=>e.isReference)),i);l.push(s)}await(0,h.as)(l)}async _loadFromItem(e,t){const i=await e.load(t),r=await i.fetchData("json",t),s=(0,d.mN)(e.itemUrl);return this._set("resourceInfo",{data:r.baseMap,context:{origin:"web-map",portal:e.portal||v.Z.getDefault(),url:s}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:r.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||v.Z.getDefault(),url:s}),this._loadLayersFromJSON(this.resourceInfo.data,s,t)}static fromId(e){const t=w.s[e];return t?r.fromJSON(t):null}};(0,s._)([(0,l.Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,i,r){this._writeBaseLayers(e,t,r)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:m.Z}},writer(e,t,i,r){this._writeBaseLayers(e,t,r)}}}}}})],M.prototype,"baseLayers",null),(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],M.prototype,"id",void 0),(0,s._)([(0,l.Cb)({type:b.default})],M.prototype,"portalItem",void 0),(0,s._)([(0,l.Cb)()],M.prototype,"referenceLayers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],M.prototype,"resourceInfo",void 0),(0,s._)([(0,l.Cb)({type:f.Z})],M.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)()],M.prototype,"thumbnailUrl",void 0),(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],M.prototype,"title",void 0),(0,s._)([(0,u.c)("title")],M.prototype,"writeTitle",null),M=r=(0,s._)([(0,c.j)("esri.Basemap")],M);const I=M},52684:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r=i(18029),s=i(9385),n=i(92522),o=i(18193);function a(e){return(0,o.uZ)((0,s.vU)(e),0,255)}function l(e,t,i){return e=Number(e),isNaN(e)?i:e<t?t:e>i?i:e}class c{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,i,r=new c){return r.r=Math.round(e.r+(t.r-e.r)*i),r.g=Math.round(e.g+(t.g-e.g)*i),r.b=Math.round(e.b+(t.b-e.b)*i),r.a=e.a+(t.a-e.a)*i,r._sanitize()}static fromRgb(e,t){const i=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const e=i[2].split(/\s*,\s*/),r=i[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const i=e[0];if("%"===i.charAt(i.length-1)){const i=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(i[3]=parseFloat(e[3])),c.fromArray(i,t)}return c.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return c.fromArray((0,n.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new c){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const i=4===e.length?4:8,r=(1<<i)-1;let s=Number("0x"+e.substr(1));return isNaN(s)?null:(["b","g","r"].forEach((e=>{const n=s&r;s>>=i,t[e]=4===i?17*n:n})),t.a=1,t)}static fromArray(e,t=new c){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const i=(0,n.h$)(e);return i&&c.fromArray(i,t)||c.fromRgb(e,t)||c.fromHex(e,t)}static fromJSON(e){return e&&new c([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,r.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,r.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)c.fromString(e,this);else if(Array.isArray(e))c.fromArray(e,this);else{var t,i,r,s;this._set(null!=(t=e.r)?t:0,null!=(i=e.g)?i:0,null!=(r=e.b)?r:0,null!=(s=e.a)?s:1),e instanceof c||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),i=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${i.length<2?"0"+i:i}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=0){const t=a(this.r),i=a(this.g),r=a(this.b);return 0===e||1!==this.a?[t,i,r,a(255*this.a)]:[t,i,r]}clone(){return new c(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(l(this.r,0,255)),this.g=Math.round(l(this.g,0,255)),this.b=Math.round(l(this.b,0,255)),this.a=l(this.a,0,1),this}_set(e,t,i,r){this.r=e,this.g=t,this.b=i,this.a=r}}c.prototype.declaredClass="esri.Color";const u=c},67794:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var r,s=i(87397),n=(i(1867),i(31641)),o=i(18029),a=(i(9783),i(9385),i(82203)),l=i(65482),c=(i(17593),i(15392),i(11786),i(49886)),u=i(3414),d=i(36458),h=i(43501),p=i(72769),f=i(68366);let m=r=class extends c.wq{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,f.D)(),configurable:!0})}normalizeCtorArgs(e,t,i,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:i,popupTemplate:r}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){return this.popupTemplate?this.popupTemplate:this.sourceLayer?"popupTemplate"in this.sourceLayer&&this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&"defaultPopupTemplate"in this.sourceLayer&&(0,o.pC)(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const i=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",i,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,o.pC)(this.geometry)?this.geometry.toJSON():null,symbol:(0,o.pC)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new r(this.cloneProperties())}cloneProperties(){return{attributes:(0,n.d9)(this.attributes),geometry:(0,n.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,n.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,i,r){if(!this.layer||!("graphicChanged"in this.layer))return;const s={graphic:this,property:e,oldValue:t,newValue:i};"attributes"===e&&(s.attributeName=r),this.layer.graphicChanged(s)}};(0,s._)([(0,a.Cb)({value:null})],m.prototype,"attributes",null),(0,s._)([(0,a.Cb)({value:null,types:d.qM,json:{read:u.im}})],m.prototype,"geometry",null),(0,s._)([(0,a.Cb)({type:Boolean})],m.prototype,"isAggregate",void 0),(0,s._)([(0,a.Cb)()],m.prototype,"layer",void 0),(0,s._)([(0,a.Cb)({type:h.Z})],m.prototype,"popupTemplate",void 0),(0,s._)([(0,a.Cb)()],m.prototype,"sourceLayer",void 0),(0,s._)([(0,a.Cb)({value:null,types:p.LB})],m.prototype,"symbol",null),(0,s._)([(0,a.Cb)({type:Boolean,value:!0})],m.prototype,"visible",null),m=r=(0,s._)([(0,l.j)("esri.Graphic")],m),(m||(m={})).generateUID=f.D;const y=m},43501:(e,t,i)=>{"use strict";i.d(t,{Z:()=>G});var r=i(87397),s=(i(1867),i(31641)),n=i(9783),o=i(9385),a=i(82203),l=i(60697),c=i(23757),u=i(65482),d=i(17808),h=(i(17593),i(15392),i(11786),i(14790)),p=i(49886),f=i(50519),m=i(67638),y=i(36689),g=i(51049),v=i(86657),_=i(38786),b=i(87202),w=i(6522),x=i(16844),C=i(48602);const S={base:null,key:"type",typeMap:{attachment:g.Z,media:x.Z,text:C.Z,field:b.Z}};var M,I=i(21186);let T=M=class extends p.wq{constructor(e){super(e),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new M({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnTopmostRaster",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"showNoDataRecords",void 0),T=M=(0,r._)([(0,u.j)("esri.popup.LayerOptions")],T);const E=T;var P,A=i(36113);let O=P=class extends p.wq{constructor(e){super(e),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new P({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,s.d9)(this.orderByFields):null})}};(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],O.prototype,"showRelatedRecords",void 0),(0,r._)([(0,a.Cb)({type:[A.Z],json:{write:!0}})],O.prototype,"orderByFields",void 0),O=P=(0,r._)([(0,u.j)("esri.popup.RelatedRecordsInfo")],O);const k=O;var L,F=i(74933),R=i(84e3),j=i(86320);const D=f.Z.ofType({key:"type",defaultKeyValue:"button",base:F.Z,typeMap:{button:R.Z,toggle:j.Z}}),V={base:y.Z,key:"type",typeMap:{media:x.Z,custom:v.Z,text:C.Z,attachments:g.Z,fields:b.Z}},N="esri.PopupTemplate",z=n.Z.getLogger(N),Z=["attachments","fields","media","text"];let U=L=class extends p.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(e){return Array.isArray(e)?e.map((e=>(0,o.N7)(V,e))):"string"==typeof e||"function"==typeof e||e instanceof HTMLElement||(0,h.y8)(e)?e:(z.error("content error","unsupported content value",{value:e}),null)}readContent(e,t){const{popupElements:i}=t;return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(t):this._readPopupInfo(t)}writeContent(e,t,i,r){"string"!=typeof e?Array.isArray(e)&&(t.popupElements=e.filter((e=>-1!==Z.indexOf(e.type))).map((e=>e&&e.toJSON(r))),t.popupElements.forEach((e=>{"attachments"===e.type?this._writeAttachmentContent(t):"media"===e.type?this._writeMediaContent(e,t):"text"===e.type&&this._writeTextContent(e,t)}))):t.description=e}writeFieldInfos(e,t,i,r){const{content:s}=this,n=Array.isArray(s)?s:null;if(e){const i=n?n.filter((e=>"fields"===e.type)):[],s=i.length&&i.every((e=>{var t;return null==(t=e.fieldInfos)?void 0:t.length}));t.fieldInfos=e.filter(Boolean).map((e=>{const t=e.toJSON(r);return s&&(t.visible=!1),t}))}if(n)for(const e of n)"fields"===e.type&&this._writeFieldsContent(e,t)}writeLayerOptions(e,t,i,r){t[i]=!e||null===e.showNoDataRecords&&null===e.returnTopmostRaster?null:e.toJSON(r)}writeTitle(e,t){t.title=e||""}clone(){const{actions:e}=this,t=e?(0,s.d9)(e.toArray()):[];return new L({actions:t,content:Array.isArray(this.content)?(0,s.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,s.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,s.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,s.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,s.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,s.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(e,t){await this._collectExpressionInfoFields(e,t,this.expressionInfos),(0,m.gd)(e,t,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(e){const t=new Set;return await this.collectRequiredFields(t,e),[...t].sort()}_writeFieldsContent(e,t){if(!Array.isArray(e.fieldInfos)||!e.fieldInfos.length)return;const i=(0,s.d9)(e.fieldInfos);Array.isArray(t.fieldInfos)?i.forEach((e=>{const i=t.fieldInfos.find((t=>t.fieldName.toLowerCase()===e.fieldName.toLowerCase()));i?i.visible=!0:t.fieldInfos.push(e)})):t.fieldInfos=i}_writeAttachmentContent(e){e.showAttachments||(e.showAttachments=!0)}_writeTextContent(e,t){!t.description&&e.text&&(t.description=e.text)}_writeMediaContent(e,t){if(!Array.isArray(e.mediaInfos)||!e.mediaInfos.length)return;const i=(0,s.d9)(e.mediaInfos);Array.isArray(t.mediaInfos)?t.mediaInfos=[...t.mediaInfos,...i]:t.mediaInfos=i}_readPopupInfoElements({description:e,mediaInfos:t,popupElements:i}){const r={description:!1,mediaInfos:!1};return i.map((i=>"media"===i.type?(i.mediaInfos||!t||r.mediaInfos||(i.mediaInfos=t,r.mediaInfos=!0),x.Z.fromJSON(i)):"text"===i.type?(i.text||!e||r.description||(i.text=e,r.description=!0),C.Z.fromJSON(i)):"attachments"===i.type?g.Z.fromJSON(i):"fields"===i.type?b.Z.fromJSON(i):void 0)).filter(Boolean)}_readPopupInfo({description:e,mediaInfos:t,showAttachments:i}){const r=[];return e?r.push(new C.Z({text:e})):r.push(new b.Z),Array.isArray(t)&&t.length&&r.push(x.Z.fromJSON({mediaInfos:t})),i&&r.push(g.Z.fromJSON({displayType:"list"})),r.length?r:e}_getContentElementFields(e){return e&&"attachments"!==e.type?"custom"===e.type?e.outFields||[]:"fields"===e.type?this._getFieldInfoFields(e.fieldInfos||this.fieldInfos):"media"===e.type?(e.mediaInfos||[]).reduce(((e,t)=>[...e,...this._getMediaInfoFields(t)]),[]):"text"===e.type?this._extractFieldNames(e.text):void 0:[]}_getMediaInfoFields(e){const{caption:t,title:i,value:r}=e,s=r||{},{fields:n=[],normalizeField:o,tooltipField:a,sourceURL:l,linkURL:c}=s,u=[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(l),...this._extractFieldNames(c),...n];return o&&u.push(o),a&&u.push(a),u}_getContentFields(e){return"string"==typeof e?this._extractFieldNames(e):Array.isArray(e)?e.reduce(((e,t)=>[...e,...this._getContentElementFields(t)]),[]):[]}async _collectExpressionInfoFields(e,t,i){i&&await Promise.all(i.map((i=>(0,m.io)(e,t,i.expression))))}_getFieldInfoFields(e){return e?e.filter((e=>void 0===e.visible||!!e.visible)).map((e=>e.fieldName)).filter((e=>-1===e.indexOf("relationships/")&&-1===e.indexOf("expression/"))):[]}_getActionsFields(e){return e?e.toArray().reduce(((e,t)=>[...e,...this._getActionFields(t)]),[]):[]}_getActionFields(e){const{className:t,title:i,type:r}=e,s="button"===r||"toggle"===r?e.image:"";return[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(s)]}_getTitleFields(e){return"string"==typeof e?this._extractFieldNames(e):[]}_extractFieldNames(e){if(!e||"string"!=typeof e)return[];const t=e.match(/{[^}]*}/g);if(!t)return[];const i=/\{(\w+):.+\}/,r=t.filter((e=>!(0===e.indexOf("{relationships/")||0===e.indexOf("{expression/")))).map((e=>e.replace(i,"{$1}")));return r?r.map((e=>e.slice(1,-1))):[]}};(0,r._)([(0,a.Cb)({type:D})],U.prototype,"actions",void 0),(0,r._)([(0,a.Cb)()],U.prototype,"content",void 0),(0,r._)([(0,l.p)("content")],U.prototype,"castContent",null),(0,r._)([(0,c.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],U.prototype,"readContent",null),(0,r._)([(0,d.c)("content",{popupElements:{type:f.Z.ofType(S)},showAttachments:{type:Boolean},mediaInfos:{type:f.Z.ofType(w.V)},description:{type:String}})],U.prototype,"writeContent",null),(0,r._)([(0,a.Cb)({type:[I.Z],json:{write:!0}})],U.prototype,"expressionInfos",void 0),(0,r._)([(0,a.Cb)({type:[_.Z]})],U.prototype,"fieldInfos",void 0),(0,r._)([(0,d.c)("fieldInfos")],U.prototype,"writeFieldInfos",null),(0,r._)([(0,a.Cb)({type:E})],U.prototype,"layerOptions",void 0),(0,r._)([(0,d.c)("layerOptions")],U.prototype,"writeLayerOptions",null),(0,r._)([(0,a.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],U.prototype,"lastEditInfoEnabled",void 0),(0,r._)([(0,a.Cb)()],U.prototype,"outFields",void 0),(0,r._)([(0,a.Cb)()],U.prototype,"overwriteActions",void 0),(0,r._)([(0,a.Cb)()],U.prototype,"returnGeometry",void 0),(0,r._)([(0,a.Cb)({json:{type:String}})],U.prototype,"title",void 0),(0,r._)([(0,d.c)("title")],U.prototype,"writeTitle",null),(0,r._)([(0,a.Cb)({type:k,json:{write:!0}})],U.prototype,"relatedRecordsInfo",void 0),U=L=(0,r._)([(0,u.j)(N)],U);const G=U},97370:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var r,s=i(87397),n=(i(1867),i(9783),i(9385),i(82203)),o=i(23757),a=i(65482),l=i(17808),c=(i(17593),i(15392),i(11786),i(49886)),u=i(52227);let d=r=class extends c.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return h}static get empty(){return p}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=this.start?(0,u.JE)(this.start,e):null,i=this.end?(0,u.Nm)((0,u.JE)(this.end,e),1,e):null;return new r({start:t,end:i})}intersection(e){var t,i,s,n,o,a,l,c;if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const u=null!=(t=null==(i=this.start)?void 0:i.getTime())?t:-1/0,d=null!=(s=null==(n=this.end)?void 0:n.getTime())?s:1/0,h=null!=(o=null==(a=e.start)?void 0:a.getTime())?o:-1/0,p=null!=(l=null==(c=e.end)?void 0:c.getTime())?l:1/0;let f,m;if(h>=u&&h<=d?f=h:u>=h&&u<=p&&(f=u),d>=h&&d<=p?m=d:p>=u&&p<=d&&(m=p),!isNaN(f)&&!isNaN(m)){const e=new r;return e.start=f===-1/0?null:new Date(f),e.end=m===1/0?null:new Date(m),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:s,end:n}=this;return s&&(i.start=(0,u.Nm)(s,e,t)),n&&(i.end=(0,u.Nm)(n,e,t)),i}equals(e){if(!e)return!1;const t=this.start?this.start.getTime():this.start,i=this.end?this.end.getTime():this.end,r=e.start?e.start.getTime():e.start,s=e.end?e.end.getTime():e.end;return t===r&&i===s}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=this.start&&e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,i=this.end&&e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:i})}};(0,s._)([(0,n.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,s._)([(0,o.r)("end")],d.prototype,"readEnd",null),(0,s._)([(0,l.c)("end")],d.prototype,"writeEnd",null),(0,s._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,s._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,s._)([(0,n.Cb)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,s._)([(0,o.r)("start")],d.prototype,"readStart",null),(0,s._)([(0,l.c)("start")],d.prototype,"writeStart",null),d=r=(0,s._)([(0,a.j)("esri.TimeExtent")],d);const h=new d,p=new d({start:void 0,end:void 0}),f=d},58887:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r,s=i(87397),n=(i(1867),i(9783),i(9385),i(82203)),o=i(65482),a=(i(17593),i(15392),i(11786),i(49886)),l=i(52227);let c=r=class extends a.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return this.value*l.fM[this.unit]}clone(){return new r({value:this.value,unit:this.unit})}};(0,s._)([(0,n.Cb)({type:Number,json:{write:!0},nonNullable:!0})],c.prototype,"value",void 0),(0,s._)([(0,n.Cb)({type:l.vU.apiValues,json:{type:l.vU.jsonValues,read:l.vU.read,write:l.vU.write},nonNullable:!0})],c.prototype,"unit",void 0),c=r=(0,s._)([(0,o.j)("esri.TimeInterval")],c);const u=c},96145:(e,t,i)=>{"use strict";i.d(t,{Z:()=>C});var r,s=i(87397),n=(i(1867),i(18029)),o=(i(9783),i(82203)),a=i(60697),l=i(65482),c=(i(17593),i(15392),i(11786),i(49886)),u=i(3414),d=i(36458),h=i(9385),p=i(23757),f=i(17808),m=i(49749),y=i(18193),g=i(24639);let v=r=class extends c.wq{constructor(...e){super(...e),this.position=new m.Z([0,0,0]),this.heading=0,this.tilt=0,this.fov=55}normalizeCtorArgs(e,t,i,r){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){const s={position:e};return null!=t&&(s.heading=t),null!=i&&(s.tilt=i),null!=r&&(s.fov=r),s}return e}writePosition(e,t,i,r){const s=e.clone();s.x=(0,h.q9)(e.x||0),s.y=(0,h.q9)(e.y||0),s.z=e.hasZ?(0,h.q9)(e.z||0):e.z,t[i]=s.write(null,r)}readPosition(e,t){const i=new m.Z;return i.read(e,t),i.x=(0,h.q9)(i.x||0),i.y=(0,h.q9)(i.y||0),i.z=i.hasZ?(0,h.q9)(i.z||0):i.z,i}equals(e){return!!e&&this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position)}clone(){return new r({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})}};(0,s._)([(0,o.Cb)({type:m.Z,json:{write:{isRequired:!0}}})],v.prototype,"position",void 0),(0,s._)([(0,f.c)("position")],v.prototype,"writePosition",null),(0,s._)([(0,p.r)("position")],v.prototype,"readPosition",null),(0,s._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.p)((e=>g.LU.normalize((0,h.q9)(e))))],v.prototype,"heading",void 0),(0,s._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.p)((e=>(0,y.uZ)((0,h.q9)(e),-180,180)))],v.prototype,"tilt",void 0),(0,s._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],v.prototype,"fov",void 0),v=r=(0,s._)([(0,l.j)("esri.Camera")],v);const _=v;var b;let w=b=class extends c.wq{constructor(e){super(e),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null}castRotation(e){return(e%=360)<0&&(e+=360),e}clone(){return new b({rotation:this.rotation,scale:this.scale,targetGeometry:(0,n.pC)(this.targetGeometry)?this.targetGeometry.clone():null,camera:(0,n.pC)(this.camera)?this.camera.clone():null})}};function x(){return{enabled:!this.camera}}(0,s._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"rotation",void 0),(0,s._)([(0,a.p)("rotation")],w.prototype,"castRotation",null),(0,s._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"scale",void 0),(0,s._)([(0,o.Cb)({types:d.qM,json:{read:u.im,write:!0,origins:{"web-scene":{read:u.im,write:{overridePolicy:x}}}}})],w.prototype,"targetGeometry",void 0),(0,s._)([(0,o.Cb)({type:_,json:{write:!0}})],w.prototype,"camera",void 0),w=b=(0,s._)([(0,l.j)("esri.Viewpoint")],w);const C=w},2251:(e,t,i)=>{"use strict";i.d(t,{V:()=>l});var r=i(18575),s=i(9783),n=i(29107),o=i(17593);i(65869);const a=s.Z.getLogger("esri.assets");function l(e){if(!r.Z.assetsPath)throw a.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.Z("assets:path-not-set","config.assetsPath is not set");return(0,o.v_)(r.Z.assetsPath,e)}},68206:(e,t,i)=>{"use strict";i.d(t,{C:()=>m,b:()=>f});var r=i(95962),s=i(59225),n=i(34930),o=i(40586),a=i(48183),l=i(73723),c=i(72554),u=i(90360),d=i(24331),h=i(52436),p=i(43682);function f(e){const t=new n.kG,i=1===e.output;return t.include(s.w,{linearDepth:i}),t.include(p.c,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),i&&(t.include(h.F,e),t.vertex.uniforms.add("cameraNearFar","vec2"),t.varyings.add("linearDepth","float")),t.vertex.code.add(r.H`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${i?r.H`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:r.H`transformPosition(proj, view, vpos);`}
    }
  `),t.include(a.p,e),t.fragment.include(o.Y),e.multipassTerrainEnabled&&(t.fragment.include(l.S),t.include(d.l,e)),t.fragment.uniforms.add("eColor","vec4"),4===e.output&&t.include(c.bA),t.fragment.code.add(r.H`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${e.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${r.H.float(u.bf)}) {
      discard;
    }

    ${7===e.output?r.H`gl_FragColor = vec4(color.a);`:""}

    ${0===e.output?r.H`gl_FragColor = highlightSlice(color, vpos); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===e.output?r.H`outputHighlight();`:""};
    ${1===e.output?r.H`outputDepth(linearDepth);`:""};
  }
  `),t}var m=Object.freeze({__proto__:null,build:f})},77451:(e,t,i)=>{"use strict";i.d(t,{H:()=>r,a:()=>x,b:()=>_,c:()=>b});var r,s=i(43999),n=i(85221),o=i(46652),a=i(95962),l=i(34930),c=i(40586),u=i(443),d=i(48183),h=i(8890),p=i(54286),f=i(1741),m=i(53167),y=i(72554),g=i(295),v=i(90360);function _(e){const t=new l.kG,i=e.signedDistanceFieldEnabled;if(t.include(u.H),t.include(p.R,e),t.include(d.p,e),6===e.output)return t.include(m.R,e),t;t.include(h.c),t.fragment.include(f.n),t.fragment.include(c.Y),t.include(g.k,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),t.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&t.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&t.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),t.attributes.add("color","vec4"),t.attributes.add("size","vec2"),t.attributes.add("auxpos2","vec4"),t.vertex.code.add(a.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?a.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:a.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const r=a.H`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;
  `,s=e.pixelSnappingEnabled?i?a.H`
  posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:a.H`
  posProj += quadOffset;
  if (inputSize.x == size.x) {
    posProj = alignToPixelOrigin(posProj, viewport.zw);
  }`:a.H`posProj += quadOffset;`;t.vertex.code.add(a.H`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${r}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${a.H.float(v.bf)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${a.H.float(v.bf)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${s}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?a.H`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),t.fragment.uniforms.add("tex","sampler2D"),i&&(t.fragment.uniforms.add("outlineColor","vec4"),t.fragment.uniforms.add("outlineSize","float"));const n=e.debugDrawBorder?a.H`(isBorder > 0.0 ? 0.0 : ${a.H.float(v.F)})`:a.H.float(v.F),o=a.H`
    ${e.debugDrawBorder?a.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?a.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${a.H.float(v.bf)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:a.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?a.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&t.fragment.code.add(a.H`
      void main() {
        ${o}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&t.fragment.code.add(a.H`
    void main() {
      ${o}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(t.include(y.bA),t.fragment.code.add(a.H`
    void main() {
      ${o}
      ${e.binaryHighlightOcclusionEnabled?a.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t}function b(e,t=w){return e.textureIsSignedDistanceField?function(e,t,i){i[0]=e[0]*(t[2]-t[0])+t[0],i[1]=e[1]*(t[3]-t[1])+t[1]}(e.anchorPos,e.distanceFieldBoundingBox,t):(0,o.c)(t,e.anchorPos),t}(r||(r={})).bindUniforms=function(e,t,i){e.setUniform4fv("materialColor",t.color),t.textureIsSignedDistanceField&&(t.outlineColor[3]<=0||t.outlineSize<=0?(e.setUniform4fv("outlineColor",n.Z),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",t.outlineColor),e.setUniform1f("outlineSize",t.outlineSize))),e.setUniform2f("screenOffset",2*t.screenOffset[0]*i,2*t.screenOffset[1]*i),e.setUniform2fv("anchorPos",b(t))};const w=(0,s.a)();var x=Object.freeze({__proto__:null,build:_,get HUDMaterial(){return r},calculateAnchorPosForRendering:b})},6847:(e,t,i)=>{"use strict";i.d(t,{L:()=>a,b:()=>o});var r=i(95962),s=i(34930),n=i(80840);function o(e){const t=new s.kG;return t.include(n.j,e),t.vertex.uniforms.add("uModelViewMatrix","mat4"),t.vertex.uniforms.add("uProjectionMatrix","mat4"),t.attributes.add("start","vec3"),t.attributes.add("end","vec3"),t.attributes.add("up","vec3"),t.attributes.add("extrude","vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),t.vertex.uniforms.add("glowWidth","float"),t.vertex.uniforms.add("pixelToNDC","vec2"),t.vertex.code.add(r.H`
  void main() {
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = uModelViewMatrix * vec4(pos, 1);
    vec4 projPos = uProjectionMatrix * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    vec3 viewUp = (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;
    vec4 projPosUp = uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);
    vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
    ndcPos += length(lxy) * projExtrudeDir;

    vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
    vec3 viewPlaneNormal = (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;

    vViewStart = (uModelViewMatrix * vec4(start, 1)).xyz;
    vViewEnd = (uModelViewMatrix * vec4(end, 1)).xyz;
    vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));

    // Add enough padding in the X screen space direction for glow
    float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    uv = ndcPos * 0.5 + 0.5;
    gl_Position = vec4(ndcPos, 0, 1);
  }
  `),t.fragment.uniforms.add("globalAlpha","float"),t.fragment.uniforms.add("perScreenPixelRatio","float"),t.fragment.code.add(r.H`
  float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
    vec3 origin = mix(start, end, 0.5);
    vec3 basis = end - origin;
    vec3 posAtOrigin = pos - origin;

    float x = dot(normalize(basis), posAtOrigin);
    float y = dot(plane.xyz, posAtOrigin);

    float dx = max(abs(x) - length(basis), 0.0);
    float dy = y;

    float dist = length(vec2(dx, dy));

    float width = fwidth(y);
    float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
    float pixelDist = dist / min(width, maxPixelDistance);
    return abs(pixelDist);
  }

  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);

    vec4 color = laserlineProfile(distance);
    float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));

    gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
  }
  `),t}var a=Object.freeze({__proto__:null,build:o})},17884:(e,t,i)=>{"use strict";i.d(t,{L:()=>u,b:()=>c,d:()=>l});var r=i(18193),s=i(95962),n=i(34930),o=i(62647),a=i(80840);const l=(0,r.Vl)(6);function c(e){const t=new n.kG;return t.extensions.add("GL_OES_standard_derivatives"),t.include(o.k),t.include(a.j,e),t.fragment.uniforms.add("angleCutoff","vec2"),t.fragment.uniforms.add("globalAlpha","float"),e.heightManifoldEnabled&&t.fragment.uniforms.add("heightPlane","vec4"),e.pointDistanceEnabled&&t.fragment.uniforms.add("pointDistanceSphere","vec4"),e.lineVerticalPlaneEnabled&&t.fragment.uniforms.add("lineVerticalPlane","vec4").add("lineVerticalStart","vec3").add("lineVerticalEnd","vec3"),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&t.fragment.uniforms.add("maxPixelDistance","float"),e.intersectsLineEnabled&&t.fragment.uniforms.add("intersectsLineStart","vec3").add("intersectsLineEnd","vec3").add("intersectsLineDirection","vec3").add("intersectsLineRadius","float").add("perScreenPixelRatio","float"),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&t.fragment.code.add(s.H`
      float planeDistancePixels(vec4 plane, vec3 pos) {
        float dist = dot(plane.xyz, pos) + plane.w;
        float width = fwidth(dist);
        dist /= min(width, maxPixelDistance);
        return abs(dist);
      }`),e.pointDistanceEnabled&&t.fragment.code.add(s.H`
    float sphereDistancePixels(vec4 sphere, vec3 pos) {
      float dist = distance(sphere.xyz, pos) - sphere.w;
      float width = fwidth(dist);
      dist /= min(width, maxPixelDistance);
      return abs(dist);
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(s.H`
    float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
      float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
      return abs(dist) - radius;
    }
    `),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.fragment.code.add(s.H`
    bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
      vec3 dir = end - start;
      float t2 = dot(dir, pos - start);
      float l2 = dot(dir, dir);
      return t2 >= 0.0 && t2 <= l2;
    }
    `),t.fragment.code.add(s.H`
  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    vec4 color = vec4(0, 0, 0, 0);
  `),e.heightManifoldEnabled&&t.fragment.code.add(s.H`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
      vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `),e.pointDistanceEnabled&&t.fragment.code.add(s.H`
    {
      // distance to sphere
      float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
      vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
      float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));

      color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
    }
    `),e.lineVerticalPlaneEnabled&&t.fragment.code.add(s.H`
    {
      if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
        float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);

        vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
        float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));

        color = max(color, lineVerticalColor * lineVerticalAlpha);
      }
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(s.H`
    {
      if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
        float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
        vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
        float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));

        color = max(color, intersectsLineColor * intersectsLineAlpha);
      }
    }
    `),t.fragment.code.add(s.H`
    gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
  }
  `),t}var u=Object.freeze({__proto__:null,defaultAngleCutoff:l,build:c})},42219:(e,t,i)=>{"use strict";i.d(t,{a:()=>h});var r,s=i(87397),n=(i(1867),i(31641)),o=(i(9783),i(9385),i(82203)),a=i(65482),l=(i(17593),i(15392),i(11786),i(49886)),c=i(52684),u=i(19127);let d=r=class extends l.wq{constructor(){super(...arguments),this.color=new c.Z("white")}clone(){return new r({color:(0,n.d9)(this.color)})}};(0,s._)([(0,o.Cb)(u.aK)],d.prototype,"color",void 0),d=r=(0,s._)([(0,a.j)("esri.symbols.callouts.LineCallout3DBorder")],d);var h=d;Object.freeze({__proto__:null,get LineCallout3DBorder(){return d},default:h})},66967:(e,t,i)=>{"use strict";i.d(t,{R:()=>m,b:()=>f});var r=i(95962),s=i(34930),n=i(40586),o=i(48183),a=i(73723),l=i(90360),c=i(24331),u=i(40033),d=i(52436),h=i(61974),p=i(22682);function f(e){const t=new s.kG;t.extensions.add("GL_OES_standard_derivatives"),t.include(p.e),t.include(u.U,e),t.include(h.q,e),1===e.output&&t.include(d.F,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float");const i=e.falloffEnabled,f=e.innerColorEnabled;return f&&t.varyings.add("vLineDistance","float"),i&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(r.H`
		#define PERPENDICULAR(v) vec2(v.y, -v.x);
		#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0

		float interp(float ncp, vec4 a, vec4 b) {
			return (-ncp - a.z) / (b.z - a.z);
		}

		vec2 rotate(vec2 v, float a) {
			float s = sin(a);
			float c = cos(a);
			mat2 m = mat2(c, -s, s, c);
			return m * v;
		}
`),t.vertex.code.add(r.H`
    vec4 projectAndScale(vec4 pos) {
      vec4 posNdc = proj * pos;

      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system
      // that is twice scaled (going from -size:size).
      posNdc.xy *= screenSize / posNdc.w;
      return posNdc;
    }
`),t.vertex.code.add(r.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(r.H`
  void main(void) {
    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
      bool isJoin = abs(uv0.y)-3.0 < 0.0;

      float lineWidth = getSize() * pixelRatio;

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),e.stippleEnabled&&t.vertex.code.add(r.H`
      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment
      // or the end. If start, then use pos->next, otherwise use prev->pos to define the line segment
      // vector
      vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
      vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;

      // Scale s.t. it's in units of stipple pattern size.
      vec2 stippleSegmentDirection = stippleSegmentInfo.zw;
    `),t.vertex.code.add(r.H`
    left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
    right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);

    vec2 capDisplacementDir = vec2(0, 0);
    vec2 joinDisplacementDir = vec2(0, 0);
    float displacementLen = lineWidth;

    if (isJoin) {

      // JOIN handling ---------------------------------------------------
      // determine if vertex is on the "outside or "inside" of the join
      bool isOutside = ISOUTSIDE;

      // compute miter join position first
      joinDisplacementDir = normalize(left + right);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      // compute miter stretch
      if (leftLen > 0.001 && rightLen > 0.001) {
        float nDotSeg = dot(joinDisplacementDir, left);
        displacementLen /= length(nDotSeg * left - joinDisplacementDir);

        // limit displacement of inner vertices
        if (!isOutside) {
          displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
        }
      }

      if (isOutside && (displacementLen > miterLimit * lineWidth)) {
    `),e.roundJoins?t.vertex.code.add(r.H`
        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);

        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);
      `):t.vertex.code.add(r.H`
        // convert to bevel join if miterLimit is exceeded
        if (leftLen < 0.001) {
          joinDisplacementDir = right;
        }
        else if (rightLen < 0.001) {
          joinDisplacementDir = left;
        }
        else {
          joinDisplacementDir = isStartVertex ? right : left;
        }
        joinDisplacementDir = normalize(joinDisplacementDir);
        joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
  `),t.vertex.code.add(r.H`
        displacementLen = lineWidth;
      }
    } else {
    // CAP handling ---------------------------------------------------
    if (leftLen < 0.001) {
      joinDisplacementDir = right;
    }
    else if (rightLen < 0.001) {
      joinDisplacementDir = left;
    }
    else {
      joinDisplacementDir = isStartVertex ? right : left;
    }
    joinDisplacementDir = normalize(joinDisplacementDir);
    joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
    displacementLen = lineWidth;

    capDisplacementDir = isStartVertex ? -right : left;
  `),e.roundCaps?t.vertex.code.add(r.H`
    float angle = subdivisionFactor*PI*0.5;
    joinDisplacementDir *= cos(angle);
    capDisplacementDir *= sin(angle);
    `):t.vertex.code.add(r.H`
    capDisplacementDir *= subdivisionFactor;
    `),t.vertex.code.add(r.H`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||f?r.H`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${f?r.H`vLineDistance = lineDist;`:""}
  ${i?r.H`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(r.H`
    {
      // Compute the stipple pattern UV coordinate from the actual position, based on the origin
      // and direction of the line segment on which the stipple pattern is based.

      // Project the vector from the origin of the segment to the vertex onto the line segment.
      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)
      vec2 posVec = pos.xy - stippleSegmentOrigin;

      float stippleSegmentDirectionLength = length(stippleSegmentDirection);
    `),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(r.H`
      float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
      float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
      stipplePatternUvMax = roundedNumberOfPatternRepeats;
      `),t.vertex.code.add(r.H`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(r.H`
      // Convert back into NDC
      pos.xy = pos.xy / screenSize * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      gl_Position = pos;
    }
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(a.S),t.include(c.l,e)),t.include(o.p,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(n.Y),t.fragment.code.add(r.H`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(r.H`
    float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
    float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
    float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
    color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);
    `)),t.fragment.code.add(r.H`
    vec4 finalColor = blendStipple(color, stippleAlpha);
  `),e.falloffEnabled&&t.fragment.code.add(r.H`
    finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);
    `),t.fragment.code.add(r.H`
    if (finalColor.a < ${r.H.float(l.bf)}) {
      discard;
    }

    ${7===e.output?r.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?r.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?r.H`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?r.H`outputDepth(linearDepth);`:""}
  }
    vec3 reconstructPosition(vec2 fragCoord, float depth) {
      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
    }
  `)}function o(e,t){e.extensions.add("GL_OES_standard_derivatives"),e.fragment.include(s.S),e.include(n),e.fragment.uniforms.add("glowColor","vec3"),e.fragment.uniforms.add("glowWidth","float"),e.fragment.uniforms.add("glowFalloff","float"),e.fragment.uniforms.add("innerColor","vec3"),e.fragment.uniforms.add("innerWidth","float"),e.fragment.uniforms.add("depthMap","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("frameColor","sampler2D"),t.contrastControlEnabled&&e.fragment.uniforms.add("globalAlphaContrastBoost","float"),e.fragment.code.add(r.H`
  vec4 blendPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;

    return vec4(
      source.rgb + dest.rgb * oneMinusSourceAlpha,
      source.a + dest.a * oneMinusSourceAlpha
    );
  }
  `),e.fragment.code.add(r.H`
  vec4 premultipliedColor(vec3 rgb, float alpha) {
    return vec4(rgb * alpha, alpha);
  }
  `),e.fragment.code.add(r.H`
  vec4 laserlineProfile(float dist) {
    if (dist > glowWidth) {
      return vec4(0.0);
    }

    float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
    float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);

    return blendPremultiplied(
      premultipliedColor(innerColor, innerAlpha),
      premultipliedColor(glowColor, glowAlpha)
    );
  }
  `),e.fragment.code.add(r.H`
  bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
    float depth = linearDepthFromTexture(depthMap, uv, nearFar);

    if (-depth == nearFar[0]) {
      return false;
    }

    pos = reconstructPosition(gl_FragCoord.xy, depth);
    normal = normalize(cross(dFdx(pos), dFdy(pos)));

    float ddepth = fwidth(depth);
    depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);

    return true;
  }
  `),t.contrastControlEnabled?e.fragment.code.add(r.H`
    float rgbToLuminance(vec3 color) {
      return dot(vec3(0.2126, 0.7152, 0.0722), color);
    }

    vec4 laserlineOutput(vec4 color) {
      float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
      float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);

      return color * alpha;
    }
    `):e.fragment.code.add(r.H`
    vec4 laserlineOutput(vec4 color) {
      return color * globalAlpha;
    }
    `)}},62647:(e,t,i)=>{"use strict";i.d(t,{k:()=>s});var r=i(95962);function s(e){e.attributes.add("position","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(r.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `)}},48183:(e,t,i)=>{"use strict";i.d(t,{p:()=>l});var r,s=i(18029),n=i(94528),o=i(61168),a=i(95962);function l(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=a.H`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,r=a.H`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,s=t.sliceHighlightDisabled?a.H`#define highlightSlice(_color_, _pos_) (_color_)`:a.H`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(s)}else{const i=a.H`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}(r=l||(l={})).bindUniformsWithOrigin=function(e,t,i){r.bindUniforms(e,t,i.slicePlane,i.origin)},r.bindUniforms=function(e,t,i,r){t.slicePlaneEnabled&&((0,s.pC)(i)?(r?((0,o.f)(c,i.origin,r),e.setUniform3fv("slicePlaneOrigin",c)):e.setUniform3fv("slicePlaneOrigin",i.origin),e.setUniform3fv("slicePlaneBasis1",i.basis1),e.setUniform3fv("slicePlaneBasis2",i.basis2)):(e.setUniform3fv("slicePlaneBasis1",n.Z),e.setUniform3fv("slicePlaneBasis2",n.Z),e.setUniform3fv("slicePlaneOrigin",n.Z)))};const c=(0,n.c)()},59225:(e,t,i)=>{"use strict";i.d(t,{w:()=>s});var r=i(95962);function s(e,t){t.linearDepth?e.vertex.code.add(r.H`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(r.H`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},40033:(e,t,i)=>{"use strict";i.d(t,{U:()=>s});var r=i(95962);function s(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(r.H`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(r.H`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(r.H`
    uniform float vvOpacityValues[vvOpacityNumber];
    uniform float vvOpacityOpacities[vvOpacityNumber];

    float interpolateOpacity( float value ){
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity( vec4 color ){
      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.vertex.code.add(r.H`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.H`
    uniform float vvColorValues[vvColorNumber];
    uniform vec4 vvColorColors[vvColorNumber];

    vec4 interpolateColor( float value ) {
      if (value <= vvColorValues[0]) {
        return vvColorColors[0];
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return mix(vvColorColors[i-1], vvColorColors[i], f);
        }
      }

      return vvColorColors[vvColorNumber - 1];
    }

    vec4 getColor(){
      return applyOpacity(interpolateColor(colorFeatureAttribute));
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(r.H`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))}},43682:(e,t,i)=>{"use strict";i.d(t,{c:()=>s});var r=i(95962);function s(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(r.H`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(r.H`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},70290:(e,t,i)=>{"use strict";i.d(t,{L:()=>n});var r=i(95962),s=i(8890);function n(e,t){const i=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(s.c),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(r.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?r.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:r.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?r.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(r.H`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function o(e,t,i,r=a){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*i),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}(n||(n={})).bindUniforms=function(e,t,i){if(!t.verticalOffset)return;const r=o(t.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),s=i.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*s,r.perDistance,r.minWorldLength,r.maxWorldLength)};const a={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},443:(e,t,i)=>{"use strict";i.d(t,{H:()=>s});var r=i(95962);function s(e){const t=r.H`
    vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `,i=r.H`

    vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}},54286:(e,t,i)=>{"use strict";i.d(t,{R:()=>o});var r,s=i(95962),n=i(8890);function o(e,t){const i=e;i.include(n.c),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),t.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(s.H`
    struct ProjectHUDAux {
      vec3 posModel;
      vec3 posView;
      vec3 vnormal;

      float distanceToCamera;
      float absCosAngle;
    };
  `),i.vertex.code.add(s.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = sign(pointGroundDistance);

      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation
      // we take the absolute value because the sign that is dropped is
      // instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);

        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.isDraped||i.vertex.code.add(s.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `),i.vertex.code.add(s.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.screenSizePerspectiveEnabled&&(t.verticalOffsetEnabled||1===t.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.verticalOffsetEnabled?t.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.verticalOffsetEnabled?s.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==t.screenCenterOffsetUnitsEnabled?s.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===t.screenCenterOffsetUnitsEnabled?t.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(s.H`
    bool testVisibilityHUD(vec4 posProj) {
      // For occlusion testing, use the nearest pixel center to avoid
      // subpixel filtering messing up the color we use to test for
      vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);

      // the red pixel here indicates that the occlusion pixel passed the depth test against solid geometry and was written
      // the green pixel stores transparency of transparent geometry (1.0 -> fully transparent)
      // note that we also check against green == 0.0, i.e. transparent geometry that has opaque parts

      // thus we render visible pixels that are occluded by semi-transparent (but not fully transparent!) geometry here
      if (uRenderTransparentlyOccludedHUD > 0.5) {
        // multiplying by uRenderTransparentlyOccludedHUD allows us to ignore the second condition if
        // uRenderTransparentlyOccludedHUD = 0.75
        return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
      }

      // and visible pixels that are not occluded by semi-transparent geometry here
      return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
    }
  `)}(r=o||(o={})).bindUniforms=function(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75)},r.bindVisibilityTexture=function(e,t,i){t.setUniform1i("hudVisibilityTexture",4),e.bindTexture(i.hudVisibilityTexture,4),e.setActiveTexture(0)}},53167:(e,t,i)=>{"use strict";i.d(t,{A:()=>r,R:()=>o});var r,s=i(95962),n=i(71751);function o(e,t){t.multipassGeometryEnabled&&e.vertex.include(n.S),e.vertex.code.add(s.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.multipassGeometryEnabled?s.H`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    }
    else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(s.H`
  void main() {
    gl_FragColor = color;
  }
  `)}(r||(r={})).bindUniforms=function(e){e.setUniform4f("color",1,1,1,1)}},52436:(e,t,i)=>{"use strict";i.d(t,{F:()=>n});var r=i(95962),s=i(1741);function n(e,t){e.fragment.include(s.n),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(r.H`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}},72554:(e,t,i)=>{"use strict";i.d(t,{bA:()=>a});var r=i(85221),s=i(95962);const n=(0,r.b)(1,1,0,1),o=(0,r.b)(1,0,1,1);function a(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",n).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(s.H`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}(a||(a={})).bindOutputHighlight=function(e,t,i){e.bindTexture(i.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}},73723:(e,t,i)=>{"use strict";i.d(t,{S:()=>n});var r=i(95962),s=i(1741);function n(e){e.include(s.n),e.code.add(r.H`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}},61974:(e,t,i)=>{"use strict";i.d(t,{q:()=>s});var r=i(95962);function s(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float"),e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),e.fragment.code.add(r.H`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(r.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(r.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(r.H`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)}},71751:(e,t,i)=>{"use strict";i.d(t,{d:()=>o,S:()=>n});var r=i(95962),s=i(73723);function n(e){e.include(s.S),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("cameraNearFar","vec2"),e.code.add(r.H`
    //Compare the linearized depths of the vertex/fragment and the geometry in the scene. If vertex/fragment is behind geometry, don't draw it.
    bool geometryDepthTest(vec2 pos, float elementDepth){

      float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
      if(elementDepth < (geometryDepth - 1.0)){
        return true;
      }
      return false;
    }
  `)}function o(e,t,i){i.multipassGeometryEnabled&&i.geometryLinearDepthTexture&&(e.setUniform1i("geometryDepthTexture",11),t.bindTexture(i.geometryLinearDepthTexture,11))}},24331:(e,t,i)=>{"use strict";i.d(t,{C:()=>n,l:()=>s});var r=i(95962);function s(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(r.H`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function n(e,t,i){i.multipassTerrainEnabled&&i.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(i.terrainLinearDepthTexture,10))}},22682:(e,t,i)=>{"use strict";i.d(t,{e:()=>s});var r=i(95962);function s(e){e.vertex.code.add(r.H`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(r.H`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},295:(e,t,i)=>{"use strict";i.d(t,{k:()=>s});var r=i(95962);function s(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r.H`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(r.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r.H`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r.H`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,i){t(e,i),i.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",i.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",i.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,i){t(e,i),i.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",i.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",i.vvSymbolRotationMatrix))}}(s||(s={}))},90360:(e,t,i)=>{"use strict";i.d(t,{sj:()=>o,F:()=>s,bf:()=>n});var r=i(95962);const s=.1,n=.001;function o(e,t){const i=e.fragment;switch(t.alphaDiscardMode){case 0:i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r.H.float(n)}) { discard; } }
      `);break;case 1:i.code.add(r.H`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},40586:(e,t,i)=>{"use strict";i.d(t,{Y:()=>s});var r=i(95962);function s(e){e.code.add(r.H`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}},1741:(e,t,i)=>{"use strict";i.d(t,{n:()=>s});var r=i(95962);function s(e){e.code.add(r.H`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},8890:(e,t,i)=>{"use strict";i.d(t,{c:()=>n});var r=i(95962),s=i(16958);function n(e){e.vertex.code.add(r.H`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(r.H`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(r.H`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(r.H`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(r.H`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(r.H`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(r.H`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }