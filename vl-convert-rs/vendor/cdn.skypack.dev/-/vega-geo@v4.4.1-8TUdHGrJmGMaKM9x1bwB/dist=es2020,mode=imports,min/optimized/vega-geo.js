import{Transform as x,rederive as de,ingest as F,replace as ce}from"/-/vega-dataflow@v5.7.5-asKYS4gpPLMPf64pSozt/dist=es2020,mode=imports,min/optimized/vega-dataflow.js";import{inherits as S,identity as A,isArray as Q,isFunction as j,isNumber as _,accessorName as he,accessorFields as U,field as pe,extend as ye,constant as G,toSet as ge,array as I,error as L,extent as ve,zero as xe,one as Ee}from"/-/vega-util@v1.17.2-LUfkDhormMyfWqy3Ts6U/dist=es2020,mode=imports,min/optimized/vega-util.js";import{max as $,range as ze,tickStep as we,sum as De}from"/-/d3-array@v3.2.4-G4hy00bPnjF6FrSYpT32/dist=es2020,mode=imports,min/optimized/d3-array.js";import{bandwidthNRD as Se}from"/-/vega-statistics@v1.9.0-Qw8CjSQVQOg2M6VMgsme/dist=es2020,mode=imports,min/optimized/vega-statistics.js";import{getProjectionPath as ee,projectionProperties as te,projection as be}from"/-/vega-projection@v1.6.0-lGjH1T1qHepW8BpZZrrV/dist=es2020,mode=imports,min/optimized/vega-projection.js";import{geoGraticule as Oe}from"/-/d3-geo@v3.1.0-6gCuCN3p6hXOeZDWcbjw/dist=es2020,mode=imports,min/optimized/d3-geo.js";import{rgb as ne}from"/-/d3-color@v3.1.0-MWHDMwd2Pvp3NFjvrHgn/dist=es2020,mode=imports,min/optimized/d3-color.js";import{canvas as Re}from"/-/vega-canvas@v1.2.7-hCEcvULuKIOqBVGX1Tn8/dist=es2020,mode=imports,min/optimized/vega-canvas.js";function je(){}const R=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function re(){var e=1,t=1,n=o;function i(r,m){return m.map(f=>a(r,f))}function a(r,m){var f=[],l=[];return s(r,m,d=>{n(d,r,m),Me(d)>0?f.push([d]):l.push(d)}),l.forEach(d=>{for(var g=0,h=f.length,y;g<h;++g)if(Ce((y=f[g])[0],d)!==-1){y.push(d);return}}),{type:"MultiPolygon",value:m,coordinates:f}}function s(r,m,f){var l=new Array,d=new Array,g,h,y,c,p,z;for(g=h=-1,c=r[0]>=m,R[c<<1].forEach(w);++g<e-1;)y=c,c=r[g+1]>=m,R[y|c<<1].forEach(w);for(R[c<<0].forEach(w);++h<t-1;){for(g=-1,c=r[h*e+e]>=m,p=r[h*e]>=m,R[c<<1|p<<2].forEach(w);++g<e-1;)y=c,c=r[h*e+e+g+1]>=m,z=p,p=r[h*e+g+1]>=m,R[y|c<<1|p<<2|z<<3].forEach(w);R[c|p<<3].forEach(w)}for(g=-1,p=r[h*e]>=m,R[p<<2].forEach(w);++g<e-1;)z=p,p=r[h*e+g+1]>=m,R[p<<2|z<<3].forEach(w);R[p<<3].forEach(w);function w(E){var b=[E[0][0]+g,E[0][1]+h],O=[E[1][0]+g,E[1][1]+h],P=u(b),N=u(O),v,D;(v=d[P])?(D=l[N])?(delete d[v.end],delete l[D.start],v===D?(v.ring.push(O),f(v.ring)):l[v.start]=d[D.end]={start:v.start,end:D.end,ring:v.ring.concat(D.ring)}):(delete d[v.end],v.ring.push(O),d[v.end=N]=v):(v=l[N])?(D=d[P])?(delete l[v.start],delete d[D.end],v===D?(v.ring.push(O),f(v.ring)):l[D.start]=d[v.end]={start:D.start,end:v.end,ring:D.ring.concat(v.ring)}):(delete l[v.start],v.ring.unshift(b),l[v.start=P]=v):l[P]=d[N]={start:P,end:N,ring:[b,O]}}}function u(r){return r[0]*2+r[1]*(e+1)*4}function o(r,m,f){r.forEach(l=>{var d=l[0],g=l[1],h=d|0,y=g|0,c,p=m[y*e+h];d>0&&d<e&&h===d&&(c=m[y*e+h-1],l[0]=d+(f-c)/(p-c)-.5),g>0&&g<t&&y===g&&(c=m[(y-1)*e+h],l[1]=g+(f-c)/(p-c)-.5)})}return i.contour=a,i.size=function(r){if(!arguments.length)return[e,t];var m=Math.floor(r[0]),f=Math.floor(r[1]);return m>=0&&f>=0||L("invalid size"),e=m,t=f,i},i.smooth=function(r){return arguments.length?(n=r?o:je,i):n===o},i}function Me(e){for(var t=0,n=e.length,i=e[n-1][1]*e[0][0]-e[n-1][0]*e[0][1];++t<n;)i+=e[t-1][1]*e[t][0]-e[t-1][0]*e[t][1];return i}function Ce(e,t){for(var n=-1,i=t.length,a;++n<i;)if(a=Pe(e,t[n]))return a;return 0}function Pe(e,t){for(var n=t[0],i=t[1],a=-1,s=0,u=e.length,o=u-1;s<u;o=s++){var r=e[s],m=r[0],f=r[1],l=e[o],d=l[0],g=l[1];if(Ne(r,l,t))return 0;f>i!==g>i&&n<(d-m)*(i-f)/(g-f)+m&&(a=-a)}return a}function Ne(e,t,n){var i;return Ae(e,t,n)&&Ge(e[i=+(e[0]===t[0])],n[i],t[i])}function Ae(e,t,n){return(t[0]-e[0])*(n[1]-e[1])===(n[0]-e[0])*(t[1]-e[1])}function Ge(e,t,n){return e<=t&&t<=n||n<=t&&t<=e}function ie(e,t,n){return function(i){var a=ve(i),s=n?Math.min(a[0],0):a[0],u=a[1],o=u-s,r=t?we(s,u,e):o/(e+1);return ze(s+r,u,r)}}function k(e){x.call(this,null,e)}k.Definition={type:"Isocontour",metadata:{generates:!0},params:[{name:"field",type:"field"},{name:"thresholds",type:"number",array:!0},{name:"levels",type:"number"},{name:"nice",type:"boolean",default:!1},{name:"resolve",type:"enum",values:["shared","independent"],default:"independent"},{name:"zero",type:"boolean",default:!0},{name:"smooth",type:"boolean",default:!0},{name:"scale",type:"number",expr:!0},{name:"translate",type:"number",array:!0,expr:!0},{name:"as",type:"string",null:!0,default:"contour"}]},S(k,x,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation;var n=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=t.materialize(t.SOURCE).source,a=e.field||A,s=re().smooth(e.smooth!==!1),u=e.thresholds||Le(i,a,e),o=e.as===null?null:e.as||"contour",r=[];return i.forEach(m=>{const f=a(m),l=s.size([f.width,f.height])(f.values,Q(u)?u:u(f.values));Fe(l,f,m,e),l.forEach(d=>{r.push(de(m,F(o!=null?{[o]:d}:d)))})}),this.value&&(n.rem=this.value),this.value=n.source=n.add=r,n}});function Le(e,t,n){const i=ie(n.levels||10,n.nice,n.zero!==!1);return n.resolve!=="shared"?i:i(e.map(a=>$(t(a).values)))}function Fe(e,t,n,i){let a=i.scale||t.scale,s=i.translate||t.translate;if(j(a)&&(a=a(n,i)),j(s)&&(s=s(n,i)),(a===1||a==null)&&!s)return;const u=(_(a)?a:a[0])||1,o=(_(a)?a:a[1])||1,r=s&&s[0]||0,m=s&&s[1]||0;e.forEach(ae(t,u,o,r,m))}function ae(e,t,n,i,a){const s=e.x1||0,u=e.y1||0,o=t*n<0;function r(l){l.forEach(m)}function m(l){o&&l.reverse(),l.forEach(f)}function f(l){l[0]=(l[0]-s)*t+i,l[1]=(l[1]-u)*n+a}return function(l){return l.coordinates.forEach(r),l}}function oe(e,t,n){const i=e>=0?e:Se(t,n);return Math.round((Math.sqrt(4*i*i+1)-1)/2)}function q(e){return j(e)?e:G(+e)}function se(){var e=r=>r[0],t=r=>r[1],n=Ee,i=[-1,-1],a=960,s=500,u=2;function o(r,m){const f=oe(i[0],r,e)>>u,l=oe(i[1],r,t)>>u,d=f?f+2:0,g=l?l+2:0,h=2*d+(a>>u),y=2*g+(s>>u),c=new Float32Array(h*y),p=new Float32Array(h*y);let z=c;r.forEach(E=>{const b=d+(+e(E)>>u),O=g+(+t(E)>>u);b>=0&&b<h&&O>=0&&O<y&&(c[b+O*h]+=+n(E))}),f>0&&l>0?(M(h,y,c,p,f),C(h,y,p,c,l),M(h,y,c,p,f),C(h,y,p,c,l),M(h,y,c,p,f),C(h,y,p,c,l)):f>0?(M(h,y,c,p,f),M(h,y,p,c,f),M(h,y,c,p,f),z=p):l>0&&(C(h,y,c,p,l),C(h,y,p,c,l),C(h,y,c,p,l),z=p);const w=m?Math.pow(2,-2*u):1/De(z);for(let E=0,b=h*y;E<b;++E)z[E]*=w;return{values:z,scale:1<<u,width:h,height:y,x1:d,y1:g,x2:d+(a>>u),y2:g+(s>>u)}}return o.x=function(r){return arguments.length?(e=q(r),o):e},o.y=function(r){return arguments.length?(t=q(r),o):t},o.weight=function(r){return arguments.length?(n=q(r),o):n},o.size=function(r){if(!arguments.length)return[a,s];var m=+r[0],f=+r[1];return m>=0&&f>=0||L("invalid size"),a=m,s=f,o},o.cellSize=function(r){return arguments.length?((r=+r)>=1||L("invalid cell size"),u=Math.floor(Math.log(r)/Math.LN2),o):1<<u},o.bandwidth=function(r){return arguments.length?(r=I(r),r.length===1&&(r=[+r[0],+r[0]]),r.length!==2&&L("invalid bandwidth"),i=r,o):i},o}function M(e,t,n,i,a){const s=(a<<1)+1;for(let u=0;u<t;++u)for(let o=0,r=0;o<e+a;++o)o<e&&(r+=n[o+u*e]),o>=a&&(o>=s&&(r-=n[o-s+u*e]),i[o-a+u*e]=r/Math.min(o+1,e-1+s-o,s))}function C(e,t,n,i,a){const s=(a<<1)+1;for(let u=0;u<e;++u)for(let o=0,r=0;o<t+a;++o)o<t&&(r+=n[u+o*e]),o>=a&&(o>=s&&(r-=n[u+(o-s)*e]),i[u+(o-a)*e]=r/Math.min(o+1,t-1+s-o,s))}function X(e){x.call(this,null,e)}X.Definition={type:"KDE2D",metadata:{generates:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"weight",type:"field"},{name:"groupby",type:"field",array:!0},{name:"cellSize",type:"number"},{name:"bandwidth",type:"number",array:!0,length:2},{name:"counts",type:"boolean",default:!1},{name:"as",type:"string",default:"grid"}]};const Ue=["x","y","weight","size","cellSize","bandwidth"];function ue(e,t){return Ue.forEach(n=>t[n]!=null?e[n](t[n]):0),e}S(X,x,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation;var n=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=t.materialize(t.SOURCE).source,a=$e(i,e.groupby),s=(e.groupby||[]).map(he),u=ue(se(),e),o=e.as||"grid",r=[];function m(f,l){for(let d=0;d<s.length;++d)f[s[d]]=l[d];return f}return r=a.map(f=>F(m({[o]:u(f,e.counts)},f.dims))),this.value&&(n.rem=this.value),this.value=n.source=n.add=r,n}});function $e(e,t){var n=[],i=f=>f(o),a,s,u,o,r,m;if(t==null)n.push(e);else for(a={},s=0,u=e.length;s<u;++s)o=e[s],r=t.map(i),m=a[r],m||(a[r]=m=[],m.dims=r,n.push(m)),m.push(o);return n}function B(e){x.call(this,null,e)}B.Definition={type:"Contour",metadata:{generates:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"values",type:"number",array:!0},{name:"x",type:"field"},{name:"y",type:"field"},{name:"weight",type:"field"},{name:"cellSize",type:"number"},{name:"bandwidth",type:"number"},{name:"count",type:"number"},{name:"nice",type:"boolean",default:!1},{name:"thresholds",type:"number",array:!0},{name:"smooth",type:"boolean",default:!0}]},S(B,x,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation;var n=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=re().smooth(e.smooth!==!1),a=e.values,s=e.thresholds||ie(e.count||10,e.nice,!!a),u=e.size,o,r;return a||(a=t.materialize(t.SOURCE).source,o=ue(se(),e)(a,!0),r=ae(o,o.scale||1,o.scale||1,0,0),u=[o.width,o.height],a=o.values),s=Q(s)?s:s(a),a=i.size(u)(a,s),r&&a.forEach(r),this.value&&(n.rem=this.value),this.value=n.source=n.add=(a||[]).map(F),n}});const H="Feature",K="FeatureCollection",Ie="MultiPoint";function T(e){x.call(this,null,e)}T.Definition={type:"GeoJSON",metadata:{},params:[{name:"fields",type:"field",array:!0,length:2},{name:"geojson",type:"field"}]},S(T,x,{transform(e,t){var n=this._features,i=this._points,a=e.fields,s=a&&a[0],u=a&&a[1],o=e.geojson||!a&&A,r=t.ADD,m;m=e.modified()||t.changed(t.REM)||t.modified(U(o))||s&&t.modified(U(s))||u&&t.modified(U(u)),(!this.value||m)&&(r=t.SOURCE,this._features=n=[],this._points=i=[]),o&&t.visit(r,f=>n.push(o(f))),s&&u&&(t.visit(r,f=>{var l=s(f),d=u(f);l!=null&&d!=null&&(l=+l)===l&&(d=+d)===d&&i.push([l,d])}),n=n.concat({type:H,geometry:{type:Ie,coordinates:i}})),this.value={type:K,features:n}}});function V(e){x.call(this,null,e)}V.Definition={type:"GeoPath",metadata:{modifies:!0},params:[{name:"projection",type:"projection"},{name:"field",type:"field"},{name:"pointRadius",type:"number",expr:!0},{name:"as",type:"string",default:"path"}]},S(V,x,{transform(e,t){var n=t.fork(t.ALL),i=this.value,a=e.field||A,s=e.as||"path",u=n.SOURCE;!i||e.modified()?(this.value=i=ee(e.projection),n.materialize().reflow()):u=a===A||t.modified(a.fields)?n.ADD_MOD:n.ADD;const o=ke(i,e.pointRadius);return n.visit(u,r=>r[s]=i(a(r))),i.pointRadius(o),n.modifies(s)}});function ke(e,t){const n=e.pointRadius();return e.context(null),t!=null&&e.pointRadius(t),n}function Y(e){x.call(this,null,e)}Y.Definition={type:"GeoPoint",metadata:{modifies:!0},params:[{name:"projection",type:"projection",required:!0},{name:"fields",type:"field",array:!0,required:!0,length:2},{name:"as",type:"string",array:!0,length:2,default:["x","y"]}]},S(Y,x,{transform(e,t){var n=e.projection,i=e.fields[0],a=e.fields[1],s=e.as||["x","y"],u=s[0],o=s[1],r;function m(f){const l=n([i(f),a(f)]);l?(f[u]=l[0],f[o]=l[1]):(f[u]=void 0,f[o]=void 0)}return e.modified()?t=t.materialize().reflow(!0).visit(t.SOURCE,m):(r=t.modified(i.fields)||t.modified(a.fields),t.visit(r?t.ADD_MOD:t.ADD,m)),t.modifies(s)}});function Z(e){x.call(this,null,e)}Z.Definition={type:"GeoShape",metadata:{modifies:!0,nomod:!0},params:[{name:"projection",type:"projection"},{name:"field",type:"field",default:"datum"},{name:"pointRadius",type:"number",expr:!0},{name:"as",type:"string",default:"shape"}]},S(Z,x,{transform(e,t){var n=t.fork(t.ALL),i=this.value,a=e.as||"shape",s=n.ADD;return(!i||e.modified())&&(this.value=i=qe(ee(e.projection),e.field||pe("datum"),e.pointRadius),n.materialize().reflow(),s=n.SOURCE),n.visit(s,u=>u[a]=i),n.modifies(a)}});function qe(e,t,n){const i=n==null?a=>e(t(a)):a=>{var s=e.pointRadius(),u=e.pointRadius(n)(t(a));return e.pointRadius(s),u};return i.context=a=>(e.context(a),i),i}function J(e){x.call(this,[],e),this.generator=Oe()}J.Definition={type:"Graticule",metadata:{changes:!0,generates:!0},params:[{name:"extent",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"extentMajor",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"extentMinor",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"step",type:"number",array:!0,length:2},{name:"stepMajor",type:"number",array:!0,length:2,default:[90,360]},{name:"stepMinor",type:"number",array:!0,length:2,default:[10,10]},{name:"precision",type:"number",default:2.5}]},S(J,x,{transform(e,t){var n=this.value,i=this.generator,a;if(!n.length||e.modified())for(const s in e)j(i[s])&&i[s](e[s]);return a=i(),n.length?t.mod.push(ce(n[0],a)):t.add.push(F(a)),n[0]=a,t}});function W(e){x.call(this,null,e)}W.Definition={type:"heatmap",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"color",type:"string",expr:!0},{name:"opacity",type:"number",expr:!0},{name:"resolve",type:"enum",values:["shared","independent"],default:"independent"},{name:"as",type:"string",default:"image"}]},S(W,x,{transform(e,t){if(!t.changed()&&!e.modified())return t.StopPropagation;var n=t.materialize(t.SOURCE).source,i=e.resolve==="shared",a=e.field||A,s=Be(e.opacity,e),u=Xe(e.color,e),o=e.as||"image",r={$x:0,$y:0,$value:0,$max:i?$(n.map(m=>$(a(m).values))):0};return n.forEach(m=>{const f=a(m),l=ye({},m,r);i||(l.$max=$(f.values||[])),m[o]=He(f,l,u.dep?u:G(u(l)),s.dep?s:G(s(l)))}),t.reflow(!0).modifies(o)}});function Xe(e,t){let n;return j(e)?(n=i=>ne(e(i,t)),n.dep=fe(e)):n=G(ne(e||"#888")),n}function Be(e,t){let n;return j(e)?(n=i=>e(i,t),n.dep=fe(e)):e?n=G(e):(n=i=>i.$value/i.$max||0,n.dep=!0),n}function fe(e){if(!j(e))return!1;const t=ge(U(e));return t.$x||t.$y||t.$value||t.$max}function He(e,t,n,i){const a=e.width,s=e.height,u=e.x1||0,o=e.y1||0,r=e.x2||a,m=e.y2||s,f=e.values,l=f?c=>f[c]:xe,d=Re(r-u,m-o),g=d.getContext("2d"),h=g.getImageData(0,0,r-u,m-o),y=h.data;for(let c=o,p=0;c<m;++c){t.$y=c-o;for(let z=u,w=c*a;z<r;++z,p+=4){t.$x=z-u,t.$value=l(z+w);const E=n(t);y[p+0]=E.r,y[p+1]=E.g,y[p+2]=E.b,y[p+3]=~~(255*i(t))}}return g.putImageData(h,0,0),d}function le(e){x.call(this,null,e),this.modified(!0)}S(le,x,{transform(e,t){let n=this.value;return!n||e.modified("type")?(this.value=n=Te(e.type),te.forEach(i=>{e[i]!=null&&me(n,i,e[i])})):te.forEach(i=>{e.modified(i)&&me(n,i,e[i])}),e.pointRadius!=null&&n.path.pointRadius(e.pointRadius),e.fit&&Ke(n,e),t.fork(t.NO_SOURCE|t.NO_FIELDS)}});function Ke(e,t){const n=Ve(t.fit);t.extent?e.fitExtent(t.extent,n):t.size&&e.fitSize(t.size,n)}function Te(e){const t=be((e||"mercator").toLowerCase());return t||L("Unrecognized projection type: "+e),t()}function me(e,t,n){j(e[t])&&e[t](n)}function Ve(e){return e=I(e),e.length===1?e[0]:{type:K,features:e.reduce((t,n)=>t.concat(Ye(n)),[])}}function Ye(e){return e.type===K?e.features:I(e).filter(t=>t!=null).map(t=>t.type===H?t:{type:H,geometry:t})}export{B as contour,T as geojson,V as geopath,Y as geopoint,Z as geoshape,J as graticule,W as heatmap,k as isocontour,X as kde2d,le as projection};export default null;
