self.webpackChunkRemoteClient([49,60],{106:function(e,t,r){"use strict";function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function i(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const r=t||n(e),a=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i}))},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return g})),r.d(t,"g",(function(){return d}));var a=r(88),i=r(0),n=r(2),o=r(62),l=r(76),s=r(75),c=r(106);const u=n.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new l.a,b=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function y(e,t,r){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.ColorVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,l=n?null:t,s=l&&l.attributes;let c=n?t:null;const p=a.field,{ipData:b,hasExpression:d}=a.cache;let y=a.cache.compiledFunc;if(!p&&!d){const e=a.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(d){if(!Object(i.h)(r)||!Object(i.h)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(l,n);if(!y){const e=t.createSyntaxTree(a.valueExpression);y=t.createFunction(e),a.cache.compiledFunc=y}c=t.executeFunction(y,o)}else s&&(c=s[p]);const m=a.normalizationField,f=s?parseFloat(s[m]):void 0;if(null!=c&&(!m||n||!isNaN(f)&&0!==f)){isNaN(f)||n||(c/=f);const e=w(c,b);if(e){const t=e[0],n=e[1],l=t===n?a.stops[t].color:o.a.blendColors(a.stops[t].color,a.stops[n].color,e[2],Object(i.h)(r)?r.color:void 0);return new o.a(l)}}}function m(e,t,r){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.OpacityVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,o=n?null:t,l=o&&o.attributes;let s=n?t:null;const c=a.field,{ipData:p,hasExpression:b}=a.cache;let d=a.cache.compiledFunc;if(!c&&!b){const e=a.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof s)if(b){if(Object(i.g)(r)||Object(i.g)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(o,n);if(!d){const e=t.createSyntaxTree(a.valueExpression);d=t.createFunction(e),a.cache.compiledFunc=d}s=t.executeFunction(d,l)}else l&&(s=l[c]);const y=a.normalizationField,m=l?parseFloat(l[y]):void 0;if(null!=s&&(!y||n||!isNaN(m)&&0!==m)){isNaN(m)||n||(s/=m);const e=w(s,p);if(e){const t=e[0],r=e[1];if(t===r)return a.stops[t].opacity;{const i=a.stops[t].opacity;return i+(a.stops[r].opacity-i)*e[2]}}}}function f(e,t,r){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.RotationVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=a.axis||"heading",o="heading"===n&&"arithmetic"===a.rotationType?90:0,l="heading"===n&&"arithmetic"===a.rotationType?-1:1,s="number"==typeof t?null:t,c=s&&s.attributes,p=a.field,{hasExpression:b}=a.cache;let d=a.cache.compiledFunc,y=0;if(!p&&!b)return y;if(b){if(Object(i.g)(r)||Object(i.g)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(s,n);if(!d){const e=t.createSyntaxTree(a.valueExpression);d=t.createFunction(e),a.cache.compiledFunc=d}y=t.executeFunction(d,o)}else c&&(y=c[p]||0);return y="number"!=typeof y||isNaN(y)?null:o+l*y,y}function O(e,t,r){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=function(e,t,r,a,n){switch(t.transformationType){case"additive":return function(e,t,r,a){return e+(h(t.minSize,r,a)||t.minDataValue)}(e,t,r,a);case"constant":return function(e,t,r){const a=e.stops;let i=a&&a.length&&a[0].size;return null==i&&(i=e.minSize),h(i,t,r)}(t,r,a);case"clamped-linear":return function(e,t,r,a){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),o=h(t.minSize,r,a),l=h(t.maxSize,r,a),s=Object(i.h)(a)?a.shape:void 0;if(e<=t.minDataValue)return o;if(e>=t.maxDataValue)return l;if("area"===t.scaleBy&&s){const e="circle"===s,t=e?b*(o/2)**2:o*o,r=t+n*((e?b*(l/2)**2:l*l)-t);return e?2*Math.sqrt(r/b):Math.sqrt(r)}return o+n*(l-o)}(e,t,r,a);case"proportional":return function(e,t,r,a){const n=Object(i.h)(a)?a.shape:void 0,o=e/t.minDataValue,l=h(t.minSize,r,a),s=h(t.maxSize,r,a);let c=null;return c="circle"===n?2*Math.sqrt(o*(l/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(o*l**2):o*l,j(c,l,s)}(e,t,r,a);case"stops":return function(e,t,r,a,i){const[n,o,l]=w(e,i);if(n===o)return h(t.stops[n].size,r,a);{const e=h(t.stops[n].size,r,a);return e+(h(t.stops[o].size,r,a)-e)*l}}(e,t,r,a,n);case"real-world-size":return function(e,t,r,a){const n=(Object(i.h)(a)&&a.resolution?a.resolution:1)*s.a[t.valueUnit],o=h(t.minSize,r,a),l=h(t.maxSize,r,a),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/b)/n:"radius"===c||"distance"===c?2*e/n:e/n,j(u,o,l)}(e,t,r,a);case"identity":return e;case"unknown":return null}}(function(e,t,r){const a="number"==typeof t,n=a?null:t,o=n&&n.attributes;let l=a?t:null;const{isScaleDriven:s}=e.cache;let p=e.cache.compiledFunc;if(s){const t=Object(i.h)(r)?r.scale:void 0,a=Object(i.h)(r)?r.view:void 0;l=null==t||"3d"===a?function(e){let t=null,r=null;const a=e.stops;return a?(t=a[0].value,r=a[a.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!a)switch(e.inputValueType){case"expression":{if(Object(i.g)(r)||Object(i.g)(r.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},a=r.arcade.arcadeUtils,o=a.getViewInfo(t),s=a.createExecContext(n,o);if(!p){const t=a.createSyntaxTree(e.valueExpression);p=a.createFunction(t),e.cache.compiledFunc=p}l=a.executeFunction(p,s);break}case"field":o&&(l=o[e.field]);break;case"unknown":l=null}if(!Object(c.d)(l))return null;if(a||!e.normalizationField)return l;const b=o?parseFloat(o[e.normalizationField]):null;return Object(c.d)(b)&&0!==b?l/b:null}(a,t,r),a,t,r,a.cache.ipData);return null==n||isNaN(n)?0:n}function h(e,t,r){return null==e?null:Object(c.c)(e)?O(e,t,r):Object(c.d)(e)?e:null}function j(e,t,r){return Object(c.d)(r)&&e>r?r:Object(c.d)(t)&&e<t?t:e}function g(e,t,r){const{isScaleDriven:a}=e.cache;if(!(a&&"3d"===r||t))return null;const i={scale:t,view:r};let n=h(e.minSize,p,i),o=h(e.maxSize,p,i);if(null!=n||null!=o){if(n>o){const e=o;o=n,n=e}return{minSize:n,maxSize:o}}}function w(e,t){if(!t)return;let r=0,a=t.length-1;return t.some(((t,i)=>e<t?(a=i,!0):(r=i,!1))),[r,a,(e-t[r])/(t[a]-t[r])]}function v(e,t,r){const i=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":O(n,t,r);switch(n.axis){case"width":i[0]=e;break;case"depth":i[1]=e;break;case"height":i[2]=e;break;case"width-and-depth":i[0]=e,i[1]=e;break;case"all":case void 0:case null:i[0]=e,i[1]=e,i[2]=e;break;default:Object(a.a)(n.axis)}}return i}},156:function(e,t,r){"use strict";var a=r(13),i=(r(3),r(6)),n=(r(2),r(5),r(15)),o=r(59),l=r(18),s=r(56),c=(r(21),r(36),r(37),r(55));const u=new o.a({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends c.a{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=u.toJSON(e)}writePrototype(e,t){t.prototype=Object(i.c)(Object(i.a)(e),!0)}writeThumbnail(e,t){t.thumbnail=Object(i.c)(Object(i.a)(e))}};Object(a.a)([Object(n.b)({json:{write:!0}})],p.prototype,"name",void 0),Object(a.a)([Object(n.b)({json:{write:!0}})],p.prototype,"description",void 0),Object(a.a)([Object(n.b)({json:{read:u.read,write:u.write}})],p.prototype,"drawingTool",void 0),Object(a.a)([Object(s.a)("drawingTool")],p.prototype,"writeDrawingTool",null),Object(a.a)([Object(n.b)({json:{write:!0}})],p.prototype,"prototype",void 0),Object(a.a)([Object(s.a)("prototype")],p.prototype,"writePrototype",null),Object(a.a)([Object(n.b)({json:{write:!0}})],p.prototype,"thumbnail",void 0),Object(a.a)([Object(s.a)("thumbnail")],p.prototype,"writeThumbnail",null),p=Object(a.a)([Object(l.a)("esri.layers.support.FeatureTemplate")],p);var b=p;t.a=b},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(13),i=(r(3),r(2),r(5),r(15)),n=r(18);r(21),r(36),r(37);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return Object(a.a)([Object(i.b)({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=Object(a.a)([Object(n.a)("esri.layers.mixins.CustomParametersMixin")],t),t}},206:function(e,t,r){"use strict";var a=r(13),i=(r(3),r(6)),n=(r(2),r(5),r(15)),o=r(57),l=r(18),s=r(56),c=(r(21),r(36),r(37),r(55)),u=r(132),p=r(128),b=r(129),d=(r(148),r(156));let y=class extends c.a{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r in e)if(e.hasOwnProperty(r)){const a=e[r];switch(a.type){case"range":t[r]=b.a.fromJSON(a);break;case"codedValue":t[r]=u.a.fromJSON(a);break;case"inherited":t[r]=p.a.fromJSON(a)}}return t}writeDomains(e,t){const r={};for(const t in e)e.hasOwnProperty(t)&&(r[t]=e[t]&&e[t].toJSON());Object(i.c)(r),t.domains=r}readTemplates(e){return e&&e.map((e=>new d.a(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};Object(a.a)([Object(n.b)({json:{write:!0}})],y.prototype,"id",void 0),Object(a.a)([Object(n.b)({json:{write:!0}})],y.prototype,"name",void 0),Object(a.a)([Object(n.b)({json:{write:!0}})],y.prototype,"domains",void 0),Object(a.a)([Object(o.a)("domains")],y.prototype,"readDomains",null),Object(a.a)([Object(s.a)("domains")],y.prototype,"writeDomains",null),Object(a.a)([Object(n.b)({json:{write:!0}})],y.prototype,"templates",void 0),Object(a.a)([Object(o.a)("templates")],y.prototype,"readTemplates",null),Object(a.a)([Object(s.a)("templates")],y.prototype,"writeTemplates",null),y=Object(a.a)([Object(l.a)("esri.layers.support.FeatureType")],y);var m=y;t.a=m},421:function(e,t,r){"use strict";r.r(t);var a=r(13),i=(r(3),r(6)),n=r(9),o=r(0),l=r(2),s=(r(5),r(15)),c=r(57),u=r(40),p=r(18),b=r(56),d=r(16),y=(r(21),r(36),r(37),r(83)),m=r(60),f=r(61),O=(r(63),r(69)),h=r(113),j=r(145),g=r(154),w=r(171),v=(r(122),r(76)),S=r(87),x=r(84),T=r(289),N=r(99),V=r(209),F=r(126),C=r(124),E=r(96),M=r(107),D=r(167),J=r(125),L=r(241);const z=O.a.ofType(v.a);l.a.getLogger("esri.support.GraphicsCollection");let R=class extends z{constructor(e){super(e),this.on("before-add",(e=>{e.item||e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(({item:e})=>{e.layer=null}))}destroy(){this._unownAll()}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())}_createNewInstance(e){return new z(e)}_ownAll(){this.items.forEach((e=>this._own(e)))}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_unownAll(){this.items.forEach((e=>this._unown(e)))}_unown(e){e.layer===this.owner&&(e.layer=null)}};Object(a.a)([Object(s.b)()],R.prototype,"owner",null),R=Object(a.a)([Object(p.a)("esri.support.GraphicsCollection")],R);var I=R;let _=class extends(Object(C.a)(Object(M.a)(S.a))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new I,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(a.a)([Object(s.b)({type:J.a})],_.prototype,"elevationInfo",void 0),Object(a.a)([Object(s.b)(((e="graphics")=>({type:R,cast:L.a,set(t){const r=Object(L.b)(t,this._get(e),R);r.owner=this,this._set(e,r)}}))())],_.prototype,"graphics",void 0),Object(a.a)([Object(s.b)({type:["show","hide"]})],_.prototype,"listMode",void 0),Object(a.a)([Object(s.b)()],_.prototype,"screenSizePerspectiveEnabled",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],_.prototype,"type",void 0),Object(a.a)([Object(s.b)({constructOnly:!0})],_.prototype,"internal",void 0),_=Object(a.a)([Object(p.a)("esri.layers.GraphicsLayer")],_);var P=_,k=r(443);function A(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new F.a({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),U=new F.a({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let q=class extends P{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};Object(a.a)([Object(s.b)({readOnly:!0})],q.prototype,"sublayers",null),Object(a.a)([Object(s.b)()],q.prototype,"layer",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],q.prototype,"visibilityMode",void 0),q=Object(a.a)([Object(p.a)("esri.layers.MapNotesLayer.MapNotesSublayer")],q);const B=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new j.a).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new h.a).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new g.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new g.a).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new w.a).toJSON()}];let $=class extends(Object(C.a)(Object(M.a)(Object(N.a)(Object(E.a)(Object(x.a)(S.a)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=m.a.WGS84,this.sublayers=new O.a(B.map((e=>new q({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!A(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!A(t))return null;const a=t.layers.map((e=>{const t=new D.default;return t.read(e,r),t}));return new O.a({items:a})}readLegacyfeatureCollectionJSON(e,t){return A(t)?Object(i.a)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new f.a({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:m.a.WGS84});const r=m.a.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?f.a.fromJSON(r).union(e):e}),new f.a({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?m.a.fromJSON(t.layers[0].layerDefinition.spatialReference):m.a.WGS84}readSublayers(e,t,r){if(A(t))return null;const a=[];for(let e=0;e<t.layers.length;e++){var i;const{layerDefinition:r,featureSet:n}=t.layers[e],o=null!=(i=r.geometryType)?i:n.geometryType,l=B.find((e=>{var t,a,i;return o===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(a=t.renderer)||null==(i=a.symbol)?void 0:i.type)===e.identifyingSymbol.type}));if(l){const e=new q({id:l.layerId,title:r.name,layer:this,graphics:n.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:a})=>v.a.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:a})))});a.push(e)}}return new O.a(a)}writeSublayers(e,t,r,a){const{minScale:i,maxScale:l}=this;if(Object(o.g)(e))return;const s=e.some((e=>e.graphics.length>0));var c;if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null==a||null==(c=a.messages)||c.push(new d.a("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const u=[];let p=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(Object(o.h)(e.geometry)){p=e.geometry.spatialReference.toJSON();break e}for(const t of B){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(u,r,t,i,l,p,a)}Object(n.c)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(i.a)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(o.g)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(o.h)(a.geometry)){const r=a.geometry;e?Object(y.c)(r.spatialReference,e)||(Object(T.a)(r.spatialReference,e)||Object(T.d)()||await Object(T.f)(),a.geometry=Object(T.g)(r,e)):e=r.spatialReference,t.push(a)}const r=await Object(V.a)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return Object(o.g)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,a,n,l,s){const c=[];if(!Object(o.g)(t)){for(const e of t.graphics)this._writeMapNote(c,e,r.geometryType,s);this._normalizeObjectIds(c,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(i.a)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:a,maxScale:n,objectIdField:"OBJECTID",fields:[G.toJSON(),U.toJSON()],spatialReference:l},featureSet:{features:c,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,a){if(Object(o.g)(t))return;const{geometry:i,symbol:n,popupTemplate:l}=t;if(Object(o.g)(i))return;var s,c;if(i.type!==r)return void(null==a||null==(s=a.messages)||s.push(new u.a("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(Object(o.g)(n))return void(null==a||null==(c=a.messages)||c.push(new u.a("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};Object(o.h)(l)&&(p.popupInfo=l.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let a=Object(k.a)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=a++),i.add(e[r])}}};Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"capabilities",void 0),Object(a.a)([Object(c.a)(["portal-item","web-map"],"capabilities",["layers"])],$.prototype,"readCapabilities",null),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"featureCollections",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"featureCollections",["layers"])],$.prototype,"readFeatureCollections",null),Object(a.a)([Object(s.b)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],$.prototype,"featureCollectionJSON",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],$.prototype,"readLegacyfeatureCollectionJSON",null),Object(a.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],$.prototype,"featureCollectionType",void 0),Object(a.a)([Object(s.b)({json:{write:!1}})],$.prototype,"fullExtent",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"fullExtent",["layers"])],$.prototype,"readFullExtent",null),Object(a.a)([Object(s.b)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],$.prototype,"legendEnabled",void 0),Object(a.a)([Object(s.b)({type:["show","hide"]})],$.prototype,"listMode",void 0),Object(a.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"minScale",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"minScale",["layers"])],$.prototype,"readMinScale",null),Object(a.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!1}})],$.prototype,"maxScale",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"maxScale",["layers"])],$.prototype,"readMaxScale",null),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"multipointLayer",null),Object(a.a)([Object(s.b)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],$.prototype,"operationalLayerType",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"pointLayer",null),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"polygonLayer",null),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"polylineLayer",null),Object(a.a)([Object(s.b)({type:m.a})],$.prototype,"spatialReference",void 0),Object(a.a)([Object(c.a)(["web-map","portal-item"],"spatialReference",["layers"])],$.prototype,"readSpatialReference",null),Object(a.a)([Object(s.b)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],$.prototype,"sublayers",void 0),Object(a.a)([Object(c.a)("web-map","sublayers",["layers"])],$.prototype,"readSublayers",null),Object(a.a)([Object(b.a)("web-map","sublayers")],$.prototype,"writeSublayers",null),Object(a.a)([Object(s.b)({readOnly:!0})],$.prototype,"textLayer",null),Object(a.a)([Object(s.b)()],$.prototype,"title",void 0),Object(a.a)([Object(s.b)({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=Object(a.a)([Object(p.a)("esri.layers.MapNotesLayer")],$);var W=$;t.default=W},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const a=1;function i(e,t){let r=0;for(const i of t){var a;const t=null==(a=i.attributes)?void 0:a[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(100),i=r(72);const n={inches:Object(i.b)(1,"meters","inches"),feet:Object(i.b)(1,"meters","feet"),"us-feet":Object(i.b)(1,"meters","us-feet"),yards:Object(i.b)(1,"meters","yards"),miles:Object(i.b)(1,"meters","miles"),"nautical-miles":Object(i.b)(1,"meters","nautical-miles"),millimeters:Object(i.b)(1,"meters","millimeters"),centimeters:Object(i.b)(1,"meters","centimeters"),decimeters:Object(i.b)(1,"meters","decimeters"),meters:Object(i.b)(1,"meters","meters"),kilometers:Object(i.b)(1,"meters","kilometers"),"decimal-degrees":1/Object(i.h)(1,"meters",a.a.radius)}},88:function(e,t,r){"use strict";function a(e){}r.d(t,"a",(function(){return a})),r(3)}});