(self.webpackChunkgeog863_final=self.webpackChunkgeog863_final||[]).push([[5816],{72483:(t,e,n)=>{"use strict";n.d(e,{q:()=>s});var s=(0,n(62045).c)((function(t){var e;void 0!==(e=function(){function t(n,s,i,r,o){for(;r>i;){if(r-i>600){var a=r-i+1,h=s-i+1,c=Math.log(a),d=.5*Math.exp(2*c/3),l=.5*Math.sqrt(c*d*(a-d)/a)*(h-a/2<0?-1:1);t(n,s,Math.max(i,Math.floor(s-h*d/a+l)),Math.min(r,Math.floor(s+(a-h)*d/a+l)),o)}var u=n[s],m=i,f=r;for(e(n,i,s),o(n[r],u)>0&&e(n,i,r);m<f;){for(e(n,m,f),m++,f--;o(n[m],u)<0;)m++;for(;o(n[f],u)>0;)f--}0===o(n[i],u)?e(n,i,f):e(n,++f,r),f<=s&&(i=f+1),s<=f&&(r=f-1)}}function e(t,e,n){var s=t[e];t[e]=t[n],t[n]=s}function n(t,e){return t<e?-1:t>e?1:0}return function(e,s,i,r,o){t(e,s,i||0,r||e.length-1,o||n)}}())&&(t.exports=e)}))},2500:(t,e,n)=>{"use strict";n.d(e,{QB:()=>a});var s=n(18029),i=n(69770),r=n(63268),o=n(72483);class a{constructor(t=9,e){this.compareMinX=l,this.compareMinY=u,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),I.prune(),v.prune(),M.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const s=this.toBBox;if(y(t,n))for(I.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;y(t,o)&&(n.leaf?e(r):g(t,o)?this._all(r,e):I.push(r))}n=I.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!y(t,e))return!1;for(I.clear();e;){for(let s=0,i=e.children.length;s<i;s++){const i=e.children[s],r=e.leaf?n(i):i;if(y(t,r)){if(e.leaf||g(t,r))return!0;I.push(i)}}e=I.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,a=!1;const h=this.toBBox(t);for(M.clear(),B.clear();n||M.length>0;){var c;if(n||(n=(0,s.j0)(M.pop()),r=M.data[M.length-1],o=null!=(c=B.pop())?c:0,a=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;a||n.leaf||!g(n,h)?r?(o++,n=r.children[o],a=!1):n=null:(M.push(n),B.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(v.clear();n;){var s;if(!0===n.leaf)for(const t of n.children)e(t);else v.pushArray(n.children);n=null!=(s=v.pop())?s:null}}_build(t,e,n,s){const i=n-e+1;let r=this._maxEntries;if(i<=r){const s=new S(t.slice(e,n+1));return h(s,this.toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new w([]);o.height=s;const a=Math.ceil(i/r),c=a*Math.ceil(Math.sqrt(r));_(t,e,n,c,this.compareMinX);for(let i=e;i<=n;i+=c){const e=Math.min(i+c-1,n);_(t,i,e,a,this.compareMinY);for(let n=i;n<=e;n+=a){const i=Math.min(n+a-1,e);o.children.push(this._build(t,n,i,s-1))}}return h(o,this.toBBox),o}_chooseSubtree(t,e,n,s){for(;s.push(e),!0!==e.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=m(o),h=p(t,o)-a;h<i?(i=h,s=a<s?a:s,n=o):h===i&&a<s&&(s=a,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const s=this.toBBox,i=n?t:s(t);M.clear();const r=this._chooseSubtree(i,this.data,e,M);for(r.children.push(t),d(r,i);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(i,M,e)}_split(t,e){const n=t.data[e],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new S(o):new w(o);a.height=n.height,h(n,this.toBBox),h(a,this.toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this.data=new w([t,e]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let s,i,r;s=i=1/0;for(let o=e;o<=n-e;o++){const e=c(t,0,o,this.toBBox),a=c(t,o,n,this.toBBox),h=x(e,a),d=m(e)+m(a);h<s?(s=h,r=o,i=d<i?d:i):h===s&&d<i&&(i=d,r=o)}return r}_chooseSplitAxis(t,e,n){const s=t.leaf?this.compareMinX:l,i=t.leaf?this.compareMinY:u;this._allDistMargin(t,e,n,s)<this._allDistMargin(t,e,n,i)&&t.children.sort(s)}_allDistMargin(t,e,n,s){t.children.sort(s);const i=this.toBBox,r=c(t,0,e,i),o=c(t,n-e,n,i);let a=f(r)+f(o);for(let s=e;s<n-e;s++){const e=t.children[s];d(r,t.leaf?i(e):e),a+=f(r)}for(let s=n-e-1;s>=e;s--){const e=t.children[s];d(o,t.leaf?i(e):e),a+=f(o)}return a}_adjustParentBBoxes(t,e,n){for(let s=n;s>=0;s--)d(e.data[s],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else h(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){c(t,0,t.children.length,e,t)}function c(t,e,n,s,i){i||(i=new S([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],d(i,t.leaf?s(r):r);return i}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function l(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){const n=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t,e,n,i,r){const a=[e,n];for(;a.length;){const e=(0,s.j0)(a.pop()),n=(0,s.j0)(a.pop());if(e-n<=i)continue;const h=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,h,n,e,r),a.push(n,h,h,e)}}const I=new r.Z,v=new r.Z,M=new r.Z,B=new r.Z({deallocator:void 0});class b extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class w extends b{constructor(t){super(),this.children=t,this.leaf=!1}}},89743:(t,e,n)=>{"use strict";n.d(e,{N:()=>s});const s={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const s=new i(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(s.z=t.getPointZ(e)),o&&(s.m=t.getPointM(e)),s},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const s=t.hasZ(e),i=t.hasM(e),r=new h(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(s){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(i){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class i{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,s){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(t,e,n,s){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(t,e,n,s){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class h{constructor(t,e,n,s,i){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=s,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},30900:(t,e,n)=>{"use strict";n.d(e,{U:()=>c});var s=n(85376),i=n(19517),r=n(11949),o=n(3414),a=n(41752),h=n(89751);function c(t){if(!t)return null;if("mesh"===t.type)return t.toJSON();let e=null;const n=t.spatialReference,a=(0,s.C5)(n);if(!a)return t.toJSON();const c=n.isWebMercator?102100:4326,u=h.UZ[c].maxX,m=h.UZ[c].minX,f=h.UZ[c].plus180Line,g=h.UZ[c].minus180Line;let y;const _=t.toJSON();if((0,o.wp)(_))y=l(_,u,m);else if((0,o.aW)(_))_.points=_.points.map((t=>l(t,u,m))),y=_;else if((0,o.YX)(_))y=d(_,a);else if((0,o.oU)(_)||(0,o.l9)(_)){const t=x;(0,r.$P)(t,_);const n={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},s=(0,h.XZ)(n.xmin,m)*(2*u),o=0===s?_:function(t,e){const n=(0,h.x3)(t);for(const t of n)for(const n of t)n[0]+=e;return t}(_,s);n.xmin+=s,n.xmax+=s,(0,i.jQ)(n,f)&&n.xmax!==u||(0,i.jQ)(n,g)&&n.xmin!==m?e=o:y=o}else y=t.toJSON();return null!==e?(new p).cut(e,u):y}function d(t,e){if(!e)return t;const n=function(t,e){const n=[],{ymin:s,ymax:i}=t,r=t.xmax-t.xmin,o=t.xmin,a=t.xmax;let h;const[c,d]=e.valid;h=u(t.xmin,e);const l=h.x,f=h.frameId;h=u(t.xmax,e);const p=h.x,x=h.frameId,g=l===p&&r>0;if(r>2*d){const t={xmin:o<a?l:p,ymin:s,xmax:d,ymax:i},e={xmin:c,ymin:s,xmax:o<a?p:l,ymax:i},r={xmin:0,ymin:s,xmax:d,ymax:i},h={xmin:c,ymin:s,xmax:0,ymax:i},u=[],g=[];m(t,r)&&u.push(f),m(t,h)&&g.push(f),m(e,r)&&u.push(x),m(e,h)&&g.push(x);for(let t=f+1;t<x;t++)u.push(t),g.push(t);n.push({extent:t,frameIds:[f]},{extent:e,frameIds:[x]},{extent:r,frameIds:u},{extent:h,frameIds:g})}else l>p||g?n.push({extent:{xmin:l,ymin:s,xmax:d,ymax:i},frameIds:[f]},{extent:{xmin:c,ymin:s,xmax:p,ymax:i},frameIds:[x]}):n.push({extent:{xmin:l,ymin:s,xmax:p,ymax:i},frameIds:[f]});return n}(t,e).map((t=>t.extent));return n.length<2?n[0]||t:n.length>2?(t.xmin=e.valid[0],t.xmax=e.valid[1],t):{rings:n.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function l(t,e,n){if(Array.isArray(t)){const s=t[0];if(s>e){const n=(0,h.XZ)(s,e);t[0]=s+n*(-2*e)}else if(s<n){const e=(0,h.XZ)(s,n);t[0]=s+e*(-2*n)}}else{const s=t.x;if(s>e){const n=(0,h.XZ)(s,e);t.x+=n*(-2*e)}else if(s<n){const e=(0,h.XZ)(s,n);t.x+=e*(-2*n)}}return t}function u(t,e){const[n,s]=e.valid,i=2*s;let r,o=0;return t>s?(r=Math.ceil(Math.abs(t-s)/i),t-=r*i,o=r):t<n&&(r=Math.ceil(Math.abs(t-n)/i),t+=r*i,o=-r),{x:t,frameId:o}}function m(t,e){const{xmin:n,ymin:s,xmax:i,ymax:r}=e;return f(t,n,s)&&f(t,n,r)&&f(t,i,r)&&f(t,i,s)}function f(t,e,n){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax}class p{cut(t,e){let n;if(t.rings)this.closed=!0,n=t.rings,this.minPts=4;else{if(!t.paths)return null;this.closed=!1,n=t.paths,this.minPts=2}const s=n.length,i=-2*e;for(let t=0;t<s;t++){const e=n[t];if(e&&e.length>=this.minPts){const t=[];for(const n of e)t.push([n[0]+i,n[1]]);n.push(t)}}return this.closed?t.rings=n:t.paths=n,t}}const x=(0,a.Ue)()},85130:(t,e,n)=>{"use strict";function s(t,e){return t?e?4:3:e?3:2}function i(t,e,n,i,a){if(!e||!e.lengths.length)return null;const h="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const c=t.coords,d=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:m}=e,f=s(n,i);let p=0;for(const t of u){const e=r(l,m,p,t,n,i,h);e&&d.push(e),p+=t*f}if(d.sort(((t,e)=>{let s=h*t[2]-h*e[2];return 0===s&&n&&(s=t[4]-e[4]),s})),d.length){let t=6*d[0][2];c[0]=d[0][0]/t,c[1]=d[0][1]/t,n&&(t=6*d[0][4],c[2]=0!==t?d[0][3]/t:0),(c[0]<l[0]||c[0]>l[1]||c[1]<l[2]||c[1]>l[3]||n&&(c[2]<l[4]||c[2]>l[5]))&&(c.length=0)}if(!c.length){const t=e.lengths[0]?o(m,0,u[0],n,i):null;if(!t)return null;c[0]=t[0],c[1]=t[1],n&&t.length>2&&(c[2]=t[2])}return t}function r(t,e,n,i,r,o,a=1){const h=s(r,o);let c=n,d=n+h,l=0,u=0,m=0,f=0,p=0;for(let n=0,s=i-1;n<s;n++,c+=h,d+=h){const n=e[c],s=e[c+1],i=e[c+2],o=e[d],a=e[d+1],h=e[d+2];let x=n*a-o*s;f+=x,l+=(n+o)*x,u+=(s+a)*x,r&&(x=n*h-o*i,m+=(i+h)*x,p+=x),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),s<t[2]&&(t[2]=s),s>t[3]&&(t[3]=s),r&&(i<t[4]&&(t[4]=i),i>t[5]&&(t[5]=i))}if(f*a>0&&(f*=-1),p*a>0&&(p*=-1),!f)return null;const x=[l,u,.5*f];return r&&(x[3]=m,x[4]=.5*p),x}function o(t,e,n,i,r){const o=s(i,r);let l=e,u=e+o,m=0,f=0,p=0,x=0;for(let e=0,s=n-1;e<s;e++,l+=o,u+=o){const e=t[l],n=t[l+1],s=t[l+2],r=t[u],o=t[u+1],g=t[u+2],y=i?h(e,n,s,r,o,g):a(e,n,r,o);if(y)if(m+=y,i){const t=d(e,n,s,r,o,g);f+=y*t[0],p+=y*t[1],x+=y*t[2]}else{const t=c(e,n,r,o);f+=y*t[0],p+=y*t[1]}}return m>0?i?[f/m,p/m,x/m]:[f/m,p/m]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,s){const i=n-t,r=s-e;return Math.sqrt(i*i+r*r)}function h(t,e,n,s,i,r){const o=s-t,a=i-e,h=r-n;return Math.sqrt(o*o+a*a+h*h)}function c(t,e,n,s){return[t+.5*(n-t),e+.5*(s-e)]}function d(t,e,n,s,i,r){return[t+.5*(s-t),e+.5*(i-e),n+.5*(r-n)]}n.d(e,{Y:()=>i})},15130:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});var s=n(1867),i=n(2500);const r={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.QB(9,(0,s.Z)("csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,s)=>{t[e++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,n){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r,n)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},76323:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var s=n(18029),i=n(9783),r=n(29107),o=n(78513),a=n(41752),h=n(43169),c=n(27109),d=n(15130),l=n(92126),u=n(79197),m=n(85130);const f={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new l.Z(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid||(t.centroid=(0,m.Y)(new u.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)},p=class{constructor(t){this.geometryInfo=t,this._boundsStore=new d.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.Z,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,a.Ue)(a.Gv);return this._featuresById.forEach((e=>{const n=this._boundsStore.get(e.objectId);n&&(t[0]=Math.min(n[0],t[0]),t[1]=Math.min(n[1],t[1]),t[2]=Math.max(n[2],t[2]),t[3]=Math.max(n[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const s of t){const t=this._boundsStore.get(s.objectId);t&&e((0,c.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void i.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let o;if(this._markedIds.add(e),n?(t.displayId=n.displayId,o=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,s.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);o=(0,h.$)(o||(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,o),this._featuresById.set(e,t)}_remove(t){return(0,s.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},87147:(t,e,n)=>{"use strict";n.d(e,{_W:()=>l,iV:()=>f,oj:()=>x});var s=n(85376),i=n(15072),r=n(12750),o=n(89743);const a=[0,0];function h(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:c(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:c(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:d(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function c(t,e){const n=[];for(const s of t)n.push(d(s,e));return n}function d(t,e){const n=[];for(const s of t){const t=e(s[0],s[1],[0,0]);n.push(t),s.length>2&&t.push(s[2]),s.length>3&&t.push(s[3])}return n}async function l(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>{var e;return null==(e=t.geometry)?void 0:e.spatialReference})):[t];await(0,r.iQ)(n.map((t=>({source:t,dest:e}))))}const u=h.bind(null,i.hG),m=h.bind(null,i.R6);function f(t,e,n){return t?(n||(n=e,e=t.spatialReference),(0,s.JY)(e)&&(0,s.JY)(n)&&!(0,s.fS)(e,n)?(0,i.Q8)(e,n)?(0,s.sS)(n)?u(t):m(t):(0,r.oj)(o.N,[t],e,n,null)[0]:t):t}const p=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){!t||!t.length||!e||!n||(0,s.fS)(e,n);const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:a,resolve:h}=t;(0,i.Q8)(n,a)?(0,s.sS)(a)?h(e.map(u)):h(e.map(m)):h((0,r.oj)(o.N,e,n,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};async function x(t,e,n){return p.push(t,e,n)}},52075:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GraphicsSnappingSource:()=>M});var s=n(87397),i=(n(1867),n(18029)),r=(n(9783),n(9385),n(82203)),o=n(65482),a=(n(17593),n(15392),n(11786),n(69770)),h=n(14790),c=n(83374),d=n(49749),l=n(10114),u=n(90331),m=n(12750),f=n(92126),p=n(43169),x=n(74893),g=n(77394),y=n(30900),_=n(76323),I=n(37396),v=n(67179);let M=class extends((0,x.p)(c.Z)){constructor(t){super(t),this.availability=1,this.sources={multipoint:null,point:null,polygon:null,polyline:null},this.loadedWkids=new Set,this.loadedWkts=new Set,this.pendingAdds=[]}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){const t=this.pendingAdds;this.pendingAdds.length=0;for(const e of t)e.task.abort();this.mapSources((t=>this.destroySource(t)))}initialize(){this.handles.add([this.layer.on("graphic-update",(t=>this.onGraphicUpdate(t))),this.updatingHandles.addOnCollectionChange(this.layer.graphics,(t=>this.onGraphicsChanged(t)))]),this.addMany(this.layer.graphics.toArray())}async fetchCandidates(t,e){const n=(await(0,h.WW)(this.mapSources((n=>n.queryEngine.executeQueryForSnapping({point:t.coordinateHelper.toPoint(t.point,new d.Z).toJSON(),distance:t.distance,types:t.types,query:(0,i.pC)(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},e).then((({candidates:t})=>t)))))).flat().map((e=>(0,v.X)(e,t.coordinateHelper)));return(0,g.lQ)(t.point,n),{candidates:n}}refresh(){}onGraphicUpdate(t){switch(t.property){case"geometry":case"visible":this.remove(t.graphic),this.addMany([t.graphic])}}onGraphicsChanged(t){for(const e of t.removed)this.remove(e);this.addMany(t.added)}addMany(t){const e=[],n=new Map;for(const s of t)(0,i.Wi)(s.geometry)||(this.needsInitializeProjection(s.geometry.spatialReference)?(e.push(s.geometry.spatialReference),n.set(s.uid,s)):this.add(s));this.createPendingAdd(e,n)}createPendingAdd(t,e){if(!t.length)return;const n=(0,h.vr)((async n=>{await(0,m.iQ)(t.map((t=>({source:t,dest:this.spatialReference}))),{signal:n}),this.markLoadedSpatialReferences(t);for(const[,t]of e)this.add(t)}));this.updatingHandles.addPromise(n.promise);const s={task:n,graphics:e},i=()=>(0,a.e$)(this.pendingAdds,s);n.promise.then(i,i),this.pendingAdds.push(s)}markLoadedSpatialReferences(t){for(const e of t)null!=e.wkid&&this.loadedWkids.add(e.wkid),null!=e.wkt&&this.loadedWkts.add(e.wkt)}add(t){if((0,i.Wi)(t.geometry)||!t.visible)return;let e=t.geometry;if("mesh"===e.type)return;"extent"===e.type&&(e=l.Z.fromExtent(e));const n=this.ensureSource(e.type);if((0,i.Wi)(n))return;const s=this.createOptimizedFeature(t.uid,e);(0,i.pC)(s)&&n.featureStore.add(s)}needsInitializeProjection(t){return!(null!=t.wkid&&this.loadedWkids.has(t.wkid)||null!=t.wkt&&this.loadedWkts.has(t.wkt)||(0,m.Up)(t,this.spatialReference))}createOptimizedFeature(t,e){const n=(0,m.iV)((0,y.U)(e),this.spatialReference);return n?new f.Z((0,p.GH)(n,!1,!1),{[B]:t},null,t):null}ensureSource(t){const e=this.sources[t];if((0,i.pC)(e))return e;const n=this.createSource(t);return this.sources[t]=n,n}createSource(t){const e=u.Mk.toJSON(t),n=new _.Z({geometryType:e,hasZ:!1,hasM:!1});return{featureStore:n,queryEngine:new I.Z({featureStore:n,fields:[{name:B,type:"esriFieldTypeOID",alias:B}],geometryType:e,hasM:!1,hasZ:!1,objectIdField:B,spatialReference:this.spatialReference,scheduler:(0,i.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:t}}remove(t){this.mapSources((e=>this.removeFromSource(e,t)));for(const e of this.pendingAdds)e.graphics.delete(t.uid),0===e.graphics.size&&e.task.abort()}removeFromSource(t,e){const n=e.uid;t.featureStore.has(n)&&t.featureStore.removeById(e.uid)}destroySource(t){t.queryEngine.destroy(),this.sources[t.type]=null}mapSources(t){const{point:e,polygon:n,polyline:s,multipoint:r}=this.sources,o=[];return(0,i.pC)(e)&&o.push(t(e)),(0,i.pC)(n)&&o.push(t(n)),(0,i.pC)(s)&&o.push(t(s)),(0,i.pC)(r)&&o.push(t(r)),o}};(0,s._)([(0,r.Cb)({constructOnly:!0})],M.prototype,"spatialReference",void 0),(0,s._)([(0,r.Cb)({constructOnly:!0})],M.prototype,"layerSource",void 0),(0,s._)([(0,r.Cb)({constructOnly:!0})],M.prototype,"view",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],M.prototype,"updating",null),(0,s._)([(0,r.Cb)({readOnly:!0})],M.prototype,"availability",void 0),M=(0,s._)([(0,o.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],M);const B="OBJECTID"},67179:(t,e,n)=>{"use strict";n.d(e,{X:()=>c});var s=n(4434),i=n(95185),r=n(42282);class o extends i.a{constructor(t){super({...t,constraint:new r.ku(t.coordinateHelper,t.edgeStart,t.edgeEnd)})}get hints(){return[new s.w(1,this.constraint.start,this.constraint.end)]}}var a=n(52123);class h extends i.a{constructor(t){super({...t,constraint:new r.Hk(t.coordinateHelper,t.targetPoint)})}get hints(){return[new a.n(this.targetPoint)]}}function c(t,e){switch(t.type){case"edge":return new o({coordinateHelper:e,edgeStart:e.fromPoint(t.start),edgeEnd:e.fromPoint(t.end),targetPoint:e.fromPoint(t.target),objectId:t.objectId});case"vertex":return new h({coordinateHelper:e,targetPoint:e.fromPoint(t.target),objectId:t.objectId})}}}}]);