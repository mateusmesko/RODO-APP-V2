if(!self.define){let s,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(n,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>r(s,l),c={module:{uri:l},exports:o,require:u};e[l]=Promise.all(n.map((s=>c[s]||u(s)))).then((s=>(i(...s),o)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"rodoapp"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/543.11517343.css",revision:null},{url:"/css/68.e9d51bd7.css",revision:null},{url:"/css/691.11573665.css",revision:null},{url:"/css/chunk-vendors.5baa8be4.css",revision:null},{url:"/img/RODO_LOGO.d88eddc8.svg",revision:null},{url:"/index.html",revision:"a2a3cb0efa96823d73f8c5ab651aa87c"},{url:"/js/543.2b86fc6d.js",revision:null},{url:"/js/68.6a9abbe9.js",revision:null},{url:"/js/691.030b6723.js",revision:null},{url:"/js/938.51a031ea.js",revision:null},{url:"/js/app.1f588d20.js",revision:null},{url:"/js/chunk-vendors.feb30553.js",revision:null},{url:"/manifest.json",revision:"73c740a588546d64b734b8a958154f76"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
