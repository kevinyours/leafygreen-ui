_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[106],{"81Kt":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/table/example",function(){return n("Ap0h")}])},"91KN":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("5iLb"),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.literal,r=e.overlap,o=n?t:["&"].concat(t);function i(t){if("object"!==typeof t||null==t)return[];if(Array.isArray(t))return t.map(i);var e={},a={},c={};return Object.keys(t).forEach((function(l){var s=t[l];if(!Array.isArray(s)&&n&&(s=[s]),(n||Array.isArray(s))&&38!==l.charCodeAt(0)){var u=void 0;s.forEach((function(t,i){if((!r||u!==t)&&null!=t)if(u=t,0!==i||n)if(void 0===e[o[i]]){var a;e[o[i]]=((a={})[l]=t,a)}else e[o[i]][l]=t;else c[l]=t}))}else"object"===typeof s?a[l]=i(s):c[l]=s})),o.forEach((function(t){e[t]&&(c[t]=e[t])})),Object.assign(c,a),c}return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(i)}}(Object.values(r.a).map((function(t){return"@media (min-width: ".concat(t,"px)")})),{literal:!0})},Ap0h:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n("rePB"),o=n("oYCi"),i=n("Ff2n"),a=(n("mXGw"),n("olMD")),c=n("hnBo");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=[{name:"First Project",clusters:"1 Cluster",users:"12 Users",teams:"0 Teams",alerts:"5 Alerts"},{name:"Second Project",clusters:"2 Clusters",users:"6 Users",teams:"4 Teams",alerts:"2 Alerts"},{name:"Third Project",clusters:"5 Clusters",users:"2 Users",teams:"0 Teams",alerts:"1 Alert"}],f={disabled:{type:"boolean",default:!1,label:"Disabled"},sortBy:{type:"boolean",default:!0,label:"Sort By"},baseFontSize:{type:"select",default:14,label:"Base Font Size",options:[14,16]},darkMode:{type:"boolean",default:!1,label:"Dark Mode"}};function d(t){var e=t.disabled,n=t.sortBy,r=t.darkMode,c=Object(i.a)(t,["disabled","sortBy","darkMode"]);return Object(o.jsx)(a.d,s(s({},c),{},{darkMode:r,data:u,columns:Object(o.jsxs)(a.b,{children:[Object(o.jsx)(a.e,{label:"Project Name"},"name"),Object(o.jsx)(a.e,{label:"Clusters",sortBy:n?function(t){return t.clusters}:void 0},"clusters"),Object(o.jsx)(a.e,{label:"Users"},"users"),Object(o.jsx)(a.e,{label:"Teams"},"teams"),Object(o.jsx)(a.e,{label:"Alerts"},"alerts")]}),children:function(t){var n=t.datum;return Object(o.jsxs)(a.c,{disabled:e&&"Second Project"===n.name,children:[Object(o.jsx)(a.a,{children:n.name}),Object(o.jsx)(a.a,{children:n.clusters}),Object(o.jsx)(a.a,{children:n.users}),Object(o.jsx)(a.a,{children:n.teams}),Object(o.jsx)(a.a,{children:n.alerts})]},n.name)}}))}function p(){return Object(o.jsx)(c.a,{knobsConfig:f,children:function(t){return Object(o.jsx)(d,s({},t))}})}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},KQAK:function(t,e,n){t.exports=function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(e);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var s={small:14,default:16,large:20,xlarge:24};function u(){var t=l(["\n    flex-shrink: 0;\n  "]);return u=function(){return t},t}function f(){var t=l(["\n    color: ",";\n  "]);return f=function(){return t},t}var d=function(e){var r,o=e.className,l=e.size,d=void 0===l?16:l,p=e.title,b=e["aria-label"],h=e["aria-labelledby"],g=e.fill,m=e.role,j=void 0===m?"img":m,y=c(e,["className","size","title","aria-label","aria-labelledby","fill","role"]),v=n.css(f(),g),O=n.css(u()),w=function(t,e,n){var r,o,a=n["aria-label"],c=n["aria-labelledby"],l=n.title;switch(t){case"img":return a||c||l?(i(r={},"aria-labelledby",c),i(r,"aria-label",a),i(r,"title",l),r):{"aria-label":(o=e,"".concat(o.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(j,"Checkmark",(i(r={title:p},"aria-label",b),i(r,"aria-labelledby",h),r));return t.createElement("svg",a({className:n.cx(i({},v,null!=g),O,o),height:"number"==typeof d?d:s[d],width:"number"==typeof d?d:s[d],role:j},w,y,{viewBox:"0 0 16 16"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.30583 9.05037L11.7611 3.59509C12.1516 3.20457 12.7848 3.20457 13.1753 3.59509L13.8824 4.3022C14.273 4.69273 14.273 5.32589 13.8824 5.71642L6.81525 12.7836C6.38819 13.2106 5.68292 13.1646 5.31505 12.6856L2.26638 8.71605C1.92998 8.27804 2.01235 7.65025 2.45036 7.31385L3.04518 6.85702C3.59269 6.43652 4.37742 6.53949 4.79792 7.087L6.30583 9.05037Z",fill:"currentColor"}))};return d.displayName="Checkmark",d.isGlyph=!0,d.propTypes={fill:o.default.string,size:o.default.oneOfType([o.default.number,o.default.string]),className:o.default.string},d}(n("mXGw"),n("W0B4"),n("5MD+"))},ZmRa:function(t,e,n){"use strict";n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return B}));var r=n("mXGw"),o=n.n(r),i=n("W0B4"),a=n.n(i),c=n("m3N6"),l=n("5MD+"),s=n("q7FG"),u=n("WM7k");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function g(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O,w,P,E,x,S,C,D,M={Top:"top",Bottom:"bottom",Left:"left",Right:"right",CenterVertical:"center-vertical",CenterHorizontal:"center-horizontal"},B={Start:"start",Middle:"middle",End:"end",Fit:"fit"};function H(t){var e=t.useRelativePositioning,n=t.spacing,r=t.align,o=t.justify,i=t.referenceElViewportPos,a=void 0===i?A:i,c=t.referenceElDocumentPos,l=void 0===c?A:c,s=t.contentElViewportPos,u=void 0===s?A:s,f=t.contentElDocumentPos,d=void 0===f?A:f,p=t.windowHeight,h=void 0===p?window.innerHeight:p,g=t.windowWidth,m=void 0===g?window.innerWidth:g,y={windowWidth:m,windowHeight:h,referenceElViewportPos:a,contentElViewportPos:u,spacing:n},v=function(t,e){var n=e.spacing,r=e.windowWidth,o=e.windowHeight,i=e.contentElViewportPos,a=e.referenceElViewportPos;return[t].concat(j(U[t])).find((function(t){return[M.Top,M.Bottom,M.CenterVertical].includes(t)?K({top:I({align:t,contentElPos:i,referenceElPos:a,spacing:n}),windowHeight:o,contentHeight:i.height}):!![M.Left,M.Right,M.CenterHorizontal].includes(t)&&X({left:G({align:t,contentElPos:i,referenceElPos:a,spacing:n}),windowWidth:r,contentWidth:i.width})}))||t}(r,y),O=function(t,e,n){var r,o,i=n.spacing,a=n.windowWidth,c=n.windowHeight,l=n.contentElViewportPos,s=n.referenceElViewportPos,u=[t].concat(j(Z[t]));switch(e){case M.Top:case M.Bottom:case M.CenterVertical:return null!==(r=u.find((function(t){return X({contentWidth:t===B.Fit?s.width:l.width,windowWidth:a,left:G({contentElPos:l,referenceElPos:s,spacing:i,align:e,justify:t})})})))&&void 0!==r?r:Z[t][0];case M.Left:case M.Right:case M.CenterHorizontal:return null!==(o=u.find((function(t){return K({contentHeight:t===B.Fit?s.height:l.height,windowHeight:c,top:I({contentElPos:l,referenceElPos:s,spacing:i,align:e,justify:t})})})))&&void 0!==o?o:Z[t][0]}}(o,v,y),w=function(t){var e,n,r=t.justify,o=L[t.align],i=null!==(e=o.x)&&void 0!==e?e:z[r],a=null!==(n=o.y)&&void 0!==n?n:F[r];return"".concat(i," ").concat(a)}({align:v,justify:O}),P=function(t,e){var n=.8;switch(t){case M.Top:return"translate3d(0, ".concat(e,"px, 0) scale(").concat(n,")");case M.Bottom:return"translate3d(0, -".concat(e,"px, 0) scale(").concat(n,")");case M.Left:return"translate3d(".concat(e,"px, 0, 0) scale(").concat(n,")");case M.Right:return"translate3d(-".concat(e,"px, 0, 0) scale(").concat(n,")");case M.CenterHorizontal:case M.CenterVertical:return"scale(".concat(n,")")}}(v,n);return e?{align:v,justify:O,positionCSS:b({},W({align:v,justify:O,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n}),{transformOrigin:w,transform:P})}:{align:v,justify:O,positionCSS:b({},_({align:v,justify:O,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n,windowHeight:h,windowWidth:m}),{transformOrigin:w,transform:P})}}var A={top:0,bottom:0,left:0,right:0,height:0,width:0};function T(t){if(!t)return A;var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,o=e.left,i=e.right,a=t.offsetHeight,c=t.offsetWidth,l=window,s=l.scrollX,u=l.scrollY;return{top:n+u,bottom:r+u,left:o+s,right:i+s,height:a,width:c}}function N(t){if(!t)return A;var e=t.getBoundingClientRect();return{top:e.top,bottom:e.bottom,left:e.left,right:e.right,height:t.offsetHeight,width:t.offsetWidth}}var F=(f(O={},B.Start,"top"),f(O,B.Middle,"center"),f(O,B.End,"bottom"),f(O,B.Fit,"center"),O),z=(f(w={},B.Start,"left"),f(w,B.Middle,"center"),f(w,B.End,"right"),f(w,B.Fit,"center"),w),L=(f(P={},M.Left,{x:"right"}),f(P,M.Right,{x:"left"}),f(P,M.Top,{y:"bottom"}),f(P,M.Bottom,{y:"top"}),f(P,M.CenterHorizontal,{x:"center"}),f(P,M.CenterVertical,{y:"center"}),P),R=(f(E={},B.Start,{top:0}),f(E,B.End,{bottom:0}),f(E,B.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{top:"".concat(n.height/2-e.height/2,"px")}})),f(E,B.Fit,{top:0,bottom:0}),E),k=(f(x={},B.Start,{left:0}),f(x,B.End,{right:0}),f(x,B.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{left:"".concat(n.width/2-e.width/2,"px")}})),f(x,B.Fit,{left:0,right:0}),x),V=(f(S={},M.Top,{constant:function(t){var e=t.spacing;return{bottom:"calc(100% + ".concat(e,"px)")}},justifyPositions:k}),f(S,M.Bottom,{constant:function(t){var e=t.spacing;return{top:"calc(100% + ".concat(e,"px)")}},justifyPositions:k}),f(S,M.CenterVertical,{constant:function(t){var e=t.referenceElDocumentPos;return{top:"calc(".concat(e.height/2,"px - 50%)")}},justifyPositions:k}),f(S,M.Left,{constant:function(t){var e=t.spacing;return{right:"calc(100% + ".concat(e,"px)")}},justifyPositions:R}),f(S,M.Right,{constant:function(t){var e=t.spacing;return{left:"calc(100% + ".concat(e,"px)")}},justifyPositions:R}),f(S,M.CenterHorizontal,{constant:function(t){var e=t.referenceElDocumentPos;return{left:"calc(".concat(e.width/2,"px - 50%)")}},justifyPositions:R}),S);function W(t){var e,n=t.align,r=t.justify,o=t.referenceElDocumentPos,i=t.contentElDocumentPos,a=t.spacing,c=V[n],l=c.justifyPositions[r],s={contentElDocumentPos:i,referenceElDocumentPos:o,spacing:a};return b({},null===(e=c.constant)||void 0===e?void 0:e.call(c,s),{},"function"==typeof l?l(s):l)}function _(t){var e=t.align,n=t.justify,r=t.referenceElDocumentPos,o=t.contentElDocumentPos,i=t.spacing,a=t.windowWidth,c=t.windowHeight,l="".concat(G({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px"),s="".concat(I({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px");return n!==B.Fit?{left:l,top:s}:[M.Left,M.Right,M.CenterHorizontal].includes(e)?{left:l,top:s,bottom:"".concat(c-r.bottom,"px")}:{left:l,top:s,right:"".concat(a-r.right,"px")}}function I(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case M.Left:case M.Right:case M.CenterHorizontal:switch(n){case B.Start:case B.Fit:return o.top;case B.End:return o.top+o.height-r.height;case B.Middle:default:return o.top-(r.height-o.height)/2}case M.CenterVertical:return o.top-(r.height-o.height)/2;case M.Top:return o.top-r.height-i;case M.Bottom:default:return o.top+o.height+i}}function G(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case M.Top:case M.Bottom:case M.CenterVertical:switch(n){case B.End:return o.left+o.width-r.width;case B.Middle:return o.left-(r.width-o.width)/2;case B.Start:case B.Fit:default:return o.left}case M.Left:return o.left-r.width-i;case M.Right:return o.left+o.width+i;case M.CenterHorizontal:default:return o.left-(r.width-o.width)/2}}function X(t){var e=t.left,n=t.windowWidth,r=t.contentWidth;return e>=0&&!(e+r>n)}function K(t){var e=t.top,n=t.windowHeight,r=t.contentHeight;return e>=0&&!(e+r>n)}var U=(f(C={},M.Top,[M.Bottom]),f(C,M.Bottom,[M.Top]),f(C,M.Left,[M.Right]),f(C,M.Right,[M.Left]),f(C,M.CenterHorizontal,[M.Left,M.Right]),f(C,M.CenterVertical,[M.Top,M.Bottom]),C),Z=(f(D={},B.Start,[B.End,B.Middle]),f(D,B.Middle,[B.End,B.Start]),f(D,B.End,[B.Start,B.Middle]),f(D,B.Fit,[B.Middle,B.Start,B.End]),D);function $(){var t=g(["\n              display: none;\n            "]);return $=function(){return t},t}function J(){var t=g(["\n    opacity: 1;\n    position: ",";\n    pointer-events: initial;\n  "]);return J=function(){return t},t}function Y(){var t=g(["\n  position: absolute;\n  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;\n  opacity: 0;\n"]);return Y=function(){return t},t}var q=Object(l.css)(Y()),Q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function tt(t){var e=t.active,n=void 0!==e&&e,i=t.usePortal,a=void 0===i||i,p=t.spacing,b=void 0===p?10:p,g=t.align,j=void 0===g?M.Bottom:g,y=t.justify,v=void 0===y?B.Start:y,O=t.adjustOnMutation,w=void 0!==O&&O,P=t.children,E=t.className,x=t.portalClassName,S=t.refEl,C=h(t,["active","usePortal","spacing","align","justify","adjustOnMutation","children","className","portalClassName","refEl"]),D=m(Object(r.useState)(null),2),A=D[0],F=D[1],z=m(Object(r.useState)(null),2),L=z[0],R=z[1],k=m(Object(r.useState)(0),2),V=k[0],W=k[1],_=o.a.useRef(L);_.current=L;var I=null;if(S&&S.current)I=S.current;else if(A){var G=A.parentNode;G&&G instanceof HTMLElement&&(I=G)}var X=Object(u.g)(),K=w&&n,U=Object(u.d)(I,Q,Date.now,K),Z=Object(u.d)(L,Q,Date.now,K),Y=Object(u.e)(N(I)),tt=Object(u.e)(N(L)),et=Object(u.e)(Object(r.useMemo)((function(){return T(I)}),[I,X,U,n,j,v,V])),nt=Object(u.e)(Object(r.useMemo)((function(){return T(L)}),[L,X,Z,n,j,v,V])),rt=Object(u.f)(v),ot=Object(u.f)(j),it=rt!==v&&(v===B.Fit||rt===B.Fit)||ot!==j&&v===B.Fit;Object(u.c)((function(){it&&W((function(t){return t+1}))}),[it]);var at=m(Object(r.useState)(!1),2),ct=at[0],lt=at[1];if(Object(u.c)((function(){return lt(!0)}),[]),!ct)return null;var st,ut=H({useRelativePositioning:!a,spacing:b,align:j,justify:v,referenceElViewportPos:Y,referenceElDocumentPos:et,contentElViewportPos:tt,contentElDocumentPos:nt}),ft=ut.align,dt=ut.justify,pt=ut.positionCSS,bt=pt.transform,ht=h(pt,["transform"]),gt=Object(l.css)(J(),a?"":"absolute"),mt=a?s.a:r.Fragment,jt=a?{className:x}:{};return st=null==P?null:"function"==typeof P?P({align:ft,justify:dt,referenceElPos:et}):P,o.a.createElement(c.a,{nodeRef:_,in:n,timeout:150,mountOnEnter:!0,unmountOnExit:!0,appear:!0},(function(t){var e;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:F,className:Object(l.css)($())}),o.a.createElement(mt,jt,o.a.createElement("div",d({},C,{className:Object(l.cx)(q,Object(l.css)(ht),(e={},f(e,Object(l.css)({transform:bt}),"entering"===t||"exiting"===t),f(e,gt,"entered"===t),e),E)}),o.a.createElement("div",{ref:R},st))))}))}tt.displayName="Popover",tt.propTypes={children:a.a.oneOfType([a.a.node,a.a.func]),active:a.a.bool,className:a.a.string,align:a.a.oneOf(Object.values(M)),justify:a.a.oneOf(Object.values(B)),refEl:a.a.shape({current:"undefined"!=typeof window?a.a.instanceOf(Element):a.a.any}),usePortal:a.a.bool,portalClassName:a.a.string,spacing:a.a.number,adjustOnMutation:a.a.bool},tt.defaultProps={children:void 0,align:M.Bottom,justify:B.Start,active:!1,usePortal:!0,spacing:10,adjustOnMutation:!1},e.c=tt},nfx3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={default:700,dataGraphic:1138}}},[["81Kt",0,1,2,3,4,6,5,7,12,14,16]]]);