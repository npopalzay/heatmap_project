(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[3170],{14506:(e,t,i)=>{"use strict";i.d(t,{C:()=>a,c:()=>n});var r=i(27409);function n(e){return Math.min(Math.max(Math.ceil(e),1),6)}var a=function(e,t){var i="h"+e.level;return delete e.level,(0,r.h)(i,Object.assign({},e),t)}},63170:(e,t,i)=>{"use strict";i.r(t),i.d(t,{calcite_block:()=>d,calcite_block_section:()=>u});var r=i(27409),n=i(46958),a=i(1880),o=i(14506),l=i(31508),c="icon",s="control",d=function(){function e(e){var t=this;(0,r.r)(this,e),this.calciteBlockToggle=(0,r.c)(this,"calciteBlockToggle",7),this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.intlLoading="Loading",this.loading=!1,this.open=!1,this.onHeaderClick=function(){t.open=!t.open,t.calciteBlockToggle.emit()}}return e.prototype.renderScrim=function(){var e=this,t=e.disabled,i=e.loading,n=e.theme,a=(0,r.h)("slot",null);return[i||t?(0,r.h)("calcite-scrim",{loading:i,theme:n}):null,a]},e.prototype.render=function(){var e,t=this,i=t.collapsible,l=t.disabled,d=t.el,u=t.heading,f=t.intlCollapse,g=t.intlExpand,m=t.loading,p=t.open,h=t.summary,b=t.intlLoading,y=t.headingLevel,w=p?f||"Collapse":g||"Expand",x=(0,a.c)(d,c),k=(0,r.h)("header",{class:"header"},x?(0,r.h)("div",{class:"icon"},(0,r.h)("slot",{name:c})):null,(0,r.h)("div",{class:"title"},(0,r.h)(o.C,{class:"heading",level:y||4},u),h?(0,r.h)("div",{class:"summary"},h):null)),v=(0,a.c)(d,s),D=(0,r.h)("div",{class:"header-container"},this.dragHandle?(0,r.h)("calcite-handle",null):null,i?(0,r.h)("button",{"aria-expanded":i?p.toString():null,"aria-label":w,class:"toggle",onClick:this.onHeaderClick,title:w},k):k,m?(0,r.h)("calcite-loader",{inline:!0,"is-active":!0,label:b}):v?(0,r.h)("div",{class:"control-container"},(0,r.h)("slot",{name:s})):null),z="rtl"===(0,a.g)(d);return(0,r.h)(r.H,{tabIndex:l?-1:null},(0,r.h)("article",{"aria-busy":m.toString(),class:(e={},e.article=!0,e[n.C.rtl]=z,e)},D,(0,r.h)("div",{class:"content",hidden:!p},this.renderScrim())))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();d.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto;grid-template-areas:"handle header control";grid-column:header-start/control-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:0.75rem;padding-right:0.75rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.toggle-icon{-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;fill:currentColor;margin:0;margin-right:1rem;-ms-flex-preferred-size:1rem;flex-basis:1rem}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.75rem;margin-bottom:0.75rem;-webkit-box-shadow:1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:1px 0 0 var(--calcite-ui-border-1) inset}:host([open]).calcite--rtl{-webkit-box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .title{padding-left:0.25rem}:host([drag-handle]) .icon{margin-left:0;margin-right:0.5rem}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}:host([drag-handle]) .calcite--rtl .icon{margin-right:0;margin-left:0.25rem}';var u=function(){function e(e){var t=this;(0,r.r)(this,e),this.calciteBlockSectionToggle=(0,r.c)(this,"calciteBlockSectionToggle",7),this.open=!1,this.toggleDisplay="button",this.guid="calcite-block-section-"+(0,l.g)(),this.toggleSection=function(){t.open=!t.open,t.calciteBlockSectionToggle.emit()}}return e.prototype.handleHeaderLabelKeyDown=function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),this.click())},e.prototype.render=function(){var e,t,i,o=this,l=o.el,c=o.guid,s=o.intlCollapse,d=o.intlExpand,u=o.open,f=o.text,g=o.toggleDisplay,m=(0,a.g)(l),p=u?"chevron-down":"rtl"===m?"chevron-left":"chevron-right",h=u?s||"Collapse":d||"Expand",b=c+"__label",y="switch"===g?(0,r.h)("label",{"aria-label":h,class:(e={},e.toggle=!0,e["toggle--switch"]=!0,e),id:b,onKeyDown:this.handleHeaderLabelKeyDown,tabIndex:0,title:h},f,(0,r.h)("calcite-switch",{"aria-labelledby":b,onCalciteSwitchChange:this.toggleSection,scale:"s",switched:u,tabIndex:-1})):(0,r.h)("button",{"aria-label":h,class:(t={},t["section-header"]=!0,t.toggle=!0,t),name:h,onClick:this.toggleSection,onKeyDown:this.handleHeaderLabelKeyDown},(0,r.h)("calcite-icon",{icon:p,scale:"s"}),(0,r.h)("span",{class:"section-header__text"},f));return(0,r.h)("section",{"aria-expanded":u.toString(),class:(i={},i[n.C.rtl]="rtl"===m,i)},y,(0,r.h)("div",{class:"content",hidden:!u},(0,r.h)("slot",null)))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host([open]){border-bottom:1px solid var(--calcite-ui-border-3)}:host(:last-child){border-bottom:none}.toggle{background-color:transparent;border:none;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin:var(--calcite-spacing-quarter) 0;padding:var(--calcite-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header__text{margin:0 var(--calcite-spacing-quarter)}.toggle--switch{-ms-flex-pack:justify;justify-content:space-between}.toggle--switch calcite-switch{pointer-events:none;margin:0 0 0 var(--calcite-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-spacing-half)}"},1880:(e,t,i)=>{"use strict";i.d(t,{a:()=>a,b:()=>l,c:()=>s,d:()=>u,e:()=>f,f:()=>c,g:()=>o,h:()=>g,i:()=>d,n:()=>n,s:()=>m});var r=function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};function n(e){return Array.isArray(e)?e:Array.from(e)}function a(e,t){return Array.from(e.attributes).filter((function(e){return e&&!t.includes(e.name)})).reduce((function(e,t){var i,r=t.name,n=t.value;return Object.assign(Object.assign({},e),((i={})[r]=n,i))}),{})}function o(e){return l(e,"dir","ltr",!0)}function l(e,t,i,r){void 0===r&&(r=!1);var n="["+t+"]",a=r?function(e,t){return void 0===t&&(t=this),function t(i){return i&&i!==document&&i!==window?i.closest(e)||t(i.getRootNode().host):null}(t)}(n,e):e.closest(n);return a?a.getAttribute(t):i}function c(e){return function(e,t,i,r){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?i(e.value):n(e.value).then(o,l)}c((r=r.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){return function(e,t){var i,r,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(e){return function(t){return c([e,t])}}function c(a){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}(this,(function(t){return e?("function"==typeof e.setFocus?e.setFocus():e.focus(),[2]):[2]}))}))}function s(e,t,i){var n='[slot="'+t+'"]';return(null==i?void 0:i.all)?function(e,t,i){var n=Array.from(e.querySelectorAll(t));n=i&&!1===i.direct?n:n.filter((function(t){return t.parentElement===e}));var a=null==i?void 0:i.selector;return a?n.map((function(e){return Array.from(e.querySelectorAll(a))})).reduce((function(e,t){return r(r([],e),t)}),[]).filter((function(e){return!!e})):n}(e,n,i):function(e,t,i){var r=e.querySelector(t);r=i&&!1===i.direct||(null==r?void 0:r.parentElement)===e?r:null;var n=null==i?void 0:i.selector;return n?r.querySelector(n):r}(e,n,i)}function d(e,t){return Array.from(e.children).filter((function(e){return e.matches(t)}))}function u(e){return e.getRootNode()}function f(e,t){return t?e instanceof ShadowRoot?e.host.querySelector("#"+t):e.getElementById(t):null}function g(e,t){return e.contains(t)}function m(e,t,i){return"string"==typeof t&&""!==t?t:""===t?e[i]:void 0}},31508:(e,t,i)=>{"use strict";i.d(t,{g:()=>r});var r=function(){return[2,1,1,1,3].map((function(e){for(var t="",i=0;i<e;i++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")}},46958:(e,t,i)=>{"use strict";i.d(t,{C:()=>r});var r={rtl:"calcite--rtl"}}}]);