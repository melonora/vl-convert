import{tickStep as U}from"/-/d3-array@v3.2.4-G4hy00bPnjF6FrSYpT32/dist=es2020,mode=imports,min/optimized/d3-array.js";import{formatSpecifier as N,precisionFixed as X,precisionRound as G,precisionPrefix as V,formatLocale as W,format as $,formatPrefix as J}from"/-/d3-format@v3.1.0-D5wAD2odDPNNWsKloKgL/dist=es2020,mode=imports,min/optimized/d3-format.js";import{SECONDS as P,MINUTES as p,HOURS as y,DATE as I,WEEK as M,MONTH as S,QUARTER as v,YEAR as w,MILLISECONDS as _,DAY as tt,timeInterval as et,utcInterval as rt}from"/-/vega-time@v2.1.1-Q1TxQbneCNdh5ryZm2Gf/dist=es2020,mode=imports,min/optimized/vega-time.js";import{isString as E,extend as ot,error as O,isObject as it}from"/-/vega-util@v1.17.2-LUfkDhormMyfWqy3Ts6U/dist=es2020,mode=imports,min/optimized/vega-util.js";import{timeFormat as nt,timeParse as mt,utcFormat as at,utcParse as ut,timeFormatLocale as st}from"/-/d3-time-format@v4.1.0-f8eZV7eLtGIxvK8uvO3o/dist=es2020,mode=imports,min/optimized/d3-time-format.js";function f(t){const r={};return e=>r[e]||(r[e]=t(e))}function ct(t,r){return e=>{const o=t(e),n=o.indexOf(r);if(n<0)return o;let a=ft(o,n);const m=a<o.length?o.slice(a):"";for(;--a>n;)if(o[a]!=="0"){++a;break}return o.slice(0,a)+m}}function ft(t,r){let e=t.lastIndexOf("e"),o;if(e>0)return e;for(e=t.length;--e>r;)if(o=t.charCodeAt(e),o>=48&&o<=57)return e+1}function k(t){const r=f(t.format),e=t.formatPrefix;return{format:r,formatPrefix:e,formatFloat(o){const n=N(o||",");if(n.precision==null){n.precision=12;switch(n.type){case"%":n.precision-=2;break;case"e":n.precision-=1;break}return ct(r(n),r(".1f")(1)[1])}else return r(n)},formatSpan(o,n,a,m){m=N(m??",f");const s=U(o,n,a),c=Math.max(Math.abs(o),Math.abs(n));let u;if(m.precision==null)switch(m.type){case"s":return isNaN(u=V(s,c))||(m.precision=u),e(m,c);case"":case"e":case"g":case"p":case"r":{isNaN(u=G(s,c))||(m.precision=u-(m.type==="e"));break}case"f":case"%":{isNaN(u=X(s))||(m.precision=u-(m.type==="%")*2);break}}return r(m)}}}let L;g();function g(){return L=k({format:$,formatPrefix:J})}function F(t){return k(W(t))}function l(t){return arguments.length?L=F(t):L}function z(t,r,e){e=e||{},it(e)||O(`Invalid time multi-format specifier: ${e}`);const o=r(P),n=r(p),a=r(y),m=r(I),s=r(M),c=r(S),u=r(v),j=r(w),A=t(e[_]||".%L"),Y=t(e[P]||":%S"),C=t(e[p]||"%I:%M"),K=t(e[y]||"%I %p"),Z=t(e[I]||e[tt]||"%a %d"),q=t(e[M]||"%b %d"),B=t(e[S]||"%B"),H=t(e[v]||"%B"),Q=t(e[w]||"%Y");return i=>(o(i)<i?A:n(i)<i?Y:a(i)<i?C:m(i)<i?K:c(i)<i?s(i)<i?Z:q:j(i)<i?u(i)<i?B:H:Q)(i)}function T(t){const r=f(t.format),e=f(t.utcFormat);return{timeFormat:o=>E(o)?r(o):z(r,et,o),utcFormat:o=>E(o)?e(o):z(e,rt,o),timeParse:f(t.parse),utcParse:f(t.utcParse)}}let h;x();function x(){return h=T({format:nt,parse:mt,utcFormat:at,utcParse:ut})}function b(t){return T(st(t))}function d(t){return arguments.length?h=b(t):h}const D=(t,r)=>ot({},t,r);function lt(t,r){const e=t?F(t):l(),o=r?b(r):d();return D(e,o)}function R(t,r){const e=arguments.length;return e&&e!==2&&O("defaultLocale expects either zero or two arguments."),e?D(l(t),d(r)):D(l(),d())}function dt(){return g(),x(),R()}export{R as defaultLocale,lt as locale,l as numberFormatDefaultLocale,F as numberFormatLocale,dt as resetDefaultLocale,g as resetNumberFormatDefaultLocale,x as resetTimeFormatDefaultLocale,d as timeFormatDefaultLocale,b as timeFormatLocale};export default null;
