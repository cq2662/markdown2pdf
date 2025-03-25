import"./reflect-metadata.e8f3e0d5.js";function I(r){if(typeof r=="string")return r;if(Array.isArray(r))return"["+r.map(I).join(", ")+"]";if(r==null)return""+r;if(r.name)return`${r.name}`;if(r.token)return`${r.token}`;const t=r.toString();if(t==null)return""+t;const e=t.indexOf(`
`);return e===-1?t:t.substring(0,e)}function G(r){return function(e){const n=new Error(`No provide for \`${I(e)}\`!`);return n.name=r,n}}function nt(r){return function(e){const n=new Error(`Can not found provide scope \`${I(e)}\`!`);return n.name=r,n}}class it{constructor(){this.classes=new Map,this.props=new Map,this.methods=new Map,this.params=new Map}setClassMetadata(t,e){this.classes.set(t,e)}getClassMetadata(t){return this.classes.get(t)}getClassMetadataKeys(){return Array.from(this.classes.keys())}pushParamMetadata(t,e){this.params.has(t)?this.params.get(t).push(e):this.params.set(t,[e])}getParamMetadata(t){return this.params.get(t)}getParamMetadataKeys(){return Array.from(this.params.keys())}getPropMetadataKeys(){return Array.from(this.props.keys())}pushPropMetadata(t,e){this.props.has(t)?this.props.get(t).push(e):this.props.set(t,[e])}getPropMetadata(t){return this.props.get(t)}pushMethodMetadata(t,e){this.methods.has(t)?this.methods.get(t).push(e):this.methods.set(t,[e])}getMethodMetadata(t){return this.methods.get(t)}}function A(r,t){return function(e,n,i){w(e).pushParamMetadata(r,{propertyKey:n,parameterIndex:i,metadata:t})}}function st(r,t,e){return function(n,i){w(n.constructor).pushPropMetadata(r,{injectToken:t||Reflect.getMetadata("design:type",n,i),propertyKey:i,contextCallback:e})}}function at(r,t){return function(e){w(e).setClassMetadata(r,{paramTypes:Reflect.getMetadata("design:paramtypes",e),metadata:t})}}function w(r){const t="__annotations__";if(!r[t]){const e=new it;Reflect.defineProperty(r,t,{get(){return e}})}return r[t]}class Y{constructor(t){this.forwardRefFn=t}getRef(){return this.forwardRefFn()}}class St{constructor(t){this.name=t}toString(){return this.name||"[anonymous provide scope]"}}const O=function r(t){if(this instanceof r)this.provideIn=(t==null?void 0:t.provideIn)||null;else return at(O,new O(t))};class J{constructor(t){this.description=t}toString(){return this.description||"[anonymous injection token]"}}var g;(function(r){r.Default="Default",r.Self="Self",r.SkipSelf="SkipSelf",r.Optional="Optional"})(g||(g={}));class Q{}const b={__debug_value__:"THROW_IF_NOT_FOUND"},ot=G("NullInjectorError");class ct extends Q{constructor(){super(...arguments),this.parentInjector=null}get(t,e=b){if(e===b)throw ot(t);return e}}const M=function(t){if(this instanceof M)this.token=t;else return A(M,new M(t))},x=function(){if(!(this instanceof x))return A(x,new x)},k=function(){if(!(this instanceof k))return A(k,new k)},S=function(){if(!(this instanceof S))return A(S,new S)},V=function(t,e=b,n){if(!(this instanceof V))return st(V,t,function(i,s,a,o){i[s]=o.get(a instanceof Y?a.getRef():a,e,n)})};function X(r){return r.useValue?W(r):r.useClass?H(r):r.useExisting?ut(r):r.useFactory?lt(r):r.provide?r.provide instanceof J?W(r):ht(r):ft(r)}function W(r){return{provide:r.provide,scope:null,generateFactory(){return function(){return r.useValue}},deps:[]}}function H(r){let t,e;if(r.deps)t=R(r.provide,r.deps);else{const n=pt(r.useClass);e=n.scope,t=R(r.provide,n.deps)}return{provide:r.provide,scope:e,deps:t,generateFactory(n,i){return function(...s){const a=new r.useClass(...s);return i(r.provide,a),w(r.useClass).getPropMetadataKeys().forEach(c=>{(w(r.useClass).getPropMetadata(c)||[]).forEach(h=>{h.contextCallback(a,h.propertyKey,h.injectToken,n)})}),a}}}}function ut(r){return{provide:r.provide,scope:null,generateFactory(t){return function(){return t.get(r.useExisting)}},deps:[]}}function lt(r){return{provide:r.provide,scope:null,generateFactory(){return function(...t){return r.useFactory(...t)}},deps:R(r.provide,r.deps||[])}}function ht(r){return H(Object.assign(Object.assign({},r),{useClass:r.provide}))}function ft(r){return H({provide:r,useClass:r})}function pt(r){const t=w(r),e=t.getClassMetadata(O);if(typeof e>"u")throw new Error(`Class \`${I(r)}\` is not injectable!`);const n=(e.paramTypes||[]).map(s=>[s]);return[M,x,k,S].forEach(s=>{(t.getParamMetadata(s)||[]).forEach(a=>{n[a.parameterIndex].push(a.metadata)})}),{scope:e.metadata.provideIn,deps:n}}function R(r,t){return t.map((e,n)=>{const i={injectKey:null,optional:!1,visibility:null};if(!Array.isArray(e))i.injectKey=e;else for(let s=0;s<e.length;s++){const a=e[s];a instanceof M?i.injectKey=a.token:a instanceof x||a instanceof k?i.visibility=a:a instanceof S?i.optional=!0:i.injectKey=a}if(typeof i.injectKey>"u")throw new Error(`The ${n} th dependent parameter type of \`${I(r)}\` was not obtained,
if the dependency is declared later, you can refer to it using \`constructor(@Inject(forwardRef(() => [Type|InjectionToken])) paramName: [Type]) {}\``);return i})}const _=G("ReflectiveInjectorError"),dt=nt("ReflectiveInjectorError");class jt extends Q{constructor(t,e,n){super(),this.parentInjector=t,this.staticProviders=e,this.scope=n,this.recordValues=new Map,this.normalizedProviders=e.map(i=>X(i))}get(t,e=b,n){var i;if(n=n||g.Default,n===g.SkipSelf){if(this.parentInjector)return this.parentInjector.get(t,e);if(e!==b)return e;throw _(t)}if(this.recordValues.has(t))return this.recordValues.get(t);for(let s=0;s<this.normalizedProviders.length;s++){const a=this.normalizedProviders[s];if(a.provide===t)return this.getValue(t,b,a)}if(!(t instanceof J)){const s=(i=w(t).getClassMetadata(O))===null||i===void 0?void 0:i.metadata.provideIn;if(s){const a=X(t);if(this.scope===s)return this.normalizedProviders.push(a),this.getValue(t,b,a);const o=this.parentInjector;if(!o||o instanceof ct){if(a.scope==="root")return this.normalizedProviders.push(a),this.getValue(t,b,a);if(e!==b)return e;throw dt(a.scope)}}}if(n===g.Self){if(e===b)throw _(t);return e}if(this.parentInjector)return this.parentInjector.get(t,e,n===g.Optional?g.Optional:g.Default);if(e===b)throw _(t);return e}getValue(t,e=b,n){const{generateFactory:i,deps:s}=n,a=this.resolveDeps(s||[],e);let o=this.recordValues.get(t);return o||(o=i(this,(u,h)=>{this.recordValues.set(u,h)})(...a),this.recordValues.set(t,o),o)}resolveDeps(t,e){return t.map(n=>{let i;const s={},a=n.injectKey instanceof Y?n.injectKey.getRef():n.injectKey;if(n.visibility instanceof x)i=this.get(a,s,g.Self);else if(n.visibility instanceof k)if(this.parentInjector)i=this.parentInjector.get(a,s);else{if(n.optional&&e===b)return null;throw _(a)}else i=this.get(a,s);if(i===s){if(n.optional)return e===b?null:e;throw _(a)}return i})}}class ${constructor(t){this.closed=!1,this.syncErrorThrowable=!0,typeof t=="function"?this.destinationOrNext={next:t}:this.destinationOrNext=t}next(t){this.closed||this.destinationOrNext.next&&(this.syncErrorThrowable=!1,this.destinationOrNext.next(t),this.syncErrorThrowable=!0)}error(t){if(!this.closed){if(this.closed=!0,this.destinationOrNext.error){this.syncErrorThrowable=!1,this.destinationOrNext.error(t),this.syncErrorThrowable=!0,this.destinationOrNext=null;return}throw this.syncErrorThrowable=!1,this.destinationOrNext=null,t}}complete(){this.closed||(this.closed=!0,this.destinationOrNext.complete&&(this.syncErrorThrowable=!1,this.destinationOrNext.complete(),this.syncErrorThrowable=!0),this.destinationOrNext=null)}}function Z(){}class C{constructor(t){this.unsubscribeCallback=t,this.subs=[],this.isStopped=!1}add(...t){return this.isStopped?this:(this.subs.push(...t),this)}unsubscribe(){this.isStopped=!0,this.unsubscribeCallback&&(this.unsubscribeCallback(),this.unsubscribeCallback=Z),this.subs.forEach(t=>t.unsubscribe()),this.subs=[]}}class p{constructor(t=e=>{e.complete()}){this.source=t}pipe(...t){return t.length===0?this:t.reduce((e,n)=>n(new p(i=>e.subscribe(i))),this)}subscribe(t=Z){const e=this.toSubscriber(t);return this.trySubscribe(e)}toPromise(){return new Promise((t,e)=>{this.subscribe({next(n){t(n)},error(n){e(n)}})})}toSubscriber(t){return typeof t=="function"?new $({next:t}):new $(t)}trySubscribe(t){let e;try{e=this.source(t)}catch(n){if(t.syncErrorThrowable)t.error(n);else throw n}return typeof e=="function"?new C(function(){t.closed=!0,e()}):e instanceof C?new C(function(){t.closed=!0,e.unsubscribe()}):new C(function(){t.closed=!0})}}class z extends p{constructor(){super(t=>{this.subscribers.push(t)}),this.subscribers=[]}asObservable(){return new p(t=>{this.subscribe(t)})}next(t){[...this.subscribers].forEach(e=>{try{e.next(t)}catch(n){if(e.syncErrorThrowable)e.error(n);else throw n}})}error(t){[...this.subscribers].forEach(e=>{e.error(t)})}complete(){[...this.subscribers].forEach(t=>{t.complete()})}}function It(r,t,e=!1){return new p(n=>{function i(s){return n.next(s)}return r.addEventListener(t,i,e),function(){r.removeEventListener(t,i)}})}function Pt(r){return new p(t=>{r.then(e=>{t.next(e),t.complete()}).catch(e=>{t.error(e)})})}function Ot(...r){return new p(t=>{r.length===0&&t.complete();const e=r.map(i=>({source:i,isComplete:!1})),n=e.map(i=>i.source.subscribe({next(s){t.next(s)},error(s){t.error(s)},complete(){i.isComplete=!0,e.every(s=>s.isComplete)&&t.complete()}}));return function(){n.forEach(i=>i.unsubscribe())}})}function Tt(...r){return new p(t=>{r.forEach(e=>t.next(e)),t.complete()})}function At(r){return function(t){return new p(e=>{let n=!0,i=null,s,a=!1,o=!1;const c=t.subscribe({next(u){n&&(s=u,n=!1,i=setTimeout(()=>{i=null,n=!0,e.next(s),a&&e.complete()},r))},error(u){o=!0,c&&c.unsubscribe(),e.error(u)},complete(){i===null?e.complete():a=!0}});return o&&c.unsubscribe(),function(){clearTimeout(i),c.unsubscribe()}})}}function Lt(r){return function(t){return new p(e=>{let n=null,i=!1;const s=t.subscribe({next(a){clearTimeout(n),n=setTimeout(function(){n=null,e.next(a),i&&e.complete()},r)},error(a){e.error(a)},complete(){n===null?e.complete():i=!0}});return function(){n=null,clearTimeout(n),s.unsubscribe()}})}}function Bt(r=0){return function(t){return new p(e=>{const n=[];let i=!1;const s=t.subscribe({next(a){n.push(setTimeout(function(){n.shift(),e.next(a),i&&n.length===0&&e.complete()},r))},error(a){e.error(a)},complete(){i=!0}});return function(){n.forEach(a=>clearTimeout(a)),s.unsubscribe()}})}}function Rt(r){return function(t){return new p(e=>{let n={},i=!0;return t.subscribe({next(s){if(i){i=!1,n=s,e.next(s);return}if(r){const a=r(n,s);n=s,a&&e.next(s)}else s!==n&&(n=s,e.next(s))},error(s){e.error(s)},complete(){e.complete()}})})}}function zt(r){return function(t){return new p(e=>t.subscribe({next(n){r(n)&&e.next(n)},error(n){e.error(n)},complete(){e.complete()}}))}}function Ht(r){return function(t){return new p(e=>t.subscribe({next(n){e.next(r(n))},error(n){e.error(n)},complete(){e.complete()}}))}}function Ft(){return function(r){return new p(t=>{let e=[],n=null,i=!1;return r.subscribe({next(s){e.push(s),n||(n=Promise.resolve().then(()=>{const a=e;e=[],n=null,t.next(a),i&&t.complete()}))},error(s){t.error(s)},complete(){n===null?t.complete():i=!0}})})}}function Dt(){return function(r){const t=new z;return r.subscribe({next(e){t.next(e)},error(e){t.error(e)},complete(){t.complete()}}),t}}function Nt(r){return function(t){return new p(e=>{let n=0;const i=new C;let s=!1;const a={next(o){if(n<r){e.next(o),n++,n===r&&(s=!0,i.unsubscribe(),e.complete());return}s=!0,e.complete()},error(o){e.error(o)},complete(){e.complete()}};return i.add(t.subscribe(a)),s&&i.unsubscribe(),i})}}var vt=function(){function r(t){if(this.anchors=[],t.length<4)throw new Error("[Bezier]: the parameters should not be less than 4.");if(t.length%2!==0)throw new Error("[Bezier]: the parameter should be an even number.");for(var e={x:null,y:null},n=0;n<t.length;n++)n%2?(e.y=t[n],this.anchors.push(e),e={x:null,y:null}):e.x=t[n]}return r.prototype.update=function(t,e){for(var n=this.anchors;n.length>1;)typeof e=="function"&&e(n),n=r.next(n,t);return n[0]},r.next=function(t,e){for(var n=[],i=0;i<t.length-1;i++){var s=t[i],a=t[i+1];n.push({x:(a.x-s.x)*e+s.x,y:(a.y-s.y)*e+s.y})}return n},r}(),bt=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),Kt=function(r){bt(t,r);function t(e,n,i,s){var a=r.call(this,[0,0,t.guard0To1(e),n,t.guard0To1(i),s,1,1])||this;return a.precision=1e-6,a}return t.prototype.update=function(e,n){var i=this.newton(e);return r.prototype.update.call(this,i,n)},t.prototype.newton=function(e){for(var n=e,i=1;;){var s=r.prototype.update.call(this,e),a=s.x-n;if(Math.abs(a)<this.precision)return e;var o=void 0;a<0?o=(e+i)/2:(o=e/2,i=e),e=o}},t.guard0To1=function(e){return e<0?0:e>1?1:e},t}(vt);function tt(r){return(r%360+360)%360}function L(r){return/^#/.test(r)&&(r=r.substring(1)),r.length===3?"#"+r.split("").map(function(t){return t+t}).join(""):"#"+r}var l=255,y=360,f=100;function E(r){var t=r.r,e=r.g,n=r.b;t=t===l?1:t%l/l,e=e===l?1:e%l/l,n=n===l?1:n%l/l;var i=Math.max(t,e,n),s=Math.min(t,e,n),a,o,c=(i+s)/2;if(i===s)a=o=0;else{var u=i-s;switch(o=c>.5?u/(2-i-s):u/(i+s),i){case t:a=(e-n)/u+(e<n?6:0);break;case e:a=(n-t)/u+2;break;case n:a=(t-e)/u+4;break}a/=6}return{h:Math.round(a*y),s:Math.round(o*f),l:Math.round(c*f)}}function T(r){var t=r.r,e=r.g,n=r.b;t=t===l?1:t%l/l,e=e===l?1:e%l/l,n=n===l?1:n%l/l;var i=Math.max(t,e,n),s=Math.min(t,e,n),a,o,c=i,u=i-s;if(o=i===0?0:u/i,i===s)a=0;else{switch(i){case t:a=(e-n)/u+(e<n?6:0);break;case e:a=(n-t)/u+2;break;case n:a=(t-e)/u+4;break}a/=6}return{h:Math.round(a*y),s:Math.round(o*f),v:Math.round(c*f)}}function F(r){var t=r.h,e=r.s,n=r.l;function i(h,d,v){return v<0&&(v+=1),v>1&&(v-=1),v<1/6?h+(d-h)*6*v:v<1/2?d:v<2/3?h+(d-h)*(2/3-v)*6:h}var s,a,o;if(t=tt(t),t=t===y?1:t%y/y,e=e===f?1:e%f/f,n=n===f?1:n%f/f,e===0)s=a=o=n;else{var c=n<.5?n*(1+e):n+e-n*e,u=2*n-c;s=i(u,c,t+1/3),a=i(u,c,t),o=i(u,c,t-1/3)}return{r:Math.round(s*l),g:Math.round(a*l),b:Math.round(o*l)}}function D(r){var t=r.h,e=r.s,n=r.v;t=tt(t),t=t===y?1:t%y/y*6,e=e===f?1:e%f/f,n=n===f?1:n%f/f;var i=Math.floor(t),s=t-i,a=n*(1-e),o=n*(1-s*e),c=n*(1-(1-s)*e),u=i%6,h=[n,o,a,a,c,n][u],d=[c,n,n,o,a,a][u],v=[a,a,c,n,n,o][u];return{r:Math.floor(h*l),g:Math.floor(d*l),b:Math.floor(v*l)}}function j(r){var t=r.r,e=r.g,n=r.b,i=Math.round(t).toString(16),s=Math.round(e).toString(16),a=Math.round(n).toString(16);return i=i.length===1?"0"+i:i,s=s.length===1?"0"+s:s,a=a.length===1?"0"+a:a,"#"+i+s+a}function P(r){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(L(r));return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function mt(r){var t=D(r);return j(t)}function gt(r){var t=P(L(r));return T(t)}function U(r){var t=F(r);return j(t)}function et(r){var t=P(L(r));return E(t)}function yt(r){var t=r.c,e=r.m,n=r.y,i=r.k,s=255*(1-t)*(1-i),a=255*(1-e)*(1-i),o=255*(1-n)*(1-i);return{r:Math.floor(s),g:Math.floor(a),b:Math.floor(o)}}function rt(r){return E(D(r))}function wt(r){var t=F(r);return T(t)}function xt(r){if(r.indexOf("#")>-1)return P(r);var t=r.split("(")[0],e=r.split("(")[1].split(")")[0].split(",");return t.split("").reduce(function(n,i,s){var a=n;return a[i]=parseFloat(e[s]),a},{})}function kt(r){if(typeof r=="string")try{return P(r),"hex"}catch{}if(typeof r!="object")return"unknown";var t=r;return t.r+t.g+t.b&&typeof(t.r+t.g+t.b)=="number"?"rgb":t.h+t.s+t.v&&typeof(t.h+t.s+t.v)=="number"?"hsv":t.h+t.s+t.l&&typeof(t.h+t.s+t.l)=="number"?"hsl":t.c+t.m+t.y+t.k&&typeof(t.c+t.m+t.y+t.k)=="number"?"cmyk":"unknown"}function Et(r){var t=kt(r);switch(t){case"hsl":return r;case"rgb":return E(r);case"hex":return et(r);case"hsv":return rt(r);case"cmyk":return E(yt(r));default:return"unknown"}}var m=function(){return m=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},m.apply(this,arguments)};function _t(r,t,e,n){return`
<div class="tanbo-color-picker-preset">
  <div class="tanbo-color-picker-swatches" style="height: 50px"></div>
  <div class="tanbo-color-picker-swatches" style="height: 118px;"></div>
  <div class="tanbo-color-picker-recent-text">`.concat(e,`</div>
  <div class="tanbo-color-picker-swatches" style="height: 25px;">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="tanbo-color-picker-flex">
    <div class="tanbo-color-picker-swatches">
      <div data-color=""></div>
    </div>
    <button type="button" class="tanbo-color-picker-to-palette">`).concat(t,`<svg style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(180, 512, 512)" d="M497.92 165.12L422.4 89.6 0 512l422.4 422.4 75.52-75.52L151.04 512z"></path></svg>
    </button>
  </div>
</div>
<div class="tanbo-color-picker-menu">
  <div class="tanbo-color-picker-back-btn-wrap">
    <button type="button" class="tanbo-color-picker-back-btn">
      <svg style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M497.92 165.12L422.4 89.6 0 512l422.4 422.4 75.52-75.52L151.04 512z"></path></svg>`).concat(n,`
    </button>
  </div>
  <div class="tanbo-color-picker-viewer">
    <div class="tanbo-color-picker-viewer-left">
      <div class="tanbo-color-picker-palette">
        <div class="tanbo-color-picker-palette-point"></div>
      </div>
      <div class="tanbo-color-picker-viewer-alpha">
        <div class="tanbo-color-picker-viewer-alpha-pointer"></div>
        <div class="tanbo-color-picker-viewer-alpha-bar"></div>
      </div>
    </div>
    <div class="tanbo-color-picker-viewer-right">
      <div class="tanbo-color-picker-tools">
        <div class="tanbo-color-picker-value">
          <div class="tanbo-color-picker-value-color"></div>
        </div>
        <div class="tanbo-color-picker-hue-bar">
          <div class="tanbo-color-picker-hue-pointer"></div>
        </div>
      </div>
      <div class="tanbo-color-picker-viewer-alpha-value">
        1
      </div>
    </div>
  </div>
  <div class="tanbo-color-picker-inputs">
    <div class="tanbo-color-picker-hsl">
      <div>H <input data-model="H" min="0" max="360" type="number"></div>
      <div>S <input data-model="S" min="0" max="100" type="number"></div>
      <div>L <input data-model="L" min="0" max="100" type="number"></div>
    </div>
    <div class="tanbo-color-picker-rgb">
      <div>R <input data-model="R" min="0" max="255" type="number"></div>
      <div>G <input data-model="G" min="0" max="255" type="number"></div>
      <div>B <input data-model="B" min="0" max="255" type="number"></div>
    </div>
    <div class="tanbo-color-picker-hex">
      <div>HEX <input data-model="HEX" type="text"></div>
    </div>
  </div>
  <div class="tanbo-color-picker-btn-wrap">
    <button type="button" class="tanbo-color-picker-btn">`).concat(r,`</button>
  </div>
</div>
`)}var Ct=function(){function r(t,e){e===void 0&&(e={});var n=this;this.onChange=new z,this.onSelected=new z,this.host=document.createElement("div"),this.empty=!1,this.resetAlpha=!0,this.recentColorOptions=[],this.writing=!1,this.colorElements=[],typeof t=="string"?this.container=document.querySelector(t):this.container=t,this.host.classList.add("tanbo-color-picker"),this.host.innerHTML=_t(e.btnText||"\u786E\u5B9A",e.paletteText||"\u8C03\u8272\u76D8",e.recentText||"\u6700\u8FD1\u4F7F\u7528",e.backText||"\u8FD4\u56DE"),this.container.appendChild(this.host),this.valueViewer=this.host.querySelector(".tanbo-color-picker-value-color"),this.palette=this.host.querySelector(".tanbo-color-picker-palette"),this.palettePoint=this.host.querySelector(".tanbo-color-picker-palette-point"),this.hueBar=this.host.querySelector(".tanbo-color-picker-hue-bar"),this.huePoint=this.host.querySelector(".tanbo-color-picker-hue-pointer"),this.checkBtn=this.host.querySelector(".tanbo-color-picker-btn"),this.alphaBar=this.host.querySelector(".tanbo-color-picker-viewer-alpha-bar"),this.alphaValue=this.host.querySelector(".tanbo-color-picker-viewer-alpha-value"),this.alphaPoint=this.host.querySelector(".tanbo-color-picker-viewer-alpha-pointer"),this.inputsWrap=this.host.querySelector(".tanbo-color-picker-inputs"),this.hslInputs=Array.from(this.host.querySelectorAll(".tanbo-color-picker-hsl input")),this.rgbInputs=Array.from(this.host.querySelectorAll(".tanbo-color-picker-rgb input")),this.hexInput=this.host.querySelector(".tanbo-color-picker-hex input"),this.colorWrapper=this.host.querySelector(".tanbo-color-picker-preset"),this.switchBtn=this.host.querySelector(".tanbo-color-picker-to-palette"),this.menu=this.host.querySelector(".tanbo-color-picker-menu"),this.backBtn=this.host.querySelector(".tanbo-color-picker-back-btn"),this.mainColors=this.colorWrapper.children[0],this.colors=this.colorWrapper.children[1],this.recentElement=this.colorWrapper.children[3],Array.isArray(e.mainColors)&&this.addColor(e.mainColors,this.mainColors),Array.isArray(e.colors)&&this.addColor(e.colors,this.colors),this.hex=e.value||"#f00",this.bindingEvents(),this.onSelected.subscribe(function(){n.addRecentColor(n.hex)})}return Object.defineProperty(r.prototype,"hex",{get:function(){return this.empty?null:this._hex},set:function(t){var e=t?L(t):null;e?(this.empty=!1,this._hex=e,this._hsl=et(e),this._rgb=P(e),this._hsv=gt(e),this._rgba=m(m({},this._rgb),{a:this.resetAlpha?1:this._rgba.a})):this.empty=!0,this.resetAlpha=!0,this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"hsl",{get:function(){return this.empty?null:this._hsl},set:function(t){!t||typeof t.h!="number"||typeof t.s!="number"||typeof t.l!="number"?this.empty=!0:(this.empty=!1,this._hsl=t,this._hex=U(t),this._hsv=wt(t),this._rgb=F(t),this._rgba=m(m({},this._rgb),{a:this.resetAlpha?1:this._rgba.a})),this.resetAlpha=!0,this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rgb",{get:function(){return this.empty?null:this._rgb},set:function(t){!t||typeof t.r!="number"||typeof t.g!="number"||typeof t.b!="number"?this.empty=!0:(this.empty=!1,this._rgb=t,this._rgba=m(m({},t),{a:this.resetAlpha?1:this._rgba.a}),this._hsl=E(t),this._hex=j(t),this._hsv=T(t)),this.resetAlpha=!0,this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rgba",{get:function(){return this.empty?null:this._rgba},set:function(t){!t||typeof t.r!="number"||typeof t.g!="number"||typeof t.b!="number"||typeof t.a!="number"?this.empty=!0:(this.empty=!1,this._rgba=t,this._hsl=E(t),this._hex=j(t),this._hsv=T(t)),this.render()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"hsv",{get:function(){return this.empty?null:this._hsv},set:function(t){!t||typeof t.h!="number"||typeof t.s!="number"||typeof t.v!="number"?this.empty=!0:(this.empty=!1,this._hsv=t,this._hex=mt(t),this._hsl=rt(t),this._rgb=D(t),this._rgba=m(m({},this._rgb),{a:this.resetAlpha?1:this._rgba.a})),this.resetAlpha=!0,this.render()},enumerable:!1,configurable:!0}),r.prototype.addRecentColor=function(t){!t||(this.recentColorOptions=this.recentColorOptions.filter(function(e){return e!==t}),this.recentColorOptions.unshift(t),this.recentColorOptions.length>=7&&(this.recentColorOptions.length=7),this.renderRecentColors())},r.prototype.renderRecentColors=function(){for(var t=0;t<7;){var e=this.recentColorOptions[t],n=this.recentElement.children[t];t++,e?(n.style.background=e,n.setAttribute("data-color",e)):(n.style.background="",n.removeAttribute("data-color"))}},r.prototype.addColor=function(t,e){var n=this;t.forEach(function(i){var s=document.createElement("div");s.style.background=i,s.setAttribute("data-color",i),n.colorElements.push(s),e.append(s)})},r.prototype.render=function(){var t=this;this.writing||(this.empty?(this.hslInputs[0].value="",this.hslInputs[1].value="",this.hslInputs[2].value="",this.rgbInputs[0].value="",this.rgbInputs[1].value="",this.rgbInputs[2].value="",this.hexInput.value="",this.alphaValue.innerText="1"):(this.hslInputs[0].value=this.hsl.h+"",this.hslInputs[1].value=this.hsl.s+"",this.hslInputs[2].value=this.hsl.l+"",this.rgbInputs[0].value=this.rgb.r+"",this.rgbInputs[1].value=this.rgb.g+"",this.rgbInputs[2].value=this.rgb.b+"",this.hexInput.value=this.hex,this.alphaValue.innerText=Number(this.rgba.a.toFixed(2))+"")),this.palette.classList.remove("tanbo-color-picker-palette-empty"),this.palette.style.background="linear-gradient(to right, #fff, hsl(".concat(this._hsv.h,", 100%, 50%))"),this.palettePoint.style.left="calc(".concat(this._hsv.s,"% - 6px)"),this.palettePoint.style.top="calc(".concat(100-this._hsv.v,"% - 6px)"),this.huePoint.style.top="calc(".concat(this._hsv.h/360*100,"% - 4px)"),this.empty?(this.palette.classList.add("tanbo-color-picker-palette-empty"),this.palette.style.background="",this.valueViewer.style.background="",this.alphaBar.style.background="",this.alphaPoint.style.left="100%"):(this.valueViewer.style.background="rgba(".concat(this.rgba.r,", ").concat(this.rgba.g,", ").concat(this.rgba.b,", ").concat(this.rgba.a,")"),this.palette.classList.remove("tanbo-color-picker-palette-empty"),this.palette.style.background="linear-gradient(to right, #fff, hsl(".concat(this._hsv.h,", 100%, 50%))"),this.alphaBar.style.background="linear-gradient(to right, transparent, ".concat(this.hex,")"),this.alphaPoint.style.left=(this.rgba.a||0)*100+"%"),this.colorElements.forEach(function(e){var n=e.getAttribute("data-color")||"",i=Et(n);if(i==="unknown"||!t.hsl){e.classList.remove("tanbo-color-picker-current");return}i.l===t.hsl.l&&i.s===t.hsl.s&&i.h===t.hsl.h?e.classList.add("tanbo-color-picker-current"):e.classList.remove("tanbo-color-picker-current")})},r.prototype.bindingEvents=function(){this.bindPaletteEvent(),this.bindHueBarEvent(),this.bindAlphaEvent(),this.bindInputsEvent(),this.bindSelectedEvent(),this.bindColorOptionsEvent(),this.bindSwitchEvent()},r.prototype.bindSwitchEvent=function(){var t=this;this.switchBtn.addEventListener("click",function(){t.host.classList.add("tanbo-color-picker-show-palette")}),this.backBtn.addEventListener("click",function(){t.host.classList.remove("tanbo-color-picker-show-palette")})},r.prototype.bindAlphaEvent=function(){var t=this,e=function(a){var o=t.alphaBar.getBoundingClientRect(),c=a.clientX-o.left;c=Math.max(0,c),c=Math.min(o.width,c),t.rgba=m(m({},t._rgba),{a:c/o.width}),t.onChange.next(t)},n=function(a){e(a),document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)},i=function(a){e(a)},s=function(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s)};this.alphaBar.addEventListener("mousedown",n)},r.prototype.bindPaletteEvent=function(){var t=this,e=function(a){var o=t.palette.getBoundingClientRect(),c=a.clientX-o.left,u=a.clientY-o.top,h=c/130*100,d=100-u/130*100;h=Math.max(0,h),h=Math.min(100,h),d=Math.max(0,d),d=Math.min(100,d),t.resetAlpha=!1,t.hsv={h:t._hsv.h,s:h,v:d},t.onChange.next(t)},n=function(a){e(a),document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)},i=function(a){e(a)},s=function(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s)};this.palette.addEventListener("mousedown",n)},r.prototype.bindHueBarEvent=function(){var t=this,e=function(a){var o=t.hueBar.getBoundingClientRect(),c=a.clientY-o.top;c=Math.max(0,c),c=Math.min(100,c);var u=360/100*c;t.resetAlpha=!1,t.hsv={h:u,s:t._hsv.s,v:t._hsv.v},t.onChange.next(t)},n=function(a){e(a),document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)},i=function(a){e(a)},s=function(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s)};this.hueBar.addEventListener("mousedown",n)},r.prototype.bindInputsEvent=function(){var t=this,e=function(i,s,a){t.hex=U({h:i,s,l:a}),t.onChange.next(t)},n=function(i,s,a){t.hex=j({r:i,g:s,b:a}),t.onChange.next(t)};this.inputsWrap.addEventListener("input",function(i){t.writing=!0;var s=i.target,a=s.getAttribute("data-model");if(s.type==="number"){var o=+s.min,c=+s.max;s.value=Math.max(s.value,o),s.value=Math.min(s.value,c)}var u=t.hsl,h=u.h,d=u.s,v=u.l,B=t.rgb,N=B.r,K=B.g,q=B.b;switch(a){case"H":e(s.value,d,v);break;case"S":e(h,s.value,v);break;case"L":e(h,d,s.value);break;case"R":n(s.value,K,q);break;case"G":n(N,s.value,q);break;case"B":n(N,K,s.value);break;case"HEX":/^#(([0-9a-f]){3}){1,2}$/i.test(s.value)&&(t.hex=s.value,t.onChange.next(t));break}t.writing=!1})},r.prototype.bindSelectedEvent=function(){var t=this;this.checkBtn.addEventListener("click",function(){t.host.classList.remove("tanbo-color-picker-show-palette"),t.onSelected.next(t)})},r.prototype.bindColorOptionsEvent=function(){var t=this;this.colorWrapper.addEventListener("click",function(e){var n=e.target;if(!!n.hasAttribute("data-color")){var i=n.getAttribute("data-color");/^rgba/.test(i)?t.rgba=xt(i):t.hex=i,t.onSelected.next(t)}})},r}();function qt(r,t){return t===void 0&&(t={}),new Ct(r,m({mainColors:["#000","#333","#444","#555","#666","#777","#888","#999","#aaa","#bbb","#ccc","#ddd","#eee","#fff"],colors:["#fec6c2","#fee5c3","#fefcc3","#baf6c4","#c3ebfe","#c3cbfe","#e1caff","#fc8e88","#fccc88","#fcf888","#76ec8a","#88d8fc","#97a4fb","#c098f4","#ff6666","#ffb151","#fada3a","#18c937","#3aaafa","#6373e2","#a669f7","#f63030","#f88933","#deb12a","#038e23","#1276cc","#3f52ce","#8838ed","#c60000","#d86912","#b88811","#086508","#144c93","#1b2eaa","#6117bf"]},t))}export{Kt as C,O as I,ct as N,S as O,V as P,jt as R,St as S,M as a,z as b,Q as c,Rt as d,J as e,C as f,Ft as g,zt as h,It as i,Ot as j,p as k,Lt as l,Ht as m,X as n,Bt as o,At as p,Pt as q,Tt as r,Dt as s,Nt as t,qt as u,xt as v,j as w,U as x};
