(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[7252],{57252:(t,r,e)=>{"use strict";e.r(r),e.d(r,{calcite_avatar:()=>o});var n=e(27409),i=e(1880),a=e(85848);var o=function(){function t(t){(0,n.r)(this,t),this.scale="m",this.error=!1}return t.prototype.render=function(){var t=this.determineContent();return(0,n.h)(n.H,null,t)},t.prototype.determineContent=function(){var t=this,r=(0,i.g)(this.el);if(this.thumbnail&&!this.error)return(0,n.h)("img",{alt:"",class:"thumbnail",dir:r,onError:function(){return t.error=!0},src:this.thumbnail});var e=this.generateInitials(),a=this.generateFillColor();return(0,n.h)("span",{class:"background",dir:r,style:{backgroundColor:a}},e?(0,n.h)("span",{"aria-hidden":"true",class:"initials"},e):(0,n.h)("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))},t.prototype.generateFillColor=function(){var t=this,r=t.userId,e=t.username,n=t.fullName,i=t.theme,o=r&&"#"+r.substr(r.length-6),s=e||n||"",u=o&&(0,a.i)(o)?o:function(t){for(var r=0,e=0;e<t.length;e++)r=t.charCodeAt(e)+((r<<5)-r);for(var n="#",i=0;i<3;i++)n+=("00"+(r>>8*i&255).toString(16)).substr(-2);return n}(s);return(r||s)&&(0,a.i)(u)?"hsl("+function(t){return function(t){var r=t.r,e=t.g,n=t.b;r/=255,e/=255,n/=255;var i=Math.max(r,e,n),a=Math.min(r,e,n),o=i-a;if(i===a)return 0;var s=(i+a)/2;switch(i){case r:s=(e-n)/o+(e<n?6:0);break;case e:s=(n-r)/o+2;break;case n:s=(r-e)/o+4}return Math.round(60*s)}((0,a.h)(t))}(u)+", 60%, "+("dark"===i?20:90)+"%)":"var(--calcite-ui-foreground-2)"},t.prototype.generateInitials=function(){var t=this.fullName,r=this.username;return t?t.trim().split(" ").map((function(t){return t.substring(0,1)})).join(""):!!r&&r.substring(0,2)},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),t}();o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}"},1880:(t,r,e)=>{"use strict";e.d(r,{a:()=>a,b:()=>s,c:()=>l,d:()=>f,e:()=>h,f:()=>u,g:()=>o,h:()=>p,i:()=>c,n:()=>i,s:()=>m});var n=function(t,r){for(var e=0,n=r.length,i=t.length;e<n;e++,i++)t[i]=r[e];return t};function i(t){return Array.isArray(t)?t:Array.from(t)}function a(t,r){return Array.from(t.attributes).filter((function(t){return t&&!r.includes(t.name)})).reduce((function(t,r){var e,n=r.name,i=r.value;return Object.assign(Object.assign({},t),((e={})[n]=i,e))}),{})}function o(t){return s(t,"dir","ltr",!0)}function s(t,r,e,n){void 0===n&&(n=!1);var i="["+r+"]",a=n?function(t,r){return void 0===r&&(r=this),function r(e){return e&&e!==document&&e!==window?e.closest(t)||r(e.getRootNode().host):null}(r)}(i,t):t.closest(i);return a?a.getAttribute(r):e}function u(t){return function(t,r,e,n){function i(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,a){function o(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?e(t.value):i(t.value).then(o,s)}u((n=n.apply(t,r||[])).next())}))}(this,void 0,void 0,(function(){return function(t,r){var e,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(r){return u([t,r])}}function u(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(t,o)}catch(t){a=[6,t],n=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}(this,(function(r){return t?("function"==typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function l(t,r,e){var i='[slot="'+r+'"]';return(null==e?void 0:e.all)?function(t,r,e){var i=Array.from(t.querySelectorAll(r));i=e&&!1===e.direct?i:i.filter((function(r){return r.parentElement===t}));var a=null==e?void 0:e.selector;return a?i.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,r){return n(n([],t),r)}),[]).filter((function(t){return!!t})):i}(t,i,e):function(t,r,e){var n=t.querySelector(r);n=e&&!1===e.direct||(null==n?void 0:n.parentElement)===t?n:null;var i=null==e?void 0:e.selector;return i?n.querySelector(i):n}(t,i,e)}function c(t,r){return Array.from(t.children).filter((function(t){return t.matches(r)}))}function f(t){return t.getRootNode()}function h(t,r){return r?t instanceof ShadowRoot?t.host.querySelector("#"+r):t.getElementById(r):null}function p(t,r){return t.contains(r)}function m(t,r,e){return"string"==typeof r&&""!==r?r:""===r?t[e]:void 0}},85848:(t,r,e)=>{"use strict";function n(t){var r=t.r,e=t.g,n=t.b;return("#"+r.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")).toLowerCase()}e.d(r,{C:()=>h,a:()=>l,b:()=>i,c:()=>k,h:()=>f,i:()=>s,n:()=>c,p:()=>v,r:()=>n});var i=/^[0-9A-F]$/i,a=/^#[0-9A-F]{3}$/i,o=/^#[0-9A-F]{6}$/i;function s(t){return u(t)||l(t)}function u(t){return t&&4===t.length&&a.test(t)}function l(t){return t&&7===t.length&&o.test(t)}function c(t){return(t=t.toLowerCase()).startsWith("#")||(t="#"+t),u(t)?n(f(t)):t}function f(t){if(!s(t))return null;if(3===(t=t.replace("#","")).length){var r=t.split(""),e=r[0],n=r[1],i=r[2];return{r:parseInt(""+e+e,16),g:parseInt(""+n+n,16),b:parseInt(""+i+i,16)}}return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}var h={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},p="rgb",m="rgba",d="hsl",b="hsla",y="hsv",g="hsva";function v(t){if("string"==typeof t){if(t.startsWith("#")){var r=t.length;if(4===r||7===r)return h.HEX;if(5===r||9===r)return h.HEXA}if(t.startsWith("rgba("))return h.RGBA_CSS;if(t.startsWith("rgb("))return h.RGB_CSS;if(t.startsWith("hsl("))return h.HSL_CSS;if(t.startsWith("hsla("))return h.HSLA_CSS}if("object"==typeof t){if(w(t,"r","g","b"))return w(t,"a")?m:p;if(w(t,"h","s","l"))return w(t,"a")?b:d;if(w(t,"h","s","v"))return w(t,"a")?g:y}return null}function w(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r.every((function(r){return r&&t&&""+r in t}))}function k(t,r){return(null==t?void 0:t.rgbNumber())===(null==r?void 0:r.rgbNumber())}}}]);