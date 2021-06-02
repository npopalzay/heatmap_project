var __awaiter=this&&this.__awaiter||function(r,e,a,o){function t(r){return r instanceof a?r:new a((function(e){e(r)}))}return new(a||(a=Promise))((function(a,c){function i(r){try{l(o.next(r))}catch(r){c(r)}}function n(r){try{l(o.throw(r))}catch(r){c(r)}}function l(r){r.done?a(r.value):t(r.value).then(i,n)}l((o=o.apply(r,e||[])).next())}))},__generator=this&&this.__generator||function(r,e){var a,o,t,c,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function n(r){return function(e){return l([r,e])}}function l(c){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,o&&(t=2&c[0]?o.return:c[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,c[1])).done)return t;switch(o=0,t&&(c=[2&c[0],t.value]),c[0]){case 0:case 1:t=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((t=(t=i.trys).length>0&&t[t.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!t||c[1]>t[0]&&c[1]<t[3])){i.label=c[1];break}if(6===c[0]&&i.label<t[1]){i.label=t[1],t=c;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(c);break}t[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(r,i)}catch(r){c=[6,r],o=0}finally{a=t=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};System.register(["./p-6d15c15c.system.js","./p-de3145a6.system.js","./p-2c235db8.system.js"],(function(r){"use strict";var e,a,o,t,c,i,n;return{setters:[function(r){e=r.r,a=r.c,o=r.h,t=r.H,c=r.g},function(r){i=r.g},function(r){n=r.g}],execute:function(){r("calcite_chip",function(){function r(r){var o=this;e(this,r),this.calciteChipDismiss=a(this,"calciteChipDismiss",7),this.appearance="solid",this.color="grey",this.dismissible=!1,this.dismissLabel="close",this.scale="m",this.closeClickHandler=function(r){r.preventDefault(),o.calciteChipDismiss.emit(o.el)},this.guid=n()}return r.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(e){return null===(r=this.closeButton)||void 0===r||r.focus(),[2]}))}))},r.prototype.render=function(){var r=this,e=i(this.el),a="l"!==this.scale?"s":"m",c=o("calcite-icon",{class:"calcite-chip--icon",dir:e,flipRtl:this.iconFlipRtl,icon:this.icon,scale:a}),n=o("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:"close",onClick:this.closeClickHandler,ref:function(e){return r.closeButton=e}},o("calcite-icon",{icon:"x",scale:a}));return o(t,{dir:e},o("slot",{name:"chip-image"}),this.icon?c:null,o("span",{id:this.guid},o("slot",null)),this.dismissible?n:null)},Object.defineProperty(r.prototype,"el",{get:function(){return c(this)},enumerable:!1,configurable:!0}),r}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-chip-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-chip-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-chip-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-chip-transparent-press:rgba(255, 255, 255, 0.08)}:host([scale=s]){height:1.25rem;font-size:var(--calcite-font-size--3);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) slot[name=chip-image]::slotted(*){height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) slot[name=chip-image]::slotted(*){height:1.5rem;width:1.5rem;padding-left:0.25rem}:host([scale=l]){height:2.5rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) slot[name=chip-image]::slotted(*){height:2rem;width:2rem;padding-left:0.25rem}:host([dir=rtl][scale=m]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host([dir=rtl][scale=l]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium);cursor:default;border-radius:9999px;--calcite-chip-button-border-radius:0 50px 50px 0}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([dir=rtl]){text-align:right;--calcite-chip-button-border-radius:50px 0 0 50px}:host span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dir=rtl][dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([dir=rtl][icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host button{margin:0;padding:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;border-style:none;cursor:pointer;background-color:transparent;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-text-1);-webkit-appearance:none;border-radius:var(--calcite-chip-button-border-radius);padding:var(--calcite-chip-spacing-unit-s)}:host button:hover,:host button:focus{background-color:var(--calcite-ui-foreground-2);border-color:var(--calcite-ui-border-2)}:host button:active{background-color:var(--calcite-ui-foreground-3)}:host slot[name=chip-image]::slotted(*){border-radius:50%;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex}.calcite-chip--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin-top:0;margin-bottom:0;margin-right:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-left:var(--calcite-chip-spacing-unit-l);border-radius:var(--calcite-chip-button-border-radius)}:host([dir=rtl]) .calcite-chip--icon{margin-top:0;margin-bottom:0;margin-left:0;margin-right:var(--calcite-chip-spacing-unit-l)}:host([color=blue][appearance=solid]),:host([color=blue][appearance=solid]) button{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=blue][appearance=solid]:not([color=grey])),:host([theme=dark][color=blue][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=blue][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-brand-press)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-brand-press)}:host([theme=dark][color=blue][appearance=clear]){border-color:var(--calcite-ui-brand-hover)}:host([color=blue][appearance=clear]) button:hover,:host([color=blue][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=blue][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=red][appearance=solid]),:host([color=red][appearance=solid]) button{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-danger);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=red][appearance=solid]:not([color=grey])),:host([theme=dark][color=red][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=red][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-danger-press)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger-press)}:host([theme=dark][color=red][appearance=clear]){border-color:var(--calcite-ui-danger-hover)}:host([color=red][appearance=clear]) button:hover,:host([color=red][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=red][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=yellow][appearance=solid]),:host([color=yellow][appearance=solid]) button{border-color:var(--calcite-ui-warning);background-color:var(--calcite-ui-warning);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])),:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=yellow][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([theme=dark][color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) button:hover,:host([color=yellow][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=yellow][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=green][appearance=solid]),:host([color=green][appearance=solid]) button{border-color:var(--calcite-ui-success);background-color:var(--calcite-ui-success);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=green][appearance=solid]:not([color=grey])),:host([theme=dark][color=green][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=green][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([theme=dark][color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) button:hover,:host([color=green][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=green][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=grey][appearance=solid]),:host([color=grey][appearance=solid]) button{border-color:var(--calcite-ui-foreground-2);background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=grey][appearance=solid]:not([color=grey])),:host([theme=dark][color=grey][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=grey][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-1)}:host([theme=dark][color=grey][appearance=clear]){border-color:var(--calcite-ui-text-3-dark)}:host([color=grey][appearance=clear]) button:hover,:host([color=grey][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=grey][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}"}}}));