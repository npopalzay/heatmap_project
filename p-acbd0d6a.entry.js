import{r as t,c as e,f as i,h as o,H as a,g as n}from"./p-f8f51224.js";import{C as r}from"./p-28355066.js";import{g as s,c as l,f as c}from"./p-606b130f.js";import{g as d}from"./p-0ae16e31.js";import{g as p}from"./p-a4e6e35b.js";const h=class{constructor(o){t(this,o),this.calciteActionClick=e(this,"calciteActionClick",7),this.appearance="solid",this.active=!1,this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading="Loading",this.loading=!1,this.scale="m",this.textEnabled=!1,this.observer=new MutationObserver((()=>i(this))),this.calciteActionClickHandler=()=>{this.disabled||this.calciteActionClick.emit()}}connectedCallback(){this.observer.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect()}async setFocus(){this.buttonEl.focus()}renderTextContainer(){const{text:t,textEnabled:e}=this;return t?o("div",{class:{"text-container":!0,"text-container--visible":e},key:"text-container"},t):null}renderIconContainer(){var t;const{loading:e,icon:i,scale:n,el:a,intlLoading:r}=this,s="l"===n?"m":"s",l=e?o("calcite-loader",{active:!0,inline:!0,label:r,scale:s}):null,c=i?o("calcite-icon",{icon:i,scale:s}):null,d=l||c,p=d||(null===(t=a.children)||void 0===t?void 0:t.length),u=o("div",{class:{"slot-container":!0,"slot-container--hidden":e}},o("slot",null));return p?o("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},d,u):null}render(){const{compact:t,disabled:e,loading:i,el:n,textEnabled:l,label:c,text:d}=this,p=c||d,u="rtl"===s(n),m={button:!0,"button--text-visible":l,"button--compact":t,[r.rtl]:u};return o(a,{onClick:this.calciteActionClickHandler},o("button",{"aria-busy":i.toString(),"aria-disabled":e.toString(),"aria-label":p,class:m,disabled:e,ref:t=>this.buttonEl=t},this.renderIconContainer(),this.renderTextContainer()))}get el(){return n(this)}};function u({parent:t,expanded:e}){Array.from(t.querySelectorAll("calcite-action")).filter((t=>"menu-actions"!==t.slot)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group").forEach((t=>t.expanded=e))}h.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{background-color:var(--calcite-ui-foreground-1);border-style:none;cursor:pointer;fill:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin:0;position:relative;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-3);font-family:inherit;width:auto;text-align:unset}.button:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none;min-width:1rem;min-height:1rem}.button .text-container{line-height:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;width:0;opacity:0;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-property:width;transition-property:width}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:0.5rem}:host([scale=m]) .button{padding:1rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([alignment=center]) .button{-ms-flex-pack:center;justify-content:center;width:100%}:host([alignment=end]) .button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment=end]) .button .text-container--visible{-ms-flex:0 1 auto;flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0;margin-right:0.5rem}.button--text-visible .text-container--visible{margin:0;margin-right:0.5rem}.button--text-visible.calcite--rtl .icon-container{margin:0;margin-left:0.5rem}.button--text-visible.calcite--rtl .text-container--visible{margin:0;margin-left:0.5rem}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear]) .button{background-color:transparent;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:0.5}:host([loading]) calcite-loader[inline]{margin-right:0;color:var(--calcite-ui-text-3)}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:0.5;background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:0.5;background-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:1rem}:host([indicator]) .button::after{content:"";position:absolute;border-width:2px;background-color:var(--calcite-ui-brand);border-radius:9999px;height:0.5rem;width:0.5rem;z-index:10;border-color:var(--calcite-ui-foreground-1);bottom:0.5rem;right:0.5rem}:host([indicator][scale=s]) .button::after{bottom:0.25rem;right:0.25rem}:host([indicator][scale=l]) .button::after{bottom:0.5rem;right:0.5rem}:host([indicator]) .calcite--rtl::after{right:auto;left:0.25rem}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:0.75rem;padding-left:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:auto;right:0.5rem}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:auto;left:0.5rem}';const m=({expanded:t,intlExpand:e,intlCollapse:i,toggle:n,el:a,position:r,tooltip:l,ref:c})=>{const d="rtl"===s(a),p=t?i:e,u=["chevrons-left","chevrons-right"];d&&u.reverse();const m="end"===function(t,e){var o;return t||(null===(o=e.closest("calcite-shell-panel"))||void 0===o?void 0:o.position)||"start"}(r,a),h=o("calcite-action",{dir:d?"rtl":"ltr",icon:t?m?u[1]:u[0]:m?u[0]:u[1],onClick:n,ref:e=>(({tooltip:t,referenceElement:e,expanded:o,ref:i})=>(t&&(t.referenceElement=!o&&e),i&&i(e),e))({tooltip:l,referenceElement:e,expanded:t,ref:c}),text:p,textEnabled:t});return l?o("calcite-tooltip-manager",null,h):h},b=({actionCount:t,height:e,groupCount:o})=>Math.max(t-(({height:t,groupCount:e})=>Math.floor((t-18*e)/50))({height:e,groupCount:o}),0),f=class{constructor(o){t(this,o),this.calciteActionBarToggle=e(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.mutationObserver=new MutationObserver((()=>{const{el:t,expanded:e}=this;u({parent:t,expanded:e}),this.resize(t.clientHeight)})),this.resizeObserver=new ResizeObserver((t=>this.resizeHandlerEntries(t))),this.actionMenuOpenChangeHandler=t=>{if(t.detail){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{e.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)},this.resizeHandler=t=>{const{height:e}=t.contentRect;this.resize(e)},this.resize=t=>{const{el:e,expanded:o,expandDisabled:n,lastActionCount:a,lastGroupCount:r,lastResizeHeight:s,overflowActionsDisabled:c}=this;if("number"!=typeof t||c)return;const d=e.querySelectorAll("calcite-action"),p=n?d.length:d.length+1,u=Array.from(e.querySelectorAll("calcite-action-group")),m=l(e,"bottom-actions")||!n?u.length+1:u.length;s===t&&a===p&&r===m||(this.lastActionCount=p,this.lastGroupCount=m,this.lastResizeHeight=t,(({actionGroups:t,expanded:e,overflowCount:o})=>{let n=o;t.reverse().forEach((t=>{let o=0;const a=Array.from(t.querySelectorAll("calcite-action")).reverse();a.forEach((t=>{t.removeAttribute("slot"),t.textEnabled=e})),n>0&&a.some((t=>(a.filter((t=>!t.slot)).length>1&&a.length>2&&(t.textEnabled=!0,t.setAttribute("slot","menu-actions"),o++,o>1&&n--),n<1))),i(t)}))})({actionGroups:u,expanded:o,overflowCount:b({actionCount:p,height:t,groupCount:m})}))},this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||u({parent:this.el,expanded:this.expanded}),this.resize(this.el.clientHeight)}expandedHandler(t){this.expandDisabled||u({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()}overflowDisabledHandler(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)}componentWillLoad(){const{el:t,expandDisabled:e,expanded:o}=this;e||u({parent:t,expanded:o}),this.mutationObserver.observe(t,{childList:!0}),this.overflowActionsDisabled||this.resizeObserver.observe(t)}componentDidLoad(){this.resize(this.el.clientHeight)}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}async setFocus(t){"expand-toggle"!==t?this.el.focus():await c(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,intlExpand:i,intlCollapse:n,el:a,position:r,toggleExpand:s}=this,c=l(a,"expand-tooltip"),d=e?null:o(m,{el:a,expanded:t,intlCollapse:n||"Collapse",intlExpand:i||"Expand",position:r,ref:this.setExpandToggleRef,toggle:s,tooltip:c});return l(a,"bottom-actions")||d?o("calcite-action-group",{class:"action-group--bottom"},o("slot",{name:"bottom-actions"}),o("slot",{name:"expand-tooltip"}),d):null}render(){return o(a,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},o("slot",null),this.renderBottomActionGroup())}get el(){return n(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"]}}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom-width:0}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";const x=class{constructor(e){t(this,e),this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.setMenuOpen=t=>{this.menuOpen=!!t.detail}}expandedHandler(){this.menuOpen=!1}renderTooltip(){const{el:t}=this;return l(t,"menu-tooltip")?o("slot",{name:"menu-tooltip",slot:"tooltip"}):null}renderMenu(){const{el:t,expanded:e,intlMore:i,menuOpen:n}=this;return l(t,"menu-actions")?o("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],label:i||"More",onCalciteActionMenuOpenChange:this.setMenuOpen,open:n,placement:"leading-start"},o("slot",{name:"menu-actions"}),this.renderTooltip()):null}render(){return o(a,null,o("slot",null),this.renderMenu())}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"]}}};x.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0;padding-right:0;--columns:3}:host([columns="1"]){--columns:1}:host([columns="2"]){--columns:2}:host([columns="3"]){--columns:3}:host([columns="4"]){--columns:4}:host([columns="5"]){--columns:5}:host([columns="6"]){--columns:6}:host(:first-child){padding-top:0}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row}:host([layout=grid]){background-color:var(--calcite-ui-background);display:grid;grid-gap:1px;gap:1px;place-content:stretch;padding:1px;grid-template-columns:repeat(var(--columns), auto)}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}';const g=["ArrowUp","ArrowDown"],y=["ArrowUp","ArrowDown","End","Home"],w=class{constructor(o){t(this,o),this.calciteActionMenuOpenChange=e(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.placement="auto",this.scale="m",this.actionElements=[],this.mutationObserver=new MutationObserver((()=>this.getActions())),this.guid=`calcite-action-menu-${p()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.activeMenuItemIndex=-1,this.menuButtonClick=()=>{this.toggleOpen()},this.setTooltipReferenceElement=()=>{const{el:t,expanded:e,menuButtonEl:o}=this,i=l(t,"tooltip"),n="SLOT"===(null==i?void 0:i.tagName)?i.assignedElements()[0]:i;"CALCITE-TOOLTIP"===(null==n?void 0:n.tagName)&&(n.referenceElement=!e&&o)},this.setMenuButtonRef=t=>{this.menuButtonEl=t,this.setTooltipReferenceElement(),i(this)},this.updateAction=(t,e)=>{const{guid:o,activeMenuItemIndex:i}=this,n=`${o}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=n),t.active=e===i},this.updateActions=t=>{null==t||t.forEach(this.updateAction)},this.getActions=()=>{const{el:t}=this,e=this.getAssignedElements().filter((t=>"CALCITE-ACTION"===t.tagName)),o=e.length?e:Array.from(t.querySelectorAll("calcite-action"));this.updateActions(o),this.actionElements=o},this.menuButtonKeyUp=t=>{const{key:e}=t,{actionElements:o}=this;this.isValidKey(e,g)&&(t.preventDefault(),o.length&&(this.toggleOpen(!0),this.handleActionNavigation(e,o)))},this.menuButtonKeyDown=t=>{const{key:e}=t;this.isValidKey(e,g)&&t.preventDefault()},this.menuActionsContainerKeyDown=t=>{const{key:e}=t,{actionElements:o,activeMenuItemIndex:i}=this;if("Tab"!==e)if(" "!==e&&"Enter"!==e)this.isValidKey(e,y)&&t.preventDefault();else{t.preventDefault();const e=o[i];e?e.click():this.toggleOpen(!1)}else this.open=!1},this.menuActionsContainerKeyUp=t=>{const{key:e}=t,{actionElements:o}=this;"Escape"!==e?this.isValidKey(e,y)&&(t.preventDefault(),o.length&&this.handleActionNavigation(e,o)):this.toggleOpen(!1)},this.handleActionNavigation=(t,e)=>{const o=this.activeMenuItemIndex;"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=e.length-1),"ArrowUp"===t&&(this.activeMenuItemIndex=d(Math.max(o-1,-1),e.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=d(o+1,e.length))},this.toggleOpen=(t=!this.open)=>{this.open=t,clearTimeout(this.menuFocusTimeout),t?this.menuFocusTimeout=window.setTimeout((()=>this.setFocus()),50):this.setFocus()}}connectedCallback(){this.mutationObserver.observe(this.el,{childList:!0,subtree:!0}),this.getActions()}disconnectedCallback(){this.mutationObserver.disconnect()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.calciteActionMenuOpenChange.emit(t)}closeCalciteActionMenuOnClick(t){t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){c(this.open?this.menuEl:this.menuButtonEl)}renderMenuButton(){const{el:t,menuButtonId:e,menuId:i,open:n,label:a,expanded:r,scale:s}=this,c=o("calcite-action",{active:n,"aria-controls":i,"aria-expanded":n.toString(),"aria-haspopup":"true",class:"menu-button",icon:"ellipsis",id:e,label:a,onClick:this.menuButtonClick,onKeyDown:this.menuButtonKeyDown,onKeyUp:this.menuButtonKeyUp,ref:this.setMenuButtonRef,scale:s,text:a,textEnabled:r});return l(t,"tooltip")?o("calcite-tooltip-manager",null,c):c}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:i,menuButtonId:n,menuId:a,menuButtonEl:r,label:s,placement:l}=this,c=t[e];return o("calcite-popover",{label:s,open:i,placement:l,referenceElement:r},o("div",{"aria-activedescendant":(null==c?void 0:c.id)||null,"aria-labelledby":n,class:"menu",id:a,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:t=>this.menuEl=t,role:"menu",tabIndex:-1},o("slot",null)))}render(){return o(a,null,this.renderMenuButton(),this.renderMenuItems(),o("slot",{name:"tooltip"}))}getAssignedElements(){return Array.from(this.el.querySelectorAll("slot")).map((t=>t.assignedElements({flatten:!0}))).reduce(((t,e)=>t.concat(e)),[])}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}";const k=class{constructor(o){t(this,o),this.calciteActionPadToggle=e(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.actionMenuOpenChangeHandler=t=>{if(t.detail){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{e.includes(t)||(t.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||u({parent:this.el,expanded:this.expanded})}expandedHandler(t){this.expandDisabled||u({parent:this.el,expanded:t}),this.calciteActionPadToggle.emit()}componentWillLoad(){const{el:t,expandDisabled:e,expanded:o}=this;e||u({parent:t,expanded:o})}async setFocus(t){"expand-toggle"!==t?this.el.focus():await c(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,intlExpand:i,intlCollapse:n,el:a,position:r,toggleExpand:s}=this,c=l(a,"expand-tooltip"),d=e?null:o(m,{el:a,expanded:t,intlCollapse:n||"Collapse",intlExpand:i||"Expand",position:r,ref:this.setExpandToggleRef,toggle:s,tooltip:c});return d?o("calcite-action-group",{class:"action-group--bottom"},o("slot",{name:"expand-tooltip"}),d):null}render(){const t="rtl"===s(this.el);return o(a,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},o("div",{class:{container:!0,[r.rtl]:t}},o("slot",null),this.renderBottomActionGroup()))}get el(){return n(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}}};k.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0;border-right-width:1px;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0}";export{h as calcite_action,f as calcite_action_bar,x as calcite_action_group,w as calcite_action_menu,k as calcite_action_pad};