System.register([],(function(r){"use strict";return{execute:function(){function t(r){return new Intl.NumberFormat(r,{minimumFractionDigits:0,maximumFractionDigits:20})}function e(r){var e=t(r).formatToParts(1234567.8).find((function(r){return"group"===r.type})).value;return 0===e.trim().length?" ":e}function n(r){var e=t(r).formatToParts(1234567.8).find((function(r){return"decimal"===r.type})).value;return 0===e.trim().length?" ":e}r({a:n,d:function(r,t){if(r){var u=e(t),i=n(t),a=r.split(""),c=a.lastIndexOf(i),o=a.map((function(r,t){return r===u||r===i&&t!==c?"":r})).reduce((function(r,t){return r+t})).replace(i,".");return isNaN(Number(o))?r:o}return r},g:e,l:function(r,u,i){if(void 0===i&&(i=!1),r){var a=Number(r);if(!isNaN(a))return t(u).formatToParts(a).map((function(r){var t=r.type,a=r.value;switch(t){case"group":return i?e(u):"";case"decimal":return n(u);default:return a}})).reduce((function(r,t){return r+t}))}return r},s:function(r){return r.endsWith(".")?r.replace(".",""):r}}),r("b",["ar","bs","ca","cs","da","de","de-CH","el","en","en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"])}}}));