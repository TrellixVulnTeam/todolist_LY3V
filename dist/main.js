(()=>{var e,t,r,n,o={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,a),r.exports}a.m=o,a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.miniCssF=e=>e+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="my-webpack-project:",a.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var l,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){l=s;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[n];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),r=e=>new Promise(((t,r)=>{var n=a.miniCssF(e),o=a.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,o.parentNode.removeChild(o),n(u)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),n={179:0},a.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{188:1}[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,l,u]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);u&&u(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.e(188).then(a.bind(a,188)),console.log("Hello World!");var l,u=document.querySelector("#todoForm"),c=u.querySelector("input"),d=document.querySelector("#todoList"),s=(document.querySelector("#mainDiv"),"toDos"),p=[];function m(){localStorage.setItem(s,JSON.stringify(p))}function f(e){var t=document.createElement("li"),r=document.createElement("button"),n=document.createElement("div"),o=p.length+1;r.innerText="삭제",n.innerText=e,t.appendChild(n),t.appendChild(r),t.id=o,d.appendChild(t),r.addEventListener("click",h),n.addEventListener("dblclick",v);var i={text:e,id:o};p.push(i),m()}function v(e){e.preventDefault();var t=e.target,r=t.parentNode,n=document.createElement("form"),o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("value","".concat(t.innerText)),n.appendChild(o),t.style.visibility="hidden",r.prepend(n),n.addEventListener("submit",(function(e){if(o.value){var i=o.value;t.innerText=i,n.remove(),t.style.visibility="visible",function(e,t){var r=p.filter((function(r){return r.id===parseInt(e.id)&&(r.text=t),r}));p=r,m()}(r,i)}}))}function h(e){var t=e.target.parentNode;t.remove();var r=p.filter((function(e){return e.id!==parseInt(t.id)}));p=r,m()}null!==(l=localStorage.getItem(s))&&JSON.parse(l).forEach((function(e){f(e.text)})),u.addEventListener("submit",(function(e){e.preventDefault(),c.value&&(f(c.value),c.value="")}))})();