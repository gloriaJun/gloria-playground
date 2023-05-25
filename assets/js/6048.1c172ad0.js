"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[6048],{39058:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(63366),l=a(67294),n=a(86010),o=a(7961),i=a(87524),s=a(39960),m=a(95999);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function u(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))})))))}var d=a(13102);function g(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return l.createElement(d.Zo,{component:g,props:e})}function h(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(u,{sidebar:t}):null}var p=["sidebar","toc","children"];function f(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,p),m=t&&t.items.length>0;return l.createElement(o.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},30390:(e,t,a)=>{a.d(t,{Z:()=>R});var r=a(67294),l=a(86010),n=a(9460),o=a(44996);function i(e){var t,a=e.children,l=e.className,i=(0,n.C)(),s=i.frontMatter,m=i.assets,c=(0,o.C)().withBaseUrl,u=null!=(t=m.image)?t:s.image;return r.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(39960);const m={title:"title_f1Hy"};function c(e){var t=e.className,a=(0,n.C)(),o=a.metadata,i=a.isBlogPostPage,c=o.permalink,u=o.title,d=i?"h1":"h2";return r.createElement(d,{className:(0,l.Z)(m.title,t),itemProp:"headline"},i?u:r.createElement(s.Z,{itemProp:"url",to:c},u))}var u=a(95999),d=a(88824);const g={container:"container_mt6G"};function v(e){var t,a=e.readingTime,l=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,l(a))}function h(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return r.createElement(r.Fragment,null," \xb7 ")}function f(e){var t=e.className,a=(0,n.C)().metadata,o=a.date,i=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},r.createElement(h,{date:o,formattedDate:i}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(v,{readingTime:s})))}function b(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function E(e){var t=e.author,a=e.className,n=t.name,o=t.title,i=t.url,s=t.imageURL,m=t.email,c=i||m&&"mailto:"+m||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(b,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){var t=e.className,a=(0,n.C)(),o=a.metadata.authors,i=a.assets;if(0===o.length)return null;var s=o.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},o.map((function(e,t){var a;return r.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(a=i.authorsImageUrls[t])?a:e.imageURL})}))})))}function _(){return r.createElement("header",null,r.createElement(c,null),r.createElement(f,null),r.createElement(N,null))}var Z=a(18780),k=a(39241);function I(e){var t=e.children,a=e.className,o=(0,n.C)().isBlogPostPage;return r.createElement("div",{id:o?Z.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},r.createElement(k.Z,null,t))}var C=a(84881),T=a(71526),w=a(87462),y=a(63366),F=["blogPostTitle"];function L(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){var t=e.blogPostTitle,a=(0,y.Z)(e,F);return r.createElement(s.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(L,null))}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function M(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,o=t.tags,i=t.title,s=t.editUrl,m=t.hasTruncateMarker,c=!a&&m,u=o.length>0;return u||c||s?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",a&&A.blogPostFooterDetailsFull)},u&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement(T.Z,{tags:o})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(C.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":u})},r.createElement(B,{blogPostTitle:i,to:t.permalink}))):null}function R(e){var t=e.children,a=e.className,o=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(i,{className:(0,l.Z)(o,a)},r.createElement(_,null),r.createElement(I,null,t),r.createElement(M,null))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var r=a(67294),l=a(69688),n=r.createContext(null);function o(e){var t=e.children,a=e.content,l=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==l&&l});return r.createElement(n.Provider,{value:o},t)}function i(){var e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var r=a(67294),l=a(52263),n=["zero","one","two","few","many","other"];function o(e){return n.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);