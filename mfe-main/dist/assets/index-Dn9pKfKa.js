import { i as index_cjs, m as mfe_mf_2_main__mf_v__runtimeInit__mf_v__, a as apps } from './mfe_mf_2_main__mf_v__runtimeInit__mf_v__-ChqWbBKw.js';
import { i as isString$1, a as isObject$1, h as hasOwn, N as NOOP, b as isFunction$1, c as isArray$1 } from './shared.esm-bundler-BRYTs3j7.js';

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

/* single-spa@6.0.3 - ES2015 - prod */
var t=Object.freeze({__proto__:null,get start(){return It$1},get ensureJQuerySupport(){return ft$1},get setBootstrapMaxTime(){return K$1},get setMountMaxTime(){return H$1},get setUnmountMaxTime(){return J$1},get setUnloadMaxTime(){return Q$1},get registerApplication(){return Tt$1},get unregisterApplication(){return At},get getMountedApps(){return Et},get getAppStatus(){return Pt},get unloadApplication(){return Nt$1},get checkActivityFunctions(){return bt$1},get getAppNames(){return vt$1},get pathToActiveWhen(){return Dt},get navigateToUrl(){return tt$1},get patchHistoryApi(){return at$1},get triggerAppChange(){return $t$1},get addErrorHandler(){return i},get removeErrorHandler(){return s},get mountRootParcel(){return G$1},get NOT_LOADED(){return c},get LOADING_SOURCE_CODE(){return l},get NOT_BOOTSTRAPPED(){return f},get BOOTSTRAPPING(){return p},get NOT_MOUNTED(){return h},get MOUNTING(){return m},get UPDATING(){return w},get LOAD_ERROR(){return E$1},get MOUNTED(){return d},get UNLOADING(){return y},get UNMOUNTING(){return g},get SKIP_BECAUSE_BROKEN(){return v}}),e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent,n=function(){try{var t=new e("cat",{detail:{foo:"bar"}});return "cat"===t.type&&"bar"===t.detail.foo}catch(t){}return  false}()?e:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,false,false,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=false,n.cancelable=false,n.detail=void 0),n};let r=[];function o(t,e,n){const o=a(t,e,n);r.length?r.forEach((t=>t(o))):setTimeout((()=>{throw o}));}function i(t){if("function"!=typeof t)throw Error(u(28));r.push(t);}function s(t){if("function"!=typeof t)throw Error(u(29));let e=false;return r=r.filter((n=>{const r=n===t;return e=e||r,!r})),e}function u(t,e,...n){return `single-spa minified message #${t}: ${""}See https://single-spa.js.org/error/?code=${t}${n.length?`&arg=${n.join("&arg=")}`:""}`}function a(t,e,n){const r=`${A(e)} '${T(e)}' died in status ${e.status}: `;let o;if(t instanceof Error){try{t.message=r+t.message;}catch(t){}o=t;}else {console.warn(u(30,false,e.status,T(e)));try{o=Error(r+JSON.stringify(t));}catch(e){o=t;}}return o.appOrParcelName=T(e),e.status=n,o}const c="NOT_LOADED",l="LOADING_SOURCE_CODE",f="NOT_BOOTSTRAPPED",p="BOOTSTRAPPING",h="NOT_MOUNTED",m="MOUNTING",d="MOUNTED",w="UPDATING",g="UNMOUNTING",y="UNLOADING",E$1="LOAD_ERROR",v="SKIP_BECAUSE_BROKEN";function P$1(t){return t.status===d}function O(t){try{return t.activeWhen(window.location)}catch(e){return o(e,t,v),false}}function T(t){return t.name}function b(t){return Boolean(t.unmountThisParcel)}function A(t){return b(t)?"parcel":"application"}function N$1(){for(let t=arguments.length-1;t>0;t--)for(let e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function S(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function _(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!S(e,(t=>"function"!=typeof t))));var e;}function D(t,e){let n=t[e]||[];n=Array.isArray(n)?n:[n],0===n.length&&(n=[()=>Promise.resolve()]);const r=A(t),o=T(t);return function(t){return n.reduce(((n,i,s)=>n.then((()=>{const n=i(t);return U$1(n)?n:Promise.reject(u(15,false,r,o,e,s))}))),Promise.resolve())}}function U$1(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}let M=[];function j(t,e){return Promise.resolve().then((()=>t.status!==f?t:(t.status=p,t.bootstrap?V(t,"bootstrap").then(n).catch((n=>{if(e)throw a(n,t,v);return o(n,t,v),t})):Promise.resolve().then(n))));function n(){return t.status=h,t}}function $(t,e){return Promise.resolve().then((()=>{if(t.status!==d)return t;t.status=g;const n=Object.keys(t.parcels).map((e=>t.parcels[e].unmountThisParcel()));return Promise.all(n).then(r,(n=>r().then((()=>{const r=Error(n.message);if(e)throw a(r,t,v);o(r,t,v);})))).then((()=>t));function r(){return V(t,"unmount").then((()=>{t.status=h;}),(n=>{if(e)throw a(n,t,v);o(n,t,v);}))}}))}let L=false,R$1=false;function x(t,e){return Promise.resolve().then((()=>t.status!==h?t:(L||(window.dispatchEvent(new n("single-spa:before-first-mount")),L=true),t.status=m,V(t,"mount").then((()=>(t.status=d,R$1||(window.dispatchEvent(new n("single-spa:first-mount")),R$1=true),t))).catch((n=>{return t.status=d,$(t,true).then(r,r);function r(){if(e)throw a(n,t,v);return o(n,t,v),t}})))))}let I$1=0;const B$1={parcels:{}};function G$1(){return W$1.apply(B$1,arguments)}function W$1(t,e){const n=this;if(!t||"object"!=typeof t&&"function"!=typeof t)throw Error(u(2));if(t.name&&"string"!=typeof t.name)throw Error(u(3,false,typeof t.name));const r=I$1++;let o=t.name||`parcel-${r}`;if("object"!=typeof e)throw Error(u(4,false,o,typeof e));if(!e.domElement)throw Error(u(5,false,o));const i="function"==typeof t,s=i?t:()=>Promise.resolve(t),c={id:r,parcels:{},status:i?l:f,customProps:e,parentName:T(n),unmountThisParcel:()=>y.then((()=>{if(c.status!==d)throw Error(u(6,false,o,c.status));return $(c,true)})).then((t=>(c.parentName&&delete n.parcels[c.id],t))).then((t=>(E(t),t))).catch((t=>{throw c.status=v,P(t),t}))};let p;n.parcels[r]=c;let m=s();if(!m||"function"!=typeof m.then)throw Error(u(7));m=m.then((t=>{if(!t)throw Error(u(8));if(o=t.name||`parcel-${r}`,Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!_(t.bootstrap))throw Error(u(9,false,o));if(!_(t.mount))throw Error(u(10,false,o));if(!_(t.unmount))throw Error(u(11,false,o));if(t.update&&!_(t.update))throw Error(u(12,false,o));const e=D(t,"bootstrap"),n=D(t,"mount"),i=D(t,"unmount");c.status=f,c.name=o,c.bootstrap=e,c.mount=n,c.unmount=i,c.timeouts=q$1(t.timeouts),t.update&&(c.update=D(t,"update"),p.update=function(t){return c.customProps=t,C$1((e=c,Promise.resolve().then((()=>{if(e.status!==d)throw Error(u(32,false,T(e)));return e.status=w,V(e,"update").then((()=>(e.status=d,e))).catch((t=>{throw a(t,e,v)}))}))));var e;});}));const g=m.then((()=>j(c,true))),y=g.then((()=>x(c,true)));let E,P;const O=new Promise(((t,e)=>{E=t,P=e;}));return p={mount:()=>C$1(Promise.resolve().then((()=>{if(c.status!==h)throw Error(u(13,false,o,c.status));return n.parcels[r]=c,x(c)}))),unmount:()=>C$1(c.unmountThisParcel()),getStatus:()=>c.status,loadPromise:C$1(m),bootstrapPromise:C$1(g),mountPromise:C$1(y),unmountPromise:C$1(O)},p}function C$1(t){return t.then((()=>null))}function k(e){const n=T(e);let r="function"==typeof e.customProps?e.customProps(n,window.location):e.customProps;("object"!=typeof r||null===r||Array.isArray(r))&&(r={},console.warn(u(40),n,r));const o=N$1({},r,{name:n,mountParcel:W$1.bind(e),singleSpa:t});return b(e)&&(o.unmountSelf=e.unmountThisParcel),o}const F={bootstrap:{millis:4e3,dieOnTimeout:false,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:false,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:false,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:false,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:false,warningMillis:1e3}};function K$1(t,e,n){if("number"!=typeof t||t<=0)throw Error(u(16));F.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3};}function H$1(t,e,n){if("number"!=typeof t||t<=0)throw Error(u(17));F.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3};}function J$1(t,e,n){if("number"!=typeof t||t<=0)throw Error(u(18));F.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3};}function Q$1(t,e,n){if("number"!=typeof t||t<=0)throw Error(u(19));F.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3};}function V(t,e){const n=t.timeouts[e],r=n.warningMillis,o=A(t);return new Promise(((i,s)=>{let a=false,c=false;t[e](k(t)).then((t=>{a=true,i(t);})).catch((t=>{a=true,s(t);})),setTimeout((()=>f(1)),r),setTimeout((()=>f(true)),n.millis);const l=u(31,false,e,o,T(t),n.millis);function f(t){if(!a)if(true===t)c=true,n.dieOnTimeout?s(Error(l)):console.error(l);else if(!c){const e=t,o=e*r;console.warn(l),o+r<n.millis&&setTimeout((()=>f(e+1)),r);}}}))}function q$1(t){const e={};for(let n in F)e[n]=N$1({},F[n],t&&t[n]||{});return e}function z(t){return Promise.resolve().then((()=>{if(t.loadPromise)return t.loadPromise;if(t.status!==c&&t.status!==E$1)return t;let e,n;return t.status=l,t.loadPromise=Promise.resolve().then((()=>{const r=t.loadApp(k(t));if(!U$1(r))throw n=true,Error(u(33,false,T(t)));return r.then((n=>{let r;t.loadErrorTime=null,e=n,"object"!=typeof e&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!_(e.bootstrap)&&(r=35),_(e.mount)||(r=36),_(e.unmount)||(r=37);const i=A(e);if(r){let n;try{n=JSON.stringify(e);}catch(t){}return console.error(u(r,false,i,T(t),n),e),o(void 0,t,v),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=N$1({},t.devtools.overlays,e.devtools.overlays)),t.status=f,t.bootstrap=D(e,"bootstrap"),t.mount=D(e,"mount"),t.unmount=D(e,"unmount"),t.unload=D(e,"unload"),t.timeouts=q$1(e.timeouts),delete t.loadPromise,t}))})).catch((e=>{let r;return delete t.loadPromise,n?r=v:(r=E$1,t.loadErrorTime=(new Date).getTime()),o(e,t,r),t}))}))}const X$1="undefined"!=typeof window,Y={hashchange:[],popstate:[]},Z$1=["hashchange","popstate"];function tt$1(t){let e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else {if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(u(14));e=t.currentTarget.href,t.preventDefault();}const n=ct$1(window.location.href),r=ct$1(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e);}function et$1(t){if(t){const e=t[0].type;Z$1.indexOf(e)>=0&&Y[e].forEach((e=>{try{e.apply(this,t);}catch(t){setTimeout((()=>{throw t}));}}));}}let nt$1;function rt$1(){Lt([],arguments);}function ot$1(t,e){return function(){const n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return nt$1&&n===o||window.dispatchEvent(it$1(window.history.state,e)),r}}function it$1(t,e){let n;try{n=new PopStateEvent("popstate",{state:t});}catch(e){n=document.createEvent("PopStateEvent"),n.initPopStateEvent("popstate",false,false,t);}return n.singleSpa=true,n.singleSpaTrigger=e,n}let st$1=null,ut$1=false;function at$1(t){if(ut$1)throw Error(u(43));nt$1=!t||!t.hasOwnProperty("urlRerouteOnly")||t.urlRerouteOnly,ut$1=true,st$1=window.history.replaceState,window.addEventListener("hashchange",rt$1),window.addEventListener("popstate",rt$1);const e=window.addEventListener,n=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&Z$1.indexOf(t)>=0)||S(Y[t],(t=>t===n)))return e.apply(this,arguments);Y[t].push(n);},window.removeEventListener=function(t,e){return "function"==typeof e&&Z$1.indexOf(t)>=0&&(Y[t]=Y[t].filter((t=>t!==e))),n.apply(this,arguments)},window.history.pushState=ot$1(window.history.pushState,"pushState"),window.history.replaceState=ot$1(st$1,"replaceState");}function ct$1(t){const e=document.createElement("a");return e.href=t,e}X$1&&(window.singleSpaNavigate?console.warn(u(41)):window.singleSpaNavigate=tt$1);let lt$1=false;function ft$1(t=window.jQuery){if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!lt$1){const e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return pt$1.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return pt$1.call(this,n,window.removeEventListener,t,e,arguments)},lt$1=true;}}function pt$1(t,e,n,r,o){return "string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((t=>{Z$1.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""));})),""===n.trim()?this:t.apply(this,o))}const ht$1={};function mt$1(t){return Promise.resolve().then((()=>{const e=ht$1[T(t)];if(!e)return t;if(t.status===c)return dt$1(t,e),t;if(t.status===y)return e.promise.then((()=>t));if(t.status!==h&&t.status!==E$1)return t;const n=t.status===E$1?Promise.resolve():V(t,"unload");return t.status=y,n.then((()=>(dt$1(t,e),t))).catch((n=>(function(t,e,n){delete ht$1[T(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,o(n,t,v),e.reject(n);}(t,e,n),t)))}))}function dt$1(t,e){delete ht$1[T(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=c,e.resolve();}function wt$1(t,e,n,r){ht$1[T(t)]={app:t,resolve:n,reject:r},Object.defineProperty(ht$1[T(t)],"promise",{get:e});}function gt$1(t){return ht$1[t]}const yt$1=[];function Et(){return yt$1.filter(P$1).map(T)}function vt$1(){return yt$1.map(T)}function Pt(t){const e=S(yt$1,(e=>T(e)===t));return e?e.status:null}let Ot$1=false;function Tt$1(t,e,n,r){const o=function(t,e,n,r){const o={name:null,loadApp:null,activeWhen:null,customProps:null};return "object"==typeof t?(function(t){if(Array.isArray(t)||null===t)throw Error(u(39));const e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce(((t,n)=>e.indexOf(n)>=0?t:t.concat(n)),[]);if(0!==n.length)throw Error(u(38,false,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(u(20));if("object"!=typeof t.app&&"function"!=typeof t.app)throw Error(u(20));const r=t=>"string"==typeof t||"function"==typeof t;if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(u(24));if(!_t$1(t.customProps))throw Error(u(22))}(t),o.name=t.name,o.loadApp=t.app,o.activeWhen=t.activeWhen,o.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(u(20));if(!e)throw Error(u(23));if("function"!=typeof n)throw Error(u(24));if(!_t$1(r))throw Error(u(22))}(t,e,n,r),o.name=t,o.loadApp=e,o.activeWhen=n,o.customProps=r),o.loadApp="function"!=typeof(i=o.loadApp)?()=>Promise.resolve(i):i,o.customProps=function(t){return t||{}}(o.customProps),o.activeWhen=function(t){let e=Array.isArray(t)?t:[t];return e=e.map((t=>"function"==typeof t?t:Dt(t))),t=>e.some((e=>e(t)))}(o.activeWhen),o;var i;}(t,e,n,r);if(Bt$1()||Ot$1||(Ot$1=true,setTimeout((()=>{Bt$1()||console.warn(u(1));}),5e3)),-1!==vt$1().indexOf(o.name))throw Error(u(21,false,o.name));yt$1.push(N$1({loadErrorTime:null,status:c,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},o)),X$1&&(ft$1(),Lt());}function bt$1(t=window.location){return yt$1.filter((e=>e.activeWhen(t))).map(T)}function At(t){if(0===yt$1.filter((e=>T(e)===t)).length)throw Error(u(25,false,t));return (X$1?Nt$1(t,{waitForUnmount:false}):Promise.resolve()).then((()=>{const e=yt$1.map(T).indexOf(t);yt$1.splice(e,1);}))}function Nt$1(t,e={waitForUnmount:false}){if("string"!=typeof t)throw Error(u(26));const n=S(yt$1,(e=>T(e)===t));if(!n)throw Error(u(27,false,t));const r=gt$1(T(n));if(e&&e.waitForUnmount){if(r)return r.promise;{const t=new Promise(((e,r)=>{wt$1(n,(()=>t),e,r);}));return t}}{let t;return r?(t=r.promise,St$1(n,r.resolve,r.reject)):t=new Promise(((e,r)=>{wt$1(n,(()=>t),e,r),St$1(n,e,r);})),t}}function St$1(t,e,n){Promise.resolve().then((()=>{if(S(bt$1(),(e=>e===T(t))))return $t$1()})).then((()=>$(t).then(mt$1).then((()=>{e(),setTimeout((()=>{Lt();}));})))).catch(n);}function _t$1(t){return !t||"function"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)}function Dt(t,e){const n=function(t,e){let n=0,r=false,o="^";"/"!==t[0]&&(t="/"+t);for(let e=0;e<t.length;e++){const n=t[e],o=r&&"/"===n;(!r&&":"===n||o)&&i(e);}return i(t.length),new RegExp(o,"i");function i(i){const s=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":s,i===t.length)if(r)e&&(o+="$");else {const t=e?"":".*";o="/"===o.charAt(o.length-1)?`${o}${t}$`:`${o}(/${t})?(#.*)?$`;}r=!r,n=i;}}(t,e);return t=>{let e=t.origin;e||(e=`${t.protocol}//${t.host}`);const r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}let Ut$1=false,Mt$1=[],jt=X$1&&window.location.href;function $t$1(){return Lt()}function Lt(t=[],e,r=false){if(Ut$1)return new Promise(((t,n)=>{Mt$1.push({resolve:t,reject:n,eventArguments:e});}));const{appsToUnload:o,appsToUnmount:i,appsToLoad:s,appsToMount:a}=function(){const t=[],e=[],n=[],r=[],o=(new Date).getTime();return yt$1.forEach((i=>{const s=i.status!==v&&O(i);switch(i.status){case E$1:s&&o-i.loadErrorTime>=200&&n.push(i);break;case c:case l:s&&n.push(i);break;case f:case h:!s&&gt$1(T(i))?t.push(i):s&&r.push(i);break;case d:s||e.push(i);}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}();let p,m=[],w=jt,g=jt=window.location.href;return Bt$1()?(Ut$1=true,p=o.concat(s,i,a),Promise.resolve().then((()=>(S(0===p.length?"before-no-app-change":"before-app-change",A(true)),S("before-routing-event",A(true,{cancelNavigation:y})),Promise.all(m).then((n=>{if(n.some((t=>t)))return st$1.call(window.history,history.state,"",w.substring(location.origin.length)),jt=location.href,Ut$1=false,Lt(t,e,true);const r=o.map(mt$1),u=i.map($).map((t=>t.then(mt$1))).concat(r),c=Promise.all(u);c.then((()=>{S("before-mount-routing-event",A(true));}),(t=>{throw t}));const l=s.map((t=>z(t).then((t=>Rt$1(t,c))))),f=a.filter((t=>s.indexOf(t)<0)).map((t=>Rt$1(t,c)));return c.catch((t=>{throw b(),t})).then((()=>(b(),Promise.all(l.concat(f)).catch((e=>{throw t.forEach((t=>t.reject(e))),e})).then(P).then((()=>{}),(t=>{throw t})))))})))))):(p=s,Promise.resolve().then((()=>{const t=s.map(z);return Promise.all(t).then(b).then((()=>[])).catch((t=>{throw b(),t})).finally((()=>{}))})));function y(t=true){const e="function"==typeof(null==t?void 0:t.then)?t:Promise.resolve(t);m.push(e.catch((t=>(console.warn(Error(u(42))),console.warn(t),false))));}function P(){const e=Et();t.forEach((t=>t.resolve(e)));try{S(0===p.length?"no-app-change":"app-change",A()),S("routing-event",A());}catch(t){setTimeout((()=>{throw t}));}if(Ut$1=false,Mt$1.length>0){const t=Mt$1;Mt$1=[],Lt(t);}return e}function b(){r||(t.forEach((t=>{et$1(t.eventArguments);})),et$1(e));}function A(t=false,n){const r={},u={[d]:[],[h]:[],[c]:[],[v]:[]};t?(s.concat(a).forEach(((t,e)=>{f(t,d);})),o.forEach((t=>{f(t,c);})),i.forEach((t=>{f(t,h);}))):p.forEach((t=>{f(t);}));const l={detail:{newAppStatuses:r,appsByNewStatus:u,totalAppChanges:p.length,originalEvent:null==e?void 0:e[0],oldUrl:w,newUrl:g}};return n&&N$1(l.detail,n),l;function f(t,e){const n=T(t);e=e||Pt(n),r[n]=e,(u[e]=u[e]||[]).push(n);}}function S(t,e){r||window.dispatchEvent(new n(`single-spa:${t}`,e));}}function Rt$1(t,e){return O(t)?j(t).then((t=>e.then((()=>O(t)?x(t):t)))):e.then((()=>t))}let xt$1=false;function It$1(t){xt$1=true,X$1&&(at$1(t),Lt());}function Bt$1(){return xt$1}var Gt$1={getRawAppData:function(){return [...yt$1]},reroute:Lt,NOT_LOADED:c,toLoadPromise:z,toBootstrapPromise:j,unregisterApplication:At,getProfilerData:function(){return M}};X$1&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt$1);

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = mfe_mf_2_main__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("vue", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: false,
      requiredVersion: "^3.5.16"
    }}}));
    const exportModule = await res.then(factory => factory());
    var mfe_mf_2_main__loadShare__vue__loadShare__ = exportModule;

const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = (mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance() ? mfe_mf_2_main__loadShare__vue__loadShare__.inject(namespaceContextKey, mfe_mf_2_main__loadShare__vue__loadShare__.ref(defaultNamespace)) : mfe_mf_2_main__loadShare__vue__loadShare__.ref(defaultNamespace));
  const namespace = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    return mfe_mf_2_main__loadShare__vue__loadShare__.unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$6.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$5.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$5.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (predicate(value)) {
      {
        arrayPush(result, value);
      }
    } else {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array) : [];
}

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined$1(value) {
  return value === undefined;
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => isNil(prop);
const isStringNumber = (val) => {
  if (!isString$1(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a;
  const result = mfe_mf_2_main__loadShare__vue__loadShare__.shallowRef();
  mfe_mf_2_main__loadShare__vue__loadShare__.watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a = void 0 ) != null ? _a : "sync"
  }));
  return mfe_mf_2_main__loadShare__vue__loadShare__.readonly(result);
}

var _a;
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function resolveUnref(r) {
  return typeof r === "function" ? r() : mfe_mf_2_main__loadShare__vue__loadShare__.unref(r);
}
function identity(arg) {
  return arg;
}

function tryOnScopeDispose(fn) {
  if (mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentScope()) {
    mfe_mf_2_main__loadShare__vue__loadShare__.onScopeDispose(fn);
    return true;
  }
  return false;
}

function tryOnMounted(fn, sync = true) {
  if (mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance())
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(fn);
  else if (sync)
    fn();
  else
    mfe_mf_2_main__loadShare__vue__loadShare__.nextTick(fn);
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = mfe_mf_2_main__loadShare__vue__loadShare__.ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: mfe_mf_2_main__loadShare__vue__loadShare__.readonly(isPending),
    start,
    stop
  };
}

function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = isClient ? window : void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}

let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop));
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

function useSupported(callback, sync = false) {
  const isSupported = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};

var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);

class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}

const initial = {
  current: 0
};
const zIndex = mfe_mf_2_main__loadShare__vue__loadShare__.ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance() ? mfe_mf_2_main__loadShare__vue__loadShare__.inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = (mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance() ? mfe_mf_2_main__loadShare__vue__loadShare__.inject(zIndexContextKey, void 0) : void 0);
  const initialZIndex = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    const zIndexFromInjection = mfe_mf_2_main__loadShare__vue__loadShare__.unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !mfe_mf_2_main__loadShare__vue__loadShare__.inject(ZINDEX_INJECTION_KEY)) ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};

const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$1(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      mfe_mf_2_main__loadShare__vue__loadShare__.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString$1(value)) {
    return value;
  }
}

const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};

const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});

const __default__$b = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$e = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$b,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("i", mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({
        class: mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).b(),
        style: mfe_mf_2_main__loadShare__vue__loadShare__.unref(style)
      }, _ctx.$attrs), [
        mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "icon.vue"]]);

const ElIcon = withInstall(Icon);

function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}

const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = mfe_mf_2_main__loadShare__vue__loadShare__.unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, mfe_mf_2_main__loadShare__vue__loadShare__.unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, mfe_mf_2_main__loadShare__vue__loadShare__.unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};

/*! Element Plus Icons Vue v2.3.1 */

var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
});

// src/components/arrow-down.vue
var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});

// src/components/arrow-right.vue
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
var more_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "More",
  __name: "more",
  setup(__props) {
    return (_ctx, _cache) => (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
});

// src/components/more.vue
var more_default = more_vue_vue_type_script_setup_true_lang_default;

const iconPropType = definePropType([
  String,
  Object,
  Function
]);

const mutable = (val) => val;

const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance() ? mfe_mf_2_main__loadShare__vue__loadShare__.inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};

const formItemContextKey = Symbol("formItemContextKey");

const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) {
    eventName = "MouseEvents";
  } else if (name.includes("key")) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};

const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");

const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});

const __default__$a = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$d = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$a,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const popperInstanceRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const contentRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const referenceRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const role = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    mfe_mf_2_main__loadShare__vue__loadShare__.provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "popper.vue"]]);

const __default__$9 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$c = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$9,
  setup(__props, { expose }) {
    const ns = useNamespace("popper");
    const { arrowRef, arrowStyle } = mfe_mf_2_main__loadShare__vue__loadShare__.inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).e("arrow")),
        style: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeStyle(mfe_mf_2_main__loadShare__vue__loadShare__.unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "arrow.vue"]]);

const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});

const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  mfe_mf_2_main__loadShare__vue__loadShare__.provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};

const NAME = "ElOnlyChild";
const OnlyChild = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = mfe_mf_2_main__loadShare__vue__loadShare__.inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return mfe_mf_2_main__loadShare__vue__loadShare__.withDirectives(mfe_mf_2_main__loadShare__vue__loadShare__.cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$1(child)) {
      switch (child.type) {
        case mfe_mf_2_main__loadShare__vue__loadShare__.Comment:
          continue;
        case mfe_mf_2_main__loadShare__vue__loadShare__.Text:
        case "svg":
          return wrapTextContent(child);
        case mfe_mf_2_main__loadShare__vue__loadShare__.Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return mfe_mf_2_main__loadShare__vue__loadShare__.createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}

const __default__$8 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$b = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$8,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = mfe_mf_2_main__loadShare__vue__loadShare__.inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    const TRIGGER_ELE_EVENTS = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(triggerRef, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          TRIGGER_ELE_EVENTS.forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          if (isFocusable(el)) {
            virtualTriggerAriaStopWatch = mfe_mf_2_main__loadShare__vue__loadShare__.watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
              [
                "aria-controls",
                "aria-describedby",
                "aria-haspopup",
                "aria-expanded"
              ].forEach((key, idx) => {
                isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
              });
            }, { immediate: true });
          }
        }
        if (isElement(prevEl) && isFocusable(prevEl)) {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
      if (triggerRef.value && isElement(triggerRef.value)) {
        const el = triggerRef.value;
        TRIGGER_ELE_EVENTS.forEach((eventName) => {
          const handler = props[eventName];
          if (handler) {
            el.removeEventListener(eventName.slice(2).toLowerCase(), handler);
          }
        });
        triggerRef.value = void 0;
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(OnlyChild), mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": mfe_mf_2_main__loadShare__vue__loadShare__.unref(ariaControls),
        "aria-describedby": mfe_mf_2_main__loadShare__vue__loadShare__.unref(ariaDescribedby),
        "aria-expanded": mfe_mf_2_main__loadShare__vue__loadShare__.unref(ariaExpanded),
        "aria-haspopup": mfe_mf_2_main__loadShare__vue__loadShare__.unref(ariaHaspopup)
      }), {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : mfe_mf_2_main__loadShare__vue__loadShare__.createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "trigger.vue"]]);

const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");

const focusReason = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
const lastUserFocusTimestamp = mfe_mf_2_main__loadShare__vue__loadShare__.ref(0);
const lastAutomatedFocusTimestamp = mfe_mf_2_main__loadShare__vue__loadShare__.ref(0);
let focusReasonUserCount = 0;
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();
const isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
const notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
const notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
const useFocusReason = () => {
  mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};

const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  esc: "Escape",
  numpadEnter: "NumpadEnter"};

let registeredEscapeHandlers = [];
const cachedHandler = (event) => {
  if (event.code === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient)
      registeredEscapeHandlers.push(handler);
  });
  mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};

const _sfc_main$a = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = mfe_mf_2_main__loadShare__vue__loadShare__.unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
        if (!isPrevFocusedInTrap) {
          lastFocusBeforeTrapped = relatedTarget;
        }
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = mfe_mf_2_main__loadShare__vue__loadShare__.unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    async function startTrap() {
      await mfe_mf_2_main__loadShare__vue__loadShare__.nextTick();
      const trapContainer = mfe_mf_2_main__loadShare__vue__loadShare__.unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            mfe_mf_2_main__loadShare__vue__loadShare__.nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString$1(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = mfe_mf_2_main__loadShare__vue__loadShare__.unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason.value
          }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      if (props.trapped) {
        startTrap();
      }
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap();
      }
      if (forwardRef.value) {
        forwardRef.value.removeEventListener("keydown", onKeydown);
        forwardRef.value.removeEventListener("focusin", onFocusIn);
        forwardRef.value.removeEventListener("focusout", onFocusOut);
        forwardRef.value = void 0;
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);

var E="top",R="bottom",W="right",P="left",me="auto",G=[E,R,W,P],U="start",J="end",Xe="clippingParents",je="viewport",K="popper",Ye="reference",De=G.reduce(function(t,e){return t.concat([e+"-"+U,e+"-"+J])},[]),Ee=[].concat(G,[me]).reduce(function(t,e){return t.concat([e,e+"-"+U,e+"-"+J])},[]),Ge="beforeRead",Je="read",Ke="afterRead",Qe="beforeMain",Ze="main",et="afterMain",tt="beforeWrite",nt="write",rt="afterWrite",ot=[Ge,Je,Ke,Qe,Ze,et,tt,nt,rt];function C(t){return t?(t.nodeName||"").toLowerCase():null}function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Q(t){var e=H(t).Element;return t instanceof e||t instanceof Element}function B(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pe(t){if(typeof ShadowRoot=="undefined")return  false;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Mt(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},o=e.attributes[n]||{},i=e.elements[n];!B(i)||!C(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===false?i.removeAttribute(a):i.setAttribute(a,s===true?"":s);}));});}function Rt(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var o=e.elements[r],i=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),s=a.reduce(function(f,c){return f[c]="",f},{});!B(o)||!C(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(f){o.removeAttribute(f);}));});}}var Ae={name:"applyStyles",enabled:true,phase:"write",fn:Mt,effect:Rt,requires:["computeStyles"]};function q(t){return t.split("-")[0]}var X=Math.max,ve=Math.min,Z=Math.round;function ee(t,e){e===void 0&&(e=false);var n=t.getBoundingClientRect(),r=1,o=1;if(B(t)&&e){var i=t.offsetHeight,a=t.offsetWidth;a>0&&(r=Z(n.width)/a||1),i>0&&(o=Z(n.height)/i||1);}return {width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function ke(t){var e=ee(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function it(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return  true;if(n&&Pe(n)){var r=e;do{if(r&&t.isSameNode(r))return  true;r=r.parentNode||r.host;}while(r)}return  false}function N(t){return H(t).getComputedStyle(t)}function Wt(t){return ["table","td","th"].indexOf(C(t))>=0}function I(t){return ((Q(t)?t.ownerDocument:t.document)||window.document).documentElement}function ge(t){return C(t)==="html"?t:t.assignedSlot||t.parentNode||(Pe(t)?t.host:null)||I(t)}function at(t){return !B(t)||N(t).position==="fixed"?null:t.offsetParent}function Bt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&B(t)){var r=N(t);if(r.position==="fixed")return null}var o=ge(t);for(Pe(o)&&(o=o.host);B(o)&&["html","body"].indexOf(C(o))<0;){var i=N(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode;}return null}function se(t){for(var e=H(t),n=at(t);n&&Wt(n)&&N(n).position==="static";)n=at(n);return n&&(C(n)==="html"||C(n)==="body"&&N(n).position==="static")?e:n||Bt(t)||e}function Le(t){return ["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,n){return X(t,ve(e,n))}function St(t,e,n){var r=fe(t,e,n);return r>n?n:r}function st(){return {top:0,right:0,bottom:0,left:0}}function ft(t){return Object.assign({},st(),t)}function ct(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var Tt=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ft(typeof t!="number"?t:ct(t,G))};function Ht(t){var e,n=t.state,r=t.name,o=t.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=q(n.placement),f=Le(s),c=[P,W].indexOf(s)>=0,u=c?"height":"width";if(!(!i||!a)){var m=Tt(o.padding,n),v=ke(i),l=f==="y"?E:P,h=f==="y"?R:W,p=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],g=a[f]-n.rects.reference[f],x=se(i),y=x?f==="y"?x.clientHeight||0:x.clientWidth||0:0,$=p/2-g/2,d=m[l],b=y-v[u]-m[h],w=y/2-v[u]/2+$,O=fe(d,w,b),j=f;n.modifiersData[r]=(e={},e[j]=O,e.centerOffset=O-w,e);}}function Ct(t){var e=t.state,n=t.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!it(e.elements.popper,o)||(e.elements.arrow=o));}var pt={name:"arrow",enabled:true,phase:"main",fn:Ht,effect:Ct,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(t){return t.split("-")[1]}var qt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vt(t){var e=t.x,n=t.y,r=window,o=r.devicePixelRatio||1;return {x:Z(e*o)/o||0,y:Z(n*o)/o||0}}function ut(t){var e,n=t.popper,r=t.popperRect,o=t.placement,i=t.variation,a=t.offsets,s=t.position,f=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,m=t.isFixed,v=a.x,l=v===void 0?0:v,h=a.y,p=h===void 0?0:h,g=typeof u=="function"?u({x:l,y:p}):{x:l,y:p};l=g.x,p=g.y;var x=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),$=P,d=E,b=window;if(c){var w=se(n),O="clientHeight",j="clientWidth";if(w===H(n)&&(w=I(n),N(w).position!=="static"&&s==="absolute"&&(O="scrollHeight",j="scrollWidth")),w=w,o===E||(o===P||o===W)&&i===J){d=R;var A=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];p-=A-r.height,p*=f?1:-1;}if(o===P||(o===E||o===R)&&i===J){$=W;var k=m&&w===b&&b.visualViewport?b.visualViewport.width:w[j];l-=k-r.width,l*=f?1:-1;}}var D=Object.assign({position:s},c&&qt),S=u===true?Vt({x:l,y:p}):{x:l,y:p};if(l=S.x,p=S.y,f){var L;return Object.assign({},D,(L={},L[d]=y?"0":"",L[$]=x?"0":"",L.transform=(b.devicePixelRatio||1)<=1?"translate("+l+"px, "+p+"px)":"translate3d("+l+"px, "+p+"px, 0)",L))}return Object.assign({},D,(e={},e[d]=y?p+"px":"",e[$]=x?l+"px":"",e.transform="",e))}function Nt(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=r===void 0?true:r,i=n.adaptive,a=i===void 0?true:i,s=n.roundOffsets,f=s===void 0?true:s,c={placement:q(e.placement),variation:te(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement});}var Me={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:Nt,data:{}},ye={passive:true};function It(t){var e=t.state,n=t.instance,r=t.options,o=r.scroll,i=o===void 0?true:o,a=r.resize,s=a===void 0?true:a,f=H(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",n.update,ye);}),s&&f.addEventListener("resize",n.update,ye),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ye);}),s&&f.removeEventListener("resize",n.update,ye);}}var Re={name:"eventListeners",enabled:true,phase:"write",fn:function(){},effect:It,data:{}},_t={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,function(e){return _t[e]})}var zt={start:"end",end:"start"};function lt(t){return t.replace(/start|end/g,function(e){return zt[e]})}function We(t){var e=H(t),n=e.pageXOffset,r=e.pageYOffset;return {scrollLeft:n,scrollTop:r}}function Be(t){return ee(I(t)).left+We(t).scrollLeft}function Ft(t){var e=H(t),n=I(t),r=e.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+Be(t),y:s}}function Ut(t){var e,n=I(t),r=We(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=X(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=X(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Be(t),f=-r.scrollTop;return N(o||n).direction==="rtl"&&(s+=X(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}function Se(t){var e=N(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return /auto|scroll|overlay|hidden/.test(n+o+r)}function dt(t){return ["html","body","#document"].indexOf(C(t))>=0?t.ownerDocument.body:B(t)&&Se(t)?t:dt(ge(t))}function ce(t,e){var n;e===void 0&&(e=[]);var r=dt(t),o=r===((n=t.ownerDocument)==null?void 0:n.body),i=H(r),a=o?[i].concat(i.visualViewport||[],Se(r)?r:[]):r,s=e.concat(a);return o?s:s.concat(ce(ge(a)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t){var e=ee(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ht(t,e){return e===je?Te(Ft(t)):Q(e)?Xt(e):Te(Ut(I(t)))}function Yt(t){var e=ce(ge(t)),n=["absolute","fixed"].indexOf(N(t).position)>=0,r=n&&B(t)?se(t):t;return Q(r)?e.filter(function(o){return Q(o)&&it(o,r)&&C(o)!=="body"}):[]}function Gt(t,e,n){var r=e==="clippingParents"?Yt(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce(function(s,f){var c=ht(t,f);return s.top=X(c.top,s.top),s.right=ve(c.right,s.right),s.bottom=ve(c.bottom,s.bottom),s.left=X(c.left,s.left),s},ht(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function mt(t){var e=t.reference,n=t.element,r=t.placement,o=r?q(r):null,i=r?te(r):null,a=e.x+e.width/2-n.width/2,s=e.y+e.height/2-n.height/2,f;switch(o){case E:f={x:a,y:e.y-n.height};break;case R:f={x:a,y:e.y+e.height};break;case W:f={x:e.x+e.width,y:s};break;case P:f={x:e.x-n.width,y:s};break;default:f={x:e.x,y:e.y};}var c=o?Le(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case U:f[c]=f[c]-(e[u]/2-n[u]/2);break;case J:f[c]=f[c]+(e[u]/2-n[u]/2);break}}return f}function ne(t,e){e===void 0&&(e={});var n=e,r=n.placement,o=r===void 0?t.placement:r,i=n.boundary,a=i===void 0?Xe:i,s=n.rootBoundary,f=s===void 0?je:s,c=n.elementContext,u=c===void 0?K:c,m=n.altBoundary,v=m===void 0?false:m,l=n.padding,h=l===void 0?0:l,p=ft(typeof h!="number"?h:ct(h,G)),g=u===K?Ye:K,x=t.rects.popper,y=t.elements[v?g:u],$=Gt(Q(y)?y:y.contextElement||I(t.elements.popper),a,f),d=ee(t.elements.reference),b=mt({reference:d,element:x,placement:o}),w=Te(Object.assign({},x,b)),O=u===K?w:d,j={top:$.top-O.top+p.top,bottom:O.bottom-$.bottom+p.bottom,left:$.left-O.left+p.left,right:O.right-$.right+p.right},A=t.modifiersData.offset;if(u===K&&A){var k=A[o];Object.keys(j).forEach(function(D){var S=[W,R].indexOf(D)>=0?1:-1,L=[E,R].indexOf(D)>=0?"y":"x";j[D]+=k[L]*S;});}return j}function Jt(t,e){e===void 0&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=f===void 0?Ee:f,u=te(r),m=u?s?De:De.filter(function(h){return te(h)===u}):G,v=m.filter(function(h){return c.indexOf(h)>=0});v.length===0&&(v=m);var l=v.reduce(function(h,p){return h[p]=ne(t,{placement:p,boundary:o,rootBoundary:i,padding:a})[q(p)],h},{});return Object.keys(l).sort(function(h,p){return l[h]-l[p]})}function Kt(t){if(q(t)===me)return [];var e=be(t);return [lt(t),e,lt(e)]}function Qt(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?true:o,a=n.altAxis,s=a===void 0?true:a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,m=n.rootBoundary,v=n.altBoundary,l=n.flipVariations,h=l===void 0?true:l,p=n.allowedAutoPlacements,g=e.options.placement,x=q(g),y=x===g,$=f||(y||!h?[be(g)]:Kt(g)),d=[g].concat($).reduce(function(z,V){return z.concat(q(V)===me?Jt(e,{placement:V,boundary:u,rootBoundary:m,padding:c,flipVariations:h,allowedAutoPlacements:p}):V)},[]),b=e.rects.reference,w=e.rects.popper,O=new Map,j=true,A=d[0],k=0;k<d.length;k++){var D=d[k],S=q(D),L=te(D)===U,re=[E,R].indexOf(S)>=0,oe=re?"width":"height",M=ne(e,{placement:D,boundary:u,rootBoundary:m,altBoundary:v,padding:c}),T=re?L?W:P:L?R:E;b[oe]>w[oe]&&(T=be(T));var pe=be(T),_=[];if(i&&_.push(M[S]<=0),s&&_.push(M[T]<=0,M[pe]<=0),_.every(function(z){return z})){A=D,j=false;break}O.set(D,_);}if(j)for(var ue=h?3:1,xe=function(z){var V=d.find(function(de){var ae=O.get(de);if(ae)return ae.slice(0,z).every(function(Y){return Y})});if(V)return A=V,"break"},ie=ue;ie>0;ie--){var le=xe(ie);if(le==="break")break}e.placement!==A&&(e.modifiersData[r]._skip=true,e.placement=A,e.reset=true);}}var vt={name:"flip",enabled:true,phase:"main",fn:Qt,requiresIfExists:["offset"],data:{_skip:false}};function gt(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function yt(t){return [E,W,R,P].some(function(e){return t[e]>=0})}function Zt(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=ne(e,{elementContext:"reference"}),s=ne(e,{altBoundary:true}),f=gt(a,r),c=gt(s,o,i),u=yt(f),m=yt(c);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m});}var bt={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Zt};function en(t,e,n){var r=q(t),o=[P,E].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,W].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function tn(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=o===void 0?[0,0]:o,a=Ee.reduce(function(u,m){return u[m]=en(m,e.rects,i),u},{}),s=a[e.placement],f=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=a;}var wt={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:tn};function nn(t){var e=t.state,n=t.name;e.modifiersData[n]=mt({reference:e.rects.reference,element:e.rects.popper,placement:e.placement});}var He={name:"popperOffsets",enabled:true,phase:"read",fn:nn,data:{}};function rn(t){return t==="x"?"y":"x"}function on(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=o===void 0?true:o,a=n.altAxis,s=a===void 0?false:a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,m=n.padding,v=n.tether,l=v===void 0?true:v,h=n.tetherOffset,p=h===void 0?0:h,g=ne(e,{boundary:f,rootBoundary:c,padding:m,altBoundary:u}),x=q(e.placement),y=te(e.placement),$=!y,d=Le(x),b=rn(d),w=e.modifiersData.popperOffsets,O=e.rects.reference,j=e.rects.popper,A=typeof p=="function"?p(Object.assign({},e.rects,{placement:e.placement})):p,k=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(w){if(i){var L,re=d==="y"?E:P,oe=d==="y"?R:W,M=d==="y"?"height":"width",T=w[d],pe=T+g[re],_=T-g[oe],ue=l?-j[M]/2:0,xe=y===U?O[M]:j[M],ie=y===U?-j[M]:-O[M],le=e.elements.arrow,z=l&&le?ke(le):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:st(),de=V[re],ae=V[oe],Y=fe(0,O[M],z[M]),jt=$?O[M]/2-ue-Y-de-k.mainAxis:xe-Y-de-k.mainAxis,Dt=$?-O[M]/2+ue+Y+ae+k.mainAxis:ie+Y+ae+k.mainAxis,Oe=e.elements.arrow&&se(e.elements.arrow),Et=Oe?d==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,Ce=(L=D==null?void 0:D[d])!=null?L:0,Pt=T+jt-Ce-Et,At=T+Dt-Ce,qe=fe(l?ve(pe,Pt):pe,T,l?X(_,At):_);w[d]=qe,S[d]=qe-T;}if(s){var Ve,kt=d==="x"?E:P,Lt=d==="x"?R:W,F=w[b],he=b==="y"?"height":"width",Ne=F+g[kt],Ie=F-g[Lt],$e=[E,P].indexOf(x)!==-1,_e=(Ve=D==null?void 0:D[b])!=null?Ve:0,ze=$e?Ne:F-O[he]-j[he]-_e+k.altAxis,Fe=$e?F+O[he]+j[he]-_e-k.altAxis:Ie,Ue=l&&$e?St(ze,F,Fe):fe(l?ze:Ne,F,l?Fe:Ie);w[b]=Ue,S[b]=Ue-F;}e.modifiersData[r]=S;}}var xt={name:"preventOverflow",enabled:true,phase:"main",fn:on,requiresIfExists:["offset"]};function an(t){return {scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function sn(t){return t===H(t)||!B(t)?We(t):an(t)}function fn(t){var e=t.getBoundingClientRect(),n=Z(e.width)/t.offsetWidth||1,r=Z(e.height)/t.offsetHeight||1;return n!==1||r!==1}function cn(t,e,n){n===void 0&&(n=false);var r=B(e),o=B(e)&&fn(e),i=I(e),a=ee(t,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return (r||!r&&!n)&&((C(e)!=="body"||Se(i))&&(s=sn(e)),B(e)?(f=ee(e,true),f.x+=e.clientLeft,f.y+=e.clientTop):i&&(f.x=Be(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function pn(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i);});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var f=e.get(s);f&&o(f);}}),r.push(i);}return t.forEach(function(i){n.has(i.name)||o(i);}),r}function un(t){var e=pn(t);return ot.reduce(function(n,r){return n.concat(e.filter(function(o){return o.phase===r}))},[])}function ln(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t());});})),e}}function dn(t){var e=t.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ot={placement:"bottom",modifiers:[],strategy:"absolute"};function $t(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return !e.some(function(r){return !(r&&typeof r.getBoundingClientRect=="function")})}function we(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,o=e.defaultOptions,i=o===void 0?Ot:o;return function(a,s,f){f===void 0&&(f=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ot,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},u=[],m=false,v={state:c,setOptions:function(p){var g=typeof p=="function"?p(c.options):p;h(),c.options=Object.assign({},i,c.options,g),c.scrollParents={reference:Q(a)?ce(a):a.contextElement?ce(a.contextElement):[],popper:ce(s)};var x=un(dn([].concat(r,c.options.modifiers)));return c.orderedModifiers=x.filter(function(y){return y.enabled}),l(),v.update()},forceUpdate:function(){if(!m){var p=c.elements,g=p.reference,x=p.popper;if($t(g,x)){c.rects={reference:cn(g,se(x),c.options.strategy==="fixed"),popper:ke(x)},c.reset=false,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var y=0;y<c.orderedModifiers.length;y++){if(c.reset===true){c.reset=false,y=-1;continue}var $=c.orderedModifiers[y],d=$.fn,b=$.options,w=b===void 0?{}:b,O=$.name;typeof d=="function"&&(c=d({state:c,options:w,name:O,instance:v})||c);}}}},update:ln(function(){return new Promise(function(p){v.forceUpdate(),p(c);})}),destroy:function(){h(),m=true;}};if(!$t(a,s))return v;v.setOptions(f).then(function(p){!m&&f.onFirstUpdate&&f.onFirstUpdate(p);});function l(){c.orderedModifiers.forEach(function(p){var g=p.name,x=p.options,y=x===void 0?{}:x,$=p.effect;if(typeof $=="function"){var d=$({state:c,name:g,instance:v,options:y}),b=function(){};u.push(d||b);}});}function h(){u.forEach(function(p){return p()}),u=[];}return v}}we();var mn=[Re,He,Me,Ae];we({defaultModifiers:mn});var gn=[Re,He,Me,Ae,wt,vt,xt,pt,bt],yn=we({defaultModifiers:gn});

const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});

const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  ...popperArrowProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: definePropType(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};

const usePopperContentFocusTrap = (props, emit) => {
  const trapped = mfe_mf_2_main__loadShare__vue__loadShare__.ref(false);
  const focusStartRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};

const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}

const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = mfe_mf_2_main__loadShare__vue__loadShare__.unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = mfe_mf_2_main__loadShare__vue__loadShare__.shallowRef();
  const states = mfe_mf_2_main__loadShare__vue__loadShare__.ref({
    styles: {
      popper: {
        position: mfe_mf_2_main__loadShare__vue__loadShare__.unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  mfe_mf_2_main__loadShare__vue__loadShare__.watch(options, (newOptions) => {
    const instance = mfe_mf_2_main__loadShare__vue__loadShare__.unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  mfe_mf_2_main__loadShare__vue__loadShare__.watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = yn(referenceElement, popperElement, mfe_mf_2_main__loadShare__vue__loadShare__.unref(options));
  });
  mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
    destroy();
  });
  return {
    state: mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return { ...((_a = mfe_mf_2_main__loadShare__vue__loadShare__.unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(states).styles),
    attributes: mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(states).attributes),
    update: () => {
      var _a;
      return (_a = mfe_mf_2_main__loadShare__vue__loadShare__.unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = mfe_mf_2_main__loadShare__vue__loadShare__.unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}

const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = mfe_mf_2_main__loadShare__vue__loadShare__.inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
  const arrowOffset = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props.arrowOffset);
  const eventListenerModifier = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    var _a;
    const arrowEl = mfe_mf_2_main__loadShare__vue__loadShare__.unref(arrowRef);
    const offset = (_a = mfe_mf_2_main__loadShare__vue__loadShare__.unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined$1(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        mfe_mf_2_main__loadShare__vue__loadShare__.unref(arrowModifier),
        mfe_mf_2_main__loadShare__vue__loadShare__.unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => unwrapMeasurableEl(props.referenceEl) || mfe_mf_2_main__loadShare__vue__loadShare__.unref(triggerRef));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  mfe_mf_2_main__loadShare__vue__loadShare__.watch(instanceRef, (instance) => popperInstanceRef.value = instance, {
    flush: "sync"
  });
  mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => {
      var _a;
      return (_a = mfe_mf_2_main__loadShare__vue__loadShare__.unref(computedReference)) == null ? void 0 : _a.getBoundingClientRect();
    }, () => {
      update();
    });
  });
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};

const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(attributes).popper);
  const contentZIndex = mfe_mf_2_main__loadShare__vue__loadShare__.ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    return [
      { zIndex: mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentZIndex) },
      mfe_mf_2_main__loadShare__vue__loadShare__.unref(styles).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};

const __default__$7 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$9 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$7,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      ariaModal,
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = mfe_mf_2_main__loadShare__vue__loadShare__.inject(formItemContextKey, void 0);
    mfe_mf_2_main__loadShare__vue__loadShare__.provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef
    });
    if (formItemContext) {
      mfe_mf_2_main__loadShare__vue__loadShare__.provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    let triggerTargetAriaStopWatch = void 0;
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    const togglePopperAlive = () => {
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = mfe_mf_2_main__loadShare__vue__loadShare__.unref(triggerTargetEl || contentRef.value);
        const prevEl = mfe_mf_2_main__loadShare__vue__loadShare__.unref(prevTriggerTargetEl || contentRef.value);
        if (isElement(el)) {
          triggerTargetAriaStopWatch = mfe_mf_2_main__loadShare__vue__loadShare__.watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (prevEl !== el && isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.visible, togglePopperAlive, { immediate: true });
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("div", mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentAttrs), {
        style: mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentStyle),
        class: mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentClass),
        tabindex: "-1",
        onMouseenter: (e) => _ctx.$emit("mouseenter", e),
        onMouseleave: (e) => _ctx.$emit("mouseleave", e)
      }), [
        mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElFocusTrap), {
          trapped: mfe_mf_2_main__loadShare__vue__loadShare__.unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentRef),
          "focus-start-el": mfe_mf_2_main__loadShare__vue__loadShare__.unref(focusStartRef),
          onFocusAfterTrapped: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onFocusAfterTrapped),
          onFocusAfterReleased: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onFocusAfterReleased),
          onFocusin: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onFocusInTrap),
          onFocusoutPrevented: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onFocusoutPrevented),
          onReleaseRequested: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onReleaseRequested)
        }, {
          default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
            mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "content.vue"]]);

const ElPopper = withInstall(Popper);

const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");

const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});

const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: teleportProps.to.type
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});

const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space]
  }
});

const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => isFunction$1(props[updateEventKeyRaw]));
    const isModelBindingAbsent = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$1(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$1(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction$1(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};

const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];

const isTriggerType = (trigger, type) => {
  if (isArray$1(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(mfe_mf_2_main__loadShare__vue__loadShare__.unref(trigger), type) && handler(e);
  };
};

const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};

const __default__$6 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$8 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$6,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = mfe_mf_2_main__loadShare__vue__loadShare__.inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (mfe_mf_2_main__loadShare__vue__loadShare__.unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElPopperTrigger), {
        id: mfe_mf_2_main__loadShare__vue__loadShare__.unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: mfe_mf_2_main__loadShare__vue__loadShare__.unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).e("trigger")),
        onBlur: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onBlur),
        onClick: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onClick),
        onContextmenu: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onContextMenu),
        onFocus: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onFocus),
        onMouseenter: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onMouseenter),
        onMouseleave: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onMouseleave),
        onKeydown: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onKeydown)
      }, {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "trigger.vue"]]);

const _sfc_main$7 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default", { key: 0 }) : (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.Teleport, {
        key: 1,
        to: _ctx.to
      }, [
        mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "teleport.vue"]]);

const ElTeleport = withInstall(Teleport);

const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const createContainer = (id) => {
  const container = document.createElement("div");
  container.id = id;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeMount(() => {
    if (!isClient)
      return;
    if (!document.body.querySelector(selector.value)) {
      createContainer(id.value);
    }
  });
  return {
    id,
    selector
  };
};

const __default__$5 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$6 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$5,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const popperContentRef = computedEager(() => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
    });
    let stopHandle;
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = mfe_mf_2_main__loadShare__vue__loadShare__.inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return props.persistent;
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      stopHandle == null ? void 0 : stopHandle();
    });
    const shouldRender = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.unref(persistentRef) ? true : mfe_mf_2_main__loadShare__vue__loadShare__.unref(open);
    });
    const shouldShow = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return props.disabled ? false : mfe_mf_2_main__loadShare__vue__loadShare__.unref(open);
    });
    const appendTo = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = mfe_mf_2_main__loadShare__vue__loadShare__.ref(true);
    const onTransitionLeave = () => {
      onHide();
      isFocusInsideContent() && tryFocus(document.body);
      ariaHidden.value = true;
    };
    const stopWhenControlled = () => {
      if (mfe_mf_2_main__loadShare__vue__loadShare__.unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && mfe_mf_2_main__loadShare__vue__loadShare__.unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (mfe_mf_2_main__loadShare__vue__loadShare__.unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    const isFocusInsideContent = (event) => {
      var _a;
      const popperContent = (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || document.activeElement;
      return popperContent == null ? void 0 : popperContent.contains(activeElement);
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => mfe_mf_2_main__loadShare__vue__loadShare__.unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      } else {
        ariaHidden.value = false;
        stopHandle = onClickOutside(popperContentRef, () => {
          if (mfe_mf_2_main__loadShare__vue__loadShare__.unref(controlled))
            return;
          const $trigger = mfe_mf_2_main__loadShare__vue__loadShare__.unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      }
    }, {
      flush: "post"
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef,
      isFocusInsideContent
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElTeleport), {
        disabled: !_ctx.teleported,
        to: mfe_mf_2_main__loadShare__vue__loadShare__.unref(appendTo)
      }, {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(mfe_mf_2_main__loadShare__vue__loadShare__.Transition, {
            name: mfe_mf_2_main__loadShare__vue__loadShare__.unref(transitionClass),
            onAfterLeave: onTransitionLeave,
            onBeforeEnter,
            onAfterEnter: onAfterShow,
            onBeforeLeave
          }, {
            default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
              mfe_mf_2_main__loadShare__vue__loadShare__.unref(shouldRender) ? mfe_mf_2_main__loadShare__vue__loadShare__.withDirectives((mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElPopperContent), mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({
                key: 0,
                id: mfe_mf_2_main__loadShare__vue__loadShare__.unref(id),
                ref_key: "contentRef",
                ref: contentRef
              }, _ctx.$attrs, {
                "aria-label": _ctx.ariaLabel,
                "aria-hidden": ariaHidden.value,
                "boundaries-padding": _ctx.boundariesPadding,
                "fallback-placements": _ctx.fallbackPlacements,
                "gpu-acceleration": _ctx.gpuAcceleration,
                offset: _ctx.offset,
                placement: _ctx.placement,
                "popper-options": _ctx.popperOptions,
                "arrow-offset": _ctx.arrowOffset,
                strategy: _ctx.strategy,
                effect: _ctx.effect,
                enterable: _ctx.enterable,
                pure: _ctx.pure,
                "popper-class": _ctx.popperClass,
                "popper-style": [_ctx.popperStyle, mfe_mf_2_main__loadShare__vue__loadShare__.unref(contentStyle)],
                "reference-el": _ctx.referenceEl,
                "trigger-target-el": _ctx.triggerTargetEl,
                visible: mfe_mf_2_main__loadShare__vue__loadShare__.unref(shouldShow),
                "z-index": _ctx.zIndex,
                onMouseenter: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onContentEnter),
                onMouseleave: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onContentLeave),
                onBlur,
                onClose: mfe_mf_2_main__loadShare__vue__loadShare__.unref(onClose)
              }), {
                default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
                  mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "arrow-offset", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                [mfe_mf_2_main__loadShare__vue__loadShare__.vShow, mfe_mf_2_main__loadShare__vue__loadShare__.unref(shouldShow)]
              ]) : mfe_mf_2_main__loadShare__vue__loadShare__.createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "content.vue"]]);

const __default__$4 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElTooltip"
});
const _sfc_main$5 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$4,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const ns = useNamespace("tooltip");
    const id = useId();
    const popperRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const contentRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = mfe_mf_2_main__loadShare__vue__loadShare__.unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = mfe_mf_2_main__loadShare__vue__loadShare__.ref(false);
    const toggleReason = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "showAfter"),
      hideAfter: mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "hideAfter"),
      autoClose: mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    const kls = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return [ns.b(), props.popperClass];
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: mfe_mf_2_main__loadShare__vue__loadShare__.readonly(open),
      trigger: mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (mfe_mf_2_main__loadShare__vue__loadShare__.unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a;
      return (_a = contentRef.value) == null ? void 0 : _a.isFocusInsideContent(event);
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.onDeactivated(() => open.value && hide());
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
              _ctx.$slots.default ? mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default", { key: 0 }) : mfe_mf_2_main__loadShare__vue__loadShare__.createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": mfe_mf_2_main__loadShare__vue__loadShare__.unref(kls),
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            "arrow-offset": _ctx.arrowOffset,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
              mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, ["innerHTML"])) : (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("span", { key: 1 }, mfe_mf_2_main__loadShare__vue__loadShare__.toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElPopperArrow), { key: 0 })) : mfe_mf_2_main__loadShare__vue__loadShare__.createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "arrow-offset", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "tooltip.vue"]]);

const ElTooltip = withInstall(Tooltip);

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns whether the color is monochrome.
     */
    TinyColor.prototype.isMonochrome = function () {
        var s = this.toHsl().s;
        return s === 0;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    TinyColor.prototype.toHexShortString = function (allowShortChar) {
        if (allowShortChar === void 0) { allowShortChar = false; }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round(bound01(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

const flattedChildren = (children) => {
  const vNodes = isArray$1(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray$1(child)) {
      result.push(...flattedChildren(child));
    } else if (mfe_mf_2_main__loadShare__vue__loadShare__.isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (mfe_mf_2_main__loadShare__vue__loadShare__.isVNode(child) && isArray$1(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (mfe_mf_2_main__loadShare__vue__loadShare__.isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};

const nodeList = /* @__PURE__ */ new Map();
if (isClient) {
  let startClick;
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    if (startClick) {
      for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
          documentHandler(e, startClick);
        }
      }
      startClick = void 0;
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (isArray$1(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};

const __default__$3 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$4 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$3,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.Transition, mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({
        name: mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).b()
      }, mfe_mf_2_main__loadShare__vue__loadShare__.toHandlers(on)), {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "collapse-transition.vue"]]);

const ElCollapseTransition = withInstall(CollapseTransition);

let SubMenu$1 = class SubMenu {
  constructor(parent, domNode) {
    this.parent = parent;
    this.domNode = domNode;
    this.subIndex = 0;
    this.subIndex = 0;
    this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li");
    this.addListeners();
  }
  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1;
    }
    this.subMenuItems[idx].focus();
    this.subIndex = idx;
  }
  addListeners() {
    const parentNode = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener("keydown", (event) => {
        let prevDef = false;
        switch (event.code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode, "mouseleave");
            break;
          }
          case EVENT_CODE.enter:
          case EVENT_CODE.numpadEnter:
          case EVENT_CODE.space: {
            prevDef = true;
            event.currentTarget.click();
            break;
          }
        }
        if (prevDef) {
          event.preventDefault();
          event.stopPropagation();
        }
        return false;
      });
    });
  }
};

let MenuItem$1 = class MenuItem {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init(namespace);
  }
  init(namespace) {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(`.${namespace}-menu`);
    if (menuChild) {
      this.submenu = new SubMenu$1(this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.numpadEnter:
        case EVENT_CODE.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
};

let Menu$1 = class Menu {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.init(namespace);
  }
  init(namespace) {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem$1(child, namespace);
      }
    });
  }
};

const __default__$2 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElMenuCollapseTransition"
});
const _sfc_main$3 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$2,
  setup(__props) {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.Transition, mfe_mf_2_main__loadShare__vue__loadShare__.mergeProps({ mode: "out-in" }, mfe_mf_2_main__loadShare__vue__loadShare__.unref(listeners)), {
        default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "menu-collapse-transition.vue"]]);

function useMenu(instance, currentIndex) {
  const indexPath = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}

function useMenuColor(props) {
  const menuBarColor = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
    const color = props.backgroundColor;
    return color ? new TinyColor(color).shade(20).toString() : "";
  });
  return menuBarColor;
}

const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => ns.cssVarBlock({
    "text-color": props.textColor || "",
    "hover-text-color": props.textColor || "",
    "bg-color": props.backgroundColor || "",
    "hover-bg-color": useMenuColor(props).value || "",
    "active-color": props.activeTextColor || "",
    level: `${level}`
  }));
};

const MENU_INJECTION_KEY = "rootMenu";
const SUB_MENU_INJECTION_KEY = "subMenu:";

const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$1 = "ElSubMenu";
var SubMenu = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: COMPONENT_NAME$1,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = mfe_mf_2_main__loadShare__vue__loadShare__.inject(MENU_INJECTION_KEY);
    if (!rootMenu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const subMenu = mfe_mf_2_main__loadShare__vue__loadShare__.inject(`${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const items = mfe_mf_2_main__loadShare__vue__loadShare__.ref({});
    const subMenus = mfe_mf_2_main__loadShare__vue__loadShare__.ref({});
    let timeout;
    const mouseInChild = mfe_mf_2_main__loadShare__vue__loadShare__.ref(false);
    const verticalTitleRef = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const vPopper = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const currentPlacement = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => subMenu.level === 0);
    const appendToBody = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      const value = props.teleported;
      return isUndefined(value) ? isFirstLevel.value : value;
    });
    const menuTransitionName = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => rootMenu.openedMenus.includes(props.index));
    const active = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => [...Object.values(items.value), ...Object.values(subMenus.value)].some(({ active: active2 }) => active2));
    const mode = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => rootMenu.props.mode);
    const persistent = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => rootMenu.props.persistent);
    const item = mfe_mf_2_main__loadShare__vue__loadShare__.reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const subMenuPopperOffset = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return (_a = props.popperOffset) != null ? _a : rootMenu.props.popperOffset;
    });
    const subMenuPopperClass = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return (_a = props.popperClass) != null ? _a : rootMenu.props.popperClass;
    });
    const subMenuShowTimeout = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return (_a = props.showTimeout) != null ? _a : rootMenu.props.showTimeout;
    });
    const subMenuHideTimeout = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => {
      var _a;
      return (_a = props.hideTimeout) != null ? _a : rootMenu.props.hideTimeout;
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (event.type === "focus")
        return;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        subMenu.mouseInChild.value = true;
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        subMenu.mouseInChild.value = false;
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), subMenuHideTimeout.value));
      if (appendToBody.value && deepDispatch) {
        (_a = subMenu.handleMouseleave) == null ? void 0 : _a.call(subMenu, true);
      }
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      mfe_mf_2_main__loadShare__vue__loadShare__.provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        mfe_mf_2_main__loadShare__vue__loadShare__.h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString$1(subMenuTitleIcon.value) ? mfe_mf_2_main__loadShare__vue__loadShare__.h(instance.appContext.components[subMenuTitleIcon.value]) : mfe_mf_2_main__loadShare__vue__loadShare__.h(subMenuTitleIcon.value)
        })
      ];
      const child = rootMenu.isMenuPopup ? mfe_mf_2_main__loadShare__vue__loadShare__.h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: subMenuPopperOffset.value,
        showArrow: false,
        persistent: persistent.value,
        popperClass: subMenuPopperClass.value,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return mfe_mf_2_main__loadShare__vue__loadShare__.h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              subMenuPopperClass.value
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            mfe_mf_2_main__loadShare__vue__loadShare__.h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => mfe_mf_2_main__loadShare__vue__loadShare__.h("div", {
          class: nsSubMenu.e("title"),
          onClick: handleClick
        }, titleTag)
      }) : mfe_mf_2_main__loadShare__vue__loadShare__.h(mfe_mf_2_main__loadShare__vue__loadShare__.Fragment, {}, [
        mfe_mf_2_main__loadShare__vue__loadShare__.h("div", {
          class: nsSubMenu.e("title"),
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        mfe_mf_2_main__loadShare__vue__loadShare__.h(ElCollapseTransition, {}, {
          default: () => {
            var _a2;
            return mfe_mf_2_main__loadShare__vue__loadShare__.withDirectives(mfe_mf_2_main__loadShare__vue__loadShare__.h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[mfe_mf_2_main__loadShare__vue__loadShare__.vShow, opened.value]]);
          }
        })
      ]);
      return mfe_mf_2_main__loadShare__vue__loadShare__.h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});

const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: iconPropType,
    default: () => more_default
  },
  popperEffect: {
    type: definePropType(String),
    default: "dark"
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  persistent: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => isArray$1(indexPath) && indexPath.every((path) => isString$1(path));
const menuEmits = {
  close: (index, indexPath) => isString$1(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString$1(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString$1(index) && checkIndexPath(indexPath) && isObject$1(item) && (isUndefined(routerResult) || routerResult instanceof Promise)
};
var Menu = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = mfe_mf_2_main__loadShare__vue__loadShare__.ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = mfe_mf_2_main__loadShare__vue__loadShare__.ref(-1);
    const openedMenus = mfe_mf_2_main__loadShare__vue__loadShare__.ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = mfe_mf_2_main__loadShare__vue__loadShare__.ref(props.defaultActive);
    const items = mfe_mf_2_main__loadShare__vue__loadShare__.ref({});
    const subMenus = mfe_mf_2_main__loadShare__vue__loadShare__.ref({});
    const isMenuPopup = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props.mode === "horizontal" || props.mode === "vertical" && props.collapse);
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      isOpened ? closeMenu(index, indexPath) : openMenu(index, indexPath);
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (isNil(index) || isNil(indexPath))
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      var _a;
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      activeIndex.value = (_a = item == null ? void 0 : item.index) != null ? _a : val;
    };
    const calcMenuItemWidth = (menuItem) => {
      const computedStyle = getComputedStyle(menuItem);
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10);
      const marginRight = Number.parseInt(computedStyle.marginRight, 10);
      return menuItem.offsetWidth + marginLeft + marginRight || 0;
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
      const moreItemWidth = 64;
      const computedMenuStyle = getComputedStyle(menu.value);
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10);
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        if (item.nodeName === "#comment")
          return;
        calcWidth += calcMenuItemWidth(item);
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const getIndexPath = (index) => subMenus.value[index].indexPath;
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      if (sliceIndex.value === calcSliceIndex())
        return;
      const callback = () => {
        sliceIndex.value = -1;
        mfe_mf_2_main__loadShare__vue__loadShare__.nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.watch(items.value, initMenu);
    let resizeStopper;
    mfe_mf_2_main__loadShare__vue__loadShare__.watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    const mouseInChild = mfe_mf_2_main__loadShare__vue__loadShare__.ref(false);
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      mfe_mf_2_main__loadShare__vue__loadShare__.provide(MENU_INJECTION_KEY, mfe_mf_2_main__loadShare__vue__loadShare__.reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      mfe_mf_2_main__loadShare__vue__loadShare__.provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild,
        level: 0
      });
    }
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      if (props.mode === "horizontal") {
        new Menu$1(instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        updateActiveIndex,
        handleResize
      });
    }
    const ulStyle = useMenuCssVar(props, 0);
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(mfe_mf_2_main__loadShare__vue__loadShare__.h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow"),
            popperOffset: props.popperOffset
          }, {
            title: () => mfe_mf_2_main__loadShare__vue__loadShare__.h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, {
              default: () => mfe_mf_2_main__loadShare__vue__loadShare__.h(props.ellipsisIcon)
            }),
            default: () => slotMore
          }));
        }
      }
      const directives = props.closeOnClickOutside ? [
        [
          ClickOutside,
          () => {
            if (!openedMenus.value.length)
              return;
            if (!mouseInChild.value) {
              openedMenus.value.forEach((openedMenu) => emit("close", openedMenu, getIndexPath(openedMenu)));
              openedMenus.value = [];
            }
          }
        ]
      ] : [];
      const vMenu = mfe_mf_2_main__loadShare__vue__loadShare__.withDirectives(mfe_mf_2_main__loadShare__vue__loadShare__.h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]), directives);
      if (props.collapseTransition && props.mode === "vertical") {
        return mfe_mf_2_main__loadShare__vue__loadShare__.h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});

const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString$1(item.index) && isArray$1(item.indexPath)
};

const COMPONENT_NAME = "ElMenuItem";
const __default__$1 = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$2 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__$1,
  props: menuItemProps,
  emits: menuItemEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    isPropAbsent(props.index) && debugWarn();
    const instance = mfe_mf_2_main__loadShare__vue__loadShare__.getCurrentInstance();
    const rootMenu = mfe_mf_2_main__loadShare__vue__loadShare__.inject(MENU_INJECTION_KEY);
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, mfe_mf_2_main__loadShare__vue__loadShare__.toRef(props, "index"));
    const subMenu = mfe_mf_2_main__loadShare__vue__loadShare__.inject(`${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`);
    if (!subMenu)
      throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = mfe_mf_2_main__loadShare__vue__loadShare__.computed(() => props.index === rootMenu.activeIndex);
    const item = mfe_mf_2_main__loadShare__vue__loadShare__.reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    mfe_mf_2_main__loadShare__vue__loadShare__.onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    mfe_mf_2_main__loadShare__vue__loadShare__.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    expose({
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    });
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("li", {
        class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass([
          mfe_mf_2_main__loadShare__vue__loadShare__.unref(nsMenuItem).b(),
          mfe_mf_2_main__loadShare__vue__loadShare__.unref(nsMenuItem).is("active", mfe_mf_2_main__loadShare__vue__loadShare__.unref(active)),
          mfe_mf_2_main__loadShare__vue__loadShare__.unref(nsMenuItem).is("disabled", _ctx.disabled)
        ]),
        role: "menuitem",
        tabindex: "-1",
        onClick: handleClick
      }, [
        mfe_mf_2_main__loadShare__vue__loadShare__.unref(parentMenu).type.name === "ElMenu" && mfe_mf_2_main__loadShare__vue__loadShare__.unref(rootMenu).props.collapse && _ctx.$slots.title ? (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createBlock(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ElTooltip), {
          key: 0,
          effect: mfe_mf_2_main__loadShare__vue__loadShare__.unref(rootMenu).props.popperEffect,
          placement: "right",
          "fallback-placements": ["left"],
          persistent: mfe_mf_2_main__loadShare__vue__loadShare__.unref(rootMenu).props.persistent
        }, {
          content: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
            mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "title")
          ]),
          default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
            mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("div", {
              class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass(mfe_mf_2_main__loadShare__vue__loadShare__.unref(nsMenu).be("tooltip", "trigger"))
            }, [
              mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
            ], 2)
          ]),
          _: 3
        }, 8, ["effect", "persistent"])) : (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock(mfe_mf_2_main__loadShare__vue__loadShare__.Fragment, { key: 1 }, [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default"),
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "title")
        ], 64))
      ], 2);
    };
  }
});
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "menu-item.vue"]]);

const menuItemGroupProps = {
  title: String
};

const __default__ = mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  name: "ElMenuItemGroup"
});
const _sfc_main$1 = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  ...__default__,
  props: menuItemGroupProps,
  setup(__props) {
    const ns = useNamespace("menu-item-group");
    return (_ctx, _cache) => {
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("li", {
        class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).b())
      }, [
        mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("div", {
          class: mfe_mf_2_main__loadShare__vue__loadShare__.normalizeClass(mfe_mf_2_main__loadShare__vue__loadShare__.unref(ns).e("title"))
        }, [
          !_ctx.$slots.title ? (mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock(mfe_mf_2_main__loadShare__vue__loadShare__.Fragment, { key: 0 }, [
            mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode(mfe_mf_2_main__loadShare__vue__loadShare__.toDisplayString(_ctx.title), 1)
          ], 64)) : mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "title", { key: 1 })
        ], 2),
        mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("ul", null, [
          mfe_mf_2_main__loadShare__vue__loadShare__.renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var MenuItemGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "menu-item-group.vue"]]);

const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
const ElMenuItemGroup = withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);

const _hoisted_1 = { style: { "display": "flex" } };
const _sfc_main = /* @__PURE__ */ mfe_mf_2_main__loadShare__vue__loadShare__.defineComponent({
  __name: "App",
  setup(__props) {
    const startTime = new Date(Date.now()).toLocaleTimeString();
    const location = window.location;
    const pathname = mfe_mf_2_main__loadShare__vue__loadShare__.ref(location.pathname);
    window.addEventListener("popstate", () => {
      pathname.value = location.pathname;
    });
    return (_ctx, _cache) => {
      const _component_el_menu_item = ElMenuItem;
      const _component_el_menu_item_group = ElMenuItemGroup;
      const _component_el_sub_menu = ElSubMenu;
      const _component_el_menu = ElMenu;
      return mfe_mf_2_main__loadShare__vue__loadShare__.openBlock(), mfe_mf_2_main__loadShare__vue__loadShare__.createElementBlock("div", _hoisted_1, [
        mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu, {
          "default-active": pathname.value,
          class: "el-menu-vertical-demo"
        }, {
          default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
            mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode(" mfe-main " + mfe_mf_2_main__loadShare__vue__loadShare__.toDisplayString(mfe_mf_2_main__loadShare__vue__loadShare__.unref(startTime)) + " ", 1),
            mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_sub_menu, { index: "vite-vue-app" }, {
              title: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[4] || (_cache[4] = [
                mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("span", null, "vite-vue-app", -1)
              ])),
              default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
                mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item_group, null, {
                  default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
                    mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item, {
                      index: "/module-federation-spa-boilerplate/vite-vue-app/home/",
                      onClick: _cache[0] || (_cache[0] = ($event) => mfe_mf_2_main__loadShare__vue__loadShare__.unref(tt$1)("/module-federation-spa-boilerplate/vite-vue-app/home/"))
                    }, {
                      default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[5] || (_cache[5] = [
                        mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode("home")
                      ])),
                      _: 1,
                      __: [5]
                    }),
                    mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item, {
                      index: "/module-federation-spa-boilerplate/vite-vue-app/about",
                      onClick: _cache[1] || (_cache[1] = ($event) => mfe_mf_2_main__loadShare__vue__loadShare__.unref(tt$1)("/module-federation-spa-boilerplate/vite-vue-app/about"))
                    }, {
                      default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[6] || (_cache[6] = [
                        mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode("about")
                      ])),
                      _: 1,
                      __: [6]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_sub_menu, { index: "vite-vue-app" }, {
              title: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[7] || (_cache[7] = [
                mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("span", null, "rspack_react_app", -1)
              ])),
              default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
                mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item_group, null, {
                  default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => [
                    mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item, {
                      index: "/module-federation-spa-boilerplate/rspack_react_app/home",
                      onClick: _cache[2] || (_cache[2] = ($event) => mfe_mf_2_main__loadShare__vue__loadShare__.unref(tt$1)("/module-federation-spa-boilerplate/rspack_react_app/home"))
                    }, {
                      default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[8] || (_cache[8] = [
                        mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode("home")
                      ])),
                      _: 1,
                      __: [8]
                    }),
                    mfe_mf_2_main__loadShare__vue__loadShare__.createVNode(_component_el_menu_item, {
                      index: "/module-federation-spa-boilerplate/rspack_react_app/about",
                      onClick: _cache[3] || (_cache[3] = ($event) => mfe_mf_2_main__loadShare__vue__loadShare__.unref(tt$1)("/module-federation-spa-boilerplate/rspack_react_app/about"))
                    }, {
                      default: mfe_mf_2_main__loadShare__vue__loadShare__.withCtx(() => _cache[9] || (_cache[9] = [
                        mfe_mf_2_main__loadShare__vue__loadShare__.createTextVNode("about")
                      ])),
                      _: 1,
                      __: [9]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["default-active"]),
        _cache[10] || (_cache[10] = mfe_mf_2_main__loadShare__vue__loadShare__.createElementVNode("div", { id: "mfe-apps" }, null, -1))
      ]);
    };
  }
});

console.log('render main', +new Date() - window.__mfe__startTime);
function printRenderChildAppTime() {
  console.log('render child app', +new Date() - window.__mfe__startTime);
}

const app = mfe_mf_2_main__loadShare__vue__loadShare__.createApp(_sfc_main);

app.mount('#app');

apps.forEach((item) => {
  const appCode = item.appCode;
  Tt$1(
    appCode,
    () => index_cjs.loadRemote(`${appCode}/main`).finally(printRenderChildAppTime),
    ({ pathname }) => item.routes.some(route => pathname.startsWith(route.replace(/\/?$/, "/")))  ,
  );
});
It$1();
