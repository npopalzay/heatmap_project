var __awaiter=this&&this.__awaiter||function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{l(a.next(t))}catch(t){r(t)}}function s(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){t.done?i(t.value):n(t.value).then(o,s)}l((a=a.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,a,n,r,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,a&&(n=2&r[0]?a.return:r[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,r[1])).done)return n;switch(a=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){o.label=r[1];break}if(6===r[0]&&o.label<n[1]){o.label=n[1],n=r;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(r);break}n[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],a=0}finally{i=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},__spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,a=e.length,n=t.length;i<a;i++,n++)t[n]=e[i];return t};System.register(["./p-6d15c15c.system.js","./p-2c235db8.system.js","./p-de3145a6.system.js","./p-a15d8568.system.js"],(function(t){"use strict";var e,i,a,n,r,o,s,l,c,p;return{setters:[function(t){e=t.r,i=t.c,a=t.h,n=t.H,r=t.g},function(t){o=t.g},function(t){s=t.n,l=t.g,c=t.i},function(t){p=t.g}],execute:function(){t("calcite_tab",function(){function t(t){e(this,t),this.calciteTabRegister=i(this,"calciteTabRegister",7),this.active=!1,this.guid="calcite-tab-title-"+o()}return t.prototype.render=function(){var t=this.el.id||this.guid;return a(n,{"aria-expanded":this.active.toString(),"aria-labelledby":this.labeledBy,id:t,role:"tabpanel"},a("section",null,a("slot",null)))},t.prototype.componentDidLoad=function(){this.calciteTabRegister.emit()},t.prototype.disconnectedCallback=function(){var t;null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))},t.prototype.tabChangeHandler=function(t){var e=this;t.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.active=i===t.detail.tab})))},t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Array.prototype.indexOf.call(s(this.el.parentElement.children).filter((function(t){return t.matches("calcite-tab")})),this.el)]}))}))},t.prototype.updateAriaInfo=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),__awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return this.labeledBy=e[t.indexOf(this.el.id)]||null,[2]}))}))},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;z-index:10}:host([active]){display:block}section{height:100%;width:100%;display:none}",t("calcite_tab_nav",function(){function t(t){var a=this;e(this,t),this.calciteTabChange=i(this,"calciteTabChange",7),this.layout="inline",this.position="below",this.animationActiveDuration=.3,this.handleContainerScroll=function(){a.activeIndicatorEl.style.transitionDuration="0s",a.updateOffsetPosition()}}return t.prototype.selectedTabChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem("calcite-tab-nav-"+this.storageId,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab}),t=this,[4,this.getTabTitleById(this.selectedTab)];case 1:return t.selectedTabEl=e.sent(),[2]}}))}))},t.prototype.selectedTabElChanged=function(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=this.animationActiveDuration+"s"},t.prototype.componentWillLoad=function(){var t="calcite-tab-nav-"+this.storageId;if(localStorage&&this.storageId&&localStorage.getItem(t)){var e=JSON.parse(localStorage.getItem(t));this.selectedTab=e,this.calciteTabChange.emit({tab:this.selectedTab})}},t.prototype.componentWillRender=function(){var t,e;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.position},t.prototype.componentDidRender=function(){var t=this;this.tabTitles.length&&this.tabTitles.every((function(t){return!t.active}))&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then((function(e){t.calciteTabChange.emit({tab:e})}))},t.prototype.render=function(){var t=this,e=l(this.el),i=this.indicatorWidth+"px",r=this.indicatorOffset+"px",o="rtl"!==e?{width:i,left:r}:{width:i,right:r};return a(n,{role:"tablist"},a("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:function(e){return t.tabNavEl=e}},a("div",{class:"tab-nav-active-indicator-container",ref:function(e){return t.activeIndicatorContainerEl=e}},a("div",{class:"tab-nav-active-indicator",ref:function(e){return t.activeIndicatorEl=e},style:o})),a("slot",null)))},t.prototype.resizeHandler=function(){this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition()},t.prototype.focusPreviousTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e-1]||this.enabledTabTitles[this.enabledTabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()},t.prototype.focusNextTabHandler=function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[e+1]||this.enabledTabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()},t.prototype.activateTabHandler=function(t){t.detail.tab?this.selectedTab=t.detail.tab:this.selectedTab=this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()},t.prototype.updateTabTitles=function(t){t.target.active&&(this.selectedTab=t.detail)},t.prototype.globalTabChangeHandler=function(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)},t.prototype.updateOffsetPosition=function(){var t,e,i,a,n,r=l(this.el),o=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,s=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetLeft,c=o-(s+(null===(i=this.selectedTabEl)||void 0===i?void 0:i.offsetWidth));this.indicatorOffset="rtl"!==r?s-(null===(a=this.tabNavEl)||void 0===a?void 0:a.scrollLeft):c+(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft)},t.prototype.updateActiveWidth=function(){var t;this.indicatorWidth=null===(t=this.selectedTabEl)||void 0===t?void 0:t.offsetWidth},t.prototype.getIndexOfTabTitle=function(t,e){return void 0===e&&(e=this.tabTitles),e.indexOf(t)},t.prototype.getTabTitleById=function(t){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(i){return[2,Promise.all(this.tabTitles.map((function(t){return t.getTabIdentifier()}))).then((function(i){return e.tabTitles[i.indexOf(t)]}))]}))}))},Object.defineProperty(t.prototype,"tabTitles",{get:function(){return c(this.el,"calcite-tab-title")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"enabledTabTitles",{get:function(){return c(this.el,"calcite-tab-title:not([disabled])")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{z-index:20;position:relative;display:-ms-flexbox;display:flex}.tab-nav{display:-ms-flexbox;display:flex;width:100%;overflow:auto;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;padding:0.25rem;margin:-0.25rem}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{width:100%;right:0;left:0;bottom:0;position:absolute;overflow:hidden;height:0.125rem}.tab-nav-active-indicator{position:absolute;bottom:0;display:block;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);background-color:var(--calcite-ui-brand);height:0.125rem}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0}",t("calcite_tab_title",function(){function t(t){e(this,t),this.calciteTabsActivate=i(this,"calciteTabsActivate",7),this.calciteTabsFocusNext=i(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=i(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=i(this,"calciteTabTitleRegister",7),this.active=!1,this.disabled=!1,this.hasText=!1,this.guid="calcite-tab-title-"+o()}return t.prototype.connectedCallback=function(){this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav")},t.prototype.disconnectedCallback=function(){var t;this.observer.disconnect(),null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))},t.prototype.componentWillLoad=function(){this.updateHasText(),this.tab&&this.active&&this.emitActiveTab()},t.prototype.componentWillRender=function(){var t,e;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.position},t.prototype.render=function(){var t=l(this.el),e=this.el.id||this.guid,i=this.disabled?"span":"a",r=a("calcite-icon",{class:"calcite-tab-title--icon icon-start",dir:t,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),o=a("calcite-icon",{class:"calcite-tab-title--icon icon-end",dir:t,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return a(n,{"aria-controls":this.controls,"aria-expanded":this.active.toString(),dir:t,hasText:this.hasText,id:e,role:"tab",tabindex:this.disabled?"-1":"0"},a(i,{class:{rtl:"rtl"===t}},this.iconStart?r:null,a("slot",null),this.iconEnd?o:null))},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:return e=(t=this.calciteTabTitleRegister).emit,[4,this.getTabIdentifier()];case 1:return e.apply(t,[i.sent()]),[2]}}))}))},t.prototype.tabChangeHandler=function(t){var e=this;this.parentTabNavEl===t.target&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.active=i===t.detail.tab})))},t.prototype.onClick=function(){this.emitActiveTab()},t.prototype.keyDownHandler=function(t){switch(p(t.key)){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":"ltr"===l(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case"ArrowLeft":"ltr"===l(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}},t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)]}))}))},t.prototype.getTabIdentifier=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.tab?this.tab:this.getTabIndex()]}))}))},t.prototype.updateAriaInfo=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),__awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return this.controls=t[e.indexOf(this.el.id)]||null,[2]}))}))},t.prototype.updateHasText=function(){this.hasText=this.el.textContent.trim().length>0},t.prototype.setupTextContentObserver=function(){var t=this;this.observer=new MutationObserver((function(){t.updateHasText()})),this.observer.observe(this.el,{childList:!0,subtree:!0})},t.prototype.emitActiveTab=function(){this.disabled||this.calciteTabsActivate.emit({tab:this.tab})},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout=center]){text-align:center;margin-top:0;margin-bottom:0;margin-left:1.25rem;margin-right:1.25rem;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position=below]) a{border-bottom-width:0;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host(:active) a,:host(:focus) a,:host(:hover) a{text-decoration:none;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2)}:host([active]) a{color:var(--calcite-ui-text-1);border-color:transparent}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;border-bottom-color:transparent;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([hastext]) .calcite-tab-title--icon.icon-start{margin-right:0.5rem}:host([hastext]) .calcite-tab-title--icon.icon-end{margin-left:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-right:0.5rem}:host .rtl{margin-right:0;margin-left:1.25rem}:host([hastext]) .rtl .calcite-tab-title--icon.icon-end{margin-left:0;margin-right:0.5rem}:host([hastext]) .rtl .calcite-tab-title--icon.icon-start{margin-left:0.5rem;margin-right:0}:host([icon-start][icon-end]) .rtl .calcite-tab-title--icon:first-child{margin-left:0.5rem;margin-right:0}",t("calcite_tabs",function(){function t(t){e(this,t),this.layout="inline",this.position="above",this.titles=[],this.tabs=[]}return t.prototype.render=function(){return a(n,null,a("slot",{name:"tab-nav"}),a("section",null,a("slot",null)))},t.prototype.calciteTabTitleRegister=function(t){this.titles=__spreadArray(__spreadArray([],this.titles),[t.target]),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabTitleUnregister=function(t){this.titles=this.titles.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabRegister=function(t){this.tabs=__spreadArray(__spreadArray([],this.tabs),[t.target]),this.registryHandler(),t.stopPropagation()},t.prototype.calciteTabUnregister=function(t){this.tabs=this.tabs.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()},t.prototype.registryHandler=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,a,n=this;return __generator(this,(function(r){switch(r.label){case 0:return this.tabs.some((function(t){return t.tab}))||this.titles.some((function(t){return t.tab}))?(t=this.tabs.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),e=this.titles.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),[3,4]):[3,1];case 1:return[4,Promise.all(this.tabs.map((function(t){return t.getTabIndex()})))];case 2:return i=r.sent(),[4,Promise.all(this.titles.map((function(t){return t.getTabIndex()})))];case 3:a=r.sent(),t=i.reduce((function(t,e,i){return t[e]=n.tabs[i].id,t}),[]),e=a.reduce((function(t,e,i){return t[e]=n.titles[i].id,t}),[]),r.label=4;case 4:return this.tabs.forEach((function(i){return i.updateAriaInfo(t,e)})),this.titles.forEach((function(i){return i.updateAriaInfo(t,e)})),[2]}}))}))},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([position=below]){-ms-flex-direction:column-reverse;flex-direction:column-reverse}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top-width:1px;border-top-color:var(--calcite-ui-border-1);border-top-style:solid}:host([position=below]) section{-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-top-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-1);border-bottom-style:solid}"}}}));