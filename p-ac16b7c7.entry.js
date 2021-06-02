import{r as t,c as i,h as s,H as e,g as a}from"./p-f8f51224.js";import{g as r}from"./p-a4e6e35b.js";import{f as n,g as o}from"./p-606b130f.js";import{h as c}from"./p-18a62b5e.js";const h=class{constructor(e){t(this,e),this.calciteRadioButtonChange=i(this,"calciteRadioButtonChange",7),this.calciteRadioButtonCheckedChange=i(this,"calciteRadioButtonCheckedChange",7),this.calciteRadioButtonFocusedChange=i(this,"calciteRadioButtonFocusedChange",7),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.setInputEl=t=>{this.inputEl=t},this.formResetHandler=()=>{var t;this.checked=this.initialChecked,this.initialChecked&&(null===(t=this.inputEl)||void 0===t||t.setAttribute("checked",""))},this.hideInputEl=()=>{this.inputEl.style.cssText=c},this.onInputBlur=()=>{this.focused=!1,this.calciteRadioButtonFocusedChange.emit()},this.onInputFocus=()=>{this.focused=!0,this.calciteRadioButtonFocusedChange.emit()}}checkedChanged(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.inputEl&&(this.inputEl.checked=t),this.calciteRadioButtonCheckedChange.emit(t)}disabledChanged(t){this.inputEl.disabled=t}focusedChanged(t){this.inputEl&&(t&&!this.el.hasAttribute("hidden")?this.inputEl.focus():this.inputEl.blur())}hiddenChanged(t){this.inputEl.hidden=t}nameChanged(t){if(this.name===t)return;this.inputEl&&(this.inputEl.name=t),this.checkLastRadioButton();const e=this.rootNode.querySelector(`input[name="${this.name}"]:checked`);(null==e?void 0:e.value)||this.uncheckAllRadioButtonsInGroup()}requiredChanged(t){this.inputEl.required=t}async setFocus(){n(this.inputEl)}checkLastRadioButton(){const t=Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).filter((t=>t.checked));if((null==t?void 0:t.length)>1){const e=t[t.length-1];t.filter((t=>t!==e)).forEach((t=>{t.checked=!1,t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name&&t.guid!==this.guid)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}check(t){!this.el.closest("label")||t.target!==this.el&&t.target!==this.radio||t.preventDefault(),this.disabled||this.hidden||(this.uncheckOtherRadioButtonsInGroup(),this.checked=!0,this.focused=!0,this.calciteRadioButtonChange.emit())}mouseenter(){this.hovered=!0}mouseleave(){this.hovered=!1}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${r()}`,this.initialChecked=this.checked,this.name&&this.checkLastRadioButton();const t=this.el.closest("form");t&&t.addEventListener("reset",this.formResetHandler)}componentDidLoad(){this.hideInputEl(),this.focused&&this.inputEl.focus()}disconnectedCallback(){const t=this.el.closest("form");t&&t.removeEventListener("reset",this.formResetHandler)}renderLabel(){return this.el.textContent?s("calcite-label",{dir:o(this.el),"disable-spacing":!0,disabled:this.disabled,for:`${this.guid}-input`,layout:"inline",scale:this.scale},s("slot",null)):s("slot",null)}render(){return s(e,{labeled:!!this.el.textContent},s("input",{"aria-label":this.value||this.guid,checked:this.checked,disabled:this.disabled,hidden:this.hidden,id:`${this.guid}-input`,name:this.name,onBlur:this.onInputBlur,onFocus:this.onInputFocus,ref:this.setInputEl,required:this.required,type:"radio",value:this.value}),s("calcite-radio",{checked:this.checked,disabled:this.disabled,focused:this.focused,hidden:this.hidden,hovered:this.hovered,ref:t=>this.radio=t,scale:this.scale,theme:this.theme}),this.renderLabel())}get el(){return a(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],focused:["focusedChanged"],hidden:["hiddenChanged"],name:["nameChanged"],required:["requiredChanged"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-radio-button:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-radio-button-h{display:none}.sc-calcite-radio-button-h{cursor:pointer;display:inline-block}[labeled].sc-calcite-radio-button-h{margin-bottom:0;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;grid-gap:0.5rem;gap:0.5rem}[disabled].sc-calcite-radio-button-h{cursor:pointer}.sc-calcite-radio-button-h[disabled]>.sc-calcite-radio-button-s>calcite-label{cursor:default}[scale=s][labeled].sc-calcite-radio-button-h{margin-bottom:0.5rem;margin-right:0.75rem}@supports not (display: grid){[scale=s][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:0.5rem}}[scale=m][labeled].sc-calcite-radio-button-h{margin-bottom:0.5rem;margin-right:1rem}@supports not (display: grid){[scale=m][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:0.5rem}}[scale=l][labeled].sc-calcite-radio-button-h{grid-gap:0.75rem;gap:0.75rem;margin-bottom:0.5rem;margin-right:1.25rem}@supports not (display: grid){[scale=l][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:0.75rem}}[hidden].sc-calcite-radio-button-h{display:none}";export{h as calcite_radio_button};