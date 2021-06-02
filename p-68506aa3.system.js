System.register(["./p-de3145a6.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.g}],execute:function(){e({c:function(e){var t=e.referenceEl,n=e.el,r=e.placement,o=e.modifiers;return t?le(t,n,{placement:de(n,r),modifiers:o}):null},u:function(e){var t=e.el,n=e.modifiers,r=e.placement,o=e.popper,i=de(t,r);o.setOptions({modifiers:n,placement:i})}});var n="top",r="bottom",o="right",i="left",a="auto",s=[n,r,o,i],f="start",c="end",p="viewport",u="popper",l=s.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+c])}),[]),d=[].concat(s,[a]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+c])}),[]),m=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function h(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function g(e){return e instanceof v(e).Element||e instanceof Element}function y(e){return e instanceof v(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!=typeof ShadowRoot&&(e instanceof v(e).ShadowRoot||e instanceof ShadowRoot)}var w={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];y(o)&&h(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});y(r)&&h(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function x(e){return e.split("-")[0]}function O(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function j(e){var t=O(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function D(e){return v(e).getComputedStyle(e)}function M(e){return["table","td","th"].indexOf(h(e))>=0}function L(e){return((g(e)?e.ownerDocument:e.document)||window.document).documentElement}function k(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||L(e)}function P(e){return y(e)&&"fixed"!==D(e).position?e.offsetParent:null}function A(e){for(var t=v(e),n=P(e);n&&M(n)&&"static"===D(n).position;)n=P(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===D(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&y(e)&&"fixed"===D(e).position)return null;for(var n=k(e);y(n)&&["html","body"].indexOf(h(n))<0;){var r=D(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function W(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var B=Math.max,H=Math.min,R=Math.round;function T(e,t,n){return B(e,H(t,n))}function S(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var C=function(e,t){return S("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:q(e,s))},N={top:"auto",right:"auto",bottom:"auto",left:"auto"};function V(e){var t,a=e.popper,s=e.popperRect,f=e.placement,c=e.offsets,p=e.position,u=e.gpuAcceleration,l=e.adaptive,d=e.roundOffsets,m=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:R(R(t*r)/r)||0,y:R(R(n*r)/r)||0}}(c):"function"==typeof d?d(c):c,h=m.x,g=void 0===h?0:h,y=m.y,b=void 0===y?0:y,w=c.hasOwnProperty("x"),x=c.hasOwnProperty("y"),O=i,j=n,E=window;if(l){var M=A(a),k="clientHeight",P="clientWidth";M===v(a)&&"static"!==D(M=L(a)).position&&(k="scrollHeight",P="scrollWidth"),M=M,f===n&&(j=r,b-=M[k]-s.height,b*=u?1:-1),f===i&&(O=o,g-=M[P]-s.width,g*=u?1:-1)}var W,B=Object.assign({position:p},l&&N);return u?Object.assign({},B,((W={})[j]=x?"0":"",W[O]=w?"0":"",W.transform=(E.devicePixelRatio||1)<2?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",W)):Object.assign({},B,((t={})[j]=x?b+"px":"",t[O]=w?g+"px":"",t.transform="",t))}var I={passive:!0},U={left:"right",right:"left",bottom:"top",top:"bottom"};function z(e){return e.replace(/left|right|bottom|top/g,(function(e){return U[e]}))}var _={start:"end",end:"start"};function F(e){return e.replace(/start|end/g,(function(e){return _[e]}))}function X(e){var t=v(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(e){return O(L(e)).left+X(e).scrollLeft}function G(e){var t=D(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function J(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:y(e)&&G(e)?e:J(k(e))}function K(e,t){var n;void 0===t&&(t=[]);var r=J(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=v(r),a=o?[i].concat(i.visualViewport||[],G(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(K(k(a)))}function Q(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Z(e,t){return t===p?Q(function(e){var t=v(e),n=L(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+Y(e),y:s}}(e)):y(t)?function(e){var t=O(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Q(function(e){var t,n=L(e),r=X(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=B(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=B(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Y(e),f=-r.scrollTop;return"rtl"===D(o||n).direction&&(s+=B(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(L(e)))}function $(e,t,n){var r="clippingParents"===t?function(e){var t=K(k(e)),n=["absolute","fixed"].indexOf(D(e).position)>=0&&y(e)?A(e):e;return g(n)?t.filter((function(e){return g(e)&&E(e,n)&&"body"!==h(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Z(e,n);return t.top=B(r.top,t.top),t.right=H(r.right,t.right),t.bottom=H(r.bottom,t.bottom),t.left=B(r.left,t.left),t}),Z(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ee(e){return e.split("-")[1]}function te(e){var t,a=e.reference,s=e.element,p=e.placement,u=p?x(p):null,l=p?ee(p):null,d=a.x+a.width/2-s.width/2,m=a.y+a.height/2-s.height/2;switch(u){case n:t={x:d,y:a.y-s.height};break;case r:t={x:d,y:a.y+a.height};break;case o:t={x:a.x+a.width,y:m};break;case i:t={x:a.x-s.width,y:m};break;default:t={x:a.x,y:a.y}}var h=u?W(u):null;if(null!=h){var v="y"===h?"height":"width";switch(l){case f:t[h]=t[h]-(a[v]/2-s[v]/2);break;case c:t[h]=t[h]+(a[v]/2-s[v]/2)}}return t}function ne(e,t){void 0===t&&(t={});var i=t,a=i.placement,f=void 0===a?e.placement:a,c=i.boundary,l=void 0===c?"clippingParents":c,d=i.rootBoundary,m=void 0===d?p:d,h=i.elementContext,v=void 0===h?u:h,y=i.altBoundary,b=void 0!==y&&y,w=i.padding,x=void 0===w?0:w,j=S("number"!=typeof x?x:q(x,s)),E=v===u?"reference":u,D=e.elements.reference,M=e.rects.popper,k=e.elements[b?E:v],P=$(g(k)?k:k.contextElement||L(e.elements.popper),l,m),A=O(D),W=te({reference:A,element:M,strategy:"absolute",placement:f}),B=Q(Object.assign({},M,W)),H=v===u?B:A,R={top:P.top-H.top+j.top,bottom:H.bottom-P.bottom+j.bottom,left:P.left-H.left+j.left,right:H.right-P.right+j.right},T=e.modifiersData.offset;if(v===u&&T){var C=T[f];Object.keys(R).forEach((function(e){var t=[o,r].indexOf(e)>=0?1:-1,i=[n,r].indexOf(e)>=0?"y":"x";R[e]+=C[i]*t}))}return R}function re(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?d:c,u=ee(r),m=u?f?l:l.filter((function(e){return ee(e)===u})):s,h=m.filter((function(e){return p.indexOf(e)>=0}));0===h.length&&(h=m);var v=h.reduce((function(t,n){return t[n]=ne(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[x(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}function oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ie(e){return[n,o,r,i].some((function(t){return e[t]>=0}))}function ae(e,t,r){var a=x(e),s=[i,n].indexOf(a)>=0?-1:1,f="function"==typeof r?r(Object.assign({},t,{placement:e})):r,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[i,o].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}function se(e,t,n){void 0===n&&(n=!1);var r=L(t),o=O(e),i=y(t),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(i||!i&&!n)&&(("body"!==h(t)||G(r))&&(a=function(e){return e!==v(e)&&y(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):X(e)}(t)),y(t)?((s=O(t)).x+=t.clientLeft,s.y+=t.clientTop):r&&(s.x=Y(r))),{x:o.left+a.scrollLeft-s.x,y:o.top+a.scrollTop-s.y,width:o.width,height:o.height}}function fe(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ce(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var pe={placement:"bottom",modifiers:[],strategy:"absolute"};function ue(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var le=function(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?pe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},pe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){p(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:g(e)?K(e):e.contextElement?K(e.contextElement):[],popper:K(t)};var a=function(e){var t=fe(e);return m.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=a.filter((function(e){return e.enabled})),c(),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(ue(t,n)){o.rects={reference:se(t,A(n),"fixed"===o.options.strategy),popper:j(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"==typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:ce((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!ue(e,t))return f;function c(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var s=i({state:o,name:t,instance:f,options:r});a.push(s||function(){})}}))}function p(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=v(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,I)})),s&&f.addEventListener("resize",n.update,I),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),s&&f.removeEventListener("resize",n.update,I)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:x(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,V(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,V(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},w,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=d.reduce((function(e,n){return e[n]=ae(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,s=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var p=s.mainAxis,u=void 0===p||p,l=s.altAxis,d=void 0===l||l,m=s.fallbackPlacements,h=s.padding,v=s.boundary,g=s.rootBoundary,y=s.altBoundary,b=s.flipVariations,w=void 0===b||b,O=s.allowedAutoPlacements,j=t.options.placement,E=x(j),D=m||(E!==j&&w?function(e){if(x(e)===a)return[];var t=z(e);return[F(e),t,F(t)]}(j):[z(j)]),M=[j].concat(D).reduce((function(e,n){return e.concat(x(n)===a?re(t,{placement:n,boundary:v,rootBoundary:g,padding:h,flipVariations:w,allowedAutoPlacements:O}):n)}),[]),L=t.rects.reference,k=t.rects.popper,P=new Map,A=!0,W=M[0],B=0;B<M.length;B++){var H=M[B],R=x(H),T=ee(H)===f,S=[n,r].indexOf(R)>=0,q=S?"width":"height",C=ne(t,{placement:H,boundary:v,rootBoundary:g,altBoundary:y,padding:h}),N=S?T?o:i:T?r:n;L[q]>k[q]&&(N=z(N));var V=z(N),I=[];if(u&&I.push(C[R]<=0),d&&I.push(C[N]<=0,C[V]<=0),I.every((function(e){return e}))){W=H,A=!1;break}P.set(H,I)}if(A)for(var U=function(e){var t=M.find((function(t){var n=P.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return W=t,"break"},_=w?3:1;_>0&&"break"!==U(_);_--);t.placement!==W&&(t.modifiersData[c]._skip=!0,t.placement=W,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,a=e.options,s=e.name,c=a.mainAxis,p=void 0===c||c,u=a.altAxis,l=void 0!==u&&u,d=a.boundary,m=a.rootBoundary,h=a.altBoundary,v=a.padding,g=a.tether,y=void 0===g||g,b=a.tetherOffset,w=void 0===b?0:b,O=ne(t,{boundary:d,rootBoundary:m,padding:v,altBoundary:h}),E=x(t.placement),D=ee(t.placement),M=!D,L=W(E),k=function(e){return"x"===e?"y":"x"}(L),P=t.modifiersData.popperOffsets,R=t.rects.reference,S=t.rects.popper,q="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,C={x:0,y:0};if(P){if(p||l){var N="y"===L?n:i,V="y"===L?r:o,I="y"===L?"height":"width",U=P[L],z=P[L]+O[N],_=P[L]-O[V],F=y?-S[I]/2:0,X=D===f?R[I]:S[I],Y=D===f?-S[I]:-R[I],G=t.elements.arrow,J=y&&G?j(G):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[N],Z=K[V],$=T(0,R[I],J[I]),te=M?R[I]/2-F-$-Q-q:X-$-Q-q,re=M?-R[I]/2+F+$+Z+q:Y+$+Z+q,oe=t.elements.arrow&&A(t.elements.arrow),ie=oe?"y"===L?oe.clientTop||0:oe.clientLeft||0:0,ae=t.modifiersData.offset?t.modifiersData.offset[t.placement][L]:0,se=P[L]+te-ae-ie,fe=P[L]+re-ae;if(p){var ce=T(y?H(z,se):z,U,y?B(_,fe):_);P[L]=ce,C[L]=ce-U}if(l){var pe="x"===L?n:i,ue="x"===L?r:o,le=P[k],de=le+O[pe],me=le-O[ue],he=T(y?H(de,se):de,le,y?B(me,fe):me);P[k]=he,C[k]=he-le}}t.modifiersData[s]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,a=e.state,s=e.name,f=e.options,c=a.elements.arrow,p=a.modifiersData.popperOffsets,u=x(a.placement),l=W(u),d=[i,o].indexOf(u)>=0?"height":"width";if(c&&p){var m=C(f.padding,a),h=j(c),v="y"===l?n:i,g="y"===l?r:o,y=a.rects.reference[d]+a.rects.reference[l]-p[l]-a.rects.popper[d],b=p[l]-a.rects.reference[l],w=A(c),O=w?"y"===l?w.clientHeight||0:w.clientWidth||0:0,E=y/2-b/2,D=m[v],M=O-h[d]-m[g],L=O/2-h[d]/2+E,k=T(D,L,M),P=l;a.modifiersData[s]=((t={})[P]=k,t.centerOffset=k-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&E(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),f=oe(a,r),c=oe(s,o,i),p=ie(f),u=ie(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});function de(e,n){var r=["left","right"],o=["start","end"];return"rtl"===t(e)&&(r.reverse(),o.reverse()),n.replace(/-leading/gi,"-"+o[0]).replace(/-trailing/gi,"-"+o[1]).replace(/leading/gi,r[0]).replace(/trailing/gi,r[1])}e("C",{animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"}),e("d",Math.ceil(Math.sqrt(Math.pow(4,2)+Math.pow(4,2))))}}}));