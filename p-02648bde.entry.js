import{r as t,h as e,g as a,H as r}from"./p-f8f51224.js";import{g as s}from"./p-606b130f.js";import{h as i,i as n}from"./p-19ac376f.js";const o=class{constructor(e){t(this,e),this.scale="m",this.error=!1}render(){const t=this.determineContent();return e(r,null,t)}determineContent(){const t=s(this.el);if(this.thumbnail&&!this.error)return e("img",{alt:"",class:"thumbnail",dir:t,onError:()=>this.error=!0,src:this.thumbnail});const r=this.generateInitials(),a=this.generateFillColor();return e("span",{class:"background",dir:t,style:{backgroundColor:a}},r?e("span",{"aria-hidden":"true",class:"initials"},r):e("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))}generateFillColor(){const{userId:t,username:e,fullName:r,theme:a}=this,s=t&&`#${t.substr(t.length-6)}`,o=e||r||"",l=s&&n(s)?s:function(t){let e=0;for(let r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);let r="#";for(let t=0;t<3;t++)r+=("00"+(e>>8*t&255).toString(16)).substr(-2);return r}(o);return(t||o)&&n(l)?`hsl(${function(t){return function(t){let{r:e,g:r,b:a}=t;e/=255,r/=255,a/=255;const s=Math.max(e,r,a),i=Math.min(e,r,a),n=s-i;if(s===i)return 0;let o=(s+i)/2;switch(s){case e:o=(r-a)/n+(r<a?6:0);break;case r:o=(a-e)/n+2;break;case a:o=(e-r)/n+4}return Math.round(60*o)}(i(t))}(l)}, 60%, ${"dark"===a?20:90}%)`:"var(--calcite-ui-foreground-2)"}generateInitials(){const{fullName:t,username:e}=this;return t?t.trim().split(" ").map((t=>t.substring(0,1))).join(""):!!e&&e.substring(0,2)}get el(){return a(this)}};o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";export{o as calcite_avatar};