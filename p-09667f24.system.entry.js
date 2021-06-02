var __awaiter=this&&this.__awaiter||function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){t.done?n(t.value):i(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};System.register(["./p-6d15c15c.system.js","./p-50406a6e.system.js","./p-de3145a6.system.js","./p-482ec054.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,n,o,i,r,a,s,l,c,u,d,p;return{setters:[function(t){e=t.r,n=t.c,o=t.f,i=t.h,r=t.H,a=t.g},function(t){s=t.C},function(t){l=t.g,c=t.c,u=t.f},function(t){d=t.g},function(t){p=t.g}],execute:function(){t("calcite_action",function(){function t(t){var i=this;e(this,t),this.calciteActionClick=n(this,"calciteActionClick",7),this.appearance="solid",this.active=!1,this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading="Loading",this.loading=!1,this.scale="m",this.textEnabled=!1,this.observer=new MutationObserver((function(){return o(i)})),this.calciteActionClickHandler=function(){i.disabled||i.calciteActionClick.emit()}}return t.prototype.connectedCallback=function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.disconnectedCallback=function(){this.observer.disconnect()},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.buttonEl.focus(),[2]}))}))},t.prototype.renderTextContainer=function(){var t,e=this.text,n=this.textEnabled,o=((t={})["text-container"]=!0,t["text-container--visible"]=n,t);return e?i("div",{class:o,key:"text-container"},e):null},t.prototype.renderIconContainer=function(){var t,e,n=this,o=n.loading,r=n.icon,a=n.scale,s=n.el,l=n.intlLoading,c="l"===a?"m":"s",u=o?i("calcite-loader",{active:!0,inline:!0,label:l,scale:c}):null,d=r?i("calcite-icon",{icon:r,scale:c}):null,p=u||d,f=p||(null===(e=s.children)||void 0===e?void 0:e.length),m=i("div",{class:(t={},t["slot-container"]=!0,t["slot-container--hidden"]=o,t)},i("slot",null));return f?i("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},p,m):null},t.prototype.render=function(){var t,e=this,n=this,o=n.compact,a=n.disabled,c=n.loading,u=n.el,d=n.textEnabled,p=n.label,f=n.text,m=p||f,b="rtl"===l(u),h=((t={}).button=!0,t["button--text-visible"]=d,t["button--compact"]=o,t[s.rtl]=b,t);return i(r,{onClick:this.calciteActionClickHandler},i("button",{"aria-busy":c.toString(),"aria-disabled":a.toString(),"aria-label":m,class:h,disabled:a,ref:function(t){return e.buttonEl=t}},this.renderIconContainer(),this.renderTextContainer()))},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),t}()).style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{background-color:var(--calcite-ui-foreground-1);border-style:none;cursor:pointer;fill:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin:0;position:relative;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-3);font-family:inherit;width:auto;text-align:unset}.button:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none;min-width:1rem;min-height:1rem}.button .text-container{line-height:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;width:0;opacity:0;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-property:width;transition-property:width}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:0.5rem}:host([scale=m]) .button{padding:1rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([alignment=center]) .button{-ms-flex-pack:center;justify-content:center;width:100%}:host([alignment=end]) .button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment=end]) .button .text-container--visible{-ms-flex:0 1 auto;flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0;margin-right:0.5rem}.button--text-visible .text-container--visible{margin:0;margin-right:0.5rem}.button--text-visible.calcite--rtl .icon-container{margin:0;margin-left:0.5rem}.button--text-visible.calcite--rtl .text-container--visible{margin:0;margin-left:0.5rem}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear]) .button{background-color:transparent;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:0.5}:host([loading]) calcite-loader[inline]{margin-right:0;color:var(--calcite-ui-text-3)}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:0.5;background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:0.5;background-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:1rem}:host([indicator]) .button::after{content:"";position:absolute;border-width:2px;background-color:var(--calcite-ui-brand);border-radius:9999px;height:0.5rem;width:0.5rem;z-index:10;border-color:var(--calcite-ui-foreground-1);bottom:0.5rem;right:0.5rem}:host([indicator][scale=s]) .button::after{bottom:0.25rem;right:0.25rem}:host([indicator][scale=l]) .button::after{bottom:0.5rem;right:0.5rem}:host([indicator]) .calcite--rtl::after{right:auto;left:0.25rem}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:0.75rem;padding-left:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:auto;right:0.5rem}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:auto;left:0.5rem}';function f(t){var e=t.parent,n=t.expanded;Array.from(e.querySelectorAll("calcite-action")).filter((function(t){return"menu-actions"!==t.slot})).forEach((function(t){return t.textEnabled=n})),e.querySelectorAll("calcite-action-group").forEach((function(t){return t.expanded=n}))}var m=function(t){var e=t.expanded,n=t.intlExpand,o=t.intlCollapse,r=t.toggle,a=t.el,s=t.position,c=t.tooltip,u=t.ref,d="rtl"===l(a),p=e?o:n,f=["chevrons-left","chevrons-right"];d&&f.reverse();var m="end"===function(t,e){var n;return t||(null===(n=e.closest("calcite-shell-panel"))||void 0===n?void 0:n.position)||"start"}(s,a),b=m?f[1]:f[0],h=m?f[0]:f[1],x=i("calcite-action",{dir:d?"rtl":"ltr",icon:e?b:h,onClick:r,ref:function(t){return function(t){var e=t.tooltip,n=t.referenceElement,o=t.expanded,i=t.ref;return e&&(e.referenceElement=!o&&n),i&&i(n),n}({tooltip:c,referenceElement:t,expanded:e,ref:u})},text:p,textEnabled:e});return c?i("calcite-tooltip-manager",null,x):x},b="bottom-actions",h="expand-tooltip",x=function(t){var e=t.actionGroups,n=t.expanded,i=t.overflowCount;e.reverse().forEach((function(t){var e=0,r=Array.from(t.querySelectorAll("calcite-action")).reverse();r.forEach((function(t){t.removeAttribute("slot"),t.textEnabled=n})),i>0&&r.some((function(t){return r.filter((function(t){return!t.slot})).length>1&&r.length>2&&(t.textEnabled=!0,t.setAttribute("slot","menu-actions"),++e>1&&i--),i<1})),o(t)}))};t("calcite_action_bar",function(){function t(t){var o=this;e(this,t),this.calciteActionBarToggle=n(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.mutationObserver=new MutationObserver((function(){var t=o,e=t.el;f({parent:e,expanded:t.expanded}),o.resize(e.clientHeight)})),this.resizeObserver=new ResizeObserver((function(t){return o.resizeHandlerEntries(t)})),this.actionMenuOpenChangeHandler=function(t){if(t.detail){var e=t.composedPath();Array.from(o.el.querySelectorAll("calcite-action-group")).forEach((function(t){e.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=function(t){t.forEach(o.resizeHandler)},this.resizeHandler=function(t){var e=t.contentRect.height;o.resize(e)},this.resize=function(t){var e=o,n=e.el,i=e.expanded,r=e.expandDisabled,a=e.lastActionCount,s=e.lastGroupCount,l=e.lastResizeHeight,u=e.overflowActionsDisabled;if("number"==typeof t&&!u){var d=n.querySelectorAll("calcite-action"),p=r?d.length:d.length+1,f=Array.from(n.querySelectorAll("calcite-action-group")),m=c(n,b)||!r?f.length+1:f.length;if(l!==t||a!==p||s!==m){o.lastActionCount=p,o.lastGroupCount=m,o.lastResizeHeight=t;var h=function(t){var e=t.actionCount,n=t.height,o=t.groupCount;return Math.max(e-function(t){var e=t.height,n=t.groupCount;return Math.floor((e-18*n)/50)}({height:n,groupCount:o}),0)}({actionCount:p,height:t,groupCount:m});x({actionGroups:f,expanded:i,overflowCount:h})}}},this.toggleExpand=function(){o.expanded=!o.expanded},this.setExpandToggleRef=function(t){o.expandToggleEl=t}}return t.prototype.expandHandler=function(t){t||f({parent:this.el,expanded:this.expanded}),this.resize(this.el.clientHeight)},t.prototype.expandedHandler=function(t){this.expandDisabled||f({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()},t.prototype.overflowDisabledHandler=function(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)},t.prototype.componentWillLoad=function(){var t=this,e=t.el,n=t.expandDisabled,o=t.expanded;n||f({parent:e,expanded:o}),this.mutationObserver.observe(e,{childList:!0}),this.overflowActionsDisabled||this.resizeObserver.observe(e)},t.prototype.componentDidLoad=function(){this.resize(this.el.clientHeight)},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect(),this.resizeObserver.disconnect()},t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return"expand-toggle"!==t?[3,2]:[4,u(this.expandToggleEl)];case 1:return e.sent(),[2];case 2:return this.el.focus(),[2]}}))}))},t.prototype.renderBottomActionGroup=function(){var t=this,e=t.expanded,n=t.expandDisabled,o=t.intlExpand,r=t.intlCollapse,a=t.el,s=t.position,l=t.toggleExpand,u=c(a,h),d=n?null:i(m,{el:a,expanded:e,intlCollapse:r||"Collapse",intlExpand:o||"Expand",position:s,ref:this.setExpandToggleRef,toggle:l,tooltip:u});return c(a,b)||d?i("calcite-action-group",{class:"action-group--bottom"},i("slot",{name:b}),i("slot",{name:h}),d):null},t.prototype.render=function(){return i(r,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},i("slot",null),this.renderBottomActionGroup())},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom-width:0}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";var g="menu-actions",y="menu-tooltip",v="tooltip";t("calcite_action_group",function(){function t(t){var n=this;e(this,t),this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.setMenuOpen=function(t){n.menuOpen=!!t.detail}}return t.prototype.expandedHandler=function(){this.menuOpen=!1},t.prototype.renderTooltip=function(){var t=this.el;return c(t,y)?i("slot",{name:y,slot:v}):null},t.prototype.renderMenu=function(){var t=this,e=t.el,n=t.expanded,o=t.intlMore,r=t.menuOpen;return c(e,g)?i("calcite-action-menu",{expanded:n,flipPlacements:["left","right"],label:o||"More",onCalciteActionMenuOpenChange:this.setMenuOpen,open:r,placement:"leading-start"},i("slot",{name:g}),this.renderTooltip()):null},t.prototype.render=function(){return i(r,null,i("slot",null),this.renderMenu())},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:!1,configurable:!0}),t}()).style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0;padding-right:0;--columns:3}:host([columns="1"]){--columns:1}:host([columns="2"]){--columns:2}:host([columns="3"]){--columns:3}:host([columns="4"]){--columns:4}:host([columns="5"]){--columns:5}:host([columns="6"]){--columns:6}:host(:first-child){padding-top:0}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row}:host([layout=grid]){background-color:var(--calcite-ui-background);display:grid;grid-gap:1px;gap:1px;place-content:stretch;padding:1px;grid-template-columns:repeat(var(--columns), auto)}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}';var w=["ArrowUp","ArrowDown"],k=["ArrowUp","ArrowDown","End","Home"];t("calcite_action_menu",function(){function t(t){var i=this;e(this,t),this.calciteActionMenuOpenChange=n(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.placement="auto",this.scale="m",this.actionElements=[],this.mutationObserver=new MutationObserver((function(){return i.getActions()})),this.guid="calcite-action-menu-"+p(),this.menuId=this.guid+"-menu",this.menuButtonId=this.guid+"-menu-button",this.activeMenuItemIndex=-1,this.menuButtonClick=function(){i.toggleOpen()},this.setTooltipReferenceElement=function(){var t=i,e=t.el,n=t.expanded,o=t.menuButtonEl,r=c(e,v),a="SLOT"===(null==r?void 0:r.tagName)?r.assignedElements()[0]:r;"CALCITE-TOOLTIP"===(null==a?void 0:a.tagName)&&(a.referenceElement=!n&&o)},this.setMenuButtonRef=function(t){i.menuButtonEl=t,i.setTooltipReferenceElement(),o(i)},this.updateAction=function(t,e){var n=i,o=n.guid,r=n.activeMenuItemIndex,a=o+"-action-"+e;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=a),t.active=e===r},this.updateActions=function(t){null==t||t.forEach(i.updateAction)},this.getActions=function(){var t=i.el,e=i.getAssignedElements().filter((function(t){return"CALCITE-ACTION"===t.tagName})),n=e.length?e:Array.from(t.querySelectorAll("calcite-action"));i.updateActions(n),i.actionElements=n},this.menuButtonKeyUp=function(t){var e=t.key,n=i.actionElements;i.isValidKey(e,w)&&(t.preventDefault(),n.length&&(i.toggleOpen(!0),i.handleActionNavigation(e,n)))},this.menuButtonKeyDown=function(t){var e=t.key;i.isValidKey(e,w)&&t.preventDefault()},this.menuActionsContainerKeyDown=function(t){var e=t.key,n=i,o=n.actionElements,r=n.activeMenuItemIndex;if("Tab"!==e)if(" "!==e&&"Enter"!==e)i.isValidKey(e,k)&&t.preventDefault();else{t.preventDefault();var a=o[r];a?a.click():i.toggleOpen(!1)}else i.open=!1},this.menuActionsContainerKeyUp=function(t){var e=t.key,n=i.actionElements;"Escape"!==e?i.isValidKey(e,k)&&(t.preventDefault(),n.length&&i.handleActionNavigation(e,n)):i.toggleOpen(!1)},this.handleActionNavigation=function(t,e){var n=i.activeMenuItemIndex;"Home"===t&&(i.activeMenuItemIndex=0),"End"===t&&(i.activeMenuItemIndex=e.length-1),"ArrowUp"===t&&(i.activeMenuItemIndex=d(Math.max(n-1,-1),e.length)),"ArrowDown"===t&&(i.activeMenuItemIndex=d(n+1,e.length))},this.toggleOpen=function(t){void 0===t&&(t=!i.open),i.open=t,clearTimeout(i.menuFocusTimeout),t?i.menuFocusTimeout=window.setTimeout((function(){return i.setFocus()}),50):i.setFocus()}}return t.prototype.connectedCallback=function(){this.mutationObserver.observe(this.el,{childList:!0,subtree:!0}),this.getActions()},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()},t.prototype.expandedHandler=function(){this.open=!1,this.setTooltipReferenceElement()},t.prototype.openHandler=function(t){this.activeMenuItemIndex=this.open?0:-1,this.calciteActionMenuOpenChange.emit(t)},t.prototype.closeCalciteActionMenuOnClick=function(t){t.composedPath().includes(this.el)||(this.open=!1)},t.prototype.activeMenuItemIndexHandler=function(){this.updateActions(this.actionElements)},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return u(this.open?this.menuEl:this.menuButtonEl),[2]}))}))},t.prototype.renderMenuButton=function(){var t=this,e=t.el,n=t.menuButtonId,o=t.menuId,r=t.open,a=t.label,s=t.expanded,l=t.scale,u=i("calcite-action",{active:r,"aria-controls":o,"aria-expanded":r.toString(),"aria-haspopup":"true",class:"menu-button",icon:"ellipsis",id:n,label:a,onClick:this.menuButtonClick,onKeyDown:this.menuButtonKeyDown,onKeyUp:this.menuButtonKeyUp,ref:this.setMenuButtonRef,scale:l,text:a,textEnabled:s});return c(e,v)?i("calcite-tooltip-manager",null,u):u},t.prototype.renderMenuItems=function(){var t=this,e=this,n=e.actionElements,o=e.activeMenuItemIndex,r=e.open,a=e.menuButtonId,s=e.menuId,l=e.menuButtonEl,c=e.label,u=e.placement,d=n[o],p=(null==d?void 0:d.id)||null;return i("calcite-popover",{label:c,open:r,placement:u,referenceElement:l},i("div",{"aria-activedescendant":p,"aria-labelledby":a,class:"menu",id:s,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:function(e){return t.menuEl=e},role:"menu",tabIndex:-1},i("slot",null)))},t.prototype.render=function(){return i(r,null,this.renderMenuButton(),this.renderMenuItems(),i("slot",{name:v}))},t.prototype.getAssignedElements=function(){return Array.from(this.el.querySelectorAll("slot")).map((function(t){return t.assignedElements({flatten:!0})})).reduce((function(t,e){return t.concat(e)}),[])},t.prototype.isValidKey=function(t,e){return!!e.find((function(e){return e===t}))},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}";var D="expand-tooltip";t("calcite_action_pad",function(){function t(t){var o=this;e(this,t),this.calciteActionPadToggle=n(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.actionMenuOpenChangeHandler=function(t){if(t.detail){var e=t.composedPath();Array.from(o.el.querySelectorAll("calcite-action-group")).forEach((function(t){e.includes(t)||(t.menuOpen=!1)}))}},this.toggleExpand=function(){o.expanded=!o.expanded},this.setExpandToggleRef=function(t){o.expandToggleEl=t}}return t.prototype.expandHandler=function(t){t||f({parent:this.el,expanded:this.expanded})},t.prototype.expandedHandler=function(t){this.expandDisabled||f({parent:this.el,expanded:t}),this.calciteActionPadToggle.emit()},t.prototype.componentWillLoad=function(){var t=this,e=t.el,n=t.expandDisabled,o=t.expanded;n||f({parent:e,expanded:o})},t.prototype.setFocus=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return"expand-toggle"!==t?[3,2]:[4,u(this.expandToggleEl)];case 1:return e.sent(),[2];case 2:return this.el.focus(),[2]}}))}))},t.prototype.renderBottomActionGroup=function(){var t=this,e=t.expanded,n=t.expandDisabled,o=t.intlExpand,r=t.intlCollapse,a=t.el,s=t.position,l=t.toggleExpand,u=c(a,D),d=n?null:i(m,{el:a,expanded:e,intlCollapse:r||"Collapse",intlExpand:o||"Expand",position:s,ref:this.setExpandToggleRef,toggle:l,tooltip:u});return d?i("calcite-action-group",{class:"action-group--bottom"},i("slot",{name:D}),d):null},t.prototype.render=function(){var t,e="rtl"===l(this.el),n=((t={}).container=!0,t[s.rtl]=e,t);return i(r,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},i("div",{class:n},i("slot",null),this.renderBottomActionGroup()))},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0;border-right-width:1px;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0}"}}}));