System.register([],(function(r){"use strict";return{execute:function(){function t(r){var t=r.r,n=r.g,e=r.b;return("#"+t.toString(16).padStart(2,"0")+n.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")).toLowerCase()}r({a:u,c:function(r,t){return(null==r?void 0:r.rgbNumber())===(null==t?void 0:t.rgbNumber())},h:a,i,n:function(r){return(r=r.toLowerCase()).startsWith("#")||(r="#"+r),s(r)?t(a(r)):r},p:function(r){if("string"==typeof r){if(r.startsWith("#")){var t=r.length;if(4===t||7===t)return S.HEX;if(5===t||9===t)return S.HEXA}if(r.startsWith("rgba("))return S.RGBA_CSS;if(r.startsWith("rgb("))return S.RGB_CSS;if(r.startsWith("hsl("))return S.HSL_CSS;if(r.startsWith("hsla("))return S.HSLA_CSS}if("object"==typeof r){if(l(r,"r","g","b"))return l(r,"a")?f.RGBA:f.RGB;if(l(r,"h","s","l"))return l(r,"a")?f.HSLA:f.HSL;if(l(r,"h","s","v"))return l(r,"a")?f.HSVA:f.HSV}return null},r:t}),r("b",/^[0-9A-F]$/i);var n=/^#[0-9A-F]{3}$/i,e=/^#[0-9A-F]{6}$/i;function i(r){return s(r)||u(r)}function s(r){return r&&4===r.length&&n.test(r)}function u(r){return r&&7===r.length&&e.test(r)}function a(r){if(!i(r))return null;if(3===(r=r.replace("#","")).length){var t=r.split(""),n=t[0],e=t[1],s=t[2];return{r:parseInt(""+n+n,16),g:parseInt(""+e+e,16),b:parseInt(""+s+s,16)}}return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}var S=r("C",{HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"}),f={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function l(r){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.every((function(t){return t&&r&&""+t in r}))}}}}));