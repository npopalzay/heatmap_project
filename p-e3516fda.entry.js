import{r as t,c as e,h as i,H as r,g as o}from"./p-f8f51224.js";import{g as s}from"./p-9051b8cf.js";import{g as a,f as n,b as c,a as l}from"./p-606b130f.js";import{C as d,u as p,c as m}from"./p-268ee6b8.js";const h=class{constructor(i){t(this,i),this.calciteDropdownSelect=e(this,"calciteDropdownSelect",7),this.calciteDropdownOpen=e(this,"calciteDropdownOpen",7),this.calciteDropdownClose=e(this,"calciteDropdownClose",7),this.active=!1,this.disableCloseOnSelect=!1,this.maxItems=0,this.placement="bottom-leading",this.scale="m",this.selectedItems=[],this.type="click",this.width="m",this.items=[],this.maxScrollerHeight=0,this.sorted=!1,this.setReferenceEl=t=>{this.referenceEl=t},this.setMenuEl=t=>{this.menuEl=t},this.openDropdown=t=>{const e=t.target;(this.triggers.includes(e)||this.triggers.some((t=>t.contains(e))))&&(t.preventDefault(),t.stopPropagation(),this.openCalciteDropdown())},this.keyDownHandler=t=>{const e=t.target,i=s(t.key);if(this.triggers.includes(e)||this.triggers.some((t=>t.contains(e))))if("BUTTON"!==e.nodeName&&"CALCITE-BUTTON"!==e.nodeName)switch(i){case" ":case"Enter":this.openCalciteDropdown();break;case"Escape":this.closeCalciteDropdown()}else this.active&&("Escape"===i||t.shiftKey&&"Tab"===i)&&this.closeCalciteDropdown()}}activeHandler(){this.reposition()}placementHandler(){this.reposition()}connectedCallback(){this.createPopper()}componentWillLoad(){this.updateSelectedItems()}componentDidLoad(){if(this.triggers=Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]")),!this.sorted){const t=this.items.sort(((t,e)=>t.position-e.position));this.maxScrollerHeight=this.getMaxScrollerHeight(t),this.items=t.reduce(((t,e)=>[...t,...e.items]),[]),this.sorted=!0}}disconnectedCallback(){this.destroyPopper()}render(){const{active:t,maxScrollerHeight:e}=this,o=a(this.el);return i(r,{dir:o,tabIndex:this.disabled?-1:null},i("div",{class:"calcite-dropdown-trigger-container",onClick:this.openDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},i("slot",{"aria-expanded":t.toString(),"aria-haspopup":"true",name:"dropdown-trigger"})),i("div",{"aria-hidden":(!t).toString(),class:"calcite-dropdown-wrapper",ref:this.setMenuEl},i("div",{class:{"calcite-dropdown-content":!0,[d.animation]:!0,[d.animationActive]:t},style:{maxHeight:e>0?`${e}px`:""}},i("slot",null))))}async reposition(){const{popper:t,menuEl:e,placement:i}=this,o=this.getModifiers();t?p({el:e,modifiers:o,placement:i,popper:t}):this.createPopper()}closeCalciteDropdownOnClick(t){const e=t.target;this.active&&"CALCITE-DROPDOWN-ITEM"!==e.nodeName&&"CALCITE-DROPDOWN-GROUP"!==e.nodeName&&this.closeCalciteDropdown()}closeCalciteDropdownOnEvent(){this.closeCalciteDropdown()}closeCalciteDropdownOnOpenEvent(t){t.target!==this.el&&(this.active=!1)}mouseEnterHandler(){"hover"===this.type&&this.openCalciteDropdown()}mouseLeaveHandler(){"hover"===this.type&&this.closeCalciteDropdown()}calciteDropdownItemKeyEvent(t){const{keyboardEvent:e}=t.detail,i=e.target,o="A"!==i.nodeName?i:i.parentNode,r=0===this.itemIndex(o),a=this.itemIndex(o)===this.items.length-1;switch(s(e.key)){case"Tab":a&&!e.shiftKey||r&&e.shiftKey?this.closeCalciteDropdown():e.shiftKey?this.focusPrevItem(o):this.focusNextItem(o);break;case"ArrowDown":this.focusNextItem(o);break;case"ArrowUp":this.focusPrevItem(o);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}t.stopPropagation()}handleItemSelect(t){this.updateSelectedItems(),t.stopPropagation(),this.calciteDropdownSelect.emit(),this.disableCloseOnSelect&&"none"!==t.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown()}registerCalciteDropdownGroup(t){const{detail:{items:e,position:i,titleEl:o,separatorEl:r}}=t;this.items.push({items:e,position:i,titleEl:o,separatorEl:r}),t.stopPropagation(),this.updateSelectedItems()}getModifiers(){return[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}}]}createPopper(){this.destroyPopper();const{menuEl:t,referenceEl:e,placement:i}=this,o=this.getModifiers();this.popper=m({el:t,modifiers:o,placement:i,referenceEl:e})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}updateSelectedItems(){const t=Array.from(this.el.querySelectorAll("calcite-dropdown-item"));this.selectedItems=t.filter((t=>t.active))}getMaxScrollerHeight(t){const{maxItems:e}=this;let i=0,o=0;return t.forEach((t=>{var r,s;e>0&&i<e&&(o+=(null===(r=null==t?void 0:t.titleEl)||void 0===r?void 0:r.offsetHeight)||0,o+=(null===(s=null==t?void 0:t.separatorEl)||void 0===s?void 0:s.offsetHeight)||0,t.items.forEach((t=>{i<e&&(o+=t.offsetHeight,i+=1)})))})),o}closeCalciteDropdown(){this.calciteDropdownClose.emit(),this.active=!1,n(this.triggers[0])}focusOnFirstActiveOrFirstItem(){this.getFocusableElement(this.items.find((t=>t.active))||this.items[0])}focusFirstItem(){this.getFocusableElement(this.items[0])}focusLastItem(){this.getFocusableElement(this.items[this.items.length-1])}focusNextItem(t){const e=this.itemIndex(t);this.getFocusableElement(this.items[e+1]||this.items[0])}focusPrevItem(t){const e=this.itemIndex(t);this.getFocusableElement(this.items[e-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}getFocusableElement(t){if(!t)return;const e=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;n(e)}openCalciteDropdown(){this.calciteDropdownOpen.emit(),this.active=!this.active,clearTimeout(this.dropdownFocusTimeout),this.active?this.dropdownFocusTimeout=window.setTimeout((()=>this.focusOnFirstActiveOrFirstItem()),50):this.calciteDropdownClose.emit()}get el(){return o(this)}static get watchers(){return{active:["activeHandler"],placement:["placementHandler"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1}:host([disabled]){pointer-events:none;opacity:0.5}:host .calcite-dropdown-wrapper{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.calcite-dropdown-wrapper .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.calcite-dropdown-wrapper[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.calcite-dropdown-wrapper[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.calcite-dropdown-wrapper[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.calcite-dropdown-wrapper[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.calcite-dropdown-wrapper[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .calcite-dropdown-wrapper{pointer-events:initial;visibility:visible}:host .calcite-dropdown-content{background-color:var(--calcite-ui-foreground-1);overflow:hidden;overflow-y:auto;width:auto;max-height:90vh;width:var(--calcite-dropdown-width)}.calcite-dropdown-trigger-container{position:relative;width:100%}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.25rem 0.75rem 0.25rem 1.5rem}:host([scale=m]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.5rem 0.75rem 0.5rem 1.5rem}:host([scale=l]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 0.75rem 0.5rem 1.5rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.25rem 1.5rem 0.25rem 0.75rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 1.5rem 0.5rem 0.75rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.5rem 1.5rem 0.5rem 0.75rem}";const f=class{constructor(i){t(this,i),this.calciteDropdownGroupRegister=e(this,"calciteDropdownGroupRegister",7),this.calciteDropdownItemChange=e(this,"calciteDropdownItemChange",7),this.selectionMode="single",this.setDropdownTitleRef=t=>{this.titleEl=t},this.setDropdownSeparatorRef=t=>{this.separatorEl=t},this.items=[],this.separatorEl=null,this.titleEl=null,this.sortItems=t=>t.sort(((t,e)=>t.position-e.position)).map((t=>t.item))}componentWillLoad(){this.groupPosition=this.getGroupPosition()}componentDidLoad(){this.items=this.sortItems(this.items),this.calciteDropdownGroupRegister.emit({items:this.items,position:this.groupPosition,group:this.el,titleEl:this.titleEl,separatorEl:this.separatorEl})}render(){const t=a(this.el),e=c(this.el,"scale","m"),o=this.groupTitle?i("span",{"aria-hidden":"true",class:"dropdown-title",ref:this.setDropdownTitleRef},this.groupTitle):null,s=this.groupPosition>0?i("div",{class:"dropdown-separator",ref:this.setDropdownSeparatorRef,role:"separator"}):null;return i(r,{role:"menu",scale:e,title:this.groupTitle},i("div",{dir:t},s,o,i("slot",null)))}registerCalciteDropdownItem(t){const e=t.target;"none"===this.selectionMode&&(e.active=!1),this.items.push({item:e,position:t.detail.position}),t.stopPropagation()}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}get el(){return o(this)}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .dropdown-title{padding:1rem}.dropdown-title{display:block;border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;overflow-wrap:break-word;cursor:default;margin-bottom:-1px}.dropdown-separator{display:block;height:1px;background-color:var(--calcite-ui-border-3)}";const w=class{constructor(i){t(this,i),this.calciteDropdownItemSelect=e(this,"calciteDropdownItemSelect",7),this.calciteDropdownItemKeyEvent=e(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownItemRegister=e(this,"calciteDropdownItemRegister",7),this.calciteDropdownCloseRequest=e(this,"calciteDropdownCloseRequest",7),this.active=!1}async setFocus(){this.el.focus()}connectedCallback(){this.selectionMode=c(this.el,"selection-mode","single"),this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.active=!1)}componentWillLoad(){this.itemPosition=this.getItemPosition(),this.calciteDropdownItemRegister.emit({position:this.itemPosition})}render(){const t=l(this.el,["icon-start","icon-end","active","has-text","is-link","dir","id","theme"]),e=a(this.el),o=c(this.el,"scale","m"),s="l"===o?"m":"s",n=i("calcite-icon",{class:"dropdown-item-icon-start",dir:e,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:s}),d=i("span",{class:"dropdown-item-content"},i("slot",null)),p=i("calcite-icon",{class:"dropdown-item-icon-end",dir:e,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:s}),m=this.iconStart&&this.iconEnd?[n,d,p]:this.iconStart?[n,i("slot",null)]:this.iconEnd?[d,p]:d,h=this.href?i("a",Object.assign({},t,{class:"dropdown-link",ref:t=>this.childLink=t}),m):m,f=this.href?null:"single"===this.selectionMode?"menuitemradio":"multi"===this.selectionMode?"menuitemcheckbox":"menuitem",w="none"!==this.selectionMode?this.active.toString():null;return i(r,{"aria-checked":w,dir:e,isLink:this.href,role:f,scale:o,"selection-mode":this.selectionMode,tabindex:"0"},"multi"===this.selectionMode?i("calcite-icon",{class:"dropdown-item-check-icon",icon:"check",scale:"s"}):null,h)}onClick(){this.emitRequestedItem()}keyDownHandler(t){switch(s(t.key)){case" ":this.emitRequestedItem(),this.href&&(t.preventDefault(),this.childLink.click());break;case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click();break;case"Escape":this.calciteDropdownCloseRequest.emit();break;case"Tab":case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteDropdownItemKeyEvent.emit({keyboardEvent:t})}t.preventDefault()}updateActiveItemOnChange(t){t.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem())}determineActiveItem(){switch(this.selectionMode){case"multi":this.el===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.el===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.active=!1);break;case"none":this.active=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}getItemPosition(){const t=this.el.closest("calcite-dropdown-group");return t?Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el):1}get el(){return o(this)}};w.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem;padding-right:0.5rem;padding-left:1.5rem;padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem;padding-right:0.75rem;padding-left:2rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-1);line-height:1.5rem;padding-right:1rem;padding-left:2.5rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([dir=rtl][scale=s]){padding-right:1.5rem;padding-left:0.5rem}:host([dir=rtl][scale=m]){padding-right:2rem;padding-left:0.75rem}:host([dir=rtl][scale=l]){padding-right:2.5rem;padding-left:1rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative}:host:before{content:"•";position:absolute;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.dropdown-item-content{margin-right:auto}:host([dir=rtl]) .dropdown-item-content{margin-left:auto;margin-right:0}:host,:host([islink]) a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus),:host([islink]) a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative}:host([islink]) a:before{content:"•";position:absolute;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}:host([scale=s]) .dropdown-link{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]) .dropdown-link{padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]) .dropdown-link{padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem}:host(:hover),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus){color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-brand)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-brand)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([scale=s]):before{left:0.5rem}:host([scale=m]):before{left:0.75rem}:host([scale=l]):before{left:1rem}:host([dir=rtl]):before{left:unset}:host([dir=rtl][scale=s]):before{right:0.5rem}:host([dir=rtl][scale=m]):before{right:0.75rem}:host([dir=rtl][scale=l]):before{right:1rem}:host .dropdown-item-check-icon{position:absolute;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(0.9);transform:scale(0.9)}:host([scale=s]) .dropdown-item-check-icon{left:0.25rem}:host([scale=m]) .dropdown-item-check-icon{left:0.5rem}:host([scale=l]) .dropdown-item-check-icon{left:0.75rem}:host([dir=rtl]) .dropdown-item-check-icon{left:unset;margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-check-icon{right:0.25rem}:host([dir=rtl][scale=m]) .dropdown-item-check-icon{right:0.5rem}:host([dir=rtl][scale=l]) .dropdown-item-check-icon{right:0.75rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-brand);opacity:1}:host([scale=s]) .dropdown-item-icon-start{margin-right:0.5rem}:host([scale=s]) .dropdown-item-icon-end{margin-left:0.5rem}:host([scale=m]) .dropdown-item-icon-start{margin-right:0.75rem}:host([scale=m]) .dropdown-item-icon-end{margin-left:0.75rem}:host([scale=l]) .dropdown-item-icon-start{margin-right:1rem}:host([scale=l]) .dropdown-item-icon-end{margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start{margin-right:0}:host([dir=rtl]) .dropdown-item-icon-end{margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-icon-start{margin-left:0.5rem}:host([dir=rtl][scale=s]) .dropdown-item-icon-end{margin-right:0.5rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-start{margin-left:0.75rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-end{margin-right:0.75rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-start{margin-left:1rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-end{margin-right:1rem}:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:0.75rem}';export{h as calcite_dropdown,f as calcite_dropdown_group,w as calcite_dropdown_item};