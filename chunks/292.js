(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[292],{30292:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(87397),s=(i(1867),i(9783)),r=(i(9385),i(82203)),n=i(65482),h=(i(17593),i(15392),i(11786),i(14790)),d=i(2801),o=i(14177),p=i(49760),c=i(41730),u=i(97899);const g=s.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let y=class extends((0,d.yc)((0,c.y)(o.Z))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{(0,h.D_)(t)||g.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new p.c,this.container.addChild(this._bitmapContainer),this.strategy=new u.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,a._)([(0,r.Cb)()],y.prototype,"strategy",void 0),(0,a._)([(0,r.Cb)()],y.prototype,"updating",void 0),y=(0,a._)([(0,n.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],y);const l=y}}]);