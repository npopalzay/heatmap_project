System.register([],(function(t){"use strict";return{execute:function(){t({a:b,b:v,c:s,d:function(t,n,e){var r,o,i,u,c,f,a=0,l=!1,v=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=r,i=o;return r=o=void 0,a=n,u=t.apply(i,e)}function p(t){return a=t,c=setTimeout(g,n),l?b(t):u}function d(t){var e=t-f;return void 0===f||e>=n||e<0||v&&t-a>=i}function g(){var t=T();if(d(t))return m(t);c=setTimeout(g,function(t){var e=n-(t-f);return v?x(e,i-(t-a)):e}(t))}function m(t){return c=void 0,s&&r?b(t):(r=o=void 0,u)}function j(){var t=T(),e=d(t);if(r=arguments,o=this,f=t,e){if(void 0===c)return p(f);if(v)return clearTimeout(c),c=setTimeout(g,n),b(f)}return void 0===c&&(c=setTimeout(g,n)),u}return n=O(n)||0,y(e)&&(l=!!e.leading,i=(v="maxWait"in e)?S(O(e.maxWait)||0,n):i,s="trailing"in e?!!e.trailing:s),j.cancel=function(){void 0!==c&&clearTimeout(c),a=0,r=f=o=c=void 0},j.flush=function(){return void 0===c?u:m(T())},j},i:y});var n=t("f","object"==typeof global&&global&&global.Object===Object&&global),e="object"==typeof self&&self&&self.Object===Object&&self,r=t("r",n||e||Function("return this")()),o=t("S",r.Symbol),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,f=o?o.toStringTag:void 0,a=Object.prototype.toString,l=o?o.toStringTag:void 0;function v(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?function(t){var n=u.call(t,f),e=t[f];try{t[f]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(n?t[f]=e:delete t[f]),o}(t):function(t){return a.call(t)}(t)}function s(t){return null!=t&&"object"==typeof t}function b(t){return"symbol"==typeof t||s(t)&&"[object Symbol]"==v(t)}var p=/\s/,d=/^\s+/;function y(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}var g=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,j=/^0o[0-7]+$/i,h=parseInt;function O(t){if("number"==typeof t)return t;if(b(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=function(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&p.test(t.charAt(n)););return n}(t)+1).replace(d,""):t}(t);var e=m.test(t);return e||j.test(t)?h(t.slice(2),e?2:8):g.test(t)?NaN:+t}var T=function(){return r.Date.now()},S=Math.max,x=Math.min}}}));