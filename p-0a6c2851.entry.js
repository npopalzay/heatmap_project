import{r as t,c as i,h as e,H as c,g as a}from"./p-f8f51224.js";import{s as n,b as s,g as l,a as r}from"./p-606b130f.js";import{g as u,n as o}from"./p-9051b8cf.js";import{l as p,d as h,g as d,a as m,s as b}from"./p-eaa0845d.js";import{h as x}from"./p-18a62b5e.js";const f={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},g=class{constructor(e){t(this,e),this.calciteInputFocus=i(this,"calciteInputFocus",7),this.calciteInputBlur=i(this,"calciteInputBlur",7),this.calciteInputInput=i(this,"calciteInputInput",7),this.calciteInputChange=i(this,"calciteInputChange",7),this.alignment="start",this.autofocus=!1,this.groupSeparator=!1,this.loading=!1,this.locale=document.documentElement.lang||"en",this.localeFormat=!1,this.numberButtonType="vertical",this.required=!1,this.scale="m",this.status="idle",this.type="text",this.value="",this.childElType="input",this.localizedValue=p(this.value,this.locale,this.groupSeparator),this.clearInputValue=t=>{this.setValue("",t,!0)},this.inputBlurHandler=()=>{this.calciteInputBlur.emit({element:this.childEl,value:this.value}),this.preFocusValue!==this.value&&this.calciteInputChange.emit()},this.inputFocusHandler=t=>{t.target!==this.slottedActionEl&&this.setFocus(),this.calciteInputFocus.emit({element:this.childEl,value:this.value}),this.preFocusValue=this.value},this.inputInputHandler=t=>{const e=t.target.value,i=this.shouldFormatNumberByLocale()?h(e,this.locale):e;this.setValue(i,t)},this.inputKeyDownHandler=t=>{"Enter"===t.key&&this.calciteInputChange.emit()},this.inputNumberKeyDownHandler=t=>{if(!this.shouldFormatNumberByLocale())return;if("ArrowUp"===t.key)return void this.nudgeNumberValue("up",t);if("ArrowDown"===t.key)return void this.nudgeNumberValue("down",t);const e=[...o,"ArrowLeft","ArrowRight","Enter","Backspace","Escape","Tab","-"];t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||(e.includes(t.key)?"Enter"===t.key&&this.calciteInputChange.emit():t.key!=d(this.locale)&&(t.key==m(this.locale)&&-1===this.localizedValue.indexOf(t.key)||t.preventDefault()))},this.nudgeNumberValue=(t,e)=>{var i,c;if("number"!==this.type)return;const a=(null===(c=null===(i=this.value)||void 0===i?void 0:i.split(".")[1])||void 0===c?void 0:c.length)||0,n=this.maxString?parseFloat(this.maxString):null,l=this.minString?parseFloat(this.minString):null,s="any"===this.step?1:Math.abs(this.step||1);let r=this.value&&""!==this.value?parseFloat(this.value):0,u=this.value;"up"===t&&(!n&&0!==n||r<n)&&(u=(r+=s).toFixed(a).toString()),"down"===t&&(!l&&0!==l||r>l)&&(u=(r-=s).toFixed(a).toString()),this.setValue(u,e,!0)},this.numberButtonMouseDownHandler=t=>{t.preventDefault(),this.nudgeNumberValue(t.target.dataset.adjustment,t)},this.reset=t=>{"number"===this.type&&t.preventDefault(),this.setValue(this.defaultValue,t)},this.setChildElRef=t=>{this.childEl=t},this.setChildNumberElRef=t=>{this.childNumberEl=t},this.setLocalizedValue=t=>{this.localizedValue=p(b(t),this.locale,this.groupSeparator)},this.setValue=(t,e,i=!1)=>{const c=this.value;this.value="number"===this.type?b(t):t,this.shouldFormatNumberByLocale()&&this.setLocalizedValue(t),"number"===this.type&&t.endsWith(".")||(this.calciteInputInput.emit({element:this.childEl,nativeEvent:e,value:t}).defaultPrevented?(this.value=c,this.setLocalizedValue(c)):i&&this.calciteInputChange.emit())},this.shouldFormatNumberByLocale=()=>"number"===this.type}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=(null===(t=this.max)||void 0===t?void 0:t.toString())||null}minWatcher(){var t;this.minString=(null===(t=this.min)||void 0===t?void 0:t.toString())||null}valueWatcher(t){this.shouldFormatNumberByLocale()&&this.setLocalizedValue(t)}updateRequestedIcon(){this.requestedIcon=n(f,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||"search"===this.type)&&this.value.length>0}get isTextarea(){return"textarea"===this.childElType}connectedCallback(){var t;this.form=this.el.closest("form"),null===(t=this.form)||void 0===t||t.addEventListener("reset",this.reset),this.scale=s(this.el,"scale",this.scale),this.status=s(this.el,"status",this.status),this.step=!this.step&&this.shouldFormatNumberByLocale()?"any":this.step}disconnectedCallback(){var t;null===(t=this.form)||void 0===t||t.removeEventListener("reset",this.reset)}componentWillLoad(){var t,e;this.childElType="textarea"===this.type?"textarea":"input",this.defaultValue=this.value,this.maxString=null===(t=this.max)||void 0===t?void 0:t.toString(),this.minString=null===(e=this.min)||void 0===e?void 0:e.toString(),this.requestedIcon=n(f,this.icon,this.type)}componentDidLoad(){this.slottedActionEl=this.el.querySelector("[slot=input-action]"),this.setDisabledAction(),this.shouldFormatNumberByLocale()&&(this.childEl.style.cssText=x)}keyDownHandler(t){this.isClearable&&"Escape"===u(t.key)&&(this.clearInputValue(t),t.preventDefault())}async setFocus(){var t,e;this.shouldFormatNumberByLocale()?null===(t=this.childNumberEl)||void 0===t||t.focus():null===(e=this.childEl)||void 0===e||e.focus()}setDisabledAction(){if(!this.slottedActionEl)return;const t=this.slottedActionEl;this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")}render(){const t=l(this.el),i=r(this.el,["alignment","dir","clearable","min","max","step","value","icon","loading","prefix-text","scale","status","suffix-text","theme","number-button-type","locale","group-separator"]),a=e("div",{class:"calcite-input-loading"},e("calcite-progress",{type:"indeterminate"})),n="s"===this.scale||"m"===this.scale?"s":"m",s=e("button",{class:"calcite-input-clear-button",disabled:this.loading,onClick:this.clearInputValue},e("calcite-icon",{icon:"x",scale:n,theme:this.theme})),u=e("calcite-icon",{class:"calcite-input-icon",dir:t,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:n,theme:this.theme}),o="horizontal"===this.numberButtonType?"number-button-item-horizontal":null,p=e("div",{class:`calcite-input-number-button-item ${o}`,"data-adjustment":"up",onMouseDown:this.numberButtonMouseDownHandler},e("calcite-icon",{icon:"chevron-up",scale:n,theme:this.theme})),h=e("div",{class:`calcite-input-number-button-item ${o}`,"data-adjustment":"down",onMouseDown:this.numberButtonMouseDownHandler},e("calcite-icon",{icon:"chevron-down",scale:n,theme:this.theme})),d=e("div",{class:"calcite-input-number-button-wrapper"},p,h),m=e("div",{class:"calcite-input-prefix"},this.prefixText),b=e("div",{class:"calcite-input-suffix"},this.suffixText),x=this.shouldFormatNumberByLocale()?e("input",Object.assign({},i,{autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputNumberKeyDownHandler,placeholder:this.placeholder||"",ref:this.setChildNumberElRef,tabIndex:0,type:"text",value:this.localizedValue})):null,f=[e(this.childElType,Object.assign({},i,{autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,placeholder:this.placeholder||"",ref:this.setChildElRef,required:!!this.required||null,step:this.step,tabIndex:this.disabled||this.shouldFormatNumberByLocale()?-1:null,type:this.type,value:this.value})),this.isTextarea?e("div",{class:"calcite-input-resize-icon-wrapper"},e("calcite-icon",{icon:"chevron-down",scale:"s"})):null];return e(c,{dir:t,onClick:this.inputFocusHandler},e("div",{class:"calcite-input-wrapper"},"number"===this.type&&"horizontal"===this.numberButtonType?h:null,this.prefixText?m:null,e("div",{class:"calcite-input-element-wrapper"},x,f,this.isClearable?s:null,this.requestedIcon?u:null,this.loading?a:null),e("div",{class:"calcite-input-action-wrapper"},e("slot",{name:"input-action"})),"number"===this.type&&"vertical"===this.numberButtonType?d:null,this.suffixText?b:null,"number"===this.type&&"horizontal"===this.numberButtonType?p:null))}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}}};g.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-input:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-input-h{display:none}[scale=s].sc-calcite-input-h textarea.sc-calcite-input,[scale=s].sc-calcite-input-h input.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size--2);padding:0.5rem;height:2rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{min-height:32px}[scale=s].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input,[scale=s].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=s].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:32px;min-width:32px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input,[scale=m].sc-calcite-input-h input.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size--1);padding:0.75rem;height:44px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{min-height:44px}[scale=m].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:44px}[scale=m].sc-calcite-input-h textarea.sc-calcite-input,[scale=m].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=m].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:44px;min-width:44px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input,[scale=l].sc-calcite-input-h input.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{font-size:var(--calcite-font-size-1);padding:1rem;height:56px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{min-height:56px}[scale=l].sc-calcite-input-h .calcite-input-number-button-wrapper.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input-action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:56px}[scale=l].sc-calcite-input-h textarea.sc-calcite-input,[scale=l].sc-calcite-input-h input[type=file].sc-calcite-input{height:auto}[scale=l].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{min-height:56px;min-width:56px}[disabled].sc-calcite-input-h{pointer-events:none}[disabled].sc-calcite-input-h .calcite-input-wrapper.sc-calcite-input{opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}[disabled].sc-calcite-input-h textarea.sc-calcite-input,[disabled].sc-calcite-input-h input.sc-calcite-input{pointer-events:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{display:-ms-flexbox;display:flex;position:relative;min-width:20%;max-width:100%;max-height:100%;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;font-family:inherit;-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;outline:0;margin:0;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);font-weight:400;border-radius:0;-webkit-border-radius:0}.sc-calcite-input-h input[type=search].sc-calcite-input::-webkit-search-decoration{-webkit-appearance:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.sc-calcite-input-h textarea.sc-calcite-input:focus,.sc-calcite-input-h input.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.sc-calcite-input-h input.sc-calcite-input,.sc-calcite-input-h textarea.sc-calcite-input{color:var(--calcite-ui-text-1);border:1px solid var(--calcite-ui-border-1)}.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input::placeholder,.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}.sc-calcite-input-h input.sc-calcite-input:focus,.sc-calcite-input-h textarea.sc-calcite-input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}.sc-calcite-input-h input[readonly].sc-calcite-input,.sc-calcite-input-h textarea[readonly].sc-calcite-input{background-color:var(--calcite-ui-background)}.sc-calcite-input-h input[readonly].sc-calcite-input:focus,.sc-calcite-input-h textarea[readonly].sc-calcite-input:focus{color:var(--calcite-ui-text-1)}.sc-calcite-input-h calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.sc-calcite-input-h slot.sc-calcite-input:not[name=input-message]{display:block;margin-bottom:0.375rem;color:var(--calcite-ui-text-2);font-weight:500}[icon].sc-calcite-input-h input.sc-calcite-input{padding-left:2.25rem}[dir=rtl][icon].sc-calcite-input-h input.sc-calcite-input{padding-right:2.25rem;padding-left:0.75rem}[dir=rtl][icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-right:3rem;padding-left:0.75rem}[icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-left:3rem}.calcite-input-element-wrapper.sc-calcite-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1;flex:1;min-width:20%;position:relative;-ms-flex-order:3;order:3}.calcite-input-icon.sc-calcite-input{display:block;position:absolute;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;top:calc(50% - 9px);left:0.75rem;margin:1px auto 0;z-index:1}[scale=l].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{top:calc(50% - 12px)}[dir=rtl].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{left:unset;right:0.75rem}input[type=text].sc-calcite-input::-ms-clear{display:none;width:0;height:0}input[type=text].sc-calcite-input::-ms-reveal{display:none;width:0;height:0}input[type=search].sc-calcite-input::-webkit-search-decoration,input[type=search].sc-calcite-input::-webkit-search-cancel-button,input[type=search].sc-calcite-input::-webkit-search-results-button,input[type=search].sc-calcite-input::-webkit-search-results-decoration,input[type=date].sc-calcite-input::-webkit-clear-button,input[type=time].sc-calcite-input::-webkit-clear-button{display:none}.calcite-input-clear-button.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border:1px solid var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none;-ms-flex-order:4;order:4}.calcite-input-clear-button.sc-calcite-input:hover,.calcite-input-clear-button.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-clear-button.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input-clear-button.sc-calcite-input:disabled{opacity:var(--calcite-ui-opacity-disabled)}[dir=rtl].sc-calcite-input-h .calcite-input-clear-button.sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:none}.calcite-input-clear-button.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.calcite-input-clear-button.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-input-loading.sc-calcite-input{display:block;pointer-events:none;position:absolute;top:1px;left:1px;right:1px}.calcite-input-action-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input-prefix.sc-calcite-input,.calcite-input-suffix.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;word-break:break-word;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:500;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1}.calcite-input-prefix.sc-calcite-input{-ms-flex-order:2;order:2;border-right-width:0px}.calcite-input-suffix.sc-calcite-input{-ms-flex-order:5;order:5;border-left-width:0px}[dir=rtl].sc-calcite-input-h .calcite-input-prefix.sc-calcite-input{border-right-width:1px;border-left-width:0px}[dir=rtl].sc-calcite-input-h .calcite-input-suffix.sc-calcite-input{border-left-width:1px;border-right-width:0px}[readonly].sc-calcite-input-h .calcite-input-number-button-item.sc-calcite-input{pointer-events:none}[alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:left}[alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:right}[dir=rtl][alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[dir=rtl][alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:right}[dir=rtl][alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[dir=rtl][alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:left}.sc-calcite-input-h input[type=number].sc-calcite-input{-moz-appearance:textfield}.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-inner-spin-button,.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.calcite-input-number-button-wrapper.sc-calcite-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none;-ms-flex-order:6;order:6}[number-button-type=vertical].sc-calcite-input-h .calcite-input-wrapper.sc-calcite-input{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}[number-button-type=vertical].sc-calcite-input-h input.sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h textarea.sc-calcite-input{-ms-flex-order:2;order:2}[dir=rtl][number-button-type=horizontal].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[dir=rtl][number-button-type=horizontal].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:auto;align-self:auto}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{-ms-flex-order:5;order:5}[dir=rtl].sc-calcite-input-h .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down].sc-calcite-input{border-right:1px solid var(--calcite-ui-border-1);border-left:0px}[dir=rtl].sc-calcite-input-h .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up].sc-calcite-input{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}[number-button-type=vertical].sc-calcite-input-h .calcite-input-number-button-item[data-adjustment=down].sc-calcite-input{border-top:0}.calcite-input-number-button-item.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;max-height:50%;min-height:50%;padding:0 0.75rem;border:1px solid var(--calcite-ui-border-1);-webkit-transition:background-color 0.15s ease-in-out;transition:background-color 0.15s ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none}.calcite-input-number-button-item.sc-calcite-input calcite-icon.sc-calcite-input{pointer-events:none}.calcite-input-number-button-item.sc-calcite-input:hover,.calcite-input-number-button-item.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-number-button-item.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}[dir=rtl][number-button-type=vertical].sc-calcite-input-h .calcite-input-number-button-item.sc-calcite-input{border-right:none;border-left:1px solid var(--calcite-ui-border-1)}.calcite-input-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative}.sc-calcite-input-h input.sc-calcite-input::-webkit-calendar-picker-indicator{display:none}.sc-calcite-input-h input[type=date].sc-calcite-input::-webkit-input-placeholder{visibility:hidden !important}.sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding:0 0.375rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input-resize-icon-wrapper.sc-calcite-input{display:none}}.calcite-input-resize-icon-wrapper.sc-calcite-input{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:1;bottom:2px;right:2px;pointer-events:none;width:16px;height:16px}.calcite-input-resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:4px;right:4px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}[dir=rtl].sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{left:0;right:unset}[dir=rtl].sc-calcite-input-h .calcite-input-resize-icon-wrapper.sc-calcite-input{left:2px;right:unset}[dir=rtl].sc-calcite-input-h .calcite-input-resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:4px;right:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[type=file].sc-calcite-input-h input.sc-calcite-input,[type=file].sc-calcite-input-h textarea.sc-calcite-input{cursor:pointer;padding:1.5rem;border:1px dashed #d4d4d4;background-color:#f8f8f8;text-align:center}.no-bottom-border.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-bottom:none}[status=invalid].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-success)}[status=idle].sc-calcite-input-h .calcite-input-icon.sc-calcite-input{color:var(--calcite-ui-text-2)}";export{g as calcite_input};