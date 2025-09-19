import{s as tt,u as F,h as N,K as Be,n as nt,y as B,E as qe,aa as ze,D as ae,r as rt,w as st}from"./@vue-c8b849dd.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof window<"u";function ot(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const s=t[r];n[r]=I(s)?s.map(e):e(s)}return n}const W=()=>{},I=Array.isArray,ct=/\/$/,it=e=>e.replace(ct,"");function ue(e,t,n="/"){let r,s={},l="",d="";const m=t.indexOf("#");let i=t.indexOf("?");return m<i&&m>=0&&(i=-1),i>-1&&(r=t.slice(0,i),l=t.slice(i+1,m>-1?m:t.length),s=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=ft(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return I(e)?ke(e,t):I(t)?ke(t,e):e===t}function ke(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function ht(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),it(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function vt(e,t){he.set(e,t)}function yt(e){const t=he.get(e);return he.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let m=s.includes(e.slice(l))?e.slice(l).length:1,i=s.slice(m);return i[0]!=="/"&&(i="/"+i),Se(i,"")}return Se(n,e)+r+s}function Et(e,t,n,r){let s=[],l=[],d=null;const m=({state:u})=>{const g=Ke(e,location),R=n.value,b=t.value;let C=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}C=b?u.position-b.position:0}else r(g);s.forEach(E=>{E(n.value,R,{delta:C,type:X.pop,direction:C?C>0?Y.forward:Y.back:Y.unknown})})};function i(){d=n.value}function f(u){s.push(u);const g=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(g),g}function o(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:ee()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o),{pauseListeners:i,listen:f,destroy:a}}function be(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ke(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:Rt()+e+i;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch{n[o?"replace":"assign"](u)}}function d(i,f){const o=S({},t.state,be(s.value.back,i,s.value.forward,!0),f,{position:s.value.position});l(i,o,!0),r.value=i}function m(i,f){const o=S({},s.value,t.state,{forward:i,scroll:ee()});l(o.current,o,!0);const a=S({},be(r.value,i,null),{position:o.position+1},f);l(i,a,!1),r.value=i}return{location:r,state:s,push:m,replace:d}}function wt(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ln(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wt(e)}function St(e){return typeof e=="string"||e&&typeof e=="object"}function Ve(e){return typeof e=="string"||typeof e=="symbol"}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},De=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function K(e,t){return S(new Error,{type:e,[De]:!0},t)}function $(e,t){return e instanceof Error&&De in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",kt={sensitive:!1,strict:!1,start:!0,end:!0},Ct=/[.+*?^${}()[\]/\\]/g;function bt(e,t){const n=S({},kt,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(Ct,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:b,optional:C,regexp:E}=u;l.push({name:R,repeatable:b,optional:C});const w=E||_e;if(w!==_e){g+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${w}): `+M.message)}}let O=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;a||(O=C&&f.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,g+=20,C&&(g+=-8),b&&(g+=-20),w===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function m(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const g=o[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function i(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const g of u)if(g.type===0)o+=g.value;else if(g.type===1){const{value:R,repeatable:b,optional:C}=g,E=R in f?f[R]:"";if(I(E)&&!b)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const w=I(E)?E.join("/"):E;if(!w)if(C)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=w}}return o||"/"}return{re:d,score:r,keys:l,parse:m,stringify:i}}function At(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _t(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=At(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(Oe(r))return 1;if(Oe(s))return-1}return s.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ot={type:0,value:""},xt=/[a-zA-Z0-9_]/;function Mt(e){if(!e)return[[]];if(e==="/")return[[Ot]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let m=0,i,f="",o="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;m<e.length;){if(i=e[m++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),d()):i===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:i==="("?n=2:xt.test(i)?u():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case 2:i===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+i:n=3:o+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Nt(e,t,n){const r=bt(Mt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function It(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const g=!u,R=Lt(o);R.aliasOf=u&&u.record;const b=Ne(t,o),C=[R];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)C.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,w;for(const O of C){const{path:M}=O;if(a&&M[0]!=="/"){const j=a.record.path,L=j[j.length-1]==="/"?"":"/";O.path=a.record.path+(M&&L+M)}if(E=Nt(O,a,b),u?u.alias.push(E):(w=w||E,w!==E&&w.alias.push(E),g&&o.name&&!Me(E)&&d(o.name)),R.children){const j=R.children;for(let L=0;L<j.length;L++)l(j[L],E,u&&u.children[L])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return w?()=>{d(w)}:W}function d(o){if(Ve(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function m(){return n}function i(o){let a=0;for(;a<n.length&&_t(o,n[a])>=0&&(o.record.path!==n[a].record.path||!Ue(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!Me(o)&&r.set(o.record.name,o)}function f(o,a){let u,g={},R,b;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw K(1,{location:o});b=u.record.name,g=S(xe(a.params,u.keys.filter(w=>!w.optional).map(w=>w.name)),o.params&&xe(o.params,u.keys.map(w=>w.name))),R=u.stringify(g)}else if("path"in o)R=o.path,u=n.find(w=>w.re.test(R)),u&&(g=u.parse(R),b=u.record.name);else{if(u=a.name?r.get(a.name):n.find(w=>w.re.test(a.path)),!u)throw K(1,{location:o,currentLocation:a});b=u.record.name,g=S({},a.params,o.params),R=u.stringify(g)}const C=[];let E=u;for(;E;)C.unshift(E.record),E=E.parent;return{name:b,path:R,params:g,matched:C,meta:Ht(C)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:s}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const Qe=/#/g,Tt=/&/g,jt=/\//g,Bt=/=/g,qt=/\?/g,Fe=/\+/g,zt=/%5B/g,Gt=/%5D/g,We=/%5E/g,Kt=/%60/g,Ye=/%7B/g,Vt=/%7C/g,Xe=/%7D/g,Dt=/%20/g;function me(e){return encodeURI(""+e).replace(Vt,"|").replace(zt,"[").replace(Gt,"]")}function Ut(e){return me(e).replace(Ye,"{").replace(Xe,"}").replace(We,"^")}function de(e){return me(e).replace(Fe,"%2B").replace(Dt,"+").replace(Qe,"%23").replace(Tt,"%26").replace(Kt,"`").replace(Ye,"{").replace(Xe,"}").replace(We,"^")}function Qt(e){return de(e).replace(Bt,"%3D")}function Ft(e){return me(e).replace(Qe,"%23").replace(qt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(jt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Fe," "),d=l.indexOf("="),m=J(d<0?l:l.slice(0,d)),i=d<0?null:J(l.slice(d+1));if(m in t){let f=t[m];I(f)||(f=t[m]=[f]),f.push(i)}else t[m]=i}return t}function Ie(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zt=Symbol(""),Le=Symbol(""),te=Symbol(""),ge=Symbol(""),pe=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function T(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,m)=>{const i=a=>{a===!1?m(K(4,{from:n,to:t})):a instanceof Error?m(a):St(a)?m(K(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,i);let o=Promise.resolve(f);e.length<3&&(o=o.then(i)),o.catch(a=>m(a))})}function fe(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Jt(m)){const f=(m.__vccOpts||m)[t];f&&s.push(T(f,n,r,l,d))}else{let i=m();s.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ot(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&T(u,n,r,l,d)()}))}}return s}function Jt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=B(te),n=B(ge),r=N(()=>t.resolve(F(e.to))),s=N(()=>{const{matched:i}=r.value,{length:f}=i,o=i[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(G.bind(null,o));if(u>-1)return u;const g=He(i[f-2]);return f>1&&He(o)===g&&a[a.length-1].path!==g?a.findIndex(G.bind(null,i[f-2])):u}),l=N(()=>s.value>-1&&rn(n.params,r.value.params)),d=N(()=>s.value>-1&&s.value===n.matched.length-1&&Ge(n.params,r.value.params));function m(i={}){return nn(i)?t[F(e.replace)?"replace":"push"](F(e.to)).catch(W):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const en=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Be($e(e)),{options:r}=B(te),s=N(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),tn=en;function nn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!I(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e??t??n,sn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=B(pe),s=N(()=>e.route||r.value),l=B(Le,0),d=N(()=>{let f=F(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),m=N(()=>s.value.matched[d.value]);ae(Le,N(()=>d.value+1)),ae(Zt,m),ae(pe,s);const i=rt();return st(()=>[i.value,m.value,e.name],([f,o,a],[u,g,R])=>{o&&(o.instances[a]=f,g&&g!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),f&&o&&(!g||!G(o,g)||!u)&&(o.enterCallbacks[a]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=m.value,u=a&&a.components[o];if(!u)return je(n.default,{Component:u,route:f});const g=a.props[o],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,C=ze(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[o]=null)},ref:i}));return je(n.default,{Component:C,route:f})||C}}});function je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const on=sn;function un(e){const t=It(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Ie,s=e.history,l=Q(),d=Q(),m=Q(),i=tt(H);let f=H;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=le.bind(null,c=>""+c),a=le.bind(null,Wt),u=le.bind(null,J);function g(c,p){let h,v;return Ve(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function b(){return t.getRoutes().map(c=>c.record)}function C(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=ue(n,c,p.path),_=t.resolve({path:y.path},p),U=s.createHref(y.fullPath);return S(y,_,{params:u(_.params),hash:J(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in c)h=S({},c,{path:ue(n,c.path,p.path).path});else{const y=S({},c.params);for(const _ in y)y[_]==null&&delete y[_];h=S({},c,{params:a(c.params)}),p.params=a(p.params)}const v=t.resolve(h,p),k=c.hash||"";v.params=o(u(v.params));const A=at(r,S({},c,{hash:Ut(k),path:v.path})),P=s.createHref(A);return S({fullPath:A,hash:k,query:r===Ie?Xt(c.query):c.query||{}},v,{redirectedFrom:void 0,href:P})}function w(c){return typeof c=="string"?ue(n,c,i.value.path):S({},c)}function O(c,p){if(f!==c)return K(8,{from:p,to:c})}function M(c){return V(c)}function j(c){return M(S(w(c),{replace:!0}))}function L(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function V(c,p){const h=f=E(c),v=i.value,k=c.state,A=c.force,P=c.replace===!0,y=L(h);if(y)return V(S(w(y),{state:typeof y=="object"?S({},k,y.state):k,force:A,replace:P}),p||h);const _=h;_.redirectedFrom=p;let U;return!A&&lt(r,v,h)&&(U=K(16,{to:_,from:v}),Pe(v,v,!0,!1)),(U?Promise.resolve(U):ve(_,v)).catch(x=>$(x)?$(x,2)?x:se(x):re(x,_,v)).then(x=>{if(x){if($(x,2))return V(S({replace:P},w(x.to),{state:typeof x.to=="object"?S({},k,x.to.state):k,force:A}),p||_)}else x=Re(_,v,!0,P,k);return ye(_,v,x),x})}function Ze(c,p){const h=O(c,p);return h?Promise.reject(h):Promise.resolve()}function ve(c,p){let h;const[v,k,A]=cn(c,p);h=fe(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(_=>{h.push(T(_,c,p))});const P=Ze.bind(null,c,p);return h.push(P),q(h).then(()=>{h=[];for(const y of l.list())h.push(T(y,c,p));return h.push(P),q(h)}).then(()=>{h=fe(k,"beforeRouteUpdate",c,p);for(const y of k)y.updateGuards.forEach(_=>{h.push(T(_,c,p))});return h.push(P),q(h)}).then(()=>{h=[];for(const y of c.matched)if(y.beforeEnter&&!p.matched.includes(y))if(I(y.beforeEnter))for(const _ of y.beforeEnter)h.push(T(_,c,p));else h.push(T(y.beforeEnter,c,p));return h.push(P),q(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",c,p),h.push(P),q(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,c,p));return h.push(P),q(h)}).catch(y=>$(y,8)?y:Promise.reject(y))}function ye(c,p,h){for(const v of m.list())v(c,p,h)}function Re(c,p,h,v,k){const A=O(c,p);if(A)return A;const P=p===H,y=z?history.state:{};h&&(v||P?s.replace(c.fullPath,S({scroll:P&&y&&y.scroll},k)):s.push(c.fullPath,k)),i.value=c,Pe(c,p,h,P),se()}let D;function Je(){D||(D=s.listen((c,p,h)=>{if(!we.listening)return;const v=E(c),k=L(v);if(k){V(S(k,{replace:!0}),v).catch(W);return}f=v;const A=i.value;z&&vt(Ce(A.fullPath,h.delta),ee()),ve(v,A).catch(P=>$(P,12)?P:$(P,2)?(V(P.to,v).then(y=>{$(y,20)&&!h.delta&&h.type===X.pop&&s.go(-1,!1)}).catch(W),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(P,v,A))).then(P=>{P=P||Re(v,A,!1),P&&(h.delta&&!$(P,8)?s.go(-h.delta,!1):h.type===X.pop&&$(P,20)&&s.go(-1,!1)),ye(v,A,P)}).catch(W)}))}let ne=Q(),Ee=Q(),Z;function re(c,p,h){se(c);const v=Ee.list();return v.length&&v.forEach(k=>k(c,p,h)),Promise.reject(c)}function et(){return Z&&i.value!==H?Promise.resolve():new Promise((c,p)=>{ne.add([c,p])})}function se(c){return Z||(Z=!c,Je(),ne.list().forEach(([p,h])=>c?h(c):p()),ne.reset()),c}function Pe(c,p,h,v){const{scrollBehavior:k}=e;if(!z||!k)return Promise.resolve();const A=!h&&yt(Ce(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return nt().then(()=>k(c,p,A)).then(P=>P&&gt(P)).catch(P=>re(P,c,p))}const oe=c=>s.go(c);let ce;const ie=new Set,we={currentRoute:i,listening:!0,addRoute:g,removeRoute:R,hasRoute:C,getRoutes:b,resolve:E,options:e,push:M,replace:j,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:Ee.add,isReady:et,install(c){const p=this;c.component("RouterLink",tn),c.component("RouterView",on),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),z&&!ce&&i.value===H&&(ce=!0,M(s.location).catch(k=>{}));const h={};for(const k in H)h[k]=N(()=>i.value[k]);c.provide(te,p),c.provide(ge,Be(h)),c.provide(pe,i);const v=c.unmount;ie.add(c),c.unmount=function(){ie.delete(c),ie.size<1&&(f=H,D&&D(),D=null,i.value=H,ce=!1,Z=!1),v()}}};return we}function q(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function cn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>G(f,m))?r.push(m):n.push(m));const i=e.matched[d];i&&(t.matched.find(f=>G(f,i))||s.push(i))}return[n,r,s]}function fn(){return B(te)}function hn(){return B(ge)}export{ln as a,hn as b,un as c,fn as u};
