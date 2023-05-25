"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[4989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||g[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"[JavaScript] base64\ub85c \uc778\ucf54\ub529\ub41c \uc774\ubbf8\uc9c0\ub97c file object\ub85c \ubcc0\ud658\ud558\uae30",tags:["JavaScript","base64","image","file","example"],date:"2018-03-16T13:35"},s=void 0,c={permalink:"/gloria-tilog/2018/03/16/frontend/js-base64-to-file",source:"@site/blog/frontend/2018/03-16-js-base64-to-file.mdx",title:"[JavaScript] base64\ub85c \uc778\ucf54\ub529\ub41c \uc774\ubbf8\uc9c0\ub97c file object\ub85c \ubcc0\ud658\ud558\uae30",description:"base64\ub85c \uc778\ucf54\ub529\ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 file object\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 blob\uc73c\ub85c \ubcc0\ud658 \ud6c4\uc5d0 formData\uc5d0 \ub2f4\uc544\uc11c \ud30c\uc77c\ub85c \ubcc0\ud658",date:"2018-03-16T13:35:00.000Z",formattedDate:"March 16, 2018",tags:[{label:"JavaScript",permalink:"/gloria-tilog/tags/java-script"},{label:"base64",permalink:"/gloria-tilog/tags/base-64"},{label:"image",permalink:"/gloria-tilog/tags/image"},{label:"file",permalink:"/gloria-tilog/tags/file"},{label:"example",permalink:"/gloria-tilog/tags/example"}],readingTime:1.74,hasTruncateMarker:!0,authors:[],frontMatter:{title:"[JavaScript] base64\ub85c \uc778\ucf54\ub529\ub41c \uc774\ubbf8\uc9c0\ub97c file object\ub85c \ubcc0\ud658\ud558\uae30",tags:["JavaScript","base64","image","file","example"],date:"2018-03-16T13:35"},prevItem:{title:"[VueJS] \uac1c\ubc1c \ud658\uacbd \uad6c\uc131",permalink:"/gloria-tilog/2018/03/19/frontend/vuejs-nuxt-start"},nextItem:{title:"[VueJS] springboot \uc5f0\ub3d9",permalink:"/gloria-tilog/2018/03/15/frontend/vuejs-spring"}},p={authorsImageUrls:[]},m=[{value:"\uc608\uc81c",id:"\uc608\uc81c",level:2}],g={toc:m},u="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"base64\ub85c \uc778\ucf54\ub529\ub41c \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 file object\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 blob\uc73c\ub85c \ubcc0\ud658 \ud6c4\uc5d0 formData\uc5d0 \ub2f4\uc544\uc11c \ud30c\uc77c\ub85c \ubcc0\ud658"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  /**\n   * \uc804\ub2ec\ubc1b\uc740 \uc774\ubbf8\uc9c0\ub97c base64\ub85c \uc778\ucf54\ub529\ud55c\ub2e4\n   * @param file - \uc774\ubbf8\uc9c0 \ud30c\uc77c \ub610\ub294 \uc774\ubbf8\uc9c0 URL\n   * @param maxWidth - \uc778\ucf54\ub529 \uc2dc\uc758 \uc774\ubbf8\uc9c0 max width \uc0ac\uc774\uc988\n   * @returns {Promise<any>}\n   */\n  encode(file, maxWidth) {\n    const re = new RegExp('.(gif|jpg|jpeg|tiff|png|ico)$', 'i');\n    let name = /[^(/|\\\\)]*$/.exec(url)[0];\n    let type = re.test(name) ? re.exec(name)[0].replace('.', '') : 'jpg';\n\n    return new Promise((resolve, reject) => {\n      let image = new Image();\n\n      image.onload = function (event) {\n        let canvas = document.createElement('canvas');\n        // draw canvas\n        canvas.width = image.naturalWidth;\n        canvas.height = image.naturalHeight;\n        canvas.getContext('2d').drawImage(image, 0, 0);\n\n        let dataUrl = canvas.toDataURL('image/' + type);\n        resolve({\n          name: name,\n          type: type,\n          dataUrl: dataUrl.split(',')[1],\n        });\n      };\n      image.onerror = function () {\n        let msg = `\"${file}\"\uc744 \ub85c\ub529\ud558\ub294 \ub370 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.`;\n        alert(msg);\n        console.error(msg);\n      };\n      image.crossOrigin = 'anonymous';\n      image.src = url;\n    });\n  },\n  /**\n   * \uc774\ubbf8\uc9c0 url\uc744 blob \ud30c\uc77c\ub85c \ubcc0\ud658\ud558\uc5ec \uc804\ub2ec\ud55c\ub2e4\n   * @param url\n   * @returns {Promise<any>}\n   */\n  toBlob(url) {\n    return new Promise((resolve, reject) => {\n      this.encode(url).then((res) => {\n        let byteString = atob(res.dataUrl);\n        let ab = new ArrayBuffer(byteString.length);\n        let ia = new Uint8Array(ab);\n\n        for (let i = 0; i < byteString.length; i++) {\n          ia[i] = byteString.charCodeAt(i);\n        }\n\n        // write the array buffer to blob\n        let blob = new Blob([ab], { type: 'image/' + res.type });\n\n        let formData = new FormData();\n        formData.append('file', blob, res.name);\n        resolve(formData.get('file'));\n      });\n    });\n  },\n};\n")),(0,o.kt)("h2",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,o.kt)("p",{"data-height":"265","data-theme-id":"0","data-slug-hash":"JLKpxm","data-default-tab":"js,result","data-user":"gloriaJun","data-embed-version":"2","data-pen-title":"image url to file",class:"codepen"},"See the Pen"," ",(0,o.kt)("a",{href:"https://codepen.io/gloriaJun/pen/JLKpxm/"},"image url to file")," by gloria (",(0,o.kt)("a",{href:"https://codepen.io/gloriaJun"},"@gloriaJun"),") on"," ",(0,o.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,o.kt)("script",{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}))}f.isMDXComponent=!0}}]);