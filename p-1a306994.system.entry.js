var __awaiter=this&&this.__awaiter||function(t,e,i,n){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):a(t.value).then(o,s)}c((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,n,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};System.register(["./p-6d15c15c.system.js","./p-65ed6f67.system.js","./p-94d2ed32.system.js","./p-de3145a6.system.js"],(function(t){"use strict";var e,i,n,a,r,o,s,c,l,u,d;return{setters:[function(t){e=t.r,i=t.c,n=t.h,a=t.H,r=t.g},function(t){o=t.T,s=t.I,c=t.C,l=t.S},function(t){u=t.I},function(t){d=t.c}],execute:function(){t("calcite_pick_list_item",function(){function t(t){var n=this;e(this,t),this.calciteListItemChange=i(this,"calciteListItemChange",7),this.calciteListItemRemove=i(this,"calciteListItemRemove",7),this.calciteListItemPropsChange=i(this,"calciteListItemPropsChange",7),this.calciteListItemValueChange=i(this,"calciteListItemValueChange",7),this.disabled=!1,this.disableDeselect=!1,this.icon=null,this.removable=!1,this.selected=!1,this.intlRemove=o.remove,this.pickListClickHandler=function(t){n.disabled||n.disableDeselect&&n.selected||(n.shiftPressed=t.shiftKey,n.selected=!n.selected)},this.pickListKeyDownHandler=function(t){if(" "===t.key){if(t.preventDefault(),n.disableDeselect&&n.selected)return;n.selected=!n.selected}},this.removeClickHandler=function(){n.calciteListItemRemove.emit()}}return t.prototype.descriptionWatchHandler=function(){this.calciteListItemPropsChange.emit()},t.prototype.labelWatchHandler=function(){this.calciteListItemPropsChange.emit()},t.prototype.metadataWatchHandler=function(){this.calciteListItemPropsChange.emit()},t.prototype.selectedWatchHandler=function(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1},t.prototype.valueWatchHandler=function(t,e){this.calciteListItemValueChange.emit({oldValue:e,newValue:t})},t.prototype.toggleSelected=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.disabled||(this.selected="boolean"==typeof t?t:!this.selected),[2]}))}))},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return null===(t=this.focusEl)||void 0===t||t.focus(),[2]}))}))},t.prototype.renderIcon=function(){var t,e=this.icon;return e?n("span",{class:(t={},t[c.icon]=!0,t[c.iconDot]=e===u.circle,t),onClick:this.pickListClickHandler},e===u.square?n("calcite-icon",{icon:s.checked,scale:"s"}):null):null},t.prototype.renderRemoveAction=function(){return this.removable?n("calcite-action",{class:c.remove,icon:s.remove,onCalciteActionClick:this.removeClickHandler,slot:l.actionsEnd,text:this.intlRemove}):null},t.prototype.renderActionsStart=function(){var t,e=this.el;return d(e,l.actionsStart)?n("div",{class:(t={},t[c.actions]=!0,t[c.actionsStart]=!0,t)},n("slot",{name:l.actionsStart})):null},t.prototype.renderActionsEnd=function(){var t,e=this.el,i=this.removable;return d(e,l.actionsEnd)||i?n("div",{class:(t={},t[c.actions]=!0,t[c.actionsEnd]=!0,t)},n("slot",{name:l.actionsEnd}),this.renderRemoveAction()):null},t.prototype.render=function(){var t=this,e=this.description,i=this.label;return n(a,{"aria-checked":this.selected.toString(),role:"menuitemcheckbox"},this.renderIcon(),this.renderActionsStart(),n("label",{"aria-label":i,class:c.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:function(e){return t.focusEl=e},tabIndex:0},n("div",{class:c.textContainer},n("span",{class:c.title},i),e?n("span",{class:c.description},e):null)),this.renderActionsEnd())},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"]}},enumerable:!1,configurable:!0}),t}()).style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-1);-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);margin:0;margin-bottom:1px;-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out}:host(:hover){background-color:var(--calcite-ui-foreground-2)}.icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-top:0;margin-bottom:0;margin-left:0.5rem;margin-right:0.5rem;opacity:0;cursor:pointer;color:var(--calcite-ui-brand);-ms-flex:0 0 auto;flex:0 0 auto;line-height:0}.icon-dot{width:0.5rem;margin:0.5rem}.icon-dot:before{content:"•"}:host([selected]) .icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:0.75rem;-ms-flex-align:center;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.text-container{display:-ms-flexbox;display:flex;overflow:hidden;pointer-events:none;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.title{font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word;color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-family:var(--calcite-code-family);font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin:0;-ms-flex:0 0 auto;flex:0 0 auto}.actions--start~.label{padding-left:0.25rem}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:0.25rem}'}}}));