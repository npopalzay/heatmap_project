var __awaiter=this&&this.__awaiter||function(t,e,o,r){function i(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,n){function a(t){try{p(r.next(t))}catch(t){n(t)}}function s(t){try{p(r.throw(t))}catch(t){n(t)}}function p(t){t.done?o(t.value):i(t.value).then(a,s)}p((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var o,r,i,n,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return p([t,e])}}function p(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(i=2&n[0]?r.return:n[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,n[1])).done)return i;switch(r=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){a.label=n[1];break}if(6===n[0]&&a.label<i[1]){a.label=i[1],i=n;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(n);break}i[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],r=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};System.register(["./p-6d15c15c.system.js","./p-2c235db8.system.js","./p-68506aa3.system.js","./p-de3145a6.system.js","./p-a15d8568.system.js"],(function(t){"use strict";var e,o,r,i,n,a,s,p,l,c,f,u;return{setters:[function(t){e=t.r,o=t.h,r=t.H,i=t.g},function(t){n=t.g},function(t){a=t.d,s=t.u,p=t.c,l=t.C},function(t){c=t.d,f=t.e},function(t){u=t.g}],execute:function(){var d="data-calcite-tooltip-reference",m="aria-describedby";t("calcite_tooltip",function(){function t(t){var o=this;e(this,t),this.offsetDistance=a,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid="calcite-tooltip-"+n(),this.getId=function(){return o.el.id||o.guid},this.addReferences=function(){var t=o._referenceElement;if(t){var e=o.getId();t.setAttribute(d,e),t.setAttribute(m,e)}},this.removeReferences=function(){var t=o._referenceElement;t&&(t.removeAttribute(d),t.removeAttribute(m))},this.show=function(){o.open=!0},this.hide=function(){o.open=!1}}return t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()},t.prototype.offsetSkiddingHandler=function(){this.reposition()},t.prototype.openHandler=function(){this.reposition()},t.prototype.placementHandler=function(){this.reposition()},t.prototype.referenceElementHandler=function(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()},t.prototype.componentDidLoad=function(){this.addReferences(),this.createPopper()},t.prototype.disconnectedCallback=function(){this.removeReferences(),this.destroyPopper()},t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,o,r,i;return __generator(this,(function(n){return e=(t=this).popper,o=t.el,r=t.placement,i=this.getModifiers(),e?s({el:o,modifiers:i,placement:r,popper:e}):this.createPopper(),[2]}))}))},t.prototype.getReferenceElement=function(){var t=this.referenceElement,e=this.el,o=c(e);return("string"==typeof t?f(o,t):t)||null},t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,o=t.offsetDistance;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[t.offsetSkidding,o]}}]},t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,o=t.placement,r=t._referenceElement,i=this.getModifiers();this.popper=p({el:e,modifiers:i,placement:o,referenceEl:r})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.render=function(){var t,e=this,i=this,n=i._referenceElement,a=i.label,s=i.open,p=n&&s,c=!p;return o(r,{"aria-hidden":c.toString(),"aria-label":a,"calcite-hydrated-hidden":c,id:this.getId(),role:"tooltip"},o("div",{class:(t={},t[l.animation]=!0,t[l.animationActive]=p,t)},o("div",{class:"arrow",ref:function(t){return e.arrowEl=t}}),o("div",{class:"container"},o("slot",null))))},Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:!1,configurable:!0}),t}()).style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;overflow:hidden;font-size:var(--calcite-font-size--2);line-height:1.375;border-radius:0.25rem;max-width:20rem;max-height:20rem}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}',t("calcite_tooltip_manager",function(){function t(t){var o=this;e(this,t),this.hoverTimeouts=new WeakMap,this.selector="["+d+"]",this.queryTooltip=function(t){var e,r=o,i=r.selector,n=r.el,a=null===(e=t.closest(i))||void 0===e?void 0:e.getAttribute(d);return f(c(n),a)},this.clearHoverTimeout=function(t){var e=o.hoverTimeouts;e.has(t)&&window.clearTimeout(e.get(t))},this.closeExistingTooltip=function(){var t=o.tooltipEl;t&&o.toggleTooltip(t,!1)},this.focusTooltip=function(t){var e=t.tooltip,r=t.value;o.closeExistingTooltip(),r&&o.clearHoverTimeout(e),o.toggleTooltip(e,r)},this.toggleTooltip=function(t,e){t.open=e,e&&(o.tooltipEl=t)},this.hoverToggle=function(t){var e=t.tooltip,r=t.value;o.hoverTimeouts.delete(e),r&&o.closeExistingTooltip(),o.toggleTooltip(e,r)},this.hoverTooltip=function(t){var e=t.tooltip,r=t.value;o.clearHoverTimeout(e);var i=o.hoverTimeouts,n=window.setTimeout((function(){return o.hoverToggle({tooltip:e,value:r})}),500);i.set(e,n)},this.activeTooltipHover=function(t){var e=o,r=e.tooltipEl,i=e.hoverTimeouts;r&&i.has(r)&&(t.composedPath().includes(r)?o.clearHoverTimeout(r):o.hoverTooltip({tooltip:r,value:!1}))},this.hoverEvent=function(t,e){var r=o.queryTooltip(t.target);o.activeTooltipHover(t),r&&o.hoverTooltip({tooltip:r,value:e})},this.focusEvent=function(t,e){var r=o.queryTooltip(t.target);r&&o.focusTooltip({tooltip:r,value:e})}}return t.prototype.render=function(){return o(r,null)},t.prototype.keyUpHandler=function(t){if("Escape"===u(t.key)){var e=this.tooltipEl;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},t.prototype.mouseEnterShow=function(t){this.hoverEvent(t,!0)},t.prototype.mouseLeaveHide=function(t){this.hoverEvent(t,!1)},t.prototype.focusShow=function(t){this.focusEvent(t,!0)},t.prototype.blurHide=function(t){this.focusEvent(t,!1)},Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:!1,configurable:!0}),t}())}}}));