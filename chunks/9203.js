(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[9203],{66215:(e,t,i)=>{"use strict";i.d(t,{vF:()=>v,_D:()=>d,Qp:()=>g,zD:()=>u,tB:()=>w,nF:()=>m,VO:()=>x,kr:()=>f});var s=i(29107),a=i(85376),r=i(15072),n=i(49749),o=i(83746),l=(i(36458),i(66281)),h=i(12750);const p=5e-4,c=function(e,t){const i=(e.isWGS84||e.isWebMercator)&&(t.isWGS84||t.isWebMercator);return!(e.equals(t)||i)};async function u(){if((0,h.kR)()||!(0,h.Gb)())return null;await(0,h.zD)()}function d(e,t,i){if(!c(e.spatialReference,t))return null;if(!(0,h.kR)())throw new s.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");return i?(0,h.rS)(t,e.spatialReference,e):(0,h.rS)(e.spatialReference,t,e)}function x(e,t,i,a=null){if(e.spatialReference.equals(t))return e;const n=c(e.spatialReference,t);if(n&&!(0,h.kR)())throw new s.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const l=i.center,p=new o.Z({xmin:l.x-e.x/2,xmax:l.x+e.x/2,ymin:l.y-e.y/2,ymax:l.y+e.y/2,spatialReference:e.spatialReference}),u=n?(0,h.iV)(p,t,a):(0,r.iV)(p,t);return null==u?null:{x:u.xmax-u.xmin,y:u.ymax-u.ymin}}function y(e,t=.01){return(0,l.c9)(e)?t/(0,l.c9)(e):0}function m(e,t,i=null,n=!0){const o=e.spatialReference;if(o.equals(t))return e;const l=c(o,t);if(l&&!(0,h.kR)())throw new s.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const u=l?(0,h.iV)(e,t,i):(0,r.iV)(e,t);if(u&&n&&t.isGeographic){var d,x;const[t,i]=o.isWebMercator?(0,a.C5)(o).origin:null!=(d=null==(x=(0,a.C5)(o))?void 0:x.valid)?d:[],s=y(o);s&&null!=t&&null!=i&&(Math.abs(e.x-t)<s&&Math.abs(180-u.x)<p?u.x-=360:Math.abs(e.x-i)<s&&Math.abs(180+u.x)<p&&(u.x+=360))}return u}function w(e,t,i=null,o=!0){var l,u,d,x;const w=e.spatialReference;if(w.equals(t))return e;const g=c(w,t);if(g&&!(0,h.kR)())throw new s.Z("rasterprojectionhelper-projectExtent","projection engine is not loaded");const f=g?(0,h.iV)(e,t,i):(0,r.iV)(e,t);let[v,b]=null!=(l=null==(u=(0,a.C5)(w))?void 0:u.origin)?l:[];if(f&&o&&w.isWebMercator&&t.isGeographic&&null!=v&&null!=b){const s=.001,a=1e3;if(Math.abs(e.xmin-v)<s&&Math.abs(b-e.xmax)>a&&Math.abs(180-f.xmax)<p){f.xmin=-180;const s=[];s.push(new n.Z(e.xmax,e.ymin,w)),s.push(new n.Z(e.xmax,(e.ymin+e.ymax)/2,w)),s.push(new n.Z(e.xmax,e.ymax,w));const a=s.map((e=>m(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmax=Math.max.apply(null,a)}if(Math.abs(e.xmax-b)<s&&Math.abs(v-e.xmin)>a&&Math.abs(180+f.xmin)<p){f.xmax=180;const s=[];s.push(new n.Z(e.xmin,e.ymin,w)),s.push(new n.Z(e.xmin,(e.ymin+e.ymax)/2,w)),s.push(new n.Z(e.xmin,e.ymax,w));const a=s.map((e=>m(e,t,i))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmin=Math.min.apply(null,a)}}[v,b]=t.isWebMercator?(0,a.C5)(t).origin:null!=(d=null==(x=(0,a.C5)(t))?void 0:x.valid)?d:[];const _=y(t);return _&&null!=v&&null!=b&&(Math.abs(f.xmin-v)<_&&(f.xmin=v),Math.abs(f.xmax-b)<_&&(f.xmax=b)),f}function g(e,t,i,r=null,o=null,l=!1,p=[32,32]){var u,d;if(c(e.spatialReference,t.spatialReference)&&!(0,h.kR)())throw new s.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(e&&t&&i))return null;const{xmin:x,ymin:y,xmax:w,ymax:g}=e,f=e.spatialReference,v=t.spatialReference,[b,_]=null!=(u=null==(d=(0,a.C5)(f))?void 0:d.valid)?u:[],R={x:p[0]*i.x,y:p[1]*i.y},M={cols:Math.ceil((w-x)/R.x-.1)+1,rows:Math.ceil((g-y)/R.y-.1)+1},C=R.x,E=R.y,q=[];let V,Z=!1;for(let e=0;e<M.cols;e++){const i=[];for(let s=0;s<M.rows;s++){let a=m(new n.Z({x:x+C*e,y:g-E*s,spatialReference:f}),v,r);o&&(a=o.inverseTransform(a)),i.push(a),e>0&&l&&a&&V[s]&&null!=b&&a.x<V[s].x&&(a.x+=_-b),a?(q.push((a.x-t.xmin)/(t.xmax-t.xmin)),q.push((t.ymax-a.y)/(t.ymax-t.ymin))):(q.push(NaN),q.push(NaN),Z=!0)}V=i}const k=function(e,t){const i=(e[0]+e[4]+e[4*t.cols]+e[4*t.cols+4])/4,s=(e[1]+e[5]+e[4*t.rows+1]+e[4*t.rows+5])/4;return[Math.abs(i-e[2*t.rows+2]),Math.abs(s-e[2*t.rows+3])]}(q,M),P=new Float32Array((M.cols-1)*(M.rows-1)*2*6),I=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),S=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<M.cols-1;e++){for(let t=0;t<M.rows-1;t++){let i=e*M.rows*2+2*t;const s=q[i],a=q[i+1],r=q[i+2],n=q[i+3];i+=2*M.rows;const o=q[i],l=q[i+1],h=q[i+2],p=q[i+3];let c=0,u=12*(t*(M.cols-1)+e);for(let e=0;e<3;e++)P[u++]=I[c++]*s+I[c++]*r+I[c++]*h;c=0;for(let e=0;e<3;e++)P[u++]=I[c++]*a+I[c++]*n+I[c++]*p;c=0;for(let e=0;e<3;e++)P[u++]=S[c++]*s+S[c++]*o+S[c++]*h;c=0;for(let e=0;e<3;e++)P[u++]=S[c++]*a+S[c++]*l+S[c++]*p}if(Z)for(let e=0;e<P.length;e++)isNaN(P[e])&&(P[e]=-1)}return{offsets:q,error:k,coefficients:P,spacing:p,size:[M.cols-1,M.rows-1]}}function f(e,t,i){const s=Math.log(e.x/t.pixelSize.x)/Math.LN2,a=Math.log(e.y/t.pixelSize.y)/Math.LN2,r=t.storageInfo.maximumPyramidLevel||0;let o="down"===i?Math.floor(Math.min(s,a)):"up"===i?Math.ceil(Math.max(s,a)):Math.round((s+a)/2),l=!1;o<0?o=0:o>r&&(l=o>r+3,o=r);const h=2**o;return{pyramidLevel:o,pyramidResolution:new n.Z({x:h*t.nativePixelSize.x,y:h*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:l}}function v(e,t,i=512,s=!0){const{extent:a,spatialReference:r,pixelSize:o}=e,h=x(new n.Z({x:o.x,y:o.y,spatialReference:r}),t,a);if(null==h)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const p=(h.x+h.y)/2,c=(0,l.c9)(t),u=p*c*96*39.37,d=t.isGeographic?512/i*295828763.7958547:512/i*591657527.591555;let y=!1;const m=w(a,t);s&&(t.isGeographic||t.isWebMercator)&&(y=m.xmin*m.xmax<0);let g,f=u;const v=1.001;if(y){f=d;const e=.29858214164761665,t=e*(96*c*39.37);g=x(new n.Z({x:e,y:e,spatialReference:{wkid:3857}}),r,m),g.x*=f/t,g.y*=f/t}else{g={x:o.x,y:o.y};const t=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let i=0;for(;f<d*(v/2)&&i<t;)i++,f*=2,g.x*=2,g.y*=2;Math.max(f,d)/Math.min(f,d)<=v&&(f=d)}const b=[f],_=[{x:g.x,y:g.y}],R=Math.min(70.5310735,u)/v;for(;f>=R;)f/=2,g.x/=2,g.y/=2,b.push(f),_.push({x:g.x,y:g.y});return{projectedPixelSize:h,scales:b,srcResolutions:_,isCustomTilingScheme:!y}}},94594:(e,t,i)=>{"use strict";i.d(t,{KC:()=>u,QI:()=>d,Yx:()=>l,BH:()=>x});var s=i(18029),a=i(86110);const r=180/Math.PI,n=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0},o=new Map;function l(e,t){return o.get(e)/o.get(t)||1}function h(e){return(450-e)%360}function p(e,t="geographic"){const[i,s]=e,a=Math.sqrt(i*i+s*s);let n=Math.atan2(s,i)*r;return n=(360+n)%360,"geographic"===t&&(n=h(n)),[a,n]}function c(e,t="geographic"){let i=e[1];"geographic"===t&&(i=h(i)),i%=360;const s=e[0];return[s*Math.cos(i/r),s*Math.sin(i/r)]}function u(e,t,i="geographic",s=1){if(!n(e))return e;const{pixels:r,width:o,height:l}=e,h=o*l,u=r[0],d=r[1],x=a.Z.createEmptyBand(e.pixelType,h),y=a.Z.createEmptyBand(e.pixelType,h);let m=0;for(let e=0;e<l;e++)for(let e=0;e<o;e++)"vector-uv"===t?([x[m],y[m]]=p([u[m],d[m]],i),x[m]*=s):([x[m],y[m]]=c([u[m],d[m]],i),x[m]*=s,y[m]*=s),m++;const w=new a.Z({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:[x,y]});return w.updateStatistics(),w}function d(e,t,i=1){if(1===i||!n(e))return e;const s=e.clone(),{pixels:a,width:r,height:o}=s,l=a[0],h=a[1];let p=0;for(let e=0;e<o;e++)for(let e=0;e<r;e++)"vector-uv"===t?(l[p]*=i,h[p]*=i):l[p]*=i,p++;return s.updateStatistics(),s}function x(e,t,i,a,r){if(!(0,s.pC)(r)||!r.spatialReference.equals(e.spatialReference))return{extent:e,width:t,height:i};const n=r.xmin,o=r.ymax;a=Math.max(a||0,30);const l=Math.ceil(t*(1/a)),h=Math.ceil(i*(1/a)),p=((e.xmax-e.xmin)/l+(e.ymax-e.ymin)/h)/2;return e.xmin=n+Math.floor((e.xmin-n)/p)*p,e.xmax=n+Math.ceil((e.xmax-n)/p)*p,e.ymin=o+Math.floor((e.ymin-o)/p)*p,e.ymax=o+Math.ceil((e.ymax-o)/p)*p,{extent:e,width:Math.round(e.width/p),height:Math.round(e.height/p)}}o.set("meter-per-second",1),o.set("kilometer-per-hour",.277778),o.set("knots",.514444),o.set("feet-per-second",.3048),o.set("mile-per-hour",.44704)},19203:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>z});var s=i(87397),a=(i(1867),i(9783)),r=(i(9385),i(82203)),n=i(65482),o=(i(17593),i(15392),i(11786),i(66119)),l=i(2801),h=i(14177),p=i(18029),c=i(29107),u=i(49749),d=i(72046),x=i(90102),y=i(37802);const m=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new c.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,a=(0,y.V)(i,t);if(!s||!(0,p.pC)(a))throw new c.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:a});const r=await a.getRequiredFields(),n=new x.Z;n.geometry=e,n.outFields=r,n.outSpatialReference=e.spatialReference;const o=this.view.resolution,l="2d"===this.view.type?new u.Z(o,o,this.view.spatialReference):new u.Z(.5*o,.5*o,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:d}=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},m={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:l,showNoDataRecords:d};return i.queryVisibleRasters(n,m).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return(0,s._)([(0,r.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)(d.qG)],t.prototype,"timeExtent",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.views.layers.ImageryLayerView")],t),t};var w=i(41730),g=i(89657),f=i(14790),v=i(83374),b=i(83746),_=i(15982),R=i(65869),M=i(67794),C=i(94594),E=i(7422),q=i(66215),V=i(52726),Z=i(90215),k=i(53849);const P=a.Z.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let I=class extends v.Z{constructor(){super(...arguments),this.attached=!1,this.container=new V.W,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this.type="Graphics",this._graphics=new E.ZP,this._updateGraphics=(0,f.Ds)((async(e,t)=>{if(!e.stationary)return;const i=e.state,s=new b.Z({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),a=e.state.size[0],r=e.state.size[1],n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(s.spatialReference));const o="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,l=await this._projectFullExtentPromise,h=(0,C.BH)(s,a,r,o,l),p=await this.layer.fetchImage(h.extent,h.width,h.height,n),c=this.layer.renderer;if("vector-field"===c.type){this._pixelData={extent:h.extent,pixelBlock:p.pixelData.pixelBlock};const t=await c.getGraphicsFromPixelData(p.pixelData,"vector-uv"===this.layer.rasterInfo.dataType);this._graphicsView.update(e),await(0,f.e4)(0).then((()=>{this._graphics.set("items",t)}))}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{(0,f.D_)(e)||P.error(e)}))}hitTest(e,t){const i=this.view.toMap((0,_.vW)(e,t));return Promise.resolve(new M.Z({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new Z.Z({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new k.Z(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await(0,q.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,R.default)(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?b.Z.fromJSON(t):null}catch{return null}}}};(0,s._)([(0,r.Cb)()],I.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"layer",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"timeExtent",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"view",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)()],I.prototype,"updating",null),(0,s._)([(0,g.J)({graphics:"Graphics"})],I.prototype,"type",void 0),I=(0,s._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],I);const S=I;var j=i(18678),T=i(72847),D=i(49760),F=i(97899);const B=a.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let N=class extends v.Z{constructor(){super(...arguments),this.attached=!1,this.container=new V.W,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,f.D_)(e)||B.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,t){const i=this.view.toMap((0,_.vW)(e,t));return Promise.resolve(new M.Z({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new D.c,this.strategy=new F.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,j.Kh)(i,t);return s?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}_fetchImage(e,t,i,s){return(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,s).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:s.signal}).then((t=>{const i=new T.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};(0,s._)([(0,r.Cb)()],N.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"layer",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"strategy",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"timeExtent",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"view",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)()],N.prototype,"updating",null),(0,s._)([(0,g.J)({imagery:"Imagery"})],N.prototype,"type",void 0),N=(0,s._)([(0,n.j)("esri.views.2d.layers.imagery.ImageryView2D")],N);const U=N;let G=class extends(m((0,l.yc)((0,w.y)(h.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add((0,o.S1)(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0))}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([(0,o.S1)(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),(0,o.YP)(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var i,s;"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t||(null==(i=this.subview)||i.uninstall(this.container),null==(s=this.subview)||s.destroy(),this.subview="Imagery"===t?new U({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new S({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode),this.requestUpdate()}};(0,s._)([(0,r.Cb)()],G.prototype,"pixelData",null),(0,s._)([(0,r.Cb)({readOnly:!0})],G.prototype,"updating",null),(0,s._)([(0,r.Cb)()],G.prototype,"subview",void 0),G=(0,s._)([(0,n.j)("esri.views.2d.layers.ImageryLayerView2D")],G);const z=G},53849:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(9963),a=i(83003);class r extends a.Z{renderChildren(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}const n=r},37802:(e,t,i)=>{"use strict";i.d(t,{V:()=>n,e:()=>r});var s=i(18029),a=i(67638);async function r(e,t=e.popupTemplate){if(!(0,s.pC)(t))return[];const i=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:r}=t,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:h}=e;if(i.includes("*"))return["*"];const p=r?await(0,a.CH)(e):[],c=(0,a.Q0)(e.fields,[...i,...p]);return o&&c.push(o),c&&n&&(0,a.cT)(e.fields,n)&&-1===c.indexOf(n)&&c.push(n),c&&l&&(0,a.cT)(e.fields,l)&&-1===c.indexOf(l)&&c.push(l),h&&h.forEach((t=>{const{keyField:i}=t;c&&i&&(0,a.cT)(e.fields,i)&&-1===c.indexOf(i)&&c.push(i)})),c}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);