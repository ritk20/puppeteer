"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,b=f["".concat(i,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={sidebar_label:"BrowserContext.pages"},s="BrowserContext.pages() method",i={unversionedId:"api/puppeteer.browsercontext.pages",id:"version-18.1.0/api/puppeteer.browsercontext.pages",title:"BrowserContext.pages() method",description:"An array of all pages inside the browser context.",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.browsercontext.pages.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.pages",permalink:"/api/puppeteer.browsercontext.pages",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"BrowserContext.pages"},sidebar:"sidebar",previous:{title:"BrowserContext.overridePermissions",permalink:"/api/puppeteer.browsercontext.overridepermissions"},next:{title:"BrowserContext.targets",permalink:"/api/puppeteer.browsercontext.targets"}},l={},c=[],u={toc:c};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browsercontextpages-method"}),"BrowserContext.pages() method"),(0,n.kt)("p",null,"An array of all pages inside the browser context."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class BrowserContext {\n  pages(): Promise<Page[]>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.page"}),"Page"),"[","]",">"),(0,n.kt)("p",null,"Promise which resolves to an array of all open pages. Non visible pages, such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"background_page"'),", will not be listed here. You can find them using ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.target.page"}),"the target page"),"."))}f.isMDXComponent=!0}}]);