"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_label:"ElementHandle.waitForXPath"},l="ElementHandle.waitForXPath() method",p={unversionedId:"api/puppeteer.elementhandle.waitforxpath",id:"version-18.1.0/api/puppeteer.elementhandle.waitforxpath",title:"ElementHandle.waitForXPath() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-18.1.0/api/puppeteer.elementhandle.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.waitforxpath",permalink:"/api/puppeteer.elementhandle.waitforxpath",draft:!1,tags:[],version:"18.1.0",frontMatter:{sidebar_label:"ElementHandle.waitForXPath"},sidebar:"sidebar",previous:{title:"ElementHandle.waitForSelector",permalink:"/api/puppeteer.elementhandle.waitforselector"},next:{title:"HTTPRequest",permalink:"/api/puppeteer.httprequest"}},m={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"elementhandlewaitforxpath-method"}),"ElementHandle.waitForXPath() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Use ",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.elementhandle.waitforselector"}),"ElementHandle.waitForSelector()")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," prefix."),(0,a.kt)("p",{parentName:"blockquote"},"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"await elementHandle.waitForSelector('xpath/' + xpathExpression)")),(0,a.kt)("p",{parentName:"blockquote"},"The method evaluates the XPath expression relative to the elementHandle."),(0,a.kt)("p",{parentName:"blockquote"},"Wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," within the element. If at the moment of calling the method the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," doesn't appear after the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,a.kt)("p",{parentName:"blockquote"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"//")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},".//"),", the dot will be appended automatically."),(0,a.kt)("p",{parentName:"blockquote"},"This method works across navigation."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  waitForXPath(\n    xpath: string,\n    options?: {\n      visible?: boolean;\n      hidden?: boolean;\n      timeout?: number;\n    }\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"xpath"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A ",(0,a.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/XPath"}),"xpath")," of an element to wait for")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">"," ","|"," null",">"),(0,a.kt)("p",null,"Promise which resolves when element specified by xpath string is added to DOM. Resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if waiting for ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden: true")," and xpath is not found in DOM."),(0,a.kt)("h2",r({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The optional Argument ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," have properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"visible"),": A boolean to wait for element to be present in DOM and to be visible, i.e. to not have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),": A boolean wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,a.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),": A number which is maximum time to wait for in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()")," method."))))}d.isMDXComponent=!0}}]);