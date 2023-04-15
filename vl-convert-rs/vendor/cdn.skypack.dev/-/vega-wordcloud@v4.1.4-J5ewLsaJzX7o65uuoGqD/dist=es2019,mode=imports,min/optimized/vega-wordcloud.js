import{canvas as V}from"/-/vega-canvas@v1.2.7-hCEcvULuKIOqBVGX1Tn8/dist=es2019,mode=imports,min/optimized/vega-canvas.js";import{Transform as P}from"/-/vega-dataflow@v5.7.5-asKYS4gpPLMPf64pSozt/dist=es2019,mode=imports,min/optimized/vega-dataflow.js";import{inherits as G,error as H,isFunction as K,constant as Q,extent as Z}from"/-/vega-util@v1.17.1-uwuqwLZrXXBeO0DFYRgh/dist=es2019,mode=imports,min/optimized/vega-util.js";import{scale as J}from"/-/vega-scale@v7.3.0-RE8rHwByiw8oUoAe4pNs/dist=es2019,mode=imports,min/optimized/vega-scale.js";import{random as $}from"/-/vega-statistics@v1.8.1-mXKADMfVQufwILOgkTiI/dist=es2019,mode=imports,min/optimized/vega-statistics.js";var E=Math.PI/180,D=1<<11>>5,C=1<<11;function _(){var e=[256,256],t,o,m,f,x,a,c,p=U,v=[],s=Math.random,i={};i.layout=function(){for(var r=l(V()),n=at((e[0]>>5)*e[1]),u=null,b=v.length,z=-1,d=[],w=v.map(h=>({text:t(h),font:o(h),style:f(h),weight:x(h),rotate:a(h),size:~~(m(h)+1e-14),padding:c(h),xoff:0,yoff:0,x1:0,y1:0,x0:0,y0:0,hasText:!1,sprite:null,datum:h})).sort((h,S)=>S.size-h.size);++z<b;){var y=w[z];y.x=e[0]*(s()+.5)>>1,y.y=e[1]*(s()+.5)>>1,tt(r,y,w,z),y.hasText&&g(n,y,u)&&(d.push(y),u?rt(u,y):u=[{x:y.x+y.x0,y:y.y+y.y0},{x:y.x+y.x1,y:y.y+y.y1}],y.x-=e[0]>>1,y.y-=e[1]>>1)}return d};function l(r){r.width=r.height=1;var n=Math.sqrt(r.getContext("2d").getImageData(0,0,1,1).data.length>>2);r.width=(D<<5)/n,r.height=C/n;var u=r.getContext("2d");return u.fillStyle=u.strokeStyle="red",u.textAlign="center",{context:u,ratio:n}}function g(r,n,u){for(var b=n.x,z=n.y,d=Math.sqrt(e[0]*e[0]+e[1]*e[1]),w=p(e),y=s()<.5?1:-1,h=-y,S,W,T;(S=w(h+=y))&&!(W=~~S[0],T=~~S[1],Math.min(Math.abs(W),Math.abs(T))>=d);){if(n.x=b+W,n.y=z+T,n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>e[0]||n.y+n.y1>e[1])continue;if((!u||!et(n,r,e[0]))&&(!u||nt(n,u))){for(var R=n.sprite,q=n.width>>5,O=e[0]>>5,X=n.x-(q<<4),B=X&127,j=32-B,F=n.y1-n.y0,L=(n.y+n.y0)*O+(X>>5),I,A=0;A<F;A++){I=0;for(var k=0;k<=q;k++)r[L+k]|=I<<j|(k<q?(I=R[A*q+k])>>>B:0);L+=O}return n.sprite=null,!0}}return!1}return i.words=function(r){return arguments.length?(v=r,i):v},i.size=function(r){return arguments.length?(e=[+r[0],+r[1]],i):e},i.font=function(r){return arguments.length?(o=M(r),i):o},i.fontStyle=function(r){return arguments.length?(f=M(r),i):f},i.fontWeight=function(r){return arguments.length?(x=M(r),i):x},i.rotate=function(r){return arguments.length?(a=M(r),i):a},i.text=function(r){return arguments.length?(t=M(r),i):t},i.spiral=function(r){return arguments.length?(p=ot[r]||r,i):p},i.fontSize=function(r){return arguments.length?(m=M(r),i):m},i.padding=function(r){return arguments.length?(c=M(r),i):c},i.random=function(r){return arguments.length?(s=r,i):s},i}function tt(e,t,o,m){if(t.sprite)return;var f=e.context,x=e.ratio;f.clearRect(0,0,(D<<5)/x,C/x);var a=0,c=0,p=0,v=o.length,s,i,l,g,r;for(--m;++m<v;){if(t=o[m],f.save(),f.font=t.style+" "+t.weight+" "+~~((t.size+1)/x)+"px "+t.font,s=f.measureText(t.text+"m").width*x,l=t.size<<1,t.rotate){var n=Math.sin(t.rotate*E),u=Math.cos(t.rotate*E),b=s*u,z=s*n,d=l*u,w=l*n;s=Math.max(Math.abs(b+w),Math.abs(b-w))+31>>5<<5,l=~~Math.max(Math.abs(z+d),Math.abs(z-d))}else s=s+31>>5<<5;if(l>p&&(p=l),a+s>=D<<5&&(a=0,c+=p,p=0),c+l>=C)break;f.translate((a+(s>>1))/x,(c+(l>>1))/x),t.rotate&&f.rotate(t.rotate*E),f.fillText(t.text,0,0),t.padding&&(f.lineWidth=2*t.padding,f.strokeText(t.text,0,0)),f.restore(),t.width=s,t.height=l,t.xoff=a,t.yoff=c,t.x1=s>>1,t.y1=l>>1,t.x0=-t.x1,t.y0=-t.y1,t.hasText=!0,a+=s}for(var y=f.getImageData(0,0,(D<<5)/x,C/x).data,h=[];--m>=0;){if(t=o[m],!t.hasText)continue;for(s=t.width,i=s>>5,l=t.y1-t.y0,g=0;g<l*i;g++)h[g]=0;if(a=t.xoff,a==null)return;c=t.yoff;var S=0,W=-1;for(r=0;r<l;r++){for(g=0;g<s;g++){var T=i*r+(g>>5),R=y[(c+r)*(D<<5)+(a+g)<<2]?1<<31-g%32:0;h[T]|=R,S|=R}S?W=r:(t.y0++,l--,r--,c++)}t.y1=t.y0+W,t.sprite=h.slice(0,(t.y1-t.y0)*i)}}function et(e,t,o){o>>=5;for(var m=e.sprite,f=e.width>>5,x=e.x-(f<<4),a=x&127,c=32-a,p=e.y1-e.y0,v=(e.y+e.y0)*o+(x>>5),s,i=0;i<p;i++){s=0;for(var l=0;l<=f;l++)if((s<<c|(l<f?(s=m[i*f+l])>>>a:0))&t[v+l])return!0;v+=o}return!1}function rt(e,t){var o=e[0],m=e[1];t.x+t.x0<o.x&&(o.x=t.x+t.x0),t.y+t.y0<o.y&&(o.y=t.y+t.y0),t.x+t.x1>m.x&&(m.x=t.x+t.x1),t.y+t.y1>m.y&&(m.y=t.y+t.y1)}function nt(e,t){return e.x+e.x1>t[0].x&&e.x+e.x0<t[1].x&&e.y+e.y1>t[0].y&&e.y+e.y0<t[1].y}function U(e){var t=e[0]/e[1];return function(o){return[t*(o*=.1)*Math.cos(o),o*Math.sin(o)]}}function it(e){var t=4,o=t*e[0]/e[1],m=0,f=0;return function(x){var a=x<0?-1:1;switch(Math.sqrt(1+4*a*x)-a&3){case 0:m+=o;break;case 1:f+=t;break;case 2:m-=o;break;default:f-=t;break}return[m,f]}}function at(e){for(var t=[],o=-1;++o<e;)t[o]=0;return t}function M(e){return typeof e=="function"?e:function(){return e}}var ot={archimedean:U,rectangular:it};const Y=["x","y","font","fontSize","fontStyle","fontWeight","angle"],ft=["text","font","rotate","fontSize","fontStyle","fontWeight"];function N(e){P.call(this,_(),e)}N.Definition={type:"Wordcloud",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2},{name:"font",type:"string",expr:!0,default:"sans-serif"},{name:"fontStyle",type:"string",expr:!0,default:"normal"},{name:"fontWeight",type:"string",expr:!0,default:"normal"},{name:"fontSize",type:"number",expr:!0,default:14},{name:"fontSizeRange",type:"number",array:"nullable",default:[10,50]},{name:"rotate",type:"number",expr:!0,default:0},{name:"text",type:"field"},{name:"spiral",type:"string",values:["archimedean","rectangular"]},{name:"padding",type:"number",expr:!0},{name:"as",type:"string",array:!0,length:7,default:Y}]},G(N,P,{transform(e,t){e.size&&!(e.size[0]&&e.size[1])&&H("Wordcloud size dimensions must be non-zero.");function o(r){const n=e[r];return K(n)&&t.modified(n.fields)}const m=e.modified();if(!(m||t.changed(t.ADD_REM)||ft.some(o)))return;const f=t.materialize(t.SOURCE).source,x=this.value,a=e.as||Y;let c=e.fontSize||14,p;if(K(c)?p=e.fontSizeRange:c=Q(c),p){const r=c,n=J("sqrt")().domain(Z(f,r)).range(p);c=u=>n(r(u))}f.forEach(r=>{r[a[0]]=NaN,r[a[1]]=NaN,r[a[3]]=0});const v=x.words(f).text(e.text).size(e.size||[500,500]).padding(e.padding||1).spiral(e.spiral||"archimedean").rotate(e.rotate||0).font(e.font||"sans-serif").fontStyle(e.fontStyle||"normal").fontWeight(e.fontWeight||"normal").fontSize(c).random($).layout(),s=x.size(),i=s[0]>>1,l=s[1]>>1,g=v.length;for(let r=0,n,u;r<g;++r)n=v[r],u=n.datum,u[a[0]]=n.x+i,u[a[1]]=n.y+l,u[a[2]]=n.font,u[a[3]]=n.size,u[a[4]]=n.style,u[a[5]]=n.weight,u[a[6]]=n.rotate;return t.reflow(m).modifies(a)}});export{N as wordcloud};export default null;
