"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[5914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"(CSS) Flexbox \uc608\uc81c \ubaa8\uc74c",tags:["css","flexbox","site"],date:"2018-10-29T10:28"},s=void 0,p={permalink:"/gloria-tilog/2018/10/29/frontend/flexbox",source:"@site/blog/frontend/2018/10-29-flexbox.mdx",title:"(CSS) Flexbox \uc608\uc81c \ubaa8\uc74c",description:"- A Complete Guide to Flexbox",date:"2018-10-29T10:28:00.000Z",formattedDate:"October 29, 2018",tags:[{label:"css",permalink:"/gloria-tilog/tags/css"},{label:"flexbox",permalink:"/gloria-tilog/tags/flexbox"},{label:"site",permalink:"/gloria-tilog/tags/site"}],readingTime:.43,hasTruncateMarker:!0,authors:[],frontMatter:{title:"(CSS) Flexbox \uc608\uc81c \ubaa8\uc74c",tags:["css","flexbox","site"],date:"2018-10-29T10:28"},prevItem:{title:"[JavaScript] this",permalink:"/gloria-tilog/2018/10/29/frontend/js-this"},nextItem:{title:"[JavaScript] \ubb38\uc11c\uac00 \ub85c\ub529\ub418\ub294 \uc2dc\uc810",permalink:"/gloria-tilog/2018/10/25/frontend/js-onload"}},c={authorsImageUrls:[]},f=[],u={toc:f},d="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-complete-guide-to-flexbox"},"A Complete Guide to Flexbox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"A Complete Guide to Flexbox"))),(0,a.kt)("h1",{id:"flexbox\ub85c-\ub9cc\ub4e4-\uc218-\uc788\ub294-10\uac00\uc9c0-\ub808\uc774\uc544\uc6c3"},"flexbox\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 10\uac00\uc9c0 \ub808\uc774\uc544\uc6c3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://d2.naver.com/helloworld/8540176"},"flexbox\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub294 10\uac00\uc9c0 \ub808\uc774\uc544\uc6c3"))),(0,a.kt)("h1",{id:"responsive-grid-width-flexbox"},"Responsive Grid width Flexbox"),(0,a.kt)("p",{"data-height":"265","data-theme-id":"0","data-slug-hash":"jcLlp","data-default-tab":"html,result","data-user":"irinakramer","data-embed-version":"2","data-pen-title":"Responsive Grid with Flexbox",class:"codepen"},"See the Pen"," ",(0,a.kt)("a",{href:"https://codepen.io/irinakramer/pen/jcLlp/"},"Responsive Grid with Flexbox")," ","by Irina K (",(0,a.kt)("a",{href:"https://codepen.io/irinakramer"},"@irinakramer"),") on"," ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,a.kt)("script",{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}))}m.isMDXComponent=!0}}]);