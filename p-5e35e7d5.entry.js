import{r as t,c as e,h as a,H as s,g as i}from"./p-f8f51224.js";import{I as o}from"./p-39515aa9.js";import{g as r}from"./p-a4e6e35b.js";import{C as n,S as l}from"./p-af4f2d93.js";import{c}from"./p-606b130f.js";const d=class{constructor(a){t(this,a),this.calciteListItemRemove=e(this,"calciteListItemRemove",7),this.disabled=!1,this.disableDeselect=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid=`calcite-value-list-item-${r()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected}}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){var t;null===(t=this.pickListItem)||void 0===t||t.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return c(t,"actions-end")?a("slot",{name:"actions-end",slot:l.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return c(t,"actions-start")?a("slot",{name:"actions-start",slot:l.actionsStart}):null}renderHandle(){const{icon:t}=this;if(t===o.grip)return a("span",{"aria-pressed":this.handleActivated.toString(),class:{[n.handle]:!0,[n.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},a("calcite-icon",{icon:"drag",scale:"s"}))}render(){return a(s,{"data-id":this.guid},this.renderHandle(),a("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return i(this)}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{margin-bottom:1px;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);-webkit-transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}calcite-pick-list-item{-webkit-box-shadow:none;box-shadow:none;-ms-flex-positive:1;flex-grow:1;position:relative;margin:0}:host([active]),:host([selected]){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);cursor:move;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}";export{d as calcite_value_list_item};