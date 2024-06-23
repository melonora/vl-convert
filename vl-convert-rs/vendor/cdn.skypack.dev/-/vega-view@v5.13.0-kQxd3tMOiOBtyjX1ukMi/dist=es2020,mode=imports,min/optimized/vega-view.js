import{extend as L,inherits as ae,hasOwnProperty as x,error as h,stringValue as oe,isObject as m,isString as E,truthy as le,isArray as g,isDate as M,toSet as ue,array as de,debounce as ce,constant as P}from"/-/vega-util@v1.17.2-LUfkDhormMyfWqy3Ts6U/dist=es2020,mode=imports,min/optimized/vega-util.js";import{Dataflow as _,transforms as W,asyncCallback as he,changeset as R,isChangeSet as fe,EventStream as ge}from"/-/vega-dataflow@v5.7.6-WDoszrJUyhTwz7sPwzda/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{RenderType as f,Scenegraph as pe,CanvasHandler as H,renderModule as S,point as me}from"/-/vega-scenegraph@v4.13.0-kC2RziuM0eIjiq6SsQ1g/dist=es2020,mode=imports,min/optimized/vega-scenegraph.js";import{tickStep as _e}from"/-/d3-array@v3.2.4-G4hy00bPnjF6FrSYpT32/dist=es2020,mode=imports,min/optimized/d3-array.js";import{functionContext as ve}from"/-/vega-functions@v5.15.0-Bjrw9nnQutKMtsMi1DSI/dist=es2020,mode=imports,min/optimized/vega-functions.js";import{context as ze}from"/-/vega-runtime@v6.2.0-6BElb2bSMc7jDTsbOGBN/dist=es2020,mode=imports,min/optimized/vega-runtime.js";import{interval as be}from"/-/d3-timer@v3.0.1-O0QpYiI2jhOLEJodLnN1/dist=es2020,mode=imports,min/optimized/d3-timer.js";import{locale as ke}from"/-/vega-format@v1.1.2-rBsMjG1MOmb395qvySoI/dist=es2020,mode=imports,min/optimized/vega-format.js";function ye(e){const t=e.container();t&&(t.setAttribute("role","graphics-document"),t.setAttribute("aria-roleDescription","visualization"),w(t,e.description()))}function w(e,t){e&&(t==null?e.removeAttribute("aria-label"):e.setAttribute("aria-label",t))}function Ce(e){e.add(null,t=>(e._background=t.bg,e._resize=1,t.bg),{bg:e._signals.background})}const A="default";function Le(e){const t=e._signals.cursor||(e._signals.cursor=e.add({user:A,item:null}));e.on(e.events("view","pointermove"),t,(n,r)=>{const i=t.value,a=i?E(i)?i:i.user:A,s=r.item&&r.item.cursor||null;return i&&a===i.user&&s==i.item?i:{user:a,item:s}}),e.add(null,function(n){let r=n.cursor,i=this.value;return E(r)||(i=r.item,r=r.user),T(e,r&&r!==A?r:i||r),i},{cursor:t})}function T(e,t){const n=e.globalCursor()?typeof document!="undefined"&&document.body:e.container();if(n)return t==null?n.style.removeProperty("cursor"):n.style.cursor=t}function v(e,t){var n=e._runtime.data;return x(n,t)||h("Unrecognized data set: "+t),n[t]}function xe(e,t){return arguments.length<2?v(this,e).values.value:z.call(this,e,R().remove(le).insert(t))}function z(e,t){fe(t)||h("Second argument to changes must be a changeset.");const n=v(this,e);return n.modified=!0,this.pulse(n.input,t)}function Ee(e,t){return z.call(this,e,R().insert(t))}function Re(e,t){return z.call(this,e,R().remove(t))}function I(e){var t=e.padding();return Math.max(0,e._viewWidth+t.left+t.right)}function V(e){var t=e.padding();return Math.max(0,e._viewHeight+t.top+t.bottom)}function b(e){var t=e.padding(),n=e._origin;return[t.left+n[0],t.top+n[1]]}function Se(e){var t=b(e),n=I(e),r=V(e);e._renderer.background(e.background()),e._renderer.resize(n,r,t),e._handler.origin(t),e._resizeListeners.forEach(i=>{try{i(n,r)}catch(a){e.error(a)}})}function Ae(e,t,n){var r=e._renderer,i=r&&r.canvas(),a,s,o;return i&&(o=b(e),s=t.changedTouches?t.changedTouches[0]:t,a=me(s,i),a[0]-=o[0],a[1]-=o[1]),t.dataflow=e,t.item=n,t.vega=Te(e,n,a),t}function Te(e,t,n){const r=t?t.mark.marktype==="group"?t:t.mark.group:null;function i(s){var o=r,l;if(s){for(l=t;l;l=l.mark.group)if(l.mark.name===s){o=l;break}}return o&&o.mark&&o.mark.interactive?o:{}}function a(s){if(!s)return n;E(s)&&(s=i(s));const o=n.slice();for(;s;)o[0]-=s.x||0,o[1]-=s.y||0,s=s.mark&&s.mark.group;return o}return{view:P(e),item:P(t||{}),group:i,xy:a,x:s=>a(s)[0],y:s=>a(s)[1]}}const G="view",De="timer",je="window",Oe={trap:!1};function Ue(e){const t=L({defaults:{}},e),n=(r,i)=>{i.forEach(a=>{g(r[a])&&(r[a]=ue(r[a]))})};return n(t.defaults,["prevent","allow"]),n(t,["view","window","selector"]),t}function B(e,t,n,r){e._eventListeners.push({type:n,sources:de(t),handler:r})}function Me(e,t){var n=e._eventConfig.defaults,r=n.prevent,i=n.allow;return r===!1||i===!0?!1:r===!0||i===!1?!0:r?r[t]:i?!i[t]:e.preventDefault()}function k(e,t,n){const r=e._eventConfig&&e._eventConfig[t];return r===!1||m(r)&&!r[n]?(e.warn(`Blocked ${t} ${n} event listener.`),!1):!0}function Pe(e,t,n){var r=this,i=new ge(n),a=function(u,c){r.runAsync(null,()=>{e===G&&Me(r,t)&&u.preventDefault(),i.receive(Ae(r,u,c))})},s;if(e===De)k(r,"timer",t)&&r.timer(a,t);else if(e===G)k(r,"view",t)&&r.addEventListener(t,a,Oe);else if(e===je?k(r,"window",t)&&typeof window!="undefined"&&(s=[window]):typeof document!="undefined"&&(k(r,"selector",t)&&(s=Array.from(document.querySelectorAll(e)))),!s)r.warn("Can not resolve event source: "+e);else{for(var o=0,l=s.length;o<l;++o)s[o].addEventListener(t,a);B(r,s,t,a)}return i}function q(e){return e.item}function N(e){return e.item.mark.source}function F(e){return function(t,n){return n.vega.view().changeset().encode(n.item,e)}}function We(e,t){return e=[e||"hover"],t=[t||"update",e[0]],this.on(this.events("view","pointerover",q),N,F(e)),this.on(this.events("view","pointerout",q),N,F(t)),this}function He(){var e=this._tooltip,t=this._timers,n=this._handler.handlers(),r=this._eventListeners,i,a,s,o,l;for(i=t.length;--i>=0;)t[i].stop();for(i=r.length;--i>=0;)for(s=r[i],a=s.sources.length;--a>=0;)s.sources[a].removeEventListener(s.type,s.handler);for(e&&e.call(this,this._handler,null,null,null),i=n.length;--i>=0;)l=n[i].type,o=n[i].handler,this._handler.off(l,o);return this}function d(e,t,n){const r=document.createElement(e);for(const i in t)r.setAttribute(i,t[i]);return n!=null&&(r.textContent=n),r}const we="vega-bind",Ie="vega-bind-name",Ve="vega-bind-radio";function Ge(e,t,n){if(!t)return;const r=n.param;let i=n.state;i||(i=n.state={elements:null,active:!1,set:null,update:s=>{s!=e.signal(r.signal)&&e.runAsync(null,()=>{i.source=!0,e.signal(r.signal,s)})}},r.debounce&&(i.update=ce(r.debounce,i.update)));const a=r.input==null&&r.element?Be:Ne;return a(i,t,r,e),i.active||(e.on(e._signals[r.signal],null,()=>{i.source?i.source=!1:i.set(e.signal(r.signal))}),i.active=!0),i}function Be(e,t,n,r){const i=n.event||"input",a=()=>e.update(t.value);r.signal(n.signal,t.value),t.addEventListener(i,a),B(r,t,i,a),e.set=s=>{t.value=s,t.dispatchEvent(qe(i))}}function qe(e){return typeof Event!="undefined"?new Event(e):{type:e}}function Ne(e,t,n,r){const i=r.signal(n.signal),a=d("div",{class:we}),s=n.input==="radio"?a:a.appendChild(d("label"));s.appendChild(d("span",{class:Ie},n.name||n.signal)),t.appendChild(a);let o=Fe;switch(n.input){case"checkbox":o=Qe;break;case"select":o=$e;break;case"radio":o=Je;break;case"range":o=Ye;break}o(e,s,n,i)}function Fe(e,t,n,r){const i=d("input");for(const a in n)a!=="signal"&&a!=="element"&&i.setAttribute(a==="input"?"type":a,n[a]);i.setAttribute("name",n.signal),i.value=r,t.appendChild(i),i.addEventListener("input",()=>e.update(i.value)),e.elements=[i],e.set=a=>i.value=a}function Qe(e,t,n,r){const i={type:"checkbox",name:n.signal};r&&(i.checked=!0);const a=d("input",i);t.appendChild(a),a.addEventListener("change",()=>e.update(a.checked)),e.elements=[a],e.set=s=>a.checked=!!s||null}function $e(e,t,n,r){const i=d("select",{name:n.signal}),a=n.labels||[];n.options.forEach((s,o)=>{const l={value:s};y(s,r)&&(l.selected=!0),i.appendChild(d("option",l,(a[o]||s)+""))}),t.appendChild(i),i.addEventListener("change",()=>{e.update(n.options[i.selectedIndex])}),e.elements=[i],e.set=s=>{for(let o=0,l=n.options.length;o<l;++o)if(y(n.options[o],s)){i.selectedIndex=o;return}}}function Je(e,t,n,r){const i=d("span",{class:Ve}),a=n.labels||[];t.appendChild(i),e.elements=n.options.map((s,o)=>{const l={type:"radio",name:n.signal,value:s};y(s,r)&&(l.checked=!0);const u=d("input",l);u.addEventListener("change",()=>e.update(s));const c=d("label",{},(a[o]||s)+"");return c.prepend(u),i.appendChild(c),u}),e.set=s=>{const o=e.elements,l=o.length;for(let u=0;u<l;++u)y(o[u].value,s)&&(o[u].checked=!0)}}function Ye(e,t,n,r){r=r!==void 0?r:(+n.max+ +n.min)/2;const i=n.max!=null?n.max:Math.max(100,+r)||100,a=n.min||Math.min(0,i,+r)||0,s=n.step||_e(a,i,100),o=d("input",{type:"range",name:n.signal,min:a,max:i,step:s});o.value=r;const l=d("span",{},+r);t.appendChild(o),t.appendChild(l);const u=()=>{l.textContent=o.value,e.update(+o.value)};o.addEventListener("input",u),o.addEventListener("change",u),e.elements=[o],e.set=c=>{o.value=c,l.textContent=c}}function y(e,t){return e===t||e+""===t+""}function Q(e,t,n,r,i,a){return t=t||new r(e.loader()),t.initialize(n,I(e),V(e),b(e),i,a).background(e.background())}function D(e,t){return t?function(){try{t.apply(this,arguments)}catch(n){e.error(n)}}:null}function Ke(e,t,n,r){const i=new r(e.loader(),D(e,e.tooltip())).scene(e.scenegraph().root).initialize(n,b(e),e);return t&&t.handlers().forEach(a=>{i.on(a.type,a.handler)}),i}function Xe(e,t){const n=this,r=n._renderType,i=n._eventConfig.bind,a=S(r);e=n._el=e?j(n,e,!0):null,ye(n),a||n.error("Unrecognized renderer type: "+r);const s=a.handler||H,o=e?a.renderer:a.headless;return n._renderer=o?Q(n,n._renderer,e,o):null,n._handler=Ke(n,n._handler,e,s),n._redraw=!0,e&&i!=="none"&&(t=t?n._elBind=j(n,t,!0):e.appendChild(d("form",{class:"vega-bindings"})),n._bind.forEach(l=>{l.param.element&&i!=="container"&&(l.element=j(n,l.param.element,!!l.param.input))}),n._bind.forEach(l=>{Ge(n,l.element||t,l)})),n}function j(e,t,n){if(typeof t=="string")if(typeof document!="undefined"){if(t=document.querySelector(t),!t)return e.error("Signal bind element not found: "+t),null}else return e.error("DOM document instance not found."),null;if(t&&n)try{t.textContent=""}catch(r){t=null,e.error(r)}return t}const p=e=>+e||0,Ze=e=>({top:e,bottom:e,left:e,right:e});function $(e){return m(e)?{top:p(e.top),bottom:p(e.bottom),left:p(e.left),right:p(e.right)}:Ze(p(e))}async function O(e,t,n,r){const i=S(t),a=i&&i.headless;return a||h("Unrecognized renderer type: "+t),await e.runAsync(),Q(e,null,null,a,n,r).renderAsync(e._scenegraph.root)}async function et(e,t){e!==f.Canvas&&e!==f.SVG&&e!==f.PNG&&h("Unrecognized image type: "+e);const n=await O(this,e,t);return e===f.SVG?tt(n.svg(),"image/svg+xml"):n.canvas().toDataURL("image/png")}function tt(e,t){const n=new Blob([e],{type:t});return window.URL.createObjectURL(n)}async function nt(e,t){const n=await O(this,f.Canvas,e,t);return n.canvas()}async function rt(e){const t=await O(this,f.SVG,e);return t.svg()}function it(e,t,n){return ze(e,W,ve,n).parse(t)}function st(e){var t=this._runtime.scales;return x(t,e)||h("Unrecognized scale or projection: "+e),t[e].value}var J="width",Y="height",U="padding",K={skip:!0};function X(e,t){var n=e.autosize(),r=e.padding();return t-(n&&n.contains===U?r.left+r.right:0)}function Z(e,t){var n=e.autosize(),r=e.padding();return t-(n&&n.contains===U?r.top+r.bottom:0)}function at(e){var t=e._signals,n=t[J],r=t[Y],i=t[U];function a(){e._autosize=e._resize=1}e._resizeWidth=e.add(null,o=>{e._width=o.size,e._viewWidth=X(e,o.size),a()},{size:n}),e._resizeHeight=e.add(null,o=>{e._height=o.size,e._viewHeight=Z(e,o.size),a()},{size:r});const s=e.add(null,a,{pad:i});e._resizeWidth.rank=n.rank+1,e._resizeHeight.rank=r.rank+1,s.rank=i.rank+1}function ot(e,t,n,r,i,a){this.runAfter(s=>{let o=0;s._autosize=0,s.width()!==n&&(o=1,s.signal(J,n,K),s._resizeWidth.skip(!0)),s.height()!==r&&(o=1,s.signal(Y,r,K),s._resizeHeight.skip(!0)),s._viewWidth!==e&&(s._resize=1,s._viewWidth=e),s._viewHeight!==t&&(s._resize=1,s._viewHeight=t),(s._origin[0]!==i[0]||s._origin[1]!==i[1])&&(s._resize=1,s._origin=i),o&&s.run("enter"),a&&s.runAfter(l=>l.resize())},!1,1)}function lt(e){return this._runtime.getState(e||{data:ut,signals:dt,recurse:!0})}function ut(e,t){return t.modified&&g(t.input.value)&&!e.startsWith("_:vega:_")}function dt(e,t){return!(e==="parent"||t instanceof W.proxy)}function ct(e){return this.runAsync(null,t=>{t._trigger=!1,t._runtime.setState(e)},t=>{t._trigger=!0}),this}function ht(e,t){function n(r){e({timestamp:Date.now(),elapsed:r})}this._timers.push(be(n,t))}function ft(e,t,n,r){const i=e.element();i&&i.setAttribute("title",gt(r))}function gt(e){return e==null?"":g(e)?ee(e):m(e)&&!M(e)?pt(e):e+""}function pt(e){return Object.keys(e).map(t=>{const n=e[t];return t+": "+(g(n)?ee(n):te(n))}).join(`
`)}function ee(e){return"["+e.map(te).join(", ")+"]"}function te(e){return g(e)?"[\u2026]":m(e)&&!M(e)?"{\u2026}":e}function mt(){if(this.renderer()==="canvas"&&this._renderer._canvas){let e=null;const t=()=>{e!=null&&e();const n=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);n.addEventListener("change",t),e=()=>{n.removeEventListener("change",t)},this._renderer._canvas.getContext("2d").pixelRatio=window.devicePixelRatio||1,this._redraw=!0,this._resize=1,this.resize().runAsync()};t()}}function ne(e,t){const n=this;if(t=t||{},_.call(n),t.loader&&n.loader(t.loader),t.logger&&n.logger(t.logger),t.logLevel!=null&&n.logLevel(t.logLevel),t.locale||e.locale){const a=L({},e.locale,t.locale);n.locale(ke(a.number,a.time))}n._el=null,n._elBind=null,n._renderType=t.renderer||f.Canvas,n._scenegraph=new pe;const r=n._scenegraph.root;n._renderer=null,n._tooltip=t.tooltip||ft,n._redraw=!0,n._handler=new H().scene(r),n._globalCursor=!1,n._preventDefault=!1,n._timers=[],n._eventListeners=[],n._resizeListeners=[],n._eventConfig=Ue(e.eventConfig),n.globalCursor(n._eventConfig.globalCursor);const i=it(n,e,t.expr);n._runtime=i,n._signals=i.signals,n._bind=(e.bindings||[]).map(a=>({state:null,param:L({},a)})),i.root&&i.root.set(r),r.source=i.data.root.input,n.pulse(i.data.root.input,n.changeset().insert(r.items)),n._width=n.width(),n._height=n.height(),n._viewWidth=X(n,n._width),n._viewHeight=Z(n,n._height),n._origin=[0,0],n._resize=0,n._autosize=1,at(n),Ce(n),Le(n),n.description(e.description),t.hover&&n.hover(),t.container&&n.initialize(t.container,t.bind),t.watchPixelRatio&&n._watchPixelRatio()}function C(e,t){return x(e._signals,t)?e._signals[t]:h("Unrecognized signal name: "+oe(t))}function re(e,t){const n=(e._targets||[]).filter(r=>r._update&&r._update.handler===t);return n.length?n[0]:null}function ie(e,t,n,r){let i=re(n,r);return i||(i=D(e,()=>r(t,n.value)),i.handler=r,e.on(n,null,i)),e}function se(e,t,n){const r=re(t,n);return r&&t._targets.remove(r),e}ae(ne,_,{async evaluate(e,t,n){if(await _.prototype.evaluate.call(this,e,t),this._redraw||this._resize)try{this._renderer&&(this._resize&&(this._resize=0,Se(this)),await this._renderer.renderAsync(this._scenegraph.root)),this._redraw=!1}catch(r){this.error(r)}return n&&he(this,n),this},dirty(e){this._redraw=!0,this._renderer&&this._renderer.dirty(e)},description(e){if(arguments.length){const t=e!=null?e+"":null;return t!==this._desc&&w(this._el,this._desc=t),this}return this._desc},container(){return this._el},scenegraph(){return this._scenegraph},origin(){return this._origin.slice()},signal(e,t,n){const r=C(this,e);return arguments.length===1?r.value:this.update(r,t,n)},width(e){return arguments.length?this.signal("width",e):this.signal("width")},height(e){return arguments.length?this.signal("height",e):this.signal("height")},padding(e){return arguments.length?this.signal("padding",$(e)):$(this.signal("padding"))},autosize(e){return arguments.length?this.signal("autosize",e):this.signal("autosize")},background(e){return arguments.length?this.signal("background",e):this.signal("background")},renderer(e){return arguments.length?(S(e)||h("Unrecognized renderer type: "+e),e!==this._renderType&&(this._renderType=e,this._resetRenderer()),this):this._renderType},tooltip(e){return arguments.length?(e!==this._tooltip&&(this._tooltip=e,this._resetRenderer()),this):this._tooltip},loader(e){return arguments.length?(e!==this._loader&&(_.prototype.loader.call(this,e),this._resetRenderer()),this):this._loader},resize(){return this._autosize=1,this.touch(C(this,"autosize"))},_resetRenderer(){this._renderer&&(this._renderer=null,this.initialize(this._el,this._elBind))},_resizeView:ot,addEventListener(e,t,n){let r=t;return n&&n.trap===!1||(r=D(this,t),r.raw=t),this._handler.on(e,r),this},removeEventListener(e,t){for(var n=this._handler.handlers(e),r=n.length,i,a;--r>=0;)if(a=n[r].type,i=n[r].handler,e===a&&(t===i||t===i.raw)){this._handler.off(a,i);break}return this},addResizeListener(e){const t=this._resizeListeners;return t.includes(e)||t.push(e),this},removeResizeListener(e){var t=this._resizeListeners,n=t.indexOf(e);return n>=0&&t.splice(n,1),this},addSignalListener(e,t){return ie(this,e,C(this,e),t)},removeSignalListener(e,t){return se(this,C(this,e),t)},addDataListener(e,t){return ie(this,e,v(this,e).values,t)},removeDataListener(e,t){return se(this,v(this,e).values,t)},globalCursor(e){if(arguments.length){if(this._globalCursor!==!!e){const t=T(this,null);this._globalCursor=!!e,t&&T(this,t)}return this}else return this._globalCursor},preventDefault(e){return arguments.length?(this._preventDefault=e,this):this._preventDefault},timer:ht,events:Pe,finalize:He,hover:We,data:xe,change:z,insert:Ee,remove:Re,scale:st,initialize:Xe,toImageURL:et,toCanvas:nt,toSVG:rt,getState:lt,setState:ct,_watchPixelRatio:mt});export{ne as View};export default null;