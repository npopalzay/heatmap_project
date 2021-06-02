var __awaiter=this&&this.__awaiter||function(t,e,i,r){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{l(r.next(t))}catch(t){o(t)}}function s(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){t.done?i(t.value):n(t.value).then(a,s)}l((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,r,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};System.register(["./p-6d15c15c.system.js","./p-de3145a6.system.js","./p-a15d8568.system.js"],(function(t){"use strict";var e,i,r,n,o,a,s,l,c;return{setters:[function(t){e=t.r,i=t.c,r=t.h,n=t.H,o=t.g},function(t){a=t.h,s=t.g,l=t.b},function(t){c=t.g}],execute:function(){t("calcite_radio_group",function(){function t(t){var r=this;e(this,t),this.calciteRadioGroupChange=i(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.scale="m",this.width="auto",this.hiddenInput=function(){var t=document.createElement("input");return t.type="hidden",r.el.appendChild(t),t}()}return t.prototype.handleNameChange=function(t){this.hiddenInput.name=t},t.prototype.handleSelectedItemChange=function(t,e){if(t!==e){var i=this.getItems(),r=Array.from(i).filter((function(e){return e===t})).pop();r?(this.selectItem(r),this.calciteRadioGroupChange.emit(r.value)):i[0]&&(i[0].tabIndex=0)}},t.prototype.connectedCallback=function(){var t=this.getItems(),e=Array.from(t).filter((function(t){return t.checked})).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);var i=this.hiddenInput,r=this.name;r&&(i.name=r),e&&(i.value=e.value)},t.prototype.componentDidLoad=function(){this.hasLoaded=!0},t.prototype.render=function(){return r(n,{role:"radiogroup",tabIndex:this.disabled?-1:null},r("slot",null))},t.prototype.handleLabelFocus=function(t){a(t.detail.labelEl,this.el)&&this.setFocus()},t.prototype.handleClick=function(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)},t.prototype.handleSelected=function(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))},t.prototype.handleKeyDown=function(t){var e=c(t.key),i=this.el,r=this.selectedItem;if(-1!==["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e)){var n=e;"rtl"===s(i)&&("ArrowRight"===e&&(n="ArrowLeft"),"ArrowLeft"===e&&(n="ArrowRight"));var o=this.getItems(),a=-1;switch(o.forEach((function(t,e){t===r&&(a=e)})),n){case"ArrowLeft":case"ArrowUp":t.preventDefault();var l=a<1?o.item(o.length-1):o.item(a-1);return void this.selectItem(l);case"ArrowRight":case"ArrowDown":t.preventDefault();var u=-1===a?o.item(1):o.item(a+1)||o.item(0);return void this.selectItem(u);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus(),[2]}))}))},t.prototype.getItems=function(){return this.el.querySelectorAll("calcite-radio-group-item")},t.prototype.selectItem=function(t){if(t!==this.selectedItem){var e=this.getItems(),i=null;e.forEach((function(e){var r=e.value===t.value;(r&&!e.checked||!r&&e.checked)&&(e.checked=r),e.tabIndex=r?0:-1,r&&(i=e)})),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}},t.prototype.syncWithInputProxy=function(t){this.hiddenInput.value=t?t.value:""},Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:3rem}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:0.5;pointer-events:none}",t("calcite_radio_group_item",function(){function t(t){e(this,t),this.calciteRadioGroupItemChange=i(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}return t.prototype.handleCheckedChange=function(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()},t.prototype.connectedCallback=function(){var t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()},t.prototype.componentWillLoad=function(){var t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent},t.prototype.render=function(){var t=this,e=t.checked,i=t.useFallback,o=t.value,a=s(this.el),c=l(this.el,"scale","m"),u=l(this.el,"appearance","solid"),p=l(this.el,"layout","horizontal"),h=r("calcite-icon",{class:"radio-group-item-icon",dir:a,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return r(n,{appearance:u,"aria-checked":e.toString(),layout:p,role:"radio",scale:c},r("label",null,this.icon&&"start"===this.iconPosition?h:null,r("slot",null,i?o:""),r("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?h:null))},t.prototype.getMutationObserver=function(){var t=this;return new MutationObserver((function(){return t.syncFromExternalInput()}))},t.prototype.syncFromExternalInput=function(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)},t.prototype.syncToExternalInput=function(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"))},Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["handleCheckedChange"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;margin:2px}:host([layout=horizontal]) label{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}:host([scale=s]) label{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=m]) label{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}:host([scale=l]) label{font-size:var(--calcite-font-size-1);line-height:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([appearance=outline][checked]) label{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;line-height:inherit}:host([icon-position=start]) .radio-group-item-icon{margin-right:0.5rem}:host([icon-position=start][dir=rtl]) .radio-group-item-icon{margin-right:0;margin-left:0.5rem}:host([icon-position=end]) .radio-group-item-icon{margin-left:0.5rem}:host([icon-position=end][dir=rtl]) .radio-group-item-icon{margin-left:0;margin-right:0.5rem}"}}}));