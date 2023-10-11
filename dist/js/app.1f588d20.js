(function(){"use strict";var e={9138:function(e,t,o){var r=o(144),n=o(9669),i=o.n(n);let a={};const s=i().create(a);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get(){return s}},$axios:{get(){return s}}})},r.ZP.use(Plugin);var u=o(998),l=o(6232),c=o(5550),d=o(3059),p=o(6733),f=o(7953),h=function(){var e=this,t=e._self._c;return t(u.Z,{attrs:{id:"inspire"}},[t(p.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[this.drawer?t("Navigation",{on:{close:e.drawerValidate}}):e._e()],1),t(l.Z,{attrs:{app:"",dark:"",color:"black"}},[t(c.Z,{on:{click:e.drawerValidate}}),t(f.qW,[e._v(e._s(e.$t("titleAplication")))])],1),t(d.Z,[t("router-view")],1)],1)},m=[],g=o(9582),v=o(9223),b=o(4324),w=o(5808),y=o(4525),P=o(60),k=o(4611),S=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t(u.Z,{attrs:{id:"inspire"}},[t(g.Z,{staticClass:"mx-auto",attrs:{height:"400",width:"256"}},[t(p.Z,{staticClass:"overflow-y-auto",staticStyle:{"border-radius":"0%"},attrs:{color:"black",height:"100vh"}},[t(y.Z,[t(P.km,{staticClass:"overflow-hidden"},[t(P.V9,{staticClass:"text-h6"},[t("img",{attrs:{src:o(2780)}})]),t(P.oZ,[e._v(" "+e._s(e.$t("titleAplication"))+" ")])],1)],1),t(v.Z),t(w.Z,{attrs:{dense:"",nav:"",dark:""}},e._l(e.menuItens,(function(o){return t(y.Z,{key:o.title,attrs:{link:""},on:{click:function(t){return e.navRouter(o.router)}}},[t(k.Z,[t(b.Z,{staticClass:"blue--text"},[e._v(e._s(o.icon))])],1),t(P.km,[t(P.V9,{staticClass:"blue--text"},[e._v(e._s(o.title))])],1)],1)})),1)],1)],1)],1)],1)},Z=[],x=(o(7658),{data(){return{menuItens:[{title:this.$t("navgation.home"),icon:"mdi-home",router:"home"},{title:this.$t("navgation.listRequest"),icon:"mdi-list-box",router:"list"}],right:null}},methods:{navRouter(e){this.$emit("close"),this.$route.name!=e&&this.$router.push({name:e})}}}),N=x,O=o(1001),A=(0,O.Z)(N,S,Z,!1,null,null,null),_=A.exports,C={name:"App",components:{Navigation:_},data:()=>({drawer:!1,apiUrl:"http://rodoparanaimplementos120531.protheus.cloudtotvs.com.br:4050/rest/",items:[],listProducts:[],hasNext:null}),methods:{drawerValidate(){this.drawer=!this.drawer},saveToLocalStorage(){localStorage.setItem("apiData",JSON.stringify(this.listProducts))},showLocalStorageData(){const e=localStorage.getItem("apiData");this.listProducts=e?JSON.parse(e):[],console.log(localStorage)},takeValuesApi(){this.fetchData(5)},fetchData(e){let t=5e3,o=this.apiUrl+`api/retail/v1/retailItem?page=1&pageSize=${t}&fields=code,description`;axios.get(o).then((e=>{if(200!==e.status)throw console.error("Erro na solicitação:",e.status),new Error("Não foi possível acessar a API da TOTVS");e.data.hasNext;const t=e.data.items;this.listProducts=this.listProducts.concat(t),this.saveToLocalStorage()})).catch((e=>{console.error("Erro:",e)}))}},created(){this.takeValuesApi()}},q=C,j=(0,O.Z)(q,h,m,!1,null,"2de0ec23",null),E=j.exports,R=o(5205);(0,R.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var T=o(8345);r.ZP.use(T.ZP);const V=[{path:"/",name:"home",component:()=>Promise.all([o.e(938),o.e(68)]).then(o.bind(o,1068))},{path:"/create",name:"create",props:!0,component:()=>Promise.all([o.e(938),o.e(543),o.e(691)]).then(o.bind(o,691))},{path:"/list",name:"list",component:()=>Promise.all([o.e(938),o.e(68)]).then(o.bind(o,1068))},{path:"/product",name:"product",component:()=>Promise.all([o.e(938),o.e(543)]).then(o.bind(o,2543))}],L=new T.ZP({mode:"history",base:"/",routes:V});var $=L,D=o(629),I={productAction(){console.log("product Action")}},B={testeMutation2(e){console.log("teste 2 mutation")}},F={request:[{title:"teste 2",number:1},{title:"teste2 2",number:2}]},M={testeGetters2(){return F}},G={state:F,mutations:B,actions:I,getters:M},J={testeActions(){console.log("testeAction")}},U={request:[{title:"teste",number:1},{title:"teste2",number:2}]},z={testeMutation(e){console.log("teste mutation")}};r.ZP.use(D.ZP);var Q=new D.ZP.Store({getters:{testeGetters(){var e=1;return e}},state:U,mutations:z,actions:J,modules:{product:G}}),H=o(1705);r.ZP.use(H.Z);var K=new H.Z({}),W=o(7152);r.ZP.config.productionTip=!1,r.ZP.use(W.Z);const X={"pt-BR":o(3041)},Y=new W.Z({locale:"pt-BR",messages:X});new r.ZP({i18n:Y,router:$,store:Q,vuetify:K,render:e=>e(E)}).$mount("#app")},2780:function(e,t,o){e.exports=o.p+"img/RODO_LOGO.d88eddc8.svg"},3041:function(e){e.exports=JSON.parse('{"titleAplication":"RODO APP","toolbar":{"imgs":{"iconShort":"teste"}},"navgation":{"home":"Início","listRequest":"Pedidos de compra","product":"produto"},"request":{"createRequest":"Criar Pedido","table":{"numberRequest":"Nº Pedido","NumberNotes":"Nº Notas","supplier":"Fornecedor","statusShip":"Status de pedido","statusOrdem":"Prioridade","statusPay":"Pagamentos","actions":"Ações"},"addRequest":{"headProductsList":{"name":"Nome","value":"Valor","amountSolicited":"Quantia solicitada","amountShiped":"Quantia entregue","statusShip":"Status de entrega","valueShip":"Valor de frete","actions":"Ações"}},"icon":{"onlyNote":"mdi-note-search-outline","notes":"mdi-text-box-multiple-outline","infoRequest":"mdi-text-box-search-outline","editRequest":"mdi-text-box-edit-outline"},"iconTooltip":{"onlyNote":"Ver nota","notes":"Ver notas","infoRequest":"Ver pedido","editRequest":"Editar pedido"}}}')}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{68:"6a9abbe9",543:"2b86fc6d",691:"030b6723",938:"51a031ea"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{68:"e9d51bd7",543:"11517343",691:"11573665"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="rodoapp:";o.l=function(r,n,i,a){if(e[r])e[r].push(n);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(o){if(i.onerror=i.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),n(u)}};return i.onerror=i.onload=a,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],i=n.getAttribute("data-href");if(i===e||i===t)return n}},r=function(r){return new Promise((function(n,i){var a=o.miniCssF(r),s=o.p+a;if(t(a,s))return n();e(r,s,null,n,i)}))},n={143:0};o.f.miniCss=function(e,t){var o={68:1,543:1,691:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error,u=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};o.l(a,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(u)var c=u(o)}for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=self["webpackChunkrodoapp"]=self["webpackChunkrodoapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(9138)}));r=o.O(r)})();
//# sourceMappingURL=app.1f588d20.js.map