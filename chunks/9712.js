(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[9712],{39712:(t,e,r)=>{"use strict";r.r(e),r.d(e,{calcite_tooltip:()=>c,calcite_tooltip_manager:()=>f});var o=r(27409),i=r(31508),n=r(90573),a=r(1880),s=r(26626),p="data-calcite-tooltip-reference",l="aria-describedby",c=function(){function t(t){var e=this;(0,o.r)(this,t),this.offsetDistance=n.d,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid="calcite-tooltip-"+(0,i.g)(),this.getId=function(){return e.el.id||e.guid},this.addReferences=function(){var t=e._referenceElement;if(t){var r=e.getId();t.setAttribute(p,r),t.setAttribute(l,r)}},this.removeReferences=function(){var t=e._referenceElement;t&&(t.removeAttribute(p),t.removeAttribute(l))},this.show=function(){e.open=!0},this.hide=function(){e.open=!1}}return t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()},t.prototype.offsetSkiddingHandler=function(){this.reposition()},t.prototype.openHandler=function(){this.reposition()},t.prototype.placementHandler=function(){this.reposition()},t.prototype.referenceElementHandler=function(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()},t.prototype.componentDidLoad=function(){this.addReferences(),this.createPopper()},t.prototype.disconnectedCallback=function(){this.removeReferences(),this.destroyPopper()},t.prototype.reposition=function(){return function(t,e,r,o){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function a(t){try{p(o.next(t))}catch(t){n(t)}}function s(t){try{p(o.throw(t))}catch(t){n(t)}}function p(t){t.done?r(t.value):i(t.value).then(a,s)}p((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){var t,e,r,o,i;return function(t,e){var r,o,i,n,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return p([t,e])}}function p(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){a.label=n[1];break}if(6===n[0]&&a.label<i[1]){a.label=i[1],i=n;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(n);break}i[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}(this,(function(a){return e=(t=this).popper,r=t.el,o=t.placement,i=this.getModifiers(),e?(0,n.u)({el:r,modifiers:i,placement:o,popper:e}):this.createPopper(),[2]}))}))},t.prototype.getReferenceElement=function(){var t=this.referenceElement,e=this.el,r=(0,a.d)(e);return("string"==typeof t?(0,a.e)(r,t):t)||null},t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,r=t.offsetDistance;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[t.offsetSkidding,r]}}]},t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,r=t.placement,o=t._referenceElement,i=this.getModifiers();this.popper=(0,n.c)({el:e,modifiers:i,placement:r,referenceEl:o})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.render=function(){var t,e=this,r=this,i=r._referenceElement,a=r.label,s=r.open,p=i&&s,l=!p;return(0,o.h)(o.H,{"aria-hidden":l.toString(),"aria-label":a,"calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},(0,o.h)("div",{class:(t={},t[n.C.animation]=!0,t[n.C.animationActive]=p,t)},(0,o.h)("div",{class:"arrow",ref:function(t){return e.arrowEl=t}}),(0,o.h)("div",{class:"container"},(0,o.h)("slot",null))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:!1,configurable:!0}),t}();c.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;overflow:hidden;font-size:var(--calcite-font-size--2);line-height:1.375;border-radius:0.25rem;max-width:20rem;max-height:20rem}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';var f=function(){function t(t){var e=this;(0,o.r)(this,t),this.hoverTimeouts=new WeakMap,this.selector="["+p+"]",this.queryTooltip=function(t){var r,o=e,i=o.selector,n=o.el,s=null===(r=t.closest(i))||void 0===r?void 0:r.getAttribute(p);return(0,a.e)((0,a.d)(n),s)},this.clearHoverTimeout=function(t){var r=e.hoverTimeouts;r.has(t)&&window.clearTimeout(r.get(t))},this.closeExistingTooltip=function(){var t=e.tooltipEl;t&&e.toggleTooltip(t,!1)},this.focusTooltip=function(t){var r=t.tooltip,o=t.value;e.closeExistingTooltip(),o&&e.clearHoverTimeout(r),e.toggleTooltip(r,o)},this.toggleTooltip=function(t,r){t.open=r,r&&(e.tooltipEl=t)},this.hoverToggle=function(t){var r=t.tooltip,o=t.value;e.hoverTimeouts.delete(r),o&&e.closeExistingTooltip(),e.toggleTooltip(r,o)},this.hoverTooltip=function(t){var r=t.tooltip,o=t.value;e.clearHoverTimeout(r);var i=e.hoverTimeouts,n=window.setTimeout((function(){return e.hoverToggle({tooltip:r,value:o})}),500);i.set(r,n)},this.activeTooltipHover=function(t){var r=e,o=r.tooltipEl,i=r.hoverTimeouts;o&&i.has(o)&&(t.composedPath().includes(o)?e.clearHoverTimeout(o):e.hoverTooltip({tooltip:o,value:!1}))},this.hoverEvent=function(t,r){var o=e.queryTooltip(t.target);e.activeTooltipHover(t),o&&e.hoverTooltip({tooltip:o,value:r})},this.focusEvent=function(t,r){var o=e.queryTooltip(t.target);o&&e.focusTooltip({tooltip:o,value:r})}}return t.prototype.render=function(){return(0,o.h)(o.H,null)},t.prototype.keyUpHandler=function(t){if("Escape"===(0,s.g)(t.key)){var e=this.tooltipEl;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},t.prototype.mouseEnterShow=function(t){this.hoverEvent(t,!0)},t.prototype.mouseLeaveHide=function(t){this.hoverEvent(t,!1)},t.prototype.focusShow=function(t){this.focusEvent(t,!0)},t.prototype.blurHide=function(t){this.focusEvent(t,!1)},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),t}()},31508:(t,e,r)=>{"use strict";r.d(e,{g:()=>o});var o=function(){return[2,1,1,1,3].map((function(t){for(var e="",r=0;r<t;r++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},26626:(t,e,r)=>{"use strict";function o(t,e){var r={Up:"ArrowUp",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Spacebar:" ",Esc:"Escape"}[t]||t,o="rtl"===e;return o&&"ArrowLeft"===r?"ArrowRight":o&&"ArrowRight"===r?"ArrowLeft":r}r.d(e,{g:()=>o,n:()=>i});var i=["0","1","2","3","4","5","6","7","8","9"]}}]);