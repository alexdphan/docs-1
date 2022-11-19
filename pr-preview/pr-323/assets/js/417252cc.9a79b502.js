"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9240],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(v,a(a({ref:r},s),{},{components:t})):n.createElement(v,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7941:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=t(3117),o=(t(7294),t(3905));const i={sidebar_label:"Recipe Book Overview"},a="\ud83e\udd57 Recipe Book Overview",l={unversionedId:"developers/recipe-book",id:"developers/recipe-book",title:"\ud83e\udd57 Recipe Book Overview",description:"\ud83d\udcd6 Overview",source:"@site/docs/developers/recipe-book.mdx",sourceDirName:"developers",slug:"/developers/recipe-book",permalink:"/pr-preview/pr-323/developers/recipe-book",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-book.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Recipe Book Overview"},sidebar:"developers",previous:{title:"Recipe Book",permalink:"/pr-preview/pr-323/category/recipe-book"},next:{title:"Scaffold your Rollup",permalink:"/pr-preview/pr-323/developers/recipe-scaffold"}},p={},c=[{value:"\ud83d\udcd6 Overview",id:"-overview",level:2},{value:"\ud83d\udcbb Prerequisites",id:"-prerequisites",level:2},{value:"\ud83e\uddf1 Table of Contents",id:"-table-of-contents",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-recipe-book-overview"},"\ud83e\udd57 Recipe Book Overview"),(0,o.kt)("h2",{id:"-overview"},"\ud83d\udcd6 Overview"),(0,o.kt)("p",null,"In this tutorial, we are going to build a blockchain for your favorite recipes. The goal of this tutorial is to create a Rollmint rollup with a module that allows you to write and read data to and from your application-specific blockchain. The end user will be able to submit new recipes and read them from the blockchain."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./gm-world"},(0,o.kt)("inlineCode",{parentName:"a"},"gm world")," tutorial"),", we defined a new API endpoint and modified a keeper query function to return static data. In this tutorial, we will be modifying the state with transactions (Cosmos SDK messages) that are routed to a module and its message handlers, which are sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," blockchain."),(0,o.kt)("h2",{id:"-prerequisites"},"\ud83d\udcbb Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/gm-world"},"gm world Tutorial")," (recommended)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/environment#install-golang"},"Install Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/celestia-node"},"Install Celestia Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-setup#install-ignite-cli"},"Install Ignite CLI"))),(0,o.kt)("h2",{id:"-table-of-contents"},"\ud83e\uddf1 Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/recipe-scaffold"},"Scaffolding your Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/recipe-message"},"Messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/recipe-keeper"},"Keepers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-323/developers/recipe-query"},"Querying Recipes"))))}u.isMDXComponent=!0}}]);