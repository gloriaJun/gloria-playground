"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[1846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),p=a(91980),s=a(67392),u=a(50012);function c(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,p._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function k(e){var t,a,r,l,i=e.defaultValue,o=e.queryString,p=void 0!==o&&o,s=e.groupId,c=m(e),k=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:c})})),b=k[0],f=k[1],h=g({queryString:p,groupId:s}),y=h[0],v=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),r=a[0],l=a[1],[r,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],T=N[1],x=function(){var e=null!=y?y:w;return d({value:e,tabValues:c})?e:null}();return(0,n.useLayoutEffect)((function(){x&&f(x)}),[x]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),v(e),T(e)}),[v,T,c]),tabValues:c}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,a=e.block,o=e.selectedValue,p=e.selectValue,s=e.tabValues,u=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==o&&(c(t),p(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,n=u.indexOf(e.currentTarget)+1;a=null!=(r=u[n])?r:u[0];break;case"ArrowLeft":var l,i=u.indexOf(e.currentTarget)-1;a=null!=(l=u[i])?l:u[u.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function v(e){var t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},88673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(74866),o=a(85162),p=["components"],s={title:"realworld\ub97c \uc774\uc6a9\ud558\uc5ec react app \ub9cc\ub4e4\uae30 - Step1: Installation",tags:["react","realword","TypeScript"],date:new Date("2021-07-01T00:00:00.000Z")},u=void 0,c={permalink:"/gloria-tilog/side-project/realword/20210631-react-app-with-realword-prepare",source:"@site/blog/side-project/realword/20210631-react-app-with-realword-prepare.mdx",title:"realworld\ub97c \uc774\uc6a9\ud558\uc5ec react app \ub9cc\ub4e4\uae30 - Step1: Installation",description:"realworld\uc640 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\uc220 \uc2a4\ud14d\uc744 \uc774\uc6a9\ud574 react app\uc744 \ub9cc\ub4e4\uace0,",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"react",permalink:"/gloria-tilog/tags/react"},{label:"realword",permalink:"/gloria-tilog/tags/realword"},{label:"TypeScript",permalink:"/gloria-tilog/tags/type-script"}],readingTime:5.72,hasTruncateMarker:!0,authors:[],frontMatter:{title:"realworld\ub97c \uc774\uc6a9\ud558\uc5ec react app \ub9cc\ub4e4\uae30 - Step1: Installation",tags:["react","realword","TypeScript"],date:"2021-07-01T00:00:00.000Z"},prevItem:{title:"realworld\ub97c \uc774\uc6a9\ud558\uc5ec react app \ub9cc\ub4e4\uae30 - Step2: Route",permalink:"/gloria-tilog/side-project/realword/20211007-react-app-with-realword-route"},nextItem:{title:"[CI/CD] Configuration CI (2) - Install Jenkins (master-slave) Plugins",permalink:"/gloria-tilog/2021/05/14/ci/configuration-ci-jenkins"}},m={authorsImageUrls:[]},d=[{value:"Create React App",id:"create-react-app",level:2},{value:"Configure yarn2",id:"configure-yarn2",level:2},{value:"Configure ESLint, Prettier",id:"configure-eslint-prettier",level:2},{value:"Configure lint-staged, husky",id:"configure-lint-staged-husky",level:4},{value:"Configure commitlint",id:"configure-commitlint",level:2},{value:"Configure storybook",id:"configure-storybook",level:3},{value:"Trouble Shooting",id:"trouble-shooting",level:2},{value:"husky - Hooks not running",id:"husky---hooks-not-running",level:3},{value:"ERROR in ./.yarn/$$virtual/@pmmmwh-react-refresh-webpack-plugin-virtual...",id:"error-in-yarnvirtualpmmmwh-react-refresh-webpack-plugin-virtual",level:3},{value:"lint Error",id:"lint-error",level:3}],g={toc:d},k="wrapper";function b(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)(k,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gothinkster.github.io/realworld/docs/intro"},"realworld"),"\uc640 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\uc220 \uc2a4\ud14d\uc744 \uc774\uc6a9\ud574 react app\uc744 \ub9cc\ub4e4\uace0,\n\ud574\ub2f9 \uc11c\ube44\uc2a4\ub97c \ubc30\ud3ec\ud574\uac00\ub294 \uacfc\uc815\uc744 \uae30\ub85d\ud558\uae30 \uc704\ud55c \uae00\uc774\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yarn2"),(0,l.kt)("li",{parentName:"ul"},"TypeScript v4.3.x"),(0,l.kt)("li",{parentName:"ul"},"react-scripts v4.x.x"),(0,l.kt)("li",{parentName:"ul"},"React v17.x.x"),(0,l.kt)("li",{parentName:"ul"},"React Router v 6.x"),(0,l.kt)("li",{parentName:"ul"},"emotion v11.4.x"),(0,l.kt)("li",{parentName:"ul"},"Storybook v6.3.x"),(0,l.kt)("li",{parentName:"ul"},"@testing-library/react v12.x.x")),(0,l.kt)("h2",{id:"create-react-app"},"Create React App"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"create-react-app"),"\uc744 \uc774\uc6a9\ud574\uc11c \uae30\ubcf8\uc801\uc778 react app\uc744 \uc0dd\uc131\ud55c\ub2e4.\nTypeScript\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"--template typescript")," \uc635\uc158\uc744 \ucd94\uac00\ud574\uc8fc\uc5c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app --template typescript\n")),(0,l.kt)("h2",{id:"configure-yarn2"},"Configure yarn2"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn2"),"\ub97c \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc124\uc815\uc744 \ud574\uc8fc\uc5c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc124\uc815 \uacfc\uc815 \ucc38\uace0 : ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gloriaJun/til/issues/125"},"https://github.com/gloriaJun/til/issues/125"))),(0,l.kt)("h2",{id:"configure-eslint-prettier"},"Configure ESLint, Prettier"),(0,l.kt)("p",null,"eslint\uc640 prettier \uc124\uc815\uc744 \uc704\ud574 \uc544\ub798\uc640 \uac19\uc740 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud55c\ub2e4."),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier\n")))),(0,l.kt)("p",null,"\uc544\ub798\uc758 \ud328\ud0a4\uc9c0\ub4e4\uc740 \uac01\uc790 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc815\uc758\ud558\ub294 \uaddc\uce59\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\ub2e4."),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D eslint-config-react eslint-import-resolver-babel-module eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev eslint-config-react eslint-import-resolver-babel-module eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D eslint-config-react eslint-import-resolver-babel-module eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".eslint.rc : ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-eslint-rc"},"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-eslint-rc")),(0,l.kt)("li",{parentName:"ul"},".prettierrc : ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-prettierrc"},"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-prettierrc"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"package.json"),"\uc5d0 lint\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud55c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \ucd94\uac00\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n    "prelint": "tsc --noEmit",\n    "lint": "eslint --ext=jsx,ts,tsx src",\n')),(0,l.kt)("h4",{id:"configure-lint-staged-husky"},"Configure lint-staged, husky"),(0,l.kt)("p",null,"git stage\uc5d0 \uc62c\ub77c\uac04 \ud30c\uc77c\uc5d0 \ub300\ud574 git hook\uc744 \uc774\uc6a9\ud574 lint\ub97c \uc218\ud589\ud558\uae30 \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged"),"\uc640 ",(0,l.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/?id=install-1"},"husky"),"\ub97c \uc124\uce58\ud55c\ub2e4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud55c\ub2e4.")),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install husky lint-staged --dev\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add husky lint-staged --dev\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add husky lint-staged --dev\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},".lintstagedrc.js")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-lintstagedrc-js"},"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-lintstagedrc-js")," \uc640 \uac19\uc774 \uc815\uc758\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"husky hook\uc744 \uc0dd\uc131\ud55c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx husky install\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"commit \uc774\uc804\uc5d0 lint\ub97c \uc218\ud589\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},".husky/pre-commit")," \ud30c\uc77c\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud55c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'npx husky add .husky/pre-commit "yarn lint-staged"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nyarn lint-staged\n')),(0,l.kt)("h2",{id:"configure-commitlint"},"Configure commitlint"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint"},"commitlint"),"\ub294 git hook\uc744 \uc774\uc6a9\ud558\uc5ec commit \uba54\uc2dc\uc9c0\uc5d0 \ub300\ud55c \ucee4\ubc0b \uba54\uc2dc\uc9c0 \uc2a4\ud0c0\uc77c \uccb4\ud06c\ub97c \uc704\ud55c \ud328\ud0a4\uc9c0\uc774\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud55c\ub2e4.")),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @commitlint/cli @commitlint/config-conventional\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @commitlint/cli @commitlint/config-conventional\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @commitlint/cli @commitlint/config-conventional\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},".commitlintrc.js")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-commitlintrc-js%EC%99%80"},"https://gist.github.com/gloriaJun/fd5dd389cf727faba1ad66a3cb7427ee#file-commitlintrc-js\uc640")," \uac19\uc774 \uc815\uc758\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},".husky/commit-msg")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uace0 \uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ud55c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx commitlint --edit $1\n")),(0,l.kt)("h3",{id:"configure-storybook"},"Configure storybook"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://storybook.js.org/docs/react/get-started/install"},"storybook"),"\uc744 \uc124\uce58\ud55c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx sb init\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"package.json\uc758 \uc544\ub798\uc640 \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"eslintConfig")," \ud56d\ubaa9\uc5d0 \uc815\uc758\ub41c \ubd80\ubd84\uc744 ",(0,l.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," \uc124\uc815 \ud30c\uc77c\ub85c \uc62e\uaca8\uc11c \uc815\uc758\ud574\uc900\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},' "eslintConfig": {\n    "overrides": [\n      {\n        "files": [\n          "**/*.stories.*"\n        ],\n        "rules": {\n          "import/no-anonymous-default-export": "off"\n        }\n      }\n    ]\n  },\n')),(0,l.kt)("p",null,"\uc2a4\ud1a0\ub9ac\ubd81\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\uac00 \uc644\ub8cc\ub418\uace0, \uc544\ub798\uc640 \uac19\uc774 \uc2e4\ud589\ud558\uc5ec \uc2a4\ud1a0\ub9ac\ubd81 \uc11c\ube44\uc2a4\uac00 \uae30\ub3d9\uc774 \uc798 \ub418\ub294 \uc9c0 \ud655\uc778\ud574\ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts Storybook in development mode\nnpm run storybook\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts Storybook in development mode\nyarn storybook\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Starts Storybook in development mode\npnpm run storybook\n")))),(0,l.kt)("p",null,"\ud574\ub2f9 \uacfc\uc815\uae4c\uc9c0 \ubb38\uc81c\uc5c6\uc774 \uc218\ud589\uc774 \ub418\uc5c8\ub2e4\uba74, react-app \uc0dd\uc131\uc740 \uc644\ub8cc\ub41c \uac83\uc774\ub2e4."),(0,l.kt)("h2",{id:"trouble-shooting"},"Trouble Shooting"),(0,l.kt)("h3",{id:"husky---hooks-not-running"},"husky - Hooks not running"),(0,l.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \uba54\uc2dc\uc9c0\ub97c \ubcf4\uc5ec\uc8fc\uba70 husky\uac00 \ub3d9\uc791\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4\uba74....\n\uc815\uc758\ud55c hook \ud30c\uc77c\uc758 \ud30c\uc77c \uad8c\ud55c\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"chmod +x .husky/<hookname>"),"\uc744 \uc218\ud589\ud558\uc5ec \uc2e4\ud589 \uad8c\ud55c\uc744 \ucd94\uac00\ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u2570\u2500\u276f git ci -m \"chore: add husky\"\n\ud78c\ud2b8: '.husky/pre-commit' \ud6c4\ud06c\uac00 \uc2e4\ud589 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc9c0 \uc54a\uc544\uc11c, \ubb34\uc2dc\ub429\ub2c8\ub2e4.\n\ud78c\ud2b8: \uc774 \uacbd\uace0\ub294 `git config advice.ignoredHook false` \uba85\ub839\uc73c\ub85c \ub04c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n[master af6b6e3] chore: add husky\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 .husky/pre-commit\n")),(0,l.kt)("h3",{id:"error-in-yarnvirtualpmmmwh-react-refresh-webpack-plugin-virtual"},"ERROR in ./.yarn/$$virtual/@pmmmwh-react-refresh-webpack-plugin-virtual..."),(0,l.kt)("p",null,"\uc2a4\ud1a0\ub9ac\ubd81 \uc2e4\ud589 \uc911\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uba74.."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ERROR in Failed to load config "react-app" to extend from.\nReferenced from: /Users/user/Documents/mio/my-app/package.json\n\nERROR in ./.yarn/$$virtual/@pmmmwh-react-refresh-webpack-plugin-virtual-5ef0209fe8/0/cache/@pmmmwh-react-refresh-webpack-plugin-npm-0.4.3-5375cf6b6f-718853bf7b.zip/node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js\nModule not found: Error: @pmmmwh/react-refresh-webpack-plugin tried to access webpack-hot-middleware (a peer dependency) but it isn\'t provided by its ancestors; this makes the require call ambiguous and unsound.\n\nRequired package: webpack-hot-middleware (via "webpack-hot-middleware/client")\nRequired by: @pmmmwh/react-refresh-webpack-plugin@virtual:aa8e2a7880c7d78a363a64638c8d08e1ed334a2ec81820e6145b829d0a51f0466091afc671f5cadd8190c27d433059941023876a9c0e48dc23dca7c6014ea052#npm:0.4.3 (via /Users/user/Documents/mio/my-app/.yarn/$$virtual/@pmmmwh-react-refresh-webpack-plugin-virtual-5ef0209fe8/0/cache/@pmmmwh-react-refresh-webpack-plugin-npm-0.4.3-5375cf6b6f-718853bf7b.zip/node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js)\nAncestor breaking the chain: @storybook/preset-create-react-app@virtual:ddccc941eb8b35cd4b898a64351d8bba4ecc85eb47e8f1b36dce7852d6c3635665e0fc5464861f723d175edb2248ce0fa54dfefb9b5e4d2fdaef4b2353c4aa82#npm:3.1.7\n')),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58 \ud6c4, \ub2e4\uc2dc \uae30\ub3d9\ud558\uc5ec \ud655\uc778\ud55c\ub2e4."),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D  webpack-hot-middleware\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev webpack-hot-middleware\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D webpack-hot-middleware\n")))),(0,l.kt)("h3",{id:"lint-error"},"lint Error"),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc2e4\ud589 \ud6c4, ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn lint"),"\ub97c \uc218\ud589\ud558\uba74 \uc544\ub798 \uc608\uc2dc\uc640 \uac19\uc774 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/Users/user/Documents/mio/my-app/src/App.test.tsx\n  2:1  error  There should be at least one empty line between import groups  import/order\n  8:3  error  Unsafe call of an `any` typed value                            @typescript-eslint/no-unsafe-call\n\n/Users/user/Documents/mio/my-app/src/App.tsx\n  1:1  error  There should be at least one empty line between import groups  import/order\n\n/Users/user/Documents/mio/my-app/src/index.tsx\n   2:1   error  There should be at least one empty line between import groups                                                                 import/order\n   7:1   error  Caution: `ReactDOM` also has a named export `render`. Check if you meant to write `import {render} from 'react-dom'` instead  import/no-named-as-default-member\n  11:34  error  Insert `,`                                                                                                                    prettier/prettier\n// ...SKIP\n")),(0,l.kt)("p",null,"\uc774 \ubd80\ubd84\uc740 \ucee4\uc2a4\ud140\ud558\uc5ec \uc815\uc758\ub41c lint \uaddc\uce59\uacfc \uc2a4\ud1a0\ub9ac\ubd81\uacfc cra\uc5d0\uc11c \uc0dd\uc131\ud558\uc5ec \uc815\uc758\ud55c \ucf54\ub529 \uc2a4\ud0c0\uc77c\uc774 \ub9de\uc9c0 \uc54a\uc544\uc11c \ubc1c\uc0dd\ud558\ub294 \ubd80\ubd84\uc774\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 \uc544\ub798\uc758 \uad6c\ubb38\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub294.."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// App.test.tsx\nexpect(linkElement).toBeInTheDocument();\n\n// Property 'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'.ts(2339)\n//   9:3  error  Unsafe call of an `any` typed value  @typescript-eslint/no-unsafe-call\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yarn add -D @types/testing-library__jest-dom"),"\ub97c \uc2e4\ud589 \ud6c4\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"tsconfig.json"),"\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd94\uac00\ud574\uc8fc\uc5b4 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'// tsconfig.json\n    "types": [\n      "@types/jest",\n      "@types/testing-library__jest-dom",\n    ]\n')))}b.isMDXComponent=!0}}]);