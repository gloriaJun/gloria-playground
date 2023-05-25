"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[3453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=o,f=g["".concat(p,".").concat(u)]||g[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"[Nginx] Reverse Proxy",tags:["nginx","proxy"],date:"2021-01-20T14:31"},p=void 0,c={permalink:"/gloria-tilog/2021/01/20/server/nginx-proxy",source:"@site/blog/server/2021/01-20-nginx-proxy/index.mdx",title:"[Nginx] Reverse Proxy",description:"\uac1c\ubc1c \uc0b0\ucd9c\ubb3c\uc5d0 \ub300\ud558\uc5ec \ud558\ub098\uc758 \uc11c\ube44\uc2a4 \ud3ec\ud2b8\uc5d0\uc11c \uac1c\ubc1c \ube0c\ub79c\uce58\uc5d0 \ub530\ub77c \ub77c\uc6b0\ud305 \ucc98\ub9ac\ub97c \ud558\uc5ec \uc811\uc18d\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \uad6c\uc131\uc744 \ud560 \ud544\uc694\uac00 \uc788\uc5b4\uc11c Proxy \uc124\uc815\uc744 Nginx\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc558\ub2e4.",date:"2021-01-20T14:31:00.000Z",formattedDate:"January 20, 2021",tags:[{label:"nginx",permalink:"/gloria-tilog/tags/nginx"},{label:"proxy",permalink:"/gloria-tilog/tags/proxy"}],readingTime:1.53,hasTruncateMarker:!0,authors:[],frontMatter:{title:"[Nginx] Reverse Proxy",tags:["nginx","proxy"],date:"2021-01-20T14:31"},prevItem:{title:"[CI/CD] Configuration CI (1) - Install Jenkins (master-slave) with nginx proxy",permalink:"/gloria-tilog/2021/05/13/ci/install-ci-jenkins"},nextItem:{title:"[JavaScript] Custom Eslint \ub9cc\ub4e4\uc5b4 \ubc30\ud3ec\ud558\uae30",permalink:"/gloria-tilog/2021/01/18/frontend/custom-eslint-rule"}},s={authorsImageUrls:[]},g=[{value:"nginx.conf",id:"nginxconf",level:2},{value:"Reference",id:"reference",level:2}],m={toc:g},u="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)(u,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uac1c\ubc1c \uc0b0\ucd9c\ubb3c\uc5d0 \ub300\ud558\uc5ec \ud558\ub098\uc758 \uc11c\ube44\uc2a4 \ud3ec\ud2b8\uc5d0\uc11c \uac1c\ubc1c \ube0c\ub79c\uce58\uc5d0 \ub530\ub77c \ub77c\uc6b0\ud305 \ucc98\ub9ac\ub97c \ud558\uc5ec \uc811\uc18d\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \uad6c\uc131\uc744 \ud560 \ud544\uc694\uac00 \uc788\uc5b4\uc11c Proxy \uc124\uc815\uc744 Nginx\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc558\ub2e4.\nnginx\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"reverse proxy"),"\ub97c \ud65c\uc6a9\ud558\uc5ec \uc124\uc815\ud55c \uae30\ub85d"),(0,a.kt)("h2",{id:"nginxconf"},"nginx.conf"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://superuser.com/questions/330194/how-to-i-get-variables-from-location-in-nginx"},"StackOverflow"),"\uc758 \uae00\uc744 \ucc38\uace0\ud558\uc5ec\n",(0,a.kt)("inlineCode",{parentName:"p"},"location"),"\uc758 \uc124\uc815\uc744 \uc815\uaddc\uc2dd \ud328\ud134\uc744 \uc774\uc6a9\ud558\uc5ec \uc815\uc758\ud55c \ud6c4\uc5d0 \uc77d\uc5b4\ub4e4\uc778 \ubcc0\uc218\ub97c \uae30\ubc18\uc73c\ub85c \uacbd\ub85c\ub97c \ucc3e\uc544\uc11c static \ud398\uc774\uc9c0\ub97c \ubcf4\uc5ec\uc8fc\ub3c4\ub85d \ucc98\ub9ac\ud558\uc600\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n    listen       10080;\n    server_name _;\n\n    root         /home1/irteam/deploy/storybook;\n    index        index.html;\n\n    location ~* ^/(?<branch>(\\w+))/(.*) {\n        root         /home1/irteam/deploy/storybook;\n    }\n\n    location / {\n        if ($arg_branch) {\n            rewrite ^ /$arg_branch break;\n        }\n\n        rewrite ^ /master break;\n    }\n}\n")),(0,a.kt)("p",null,"\uc704\uc640 \uac19\uc774 \uc124\uc815 \ud6c4\uc5d0, nginx\ub97c \uc7ac\uae30\ub3d9 \ud6c4 \ud14c\uc2a4\ud2b8\ub97c \ud574\ubcf4\uba74.."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\ub3c4\uba54\uc778 \uc8fc\uc18c"),"\ub85c \uc811\uadfc\uc744 \ud558\uac8c \ub418\uba74 \uc544\ub798\uc640 \uac19\uc774 \ube4c\ub4dc\ud558\uc5ec \ubc30\ud3ec\ud574\ub454 \uc2a4\ud1a0\ub9ac\ubd81 \ud654\uba74\uc73c\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub418\uc5b4 \ubcf4\uc5ec\uc9c4\ub2e4.\n",(0,a.kt)("img",{alt:"master",src:n(53473).Z,width:"1806",height:"828"})),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"{\ub3c4\uba54\uc778 \uc8fc\uc18c}?branch=dev"),"\ub97c \uc694\uccad\uc744 \ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"**location ~_ ^/(?<branch>(\\w+))/(._)**")," \uc5d0 \uc815\uc758\ud55c\nroot \uacbd\ub85c \ud558\uc704\uc5d0\uc11c \ud574\ub2f9 \ud30c\uc77c\uc744 \ucc3e\uc544\uc11c \ub178\ucd9c\ud574\uc900\ub2e4.\n",(0,a.kt)("img",{alt:"dev",src:n(84947).Z,width:"1608",height:"344"})),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentutorials.org/module/384/4508"},"Nginx-\ubcc0\uc218")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer88.tistory.com/299/"},"NGINX\uc5d0 \ub300\ud55c \uc815\ub9ac #Upstream #Reverse Proxy #Proxy_pass"))))}f.isMDXComponent=!0},84947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dev-f2238060d120790977d5f7bad22f6694.png"},53473:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/master-eefca2de754104dc23cdf7949b02c08a.png"}}]);