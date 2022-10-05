"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_label:"Page.evaluateOnNewDocument"},p="Page.evaluateOnNewDocument() method",i={unversionedId:"api/puppeteer.page.evaluateonnewdocument",id:"version-18.1.0/api/puppeteer.page.evaluateonnewdocument",title:"Page.evaluateOnNewDocument() method",description:"Adds a function which would be invoked in one of the following scenarios:",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.page.evaluateonnewdocument.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluateonnewdocument",permalink:"/api/puppeteer.page.evaluateonnewdocument",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"Page.evaluateOnNewDocument"},sidebar:"sidebar",previous:{title:"Page.evaluateHandle",permalink:"/api/puppeteer.page.evaluatehandle"},next:{title:"Page.exposeFunction",permalink:"/api/puppeteer.page.exposefunction"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pageevaluateonnewdocument-method"}),"Page.evaluateOnNewDocument() method"),(0,r.kt)("p",null,"Adds a function which would be invoked in one of the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the page is navigated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."))),(0,r.kt)("p",null,"The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.random"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  evaluateOnNewDocument<\n    Params extends unknown[],\n    Func extends (...args: Params) => unknown = (...args: Params) => unknown\n  >(pageFunction: Func | string, ...args: Params): Promise<void>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"pageFunction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Function to be evaluated in browser context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"args"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Params"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Arguments to pass to ",(0,r.kt)("code",null,"pageFunction"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("p",null,"An example of overriding the navigator.languages property before the page loads:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\n  get: function () {\n    return ['en-US', 'en', 'bn'];\n  },\n});\n\n// In your puppeteer script, assuming the preload.js file is\n// in same folder of our script.\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n")))}m.isMDXComponent=!0}}]);