"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(h,p(p({ref:t},d),{},{components:a})):r.createElement(h,p({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>d});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={sidebar_label:"JSHandle"},o="JSHandle class",i={unversionedId:"api/puppeteer.jshandle",id:"version-18.1.0/api/puppeteer.jshandle",title:"JSHandle class",description:"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/api/puppeteer.jshandle",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"JSHandle"},sidebar:"sidebar",previous:{title:"Frame.waitForXPath",permalink:"/api/puppeteer.frame.waitforxpath"},next:{title:"JSHandle.[__JSHandleSymbol]",permalink:"/api/puppeteer.jshandle.___jshandlesymbol_"}},s={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:d};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"jshandle-class"}),"JSHandle class"),(0,r.kt)("p",null,"Represents a reference to a JavaScript object. Instances can be created using ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluatehandle"}),"Page.evaluateHandle()"),"."),(0,r.kt)("p",null,"Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.jshandle.dispose"}),"disposed"),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."),(0,r.kt)("p",null,"Handles can be used as arguments for any evaluation function such as ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page._eval"}),"Page.$eval()"),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluate"}),"Page.evaluate()"),", and ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluatehandle"}),"Page.evaluateHandle()"),". They are resolved to their referenced object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class JSHandle<T = unknown>\n")),(0,r.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSHandle")," class."),(0,r.kt)("h2",n({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const windowHandle = await page.evaluateHandle(() => window);\n")),(0,r.kt)("h2",n({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.___jshandlesymbol_"}),"[","_","_","JSHandleSymbol","]","?")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)")," Used for nominally typing ",(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle"}),"JSHandle"),".")))),(0,r.kt)("h2",n({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.aselement"}),"asElement()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.dispose"}),"dispose()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Releases the object referenced by the handle for garbage collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.evaluate"}),"evaluate(pageFunction, args)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Evaluates the given function with the current handle as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.evaluatehandle"}),"evaluateHandle(pageFunction, args)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Evaluates the given function with the current handle as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperties"}),"getProperties()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Gets a map of handles representing the properties of the current handle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperty"}),"getProperty(propertyName)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fetches a single property from the referenced object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperty_1"}),"getProperty(propertyName)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.jsonvalue"}),"jsonValue()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.remoteobject"}),"remoteObject()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Provides access to the ","[","Protocol.Runtime.RemoteObject","]","(",(0,r.kt)("a",n({parentName:"td"},{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/%5C#type-RemoteObject"}),"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/\\#type-RemoteObject"),") backing this handle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.tostring"}),"toString()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns a string representation of the JSHandle.")))))}m.isMDXComponent=!0}}]);