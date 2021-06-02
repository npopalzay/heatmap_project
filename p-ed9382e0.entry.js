import{r as t,h as e,H as i,g as r}from"./p-f8f51224.js";import{g as a}from"./p-a4e6e35b.js";import{d as s,u as o,c as n,C as p}from"./p-268ee6b8.js";import{d as l,e as c}from"./p-606b130f.js";import{g as h}from"./p-9051b8cf.js";const m="data-calcite-tooltip-reference",f=class{constructor(e){t(this,e),this.offsetDistance=s,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid=`calcite-tooltip-${a()}`,this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{_referenceElement:t}=this;if(!t)return;const e=this.getId();t.setAttribute(m,e),t.setAttribute("aria-describedby",e)},this.removeReferences=()=>{const{_referenceElement:t}=this;t&&(t.removeAttribute(m),t.removeAttribute("aria-describedby"))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.addReferences(),this.createPopper()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:t,el:e,placement:r}=this,i=this.getModifiers();t?o({el:e,modifiers:i,placement:r,popper:t}):this.createPopper()}getReferenceElement(){const{referenceElement:t,el:e}=this,o=l(e);return("string"==typeof t?c(o,t):t)||null}getModifiers(){const{arrowEl:t,offsetDistance:e,offsetSkidding:o}=this;return[{name:"arrow",enabled:!0,options:{element:t}},{name:"offset",enabled:!0,options:{offset:[o,e]}}]}createPopper(){this.destroyPopper();const{el:t,placement:e,_referenceElement:o}=this,r=this.getModifiers();this.popper=n({el:t,modifiers:r,placement:e,referenceEl:o})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}render(){const{_referenceElement:t,label:o,open:r}=this,s=t&&r,a=!s;return e(i,{"aria-hidden":a.toString(),"aria-label":o,"calcite-hydrated-hidden":a,id:this.getId(),role:"tooltip"},e("div",{class:{[p.animation]:!0,[p.animationActive]:s}},e("div",{class:"arrow",ref:t=>this.arrowEl=t}),e("div",{class:"container"},e("slot",null))))}get el(){return r(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};f.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;overflow:hidden;font-size:var(--calcite-font-size--2);line-height:1.375;border-radius:0.25rem;max-width:20rem;max-height:20rem}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';const d=class{constructor(e){t(this,e),this.hoverTimeouts=new WeakMap,this.selector=`[${m}]`,this.queryTooltip=t=>{var e;const{selector:o,el:r}=this,i=null===(e=t.closest(o))||void 0===e?void 0:e.getAttribute(m);return c(l(r),i)},this.clearHoverTimeout=t=>{const{hoverTimeouts:e}=this;e.has(t)&&window.clearTimeout(e.get(t))},this.closeExistingTooltip=()=>{const{tooltipEl:t}=this;t&&this.toggleTooltip(t,!1)},this.focusTooltip=({tooltip:t,value:e})=>{this.closeExistingTooltip(),e&&this.clearHoverTimeout(t),this.toggleTooltip(t,e)},this.toggleTooltip=(t,e)=>{t.open=e,e&&(this.tooltipEl=t)},this.hoverToggle=({tooltip:t,value:e})=>{const{hoverTimeouts:o}=this;o.delete(t),e&&this.closeExistingTooltip(),this.toggleTooltip(t,e)},this.hoverTooltip=({tooltip:t,value:e})=>{this.clearHoverTimeout(t);const{hoverTimeouts:o}=this,r=window.setTimeout((()=>this.hoverToggle({tooltip:t,value:e})),500);o.set(t,r)},this.activeTooltipHover=t=>{const{tooltipEl:e,hoverTimeouts:o}=this;e&&o.has(e)&&(t.composedPath().includes(e)?this.clearHoverTimeout(e):this.hoverTooltip({tooltip:e,value:!1}))},this.hoverEvent=(t,e)=>{const o=this.queryTooltip(t.target);this.activeTooltipHover(t),o&&this.hoverTooltip({tooltip:o,value:e})},this.focusEvent=(t,e)=>{const o=this.queryTooltip(t.target);o&&this.focusTooltip({tooltip:o,value:e})}}render(){return e(i,null)}keyUpHandler(t){if("Escape"===h(t.key)){const{tooltipEl:t}=this;t&&(this.clearHoverTimeout(t),this.toggleTooltip(t,!1))}}mouseEnterShow(t){this.hoverEvent(t,!0)}mouseLeaveHide(t){this.hoverEvent(t,!1)}focusShow(t){this.focusEvent(t,!0)}blurHide(t){this.focusEvent(t,!1)}get el(){return r(this)}};export{f as calcite_tooltip,d as calcite_tooltip_manager};