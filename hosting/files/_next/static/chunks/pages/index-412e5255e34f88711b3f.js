_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[136],{"0942":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},"726h":function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return b}));n("mXGw");var r=n("W0B4"),o=n.n(r),c=n("5MD+"),i=n("6h0R");n("WM7k");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var s,f=["children","className"],l=Object(c.css)(s||(s=u(["\n  clip: rect(0, 0, 0, 0);\n  clip-path: inset(50%);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n"])));function p(t){var e=t.children,n=t.className,r=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,f);return Object(i.jsx)("div",a({},r,{className:Object(c.cx)(l,n)}),e)}p.displayName="VisuallyHidden",p.propTypes={children:o.a.string,className:o.a.string};var d;function b(t,e){t["aria-label"]||t["aria-labelledby"]||console.error("For screen-reader accessibility, aria-label or aria-labelledby must be provided".concat(e?" to ".concat(e):"","."))}function y(t){return null!=t&&"string"==typeof t?Object(c.css)(d||(d=u(["\n      @media (prefers-reduced-motion: reduce) {\n        ","\n      }\n    "])),t):""}},"7L9N":function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},"91KN":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("5iLb"),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.literal,r=e.overlap,o=n?t:["&"].concat(t);function c(t){if("object"!==typeof t||null==t)return[];if(Array.isArray(t))return t.map(c);var e={},i={},a={};return Object.keys(t).forEach((function(u){var s=t[u];if(!Array.isArray(s)&&n&&(s=[s]),(n||Array.isArray(s))&&38!==u.charCodeAt(0)){var f=void 0;s.forEach((function(t,c){if((!r||f!==t)&&null!=t)if(f=t,0!==c||n)if(void 0===e[o[c]]){var i;e[o[c]]=((i={})[u]=t,i)}else e[o[c]][u]=t;else a[u]=t}))}else"object"===typeof s?i[u]=c(s):a[u]=s})),o.forEach((function(t){e[t]&&(a[t]=e[t])})),Object.assign(a,i),a}return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(c)}}(Object.values(r.a).map((function(t){return"@media (min-width: ".concat(t,"px)")})),{literal:!0})},Bt0p:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),t.raw=e,t}n.d(e,"a",(function(){return r}))},DfNV:function(t,e,n){"use strict";var r=n("Fcif"),o=n("mXGw"),c=n("dAGg"),i=n("OVsn"),a=n("G0rA"),u=n("/zgD"),s=n("5iLb"),f=n("91KN"),l=n("6h0R");var p=Object(i.a)("display:flex;flex-direction:column;justify-content:top;padding-top:",s.c[2]-1,"px;",Object(f.a)({height:["auto","100%"],marginTop:["48px","unset"],marginBottom:["40px","unset"],marginLeft:["".concat(s.c[4],"px"),"unset"]}),";","",""),d=Object(i.a)("cursor:pointer;text-decoration:none;font-weight:bolder;padding-right:",s.c[5],"px;","",""),b=Object(i.a)({name:"1hwlg33",styles:"margin-top:28px"}),y=Object(i.a)("color:",a.a.gray.dark1,";","","");function j(t){var e=t.date,n=t.story,i=t.route,a=t.updateURL,s=Object(o.useState)(""),f=s[0],p=s[1],j=Object(c.useRouter)().push,h=i?{onClick:function(){return j(i)},as:"p"}:{href:a,as:"a",target:"_blank",rel:"noopener noreferrer"};return Object(o.useEffect)((function(){"undefined"!==typeof navigator&&p(new Date(e).toLocaleString(void 0,{year:"numeric",month:"long",day:"numeric"}))}),[e]),Object(l.jsx)("div",{className:b},Object(l.jsx)(u.k,{className:y},f),Object(l.jsx)(u.l,Object(r.a)({className:d},h),n))}function h(t){var e=t.updates;return Object(l.jsx)("div",{className:p},Object(l.jsx)(u.e,{as:"h1"},"What\u2019s New"),e.map((function(t){return Object(l.jsx)(j,{key:t.story,date:t.date,story:t.story,route:t.route,updateURL:t.updateURL})})))}h.displayName="News",e.a=h},Fcif:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},OVsn:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));n("KGyE"),n("nvok"),n("D+Av");var r=n("pl2K"),o=Object(r.a)({key:"css"}),c=(o.flush,o.hydrate,o.cx),i=(o.merge,o.getRegisteredStyles,o.injectGlobal,o.keyframes,o.css);o.sheet,o.cache},Qbu1:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e,n){return(i=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function a(t){var e="function"===typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,c)}function c(){return i(t,arguments,r(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o(c,t)})(t)}n.d(e,"a",(function(){return a}))},WjHl:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},dAGg:function(t,e,n){t.exports=n("bBV7")},eHoq:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r="/",o="https://d2va9gm4j17fy9.cloudfront.net"},mK0O:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},nfx3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={default:700,dataGraphic:1138}}},[["WjHl",0,1,24,2,3,16,15,19]]]);