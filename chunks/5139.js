(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[5139],{41730:(e,t,s)=>{"use strict";s.d(t,{y:()=>j});var i=s(87397),r=(s(1867),s(9783),s(9385),s(82203)),n=s(65482),a=(s(17593),s(15392),s(11786),s(50519)),o=s(46581),h=s(66119),l=s(49886);let p=class extends l.wq{};p=(0,i._)([(0,n.j)("esri.views.layers.support.ClipArea")],p);const d=p;var u;let c=u=class extends d{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,i._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,i._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,i._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],c.prototype,"version",null),c=u=(0,i._)([(0,n.j)("esri.views.layers.support.ClipRect")],c);const y=c;var g,v=s(52726),w=s(78927),b=s(83746),_=s(10114),m=s(3414);s(36458);const f={base:w.Z,key:"type",typeMap:{extent:b.Z,polygon:_.Z}};let C=g=class extends d{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};(0,i._)([(0,r.Cb)({types:f,json:{read:m.im,write:!0}})],C.prototype,"geometry",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],C.prototype,"version",null),C=g=(0,i._)([(0,n.j)("esri.views.layers.support.Geometry")],C);const R=C;let q=class extends d{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],q.prototype,"path",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],q.prototype,"version",null),q=(0,i._)([(0,n.j)("esri.views.layers.support.Path")],q);const V=q,S=a.Z.ofType({key:"type",base:d,typeMap:{rect:y,path:V,geometry:R}}),j=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new S,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,h.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,h.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,h.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,n=!r;!s&&e<=i&&(s=!0),!n&&e>=r&&(n=!0),t=s&&n}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,i._)([(0,r.Cb)({type:S,set(e){const t=(0,o.Z)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,i._)([(0,r.Cb)()],t.prototype,"updating",null),(0,i._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,i._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],t),t}},95139:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(87397),r=(s(1867),s(9783),s(9385),s(82203),s(65482)),n=(s(17593),s(15392),s(11786),s(70314)),a=s(14177),o=s(90215),h=s(53849),l=s(41730);let p=class extends((0,l.y)(a.Z)){constructor(){super(...arguments),this._handles=new n.Z,this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,t){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.map((s=>s.hitTest(e,t)));return Promise.all(s).then((e=>e.filter(((e,t)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const t=new o.Z({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new h.Z(this.view.featuresTilingScheme)});t.renderer=e.renderer,this._popupTemplates.set(t,e.popupTemplate),this.graphicsViews.push(t),this.container.addChild(t.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};p=(0,i._)([(0,r.j)("esri.views.2d.layers.RouteLayerView2D")],p);const d=p},53849:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(9963),r=s(83003);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===i.jx.MAP&&this._renderChildren(e),e.drawPhase===i.jx.HIGHLIGHT&&this._renderHighlight(e))}_renderHighlight(e){const{painter:t}=e,s=t.effects.highlight;s.bind(e),this._renderChildren(e,s.defines),s.draw(e),s.unbind()}}const a=n},14177:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(87397),r=(s(1867),s(9783)),n=(s(9385),s(82203)),a=s(65482),o=(s(17593),s(15392),s(11786),s(83374)),h=s(78513),l=s(50575),p=s(77201),d=s(74893);let u=class extends((0,d.p)((0,l.I)((0,p.v)(h.Z.EventedMixin(o.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,n.Cb)()],u.prototype,"fullOpacity",null),(0,i._)([(0,n.Cb)()],u.prototype,"layer",void 0),(0,i._)([(0,n.Cb)()],u.prototype,"parent",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,i._)([(0,n.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,i._)([(0,n.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,i._)([(0,n.Cb)()],u.prototype,"visible",null),u=(0,i._)([(0,a.j)("esri.views.layers.LayerView")],u);const c=u}}]);