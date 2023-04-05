(self["webpackChunkvue_ecommerce_makeup_app"]=self["webpackChunkvue_ecommerce_makeup_app"]||[]).push([[998],{1001:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),v=n(7976),y=n(9518),w=n(7674),b=n(5112),_=n(9711),I=n(9909),E=I.enforce,T=I.get,S=c.Int8Array,C=S&&S.prototype,x=c.Uint8ClampedArray,k=x&&x.prototype,A=S&&y(S),O=C&&y(C),N=Object.prototype,D=c.TypeError,R=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},$=function(e){var t=y(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:$(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},z=function(e){if(B(e))return e;throw D("Target is not a typed array")},q=function(e){if(u(e)&&(!w||v(A,e)))return e;throw D(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}O[e]&&!n||m(O,e,n?t:M&&C[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return m(A,e,n?t:M&&A[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?E(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(E(s)[L]=i);if((!M||!u(A)||A===Function.prototype)&&(A=function(){throw D("Incorrect invocation")},M))for(r in V)c[r]&&w(c[r],A);if((!M||!O||O===N)&&(O=A.prototype,M))for(r in V)c[r]&&w(c[r].prototype,O);if(M&&y(k)!==O&&w(k,O),a&&!h(O,R))for(r in F=!0,g(O,R,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:A,TypedArrayPrototype:O}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9363:function(e){e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},6833:function(e,t,n){var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(e,t,n){var r=n(4326);e.exports="undefined"!=typeof process&&"process"==r(process)},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(e,t,n){var r=n(1470),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1470:function(e,t,n){var r=n(4326),i=n(1702);e.exports=function(e){if("Function"===r(e))return i(e)}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},7152:function(e,t,n){"use strict";var r=n(7854),i=n(2104),s=n(614),o=n(9363),a=n(8113),c=n(206),u=n(8053),l=r.Function,h=/MSIE .\./.test(a)||o&&function(){var e=r.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();e.exports=function(e,t){var n=t?2:1;return h?function(r,o){var a=u(arguments.length,1)>n,h=s(r)?r:l(r),d=a?c(arguments,n):[],f=a?function(){i(h,this,d)}:h;return t?e(f,o):e(f)}:e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(e,t,n){var r,i,s,o,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),m=n(317),g=n(8053),v=n(6833),y=n(5268),w=a.setImmediate,b=a.clearImmediate,_=a.process,I=a.Dispatch,E=a.Function,T=a.MessageChannel,S=a.String,C=0,x={},k="onreadystatechange";d((function(){r=a.location}));var A=function(e){if(h(x,e)){var t=x[e];delete x[e],t()}},O=function(e){return function(){A(e)}},N=function(e){A(e.data)},D=function(e){a.postMessage(S(e),r.protocol+"//"+r.host)};w&&b||(w=function(e){g(arguments.length,1);var t=l(e)?e:E(e),n=p(arguments,1);return x[++C]=function(){c(t,void 0,n)},i(C),C},b=function(e){delete x[e]},y?i=function(e){_.nextTick(O(e))}:I&&I.now?i=function(e){I.now(O(e))}:T&&!v?(s=new T,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(D)?(i=D,a.addEventListener("message",N,!1)):i=k in m("script")?function(e){f.appendChild(m("script"))[k]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(O(e),0)}),e.exports={set:w,clear:b}},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3767:function(e,t,n){n(1439)},8585:function(e,t,n){n(7585)},8696:function(e,t,n){n(5315)},1091:function(e,t,n){var r=n(2109),i=n(7854),s=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in v(g),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=_&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:y});var C=s(g),x=C.prototype;if(x.constructor!==C)for(var k in m||a(x,"constructor",o(1,C)),d)if(c(d,k)){var A=d[k],O=A.s;c(C,O)||a(C,O,o(6,A.c))}},4633:function(e,t,n){n(1091),n(2986)},2986:function(e,t,n){var r=n(2109),i=n(7854),s=n(261).set,o=n(7152),a=i.setImmediate?o(s,!1):s;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},6006:function(e,t,n){"use strict";n.d(t,{$:function(){return Mt},A:function(){return u},C:function(){return d},H:function(){return Le},I:function(){return je},K:function(){return tt},M:function(){return fe},N:function(){return ht},P:function(){return $r},Q:function(){return mt},R:function(){return Rr},U:function(){return gt},V:function(){return vt},W:function(){return pt},X:function(){return _t},Y:function(){return It},Z:function(){return Ct},_:function(){return Lt},a:function(){return jn},a0:function(){return Ft},a1:function(){return Ut},a2:function(){return qt},a3:function(){return Gt},a4:function(){return Kt},a5:function(){return Ht},a6:function(){return Wt},a7:function(){return Qt},a8:function(){return Yt},a9:function(){return Jt},aA:function(){return yi},aB:function(){return C},aC:function(){return pe},aD:function(){return mi},aE:function(){return si},aF:function(){return ii},aG:function(){return Re},aK:function(){return zn},aN:function(){return wt},aa:function(){return Xt},ab:function(){return Zt},ac:function(){return tn},ad:function(){return nn},ae:function(){return rn},ah:function(){return on},ai:function(){return an},aj:function(){return cn},am:function(){return Ot},an:function(){return vn},ap:function(){return En},aq:function(){return Nn},ar:function(){return T},as:function(){return Te},at:function(){return _e},au:function(){return v},av:function(){return Qi},aw:function(){return Ii},ax:function(){return Se},ay:function(){return y},az:function(){return I},b:function(){return Vn},c:function(){return Qr},d:function(){return Jr},e:function(){return Yr},f:function(){return ci},g:function(){return di},h:function(){return li},i:function(){return hr},j:function(){return pi},k:function(){return Zi},l:function(){return Fr},m:function(){return ns},o:function(){return gs},p:function(){return c},r:function(){return Vr},s:function(){return Mr},u:function(){return jr},z:function(){return bn}});n(7658);var r=n(223),i=n(7077),s=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r.LL("auth","Firebase",h()),m=new s.Yd("@firebase/auth");function g(e,...t){m.logLevel<=s["in"].ERROR&&m.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function b(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function T(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function C(e){T(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const s=n.initialize({options:t});return s}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,i,s={}){return $(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()(z(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function $(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},F),t);try{const t=new q(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw G(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);v(e,a)}}catch(s){if(s instanceof r.ZR)throw s;v(e,"network-request-failed",{message:String(s)})}}async function B(e,t,n,r,i={}){const s=await j(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function z(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(y(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return j(e,"POST","/v1/accounts:update",t)}async function W(e,t){return j(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=X(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Q(J(s.auth_time)),issuedAtTime:Q(J(s.iat)),expirationTime:Q(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function X(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Z(e){const t=X(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&te(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Q(this.lastLoginAt),this.creationTime=Q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,W(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,r.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await $(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=z(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return se(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;I(y&&E,e,"internal-error");const T=ue.fromJSON(this.name,E);I("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),I("boolean"===typeof w,e,"internal-error"),I("boolean"===typeof b,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const S=new he({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(C(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||C(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,r.z$)()){return/firefox\//i.test(e)}function ye(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,r.z$)()){return/crios\//i.test(e)}function be(e=(0,r.z$)()){return/iemobile/i.test(e)}function _e(e=(0,r.z$)()){return/android/i.test(e)}function Ie(e=(0,r.z$)()){return/blackberry/i.test(e)}function Ee(e=(0,r.z$)()){return/webos/i.test(e)}function Te(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ce(e=(0,r.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,r.w1)()&&10===document.documentMode}function ke(e=(0,r.z$)()){return Te(e)||_e(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=ge((0,r.z$)());break;case"Worker":n=`${ge((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Re(e){return(0,r.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Re(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Me(t),{host:o,port:a}=Fe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ue()}function Me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fe(e){const t=Me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ve(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ve(t)}}}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ue(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return j(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function Be(e,t){return j(e,"POST","/v1/accounts:update",t)}async function ze(e,t){return j(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function Ge(e,t){return j(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function Ke(e,t){return Ge(e,t)}async function He(e,t){return Ge(e,t)}async function We(e,t){return Ge(e,t)}async function Qe(e,t){return Ge(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Je(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends je{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Be(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends je{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function rt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function it(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends je{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class lt{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return I(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class wt extends je{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new wt(n,i):null}static _create(e,t){return new wt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class _t extends dt{constructor(e){I(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t){return B(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=St(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=St(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Et(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xt(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){const n=(0,r.m9)(e);await Dt(!0,n,t);const{providerUserInfo:i}=await H(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=At(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Dt(e,t,n){await ie(t);const r=At(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,kt(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=X(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),Tt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(Re(e),t)}async function Mt(e,t){const n=(0,r.m9)(e);return await Dt(!1,n,t.providerId),Nt(n,t)}async function Ft(e,t){return Rt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){const n=Re(e),r=await Vt(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?$t._fromServerResponse(e,t):"totpInfo"in t?Bt._fromServerResponse(e,t):v(e,"internal-error")}}class $t extends jt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new $t(t)}}class Bt extends jt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Bt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&zt(i,s,n),await He(i,s)}async function Gt(e,t,n){await $e((0,r.m9)(e),{oobCode:t,newPassword:n})}async function Kt(e,t){await ze((0,r.m9)(e),{oobCode:t})}async function Ht(e,t){const n=(0,r.m9)(e),i=await $e(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=jt._fromServerResponse(Re(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await Ht((0,r.m9)(e),t);return n.email}async function Qt(e,t,n){const r=Re(e),i=await Et(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Yt(e,t,n){return Lt((0,r.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&zt(i,s,n),await We(i,s)}function Xt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Zt(e,t,n){const i=(0,r.m9)(e),s=ht.credentialWithLink(t,n||A());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Lt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){return j(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){const n=O()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await en((0,r.m9)(e),i);return s||[]}async function nn(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&zt(n.auth,s,t);const{email:o}=await Ke(n.auth,s);o!==e.email&&await e.reload()}async function rn(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&zt(i.auth,o,n);const{email:a}=await Qe(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t){return j(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(i,sn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function an(e,t){return un((0,r.m9)(e),t,null)}function cn(e,t){return un((0,r.m9)(e),null,t)}async function un(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,Be(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new hn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new fn(s,i);case"github.com":return new pn(s,i);case"google.com":return new mn(s,i);case"twitter.com":return new gn(s,i,e.screenName||null);case"custom":case"anonymous":return new hn(s,null);default:return new hn(s,r,i)}}class hn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class dn extends hn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class fn extends hn{constructor(e,t){super(e,"facebook.com",t)}}class pn extends dn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class mn extends hn{constructor(e,t){super(e,"google.com",t)}}class gn extends dn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function vn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ln(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function wn(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function bn(e){return(0,r.m9)(e).signOut()}class _n{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new _n("enroll",e,t)}static _fromMfaPendingCredential(e){return new _n("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return _n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return _n._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>jt._fromServerResponse(n,e)));I(r.mfaPendingCredential,n,"internal-error");const s=_n._fromMfaPendingCredential(r.mfaPendingCredential);return new In(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function En(e,t){var n;const i=(0,r.m9)(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),In._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function Sn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function Cn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function xn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function kn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class An{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>jt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new An(e)}async getSession(){return _n._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await ee(this.user,kn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const On=new WeakMap;function Nn(e){const t=(0,r.m9)(e);return On.has(t)||On.set(t,An._fromUser(t)),On.get(t)}const Dn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dn,"1"),this.storage.removeItem(Dn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){const e=(0,r.z$)();return ye(e)||Te(e)}const Ln=1e3,Mn=10;class Fn extends Rn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pn()&&Ae(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Mn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ln)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fn.type="LOCAL";const Vn=Fn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Rn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Un.type="SESSION";const jn=Un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await $n(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn.receivers=[];class qn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=zn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function Kn(e){Gn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return"undefined"!==typeof Gn()["WorkerGlobalScope"]&&"function"===typeof Gn()["importScripts"]}async function Wn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Yn(){return Hn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="firebaseLocalStorageDb",Xn=1,Zn="firebaseLocalStorage",er="fbase_key";class tr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function nr(e,t){return e.transaction([Zn],t?"readwrite":"readonly").objectStore(Zn)}function rr(){const e=indexedDB.deleteDatabase(Jn);return new tr(e).toPromise()}function ir(){const e=indexedDB.open(Jn,Xn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Zn,{keyPath:er})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Zn)?t(n):(n.close(),await rr(),t(await ir()))}))}))}async function sr(e,t,n){const r=nr(e,!0).put({[er]:t,value:n});return new tr(r).toPromise()}async function or(e,t){const n=nr(e,!1).get(t),r=await new tr(n).toPromise();return void 0===r?null:r.value}function ar(e,t){const n=nr(e,!0).delete(t);return new tr(n).toPromise()}const cr=800,ur=3;class lr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ir()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ur)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bn._getInstance(Yn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wn(),!this.activeServiceWorker)return;this.sender=new qn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ir();return await sr(e,Dn,"1"),await ar(e,Dn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>sr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>or(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ar(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=nr(e,!1).getAll();return new tr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),cr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}lr.type="LOCAL";const hr=lr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function fr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}function pr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function vr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",gr().appendChild(r)}))}function yr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=500,br=6e4,_r=1e12;class Ir{constructor(e){this.auth=e,this.counter=_r,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Er(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||_r;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||_r;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||_r;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Er{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Tr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),br)}),wr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Tr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=yr("rcb"),Cr=new P(3e4,6e4),xr="https://www.google.com/recaptcha/api.js?";class kr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Gn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return I(Ar(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Gn().grecaptcha):new Promise(((n,i)=>{const s=Gn().setTimeout((()=>{i(y(e,"network-request-failed"))}),Cr.get());Gn()[Sr]=()=>{Gn().clearTimeout(s),delete Gn()[Sr];const r=Gn().grecaptcha;if(!r)return void i(y(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${xr}?${(0,r.xO)({onload:Sr,render:"explicit",hl:t})}`;vr(o).catch((()=>{clearTimeout(s),i(y(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Gn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ar(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Or{async load(e){return new Ir(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="recaptcha",Dr={theme:"light",type:"image"};class Rr{constructor(e,t=Object.assign({},Dr),n){this.parameters=t,this.type=Nr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Or:new kr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Gn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(O()&&!Hn(),this.auth,"internal-error"),await Pr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mr(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Pr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Mr(e,t,n){const i=Re(e),s=await Ur(i,t,(0,r.m9)(n));return new Lr(s,(e=>Lt(i,e)))}async function Fr(e,t,n){const i=(0,r.m9)(e);await Dt(!1,i,"phone");const s=await Ur(i.auth,t,(0,r.m9)(n));return new Lr(s,(e=>Mt(i,e)))}async function Vr(e,t,n){const i=(0,r.m9)(e),s=await Ur(i.auth,t,(0,r.m9)(n));return new Lr(s,(e=>Ft(i,e)))}async function Ur(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Nr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await Tn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await dr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function jr(e,t){await Nt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.providerId=$r.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Ur(this.auth,e,(0,r.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $r.credentialFromTaggedObject(t)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Br(e,t){return t?C(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$r.PROVIDER_ID="phone",$r.PHONE_SIGN_IN_METHOD="phone";class zr extends je{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qr(e){return Pt(e.auth,new zr(e),e.bypassAuthState)}function Gr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Rt(n,new zr(e),e.bypassAuthState)}async function Kr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Nt(n,new zr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qr;case"linkViaPopup":case"linkViaRedirect":return Kr;case"reauthViaPopup":case"reauthViaRedirect":return Gr;default:v(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new P(2e3,1e4);async function Qr(e,t,n){const r=Re(e);b(e,t,dt);const i=Br(r,n),s=new Xr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Yr(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,dt);const s=Br(i.auth,n),o=new Xr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function Jr(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,dt);const s=Br(i.auth,n),o=new Xr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class Xr extends Hr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Wr.get())};e()}}Xr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr="pendingRedirect",ei=new Map;class ti extends Hr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const t=await ni(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ni(e,t){const n=ai(t),r=oi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function ri(e,t){return oi(e)._set(ai(t),"true")}function ii(){ei.clear()}function si(e,t){ei.set(e._key(),t)}function oi(e){return C(e._redirectPersistence)}function ai(e){return pe(Zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t,n){return ui(e,t,n)}async function ui(e,t,n){const r=Re(e);b(e,t,dt),await r._initializationPromise;const i=Br(r,n);return await ri(i,r),i._openRedirect(r,t,"signInViaRedirect")}function li(e,t,n){return hi(e,t,n)}async function hi(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,dt),await i.auth._initializationPromise;const s=Br(i.auth,n);await ri(s,i.auth);const o=await gi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function di(e,t,n){return fi(e,t,n)}async function fi(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,dt),await i.auth._initializationPromise;const s=Br(i.auth,n);await Dt(!1,i,t.providerId),await ri(s,i.auth);const o=await gi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function pi(e,t){return await Re(e)._initializationPromise,mi(e,t,!1)}async function mi(e,t,n=!1){const r=Re(e),i=Br(r,t),s=new ti(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function gi(e){const t=zn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=6e5;class yi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!_i(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vi&&this.cachedEventUids.clear(),this.cachedEventUids.has(wi(e))}saveEventToCache(e){this.cachedEventUids.add(wi(e)),this.lastProcessedEventTime=Date.now()}}function wi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function bi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function _i(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t={}){return j(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ti=/^https?/;async function Si(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ii(e);for(const r of t)try{if(Ci(r))return}catch(n){}v(e,"unauthorized-domain")}function Ci(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ti.test(n))return!1;if(Ei.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new P(3e4,6e4);function ki(){const e=Gn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ai(e){return new Promise(((t,n)=>{var r,i,s;function o(){ki(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ki(),n(y(e,"network-request-failed"))},timeout:xi.get()})}if(null===(i=null===(r=Gn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gn().gapi)||void 0===s?void 0:s.load)){const t=yr("iframefcb");return Gn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},vr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Oi=null,e}))}let Oi=null;function Ni(e){return Oi=Oi||Ai(e),Oi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new P(5e3,15e3),Ri="__/auth/iframe",Pi="emulator/auth/iframe",Li={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fi(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Pi):`https://${e.config.authDomain}/${Ri}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Mi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Vi(e){const t=await Ni(e),n=Gn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Fi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Li,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),s=Gn().setTimeout((()=>{r(i)}),Di.get());function o(){Gn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ji=500,$i=600,Bi="_blank",zi="http://localhost";class qi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gi(e,t,n,i=ji,s=$i){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ui),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=we(l)?Bi:n),ve(l)&&(t=t||zi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(l)&&"_self"!==c)return Ki(t||"",c),new qi(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new qi(d)}function Ki(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="__/auth/handler",Wi="emulator/auth/handler";function Qi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yi(e)}?${(0,r.xO)(u).slice(1)}`}function Yi({config:e}){return e.emulator?L(e,Wi):`https://${e.authDomain}/${Hi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="webStorageSupport";class Xi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jn,this._completeRedirectFn=mi,this._overrideRedirectResult=si}async _openPopup(e,t,n,r){var i;T(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Qi(e,t,n,A(),r);return Gi(e,s,zn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Kn(Qi(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Vi(e),n=new yi(e);return t.register("authEvent",(t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ji,{type:Ji},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ji];void 0!==i&&t(!!i),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Si(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ye()||Te()}}const Zi=Xi;class es{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class ts extends es{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ts(e)}_finalizeEnroll(e,t,n){return Sn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ns{constructor(){}static assertion(e){return ts._fromCredential(e)}}ns.FACTOR_ID="phone";class rs{static assertionForEnrollment(e,t){return is._fromSecret(e,t)}static assertionForSignIn(e,t){return is._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;I("undefined"!==typeof t.auth,"internal-error");const n=await Cn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ss._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}rs.FACTOR_ID="totp";class is extends es{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new is(t,void 0,e)}static _fromEnrollmentId(e,t){return new is(t,e)}async _finalizeEnroll(e,t,n){return I("undefined"!==typeof this.secret,e,"argument-error"),xn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){I(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return pr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ss{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ss(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(os(e)||os(t))&&(r=!0),r&&(os(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),os(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function os(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var as="@firebase/auth",cs="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hs(e){(0,i._registerComponent)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},a=new De(t,r,i);return k(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i._registerComponent)(new a.wA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new us(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(as,cs,ls(e)),(0,i.registerVersion)(as,cs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=300,fs=(0,r.Pz)("authIdTokenMaxAge")||ds;let ps=null;const ms=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fs)return;const i=null===n||void 0===n?void 0:n.token;ps!==i&&(ps=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gs(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=x(e,{popupRedirectResolver:Zi,persistence:[hr,Vn,jn]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=ms(s);wn(n,e,(()=>e(n.currentUser))),yn(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Le(n,`http://${o}`),n}hs("Browser")},7425:function(e,t,n){"use strict";n.d(t,{u7:function(){return Im},Jj:function(){return bp},IX:function(){return sp},my:function(){return Wf},xU:function(){return Cm},Lz:function(){return _p},WA:function(){return Br},F8:function(){return Ep},$q:function(){return xm},W:function(){return km},EK:function(){return ri},PU:function(){return Hm},l7:function(){return Ps},Ky:function(){return ui},Xb:function(){return ci},Cf:function(){return zf},K9:function(){return Ur},Me:function(){return Ts},yq:function(){return Lr},Wi:function(){return Uf},ET:function(){return $m},Ab:function(){return eg},vr:function(){return Zm},Fc:function(){return fp},hJ:function(){return Jf},B$:function(){return Xf},at:function(){return Hf},oe:function(){return jm},AK:function(){return Jm},TF:function(){return gp},JU:function(){return Zf},ST:function(){return lp},fH:function(){return hp},Ix:function(){return mp},Wu:function(){return gm},Lx:function(){return mm},qY:function(){return cp},GL:function(){return qm},QT:function(){return Nm},kl:function(){return Rm},Xk:function(){return Pm},PL:function(){return Lm},UQ:function(){return Mm},zN:function(){return Fm},ad:function(){return ap},nP:function(){return tg},b9:function(){return um},vh:function(){return lm},Pb:function(){return vp},L$:function(){return yp},cf:function(){return Bm},sc:function(){return zm},Xo:function(){return am},IO:function(){return nm},iE:function(){return tp},Eo:function(){return ep},i3:function(){return Ym},Bt:function(){return Xm},pl:function(){return Vm},Ub:function(){return Dr},qK:function(){return Om},TQ:function(){return fm},e0:function(){return dm},r7:function(){return Um},Mx:function(){return pp},ar:function(){return im}});n(3767),n(8585),n(8696),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||m(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}var N=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function R(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=R().indexOf(e)}function L(e){return L[" "](e),e}function M(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=d;var F,V=P("Opera"),U=P("Trident")||P("MSIE"),j=P("Edge"),$=j||U,B=P("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),z=-1!=R().toLowerCase().indexOf("webkit")&&!P("Edge");function q(){var e=h.document;return e?e.documentMode:void 0}e:{var G="",K=function(){var e=R();return B?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(G=K?K[1]:""),U){var H=q();if(null!=H&&H>parseFloat(G)){F=String(H);break e}}F=G}var W,Q={};function Y(){return M((function(){let e=0;const t=N(String(F)).split("."),n=N("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&U){var J=q();W=J||(parseInt(F,10)||void 0)}else W=void 0;var X=W;function Z(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{L(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}I(Z,k);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Te(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ie(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Te(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Te(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(le(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Ie(e){return e=e[de],e instanceof ue?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function Se(){E.call(this),this.i=new ue(this),this.P=this,this.I=null}function Ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var i=t;t=new k(r,e),ce(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xe(o,r,!0,t)&&i}if(o=t.g=e,i=xe(o,r,!0,t)&&i,i=xe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xe(o,r,!1,t)&&i}function xe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&le(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Se,E),Se.prototype[te]=!0,Se.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Se.prototype.M=function(){if(Se.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ke=h.JSON.stringify;function Ae(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){h.setTimeout((()=>{throw e}),0)}function Le(e,t){Ne||Me(),Fe||(Ne(),Fe=!0),Ve.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Ne=function(){e.then(Ue)}}var Fe=!1,Ve=new Oe;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function je(e,t){Se.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function $e(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function ze(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(je,Se),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&($e(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),$e(this),delete this.g};class qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){E.call(this),this.h=e,this.g={}}I(Ge,E);var Ke=[];function He(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Qe(){this.g=!0}function Ye(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Je(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ke(n)}catch(a){return t}}Ge.prototype.M=function(){Ge.X.M.call(this),We(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Se}function it(e){k.call(this,tt.Pa,e)}function st(e){const t=rt();Ce(t,new it(t))}function ot(e,t){k.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Ce(t,new ot(t,e))}function ct(e,t){k.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",I(it,k),tt.STAT_EVENT="statevent",I(ot,k),tt.Qa="timingevent",I(ct,k);var lt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){k.call(this,"d")}function yt(){k.call(this,"c")}function wt(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ge(this),this.O=It,e=$?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}I(vt,k),I(yt,k),I(wt,dt),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var It=45e3,Et={},Tt={};function St(e,t,n){e.K=1,e.v=Ht(Bt(t)),e.s=n,e.P=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),Ot(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new qe(b(e.La,e,e.g),e.N)),He(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Ye(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function kt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==Tt){4==t&&(e.o=4,at(14),i=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,at(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Xe(e.j,e.m,r,null),Lt(e,r)}xt(e)&&r!=Tt&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Rt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Ot(e){e.V=Date.now()+e.O,Nt(e,e.O)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Dt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.G||e.I||or(e.l,e)}function Pt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$e(e.T),We(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Wn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((e.J||n.g==e)&&sr(n),!O(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Dt(a),Ot(a)),r.g=o}else tr(r);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Hn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=$n(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==t||st(8==t||0>=d?3:2),Dt(this);var n=this.g.aa();this.Y=n;t:if(xt(this)){var r=Bn(this.g);e="";var i=r.length,s=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Rt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Je(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Pt(this),Rt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(kt(this,l,o),$&&this.i&&3==l&&(He(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,o,null),Lt(this,o)),4==l&&Pt(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Ot(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Pt(this),Rt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=$n(this.g),t=this.g.fa();this.C<t.length&&(Dt(this),kt(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Pt(this),this.o=2,Rt(this)):Nt(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=void 0!==t?t:e.h,zt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gt(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,zt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),qt(this,n[4]),this.l=Wt(n[5]||"",!0),Gt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new $t(e)}function zt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Qt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Ht(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?Zt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,tn)),e.join("")};var Jt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),C(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function wn(){}function bn(){this.g=new wn}function _n(e,t,n){const r=n||"";try{Vt(e,(function(e,n){let i=e;p(e)&&(i=ke(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function In(e,t){const n=new Qe;if(h.Image){const r=new Image;r.onload=_(En,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(En,n,r,"TestLoadImage: error",!1,t),r.onabort=_(En,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(En,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function En(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Tn(e){this.l=e.ac||null,this.j=e.jb||!1}function Sn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(Tn,dt),Tn.prototype.g=function(){return new Sn(this.l,this.j)},Tn.prototype.i=function(e){return function(){return e}}({}),I(Sn,Se);var Cn=0;function xn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Sn.prototype,r.open=function(e,t){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=Cn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kn(this):An(this),3==this.readyState&&xn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,kn(this))},r.Ua=function(e){this.g&&(this.response=e,kn(this))},r.ga=function(){this.g&&kn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=h.JSON.parse;function Nn(e){Se.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}I(Nn,Se);var Dn="",Rn=/^https?$/i,Pn=["POST","PUT"];function Ln(e){return U&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),Un(e)}function Fn(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function Vn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=$n(e)||2!=e.aa()))if(e.v&&4==$n(e))Be(e.Ha,0,e);else if(Ce(e,"readystatechange"),4==$n(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Ut)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var o=2<$n(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Fn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(kr){return null}}function zn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,e),this.bb=Gn("retryDelaySeedMs",1e4,e),this.$a=Gn("forwardChannelMaxRetries",2,e),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Hn(e){if(Qn(e),3==e.G){var t=e.U++,n=Bt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Ht(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ot(t)}ur(e)}function Wn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Qn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Yn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function Jn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),St(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&Vt({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{_n(a,e,"req"+n+"_")}catch(jr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ht(Bt(t)),n.s=null,n.P=!0,Ct(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,vn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),Ce(r,new ct(r,n)),Yn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Jn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||zt(n,"https"),Ht(n)),In(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Qn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ua()}}function lr(e,t,n){var r=n instanceof $t?Bt(n):new $t(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $t(null,void 0);r&&zt(s,r),t&&(s.g=t),i&&qt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Nn(new Tn({jb:!0})):new Nn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(U&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pr(e,t){Se.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function mr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){yt.call(this),this.status=1}function vr(e){this.g=e}r=Nn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=S(Pn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),Nn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.fb())},r.fb=function(){Vn(this)},r.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),ce(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=Bt(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(zn(s)))+"&"+t:this.o&&qn(n,this.o,s)),gn(this.h,i),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),i.Z=!0,St(i,n,null)):St(i,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||fn(this.h)||Xn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Wn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},I(pr,Se),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lr(e,null,e.V),Yn(e)},pr.prototype.close=function(){Hn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ke(e),e=n);t.i.push(new ln(t.ab++,e)),3==t.G&&Yn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Hn(this.g),delete this.g,pr.X.M.call(this)},I(mr,vt),I(gr,yt),I(vr,dr),vr.prototype.xa=function(){Ce(this.g,"a")},vr.prototype.wa=function(e){Ce(this.g,new mr(e))},vr.prototype.va=function(e){Ce(this.g,new gr)},vr.prototype.ua=function(){Ce(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},wr=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=lt,_r=u.EventType=ht,Ir=u.Event=tt,Er=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=u.FetchXmlHttpFactory=Tn,Sr=u.WebChannel=pt,Cr=u.XhrIo=Nn;const xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kr.UNAUTHENTICATED=new kr(null),kr.GOOGLE_CREDENTIALS=new kr("google-credentials-uid"),kr.FIRST_PARTY=new kr("first-party-uid"),kr.MOCK_USER=new kr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new o.Yd("@firebase/firestore");function Nr(){return Or.logLevel}function Dr(e){Or.setLogLevel(e)}function Rr(e,...t){if(Or.logLevel<=o["in"].DEBUG){const n=t.map(Mr);Or.debug(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e,...t){if(Or.logLevel<=o["in"].ERROR){const n=t.map(Mr);Or.error(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e,...t){if(Or.logLevel<=o["in"].WARN){const n=t.map(Mr);Or.warn(`Firestore (${Ar}): ${e}`,...n)}}function Mr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Pr(t),new Error(t)}function Vr(e,t){e||Fr()}function Ur(e,t){e||Fr()}function jr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(kr.UNAUTHENTICATED)))}shutdown(){}}class Kr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=kr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Rr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Rr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Rr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Vr("string"==typeof t.accessToken),new qr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vr(null===e||"string"==typeof e),new kr(e)}}class Wr{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=kr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qr{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Wr(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(kr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Rr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Rr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Rr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Rr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Vr("string"==typeof e.token),this.T=e.token,new Yr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ei(e,t){return e<t?-1:e>t?1:0}function ti(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function ni(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Br($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Br($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Br($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Br($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ri.fromMillis(Date.now())}static fromDate(e){return ri.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ri(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ei(this.nanoseconds,e.nanoseconds):ei(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ii(e)}static min(){return new ii(new ri(0,0))}static max(){return new ii(new ri(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fr(),void 0===n?n=e.length-t:n>e.length-t&&Fr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===si.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oi extends si{construct(e,t,n){return new oi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Br($r.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new oi(t)}static emptyPath(){return new oi([])}}const ai=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ci extends si{construct(e,t,n){return new ci(e,t,n)}static isValidIdentifier(e){return ai.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ci.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ci(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Br($r.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Br($r.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Br($r.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Br($r.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ci(t)}static emptyPath(){return new ci([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.path=e}static fromPath(e){return new ui(oi.fromString(e))}static fromName(e){return new ui(oi.fromString(e).popFirst(5))}static empty(){return new ui(oi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===oi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return oi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ui(new oi(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function hi(e){return e.fields.find((e=>2===e.kind))}function di(e){return e.fields.filter((e=>2!==e.kind))}li.UNKNOWN_ID=-1;class fi{constructor(e,t){this.fieldPath=e,this.kind=t}}class pi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new pi(0,vi.min())}}function mi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ii.fromTimestamp(1e9===r?new ri(n+1,0):new ri(n,r));return new vi(i,ui.empty(),t)}function gi(e){return new vi(e.readTime,e.key,-1)}class vi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vi(ii.min(),ui.empty(),-1)}static max(){return new vi(ii.max(),ui.empty(),-1)}}function yi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ui.comparator(e.documentKey,t.documentKey),0!==n?n:ei(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(e){if(e.code!==$r.FAILED_PRECONDITION||e.message!==wi)throw e;Rr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ii(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ii?t:Ii.resolve(t)}catch(e){return Ii.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ii.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ii.reject(t)}static resolve(e){return new Ii(((t,n)=>{t(e)}))}static reject(e){return new Ii(((t,n)=>{n(e)}))}static waitFor(e){return new Ii(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ii.resolve(!1);for(const n of e)t=t.next((e=>e?Ii.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ii(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ii(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new zr,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Ci(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{const n=Ni(t.target.error);this.R.reject(new Ci(e,n))}}static open(e,t,n,r){try{return new Ei(t,e.transaction(r,n))}catch(e){throw new Ci(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(Rr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ki(t)}}class Ti{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Ti.S((0,a.z$)())&&Pr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Rr("SimpleDb","Removing database:",e),Ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,a.hl)())return!1;if(Ti.C())return!0;const e=(0,a.z$)(),t=Ti.S(e),n=0<t&&t<10,r=Ti.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.k)}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(Rr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ci(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Br($r.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Br($r.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ci(e,r))},r.onupgradeneeded=e=>{Rr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.M(t,r.transaction,e.oldVersion,this.version).next((()=>{Rr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Ei.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Ii.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Rr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Si{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ai(this.L.delete())}}class Ci extends Br{constructor(e,t){super($r.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xi(e){return"IndexedDbTransactionError"===e.name}class ki{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Rr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Rr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ai(n)}add(e){return Rr("SimpleDb","ADD",this.store.name,e,e),Ai(this.store.add(e))}get(e){return Ai(this.store.get(e)).next((t=>(void 0===t&&(t=null),Rr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Rr("SimpleDb","DELETE",this.store.name,e),Ai(this.store.delete(e))}count(){return Rr("SimpleDb","COUNT",this.store.name),Ai(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ii(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ii(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){Rr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}X(e){const t=this.cursor({});return new Ii(((n,r)=>{t.onerror=e=>{const t=Ni(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Ii(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Si(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ii){const e=o.catch((e=>(s.done(),Ii.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Ii.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ai(e){return new Ii(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Ni(e.target.error);n(t)}}))}let Oi=!1;function Ni(e){const t=Ti.S((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Br("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Oi||(Oi=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Di{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){Rr("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Rr("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){xi(e)?Rr("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await _i(e)}await this.et(6e4)}))}}class Ri{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Ii.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Rr("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(Rr("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=gi(t);yi(r,n)>0&&(n=r)})),new vi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Li(e){return null==e}function Mi(e){return 0===e&&1/e==-1/0}function Fi(e){return"number"==typeof e&&Number.isInteger(e)&&!Mi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ji(t)),t=Ui(e.get(n),t);return ji(t)}function Ui(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ji(e){return e+""}function $i(e){const t=e.length;if(Vr(t>=2),2===t)return Vr(""===e.charAt(0)&&""===e.charAt(1)),oi.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Fr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Fr()}s=t+2}return new oi(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pi.ct=-1;const Bi=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t){return[e,Vi(t)]}function qi(e,t,n){return[e,Vi(t),n]}const Gi={},Ki=["prefixPath","collectionGroup","readTime","documentId"],Hi=["prefixPath","collectionGroup","documentId"],Wi=["collectionGroup","readTime","prefixPath","documentId"],Qi=["canonicalId","targetId"],Yi=["targetId","path"],Ji=["path","targetId"],Xi=["collectionId","parent"],Zi=["indexId","uid"],es=["uid","sequenceNumber"],ts=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ns=["indexId","uid","orderedDocumentKey"],rs=["userId","collectionPath","documentId"],is=["userId","collectionPath","largestBatchId"],ss=["userId","collectionGroup","largestBatchId"],os=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],as=[...os,"documentOverlays"],cs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],us=cs,ls=[...us,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends bi{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ds(e,t){const n=jr(e);return Ti.O(n.at,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ps(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ms(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.comparator=e,this.root=t||ys.EMPTY}insert(e,t){return new gs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ys.BLACK,null,null))}remove(e){return new gs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ys.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ys{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ys.RED,this.left=null!=r?r:ys.EMPTY,this.right=null!=i?i:ys.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ys(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ys.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ys.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ys.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ys.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const e=this.left.check();if(e!==this.right.check())throw Fr();return e+(this.isRed()?0:1)}}ys.EMPTY=null,ys.RED=!0,ys.BLACK=!1,ys.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ys(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.comparator=e,this.data=new gs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bs(this.data.getIterator())}getIteratorFrom(e){return new bs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ws))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ws(this.comparator);return t.data=e,t}}class bs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function _s(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.fields=e,e.sort(ci.comparator)}static empty(){return new Is([])}unionWith(e){let t=new ws(ci.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Is(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ti(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Es("Invalid base64 string: "+e):e}}(e);return new Ss(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ss(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ei(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ss.EMPTY_BYTE_STRING=new Ss("");const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(e){if(Vr(!!e),"string"==typeof e){let t=0;const n=Cs.exec(e);if(Vr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ks(e.seconds),nanos:ks(e.nanos)}}function ks(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function As(e){return"string"==typeof e?Ss.fromBase64String(e):Ss.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ns(e){const t=e.mapValue.fields.__previous_value__;return Os(t)?Ns(t):t}function Ds(e){const t=xs(e.mapValue.fields.__local_write_time__.timestampValue);return new ri(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ps{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ps("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ps&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ms={nullValue:"NULL_VALUE"};function Fs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Os(e)?4:Js(e)?9007199254740991:10:Fr()}function Vs(e,t){if(e===t)return!0;const n=Fs(e);if(n!==Fs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ds(e).isEqual(Ds(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xs(e.timestampValue),r=xs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return As(e.bytesValue).isEqual(As(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ks(e.geoPointValue.latitude)===ks(t.geoPointValue.latitude)&&ks(e.geoPointValue.longitude)===ks(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ks(e.integerValue)===ks(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ks(e.doubleValue),r=ks(t.doubleValue);return n===r?Mi(n)===Mi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ti(e.arrayValue.values||[],t.arrayValue.values||[],Vs);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(fs(n)!==fs(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Vs(n[i],r[i])))return!1;return!0}(e,t);default:return Fr()}}function Us(e,t){return void 0!==(e.values||[]).find((e=>Vs(e,t)))}function js(e,t){if(e===t)return 0;const n=Fs(e),r=Fs(t);if(n!==r)return ei(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ei(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ks(e.integerValue||e.doubleValue),r=ks(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return $s(e.timestampValue,t.timestampValue);case 4:return $s(Ds(e),Ds(t));case 5:return ei(e.stringValue,t.stringValue);case 6:return function(e,t){const n=As(e),r=As(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ei(n[i],r[i]);if(0!==e)return e}return ei(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ei(ks(e.latitude),ks(t.latitude));return 0!==n?n:ei(ks(e.longitude),ks(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=js(n[i],r[i]);if(e)return e}return ei(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ls.mapValue&&t===Ls.mapValue)return 0;if(e===Ls.mapValue)return 1;if(t===Ls.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ei(r[o],s[o]);if(0!==e)return e;const t=js(n[r[o]],i[s[o]]);if(0!==t)return t}return ei(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Fr()}}function $s(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ei(e,t);const n=xs(e),r=xs(t),i=ei(n.seconds,r.seconds);return 0!==i?i:ei(n.nanos,r.nanos)}function Bs(e){return zs(e)}function zs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?As(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ui.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=zs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${zs(e.fields[i])}`;return n+"}"}(e.mapValue):Fr();var t,n}function qs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Gs(e){return!!e&&"integerValue"in e}function Ks(e){return!!e&&"arrayValue"in e}function Hs(e){return!!e&&"nullValue"in e}function Ws(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qs(e){return!!e&&"mapValue"in e}function Ys(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ps(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ys(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ys(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Js(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Xs(e){return"nullValue"in e?Ms:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?qs(Ps.empty(),ui.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Fr()}function Zs(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?qs(Ps.empty(),ui.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Ls:Fr()}function eo(e,t){const n=js(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function to(e,t){const n=js(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.value=e}static empty(){return new no({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=ci.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ys(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Qs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ps(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new no(Ys(this.value))}}function ro(e){const t=[];return ps(e.fields,((e,n)=>{const r=new ci([e]);if(Qs(n)){const e=ro(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Is(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class io{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new io(e,0,ii.min(),ii.min(),ii.min(),no.empty(),0)}static newFoundDocument(e,t,n,r){return new io(e,1,t,ii.min(),n,r,0)}static newNoDocument(e,t){return new io(e,2,t,ii.min(),ii.min(),no.empty(),0)}static newUnknownDocument(e,t){return new io(e,3,t,ii.min(),ii.min(),no.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ii.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=no.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=no.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ii.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof io&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new io(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.position=e,this.inclusive=t}}function oo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ui.comparator(ui.fromName(o.referenceValue),n.key):js(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ao(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Vs(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t="asc"){this.field=e,this.dir=t}}function uo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{}class ho extends lo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Io(e,t,n):"array-contains"===t?new Co(e,n):"in"===t?new xo(e,n):"not-in"===t?new ko(e,n):"array-contains-any"===t?new Ao(e,n):new ho(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Eo(e,n):new To(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(js(t,this.value)):null!==t&&Fs(this.value)===Fs(t)&&this.matchesComparison(js(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class fo extends lo{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new fo(e,t)}matches(e){return po(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function po(e){return"and"===e.op}function mo(e){return"or"===e.op}function go(e){return vo(e)&&po(e)}function vo(e){for(const t of e.filters)if(t instanceof fo)return!1;return!0}function yo(e){if(e instanceof ho)return e.field.canonicalString()+e.op.toString()+Bs(e.value);if(go(e))return e.filters.map((e=>yo(e))).join(",");{const t=e.filters.map((e=>yo(e))).join(",");return`${e.op}(${t})`}}function wo(e,t){return e instanceof ho?function(e,t){return t instanceof ho&&e.op===t.op&&e.field.isEqual(t.field)&&Vs(e.value,t.value)}(e,t):e instanceof fo?function(e,t){return t instanceof fo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&wo(n,t.filters[r])),!0)}(e,t):void Fr()}function bo(e,t){const n=e.filters.concat(t);return fo.create(n,e.op)}function _o(e){return e instanceof ho?function(e){return`${e.field.canonicalString()} ${e.op} ${Bs(e.value)}`}(e):e instanceof fo?function(e){return e.op.toString()+" {"+e.getFilters().map(_o).join(" ,")+"}"}(e):"Filter"}class Io extends ho{constructor(e,t,n){super(e,t,n),this.key=ui.fromName(n.referenceValue)}matches(e){const t=ui.comparator(e.key,this.key);return this.matchesComparison(t)}}class Eo extends ho{constructor(e,t){super(e,"in",t),this.keys=So("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class To extends ho{constructor(e,t){super(e,"not-in",t),this.keys=So("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function So(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ui.fromName(e.referenceValue)))}class Co extends ho{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ks(t)&&Us(t.arrayValue,this.value)}}class xo extends ho{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Us(this.value.arrayValue,t)}}class ko extends ho{constructor(e,t){super(e,"not-in",t)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Us(this.value.arrayValue,t)}}class Ao extends ho{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ks(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Us(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function No(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Oo(e,t,n,r,i,s,o)}function Do(e){const t=jr(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>yo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Li(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Bs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Bs(e))).join(",")),t.ft=e}return t.ft}function Ro(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!uo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ao(e.startAt,t.startAt)&&ao(e.endAt,t.endAt)}function Po(e){return ui.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Lo(e,t){return e.filters.filter((e=>e instanceof ho&&e.field.isEqual(t)))}function Mo(e,t,n){let r=Ms,i=!0;for(const s of Lo(e,t)){let e=Ms,t=!0;switch(s.op){case"<":case"<=":e=Xs(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Ms}eo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Fo(e,t,n){let r=Ls,i=!0;for(const s of Lo(e,t)){let e=Ls,t=!0;switch(s.op){case">=":case">":e=Zs(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=Ls}to({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];to({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Uo(e,t,n,r,i,s,o,a){return new Vo(e,t,n,r,i,s,o,a)}function jo(e){return new Vo(e)}function $o(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Bo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zo(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function qo(e){return null!==e.collectionGroup}function Go(e){const t=jr(e);if(null===t.dt){t.dt=[];const e=zo(t),n=Bo(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new co(e)),t.dt.push(new co(ci.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new co(ci.keyField(),e))}}}return t.dt}function Ko(e){const t=jr(e);if(!t.wt)if("F"===t.limitType)t.wt=No(t.path,t.collectionGroup,Go(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Go(t)){const t="desc"===i.dir?"asc":"desc";e.push(new co(i.field,t))}const n=t.endAt?new so(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new so(t.startAt.position,t.startAt.inclusive):null;t.wt=No(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Ho(e,t){t.getFirstInequalityField(),zo(e);const n=e.filters.concat([t]);return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wo(e,t,n){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qo(e,t){return Ro(Ko(e),Ko(t))&&e.limitType===t.limitType}function Yo(e){return`${Do(Ko(e))}|lt:${e.limitType}`}function Jo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_o(e))).join(", ")}]`),Li(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Bs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Bs(e))).join(",")),`Target(${t})`}(Ko(e))}; limitType=${e.limitType})`}function Xo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ui.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Go(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=oo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Go(e),t))&&!(e.endAt&&!function(e,t,n){const r=oo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Go(e),t))}(e,t)}function Zo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ea(e){return(t,n)=>{let r=!1;for(const i of Go(e)){const e=ta(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ta(e,t,n){const r=e.field.isKeyField()?ui.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?js(r,i):Fr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Fr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return ms(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new gs(ui.comparator);function ia(){return ra}const sa=new gs(ui.comparator);function oa(...e){let t=sa;for(const n of e)t=t.insert(n.key,n);return t}function aa(e){let t=sa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ca(){return la()}function ua(){return la()}function la(){return new na((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ha=new gs(ui.comparator),da=new ws(ui.comparator);function fa(...e){let t=da;for(const n of e)t=t.add(n);return t}const pa=new ws(ei);function ma(){return pa}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(t)?"-0":t}}function va(e){return{integerValue:""+e}}function ya(e,t){return Fi(t)?va(t):ga(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this._=void 0}}function ba(e,t,n){return e instanceof Ea?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ta?Sa(e,t):e instanceof Ca?xa(e,t):function(e,t){const n=Ia(e,t),r=Aa(n)+Aa(e._t);return Gs(n)&&Gs(e._t)?va(r):ga(e.serializer,r)}(e,t)}function _a(e,t,n){return e instanceof Ta?Sa(e,t):e instanceof Ca?xa(e,t):n}function Ia(e,t){return e instanceof ka?Gs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ea extends wa{}class Ta extends wa{constructor(e){super(),this.elements=e}}function Sa(e,t){const n=Oa(t);for(const r of e.elements)n.some((e=>Vs(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ca extends wa{constructor(e){super(),this.elements=e}}function xa(e,t){let n=Oa(t);for(const r of e.elements)n=n.filter((e=>!Vs(e,r)));return{arrayValue:{values:n}}}class ka extends wa{constructor(e,t){super(),this.serializer=e,this._t=t}}function Aa(e){return ks(e.integerValue||e.doubleValue)}function Oa(e){return Ks(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.field=e,this.transform=t}}function Da(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ta&&t instanceof Ta||e instanceof Ca&&t instanceof Ca?ti(e.elements,t.elements,Vs):e instanceof ka&&t instanceof ka?Vs(e._t,t._t):e instanceof Ea&&t instanceof Ea}(e.transform,t.transform)}class Ra{constructor(e,t){this.version=e,this.transformResults=t}}class Pa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pa}static exists(e){return new Pa(void 0,e)}static updateTime(e){return new Pa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ma{}function Fa(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ha(e.key,Pa.none()):new Ba(e.key,e.data,Pa.none());{const n=e.data,r=no.empty();let i=new ws(ci.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new za(e.key,r,new Is(i.toArray()),Pa.none())}}function Va(e,t,n){e instanceof Ba?function(e,t,n){const r=e.value.clone(),i=Ga(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof za?function(e,t,n){if(!La(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ga(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(qa(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ua(e,t,n,r){return e instanceof Ba?function(e,t,n,r){if(!La(e.precondition,t))return n;const i=e.value.clone(),s=Ka(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof za?function(e,t,n,r){if(!La(e.precondition,t))return n;const i=Ka(e.fieldTransforms,r,t),s=t.data;return s.setAll(qa(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return La(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ja(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ia(r.transform,e||null);null!=i&&(null===n&&(n=no.empty()),n.set(r.field,i))}return n||null}function $a(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ti(e,t,((e,t)=>Da(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ba extends Ma{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class za extends Ma{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qa(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Ga(e,t,n){const r=new Map;Vr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,_a(o,a,n[i]))}return r}function Ka(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,ba(e,s,t))}return r}class Ha extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wa extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Va(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ua(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ua(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ua();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Fa(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ii.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fa())}isEqual(e){return this.batchId===e.batchId&&ti(this.mutations,e.mutations,((e,t)=>$a(e,t)))&&ti(this.baseMutations,e.baseMutations,((e,t)=>$a(e,t)))}}class Ya{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Vr(e.mutations.length===n.length);let r=ha;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ya(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Za,ec;function tc(e){switch(e){default:return Fr();case $r.CANCELLED:case $r.UNKNOWN:case $r.DEADLINE_EXCEEDED:case $r.RESOURCE_EXHAUSTED:case $r.INTERNAL:case $r.UNAVAILABLE:case $r.UNAUTHENTICATED:return!1;case $r.INVALID_ARGUMENT:case $r.NOT_FOUND:case $r.ALREADY_EXISTS:case $r.PERMISSION_DENIED:case $r.FAILED_PRECONDITION:case $r.ABORTED:case $r.OUT_OF_RANGE:case $r.UNIMPLEMENTED:case $r.DATA_LOSS:return!0}}function nc(e){if(void 0===e)return Pr("GRPC error has no .code"),$r.UNKNOWN;switch(e){case Za.OK:return $r.OK;case Za.CANCELLED:return $r.CANCELLED;case Za.UNKNOWN:return $r.UNKNOWN;case Za.DEADLINE_EXCEEDED:return $r.DEADLINE_EXCEEDED;case Za.RESOURCE_EXHAUSTED:return $r.RESOURCE_EXHAUSTED;case Za.INTERNAL:return $r.INTERNAL;case Za.UNAVAILABLE:return $r.UNAVAILABLE;case Za.UNAUTHENTICATED:return $r.UNAUTHENTICATED;case Za.INVALID_ARGUMENT:return $r.INVALID_ARGUMENT;case Za.NOT_FOUND:return $r.NOT_FOUND;case Za.ALREADY_EXISTS:return $r.ALREADY_EXISTS;case Za.PERMISSION_DENIED:return $r.PERMISSION_DENIED;case Za.FAILED_PRECONDITION:return $r.FAILED_PRECONDITION;case Za.ABORTED:return $r.ABORTED;case Za.OUT_OF_RANGE:return $r.OUT_OF_RANGE;case Za.UNIMPLEMENTED:return $r.UNIMPLEMENTED;case Za.DATA_LOSS:return $r.DATA_LOSS;default:return Fr()}}(ec=Za||(Za={}))[ec.OK=0]="OK",ec[ec.CANCELLED=1]="CANCELLED",ec[ec.UNKNOWN=2]="UNKNOWN",ec[ec.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ec[ec.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ec[ec.NOT_FOUND=5]="NOT_FOUND",ec[ec.ALREADY_EXISTS=6]="ALREADY_EXISTS",ec[ec.PERMISSION_DENIED=7]="PERMISSION_DENIED",ec[ec.UNAUTHENTICATED=16]="UNAUTHENTICATED",ec[ec.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ec[ec.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ec[ec.ABORTED=10]="ABORTED",ec[ec.OUT_OF_RANGE=11]="OUT_OF_RANGE",ec[ec.UNIMPLEMENTED=12]="UNIMPLEMENTED",ec[ec.INTERNAL=13]="INTERNAL",ec[ec.UNAVAILABLE=14]="UNAVAILABLE",ec[ec.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ic}static getOrCreateInstance(){return null===ic&&(ic=new rc),ic}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let ic=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,oc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new sc(ii.min(),r,ma(),ia(),fa())}}class oc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new oc(n,t,fa(),fa(),fa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class cc{constructor(e,t){this.targetId=e,this.Et=t}}class uc{constructor(e,t,n=Ss.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class lc{constructor(){this.At=0,this.Rt=fc(),this.vt=Ss.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=fa(),t=fa(),n=fa();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Fr()}})),new oc(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=fc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class hc{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ia(),this.qt=dc(),this.Ut=new ws(ei)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Fr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Po(s))if(0===r){const e=new ui(s.path);this.Qt(n,e,io.newNoDocument(e,ii.min()))}else Vr(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=rc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Po(i.target)){const t=new ui(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,io.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=fa();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new sc(e,t,this.Ut,this.Lt,n);return this.Lt=ia(),this.qt=dc(),this.Ut=new ws(ei),r}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new lc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ws(ei),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||Rr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new lc),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function dc(){return new gs(ui.comparator)}function fc(){return new gs(ui.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),mc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),gc=(()=>{const e={and:"AND",or:"OR"};return e})();class vc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bc(e,t){return yc(e,t.toTimestamp())}function _c(e){return Vr(!!e),ii.fromTimestamp(function(e){const t=xs(e);return new ri(t.seconds,t.nanos)}(e))}function Ic(e,t){return function(e){return new oi(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ec(e){const t=oi.fromString(e);return Vr(Qc(t)),t}function Tc(e,t){return Ic(e.databaseId,t.path)}function Sc(e,t){const n=Ec(t);if(n.get(1)!==e.databaseId.projectId)throw new Br($r.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Br($r.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ui(Ac(n))}function Cc(e,t){return Ic(e.databaseId,t)}function xc(e){const t=Ec(e);return 4===t.length?oi.emptyPath():Ac(t)}function kc(e){return new oi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ac(e){return Vr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Oc(e,t,n){return{name:Tc(e,t),fields:n.value.mapValue.fields}}function Nc(e,t,n){const r=Sc(e,t.name),i=_c(t.updateTime),s=t.createTime?_c(t.createTime):ii.min(),o=new no({mapValue:{fields:t.fields}}),a=io.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Dc(e,t){return"found"in t?function(e,t){Vr(!!t.found),t.found.name,t.found.updateTime;const n=Sc(e,t.found.name),r=_c(t.found.updateTime),i=t.found.createTime?_c(t.found.createTime):ii.min(),s=new no({mapValue:{fields:t.found.fields}});return io.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){Vr(!!t.missing),Vr(!!t.readTime);const n=Sc(e,t.missing),r=_c(t.readTime);return io.newNoDocument(n,r)}(e,t):Fr()}function Rc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Fr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Vr(void 0===t||"string"==typeof t),Ss.fromBase64String(t||"")):(Vr(void 0===t||t instanceof Uint8Array),Ss.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?$r.UNKNOWN:nc(e.code);return new Br(t,e.message||"")}(o);n=new uc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sc(e,r.document.name),s=_c(r.document.updateTime),o=r.document.createTime?_c(r.document.createTime):ii.min(),a=new no({mapValue:{fields:r.document.fields}}),c=io.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ac(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Sc(e,r.document),s=r.readTime?_c(r.readTime):ii.min(),o=io.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ac([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Sc(e,r.document),s=r.removedTargetIds||[];n=new ac([],s,i,null)}else{if(!("filter"in t))return Fr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Xa(r),s=e.targetId;n=new cc(s,i)}}return n}function Pc(e,t){let n;if(t instanceof Ba)n={update:Oc(e,t.key,t.value)};else if(t instanceof Ha)n={delete:Tc(e,t.key)};else if(t instanceof za)n={update:Oc(e,t.key,t.data),updateMask:Wc(t.fieldMask)};else{if(!(t instanceof Wa))return Fr();n={verify:Tc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ea)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ta)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ca)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ka)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Fr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Fr()}(e,t.precondition)),n}function Lc(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Pa.updateTime(_c(e.updateTime)):void 0!==e.exists?Pa.exists(e.exists):Pa.none()}(t.currentDocument):Pa.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Vr("REQUEST_TIME"===t.setToServerValue),n=new Ea;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ta(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ca(e)}else"increment"in t?n=new ka(e,t.increment):Fr();const r=ci.fromServerFormat(t.fieldPath);return new Na(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Sc(e,t.update.name),s=new no({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Is(t.map((e=>ci.fromServerFormat(e))))}(t.updateMask);return new za(i,s,e,n,r)}return new Ba(i,s,n,r)}if(t.delete){const r=Sc(e,t.delete);return new Ha(r,n)}if(t.verify){const r=Sc(e,t.verify);return new Wa(r,n)}return Fr()}function Mc(e,t){return e&&e.length>0?(Vr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?_c(e.updateTime):_c(t);return n.isEqual(ii.min())&&(n=_c(t)),new Ra(n,e.transformResults||[])}(e,t)))):[]}function Fc(e,t){return{documents:[Cc(e,t.path)]}}function Vc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Cc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Hc(fo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Gc(e.field),direction:Bc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.useProto3Json||Li(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Uc(e){let t=xc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=$c(e);return t instanceof fo&&go(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new co(Kc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Li(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new so(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new so(n,t)}(n.endAt)),Uo(t,i,o,s,a,"F",c,u)}function jc(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function $c(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kc(e.unaryFilter.field);return ho.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Kc(e.unaryFilter.field);return ho.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kc(e.unaryFilter.field);return ho.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kc(e.unaryFilter.field);return ho.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}(e):void 0!==e.fieldFilter?function(e){return ho.create(Kc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return fo.create(e.compositeFilter.filters.map((e=>$c(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Fr()}}(e.compositeFilter.op))}(e):Fr()}function Bc(e){return pc[e]}function zc(e){return mc[e]}function qc(e){return gc[e]}function Gc(e){return{fieldPath:e.canonicalString()}}function Kc(e){return ci.fromServerFormat(e.fieldPath)}function Hc(e){return e instanceof ho?function(e){if("=="===e.op){if(Ws(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NAN"}};if(Hs(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ws(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NOT_NAN"}};if(Hs(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gc(e.field),op:zc(e.op),value:e.value}}}(e):e instanceof fo?function(e){const t=e.getFilters().map((e=>Hc(e)));return 1===t.length?t[0]:{compositeFilter:{op:qc(e.op),filters:t}}}(e):Fr()}function Wc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,n,r,i=ii.min(),s=ii.min(),o=Ss.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Yc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Yc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.se=e}}function Xc(e,t){let n;if(t.document)n=Nc(e.se,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ui.fromSegments(t.noDocument.path),r=nu(t.noDocument.readTime);n=io.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Fr();{const e=ui.fromSegments(t.unknownDocument.path),r=nu(t.unknownDocument.version);n=io.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ri(e[0],e[1]);return ii.fromTimestamp(t)}(t.readTime)),n}function Zc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:eu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Tc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:yc(e,t.version.toTimestamp()),createTime:yc(e,t.createTime.toTimestamp())}}(e.se,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:tu(t.version)};else{if(!t.isUnknownDocument())return Fr();r.unknownDocument={path:n.path.toArray(),version:tu(t.version)}}return r}function eu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function tu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function nu(e){const t=new ri(e.seconds,e.nanoseconds);return ii.fromTimestamp(t)}function ru(e,t){const n=(t.baseMutations||[]).map((t=>Lc(e.se,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Lc(e.se,t))),i=ri.fromMillis(t.localWriteTimeMs);return new Qa(t.batchId,i,n,r)}function iu(e){const t=nu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?nu(e.lastLimboFreeSnapshotVersion):ii.min();let r;var i;return void 0!==e.query.documents?(Vr(1===(i=e.query).documents.length),r=Ko(jo(xc(i.documents[0])))):r=function(e){return Ko(Uc(e))}(e.query),new Yc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ss.fromBase64String(e.resumeToken))}function su(e,t){const n=tu(t.snapshotVersion),r=tu(t.lastLimboFreeSnapshotVersion);let i;i=Po(t.target)?Fc(e.se,t.target):Vc(e.se,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Do(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ou(e){const t=Uc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Wo(t,t.limit,"L"):t}function au(e,t){return new Ja(t.largestBatchId,Lc(e.se,t.overlayMutation))}function cu(e,t){const n=t.path.lastSegment();return[e,Vi(t.path.popLast()),n]}function uu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:tu(r.readTime),documentKey:Vi(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{getBundleMetadata(e,t){return hu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:nu(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return hu(e).put({bundleId:(n=t).id,createTime:tu(_c(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return du(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:ou(t.bundledQuery),readTime:nu(t.readTime)};var t}))}saveNamedQuery(e,t){return du(e).put(function(e){return{name:e.name,readTime:tu(_c(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function hu(e){return ds(e,"bundles")}function du(e){return ds(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const n=t.uid||"";return new fu(e,n)}getOverlay(e,t){return pu(e).get(cu(this.userId,t)).next((e=>e?au(this.serializer,e):null))}getOverlays(e,t){const n=ca();return Ii.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Ja(t,i);r.push(this.re(e,s))})),Ii.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Vi(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(pu(e).J("collectionPathOverlayIndex",r))})),Ii.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ca(),i=Vi(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return pu(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=au(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ca();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pu(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=au(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}re(e,t){return pu(e).put(function(e,t,n){const[r,i,s]=cu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Pc(e.se,n.mutation)}}(this.serializer,this.userId,t))}}function pu(e){return ds(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(ks(e.integerValue));else if("doubleValue"in e){const n=ks(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Mi(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(As(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Js(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Fr()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const r of Object.keys(n))this.fe(r,t),this.ue(n[r],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const r of n)this.ue(r,t)}_e(e,t){this.ae(t,37),ui.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}function gu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function vu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=gu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}mu.pe=new mu;class yu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Te(n.value),n=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Re(n.value),n=t.next();this.ve()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Te(e);else if(e<2048)this.Te(960|e>>>6),this.Te(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Te(480|e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e);else{const e=t.codePointAt(0);this.Te(240|e>>>18),this.Te(128|63&e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e)}}this.Ee()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Re(e);else if(e<2048)this.Re(960|e>>>6),this.Re(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Re(480|e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e);else{const e=t.codePointAt(0);this.Re(240|e>>>18),this.Re(128|63&e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e)}}this.ve()}Ve(e){const t=this.Se(e),n=vu(t);this.De(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ce(e){const t=this.Se(e),n=vu(t);this.De(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Te(e){const t=255&e;0===t?(this.Ne(0),this.Ne(255)):255===t?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class wu{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class bu{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class _u{constructor(){this.Me=new yu,this.Fe=new wu(this.Me),this.Be=new bu(this.Me)}seed(e){this.Me.seed(e)}Le(e){return 0===e?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}qe(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Iu(this.indexId,this.documentKey,this.arrayValue,n)}}function Eu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Tu(e.arrayValue,t.arrayValue),0!==n?n:(n=Tu(e.directionalValue,t.directionalValue),0!==n?n:ui.comparator(e.documentKey,t.documentKey)))}function Tu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ge=e:this.Ke.push(e)}}Qe(e){Vr(e.collectionGroup===this.collectionId);const t=hi(e);if(void 0!==t&&!this.ze(t))return!1;const n=di(e);let r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ge){const e=n[r];if(!this.je(this.Ge,e)||!this.We(this.Ue[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],e))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e){var t,n;if(Vr(e instanceof ho||e instanceof fo),e instanceof ho){if(e instanceof xo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>ho.create(e.field,"==",t))))||[];return fo.create(r,"or")}return e}const r=e.filters.map((e=>Cu(e)));return fo.create(r,e.op)}function xu(e){if(0===e.getFilters().length)return[];const t=Nu(Cu(e));return Vr(Ou(t)),ku(t)||Au(t)?[t]:t.getFilters()}function ku(e){return e instanceof ho}function Au(e){return e instanceof fo&&go(e)}function Ou(e){return ku(e)||Au(e)||function(e){if(e instanceof fo&&mo(e)){for(const t of e.getFilters())if(!ku(t)&&!Au(t))return!1;return!0}return!1}(e)}function Nu(e){if(Vr(e instanceof ho||e instanceof fo),e instanceof ho)return e;if(1===e.filters.length)return Nu(e.filters[0]);const t=e.filters.map((e=>Nu(e)));let n=fo.create(t,e.op);return n=Pu(n),Ou(n)?n:(Vr(n instanceof fo),Vr(po(n)),Vr(n.filters.length>1),n.filters.reduce(((e,t)=>Du(e,t))))}function Du(e,t){let n;return Vr(e instanceof ho||e instanceof fo),Vr(t instanceof ho||t instanceof fo),n=e instanceof ho?t instanceof ho?function(e,t){return fo.create([e,t],"and")}(e,t):Ru(e,t):t instanceof ho?Ru(t,e):function(e,t){if(Vr(e.filters.length>0&&t.filters.length>0),po(e)&&po(t))return bo(e,t.getFilters());const n=mo(e)?e:t,r=mo(e)?t:e,i=n.filters.map((e=>Du(e,r)));return fo.create(i,"or")}(e,t),Pu(n)}function Ru(e,t){if(po(t))return bo(t,e.getFilters());{const n=t.filters.map((t=>Du(e,t)));return fo.create(n,"or")}}function Pu(e){if(Vr(e instanceof ho||e instanceof fo),e instanceof ho)return e;const t=e.getFilters();if(1===t.length)return Pu(t[0]);if(vo(e))return e;const n=t.map((e=>Pu(e))),r=[];return n.forEach((t=>{t instanceof ho?r.push(t):t instanceof fo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:fo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lu{constructor(){this.He=new Mu}addToCollectionParentIndex(e,t){return this.He.add(t),Ii.resolve()}getCollectionParents(e,t){return Ii.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Ii.resolve()}deleteFieldIndex(e,t){return Ii.resolve()}getDocumentsMatchingTarget(e,t){return Ii.resolve(null)}getIndexType(e,t){return Ii.resolve(0)}getFieldIndexes(e,t){return Ii.resolve([])}getNextCollectionGroupToUpdate(e){return Ii.resolve(null)}getMinOffset(e,t){return Ii.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return Ii.resolve(vi.min())}updateCollectionGroup(e,t,n){return Ii.resolve()}updateIndexEntries(e,t){return Ii.resolve()}}class Mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ws(oi.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ws(oi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Uint8Array(0);class Vu{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new Mu,this.Ye=new na((e=>Do(e)),((e,t)=>Ro(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Je.add(t)}));const i={collectionId:n,parent:Vi(r)};return Uu(e).put(i)}return Ii.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[ni(t),""],!1,!0);return Uu(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push($i(r.parent))}return n}))}addFieldIndex(e,t){const n=$u(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Bu(e);return i.next((e=>{n.put(uu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=$u(e),r=Bu(e),i=ju(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=ju(e);let r=!0;const i=new Map;return Ii.forEach(this.Ze(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=fa();const r=[];return Ii.forEach(i,((i,s)=>{var o;Rr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Do(t)}`);const a=function(e,t){const n=hi(t);if(void 0===n)return null;for(const r of Lo(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of di(t))for(const t of Lo(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of di(t)){const t=0===i.kind?Mo(e,i.fieldPath,e.startAt):Fo(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new so(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of di(t)){const t=0===i.kind?Fo(e,i.fieldPath,e.endAt):Mo(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new so(n,r)}(s,i),h=this.tn(i,s,u),d=this.tn(i,s,l),f=this.en(i,s,c),p=this.nn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ii.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=ui.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ii.resolve(null)}))}Ze(e){let t=this.Ye.get(e);return t||(t=0===e.filters.length?[e]:xu(fo.create(e.filters,"and")).map((t=>No(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.Ye.set(e,t),t)}nn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.sn(t[l/c]):Fu,h=this.rn(e,a,n[l%c],r),d=this.on(e,a,i[l%c],s),f=o.map((t=>this.rn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}rn(e,t,n,r){const i=new Iu(e,ui.empty(),t,n);return r?i:i.qe()}on(e,t,n,r){const i=new Iu(e,ui.empty(),t,n);return r?i.qe():i}Xe(e,t){const n=new Su(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Qe(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.Ze(t);return Ii.forEach(r,(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new ws(ci.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}un(e,t){const n=new _u;for(const r of di(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Le(r.kind);mu.pe.oe(e,i)}return n.$e()}sn(e){const t=new _u;return mu.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const n=new _u;return mu.pe.oe(qs(this.databaseId,t),n.Le(function(e){const t=di(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}en(e,t,n){if(null===n)return[];let r=[];r.push(new _u);let i=0;for(const s of di(e)){const e=n[i++];for(const n of r)if(this.an(t,s.fieldPath)&&Ks(e))r=this.hn(r,s,e);else{const t=n.Le(s.kind);mu.pe.oe(e,t)}}return this.ln(r)}tn(e,t,n){return this.en(e,t,n.position)}ln(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}hn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new _u;n.seed(e.$e()),mu.pe.oe(s,n.Le(t.kind)),i.push(n)}return i}an(e,t){return!!e.filters.find((e=>e instanceof ho&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=$u(e),r=Bu(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Ii.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new pi(t.sequenceNumber,new vi(nu(t.readTime),new ui($i(t.documentKey)),t.largestBatchId)):pi.empty(),r=e.fields.map((([e,t])=>new fi(ci.fromServerFormat(e),t)));return new li(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ei(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=$u(e),i=Bu(e);return this.fn(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ii.forEach(t,(t=>i.put(uu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ii.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ii.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ii.forEach(i,(n=>this.dn(e,t,n).next((t=>{const i=this.wn(r,n);return t.isEqual(i)?Ii.resolve():this._n(e,r,n,t,i)})))))))}))}mn(e,t,n,r){return ju(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.cn(n,t.key),documentKey:t.key.path.toArray()})}gn(e,t,n,r){return ju(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.cn(n,t.key),t.key.path.toArray()])}dn(e,t,n){const r=ju(e);let i=new ws(Eu);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.cn(n,t)])},((e,r)=>{i=i.add(new Iu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}wn(e,t){let n=new ws(Eu);const r=this.un(t,e);if(null==r)return n;const i=hi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Ks(s))for(const i of s.arrayValue.values||[])n=n.add(new Iu(t.indexId,e.key,this.sn(i),r))}else n=n.add(new Iu(t.indexId,e.key,Fu,r));return n}_n(e,t,n,r,i){Rr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=_s(s),c=_s(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=_s(o)):t?(i(a),a=_s(s)):(a=_s(s),c=_s(o))}}(r,i,Eu,(r=>{s.push(this.mn(e,t,n,r))}),(r=>{s.push(this.gn(e,t,n,r))})),Ii.waitFor(s)}fn(e){let t=1;return Bu(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Eu(e,t))).filter(((e,t,n)=>!t||0!==Eu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Eu(s,e),i=Eu(s,t);if(0===n)r[0]=e.qe();else if(n>0&&i<0)r.push(s),r.push(s.qe());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.yn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Fu,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Fu,[]];i.push(IDBKeyRange.bound(e,t))}return i}yn(e,t){return Eu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(zu)}getMinOffset(e,t){return Ii.mapArray(this.Ze(t),(t=>this.Xe(e,t).next((e=>e||Fr())))).next(zu)}}function Uu(e){return ds(e,"collectionParents")}function ju(e){return ds(e,"indexEntries")}function $u(e){return ds(e,"indexConfiguration")}function Bu(e){return ds(e,"indexState")}function zu(e){Vr(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;yi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new vi(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Gu(e,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Vr(1===a)})));const u=[];for(const l of n.mutations){const e=qi(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ii.waitFor(s).next((()=>u))}function Hu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Fr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gu.DEFAULT_COLLECTION_PERCENTILE=10,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gu.DEFAULT=new Gu(41943040,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gu.DISABLED=new Gu(-1,0,0);class Wu{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.pn={}}static ie(e,t,n,r){Vr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Wu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yu(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Ju(e),s=Yu(e);return s.add({}).next((o=>{Vr("number"==typeof o);const a=new Qa(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Pc(e.se,t))),i=n.mutations.map((t=>Pc(e.se,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new ws(((e,t)=>ei(e.canonicalString(),t.canonicalString())));for(const e of r){const t=qi(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Gi))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.pn[o]=a.keys()})),Ii.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Yu(e).get(t).next((e=>e?(Vr(e.userId===this.userId),ru(this.serializer,e)):null))}In(e,t){return this.pn[t]?Ii.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.pn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Yu(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Vr(t.batchId>=n),i=ru(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Yu(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Yu(e).j("userMutationsIndex",t).next((e=>e.map((e=>ru(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zi(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Ju(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=$i(a);if(o===this.userId&&t.path.isEqual(u))return Yu(e).get(c).next((e=>{if(!e)throw Fr();Vr(e.userId===this.userId),i.push(ru(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(ei);const r=[];return t.forEach((t=>{const i=zi(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Ju(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=$i(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ii.waitFor(r).next((()=>this.Tn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=zi(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new ws(ei);return Ju(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=$i(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Tn(e,o)))}Tn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Yu(e).get(t).next((e=>{if(null===e)throw Fr();Vr(e.userId===this.userId),n.push(ru(this.serializer,e))})))})),Ii.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Ku(e.at,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.En(t.batchId)})),Ii.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ii.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Ju(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=$i(e[1]);r.push(t)}else n.done()})).next((()=>{Vr(0===r.length)}))}))}containsKey(e,t){return Qu(e,this.userId,t)}An(e){return Xu(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Qu(e,t,n){const r=zi(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ju(e).Z({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Yu(e){return ds(e,"mutations")}function Ju(e){return ds(e,"documentMutations")}function Xu(e){return ds(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Zu(0)}static bn(){return new Zu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next((t=>{const n=new Zu(t.highestTargetId);return t.highestTargetId=n.next(),this.Vn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Pn(e).next((e=>ii.fromTimestamp(new ri(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Pn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Pn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Vn(e,r))))}addTargetData(e,t){return this.Sn(e,t).next((()=>this.Pn(e).next((n=>(n.targetCount+=1,this.Dn(t,n),this.Vn(e,n))))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>tl(e).delete(t.targetId))).next((()=>this.Pn(e))).next((t=>(Vr(t.targetCount>0),t.targetCount-=1,this.Vn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return tl(e).Z(((s,o)=>{const a=iu(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ii.waitFor(i))).next((()=>r))}forEachTarget(e,t){return tl(e).Z(((e,n)=>{const r=iu(n);t(r)}))}Pn(e){return nl(e).get("targetGlobalKey").next((e=>(Vr(null!==e),e)))}Vn(e,t){return nl(e).put("targetGlobalKey",t)}Sn(e,t){return tl(e).put(su(this.serializer,t))}Dn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Pn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Do(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return tl(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=iu(n);Ro(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=rl(e);return t.forEach((t=>{const s=Vi(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ii.waitFor(r)}removeMatchingKeys(e,t,n){const r=rl(e);return Ii.forEach(t,(t=>{const i=Vi(t.path);return Ii.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=rl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=rl(e);let i=fa();return r.Z({range:n,Y:!0},((e,t,n)=>{const r=$i(e[1]),s=new ui(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Vi(t.path),r=IDBKeyRange.bound([n],[ni(n)],!1,!0);let i=0;return rl(e).Z({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ne(e,t){return tl(e).get(t).next((e=>e?iu(e):null))}}function tl(e){return ds(e,"targets")}function nl(e){return ds(e,"targetGlobal")}function rl(e){return ds(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il([e,t],[n,r]){const i=ei(e,n);return 0===i?ei(t,r):i}class sl{constructor(e){this.Cn=e,this.buffer=new ws(il),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();il(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ol{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}$n(e){Rr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xi(e)?Rr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await _i(e)}await this.$n(3e5)}))}}class al{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ii.resolve(Pi.ct);const n=new sl(t);return this.Mn.forEachTarget(e,(e=>n.kn(e.sequenceNumber))).next((()=>this.Mn.Bn(e,(e=>n.kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Rr("LruGarbageCollector","Garbage collection skipped; disabled"),Ii.resolve(qu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Rr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.Ln(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Rr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Nr()<=o["in"].DEBUG&&Rr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ii.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new al(e,t)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Bn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,((e,n)=>t(n)))}addReference(e,t,n){return ul(e,n)}removeReference(e,t,n){return ul(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ul(e,t)}Kn(e,t){return function(e,t){let n=!1;return Xu(e).X((r=>Qu(e,r,t).next((e=>(e&&(n=!0),Ii.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Un(e,((s,o)=>{if(o<=t){const t=this.Kn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,ii.min()),rl(e).delete([0,Vi(s.path)]))))}));r.push(t)}})).next((()=>Ii.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ul(e,t)}Un(e,t){const n=rl(e);let r,i=Pi.ct;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Pi.ct&&t(new ui($i(r)),i),i=o,r=s):i=Pi.ct})).next((()=>{i!==Pi.ct&&t(new ui($i(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ul(e,t){return rl(e).put(function(e,t){return{targetId:0,path:Vi(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.changes=new na((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,io.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ii.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ml(e).put(n)}removeEntry(e,t,n){return ml(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],eu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Gn(e,n))))}getEntry(e,t){let n=io.newInvalidDocument(t);return ml(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gl(t))},((e,r)=>{n=this.Qn(t,r)})).next((()=>n))}zn(e,t){let n={size:0,document:io.newInvalidDocument(t)};return ml(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gl(t))},((e,r)=>{n={document:this.Qn(t,r),size:Hu(r)}})).next((()=>n))}getEntries(e,t){let n=ia();return this.jn(e,t,((e,t)=>{const r=this.Qn(e,t);n=n.insert(e,r)})).next((()=>n))}Wn(e,t){let n=ia(),r=new gs(ui.comparator);return this.jn(e,t,((e,t)=>{const i=this.Qn(e,t);n=n.insert(e,i),r=r.insert(e,Hu(t))})).next((()=>({documents:n,Hn:r})))}jn(e,t,n){if(t.isEmpty())return Ii.resolve();let r=new ws(yl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(gl(r.first()),gl(r.last())),s=r.getIterator();let o=s.getNext();return ml(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=ui.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&yl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(gl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),eu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ml(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=ia();for(const i of e){const e=this.Qn(ui.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Xo(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=ia();const s=vl(t,n),o=vl(t,vi.max());return ml(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Qn(ui.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new fl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return pl(e).get("remoteDocumentGlobalKey").next((e=>(Vr(!!e),e)))}Gn(e,t){return pl(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const e=Xc(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(ii.min()))return e}return io.newInvalidDocument(e)}}function dl(e){return new hl(e)}class fl extends ll{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new na((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new ws(((e,t)=>ei(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Zc(this.Jn.serializer,s);r=r.add(i.path.popLast());const c=Hu(a);n+=c-o.size,t.push(this.Jn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Zc(this.Jn.serializer,s.convertToNoDocument(ii.min()));t.push(this.Jn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Jn.updateMetadata(e,n)),Ii.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next((e=>(this.Yn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next((({documents:e,Hn:t})=>(t.forEach(((t,n)=>{this.Yn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function pl(e){return ds(e,"remoteDocumentGlobal")}function ml(e){return ds(e,"remoteDocumentsV14")}function gl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function vl(e,t){const n=t.documentKey.path.toArray();return[e,eu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function yl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ei(n[s],r[s]),i)return i;return i=ei(n.length,r.length),i||(i=ei(n[n.length-2],r[r.length-2]),i||ei(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ua(n.mutation,e,Is.empty(),ri.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,fa()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=fa()){const r=ca();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=oa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ca();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,fa())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ia();const s=la(),o=la();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof za)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ua(o.mutation,t,o.mutation.getFieldMask(),ri.now())):s.set(t.key,Is.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new wl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=la();let r=new gs(((e,t)=>e-t)),i=fa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Is.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||fa()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ua();c.forEach((e=>{if(!i.has(e)){const r=Fa(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ii.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ui.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ii.resolve(ca());let o=-1,a=i;return s.next((t=>Ii.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ii.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,fa()))).next((e=>({batchId:o,changes:aa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ui(t)).next((e=>{let t=oa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=oa();return this.indexManager.getCollectionParents(e,r).next((s=>Ii.forEach(s,(s=>{const o=function(e,t){return new Vo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,io.newInvalidDocument(r)))}));let n=oa();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Ua(s.mutation,i,Is.empty(),ri.now()),Xo(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Ii.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:_c(n.createTime)}),Ii.resolve()}getNamedQuery(e,t){return Ii.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:ou(e.bundledQuery),readTime:_c(e.readTime)}}(t)),Ii.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.overlays=new gs(ui.comparator),this.ts=new Map}getOverlay(e,t){return Ii.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ca();return Ii.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),Ii.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Ii.resolve()}getOverlaysForCollection(e,t,n){const r=ca(),i=t.length+1,s=new ui(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ii.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new gs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ca(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ca(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ii.resolve(o)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ja(t,n));let i=this.ts.get(t);void 0===i&&(i=fa(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.es=new ws(Tl.ns),this.ss=new ws(Tl.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Tl(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Tl(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new ui(new oi([])),n=new Tl(t,e),r=new Tl(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new ui(new oi([])),n=new Tl(t,e),r=new Tl(t,e+1);let i=fa();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Tl(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Tl{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return ui.comparator(e.key,t.key)||ei(e.ds,t.ds)}static rs(e,t){return ei(e.ds,t.ds)||ui.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new ws(Tl.ns)}checkEmpty(e){return Ii.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Qa(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this._s=this._s.add(new Tl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ii.resolve(s)}lookupMutationBatch(e,t){return Ii.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return Ii.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ii.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Ii.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Tl(t,0),r=new Tl(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),Ii.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(ei);return t.forEach((e=>{const t=new Tl(e,0),r=new Tl(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),Ii.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ui.isDocumentKey(i)||(i=i.child(""));const s=new Tl(new ui(i),0);let o=new ws(ei);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),s),Ii.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Vr(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Ii.forEach(t.mutations,(r=>{const i=new Tl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Tl(t,0),r=this._s.firstAfterOrEqual(n);return Ii.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ii.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.Ts=e,this.docs=new gs(ui.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ii.resolve(n?n.document.mutableCopy():io.newInvalidDocument(t))}getEntries(e,t){let n=ia();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():io.newInvalidDocument(e))})),Ii.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ia();const s=t.path,o=new ui(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||yi(gi(o),n)<=0||(r.has(o.key)||Xo(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ii.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Fr()}Es(e,t){return Ii.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xl(this)}getSize(e){return Ii.resolve(this.size)}}class xl extends ll{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),Ii.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.persistence=e,this.As=new na((e=>Do(e)),Ro),this.lastRemoteSnapshotVersion=ii.min(),this.highestTargetId=0,this.Rs=0,this.vs=new El,this.targetCount=0,this.bs=Zu.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Ii.resolve()}getLastRemoteSnapshotVersion(e){return Ii.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ii.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Ii.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Ii.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Zu(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Ii.resolve()}updateTargetData(e,t){return this.Sn(t),Ii.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Ii.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ii.waitFor(i).next((()=>r))}getTargetCount(e){return Ii.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Ii.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Ii.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ii.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Ii.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Ii.resolve(n)}containsKey(e,t){return Ii.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Pi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new kl(this),this.indexManager=new Lu,this.remoteDocumentCache=function(e){return new Cl(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new Jc(t),this.xs=new _l(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Il,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Sl(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){Rr("MemoryPersistence","Starting transaction:",e);const r=new Ol(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return Ii.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Ol extends bi{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.$s=new El,this.Ms=null}static Fs(e){return new Nl(e)}get Bs(){if(this.Ms)return this.Ms;throw Fr()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Ii.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Ii.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Ii.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ii.forEach(this.Bs,(n=>{const r=ui.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,ii.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Ii.or([()=>Ii.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.serializer=e}M(e,t,n,r){const i=new Ei("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Bi,{unique:!0}),e.createObjectStore("documentMutations")}(e),Rl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ii.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Rl(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ii.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Bi,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ii.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.qs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Us(i))))),n<7&&r>=7&&(s=s.next((()=>this.Ks(i)))),n<8&&r>=8&&(s=s.next((()=>this.Gs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.Qs(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:rs});t.createIndex("collectionPathOverlayIndex",is,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ss,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ki});t.createIndex("documentKeyIndex",Hi),t.createIndex("collectionGroupIndex",Wi)}(e))).next((()=>this.zs(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.js(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Zi}).createIndex("sequenceNumberIndex",es,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ts}).createIndex("documentKeyIndex",ns,{unique:!1})}(e)))),s}Us(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Hu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Ii.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Ii.forEach(n,(n=>{Vr(n.userId===t.userId);const r=ru(this.serializer,n);return Ku(e,t.userId,r).next((()=>{}))}))))}))))}Ks(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new oi(n),o=function(e){return[0,Vi(e)]}(s);r.push(t.get(o).next((n=>n?Ii.resolve():(n=>t.put({targetId:0,path:Vi(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ii.waitFor(r)))}))}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:Xi});const n=t.store("collectionParents"),r=new Mu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Vi(r)})}};return t.store("remoteDocuments").Z({Y:!0},((e,t)=>{const n=new oi(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({Y:!0},(([e,t,n],r)=>{const s=$i(t);return i(s.popLast())}))))}Qs(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=iu(n),i=su(this.serializer,r);return t.put(i)}))}zs(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ui(oi.fromString(o.document.name).popFirst(5)):o.noDocument?ui.fromSegments(o.noDocument.path):o.unknownDocument?ui.fromSegments(o.unknownDocument.path):Fr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ii.waitFor(r)))}js(e,t){const n=t.store("mutations"),r=dl(this.serializer),i=new Al(Nl.Fs,this.serializer.se);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:fa();ru(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ii.forEach(n,((e,n)=>{const s=new kr(n),o=fu.ie(this.serializer,s),a=i.getIndexManager(s),c=Wu.ie(s,this.serializer,a,i.referenceDelegate);return new bl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new hs(t,Pi.ct),e).next()}))}))}}function Rl(e){e.createObjectStore("targetDocuments",{keyPath:Yi}).createIndex("documentTargetsIndex",Ji,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Qi,{unique:!0}),e.createObjectStore("targetGlobal")}const Pl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ll{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ws=i,this.window=s,this.document=o,this.Hs=c,this.Js=u,this.Ys=l,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=e=>Promise.resolve(),!Ll.D())throw new Br($r.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cl(this,r),this.si=t+"main",this.serializer=new Jc(a),this.ii=new Ti(this.si,this.Ys,new Dl(this.serializer)),this.Ds=new el(this.referenceDelegate,this.serializer),this.remoteDocumentCache=dl(this.serializer),this.xs=new lu,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,!1===u&&Pr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Br($r.FAILED_PRECONDITION,Pl);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Ds.getHighestSequenceNumber(e)))})).then((e=>{this.Vs=new Pi(e,this.Hs)})).then((()=>{this.Ss=!0})).catch((e=>(this.ii&&this.ii.close(),Promise.reject(e))))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget((async()=>{this.started&&await this.oi()})))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Fl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.li(e).next((e=>{e||(this.isPrimary=!1,this.Ws.enqueueRetryable((()=>this.ni(!1))))}))})).next((()=>this.fi(e))).next((t=>this.isPrimary&&!t?this.di(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(xi(e))return Rr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Rr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable((()=>this.ni(e))),this.isPrimary=e}))}li(e){return Ml(e).get("owner").next((e=>Ii.resolve(this._i(e))))}mi(e){return Fl(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=ds(e,"clientMetadata");return t.j().next((e=>{const n=this.pi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ii.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.oi().then((()=>this.gi())).then((()=>this.ai()))))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?Ii.resolve(!0):Ml(e).get("owner").next((t=>{if(null!==t&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new Br($r.FAILED_PRECONDITION,Pl);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fl(e).j().next((e=>void 0===this.pi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Rr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new hs(e,Pi.ct);return this.di(t).next((()=>this.mi(t)))})),this.ii.close(),this.vi()}pi(e,t){return e.filter((e=>this.yi(e.updateTimeMs,t)&&!this.Ti(e.clientId)))}bi(){return this.runTransaction("getActiveClients","readonly",(e=>Fl(e).j().next((e=>this.pi(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ss}getMutationQueue(e,t){return Wu.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Vu(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return fu.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,n){Rr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Ys)?ls:14===s?us:13===s?cs:12===s?as:11===s?os:void Fr();var s;let o;return this.ii.runTransaction(e,r,i,(r=>(o=new hs(r,this.Vs?this.Vs.next():Pi.ct),"readwrite-primary"===t?this.li(o).next((e=>!!e||this.fi(o))).next((t=>{if(!t)throw Pr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable((()=>this.ni(!1))),new Br($r.FAILED_PRECONDITION,wi);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Pi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Pi(e){return Ml(e).get("owner").next((e=>{if(null!==e&&this.yi(e.leaseTimestampMs,5e3)&&!this.Ti(e.ownerId)&&!this._i(e)&&!(this.Js||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Br($r.FAILED_PRECONDITION,Pl)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ml(e).put("owner",t)}static D(){return Ti.D()}di(e){const t=Ml(e);return t.get("owner").next((e=>this._i(e)?(Rr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ii.resolve()))}yi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Pr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ui(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Xs=()=>{this.Ws.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.oi())))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground="visible"===this.document.visibilityState)}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ei();const e=/(?:Version|Mobile)\/1[456]/;(0,a.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const n=null!==(null===(t=this.ri)||void 0===t?void 0:t.getItem(this.Ii(e)));return Rr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Pr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(I){Pr("Failed to set zombie client id.",I)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch(I){}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ml(e){return ds(e,"owner")}function Fl(e){return ds(e,"clientMetadata")}function Vl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ul{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}static Di(e,t){let n=fa(),r=fa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ul(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if($o(t))return Ii.resolve(null);let n=Ko(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Wo(t,null,"F"),n=Ko(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=fa(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,Wo(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return $o(t)||r.isEqual(ii.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(Nr()<=o["in"].DEBUG&&Rr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jo(t)),this.Fi(e,s,t,mi(r,-1)))}))}$i(e,t){let n=new ws(ea(e));return t.forEach(((t,r)=>{Xo(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return Nr()<=o["in"].DEBUG&&Rr("QueryEngine","Using full collection scan to execute query:",Jo(t)),this.xi.getDocumentsMatchingQuery(e,t,vi.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new gs(ei),this.qi=new na((e=>Do(e)),Ro),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bl(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function Bl(e,t,n,r){return new $l(e,t,n,r)}async function zl(e,t){const n=jr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=fa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ql(e,t){const n=jr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ii.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Vr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=fa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Gl(e){const t=jr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function Kl(e,t){const n=jr(e),r=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ss.EMPTY_BYTE_STRING,ii.min()).withLastLimboFreeSnapshotVersion(ii.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ds.updateTargetData(e,u))}));let a=ia(),c=fa();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Hl(e,s,t.documentUpdates).next((e=>{a=e.zi,c=e.ji}))),!r.isEqual(ii.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ii.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Li=i,e)))}function Hl(e,t,n){let r=fa(),i=fa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ia();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ii.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Rr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:r,ji:i}}))}function Wl(e,t){const n=jr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ql(e,t){const n=jr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,Ii.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new Yc(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function Yl(e,t,n){const r=jr(e),i=r.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!xi(e))throw e;Rr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function Jl(e,t,n){const r=jr(e);let i=ii.min(),s=fa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=jr(e),i=r.qi.get(n);return void 0!==i?Ii.resolve(r.Li.get(i)):r.Ds.getTargetData(t,n)}(r,e,Ko(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bi.getDocumentsMatchingQuery(e,t,n?i:ii.min(),n?s:fa()))).next((e=>(eh(r,Zo(t),e),{documents:e,Wi:s})))))}function Xl(e,t){const n=jr(e),r=jr(n.Ds),i=n.Li.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.ne(e,t).next((e=>e?e.target:null))))}function Zl(e,t){const n=jr(e),r=n.Ui.get(t)||ii.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ki.getAllFromCollectionGroup(e,t,mi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(eh(n,t,e),e)))}function eh(e,t,n){let r=e.Ui.get(t)||ii.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}async function th(e,t,n,r){const i=jr(e);let s=fa(),o=ia();for(const u of n){const e=t.Hi(u.metadata.name);u.document&&(s=s.add(e));const n=t.Ji(u);n.setReadTime(t.Yi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),c=await Ql(i,function(e){return Ko(jo(oi.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Hl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Ds.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Ds.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.zi,t.ji))).next((()=>t.zi))))))}async function nh(e,t,n=fa()){const r=await Ql(e,Ko(ou(t.bundledQuery))),i=jr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=_c(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.xs.saveNamedQuery(e,t);const o=r.withResumeToken(Ss.EMPTY_BYTE_STRING,s);return i.Li=i.Li.insert(o.targetId,o),i.Ds.updateTargetData(e,o).next((()=>i.Ds.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Ds.addMatchingKeys(e,n,r.targetId))).next((()=>i.xs.saveNamedQuery(e,t)))}))}function rh(e,t){return`firestore_clients_${e}_${t}`}function ih(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function sh(e,t){return`firestore_targets_${e}_${t}`}class oh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new Br(r.error.code,r.error.message))),s?new oh(e,t,r.state,i):(Pr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ah{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new Br(n.error.code,n.error.message))),i?new ah(e,n.state,r):(Pr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ch{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=ma();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=Fi(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ch(e,i):(Pr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class uh{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new uh(t.clientId,t.onlineState):(Pr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class lh{constructor(){this.activeTargetIds=ma()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hh{constructor(e,t,n,r,i){this.window=e,this.Ws=t,this.persistenceKey=n,this.nr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new gs(ei),this.started=!1,this.ur=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=rh(this.persistenceKey,this.nr),this.ar=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.rr=this.rr.insert(this.nr,new lh),this.hr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._r=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const n of e){if(n===this.nr)continue;const e=this.getItem(rh(this.persistenceKey,n));if(e){const t=ch.Zi(n,e);t&&(this.rr=this.rr.insert(t.clientId,t))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const e=this.gr(t);e&&this.yr(e)}for(const n of this.ur)this.ir(n);this.ur=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,n){this.Ir(e,t,n),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(sh(this.persistenceKey,e));if(n){const r=ah.Zi(e,n);r&&(t=r.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(sh(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ar(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Tr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Rr("SharedClientState","READ",e,t),t}setItem(e,t){Rr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Rr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(Rr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void Pr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.hr.test(t.key)){if(null==t.newValue){const e=this.br(t.key);return this.Pr(e,null)}{const e=this.Vr(t.key,t.newValue);if(e)return this.Pr(e.clientId,e)}}else if(this.lr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Cr(t.key,t.newValue);if(e)return this.Nr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.gr(t.newValue);if(e)return this.yr(e)}}else if(t.key===this.ar){const e=function(e){let t=Pi.ct;if(null!=e)try{const n=JSON.parse(e);Vr("number"==typeof n),t=n}catch(e){Pr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Pi.ct&&this.sequenceNumberHandler(e)}else if(t.key===this._r){const e=this.kr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Or(e))))}}else this.ur.push(t)}))}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,n){const r=new oh(this.currentUser,e,t,n),i=ih(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Xi())}Tr(e){const t=ih(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,n){const r=sh(this.persistenceKey,e),i=new ah(e,t,n);this.setItem(r,i.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const n=this.br(e);return ch.Zi(n,t)}Sr(e,t){const n=this.lr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return oh.Zi(new kr(i),r,t)}Cr(e,t){const n=this.dr.exec(e),r=Number(n[1]);return ah.Zi(r,t)}gr(e){return uh.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);Rr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const n=t?this.rr.insert(e,t):this.rr.remove(e),r=this.pr(this.rr),i=this.pr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Fr(s,o).then((()=>{this.rr=n}))}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=ma();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class dh{constructor(){this.Br=new lh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new lh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Rr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Rr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh=null;function gh(){return null===mh?mh=268435456+Math.round(2147483648*Math.random()):mh++,"0x"+mh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="WebChannelConnection";class bh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,r,i){const s=gh(),o=this.ao(e,t);Rr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(e,o,a,n).then((t=>(Rr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Lr("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=vh[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){const i=gh();return new Promise(((s,o)=>{const a=new Cr;a.setWithCredentials(!0),a.listenOnce(_r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case br.NO_ERROR:const t=a.getResponseJson();Rr(wh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case br.TIMEOUT:Rr(wh,`RPC '${e}' ${i} timed out`),o(new Br($r.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=a.getStatus();if(Rr(wh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($r).indexOf(t)>=0?t:$r.UNKNOWN}(t.status);o(new Br(e,t.message))}else o(new Br($r.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Br($r.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Rr(wh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Rr(wh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=gh(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yr(),o=wr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Tr({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Rr(wh,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new yh({Wr:t=>{h?Rr(wh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(Rr(wh,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),Rr(wh,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Sr.EventType.OPEN,(()=>{h||Rr(wh,`RPC '${e}' stream ${r} transport opened.`)})),f(u,Sr.EventType.CLOSE,(()=>{h||(h=!0,Rr(wh,`RPC '${e}' stream ${r} transport closed`),d.so())})),f(u,Sr.EventType.ERROR,(t=>{h||(h=!0,Lr(wh,`RPC '${e}' stream ${r} transport errored:`,t),d.so(new Br($r.UNAVAILABLE,"The operation could not be completed")))})),f(u,Sr.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];Vr(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Rr(wh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Za[e];if(void 0!==t)return nc(t)}(t),i=o.message;void 0===n&&(n=$r.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new Br(n,i)),u.close()}else Rr(wh,`RPC '${e}' stream ${r} received:`,i),d.io(i)}})),f(o,Ir.STAT_EVENT,(t=>{t.stat===Er.PROXY?Rr(wh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Er.NOPROXY&&Rr(wh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return"undefined"!=typeof window?window:null}function Ih(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(e){return new vc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&Rr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,n,r,i,s,o,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Th(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===$r.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===$r.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new Br($r.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return Rr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(Rr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ch extends Sh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Rc(this.serializer,e),n=function(e){if(!("targetChange"in e))return ii.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ii.min():t.readTime?_c(t.readTime):ii.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=kc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;return n=Po(r)?{documents:Fc(e,r)}:{query:Vc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wc(e,t.resumeToken):t.snapshotVersion.compareTo(ii.min())>0&&(n.readTime=yc(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=jc(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=kc(this.serializer),t.removeTarget=e,this.Fo(t)}}class xh extends Sh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Vr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=Mc(e.writeResults,e.commitTime),n=_c(e.commitTime);return this.listener.Zo(n,t)}return Vr(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=kc(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Pc(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new Br($r.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br($r.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br($r.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class Ah{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Pr(t),this.ru=!1):Rr("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{Uh(this)&&(Rr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=jr(e);t.du.add(4),await Dh(t),t.mu.set("Unknown"),t.du.delete(4),await Nh(t)}(this))}))})),this.mu=new Ah(n,r)}}async function Nh(e){if(Uh(e))for(const t of e.wu)await t(!0)}async function Dh(e){for(const t of e.wu)await t(!1)}function Rh(e,t){const n=jr(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Vh(n)?Fh(n):rd(n).No()&&Lh(n,t))}function Ph(e,t){const n=jr(e),r=rd(n);n.fu.delete(t),r.No()&&Mh(n,t),0===n.fu.size&&(r.No()?r.$o():Uh(n)&&n.mu.set("Unknown"))}function Lh(e,t){e.gu.Ot(t.targetId),rd(e).jo(t)}function Mh(e,t){e.gu.Ot(t),rd(e).Wo(t)}function Fh(e){e.gu=new hc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),rd(e).start(),e.mu.ou()}function Vh(e){return Uh(e)&&!rd(e).xo()&&e.fu.size>0}function Uh(e){return 0===jr(e).du.size}function jh(e){e.gu=void 0}async function $h(e){e.fu.forEach(((t,n)=>{Lh(e,t)}))}async function Bh(e,t){jh(e),Vh(e)?(e.mu.au(t),Fh(e)):e.mu.set("Unknown")}async function zh(e,t,n){if(e.mu.set("Online"),t instanceof uc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){Rr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await qh(e,n)}else if(t instanceof ac?e.gu.Kt(t):t instanceof cc?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(ii.min()))try{const t=await Gl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(Ss.EMPTY_BYTE_STRING,n.snapshotVersion)),Mh(e,t);const r=new Yc(n.target,t,1,n.sequenceNumber);Lh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Rr("RemoteStore","Failed to raise snapshot:",t),await qh(e,t)}}async function qh(e,t,n){if(!xi(t))throw t;e.du.add(1),await Dh(e),e.mu.set("Offline"),n||(n=()=>Gl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Rr("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Nh(e)}))}function Gh(e,t){return t().catch((n=>qh(e,n,t)))}async function Kh(e){const t=jr(e),n=id(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Hh(t);)try{const e=await Wl(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,Wh(t,e)}catch(e){await qh(t,e)}Qh(t)&&Yh(t)}function Hh(e){return Uh(e)&&e.lu.length<10}function Wh(e,t){e.lu.push(t);const n=id(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Qh(e){return Uh(e)&&!id(e).xo()&&e.lu.length>0}function Yh(e){id(e).start()}async function Jh(e){id(e).tu()}async function Xh(e){const t=id(e);for(const n of e.lu)t.Yo(n.mutations)}async function Zh(e,t,n){const r=e.lu.shift(),i=Ya.from(r,t,n);await Gh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Kh(e)}async function ed(e,t){t&&id(e).Jo&&await async function(e,t){if(n=t.code,tc(n)&&n!==$r.ABORTED){const n=e.lu.shift();id(e).Oo(),await Gh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Kh(e)}var n}(e,t),Qh(e)&&Yh(e)}async function td(e,t){const n=jr(e);n.asyncQueue.verifyOperationInProgress(),Rr("RemoteStore","RemoteStore received new credentials");const r=Uh(n);n.du.add(3),await Dh(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Nh(n)}async function nd(e,t){const n=jr(e);t?(n.du.delete(2),await Nh(n)):t||(n.du.add(2),await Dh(n),n.mu.set("Unknown"))}function rd(e){return e.yu||(e.yu=function(e,t,n){const r=jr(e);return r.nu(),new Ch(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Jr:$h.bind(null,e),Zr:Bh.bind(null,e),zo:zh.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Vh(e)?Fh(e):e.mu.set("Unknown")):(await e.yu.stop(),jh(e))}))),e.yu}function id(e){return e.pu||(e.pu=function(e,t,n){const r=jr(e);return r.nu(),new xh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Jh.bind(null,e),Zr:ed.bind(null,e),Xo:Xh.bind(null,e),Zo:Zh.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Kh(e)):(await e.pu.stop(),e.lu.length>0&&(Rr("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new sd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br($r.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(e,t){if(Pr("AsyncQueue",`${t}: ${e}`),xi(e))return new Br($r.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ui.comparator(t.key,n.key):(e,t)=>ui.comparator(e.key,t.key),this.keyedMap=oa(),this.sortedSet=new gs(this.comparator)}static emptySet(e){return new ad(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ad))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ad;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.Iu=new gs(ui.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):Fr():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ud{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new ud(e,t,ad.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.Eu=void 0,this.listeners=[]}}class hd{constructor(){this.queries=new na((e=>Yo(e)),Qo),this.onlineState="Unknown",this.Au=new Set}}async function dd(e,t){const n=jr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ld),i)try{s.Eu=await n.onListen(r)}catch(e){const n=od(e,`Initialization of query '${Jo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&gd(n)}async function fd(e,t){const n=jr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pd(e,t){const n=jr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.vu(i)&&(r=!0);t.Eu=i}}r&&gd(n)}function md(e,t,n){const r=jr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function gd(e){e.Au.forEach((e=>{e.next()}))}class vd{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ud(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=ud.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.serializer=e}Hi(e){return Sc(this.serializer,e)}Ji(e){return e.metadata.exists?Nc(this.serializer,e.document,!1):io.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return _c(e)}}class bd{constructor(e,t,n){this.Ou=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_d(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const n=oi.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,n=new wd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Hi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||fa()).add(e);t.set(n,r)}}return t}async complete(){const e=await th(this.localStore,new wd(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const n of this.queries)await nh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function _d(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.key=e}}class Ed{constructor(e){this.key=e}}class Td{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=fa(),this.mutatedKeys=fa(),this.Ku=ea(e),this.Gu=new ad(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new cd,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Xo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new ud(this.query,e.Gu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new cd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=fa(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new Ed(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new Id(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=fa();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return ud.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Sd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cd{constructor(e){this.key=e,this.ec=!1}}class xd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new na((e=>Yo(e)),Qo),this.ic=new Map,this.rc=new Set,this.oc=new gs(ui.comparator),this.uc=new Map,this.cc=new El,this.ac={},this.hc=new Map,this.lc=Zu.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function kd(e,t){const n=rf(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const e=await Ql(n.localStore,Ko(t));n.isPrimaryClient&&Rh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ad(n,t,r,"current"===s,e.resumeToken)}return i}async function Ad(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await Jl(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Bd(e,t.targetId,o.Yu),o.snapshot}(e,t,n,r);const s=await Jl(e.localStore,t,!0),o=new Td(t,s.Wi),a=o.zu(s.documents),c=oc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Bd(e,n,u.Yu);const l=new Sd(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Od(e,t){const n=jr(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!Qo(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ph(n.remoteStore,r.targetId),jd(n,r.targetId)})).catch(_i)):(jd(n,r.targetId),await Yl(n.localStore,r.targetId,!0))}async function Nd(e,t,n){const r=sf(e);try{const e=await function(e,t){const n=jr(e),r=ri.now(),i=t.reduce(((e,t)=>e.add(t.key)),fa());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ia(),c=fa();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ja(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new za(e.key,t,ro(t.value.mapValue),Pa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:aa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new gs(ei)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await Gd(r,e.changes),await Kh(r.remoteStore)}catch(e){const t=od(e,"Failed to persist write");n.reject(t)}}async function Dd(e,t){const n=jr(e);try{const e=await Kl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(Vr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?Vr(r.ec):e.removedDocuments.size>0&&(Vr(r.ec),r.ec=!1))})),await Gd(n,e,t)}catch(e){await _i(e)}}function Rd(e,t,n){const r=jr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=jr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Ru(t)&&(r=!0)})),r&&gd(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pd(e,t,n){const r=jr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let e=new gs(ui.comparator);e=e.insert(s,io.newNoDocument(s,ii.min()));const n=fa().add(s),i=new sc(ii.min(),new Map,new ws(ei),e,n);await Dd(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),qd(r)}else await Yl(r.localStore,t,!1).then((()=>jd(r,t,n))).catch(_i)}async function Ld(e,t){const n=jr(e),r=t.batch.batchId;try{const e=await ql(n.localStore,t);Ud(n,r,null),Vd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gd(n,e)}catch(e){await _i(e)}}async function Md(e,t,n){const r=jr(e);try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Vr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Ud(r,t,n),Vd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Gd(r,e)}catch(n){await _i(n)}}async function Fd(e,t){const n=jr(e);Uh(n.remoteStore)||Rr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=jr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.hc.get(e)||[];r.push(t),n.hc.set(e,r)}catch(e){const n=od(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Vd(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Ud(e,t,n){const r=jr(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function jd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||$d(e,t)}))}function $d(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Ph(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),qd(e))}function Bd(e,t,n){for(const r of n)r instanceof Id?(e.cc.addReference(r.key,t),zd(e,r)):r instanceof Ed?(Rr("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||$d(e,r.key)):Fr()}function zd(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(Rr("SyncEngine","New document in limbo: "+n),e.rc.add(r),qd(e))}function qd(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new ui(oi.fromString(t)),r=e.lc.next();e.uc.set(r,new Cd(n)),e.oc=e.oc.insert(n,r),Rh(e.remoteStore,new Yc(Ko(jo(n.path)),r,2,Pi.ct))}}async function Gd(e,t,n){const r=jr(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Ul.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.zo(i),await async function(e,t){const n=jr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ii.forEach(t,(t=>Ii.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ii.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xi(e))throw e;Rr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Li.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(e,i)}}}(r.localStore,s))}async function Kd(e,t){const n=jr(e);if(!n.currentUser.isEqual(t)){Rr("SyncEngine","User change. New user:",t.toKey());const e=await zl(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new Br($r.CANCELLED,t))}))})),e.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Gd(n,e.Qi)}}function Hd(e,t){const n=jr(e),r=n.uc.get(t);if(r&&r.ec)return fa().add(r.key);{let e=fa();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}async function Wd(e,t){const n=jr(e),r=await Jl(n.localStore,t.query,!0),i=t.view.Xu(r);return n.isPrimaryClient&&Bd(n,t.targetId,i.Yu),i}async function Qd(e,t){const n=jr(e);return Zl(n.localStore,t).then((e=>Gd(n,e)))}async function Yd(e,t,n,r){const i=jr(e),s=await function(e,t){const n=jr(e),r=jr(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.In(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ii.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Kh(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ud(i,t,r||null),Vd(i,t),function(e,t){jr(jr(e).mutationQueue).En(t)}(i.localStore,t)):Fr(),await Gd(i,s)):Rr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Jd(e,t){const n=jr(e);if(rf(n),sf(n),!0===t&&!0!==n.fc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Xd(n,e.toArray());n.fc=!0,await nd(n.remoteStore,!0);for(const r of t)Rh(n.remoteStore,r)}else if(!1===t&&!1!==n.fc){const e=[];let t=Promise.resolve();n.ic.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(jd(n,i),Yl(n.localStore,i,!0)))),Ph(n.remoteStore,i)})),await t,await Xd(n,e),function(e){const t=jr(e);t.uc.forEach(((e,n)=>{Ph(t.remoteStore,n)})),t.cc.ls(),t.uc=new Map,t.oc=new gs(ui.comparator)}(n),n.fc=!1,await nd(n.remoteStore,!1)}}async function Xd(e,t,n){const r=jr(e),i=[],s=[];for(const o of t){let e;const t=r.ic.get(o);if(t&&0!==t.length){e=await Ql(r.localStore,Ko(t[0]));for(const e of t){const t=r.sc.get(e),n=await Wd(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Xl(r.localStore,o);e=await Ql(r.localStore,t),await Ad(r,Zd(t),o,!1,e.resumeToken)}i.push(e)}return r.nc.zo(s),i}function Zd(e){return Uo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ef(e){const t=jr(e);return jr(jr(t.localStore).persistence).bi()}async function tf(e,t,n,r){const i=jr(e);if(i.fc)return void Rr("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Zl(i.localStore,Zo(s[0])),r=sc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ss.EMPTY_BYTE_STRING);await Gd(i,e,r);break}case"rejected":await Yl(i.localStore,t,!0),jd(i,t,r);break;default:Fr()}}async function nf(e,t,n){const r=rf(e);if(r.fc){for(const e of t){if(r.ic.has(e)){Rr("SyncEngine","Adding an already active target "+e);continue}const t=await Xl(r.localStore,e),n=await Ql(r.localStore,t);await Ad(r,Zd(t),n.targetId,!1,n.resumeToken),Rh(r.remoteStore,n)}for(const e of n)r.ic.has(e)&&await Yl(r.localStore,e,!1).then((()=>{Ph(r.remoteStore,e),jd(r,e)})).catch(_i)}}function rf(e){const t=jr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pd.bind(null,t),t.nc.zo=pd.bind(null,t.eventManager),t.nc.wc=md.bind(null,t.eventManager),t}function sf(e){const t=jr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ld.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Md.bind(null,t),t}function of(e,t,n){const r=jr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=jr(e),r=_c(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.xs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(_d(r));const i=new bd(r,e.localStore,t.serializer);let s=await t._c();for(;s;){const e=await i.$u(s);e&&n._updateProgress(e),s=await t._c()}const o=await i.complete();return await Gd(e,o.Bu,void 0),await function(e,t){const n=jr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.xs.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Fu)}catch(e){return Lr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class af{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Eh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Bl(this.persistence,new jl,e.initialUser,this.serializer)}createPersistence(e){return new Al(Nl.Fs,this.serializer)}createSharedClientState(e){return new dh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cf extends af{constructor(e,t,n){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await sf(this.mc.syncEngine),await Kh(this.mc.remoteStore),await this.persistence.hi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return Bl(this.persistence,new jl,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ol(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new Ri(t,this.persistence);return new Di(e.asyncQueue,n)}createPersistence(e){const t=Vl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Gu.withCacheSize(this.cacheSizeBytes):Gu.DEFAULT;return new Ll(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_h(),Ih(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new dh}}class uf extends cf{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof hh&&(this.sharedClientState.syncEngine={$r:Yd.bind(null,t),Mr:tf.bind(null,t),Fr:nf.bind(null,t),bi:ef.bind(null,t),Or:Qd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi((async e=>{await Jd(this.mc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=_h();if(!hh.D(t))throw new Br($r.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Vl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Rd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kd.bind(null,this.syncEngine),await nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hd}createDatastore(e){const t=Eh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new bh(r));var r;return function(e,t,n,r){return new kh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Rd(this.syncEngine,e,0),s=ph.D()?new ph:new fh,new Oh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new xd(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=jr(e);Rr("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Dh(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new zr,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then((e=>{e&&e.ku()?this.metadata.resolve(e.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Nu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(null===e)return null;const t=this.Tc.decode(e),n=Number(t);isNaN(n)&&this.Rc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new yd(JSON.parse(r),e.length+n)}bc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Ac(){for(;this.bc()<0;)if(await this.Pc())break;if(0===this.buffer.length)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Br($r.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=jr(e),r=kc(n.serializer)+"/documents",i={documents:t.map((e=>Tc(n.serializer,e)))},s=await n.fo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=Dc(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Vr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ha(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=ui.fromPath(t);this.mutations.push(new Wa(n,this.precondition(n)))})),await async function(e,t){const n=jr(e),r=kc(n.serializer)+"/documents",i={writes:t.map((e=>Pc(n.serializer,e)))};await n.co("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Fr();t=ii.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Br($r.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ii.min())?Pa.exists(!1):Pa.updateTime(t):Pa.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ii.min()))throw new Br($r.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pa.updateTime(t)}return Pa.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Vc=n.maxAttempts,this.Co=new Th(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao((async()=>{const e=new pf(this.datastore),t=this.Dc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Cc(e)}))))})).catch((e=>{this.Cc(e)}))}))}Dc(e){try{const t=this.updateFunction(e);return!Li(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Sc(),Promise.resolve())))):this.deferred.reject(e)}xc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!tc(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=kr.UNAUTHENTICATED,this.clientId=Zr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Rr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Rr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br($r.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=od(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vf(e,t){e.asyncQueue.verifyOperationInProgress(),Rr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await zl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function yf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bf(e);Rr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>td(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>td(t.remoteStore,n))),e._onlineComponents=t}function wf(e){return"FirebaseError"===e.name?e.code===$r.FAILED_PRECONDITION||e.code===$r.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function bf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Rr("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!wf(n))throw n;Lr("Error using user provided cache. Falling back to memory cache: "+n),await vf(e,new af)}}else Rr("FirestoreClient","Using default OfflineComponentProvider"),await vf(e,new af);return e._offlineComponents}async function _f(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Rr("FirestoreClient","Using user provided OnlineComponentProvider"),await yf(e,e._uninitializedComponentsProvider._online)):(Rr("FirestoreClient","Using default OnlineComponentProvider"),await yf(e,new lf))),e._onlineComponents}function If(e){return bf(e).then((e=>e.persistence))}function Ef(e){return bf(e).then((e=>e.localStore))}function Tf(e){return _f(e).then((e=>e.remoteStore))}function Sf(e){return _f(e).then((e=>e.syncEngine))}function Cf(e){return _f(e).then((e=>e.datastore))}async function xf(e){const t=await _f(e),n=t.eventManager;return n.onListen=kd.bind(null,t.syncEngine),n.onUnlisten=Od.bind(null,t.syncEngine),n}function kf(e){return e.asyncQueue.enqueue((async()=>{const t=await If(e),n=await Tf(e);return t.setNetworkEnabled(!0),function(e){const t=jr(e);return t.du.delete(0),Nh(t)}(n)}))}function Af(e){return e.asyncQueue.enqueue((async()=>{const t=await If(e),n=await Tf(e);return t.setNetworkEnabled(!1),async function(e){const t=jr(e);t.du.add(0),await Dh(t),t.mu.set("Offline")}(n)}))}function Of(e,t){const n=new zr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=jr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Br($r.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=od(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Ef(e),t,n))),n.promise}function Nf(e,t,n={}){const r=new zr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new df({next:s=>{t.enqueueAndForget((()=>fd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Br($r.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Br($r.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new vd(jo(n.path),s,{includeMetadataChanges:!0,xu:!0});return dd(e,o)}(await xf(e),e.asyncQueue,t,n,r))),r.promise}function Df(e,t){const n=new zr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Jl(e,t,!0),i=new Td(t,r.Wi),s=i.zu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=od(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Ef(e),t,n))),n.promise}function Rf(e,t,n={}){const r=new zr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new df({next:n=>{t.enqueueAndForget((()=>fd(e,o))),n.fromCache&&"server"===r.source?i.reject(new Br($r.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new vd(n,s,{includeMetadataChanges:!0,xu:!0});return dd(e,o)}(await xf(e),e.asyncQueue,t,n,r))),r.promise}function Pf(e,t){const n=new df(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).Au.add(t),t.next()}(await xf(e),n))),()=>{n.yc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).Au.delete(t)}(await xf(e),n)))}}function Lf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new ff(e,t)}(function(e,t){if(e instanceof Uint8Array)return hf(e,t);if(e instanceof ArrayBuffer)return hf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),t)}(n,Eh(t));e.asyncQueue.enqueueAndForget((async()=>{of(await Sf(e),i,r)}))}function Mf(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=jr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.xs.getNamedQuery(e,t)))}(await Ef(e),t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ff=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e,t,n){if(!n)throw new Br($r.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Uf(e,t,n,r){if(!0===t&&!0===r)throw new Br($r.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jf(e){if(!ui.isDocumentKey(e))throw new Br($r.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $f(e){if(ui.isDocumentKey(e))throw new Br($r.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Fr()}function zf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Br($r.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bf(e);throw new Br($r.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function qf(e,t){if(t<=0)throw new Br($r.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Br($r.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Br($r.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Uf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br($r.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Br($r.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Gr;switch(e.type){case"firstParty":return new Qr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Br($r.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ff.get(e);t&&(Rr("ComponentProvider","Removing Datastore"),Ff.delete(e),t.terminate())}(this),Promise.resolve()}}function Hf(e,t,n,r={}){var i;const s=(e=zf(e,Kf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=kr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Br($r.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new kr(s)}e._authCredentials=new Kr(new qr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wf(this.firestore,e,this._key)}}class Qf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Qf(this.firestore,e,this._query)}}class Yf extends Qf{constructor(e,t,n){super(e,t,jo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wf(this.firestore,null,new ui(e))}withConverter(e){return new Yf(this.firestore,e,this._path)}}function Jf(e,t,...n){if(e=(0,a.m9)(e),Vf("collection","path",t),e instanceof Kf){const r=oi.fromString(t,...n);return $f(r),new Yf(e,null,r)}{if(!(e instanceof Wf||e instanceof Yf))throw new Br($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(oi.fromString(t,...n));return $f(r),new Yf(e.firestore,null,r)}}function Xf(e,t){if(e=zf(e,Kf),Vf("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Br($r.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Qf(e,null,function(e){return new Vo(oi.emptyPath(),e)}(t))}function Zf(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Zr.A()),Vf("doc","path",t),e instanceof Kf){const r=oi.fromString(t,...n);return jf(r),new Wf(e,null,new ui(r))}{if(!(e instanceof Wf||e instanceof Yf))throw new Br($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(oi.fromString(t,...n));return jf(r),new Wf(e.firestore,e instanceof Yf?e.converter:null,new ui(r))}}function ep(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof Wf||e instanceof Yf)&&(t instanceof Wf||t instanceof Yf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function tp(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof Qf&&t instanceof Qf&&e.firestore===t.firestore&&Qo(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class np{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Th(this,"async_queue_retry"),this.qc=()=>{const e=Ih();e&&Rr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Ih();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Ih();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new zr;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(I){if(!xi(I))throw I;Rr("AsyncQueue","Operation failed with retryable error: "+I)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Pr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=sd.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&Fr()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function rp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class ip{constructor(){this._progressObserver={},this._taskCompletionResolver=new zr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=-1;class op extends Kf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new np,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||up(this),this._firestoreClient.terminate()}}function ap(e,t){const n="object"==typeof e?e:(0,i.getApp)(),r="string"==typeof e?e:t||"(default)",s=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&Hf(s,...e)}return s}function cp(e){return e._firestoreClient||up(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function up(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Rs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new gf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function lp(e,t){wp(e=zf(e,op));const n=cp(e);if(n._uninitializedComponentsProvider)throw new Br($r.FAILED_PRECONDITION,"SDK cache is already specified.");Lr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new lf;return dp(n,i,new cf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function hp(e){wp(e=zf(e,op));const t=cp(e);if(t._uninitializedComponentsProvider)throw new Br($r.FAILED_PRECONDITION,"SDK cache is already specified.");Lr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new lf;return dp(t,r,new uf(r,n.cacheSizeBytes))}function dp(e,t,n){const r=new zr;return e.asyncQueue.enqueue((async()=>{try{await vf(e,n),await yf(e,t),r.resolve()}catch(e){const n=e;if(!wf(n))throw n;Lr("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function fp(e){if(e._initialized&&!e._terminated)throw new Br($r.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new zr;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ti.D())return Promise.resolve();const t=e+"main";await Ti.delete(t)}(Vl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function pp(e){return function(e){const t=new zr;return e.asyncQueue.enqueueAndForget((async()=>Fd(await Sf(e),t))),t.promise}(cp(e=zf(e,op)))}function mp(e){return kf(cp(e=zf(e,op)))}function gp(e){return Af(cp(e=zf(e,op)))}function vp(e,t){const n=cp(e=zf(e,op)),r=new ip;return Lf(n,e._databaseId,t,r),r}function yp(e,t){return Mf(cp(e=zf(e,op)),t).then((t=>t?new Qf(e,null,t.query):null))}function wp(e){if(e._initialized||e._terminated)throw new Br($r.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bp(Ss.fromBase64String(e))}catch(e){throw new Br($r.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bp(Ss.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Br($r.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ci(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Br($r.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Br($r.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ei(this._lat,e._lat)||ei(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=/^__.*__$/;class Sp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new za(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ba(e,this.data,t,this.fieldTransforms)}}class Cp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new za(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class kp{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new kp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Wp(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(xp(this.Yc)&&Tp.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Ap{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Eh(e)}ua(e,t,n,r=!1){return new kp({Yc:e,methodName:t,oa:n,path:ci.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Op(e){const t=e._freezeSettings(),n=Eh(e._databaseId);return new Ap(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Np(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);qp("Data must be an object, but it was:",o,r);const a=Bp(r,o);let c,u;if(s.merge)c=new Is(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Gp(t,r,n);if(!o.contains(i))throw new Br($r.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Qp(e,i)||e.push(i)}c=new Is(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Sp(new no(a),c,u)}class Dp extends Ip{_toFieldTransform(e){if(2!==e.Yc)throw 1===e.Yc?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dp}}function Rp(e,t,n){return new kp({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Pp extends Ip{_toFieldTransform(e){return new Na(e.path,new Ea)}isEqual(e){return e instanceof Pp}}class Lp extends Ip{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Rp(this,e,!0),n=this.ca.map((e=>$p(e,t))),r=new Ta(n);return new Na(e.path,r)}isEqual(e){return this===e}}class Mp extends Ip{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Rp(this,e,!0),n=this.ca.map((e=>$p(e,t))),r=new Ca(n);return new Na(e.path,r)}isEqual(e){return this===e}}class Fp extends Ip{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new ka(e.serializer,ya(e.serializer,this.aa));return new Na(e.path,t)}isEqual(e){return this===e}}function Vp(e,t,n,r){const i=e.ua(1,t,n);qp("Data must be an object, but it was:",i,r);const s=[],o=no.empty();ps(r,((e,r)=>{const c=Hp(t,e,n);r=(0,a.m9)(r);const u=i.na(c);if(r instanceof Dp)s.push(c);else{const e=$p(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new Is(s);return new Cp(o,c,i.fieldTransforms)}function Up(e,t,n,r,i,s){const o=e.ua(1,t,n),c=[Gp(t,r,n)],u=[i];if(s.length%2!=0)throw new Br($r.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Gp(t,s[a])),u.push(s[a+1]);const l=[],h=no.empty();for(let f=c.length-1;f>=0;--f)if(!Qp(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.na(e);if(t instanceof Dp)l.push(e);else{const r=$p(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Is(l);return new Cp(h,d,o.fieldTransforms)}function jp(e,t,n,r=!1){return $p(n,e.ua(r?4:3,t))}function $p(e,t){if(zp(e=(0,a.m9)(e)))return qp("Unsupported field value:",t,e),Bp(e,t);if(e instanceof Ip)return function(e,t){if(!xp(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=$p(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ya(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ri.fromDate(e);return{timestampValue:yc(t.serializer,n)}}if(e instanceof ri){const n=new ri(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:yc(t.serializer,n)}}if(e instanceof Ep)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bp)return{bytesValue:wc(t.serializer,e._byteString)};if(e instanceof Wf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ic(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Bf(e)}`)}(e,t)}function Bp(e,t){const n={};return ms(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ps(e,((e,r)=>{const i=$p(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function zp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ri||e instanceof Ep||e instanceof bp||e instanceof Wf||e instanceof Ip)}function qp(e,t,n){if(!zp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Bf(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function Gp(e,t,n){if((t=(0,a.m9)(t))instanceof _p)return t._internalPath;if("string"==typeof t)return Hp(e,t);throw Wp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kp=new RegExp("[~\\*/\\[\\]]");function Hp(e,t,n){if(t.search(Kp)>=0)throw Wp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _p(...t.split("."))._internalPath}catch(r){throw Wp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Br($r.INVALID_ARGUMENT,a+e+c)}function Qp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Wf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Jp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Jp extends Yp{data(){return super.data()}}function Xp(e,t){return"string"==typeof t?Hp(e,t):t instanceof _p?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Br($r.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class em{}class tm extends em{}function nm(e,t,...n){let r=[];t instanceof em&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof sm)).length,n=e.filter((e=>e instanceof rm)).length;if(t>1||t>0&&n>0)throw new Br($r.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class rm extends tm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new rm(e,t,n)}_apply(e){const t=this._parse(e);return bm(e._query,t),new Qf(e.firestore,e.converter,Ho(e._query,t))}_parse(e){const t=Op(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Br($r.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){wm(o,s);const t=[];for(const n of o)t.push(ym(r,e,n));a={arrayValue:{values:t}}}else a=ym(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||wm(o,s),a=jp(n,t,o,"in"===s||"not-in"===s);return ho.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function im(e,t,n){const r=t,i=Xp("where",e);return rm._create(i,r,n)}class sm extends em{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:fo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)bm(n,i),n=Ho(n,i)}(e._query,t),new Qf(e.firestore,e.converter,Ho(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class om extends tm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new om(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Br($r.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Br($r.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new co(t,n);return function(e,t){if(null===Bo(e)){const n=zo(e);null!==n&&_m(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Qf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Vo(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function am(e,t="asc"){const n=t,r=Xp("orderBy",e);return om._create(r,n)}class cm extends tm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new cm(e,t,n)}_apply(e){return new Qf(e.firestore,e.converter,Wo(e._query,this._limit,this._limitType))}}function um(e){return qf("limit",e),cm._create("limit",e,"F")}function lm(e){return qf("limitToLast",e),cm._create("limitToLast",e,"L")}class hm extends tm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new hm(e,t,n)}_apply(e){const t=vm(e,this.type,this._docOrFields,this._inclusive);return new Qf(e.firestore,e.converter,function(e,t){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function dm(...e){return hm._create("startAt",e,!0)}function fm(...e){return hm._create("startAfter",e,!1)}class pm extends tm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new pm(e,t,n)}_apply(e){const t=vm(e,this.type,this._docOrFields,this._inclusive);return new Qf(e.firestore,e.converter,function(e,t){return new Vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function mm(...e){return pm._create("endBefore",e,!1)}function gm(...e){return pm._create("endAt",e,!0)}function vm(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof Yp)return function(e,t,n,r,i){if(!r)throw new Br($r.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Go(e))if(o.field.isKeyField())s.push(qs(t,r.key));else{const e=r.data.field(o.field);if(Os(e))throw new Br($r.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new Br($r.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new so(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Op(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Br($r.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new Br($r.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!qo(e)&&-1!==s.indexOf("/"))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(oi.fromString(s));if(!ui.isDocumentKey(n))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ui(n);a.push(qs(t,i))}else{const e=jp(n,r,s);a.push(e)}}return new so(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function ym(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Br($r.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qo(t)&&-1!==n.indexOf("/"))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(oi.fromString(n));if(!ui.isDocumentKey(r))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qs(e,new ui(r))}if(n instanceof Wf)return qs(e,n._key);throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bf(n)}.`)}function wm(e,t){if(!Array.isArray(e)||0===e.length)throw new Br($r.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bm(e,t){if(t.isInequality()){const n=zo(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Br($r.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Bo(e);null!==i&&_m(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Br($r.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Br($r.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function _m(e,t,n){if(!n.isEqual(t))throw new Br($r.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Im{convertValue(e,t="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ks(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fr()}}convertObject(e,t){const n={};return ps(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ep(ks(e.latitude),ks(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ns(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const t=xs(e);return new ri(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=oi.fromString(e);Vr(Qc(n));const r=new Ps(n.get(1),n.get(3)),i=new ui(n.popFirst(5));return r.isEqual(t)||Pr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Tm extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new bp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cm extends Yp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class xm extends Cm{data(e={}){return super.data(e)}}class km{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Sm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new xm(this._firestore,this._userDataWriter,n.key,n,new Sm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Br($r.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new xm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Sm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new xm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Sm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Am(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Am(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}function Om(e,t){return e instanceof Cm&&t instanceof Cm?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof km&&t instanceof km&&e._firestore===t._firestore&&tp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e){e=zf(e,Wf);const t=zf(e.firestore,op);return Nf(cp(t),e._key).then((n=>Gm(t,e,n)))}class Dm extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new bp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wf(this.firestore,null,t)}}function Rm(e){e=zf(e,Wf);const t=zf(e.firestore,op),n=cp(t),r=new Dm(t);return Of(n,e._key).then((n=>new Cm(t,r,e._key,n,new Sm(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Pm(e){e=zf(e,Wf);const t=zf(e.firestore,op);return Nf(cp(t),e._key,{source:"server"}).then((n=>Gm(t,e,n)))}function Lm(e){e=zf(e,Qf);const t=zf(e.firestore,op),n=cp(t),r=new Dm(t);return Zp(e._query),Rf(n,e._query).then((n=>new km(t,r,e,n)))}function Mm(e){e=zf(e,Qf);const t=zf(e.firestore,op),n=cp(t),r=new Dm(t);return Df(n,e._query).then((n=>new km(t,r,e,n)))}function Fm(e){e=zf(e,Qf);const t=zf(e.firestore,op),n=cp(t),r=new Dm(t);return Rf(n,e._query,{source:"server"}).then((n=>new km(t,r,e,n)))}function Vm(e,t,n){e=zf(e,Wf);const r=zf(e.firestore,op),i=Em(e.converter,t,n);return qm(r,[Np(Op(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Pa.none())])}function Um(e,t,n,...r){e=zf(e,Wf);const i=zf(e.firestore,op),s=Op(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof _p?Up(s,"updateDoc",e._key,t,n,r):Vp(s,"updateDoc",e._key,t),qm(i,[o.toMutation(e._key,Pa.exists(!0))])}function jm(e){return qm(zf(e.firestore,op),[new Ha(e._key,Pa.none())])}function $m(e,t){const n=zf(e.firestore,op),r=Zf(e),i=Em(e.converter,t);return qm(n,[Np(Op(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Pa.exists(!1))]).then((()=>r))}function Bm(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||rp(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(rp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Wf)l=zf(e.firestore,op),h=jo(e._key.path),u={next:n=>{t[o]&&t[o](Gm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=zf(e,Qf);l=zf(n.firestore,op),h=n._query;const r=new Dm(l);u={next:e=>{t[o]&&t[o](new km(l,r,n,e))},error:t[o+1],complete:t[o+2]},Zp(e._query)}return function(e,t,n,r){const i=new df(r),s=new vd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>dd(await xf(e),s))),()=>{i.yc(),e.asyncQueue.enqueueAndForget((async()=>fd(await xf(e),s)))}}(cp(l),h,c,u)}function zm(e,t){return Pf(cp(e=zf(e,op)),rp(t)?t:{next:t})}function qm(e,t){return function(e,t){const n=new zr;return e.asyncQueue.enqueueAndForget((async()=>Nd(await Sf(e),t,n))),n.promise}(cp(e),t)}function Gm(e,t,n){const r=n.docs.get(t._key),i=new Dm(e);return new Cm(e,i,t._key,r,new Sm(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Km={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Op(e)}set(e,t,n){this._verifyNotCommitted();const r=Wm(e,this._firestore),i=Em(r.converter,t,n),s=Np(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Pa.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Wm(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof _p?Up(this._dataReader,"WriteBatch.update",i._key,t,n,r):Vp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Pa.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wm(e,this._firestore);return this._mutations=this._mutations.concat(new Ha(t._key,Pa.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Br($r.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wm(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new Br($r.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Op(e)}get(e){const t=Wm(e,this._firestore),n=new Tm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Fr();const r=e[0];if(r.isFoundDocument())return new Yp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Yp(this._firestore,n,t._key,null,t.converter);throw Fr()}))}set(e,t,n){const r=Wm(e,this._firestore),i=Em(r.converter,t,n),s=Np(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Wm(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof _p?Up(this._dataReader,"Transaction.update",i._key,t,n,r):Vp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Wm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Wm(e,this._firestore),n=new Dm(this._firestore);return super.get(e).then((e=>new Cm(this._firestore,n,t._key,e._document,new Sm(!1,!1),t.converter)))}}function Ym(e,t,n){e=zf(e,op);const r=Object.assign(Object.assign({},Km),n);return function(e){if(e.maxAttempts<1)throw new Br($r.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new zr;return e.asyncQueue.enqueueAndForget((async()=>{const i=await Cf(e);new mf(e.asyncQueue,i,n,t,r).run()})),r.promise}(cp(e),(n=>t(new Qm(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return new Dp("deleteField")}function Xm(){return new Pp("serverTimestamp")}function Zm(...e){return new Lp("arrayUnion",e)}function eg(...e){return new Mp("arrayRemove",e)}function tg(e){return new Fp("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Ar=e}(i.SDK_VERSION),(0,i._registerComponent)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new op(new Hr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Br($r.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(xr,"3.10.0",e),(0,i.registerVersion)(xr,"3.10.0","esm2017")}()},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return _},G6:function(){return O},L:function(){return c},LL:function(){return L},P0:function(){return y},Pz:function(){return b},Sg:function(){return I},UG:function(){return S},ZB:function(){return l},ZR:function(){return P},aH:function(){return w},b$:function(){return k},eu:function(){return D},hl:function(){return N},jU:function(){return C},m9:function(){return Q},ne:function(){return G},pd:function(){return q},q4:function(){return v},r3:function(){return V},ru:function(){return x},tV:function(){return u},uI:function(){return T},vZ:function(){return j},w1:function(){return A},xO:function(){return B},xb:function(){return U},z$:function(){return E},zd:function(){return z}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},y=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},w=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function C(){return"object"===typeof self&&self.self===self}function x(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!S()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function D(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function M(e,t){return e.replace(F,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if($(n)&&$(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){const n=new K(e,t);return n.subscribe.bind(n)}class K{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}},2631:function(e,t,n){"use strict";n.d(t,{ZP:function(){return It}});n(7658),n(541);function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,i),matched:e?v(e):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||d;return(n||"/")+s(r)+i}function w(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)}))}function _(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function E(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&S(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),E(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(v,o,u,y)),a(v,o,i)}};function S(e,t,n,i){var s=t.props=C(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function x(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Y,D=F,R=V,P=$,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:I?z(I):v?".*":"[^"+B(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function V(e,t){return $(F(e,t),t)}function U(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function j(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function $(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",G(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?U:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?j(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function q(e,t){return e.keys=t,e}function G(e){return e&&e.sensitive?"":"i"}function K(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(e,t)}function H(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",G(n));return q(s,t)}function W(e,t,n){return Q(F(e,n),t,n)}function Q(e,t,n){O(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,G(n)),t)}function Y(e,t,n){return O(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?K(e,t):O(e)?H(e,t,n):W(e,t,n)}N.parse=D,N.compile=R,N.tokensToFunction=P,N.tokensToRegExp=L;var J=Object.create(null);function X(e,t,n){t=t||{};try{var r=J[e]||(J[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Z(e,t,n,i){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=r({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){s=r({},s),s._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=X(c,a,"path "+t.path)}else 0;return s}var l=k(s.path||""),h=t&&t.path||"/",d=l.path?x(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(i,v);var y=u[g]?this.ariaCurrentValue:null,b=function(e){se(e)&&(t.replace?n.replace(o,re):n.push(o,re))},I={click:se};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=b})):I[this.event]=b;var E={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[g]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)E.on=I,E.attrs={href:c,"aria-current":y};else{var S=oe(this.$slots.default);if(S){S.isStatic=!1;var C=S.data=r({},S.data);for(var x in C.on=C.on||{},C.on){var k=C.on[x];x in I&&(C.on[x]=Array.isArray(k)?k:[k])}for(var A in I)A in C.on?C.on[A].push(I[A]):C.on[A]=b;var O=S.data.attrs=r({},S.data.attrs);O.href=c,O["aria-current"]=y}else E.on=I}return e(this.tag,E,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",T),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(s,o,a,e,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?A(s+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=N(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){ue(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],r,i,s,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,o){var a=Z(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),g=X(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=X(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return x(e,t.parent?t.parent.path:"/",!0)}var ge=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return ge.now().toFixed(3)}var ye=ve();function we(){return ye}function be(e){return ye=e}var _e=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=we(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Se),function(){window.removeEventListener("popstate",Se)}}function Ee(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=Ce(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then((function(e){Re(e,s)})).catch((function(e){0})):Re(o,s))}))}}function Te(){var e=we();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function Se(e){Te(),e.state&&e.state.key&&be(e.state.key)}function Ce(){var e=we();if(e)return _e[e]}function xe(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function ke(e){return Ne(e.x)||Ne(e.y)}function Ae(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function Oe(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var De=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=De.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Oe(i),t=xe(r,i)}else ke(e)&&(t=Ae(e))}else n&&ke(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Pe=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Te();var n=window.history;try{if(t){var i=r({},n.state);i.key=we(),n.replaceState(i,"",e)}else n.pushState({key:be(ve())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Me(e){Le(e,!0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return Be(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+qe(t)+'" via a navigation guard.')}function Ue(e,t){var n=Be(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function je(e,t){return Be(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function $e(e,t){return Be(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Be(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function qe(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Ge(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return Ge(e)&&e._isRouter&&(null==t||e.type===t)}function He(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function We(e){return function(t,n,r){var i=!1,s=0,o=null;Qe(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=Ze((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&r()})),l=Ze((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=Ge(e)?e:new Error(t),r(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qe(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Qe(e,(function(e,r,i,s){var o=it(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Ye(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return rt(e,"beforeRouteLeave",at,!0)}function ot(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ke(e,Fe.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s=function(e){!Ke(e)&&Ge(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=i.matched.length-1;if(w(e,i)&&o===a&&e.matched[o]===i.matched[a])return this.ensureURL(),e.hash&&Ee(this.router,i,e,!1),s(Ue(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),We(h)),f=function(t,n){if(r.pending!==e)return s(je(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),s($e(i,e))):Ge(t)?(r.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(o){s(o)}};He(d,f,(function(){var n=ct(h),o=n.concat(r.router.resolveHooks);He(o,f,(function(){if(r.pending!==e)return s(je(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){E(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=g,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===g&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ee(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Le(A(r.base+e.fullPath)),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Me(A(r.base+e.fullPath)),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Le(t):Me(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Pe&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&Ee(e.router,n,t,!0),Pe||yt(n.fullPath)}))},s=Pe?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ee(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){Pe?Le(gt(e)):window.location.hash=e}function yt(e){Pe?Me(gt(e)):window.location.replace(gt(e))}var wt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ke(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Pe&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new wt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=Pe&&i;s&&"fullPath"in e&&Ee(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return Et(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return Et(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return Et(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Z(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Tt(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,_t);var It=bt;function Et(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tt(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}bt.install=ae,bt.version="3.6.5",bt.isNavigationFailure=Ke,bt.NavigationFailureType=Fe,bt.START_LOCATION=g,ce&&window.Vue&&window.Vue.use(bt)},6369:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Zr},iH:function(){return He}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function s(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function g(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function y(e){var t=parseFloat(e);return isNaN(t)?e:t}function w(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}w("slot,component",!0);var b=w("key,ref,slot,slot-scope,is");function _(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var I=Object.prototype.hasOwnProperty;function E(e,t){return I.call(e,t)}function T(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var S=/-(\w)/g,C=T((function(e){return e.replace(S,(function(e,t){return t?t.toUpperCase():""}))})),x=T((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,A=T((function(e){return e.replace(k,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function N(e,t){return e.bind(t)}var D=Function.prototype.bind?N:O;function R(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function P(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&P(t,e[n]);return t}function M(e,t,n){}var F=function(e,t,n){return!1},V=function(e){return e};function U(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return U(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return U(e[n],t[n])}))}catch(c){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(U(e[n],t))return n;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function B(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",q=["component","directive","filter"],G=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:M,parsePlatformTagName:V,mustUseProp:F,async:!0,_lifecycleHooks:G},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Q(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=new RegExp("[^".concat(H.source,".$_\\d]"));function J(e){if(!Y.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var X="__proto__"in{},Z="undefined"!==typeof window,ee=Z&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var se,oe=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(Z)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(ea){}var le=function(){return void 0===se&&(se=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),se},he=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ge(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ve=function(){function e(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ye=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function we(e){return new ve(void 0,void 0,void 0,String(e))}function be(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var _e=0,Ie=[],Ee=function(){for(var e=0;e<Ie.length;e++){var t=Ie[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ie.length=0},Te=function(){function e(){this._pending=!1,this.id=_e++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ie.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Te.target=null;var Se=[];function Ce(e){Se.push(e),Te.target=e}function xe(){Se.pop(),Te.target=Se[Se.length-1]}var ke=Array.prototype,Ae=Object.create(ke),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach((function(e){var t=ke[e];Q(Ae,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Ne=Object.getOwnPropertyNames(Ae),De={},Re=!0;function Pe(e){Re=e}var Le={notify:M,depend:M,addSub:M,removeSub:M},Me=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Le:new Te,this.vmCount=0,Q(e,"__ob__",this),i(e)){if(!n)if(X)e.__proto__=Ae;else for(var r=0,s=Ne.length;r<s;r++){var o=Ne[r];Q(e,o,Ae[o])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){o=a[r];Ve(e,o,De,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Fe(e[t],!1,this.mock)},e}();function Fe(e,t,n){return e&&E(e,"__ob__")&&e.__ob__ instanceof Me?e.__ob__:!Re||!n&&le()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||Ke(e)||e instanceof ve?void 0:new Me(e,t,n)}function Ve(e,t,n,r,s,o){var a=new Te,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==De&&2!==arguments.length||(n=e[t]);var h=!s&&Fe(n,!1,o);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Te.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&$e(t))),Ke(t)&&!s?t.value:t},set:function(t){var r=u?u.call(e):n;if(B(r,t)){if(l)l.call(e,t);else{if(u)return;if(!s&&Ke(r)&&!Ke(t))return void(r.value=t);n=t}h=!s&&Fe(t,!1,o),a.notify()}}}),a}}function Ue(e,t,n){if(!qe(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Fe(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(Ve(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function je(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||qe(e)||E(e,t)&&(delete e[t],n&&n.dep.notify())}}function $e(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&$e(t)}function Be(e){return ze(e,!0),Q(e,"__v_isShallow",!0),e}function ze(e,t){if(!qe(e)){Fe(e,t,le());0}}function qe(e){return!(!e||!e.__v_isReadonly)}var Ge="__v_isRef";function Ke(e){return!(!e||!0!==e.__v_isRef)}function He(e){return We(e,!1)}function We(e,t){if(Ke(e))return e;var n={};return Q(n,Ge,!0),Q(n,"__v_isShallow",t),Q(n,"dep",Ve(n,"value",e,null,t,le())),n}function Qe(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Ke(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Ke(r)&&!Ke(e)?r.value=e:t[n]=e}})}var Ye="watcher";"".concat(Ye," callback"),"".concat(Ye," getter"),"".concat(Ye," cleanup");var Je;var Xe=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Je;try{return Je=this,e()}finally{Je=t}}else 0},e.prototype.on=function(){Je=this},e.prototype.off=function(){Je=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Ze(e,t){void 0===t&&(t=Je),t&&t.active&&t.effects.push(e)}function et(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var tt=T((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function nt(e,t){function n(){var e=n.fns;if(!i(e))return Xt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),s=0;s<r.length;s++)Xt(r[s],null,arguments,t,"v-on handler")}return n.fns=e,n}function rt(e,t,n,r,i,o){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=tt(c),s(u)||(s(l)?(s(u.fns)&&(u=e[c]=nt(u,o)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)s(e[c])&&(h=tt(c),r(h.name,t[c],h.capture))}function it(e,t,n){var r;e instanceof ve&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),_(r.fns,c)}s(i)?r=nt([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=nt([i,c]),r.merged=!0,e[t]=r}function st(e,t,n){var r=t.options.props;if(!s(r)){var i={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var u in r){var l=A(u);ot(i,c,u,l,!0)||ot(i,a,u,l,!1)}return i}}function ot(e,t,n,r,i){if(o(t)){if(E(t,n))return e[n]=t[n],i||delete t[n],!0;if(E(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function at(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ct(e){return u(e)?[we(e)]:i(e)?lt(e):void 0}function ut(e){return o(e)&&o(e.text)&&c(e.isComment)}function lt(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=lt(r,"".concat(t||"","_").concat(n)),ut(r[0])&&ut(l)&&(h[c]=we(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ut(l)?h[c]=we(l.text+r):""!==r&&h.push(we(r)):ut(r)&&ut(l)?h[c]=we(l.text+r.text):(a(e._isVList)&&o(r.tag)&&s(r.key)&&o(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ht(e,t){var n,r,s,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(s=Object.keys(e),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=t(e[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function dt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=P(P({},r),n)),i=s(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function ft(e){return Cr(this.$options,"filters",e,!0)||V}function pt(e,t){return i(e)?-1===e.indexOf(t):e!==t}function mt(e,t,n,r,i){var s=K.keyCodes[t]||n;return i&&r&&!K.keyCodes[t]?pt(i,r):s?pt(s,e):r?A(r)!==t:void 0===e}function gt(e,t,n,r,s){if(n)if(h(n)){i(n)&&(n=L(n));var o=void 0,a=function(i){if("class"===i||"style"===i||b(i))o=e;else{var a=e.attrs&&e.attrs.type;o=r||K.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=C(i),u=A(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function vt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),wt(r,"__static__".concat(e),!1)),r}function yt(e,t,n){return wt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function wt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&bt(e[r],"".concat(t,"_").concat(r),n);else bt(e,t,n)}function bt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function _t(e,t){if(t)if(f(t)){var n=e.on=e.on?P({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function It(e,t,n,r){t=t||{$stable:!n};for(var s=0;s<e.length;s++){var o=e[s];i(o)?It(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Et(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"===typeof e?t+e:e}function St(e){e._o=yt,e._n=y,e._s=v,e._l=ht,e._t=dt,e._q=U,e._i=j,e._m=vt,e._f=ft,e._k=mt,e._b=gt,e._v=we,e._e=ye,e._u=It,e._g=_t,e._d=Et,e._p=Tt}function Ct(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(xt)&&delete n[u];return n}function xt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function kt(e){return e.isComment&&e.asyncFactory}function At(e,t,n,i){var s,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},t)t[u]&&"$"!==u[0]&&(s[u]=Ot(e,n,u,t[u]))}else s={};for(var l in n)l in s||(s[l]=Nt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=s),Q(s,"$stable",a),Q(s,"$key",c),Q(s,"$hasNormal",o),s}function Ot(e,t,n,r){var s=function(){var t=me;ge(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ct(n);var s=n&&n[0];return ge(t),n&&(!s||1===n.length&&s.isComment&&!kt(s))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:s,enumerable:!0,configurable:!0}),s}function Nt(e,t){return function(){return e[t]}}function Dt(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Rt(e);ge(e),Ce();var i=Xt(n,null,[e._props||Be({}),r],e,"setup");if(xe(),ge(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var s=e._setupProxy={};for(var o in i)"__sfc"!==o&&Qe(s,i,o)}else for(var o in i)W(o)||Qe(e,i,o);else 0}}function Rt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Q(t,"_v_attr_proxy",!0),Pt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Pt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Mt(e)},emit:D(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return Qe(e,t,n)}))}}}function Pt(e,t,n,r,i){var s=!1;for(var o in t)o in e?t[o]!==n[o]&&(s=!0):(s=!0,Lt(e,o,r,i));for(var o in e)o in t||(s=!0,delete e[o]);return s}function Lt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Mt(e){return e._slotsProxy||Ft(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Ft(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Vt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=Ct(t._renderChildren,i),e.$scopedSlots=n?At(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Ht(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ht(e,t,n,r,i,!0)};var s=n&&n.data;Ve(e,"$attrs",s&&s.attrs||r,null,!0),Ve(e,"$listeners",t._parentListeners||r,null,!0)}var Ut=null;function jt(e){St(e.prototype),e.prototype.$nextTick=function(e){return hn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,s=n._parentVnode;s&&t._isMounted&&(t.$scopedSlots=At(t.$parent,s.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Ft(t._slotsProxy,t.$scopedSlots)),t.$vnode=s;try{ge(t),Ut=t,e=r.call(t._renderProxy,t.$createElement)}catch(ea){Jt(ea,t,"render"),e=t._vnode}finally{Ut=null,ge()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=ye()),e.parent=s,e}}function $t(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Bt(e,t,n,r,i){var s=ye();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function zt(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Ut;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=$((function(n){e.resolved=$t(n,t),i?r.length=0:l(!0)})),f=$((function(t){o(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(g(p)?s(e.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(e.errorComp=$t(p.error,t)),o(p.loading)&&(e.loadingComp=$t(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,s(e.resolved)&&s(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function qt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||kt(n)))return n}}var Gt=1,Kt=2;function Ht(e,t,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=Kt),Wt(e,t,n,r,s)}function Wt(e,t,n,r,s){if(o(n)&&o(n.__ob__))return ye();if(o(n)&&o(n.is)&&(t=n.is),!t)return ye();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===Kt?r=ct(r):s===Gt&&(r=at(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||K.getTagNamespace(t),a=K.isReservedTag(t)?new ve(K.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(u=Cr(e.$options,"components",t))?new ve(t,n,r,void 0,void 0,e):ur(u,n,e,r,t)}else a=ur(t,n,e,r);return i(a)?a:o(a)?(o(c)&&Qt(a,c),o(n)&&Yt(n),a):ye()}function Qt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Qt(c,t,n)}}function Yt(e){h(e.style)&&gn(e.style),h(e.class)&&gn(e.class)}function Jt(e,t,n){Ce();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(ea){Zt(ea,r,"errorCaptured hook")}}}Zt(e,t,n)}finally{xe()}}function Xt(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(e){return Jt(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(ea){Jt(ea,r,i)}return s}function Zt(e,t,n){if(K.errorHandler)try{return K.errorHandler.call(null,e,t,n)}catch(ea){ea!==e&&en(ea,null,"config.errorHandler")}en(e,t,n)}function en(e,t,n){if(!Z||"undefined"===typeof console)throw e;console.error(e)}var tn,nn=!1,rn=[],sn=!1;function on(){sn=!1;var e=rn.slice(0);rn.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var an=Promise.resolve();tn=function(){an.then(on),ie&&setTimeout(M)},nn=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(on)}:function(){setTimeout(on,0)};else{var cn=1,un=new MutationObserver(on),ln=document.createTextNode(String(cn));un.observe(ln,{characterData:!0}),tn=function(){cn=(cn+1)%2,ln.data=String(cn)},nn=!0}function hn(e,t){var n;if(rn.push((function(){if(e)try{e.call(t)}catch(ea){Jt(ea,t,"nextTick")}else n&&n(t)})),sn||(sn=!0,tn()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function dn(e){return function(t,n){if(void 0===n&&(n=me),n)return fn(n,e,t)}}function fn(e,t,n){var r=e.$options;r[t]=yr(r[t],n)}dn("beforeMount"),dn("mounted"),dn("beforeUpdate"),dn("updated"),dn("beforeDestroy"),dn("destroyed"),dn("activated"),dn("deactivated"),dn("serverPrefetch"),dn("renderTracked"),dn("renderTriggered"),dn("errorCaptured");var pn="2.7.14";var mn=new fe;function gn(e){return vn(e,mn),mn.clear(),e}function vn(e,t){var n,r,s=i(e);if(!(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(s){n=e.length;while(n--)vn(e[n],t)}else if(Ke(e))vn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)vn(e[r[n]],t)}}}var yn,wn=0,bn=function(){function e(e,t,n,r,i){Ze(this,Je&&!Je._vm?Je:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++wn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=J(t),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ce(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ea){if(!this.user)throw ea;Jt(ea,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&gn(e),xe(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function _n(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Sn(e,t)}function In(e,t){yn.$on(e,t)}function En(e,t){yn.$off(e,t)}function Tn(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Sn(e,t,n){yn=e,rt(t,n||{},In,En,Tn,e),yn=void 0}function Cn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var s=0,o=e.length;s<o;s++)r.$on(e[s],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,s=e.length;r<s;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(o=a[c],o===t||o.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(e,'"'),s=0,o=n.length;s<o;s++)Xt(n[s],t,r,t,i)}return t}}var xn=null;function kn(e){var t=xn;return xn=e,function(){xn=t}}function An(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function On(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=kn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Mn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||_(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Mn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Nn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=ye),Mn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Mn(e,"beforeUpdate")}};new bn(e,r,M,i,!0),n=!1;var s=e._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==e.$vnode&&(e._isMounted=!0,Mn(e,"mounted")),e}function Dn(e,t,n,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s;var h=i.data.attrs||r;e._attrsProxy&&Pt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Pt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,Sn(e,n,d),t&&e.$options.props){Pe(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=e.$options.props;f[g]=xr(g,v,t,e)}Pe(!0),e.$options.propsData=t}u&&(e.$slots=Ct(s,i.context),e.$forceUpdate())}function Rn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pn(e,t){if(t){if(e._directInactive=!1,Rn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);Mn(e,"activated")}}function Ln(e,t){if((!t||(e._directInactive=!0,!Rn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Ln(e.$children[n]);Mn(e,"deactivated")}}function Mn(e,t,n,r){void 0===r&&(r=!0),Ce();var i=me;r&&ge(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var a=0,c=s.length;a<c;a++)Xt(s[a],e,n||null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),r&&ge(i),xe()}var Fn=[],Vn=[],Un={},jn=!1,$n=!1,Bn=0;function zn(){Bn=Fn.length=Vn.length=0,Un={},jn=$n=!1}var qn=0,Gn=Date.now;if(Z&&!te){var Kn=window.performance;Kn&&"function"===typeof Kn.now&&Gn()>document.createEvent("Event").timeStamp&&(Gn=function(){return Kn.now()})}var Hn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Wn(){var e,t;for(qn=Gn(),$n=!0,Fn.sort(Hn),Bn=0;Bn<Fn.length;Bn++)e=Fn[Bn],e.before&&e.before(),t=e.id,Un[t]=null,e.run();var n=Vn.slice(),r=Fn.slice();zn(),Jn(n),Qn(r),Ee(),he&&K.devtools&&he.emit("flush")}function Qn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function Yn(e){e._inactive=!1,Vn.push(e)}function Jn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Pn(e[t],!0)}function Xn(e){var t=e.id;if(null==Un[t]&&(e!==Te.target||!e.noRecurse)){if(Un[t]=!0,$n){var n=Fn.length-1;while(n>Bn&&Fn[n].id>e.id)n--;Fn.splice(n+1,0,e)}else Fn.push(e);jn||(jn=!0,hn(Wn))}}function Zn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=et(e),i=pe?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function er(e){var t=tr(e.$options.inject,e);t&&(Pe(!1),Object.keys(t).forEach((function(n){Ve(e,n,t[n])})),Pe(!0))}function tr(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from;if(o in t._provided)n[s]=t._provided[o];else if("default"in e[s]){var a=e[s].default;n[s]=l(a)?a.call(t):a}else 0}}return n}}function nr(e,t,n,s,o){var c,u=this,l=o.options;E(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=s,this.listeners=e.on||r,this.injections=tr(l.inject,s),this.slots=function(){return u.$slots||At(s,e.scopedSlots,u.$slots=Ct(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return At(s,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=At(s,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var o=Ht(c,e,t,n,r,d);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(e,t,n,r){return Ht(c,e,t,n,r,d)}}function rr(e,t,n,s,a){var c=e.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=xr(h,l,t||r);else o(n.attrs)&&sr(u,n.attrs),o(n.props)&&sr(u,n.props);var d=new nr(n,u,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof ve)return ir(f,n,d.parent,c,d);if(i(f)){for(var p=ct(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=ir(p[g],n,d.parent,c,d);return m}}function ir(e,t,n,r,i){var s=be(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function sr(e,t){for(var n in t)e[C(n)]=t[n]}function or(e){return e.name||e.__name||e._componentTag}St(nr.prototype);var ar={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ar.prepatch(n,n)}else{var r=e.componentInstance=lr(e,xn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Dn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Yn(n):Pn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Ln(t,!0):t.$destroy())}},cr=Object.keys(ar);function ur(e,t,n,r,i){if(!s(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(s(e.cid)&&(u=e,e=zt(u,c),void 0===e))return Bt(u,t,n,r,i);t=t||{},Jr(e),o(t.model)&&fr(e.options,t);var l=st(t,e,i);if(a(e.options.functional))return rr(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}hr(t);var p=or(e.options)||i,m=new ve("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function lr(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function hr(e){for(var t=e.hook||(e.hook={}),n=0;n<cr.length;n++){var r=cr[n],i=t[r],s=ar[r];i===s||i&&i._merged||(t[r]=i?dr(s,i):s)}}function dr(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function fr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),a=s[r],c=t.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var pr=M,mr=K.optionMergeStrategies;function gr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,s,o=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=e[r],s=t[r],n&&E(e,r)?i!==s&&f(i)&&f(s)&&gr(i,s):Ue(e,r,s));return e}function vr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?gr(r,i):i}:t?e?function(){return gr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function yr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?wr(n):n}function wr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function br(e,t,n,r){var i=Object.create(e||null);return t?P(i,t):i}mr.data=function(e,t,n){return n?vr(e,t,n):t&&"function"!==typeof t?e:vr(e,t)},G.forEach((function(e){mr[e]=yr})),q.forEach((function(e){mr[e+"s"]=br})),mr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var s={};for(var o in P(s,e),t){var a=s[o],c=t[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},mr.props=mr.methods=mr.inject=mr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return P(i,e),t&&P(i,t),i},mr.provide=function(e,t){return e?function(){var n=Object.create(null);return gr(n,l(e)?e.call(this):e),t&&gr(n,l(t)?t.call(this):t,!1),n}:t};var _r=function(e,t){return void 0===t?e:t};function Ir(e,t){var n=e.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=C(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=C(c),a[o]=f(s)?s:{type:s};else 0;e.props=a}}function Er(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?P({from:o},a):{from:a}}else 0}}function Tr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Sr(e,t,n){if(l(t)&&(t=t.options),Ir(t,n),Er(t,n),Tr(t),!t._base&&(t.extends&&(e=Sr(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Sr(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)E(e,s)||a(s);function a(r){var i=mr[r]||_r;o[r]=i(e[r],t[r],n,r)}return o}function Cr(e,t,n,r){if("string"===typeof n){var i=e[t];if(E(i,n))return i[n];var s=C(n);if(E(i,s))return i[s];var o=x(s);if(E(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function xr(e,t,n,r){var i=t[e],s=!E(n,e),o=n[e],a=Dr(Boolean,i.type);if(a>-1)if(s&&!E(i,"default"))o=!1;else if(""===o||o===A(e)){var c=Dr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=kr(r,i,e);var u=Re;Pe(!0),Fe(o),Pe(u)}return o}function kr(e,t,n){if(E(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Or(t.type)?r.call(e):r}}var Ar=/^\s*function (\w+)/;function Or(e){var t=e&&e.toString().match(Ar);return t?t[1]:""}function Nr(e,t){return Or(e)===Or(t)}function Dr(e,t){if(!i(t))return Nr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Nr(t[n],e))return n;return-1}var Rr={enumerable:!0,configurable:!0,get:M,set:M};function Pr(e,t,n){Rr.get=function(){return this[t][n]},Rr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Rr)}function Lr(e){var t=e.$options;if(t.props&&Mr(e,t.props),Dt(e),t.methods&&qr(e,t.methods),t.data)Fr(e);else{var n=Fe(e._data={});n&&n.vmCount++}t.computed&&jr(e,t.computed),t.watch&&t.watch!==ae&&Gr(e,t.watch)}function Mr(e,t){var n=e.$options.propsData||{},r=e._props=Be({}),i=e.$options._propKeys=[],s=!e.$parent;s||Pe(!1);var o=function(s){i.push(s);var o=xr(s,t,n,e);Ve(r,s,o),s in e||Pr(e,"_props",s)};for(var a in t)o(a);Pe(!0)}function Fr(e){var t=e.$options.data;t=e._data=l(t)?Vr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&E(r,s)||W(s)||Pr(e,"_data",s)}var o=Fe(t);o&&o.vmCount++}function Vr(e,t){Ce();try{return e.call(t,t)}catch(ea){return Jt(ea,t,"data()"),{}}finally{xe()}}var Ur={lazy:!0};function jr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var s=t[i],o=l(s)?s:s.get;0,r||(n[i]=new bn(e,o||M,M,Ur)),i in e||$r(e,i,s)}}function $r(e,t,n){var r=!le();l(n)?(Rr.get=r?Br(t):zr(n),Rr.set=M):(Rr.get=n.get?r&&!1!==n.cache?Br(t):zr(n.get):M,Rr.set=n.set||M),Object.defineProperty(e,t,Rr)}function Br(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Te.target&&t.depend(),t.value}}function zr(e){return function(){return e.call(this,this)}}function qr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?M:D(t[n],e)}function Gr(e,t){for(var n in t){var r=t[n];if(i(r))for(var s=0;s<r.length;s++)Kr(e,n,r[s]);else Kr(e,n,r)}}function Kr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Hr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ue,e.prototype.$delete=je,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return Kr(r,e,t,n);n=n||{},n.user=!0;var i=new bn(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');Ce(),Xt(t,r,[i.value],r,s),xe()}return function(){i.teardown()}}}var Wr=0;function Qr(e){e.prototype._init=function(e){var t=this;t._uid=Wr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Xe(!0),t._scope._vm=!0,e&&e._isComponent?Yr(t,e):t.$options=Sr(Jr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,An(t),_n(t),Vt(t),Mn(t,"beforeCreate",void 0,!1),er(t),Lr(t),Zn(t),Mn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Yr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Jr(e){var t=e.options;if(e.super){var n=Jr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Xr(e);i&&P(e.extendOptions,i),t=e.options=Sr(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Xr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Zr(e){this._init(e)}function ei(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function ti(e){e.mixin=function(e){return this.options=Sr(this.options,e),this}}function ni(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=or(e)||or(n.options);var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Sr(n.options,e),o["super"]=n,o.options.props&&ri(o),o.options.computed&&ii(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,q.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=P({},o.options),i[r]=o,o}}function ri(e){var t=e.options.props;for(var n in t)Pr(e.prototype,"_props",n)}function ii(e){var t=e.options.computed;for(var n in t)$r(e.prototype,n,t[n])}function si(e){q.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function oi(e){return e&&(or(e.Ctor.options)||e.tag)}function ai(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function ci(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&ui(n,s,r,i)}}}function ui(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,_(n,t)}Qr(Zr),Hr(Zr),Cn(Zr),On(Zr),jt(Zr);var li=[String,RegExp,Array],hi={name:"keep-alive",abstract:!0,props:{include:li,exclude:li,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:oi(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&ui(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ui(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){ci(e,(function(e){return ai(t,e)}))})),this.$watch("exclude",(function(t){ci(e,(function(e){return!ai(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var r=oi(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!ai(s,r))||o&&r&&ai(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},di={KeepAlive:hi};function fi(e){var t={get:function(){return K}};Object.defineProperty(e,"config",t),e.util={warn:pr,extend:P,mergeOptions:Sr,defineReactive:Ve},e.set=Ue,e.delete=je,e.nextTick=hn,e.observable=function(e){return Fe(e),e},e.options=Object.create(null),q.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,P(e.options.components,di),ei(e),ti(e),ni(e),si(e)}fi(Zr),Object.defineProperty(Zr.prototype,"$isServer",{get:le}),Object.defineProperty(Zr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Zr,"FunctionalRenderContext",{value:nr}),Zr.version=pn;var pi=w("style,class"),mi=w("input,textarea,option,select,progress"),gi=function(e,t,n){return"value"===n&&mi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},vi=w("contenteditable,draggable,spellcheck"),yi=w("events,caret,typing,plaintext-only"),wi=function(e,t){return Ti(t)||"false"===t?"false":"contenteditable"===e&&yi(t)?t:"true"},bi=w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),_i="http://www.w3.org/1999/xlink",Ii=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ei=function(e){return Ii(e)?e.slice(6,e.length):""},Ti=function(e){return null==e||!1===e};function Si(e){var t=e.data,n=e,r=e;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Ci(r.data,t));while(o(n=n.parent))n&&n.data&&(t=Ci(t,n.data));return xi(t.staticClass,t.class)}function Ci(e,t){return{staticClass:ki(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function xi(e,t){return o(e)||o(t)?ki(e,Ai(t)):""}function ki(e,t){return e?t?e+" "+t:e:t||""}function Ai(e){return Array.isArray(e)?Oi(e):h(e)?Ni(e):"string"===typeof e?e:""}function Oi(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Ai(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Di={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ri=w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Pi=w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Li=function(e){return Ri(e)||Pi(e)};function Mi(e){return Pi(e)?"svg":"math"===e?"math":void 0}var Fi=Object.create(null);function Vi(e){if(!Z)return!0;if(Li(e))return!1;if(e=e.toLowerCase(),null!=Fi[e])return Fi[e];var t=document.createElement(e);return e.indexOf("-")>-1?Fi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Fi[e]=/HTMLUnknownElement/.test(t.toString())}var Ui=w("text,number,password,search,email,tel,url");function ji(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function $i(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Bi(e,t){return document.createElementNS(Di[e],t)}function zi(e){return document.createTextNode(e)}function qi(e){return document.createComment(e)}function Gi(e,t,n){e.insertBefore(t,n)}function Ki(e,t){e.removeChild(t)}function Hi(e,t){e.appendChild(t)}function Wi(e){return e.parentNode}function Qi(e){return e.nextSibling}function Yi(e){return e.tagName}function Ji(e,t){e.textContent=t}function Xi(e,t){e.setAttribute(t,"")}var Zi=Object.freeze({__proto__:null,createElement:$i,createElementNS:Bi,createTextNode:zi,createComment:qi,insertBefore:Gi,removeChild:Ki,appendChild:Hi,parentNode:Wi,nextSibling:Qi,tagName:Yi,setTextContent:Ji,setStyleScope:Xi}),es={create:function(e,t){ts(t)},update:function(e,t){e.data.ref!==t.data.ref&&(ts(e,!0),ts(t))},destroy:function(e){ts(e,!0)}};function ts(e,t){var n=e.data.ref;if(o(n)){var r=e.context,s=e.componentInstance||e.elm,a=t?null:s,c=t?void 0:s;if(l(n))Xt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Ke(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&_(p,s):i(p)?p.includes(s)||p.push(s):h?(f[n]=[s],ns(r,n,f[n])):n.value=[s]}else if(h){if(t&&f[n]!==s)return;f[n]=c,ns(r,n,a)}else if(d){if(t&&n.value!==s)return;n.value=a}else 0}}}function ns(e,t,n){var r=e._setupState;r&&E(r,t)&&(Ke(r[t])?r[t].value=n:r[t]=n)}var rs=new ve("",{},[]),is=["create","activate","update","remove","destroy"];function ss(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&os(e,t)||a(e.isAsyncPlaceholder)&&s(t.asyncFactory.error))}function os(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Ui(r)&&Ui(i)}function as(e,t,n){var r,i,s={};for(r=t;r<=n;++r)i=e[r].key,o(i)&&(s[i]=r);return s}function cs(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<is.length;++t)for(r[is[t]]=[],n=0;n<c.length;++n)o(c[n][is[t]])&&r[is[t]].push(c[n][is[t]]);function h(e){return new ve(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);o(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,s,c){if(o(e.elm)&&o(s)&&(e=s[c]=be(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),E(e),b(e,h,t),o(u)&&I(e,t),y(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(o(i)){var s=o(e.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(e,!1),o(e.componentInstance))return g(e,t),y(n,e.elm,r),a(s)&&v(e,t,n,r),!0}}function g(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(I(e,t),E(e)):(ts(e),t.push(e))}function v(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](rs,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){o(e)&&(o(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function b(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](rs,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(rs,e),o(t.insert)&&n.push(e))}function E(e){var t;if(o(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}o(t=xn)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function T(e,t,n,r,i,s){for(;r<=i;++r)p(n[r],s,e,t,!1,n,r)}function S(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)S(e.children[n])}function C(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(x(r),S(r)):f(r.elm))}}function x(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=d(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&x(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else f(e.elm)}function k(e,t,n,r,i){var a,c,u,h,d=0,f=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,w=n[0],b=n[y],_=!i;while(d<=m&&f<=y)s(g)?g=t[++d]:s(v)?v=t[--m]:ss(g,w)?(O(g,w,r,n,f),g=t[++d],w=n[++f]):ss(v,b)?(O(v,b,r,n,y),v=t[--m],b=n[--y]):ss(g,b)?(O(g,b,r,n,y),_&&l.insertBefore(e,g.elm,l.nextSibling(v.elm)),g=t[++d],b=n[--y]):ss(v,w)?(O(v,w,r,n,f),_&&l.insertBefore(e,v.elm,g.elm),v=t[--m],w=n[++f]):(s(a)&&(a=as(t,d,m)),c=o(w.key)?a[w.key]:A(w,t,d,m),s(c)?p(w,r,e,g.elm,!1,n,f):(u=t[c],ss(u,w)?(O(u,w,r,n,f),t[c]=void 0,_&&l.insertBefore(e,u.elm,g.elm)):p(w,r,e,g.elm,!1,n,f)),w=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,T(e,h,n,f,y,r)):f>y&&C(t,d,m)}function A(e,t,n,r){for(var i=n;i<r;i++){var s=t[i];if(o(s)&&ss(e,s))return i}}function O(e,t,n,i,c,u){if(e!==t){o(t.elm)&&o(i)&&(t=i[c]=be(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(o(f)&&_(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=f.hook)&&o(d=d.update)&&d(e,t)}s(t.text)?o(p)&&o(m)?p!==m&&k(h,p,m,n,u):o(m)?(o(e.text)&&l.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):o(p)?C(p,0,p.length-1):o(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(e,t)}}}function N(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var D=w("attrs,class,staticClass,staticStyle,key");function R(e,t,n,r){var i,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return g(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,I(t,n);break}!f&&c["class"]&&gn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!s(t)){var c=!1,u=[];if(s(e))c=!0,p(t,u);else{var d=o(e.nodeType);if(!d&&ss(e,t))O(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),a(n)&&R(e,t,u))return N(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),o(t.parent)){var g=t.parent,v=_(t);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=t.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](rs,g);var b=g.data.hook.insert;if(b.merged)for(var I=1;I<b.fns.length;I++)b.fns[I]()}else ts(g);g=g.parent}}o(m)?C([e],0,0):o(e.tag)&&S(e)}}return N(t,u,c),t.elm}o(e)&&S(e)}}var us={create:ls,update:ls,destroy:function(e){ls(e,rs)}};function ls(e,t){(e.data.directives||t.data.directives)&&hs(e,t)}function hs(e,t){var n,r,i,s=e===rs,o=t===rs,a=fs(e.data.directives,e.context),c=fs(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ms(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ms(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ms(u[n],"inserted",t,e)};s?it(t,"insert",h):h()}if(l.length&&it(t,"postpatch",(function(){for(var n=0;n<l.length;n++)ms(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||ms(a[n],"unbind",e,e,o)}var ds=Object.create(null);function fs(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=ds),i[ps(r)]=r,t._setupState&&t._setupState.__sfc){var s=r.def||Cr(t,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Cr(t.$options,"directives",r.name,!0)}return i}function ps(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ms(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(ea){Jt(ea,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var gs=[es,us];function vs(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(e.data.attrs)||!s(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=P({},h)),h)i=h[r],c=l[r],c!==i&&ys(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&ys(u,"value",h.value),l)s(h[r])&&(Ii(r)?u.removeAttributeNS(_i,Ei(r)):vi(r)||u.removeAttribute(r))}}function ys(e,t,n,r){r||e.tagName.indexOf("-")>-1?ws(e,t,n):bi(t)?Ti(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):vi(t)?e.setAttribute(t,wi(t,n)):Ii(t)?Ti(n)?e.removeAttributeNS(_i,Ei(t)):e.setAttributeNS(_i,t,n):ws(e,t,n)}function ws(e,t,n){if(Ti(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var bs={create:vs,update:vs};function _s(e,t){var n=t.elm,r=t.data,i=e.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Si(t),c=n._transitionClasses;o(c)&&(a=ki(a,Ai(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Is,Es={create:_s,update:_s},Ts="__r",Ss="__c";function Cs(e){if(o(e[Ts])){var t=te?"change":"input";e[t]=[].concat(e[Ts],e[t]||[]),delete e[Ts]}o(e[Ss])&&(e.change=[].concat(e[Ss],e.change||[]),delete e[Ss])}function xs(e,t,n){var r=Is;return function i(){var s=t.apply(null,arguments);null!==s&&Os(e,i,n,r)}}var ks=nn&&!(oe&&Number(oe[1])<=53);function As(e,t,n,r){if(ks){var i=qn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Is.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function Os(e,t,n,r){(r||Is).removeEventListener(e,t._wrapper||t,n)}function Ns(e,t){if(!s(e.data.on)||!s(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Is=t.elm||e.elm,Cs(n),rt(n,r,As,Os,xs,t.context),Is=void 0}}var Ds,Rs={create:Ns,update:Ns,destroy:function(e){return Ns(e,rs)}};function Ps(e,t){if(!s(e.data.domProps)||!s(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=P({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Ls(i,l)&&(i.value=l)}else if("innerHTML"===n&&Pi(i.tagName)&&s(i.innerHTML)){Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>".concat(r,"</svg>");var h=Ds.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(ea){}}}}function Ls(e,t){return!e.composing&&("OPTION"===e.tagName||Ms(e,t)||Fs(e,t))}function Ms(e,t){var n=!0;try{n=document.activeElement!==e}catch(ea){}return n&&e.value!==t}function Fs(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return y(n)!==y(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Vs={create:Ps,update:Ps},Us=T((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function js(e){var t=$s(e.style);return e.staticStyle?P(e.staticStyle,t):t}function $s(e){return Array.isArray(e)?L(e):"string"===typeof e?Us(e):e}function Bs(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=js(i.data))&&P(r,n)}(n=js(e.data))&&P(r,n);var s=e;while(s=s.parent)s.data&&(n=js(s.data))&&P(r,n);return r}var zs,qs=/^--/,Gs=/\s*!important$/,Ks=function(e,t,n){if(qs.test(t))e.style.setProperty(t,n);else if(Gs.test(n))e.style.setProperty(A(t),n.replace(Gs,""),"important");else{var r=Ws(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},Hs=["Webkit","Moz","ms"],Ws=T((function(e){if(zs=zs||document.createElement("div").style,e=C(e),"filter"!==e&&e in zs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Hs.length;n++){var r=Hs[n]+t;if(r in zs)return r}}));function Qs(e,t){var n=t.data,r=e.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=$s(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?P({},d):d;var f=Bs(t,!0);for(a in h)s(f[a])&&Ks(c,a,"");for(a in f)i=f[a],i!==h[a]&&Ks(c,a,null==i?"":i)}}var Ys={create:Qs,update:Qs},Js=/\s+/;function Xs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Js).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Zs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Js).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function eo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&P(t,to(e.name||"v")),P(t,e),t}return"string"===typeof e?to(e):void 0}}var to=T((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),no=Z&&!ne,ro="transition",io="animation",so="transition",oo="transitionend",ao="animation",co="animationend";no&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(so="WebkitTransition",oo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ao="WebkitAnimation",co="webkitAnimationEnd"));var uo=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function lo(e){uo((function(){uo(e)}))}function ho(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Xs(e,t))}function fo(e,t){e._transitionClasses&&_(e._transitionClasses,t),Zs(e,t)}function po(e,t,n){var r=go(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===ro?oo:co,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var mo=/\b(transform|all)(,|$)/;function go(e,t){var n,r=window.getComputedStyle(e),i=(r[so+"Delay"]||"").split(", "),s=(r[so+"Duration"]||"").split(", "),o=vo(i,s),a=(r[ao+"Delay"]||"").split(", "),c=(r[ao+"Duration"]||"").split(", "),u=vo(a,c),l=0,h=0;t===ro?o>0&&(n=ro,l=o,h=s.length):t===io?u>0&&(n=io,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?ro:io:null,h=n?n===ro?s.length:c.length:0);var d=n===ro&&mo.test(r[so+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function vo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return yo(t)+yo(e[n])})))}function yo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function wo(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=eo(e.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,g=r.beforeEnter,v=r.enter,w=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,I=r.appear,E=r.afterAppear,T=r.appearCancelled,S=r.duration,C=xn,x=xn.$vnode;while(x&&x.parent)C=x.context,x=x.parent;var k=!C._isMounted||!e.isRootInsert;if(!k||I||""===I){var A=k&&f?f:c,O=k&&m?m:d,N=k&&p?p:u,D=k&&_||g,R=k&&l(I)?I:v,P=k&&E||w,L=k&&T||b,M=y(h(S)?S.enter:S);0;var F=!1!==i&&!ne,V=Io(R),U=n._enterCb=$((function(){F&&(fo(n,N),fo(n,O)),U.cancelled?(F&&fo(n,A),L&&L(n)):P&&P(n),n._enterCb=null}));e.data.show||it(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,U)})),D&&D(n),F&&(ho(n,A),ho(n,O),lo((function(){fo(n,A),U.cancelled||(ho(n,N),V||(_o(M)?setTimeout(U,M):po(n,a,U)))}))),e.data.show&&(t&&t(),R&&R(n,U)),F||V||U()}}}function bo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=eo(e.data.transition);if(s(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,g=r.delayLeave,v=r.duration,w=!1!==i&&!ne,b=Io(f),_=y(h(v)?v.leave:v);0;var I=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),w&&(fo(n,u),fo(n,l)),I.cancelled?(w&&fo(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(E):E()}function E(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),w&&(ho(n,c),ho(n,l),lo((function(){fo(n,c),I.cancelled||(ho(n,u),b||(_o(_)?setTimeout(I,_):po(n,a,I)))}))),f&&f(n,I),w||b||I())}}function _o(e){return"number"===typeof e&&!isNaN(e)}function Io(e){if(s(e))return!1;var t=e.fns;return o(t)?Io(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Eo(e,t){!0!==t.data.show&&wo(t)}var To=Z?{create:Eo,activate:Eo,remove:function(e,t){!0!==e.data.show?bo(e,t):t()}}:{},So=[bs,Es,Rs,Vs,Ys,To],Co=So.concat(gs),xo=cs({nodeOps:Zi,modules:Co});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Lo(e,"input")}));var ko={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?it(n,"postpatch",(function(){ko.componentUpdated(e,t,n)})):Ao(e,t,n.context),e._vOptions=[].map.call(e.options,Do)):("textarea"===n.tag||Ui(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Ro),e.addEventListener("compositionend",Po),e.addEventListener("change",Po),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ao(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Do);if(i.some((function(e,t){return!U(e,r[t])}))){var s=e.multiple?t.value.some((function(e){return No(e,i)})):t.value!==t.oldValue&&No(t.value,i);s&&Lo(e,"change")}}}};function Ao(e,t,n){Oo(e,t,n),(te||re)&&setTimeout((function(){Oo(e,t,n)}),0)}function Oo(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=j(r,Do(o))>-1,o.selected!==s&&(o.selected=s);else if(U(Do(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function No(e,t){return t.every((function(t){return!U(t,e)}))}function Do(e){return"_value"in e?e._value:e.value}function Ro(e){e.target.composing=!0}function Po(e){e.target.composing&&(e.target.composing=!1,Lo(e.target,"input"))}function Lo(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Mo(e){return!e.componentInstance||e.data&&e.data.transition?e:Mo(e.componentInstance._vnode)}var Fo={bind:function(e,t,n){var r=t.value;n=Mo(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,wo(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Mo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?wo(n,(function(){e.style.display=e.__vOriginalDisplay})):bo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Vo={model:ko,show:Fo},Uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function jo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?jo(qt(t.children)):e}function $o(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[C(r)]=i[r];return t}function Bo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function zo(e){while(e=e.parent)if(e.data.transition)return!0}function qo(e,t){return t.key===e.key&&t.tag===e.tag}var Go=function(e){return e.tag||kt(e)},Ko=function(e){return"show"===e.name},Ho={name:"transition",props:Uo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Go),n.length)){0;var r=this.mode;0;var i=n[0];if(zo(this.$vnode))return i;var s=jo(i);if(!s)return i;if(this._leaving)return Bo(e,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=$o(this),c=this._vnode,l=jo(c);if(s.data.directives&&s.data.directives.some(Ko)&&(s.data.show=!0),l&&l.data&&!qo(s,l)&&!kt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=P({},a);if("out-in"===r)return this._leaving=!0,it(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Bo(e,i);if("in-out"===r){if(kt(s))return c;var d,f=function(){d()};it(a,"afterEnter",f),it(a,"enterCancelled",f),it(h,"delayLeave",(function(e){d=e}))}}return i}}},Wo=P({tag:String,moveClass:String},Uo);delete Wo.mode;var Qo={props:Wo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=kn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=$o(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Yo),e.forEach(Jo),e.forEach(Xo),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;ho(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(oo,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(oo,e),n._moveCb=null,fo(n,t))})}})))},methods:{hasMove:function(e,t){if(!no)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Zs(n,e)})),Xs(n,t),n.style.display="none",this.$el.appendChild(n);var r=go(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Yo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Jo(e){e.data.newPos=e.elm.getBoundingClientRect()}function Xo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Zo={Transition:Ho,TransitionGroup:Qo};Zr.config.mustUseProp=gi,Zr.config.isReservedTag=Li,Zr.config.isReservedAttr=pi,Zr.config.getTagNamespace=Mi,Zr.config.isUnknownElement=Vi,P(Zr.options.directives,Vo),P(Zr.options.components,Zo),Zr.prototype.__patch__=Z?xo:M,Zr.prototype.$mount=function(e,t){return e=e&&Z?ji(e):void 0,Nn(this,e,t)},Z&&setTimeout((function(){K.devtools&&he&&he.emit("init",Zr)}),0)},3822:function(e,t,n){"use strict";n(7658),n(541);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(e){s&&(e._devtoolHook=s,s.emit("vuex:init",e),s.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){s.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){s.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function g(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;g(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){g([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var v;var y=function(e){var t=this;void 0===e&&(e={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;E(this,u,[],this._modules.root),I(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:v.config.devtools;l&&o(this)},w={state:{configurable:!0}};function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;E(e,n,[],e._modules.root,!0),I(e,n,t)}function I(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};u(i,(function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,e._vm=new v({data:{$$state:t},computed:s}),v.config.silent=o,e.strict&&A(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function E(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=T(e,o,n);r.forEachMutation((function(t,n){var r=o+n;C(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;x(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;k(e,r,t,u)})),r.forEachChild((function(r,s){E(e,t,n.concat(s),r,i)}))}function T(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function S(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function C(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function x(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function k(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function D(e){v&&e===v||(v=e,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=N(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=N(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),E(this,this.state,e,this._modules.get(e),n.preserveState),I(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));v.delete(n,e[e.length-1])})),_(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,w);var R=j((function(e,t){var n={};return V(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=$(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),P=j((function(e,t){var n={};return V(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=$(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),L=j((function(e,t){var n={};return V(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||$(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=j((function(e,t){var n={};return V(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=$(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),F=function(e){return{mapState:R.bind(null,e),mapGetters:L.bind(null,e),mapMutations:P.bind(null,e),mapActions:M.bind(null,e)}};function V(e){return U(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function U(e){return Array.isArray(e)||l(e)}function j(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function $(e,t,n){var r=e._modulesNamespaceMap[n];return r}function B(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var s=e.actionFilter;void 0===s&&(s=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,s){var o=c(s);if(n(e,h,o)){var a=G(),u=i(e),d="mutation "+e.type+a;z(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),q(l)}h=o})),u&&e.subscribeAction((function(e,n){if(s(e,n)){var r=G(),i=o(e),a="action "+e.type+r;z(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),q(l)}})))}}function z(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function q(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function G(){var e=new Date;return" @ "+H(e.getHours(),2)+":"+H(e.getMinutes(),2)+":"+H(e.getSeconds(),2)+"."+H(e.getMilliseconds(),3)}function K(e,t){return new Array(t+1).join(e)}function H(e,t){return K("0",t-e.toString().length)+e}var W={Store:y,install:D,version:"3.6.2",mapState:R,mapMutations:P,mapGetters:L,mapActions:M,createNamespacedHelpers:F,createLogger:B};t["ZP"]=W},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},7077:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],x=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return x.set(t,s),s}w((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.7",R=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.19.1",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se)return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="firebase-heartbeat-database",xe=1,ke="firebase-heartbeat-store";let Ae=null;function Oe(){return Ae||(Ae=T(Ce,xe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ke)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Ne(e){try{const t=await Oe();return t.transaction(ke).objectStore(ke).get(Re(e))}catch(t){if(t instanceof s.ZR)R.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function De(e,t){try{const n=await Oe(),r=n.transaction(ke,"readwrite"),i=r.objectStore(ke);return await i.put(t,Re(e)),r.done}catch(n){if(n instanceof s.ZR)R.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){he(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ee(N,D,e),Ee(N,D,"esm2017"),Ee("fire-js","")}$e("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},4161:function(e,t,n){"use strict";n.d(t,{Z:function(){return Mt}});n(3767),n(8585),n(8696),n(7658);function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,o=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>o(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined");function h(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const d=a("ArrayBuffer");function f(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t}const p=c("string"),m=c("function"),g=c("number"),v=e=>null!==e&&"object"===typeof e,y=e=>!0===e||!1===e,w=e=>{if("object"!==o(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b=a("Date"),_=a("File"),I=a("Blob"),E=a("FileList"),T=e=>v(e)&&m(e.pipe),S=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||m(e.toString)&&e.toString()===t)},C=a("URLSearchParams"),x=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const O=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),N=e=>!l(e)&&e!==O;function D(){const{caseless:e}=N(this)&&this||{},t={},n=(n,r)=>{const i=e&&A(t,r)||r;w(t[i])&&w(n)?t[i]=D(t[i],n):w(n)?t[i]=D({},n):u(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&k(arguments[r],n);return t}const R=(e,t,n,{allOwnKeys:i}={})=>(k(t,((t,i)=>{n&&m(t)?e[i]=r(t,n):e[i]=t}),{allOwnKeys:i}),e),P=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),L=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},M=(e,t,n,r)=>{let i,o,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),o=i.length;while(o-- >0)a=i[o],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},F=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},V=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},U=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),j=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},$=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},B=a("HTMLFormElement"),z=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),q=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),G=a("RegExp"),K=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},H=e=>{K(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},W=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},Q=()=>{},Y=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",X="0123456789",Z={DIGIT:X,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+X},ee=(e=16,t=Z.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function te(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ne=e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=u(e)?[]:{};return k(e,((e,t)=>{const s=n(e,r+1);!l(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)};var re={isArray:u,isArrayBuffer:d,isBuffer:h,isFormData:S,isArrayBufferView:f,isString:p,isNumber:g,isBoolean:y,isObject:v,isPlainObject:w,isUndefined:l,isDate:b,isFile:_,isBlob:I,isRegExp:G,isFunction:m,isStream:T,isURLSearchParams:C,isTypedArray:U,isFileList:E,forEach:k,merge:D,extend:R,trim:x,stripBOM:P,inherits:L,toFlatObject:M,kindOf:o,kindOfTest:a,endsWith:F,toArray:V,forEachEntry:j,matchAll:$,isHTMLForm:B,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:K,freezeMethods:H,toObjectSet:W,toCamelCase:z,noop:Q,toFiniteNumber:Y,findKey:A,global:O,isContextDefined:N,ALPHABET:Z,generateString:ee,isSpecCompliantForm:te,toJSONObject:ne};n(541);function ie(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}re.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:re.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const se=ie.prototype,oe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{oe[e]={value:e}})),Object.defineProperties(ie,oe),Object.defineProperty(se,"isAxiosError",{value:!0}),ie.from=(e,t,n,r,i,s)=>{const o=Object.create(se);return re.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ie.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var ae=ie,ce=null;function ue(e){return re.isPlainObject(e)||re.isArray(e)}function le(e){return re.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map((function(e,t){return e=le(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function de(e){return re.isArray(e)&&!e.some(ue)}const fe=re.toFlatObject(re,{},null,(function(e){return/^is[A-Z]/.test(e)}));function pe(e,t,n){if(!re.isObject(e))throw new TypeError("target must be an object");t=t||new(ce||FormData),n=re.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!re.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&re.isSpecCompliantForm(t);if(!re.isFunction(i))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(re.isDate(e))return e.toISOString();if(!c&&re.isBlob(e))throw new ae("Blob is not supported. Use a Buffer instead.");return re.isArrayBuffer(e)||re.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(re.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(re.isArray(e)&&de(e)||(re.isFileList(e)||re.endsWith(n,"[]"))&&(a=re.toArray(e)))return n=le(n),a.forEach((function(e,r){!re.isUndefined(e)&&null!==e&&t.append(!0===o?he([n],r,s):null===o?n:n+"[]",u(e))})),!1;return!!ue(e)||(t.append(he(i,n,s),u(e)),!1)}const h=[],d=Object.assign(fe,{defaultVisitor:l,convertValue:u,isVisitable:ue});function f(e,n){if(!re.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),re.forEach(e,(function(e,r){const s=!(re.isUndefined(e)||null===e)&&i.call(t,e,re.isString(r)?r.trim():r,n,d);!0===s&&f(e,n?n.concat(r):[r])})),h.pop()}}if(!re.isObject(e))throw new TypeError("data must be an object");return f(e),t}var me=pe;function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ve(e,t){this._pairs=[],e&&me(e,this,t)}const ye=ve.prototype;ye.append=function(e,t){this._pairs.push([e,t])},ye.toString=function(e){const t=e?function(t){return e.call(this,t,ge)}:ge;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var we=ve;function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||be,i=n&&n.serialize;let s;if(s=i?i(t,n):re.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class Ie{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){re.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Ee=Ie,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Se="undefined"!==typeof URLSearchParams?URLSearchParams:we,Ce="undefined"!==typeof FormData?FormData:null,xe="undefined"!==typeof Blob?Blob:null;const ke=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Ae=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Oe={isBrowser:!0,classes:{URLSearchParams:Se,FormData:Ce,Blob:xe},isStandardBrowserEnv:ke,isStandardBrowserWebWorkerEnv:Ae,protocols:["http","https","file","blob","url","data"]};function Ne(e,t){return me(e,new Oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Oe.isNode&&re.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function De(e){return re.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Re(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Pe(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&re.isArray(r)?r.length:s,a)return re.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&re.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&re.isArray(r[s])&&(r[s]=Re(r[s])),!o}if(re.isFormData(e)&&re.isFunction(e.entries)){const n={};return re.forEachEntry(e,((e,r)=>{t(De(e),r,n,0)})),n}return null}var Le=Pe;const Me={"Content-Type":void 0};function Fe(e,t,n){if(re.isString(e))try{return(t||JSON.parse)(e),re.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Ve={transitional:Te,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=re.isObject(e);i&&re.isHTMLForm(e)&&(e=new FormData(e));const s=re.isFormData(e);if(s)return r&&r?JSON.stringify(Le(e)):e;if(re.isArrayBuffer(e)||re.isBuffer(e)||re.isStream(e)||re.isFile(e)||re.isBlob(e))return e;if(re.isArrayBufferView(e))return e.buffer;if(re.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ne(e,this.formSerializer).toString();if((o=re.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return me(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),Fe(e)):e}],transformResponse:[function(e){const t=this.transitional||Ve.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&re.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw ae.from(i,ae.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};re.forEach(["delete","get","head"],(function(e){Ve.headers[e]={}})),re.forEach(["post","put","patch"],(function(e){Ve.headers[e]=re.merge(Me)}));var Ue=Ve;const je=re.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var $e=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&je[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Be=Symbol("internals");function ze(e){return e&&String(e).trim().toLowerCase()}function qe(e){return!1===e||null==e?e:re.isArray(e)?e.map(qe):String(e)}function Ge(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function Ke(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function He(e,t,n,r,i){return re.isFunction(r)?r.call(this,t,n):(i&&(t=n),re.isString(t)?re.isString(r)?-1!==t.indexOf(r):re.isRegExp(r)?r.test(t):void 0:void 0)}function We(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Qe(e,t){const n=re.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class Ye{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=ze(t);if(!i)throw new Error("header name must be a non-empty string");const s=re.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=qe(e))}const s=(e,t)=>re.forEach(e,((e,n)=>i(e,n,t)));return re.isPlainObject(e)||e instanceof this.constructor?s(e,t):re.isString(e)&&(e=e.trim())&&!Ke(e)?s($e(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=ze(e),e){const n=re.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ge(e);if(re.isFunction(t))return t.call(this,e,n);if(re.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ze(e),e){const n=re.findKey(this,e);return!(!n||void 0===this[n]||t&&!He(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=ze(e),e){const i=re.findKey(n,e);!i||t&&!He(n,n[i],i,t)||(delete n[i],r=!0)}}return re.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!He(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return re.forEach(this,((r,i)=>{const s=re.findKey(n,i);if(s)return t[s]=qe(r),void delete t[i];const o=e?We(i):String(i).trim();o!==i&&delete t[i],t[o]=qe(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return re.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&re.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Be]=this[Be]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=ze(e);n[t]||(Qe(r,e),n[t]=!0)}return re.isArray(e)?e.forEach(i):i(e),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),re.freezeMethods(Ye.prototype),re.freezeMethods(Ye);var Je=Ye;function Xe(e,t){const n=this||Ue,r=t||n,i=Je.from(r.headers);let s=r.data;return re.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Ze(e){return!(!e||!e.__CANCEL__)}function et(e,t,n){ae.call(this,null==e?"canceled":e,ae.ERR_CANCELED,t,n),this.name="CanceledError"}re.inherits(et,ae,{__CANCEL__:!0});var tt=et;n(2801);function nt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ae("Request failed with status code "+n.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var rt=Oe.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),re.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),re.isString(r)&&o.push("path="+r),re.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function it(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function st(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ot(e,t){return e&&!it(t)?st(e,t):t}var at=Oe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=re.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ct(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ut(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var lt=ut;function ht(e,t){let n=0;const r=lt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const dt="undefined"!==typeof XMLHttpRequest;var ft=dt&&function(e){return new Promise((function(t,n){let r=e.data;const i=Je.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}re.isFormData(r)&&(Oe.isStandardBrowserEnv||Oe.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=ot(e.baseURL,e.url);function l(){if(!c)return;const r=Je.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?c.response:c.responseText,o={data:i,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};nt((function(e){t(e),a()}),(function(e){n(e),a()}),o),c=null}if(c.open(e.method.toUpperCase(),_e(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ae("Request aborted",ae.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ae("Network Error",ae.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Te;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ae(t,r.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,c)),c=null},Oe.isStandardBrowserEnv){const t=(e.withCredentials||at(u))&&e.xsrfCookieName&&rt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&re.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),re.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",ht(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ht(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new tt(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=ct(u);h&&-1===Oe.protocols.indexOf(h)?n(new ae("Unsupported protocol "+h+":",ae.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const pt={http:ce,xhr:ft};re.forEach(pt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var mt={getAdapter:e=>{e=re.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t;i++)if(n=e[i],r=re.isString(n)?pt[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new ae(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(re.hasOwnProp(pt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!re.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:pt};function gt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tt(null,e)}function vt(e){gt(e),e.headers=Je.from(e.headers),e.data=Xe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=mt.getAdapter(e.adapter||Ue.adapter);return t(e).then((function(t){return gt(e),t.data=Xe.call(e,e.transformResponse,t),t.headers=Je.from(t.headers),t}),(function(t){return Ze(t)||(gt(e),t&&t.response&&(t.response.data=Xe.call(e,e.transformResponse,t.response),t.response.headers=Je.from(t.response.headers))),Promise.reject(t)}))}const yt=e=>e instanceof Je?e.toJSON():e;function wt(e,t){t=t||{};const n={};function r(e,t,n){return re.isPlainObject(e)&&re.isPlainObject(t)?re.merge.call({caseless:n},e,t):re.isPlainObject(t)?re.merge({},t):re.isArray(t)?t.slice():t}function i(e,t,n){return re.isUndefined(t)?re.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!re.isUndefined(t))return r(void 0,t)}function o(e,t){return re.isUndefined(t)?re.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(yt(e),yt(t),!0)};return re.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);re.isUndefined(o)&&s!==a||(n[r]=o)})),n}const bt="1.3.4",_t={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{_t[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const It={};function Et(e,t,n){if("object"!==typeof e)throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new ae("option "+s+" must be "+n,ae.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ae("Unknown option "+s,ae.ERR_BAD_OPTION)}}_t.transitional=function(e,t,n){function r(e,t){return"[Axios v"+bt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new ae(r(i," has been removed"+(t?" in "+t:"")),ae.ERR_DEPRECATED);return t&&!It[i]&&(It[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Tt={assertOptions:Et,validators:_t};const St=Tt.validators;class Ct{constructor(e){this.defaults=e,this.interceptors={request:new Ee,response:new Ee}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=wt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Tt.assertOptions(n,{silentJSONParsing:St.transitional(St.boolean),forcedJSONParsing:St.transitional(St.boolean),clarifyTimeoutError:St.transitional(St.boolean)},!1),void 0!==r&&Tt.assertOptions(r,{encode:St.function,serialize:St.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&re.merge(i.common,i[t.method]),s&&re.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Je.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[vt.bind(this),void 0];e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(h<l)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;h=0;while(h<l){const e=o[h++],t=o[h++];try{d=e(d)}catch(f){t.call(this,f);break}}try{u=vt.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(e){e=wt(this.defaults,e);const t=ot(e.baseURL,e.url);return _e(t,e.params,e.paramsSerializer)}}re.forEach(["delete","get","head","options"],(function(e){Ct.prototype[e]=function(t,n){return this.request(wt(n||{},{method:e,url:t,data:(n||{}).data}))}})),re.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(wt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ct.prototype[e]=t(),Ct.prototype[e+"Form"]=t(!0)}));var xt=Ct;class kt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new tt(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new kt((function(t){e=t}));return{token:t,cancel:e}}}var At=kt;function Ot(e){return function(t){return e.apply(null,t)}}function Nt(e){return re.isObject(e)&&!0===e.isAxiosError}const Dt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dt).forEach((([e,t])=>{Dt[t]=e}));var Rt=Dt;function Pt(e){const t=new xt(e),n=r(xt.prototype.request,t);return re.extend(n,xt.prototype,t,{allOwnKeys:!0}),re.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Pt(wt(e,t))},n}const Lt=Pt(Ue);Lt.Axios=xt,Lt.CanceledError=tt,Lt.CancelToken=At,Lt.isCancel=Ze,Lt.VERSION=bt,Lt.toFormData=me,Lt.AxiosError=ae,Lt.Cancel=Lt.CanceledError,Lt.all=function(e){return Promise.all(e)},Lt.spread=Ot,Lt.isAxiosError=Nt,Lt.mergeConfig=wt,Lt.AxiosHeaders=Je,Lt.formToJSON=e=>Le(re.isHTMLForm(e)?new FormData(e):e),Lt.HttpStatusCode=Rt,Lt.default=Lt;var Mt=Lt},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.initializeApp}});var r=n(7077),i="firebase",s="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,s,"app")},1609:function(e,t,n){"use strict";n.d(t,{Xb:function(){return r.a7},v0:function(){return r.o},e5:function(){return r.a8},w7:function(){return r.z}});var r=n(6006);n(223),n(7077),n(5168),n(7142)},5363:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(3767),n(8585),n(8696),n(6006)),s=n(223),o=(n(7077),n(5168),n(7142));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=2e3;async function u(e,t,n){var r;const{BuildInfo:s}=a();(0,i.ar)(t.sessionId,"AuthEvent did not contain a session ID");const o=await p(t.sessionId),c={};return(0,i.as)()?c["ibi"]=s.packageName:(0,i.at)()?c["apn"]=s.packageName:(0,i.au)(e,"operation-not-supported-in-this-environment"),s.displayName&&(c["appDisplayName"]=s.displayName),c["sessionId"]=o,(0,i.av)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,c)}async function l(e){const{BuildInfo:t}=a(),n={};(0,i.as)()?n.iosBundleId=t.packageName:(0,i.at)()?n.androidPackageName=t.packageName:(0,i.au)(e,"operation-not-supported-in-this-environment"),await(0,i.aw)(e,n)}function h(e){const{cordova:t}=a();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let s=null;r?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,(0,i.ax)()?"_blank":"_system","location=yes"),n(s)}))}))}async function d(e,t,n){const{cordova:r}=a();let s=()=>{};try{await new Promise(((o,a)=>{let u=null;function l(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function h(){u||(u=window.setTimeout((()=>{a((0,i.ay)(e,"redirect-cancelled-by-user"))}),c))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&h()}t.addPassiveListener(l),document.addEventListener("resume",h,!1),(0,i.at)()&&document.addEventListener("visibilitychange",d,!1),s=()=>{t.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}}))}finally{s()}}function f(e){var t,n,r,s,o,c,u,l,h,d;const f=a();(0,i.az)("function"===typeof(null===(t=null===f||void 0===f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.az)("undefined"!==typeof(null===(n=null===f||void 0===f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.az)("function"===typeof(null===(o=null===(s=null===(r=null===f||void 0===f?void 0:f.cordova)||void 0===r?void 0:r.plugins)||void 0===s?void 0:s.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.az)("function"===typeof(null===(l=null===(u=null===(c=null===f||void 0===f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.az)("function"===typeof(null===(d=null===(h=null===f||void 0===f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function p(e){const t=m(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function m(e){if((0,i.ar)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=20;class v extends i.aA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function y(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:I(),postBody:null,tenantId:e.tenantId,error:(0,i.ay)(e,"no-auth-event")}}function w(e,t){return E()._set(T(e),t)}async function b(e){const t=await E()._get(T(e));return t&&await E()._remove(T(e)),t}function _(e,t){var n,r;const s=C(t);if(s.includes("/__/auth/callback")){const t=x(s),o=t["firebaseError"]?S(decodeURIComponent(t["firebaseError"])):null,a=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],c=a?(0,i.ay)(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function I(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<g;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function E(){return(0,i.aB)(i.b)}function T(e){return(0,i.aC)("authEvent",e.config.apiKey,e.name)}function S(e){try{return JSON.parse(e)}catch(t){return null}}function C(e){const t=x(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=x(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=x(i)["link"];return s||i||r||n||e}function x(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,s.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=500;class A{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aD,this._overrideRedirectResult=i.aE}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new v(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,i.au)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){f(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),(0,i.aF)(),await this._originValidation(e);const o=y(e,n,r);await w(e,o);const a=await u(e,o,t),c=await h(a);return d(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=a(),s=setTimeout((async()=>{await b(e),t.onEvent(N())}),k),o=async n=>{clearTimeout(s);const r=await b(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=_(r,n["url"])),t.onEvent(i||N())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const c=r,u=`${i.packageName.toLowerCase()}://`;a().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&o({url:e}),"function"===typeof c)try{c(e)}catch(t){console.error(t)}}}}const O=A;function N(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.ay)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){(0,i.aG)(e)._logFramework(t)}var R="@firebase/auth-compat",P="0.3.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L=1e3;function M(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function F(){return"http:"===M()||"https:"===M()}function V(e=(0,s.z$)()){return!("file:"!==M()&&"ionic:"!==M()&&"capacitor:"!==M()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function U(){return(0,s.b$)()||(0,s.UG)()}function j(){return(0,s.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function $(e=(0,s.z$)()){return/Edge\/\d+/.test(e)}function B(e=(0,s.z$)()){return j()||$(e)}function z(){try{const e=self.localStorage,t=i.aK();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!B()||(0,s.hl)()}catch(e){return q()&&(0,s.hl)()}return!1}function q(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function G(){return(F()||(0,s.ru)()||V())&&!U()&&z()&&!q()}function K(){return V()&&"undefined"!==typeof document}async function H(){return!!K()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),L);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function W(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={LOCAL:"local",NONE:"none",SESSION:"session"},Y=i.az,J="persistence";function X(e,t){Y(Object.values(Q).includes(t),e,"invalid-persistence-type"),(0,s.b$)()?Y(t!==Q.SESSION,e,"unsupported-persistence-type"):(0,s.UG)()?Y(t===Q.NONE,e,"unsupported-persistence-type"):q()?Y(t===Q.NONE||t===Q.LOCAL&&(0,s.hl)(),e,"unsupported-persistence-type"):Y(t===Q.NONE||z(),e,"unsupported-persistence-type")}async function Z(e){await e._initializationPromise;const t=te(),n=i.aC(J,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function ee(e,t){const n=te();if(!n)return[];const r=i.aC(J,e,t),s=n.getItem(r);switch(s){case Q.NONE:return[i.M];case Q.LOCAL:return[i.i,i.a];case Q.SESSION:return[i.a];default:return[]}}function te(){var e;try{return(null===(e=W())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=i.az;class re{constructor(){this.browserResolver=i.aB(i.k),this.cordovaResolver=i.aB(O),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aD,this._overrideRedirectResult=i.aE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return K()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ne(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await H();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e.unwrap()}function se(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return ce(e)}function ae(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new he(e,i.ap(e,t))}else if(r){const e=ce(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ce(e){const{_tokenResponse:t}=e instanceof s.ZR?e.customData:e;if(!t)return null;if(!(e instanceof s.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return i.P.credentialFromResult(e);const n=t.providerId;if(!n||n===i.p.PASSWORD)return null;let r;switch(n){case i.p.GOOGLE:r=i.U;break;case i.p.FACEBOOK:r=i.Q;break;case i.p.GITHUB:r=i.V;break;case i.p.TWITTER:r=i.Y;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?i.aN._create(n,a):i.K._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new i.W(n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function ue(e,t){return t.catch((t=>{throw t instanceof s.ZR&&ae(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:oe(e),additionalUserInfo:i.an(e),user:de.getOrCreate(n)}}))}async function le(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ue(e,n.confirm(t))}}class he{constructor(e,t){this.resolver=t,this.auth=se(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ue(ie(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this._delegate=e,this.multiFactor=i.aq(e)}static getOrCreate(e){return de.USER_MAP.has(e)||de.USER_MAP.set(e,new de(e)),de.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ue(this.auth,i.$(this._delegate,e))}async linkWithPhoneNumber(e,t){return le(this.auth,i.l(this._delegate,e,t))}async linkWithPopup(e){return ue(this.auth,i.d(this._delegate,e,re))}async linkWithRedirect(e){return await Z(i.aG(this.auth)),i.g(this._delegate,e,re)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ue(this.auth,i.a0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return le(this.auth,i.r(this._delegate,e,t))}reauthenticateWithPopup(e){return ue(this.auth,i.e(this._delegate,e,re))}async reauthenticateWithRedirect(e){return await Z(i.aG(this.auth)),i.h(this._delegate,e,re)}sendEmailVerification(e){return i.ad(this._delegate,e)}async unlink(e){return await i.am(this._delegate,e),this}updateEmail(e){return i.ai(this._delegate,e)}updatePassword(e){return i.aj(this._delegate,e)}updatePhoneNumber(e){return i.u(this._delegate,e)}updateProfile(e){return i.ah(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i.ae(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}de.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe=i.az;class pe{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;fe(n,"invalid-api-key",{appName:e.name}),fe(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?re:void 0;this._delegate=t.initialize({options:{persistence:ge(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i.C),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?de.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i.H(this._delegate,e,t)}applyActionCode(e){return i.a4(this._delegate,e)}checkActionCode(e){return i.a5(this._delegate,e)}confirmPasswordReset(e,t){return i.a3(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ue(this._delegate,i.a7(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i.ac(this._delegate,e)}isSignInWithEmailLink(e){return i.aa(this._delegate,e)}async getRedirectResult(){fe(G(),this._delegate,"operation-not-supported-in-this-environment");const e=await i.j(this._delegate,re);return e?ue(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){D(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=me(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=me(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return i.a9(this._delegate,e,t)}sendPasswordResetEmail(e,t){return i.a2(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(X(this._delegate,e),e){case Q.SESSION:t=i.a;break;case Q.LOCAL:const e=await i.aB(i.i)._isAvailable();t=e?i.i:i.b;break;case Q.NONE:t=i.M;break;default:return i.au("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ue(this._delegate,i.Z(this._delegate))}signInWithCredential(e){return ue(this._delegate,i._(this._delegate,e))}signInWithCustomToken(e){return ue(this._delegate,i.a1(this._delegate,e))}signInWithEmailAndPassword(e,t){return ue(this._delegate,i.a8(this._delegate,e,t))}signInWithEmailLink(e,t){return ue(this._delegate,i.ab(this._delegate,e,t))}signInWithPhoneNumber(e,t){return le(this._delegate,i.s(this._delegate,e,t))}async signInWithPopup(e){return fe(G(),this._delegate,"operation-not-supported-in-this-environment"),ue(this._delegate,i.c(this._delegate,e,re))}async signInWithRedirect(e){return fe(G(),this._delegate,"operation-not-supported-in-this-environment"),await Z(this._delegate),i.f(this._delegate,e,re)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i.a6(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function me(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&de.getOrCreate(e));return{next:s,error:t,complete:n}}function ge(e,t){const n=ee(e,t);if("undefined"===typeof self||n.includes(i.i)||n.push(i.i),"undefined"!==typeof window)for(const r of[i.b,i.a])n.includes(r)||n.push(r);return n.includes(i.M)||n.push(i.M),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.Persistence=Q;class ve{constructor(){this.providerId="phone",this._delegate=new i.P(ie(r.Z.auth()))}static credential(e,t){return i.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ve.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,ve.PROVIDER_ID=i.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=i.az;class we{constructor(e,t,n=r.Z.app()){var s;ye(null===(s=n.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new i.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="auth-compat";function _e(e){e.INTERNAL.registerComponent(new o.wA(be,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new pe(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.N,FacebookAuthProvider:i.Q,GithubAuthProvider:i.V,GoogleAuthProvider:i.U,OAuthProvider:i.W,SAMLAuthProvider:i.X,PhoneAuthProvider:ve,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:we,TwitterAuthProvider:i.Y,Auth:pe,AuthCredential:i.I,Error:s.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(R,P)}_e(r.Z)},8981:function(e,t,n){"use strict";n(3767),n(8585),n(8696);var r=n(2661),i=n(7425),s=n(223),o=n(7142);const a="@firebase/firestore-compat",c="0.3.6";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i.WA("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i.WA("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!(0,i.Me)())throw new i.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i.Jj.fromBase64String(e))}static fromUint8Array(e){return l(),new d(i.Jj.fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return(0,i.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,i.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,i.Fc)(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||(0,i.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,i.at)(this._delegate,e,t,n)}enableNetwork(){return(0,i.Ix)(this._delegate)}disableNetwork(){return(0,i.TF)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,i.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,i.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,i.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new i.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,(0,i.hJ)(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,(0,i.JU)(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new k(this,(0,i.B$)(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,i.i3)(this._delegate,(t=>e(new w(this,t))))}batch(){return(0,i.qY)(this._delegate),new b(new i.PU(this._delegate,(e=>(0,i.GL)(this._delegate,e))))}loadBundle(e){return(0,i.Pb)(this._delegate,e)}namedQuery(e){return(0,i.L$)(this._delegate,e).then((e=>e?new k(this,e):null))}}class v extends i.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){(0,i.Ub)(e)}class w{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=D(e);return this._delegate.get(t).then((e=>new C(this._firestore,new i.xU(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=D(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}}class b{constructor(e){this._delegate=e}set(e,t,n){const r=D(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new x(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i.my(t._delegate,n,new i.Ky(e)))}static forKey(e,t,n){return new I(t,new i.my(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,(0,i.hJ)(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,s.m9)(e),e instanceof i.my&&(0,i.Eo)(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?(0,i.pl)(this._delegate,e,t):(0,i.pl)(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,i.r7)(this._delegate,e):(0,i.r7)(this._delegate,e,t,...n)}catch(r){throw E(r,"updateDoc()","DocumentReference.update()")}}delete(){return(0,i.oe)(this._delegate)}onSnapshot(...e){const t=T(e),n=S(e,(e=>new C(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return(0,i.cf)(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.kl)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.Xk)(this._delegate):(0,i.QT)(this._delegate),t.then((e=>new C(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function T(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class x extends C{data(e){const t=this._delegate.data(e);return(0,i.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class k{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.ar)(e,t,n)))}catch(r){throw E(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.Xo)(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.b9)(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.vh)(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.e0)(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.TQ)(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.Lx)(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new k(this.firestore,(0,i.IO)(this._delegate,(0,i.Wu)(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,i.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.UQ)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.zN)(this._delegate):(0,i.PL)(this._delegate),t.then((e=>new O(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=T(e),n=S(e,(e=>new O(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return(0,i.cf)(this._delegate,t,n)}withConverter(e){return new k(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new x(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class O{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new k(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new x(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new A(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new x(this._firestore,n))}))}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class N extends k{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?(0,i.JU)(this._delegate):(0,i.JU)(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return(0,i.ET)(this._delegate,e).then((e=>new I(this.firestore,e)))}isEqual(e){return(0,i.Eo)(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function D(e){return(0,i.Cf)(e,i.my)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...e){this._delegate=new i.Lz(...e)}static documentId(){return new R(i.Xb.keyField().canonicalString())}isEqual(e){return e=(0,s.m9)(e),e instanceof i.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,i.Bt)();return e._methodName="FieldValue.serverTimestamp",new P(e)}static delete(){const e=(0,i.AK)();return e._methodName="FieldValue.delete",new P(e)}static arrayUnion(...e){const t=(0,i.vr)(...e);return t._methodName="FieldValue.arrayUnion",new P(t)}static arrayRemove(...e){const t=(0,i.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new P(t)}static increment(e){const t=(0,i.nP)(e);return t._methodName="FieldValue.increment",new P(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={Firestore:g,GeoPoint:i.F8,Timestamp:i.EK,Blob:d,Transaction:w,WriteBatch:b,DocumentReference:I,DocumentSnapshot:C,Query:k,QueryDocumentSnapshot:x,QuerySnapshot:O,CollectionReference:N,FieldPath:R,FieldValue:P,setLogLevel:y,CACHE_SIZE_UNLIMITED:i.IX};function M(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},L)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){M(e,((e,t)=>new g(e,t,new m))),e.registerVersion(a,c)}F(r.Z)},9232:function(e,t,n){"use strict";n.d(t,{ad:function(){return r.ad}});var r=n(7425)},9391:function(e,t,n){"use strict";n.d(t,{pt:function(){return ot},W_:function(){return rt},tl:function(){return st},ZP:function(){return tt}});n(7658);function r(e){return null!==e&&"object"===typeof e&&"constructor"in e&&e.constructor===Object}function i(e={},t={}){Object.keys(t).forEach((n=>{"undefined"===typeof e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&i(e[n],t[n])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!==typeof document?document:{};return i(e,s),e}const a={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return"undefined"===typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){"undefined"!==typeof setTimeout&&clearTimeout(e)}};function c(){const e="undefined"!==typeof window?window:{};return i(e,a),e}function u(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(n){}try{delete t[e]}catch(n){}}))}function l(e,t=0){return setTimeout(e,t)}function h(){return Date.now()}function d(e){const t=c();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function f(e,t="x"){const n=c();let r,i,s;const o=d(e,null);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new n.WebKitCSSMatrix("none"===i?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),"x"===t&&(i=n.WebKitCSSMatrix?s.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(i=n.WebKitCSSMatrix?s.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),i||0}function p(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function m(e){return"undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(void 0!==i&&null!==i&&!m(i)){const e=Object.keys(Object(i)).filter((e=>n.indexOf(e)<0));for(let n=0,r=e.length;n<r;n+=1){const r=e[n],s=Object.getOwnPropertyDescriptor(i,r);void 0!==s&&s.enumerable&&(p(t[r])&&p(i[r])?i[r].__swiper__?t[r]=i[r]:g(t[r],i[r]):!p(t[r])&&p(i[r])?(t[r]={},i[r].__swiper__?t[r]=i[r]:g(t[r],i[r])):t[r]=i[r])}}}return t}function v(e,t,n){e.style.setProperty(t,n)}function y({swiper:e,targetPosition:t,side:n}){const r=c(),i=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const u=t>i?"next":"prev",l=(e,t)=>"next"===u&&e>=t||"prev"===u&&e<=t,h=()=>{s=(new Date).getTime(),null===o&&(o=s);const c=Math.max(Math.min((s-o)/a,1),0),u=.5-Math.cos(c*Math.PI)/2;let d=i+u*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(h)};h()}function w(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function b(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function _(e,t){const n=[];while(e.previousElementSibling){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function I(e,t){const n=[];while(e.nextElementSibling){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function E(e,t){const n=c();return n.getComputedStyle(e,null).getPropertyValue(t)}function T(e){let t,n=e;if(n){t=0;while(null!==(n=n.previousSibling))1===n.nodeType&&(t+=1);return t}}function S(e,t){const n=[];let r=e.parentElement;while(r)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function C(e,t,n){const r=c();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let x,k,A;function O(){const e=c(),t=o();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function N(){return x||(x=O()),x}function D({userAgent:e}={}){const t=N(),n=c(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,u=i.match(/(Android);?[\s\/]+([\d.]+)?/);let l=i.match(/(iPad).*OS\s([\d_]+)/);const h=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===r;let p="MacIntel"===r;const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!l&&p&&t.touch&&m.indexOf(`${o}x${a}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||(l=[0,1,"13_0_0"]),p=!1),u&&!f&&(s.os="android",s.android=!0),(l||d||h)&&(s.os="ios",s.ios=!0),s}function R(e={}){return k||(k=D(e)),k}function P(){const e=c();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,r]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&r<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function L(){return A||(A=P()),A}function M({swiper:e,on:t,emit:n}){const r=c();let i=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{s=r.requestAnimationFrame((()=>{const{width:n,height:r}=e;let i=n,s=r;t.forEach((({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),i===n&&s===r||o()}))})),i.observe(e.el))},u=()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&"undefined"!==typeof r.ResizeObserver?a():(r.addEventListener("resize",o),r.addEventListener("orientationchange",l))})),t("destroy",(()=>{u(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",l)}))}function F({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=c(),o=(t,n={})=>{const o=s.MutationObserver||s.WebkitMutationObserver,a=new o((t=>{if(e.__preventObserver__)return;if(1===t.length)return void r("observerUpdate",t[0]);const n=function(){r("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(n):s.setTimeout(n,0)}));a.observe(t,{attributes:"undefined"===typeof n.attributes||n.attributes,childList:"undefined"===typeof n.childList||n.childList,characterData:"undefined"===typeof n.characterData||n.characterData}),i.push(a)},a=()=>{if(e.params.observer){if(e.params.observeParents){const t=S(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},u=()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",u)}n(541);var V={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!==typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{"undefined"===typeof t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,r,i;"string"===typeof e[0]||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i);const s=Array.isArray(n)?n:n.split(" ");return s.forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...r])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,r)}))})),t}};function U(){const e=this;let t,n;const r=e.el;t="undefined"!==typeof e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n="undefined"!==typeof e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(E(r,"padding-left")||0,10)-parseInt(E(r,"padding-right")||0,10),n=n-parseInt(E(r,"padding-top")||0,10)-parseInt(E(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:c}=e,u=e.virtual&&r.virtual.enabled,l=u?e.virtual.slides.length:e.slides.length,h=w(s,`.${e.params.slideClass}, swiper-slide`),d=u?e.virtual.slides.length:h.length;let f=[];const p=[],m=[];let g=r.slidesOffsetBefore;"function"===typeof g&&(g=r.slidesOffsetBefore.call(e));let y=r.slidesOffsetAfter;"function"===typeof y&&(y=r.slidesOffsetAfter.call(e));const b=e.snapGrid.length,_=e.slidesGrid.length;let I=r.spaceBetween,T=-g,S=0,x=0;if("undefined"===typeof o)return;"string"===typeof I&&I.indexOf("%")>=0&&(I=parseFloat(I.replace("%",""))/100*o),e.virtualSize=-I,h.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),r.centeredSlides&&r.cssMode&&(v(i,"--swiper-centered-offset-before",""),v(i,"--swiper-centered-offset-after",""));const k=r.grid&&r.grid.rows>1&&e.grid;let A;k&&e.grid.initSlides(d);const O="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>"undefined"!==typeof r.breakpoints[e].slidesPerView)).length>0;for(let v=0;v<d;v+=1){let i;if(A=0,h[v]&&(i=h[v]),k&&e.grid.updateSlide(v,i,d,t),!h[v]||"none"!==E(i,"display")){if("auto"===r.slidesPerView){O&&(h[v].style[t("width")]="");const s=getComputedStyle(i),o=i.style.transform,a=i.style.webkitTransform;if(o&&(i.style.transform="none"),a&&(i.style.webkitTransform="none"),r.roundLengths)A=e.isHorizontal()?C(i,"width",!0):C(i,"height",!0);else{const e=n(s,"width"),t=n(s,"padding-left"),r=n(s,"padding-right"),o=n(s,"margin-left"),a=n(s,"margin-right"),c=s.getPropertyValue("box-sizing");if(c&&"border-box"===c)A=e+o+a;else{const{clientWidth:n,offsetWidth:s}=i;A=e+t+r+o+a+(s-n)}}o&&(i.style.transform=o),a&&(i.style.webkitTransform=a),r.roundLengths&&(A=Math.floor(A))}else A=(o-(r.slidesPerView-1)*I)/r.slidesPerView,r.roundLengths&&(A=Math.floor(A)),h[v]&&(h[v].style[t("width")]=`${A}px`);h[v]&&(h[v].swiperSlideSize=A),m.push(A),r.centeredSlides?(T=T+A/2+S/2+I,0===S&&0!==v&&(T=T-o/2-I),0===v&&(T=T-o/2-I),Math.abs(T)<.001&&(T=0),r.roundLengths&&(T=Math.floor(T)),x%r.slidesPerGroup===0&&f.push(T),p.push(T)):(r.roundLengths&&(T=Math.floor(T)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup===0&&f.push(T),p.push(T),T=T+A+I),e.virtualSize+=A+I,S=A,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+y,a&&c&&("slide"===r.effect||"coverflow"===r.effect)&&(i.style.width=`${e.virtualSize+r.spaceBetween}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+r.spaceBetween}px`),k&&e.grid.updateWrapperSize(A,f,t),!r.centeredSlides){const t=[];for(let n=0;n<f.length;n+=1){let i=f[n];r.roundLengths&&(i=Math.floor(i)),f[n]<=e.virtualSize-o&&t.push(i)}f=t,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(u&&r.loop){const t=m[0]+I;if(r.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),i=t*r.slidesPerGroup;for(let e=0;e<n;e+=1)f.push(f[f.length-1]+i)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===r.slidesPerGroup&&f.push(f[f.length-1]+t),p.push(p[p.length-1]+t),e.virtualSize+=t}if(0===f.length&&(f=[0]),0!==r.spaceBetween){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!(r.cssMode&&!r.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${I}px`}))}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween;const t=e-o;f=f.map((e=>e<0?-g:e>t?t+y:e))}if(r.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween,e<o){const t=(o-e)/2;f.forEach(((e,n)=>{f[n]=e-t})),p.forEach(((e,n)=>{p[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){v(i,"--swiper-centered-offset-before",-f[0]+"px"),v(i,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==l&&e.emit("slidesLengthChange"),f.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==_&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!u&&!r.cssMode&&("slide"===r.effect||"fade"===r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=r.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}function $(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i,s=0;"number"===typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.getSlideIndexByData(e):t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(i=0;i<n.length;i+=1)if("undefined"!==typeof n[i]){const e=n[i].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)}function B(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n}function z(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(0===r.length)return;"undefined"===typeof r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let a=0;a<r.length;a+=1){const e=r[a];let c=e.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+n.spaceBetween),l=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+n.spaceBetween),h=-(o-c),d=h+t.slidesSizesGrid[a],f=h>=0&&h<t.size-1||d>1&&d<=t.size||h<=0&&d>=t.size;f&&(t.visibleSlides.push(e),t.visibleSlidesIndexes.push(a),r[a].classList.add(n.slideVisibleClass)),e.progress=i?-u:u,e.originalProgress=i?-l:l}}function q(e){const t=this;if("undefined"===typeof e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const c=s,u=o;if(0===r)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||i<=0,o=a||i>=1,n&&(i=0),a&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],s=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);a=c>=i?(c-i)/o:(c+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!c&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(c&&!s||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function G(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e=>w(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),s)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(n.slideActiveClass);let e=I(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let r=_(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&0===!r&&(r=t[t.length-1]),r&&r.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const K=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const t=r.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},H=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},W=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex,s=i+r-1;if(e.params.rewind)for(let o=i-t;o<=s+t;o+=1){const t=(o%n+n)%n;t!==i&&t>s&&H(e,t)}else for(let o=Math.max(s-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&o>s&&H(e,o)};function Q(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)"undefined"!==typeof t[s+1]?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||"undefined"===typeof i)&&(i=0),i}function Y(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let c,u=e;const l=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if("undefined"===typeof u&&(u=Q(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,u);c=e+Math.floor((u-e)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),u===s)return c!==a&&(t.snapIndex=c,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=l(u)));let h;h=t.virtual&&i.virtual.enabled&&i.loop?l(u):t.slides[u]?parseInt(t.slides[u].getAttribute("data-swiper-slide-index")||u,10):u,Object.assign(t,{snapIndex:c,realIndex:h,previousIndex:s,activeIndex:u}),t.initialized&&W(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function J(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i,s=!1;if(r)for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){s=!0,i=o;break}if(!r||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var X={updateSize:U,updateSlides:j,updateAutoHeight:$,updateSlidesOffset:B,updateSlidesProgress:z,updateProgress:q,updateSlidesClasses:G,updateActiveIndex:Y,updateClickedSlide:J};function Z(e=(this.isHorizontal()?"x":"y")){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=f(s,e);return r&&(o=-o),o||0}function ee(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,c=0;const u=0;let l;n.isHorizontal()?a=r?-e:e:c=e,i.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-c:i.virtualTranslate||(s.style.transform=`translate3d(${a}px, ${c}px, ${u}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:c;const h=n.maxTranslate()-n.minTranslate();l=0===h?0:(e-n.minTranslate())/h,l!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function te(){return-this.snapGrid[0]}function ne(){return-this.snapGrid[this.snapGrid.length-1]}function re(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const c=s.minTranslate(),u=s.maxTranslate();let l;if(l=r&&e>c?c:r&&e<u?u:e,s.updateProgress(l),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-l;else{if(!s.support.smoothScroll)return y({swiper:s,targetPosition:-l,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-l,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(l),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(l),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var ie={getTranslate:Z,setTranslate:ee,minTranslate:te,maxTranslate:ne,translateTo:re};function se(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function oe({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(o=i>s?"next":i<s?"prev":"reset"),e.emit(`transition${r}`),t&&i!==s){if("reset"===o)return void e.emit(`slideResetTransition${r}`);e.emit(`slideChangeTransition${r}`),"next"===o?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function ae(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),oe({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function ce(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),oe({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var ue={setTransition:se,transitionStart:ae,transitionEnd:ce};function le(e=0,t=this.params.speed,n=!0,r,i){"string"===typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:c,slidesGrid:u,previousIndex:l,activeIndex:h,rtlTranslate:d,wrapperEl:f,enabled:p}=s;if(s.animating&&a.preventInteractionOnTransition||!p&&!r&&!i)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/s.params.slidesPerGroup);g>=c.length&&(g=c.length-1);const v=-c[g];if(a.normalizeSlideIndex)for(let y=0;y<u.length;y+=1){const e=-Math.floor(100*v),t=Math.floor(100*u[y]),n=Math.floor(100*u[y+1]);"undefined"!==typeof u[y+1]?e>=t&&e<n-(n-t)/2?o=y:e>=t&&e<n&&(o=y+1):e>=t&&(o=y)}if(s.initialized&&o!==h){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(h||0)!==o)return!1}let w;if(o!==(l||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(v),w=o>h?"next":o<h?"prev":"reset",d&&-v===s.translate||!d&&v===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(v),"reset"!==w&&(s.transitionStart(n,w),s.transitionEnd(n,w)),!1;if(a.cssMode){const e=s.isHorizontal(),n=d?v:-v;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return y({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,w),0===t?s.transitionEnd(n,w):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,w))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function he(e=0,t=this.params.speed,n=!0,r){if("string"===typeof e){const t=parseInt(e,10);e=t}const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s+=i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,t,n,r)}function de(e=this.params.speed,t=!0,n){const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function fe(e=this.params.speed,t=!0,n){const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:c,animating:u}=r;if(!c)return r;const l=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!l&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=a?r.translate:-r.translate;function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const f=d(h),p=s.map((e=>d(e)));let m=s[p.indexOf(f)-1];if("undefined"===typeof m&&i.cssMode){let e;s.forEach(((t,n)=>{f>=t&&(e=n)})),"undefined"!==typeof e&&(m=s[e>0?e-1:e])}let g=0;if("undefined"!==typeof m&&(g=o.indexOf(m),g<0&&(g=r.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return r.slideTo(g,e,t,n)}function pe(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function me(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[a]){const e=i.snapGrid[a],t=i.snapGrid[a+1];c-e>(t-e)*r&&(s+=i.params.slidesPerGroup)}else{const e=i.snapGrid[a-1],t=i.snapGrid[a];c-e<=(t-e)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function ge(){const e=this,{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-r/2||s>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),s=e.getSlideIndex(w(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-r?(e.loopFix(),s=e.getSlideIndex(w(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}var ve={slideTo:le,slideToLoop:he,slideNext:de,slidePrev:fe,slideReset:pe,slideToClosest:me,slideToClickedSlide:ge};function ye(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=w(r,`.${n.slideClass}, swiper-slide`);i.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function we({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:l,slidesEl:h,params:d}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled)return t&&(d.centeredSlides||0!==a.snapIndex?d.centeredSlides&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=u,a.allowSlideNext=l,void a.emit("loopFix");const f="auto"===d.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let p=d.loopedSlides||f;p%d.slidesPerGroup!==0&&(p+=d.slidesPerGroup-p%d.slidesPerGroup),a.loopedSlides=p;const m=[],g=[];let v=a.activeIndex;"undefined"===typeof i?i=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(d.slideActiveClass)))[0]):v=i;const y="next"===n||!n,w="prev"===n||!n;let b=0,_=0;if(i<p){b=Math.max(p-i,d.slidesPerGroup);for(let e=0;e<p-i;e+=1){const t=e-Math.floor(e/c.length)*c.length;m.push(c.length-t-1)}}else if(i>a.slides.length-2*p){_=Math.max(i-(a.slides.length-2*p),d.slidesPerGroup);for(let e=0;e<_;e+=1){const t=e-Math.floor(e/c.length)*c.length;g.push(t)}}if(w&&m.forEach((e=>{h.prepend(a.slides[e])})),y&&g.forEach((e=>{h.append(a.slides[e])})),a.recalcSlides(),d.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&w)if("undefined"===typeof e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b],n=t-e;o?a.setTranslate(a.translate-n):(a.slideTo(v+b,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=n))}else r&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&y)if("undefined"===typeof e){const e=a.slidesGrid[v],t=a.slidesGrid[v-_],n=t-e;o?a.setTranslate(a.translate-n):(a.slideTo(v-_,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=n))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=u,a.allowSlideNext=l,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")}function be(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t="undefined"===typeof e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}var _e={loopCreate:ye,loopFix:we,loopDestroy:be};function Ie(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}function Ee(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}var Te={setGrabCursor:Ie,unsetGrabCursor:Ee};function Se(e,t=this){function n(t){if(!t||t===o()||t===c())return null;t.assignedSlot&&(t=t.assignedSlot);const r=t.closest(e);return r||t.getRootNode?r||n(t.getRootNode().host):null}return n(t)}function Ce(e){const t=this,n=o(),r=c(),i=t.touchEventsData;i.evCache.push(e);const{params:s,touches:a,enabled:u}=t;if(!u)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let d=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(d))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(i.isTouched&&i.isMoved)return;const f=!!s.noSwipingClass&&""!==s.noSwipingClass,p=e.composedPath?e.composedPath():e.path;f&&l.target&&l.target.shadowRoot&&p&&(d=p[0]);const m=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(g?Se(m,d):d.closest(m)))return void(t.allowClick=!0);if(s.swipeHandler&&!d.closest(s.swipeHandler))return;a.currentX=l.pageX,a.currentY=l.pageY;const v=a.currentX,y=a.currentY,w=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,b=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(w&&(v<=b||v>=r.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=y,i.touchStartTime=h(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let _=!0;d.matches(i.focusableElements)&&(_=!1,"SELECT"===d.nodeName&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==d&&n.activeElement.blur();const I=_&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!I||d.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function xe(e){const t=o(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:c}=n;if(!c)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",u));const l=r.evCache.findIndex((e=>e.pointerId===u.pointerId));l>=0&&(r.evCache[l]=u);const d=r.evCache.length>1?r.evCache[0]:u,f=d.pageX,p=d.pageY;if(u.preventedByNestedSwiper)return s.startX=f,void(s.startY=p);if(!n.allowTouchMove)return u.target.matches(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(s,{startX:f,startY:p,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:f,currentY:p}),r.touchStartTime=h()));if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(f<s.startX&&n.translate<=n.maxTranslate()||f>s.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);if(r.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;s.currentX=f,s.currentY=p;const m=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if("undefined"===typeof r.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",u),"undefined"===typeof r.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(r.startMoving=!0)),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&u.cancelable&&u.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&u.stopPropagation();let v=n.isHorizontal()?m:g,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(v=Math.abs(v)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),s.diff=v,v*=i.touchRatio,a&&(v=-v,y=-y);const w=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const b=n.params.loop&&!i.cssMode;if(!r.isMoved){if(b&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let _;r.isMoved&&w!==n.touchesDirection&&b&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),_=!0),n.emit("sliderMove",u),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let I=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),v>0?(b&&!_&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(I=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**E))):v<0&&(b&&!_&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===i.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(I=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**E))),I&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),i.threshold>0){if(!(Math.abs(v)>i.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ke(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){const n="pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView);if(!n)return}const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:c}=t;if(!c)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=h(),f=d-n.touchStartTime;if(t.allowClick){const e=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(e&&e[0]||u.target),t.emit("tap click",u),f<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=h(),l((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=i.followFinger?o?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});let m=0,g=t.slidesSizesGrid[0];for(let l=0;l<a.length;l+=l<i.slidesPerGroupSkip?1:i.slidesPerGroup){const e=l<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;"undefined"!==typeof a[l+e]?p>=a[l]&&p<a[l+e]&&(m=l,g=a[l+e]-a[l]):p>=a[l]&&(m=l,g=a[a.length-1]-a[a.length-2])}let v=null,y=null;i.rewind&&(t.isBeginning?y=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const w=(p-a[m])/g,b=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(f>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-i.longSwipesRatio?t.slideTo(m+b):null!==y&&w<0&&Math.abs(w)>i.longSwipesRatio?t.slideTo(y):t.slideTo(m))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);const e=t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl);e?u.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==v?v:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==y?y:m))}}let Ae;function Oe(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(Ae),Ae=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function Ne(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function De(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();i=0===s?0:(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Re(e){const t=this;K(t,e.target),t.update()}let Pe=!1;function Le(){}const Me=(e,t)=>{const n=o(),{params:r,el:i,wrapperEl:s,device:a}=e,c=!!r.nested,u="on"===t?"addEventListener":"removeEventListener",l=t;i[u]("pointerdown",e.onTouchStart,{passive:!1}),n[u]("pointermove",e.onTouchMove,{passive:!1,capture:c}),n[u]("pointerup",e.onTouchEnd,{passive:!0}),n[u]("pointercancel",e.onTouchEnd,{passive:!0}),n[u]("pointerout",e.onTouchEnd,{passive:!0}),n[u]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[u]("click",e.onClick,!0),r.cssMode&&s[u]("scroll",e.onScroll),r.updateOnWindowResize?e[l](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Oe,!0):e[l]("observerUpdate",Oe,!0),i[u]("load",e.onLoad,{capture:!0})};function Fe(){const e=this,t=o(),{params:n}=e;e.onTouchStart=Ce.bind(e),e.onTouchMove=xe.bind(e),e.onTouchEnd=ke.bind(e),n.cssMode&&(e.onScroll=De.bind(e)),e.onClick=Ne.bind(e),e.onLoad=Re.bind(e),Pe||(t.addEventListener("touchstart",Le),Pe=!0),Me(e,"on")}function Ve(){const e=this;Me(e,"off")}var Ue={attachEvents:Fe,detachEvents:Ve};const je=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function $e(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=o in s?s[o]:void 0,c=a||e.originalParams,u=je(e,r),l=je(e,c),h=r.enabled;u&&!l?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&l&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&"column"===c.grid.fill||!c.grid.fill&&"column"===r.grid.fill)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=r[t]&&r[t].enabled,i=c[t]&&c[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const d=c.direction&&c.direction!==r.direction,f=r.loop&&(c.slidesPerView!==r.slidesPerView||d);d&&n&&e.changeDirection(),g(e.params,c);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!p?e.disable():!h&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",c),f&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",c)}function Be(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const i=c(),s="window"===t?i.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"===typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1)),n=s*t;return{value:n,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let a=0;a<o.length;a+=1){const{point:e,value:s}=o[a];"window"===t?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=e):s<=n.clientWidth&&(r=e)}return r||"max"}var ze={setBreakpoint:$e,getBreakpoint:Be};function qe(e,t){const n=[];return e.forEach((e=>{"object"===typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"===typeof e&&n.push(t+e)})),n}function Ge(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=qe(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Ke(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var He={addClasses:Ge,removeClasses:Ke};function We(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Qe={checkOverflow:We},Ye={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Je(e,t){return function(n={}){const r=Object.keys(n)[0],i=n[r];"object"===typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in i?(!0===e[r]&&(e[r]={enabled:!0}),"object"!==typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),g(t,n)):g(t,n)):g(t,n)}}const Xe={eventsEmitter:V,update:X,translate:ie,transition:ue,slide:ve,loop:_e,grabCursor:Te,events:Ue,breakpoints:ze,checkOverflow:Qe,classes:He},Ze={};class et{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=g({},n),t&&!n.el&&(n.el=t);const r=o();if(n.el&&"string"===typeof n.el&&r.querySelectorAll(n.el).length>1){const e=[];return r.querySelectorAll(n.el).forEach((t=>{const r=g({},n,{el:t});e.push(new et(r))})),e}const i=this;i.__swiper__=!0,i.support=N(),i.device=R({userAgent:n.userAgent}),i.browser=L(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],n.modules&&Array.isArray(n.modules)&&i.modules.push(...n.modules);const s={};i.modules.forEach((e=>{e({params:n,swiper:i,extendParams:Je(n,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}));const a=g({},Ye,s);return i.params=g({},a,Ze,n),i.originalParams=g({},i.params),i.passedParams=g({},n),i.params&&i.params.on&&Object.keys(i.params.on).forEach((e=>{i.on(e,i.params.on[e])})),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return"horizontal"===i.params.direction},isVertical(){return"vertical"===i.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=w(t,`.${n.slideClass}, swiper-slide`),i=T(r[0]);return T(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=w(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),i=n.maxTranslate(),s=(i-r)*e+r;n.translateTo(s,"undefined"===typeof t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:r,slides:i,slidesGrid:s,slidesSizesGrid:o,size:a,activeIndex:c}=n;let u=1;if(r.centeredSlides){let e,t=i[c].swiperSlideSize;for(let n=c+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,u+=1,t>a&&(e=!0));for(let n=c-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,u+=1,t>a&&(e=!0))}else if("current"===e)for(let l=c+1;l<i.length;l+=1){const e=t?s[l]+o[l]-s[c]<a:s[l]-s[c]<a;e&&(u+=1)}else for(let l=c-1;l>=0;l-=1){const e=s[c]-s[l]<a;e&&(u+=1)}return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&K(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(r(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||r()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"===typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,i=()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){const e=n.shadowRoot.querySelector(r());return e}return w(n,r())[0]};let s=i();return!s&&t.params.createElements&&(s=b("div",t.params.wrapperClass),n.append(s),w(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===E(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===E(n,"direction")),wrongRTL:"-webkit-box"===E(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;const n=t.mount(e);return!1===n||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?K(t,e):e.addEventListener("load",(e=>{K(t,e.target)}))})),W(t),t.initialized=!0,W(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:i,wrapperEl:s,slides:o}=n;return"undefined"===typeof n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,u(n)),n.destroyed=!0),null}static extendDefaults(e){g(Ze,e)}static get extendedDefaults(){return Ze}static get defaults(){return Ye}static installModule(e){et.prototype.__modules__||(et.prototype.__modules__=[]);const t=et.prototype.__modules__;"function"===typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>et.installModule(e))),et):(et.installModule(e),et)}}Object.keys(Xe).forEach((e=>{Object.keys(Xe[e]).forEach((t=>{et.prototype[t]=Xe[e][t]}))})),et.use([M,F]);var tt=et;function nt(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((i=>{if(!n[i]&&!0===n.auto){let s=w(e.el,`.${r[i]}`)[0];s||(s=b("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}})),n}function rt({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const i=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function s(t){let n;return t&&"string"===typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"===typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"===typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function o(t,n){const r=e.params.navigation;t=i(t),t.forEach((t=>{t&&(t.classList[n?"add":"remove"](...r.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](r.lockClass))}))}function a(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(t,!1);o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function u(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function l(){const t=e.params.navigation;if(e.params.navigation=nt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=s(t.nextEl),r=s(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r}),n=i(n),r=i(r);const o=(n,r)=>{n&&n.addEventListener("click","next"===r?u:c),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>o(e,"next"))),r.forEach((e=>o(e,"prev")))}function h(){let{nextEl:t,prevEl:n}=e.navigation;t=i(t),n=i(n);const r=(t,n)=>{t.removeEventListener("click","next"===n?u:c),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>r(e,"next"))),n.forEach((e=>r(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?f():(l(),a())})),n("toEdge fromEdge lock unlock",(()=>{a()})),n("destroy",(()=>{h()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=i(t),n=i(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:s,prevEl:o}=e.navigation;s=i(s),o=i(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!s.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;s.length?t=s[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),r(!0===t?"navigationShow":"navigationHide"),[...s,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),l(),a()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:d,disable:f,update:a,init:l,destroy:h})}function it(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function st({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";let s;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o=0;const a=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function u(t,n){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[("prev"===n?"previous":"next")+"ElementSibling"],t&&(t.classList.add(`${r}-${n}`),t=t[("prev"===n?"previous":"next")+"ElementSibling"],t&&t.classList.add(`${r}-${n}-${n}`)))}function l(t){const n=t.target.closest(it(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();const r=T(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;(r<e.loopedSlides||r>e.slides.length-e.loopedSlides)&&e.loopFix({direction:r<e.loopedSlides?"prev":"next",activeSlideIndex:r,slideTo:!1}),e.slideToLoop(r)}else e.slideTo(r)}function h(){const t=e.rtl,n=e.params.pagination;if(c())return;let i,l=e.pagination.el;l=a(l);const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,d=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;if(i=e.params.loop?e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex:"undefined"!==typeof e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let a,c,h;if(n.dynamicBullets&&(s=C(r[0],e.isHorizontal()?"width":"height",!0),l.forEach((t=>{t.style[e.isHorizontal()?"width":"height"]=s*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==e.previousIndex&&(o+=i-(e.previousIndex||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),a=Math.max(i-o,0),c=a+(Math.min(r.length,n.dynamicMainBullets)-1),h=(c+a)/2),r.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"===typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),l.length>1)r.forEach((e=>{const t=T(e);t===i&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=a&&t<=c&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===a&&u(e,"prev"),t===c&&u(e,"next"))}));else{const e=r[i];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=r[a],t=r[c];for(let i=a;i<=c;i+=1)r[i]&&r[i].classList.add(...`${n.bulletActiveClass}-main`.split(" "));u(e,"prev"),u(t,"next")}}if(n.dynamicBullets){const i=Math.min(r.length,n.dynamicMainBullets+4),o=(s*i-s)/2-h*s,a=t?"right":"left";r.forEach((t=>{t.style[e.isHorizontal()?a:"top"]=`${o}px`}))}}l.forEach(((t,s)=>{if("fraction"===n.type&&(t.querySelectorAll(it(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(i+1)})),t.querySelectorAll(it(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(d)}))),"progressbar"===n.type){let r;r=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const s=(i+1)/d;let o=1,a=1;"horizontal"===r?o=s:a=s,t.querySelectorAll(it(n.progressbarFillClass)).forEach((t=>{t.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,t.style.transitionDuration=`${e.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(t.innerHTML=n.renderCustom(e,i+1,d),0===s&&r("paginationRender",t)):(0===s&&r("paginationRender",t),r("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](n.lockClass)}))}function d(){const t=e.params.pagination;if(c())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let i=e.pagination.el;i=a(i);let s="";if("bullets"===t.type){let r=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach((n=>{"custom"!==t.type&&(n.innerHTML=s||""),"bullets"===t.type&&e.pagination.bullets.push(...n.querySelectorAll(it(t.bulletClass)))})),"custom"!==t.type&&r("paginationRender",i[0])}function f(){e.params.pagination=nt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n;"string"===typeof t.el&&e.isElement&&(n=e.el.shadowRoot.querySelector(t.el)),n||"string"!==typeof t.el||(n=[...document.querySelectorAll(t.el)]),n||(n=t.el),n&&0!==n.length&&(e.params.uniqueNavElements&&"string"===typeof t.el&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.filter((t=>S(t,".swiper")[0]===e.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=a(n),n.forEach((n=>{"bullets"===t.type&&t.clickable&&n.classList.add(t.clickableClass),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener("click",l),e.enabled||n.classList.add(t.lockClass)})))}function p(){const t=e.params.pagination;if(c())return;let n=e.pagination.el;n&&(n=a(n),n.forEach((n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&n.removeEventListener("click",l)}))),e.pagination.bullets&&e.pagination.bullets.forEach((e=>e.classList.remove(...t.bulletActiveClass.split(" "))))}n("init",(()=>{!1===e.params.pagination.enabled?g():(f(),d(),h())})),n("activeIndexChange",(()=>{"undefined"===typeof e.snapIndex&&h()})),n("snapIndexChange",(()=>{h()})),n("snapGridLengthChange",(()=>{d(),h()})),n("destroy",(()=>{p()})),n("enable disable",(()=>{let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))))})),n("lock unlock",(()=>{h()})),n("click",((t,n)=>{const i=n.target;let{el:s}=e.pagination;if(Array.isArray(s)||(s=[s].filter((e=>!!e))),e.params.pagination.el&&e.params.pagination.hideOnClick&&s&&s.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=s[0].classList.contains(e.params.pagination.hiddenClass);r(!0===t?"paginationShow":"paginationHide"),s.forEach((t=>t.classList.toggle(e.params.pagination.hiddenClass)))}}));const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.remove(e.params.pagination.paginationDisabledClass)))),f(),d(),h()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.add(e.params.pagination.paginationDisabledClass)))),p()};Object.assign(e.pagination,{enable:m,disable:g,render:d,update:h,init:f,destroy:p})}function ot({swiper:e,extendParams:t,on:n,emit:r,params:i}){let s,a;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,u,l,h,d,f,p,m=i&&i.autoplay?i.autoplay.delay:3e3,g=i&&i.autoplay?i.autoplay.delay:3e3,v=(new Date).getTime;function y(t){e&&!e.destroyed&&e.wrapperEl&&t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",y),S())}const w=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(g=c,u=!1);const t=e.autoplay.paused?c:v+g-(new Date).getTime();e.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/m),a=requestAnimationFrame((()=>{w()}))},b=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:e.slides[e.activeIndex],!t)return;const n=parseInt(t.getAttribute("data-swiper-autoplay"),10);return n},_=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),w();let n="undefined"===typeof t?e.params.autoplay.delay:t;m=e.params.autoplay.delay,g=e.params.autoplay.delay;const i=b();!Number.isNaN(i)&&i>0&&"undefined"===typeof t&&(n=i,m=i,g=i),c=n;const o=e.params.speed,u=()=>{e&&!e.destroyed&&(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(o,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,o,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(o,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,o,!0,!0),r("autoplay")),e.params.cssMode&&(v=(new Date).getTime(),requestAnimationFrame((()=>{_()}))))};return n>0?(clearTimeout(s),s=setTimeout((()=>{u()}),n)):requestAnimationFrame((()=>{u()})),n},I=()=>{e.autoplay.running=!0,_(),r("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(a),r("autoplayStop")},T=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),t||(p=!0);const i=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",y):S()};if(e.autoplay.paused=!0,n)return f&&(c=e.params.autoplay.delay),f=!1,void i();const o=c||e.params.autoplay.delay;c=o-((new Date).getTime()-v),e.isEnd&&c<0&&!e.params.loop||(c<0&&(c=0),i())},S=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(v=(new Date).getTime(),p?(p=!1,_(c)):_(),e.autoplay.paused=!1,r("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const t=o();"hidden"===t.visibilityState&&(p=!0,T(!0)),"visible"===t.visibilityState&&S()},x=e=>{"mouse"===e.pointerType&&(p=!0,T(!0))},k=t=>{"mouse"===t.pointerType&&e.autoplay.paused&&S()},A=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",x),e.el.addEventListener("pointerleave",k))},O=()=>{e.el.removeEventListener("pointerenter",x),e.el.removeEventListener("pointerleave",k)},N=()=>{const e=o();e.addEventListener("visibilitychange",C)},D=()=>{const e=o();e.removeEventListener("visibilitychange",C)};n("init",(()=>{e.params.autoplay.enabled&&(A(),N(),v=(new Date).getTime(),I())})),n("destroy",(()=>{O(),D(),e.autoplay.running&&E()})),n("beforeTransitionStart",((t,n,r)=>{!e.destroyed&&e.autoplay.running&&(r||!e.params.autoplay.disableOnInteraction?T(!0,!0):E())})),n("sliderFirstMove",(()=>{!e.destroyed&&e.autoplay.running&&(e.params.autoplay.disableOnInteraction?E():(l=!0,h=!1,p=!1,d=setTimeout((()=>{p=!0,h=!0,T(!0)}),200)))})),n("touchEnd",(()=>{if(!e.destroyed&&e.autoplay.running&&l){if(clearTimeout(d),clearTimeout(s),e.params.autoplay.disableOnInteraction)return h=!1,void(l=!1);h&&e.params.cssMode&&S(),h=!1,l=!1}})),n("slideChange",(()=>{!e.destroyed&&e.autoplay.running&&(f=!0)})),Object.assign(e.autoplay,{start:I,stop:E,pause:T,resume:S})}}}]);
//# sourceMappingURL=chunk-vendors.5bea0eff.js.map