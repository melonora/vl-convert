var rr=typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{},R=[],F=[],Fr=typeof Uint8Array!="undefined"?Uint8Array:Array,q=!1;function ir(){q=!0;for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,i=n.length;r<i;++r)R[r]=n[r],F[n.charCodeAt(r)]=r;F["-".charCodeAt(0)]=62,F["_".charCodeAt(0)]=63}function Ar(n){q||ir();var r,i,e,t,o,u,h=n.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o=n[h-2]==="="?2:n[h-1]==="="?1:0,u=new Fr(h*3/4-o),e=o>0?h-4:h;var a=0;for(r=0,i=0;r<e;r+=4,i+=3)t=F[n.charCodeAt(r)]<<18|F[n.charCodeAt(r+1)]<<12|F[n.charCodeAt(r+2)]<<6|F[n.charCodeAt(r+3)],u[a++]=t>>16&255,u[a++]=t>>8&255,u[a++]=t&255;return o===2?(t=F[n.charCodeAt(r)]<<2|F[n.charCodeAt(r+1)]>>4,u[a++]=t&255):o===1&&(t=F[n.charCodeAt(r)]<<10|F[n.charCodeAt(r+1)]<<4|F[n.charCodeAt(r+2)]>>2,u[a++]=t>>8&255,u[a++]=t&255),u}function Rr(n){return R[n>>18&63]+R[n>>12&63]+R[n>>6&63]+R[n&63]}function mr(n,r,i){for(var e,t=[],o=r;o<i;o+=3)e=(n[o]<<16)+(n[o+1]<<8)+n[o+2],t.push(Rr(e));return t.join("")}function nr(n){q||ir();for(var r,i=n.length,e=i%3,t="",o=[],u=16383,h=0,a=i-e;h<a;h+=u)o.push(mr(n,h,h+u>a?a:h+u));return e===1?(r=n[i-1],t+=R[r>>2],t+=R[r<<4&63],t+="=="):e===2&&(r=(n[i-2]<<8)+n[i-1],t+=R[r>>10],t+=R[r>>4&63],t+=R[r<<2&63],t+="="),o.push(t),o.join("")}function O(n,r,i,e,t){var o,u,h=t*8-e-1,a=(1<<h)-1,p=a>>1,s=-7,c=i?t-1:0,x=i?-1:1,w=n[r+c];for(c+=x,o=w&(1<<-s)-1,w>>=-s,s+=h;s>0;o=o*256+n[r+c],c+=x,s-=8);for(u=o&(1<<-s)-1,o>>=-s,s+=e;s>0;u=u*256+n[r+c],c+=x,s-=8);if(o===0)o=1-p;else{if(o===a)return u?NaN:(w?-1:1)*Infinity;u=u+Math.pow(2,e),o=o-p}return(w?-1:1)*u*Math.pow(2,o-e)}function er(n,r,i,e,t,o){var u,h,a,p=o*8-t-1,s=(1<<p)-1,c=s>>1,x=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=e?0:o-1,y=e?1:-1,D=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===Infinity?(h=isNaN(r)?1:0,u=s):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),u+c>=1?r+=x/a:r+=x*Math.pow(2,1-c),r*a>=2&&(u++,a/=2),u+c>=s?(h=0,u=s):u+c>=1?(h=(r*a-1)*Math.pow(2,t),u=u+c):(h=r*Math.pow(2,c-1)*Math.pow(2,t),u=0));t>=8;n[i+w]=h&255,w+=y,h/=256,t-=8);for(u=u<<t|h,p+=t;p>0;n[i+w]=u&255,w+=y,u/=256,p-=8);n[i+w-y]|=D*128}var Ir={}.toString,tr=Array.isArray||function(n){return Ir.call(n)=="[object Array]"};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */var Tr=50;f.TYPED_ARRAY_SUPPORT=rr.TYPED_ARRAY_SUPPORT!==void 0?rr.TYPED_ARRAY_SUPPORT:!0;function G(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function U(n,r){if(G()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(r),n.__proto__=f.prototype):(n===null&&(n=new f(r)),n.length=r),n}function f(n,r,i){if(!f.TYPED_ARRAY_SUPPORT&&!(this instanceof f))return new f(n,r,i);if(typeof n=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return J(this,n)}return ur(this,n,r,i)}f.poolSize=8192,f._augment=function(n){return n.__proto__=f.prototype,n};function ur(n,r,i,e){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer!="undefined"&&r instanceof ArrayBuffer?vr(n,r,i,e):typeof r=="string"?Br(n,r,i):Dr(n,r)}f.from=function(n,r,i){return ur(null,n,r,i)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array);function or(n){if(typeof n!="number")throw new TypeError('"size" argument must be a number');if(n<0)throw new RangeError('"size" argument must not be negative')}function Ur(n,r,i,e){return or(r),r<=0?U(n,r):i!==void 0?typeof e=="string"?U(n,r).fill(i,e):U(n,r).fill(i):U(n,r)}f.alloc=function(n,r,i){return Ur(null,n,r,i)};function J(n,r){if(or(r),n=U(n,r<0?0:z(r)|0),!f.TYPED_ARRAY_SUPPORT)for(var i=0;i<r;++i)n[i]=0;return n}f.allocUnsafe=function(n){return J(null,n)},f.allocUnsafeSlow=function(n){return J(null,n)};function Br(n,r,i){if((typeof i!="string"||i==="")&&(i="utf8"),!f.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var e=fr(r,i)|0;n=U(n,e);var t=n.write(r,i);return t!==e&&(n=n.slice(0,t)),n}function X(n,r){var i=r.length<0?0:z(r.length)|0;n=U(n,i);for(var e=0;e<i;e+=1)n[e]=r[e]&255;return n}function vr(n,r,i,e){if(r.byteLength,i<0||r.byteLength<i)throw new RangeError("'offset' is out of bounds");if(r.byteLength<i+(e||0))throw new RangeError("'length' is out of bounds");return i===void 0&&e===void 0?r=new Uint8Array(r):e===void 0?r=new Uint8Array(r,i):r=new Uint8Array(r,i,e),f.TYPED_ARRAY_SUPPORT?(n=r,n.__proto__=f.prototype):n=X(n,r),n}function Dr(n,r){if(m(r)){var i=z(r.length)|0;return n=U(n,i),n.length===0||r.copy(n,0,0,i),n}if(r){if(typeof ArrayBuffer!="undefined"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||zr(r.length)?U(n,0):X(n,r);if(r.type==="Buffer"&&tr(r.data))return X(n,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function z(n){if(n>=G())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+G().toString(16)+" bytes");return n|0}f.isBuffer=Zr;function m(n){return!!(n!=null&&n._isBuffer)}f.compare=function(r,i){if(!m(r)||!m(i))throw new TypeError("Arguments must be Buffers");if(r===i)return 0;for(var e=r.length,t=i.length,o=0,u=Math.min(e,t);o<u;++o)if(r[o]!==i[o]){e=r[o],t=i[o];break}return e<t?-1:t<e?1:0},f.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(r,i){if(!tr(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return f.alloc(0);var e;if(i===void 0)for(i=0,e=0;e<r.length;++e)i+=r[e].length;var t=f.allocUnsafe(i),o=0;for(e=0;e<r.length;++e){var u=r[e];if(!m(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(t,o),o+=u.length}return t};function fr(n,r){if(m(n))return n.length;if(typeof ArrayBuffer!="undefined"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(n)||n instanceof ArrayBuffer))return n.byteLength;typeof n!="string"&&(n=""+n);var i=n.length;if(i===0)return 0;for(var e=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return L(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Er(n).length;default:if(e)return L(n).length;r=(""+r).toLowerCase(),e=!0}}f.byteLength=fr;function Pr(n,r,i){var e=!1;if((r===void 0||r<0)&&(r=0),r>this.length)return"";if((i===void 0||i>this.length)&&(i=this.length),i<=0)return"";if(i>>>=0,r>>>=0,i<=r)return"";for(n||(n="utf8");;)switch(n){case"hex":return Lr(this,r,i);case"utf8":case"utf-8":return lr(this,r,i);case"ascii":return jr(this,r,i);case"latin1":case"binary":return Nr(this,r,i);case"base64":return kr(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wr(this,r,i);default:if(e)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),e=!0}}f.prototype._isBuffer=!0;function v(n,r,i){var e=n[r];n[r]=n[i],n[i]=e}f.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<r;i+=2)v(this,i,i+1);return this},f.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<r;i+=4)v(this,i,i+3),v(this,i+1,i+2);return this},f.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<r;i+=8)v(this,i,i+7),v(this,i+1,i+6),v(this,i+2,i+5),v(this,i+3,i+4);return this},f.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?lr(this,0,r):Pr.apply(this,arguments)},f.prototype.equals=function(r){if(!m(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:f.compare(this,r)===0},f.prototype.inspect=function(){var r="",i=Tr;return this.length>0&&(r=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(r+=" ... ")),"<Buffer "+r+">"},f.prototype.compare=function(r,i,e,t,o){if(!m(r))throw new TypeError("Argument must be a Buffer");if(i===void 0&&(i=0),e===void 0&&(e=r?r.length:0),t===void 0&&(t=0),o===void 0&&(o=this.length),i<0||e>r.length||t<0||o>this.length)throw new RangeError("out of range index");if(t>=o&&i>=e)return 0;if(t>=o)return-1;if(i>=e)return 1;if(i>>>=0,e>>>=0,t>>>=0,o>>>=0,this===r)return 0;for(var u=o-t,h=e-i,a=Math.min(u,h),p=this.slice(t,o),s=r.slice(i,e),c=0;c<a;++c)if(p[c]!==s[c]){u=p[c],h=s[c];break}return u<h?-1:h<u?1:0};function hr(n,r,i,e,t){if(n.length===0)return-1;if(typeof i=="string"?(e=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,isNaN(i)&&(i=t?0:n.length-1),i<0&&(i=n.length+i),i>=n.length){if(t)return-1;i=n.length-1}else if(i<0)if(t)i=0;else return-1;if(typeof r=="string"&&(r=f.from(r,e)),m(r))return r.length===0?-1:ar(n,r,i,e,t);if(typeof r=="number")return r=r&255,f.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(n,r,i):Uint8Array.prototype.lastIndexOf.call(n,r,i):ar(n,[r],i,e,t);throw new TypeError("val must be string, number or Buffer")}function ar(n,r,i,e,t){var o=1,u=n.length,h=r.length;if(e!==void 0&&(e=String(e).toLowerCase(),e==="ucs2"||e==="ucs-2"||e==="utf16le"||e==="utf-16le")){if(n.length<2||r.length<2)return-1;o=2,u/=2,h/=2,i/=2}function a(w,y){return o===1?w[y]:w.readUInt16BE(y*o)}var p;if(t){var s=-1;for(p=i;p<u;p++)if(a(n,p)===a(r,s===-1?0:p-s)){if(s===-1&&(s=p),p-s+1===h)return s*o}else s!==-1&&(p-=p-s),s=-1}else for(i+h>u&&(i=u-h),p=i;p>=0;p--){for(var c=!0,x=0;x<h;x++)if(a(n,p+x)!==a(r,x)){c=!1;break}if(c)return p}return-1}f.prototype.includes=function(r,i,e){return this.indexOf(r,i,e)!==-1},f.prototype.indexOf=function(r,i,e){return hr(this,r,i,e,!0)},f.prototype.lastIndexOf=function(r,i,e){return hr(this,r,i,e,!1)};function Sr(n,r,i,e){i=Number(i)||0;var t=n.length-i;e?(e=Number(e),e>t&&(e=t)):e=t;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");e>o/2&&(e=o/2);for(var u=0;u<e;++u){var h=parseInt(r.substr(u*2,2),16);if(isNaN(h))return u;n[i+u]=h}return u}function Cr(n,r,i,e){return W(L(r,n.length-i),n,i,e)}function cr(n,r,i,e){return W(Jr(r),n,i,e)}function Yr(n,r,i,e){return cr(n,r,i,e)}function Mr(n,r,i,e){return W(Er(r),n,i,e)}function dr(n,r,i,e){return W(Xr(r,n.length-i),n,i,e)}f.prototype.write=function(r,i,e,t){if(i===void 0)t="utf8",e=this.length,i=0;else if(e===void 0&&typeof i=="string")t=i,e=this.length,i=0;else if(isFinite(i))i=i|0,isFinite(e)?(e=e|0,t===void 0&&(t="utf8")):(t=e,e=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-i;if((e===void 0||e>o)&&(e=o),r.length>0&&(e<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var u=!1;;)switch(t){case"hex":return Sr(this,r,i,e);case"utf8":case"utf-8":return Cr(this,r,i,e);case"ascii":return cr(this,r,i,e);case"latin1":case"binary":return Yr(this,r,i,e);case"base64":return Mr(this,r,i,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return dr(this,r,i,e);default:if(u)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),u=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function kr(n,r,i){return r===0&&i===n.length?nr(n):nr(n.slice(r,i))}function lr(n,r,i){i=Math.min(n.length,i);for(var e=[],t=r;t<i;){var o=n[t],u=null,h=o>239?4:o>223?3:o>191?2:1;if(t+h<=i){var a,p,s,c;switch(h){case 1:o<128&&(u=o);break;case 2:a=n[t+1],(a&192)===128&&(c=(o&31)<<6|a&63,c>127&&(u=c));break;case 3:a=n[t+1],p=n[t+2],(a&192)===128&&(p&192)===128&&(c=(o&15)<<12|(a&63)<<6|p&63,c>2047&&(c<55296||c>57343)&&(u=c));break;case 4:a=n[t+1],p=n[t+2],s=n[t+3],(a&192)===128&&(p&192)===128&&(s&192)===128&&(c=(o&15)<<18|(a&63)<<12|(p&63)<<6|s&63,c>65535&&c<1114112&&(u=c))}}u===null?(u=65533,h=1):u>65535&&(u-=65536,e.push(u>>>10&1023|55296),u=56320|u&1023),e.push(u),t+=h}return Or(e)}var pr=4096;function Or(n){var r=n.length;if(r<=pr)return String.fromCharCode.apply(String,n);for(var i="",e=0;e<r;)i+=String.fromCharCode.apply(String,n.slice(e,e+=pr));return i}function jr(n,r,i){var e="";i=Math.min(n.length,i);for(var t=r;t<i;++t)e+=String.fromCharCode(n[t]&127);return e}function Nr(n,r,i){var e="";i=Math.min(n.length,i);for(var t=r;t<i;++t)e+=String.fromCharCode(n[t]);return e}function Lr(n,r,i){var e=n.length;(!r||r<0)&&(r=0),(!i||i<0||i>e)&&(i=e);for(var t="",o=r;o<i;++o)t+=Gr(n[o]);return t}function Wr(n,r,i){for(var e=n.slice(r,i),t="",o=0;o<e.length;o+=2)t+=String.fromCharCode(e[o]+e[o+1]*256);return t}f.prototype.slice=function(r,i){var e=this.length;r=~~r,i=i===void 0?e:~~i,r<0?(r+=e,r<0&&(r=0)):r>e&&(r=e),i<0?(i+=e,i<0&&(i=0)):i>e&&(i=e),i<r&&(i=r);var t;if(f.TYPED_ARRAY_SUPPORT)t=this.subarray(r,i),t.__proto__=f.prototype;else{var o=i-r;t=new f(o,void 0);for(var u=0;u<o;++u)t[u]=this[u+r]}return t};function _(n,r,i){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>i)throw new RangeError("Trying to access beyond buffer length")}f.prototype.readUIntLE=function(r,i,e){r=r|0,i=i|0,e||_(r,i,this.length);for(var t=this[r],o=1,u=0;++u<i&&(o*=256);)t+=this[r+u]*o;return t},f.prototype.readUIntBE=function(r,i,e){r=r|0,i=i|0,e||_(r,i,this.length);for(var t=this[r+--i],o=1;i>0&&(o*=256);)t+=this[r+--i]*o;return t},f.prototype.readUInt8=function(r,i){return i||_(r,1,this.length),this[r]},f.prototype.readUInt16LE=function(r,i){return i||_(r,2,this.length),this[r]|this[r+1]<<8},f.prototype.readUInt16BE=function(r,i){return i||_(r,2,this.length),this[r]<<8|this[r+1]},f.prototype.readUInt32LE=function(r,i){return i||_(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},f.prototype.readUInt32BE=function(r,i){return i||_(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},f.prototype.readIntLE=function(r,i,e){r=r|0,i=i|0,e||_(r,i,this.length);for(var t=this[r],o=1,u=0;++u<i&&(o*=256);)t+=this[r+u]*o;return o*=128,t>=o&&(t-=Math.pow(2,8*i)),t},f.prototype.readIntBE=function(r,i,e){r=r|0,i=i|0,e||_(r,i,this.length);for(var t=i,o=1,u=this[r+--t];t>0&&(o*=256);)u+=this[r+--t]*o;return o*=128,u>=o&&(u-=Math.pow(2,8*i)),u},f.prototype.readInt8=function(r,i){return i||_(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},f.prototype.readInt16LE=function(r,i){i||_(r,2,this.length);var e=this[r]|this[r+1]<<8;return e&32768?e|4294901760:e},f.prototype.readInt16BE=function(r,i){i||_(r,2,this.length);var e=this[r+1]|this[r]<<8;return e&32768?e|4294901760:e},f.prototype.readInt32LE=function(r,i){return i||_(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},f.prototype.readInt32BE=function(r,i){return i||_(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},f.prototype.readFloatLE=function(r,i){return i||_(r,4,this.length),O(this,r,!0,23,4)},f.prototype.readFloatBE=function(r,i){return i||_(r,4,this.length),O(this,r,!1,23,4)},f.prototype.readDoubleLE=function(r,i){return i||_(r,8,this.length),O(this,r,!0,52,8)},f.prototype.readDoubleBE=function(r,i){return i||_(r,8,this.length),O(this,r,!1,52,8)};function g(n,r,i,e,t,o){if(!m(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>t||r<o)throw new RangeError('"value" argument is out of bounds');if(i+e>n.length)throw new RangeError("Index out of range")}f.prototype.writeUIntLE=function(r,i,e,t){if(r=+r,i=i|0,e=e|0,!t){var o=Math.pow(2,8*e)-1;g(this,r,i,e,o,0)}var u=1,h=0;for(this[i]=r&255;++h<e&&(u*=256);)this[i+h]=r/u&255;return i+e},f.prototype.writeUIntBE=function(r,i,e,t){if(r=+r,i=i|0,e=e|0,!t){var o=Math.pow(2,8*e)-1;g(this,r,i,e,o,0)}var u=e-1,h=1;for(this[i+u]=r&255;--u>=0&&(h*=256);)this[i+u]=r/h&255;return i+e},f.prototype.writeUInt8=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,1,255,0),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[i]=r&255,i+1};function j(n,r,i,e){r<0&&(r=65535+r+1);for(var t=0,o=Math.min(n.length-i,2);t<o;++t)n[i+t]=(r&255<<8*(e?t:1-t))>>>(e?t:1-t)*8}f.prototype.writeUInt16LE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8):j(this,r,i,!0),i+2},f.prototype.writeUInt16BE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>8,this[i+1]=r&255):j(this,r,i,!1),i+2};function N(n,r,i,e){r<0&&(r=4294967295+r+1);for(var t=0,o=Math.min(n.length-i,4);t<o;++t)n[i+t]=r>>>(e?t:3-t)*8&255}f.prototype.writeUInt32LE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[i+3]=r>>>24,this[i+2]=r>>>16,this[i+1]=r>>>8,this[i]=r&255):N(this,r,i,!0),i+4},f.prototype.writeUInt32BE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255):N(this,r,i,!1),i+4},f.prototype.writeIntLE=function(r,i,e,t){if(r=+r,i=i|0,!t){var o=Math.pow(2,8*e-1);g(this,r,i,e,o-1,-o)}var u=0,h=1,a=0;for(this[i]=r&255;++u<e&&(h*=256);)r<0&&a===0&&this[i+u-1]!==0&&(a=1),this[i+u]=(r/h>>0)-a&255;return i+e},f.prototype.writeIntBE=function(r,i,e,t){if(r=+r,i=i|0,!t){var o=Math.pow(2,8*e-1);g(this,r,i,e,o-1,-o)}var u=e-1,h=1,a=0;for(this[i+u]=r&255;--u>=0&&(h*=256);)r<0&&a===0&&this[i+u+1]!==0&&(a=1),this[i+u]=(r/h>>0)-a&255;return i+e},f.prototype.writeInt8=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,1,127,-128),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[i]=r&255,i+1},f.prototype.writeInt16LE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8):j(this,r,i,!0),i+2},f.prototype.writeInt16BE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>8,this[i+1]=r&255):j(this,r,i,!1),i+2},f.prototype.writeInt32LE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8,this[i+2]=r>>>16,this[i+3]=r>>>24):N(this,r,i,!0),i+4},f.prototype.writeInt32BE=function(r,i,e){return r=+r,i=i|0,e||g(this,r,i,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255):N(this,r,i,!1),i+4};function sr(n,r,i,e,t,o){if(i+e>n.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function xr(n,r,i,e,t){return t||sr(n,r,i,4),er(n,r,i,e,23,4),i+4}f.prototype.writeFloatLE=function(r,i,e){return xr(this,r,i,!0,e)},f.prototype.writeFloatBE=function(r,i,e){return xr(this,r,i,!1,e)};function wr(n,r,i,e,t){return t||sr(n,r,i,8),er(n,r,i,e,52,8),i+8}f.prototype.writeDoubleLE=function(r,i,e){return wr(this,r,i,!0,e)},f.prototype.writeDoubleBE=function(r,i,e){return wr(this,r,i,!1,e)},f.prototype.copy=function(r,i,e,t){if(e||(e=0),!t&&t!==0&&(t=this.length),i>=r.length&&(i=r.length),i||(i=0),t>0&&t<e&&(t=e),t===e)return 0;if(r.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),r.length-i<t-e&&(t=r.length-i+e);var o=t-e,u;if(this===r&&e<i&&i<t)for(u=o-1;u>=0;--u)r[u+i]=this[u+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(u=0;u<o;++u)r[u+i]=this[u+e];else Uint8Array.prototype.set.call(r,this.subarray(e,e+o),i);return o},f.prototype.fill=function(r,i,e,t){if(typeof r=="string"){if(typeof i=="string"?(t=i,i=0,e=this.length):typeof e=="string"&&(t=e,e=this.length),r.length===1){var o=r.charCodeAt(0);o<256&&(r=o)}if(t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!f.isEncoding(t))throw new TypeError("Unknown encoding: "+t)}else typeof r=="number"&&(r=r&255);if(i<0||this.length<i||this.length<e)throw new RangeError("Out of range index");if(e<=i)return this;i=i>>>0,e=e===void 0?this.length:e>>>0,r||(r=0);var u;if(typeof r=="number")for(u=i;u<e;++u)this[u]=r;else{var h=m(r)?r:L(new f(r,t).toString()),a=h.length;for(u=0;u<e-i;++u)this[u+i]=h[u%a]}return this};var Hr=/[^+\/0-9A-Za-z-_]/g;function Vr(n){if(n=qr(n).replace(Hr,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function qr(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function Gr(n){return n<16?"0"+n.toString(16):n.toString(16)}function L(n,r){r=r||Infinity;for(var i,e=n.length,t=null,o=[],u=0;u<e;++u){if(i=n.charCodeAt(u),i>55295&&i<57344){if(!t){if(i>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(u+1===e){(r-=3)>-1&&o.push(239,191,189);continue}t=i;continue}if(i<56320){(r-=3)>-1&&o.push(239,191,189),t=i;continue}i=(t-55296<<10|i-56320)+65536}else t&&((r-=3)>-1&&o.push(239,191,189));if(t=null,i<128){if((r-=1)<0)break;o.push(i)}else if(i<2048){if((r-=2)<0)break;o.push(i>>6|192,i&63|128)}else if(i<65536){if((r-=3)<0)break;o.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((r-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return o}function Jr(n){for(var r=[],i=0;i<n.length;++i)r.push(n.charCodeAt(i)&255);return r}function Xr(n,r){for(var i,e,t,o=[],u=0;u<n.length&&!((r-=2)<0);++u)i=n.charCodeAt(u),e=i>>8,t=i%256,o.push(t),o.push(e);return o}function Er(n){return Ar(Vr(n))}function W(n,r,i,e){for(var t=0;t<e&&!(t+i>=r.length||t>=n.length);++t)r[t+i]=n[t];return t}function zr(n){return n!==n}function Zr(n){return n!=null&&(!!n._isBuffer||_r(n)||$r(n))}function _r(n){return!!n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function $r(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&_r(n.slice(0,0))}function Kr(n,r,i){return i={path:r,exports:{},require:function(e,t){return Qr(e,t==null?i.path:t)}},n(i,i.exports),i.exports}function Qr(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var B=Kr(function(n){var r=function(){function i(x,w){return w!=null&&x instanceof w}var e;try{e=Map}catch(x){e=function(){}}var t;try{t=Set}catch(x){t=function(){}}var o;try{o=Promise}catch(x){o=function(){}}function u(x,w,y,D,H){typeof w=="object"&&(y=w.depth,D=w.prototype,H=w.includeNonEnumerable,w=w.circular);var Z=[],$=[],yr=typeof f!="undefined";typeof w=="undefined"&&(w=!0),typeof y=="undefined"&&(y=Infinity);function I(l,T){if(l===null)return null;if(T===0)return l;var E,S;if(typeof l!="object")return l;if(i(l,e))E=new e;else if(i(l,t))E=new t;else if(i(l,o))E=new o(function(C,Y){l.then(function(M){C(I(M,T-1))},function(M){Y(I(M,T-1))})});else if(u.__isArray(l))E=[];else if(u.__isRegExp(l))E=new RegExp(l.source,c(l)),l.lastIndex&&(E.lastIndex=l.lastIndex);else if(u.__isDate(l))E=new Date(l.getTime());else{if(yr&&f.isBuffer(l))return f.allocUnsafe?E=f.allocUnsafe(l.length):E=new f(l.length),l.copy(E),E;i(l,Error)?E=Object.create(l):typeof D=="undefined"?(S=Object.getPrototypeOf(l),E=Object.create(S)):(E=Object.create(D),S=D)}if(w){var K=Z.indexOf(l);if(K!=-1)return $[K];Z.push(l),$.push(E)}i(l,e)&&l.forEach(function(C,Y){var M=I(Y,T-1),gr=I(C,T-1);E.set(M,gr)}),i(l,t)&&l.forEach(function(C){var Y=I(C,T-1);E.add(Y)});for(var A in l){var V;if(S&&(V=Object.getOwnPropertyDescriptor(S,A)),V&&V.set==null)continue;E[A]=I(l[A],T-1)}if(Object.getOwnPropertySymbols)for(var Q=Object.getOwnPropertySymbols(l),A=0;A<Q.length;A++){var d=Q[A],P=Object.getOwnPropertyDescriptor(l,d);if(P&&!P.enumerable&&!H)continue;E[d]=I(l[d],T-1),P.enumerable||Object.defineProperty(E,d,{enumerable:!1})}if(H)for(var b=Object.getOwnPropertyNames(l),A=0;A<b.length;A++){var k=b[A],P=Object.getOwnPropertyDescriptor(l,k);if(P&&P.enumerable)continue;E[k]=I(l[k],T-1),Object.defineProperty(E,k,{enumerable:!1})}return E}return I(x,y)}u.clonePrototype=function(w){if(w===null)return null;var y=function(){};return y.prototype=w,new y};function h(x){return Object.prototype.toString.call(x)}u.__objToStr=h;function a(x){return typeof x=="object"&&h(x)==="[object Date]"}u.__isDate=a;function p(x){return typeof x=="object"&&h(x)==="[object Array]"}u.__isArray=p;function s(x){return typeof x=="object"&&h(x)==="[object RegExp]"}u.__isRegExp=s;function c(x){var w="";return x.global&&(w+="g"),x.ignoreCase&&(w+="i"),x.multiline&&(w+="m"),w}return u.__getRegExpFlags=c,u}();n.exports&&(n.exports=r)}),br=B.__getRegExpFlags,ri=B.__isArray,ii=B.__isDate,ni=B.__isRegExp,ei=B.__objToStr,ti=B.clonePrototype;export default B;export{br as __getRegExpFlags,ri as __isArray,ii as __isDate,ni as __isRegExp,B as __moduleExports,ei as __objToStr,ti as clonePrototype};
