(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[9937],{19937:(e,t,i)=>{"use strict";i.r(t),i.d(t,{calcite_alert:()=>s});var r=i(27409),a=i(1880),o=i(90057),n={slow:14e3,medium:1e4,fast:6e3},s=function(){function e(e){var t=this;(0,r.r)(this,e),this.calciteAlertClose=(0,r.c)(this,"calciteAlertClose",7),this.calciteAlertOpen=(0,r.c)(this,"calciteAlertOpen",7),this.calciteAlertSync=(0,r.c)(this,"calciteAlertSync",7),this.calciteAlertRegister=(0,r.c)(this,"calciteAlertRegister",7),this.active=!1,this.autoDismiss=!1,this.autoDismissDuration=this.autoDismiss?"medium":null,this.color="blue",this.intlClose="close",this.scale="m",this.queue=[],this.queueLength=0,this.queued=!1,this.closeAlert=function(){t.queued=!1,t.active=!1,t.queue=t.queue.filter((function(e){return e!==t.el})),t.determineActiveAlert(),t.calciteAlertSync.emit({queue:t.queue}),t.calciteAlertClose.emit({el:t.el,queue:t.queue})}}return e.prototype.watchActive=function(){var e=this;this.active&&!this.queued&&this.calciteAlertRegister.emit(),this.active||(this.queue=this.queue.filter((function(t){return t!==e.el})),this.calciteAlertSync.emit({queue:this.queue}))},e.prototype.updateRequestedIcon=function(){this.requestedIcon=(0,a.s)(o.S,this.icon,this.color)},e.prototype.connectedCallback=function(){this.active&&!this.queued&&this.calciteAlertRegister.emit()},e.prototype.componentWillLoad=function(){this.requestedIcon=(0,a.s)(o.S,this.icon,this.color)},e.prototype.componentDidLoad=function(){this.alertLinkEl=this.el.querySelectorAll("calcite-link")[0]},e.prototype.render=function(){var e=this,t=(0,a.g)(this.el),i=(0,r.h)("button",{"aria-label":this.intlClose,class:"alert-close",onClick:this.closeAlert,ref:function(t){return e.closeButton=t},type:"button"},(0,r.h)("calcite-icon",{icon:"x",scale:"m"})),o=(0,r.h)("div",{class:(this.queueLength>1?"active ":"")+"alert-queue-count"},"+",this.queueLength>2?this.queueLength-1:1),n=this.active,s=(0,r.h)("div",{class:"alert-dismiss-progress"}),l=this.autoDismiss?"alert":"alertdialog",c=!n;return(0,r.h)(r.H,{active:n,"aria-hidden":c.toString(),"aria-label":this.label,"calcite-hydrated-hidden":c,dir:t,queued:this.queued,role:l},this.requestedIcon?(0,r.h)("div",{class:"alert-icon"},(0,r.h)("calcite-icon",{icon:this.requestedIcon,scale:"m"})):null,(0,r.h)("div",{class:"alert-content"},(0,r.h)("slot",{name:"alert-title"}),(0,r.h)("slot",{name:"alert-message"}),(0,r.h)("slot",{name:"alert-link"})),o,this.autoDismiss?null:i,this.active&&!this.queued&&this.autoDismiss?s:null)},e.prototype.alertSync=function(e){this.queue!==e.detail.queue&&(this.queue=e.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert()},e.prototype.alertRegister=function(){this.active&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteAlertSync.emit({queue:this.queue}),this.determineActiveAlert()},e.prototype.setFocus=function(){return function(e,t,i,r){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):a(e.value).then(n,s)}l((r=r.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){return function(e,t){var i,r,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,r=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],r=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}(this,(function(e){return this.closeButton||this.alertLinkEl?(this.alertLinkEl?this.alertLinkEl.setFocus():this.closeButton&&this.closeButton.focus(),[2]):[2]}))}))},e.prototype.determineActiveAlert=function(){var e,t=this;(null===(e=this.queue)||void 0===e?void 0:e[0])===this.el&&(this.openAlert(),clearTimeout(this.autoDismissTimeout),this.autoDismiss&&(this.autoDismissTimeout=window.setTimeout((function(){return t.closeAlert()}),n[this.autoDismissDuration])))},e.prototype.openAlert=function(){var e=this;clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout((function(){return e.queued=!1}),300),this.calciteAlertOpen.emit({el:this.el,queue:this.queue})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{active:["watchActive"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}},enumerable:!1,configurable:!0}),e}();s.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-alert-dismiss-progress-background:rgba(255, 255, 255, 0.8)}:host([theme=dark]){--calcite-alert-dismiss-progress-background:rgba(43, 43, 43, 0.8)}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=s]) slot[name=alert-title]::slotted(*),:host([scale=s]) *::slotted([slot=alert-title]){font-size:0.875rem;line-height:1.5}:host([scale=s]) slot[name=alert-message]::slotted(*),:host([scale=s]) *::slotted([slot=alert-message]){font-size:0.8125rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-link){font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.5rem}:host([scale=m]) slot[name=alert-title]::slotted(*),:host([scale=m]) *::slotted([slot=alert-title]){font-size:0.9375rem;line-height:1.5}:host([scale=m]) slot[name=alert-message]::slotted(*),:host([scale=m]) *::slotted([slot=alert-message]){font-size:0.875rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-link){font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1.2rem;--calcite-alert-spacing-token-large:1.875rem}:host([scale=l]) slot[name=alert-title]::slotted(*),:host([scale=l]) *::slotted([slot=alert-title]){font-size:1rem;line-height:1.5}:host([scale=l]) slot[name=alert-message]::slotted(*),:host([scale=l]) *::slotted([slot=alert-message]){font-size:0.9375rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-link){font-size:0.9375rem;line-height:1.5}:host{-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);display:-ms-flexbox;display:flex;position:fixed;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0 auto;width:var(--calcite-alert-width);max-width:90%;max-height:0;background-color:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);opacity:0;left:0;right:0;bottom:0;pointer-events:none;z-index:101;-webkit-transform:translate3d(0, 1.5rem, 0);transform:translate3d(0, 1.5rem, 0);-webkit-transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;border-top:0px solid transparent}@media only screen and (max-width: 860px){:host{width:100%;max-width:100%;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}.alert-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]:not([queued])){opacity:1;max-height:100%;-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);pointer-events:initial;border-top-width:3px}@media only screen and (max-width: 860px){:host([active]:not([queued])){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}slot[name=alert-title]::slotted(*),*::slotted([slot=alert-title]){font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-1);margin:0;font-weight:500}slot[name=alert-message]::slotted(*),*::slotted([slot=alert-message]){display:inline;margin:0;margin-right:0.75rem;font-weight:400;font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-2)}:host([dir=rtl]) slot[name=alert-message]::slotted(*),:host([dir=rtl]) *::slotted([slot=alert-message]){margin-right:unset;margin-left:0.75rem}.alert-content{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0}@media only screen and (max-width: 860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type:not(:only-child){padding-left:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}@media only screen and (max-width: 860px){.alert-content{padding:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0}}:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-small) 0 var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small)}:host([dir=rtl]) .alert-content:first-of-type:not(:only-child){padding-right:var(--calcite-alert-spacing-token-large)}@media only screen and (max-width: 860px){:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}}.alert-icon{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 860px){.alert-icon{padding:1.5rem}}.alert-close{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3);overflow:hidden;border-radius:0 0 var(--calcite-border-radius) 0}@media only screen and (max-width: 860px){.alert-close{padding:1.5rem}}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2)}.alert-close:active{background-color:var(--calcite-ui-foreground-3)}@media only screen and (max-width: 860px){.alert-close{border-radius:0}}:host([dir=rtl]) .alert-close{border-radius:0 0 0 var(--calcite-border-radius)}.alert-queue-count{font-size:0.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-item-align:stretch;align-self:stretch;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-ui-text-2);opacity:0;border-left:0px solid transparent;border-right:0px solid transparent;cursor:default;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;overflow:hidden}.alert-queue-count.active{visibility:visible;opacity:1;padding:0 0.375rem;width:3rem;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}@media only screen and (max-width: 860px){.alert-queue-count{border-radius:0}}:host([auto-dismiss])>.alert-queue-count{border-right:0px solid transparent}:host([auto-dismiss][dir=rtl])>.alert-queue-count{border-left:0px solid transparent}.alert-dismiss-progress{display:block;position:absolute;left:0;right:0;top:-3px;width:100%;height:3px;z-index:103;overflow:hidden;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{height:3px;top:0;right:0;display:block;position:absolute;content:"";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104}:host([dir=rtl]) .alert-dismiss-progress:after{left:0;right:initial}:host([color=blue]){border-top-color:var(--calcite-ui-brand)}:host([color=blue]) .alert-icon{color:var(--calcite-ui-brand)}:host([color=red]){border-top-color:var(--calcite-ui-danger)}:host([color=red]) .alert-icon{color:var(--calcite-ui-danger)}:host([color=yellow]){border-top-color:var(--calcite-ui-warning)}:host([color=yellow]) .alert-icon{color:var(--calcite-ui-warning)}:host([color=green]){border-top-color:var(--calcite-ui-success)}:host([color=green]) .alert-icon{color:var(--calcite-ui-success)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6000ms ease-out;animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10000ms ease-out;animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14000ms ease-out;animation:dismissProgress 14000ms ease-out}@-webkit-keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}@keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}'},1880:(e,t,i)=>{"use strict";i.d(t,{a:()=>o,b:()=>s,c:()=>c,d:()=>d,e:()=>h,f:()=>l,g:()=>n,h:()=>m,i:()=>u,n:()=>a,s:()=>f});var r=function(e,t){for(var i=0,r=t.length,a=e.length;i<r;i++,a++)e[a]=t[i];return e};function a(e){return Array.isArray(e)?e:Array.from(e)}function o(e,t){return Array.from(e.attributes).filter((function(e){return e&&!t.includes(e.name)})).reduce((function(e,t){var i,r=t.name,a=t.value;return Object.assign(Object.assign({},e),((i={})[r]=a,i))}),{})}function n(e){return s(e,"dir","ltr",!0)}function s(e,t,i,r){void 0===r&&(r=!1);var a="["+t+"]",o=r?function(e,t){return void 0===t&&(t=this),function t(i){return i&&i!==document&&i!==window?i.closest(e)||t(i.getRootNode().host):null}(t)}(a,e):e.closest(a);return o?o.getAttribute(t):i}function l(e){return function(e,t,i,r){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):a(e.value).then(n,s)}l((r=r.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){return function(e,t){var i,r,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,r=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!((a=(a=n.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],r=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}(this,(function(t){return e?("function"==typeof e.setFocus?e.setFocus():e.focus(),[2]):[2]}))}))}function c(e,t,i){var a='[slot="'+t+'"]';return(null==i?void 0:i.all)?function(e,t,i){var a=Array.from(e.querySelectorAll(t));a=i&&!1===i.direct?a:a.filter((function(t){return t.parentElement===e}));var o=null==i?void 0:i.selector;return o?a.map((function(e){return Array.from(e.querySelectorAll(o))})).reduce((function(e,t){return r(r([],e),t)}),[]).filter((function(e){return!!e})):a}(e,a,i):function(e,t,i){var r=e.querySelector(t);r=i&&!1===i.direct||(null==r?void 0:r.parentElement)===e?r:null;var a=null==i?void 0:i.selector;return a?r.querySelector(a):r}(e,a,i)}function u(e,t){return Array.from(e.children).filter((function(e){return e.matches(t)}))}function d(e){return e.getRootNode()}function h(e,t){return t?e instanceof ShadowRoot?e.host.querySelector("#"+t):e.getElementById(t):null}function m(e,t){return e.contains(t)}function f(e,t,i){return"string"==typeof t&&""!==t?t:""===t?e[i]:void 0}},90057:(e,t,i)=>{"use strict";var r,a;i.d(t,{S:()=>r}),(a=r||(r={})).green="checkCircle",a.yellow="exclamationMarkTriangle",a.red="exclamationMarkTriangle",a.blue="lightbulb"}}]);