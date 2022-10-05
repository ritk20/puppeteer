"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=p,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const o={sidebar_label:"Puppeteer.connect"},i="Puppeteer.connect() method",c={unversionedId:"api/puppeteer.puppeteer.connect",id:"version-18.1.0/api/puppeteer.puppeteer.connect",title:"Puppeteer.connect() method",description:"This method attaches Puppeteer to an existing browser instance.",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.puppeteer.connect.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.connect",permalink:"/api/puppeteer.puppeteer.connect",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"Puppeteer.connect"},sidebar:"sidebar",previous:{title:"Puppeteer.clearCustomQueryHandlers",permalink:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"},next:{title:"Puppeteer.customQueryHandlerNames",permalink:"/api/puppeteer.puppeteer.customqueryhandlernames"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:u};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",p({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"puppeteerconnect-method"}),"Puppeteer.connect() method"),(0,n.kt)("p",null,"This method attaches Puppeteer to an existing browser instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"class Puppeteer {\n  connect(options: ConnectOptions): Promise<Browser>;\n}\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"/api/puppeteer.connectoptions"}),"ConnectOptions")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Set of configurable options to set on the browser.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.browser"}),"Browser"),">"),(0,n.kt)("p",null,"Promise which resolves to browser instance."),(0,n.kt)("h2",p({},{id:"remarks"}),"Remarks"))}m.isMDXComponent=!0}}]);