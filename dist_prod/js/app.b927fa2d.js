(function(e){function n(n){for(var r,c,o=n[0],i=n[1],l=n[2],f=0,h=[];f<o.length;f++)c=o[f],u[c]&&h.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0366":"2e228bfd","chunk-1058":"ee5e067e","chunk-15c9":"9aecffb3","chunk-aed7":"272598e2","chunk-0cf6":"d80d9e1e","chunk-2755":"8586e5f0","chunk-4b34":"30a02240","chunk-6da6":"3b473b00","chunk-6dfa":"882d8ae8","chunk-855f":"67c56ecd","chunk-b0c0":"61ba22b1"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1058":1,"chunk-15c9":1,"chunk-aed7":1,"chunk-0cf6":1,"chunk-2755":1,"chunk-4b34":1,"chunk-6da6":1,"chunk-6dfa":1,"chunk-855f":1,"chunk-b0c0":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0366":"31d6cfe0","chunk-1058":"ba91cf69","chunk-15c9":"5455f392","chunk-aed7":"c48d312e","chunk-0cf6":"818cf76d","chunk-2755":"c19328bc","chunk-4b34":"2480afa9","chunk-6da6":"0cc05db9","chunk-6dfa":"52f0ac93","chunk-855f":"2a31285d","chunk-b0c0":"d27a06f6"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var o=u[a],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===r||l===c))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){o=f[a],l=o.getAttribute("data-href");if(l===r||l===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,t(u)},h.href=c;var s=document.getElementsByTagName("head")[0];s.appendChild(h)}).then(function(){c[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=a);var l,f=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e),l=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");a.type=r,a.request=c,t[1](a)}u[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:h})},12e4);h.onerror=h.onload=l,f.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/dist_prod/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var s=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("04f5"),c=t.n(r);c.a},"04f5":function(e,n,t){},"197c":function(e,n,t){"use strict";var r=t("c91e"),c=t.n(r);n["default"]=c.a},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"test",function(){return V});t("0fae");var c=t("9e2f"),u=t.n(c),a=(t("cadf"),t("551c"),t("2b0e")),o=t("8c2c"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],f={},h=f,s=(t("034f"),t("2877")),d=Object(s["a"])(h,i,l,!1,null,null,null),p=d.exports,m=t("8afe"),b=t("8c4f"),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},v=[],g={name:"home",data:function(){return{}},created:function(){},methods:{}},y=g,w=t("197c");function j(e){this["$style"]=w["default"].locals||w["default"]}var O=Object(s["a"])(y,k,v,!1,j,null,null),T=O.exports,_=function(){return t.e("chunk-855f").then(t.bind(null,"495d"))},E=function(){return t.e("chunk-b0c0").then(t.bind(null,"dfe9"))},P=function(){return t.e("chunk-4b34").then(t.bind(null,"b65d"))},S=function(){return t.e("chunk-2755").then(t.bind(null,"3797"))},x=function(){return t.e("chunk-0cf6").then(t.bind(null,"6734"))},A=function(){return Promise.all([t.e("chunk-0366"),t.e("chunk-1058")]).then(t.bind(null,"9913"))},B=function(){return t.e("chunk-6da6").then(t.bind(null,"217c"))},D=function(){return t.e("chunk-6dfa").then(t.bind(null,"1ebc"))},N=function(){return Promise.all([t.e("chunk-0366"),t.e("chunk-15c9")]).then(t.bind(null,"9f7d"))},C=[{path:"/Ingress",name:"Ingress",component:B},{path:"/Balabala",name:"Balabala",component:D},{path:"/",name:"",component:_,children:[{path:"/show",name:"home",component:E}]},{path:"/",name:"",component:P,children:[{path:"/beidoudou",name:"Triopen",component:S}]},{path:"/",name:"",component:x,children:[{path:"/Doc",name:"Doc",component:A},{path:"/Trie",name:"Trie",component:N}]}],I=C,M=function(){return t.e("chunk-0cf6").then(t.bind(null,"6734"))},$=function(){return Promise.all([t.e("chunk-0366"),t.e("chunk-aed7")]).then(t.bind(null,"a86a"))},J=[{path:"/login",name:"login",component:$},{path:"/",name:"",component:M,children:[]}],q=J,L=[];L.push.apply(L,Object(m["a"])(I)),L.push.apply(L,Object(m["a"])(q));var H,z=L;a["default"].use(b["a"]);var F={path:"/",name:"Home",component:T,children:[]};(H=F.children).push.apply(H,Object(m["a"])(z));var G=[F,{path:"/*",name:"404"}],K=new b["a"]({linkActiveClass:"active",history:!1,routes:G});K.beforeEach(function(e,n,t){var r=JSON.parse(sessionStorage.getItem("loginInfo"));"/login"!==e.path?r&&r.access_token?t():t({path:"/login"}):r&&r.access_token?t({path:"/doc"}):t()});var Q=K,R=t("2f62"),U=t("63e0"),V=function(e){return e.testData},W=t("a322"),X="TEST_DATA",Y=Object(W["a"])({},X,function(e,n){e.testDate=n}),Z=Y,ee={testData:{}},ne=ee,te=t("b054"),re=t.n(te);a["default"].use(R["a"]);var ce=!1,ue=new R["a"].Store({actions:U,getters:r,mutations:Z,state:ne,strict:ce,plugins:ce?[re()()]:[]});a["default"].config.productionTip=!1,a["default"].use(u.a),a["default"].component("lottie",o["a"]),new a["default"]({router:Q,store:ue,render:function(e){return e(p)}}).$mount("#app")},"63e0":function(e,n){},c91e:function(e,n,t){}});