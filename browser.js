// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,m=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[s],i=s,t=null!=(o=e)&&m.call(o,i);try{e[s]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[s]=r:delete e[s],n}:function(e){return b.call(e)},d=Number,h=d.prototype.toString,v=y();function g(e){return"object"==typeof e&&(e instanceof d||(v?function(e){try{return h.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function w(e){return f(e)||g(e)}function j(e,t){if(!(this instanceof j))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!f(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!f(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}c(w,"isPrimitive",f),c(w,"isObject",g),c(j,"BYTES_PER_ELEMENT",8),c(j.prototype,"BYTES_PER_ELEMENT",8),c(j.prototype,"byteLength",16),c(j.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(j.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var E=Math.round;return function(e){return new j(E(function(e){return e.re}(e)),E(function(e){return e.im}(e)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cround=t();
//# sourceMappingURL=browser.js.map
