var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function a(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((i=i.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,i,r,l,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return c([e,t])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&l[0]?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,i=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){a.label=l[1];break}if(6===l[0]&&a.label<r[1]){a.label=r[1],r=l;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(l);break}r[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],i=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};System.register(["./p-de3145a6.system.js","./p-482ec054.system.js","./p-53caa311.system.js","./p-6d15c15c.system.js","./p-94d2ed32.system.js"],(function(e){"use strict";var t,n,i,r,l,a,s,c;return{setters:[function(e){t=e.f,n=e.c,i=e.g},function(e){r=e.g},function(e){l=e.d},function(e){a=e.h,s=e.H},function(e){c=e.C}],execute:function(){e({a:function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},b:function(e){var t=this.selectedValues,n=e.detail,i=n.item,r=n.value,l=n.selected,a=n.shiftPressed;l?(this.multiple||this.deselectSiblingItems(i),this.multiple&&a&&this.selectSiblings(i),t.set(r,i)):(t.delete(r),this.multiple&&a&&this.selectSiblings(i,!0)),this.multiple||h(i,l),this.lastSelectedItem=i,this.emitCalciteListChange()},c:function(){this.observer.disconnect()},d:function(e){var t=this;this.items.forEach((function(n){n.value!==e.value&&(n.toggleSelected(!1),t.selectedValues.has(n.value)&&t.selectedValues.delete(n.value))}))},e:function(e){e.stopPropagation();var t=e.detail.oldValue,n=this.selectedValues;if(n.has(t)){var i=n.get(t);n.delete(t),n.set(e.detail.newValue,i)}},f:function(e){var t=this;this.items=Array.from(this.el.querySelectorAll(e));var n=!1,i=this.items;i.forEach((function(e){e.icon=t.getIconType(),t.multiple||(e.disableDeselect=!0,h(e,!1)),e.selected&&(n=!0,h(e,!0),t.selectedValues.set(e.value,e))}));var r=i[0];!n&&r&&h(r,!0)},g:function(){return this.items.map((function(e){return{label:e.label,description:e.description,metadata:e.metadata,value:e.value}}))},h:function(e){var t=e.detail.map((function(e){return e.value})),i=!1;u||(u=new Set);var r=this.items.filter((function(e){var n=e.parentElement;n.matches("calcite-pick-list-group")&&u.add(n);var r=t.includes(e.value);return e.hidden=!r,i||(i=r&&e.selected),r}));u.forEach((function(e){var t=r.some((function(t){return e.contains(t)}));if(e.hidden=!t,t){var i=n(e,"parent-item");i&&(i.hidden=!1,r.includes(i)&&Array.from(e.children).forEach((function(e){return e.hidden=!1})))}})),u.clear(),r.length>0&&!i&&!this.multiple&&h(r[0],!0)},i:function(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=l(d.bind(this),0)},j:function(e){return __awaiter(this,void 0,void 0,(function(){var n,i,r;return __generator(this,(function(l){switch(l.label){case 0:return this.filterEnabled&&"filter"===e?[4,t(this.filterEl)]:[3,2];case 1:return l.sent(),[2];case 2:return i=(n=this).multiple,0===(r=n.items).length?[2]:i?[2,r[0].setFocus()]:[2,(r.find((function(e){return e.selected}))||r[0]).setFocus()]}}))}))},k:function(e){var n=e.key,i=e.target;if(f(n)){var l=this.items,a=this.multiple,s=l.length,c=l.indexOf(i);if(s&&-1!==c){e.preventDefault();var u=l[r(c+("ArrowUp"===n?-1:1),s)];h(u,!0),t(u),a||(u.selected=!0)}}},m:function(){this.setUpItems(),this.setUpFilter()},r:function(e){if(!e.defaultPrevented){var t=e.target,n=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((function(e){return n.delete(e.value)}))):(t.remove(),n.delete(t.value)),this.emitCalciteListChange()}},s:function(e,t){var n=this;if(void 0===t&&(t=!1),this.lastSelectedItem){var i=this.items,r=i.findIndex((function(e){return e.value===n.lastSelectedItem.value})),l=i.findIndex((function(t){return t.value===e.value}));i.slice(Math.min(r,l),Math.max(r,l)).forEach((function(e){e.toggleSelected(!t),t?n.selectedValues.delete(e.value):n.selectedValues.set(e.value,e)}))}}});var u,o=["ArrowUp","ArrowDown"];function f(e){return!!o.find((function(t){return t===e}))}function d(){this.calciteListChange.emit(this.selectedValues)}function h(e,t){t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1")}e("L",(function(e){var t,n=e.props,r=n.disabled,l=n.loading,u=n.filterEnabled,o=n.dataForFilter,f=n.handleFilter,d=n.filterPlaceholder,h=n.el,m=n.setFilterEl,p=n.theme,v=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["props"]),b=a("slot",null);return a(s,Object.assign({"aria-busy":l.toString(),"aria-disabled":r.toString(),role:"menu"},v),a("section",null,a("header",{class:(t={},t[c.sticky]=!0,t)},u?a("calcite-filter",{"aria-label":d,data:o,dir:i(h),disabled:l||r,onCalciteFilterChange:f,placeholder:d,ref:m}):null,a("slot",{name:"menu-actions"})),l||r?a("calcite-scrim",{loading:l,theme:p}):null,b))}))}}}));