"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"Page.goForward"},p="Page.goForward() method",l={unversionedId:"api/puppeteer.page.goforward",id:"version-18.1.0/api/puppeteer.page.goforward",title:"Page.goForward() method",description:"This method navigate to the next page in history.",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.page.goforward.md",sourceDirName:"api",slug:"/api/puppeteer.page.goforward",permalink:"/api/puppeteer.page.goforward",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"Page.goForward"},sidebar:"sidebar",previous:{title:"Page.goBack",permalink:"/api/puppeteer.page.goback"},next:{title:"Page.goto",permalink:"/api/puppeteer.page.goto"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pagegoforward-method"}),"Page.goForward() method"),(0,n.kt)("p",null,"This method navigate to the next page in history."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.waitforoptions"}),"WaitForOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," Navigation Parameter")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.httpresponse"}),"HTTPResponse")," ","|"," null",">"),(0,n.kt)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go forward, resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The argument ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," might have the following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"timeout")," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setdefaultnavigationtimeout"}),"Page.setDefaultNavigationTimeout()")," or ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()")," methods.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"waitUntil"),": When to consider navigation succeeded, defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," : consider navigation to be finished when the load event is fired.",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"p"},"networkidle0")," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,n.kt)("inlineCode",{parentName:"p"},"500")," ms.",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"p"},"networkidle2")," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,n.kt)("inlineCode",{parentName:"p"},"500")," ms."))))}d.isMDXComponent=!0}}]);