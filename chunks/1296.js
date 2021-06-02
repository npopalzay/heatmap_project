(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[1296],{26620:(e,t,r)=>{"use strict";r.d(t,{j:()=>h});var i=r(87397),a=(r(1867),r(9783),r(9385),r(82203)),s=r(65482),n=(r(17593),r(15392),r(11786),r(83374)),o=r(74893);const l={visible:"visibleSublayers"};let h=class extends((0,o.p)(n.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=null==e?void 0:e.sublayers,i=[],a=e=>{const{minScale:r,maxScale:s,sublayers:n,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(n?n.forEach(a):i.unshift(e))};return null==r||r.forEach(a),i}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:i,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:i,version:a,layers:t}}};(0,i._)([(0,a.Cb)()],h.prototype,"layer",null),(0,i._)([(0,a.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,i._)([(0,a.Cb)({type:Number})],h.prototype,"scale",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],h.prototype,"version",null),(0,i._)([(0,a.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,i._)([(0,s.j)("esri.layers.support.ExportWMSImageParameters")],h)},61296:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var i=r(87397),a=(r(1867),r(9783)),s=(r(9385),r(82203)),n=r(65482),o=r(29107),l=(r(17593),r(15392),r(11786),r(14790)),h=r(83746),p=r(2801),u=r(14177),y=r(72046),m=r(26620);const c=e=>{let t=class extends e{initialize(){this.exportImageParameters=new m.j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new o.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new o.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const i=this.createFetchPopupFeaturesQuery(e);if(!i)return Promise.resolve([]);const{extent:a,width:s,height:n,x:l,y:h}=i;if(!(a&&s&&n))throw new o.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:s,height:n});const p=t.fetchFeatureInfo(a,s,n,l,h);return Promise.resolve(p?[p]:[])}};return(0,i._)([(0,s.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,s.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,s.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,s.Cb)(y.qG)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,n.j)("esri.layers.mixins.WMSLayerView")],t),t};var d=r(49760),g=r(41730),b=r(97899);const v=a.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let f=class extends(c((0,p.yc)((0,g.y)(u.Z)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{(0,l.D_)(e)||v.error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this.strategy=new b.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:a}=e,{spatialReference:s}=t;let n=null,o=0,l=0;if(r.children.some((e=>{const{width:t,height:r,resolution:p,x:u,y}=e,m=u+p*t,c=y-p*r;return i>=u&&i<=m&&a<=y&&a>=c&&(n=new h.Z({xmin:u,ymin:c,xmax:m,ymax:y,spatialReference:s}),o=t,l=r,!0)})),!n)return null;const p=n.width/o,u=Math.round((i-n.xmin)/p),y=Math.round((n.ymax-a)/p);return{extent:n,width:o,height:l,x:u,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};(0,i._)([(0,s.Cb)()],f.prototype,"strategy",void 0),(0,i._)([(0,s.Cb)()],f.prototype,"updating",void 0),f=(0,i._)([(0,n.j)("esri.views.2d.layers.WMSLayerView2D")],f);const x=f}}]);