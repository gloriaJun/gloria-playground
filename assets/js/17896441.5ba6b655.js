"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[7918],{53126:(e,t,a)=>{a.d(t,{s:()=>o});var n=a(67294),l=a(92949),r="https://utteranc.es";function o(){var e=(0,l.I)().colorMode,t=(0,n.useRef)(null);return(0,n.useLayoutEffect)((function(){if(t.current){var a=t.current.querySelector(".utterances-frame"),n="github-"+e;if(a)a.contentWindow.postMessage({type:"set-theme",theme:n},r);else{var l=document.createElement("script");l.src=r+"/client.js",l.setAttribute("repo","gloriaJun/gloria-tilog-comment"),l.setAttribute("issue-term","title"),l.setAttribute("theme",n),l.crossOrigin="anonymous",l.async=!0,t.current.appendChild(l)}}}),[e]),n.createElement("div",{ref:t})}},94622:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ve});var n=a(67294),l=a(53126),r=a(1944),o=a(69688),i=n.createContext(null);function s(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(i);if(null===e)throw new o.i6("DocProvider");return e}function d(){var e,t=c(),a=t.metadata,l=t.frontMatter,o=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=o.image)?e:l.image})}var m=a(86010),u=a(87524),v=a(87462),b=a(95999),f=a(32244);function p(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(f.Z,(0,v.Z)({},t,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(f.Z,(0,v.Z)({},a,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){var e=c().metadata;return n.createElement(p,{previous:e.previous,next:e.next})}var E=a(52263),g=a(39960),L=a(80143),C=a(35281),N=a(60373),Z=a(74477);var _={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){var t=_[e.versionMetadata.banner];return n.createElement(t,e)}function x(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(g.Z,{to:a,onClick:l},n.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function H(e){var t,a=e.className,l=e.versionMetadata,r=(0,E.Z)().siteConfig.title,o=(0,L.gA)({failfast:!0}).pluginId,i=(0,N.J)(o).savePreferredVersionName,s=(0,L.Jo)(o),c=s.latestDocSuggestion,d=s.latestVersionSuggestion,u=null!=c?c:(t=d).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,m.Z)(a,C.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(k,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(x,{versionLabel:d.label,to:u.path,onClick:function(){return i(d.name)}})))}function T(e){var t=e.className,a=(0,Z.E)();return a.banner?n.createElement(H,{className:t,versionMetadata:a}):null}function y(e){var t=e.className,a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,m.Z)(t,C.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function A(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){var t=e.lastUpdatedBy;return n.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:C.k.common.lastUpdated},n.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(A,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(U,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(84881),I=a(71526);const B={lastUpdated:"lastUpdated_vwxv"};function O(e){return n.createElement("div",{className:(0,m.Z)(C.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(I.Z,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,m.Z)(C.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M.Z,{editUrl:t})),n.createElement("div",{className:(0,m.Z)("col",B.lastUpdated)},(a||l)&&n.createElement(w,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){var e=c().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,i=o.length>0,s=!!(t||a||r);return i||s?n.createElement("footer",{className:(0,m.Z)(C.k.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(O,{tags:o}),s&&n.createElement(S,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=a(86043),D=a(93743),R=a(63366);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var j=["collapsed"];function q(e){var t=e.collapsed,a=(0,R.Z)(e,j);return n.createElement("button",(0,v.Z)({type:"button"},a,{className:(0,m.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,a.className)}),n.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function J(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,P.u)({initialState:!0}),i=o.collapsed,s=o.toggleCollapsed;return n.createElement("div",{className:(0,m.Z)(z.tocCollapsible,!i&&z.tocCollapsibleExpanded,a)},n.createElement(q,{collapsed:i,onClick:s}),n.createElement(P.z,{lazy:!0,className:z.tocCollapsibleContent,collapsed:i},n.createElement(D.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const G={tocMobile:"tocMobile_ITEo"};function W(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(J,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,m.Z)(C.k.docs.docTocMobile,G.tocMobile)})}var Y=a(39407);function K(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(Y.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:C.k.docs.docTocDesktop})}var Q=a(92503),X=a(39241);function $(e){var t,a,l,r,o=e.children,i=(t=c(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,m.Z)(C.k.docs.docMarkdown,"markdown")},i&&n.createElement("header",null,n.createElement(Q.Z,{as:"h1"},i)),n.createElement(X.Z,null,o))}var ee=a(53791),te=a(48596),ae=a(44996);function ne(e){return n.createElement("svg",(0,v.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function re(){var e=(0,ae.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(g.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ne,{className:le.breadcrumbHomeIcon})))}const oe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(g.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function se(e){var t=e.children,a=e.active,l=e.index,r=e.addMicrodata;return n.createElement("li",(0,v.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,m.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){var e=(0,ee.s1)(),t=(0,te.Ns)();return e?n.createElement("nav",{className:(0,m.Z)(C.k.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(re,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(se,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ie,{href:t.href,isLast:l},t.label))})))):null}const de={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function me(e){var t,a,l,r,o,i,s=e.children,d=(t=c(),a=t.frontMatter,l=t.toc,r=(0,u.i)(),o=a.hide_table_of_contents,i=!o&&l.length>0,{hidden:o,mobile:i?n.createElement(W,null):void 0,desktop:!i||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(K,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,m.Z)("col",!d.hidden&&de.docItemCol)},n.createElement(T,null),n.createElement("div",{className:de.docItemContainer},n.createElement("article",null,n.createElement(ce,null),n.createElement(y,null),d.mobile,n.createElement($,null,s),n.createElement(V,null)),n.createElement(h,null))),d.desktop&&n.createElement("div",{className:"col col--3"},d.desktop))}function ue(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(d,null),n.createElement(me,null,n.createElement(a,null))))}function ve(e){return n.createElement(n.Fragment,null,n.createElement(ue,e),n.createElement(l.s,null))}},942:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=Object.assign({React:n},n)},39407:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(63366),r=a(67294),o=a(86010),i=a(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,o.Z)(s.tableOfContents,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:d,linkActiveClassName:m})))}},93743:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(63366),r=a(67294),o=a(86668),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,l.Z)(e,i);a>=0?t[a].children.push(r):n.push(r)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,l=t.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,r.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,r.useRef)(void 0),a=u();(0,r.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=m(i,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const f=r.memo(b);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,l.Z)(e,p),L=(0,o.L)(),C=null!=h?h:L.tableOfContents.minHeadingLevel,N=null!=E?E:L.tableOfContents.maxHeadingLevel,Z=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:C,maxHeadingLevel:N});return v((0,r.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:C,maxHeadingLevel:N}}),[m,b,C,N])),r.createElement(f,(0,n.Z)({toc:Z,className:i,linkClassName:m},g))}},74477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>o});var n=a(67294),l=a(69688),r=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);