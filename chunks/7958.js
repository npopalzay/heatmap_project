(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[7958],{5475:(t,e,n)=>{"use strict";function r(t,e){return(t+e)%e}n.d(e,{g:()=>r})},57958:(t,e,n)=>{"use strict";n.r(e),n.d(e,{calcite_value_list:()=>u});var r,i=n(27409),o=n(71461),a=n(21373),l=n(5475),s=(n(1880),n(9222),n(63084),function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function l(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):i(t.value).then(a,l)}s((r=r.apply(t,e||[])).next())}))}),c=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};(r||(r={})).grip="grip";var u=function(){function t(t){var e=this;(0,i.r)(this,t),this.calciteListChange=(0,i.c)(this,"calciteListChange",7),this.calciteListOrderChange=(0,i.c)(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(a.m.bind(this)),this.setFilterEl=function(t){e.filterEl=t},this.deselectSiblingItems=a.d.bind(this),this.selectSiblings=a.s.bind(this),this.handleFilter=a.h.bind(this),this.getItemData=a.g.bind(this),this.keyDownHandler=function(t){var n=t.composedPath().find((function(t){var e;return void 0!==(null===(e=t.dataset)||void 0===e?void 0:e.jsHandle)})),r=t.composedPath().find((function(t){var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}));if(n&&r.handleActivated){if("ArrowUp"===t.key||"ArrowDown"===t.key){t.preventDefault();var i=e,o=i.el,s=i.items,c="ArrowDown"===t.key?1:-1,u=s.indexOf(r),f=(0,l.g)(u+c,s.length);if(f===s.length-1)o.appendChild(r);else{var d=o.children[f],h=d===r.nextElementSibling?d.nextElementSibling:d;o.insertBefore(r,h)}requestAnimationFrame((function(){return n.focus()})),r.handleActivated=!0}}else a.k.call(e,t)}}return t.prototype.connectedCallback=function(){a.i.call(this),a.a.call(this)},t.prototype.componentDidLoad=function(){this.setUpDragAndDrop()},t.prototype.disconnectedCallback=function(){a.c.call(this),this.cleanUpDragAndDrop()},t.prototype.calciteListItemRemoveHandler=function(t){a.r.call(this,t)},t.prototype.calciteListItemChangeHandler=function(t){a.b.call(this,t)},t.prototype.calciteListItemPropsChangeHandler=function(t){t.stopPropagation(),this.setUpFilter()},t.prototype.calciteListItemValueChangeHandler=function(t){a.e.call(this,t)},t.prototype.setUpItems=function(){a.f.call(this,"calcite-value-list-item")},t.prototype.setUpFilter=function(){this.filterEnabled&&(this.dataForFilter=this.getItemData())},t.prototype.setUpDragAndDrop=function(){var t=this;this.dragEnabled&&(this.sortable=o.S.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:function(){t.items=Array.from(t.el.querySelectorAll("calcite-value-list-item"));var e=t.items.map((function(t){return t.value}));t.calciteListOrderChange.emit(e)}}))},t.prototype.cleanUpDragAndDrop=function(){this.dragEnabled&&this.sortable.destroy()},t.prototype.getSelectedItems=function(){return s(this,void 0,void 0,(function(){return c(this,(function(t){return[2,this.selectedValues]}))}))},t.prototype.setFocus=function(t){return s(this,void 0,void 0,(function(){return c(this,(function(e){return[2,a.j.call(this,t)]}))}))},t.prototype.getIconType=function(){var t=null;return this.dragEnabled&&(t=r.grip),t},t.prototype.render=function(){return(0,i.h)(a.L,{onKeyDown:this.keyDownHandler,props:this})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:10}calcite-filter{margin-bottom:1px}"},9222:(t,e,n)=>{"use strict";n.d(e,{S:()=>a,a:()=>b,b:()=>h,c:()=>p,d:()=>O,f:()=>r,i:()=>y,r:()=>o});var r="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),a=o.Symbol,l=Object.prototype,s=l.hasOwnProperty,c=l.toString,u=a?a.toStringTag:void 0,f=Object.prototype.toString,d=a?a.toStringTag:void 0;function h(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=s.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=c.call(t);return r&&(e?t[u]=n:delete t[u]),i}(t):function(t){return f.call(t)}(t)}function p(t){return null!=t&&"object"==typeof t}function b(t){return"symbol"==typeof t||p(t)&&"[object Symbol]"==h(t)}var m=/\s/,v=/^\s+/;function y(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var g=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,k=parseInt;function D(t){if("number"==typeof t)return t;if(b(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e}(t)+1).replace(v,""):t}(t);var n=w.test(t);return n||x.test(t)?k(t.slice(2),n?2:8):g.test(t)?NaN:+t}var S=function(){return o.Date.now()},E=Math.max,A=Math.min;function O(t,e,n){var r,i,o,a,l,s,c=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function p(t){return c=t,l=setTimeout(m,e),u?h(t):a}function b(t){var n=t-s;return void 0===s||n>=e||n<0||f&&t-c>=o}function m(){var t=S();if(b(t))return v(t);l=setTimeout(m,function(t){var n=e-(t-s);return f?A(n,o-(t-c)):n}(t))}function v(t){return l=void 0,d&&r?h(t):(r=i=void 0,a)}function g(){var t=S(),n=b(t);if(r=arguments,i=this,s=t,n){if(void 0===l)return p(s);if(f)return clearTimeout(l),l=setTimeout(m,e),h(s)}return void 0===l&&(l=setTimeout(m,e)),a}return e=D(e)||0,y(n)&&(u=!!n.leading,o=(f="maxWait"in n)?E(D(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=i=l=void 0},g.flush=function(){return void 0===l?a:v(S())},g}},1880:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,b:()=>l,c:()=>c,d:()=>f,e:()=>d,f:()=>s,g:()=>a,h:()=>h,i:()=>u,n:()=>i,s:()=>p});var r=function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t};function i(t){return Array.isArray(t)?t:Array.from(t)}function o(t,e){return Array.from(t.attributes).filter((function(t){return t&&!e.includes(t.name)})).reduce((function(t,e){var n,r=e.name,i=e.value;return Object.assign(Object.assign({},t),((n={})[r]=i,n))}),{})}function a(t){return l(t,"dir","ltr",!0)}function l(t,e,n,r){void 0===r&&(r=!1);var i="["+e+"]",o=r?function(t,e){return void 0===e&&(e=this),function e(n){return n&&n!==document&&n!==window?n.closest(t)||e(n.getRootNode().host):null}(e)}(i,t):t.closest(i);return o?o.getAttribute(e):n}function s(t){return function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function l(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):i(t.value).then(a,l)}s((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}(this,(function(e){return t?("function"==typeof t.setFocus?t.setFocus():t.focus(),[2]):[2]}))}))}function c(t,e,n){var i='[slot="'+e+'"]';return(null==n?void 0:n.all)?function(t,e,n){var i=Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t}));var o=null==n?void 0:n.selector;return o?i.map((function(t){return Array.from(t.querySelectorAll(o))})).reduce((function(t,e){return r(r([],t),e)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var r=t.querySelector(e);r=n&&!1===n.direct||(null==r?void 0:r.parentElement)===t?r:null;var i=null==n?void 0:n.selector;return i?r.querySelector(i):r}(t,i,n)}function u(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function f(t){return t.getRootNode()}function d(t,e){return e?t instanceof ShadowRoot?t.host.querySelector("#"+e):t.getElementById(e):null}function h(t,e){return t.contains(e)}function p(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}},63084:(t,e,n)=>{"use strict";n.d(e,{C:()=>o,I:()=>r});var r,i,o={sticky:"sticky"};(i=r||(r={})).circle="circle",i.square="square",i.grip="grip"},21373:(t,e,n)=>{"use strict";n.d(e,{L:()=>A,a:()=>d,b:()=>p,c:()=>h,d:()=>k,e:()=>b,f:()=>x,g:()=>E,h:()=>S,i:()=>f,j:()=>w,k:()=>m,m:()=>s,r:()=>y,s:()=>D});var r=n(1880),i=n(5475),o=n(9222),a=n(27409),l=n(63084);function s(){this.setUpItems(),this.setUpFilter()}var c,u=["ArrowUp","ArrowDown"];function f(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,o.d)(v.bind(this),0)}function d(){this.observer.observe(this.el,{childList:!0,subtree:!0})}function h(){this.observer.disconnect()}function p(t){var e=this.selectedValues,n=t.detail,r=n.item,i=n.value,o=n.selected,a=n.shiftPressed;o?(this.multiple||this.deselectSiblingItems(r),this.multiple&&a&&this.selectSiblings(r),e.set(i,r)):(e.delete(i),this.multiple&&a&&this.selectSiblings(r,!0)),this.multiple||g(r,o),this.lastSelectedItem=r,this.emitCalciteListChange()}function b(t){t.stopPropagation();var e=t.detail.oldValue,n=this.selectedValues;if(n.has(e)){var r=n.get(e);n.delete(e),n.set(t.detail.newValue,r)}}function m(t){var e=t.key,n=t.target;if(function(t){return!!u.find((function(e){return e===t}))}(e)){var o=this.items,a=this.multiple,l=o.length,s=o.indexOf(n);if(l&&-1!==s){t.preventDefault();var c=o[(0,i.g)(s+("ArrowUp"===e?-1:1),l)];g(c,!0),(0,r.f)(c),a||(c.selected=!0)}}}function v(){this.calciteListChange.emit(this.selectedValues)}function y(t){if(!t.defaultPrevented){var e=t.target,n=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===e.parentElement.tagName?(e.parentElement.remove(),Array.from(e.parentElement.children).forEach((function(t){return n.delete(t.value)}))):(e.remove(),n.delete(e.value)),this.emitCalciteListChange()}}function g(t,e){e?t.removeAttribute("tabindex"):t.setAttribute("tabindex","-1")}function w(t){return function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function l(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):i(t.value).then(a,l)}s((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){var e,n,i;return function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}(this,(function(o){switch(o.label){case 0:return this.filterEnabled&&"filter"===t?[4,(0,r.f)(this.filterEl)]:[3,2];case 1:return o.sent(),[2];case 2:return n=(e=this).multiple,0===(i=e.items).length?[2]:n?[2,i[0].setFocus()]:[2,(i.find((function(t){return t.selected}))||i[0]).setFocus()]}}))}))}function x(t){var e=this;this.items=Array.from(this.el.querySelectorAll(t));var n=!1,r=this.items;r.forEach((function(t){t.icon=e.getIconType(),e.multiple||(t.disableDeselect=!0,g(t,!1)),t.selected&&(n=!0,g(t,!0),e.selectedValues.set(t.value,t))}));var i=r[0];!n&&i&&g(i,!0)}function k(t){var e=this;this.items.forEach((function(n){n.value!==t.value&&(n.toggleSelected(!1),e.selectedValues.has(n.value)&&e.selectedValues.delete(n.value))}))}function D(t,e){var n=this;if(void 0===e&&(e=!1),this.lastSelectedItem){var r=this.items,i=r.findIndex((function(t){return t.value===n.lastSelectedItem.value})),o=r.findIndex((function(e){return e.value===t.value}));r.slice(Math.min(i,o),Math.max(i,o)).forEach((function(t){t.toggleSelected(!e),e?n.selectedValues.delete(t.value):n.selectedValues.set(t.value,t)}))}}function S(t){var e=t.detail.map((function(t){return t.value})),n=!1;c||(c=new Set);var i=this.items.filter((function(t){var r=t.parentElement;r.matches("calcite-pick-list-group")&&c.add(r);var i=e.includes(t.value);return t.hidden=!i,n||(n=i&&t.selected),i}));c.forEach((function(t){var e=i.some((function(e){return t.contains(e)}));if(t.hidden=!e,e){var n=(0,r.c)(t,"parent-item");n&&(n.hidden=!1,i.includes(n)&&Array.from(t.children).forEach((function(t){return t.hidden=!1})))}})),c.clear(),i.length>0&&!n&&!this.multiple&&g(i[0],!0)}function E(){return this.items.map((function(t){return{label:t.label,description:t.description,metadata:t.metadata,value:t.value}}))}var A=function(t){var e,n=t.props,i=n.disabled,o=n.loading,s=n.filterEnabled,c=n.dataForFilter,u=n.handleFilter,f=n.filterPlaceholder,d=n.el,h=n.setFilterEl,p=n.theme,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["props"]),m=(0,a.h)("slot",null);return(0,a.h)(a.H,Object.assign({"aria-busy":o.toString(),"aria-disabled":i.toString(),role:"menu"},b),(0,a.h)("section",null,(0,a.h)("header",{class:(e={},e[l.C.sticky]=!0,e)},s?(0,a.h)("calcite-filter",{"aria-label":f,data:c,dir:(0,r.g)(d),disabled:o||i,onCalciteFilterChange:u,placeholder:f,ref:h}):null,(0,a.h)("slot",{name:"menu-actions"})),o||i?(0,a.h)("calcite-scrim",{loading:o,theme:p}):null,m))}}}]);