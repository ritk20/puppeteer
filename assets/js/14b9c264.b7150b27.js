"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={},o="Locators",s={unversionedId:"guides/locators",id:"version-21.0.0/guides/locators",title:"Locators",description:"Locators is a new, experimental API that combines the functionalities of",source:"@site/versioned_docs/version-21.0.0/guides/locators.md",sourceDirName:"guides",slug:"/guides/locators",permalink:"/guides/locators",draft:!1,tags:[],version:"21.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Query Selectors",permalink:"/guides/query-selectors"},next:{title:"Evaluate JavaScript",permalink:"/guides/evaluate-javascript"}},c={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"Waiting for an element",id:"waiting-for-an-element",level:3},{value:"Waiting for a function",id:"waiting-for-a-function",level:3},{value:"Clicking an element",id:"clicking-an-element",level:3},{value:"Clicking an element matching a criteria",id:"clicking-an-element-matching-a-criteria",level:3},{value:"Filling out an input",id:"filling-out-an-input",level:3},{value:"Retrieving an element property",id:"retrieving-an-element-property",level:3},{value:"Hover over an element",id:"hover-over-an-element",level:3},{value:"Scroll an element",id:"scroll-an-element",level:3},{value:"Configuring locators",id:"configuring-locators",level:2},{value:"Getting locator events",id:"getting-locator-events",level:2}],u={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"locators"}),"Locators"),(0,a.kt)("p",null,"Locators is a new, experimental API that combines the functionalities of\nwaiting and actions. With additional precondition checks, it\nenables automatic retries for failed actions, resulting in more reliable and\nless flaky automation scripts."),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Locators API is experimental and we will not follow semver for breaking changes\nin the Locators API.")),(0,a.kt)("h2",r({},{id:"use-cases"}),"Use cases"),(0,a.kt)("h3",r({},{id:"waiting-for-an-element"}),"Waiting for an element"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.locator('button').wait();\n")),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden.")),(0,a.kt)("h3",r({},{id:"waiting-for-a-function"}),"Waiting for a function"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page\n  .locator(() => {\n    let resolve!: (node: HTMLCanvasElement) => void;\n    const promise = new Promise(res => {\n      return (resolve = res);\n    });\n    const observer = new MutationObserver(records => {\n      for (const record of records) {\n        if (record.target instanceof HTMLCanvasElement) {\n          resolve(record.target);\n        }\n      }\n    });\n    observer.observe(document);\n    return promise;\n  })\n  .wait();\n")),(0,a.kt)("h3",r({},{id:"clicking-an-element"}),"Clicking an element"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.locator('button').click();\n")),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensures the element is in the viewport."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become enabled."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to have a stable bounding box over two consecutive\nanimation frames.")),(0,a.kt)("h3",r({},{id:"clicking-an-element-matching-a-criteria"}),"Clicking an element matching a criteria"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page\n  .locator('button')\n  .filter(button => !button.disabled)\n  .click();\n")),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensures the element is in the viewport."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become enabled."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to have a stable bounding box over two consecutive\nanimation frames.")),(0,a.kt)("h3",r({},{id:"filling-out-an-input"}),"Filling out an input"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.locator('input').fill('value');\n")),(0,a.kt)("p",null,"Automatically detects the input type and choose an approritate way to fill it out with the provided value."),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensures the element is in the viewport."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become enabled."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to have a stable bounding box over two consecutive\nanimation frames.")),(0,a.kt)("h3",r({},{id:"retrieving-an-element-property"}),"Retrieving an element property"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const enabled = await page\n  .locator('button')\n  .map(button => !button.disabled)\n  .wait();\n")),(0,a.kt)("h3",r({},{id:"hover-over-an-element"}),"Hover over an element"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.locator('div').hover();\n")),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensures the element is in the viewport."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to have a stable bounding box over two consecutive\nanimation frames.")),(0,a.kt)("h3",r({},{id:"scroll-an-element"}),"Scroll an element"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page.locator('div').scroll({\n  scrollLeft: 10,\n  scrollTop: 20,\n});\n")),(0,a.kt)("p",null,"The following preconditions are automatically checked:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensures the element is in the viewport."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to become\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/"}),"visible")," or hidden."),(0,a.kt)("li",{parentName:"ul"},"Waits for the element to have a stable bounding box over two consecutive\nanimation frames.")),(0,a.kt)("h2",r({},{id:"configuring-locators"}),"Configuring locators"),(0,a.kt)("p",null,"Locators can be configured to tune configure the preconditions and other other options:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"await page\n  .locator('button')\n  .setEnsureElementIsInTheViewport(false)\n  .setTimeout(0)\n  .setVisibility(null)\n  .setWaitForEnabled(false)\n  .setWaitForStableBoundingBox(false)\n  .click();\n")),(0,a.kt)("h2",r({},{id:"getting-locator-events"}),"Getting locator events"),(0,a.kt)("p",null,"Currently, locators support a single event that notifies you when the locator is about to perform the action:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"let willClick = false;\nawait page\n  .locator('button')\n  .on(LocatorEmittedEvents.Action, () => {\n    willClick = true;\n  })\n  .click();\n")),(0,a.kt)("p",null,"This event can be used for logging/debugging or other purposes. The event might\nfire multiple times if the locator retries the action."))}m.isMDXComponent=!0}}]);