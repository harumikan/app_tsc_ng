webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {//*********************
	// polyfills
	//*********************
	"use strict";
	__webpack_require__(256);
	__webpack_require__(258);
	// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
	__webpack_require__(261);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zone.js/lib/browser/zone-microtask\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	// in Production you may want to remove this
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zone.js/lib/browser/long-stack-trace-zone\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	global.__extends = (this && this.__extends) || function (d, b) {
	    for (var p in b)
	        if (b.hasOwnProperty(p))
	            d[p] = b[p];
	    var __ = function () { this.constructor = d; };
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	global.__decorate = global.Reflect.decorate;
	global.__metadata = global.Reflect.metadata;
	global.__param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	};
	global.__awaiter = (this && this.__awaiter) ||
	    function (thisArg, _arguments, Promise, generator) {
	        return new Promise(function (resolve, reject) {
	            generator = generator.call(thisArg, _arguments);
	            function cast(value) {
	                return value instanceof Promise && value.constructor === Promise ?
	                    value : new Promise(function (resolve) { resolve(value); });
	            }
	            function onfulfill(value) { try {
	                step('next', value);
	            }
	            catch (e) {
	                reject(e);
	            } }
	            function onreject(value) { try {
	                step('throw', value);
	            }
	            catch (e) {
	                reject(e);
	            } }
	            function step(verb, value) {
	                var result = generator[verb](value);
	                result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
	            }
	            step('next', void 0);
	        });
	    };
	//*********************
	//  vendor
	//*********************
	// Angular 2
	__webpack_require__(1);
	__webpack_require__(185);
	__webpack_require__(22);
	__webpack_require__(225);
	__webpack_require__(264);
	// RxJS
	__webpack_require__(279);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, process) { /*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.35.0
	  * see https://github.com/paulmillr/es6-shim/blob/0.35.0/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	  /*global define, module, exports */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.returnExports = factory();
	  }
	}(this, function () {
	  'use strict';
	
	  var _apply = Function.call.bind(Function.apply);
	  var _call = Function.call.bind(Function.call);
	  var isArray = Array.isArray;
	  var keys = Object.keys;
	
	  var not = function notThunker(func) {
	    return function notThunk() { return !_apply(func, this, arguments); };
	  };
	  var throwsError = function (func) {
	    try {
	      func();
	      return false;
	    } catch (e) {
	      return true;
	    }
	  };
	  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
	    try {
	      return func();
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isCallableWithoutNew = not(throwsError);
	  var arePropertyDescriptorsSupported = function () {
	    // if Object.defineProperty exists but throws, it's IE 8
	    return !throwsError(function () { Object.defineProperty({}, 'x', { get: function () {} }); });
	  };
	  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
	  var functionsHaveNames = (function foo() {}).name === 'foo';
	
	  var _forEach = Function.call.bind(Array.prototype.forEach);
	  var _reduce = Function.call.bind(Array.prototype.reduce);
	  var _filter = Function.call.bind(Array.prototype.filter);
	  var _some = Function.call.bind(Array.prototype.some);
	
	  var defineProperty = function (object, name, value, force) {
	    if (!force && name in object) { return; }
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	
	  // Define configurable, writable and non-enumerable props
	  // if they don’t exist.
	  var defineProperties = function (object, map, forceOverride) {
	    _forEach(keys(map), function (name) {
	      var method = map[name];
	      defineProperty(object, name, method, !!forceOverride);
	    });
	  };
	
	  var _toString = Function.call.bind(Object.prototype.toString);
	  var isCallable =  false ? function IsCallableSlow(x) {
	    // Some old browsers (IE, FF) say that typeof /abc/ === 'function'
	    return typeof x === 'function' && _toString(x) === '[object Function]';
	  } : function IsCallableFast(x) { return typeof x === 'function'; };
	
	  var Value = {
	    getter: function (object, name, getter) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        get: getter
	      });
	    },
	    proxy: function (originalObject, key, targetObject) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
	      Object.defineProperty(targetObject, key, {
	        configurable: originalDescriptor.configurable,
	        enumerable: originalDescriptor.enumerable,
	        get: function getKey() { return originalObject[key]; },
	        set: function setKey(value) { originalObject[key] = value; }
	      });
	    },
	    redefine: function (object, property, newValue) {
	      if (supportsDescriptors) {
	        var descriptor = Object.getOwnPropertyDescriptor(object, property);
	        descriptor.value = newValue;
	        Object.defineProperty(object, property, descriptor);
	      } else {
	        object[property] = newValue;
	      }
	    },
	    defineByDescriptor: function (object, property, descriptor) {
	      if (supportsDescriptors) {
	        Object.defineProperty(object, property, descriptor);
	      } else if ('value' in descriptor) {
	        object[property] = descriptor.value;
	      }
	    },
	    preserveToString: function (target, source) {
	      if (source && isCallable(source.toString)) {
	        defineProperty(target, 'toString', source.toString.bind(source), true);
	      }
	    }
	  };
	
	  // Simple shim for Object.create on ES3 browsers
	  // (unlike real shim, no attempt to support `prototype === null`)
	  var create = Object.create || function (prototype, properties) {
	    var Prototype = function Prototype() {};
	    Prototype.prototype = prototype;
	    var object = new Prototype();
	    if (typeof properties !== 'undefined') {
	      keys(properties).forEach(function (key) {
	        Value.defineByDescriptor(object, key, properties[key]);
	      });
	    }
	    return object;
	  };
	
	  var supportsSubclassing = function (C, f) {
	    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }
	    return valueOrFalseIfThrows(function () {
	      var Sub = function Subclass(arg) {
	        var o = new C(arg);
	        Object.setPrototypeOf(o, Subclass.prototype);
	        return o;
	      };
	      Object.setPrototypeOf(Sub, C);
	      Sub.prototype = create(C.prototype, {
	        constructor: { value: Sub }
	      });
	      return f(Sub);
	    });
	  };
	
	  var getGlobal = function () {
	    /* global self, window, global */
	    // the only reliable means to get the global object is
	    // `Function('return this')()`
	    // However, this causes CSP violations in Chrome apps.
	    if (typeof self !== 'undefined') { return self; }
	    if (typeof window !== 'undefined') { return window; }
	    if (typeof global !== 'undefined') { return global; }
	    throw new Error('unable to locate global object');
	  };
	
	  var globals = getGlobal();
	  var globalIsFinite = globals.isFinite;
	  var _indexOf = Function.call.bind(String.prototype.indexOf);
	  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
	  var _concat = Function.call.bind(Array.prototype.concat);
	  var _sort = Function.call.bind(Array.prototype.sort);
	  var _strSlice = Function.call.bind(String.prototype.slice);
	  var _push = Function.call.bind(Array.prototype.push);
	  var _pushApply = Function.apply.bind(Array.prototype.push);
	  var _shift = Function.call.bind(Array.prototype.shift);
	  var _max = Math.max;
	  var _min = Math.min;
	  var _floor = Math.floor;
	  var _abs = Math.abs;
	  var _log = Math.log;
	  var _sqrt = Math.sqrt;
	  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	  var ArrayIterator; // make our implementation private
	  var noop = function () {};
	
	  var Symbol = globals.Symbol || {};
	  var symbolSpecies = Symbol.species || '@@species';
	
	  var numberIsNaN = Number.isNaN || function isNaN(value) {
	    // NaN !== NaN, but they are identical.
	    // NaNs are the only non-reflexive value, i.e., if x !== x,
	    // then x is NaN.
	    // isNaN is broken: it converts its argument to number, so
	    // isNaN('foo') => true
	    return value !== value;
	  };
	  var numberIsFinite = Number.isFinite || function isFinite(value) {
	    return typeof value === 'number' && globalIsFinite(value);
	  };
	
	  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	  // can be replaced with require('is-arguments') if we ever use a build process instead
	  var isStandardArguments = function isArguments(value) {
	    return _toString(value) === '[object Arguments]';
	  };
	  var isLegacyArguments = function isArguments(value) {
	    return value !== null &&
	      typeof value === 'object' &&
	      typeof value.length === 'number' &&
	      value.length >= 0 &&
	      _toString(value) !== '[object Array]' &&
	      _toString(value.callee) === '[object Function]';
	  };
	  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
	
	  var Type = {
	    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },
	    object: function (x) { return x !== null && typeof x === 'object'; },
	    string: function (x) { return _toString(x) === '[object String]'; },
	    regex: function (x) { return _toString(x) === '[object RegExp]'; },
	    symbol: function (x) {
	      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
	    }
	  };
	
	  var overrideNative = function overrideNative(object, property, replacement) {
	    var original = object[property];
	    defineProperty(object, property, replacement, true);
	    Value.preserveToString(object[property], original);
	  };
	
	  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());
	
	  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
	  // we're going to use an arbitrary _-prefixed name to make our shims
	  // work properly with each other, even though we don't have full Iterator
	  // support.  That is, `Array.from(map.keys())` will work, but we don't
	  // pretend to export a "real" Iterator interface.
	  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
	  // Firefox ships a partial implementation using the name @@iterator.
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
	  // So use that name if we detect it.
	  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	
	  // Reflect
	  if (!globals.Reflect) {
	    defineProperty(globals, 'Reflect', {}, true);
	  }
	  var Reflect = globals.Reflect;
	
	  var $String = String;
	
	  var ES = {
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	    Call: function Call(F, V) {
	      var args = arguments.length > 2 ? arguments[2] : [];
	      if (!ES.IsCallable(F)) {
	        throw new TypeError(F + ' is not a function');
	      }
	      return _apply(F, V, args);
	    },
	
	    RequireObjectCoercible: function (x, optMessage) {
	      /* jshint eqnull:true */
	      if (x == null) {
	        throw new TypeError(optMessage || 'Cannot call method on ' + x);
	      }
	      return x;
	    },
	
	    // This might miss the "(non-standard exotic and does not implement
	    // [[Call]])" case from
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
	    // but we can't find any evidence these objects exist in practice.
	    // If we find some in the future, you could test `Object(x) === x`,
	    // which is reliable according to
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
	    // but is not well optimized by runtimes and creates an object
	    // whenever it returns false, and thus is very slow.
	    TypeIsObject: function (x) {
	      if (x === void 0 || x === null || x === true || x === false) {
	        return false;
	      }
	      return typeof x === 'function' || typeof x === 'object';
	    },
	
	    ToObject: function (o, optMessage) {
	      return Object(ES.RequireObjectCoercible(o, optMessage));
	    },
	
	    IsCallable: isCallable,
	
	    IsConstructor: function (x) {
	      // We can't tell callables from constructors in ES5
	      return ES.IsCallable(x);
	    },
	
	    ToInt32: function (x) {
	      return ES.ToNumber(x) >> 0;
	    },
	
	    ToUint32: function (x) {
	      return ES.ToNumber(x) >>> 0;
	    },
	
	    ToNumber: function (value) {
	      if (_toString(value) === '[object Symbol]') {
	        throw new TypeError('Cannot convert a Symbol value to a number');
	      }
	      return +value;
	    },
	
	    ToInteger: function (value) {
	      var number = ES.ToNumber(value);
	      if (numberIsNaN(number)) { return 0; }
	      if (number === 0 || !numberIsFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * _floor(_abs(number));
	    },
	
	    ToLength: function (value) {
	      var len = ES.ToInteger(value);
	      if (len <= 0) { return 0; } // includes converting -0 to +0
	      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
	      return len;
	    },
	
	    SameValue: function (a, b) {
	      if (a === b) {
	        // 0 === -0, but they are not identical.
	        if (a === 0) { return 1 / a === 1 / b; }
	        return true;
	      }
	      return numberIsNaN(a) && numberIsNaN(b);
	    },
	
	    SameValueZero: function (a, b) {
	      // same as SameValue except for SameValueZero(+0, -0) == true
	      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
	    },
	
	    IsIterable: function (o) {
	      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
	    },
	
	    GetIterator: function (o) {
	      if (isArguments(o)) {
	        // special case support for `arguments`
	        return new ArrayIterator(o, 'value');
	      }
	      var itFn = ES.GetMethod(o, $iterator$);
	      if (!ES.IsCallable(itFn)) {
	        // Better diagnostics if itFn is null or undefined
	        throw new TypeError('value is not an iterable');
	      }
	      var it = ES.Call(itFn, o);
	      if (!ES.TypeIsObject(it)) {
	        throw new TypeError('bad iterator');
	      }
	      return it;
	    },
	
	    GetMethod: function (o, p) {
	      var func = ES.ToObject(o)[p];
	      if (func === void 0 || func === null) {
	        return void 0;
	      }
	      if (!ES.IsCallable(func)) {
	        throw new TypeError('Method not callable: ' + p);
	      }
	      return func;
	    },
	
	    IteratorComplete: function (iterResult) {
	      return !!(iterResult.done);
	    },
	
	    IteratorClose: function (iterator, completionIsThrow) {
	      var returnMethod = ES.GetMethod(iterator, 'return');
	      if (returnMethod === void 0) {
	        return;
	      }
	      var innerResult, innerException;
	      try {
	        innerResult = ES.Call(returnMethod, iterator);
	      } catch (e) {
	        innerException = e;
	      }
	      if (completionIsThrow) {
	        return;
	      }
	      if (innerException) {
	        throw innerException;
	      }
	      if (!ES.TypeIsObject(innerResult)) {
	        throw new TypeError("Iterator's return method returned a non-object.");
	      }
	    },
	
	    IteratorNext: function (it) {
	      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
	      if (!ES.TypeIsObject(result)) {
	        throw new TypeError('bad iterator');
	      }
	      return result;
	    },
	
	    IteratorStep: function (it) {
	      var result = ES.IteratorNext(it);
	      var done = ES.IteratorComplete(result);
	      return done ? false : result;
	    },
	
	    Construct: function (C, args, newTarget, isES6internal) {
	      var target = typeof newTarget === 'undefined' ? C : newTarget;
	
	      if (!isES6internal && Reflect.construct) {
	        // Try to use Reflect.construct if available
	        return Reflect.construct(C, args, target);
	      }
	      // OK, we have to fake it.  This will only work if the
	      // C.[[ConstructorKind]] == "base" -- but that's the only
	      // kind we can make in ES5 code anyway.
	
	      // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
	      var proto = target.prototype;
	      if (!ES.TypeIsObject(proto)) {
	        proto = Object.prototype;
	      }
	      var obj = create(proto);
	      // Call the constructor.
	      var result = ES.Call(C, obj, args);
	      return ES.TypeIsObject(result) ? result : obj;
	    },
	
	    SpeciesConstructor: function (O, defaultConstructor) {
	      var C = O.constructor;
	      if (C === void 0) {
	        return defaultConstructor;
	      }
	      if (!ES.TypeIsObject(C)) {
	        throw new TypeError('Bad constructor');
	      }
	      var S = C[symbolSpecies];
	      if (S === void 0 || S === null) {
	        return defaultConstructor;
	      }
	      if (!ES.IsConstructor(S)) {
	        throw new TypeError('Bad @@species');
	      }
	      return S;
	    },
	
	    CreateHTML: function (string, tag, attribute, value) {
	      var S = ES.ToString(string);
	      var p1 = '<' + tag;
	      if (attribute !== '') {
	        var V = ES.ToString(value);
	        var escapedV = V.replace(/"/g, '&quot;');
	        p1 += ' ' + attribute + '="' + escapedV + '"';
	      }
	      var p2 = p1 + '>';
	      var p3 = p2 + S;
	      return p3 + '</' + tag + '>';
	    },
	
	    IsRegExp: function IsRegExp(argument) {
	      if (!ES.TypeIsObject(argument)) {
	        return false;
	      }
	      var isRegExp = argument[Symbol.match];
	      if (typeof isRegExp !== 'undefined') {
	        return !!isRegExp;
	      }
	      return Type.regex(argument);
	    },
	
	    ToString: function ToString(string) {
	      return $String(string);
	    }
	  };
	
	  // Well-known Symbol shims
	  if (supportsDescriptors && hasSymbols) {
	    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
	      if (Type.symbol(Symbol[name])) {
	        return Symbol[name];
	      }
	      var sym = Symbol['for']('Symbol.' + name);
	      Object.defineProperty(Symbol, name, {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: sym
	      });
	      return sym;
	    };
	    if (!Type.symbol(Symbol.search)) {
	      var symbolSearch = defineWellKnownSymbol('search');
	      var originalSearch = String.prototype.search;
	      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
	        return ES.Call(originalSearch, string, [this]);
	      });
	      var searchShim = function search(regexp) {
	        var O = ES.RequireObjectCoercible(this);
	        if (regexp !== null && typeof regexp !== 'undefined') {
	          var searcher = ES.GetMethod(regexp, symbolSearch);
	          if (typeof searcher !== 'undefined') {
	            return ES.Call(searcher, regexp, [O]);
	          }
	        }
	        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
	      };
	      overrideNative(String.prototype, 'search', searchShim);
	    }
	    if (!Type.symbol(Symbol.replace)) {
	      var symbolReplace = defineWellKnownSymbol('replace');
	      var originalReplace = String.prototype.replace;
	      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
	        return ES.Call(originalReplace, string, [this, replaceValue]);
	      });
	      var replaceShim = function replace(searchValue, replaceValue) {
	        var O = ES.RequireObjectCoercible(this);
	        if (searchValue !== null && typeof searchValue !== 'undefined') {
	          var replacer = ES.GetMethod(searchValue, symbolReplace);
	          if (typeof replacer !== 'undefined') {
	            return ES.Call(replacer, searchValue, [O, replaceValue]);
	          }
	        }
	        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
	      };
	      overrideNative(String.prototype, 'replace', replaceShim);
	    }
	    if (!Type.symbol(Symbol.split)) {
	      var symbolSplit = defineWellKnownSymbol('split');
	      var originalSplit = String.prototype.split;
	      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
	        return ES.Call(originalSplit, string, [this, limit]);
	      });
	      var splitShim = function split(separator, limit) {
	        var O = ES.RequireObjectCoercible(this);
	        if (separator !== null && typeof separator !== 'undefined') {
	          var splitter = ES.GetMethod(separator, symbolSplit);
	          if (typeof splitter !== 'undefined') {
	            return ES.Call(splitter, separator, [O, limit]);
	          }
	        }
	        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
	      };
	      overrideNative(String.prototype, 'split', splitShim);
	    }
	    var symbolMatchExists = Type.symbol(Symbol.match);
	    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function () {
	      // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
	      // Firefox 40 and below have Symbol.match but String#match works fine.
	      var o = {};
	      o[Symbol.match] = function () { return 42; };
	      return 'a'.match(o) !== 42;
	    }());
	    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
	      var symbolMatch = defineWellKnownSymbol('match');
	
	      var originalMatch = String.prototype.match;
	      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
	        return ES.Call(originalMatch, string, [this]);
	      });
	
	      var matchShim = function match(regexp) {
	        var O = ES.RequireObjectCoercible(this);
	        if (regexp !== null && typeof regexp !== 'undefined') {
	          var matcher = ES.GetMethod(regexp, symbolMatch);
	          if (typeof matcher !== 'undefined') {
	            return ES.Call(matcher, regexp, [O]);
	          }
	        }
	        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
	      };
	      overrideNative(String.prototype, 'match', matchShim);
	    }
	  }
	
	  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
	    Value.preserveToString(replacement, original);
	    if (Object.setPrototypeOf) {
	      // sets up proper prototype chain where possible
	      Object.setPrototypeOf(original, replacement);
	    }
	    if (supportsDescriptors) {
	      _forEach(Object.getOwnPropertyNames(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        Value.proxy(original, key, replacement);
	      });
	    } else {
	      _forEach(Object.keys(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        replacement[key] = original[key];
	      });
	    }
	    replacement.prototype = original.prototype;
	    Value.redefine(original.prototype, 'constructor', replacement);
	  };
	
	  var defaultSpeciesGetter = function () { return this; };
	  var addDefaultSpecies = function (C) {
	    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
	      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
	    }
	  };
	
	  var addIterator = function (prototype, impl) {
	    var implementation = impl || function iterator() { return this; };
	    defineProperty(prototype, $iterator$, implementation);
	    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
	      // implementations are buggy when $iterator$ is a Symbol
	      prototype[$iterator$] = implementation;
	    }
	  };
	
	  var createDataProperty = function createDataProperty(object, name, value) {
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: true,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
	    createDataProperty(object, name, value);
	    if (!ES.SameValue(object[name], value)) {
	      throw new TypeError('property is nonconfigurable');
	    }
	  };
	
	  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {
	    // This is an es5 approximation to es6 construct semantics.  in es6,
	    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
	    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
	    // to Foo and then returns Foo().
	
	    // Many ES6 object then have constructors of the form:
	    // 1. If NewTarget is undefined, throw a TypeError exception
	    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)
	
	    // So we're going to emulate those first two steps.
	    if (!ES.TypeIsObject(o)) {
	      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
	    }
	    var proto = defaultNewTarget.prototype;
	    if (!ES.TypeIsObject(proto)) {
	      proto = defaultProto;
	    }
	    var obj = create(proto);
	    for (var name in slots) {
	      if (_hasOwnProperty(slots, name)) {
	        var value = slots[name];
	        defineProperty(obj, name, value, true);
	      }
	    }
	    return obj;
	  };
	
	  // Firefox 31 reports this function's length as 0
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
	  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
	    var originalFromCodePoint = String.fromCodePoint;
	    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) { return ES.Call(originalFromCodePoint, this, arguments); });
	  }
	
	  var StringShims = {
	    fromCodePoint: function fromCodePoint(codePoints) {
	      var result = [];
	      var next;
	      for (var i = 0, length = arguments.length; i < length; i++) {
	        next = Number(arguments[i]);
	        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
	          throw new RangeError('Invalid code point ' + next);
	        }
	
	        if (next < 0x10000) {
	          _push(result, String.fromCharCode(next));
	        } else {
	          next -= 0x10000;
	          _push(result, String.fromCharCode((next >> 10) + 0xD800));
	          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
	        }
	      }
	      return result.join('');
	    },
	
	    raw: function raw(callSite) {
	      var cooked = ES.ToObject(callSite, 'bad callSite');
	      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
	      var len = rawString.length;
	      var literalsegments = ES.ToLength(len);
	      if (literalsegments <= 0) {
	        return '';
	      }
	
	      var stringElements = [];
	      var nextIndex = 0;
	      var nextKey, next, nextSeg, nextSub;
	      while (nextIndex < literalsegments) {
	        nextKey = ES.ToString(nextIndex);
	        nextSeg = ES.ToString(rawString[nextKey]);
	        _push(stringElements, nextSeg);
	        if (nextIndex + 1 >= literalsegments) {
	          break;
	        }
	        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
	        nextSub = ES.ToString(next);
	        _push(stringElements, nextSub);
	        nextIndex += 1;
	      }
	      return stringElements.join('');
	    }
	  };
	  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
	    // IE 11 TP has a broken String.raw implementation
	    overrideNative(String, 'raw', StringShims.raw);
	  }
	  defineProperties(String, StringShims);
	
	  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
	  // Perf: http://jsperf.com/string-repeat2/2
	  var stringRepeat = function repeat(s, times) {
	    if (times < 1) { return ''; }
	    if (times % 2) { return repeat(s, times - 1) + s; }
	    var half = repeat(s, times / 2);
	    return half + half;
	  };
	  var stringMaxLength = Infinity;
	
	  var StringPrototypeShims = {
	    repeat: function repeat(times) {
	      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
	      var numTimes = ES.ToInteger(times);
	      if (numTimes < 0 || numTimes >= stringMaxLength) {
	        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
	      }
	      return stringRepeat(thisStr, numTimes);
	    },
	
	    startsWith: function startsWith(searchString) {
	      var S = ES.ToString(ES.RequireObjectCoercible(this));
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('Cannot call method "startsWith" with a regex');
	      }
	      var searchStr = ES.ToString(searchString);
	      var position;
	      if (arguments.length > 1) {
	        position = arguments[1];
	      }
	      var start = _max(ES.ToInteger(position), 0);
	      return _strSlice(S, start, start + searchStr.length) === searchStr;
	    },
	
	    endsWith: function endsWith(searchString) {
	      var S = ES.ToString(ES.RequireObjectCoercible(this));
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('Cannot call method "endsWith" with a regex');
	      }
	      var searchStr = ES.ToString(searchString);
	      var len = S.length;
	      var endPosition;
	      if (arguments.length > 1) {
	        endPosition = arguments[1];
	      }
	      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
	      var end = _min(_max(pos, 0), len);
	      return _strSlice(S, end - searchStr.length, end) === searchStr;
	    },
	
	    includes: function includes(searchString) {
	      if (ES.IsRegExp(searchString)) {
	        throw new TypeError('"includes" does not accept a RegExp');
	      }
	      var searchStr = ES.ToString(searchString);
	      var position;
	      if (arguments.length > 1) {
	        position = arguments[1];
	      }
	      // Somehow this trick makes method 100% compat with the spec.
	      return _indexOf(this, searchStr, position) !== -1;
	    },
	
	    codePointAt: function codePointAt(pos) {
	      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
	      var position = ES.ToInteger(pos);
	      var length = thisStr.length;
	      if (position >= 0 && position < length) {
	        var first = thisStr.charCodeAt(position);
	        var isEnd = (position + 1 === length);
	        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
	        var second = thisStr.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) { return first; }
	        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
	      }
	    }
	  };
	  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
	    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
	  }
	
	  if (String.prototype.startsWith && String.prototype.endsWith) {
	    var startsWithRejectsRegex = throwsError(function () {
	      /* throws if spec-compliant */
	      '/a/'.startsWith(/a/);
	    });
	    var startsWithHandlesInfinity = valueOrFalseIfThrows(function () {
	      return 'abc'.startsWith('a', Infinity) === false;
	    });
	    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
	      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
	      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
	      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
	    }
	  }
	  if (hasSymbols) {
	    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.startsWith(re);
	    });
	    if (!startsWithSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
	    }
	    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.endsWith(re);
	    });
	    if (!endsWithSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
	    }
	    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function () {
	      var re = /a/;
	      re[Symbol.match] = false;
	      return '/a/'.includes(re);
	    });
	    if (!includesSupportsSymbolMatch) {
	      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
	    }
	  }
	
	  defineProperties(String.prototype, StringPrototypeShims);
	
	  // whitespace from: http://es5.github.io/#x15.5.4.20
	  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	  var ws = [
	    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	    '\u2029\uFEFF'
	  ].join('');
	  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	  var trimShim = function trim() {
	    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
	  };
	  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	  var isBadHexRegex = /^[\-+]0x[0-9a-f]+$/i;
	  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
	  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
	
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
	  var StringIterator = function (s) {
	    ES.RequireObjectCoercible(s);
	    this._s = ES.ToString(s);
	    this._i = 0;
	  };
	  StringIterator.prototype.next = function () {
	    var s = this._s, i = this._i;
	    if (typeof s === 'undefined' || i >= s.length) {
	      this._s = void 0;
	      return { value: void 0, done: true };
	    }
	    var first = s.charCodeAt(i), second, len;
	    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
	      len = 1;
	    } else {
	      second = s.charCodeAt(i + 1);
	      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
	    }
	    this._i = i + len;
	    return { value: s.substr(i, len), done: false };
	  };
	  addIterator(StringIterator.prototype);
	  addIterator(String.prototype, function () {
	    return new StringIterator(this);
	  });
	
	  var ArrayShims = {
	    from: function from(items) {
	      var C = this;
	      var mapFn;
	      if (arguments.length > 1) {
	        mapFn = arguments[1];
	      }
	      var mapping, T;
	      if (typeof mapFn === 'undefined') {
	        mapping = false;
	      } else {
	        if (!ES.IsCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }
	        if (arguments.length > 2) {
	          T = arguments[2];
	        }
	        mapping = true;
	      }
	
	      // Note that that Arrays will use ArrayIterator:
	      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
	      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
	
	      var length, result, i;
	      if (usingIterator) {
	        result = ES.IsConstructor(C) ? Object(new C()) : [];
	        var iterator = ES.GetIterator(items);
	        var next, nextValue;
	
	        i = 0;
	        while (true) {
	          next = ES.IteratorStep(iterator);
	          if (next === false) {
	            break;
	          }
	          nextValue = next.value;
	          try {
	            if (mapping) {
	              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
	            }
	            result[i] = nextValue;
	          } catch (e) {
	            ES.IteratorClose(iterator, true);
	            throw e;
	          }
	          i += 1;
	        }
	        length = i;
	      } else {
	        var arrayLike = ES.ToObject(items);
	        length = ES.ToLength(arrayLike.length);
	        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
	        var value;
	        for (i = 0; i < length; ++i) {
	          value = arrayLike[i];
	          if (mapping) {
	            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
	          }
	          result[i] = value;
	        }
	      }
	
	      result.length = length;
	      return result;
	    },
	
	    of: function of() {
	      var len = arguments.length;
	      var C = this;
	      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
	      for (var k = 0; k < len; ++k) {
	        createDataPropertyOrThrow(A, k, arguments[k]);
	      }
	      A.length = len;
	      return A;
	    }
	  };
	  defineProperties(Array, ArrayShims);
	  addDefaultSpecies(Array);
	
	  // Given an argument x, it will return an IteratorResult object,
	  // with value set to x and done to false.
	  // Given no arguments, it will return an iterator completion object.
	  var iteratorResult = function (x) {
	    return { value: x, done: arguments.length === 0 };
	  };
	
	  // Our ArrayIterator is private; see
	  // https://github.com/paulmillr/es6-shim/issues/252
	  ArrayIterator = function (array, kind) {
	      this.i = 0;
	      this.array = array;
	      this.kind = kind;
	  };
	
	  defineProperties(ArrayIterator.prototype, {
	    next: function () {
	      var i = this.i, array = this.array;
	      if (!(this instanceof ArrayIterator)) {
	        throw new TypeError('Not an ArrayIterator');
	      }
	      if (typeof array !== 'undefined') {
	        var len = ES.ToLength(array.length);
	        for (; i < len; i++) {
	          var kind = this.kind;
	          var retval;
	          if (kind === 'key') {
	            retval = i;
	          } else if (kind === 'value') {
	            retval = array[i];
	          } else if (kind === 'entry') {
	            retval = [i, array[i]];
	          }
	          this.i = i + 1;
	          return { value: retval, done: false };
	        }
	      }
	      this.array = void 0;
	      return { value: void 0, done: true };
	    }
	  });
	  addIterator(ArrayIterator.prototype);
	
	  var orderKeys = function orderKeys(a, b) {
	    var aNumeric = String(ES.ToInteger(a)) === a;
	    var bNumeric = String(ES.ToInteger(b)) === b;
	    if (aNumeric && bNumeric) {
	      return b - a;
	    } else if (aNumeric && !bNumeric) {
	      return -1;
	    } else if (!aNumeric && bNumeric) {
	      return 1;
	    } else {
	      return a.localeCompare(b);
	    }
	  };
	  var getAllKeys = function getAllKeys(object) {
	    var ownKeys = [];
	    var keys = [];
	
	    for (var key in object) {
	      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
	    }
	    _sort(ownKeys, orderKeys);
	    _sort(keys, orderKeys);
	
	    return _concat(ownKeys, keys);
	  };
	
	  // note: this is positioned here because it depends on ArrayIterator
	  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {
	    // Detects a bug in Webkit nightly r181886
	    var Foo = function Foo(len) { this.length = len; };
	    Foo.prototype = [];
	    var fooArr = Array.of.apply(Foo, [1, 2]);
	    return fooArr instanceof Foo && fooArr.length === 2;
	  }());
	  if (!arrayOfSupportsSubclassing) {
	    overrideNative(Array, 'of', ArrayShims.of);
	  }
	
	  var ArrayPrototypeShims = {
	    copyWithin: function copyWithin(target, start) {
	      var o = ES.ToObject(this);
	      var len = ES.ToLength(o.length);
	      var relativeTarget = ES.ToInteger(target);
	      var relativeStart = ES.ToInteger(start);
	      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
	      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
	      var end;
	      if (arguments.length > 2) {
	        end = arguments[2];
	      }
	      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
	      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
	      var count = _min(finalItem - from, len - to);
	      var direction = 1;
	      if (from < to && to < (from + count)) {
	        direction = -1;
	        from += count - 1;
	        to += count - 1;
	      }
	      while (count > 0) {
	        if (from in o) {
	          o[to] = o[from];
	        } else {
	          delete o[to];
	        }
	        from += direction;
	        to += direction;
	        count -= 1;
	      }
	      return o;
	    },
	
	    fill: function fill(value) {
	      var start;
	      if (arguments.length > 1) {
	        start = arguments[1];
	      }
	      var end;
	      if (arguments.length > 2) {
	        end = arguments[2];
	      }
	      var O = ES.ToObject(this);
	      var len = ES.ToLength(O.length);
	      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
	      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
	
	      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
	      var relativeEnd = end < 0 ? len + end : end;
	
	      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
	        O[i] = value;
	      }
	      return O;
	    },
	
	    find: function find(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#find: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0, value; i < length; i++) {
	        value = list[i];
	        if (thisArg) {
	          if (_call(predicate, thisArg, value, i, list)) { return value; }
	        } else if (predicate(value, i, list)) {
	          return value;
	        }
	      }
	    },
	
	    findIndex: function findIndex(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#findIndex: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0; i < length; i++) {
	        if (thisArg) {
	          if (_call(predicate, thisArg, list[i], i, list)) { return i; }
	        } else if (predicate(list[i], i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	
	    keys: function keys() {
	      return new ArrayIterator(this, 'key');
	    },
	
	    values: function values() {
	      return new ArrayIterator(this, 'value');
	    },
	
	    entries: function entries() {
	      return new ArrayIterator(this, 'entry');
	    }
	  };
	  // Safari 7.1 defines Array#keys and Array#entries natively,
	  // but the resulting ArrayIterator objects don't have a "next" method.
	  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
	    delete Array.prototype.keys;
	  }
	  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
	    delete Array.prototype.entries;
	  }
	
	  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
	  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
	    defineProperties(Array.prototype, {
	      values: Array.prototype[$iterator$]
	    });
	    if (Type.symbol(Symbol.unscopables)) {
	      Array.prototype[Symbol.unscopables].values = true;
	    }
	  }
	  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
	  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
	    var originalArrayPrototypeValues = Array.prototype.values;
	    overrideNative(Array.prototype, 'values', function values() { return ES.Call(originalArrayPrototypeValues, this, arguments); });
	    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
	  }
	  defineProperties(Array.prototype, ArrayPrototypeShims);
	
	  if (1 / [true].indexOf(true, -0) < 0) {
	    // indexOf when given a position arg of -0 should return +0.
	    // https://github.com/tc39/ecma262/pull/316
	    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
	      var value = _arrayIndexOfApply(this, arguments);
	      if (value === 0 && (1 / value) < 0) {
	        return 0;
	      }
	      return value;
	    }, true);
	  }
	
	  addIterator(Array.prototype, function () { return this.values(); });
	  // Chrome defines keys/values/entries on Array, but doesn't give us
	  // any way to identify its iterator.  So add our own shimmed field.
	  if (Object.getPrototypeOf) {
	    addIterator(Object.getPrototypeOf([].values()));
	  }
	
	  // note: this is positioned here because it relies on Array#entries
	  var arrayFromSwallowsNegativeLengths = (function () {
	    // Detects a Firefox bug in v32
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
	    return valueOrFalseIfThrows(function () { return Array.from({ length: -1 }).length === 0; });
	  }());
	  var arrayFromHandlesIterables = (function () {
	    // Detects a bug in Webkit nightly r181886
	    var arr = Array.from([0].entries());
	    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
	  }());
	  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
	    overrideNative(Array, 'from', ArrayShims.from);
	  }
	  var arrayFromHandlesUndefinedMapFunction = (function () {
	    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
	    // but the spec doesn't care if it's provided or not - undefined doesn't throw.
	    return valueOrFalseIfThrows(function () { return Array.from([0], void 0); });
	  }());
	  if (!arrayFromHandlesUndefinedMapFunction) {
	    var origArrayFrom = Array.from;
	    overrideNative(Array, 'from', function from(items) {
	      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
	        return ES.Call(origArrayFrom, this, arguments);
	      } else {
	        return _call(origArrayFrom, this, items);
	      }
	    });
	  }
	
	  var int32sAsOne = -(Math.pow(2, 32) - 1);
	  var toLengthsCorrectly = function (method, reversed) {
	    var obj = { length: int32sAsOne };
	    obj[reversed ? ((obj.length >>> 0) - 1) : 0] = true;
	    return valueOrFalseIfThrows(function () {
	      _call(method, obj, function () {
	        // note: in nonconforming browsers, this will be called
	        // -1 >>> 0 times, which is 4294967295, so the throw matters.
	        throw new RangeError('should not reach here');
	      }, []);
	      return true;
	    });
	  };
	  if (!toLengthsCorrectly(Array.prototype.forEach)) {
	    var originalForEach = Array.prototype.forEach;
	    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
	      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.map)) {
	    var originalMap = Array.prototype.map;
	    overrideNative(Array.prototype, 'map', function map(callbackFn) {
	      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.filter)) {
	    var originalFilter = Array.prototype.filter;
	    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
	      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.some)) {
	    var originalSome = Array.prototype.some;
	    overrideNative(Array.prototype, 'some', function some(callbackFn) {
	      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.every)) {
	    var originalEvery = Array.prototype.every;
	    overrideNative(Array.prototype, 'every', function every(callbackFn) {
	      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduce)) {
	    var originalReduce = Array.prototype.reduce;
	    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
	      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
	    var originalReduceRight = Array.prototype.reduceRight;
	    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
	      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	
	  var lacksOctalSupport = Number('0o10') !== 8;
	  var lacksBinarySupport = Number('0b10') !== 2;
	  var trimsNonWhitespace = _some(nonWS, function (c) {
	    return Number(c + 0 + c) === 0;
	  });
	  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
	    var OrigNumber = Number;
	    var binaryRegex = /^0b[01]+$/i;
	    var octalRegex = /^0o[0-7]+$/i;
	    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
	    var isBinary = binaryRegex.test.bind(binaryRegex);
	    var isOctal = octalRegex.test.bind(octalRegex);
	    var toPrimitive = function (O) { // need to replace this with `es-to-primitive/es6`
	      var result;
	      if (typeof O.valueOf === 'function') {
	        result = O.valueOf();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      if (typeof O.toString === 'function') {
	        result = O.toString();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      throw new TypeError('No default value');
	    };
	    var hasNonWS = nonWSregex.test.bind(nonWSregex);
	    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
	    var NumberShim = (function () {
	      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
	      var NumberShim = function Number(value) {
	        var primValue;
	        if (arguments.length > 0) {
	          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
	        } else {
	          primValue = 0;
	        }
	        if (typeof primValue === 'string') {
	          primValue = ES.Call(trimShim, primValue);
	          if (isBinary(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 2);
	          } else if (isOctal(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 8);
	          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
	            primValue = NaN;
	          }
	        }
	        var receiver = this;
	        var valueOfSucceeds = valueOrFalseIfThrows(function () {
	          OrigNumber.prototype.valueOf.call(receiver);
	          return true;
	        });
	        if (receiver instanceof NumberShim && !valueOfSucceeds) {
	          return new OrigNumber(primValue);
	        }
	        /* jshint newcap: false */
	        return OrigNumber(primValue);
	        /* jshint newcap: true */
	      };
	      return NumberShim;
	    }());
	    wrapConstructor(OrigNumber, NumberShim, {});
	    // this is necessary for ES3 browsers, where these properties are non-enumerable.
	    defineProperties(NumberShim, {
	      NaN: OrigNumber.NaN,
	      MAX_VALUE: OrigNumber.MAX_VALUE,
	      MIN_VALUE: OrigNumber.MIN_VALUE,
	      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
	      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
	    });
	    /* globals Number: true */
	    /* eslint-disable no-undef */
	    /* jshint -W020 */
	    Number = NumberShim;
	    Value.redefine(globals, 'Number', NumberShim);
	    /* jshint +W020 */
	    /* eslint-enable no-undef */
	    /* globals Number: false */
	  }
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  defineProperties(Number, {
	    MAX_SAFE_INTEGER: maxSafeInteger,
	    MIN_SAFE_INTEGER: -maxSafeInteger,
	    EPSILON: 2.220446049250313e-16,
	
	    parseInt: globals.parseInt,
	    parseFloat: globals.parseFloat,
	
	    isFinite: numberIsFinite,
	
	    isInteger: function isInteger(value) {
	      return numberIsFinite(value) && ES.ToInteger(value) === value;
	    },
	
	    isSafeInteger: function isSafeInteger(value) {
	      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
	    },
	
	    isNaN: numberIsNaN
	  });
	  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
	  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
	
	  // Work around bugs in Array#find and Array#findIndex -- early
	  // implementations skipped holes in sparse arrays. (Note that the
	  // implementations of find/findIndex indirectly use shimmed
	  // methods of Number, so this test has to happen down here.)
	  /*jshint elision: true */
	  /* eslint-disable no-sparse-arrays */
	  if (![, 1].find(function (item, idx) { return idx === 0; })) {
	    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
	  }
	  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
	    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
	  }
	  /* eslint-enable no-sparse-arrays */
	  /*jshint elision: false */
	
	  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
	  var ensureEnumerable = function ensureEnumerable(obj, prop) {
	    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
	      Object.defineProperty(obj, prop, { enumerable: false });
	    }
	  };
	  var sliceArgs = function sliceArgs() {
	    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
	    var initial = Number(this);
	    var len = arguments.length;
	    var desiredArgCount = len - initial;
	    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
	    for (var i = initial; i < len; ++i) {
	      args[i - initial] = arguments[i];
	    }
	    return args;
	  };
	  var assignTo = function assignTo(source) {
	    return function assignToSource(target, key) {
	      target[key] = source[key];
	      return target;
	    };
	  };
	  var assignReducer = function (target, source) {
	    var sourceKeys = keys(Object(source));
	    var symbols;
	    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
	    }
	    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
	  };
	
	  var ObjectShims = {
	    // 19.1.3.1
	    assign: function (target, source) {
	      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
	      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
	    },
	
	    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
	    is: function is(a, b) {
	      return ES.SameValue(a, b);
	    }
	  };
	  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {
	    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	    // which is 72% slower than our shim, and Firefox 40's native implementation.
	    var thrower = Object.preventExtensions({ 1: 2 });
	    try {
	      Object.assign(thrower, 'xy');
	    } catch (e) {
	      return thrower[1] === 'y';
	    }
	  }());
	  if (assignHasPendingExceptions) {
	    overrideNative(Object, 'assign', ObjectShims.assign);
	  }
	  defineProperties(Object, ObjectShims);
	
	  if (supportsDescriptors) {
	    var ES5ObjectShims = {
	      // 19.1.3.9
	      // shim from https://gist.github.com/WebReflection/5593554
	      setPrototypeOf: (function (Object, magic) {
	        var set;
	
	        var checkArgs = function (O, proto) {
	          if (!ES.TypeIsObject(O)) {
	            throw new TypeError('cannot set prototype on a non-object');
	          }
	          if (!(proto === null || ES.TypeIsObject(proto))) {
	            throw new TypeError('can only set prototype to an object or null' + proto);
	          }
	        };
	
	        var setPrototypeOf = function (O, proto) {
	          checkArgs(O, proto);
	          _call(set, O, proto);
	          return O;
	        };
	
	        try {
	          // this works already in Firefox and Safari
	          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	          _call(set, {}, null);
	        } catch (e) {
	          if (Object.prototype !== {}[magic]) {
	            // IE < 11 cannot be shimmed
	            return;
	          }
	          // probably Chrome or some old Mobile stock browser
	          set = function (proto) {
	            this[magic] = proto;
	          };
	          // please note that this will **not** work
	          // in those browsers that do not inherit
	          // __proto__ by mistake from Object.prototype
	          // in these cases we should probably throw an error
	          // or at least be informed about the issue
	          setPrototypeOf.polyfill = setPrototypeOf(
	            setPrototypeOf({}, null),
	            Object.prototype
	          ) instanceof Object;
	          // setPrototypeOf.polyfill === true means it works as meant
	          // setPrototypeOf.polyfill === false means it's not 100% reliable
	          // setPrototypeOf.polyfill === undefined
	          // or
	          // setPrototypeOf.polyfill ==  null means it's not a polyfill
	          // which means it works as expected
	          // we can even delete Object.prototype.__proto__;
	        }
	        return setPrototypeOf;
	      }(Object, '__proto__'))
	    };
	
	    defineProperties(Object, ES5ObjectShims);
	  }
	
	  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
	  // but Object.create(null) does.
	  if (Object.setPrototypeOf && Object.getPrototypeOf &&
	      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
	      Object.getPrototypeOf(Object.create(null)) === null) {
	    (function () {
	      var FAKENULL = Object.create(null);
	      var gpo = Object.getPrototypeOf, spo = Object.setPrototypeOf;
	      Object.getPrototypeOf = function (o) {
	        var result = gpo(o);
	        return result === FAKENULL ? null : result;
	      };
	      Object.setPrototypeOf = function (o, p) {
	        var proto = p === null ? FAKENULL : p;
	        return spo(o, proto);
	      };
	      Object.setPrototypeOf.polyfill = false;
	    }());
	  }
	
	  var objectKeysAcceptsPrimitives = !throwsError(function () { Object.keys('foo'); });
	  if (!objectKeysAcceptsPrimitives) {
	    var originalObjectKeys = Object.keys;
	    overrideNative(Object, 'keys', function keys(value) {
	      return originalObjectKeys(ES.ToObject(value));
	    });
	    keys = Object.keys;
	  }
	  var objectKeysRejectsRegex = throwsError(function () { Object.keys(/a/g); });
	  if (objectKeysRejectsRegex) {
	    var regexRejectingObjectKeys = Object.keys;
	    overrideNative(Object, 'keys', function keys(value) {
	      if (Type.regex(value)) {
	        var regexKeys = [];
	        for (var k in value) {
	          if (_hasOwnProperty(value, k)) {
	            _push(regexKeys, k);
	          }
	        }
	       return regexKeys;
	      }
	      return regexRejectingObjectKeys(value);
	    });
	    keys = Object.keys;
	  }
	
	  if (Object.getOwnPropertyNames) {
	    var objectGOPNAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyNames('foo'); });
	    if (!objectGOPNAcceptsPrimitives) {
	      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
	      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
	      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
	        var val = ES.ToObject(value);
	        if (_toString(val) === '[object Window]') {
	          try {
	            return originalObjectGetOwnPropertyNames(val);
	          } catch (e) {
	            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
	            return _concat([], cachedWindowNames);
	          }
	        }
	        return originalObjectGetOwnPropertyNames(val);
	      });
	    }
	  }
	  if (Object.getOwnPropertyDescriptor) {
	    var objectGOPDAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyDescriptor('foo', 'bar'); });
	    if (!objectGOPDAcceptsPrimitives) {
	      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
	        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
	      });
	    }
	  }
	  if (Object.seal) {
	    var objectSealAcceptsPrimitives = !throwsError(function () { Object.seal('foo'); });
	    if (!objectSealAcceptsPrimitives) {
	      var originalObjectSeal = Object.seal;
	      overrideNative(Object, 'seal', function seal(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectSeal(value);
	      });
	    }
	  }
	  if (Object.isSealed) {
	    var objectIsSealedAcceptsPrimitives = !throwsError(function () { Object.isSealed('foo'); });
	    if (!objectIsSealedAcceptsPrimitives) {
	      var originalObjectIsSealed = Object.isSealed;
	      overrideNative(Object, 'isSealed', function isSealed(value) {
	        if (!Type.object(value)) { return true; }
	        return originalObjectIsSealed(value);
	      });
	    }
	  }
	  if (Object.freeze) {
	    var objectFreezeAcceptsPrimitives = !throwsError(function () { Object.freeze('foo'); });
	    if (!objectFreezeAcceptsPrimitives) {
	      var originalObjectFreeze = Object.freeze;
	      overrideNative(Object, 'freeze', function freeze(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectFreeze(value);
	      });
	    }
	  }
	  if (Object.isFrozen) {
	    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { Object.isFrozen('foo'); });
	    if (!objectIsFrozenAcceptsPrimitives) {
	      var originalObjectIsFrozen = Object.isFrozen;
	      overrideNative(Object, 'isFrozen', function isFrozen(value) {
	        if (!Type.object(value)) { return true; }
	        return originalObjectIsFrozen(value);
	      });
	    }
	  }
	  if (Object.preventExtensions) {
	    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { Object.preventExtensions('foo'); });
	    if (!objectPreventExtensionsAcceptsPrimitives) {
	      var originalObjectPreventExtensions = Object.preventExtensions;
	      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectPreventExtensions(value);
	      });
	    }
	  }
	  if (Object.isExtensible) {
	    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { Object.isExtensible('foo'); });
	    if (!objectIsExtensibleAcceptsPrimitives) {
	      var originalObjectIsExtensible = Object.isExtensible;
	      overrideNative(Object, 'isExtensible', function isExtensible(value) {
	        if (!Type.object(value)) { return false; }
	        return originalObjectIsExtensible(value);
	      });
	    }
	  }
	  if (Object.getPrototypeOf) {
	    var objectGetProtoAcceptsPrimitives = !throwsError(function () { Object.getPrototypeOf('foo'); });
	    if (!objectGetProtoAcceptsPrimitives) {
	      var originalGetProto = Object.getPrototypeOf;
	      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
	        return originalGetProto(ES.ToObject(value));
	      });
	    }
	  }
	
	  var hasFlags = supportsDescriptors && (function () {
	    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
	    return desc && ES.IsCallable(desc.get);
	  }());
	  if (supportsDescriptors && !hasFlags) {
	    var regExpFlagsGetter = function flags() {
	      if (!ES.TypeIsObject(this)) {
	        throw new TypeError('Method called on incompatible type: must be an object.');
	      }
	      var result = '';
	      if (this.global) {
	        result += 'g';
	      }
	      if (this.ignoreCase) {
	        result += 'i';
	      }
	      if (this.multiline) {
	        result += 'm';
	      }
	      if (this.unicode) {
	        result += 'u';
	      }
	      if (this.sticky) {
	        result += 'y';
	      }
	      return result;
	    };
	
	    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
	  }
	
	  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function () {
	    return String(new RegExp(/a/g, 'i')) === '/a/i';
	  });
	  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function () {
	    // Edge 0.12 supports flags fully, but does not support Symbol.match
	    var regex = /./;
	    regex[Symbol.match] = false;
	    return RegExp(regex) === regex;
	  }());
	
	  var regexToStringIsGeneric = valueOrFalseIfThrows(function () {
	    return RegExp.prototype.toString.call({ source: 'abc' }) === '/abc/';
	  });
	  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function () {
	    return RegExp.prototype.toString.call({ source: 'a', flags: 'b' }) === '/a/b';
	  });
	  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
	    var origRegExpToString = RegExp.prototype.toString;
	    defineProperty(RegExp.prototype, 'toString', function toString() {
	      var R = ES.RequireObjectCoercible(this);
	      if (Type.regex(R)) {
	        return _call(origRegExpToString, R);
	      }
	      var pattern = $String(R.source);
	      var flags = $String(R.flags);
	      return '/' + pattern + '/' + flags;
	    }, true);
	    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
	  }
	
	  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
	    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
	    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
	    var legacySourceGetter = function () { return this.source; }; // prior to it being a getter, it's own + nonconfigurable
	    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
	
	    var OrigRegExp = RegExp;
	    var RegExpShim = (function () {
	      return function RegExp(pattern, flags) {
	        var patternIsRegExp = ES.IsRegExp(pattern);
	        var calledWithNew = this instanceof RegExp;
	        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
	          return pattern;
	        }
	
	        var P = pattern;
	        var F = flags;
	        if (Type.regex(pattern)) {
	          P = ES.Call(sourceGetter, pattern);
	          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
	          return new RegExp(P, F);
	        } else if (patternIsRegExp) {
	          P = pattern.source;
	          F = typeof flags === 'undefined' ? pattern.flags : flags;
	        }
	        return new OrigRegExp(pattern, flags);
	      };
	    }());
	    wrapConstructor(OrigRegExp, RegExpShim, {
	      $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
	    });
	    /* globals RegExp: true */
	    /* eslint-disable no-undef */
	    /* jshint -W020 */
	    RegExp = RegExpShim;
	    Value.redefine(globals, 'RegExp', RegExpShim);
	    /* jshint +W020 */
	    /* eslint-enable no-undef */
	    /* globals RegExp: false */
	  }
	
	  if (supportsDescriptors) {
	    var regexGlobals = {
	      input: '$_',
	      lastMatch: '$&',
	      lastParen: '$+',
	      leftContext: '$`',
	      rightContext: '$\''
	    };
	    _forEach(keys(regexGlobals), function (prop) {
	      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
	        Value.getter(RegExp, regexGlobals[prop], function get() {
	          return RegExp[prop];
	        });
	      }
	    });
	  }
	  addDefaultSpecies(RegExp);
	
	  var inverseEpsilon = 1 / Number.EPSILON;
	  var roundTiesToEven = function roundTiesToEven(n) {
	    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
	    return (n + inverseEpsilon) - inverseEpsilon;
	  };
	  var BINARY_32_EPSILON = Math.pow(2, -23);
	  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
	  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
	  var numberCLZ = Number.prototype.clz;
	  delete Number.prototype.clz; // Safari 8 has Number#clz
	
	  var MathShims = {
	    acosh: function acosh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || value < 1) { return NaN; }
	      if (x === 1) { return 0; }
	      if (x === Infinity) { return x; }
	      return _log(x / Math.E + _sqrt(x + 1) * _sqrt(x - 1) / Math.E) + 1;
	    },
	
	    asinh: function asinh(value) {
	      var x = Number(value);
	      if (x === 0 || !globalIsFinite(x)) {
	        return x;
	      }
	      return x < 0 ? -Math.asinh(-x) : _log(x + _sqrt(x * x + 1));
	    },
	
	    atanh: function atanh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || x < -1 || x > 1) {
	        return NaN;
	      }
	      if (x === -1) { return -Infinity; }
	      if (x === 1) { return Infinity; }
	      if (x === 0) { return x; }
	      return 0.5 * _log((1 + x) / (1 - x));
	    },
	
	    cbrt: function cbrt(value) {
	      var x = Number(value);
	      if (x === 0) { return x; }
	      var negate = x < 0, result;
	      if (negate) { x = -x; }
	      if (x === Infinity) {
	        result = Infinity;
	      } else {
	        result = Math.exp(_log(x) / 3);
	        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
	        result = (x / (result * result) + (2 * result)) / 3;
	      }
	      return negate ? -result : result;
	    },
	
	    clz32: function clz32(value) {
	      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
	      var x = Number(value);
	      var number = ES.ToUint32(x);
	      if (number === 0) {
	        return 32;
	      }
	      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * Math.LOG2E);
	    },
	
	    cosh: function cosh(value) {
	      var x = Number(value);
	      if (x === 0) { return 1; } // +0 or -0
	      if (Number.isNaN(x)) { return NaN; }
	      if (!globalIsFinite(x)) { return Infinity; }
	      if (x < 0) { x = -x; }
	      if (x > 21) { return Math.exp(x) / 2; }
	      return (Math.exp(x) + Math.exp(-x)) / 2;
	    },
	
	    expm1: function expm1(value) {
	      var x = Number(value);
	      if (x === -Infinity) { return -1; }
	      if (!globalIsFinite(x) || x === 0) { return x; }
	      if (_abs(x) > 0.5) {
	        return Math.exp(x) - 1;
	      }
	      // A more precise approximation using Taylor series expansion
	      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
	      var t = x;
	      var sum = 0;
	      var n = 1;
	      while (sum + t !== sum) {
	        sum += t;
	        n += 1;
	        t *= x / n;
	      }
	      return sum;
	    },
	
	    hypot: function hypot(x, y) {
	      var result = 0;
	      var largest = 0;
	      for (var i = 0; i < arguments.length; ++i) {
	        var value = _abs(Number(arguments[i]));
	        if (largest < value) {
	          result *= (largest / value) * (largest / value);
	          result += 1;
	          largest = value;
	        } else {
	          result += (value > 0 ? (value / largest) * (value / largest) : value);
	        }
	      }
	      return largest === Infinity ? Infinity : largest * _sqrt(result);
	    },
	
	    log2: function log2(value) {
	      return _log(value) * Math.LOG2E;
	    },
	
	    log10: function log10(value) {
	      return _log(value) * Math.LOG10E;
	    },
	
	    log1p: function log1p(value) {
	      var x = Number(value);
	      if (x < -1 || Number.isNaN(x)) { return NaN; }
	      if (x === 0 || x === Infinity) { return x; }
	      if (x === -1) { return -Infinity; }
	
	      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
	    },
	
	    sign: function sign(value) {
	      var number = Number(value);
	      if (number === 0) { return number; }
	      if (Number.isNaN(number)) { return number; }
	      return number < 0 ? -1 : 1;
	    },
	
	    sinh: function sinh(value) {
	      var x = Number(value);
	      if (!globalIsFinite(x) || x === 0) { return x; }
	
	      if (_abs(x) < 1) {
	        return (Math.expm1(x) - Math.expm1(-x)) / 2;
	      }
	      return (Math.exp(x - 1) - Math.exp(-x - 1)) * Math.E / 2;
	    },
	
	    tanh: function tanh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || x === 0) { return x; }
	      // can exit early at +-20 as JS loses precision for true value at this integer
	      if (x >= 20) { return 1; }
	      if (x <= -20) { return -1; }
	      var a = Math.expm1(x);
	      var b = Math.expm1(-x);
	      if (a === Infinity) { return 1; }
	      if (b === Infinity) { return -1; }
	      return (a - b) / (Math.exp(x) + Math.exp(-x));
	    },
	
	    trunc: function trunc(value) {
	      var x = Number(value);
	      return x < 0 ? -_floor(-x) : _floor(x);
	    },
	
	    imul: function imul(x, y) {
	      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	      var a = ES.ToUint32(x);
	      var b = ES.ToUint32(y);
	      var ah = (a >>> 16) & 0xffff;
	      var al = a & 0xffff;
	      var bh = (b >>> 16) & 0xffff;
	      var bl = b & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
	    },
	
	    fround: function fround(x) {
	      var v = Number(x);
	      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
	        return v;
	      }
	      var sign = Math.sign(v);
	      var abs = _abs(v);
	      if (abs < BINARY_32_MIN_VALUE) {
	        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
	      }
	      // Veltkamp's splitting (?)
	      var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
	      var result = a - (a - abs);
	      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
	        return sign * Infinity;
	      }
	      return sign * result;
	    }
	  };
	  defineProperties(Math, MathShims);
	  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
	  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
	  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
	  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
	  // Chrome 40 has an imprecise Math.tanh with very small numbers
	  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
	  // Chrome 40 loses Math.acosh precision with high numbers
	  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
	  // Firefox 38 on Windows
	  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
	  // node 0.11 has an imprecise Math.sinh with very small numbers
	  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
	  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
	  var expm1OfTen = Math.expm1(10);
	  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
	
	  var origMathRound = Math.round;
	  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
	  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
	
	  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
	  // This behavior should be governed by "round to nearest, ties to even mode"
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-number-type
	  // These are the boundary cases where it breaks.
	  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
	  var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
	  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function (num) {
	    return Math.round(num) === num;
	  });
	  defineProperty(Math, 'round', function round(x) {
	    var floor = _floor(x);
	    var ceil = floor === -1 ? -0 : floor + 1;
	    return x - floor < 0.5 ? floor : ceil;
	  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
	  Value.preserveToString(Math.round, origMathRound);
	
	  var origImul = Math.imul;
	  if (Math.imul(0xffffffff, 5) !== -5) {
	    // Safari 6.1, at least, reports "0" for this value
	    Math.imul = MathShims.imul;
	    Value.preserveToString(Math.imul, origImul);
	  }
	  if (Math.imul.length !== 2) {
	    // Safari 8.0.4 has a length of 1
	    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
	    overrideNative(Math, 'imul', function imul(x, y) {
	      return ES.Call(origImul, Math, arguments);
	    });
	  }
	
	  // Promises
	  // Simplest possible implementation; use a 3rd-party library if you
	  // want the best possible speed and/or long stack traces.
	  var PromiseShim = (function () {
	    var setTimeout = globals.setTimeout;
	    // some environments don't have setTimeout - no way to shim here.
	    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }
	
	    ES.IsPromise = function (promise) {
	      if (!ES.TypeIsObject(promise)) {
	        return false;
	      }
	      if (typeof promise._promise === 'undefined') {
	        return false; // uninitialized, or missing our hidden field.
	      }
	      return true;
	    };
	
	    // "PromiseCapability" in the spec is what most promise implementations
	    // call a "deferred".
	    var PromiseCapability = function (C) {
	      if (!ES.IsConstructor(C)) {
	        throw new TypeError('Bad promise constructor');
	      }
	      var capability = this;
	      var resolver = function (resolve, reject) {
	        if (capability.resolve !== void 0 || capability.reject !== void 0) {
	          throw new TypeError('Bad Promise implementation!');
	        }
	        capability.resolve = resolve;
	        capability.reject = reject;
	      };
	      // Initialize fields to inform optimizers about the object shape.
	      capability.resolve = void 0;
	      capability.reject = void 0;
	      capability.promise = new C(resolver);
	      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
	        throw new TypeError('Bad promise constructor');
	      }
	    };
	
	    // find an appropriate setImmediate-alike
	    var makeZeroTimeout;
	    /*global window */
	    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
	      makeZeroTimeout = function () {
	        // from http://dbaron.org/log/20100309-faster-timeouts
	        var timeouts = [];
	        var messageName = 'zero-timeout-message';
	        var setZeroTimeout = function (fn) {
	          _push(timeouts, fn);
	          window.postMessage(messageName, '*');
	        };
	        var handleMessage = function (event) {
	          if (event.source === window && event.data === messageName) {
	            event.stopPropagation();
	            if (timeouts.length === 0) { return; }
	            var fn = _shift(timeouts);
	            fn();
	          }
	        };
	        window.addEventListener('message', handleMessage, true);
	        return setZeroTimeout;
	      };
	    }
	    var makePromiseAsap = function () {
	      // An efficient task-scheduler based on a pre-existing Promise
	      // implementation, which we can use even if we override the
	      // global Promise below (in order to workaround bugs)
	      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
	      var P = globals.Promise;
	      var pr = P && P.resolve && P.resolve();
	      return pr && function (task) {
	        return pr.then(task);
	      };
	    };
	    /*global process */
	    /* jscs:disable disallowMultiLineTernary */
	    var enqueue = ES.IsCallable(globals.setImmediate) ?
	      globals.setImmediate :
	      typeof process === 'object' && process.nextTick ? process.nextTick :
	      makePromiseAsap() ||
	      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
	      function (task) { setTimeout(task, 0); }); // fallback
	    /* jscs:enable disallowMultiLineTernary */
	
	    // Constants for Promise implementation
	    var PROMISE_IDENTITY = function (x) { return x; };
	    var PROMISE_THROWER = function (e) { throw e; };
	    var PROMISE_PENDING = 0;
	    var PROMISE_FULFILLED = 1;
	    var PROMISE_REJECTED = 2;
	    // We store fulfill/reject handlers and capabilities in a single array.
	    var PROMISE_FULFILL_OFFSET = 0;
	    var PROMISE_REJECT_OFFSET = 1;
	    var PROMISE_CAPABILITY_OFFSET = 2;
	    // This is used in an optimization for chaining promises via then.
	    var PROMISE_FAKE_CAPABILITY = {};
	
	    var enqueuePromiseReactionJob = function (handler, capability, argument) {
	      enqueue(function () {
	        promiseReactionJob(handler, capability, argument);
	      });
	    };
	
	    var promiseReactionJob = function (handler, promiseCapability, argument) {
	      var handlerResult, f;
	      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
	        // Fast case, when we don't actually need to chain through to a
	        // (real) promiseCapability.
	        return handler(argument);
	      }
	      try {
	        handlerResult = handler(argument);
	        f = promiseCapability.resolve;
	      } catch (e) {
	        handlerResult = e;
	        f = promiseCapability.reject;
	      }
	      f(handlerResult);
	    };
	
	    var fulfillPromise = function (promise, value) {
	      var _promise = promise._promise;
	      var length = _promise.reactionLength;
	      if (length > 0) {
	        enqueuePromiseReactionJob(
	          _promise.fulfillReactionHandler0,
	          _promise.reactionCapability0,
	          value
	        );
	        _promise.fulfillReactionHandler0 = void 0;
	        _promise.rejectReactions0 = void 0;
	        _promise.reactionCapability0 = void 0;
	        if (length > 1) {
	          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
	            enqueuePromiseReactionJob(
	              _promise[idx + PROMISE_FULFILL_OFFSET],
	              _promise[idx + PROMISE_CAPABILITY_OFFSET],
	              value
	            );
	            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
	            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
	            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
	          }
	        }
	      }
	      _promise.result = value;
	      _promise.state = PROMISE_FULFILLED;
	      _promise.reactionLength = 0;
	    };
	
	    var rejectPromise = function (promise, reason) {
	      var _promise = promise._promise;
	      var length = _promise.reactionLength;
	      if (length > 0) {
	        enqueuePromiseReactionJob(
	          _promise.rejectReactionHandler0,
	          _promise.reactionCapability0,
	          reason
	        );
	        _promise.fulfillReactionHandler0 = void 0;
	        _promise.rejectReactions0 = void 0;
	        _promise.reactionCapability0 = void 0;
	        if (length > 1) {
	          for (var i = 1, idx = 0; i < length; i++, idx += 3) {
	            enqueuePromiseReactionJob(
	              _promise[idx + PROMISE_REJECT_OFFSET],
	              _promise[idx + PROMISE_CAPABILITY_OFFSET],
	              reason
	            );
	            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
	            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
	            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
	          }
	        }
	      }
	      _promise.result = reason;
	      _promise.state = PROMISE_REJECTED;
	      _promise.reactionLength = 0;
	    };
	
	    var createResolvingFunctions = function (promise) {
	      var alreadyResolved = false;
	      var resolve = function (resolution) {
	        var then;
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        if (resolution === promise) {
	          return rejectPromise(promise, new TypeError('Self resolution'));
	        }
	        if (!ES.TypeIsObject(resolution)) {
	          return fulfillPromise(promise, resolution);
	        }
	        try {
	          then = resolution.then;
	        } catch (e) {
	          return rejectPromise(promise, e);
	        }
	        if (!ES.IsCallable(then)) {
	          return fulfillPromise(promise, resolution);
	        }
	        enqueue(function () {
	          promiseResolveThenableJob(promise, resolution, then);
	        });
	      };
	      var reject = function (reason) {
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        return rejectPromise(promise, reason);
	      };
	      return { resolve: resolve, reject: reject };
	    };
	
	    var optimizedThen = function (then, thenable, resolve, reject) {
	      // Optimization: since we discard the result, we can pass our
	      // own then implementation a special hint to let it know it
	      // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
	      // object is local to this implementation and unforgeable outside.)
	      if (then === Promise$prototype$then) {
	        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
	      } else {
	        _call(then, thenable, resolve, reject);
	      }
	    };
	    var promiseResolveThenableJob = function (promise, thenable, then) {
	      var resolvingFunctions = createResolvingFunctions(promise);
	      var resolve = resolvingFunctions.resolve;
	      var reject = resolvingFunctions.reject;
	      try {
	        optimizedThen(then, thenable, resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	    };
	
	    var Promise$prototype, Promise$prototype$then;
	    var Promise = (function () {
	      var PromiseShim = function Promise(resolver) {
	        if (!(this instanceof PromiseShim)) {
	          throw new TypeError('Constructor Promise requires "new"');
	        }
	        if (this && this._promise) {
	          throw new TypeError('Bad construction');
	        }
	        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
	        if (!ES.IsCallable(resolver)) {
	          throw new TypeError('not a valid resolver');
	        }
	        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
	          _promise: {
	            result: void 0,
	            state: PROMISE_PENDING,
	            // The first member of the "reactions" array is inlined here,
	            // since most promises only have one reaction.
	            // We've also exploded the 'reaction' object to inline the
	            // "handler" and "capability" fields, since both fulfill and
	            // reject reactions share the same capability.
	            reactionLength: 0,
	            fulfillReactionHandler0: void 0,
	            rejectReactionHandler0: void 0,
	            reactionCapability0: void 0
	          }
	        });
	        var resolvingFunctions = createResolvingFunctions(promise);
	        var reject = resolvingFunctions.reject;
	        try {
	          resolver(resolvingFunctions.resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        return promise;
	      };
	      return PromiseShim;
	    }());
	    Promise$prototype = Promise.prototype;
	
	    var _promiseAllResolver = function (index, values, capability, remaining) {
	      var alreadyCalled = false;
	      return function (x) {
	        if (alreadyCalled) { return; }
	        alreadyCalled = true;
	        values[index] = x;
	        if ((--remaining.count) === 0) {
	          var resolve = capability.resolve;
	          resolve(values); // call w/ this===undefined
	        }
	      };
	    };
	
	    var performPromiseAll = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator;
	      var values = [], remaining = { count: 1 }, next, nextValue;
	      var index = 0;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        values[index] = void 0;
	        var nextPromise = C.resolve(nextValue);
	        var resolveElement = _promiseAllResolver(
	          index, values, resultCapability, remaining
	        );
	        remaining.count += 1;
	        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
	        index += 1;
	      }
	      if ((--remaining.count) === 0) {
	        var resolve = resultCapability.resolve;
	        resolve(values); // call w/ this===undefined
	      }
	      return resultCapability.promise;
	    };
	
	    var performPromiseRace = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator, next, nextValue, nextPromise;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            // NOTE: If iterable has no items, resulting promise will never
	            // resolve; see:
	            // https://github.com/domenic/promises-unwrapping/issues/75
	            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        nextPromise = C.resolve(nextValue);
	        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
	      }
	      return resultCapability.promise;
	    };
	
	    defineProperties(Promise, {
	      all: function all(iterable) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Promise is not object');
	        }
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseAll(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      race: function race(iterable) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Promise is not object');
	        }
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseRace(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      reject: function reject(reason) {
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Bad promise constructor');
	        }
	        var capability = new PromiseCapability(C);
	        var rejectFunc = capability.reject;
	        rejectFunc(reason); // call with this===undefined
	        return capability.promise;
	      },
	
	      resolve: function resolve(v) {
	        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
	        var C = this;
	        if (!ES.TypeIsObject(C)) {
	          throw new TypeError('Bad promise constructor');
	        }
	        if (ES.IsPromise(v)) {
	          var constructor = v.constructor;
	          if (constructor === C) { return v; }
	        }
	        var capability = new PromiseCapability(C);
	        var resolveFunc = capability.resolve;
	        resolveFunc(v); // call with this===undefined
	        return capability.promise;
	      }
	    });
	
	    defineProperties(Promise$prototype, {
	      'catch': function (onRejected) {
	        return this.then(null, onRejected);
	      },
	
	      then: function then(onFulfilled, onRejected) {
	        var promise = this;
	        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
	        var C = ES.SpeciesConstructor(promise, Promise);
	        var resultCapability;
	        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
	        if (returnValueIsIgnored && C === Promise) {
	          resultCapability = PROMISE_FAKE_CAPABILITY;
	        } else {
	          resultCapability = new PromiseCapability(C);
	        }
	        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
	        // Note that we've split the 'reaction' object into its two
	        // components, "capabilities" and "handler"
	        // "capabilities" is always equal to `resultCapability`
	        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
	        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
	        var _promise = promise._promise;
	        var value;
	        if (_promise.state === PROMISE_PENDING) {
	          if (_promise.reactionLength === 0) {
	            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
	            _promise.rejectReactionHandler0 = rejectReactionHandler;
	            _promise.reactionCapability0 = resultCapability;
	          } else {
	            var idx = 3 * (_promise.reactionLength - 1);
	            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
	            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
	            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
	          }
	          _promise.reactionLength += 1;
	        } else if (_promise.state === PROMISE_FULFILLED) {
	          value = _promise.result;
	          enqueuePromiseReactionJob(
	            fulfillReactionHandler, resultCapability, value
	          );
	        } else if (_promise.state === PROMISE_REJECTED) {
	          value = _promise.result;
	          enqueuePromiseReactionJob(
	            rejectReactionHandler, resultCapability, value
	          );
	        } else {
	          throw new TypeError('unexpected Promise state');
	        }
	        return resultCapability.promise;
	      }
	    });
	    // This helps the optimizer by ensuring that methods which take
	    // capabilities aren't polymorphic.
	    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
	    Promise$prototype$then = Promise$prototype.then;
	
	    return Promise;
	  }());
	
	  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
	  if (globals.Promise) {
	    delete globals.Promise.accept;
	    delete globals.Promise.defer;
	    delete globals.Promise.prototype.chain;
	  }
	
	  if (typeof PromiseShim === 'function') {
	    // export the Promise constructor.
	    defineProperties(globals, { Promise: PromiseShim });
	    // In Chrome 33 (and thereabouts) Promise is defined, but the
	    // implementation is buggy in a number of ways.  Let's check subclassing
	    // support to see if we have a buggy implementation.
	    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
	      return S.resolve(42).then(function () {}) instanceof S;
	    });
	    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () { globals.Promise.reject(42).then(null, 5).then(null, noop); });
	    var promiseRequiresObjectContext = throwsError(function () { globals.Promise.call(3, noop); });
	    // Promise.resolve() was errata'ed late in the ES6 process.
	    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
	    //      https://code.google.com/p/v8/issues/detail?id=4161
	    // It serves as a proxy for a number of other bugs in early Promise
	    // implementations.
	    var promiseResolveBroken = (function (Promise) {
	      var p = Promise.resolve(5);
	      p.constructor = {};
	      var p2 = Promise.resolve(p);
	      try {
	        p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
	      } catch (e) {
	        return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
	      }
	      return p === p2; // This *should* be false!
	    }(globals.Promise));
	
	    // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
	    var getsThenSynchronously = supportsDescriptors && (function () {
	      var count = 0;
	      var thenable = Object.defineProperty({}, 'then', { get: function () { count += 1; } });
	      Promise.resolve(thenable);
	      return count === 1;
	    }());
	
	    var BadResolverPromise = function BadResolverPromise(executor) {
	      var p = new Promise(executor);
	      executor(3, function () {});
	      this.then = p.then;
	      this.constructor = BadResolverPromise;
	    };
	    BadResolverPromise.prototype = Promise.prototype;
	    BadResolverPromise.all = Promise.all;
	    // Chrome Canary 49 (probably older too) has some implementation bugs
	    var hasBadResolverPromise = valueOrFalseIfThrows(function () {
	      return !!BadResolverPromise.all([1, 2]);
	    });
	
	    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks ||
	        !promiseRequiresObjectContext || promiseResolveBroken ||
	        !getsThenSynchronously || hasBadResolverPromise) {
	      /* globals Promise: true */
	      /* eslint-disable no-undef */
	      /* jshint -W020 */
	      Promise = PromiseShim;
	      /* jshint +W020 */
	      /* eslint-enable no-undef */
	      /* globals Promise: false */
	      overrideNative(globals, 'Promise', PromiseShim);
	    }
	    if (Promise.all.length !== 1) {
	      var origAll = Promise.all;
	      overrideNative(Promise, 'all', function all(iterable) {
	        return ES.Call(origAll, this, arguments);
	      });
	    }
	    if (Promise.race.length !== 1) {
	      var origRace = Promise.race;
	      overrideNative(Promise, 'race', function race(iterable) {
	        return ES.Call(origRace, this, arguments);
	      });
	    }
	    if (Promise.resolve.length !== 1) {
	      var origResolve = Promise.resolve;
	      overrideNative(Promise, 'resolve', function resolve(x) {
	        return ES.Call(origResolve, this, arguments);
	      });
	    }
	    if (Promise.reject.length !== 1) {
	      var origReject = Promise.reject;
	      overrideNative(Promise, 'reject', function reject(r) {
	        return ES.Call(origReject, this, arguments);
	      });
	    }
	    ensureEnumerable(Promise, 'all');
	    ensureEnumerable(Promise, 'race');
	    ensureEnumerable(Promise, 'resolve');
	    ensureEnumerable(Promise, 'reject');
	    addDefaultSpecies(Promise);
	  }
	
	  // Map and Set require a true ES5 environment
	  // Their fast path also requires that the environment preserve
	  // property insertion order, which is not guaranteed by the spec.
	  var testOrder = function (a) {
	    var b = keys(_reduce(a, function (o, k) {
	      o[k] = true;
	      return o;
	    }, {}));
	    return a.join(':') === b.join(':');
	  };
	  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
	  // some engines (eg, Chrome) only preserve insertion order for string keys
	  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
	
	  if (supportsDescriptors) {
	
	    var fastkey = function fastkey(key) {
	      if (!preservesInsertionOrder) {
	        return null;
	      }
	      if (typeof key === 'undefined' || key === null) {
	        return '^' + ES.ToString(key);
	      } else if (typeof key === 'string') {
	        return '$' + key;
	      } else if (typeof key === 'number') {
	        // note that -0 will get coerced to "0" when used as a property key
	        if (!preservesNumericInsertionOrder) {
	          return 'n' + key;
	        }
	        return key;
	      } else if (typeof key === 'boolean') {
	        return 'b' + key;
	      }
	      return null;
	    };
	
	    var emptyObject = function emptyObject() {
	      // accomodate some older not-quite-ES5 browsers
	      return Object.create ? Object.create(null) : {};
	    };
	
	    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (entry) {
	          if (!ES.TypeIsObject(entry)) {
	            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
	          }
	          map.set(entry[0], entry[1]);
	        });
	      } else if (iterable instanceof MapConstructor) {
	        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
	          map.set(key, value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = map.set;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextItem = next.value;
	            try {
	              if (!ES.TypeIsObject(nextItem)) {
	                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
	              }
	              _call(adder, map, nextItem[0], nextItem[1]);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (value) {
	          set.add(value);
	        });
	      } else if (iterable instanceof SetConstructor) {
	        _call(SetConstructor.prototype.forEach, iterable, function (value) {
	          set.add(value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = set.add;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextValue = next.value;
	            try {
	              _call(adder, set, nextValue);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	
	    var collectionShims = {
	      Map: (function () {
	
	        var empty = {};
	
	        var MapEntry = function MapEntry(key, value) {
	          this.key = key;
	          this.value = value;
	          this.next = null;
	          this.prev = null;
	        };
	
	        MapEntry.prototype.isRemoved = function isRemoved() {
	          return this.key === empty;
	        };
	
	        var isMap = function isMap(map) {
	          return !!map._es6map;
	        };
	
	        var requireMapSlot = function requireMapSlot(map, method) {
	          if (!ES.TypeIsObject(map) || !isMap(map)) {
	            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
	          }
	        };
	
	        var MapIterator = function MapIterator(map, kind) {
	          requireMapSlot(map, '[[MapIterator]]');
	          this.head = map._head;
	          this.i = this.head;
	          this.kind = kind;
	        };
	
	        MapIterator.prototype = {
	          next: function next() {
	            var i = this.i, kind = this.kind, head = this.head, result;
	            if (typeof this.i === 'undefined') {
	              return { value: void 0, done: true };
	            }
	            while (i.isRemoved() && i !== head) {
	              // back up off of removed entries
	              i = i.prev;
	            }
	            // advance to next unreturned element.
	            while (i.next !== head) {
	              i = i.next;
	              if (!i.isRemoved()) {
	                if (kind === 'key') {
	                  result = i.key;
	                } else if (kind === 'value') {
	                  result = i.value;
	                } else {
	                  result = [i.key, i.value];
	                }
	                this.i = i;
	                return { value: result, done: false };
	              }
	            }
	            // once the iterator is done, it is done forever.
	            this.i = void 0;
	            return { value: void 0, done: true };
	          }
	        };
	        addIterator(MapIterator.prototype);
	
	        var Map$prototype;
	        var MapShim = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          if (this && this._es6map) {
	            throw new TypeError('Bad construction');
	          }
	          var map = emulateES6construct(this, Map, Map$prototype, {
	            _es6map: true,
	            _head: null,
	            _storage: emptyObject(),
	            _size: 0
	          });
	
	          var head = new MapEntry(null, null);
	          // circular doubly-linked list.
	          head.next = head.prev = head;
	          map._head = head;
	
	          // Optionally initialize map from iterable
	          if (arguments.length > 0) {
	            addIterableToMap(Map, map, arguments[0]);
	          }
	          return map;
	        };
	        Map$prototype = MapShim.prototype;
	
	        Value.getter(Map$prototype, 'size', function () {
	          if (typeof this._size === 'undefined') {
	            throw new TypeError('size method called on incompatible Map');
	          }
	          return this._size;
	        });
	
	        defineProperties(Map$prototype, {
	          get: function get(key) {
	            requireMapSlot(this, 'get');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              var entry = this._storage[fkey];
	              if (entry) {
	                return entry.value;
	              } else {
	                return;
	              }
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return i.value;
	              }
	            }
	          },
	
	          has: function has(key) {
	            requireMapSlot(this, 'has');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              return typeof this._storage[fkey] !== 'undefined';
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return true;
	              }
	            }
	            return false;
	          },
	
	          set: function set(key, value) {
	            requireMapSlot(this, 'set');
	            var head = this._head, i = head, entry;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] !== 'undefined') {
	                this._storage[fkey].value = value;
	                return this;
	              } else {
	                entry = this._storage[fkey] = new MapEntry(key, value);
	                i = head.prev;
	                // fall through
	              }
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.value = value;
	                return this;
	              }
	            }
	            entry = entry || new MapEntry(key, value);
	            if (ES.SameValue(-0, key)) {
	              entry.key = +0; // coerce -0 to +0 in entry
	            }
	            entry.next = this._head;
	            entry.prev = this._head.prev;
	            entry.prev.next = entry;
	            entry.next.prev = entry;
	            this._size += 1;
	            return this;
	          },
	
	          'delete': function (key) {
	            requireMapSlot(this, 'delete');
	            var head = this._head, i = head;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] === 'undefined') {
	                return false;
	              }
	              i = this._storage[fkey].prev;
	              delete this._storage[fkey];
	              // fall through
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.key = i.value = empty;
	                i.prev.next = i.next;
	                i.next.prev = i.prev;
	                this._size -= 1;
	                return true;
	              }
	            }
	            return false;
	          },
	
	          clear: function clear() {
	            requireMapSlot(this, 'clear');
	            this._size = 0;
	            this._storage = emptyObject();
	            var head = this._head, i = head, p = i.next;
	            while ((i = p) !== head) {
	              i.key = i.value = empty;
	              p = i.next;
	              i.next = i.prev = head;
	            }
	            head.next = head.prev = head;
	          },
	
	          keys: function keys() {
	            requireMapSlot(this, 'keys');
	            return new MapIterator(this, 'key');
	          },
	
	          values: function values() {
	            requireMapSlot(this, 'values');
	            return new MapIterator(this, 'value');
	          },
	
	          entries: function entries() {
	            requireMapSlot(this, 'entries');
	            return new MapIterator(this, 'key+value');
	          },
	
	          forEach: function forEach(callback) {
	            requireMapSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var it = this.entries();
	            for (var entry = it.next(); !entry.done; entry = it.next()) {
	              if (context) {
	                _call(callback, context, entry.value[1], entry.value[0], this);
	              } else {
	                callback(entry.value[1], entry.value[0], this);
	              }
	            }
	          }
	        });
	        addIterator(Map$prototype, Map$prototype.entries);
	
	        return MapShim;
	      }()),
	
	      Set: (function () {
	        var isSet = function isSet(set) {
	          return set._es6set && typeof set._storage !== 'undefined';
	        };
	        var requireSetSlot = function requireSetSlot(set, method) {
	          if (!ES.TypeIsObject(set) || !isSet(set)) {
	            // https://github.com/paulmillr/es6-shim/issues/176
	            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
	          }
	        };
	
	        // Creating a Map is expensive.  To speed up the common case of
	        // Sets containing only string or numeric keys, we use an object
	        // as backing storage and lazily create a full Map only when
	        // required.
	        var Set$prototype;
	        var SetShim = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          if (this && this._es6set) {
	            throw new TypeError('Bad construction');
	          }
	          var set = emulateES6construct(this, Set, Set$prototype, {
	            _es6set: true,
	            '[[SetData]]': null,
	            _storage: emptyObject()
	          });
	          if (!set._es6set) {
	            throw new TypeError('bad set');
	          }
	
	          // Optionally initialize Set from iterable
	          if (arguments.length > 0) {
	            addIterableToSet(Set, set, arguments[0]);
	          }
	          return set;
	        };
	        Set$prototype = SetShim.prototype;
	
	        var decodeKey = function (key) {
	          var k = key;
	          if (k === '^null') {
	            return null;
	          } else if (k === '^undefined') {
	            return void 0;
	          } else {
	            var first = k.charAt(0);
	            if (first === '$') {
	              return _strSlice(k, 1);
	            } else if (first === 'n') {
	              return +_strSlice(k, 1);
	            } else if (first === 'b') {
	              return k === 'btrue';
	            }
	          }
	          return +k;
	        };
	        // Switch from the object backing storage to a full Map.
	        var ensureMap = function ensureMap(set) {
	          if (!set['[[SetData]]']) {
	            var m = set['[[SetData]]'] = new collectionShims.Map();
	            _forEach(keys(set._storage), function (key) {
	              var k = decodeKey(key);
	              m.set(k, k);
	            });
	            set['[[SetData]]'] = m;
	          }
	          set._storage = null; // free old backing storage
	        };
	
	        Value.getter(SetShim.prototype, 'size', function () {
	          requireSetSlot(this, 'size');
	          if (this._storage) {
	            return keys(this._storage).length;
	          }
	          ensureMap(this);
	          return this['[[SetData]]'].size;
	        });
	
	        defineProperties(SetShim.prototype, {
	          has: function has(key) {
	            requireSetSlot(this, 'has');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              return !!this._storage[fkey];
	            }
	            ensureMap(this);
	            return this['[[SetData]]'].has(key);
	          },
	
	          add: function add(key) {
	            requireSetSlot(this, 'add');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              this._storage[fkey] = true;
	              return this;
	            }
	            ensureMap(this);
	            this['[[SetData]]'].set(key, key);
	            return this;
	          },
	
	          'delete': function (key) {
	            requireSetSlot(this, 'delete');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              var hasFKey = _hasOwnProperty(this._storage, fkey);
	              return (delete this._storage[fkey]) && hasFKey;
	            }
	            ensureMap(this);
	            return this['[[SetData]]']['delete'](key);
	          },
	
	          clear: function clear() {
	            requireSetSlot(this, 'clear');
	            if (this._storage) {
	              this._storage = emptyObject();
	            }
	            if (this['[[SetData]]']) {
	              this['[[SetData]]'].clear();
	            }
	          },
	
	          values: function values() {
	            requireSetSlot(this, 'values');
	            ensureMap(this);
	            return this['[[SetData]]'].values();
	          },
	
	          entries: function entries() {
	            requireSetSlot(this, 'entries');
	            ensureMap(this);
	            return this['[[SetData]]'].entries();
	          },
	
	          forEach: function forEach(callback) {
	            requireSetSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var entireSet = this;
	            ensureMap(entireSet);
	            this['[[SetData]]'].forEach(function (value, key) {
	              if (context) {
	                _call(callback, context, key, key, entireSet);
	              } else {
	                callback(key, key, entireSet);
	              }
	            });
	          }
	        });
	        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
	        addIterator(SetShim.prototype, SetShim.prototype.values);
	
	        return SetShim;
	      }())
	    };
	
	    if (globals.Map || globals.Set) {
	      // Safari 8, for example, doesn't accept an iterable.
	      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });
	      if (!mapAcceptsArguments) {
	        var OrigMapNoArgs = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMapNoArgs();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          delete m.constructor;
	          Object.setPrototypeOf(m, globals.Map.prototype);
	          return m;
	        };
	        globals.Map.prototype = create(OrigMapNoArgs.prototype);
	        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
	        Value.preserveToString(globals.Map, OrigMapNoArgs);
	      }
	      var testMap = new Map();
	      var mapUsesSameValueZero = (function () {
	        // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
	        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
	        m.set(-0, m);
	        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
	      }());
	      var mapSupportsChaining = testMap.set(1, 2) === testMap;
	      if (!mapUsesSameValueZero || !mapSupportsChaining) {
	        var origMapSet = Map.prototype.set;
	        overrideNative(Map.prototype, 'set', function set(k, v) {
	          _call(origMapSet, this, k === 0 ? 0 : k, v);
	          return this;
	        });
	      }
	      if (!mapUsesSameValueZero) {
	        var origMapGet = Map.prototype.get;
	        var origMapHas = Map.prototype.has;
	        defineProperties(Map.prototype, {
	          get: function get(k) {
	            return _call(origMapGet, this, k === 0 ? 0 : k);
	          },
	          has: function has(k) {
	            return _call(origMapHas, this, k === 0 ? 0 : k);
	          }
	        }, true);
	        Value.preserveToString(Map.prototype.get, origMapGet);
	        Value.preserveToString(Map.prototype.has, origMapHas);
	      }
	      var testSet = new Set();
	      var setUsesSameValueZero = (function (s) {
	        s['delete'](0);
	        s.add(-0);
	        return !s.has(0);
	      }(testSet));
	      var setSupportsChaining = testSet.add(1) === testSet;
	      if (!setUsesSameValueZero || !setSupportsChaining) {
	        var origSetAdd = Set.prototype.add;
	        Set.prototype.add = function add(v) {
	          _call(origSetAdd, this, v === 0 ? 0 : v);
	          return this;
	        };
	        Value.preserveToString(Set.prototype.add, origSetAdd);
	      }
	      if (!setUsesSameValueZero) {
	        var origSetHas = Set.prototype.has;
	        Set.prototype.has = function has(v) {
	          return _call(origSetHas, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype.has, origSetHas);
	        var origSetDel = Set.prototype['delete'];
	        Set.prototype['delete'] = function SetDelete(v) {
	          return _call(origSetDel, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype['delete'], origSetDel);
	      }
	      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
	        var m = new M([]);
	        // Firefox 32 is ok with the instantiating the subclass but will
	        // throw when the map is used.
	        m.set(42, 42);
	        return m instanceof M;
	      });
	      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var mapRequiresNew = (function () {
	        try {
	          return !(globals.Map() instanceof globals.Map);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
	        var OrigMap = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMap();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          delete m.constructor;
	          Object.setPrototypeOf(m, Map.prototype);
	          return m;
	        };
	        globals.Map.prototype = OrigMap.prototype;
	        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
	        Value.preserveToString(globals.Map, OrigMap);
	      }
	      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
	        var s = new S([]);
	        s.add(42, 42);
	        return s instanceof S;
	      });
	      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var setRequiresNew = (function () {
	        try {
	          return !(globals.Set() instanceof globals.Set);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
	        var OrigSet = globals.Set;
	        globals.Set = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          var s = new OrigSet();
	          if (arguments.length > 0) {
	            addIterableToSet(Set, s, arguments[0]);
	          }
	          delete s.constructor;
	          Object.setPrototypeOf(s, Set.prototype);
	          return s;
	        };
	        globals.Set.prototype = OrigSet.prototype;
	        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
	        Value.preserveToString(globals.Set, OrigSet);
	      }
	      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
	        return (new Map()).keys().next().done;
	      });
	      /*
	        - In Firefox < 23, Map#size is a function.
	        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
	        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
	        - In Firefox 24, Map and Set do not implement forEach
	        - In Firefox 25 at least, Map and Set are callable without "new"
	      */
	      if (
	        typeof globals.Map.prototype.clear !== 'function' ||
	        new globals.Set().size !== 0 ||
	        new globals.Map().size !== 0 ||
	        typeof globals.Map.prototype.keys !== 'function' ||
	        typeof globals.Set.prototype.keys !== 'function' ||
	        typeof globals.Map.prototype.forEach !== 'function' ||
	        typeof globals.Set.prototype.forEach !== 'function' ||
	        isCallableWithoutNew(globals.Map) ||
	        isCallableWithoutNew(globals.Set) ||
	        typeof (new globals.Map().keys().next) !== 'function' || // Safari 8
	        mapIterationThrowsStopIterator || // Firefox 25
	        !mapSupportsSubclassing
	      ) {
	        defineProperties(globals, {
	          Map: collectionShims.Map,
	          Set: collectionShims.Set
	        }, true);
	      }
	
	      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
	        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
	        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
	      }
	
	      // Shim incomplete iterator implementations.
	      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
	      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
	
	      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
	        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
	        var anonymousSetHas = globals.Set.prototype.has;
	        overrideNative(globals.Set.prototype, 'has', function has(key) {
	          return _call(anonymousSetHas, this, key);
	        });
	      }
	    }
	    defineProperties(globals, collectionShims);
	    addDefaultSpecies(globals.Map);
	    addDefaultSpecies(globals.Set);
	  }
	
	  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
	    if (!ES.TypeIsObject(target)) {
	      throw new TypeError('target must be an object');
	    }
	  };
	
	  // Some Reflect methods are basically the same as
	  // those on the Object global, except that a TypeError is thrown if
	  // target isn't an object. As well as returning a boolean indicating
	  // the success of the operation.
	  var ReflectShims = {
	    // Apply method in a functional form.
	    apply: function apply() {
	      return ES.Call(ES.Call, null, arguments);
	    },
	
	    // New operator in a functional form.
	    construct: function construct(constructor, args) {
	      if (!ES.IsConstructor(constructor)) {
	        throw new TypeError('First argument must be a constructor.');
	      }
	      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
	      if (!ES.IsConstructor(newTarget)) {
	        throw new TypeError('new.target must be a constructor.');
	      }
	      return ES.Construct(constructor, args, newTarget, 'internal');
	    },
	
	    // When deleting a non-existent or configurable property,
	    // true is returned.
	    // When attempting to delete a non-configurable property,
	    // it will return false.
	    deleteProperty: function deleteProperty(target, key) {
	      throwUnlessTargetIsObject(target);
	      if (supportsDescriptors) {
	        var desc = Object.getOwnPropertyDescriptor(target, key);
	
	        if (desc && !desc.configurable) {
	          return false;
	        }
	      }
	
	      // Will return true.
	      return delete target[key];
	    },
	
	    has: function has(target, key) {
	      throwUnlessTargetIsObject(target);
	      return key in target;
	    }
	  };
	
	  if (Object.getOwnPropertyNames) {
	    Object.assign(ReflectShims, {
	      // Basically the result of calling the internal [[OwnPropertyKeys]].
	      // Concatenating propertyNames and propertySymbols should do the trick.
	      // This should continue to work together with a Symbol shim
	      // which overrides Object.getOwnPropertyNames and implements
	      // Object.getOwnPropertySymbols.
	      ownKeys: function ownKeys(target) {
	        throwUnlessTargetIsObject(target);
	        var keys = Object.getOwnPropertyNames(target);
	
	        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	          _pushApply(keys, Object.getOwnPropertySymbols(target));
	        }
	
	        return keys;
	      }
	    });
	  }
	
	  var callAndCatchException = function ConvertExceptionToBoolean(func) {
	    return !throwsError(func);
	  };
	
	  if (Object.preventExtensions) {
	    Object.assign(ReflectShims, {
	      isExtensible: function isExtensible(target) {
	        throwUnlessTargetIsObject(target);
	        return Object.isExtensible(target);
	      },
	      preventExtensions: function preventExtensions(target) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.preventExtensions(target);
	        });
	      }
	    });
	  }
	
	  if (supportsDescriptors) {
	    var internalGet = function get(target, key, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent === null) {
	          return void 0;
	        }
	
	        return internalGet(parent, key, receiver);
	      }
	
	      if ('value' in desc) {
	        return desc.value;
	      }
	
	      if (desc.get) {
	        return ES.Call(desc.get, receiver);
	      }
	
	      return void 0;
	    };
	
	    var internalSet = function set(target, key, value, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent !== null) {
	          return internalSet(parent, key, value, receiver);
	        }
	
	        desc = {
	          value: void 0,
	          writable: true,
	          enumerable: true,
	          configurable: true
	        };
	      }
	
	      if ('value' in desc) {
	        if (!desc.writable) {
	          return false;
	        }
	
	        if (!ES.TypeIsObject(receiver)) {
	          return false;
	        }
	
	        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
	
	        if (existingDesc) {
	          return Reflect.defineProperty(receiver, key, {
	            value: value
	          });
	        } else {
	          return Reflect.defineProperty(receiver, key, {
	            value: value,
	            writable: true,
	            enumerable: true,
	            configurable: true
	          });
	        }
	      }
	
	      if (desc.set) {
	        _call(desc.set, receiver, value);
	        return true;
	      }
	
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      defineProperty: function defineProperty(target, propertyKey, attributes) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.defineProperty(target, propertyKey, attributes);
	        });
	      },
	
	      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	        throwUnlessTargetIsObject(target);
	        return Object.getOwnPropertyDescriptor(target, propertyKey);
	      },
	
	      // Syntax in a functional form.
	      get: function get(target, key) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 2 ? arguments[2] : target;
	
	        return internalGet(target, key, receiver);
	      },
	
	      set: function set(target, key, value) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 3 ? arguments[3] : target;
	
	        return internalSet(target, key, value, receiver);
	      }
	    });
	  }
	
	  if (Object.getPrototypeOf) {
	    var objectDotGetPrototypeOf = Object.getPrototypeOf;
	    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
	      throwUnlessTargetIsObject(target);
	      return objectDotGetPrototypeOf(target);
	    };
	  }
	
	  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
	    var willCreateCircularPrototype = function (object, lastProto) {
	      var proto = lastProto;
	      while (proto) {
	        if (object === proto) {
	          return true;
	        }
	        proto = ReflectShims.getPrototypeOf(proto);
	      }
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      // Sets the prototype of the given object.
	      // Returns true on success, otherwise false.
	      setPrototypeOf: function setPrototypeOf(object, proto) {
	        throwUnlessTargetIsObject(object);
	        if (proto !== null && !ES.TypeIsObject(proto)) {
	          throw new TypeError('proto must be an object or null');
	        }
	
	        // If they already are the same, we're done.
	        if (proto === Reflect.getPrototypeOf(object)) {
	          return true;
	        }
	
	        // Cannot alter prototype if object not extensible.
	        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
	          return false;
	        }
	
	        // Ensure that we do not create a circular prototype chain.
	        if (willCreateCircularPrototype(object, proto)) {
	          return false;
	        }
	
	        Object.setPrototypeOf(object, proto);
	
	        return true;
	      }
	    });
	  }
	  var defineOrOverrideReflectProperty = function (key, shim) {
	    if (!ES.IsCallable(globals.Reflect[key])) {
	      defineProperty(globals.Reflect, key, shim);
	    } else {
	      var acceptsPrimitives = valueOrFalseIfThrows(function () {
	        globals.Reflect[key](1);
	        globals.Reflect[key](NaN);
	        globals.Reflect[key](true);
	        return true;
	      });
	      if (acceptsPrimitives) {
	        overrideNative(globals.Reflect, key, shim);
	      }
	    }
	  };
	  Object.keys(ReflectShims).forEach(function (key) {
	    defineOrOverrideReflectProperty(key, ReflectShims[key]);
	  });
	  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
	  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
	    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
	      return _call(originalReflectGetProto, globals.Reflect, target);
	    });
	  }
	  if (globals.Reflect.setPrototypeOf) {
	    if (valueOrFalseIfThrows(function () {
	      globals.Reflect.setPrototypeOf(1, {});
	      return true;
	    })) {
	      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
	    }
	  }
	  if (globals.Reflect.defineProperty) {
	    if (!valueOrFalseIfThrows(function () {
	      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });
	      // "extensible" fails on Edge 0.12
	      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
	      return basic && extensible;
	    })) {
	      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
	    }
	  }
	  if (globals.Reflect.construct) {
	    if (!valueOrFalseIfThrows(function () {
	      var F = function F() {};
	      return globals.Reflect.construct(function () {}, [], F) instanceof F;
	    })) {
	      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
	    }
	  }
	
	  if (String(new Date(NaN)) !== 'Invalid Date') {
	    var dateToString = Date.prototype.toString;
	    var shimmedDateToString = function toString() {
	      var valueOf = +this;
	      if (valueOf !== valueOf) {
	        return 'Invalid Date';
	      }
	      return ES.Call(dateToString, this);
	    };
	    overrideNative(Date.prototype, 'toString', shimmedDateToString);
	  }
	
	  // Annex B HTML methods
	  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object
	  var stringHTMLshims = {
	    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
	    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
	    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
	    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
	    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
	    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
	    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
	    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
	    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
	    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
	    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
	    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
	    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
	  };
	  _forEach(Object.keys(stringHTMLshims), function (key) {
	    var method = String.prototype[key];
	    var shouldOverwrite = false;
	    if (ES.IsCallable(method)) {
	      var output = _call(method, '', ' " ');
	      var quotesCount = _concat([], output.match(/"/g)).length;
	      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
	    } else {
	      shouldOverwrite = true;
	    }
	    if (shouldOverwrite) {
	      overrideNative(String.prototype, key, stringHTMLshims[key]);
	    }
	  });
	
	  var JSONstringifiesSymbols = (function () {
	    // Microsoft Edge v0.12 stringifies Symbols incorrectly
	    if (!hasSymbols) { return false; } // Symbols are not supported
	    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
	    if (!stringify) { return false; } // JSON.stringify is not supported
	    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`
	    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`
	    var obj = { a: Symbol() };
	    obj[Symbol()] = true;
	    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted
	    return false;
	  }());
	  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
	    // Chrome 45 throws on stringifying object symbols
	    if (!hasSymbols) { return true; } // Symbols are not supported
	    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
	  });
	  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
	    var origStringify = JSON.stringify;
	    overrideNative(JSON, 'stringify', function stringify(value) {
	      if (typeof value === 'symbol') { return; }
	      var replacer;
	      if (arguments.length > 1) {
	        replacer = arguments[1];
	      }
	      var args = [value];
	      if (!isArray(replacer)) {
	        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
	        var wrappedReplacer = function (key, val) {
	          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
	          if (typeof parsedValue !== 'symbol') {
	            if (Type.symbol(parsedValue)) {
	              return assignTo({})(parsedValue);
	            } else {
	              return parsedValue;
	            }
	          }
	        };
	        args.push(wrappedReplacer);
	      } else {
	        // create wrapped replacer that handles an array replacer?
	        args.push(replacer);
	      }
	      if (arguments.length > 2) {
	        args.push(arguments[2]);
	      }
	      return origStringify.apply(this, args);
	    });
	  }
	
	  return globals;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(257)))

/***/ },
/* 257 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(259);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	      var state = parent._state;
	
	      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	        return this;
	      }
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	      var result = parent._result;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	    var lib$es6$promise$promise$$counter = 0;
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (Array.isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, this._validationError());
	      }
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(260)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(257), (function() { return this; }()), __webpack_require__(54)(module)))

/***/ },
/* 259 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Reflect"] = factory();
		else
			root["Reflect"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		var Reflect = __webpack_require__(1);
		window.Reflect = Reflect;
		__export(__webpack_require__(1));
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var get_proto_of_type_1 = __webpack_require__(2);
		var to_property_key_1 = __webpack_require__(3);
		var is_constructor_1 = __webpack_require__(5);
		var is_undefined_1 = __webpack_require__(6);
		var is_array_1 = __webpack_require__(7);
		var is_object_1 = __webpack_require__(8);
		var metadata_1 = __webpack_require__(9);
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		var ordinary_metadata_keys_1 = __webpack_require__(21);
		/**
		 * Applies a set of decorators to a property of a target object.
		 * @param decorators An array of decorators.
		 * @param target The target object.
		 * @param targetKey (Optional) The property key to decorate.
		 * @param targetDescriptor (Optional) The property descriptor for the target key
		 * @remarks Decorators are applied in reverse order.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     C = Reflect.decorate(decoratorsArray, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.decorate(decoratorsArray, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.decorate(decoratorsArray, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Object.defineProperty(C, "staticMethod",
		 *         Reflect.decorate(decoratorsArray, C, "staticMethod",
		 *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
		 *
		 *     // method (on prototype)
		 *     Object.defineProperty(C.prototype, "method",
		 *         Reflect.decorate(decoratorsArray, C.prototype, "method",
		 *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
		 *
		 */
		function decorate(decorators, target, targetKey, targetDescriptor) {
		    if (!is_undefined_1.isUndefined(targetDescriptor)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        else if (is_undefined_1.isUndefined(targetKey)) {
		            throw new TypeError('target key ' + targetKey + 'is undefined');
		        }
		        else if (!is_object_1.isObject(targetDescriptor)) {
		            throw new TypeError('targetDescriptor ' + targetDescriptor + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_object_1.isObject(target)) {
		            throw new TypeError('target ' + target + ' is not an object');
		        }
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		        return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
		    }
		    else {
		        if (!is_array_1.isArray(decorators)) {
		            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
		        }
		        else if (!is_constructor_1.isConstructor(target)) {
		            throw new TypeError('target ' + target + ' is not a constructor');
		        }
		        return DecorateConstructor(decorators, target);
		    }
		}
		exports.decorate = decorate;
		/**
		 * A default metadata decorator factory that can be used on a class, class member, or parameter.
		 * @param metadataKey The key for the metadata entry.
		 * @param metadataValue The value for the metadata entry.
		 * @returns A decorator function.
		 * @remarks
		 * If `metadataKey` is already defined for the target and target key, the
		 * metadataValue for that key will be overwritten.
		 * @example
		 *
		 *     // constructor
		 *     @Reflect.metadata(key, value)
		 *     class C {
		 *     }
		 *
		 *     // property (on constructor, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticProperty;
		 *     }
		 *
		 *     // property (on prototype, TypeScript only)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         property;
		 *     }
		 *
		 *     // method (on constructor)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         static staticMethod() { }
		 *     }
		 *
		 *     // method (on prototype)
		 *     class C {
		 *         @Reflect.metadata(key, value)
		 *         method() { }
		 *     }
		 *
		 */
		function metadata(metadataKey, metadataValue) {
		    function decorator(target, targetKey) {
		        if (!is_undefined_1.isUndefined(targetKey)) {
		            if (!is_object_1.isObject(target)) {
		                throw new TypeError('target ' + target + ' is not an object');
		            }
		            targetKey = to_property_key_1.toPropertyKey(targetKey);
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		        }
		        else {
		            if (!is_constructor_1.isConstructor(target)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
		        }
		    }
		    return decorator;
		}
		exports.metadata = metadata;
		/**
		 * Define a unique metadata entry on the target.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param metadataValue A value that contains attached metadata.
		 * @param target The target object on which to define metadata.
		 * @param targetKey (Optional) The property key for the target.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     Reflect.defineMetadata("custom:annotation", options, C);
		 *
		 *     // property (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
		 *
		 *     // decorator factory as metadata-producing annotation.
		 *     function MyAnnotation(options): Decorator {
		 *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
		 *     }
		 *
		 */
		function defineMetadata(metadataKey, metadataValue, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
		}
		exports.defineMetadata = defineMetadata;
		/**
		 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasMetadata(metadataKey, target, targetKey);
		}
		exports.hasMetadata = hasMetadata;
		/**
		 * Gets a value indicating whether the target object has the provided metadata key defined.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function hasOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
		}
		exports.hasOwnMetadata = hasOwnMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetMetadata(metadataKey, target, targetKey);
		}
		exports.getMetadata = getMetadata;
		/**
		 * Gets the metadata value for the provided metadata key on the target object.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function getOwnMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
		}
		exports.getOwnMetadata = getOwnMetadata;
		/**
		 * Gets the metadata keys defined on the target object or its prototype chain.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getMetadataKeys(C.prototype, "method");
		 *
		 */
		function getMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_metadata_keys_1.ordinaryMetadataKeys(target, targetKey);
		}
		exports.getMetadataKeys = getMetadataKeys;
		/**
		 * Gets the unique metadata keys defined on the target object.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns An array of unique metadata keys.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.getOwnMetadataKeys(C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
		 *
		 */
		function getOwnMetadataKeys(target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    return ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(target, targetKey);
		}
		exports.getOwnMetadataKeys = getOwnMetadataKeys;
		/**
		 * Deletes the metadata entry from the target object with the provided key.
		 * @param metadataKey A key used to store and retrieve metadata.
		 * @param target The target object on which the metadata is defined.
		 * @param targetKey (Optional) The property key for the target.
		 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
		 * @example
		 *
		 *     class C {
		 *         // property declarations are not part of ES6, though they are valid in TypeScript:
		 *         // static staticProperty;
		 *         // property;
		 *
		 *         constructor(p) { }
		 *         static staticMethod(p) { }
		 *         method(p) { }
		 *     }
		 *
		 *     // constructor
		 *     result = Reflect.deleteMetadata("custom:annotation", C);
		 *
		 *     // property (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
		 *
		 *     // property (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
		 *
		 *     // method (on constructor)
		 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
		 *
		 *     // method (on prototype)
		 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
		 *
		 */
		function deleteMetadata(metadataKey, target, targetKey) {
		    if (!is_object_1.isObject(target)) {
		        throw new TypeError('target ' + target + ' is not an object');
		    }
		    else if (!is_undefined_1.isUndefined(targetKey)) {
		        targetKey = to_property_key_1.toPropertyKey(targetKey);
		    }
		    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    if (is_undefined_1.isUndefined(metadataMap)) {
		        return false;
		    }
		    if (!metadataMap.delete(metadataKey)) {
		        return false;
		    }
		    if (metadataMap.size > 0) {
		        return true;
		    }
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    targetMetadata.delete(targetKey);
		    if (targetMetadata.size > 0) {
		        return true;
		    }
		    metadata_1.__Metadata__.delete(target);
		    return true;
		}
		exports.deleteMetadata = deleteMetadata;
		function DecorateConstructor(decorators, target) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_constructor_1.isConstructor(decorated)) {
		                throw new TypeError('target ' + target + ' is not a constructor');
		            }
		            target = decorated;
		        }
		    }
		    return target;
		}
		function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        var decorated = decorator(target, propertyKey, descriptor);
		        if (!is_undefined_1.isUndefined(decorated)) {
		            if (!is_object_1.isObject(decorated)) {
		                throw new TypeError('decorated ' + decorated + ' is not an object');
		            }
		            descriptor = decorated;
		        }
		    }
		    return descriptor;
		}
		function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
		    for (var i = decorators.length - 1; i >= 0; --i) {
		        var decorator = decorators[i];
		        decorator(target, propertyKey);
		    }
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
		function OrdinaryHasMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return true;
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryHasMetadata(MetadataKey, parent, P);
		    }
		    return false;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
		function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return false;
		    }
		    return Boolean(metadataMap.has(MetadataKey));
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
		function OrdinaryGetMetadata(MetadataKey, O, P) {
		    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
		    if (hasOwn) {
		        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
		    }
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent !== null) {
		        return OrdinaryGetMetadata(MetadataKey, parent, P);
		    }
		    return undefined;
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
		function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
		    if (metadataMap === undefined) {
		        return undefined;
		    }
		    return metadataMap.get(MetadataKey);
		}
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
		function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ true);
		    metadataMap.set(MetadataKey, MetadataValue);
		}
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		"use strict";
		var functionPrototype = Function.prototype;
		function getProtoOfType(O) {
		    var proto = Object.getPrototypeOf(O);
		    if (typeof O !== "function" || O === functionPrototype) {
		        return proto;
		    }
		    // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
		    // Try to determine the superclass constructor. Compatible implementations
		    // must either set __proto__ on a subclass constructor to the superclass constructor,
		    // or ensure each class has a valid `constructor` property on its prototype that
		    // points back to the constructor.
		    // If this is not the same as Function.[[Prototype]], then this is definately inherited.
		    // This is the case when in ES6 or when using __proto__ in a compatible browser.
		    if (proto !== functionPrototype) {
		        return proto;
		    }
		    // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
		    var prototype = O.prototype;
		    var prototypeProto = prototype && Object.getPrototypeOf(prototype);
		    if (prototypeProto == null || prototypeProto === Object.prototype) {
		        return proto;
		    }
		    // if the constructor was not a function, then we cannot determine the heritage.
		    var constructor = prototypeProto.constructor;
		    if (typeof constructor !== "function") {
		        return proto;
		    }
		    // if we have some kind of self-reference, then we cannot determine the heritage.
		    if (constructor === O) {
		        return proto;
		    }
		    // we have a pretty good guess at the heritage.
		    return constructor;
		}
		exports.getProtoOfType = getProtoOfType;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var is_symbol_1 = __webpack_require__(4);
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		function toPropertyKey(value) {
		    if (is_symbol_1.isSymbol(value)) {
		        return value;
		    }
		    return String(value);
		}
		exports.toPropertyKey = toPropertyKey;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
		function isSymbol(x) {
		    return typeof x === "symbol";
		}
		exports.isSymbol = isSymbol;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		function isConstructor(x) {
		    return typeof x === "function";
		}
		exports.isConstructor = isConstructor;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
		function isUndefined(x) {
		    return x === undefined;
		}
		exports.isUndefined = isUndefined;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		function isArray(x) {
		    return Array.isArray(x);
		}
		exports.isArray = isArray;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		"use strict";
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
		function isObject(x) {
		    return typeof x === "object" ? x !== null : typeof x === "function";
		}
		exports.isObject = isObject;
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var weakmap_1 = __webpack_require__(10);
		var _WeakMap = typeof WeakMap === "function" ? WeakMap : weakmap_1.createWeakMapPolyfill();
		// TODO: fix the typescript types
		// export const __Metadata__ = new _WeakMap<Object, Map<string | symbol, Map<any, any>>>();
		exports.__Metadata__ = new _WeakMap();
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var create_unique_key_1 = __webpack_require__(11);
		var get_or_create_weakmap_1 = __webpack_require__(17);
		exports.rootKey = create_unique_key_1.createUniqueKey();
		var WeakMap = (function () {
		    function WeakMap() {
		        this._key = create_unique_key_1.createUniqueKey();
		    }
		    Object.defineProperty(WeakMap.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    WeakMap.prototype.has = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return this._key in table;
		        }
		        return false;
		    };
		    WeakMap.prototype.get = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table) {
		            return table[this._key];
		        }
		        return undefined;
		    };
		    WeakMap.prototype.set = function (target, value) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ true);
		        table[this._key] = value;
		        return this;
		    };
		    WeakMap.prototype.delete = function (target) {
		        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
		        if (table && this._key in table) {
		            return delete table[this._key];
		        }
		        return false;
		    };
		    WeakMap.prototype.clear = function () {
		        // NOTE: not a real clear, just makes the previous data unreachable
		        this._key = create_unique_key_1.createUniqueKey();
		    };
		    return WeakMap;
		}());
		exports.WeakMap = WeakMap;
		function createWeakMapPolyfill() {
		    return WeakMap;
		}
		exports.createWeakMapPolyfill = createWeakMapPolyfill;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var has_own_1 = __webpack_require__(13);
		var create_uuid_1 = __webpack_require__(14);
		exports.keys = {};
		function createUniqueKey() {
		    var key;
		    do {
		        key = helper_constants_1.WEAKMAP_PREFIX + create_uuid_1.createUUID();
		    } while (has_own_1.hasOwn.call(exports.keys, key));
		    exports.keys[key] = true;
		    return key;
		}
		exports.createUniqueKey = createUniqueKey;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		"use strict";
		exports.UUID_SIZE = 16;
		exports.WEAKMAP_PREFIX = "@@WeakMap@@";
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		"use strict";
		exports.hasOwn = Object.prototype.hasOwnProperty;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var helper_constants_1 = __webpack_require__(12);
		var gen_randombytes_1 = __webpack_require__(15);
		function createUUID() {
		    var data = gen_randombytes_1.genRandomBytes(helper_constants_1.UUID_SIZE);
		    // mark as random - RFC 4122 § 4.4
		    data[6] = data[6] & 0x4f | 0x40;
		    data[8] = data[8] & 0xbf | 0x80;
		    var result = "";
		    for (var offset = 0; offset < helper_constants_1.UUID_SIZE; ++offset) {
		        var byte = data[offset];
		        if (offset === 4 || offset === 6 || offset === 8) {
		            result += "-";
		        }
		        if (byte < 16) {
		            result += "0";
		        }
		        result += byte.toString(16).toLowerCase();
		    }
		    return result;
		}
		exports.createUUID = createUUID;
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var fill_randombytes_1 = __webpack_require__(16);
		function genRandomBytes(size) {
		    var data;
		    if (typeof Uint8Array === "function") {
		        data = new Uint8Array(size);
		        if (typeof window.crypto !== "undefined") {
		            window.crypto.getRandomValues(data);
		        }
		        else if (typeof window.msCrypto !== "undefined") {
		            window.msCrypto.getRandomValues(data);
		        }
		        else {
		            fill_randombytes_1.fillRandomBytes(data, size);
		        }
		    }
		    else {
		        data = new Array(size);
		        fill_randombytes_1.fillRandomBytes(data, size);
		    }
		    return data;
		}
		exports.genRandomBytes = genRandomBytes;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		"use strict";
		function fillRandomBytes(buffer, size) {
		    for (var i = 0; i < size; ++i) {
		        buffer[i] = Math.random() * 255 | 0;
		    }
		    return buffer;
		}
		exports.fillRandomBytes = fillRandomBytes;
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var has_own_1 = __webpack_require__(13);
		function getOrCreateWeakMapTable(rootKey, target, create) {
		    if (!has_own_1.hasOwn.call(target, rootKey)) {
		        if (!create) {
		            return undefined;
		        }
		        Object.defineProperty(target, rootKey, {
		            value: Object.create(null)
		        });
		    }
		    return target[rootKey];
		}
		exports.getOrCreateWeakMapTable = getOrCreateWeakMapTable;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var get_or_create_metadata_map_1 = __webpack_require__(19);
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
		function ordinaryOwnMetadataKeys(target, targetKey) {
		    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
		    var keys = [];
		    if (metadataMap) {
		        metadataMap.forEach(function (_, key) { return keys.push(key); });
		    }
		    return keys;
		}
		exports.ordinaryOwnMetadataKeys = ordinaryOwnMetadataKeys;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var metadata_1 = __webpack_require__(9);
		var map_1 = __webpack_require__(20);
		var _Map = typeof Map === "function" ? Map : map_1.createMapPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
		function getOrCreateMetadataMap(target, targetKey, create) {
		    var targetMetadata = metadata_1.__Metadata__.get(target);
		    if (!targetMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // targetMetadata = new _Map<string | symbol, _Map<any, any>>();
		        targetMetadata = new _Map();
		        metadata_1.__Metadata__.set(target, targetMetadata);
		    }
		    var keyMetadata = targetMetadata.get(targetKey);
		    if (!keyMetadata) {
		        if (!create) {
		            return undefined;
		        }
		        // TODO: fix the typescript types
		        // keyMetadata = new _Map<any, any>();
		        keyMetadata = new _Map();
		        targetMetadata.set(targetKey, keyMetadata);
		    }
		    return keyMetadata;
		}
		exports.getOrCreateMetadataMap = getOrCreateMetadataMap;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports) {
	
		"use strict";
		// naive Map shim
		exports.cacheSentinel = {};
		var Map = (function () {
		    function Map() {
		        this._keys = [];
		        this._values = [];
		        this._cache = exports.cacheSentinel;
		    }
		    Object.defineProperty(Map.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Map.prototype, "size", {
		        get: function () {
		            return this._keys.length;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Map.prototype.has = function (key) {
		        if (key === this._cache) {
		            return true;
		        }
		        if (this._find(key) >= 0) {
		            this._cache = key;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.get = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._cache = key;
		            return this._values[index];
		        }
		        return undefined;
		    };
		    Map.prototype.set = function (key, value) {
		        this.delete(key);
		        this._keys.push(key);
		        this._values.push(value);
		        this._cache = key;
		        return this;
		    };
		    Map.prototype.delete = function (key) {
		        var index = this._find(key);
		        if (index >= 0) {
		            this._keys.splice(index, 1);
		            this._values.splice(index, 1);
		            this._cache = exports.cacheSentinel;
		            return true;
		        }
		        return false;
		    };
		    Map.prototype.clear = function () {
		        this._keys.length = 0;
		        this._values.length = 0;
		        this._cache = exports.cacheSentinel;
		    };
		    Map.prototype.forEach = function (callback, thisArg) {
		        var size = this.size;
		        for (var i = 0; i < size; ++i) {
		            var key = this._keys[i];
		            var value = this._values[i];
		            this._cache = key;
		            callback.call(this, value, key, this);
		        }
		    };
		    Map.prototype._find = function (key) {
		        var keys = this._keys;
		        var size = keys.length;
		        for (var i = 0; i < size; ++i) {
		            if (keys[i] === key) {
		                return i;
		            }
		        }
		        return -1;
		    };
		    return Map;
		}());
		exports.Map = Map;
		function createMapPolyfill() {
		    return Map;
		}
		exports.createMapPolyfill = createMapPolyfill;
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var ordinary_own_metadata_keys_1 = __webpack_require__(18);
		var get_proto_of_type_1 = __webpack_require__(2);
		var set_1 = __webpack_require__(22);
		var _Set = typeof Set === "function" ? Set : set_1.createSetPolyfill();
		// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
		function ordinaryMetadataKeys(O, P) {
		    var ownKeys = ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(O, P);
		    var parent = get_proto_of_type_1.getProtoOfType(O);
		    if (parent === null) {
		        return ownKeys;
		    }
		    var parentKeys = ordinaryMetadataKeys(parent, P);
		    if (parentKeys.length <= 0) {
		        return ownKeys;
		    }
		    if (ownKeys.length <= 0) {
		        return parentKeys;
		    }
		    var set = new _Set();
		    var keys = [];
		    for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
		        var key = ownKeys_1[_i];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
		        var key = parentKeys_1[_a];
		        var hasKey = set.has(key);
		        if (!hasKey) {
		            set.add(key);
		            keys.push(key);
		        }
		    }
		    return keys;
		}
		exports.ordinaryMetadataKeys = ordinaryMetadataKeys;
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		"use strict";
		// var _Map: MapConstructor = (typeof Map !== "undefined") ? createMapPolyfill() : Map;
		exports.cacheSentinel = {};
		var Set = (function () {
		    function Set() {
		        this._map = new Map();
		    }
		    Object.defineProperty(Set.prototype, "length", {
		        get: function () {
		            return 0;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Object.defineProperty(Set.prototype, "size", {
		        get: function () {
		            return this._map.size;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Set.prototype.has = function (value) {
		        return this._map.has(value);
		    };
		    Set.prototype.add = function (value) {
		        this._map.set(value, value);
		        return this;
		    };
		    Set.prototype.delete = function (value) {
		        return this._map.delete(value);
		    };
		    Set.prototype.clear = function () {
		        this._map.clear();
		    };
		    Set.prototype.forEach = function (callback, thisArg) {
		        this._map.forEach(callback, thisArg);
		    };
		    return Set;
		}());
		exports.Set = Set;
		function createSetPolyfill() {
		    return Set;
		}
		exports.createSetPolyfill = createSetPolyfill;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=browser.js.map

/***/ },
/* 262 */,
/* 263 */,
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * The http module provides services to perform http requests. To get started, see the {@link Http}
	 * class.
	 */
	var core_1 = __webpack_require__(22);
	var http_1 = __webpack_require__(265);
	var xhr_backend_1 = __webpack_require__(273);
	var jsonp_backend_1 = __webpack_require__(277);
	var browser_xhr_1 = __webpack_require__(276);
	var browser_jsonp_1 = __webpack_require__(278);
	var base_request_options_1 = __webpack_require__(271);
	var base_response_options_1 = __webpack_require__(275);
	var static_request_1 = __webpack_require__(267);
	exports.Request = static_request_1.Request;
	var static_response_1 = __webpack_require__(274);
	exports.Response = static_response_1.Response;
	var interfaces_1 = __webpack_require__(266);
	exports.Connection = interfaces_1.Connection;
	exports.ConnectionBackend = interfaces_1.ConnectionBackend;
	var browser_xhr_2 = __webpack_require__(276);
	exports.BrowserXhr = browser_xhr_2.BrowserXhr;
	var base_request_options_2 = __webpack_require__(271);
	exports.BaseRequestOptions = base_request_options_2.BaseRequestOptions;
	exports.RequestOptions = base_request_options_2.RequestOptions;
	var base_response_options_2 = __webpack_require__(275);
	exports.BaseResponseOptions = base_response_options_2.BaseResponseOptions;
	exports.ResponseOptions = base_response_options_2.ResponseOptions;
	var xhr_backend_2 = __webpack_require__(273);
	exports.XHRBackend = xhr_backend_2.XHRBackend;
	exports.XHRConnection = xhr_backend_2.XHRConnection;
	var jsonp_backend_2 = __webpack_require__(277);
	exports.JSONPBackend = jsonp_backend_2.JSONPBackend;
	exports.JSONPConnection = jsonp_backend_2.JSONPConnection;
	var http_2 = __webpack_require__(265);
	exports.Http = http_2.Http;
	exports.Jsonp = http_2.Jsonp;
	var headers_1 = __webpack_require__(268);
	exports.Headers = headers_1.Headers;
	var enums_1 = __webpack_require__(270);
	exports.ResponseType = enums_1.ResponseType;
	exports.ReadyState = enums_1.ReadyState;
	exports.RequestMethod = enums_1.RequestMethod;
	var url_search_params_1 = __webpack_require__(272);
	exports.URLSearchParams = url_search_params_1.URLSearchParams;
	/**
	 * Provides a basic set of injectables to use the {@link Http} service in any application.
	 *
	 * The `HTTP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/snj7Nv?p=preview))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {NgFor} from 'angular2/common';
	 * import {HTTP_PROVIDERS, Http} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [HTTP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Object[];
	 *   constructor(http:Http) {
	 *     http.get('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     });
	 *   }
	 *   active:boolean = false;
	 *   toggleActiveState() {
	 *     this.active = !this.active;
	 *   }
	 * }
	 *
	 * bootstrap(App)
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * The primary public API included in `HTTP_PROVIDERS` is the {@link Http} class.
	 * However, other providers required by `Http` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `HTTP_PROVIDERS` include:
	 *  * {@link Http}
	 *  * {@link XHRBackend}
	 *  * `BrowserXHR` - Private factory to create `XMLHttpRequest` instances
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `HTTP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/aCMEXi?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link XHRBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7LWALD?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 *
	 * var injector = Injector.resolveAndCreate([
	 *   HTTP_PROVIDERS,
	 *   MockBackend,
	 *   provide(XHRBackend, {useExisting: MockBackend})
	 * ]);
	 * var http = injector.get(Http);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   }
	 * });
	 *
	 * http.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.HTTP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    core_1.provide(http_1.Http, {
	        useFactory: function (xhrBackend, requestOptions) {
	            return new http_1.Http(xhrBackend, requestOptions);
	        },
	        deps: [xhr_backend_1.XHRBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_xhr_1.BrowserXhr,
	    core_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    core_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    xhr_backend_1.XHRBackend
	];
	/**
	 * See {@link HTTP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.HTTP_BINDINGS = exports.HTTP_PROVIDERS;
	/**
	 * Provides a basic set of providers to use the {@link Jsonp} service in any application.
	 *
	 * The `JSONP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vmeN4F?p=preview))
	 *
	 * ```
	 * import {Component} from 'angular2/core';
	 * import {NgFor} from 'angular2/common';
	 * import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [JSONP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Array<Object>;
	 *   constructor(jsonp:Jsonp) {
	 *     jsonp.request('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     })
	 *   }
	 * }
	 * ```
	 *
	 * The primary public API included in `JSONP_PROVIDERS` is the {@link Jsonp} class.
	 * However, other providers required by `Jsonp` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `JSONP_PROVIDERS` include:
	 *  * {@link Jsonp}
	 *  * {@link JSONPBackend}
	 *  * `BrowserJsonp` - Private factory
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `JSONP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/TFug7x?p=preview))
	 *
	 * ```
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {JSONP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [JSONP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link JSONPBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/HDqZWL?p=preview))
	 *
	 * ```
	 * import {provide, Injector} from 'angular2/core';
	 * import {JSONP_PROVIDERS, Jsonp, Response, JSONPBackend} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 * var injector = Injector.resolveAndCreate([
	 *   JSONP_PROVIDERS,
	 *   MockBackend,
	 *   provide(JSONPBackend, {useExisting: MockBackend})
	 * ]);
	 * var jsonp = injector.get(Jsonp);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   }
	 * });
	
	 * jsonp.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.JSONP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    core_1.provide(http_1.Jsonp, {
	        useFactory: function (jsonpBackend, requestOptions) {
	            return new http_1.Jsonp(jsonpBackend, requestOptions);
	        },
	        deps: [jsonp_backend_1.JSONPBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_jsonp_1.BrowserJsonp,
	    core_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    core_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    core_1.provide(jsonp_backend_1.JSONPBackend, { useClass: jsonp_backend_1.JSONPBackend_ })
	];
	/**
	 * See {@link JSONP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.JSON_BINDINGS = exports.JSONP_PROVIDERS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2h0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsNEJBQXdDLGlDQUFpQyxDQUFDLENBQUE7QUFDMUUsOEJBQTJELG1DQUFtQyxDQUFDLENBQUE7QUFDL0YsNEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFDM0QsOEJBQTJCLG1DQUFtQyxDQUFDLENBQUE7QUFDL0QscUNBQWlELGlDQUFpQyxDQUFDLENBQUE7QUFFbkYsc0NBQW1ELGtDQUFrQyxDQUFDLENBQUE7QUFDdEYsK0JBQXNCLDJCQUEyQixDQUFDO0FBQTFDLDJDQUEwQztBQUNsRCxnQ0FBdUIsNEJBQTRCLENBQUM7QUFBNUMsOENBQTRDO0FBRXBELDJCQUtPLHVCQUF1QixDQUFDO0FBRjdCLDZDQUFVO0FBQ1YsMkRBQzZCO0FBRS9CLDRCQUF5QixpQ0FBaUMsQ0FBQztBQUFuRCw4Q0FBbUQ7QUFDM0QscUNBQWlELGlDQUFpQyxDQUFDO0FBQTNFLHVFQUFrQjtBQUFFLCtEQUF1RDtBQUNuRixzQ0FBbUQsa0NBQWtDLENBQUM7QUFBOUUsMEVBQW1CO0FBQUUsa0VBQXlEO0FBQ3RGLDRCQUF3QyxpQ0FBaUMsQ0FBQztBQUFsRSw4Q0FBVTtBQUFFLG9EQUFzRDtBQUMxRSw4QkFBNEMsbUNBQW1DLENBQUM7QUFBeEUsb0RBQVk7QUFBRSwwREFBMEQ7QUFDaEYscUJBQTBCLGlCQUFpQixDQUFDO0FBQXBDLDJCQUFJO0FBQUUsNkJBQThCO0FBRTVDLHdCQUFzQixvQkFBb0IsQ0FBQztBQUFuQyxvQ0FBbUM7QUFFM0Msc0JBQXNELGtCQUFrQixDQUFDO0FBQWpFLDRDQUFZO0FBQUUsd0NBQVU7QUFBRSw4Q0FBdUM7QUFDekUsa0NBQThCLDhCQUE4QixDQUFDO0FBQXJELDhEQUFxRDtBQUU3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvSEc7QUFDVSxzQkFBYyxHQUFVO0lBQ25DLGtFQUFrRTtJQUNsRSx3REFBd0Q7SUFDeEQsY0FBTyxDQUFDLFdBQUksRUFDSjtRQUNFLFVBQVUsRUFBRSxVQUFDLFVBQXNCLEVBQUUsY0FBOEI7bUJBQ25ELElBQUksV0FBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUM7UUFBcEMsQ0FBb0M7UUFDcEQsSUFBSSxFQUFFLENBQUMsd0JBQVUsRUFBRSxxQ0FBYyxDQUFDO0tBQ25DLENBQUM7SUFDVix3QkFBVTtJQUNWLGNBQU8sQ0FBQyxxQ0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLHlDQUFrQixFQUFDLENBQUM7SUFDdkQsY0FBTyxDQUFDLHVDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkNBQW1CLEVBQUMsQ0FBQztJQUN6RCx3QkFBVTtDQUNYLENBQUM7QUFFRjs7OztHQUlHO0FBQ1UscUJBQWEsR0FBRyxzQkFBYyxDQUFDO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEdHO0FBQ1UsdUJBQWUsR0FBVTtJQUNwQyxrRUFBa0U7SUFDbEUsd0RBQXdEO0lBQ3hELGNBQU8sQ0FBQyxZQUFLLEVBQ0w7UUFDRSxVQUFVLEVBQUUsVUFBQyxZQUEwQixFQUFFLGNBQThCO21CQUN2RCxJQUFJLFlBQUssQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO1FBQXZDLENBQXVDO1FBQ3ZELElBQUksRUFBRSxDQUFDLDRCQUFZLEVBQUUscUNBQWMsQ0FBQztLQUNyQyxDQUFDO0lBQ1YsNEJBQVk7SUFDWixjQUFPLENBQUMscUNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSx5Q0FBa0IsRUFBQyxDQUFDO0lBQ3ZELGNBQU8sQ0FBQyx1Q0FBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLDJDQUFtQixFQUFDLENBQUM7SUFDekQsY0FBTyxDQUFDLDRCQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQWEsRUFBQyxDQUFDO0NBQ2pELENBQUM7QUFFRjs7OztHQUlHO0FBQ1UscUJBQWEsR0FBRyx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBodHRwIG1vZHVsZSBwcm92aWRlcyBzZXJ2aWNlcyB0byBwZXJmb3JtIGh0dHAgcmVxdWVzdHMuIFRvIGdldCBzdGFydGVkLCBzZWUgdGhlIHtAbGluayBIdHRwfVxuICogY2xhc3MuXG4gKi9cbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBKc29ucH0gZnJvbSAnLi9zcmMvaHR0cC9odHRwJztcbmltcG9ydCB7WEhSQmFja2VuZCwgWEhSQ29ubmVjdGlvbn0gZnJvbSAnLi9zcmMvaHR0cC9iYWNrZW5kcy94aHJfYmFja2VuZCc7XG5pbXBvcnQge0pTT05QQmFja2VuZCwgSlNPTlBCYWNrZW5kXywgSlNPTlBDb25uZWN0aW9ufSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2pzb25wX2JhY2tlbmQnO1xuaW1wb3J0IHtCcm93c2VyWGhyfSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfeGhyJztcbmltcG9ydCB7QnJvd3Nlckpzb25wfSBmcm9tICcuL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfanNvbnAnO1xuaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVxdWVzdF9vcHRpb25zJztcbmltcG9ydCB7Q29ubmVjdGlvbkJhY2tlbmR9IGZyb20gJy4vc3JjL2h0dHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge0Jhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlT3B0aW9uc30gZnJvbSAnLi9zcmMvaHR0cC9iYXNlX3Jlc3BvbnNlX29wdGlvbnMnO1xuZXhwb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3NyYy9odHRwL3N0YXRpY19yZXF1ZXN0JztcbmV4cG9ydCB7UmVzcG9uc2V9IGZyb20gJy4vc3JjL2h0dHAvc3RhdGljX3Jlc3BvbnNlJztcblxuZXhwb3J0IHtcbiAgUmVxdWVzdE9wdGlvbnNBcmdzLFxuICBSZXNwb25zZU9wdGlvbnNBcmdzLFxuICBDb25uZWN0aW9uLFxuICBDb25uZWN0aW9uQmFja2VuZFxufSBmcm9tICcuL3NyYy9odHRwL2ludGVyZmFjZXMnO1xuXG5leHBvcnQge0Jyb3dzZXJYaHJ9IGZyb20gJy4vc3JjL2h0dHAvYmFja2VuZHMvYnJvd3Nlcl94aHInO1xuZXhwb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVxdWVzdF9vcHRpb25zJztcbmV4cG9ydCB7QmFzZVJlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2VPcHRpb25zfSBmcm9tICcuL3NyYy9odHRwL2Jhc2VfcmVzcG9uc2Vfb3B0aW9ucyc7XG5leHBvcnQge1hIUkJhY2tlbmQsIFhIUkNvbm5lY3Rpb259IGZyb20gJy4vc3JjL2h0dHAvYmFja2VuZHMveGhyX2JhY2tlbmQnO1xuZXhwb3J0IHtKU09OUEJhY2tlbmQsIEpTT05QQ29ubmVjdGlvbn0gZnJvbSAnLi9zcmMvaHR0cC9iYWNrZW5kcy9qc29ucF9iYWNrZW5kJztcbmV4cG9ydCB7SHR0cCwgSnNvbnB9IGZyb20gJy4vc3JjL2h0dHAvaHR0cCc7XG5cbmV4cG9ydCB7SGVhZGVyc30gZnJvbSAnLi9zcmMvaHR0cC9oZWFkZXJzJztcblxuZXhwb3J0IHtSZXNwb25zZVR5cGUsIFJlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2R9IGZyb20gJy4vc3JjL2h0dHAvZW51bXMnO1xuZXhwb3J0IHtVUkxTZWFyY2hQYXJhbXN9IGZyb20gJy4vc3JjL2h0dHAvdXJsX3NlYXJjaF9wYXJhbXMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzaWMgc2V0IG9mIGluamVjdGFibGVzIHRvIHVzZSB0aGUge0BsaW5rIEh0dHB9IHNlcnZpY2UgaW4gYW55IGFwcGxpY2F0aW9uLlxuICpcbiAqIFRoZSBgSFRUUF9QUk9WSURFUlNgIHNob3VsZCBiZSBpbmNsdWRlZCBlaXRoZXIgaW4gYSBjb21wb25lbnQncyBpbmplY3RvcixcbiAqIG9yIGluIHRoZSByb290IGluamVjdG9yIHdoZW4gYm9vdHN0cmFwcGluZyBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvc25qN052P3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuICogaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgcHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8aDE+UGVvcGxlPC9oMT5cbiAqICAgICAgIDx1bD5cbiAqICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwZXJzb24gb2YgcGVvcGxlXCI+XG4gKiAgICAgICAgICAge3twZXJzb24ubmFtZX19XG4gKiAgICAgICAgIDwvbGk+XG4gKiAgICAgICA8L3VsPlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIHBlb3BsZTogT2JqZWN0W107XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkge1xuICogICAgIGh0dHAuZ2V0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAgICAgdGhpcy5wZW9wbGUgPSByZXMuanNvbigpO1xuICogICAgIH0pO1xuICogICB9XG4gKiAgIGFjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gKiAgIHRvZ2dsZUFjdGl2ZVN0YXRlKCkge1xuICogICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICogICB9XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcClcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKlxuICogVGhlIHByaW1hcnkgcHVibGljIEFQSSBpbmNsdWRlZCBpbiBgSFRUUF9QUk9WSURFUlNgIGlzIHRoZSB7QGxpbmsgSHR0cH0gY2xhc3MuXG4gKiBIb3dldmVyLCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZWQgYnkgYEh0dHBgIGFyZSBpbmNsdWRlZCxcbiAqIHdoaWNoIG1heSBiZSBiZW5lZmljaWFsIHRvIG92ZXJyaWRlIGluIGNlcnRhaW4gY2FzZXMuXG4gKlxuICogVGhlIHByb3ZpZGVycyBpbmNsdWRlZCBpbiBgSFRUUF9QUk9WSURFUlNgIGluY2x1ZGU6XG4gKiAgKiB7QGxpbmsgSHR0cH1cbiAqICAqIHtAbGluayBYSFJCYWNrZW5kfVxuICogICogYEJyb3dzZXJYSFJgIC0gUHJpdmF0ZSBmYWN0b3J5IHRvIGNyZWF0ZSBgWE1MSHR0cFJlcXVlc3RgIGluc3RhbmNlc1xuICogICoge0BsaW5rIFJlcXVlc3RPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiAgKiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVzcG9uc2VPcHRpb25zfSBjbGFzc1xuICpcbiAqIFRoZXJlIG1heSBiZSBjYXNlcyB3aGVyZSBpdCBtYWtlcyBzZW5zZSB0byBleHRlbmQgdGhlIGJhc2UgcmVxdWVzdCBvcHRpb25zLFxuICogc3VjaCBhcyB0byBhZGQgYSBzZWFyY2ggc3RyaW5nIHRvIGJlIGFwcGVuZGVkIHRvIGFsbCBVUkxzLlxuICogVG8gYWNjb21wbGlzaCB0aGlzLCBhIG5ldyBwcm92aWRlciBmb3Ige0BsaW5rIFJlcXVlc3RPcHRpb25zfSBzaG91bGRcbiAqIGJlIGFkZGVkIGluIHRoZSBzYW1lIGluamVjdG9yIGFzIGBIVFRQX1BST1ZJREVSU2AuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2FDTUVYaT9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEJhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXF1ZXN0T3B0aW9ucyB7XG4gKiAgIHNlYXJjaDogc3RyaW5nID0gJ2NvcmVUZWFtPXRydWUnO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHAsIFtIVFRQX1BST1ZJREVSUywgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywge3VzZUNsYXNzOiBNeU9wdGlvbnN9KV0pXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICpcbiAqIExpa2V3aXNlLCB0byB1c2UgYSBtb2NrIGJhY2tlbmQgZm9yIHVuaXQgdGVzdHMsIHRoZSB7QGxpbmsgWEhSQmFja2VuZH1cbiAqIHByb3ZpZGVyIHNob3VsZCBiZSBib3VuZCB0byB7QGxpbmsgTW9ja0JhY2tlbmR9LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC83TFdBTEQ/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXNwb25zZSwgWEhSQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKiBpbXBvcnQge01vY2tCYWNrZW5kfSBmcm9tICdhbmd1bGFyMi9odHRwL3Rlc3RpbmcnO1xuICpcbiAqIHZhciBwZW9wbGUgPSBbe25hbWU6ICdKZWZmJ30sIHtuYW1lOiAnVG9iaWFzJ31dO1xuICpcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBIVFRQX1BST1ZJREVSUyxcbiAqICAgTW9ja0JhY2tlbmQsXG4gKiAgIHByb3ZpZGUoWEhSQmFja2VuZCwge3VzZUV4aXN0aW5nOiBNb2NrQmFja2VuZH0pXG4gKiBdKTtcbiAqIHZhciBodHRwID0gaW5qZWN0b3IuZ2V0KEh0dHApO1xuICogdmFyIGJhY2tlbmQgPSBpbmplY3Rvci5nZXQoTW9ja0JhY2tlbmQpO1xuICpcbiAqIC8vIExpc3RlbiBmb3IgYW55IG5ldyByZXF1ZXN0c1xuICogYmFja2VuZC5jb25uZWN0aW9ucy5vYnNlcnZlcih7XG4gKiAgIG5leHQ6IGNvbm5lY3Rpb24gPT4ge1xuICogICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZSh7Ym9keTogcGVvcGxlfSk7XG4gKiAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gKiAgICAgICAvLyBTZW5kIGEgcmVzcG9uc2UgdG8gdGhlIHJlcXVlc3RcbiAqICAgICAgIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQocmVzcG9uc2UpO1xuICogICAgIH0pO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiBodHRwLmdldCgncGVvcGxlLmpzb24nKS5vYnNlcnZlcih7XG4gKiAgIG5leHQ6IHJlcyA9PiB7XG4gKiAgICAgLy8gUmVzcG9uc2UgY2FtZSBmcm9tIG1vY2sgYmFja2VuZFxuICogICAgIGNvbnNvbGUubG9nKCdmaXJzdCBwZXJzb24nLCByZXMuanNvbigpWzBdLm5hbWUpO1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgSFRUUF9QUk9WSURFUlM6IGFueVtdID0gW1xuICAvLyBUT0RPKHBhc2NhbCk6IHVzZSBmYWN0b3J5IHR5cGUgYW5ub3RhdGlvbnMgb25jZSBzdXBwb3J0ZWQgaW4gRElcbiAgLy8gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMxODNcbiAgcHJvdmlkZShIdHRwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICh4aHJCYWNrZW5kOiBYSFJCYWNrZW5kLCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEh0dHAoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpLFxuICAgICAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXVxuICAgICAgICAgIH0pLFxuICBCcm93c2VyWGhyLFxuICBwcm92aWRlKFJlcXVlc3RPcHRpb25zLCB7dXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9uc30pLFxuICBwcm92aWRlKFJlc3BvbnNlT3B0aW9ucywge3VzZUNsYXNzOiBCYXNlUmVzcG9uc2VPcHRpb25zfSksXG4gIFhIUkJhY2tlbmRcbl07XG5cbi8qKlxuICogU2VlIHtAbGluayBIVFRQX1BST1ZJREVSU30gaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgSFRUUF9CSU5ESU5HUyA9IEhUVFBfUFJPVklERVJTO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzaWMgc2V0IG9mIHByb3ZpZGVycyB0byB1c2UgdGhlIHtAbGluayBKc29ucH0gc2VydmljZSBpbiBhbnkgYXBwbGljYXRpb24uXG4gKlxuICogVGhlIGBKU09OUF9QUk9WSURFUlNgIHNob3VsZCBiZSBpbmNsdWRlZCBlaXRoZXIgaW4gYSBjb21wb25lbnQncyBpbmplY3RvcixcbiAqIG9yIGluIHRoZSByb290IGluamVjdG9yIHdoZW4gYm9vdHN0cmFwcGluZyBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvdm1lTjRGP3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge05nRm9yfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuICogaW1wb3J0IHtKU09OUF9QUk9WSURFUlMsIEpzb25wfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICBwcm92aWRlcnM6IFtKU09OUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8aDE+UGVvcGxlPC9oMT5cbiAqICAgICAgIDx1bD5cbiAqICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwZXJzb24gb2YgcGVvcGxlXCI+XG4gKiAgICAgICAgICAge3twZXJzb24ubmFtZX19XG4gKiAgICAgICAgIDwvbGk+XG4gKiAgICAgICA8L3VsPlxuICogICAgIDwvZGl2PlxuICogICBgLFxuICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIHBlb3BsZTogQXJyYXk8T2JqZWN0PjtcbiAqICAgY29uc3RydWN0b3IoanNvbnA6SnNvbnApIHtcbiAqICAgICBqc29ucC5yZXF1ZXN0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAgICAgdGhpcy5wZW9wbGUgPSByZXMuanNvbigpO1xuICogICAgIH0pXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIFRoZSBwcmltYXJ5IHB1YmxpYyBBUEkgaW5jbHVkZWQgaW4gYEpTT05QX1BST1ZJREVSU2AgaXMgdGhlIHtAbGluayBKc29ucH0gY2xhc3MuXG4gKiBIb3dldmVyLCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZWQgYnkgYEpzb25wYCBhcmUgaW5jbHVkZWQsXG4gKiB3aGljaCBtYXkgYmUgYmVuZWZpY2lhbCB0byBvdmVycmlkZSBpbiBjZXJ0YWluIGNhc2VzLlxuICpcbiAqIFRoZSBwcm92aWRlcnMgaW5jbHVkZWQgaW4gYEpTT05QX1BST1ZJREVSU2AgaW5jbHVkZTpcbiAqICAqIHtAbGluayBKc29ucH1cbiAqICAqIHtAbGluayBKU09OUEJhY2tlbmR9XG4gKiAgKiBgQnJvd3Nlckpzb25wYCAtIFByaXZhdGUgZmFjdG9yeVxuICogICoge0BsaW5rIFJlcXVlc3RPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiAgKiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSAtIEJvdW5kIHRvIHtAbGluayBCYXNlUmVzcG9uc2VPcHRpb25zfSBjbGFzc1xuICpcbiAqIFRoZXJlIG1heSBiZSBjYXNlcyB3aGVyZSBpdCBtYWtlcyBzZW5zZSB0byBleHRlbmQgdGhlIGJhc2UgcmVxdWVzdCBvcHRpb25zLFxuICogc3VjaCBhcyB0byBhZGQgYSBzZWFyY2ggc3RyaW5nIHRvIGJlIGFwcGVuZGVkIHRvIGFsbCBVUkxzLlxuICogVG8gYWNjb21wbGlzaCB0aGlzLCBhIG5ldyBwcm92aWRlciBmb3Ige0BsaW5rIFJlcXVlc3RPcHRpb25zfSBzaG91bGRcbiAqIGJlIGFkZGVkIGluIHRoZSBzYW1lIGluamVjdG9yIGFzIGBKU09OUF9QUk9WSURFUlNgLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9URnVnN3g/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0pTT05QX1BST1ZJREVSUywgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogY2xhc3MgTXlPcHRpb25zIGV4dGVuZHMgQmFzZVJlcXVlc3RPcHRpb25zIHtcbiAqICAgc2VhcmNoOiBzdHJpbmcgPSAnY29yZVRlYW09dHJ1ZSc7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCwgW0pTT05QX1BST1ZJREVSUywgcHJvdmlkZShSZXF1ZXN0T3B0aW9ucywge3VzZUNsYXNzOiBNeU9wdGlvbnN9KV0pXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICpcbiAqIExpa2V3aXNlLCB0byB1c2UgYSBtb2NrIGJhY2tlbmQgZm9yIHVuaXQgdGVzdHMsIHRoZSB7QGxpbmsgSlNPTlBCYWNrZW5kfVxuICogcHJvdmlkZXIgc2hvdWxkIGJlIGJvdW5kIHRvIHtAbGluayBNb2NrQmFja2VuZH0uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0hEcVpXTD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtwcm92aWRlLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge0pTT05QX1BST1ZJREVSUywgSnNvbnAsIFJlc3BvbnNlLCBKU09OUEJhY2tlbmR9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtNb2NrQmFja2VuZH0gZnJvbSAnYW5ndWxhcjIvaHR0cC90ZXN0aW5nJztcbiAqXG4gKiB2YXIgcGVvcGxlID0gW3tuYW1lOiAnSmVmZid9LCB7bmFtZTogJ1RvYmlhcyd9XTtcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBKU09OUF9QUk9WSURFUlMsXG4gKiAgIE1vY2tCYWNrZW5kLFxuICogICBwcm92aWRlKEpTT05QQmFja2VuZCwge3VzZUV4aXN0aW5nOiBNb2NrQmFja2VuZH0pXG4gKiBdKTtcbiAqIHZhciBqc29ucCA9IGluamVjdG9yLmdldChKc29ucCk7XG4gKiB2YXIgYmFja2VuZCA9IGluamVjdG9yLmdldChNb2NrQmFja2VuZCk7XG4gKlxuICogLy8gTGlzdGVuIGZvciBhbnkgbmV3IHJlcXVlc3RzXG4gKiBiYWNrZW5kLmNvbm5lY3Rpb25zLm9ic2VydmVyKHtcbiAqICAgbmV4dDogY29ubmVjdGlvbiA9PiB7XG4gKiAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHtib2R5OiBwZW9wbGV9KTtcbiAqICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAqICAgICAgIC8vIFNlbmQgYSByZXNwb25zZSB0byB0aGUgcmVxdWVzdFxuICogICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChyZXNwb25zZSk7XG4gKiAgICAgfSk7XG4gKiAgIH1cbiAqIH0pO1xuXG4gKiBqc29ucC5nZXQoJ3Blb3BsZS5qc29uJykub2JzZXJ2ZXIoe1xuICogICBuZXh0OiByZXMgPT4ge1xuICogICAgIC8vIFJlc3BvbnNlIGNhbWUgZnJvbSBtb2NrIGJhY2tlbmRcbiAqICAgICBjb25zb2xlLmxvZygnZmlyc3QgcGVyc29uJywgcmVzLmpzb24oKVswXS5uYW1lKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEpTT05QX1BST1ZJREVSUzogYW55W10gPSBbXG4gIC8vIFRPRE8ocGFzY2FsKTogdXNlIGZhY3RvcnkgdHlwZSBhbm5vdGF0aW9ucyBvbmNlIHN1cHBvcnRlZCBpbiBESVxuICAvLyBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzE4M1xuICBwcm92aWRlKEpzb25wLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChqc29ucEJhY2tlbmQ6IEpTT05QQmFja2VuZCwgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBKc29ucChqc29ucEJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKSxcbiAgICAgICAgICAgIGRlcHM6IFtKU09OUEJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXVxuICAgICAgICAgIH0pLFxuICBCcm93c2VySnNvbnAsXG4gIHByb3ZpZGUoUmVxdWVzdE9wdGlvbnMsIHt1c2VDbGFzczogQmFzZVJlcXVlc3RPcHRpb25zfSksXG4gIHByb3ZpZGUoUmVzcG9uc2VPcHRpb25zLCB7dXNlQ2xhc3M6IEJhc2VSZXNwb25zZU9wdGlvbnN9KSxcbiAgcHJvdmlkZShKU09OUEJhY2tlbmQsIHt1c2VDbGFzczogSlNPTlBCYWNrZW5kX30pXG5dO1xuXG4vKipcbiAqIFNlZSB7QGxpbmsgSlNPTlBfUFJPVklERVJTfSBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBKU09OX0JJTkRJTkdTID0gSlNPTlBfUFJPVklERVJTO1xuIl19

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var core_1 = __webpack_require__(22);
	var interfaces_1 = __webpack_require__(266);
	var static_request_1 = __webpack_require__(267);
	var base_request_options_1 = __webpack_require__(271);
	var enums_1 = __webpack_require__(270);
	function httpRequest(backend, request) {
	    return backend.createConnection(request).response;
	}
	function mergeOptions(defaultOpts, providedOpts, method, url) {
	    var newOptions = defaultOpts;
	    if (lang_1.isPresent(providedOpts)) {
	        // Hack so Dart can used named parameters
	        return newOptions.merge(new base_request_options_1.RequestOptions({
	            method: providedOpts.method || method,
	            url: providedOpts.url || url,
	            search: providedOpts.search,
	            headers: providedOpts.headers,
	            body: providedOpts.body
	        }));
	    }
	    if (lang_1.isPresent(method)) {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ method: method, url: url }));
	    }
	    else {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ url: url }));
	    }
	}
	/**
	 * Performs http requests using `XMLHttpRequest` as the default backend.
	 *
	 * `Http` is available as an injectable class, with methods to perform http requests. Calling
	 * `request` returns an `Observable` which will emit a single {@link Response} when a
	 * response is received.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {Http, HTTP_PROVIDERS} from 'angular2/http';
	 * @Component({
	 *   selector: 'http-app',
	 *   viewProviders: [HTTP_PROVIDERS],
	 *   templateUrl: 'people.html'
	 * })
	 * class PeopleComponent {
	 *   constructor(http: Http) {
	 *     http.get('people.json')
	 *       // Call map on the response observable to get the parsed people object
	 *       .map(res => res.json())
	 *       // Subscribe to the observable to get the parsed people object and attach it to the
	 *       // component
	 *       .subscribe(people => this.people = people);
	 *   }
	 * }
	 * ```
	 *
	 *
	 * ### Example
	 *
	 * ```
	 * http.get('people.json').observer({next: (value) => this.people = value});
	 * ```
	 *
	 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
	 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	 * the {@link XHRBackend} provider, as in the following example:
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {BaseRequestOptions, Http} from 'angular2/http';
	 * import {MockBackend} from 'angular2/http/testing';
	 * var injector = Injector.resolveAndCreate([
	 *   BaseRequestOptions,
	 *   MockBackend,
	 *   provide(Http, {useFactory:
	 *       function(backend, defaultOptions) {
	 *         return new Http(backend, defaultOptions);
	 *       },
	 *       deps: [MockBackend, BaseRequestOptions]})
	 * ]);
	 * var http = injector.get(Http);
	 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
	 * ```
	 *
	 **/
	var Http = (function () {
	    function Http(_backend, _defaultOptions) {
	        this._backend = _backend;
	        this._defaultOptions = _defaultOptions;
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Http.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            responseObservable = httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	        }
	        else if (url instanceof static_request_1.Request) {
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    /**
	     * Performs a request with `get` http method.
	     */
	    Http.prototype.get = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	    };
	    /**
	     * Performs a request with `post` http method.
	     */
	    Http.prototype.post = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Post, url)));
	    };
	    /**
	     * Performs a request with `put` http method.
	     */
	    Http.prototype.put = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Put, url)));
	    };
	    /**
	     * Performs a request with `delete` http method.
	     */
	    Http.prototype.delete = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Delete, url)));
	    };
	    /**
	     * Performs a request with `patch` http method.
	     */
	    Http.prototype.patch = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Patch, url)));
	    };
	    /**
	     * Performs a request with `head` http method.
	     */
	    Http.prototype.head = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Head, url)));
	    };
	    Http = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Http);
	    return Http;
	})();
	exports.Http = Http;
	var Jsonp = (function (_super) {
	    __extends(Jsonp, _super);
	    function Jsonp(backend, defaultOptions) {
	        _super.call(this, backend, defaultOptions);
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Jsonp.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            url =
	                new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url));
	        }
	        if (url instanceof static_request_1.Request) {
	            if (url.method !== enums_1.RequestMethod.Get) {
	                exceptions_1.makeTypeError('JSONP requests must use GET request method.');
	            }
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    Jsonp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Jsonp);
	    return Jsonp;
	})(Http);
	exports.Jsonp = Jsonp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2h0dHAudHMiXSwibmFtZXMiOlsiaHR0cFJlcXVlc3QiLCJtZXJnZU9wdGlvbnMiLCJIdHRwIiwiSHR0cC5jb25zdHJ1Y3RvciIsIkh0dHAucmVxdWVzdCIsIkh0dHAuZ2V0IiwiSHR0cC5wb3N0IiwiSHR0cC5wdXQiLCJIdHRwLmRlbGV0ZSIsIkh0dHAucGF0Y2giLCJIdHRwLmhlYWQiLCJKc29ucCIsIkpzb25wLmNvbnN0cnVjdG9yIiwiSnNvbnAucmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RSwyQkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsMkJBQWdFLGNBQWMsQ0FBQyxDQUFBO0FBQy9FLCtCQUFzQixrQkFBa0IsQ0FBQyxDQUFBO0FBRXpDLHFDQUFpRCx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFFLHNCQUE0QixTQUFTLENBQUMsQ0FBQTtBQUd0QyxxQkFBcUIsT0FBMEIsRUFBRSxPQUFnQjtJQUMvREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtBQUNwREEsQ0FBQ0E7QUFFRCxzQkFBc0IsV0FBK0IsRUFBRSxZQUFnQyxFQUNqRSxNQUFxQixFQUFFLEdBQVc7SUFDdERDLElBQUlBLFVBQVVBLEdBQUdBLFdBQVdBLENBQUNBO0lBQzdCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNUJBLHlDQUF5Q0E7UUFDekNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLHFDQUFjQSxDQUFDQTtZQUN6Q0EsTUFBTUEsRUFBRUEsWUFBWUEsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUE7WUFDckNBLEdBQUdBLEVBQUVBLFlBQVlBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBO1lBQzVCQSxNQUFNQSxFQUFFQSxZQUFZQSxDQUFDQSxNQUFNQTtZQUMzQkEsT0FBT0EsRUFBRUEsWUFBWUEsQ0FBQ0EsT0FBT0E7WUFDN0JBLElBQUlBLEVBQUVBLFlBQVlBLENBQUNBLElBQUlBO1NBQ3hCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDdEJBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLHFDQUFjQSxDQUFDQSxFQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMxRUEsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDTkEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEscUNBQWNBLENBQUNBLEVBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQzFEQSxDQUFDQTtBQUNIQSxDQUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5REk7QUFDSjtJQUVFQyxjQUFzQkEsUUFBMkJBLEVBQVlBLGVBQStCQTtRQUF0RUMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBbUJBO1FBQVlBLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFnQkE7SUFBR0EsQ0FBQ0E7SUFFaEdEOzs7OztPQUtHQTtJQUNIQSxzQkFBT0EsR0FBUEEsVUFBUUEsR0FBcUJBLEVBQUVBLE9BQTRCQTtRQUN6REUsSUFBSUEsa0JBQXVCQSxDQUFDQTtRQUM1QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLGtCQUFrQkEsR0FBR0EsV0FBV0EsQ0FDNUJBLElBQUlBLENBQUNBLFFBQVFBLEVBQ2JBLElBQUlBLHdCQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxPQUFPQSxFQUFFQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsRUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDaEdBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLFlBQVlBLHdCQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQ0Esa0JBQWtCQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN2REEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsMEJBQWFBLENBQUNBLDBEQUEwREEsQ0FBQ0EsQ0FBQ0E7UUFDbEZBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBRURGOztPQUVHQTtJQUNIQSxrQkFBR0EsR0FBSEEsVUFBSUEsR0FBV0EsRUFBRUEsT0FBNEJBO1FBQzNDRyxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSx3QkFBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsT0FBT0EsRUFDN0JBLHFCQUFhQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN2RkEsQ0FBQ0E7SUFFREg7O09BRUdBO0lBQ0hBLG1CQUFJQSxHQUFKQSxVQUFLQSxHQUFXQSxFQUFFQSxJQUFZQSxFQUFFQSxPQUE0QkE7UUFDMURJLE1BQU1BLENBQUNBLFdBQVdBLENBQ2RBLElBQUlBLENBQUNBLFFBQVFBLEVBQ2JBLElBQUlBLHdCQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxxQ0FBY0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsRUFDNURBLE9BQU9BLEVBQUVBLHFCQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNuRUEsQ0FBQ0E7SUFFREo7O09BRUdBO0lBQ0hBLGtCQUFHQSxHQUFIQSxVQUFJQSxHQUFXQSxFQUFFQSxJQUFZQSxFQUFFQSxPQUE0QkE7UUFDekRLLE1BQU1BLENBQUNBLFdBQVdBLENBQ2RBLElBQUlBLENBQUNBLFFBQVFBLEVBQ2JBLElBQUlBLHdCQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxxQ0FBY0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsRUFDNURBLE9BQU9BLEVBQUVBLHFCQUFhQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsRUEsQ0FBQ0E7SUFFREw7O09BRUdBO0lBQ0hBLHFCQUFNQSxHQUFOQSxVQUFRQSxHQUFXQSxFQUFFQSxPQUE0QkE7UUFDL0NNLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLHdCQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxPQUFPQSxFQUM3QkEscUJBQWFBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQzFGQSxDQUFDQTtJQUVETjs7T0FFR0E7SUFDSEEsb0JBQUtBLEdBQUxBLFVBQU1BLEdBQVdBLEVBQUVBLElBQVlBLEVBQUVBLE9BQTRCQTtRQUMzRE8sTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FDZEEsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFDYkEsSUFBSUEsd0JBQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLHFDQUFjQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQSxFQUM1REEsT0FBT0EsRUFBRUEscUJBQWFBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BFQSxDQUFDQTtJQUVEUDs7T0FFR0E7SUFDSEEsbUJBQUlBLEdBQUpBLFVBQUtBLEdBQVdBLEVBQUVBLE9BQTRCQTtRQUM1Q1EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsd0JBQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLE9BQU9BLEVBQzdCQSxxQkFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBNUVIUjtRQUFDQSxpQkFBVUEsRUFBRUE7O2FBNkVaQTtJQUFEQSxXQUFDQTtBQUFEQSxDQUFDQSxBQTdFRCxJQTZFQztBQTVFWSxZQUFJLE9BNEVoQixDQUFBO0FBRUQ7SUFDMkJTLHlCQUFJQTtJQUM3QkEsZUFBWUEsT0FBMEJBLEVBQUVBLGNBQThCQTtRQUNwRUMsa0JBQU1BLE9BQU9BLEVBQUVBLGNBQWNBLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVERDs7Ozs7T0FLR0E7SUFDSEEsdUJBQU9BLEdBQVBBLFVBQVFBLEdBQXFCQSxFQUFFQSxPQUE0QkE7UUFDekRFLElBQUlBLGtCQUF1QkEsQ0FBQ0E7UUFDNUJBLEVBQUVBLENBQUNBLENBQUNBLGVBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxHQUFHQTtnQkFDQ0EsSUFBSUEsd0JBQU9BLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLE9BQU9BLEVBQUVBLHFCQUFhQSxDQUFDQSxHQUFHQSxFQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsWUFBWUEsd0JBQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxLQUFLQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSwwQkFBYUEsQ0FBQ0EsNkNBQTZDQSxDQUFDQSxDQUFDQTtZQUMvREEsQ0FBQ0E7WUFDREEsa0JBQWtCQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN2REEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsMEJBQWFBLENBQUNBLDBEQUEwREEsQ0FBQ0EsQ0FBQ0E7UUFDbEZBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBM0JIRjtRQUFDQSxpQkFBVUEsRUFBRUE7O2NBNEJaQTtJQUFEQSxZQUFDQTtBQUFEQSxDQUFDQSxBQTVCRCxFQUMyQixJQUFJLEVBMkI5QjtBQTNCWSxhQUFLLFFBMkJqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1N0cmluZywgaXNQcmVzZW50LCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVxdWVzdE9wdGlvbnNBcmdzLCBDb25uZWN0aW9uLCBDb25uZWN0aW9uQmFja2VuZH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSAnLi9zdGF0aWNfcmVxdWVzdCc7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tICcuL3N0YXRpY19yZXNwb25zZSc7XG5pbXBvcnQge0Jhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJy4vYmFzZV9yZXF1ZXN0X29wdGlvbnMnO1xuaW1wb3J0IHtSZXF1ZXN0TWV0aG9kfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZnVuY3Rpb24gaHR0cFJlcXVlc3QoYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIHJlcXVlc3Q6IFJlcXVlc3QpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gIHJldHVybiBiYWNrZW5kLmNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdCkucmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0T3B0czogQmFzZVJlcXVlc3RPcHRpb25zLCBwcm92aWRlZE9wdHM6IFJlcXVlc3RPcHRpb25zQXJncyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QsIHVybDogc3RyaW5nKTogUmVxdWVzdE9wdGlvbnMge1xuICB2YXIgbmV3T3B0aW9ucyA9IGRlZmF1bHRPcHRzO1xuICBpZiAoaXNQcmVzZW50KHByb3ZpZGVkT3B0cykpIHtcbiAgICAvLyBIYWNrIHNvIERhcnQgY2FuIHVzZWQgbmFtZWQgcGFyYW1ldGVyc1xuICAgIHJldHVybiBuZXdPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBtZXRob2Q6IHByb3ZpZGVkT3B0cy5tZXRob2QgfHwgbWV0aG9kLFxuICAgICAgdXJsOiBwcm92aWRlZE9wdHMudXJsIHx8IHVybCxcbiAgICAgIHNlYXJjaDogcHJvdmlkZWRPcHRzLnNlYXJjaCxcbiAgICAgIGhlYWRlcnM6IHByb3ZpZGVkT3B0cy5oZWFkZXJzLFxuICAgICAgYm9keTogcHJvdmlkZWRPcHRzLmJvZHlcbiAgICB9KSk7XG4gIH1cbiAgaWYgKGlzUHJlc2VudChtZXRob2QpKSB7XG4gICAgcmV0dXJuIG5ld09wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHttZXRob2Q6IG1ldGhvZCwgdXJsOiB1cmx9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ld09wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHt1cmw6IHVybH0pKTtcbiAgfVxufVxuXG4vKipcbiAqIFBlcmZvcm1zIGh0dHAgcmVxdWVzdHMgdXNpbmcgYFhNTEh0dHBSZXF1ZXN0YCBhcyB0aGUgZGVmYXVsdCBiYWNrZW5kLlxuICpcbiAqIGBIdHRwYCBpcyBhdmFpbGFibGUgYXMgYW4gaW5qZWN0YWJsZSBjbGFzcywgd2l0aCBtZXRob2RzIHRvIHBlcmZvcm0gaHR0cCByZXF1ZXN0cy4gQ2FsbGluZ1xuICogYHJlcXVlc3RgIHJldHVybnMgYW4gYE9ic2VydmFibGVgIHdoaWNoIHdpbGwgZW1pdCBhIHNpbmdsZSB7QGxpbmsgUmVzcG9uc2V9IHdoZW4gYVxuICogcmVzcG9uc2UgaXMgcmVjZWl2ZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge0h0dHAsIEhUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2h0dHAtYXBwJyxcbiAqICAgdmlld1Byb3ZpZGVyczogW0hUVFBfUFJPVklERVJTXSxcbiAqICAgdGVtcGxhdGVVcmw6ICdwZW9wbGUuaHRtbCdcbiAqIH0pXG4gKiBjbGFzcyBQZW9wbGVDb21wb25lbnQge1xuICogICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gKiAgICAgaHR0cC5nZXQoJ3Blb3BsZS5qc29uJylcbiAqICAgICAgIC8vIENhbGwgbWFwIG9uIHRoZSByZXNwb25zZSBvYnNlcnZhYmxlIHRvIGdldCB0aGUgcGFyc2VkIHBlb3BsZSBvYmplY3RcbiAqICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gKiAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIG9ic2VydmFibGUgdG8gZ2V0IHRoZSBwYXJzZWQgcGVvcGxlIG9iamVjdCBhbmQgYXR0YWNoIGl0IHRvIHRoZVxuICogICAgICAgLy8gY29tcG9uZW50XG4gKiAgICAgICAuc3Vic2NyaWJlKHBlb3BsZSA9PiB0aGlzLnBlb3BsZSA9IHBlb3BsZSk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaHR0cC5nZXQoJ3Blb3BsZS5qc29uJykub2JzZXJ2ZXIoe25leHQ6ICh2YWx1ZSkgPT4gdGhpcy5wZW9wbGUgPSB2YWx1ZX0pO1xuICogYGBgXG4gKlxuICogVGhlIGRlZmF1bHQgY29uc3RydWN0IHVzZWQgdG8gcGVyZm9ybSByZXF1ZXN0cywgYFhNTEh0dHBSZXF1ZXN0YCwgaXMgYWJzdHJhY3RlZCBhcyBhIFwiQmFja2VuZFwiIChcbiAqIHtAbGluayBYSFJCYWNrZW5kfSBpbiB0aGlzIGNhc2UpLCB3aGljaCBjb3VsZCBiZSBtb2NrZWQgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvbiBieSByZXBsYWNpbmdcbiAqIHRoZSB7QGxpbmsgWEhSQmFja2VuZH0gcHJvdmlkZXIsIGFzIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7QmFzZVJlcXVlc3RPcHRpb25zLCBIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqIGltcG9ydCB7TW9ja0JhY2tlbmR9IGZyb20gJ2FuZ3VsYXIyL2h0dHAvdGVzdGluZyc7XG4gKiB2YXIgaW5qZWN0b3IgPSBJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcbiAqICAgQmFzZVJlcXVlc3RPcHRpb25zLFxuICogICBNb2NrQmFja2VuZCxcbiAqICAgcHJvdmlkZShIdHRwLCB7dXNlRmFjdG9yeTpcbiAqICAgICAgIGZ1bmN0aW9uKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKSB7XG4gKiAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG4gKiAgICAgICB9LFxuICogICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdfSlcbiAqIF0pO1xuICogdmFyIGh0dHAgPSBpbmplY3Rvci5nZXQoSHR0cCk7XG4gKiBodHRwLmdldCgncmVxdWVzdC1mcm9tLW1vY2stYmFja2VuZC5qc29uJykuc3Vic2NyaWJlKChyZXM6UmVzcG9uc2UpID0+IGRvU29tZXRoaW5nKHJlcykpO1xuICogYGBgXG4gKlxuICoqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHAge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2JhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCBwcm90ZWN0ZWQgX2RlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykge31cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICogYSB7QGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UuIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHVybCwgYW4gb3B0aW9uYWwge0BsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgKiBvYmplY3QgY2FuIGJlIHByb3ZpZGVkIGFzIHRoZSAybmQgYXJndW1lbnQuIFRoZSBvcHRpb25zIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSB2YWx1ZXNcbiAgICogb2Yge0BsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAqL1xuICByZXF1ZXN0KHVybDogc3RyaW5nIHwgUmVxdWVzdCwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICB2YXIgcmVzcG9uc2VPYnNlcnZhYmxlOiBhbnk7XG4gICAgaWYgKGlzU3RyaW5nKHVybCkpIHtcbiAgICAgIHJlc3BvbnNlT2JzZXJ2YWJsZSA9IGh0dHBSZXF1ZXN0KFxuICAgICAgICAgIHRoaXMuX2JhY2tlbmQsXG4gICAgICAgICAgbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLkdldCwgPHN0cmluZz51cmwpKSk7XG4gICAgfSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICByZXNwb25zZU9ic2VydmFibGUgPSBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtYWtlVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdXJsIHN0cmluZyBvciBSZXF1ZXN0IGluc3RhbmNlLicpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VPYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBnZXRgIGh0dHAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkdldCwgdXJsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwb3N0YCBodHRwIG1ldGhvZC5cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gaHR0cFJlcXVlc3QoXG4gICAgICAgIHRoaXMuX2JhY2tlbmQsXG4gICAgICAgIG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMoe2JvZHk6IGJvZHl9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLlBvc3QsIHVybCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcHV0YCBodHRwIG1ldGhvZC5cbiAgICovXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdChcbiAgICAgICAgdGhpcy5fYmFja2VuZCxcbiAgICAgICAgbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7Ym9keTogYm9keX0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUHV0LCB1cmwpKSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGRlbGV0ZWAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBkZWxldGUgKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSwgdXJsKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwYXRjaGAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBwYXRjaCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdChcbiAgICAgICAgdGhpcy5fYmFja2VuZCxcbiAgICAgICAgbmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7Ym9keTogYm9keX0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUGF0Y2gsIHVybCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgaGVhZGAgaHR0cCBtZXRob2QuXG4gICAqL1xuICBoZWFkKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHJldHVybiBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0TWV0aG9kLkhlYWQsIHVybCkpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbnAgZXh0ZW5kcyBIdHRwIHtcbiAgY29uc3RydWN0b3IoYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykge1xuICAgIHN1cGVyKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgKiBhIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZS4gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgdXJsLCBhbiBvcHRpb25hbCB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgKiBvZiB7QGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICovXG4gIHJlcXVlc3QodXJsOiBzdHJpbmcgfCBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIHZhciByZXNwb25zZU9ic2VydmFibGU6IGFueTtcbiAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgdXJsID1cbiAgICAgICAgICBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuR2V0LCA8c3RyaW5nPnVybCkpO1xuICAgIH1cbiAgICBpZiAodXJsIGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKHVybC5tZXRob2QgIT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgICAgIG1ha2VUeXBlRXJyb3IoJ0pTT05QIHJlcXVlc3RzIG11c3QgdXNlIEdFVCByZXF1ZXN0IG1ldGhvZC4nKTtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlT2JzZXJ2YWJsZSA9IGh0dHBSZXF1ZXN0KHRoaXMuX2JhY2tlbmQsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB1cmwgc3RyaW5nIG9yIFJlcXVlc3QgaW5zdGFuY2UuJyk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZU9ic2VydmFibGU7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';/**
	 * Abstract class from which real backends are derived.
	 *
	 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
	 * {@link Request}.
	 */
	var ConnectionBackend = (function () {
	    function ConnectionBackend() {
	    }
	    return ConnectionBackend;
	})();
	exports.ConnectionBackend = ConnectionBackend;
	/**
	 * Abstract class from which real connections are derived.
	 */
	var Connection = (function () {
	    function Connection() {
	    }
	    return Connection;
	})();
	exports.Connection = Connection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOlsiQ29ubmVjdGlvbkJhY2tlbmQiLCJDb25uZWN0aW9uQmFja2VuZC5jb25zdHJ1Y3RvciIsIkNvbm5lY3Rpb24iLCJDb25uZWN0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFPQTs7Ozs7R0FLRztBQUNIO0lBQUFBO0lBQStGQyxDQUFDQTtJQUFERCx3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFBaEcsSUFBZ0c7QUFBMUUseUJBQWlCLG9CQUF5RCxDQUFBO0FBRWhHOztHQUVHO0FBQ0g7SUFBQUU7SUFJQUMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUpxQixrQkFBVSxhQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3N0YXRpY19yZXF1ZXN0JztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmcm9tIHdoaWNoIHJlYWwgYmFja2VuZHMgYXJlIGRlcml2ZWQuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiBhIGBDb25uZWN0aW9uQmFja2VuZGAgaXMgdG8gY3JlYXRlIG5ldyBjb25uZWN0aW9ucyB0byBmdWxmaWxsIGEgZ2l2ZW5cbiAqIHtAbGluayBSZXF1ZXN0fS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbm5lY3Rpb25CYWNrZW5kIHsgYWJzdHJhY3QgY3JlYXRlQ29ubmVjdGlvbihyZXF1ZXN0OiBhbnkpOiBDb25uZWN0aW9uOyB9XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZnJvbSB3aGljaCByZWFsIGNvbm5lY3Rpb25zIGFyZSBkZXJpdmVkLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGU7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHJlc3BvbnNlOiBhbnk7ICAvLyBUT0RPOiBnZW5lcmljIG9mIDxSZXNwb25zZT47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlcXVlc3RPcHRpb25zLCBiYXNlZCBvblxuICogW1JlcXVlc3RJbml0XShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgdXJsPzogc3RyaW5nO1xuICBtZXRob2Q/OiBzdHJpbmcgfCBSZXF1ZXN0TWV0aG9kO1xuICBzZWFyY2g/OiBzdHJpbmcgfCBVUkxTZWFyY2hQYXJhbXM7XG4gIGhlYWRlcnM/OiBIZWFkZXJzO1xuICAvLyBUT0RPOiBTdXBwb3J0IEJsb2IsIEFycmF5QnVmZmVyLCBKU09OLCBVUkxTZWFyY2hQYXJhbXMsIEZvcm1EYXRhXG4gIGJvZHk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVxdWlyZWQgc3RydWN0dXJlIHdoZW4gY29uc3RydWN0aW5nIG5ldyBSZXF1ZXN0KCk7XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFyZ3MgZXh0ZW5kcyBSZXF1ZXN0T3B0aW9uc0FyZ3MgeyB1cmw6IHN0cmluZzsgfVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb3B0aW9ucyB0byBjb25zdHJ1Y3QgYSBSZXNwb25zZSwgYmFzZWQgb25cbiAqIFtSZXNwb25zZUluaXRdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZWluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKi9cbmV4cG9ydCB0eXBlIFJlc3BvbnNlT3B0aW9uc0FyZ3MgPSB7XG4gIC8vIFRPRE86IFN1cHBvcnQgQmxvYiwgQXJyYXlCdWZmZXIsIEpTT05cbiAgYm9keT86IHN0cmluZyB8IE9iamVjdCB8IEZvcm1EYXRhO1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gIGhlYWRlcnM/OiBIZWFkZXJzO1xuICB0eXBlPzogUmVzcG9uc2VUeXBlO1xuICB1cmw/OiBzdHJpbmc7XG59XG4iXX0=

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var headers_1 = __webpack_require__(268);
	var http_utils_1 = __webpack_require__(269);
	var lang_1 = __webpack_require__(3);
	// TODO(jeffbcross): properly implement body accessors
	/**
	 * Creates `Request` instances from provided values.
	 *
	 * The Request's interface is inspired by the Request constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#request-class),
	 * but is considered a static value whose body can be accessed many times. There are other
	 * differences in the implementation, but this is the most significant.
	 *
	 * `Request` instances are typically created by higher-level classes, like {@link Http} and
	 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	 * One such example is when creating services that wrap higher-level services, like {@link Http},
	 * where it may be useful to generate a `Request` with arbitrary headers and search params.
	 *
	 * ```typescript
	 * import {Injectable, Injector} from 'angular2/core';
	 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from 'angular2/http';
	 *
	 * @Injectable()
	 * class AutoAuthenticator {
	 *   constructor(public http:Http) {}
	 *   request(url:string) {
	 *     return this.http.request(new Request({
	 *       method: RequestMethod.Get,
	 *       url: url,
	 *       search: 'password=123'
	 *     }));
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
	 * var authenticator = injector.get(AutoAuthenticator);
	 * authenticator.request('people.json').subscribe(res => {
	 *   //URL should have included '?password=123'
	 *   console.log('people', res.json());
	 * });
	 * ```
	 */
	var Request = (function () {
	    function Request(requestOptions) {
	        // TODO: assert that url is present
	        var url = requestOptions.url;
	        this.url = requestOptions.url;
	        if (lang_1.isPresent(requestOptions.search)) {
	            var search = requestOptions.search.toString();
	            if (search.length > 0) {
	                var prefix = '?';
	                if (lang_1.StringWrapper.contains(this.url, '?')) {
	                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                }
	                // TODO: just delete search-query-looking string in url?
	                this.url = url + prefix + search;
	            }
	        }
	        this._body = requestOptions.body;
	        this.method = http_utils_1.normalizeMethodName(requestOptions.method);
	        // TODO(jeffbcross): implement behavior
	        // Defaults to 'omit', consistent with browser
	        // TODO(jeffbcross): implement behavior
	        this.headers = new headers_1.Headers(requestOptions.headers);
	    }
	    /**
	     * Returns the request's body as string, assuming that body exists. If body is undefined, return
	     * empty
	     * string.
	     */
	    Request.prototype.text = function () { return lang_1.isPresent(this._body) ? this._body.toString() : ''; };
	    return Request;
	})();
	exports.Request = Request;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9zdGF0aWNfcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwiUmVxdWVzdC5jb25zdHJ1Y3RvciIsIlJlcXVlc3QudGV4dCJdLCJtYXBwaW5ncyI6IkFBRUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLDJCQUFrQyxjQUFjLENBQUMsQ0FBQTtBQUNqRCxxQkFNTywwQkFBMEIsQ0FBQyxDQUFBO0FBRWxDLHNEQUFzRDtBQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHO0FBQ0g7SUFhRUEsaUJBQVlBLGNBQTJCQTtRQUNyQ0MsbUNBQW1DQTtRQUNuQ0EsSUFBSUEsR0FBR0EsR0FBR0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBO1FBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLElBQUlBLE1BQU1BLEdBQUdBLGNBQWNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQzlDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLElBQUlBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO2dCQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0Esb0JBQWFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMxQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0E7Z0JBQzdEQSxDQUFDQTtnQkFDREEsd0RBQXdEQTtnQkFDeERBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLEdBQUdBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1lBQ25DQSxDQUFDQTtRQUNIQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZ0NBQW1CQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6REEsdUNBQXVDQTtRQUN2Q0EsOENBQThDQTtRQUM5Q0EsdUNBQXVDQTtRQUN2Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsaUJBQU9BLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUdERDs7OztPQUlHQTtJQUNIQSxzQkFBSUEsR0FBSkEsY0FBaUJFLE1BQU1BLENBQUNBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvRUYsY0FBQ0E7QUFBREEsQ0FBQ0EsQUEzQ0QsSUEyQ0M7QUEzQ1ksZUFBTyxVQTJDbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge1JlcXVlc3RBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtub3JtYWxpemVNZXRob2ROYW1lfSBmcm9tICcuL2h0dHBfdXRpbHMnO1xuaW1wb3J0IHtcbiAgUmVnRXhwV3JhcHBlcixcbiAgQ09OU1RfRVhQUixcbiAgaXNQcmVzZW50LFxuICBpc0pzT2JqZWN0LFxuICBTdHJpbmdXcmFwcGVyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8vIFRPRE8oamVmZmJjcm9zcyk6IHByb3Blcmx5IGltcGxlbWVudCBib2R5IGFjY2Vzc29yc1xuLyoqXG4gKiBDcmVhdGVzIGBSZXF1ZXN0YCBpbnN0YW5jZXMgZnJvbSBwcm92aWRlZCB2YWx1ZXMuXG4gKlxuICogVGhlIFJlcXVlc3QncyBpbnRlcmZhY2UgaXMgaW5zcGlyZWQgYnkgdGhlIFJlcXVlc3QgY29uc3RydWN0b3IgZGVmaW5lZCBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdC1jbGFzcyksXG4gKiBidXQgaXMgY29uc2lkZXJlZCBhIHN0YXRpYyB2YWx1ZSB3aG9zZSBib2R5IGNhbiBiZSBhY2Nlc3NlZCBtYW55IHRpbWVzLiBUaGVyZSBhcmUgb3RoZXJcbiAqIGRpZmZlcmVuY2VzIGluIHRoZSBpbXBsZW1lbnRhdGlvbiwgYnV0IHRoaXMgaXMgdGhlIG1vc3Qgc2lnbmlmaWNhbnQuXG4gKlxuICogYFJlcXVlc3RgIGluc3RhbmNlcyBhcmUgdHlwaWNhbGx5IGNyZWF0ZWQgYnkgaGlnaGVyLWxldmVsIGNsYXNzZXMsIGxpa2Uge0BsaW5rIEh0dHB9IGFuZFxuICoge0BsaW5rIEpzb25wfSwgYnV0IGl0IG1heSBvY2Nhc2lvbmFsbHkgYmUgdXNlZnVsIHRvIGV4cGxpY2l0bHkgY3JlYXRlIGBSZXF1ZXN0YCBpbnN0YW5jZXMuXG4gKiBPbmUgc3VjaCBleGFtcGxlIGlzIHdoZW4gY3JlYXRpbmcgc2VydmljZXMgdGhhdCB3cmFwIGhpZ2hlci1sZXZlbCBzZXJ2aWNlcywgbGlrZSB7QGxpbmsgSHR0cH0sXG4gKiB3aGVyZSBpdCBtYXkgYmUgdXNlZnVsIHRvIGdlbmVyYXRlIGEgYFJlcXVlc3RgIHdpdGggYXJiaXRyYXJ5IGhlYWRlcnMgYW5kIHNlYXJjaCBwYXJhbXMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiBASW5qZWN0YWJsZSgpXG4gKiBjbGFzcyBBdXRvQXV0aGVudGljYXRvciB7XG4gKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHt9XG4gKiAgIHJlcXVlc3QodXJsOnN0cmluZykge1xuICogICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChuZXcgUmVxdWVzdCh7XG4gKiAgICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuR2V0LFxuICogICAgICAgdXJsOiB1cmwsXG4gKiAgICAgICBzZWFyY2g6ICdwYXNzd29yZD0xMjMnXG4gKiAgICAgfSkpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIGluamVjdG9yID0gSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbSFRUUF9QUk9WSURFUlMsIEF1dG9BdXRoZW50aWNhdG9yXSk7XG4gKiB2YXIgYXV0aGVudGljYXRvciA9IGluamVjdG9yLmdldChBdXRvQXV0aGVudGljYXRvcik7XG4gKiBhdXRoZW50aWNhdG9yLnJlcXVlc3QoJ3Blb3BsZS5qc29uJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gKiAgIC8vVVJMIHNob3VsZCBoYXZlIGluY2x1ZGVkICc/cGFzc3dvcmQ9MTIzJ1xuICogICBjb25zb2xlLmxvZygncGVvcGxlJywgcmVzLmpzb24oKSk7XG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBIdHRwIG1ldGhvZCB3aXRoIHdoaWNoIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QuXG4gICAqL1xuICBtZXRob2Q6IFJlcXVlc3RNZXRob2Q7XG4gIC8qKlxuICAgKiB7QGxpbmsgSGVhZGVyc30gaW5zdGFuY2VcbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8qKiBVcmwgb2YgdGhlIHJlbW90ZSByZXNvdXJjZSAqL1xuICB1cmw6IHN0cmluZztcbiAgLy8gVE9ETzogc3VwcG9ydCBVUkxTZWFyY2hQYXJhbXMgfCBGb3JtRGF0YSB8IEJsb2IgfCBBcnJheUJ1ZmZlclxuICBwcml2YXRlIF9ib2R5OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0QXJncykge1xuICAgIC8vIFRPRE86IGFzc2VydCB0aGF0IHVybCBpcyBwcmVzZW50XG4gICAgbGV0IHVybCA9IHJlcXVlc3RPcHRpb25zLnVybDtcbiAgICB0aGlzLnVybCA9IHJlcXVlc3RPcHRpb25zLnVybDtcbiAgICBpZiAoaXNQcmVzZW50KHJlcXVlc3RPcHRpb25zLnNlYXJjaCkpIHtcbiAgICAgIGxldCBzZWFyY2ggPSByZXF1ZXN0T3B0aW9ucy5zZWFyY2gudG9TdHJpbmcoKTtcbiAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcHJlZml4ID0gJz8nO1xuICAgICAgICBpZiAoU3RyaW5nV3JhcHBlci5jb250YWlucyh0aGlzLnVybCwgJz8nKSkge1xuICAgICAgICAgIHByZWZpeCA9ICh0aGlzLnVybFt0aGlzLnVybC5sZW5ndGggLSAxXSA9PSAnJicpID8gJycgOiAnJic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzoganVzdCBkZWxldGUgc2VhcmNoLXF1ZXJ5LWxvb2tpbmcgc3RyaW5nIGluIHVybD9cbiAgICAgICAgdGhpcy51cmwgPSB1cmwgKyBwcmVmaXggKyBzZWFyY2g7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2JvZHkgPSByZXF1ZXN0T3B0aW9ucy5ib2R5O1xuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kTmFtZShyZXF1ZXN0T3B0aW9ucy5tZXRob2QpO1xuICAgIC8vIFRPRE8oamVmZmJjcm9zcyk6IGltcGxlbWVudCBiZWhhdmlvclxuICAgIC8vIERlZmF1bHRzIHRvICdvbWl0JywgY29uc2lzdGVudCB3aXRoIGJyb3dzZXJcbiAgICAvLyBUT0RPKGplZmZiY3Jvc3MpOiBpbXBsZW1lbnQgYmVoYXZpb3JcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFzIHN0cmluZywgYXNzdW1pbmcgdGhhdCBib2R5IGV4aXN0cy4gSWYgYm9keSBpcyB1bmRlZmluZWQsIHJldHVyblxuICAgKiBlbXB0eVxuICAgKiBzdHJpbmcuXG4gICAqL1xuICB0ZXh0KCk6IFN0cmluZyB7IHJldHVybiBpc1ByZXNlbnQodGhpcy5fYm9keSkgPyB0aGlzLl9ib2R5LnRvU3RyaW5nKCkgOiAnJzsgfVxufVxuIl19

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var collection_1 = __webpack_require__(11);
	/**
	 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	 *
	 * The only known difference between this `Headers` implementation and the spec is the
	 * lack of an `entries` method.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
	 *
	 * ```
	 * import {Headers} from 'angular2/http';
	 *
	 * var firstHeaders = new Headers();
	 * firstHeaders.append('Content-Type', 'image/jpeg');
	 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
	 *
	 * // Create headers from Plain Old JavaScript Object
	 * var secondHeaders = new Headers({
	 *   'X-My-Custom-Header': 'Angular'
	 * });
	 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
	 *
	 * var thirdHeaders = new Headers(secondHeaders);
	 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
	 * ```
	 */
	var Headers = (function () {
	    function Headers(headers) {
	        var _this = this;
	        if (headers instanceof Headers) {
	            this._headersMap = headers._headersMap;
	            return;
	        }
	        this._headersMap = new collection_1.Map();
	        if (lang_1.isBlank(headers)) {
	            return;
	        }
	        // headers instanceof StringMap
	        collection_1.StringMapWrapper.forEach(headers, function (v, k) {
	            _this._headersMap.set(k, collection_1.isListLikeIterable(v) ? v : [v]);
	        });
	    }
	    /**
	     * Returns a new Headers instance from the given DOMString of Response Headers
	     */
	    Headers.fromResponseHeaderString = function (headersString) {
	        return headersString.trim()
	            .split('\n')
	            .map(function (val) { return val.split(':'); })
	            .map(function (_a) {
	            var key = _a[0], parts = _a.slice(1);
	            return ([key.trim(), parts.join(':').trim()]);
	        })
	            .reduce(function (headers, _a) {
	            var key = _a[0], value = _a[1];
	            return !headers.set(key, value) && headers;
	        }, new Headers());
	    };
	    /**
	     * Appends a header to existing list of header values for a given header name.
	     */
	    Headers.prototype.append = function (name, value) {
	        var mapName = this._headersMap.get(name);
	        var list = collection_1.isListLikeIterable(mapName) ? mapName : [];
	        list.push(value);
	        this._headersMap.set(name, list);
	    };
	    /**
	     * Deletes all header values for the given name.
	     */
	    Headers.prototype.delete = function (name) { this._headersMap.delete(name); };
	    Headers.prototype.forEach = function (fn) {
	        this._headersMap.forEach(fn);
	    };
	    /**
	     * Returns first header that matches given name.
	     */
	    Headers.prototype.get = function (header) { return collection_1.ListWrapper.first(this._headersMap.get(header)); };
	    /**
	     * Check for existence of header by given name.
	     */
	    Headers.prototype.has = function (header) { return this._headersMap.has(header); };
	    /**
	     * Provides names of set headers
	     */
	    Headers.prototype.keys = function () { return collection_1.MapWrapper.keys(this._headersMap); };
	    /**
	     * Sets or overrides header value for given name.
	     */
	    Headers.prototype.set = function (header, value) {
	        var list = [];
	        if (collection_1.isListLikeIterable(value)) {
	            var pushValue = value.join(',');
	            list.push(pushValue);
	        }
	        else {
	            list.push(value);
	        }
	        this._headersMap.set(header, list);
	    };
	    /**
	     * Returns values of all headers.
	     */
	    Headers.prototype.values = function () { return collection_1.MapWrapper.values(this._headersMap); };
	    /**
	     * Returns string of all headers.
	     */
	    Headers.prototype.toJSON = function () {
	        var serializableHeaders = {};
	        this._headersMap.forEach(function (values, name) {
	            var list = [];
	            collection_1.iterateListLike(values, function (val) { return list = collection_1.ListWrapper.concat(list, val.split(',')); });
	            serializableHeaders[name] = list;
	        });
	        return serializableHeaders;
	    };
	    /**
	     * Returns list of header values for a given name.
	     */
	    Headers.prototype.getAll = function (header) {
	        var headers = this._headersMap.get(header);
	        return collection_1.isListLikeIterable(headers) ? headers : [];
	    };
	    /**
	     * This method is not implemented.
	     */
	    Headers.prototype.entries = function () { throw new exceptions_1.BaseException('"entries" method is not implemented on Headers class'); };
	    return Headers;
	})();
	exports.Headers = Headers;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2hlYWRlcnMudHMiXSwibmFtZXMiOlsiSGVhZGVycyIsIkhlYWRlcnMuY29uc3RydWN0b3IiLCJIZWFkZXJzLmZyb21SZXNwb25zZUhlYWRlclN0cmluZyIsIkhlYWRlcnMuYXBwZW5kIiwiSGVhZGVycy5kZWxldGUiLCJIZWFkZXJzLmZvckVhY2giLCJIZWFkZXJzLmdldCIsIkhlYWRlcnMuaGFzIiwiSGVhZGVycy5rZXlzIiwiSGVhZGVycy5zZXQiLCJIZWFkZXJzLnZhbHVlcyIsIkhlYWRlcnMudG9KU09OIiwiSGVhZGVycy5nZXRBbGwiLCJIZWFkZXJzLmVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLHFCQU9PLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0UsMkJBT08sZ0NBQWdDLENBQUMsQ0FBQTtBQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBR0VBLGlCQUFZQSxPQUF3Q0E7UUFIdERDLGlCQWtIQ0E7UUE5R0dBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLFlBQVlBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQy9CQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFhQSxPQUFRQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNsREEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsZ0JBQUdBLEVBQW9CQSxDQUFDQTtRQUUvQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBRURBLCtCQUErQkE7UUFDL0JBLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBQ0EsQ0FBTUEsRUFBRUEsQ0FBU0E7WUFDbERBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLCtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDM0RBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRUREOztPQUVHQTtJQUNJQSxnQ0FBd0JBLEdBQS9CQSxVQUFnQ0EsYUFBcUJBO1FBQ25ERSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQTthQUN0QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7YUFDWEEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBZEEsQ0FBY0EsQ0FBQ0E7YUFDMUJBLEdBQUdBLENBQUNBLFVBQUNBLEVBQWVBO2dCQUFkQSxHQUFHQSxVQUFLQSxLQUFLQTttQkFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFBdENBLENBQXNDQSxDQUFDQTthQUNoRUEsTUFBTUEsQ0FBQ0EsVUFBQ0EsT0FBT0EsRUFBRUEsRUFBWUE7Z0JBQVhBLEdBQUdBLFVBQUVBLEtBQUtBO21CQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxJQUFJQSxPQUFPQTtRQUFuQ0EsQ0FBbUNBLEVBQUVBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUVERjs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQU9BLElBQVlBLEVBQUVBLEtBQWFBO1FBQ2hDRyxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsSUFBSUEsR0FBR0EsK0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN0REEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVESDs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQVFBLElBQVlBLElBQVVJLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTlESix5QkFBT0EsR0FBUEEsVUFBUUEsRUFBNEVBO1FBQ2xGSyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFREw7O09BRUdBO0lBQ0hBLHFCQUFHQSxHQUFIQSxVQUFJQSxNQUFjQSxJQUFZTSxNQUFNQSxDQUFDQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFdkZOOztPQUVHQTtJQUNIQSxxQkFBR0EsR0FBSEEsVUFBSUEsTUFBY0EsSUFBYU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckVQOztPQUVHQTtJQUNIQSxzQkFBSUEsR0FBSkEsY0FBbUJRLE1BQU1BLENBQUNBLHVCQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5RFI7O09BRUdBO0lBQ0hBLHFCQUFHQSxHQUFIQSxVQUFJQSxNQUFjQSxFQUFFQSxLQUF3QkE7UUFDMUNTLElBQUlBLElBQUlBLEdBQWFBLEVBQUVBLENBQUNBO1FBRXhCQSxFQUFFQSxDQUFDQSxDQUFDQSwrQkFBa0JBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxJQUFJQSxTQUFTQSxHQUFjQSxLQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM1Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLElBQUlBLENBQUNBLElBQUlBLENBQVNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7SUFFRFQ7O09BRUdBO0lBQ0hBLHdCQUFNQSxHQUFOQSxjQUF1QlUsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXBFVjs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BO1FBQ0VXLElBQUlBLG1CQUFtQkEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLE1BQWdCQSxFQUFFQSxJQUFZQTtZQUN0REEsSUFBSUEsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFFZEEsNEJBQWVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLElBQUlBLEdBQUdBLHdCQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUEvQ0EsQ0FBK0NBLENBQUNBLENBQUNBO1lBRWhGQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ25DQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUVEWDs7T0FFR0E7SUFDSEEsd0JBQU1BLEdBQU5BLFVBQU9BLE1BQWNBO1FBQ25CWSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQ0EsTUFBTUEsQ0FBQ0EsK0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFFRFo7O09BRUdBO0lBQ0hBLHlCQUFPQSxHQUFQQSxjQUFZYSxNQUFNQSxJQUFJQSwwQkFBYUEsQ0FBQ0Esc0RBQXNEQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoR2IsY0FBQ0E7QUFBREEsQ0FBQ0EsQUFsSEQsSUFrSEM7QUFsSFksZUFBTyxVQWtIbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzUHJlc2VudCxcbiAgaXNCbGFuayxcbiAgaXNKc09iamVjdCxcbiAgaXNUeXBlLFxuICBTdHJpbmdXcmFwcGVyLFxuICBKc29uXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1xuICBpc0xpc3RMaWtlSXRlcmFibGUsXG4gIGl0ZXJhdGVMaXN0TGlrZSxcbiAgTWFwLFxuICBNYXBXcmFwcGVyLFxuICBTdHJpbmdNYXBXcmFwcGVyLFxuICBMaXN0V3JhcHBlcixcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgW0hlYWRlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IZWFkZXJzL0hlYWRlcnMpLCBhc1xuICogc3BlY2lmaWVkIGluIHRoZSBbRmV0Y2ggU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2hlYWRlcnMtY2xhc3MpLlxuICpcbiAqIFRoZSBvbmx5IGtub3duIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIGBIZWFkZXJzYCBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIHNwZWMgaXMgdGhlXG4gKiBsYWNrIG9mIGFuIGBlbnRyaWVzYCBtZXRob2QuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L01UZHdUNj9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgZmlyc3RIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAqIGZpcnN0SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdpbWFnZS9qcGVnJyk7XG4gKiBjb25zb2xlLmxvZyhmaXJzdEhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkgLy8naW1hZ2UvanBlZydcbiAqXG4gKiAvLyBDcmVhdGUgaGVhZGVycyBmcm9tIFBsYWluIE9sZCBKYXZhU2NyaXB0IE9iamVjdFxuICogdmFyIHNlY29uZEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gKiAgICdYLU15LUN1c3RvbS1IZWFkZXInOiAnQW5ndWxhcidcbiAqIH0pO1xuICogY29uc29sZS5sb2coc2Vjb25kSGVhZGVycy5nZXQoJ1gtTXktQ3VzdG9tLUhlYWRlcicpKTsgLy8nQW5ndWxhcidcbiAqXG4gKiB2YXIgdGhpcmRIZWFkZXJzID0gbmV3IEhlYWRlcnMoc2Vjb25kSGVhZGVycyk7XG4gKiBjb25zb2xlLmxvZyh0aGlyZEhlYWRlcnMuZ2V0KCdYLU15LUN1c3RvbS1IZWFkZXInKSk7IC8vJ0FuZ3VsYXInXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIEhlYWRlcnMge1xuICAvKiogQGludGVybmFsICovXG4gIF9oZWFkZXJzTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnM/OiBIZWFkZXJzIHwge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIHRoaXMuX2hlYWRlcnNNYXAgPSAoPEhlYWRlcnM+aGVhZGVycykuX2hlYWRlcnNNYXA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGVhZGVyc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblxuICAgIGlmIChpc0JsYW5rKGhlYWRlcnMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGVhZGVycyBpbnN0YW5jZW9mIFN0cmluZ01hcFxuICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChoZWFkZXJzLCAodjogYW55LCBrOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX2hlYWRlcnNNYXAuc2V0KGssIGlzTGlzdExpa2VJdGVyYWJsZSh2KSA/IHYgOiBbdl0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgSGVhZGVycyBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBET01TdHJpbmcgb2YgUmVzcG9uc2UgSGVhZGVyc1xuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZUhlYWRlclN0cmluZyhoZWFkZXJzU3RyaW5nOiBzdHJpbmcpOiBIZWFkZXJzIHtcbiAgICByZXR1cm4gaGVhZGVyc1N0cmluZy50cmltKClcbiAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAubWFwKHZhbCA9PiB2YWwuc3BsaXQoJzonKSlcbiAgICAgICAgLm1hcCgoW2tleSwgLi4ucGFydHNdKSA9PiAoW2tleS50cmltKCksIHBhcnRzLmpvaW4oJzonKS50cmltKCldKSlcbiAgICAgICAgLnJlZHVjZSgoaGVhZGVycywgW2tleSwgdmFsdWVdKSA9PiAhaGVhZGVycy5zZXQoa2V5LCB2YWx1ZSkgJiYgaGVhZGVycywgbmV3IEhlYWRlcnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhlYWRlciB0byBleGlzdGluZyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIG5hbWUuXG4gICAqL1xuICBhcHBlbmQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIG1hcE5hbWUgPSB0aGlzLl9oZWFkZXJzTWFwLmdldChuYW1lKTtcbiAgICB2YXIgbGlzdCA9IGlzTGlzdExpa2VJdGVyYWJsZShtYXBOYW1lKSA/IG1hcE5hbWUgOiBbXTtcbiAgICBsaXN0LnB1c2godmFsdWUpO1xuICAgIHRoaXMuX2hlYWRlcnNNYXAuc2V0KG5hbWUsIGxpc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIGhlYWRlciB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgZGVsZXRlIChuYW1lOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5faGVhZGVyc01hcC5kZWxldGUobmFtZSk7IH1cblxuICBmb3JFYWNoKGZuOiAodmFsdWVzOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nLCBoZWFkZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9oZWFkZXJzTWFwLmZvckVhY2goZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmlyc3QgaGVhZGVyIHRoYXQgbWF0Y2hlcyBnaXZlbiBuYW1lLlxuICAgKi9cbiAgZ2V0KGhlYWRlcjogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIExpc3RXcmFwcGVyLmZpcnN0KHRoaXMuX2hlYWRlcnNNYXAuZ2V0KGhlYWRlcikpOyB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBleGlzdGVuY2Ugb2YgaGVhZGVyIGJ5IGdpdmVuIG5hbWUuXG4gICAqL1xuICBoYXMoaGVhZGVyOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2hlYWRlcnNNYXAuaGFzKGhlYWRlcik7IH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgbmFtZXMgb2Ygc2V0IGhlYWRlcnNcbiAgICovXG4gIGtleXMoKTogc3RyaW5nW10geyByZXR1cm4gTWFwV3JhcHBlci5rZXlzKHRoaXMuX2hlYWRlcnNNYXApOyB9XG5cbiAgLyoqXG4gICAqIFNldHMgb3Igb3ZlcnJpZGVzIGhlYWRlciB2YWx1ZSBmb3IgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIHNldChoZWFkZXI6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdmFyIGxpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAoaXNMaXN0TGlrZUl0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgdmFyIHB1c2hWYWx1ZSA9ICg8c3RyaW5nW10+dmFsdWUpLmpvaW4oJywnKTtcbiAgICAgIGxpc3QucHVzaChwdXNoVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnB1c2goPHN0cmluZz52YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5faGVhZGVyc01hcC5zZXQoaGVhZGVyLCBsaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHZhbHVlcyBvZiBhbGwgaGVhZGVycy5cbiAgICovXG4gIHZhbHVlcygpOiBzdHJpbmdbXVtdIHsgcmV0dXJuIE1hcFdyYXBwZXIudmFsdWVzKHRoaXMuX2hlYWRlcnNNYXApOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RyaW5nIG9mIGFsbCBoZWFkZXJzLlxuICAgKi9cbiAgdG9KU09OKCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICBsZXQgc2VyaWFsaXphYmxlSGVhZGVycyA9IHt9O1xuICAgIHRoaXMuX2hlYWRlcnNNYXAuZm9yRWFjaCgodmFsdWVzOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgICBpdGVyYXRlTGlzdExpa2UodmFsdWVzLCB2YWwgPT4gbGlzdCA9IExpc3RXcmFwcGVyLmNvbmNhdChsaXN0LCB2YWwuc3BsaXQoJywnKSkpO1xuXG4gICAgICBzZXJpYWxpemFibGVIZWFkZXJzW25hbWVdID0gbGlzdDtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXphYmxlSGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGxpc3Qgb2YgaGVhZGVyIHZhbHVlcyBmb3IgYSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgZ2V0QWxsKGhlYWRlcjogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHZhciBoZWFkZXJzID0gdGhpcy5faGVhZGVyc01hcC5nZXQoaGVhZGVyKTtcbiAgICByZXR1cm4gaXNMaXN0TGlrZUl0ZXJhYmxlKGhlYWRlcnMpID8gaGVhZGVycyA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGVudHJpZXMoKSB7IHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCdcImVudHJpZXNcIiBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIEhlYWRlcnMgY2xhc3MnKTsgfVxufVxuIl19

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var enums_1 = __webpack_require__(270);
	var exceptions_1 = __webpack_require__(13);
	function normalizeMethodName(method) {
	    if (lang_1.isString(method)) {
	        var originalMethod = method;
	        method = method
	            .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
	            return g1.toUpperCase() + g2.toLowerCase();
	        });
	        method = enums_1.RequestMethod[method];
	        if (typeof method !== 'number')
	            throw exceptions_1.makeTypeError("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
	    }
	    return method;
	}
	exports.normalizeMethodName = normalizeMethodName;
	exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
	function getResponseURL(xhr) {
	    if ('responseURL' in xhr) {
	        return xhr.responseURL;
	    }
	    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	        return xhr.getResponseHeader('X-Request-URL');
	    }
	    return;
	}
	exports.getResponseURL = getResponseURL;
	var lang_2 = __webpack_require__(3);
	exports.isJsObject = lang_2.isJsObject;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRCxzQkFBNEIsU0FBUyxDQUFDLENBQUE7QUFDdEMsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFHN0QsNkJBQW9DLE1BQThCO0lBQ2hFQSxFQUFFQSxDQUFDQSxDQUFDQSxlQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNyQkEsSUFBSUEsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDNUJBLE1BQU1BLEdBQVlBLE1BQU9BO2FBQ1hBLE9BQU9BLENBQUNBLFlBQVlBLEVBQUVBLFVBQUNBLEVBQVVBLEVBQUVBLEVBQVVBLEVBQUVBLEVBQVVBO21CQUMvQkEsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUE7UUFBbkNBLENBQW1DQSxDQUFDQSxDQUFDQTtRQUM3RUEsTUFBTUEsR0FBa0NBLHFCQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMvREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsTUFBTUEsS0FBS0EsUUFBUUEsQ0FBQ0E7WUFDN0JBLE1BQU1BLDBCQUFhQSxDQUNmQSwwQ0FBdUNBLGNBQWNBLHlCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBQ0RBLE1BQU1BLENBQWdCQSxNQUFNQSxDQUFDQTtBQUMvQkEsQ0FBQ0E7QUFaZSwyQkFBbUIsc0JBWWxDLENBQUE7QUFFWSxpQkFBUyxHQUFHLFVBQUMsTUFBYyxJQUFjLE9BQUEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUV0Rix3QkFBK0IsR0FBUTtJQUNyQ0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekRBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBO0FBQ1RBLENBQUNBO0FBUmUsc0JBQWMsaUJBUTdCLENBQUE7QUFFRCxxQkFBeUIsMEJBQTBCLENBQUM7QUFBNUMsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1N0cmluZ30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge21ha2VUeXBlRXJyb3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tICcuL3N0YXRpY19yZXNwb25zZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVNZXRob2ROYW1lKG1ldGhvZDogc3RyaW5nIHwgUmVxdWVzdE1ldGhvZCk6IFJlcXVlc3RNZXRob2Qge1xuICBpZiAoaXNTdHJpbmcobWV0aG9kKSkge1xuICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IG1ldGhvZDtcbiAgICBtZXRob2QgPSAoPHN0cmluZz5tZXRob2QpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFx3KShcXHcqKS9nLCAoZzA6IHN0cmluZywgZzE6IHN0cmluZywgZzI6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCkpO1xuICAgIG1ldGhvZCA9IDxudW1iZXI+KDx7W2tleTogc3RyaW5nXTogYW55fT5SZXF1ZXN0TWV0aG9kKVttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXCIke29yaWdpbmFsTWV0aG9kfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gIH1cbiAgcmV0dXJuIDxSZXF1ZXN0TWV0aG9kPm1ldGhvZDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VjY2VzcyA9IChzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4gPT4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocjogYW55KTogc3RyaW5nIHtcbiAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgfVxuICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7aXNKc09iamVjdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbiJdfQ==

/***/ },
/* 270 */
/***/ function(module, exports) {

	'use strict';/**
	 * Supported http methods.
	 */
	(function (RequestMethod) {
	    RequestMethod[RequestMethod["Get"] = 0] = "Get";
	    RequestMethod[RequestMethod["Post"] = 1] = "Post";
	    RequestMethod[RequestMethod["Put"] = 2] = "Put";
	    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
	    RequestMethod[RequestMethod["Options"] = 4] = "Options";
	    RequestMethod[RequestMethod["Head"] = 5] = "Head";
	    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
	})(exports.RequestMethod || (exports.RequestMethod = {}));
	var RequestMethod = exports.RequestMethod;
	/**
	 * All possible states in which a connection can be, based on
	 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	 * additional "CANCELLED" state.
	 */
	(function (ReadyState) {
	    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
	    ReadyState[ReadyState["Open"] = 1] = "Open";
	    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
	    ReadyState[ReadyState["Loading"] = 3] = "Loading";
	    ReadyState[ReadyState["Done"] = 4] = "Done";
	    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
	})(exports.ReadyState || (exports.ReadyState = {}));
	var ReadyState = exports.ReadyState;
	/**
	 * Acceptable response types to be associated with a {@link Response}, based on
	 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	 */
	(function (ResponseType) {
	    ResponseType[ResponseType["Basic"] = 0] = "Basic";
	    ResponseType[ResponseType["Cors"] = 1] = "Cors";
	    ResponseType[ResponseType["Default"] = 2] = "Default";
	    ResponseType[ResponseType["Error"] = 3] = "Error";
	    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
	})(exports.ResponseType || (exports.ResponseType = {}));
	var ResponseType = exports.ResponseType;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9lbnVtcy50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0TWV0aG9kIiwiUmVhZHlTdGF0ZSIsIlJlc3BvbnNlVHlwZSJdLCJtYXBwaW5ncyI6IkFBRUE7O0dBRUc7QUFDSCxXQUFZLGFBQWE7SUFDdkJBLCtDQUFHQSxDQUFBQTtJQUNIQSxpREFBSUEsQ0FBQUE7SUFDSkEsK0NBQUdBLENBQUFBO0lBQ0hBLHFEQUFNQSxDQUFBQTtJQUNOQSx1REFBT0EsQ0FBQUE7SUFDUEEsaURBQUlBLENBQUFBO0lBQ0pBLG1EQUFLQSxDQUFBQTtBQUNQQSxDQUFDQSxFQVJXLHFCQUFhLEtBQWIscUJBQWEsUUFReEI7QUFSRCxJQUFZLGFBQWEsR0FBYixxQkFRWCxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNILFdBQVksVUFBVTtJQUNwQkMsK0NBQU1BLENBQUFBO0lBQ05BLDJDQUFJQSxDQUFBQTtJQUNKQSxpRUFBZUEsQ0FBQUE7SUFDZkEsaURBQU9BLENBQUFBO0lBQ1BBLDJDQUFJQSxDQUFBQTtJQUNKQSxxREFBU0EsQ0FBQUE7QUFDWEEsQ0FBQ0EsRUFQVyxrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBUEQsSUFBWSxVQUFVLEdBQVYsa0JBT1gsQ0FBQTtBQUVEOzs7R0FHRztBQUNILFdBQVksWUFBWTtJQUN0QkMsaURBQUtBLENBQUFBO0lBQ0xBLCtDQUFJQSxDQUFBQTtJQUNKQSxxREFBT0EsQ0FBQUE7SUFDUEEsaURBQUtBLENBQUFBO0lBQ0xBLG1EQUFNQSxDQUFBQTtBQUNSQSxDQUFDQSxFQU5XLG9CQUFZLEtBQVosb0JBQVksUUFNdkI7QUFORCxJQUFZLFlBQVksR0FBWixvQkFNWCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG4vKipcbiAqIFN1cHBvcnRlZCBodHRwIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBlbnVtIFJlcXVlc3RNZXRob2Qge1xuICBHZXQsXG4gIFBvc3QsXG4gIFB1dCxcbiAgRGVsZXRlLFxuICBPcHRpb25zLFxuICBIZWFkLFxuICBQYXRjaFxufVxuXG4vKipcbiAqIEFsbCBwb3NzaWJsZSBzdGF0ZXMgaW4gd2hpY2ggYSBjb25uZWN0aW9uIGNhbiBiZSwgYmFzZWQgb25cbiAqIFtTdGF0ZXNdKGh0dHA6Ly93d3cudzMub3JnL1RSL1hNTEh0dHBSZXF1ZXN0LyNzdGF0ZXMpIGZyb20gdGhlIGBYTUxIdHRwUmVxdWVzdGAgc3BlYywgYnV0IHdpdGggYW5cbiAqIGFkZGl0aW9uYWwgXCJDQU5DRUxMRURcIiBzdGF0ZS5cbiAqL1xuZXhwb3J0IGVudW0gUmVhZHlTdGF0ZSB7XG4gIFVuc2VudCxcbiAgT3BlbixcbiAgSGVhZGVyc1JlY2VpdmVkLFxuICBMb2FkaW5nLFxuICBEb25lLFxuICBDYW5jZWxsZWRcbn1cblxuLyoqXG4gKiBBY2NlcHRhYmxlIHJlc3BvbnNlIHR5cGVzIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBhIHtAbGluayBSZXNwb25zZX0sIGJhc2VkIG9uXG4gKiBbUmVzcG9uc2VUeXBlXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVzcG9uc2V0eXBlKSBmcm9tIHRoZSBGZXRjaCBzcGVjLlxuICovXG5leHBvcnQgZW51bSBSZXNwb25zZVR5cGUge1xuICBCYXNpYyxcbiAgQ29ycyxcbiAgRGVmYXVsdCxcbiAgRXJyb3IsXG4gIE9wYXF1ZVxufVxuIl19

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(3);
	var headers_1 = __webpack_require__(268);
	var enums_1 = __webpack_require__(270);
	var core_1 = __webpack_require__(22);
	var url_search_params_1 = __webpack_require__(272);
	var http_utils_1 = __webpack_require__(269);
	/**
	 * Creates a request options object to be optionally provided when instantiating a
	 * {@link Request}.
	 *
	 * This class is based on the `RequestInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#requestinit).
	 *
	 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
	 * class, which sub-classes `RequestOptions`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	 *
	 * ```typescript
	 * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
	 *
	 * var options = new RequestOptions({
	 *   method: RequestMethod.Post,
	 *   url: 'https://google.com'
	 * });
	 * var req = new Request(options);
	 * console.log('req.method:', RequestMethod[req.method]); // Post
	 * console.log('options.url:', options.url); // https://google.com
	 * ```
	 */
	var RequestOptions = (function () {
	    function RequestOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search;
	        this.method = lang_1.isPresent(method) ? http_utils_1.normalizeMethodName(method) : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	        this.search = lang_1.isPresent(search) ? (lang_1.isString(search) ? new url_search_params_1.URLSearchParams((search)) :
	            (search)) :
	            null;
	    }
	    /**
	     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * Note that `headers` and `search` will override existing values completely if present in
	     * the `options` object. If these values should be merged, it should be done prior to calling
	     * `merge` on the `RequestOptions` instance.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethod} from 'angular2/http';
	     *
	     * var options = new RequestOptions({
	     *   method: RequestMethod.Post
	     * });
	     * var req = new Request(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     */
	    RequestOptions.prototype.merge = function (options) {
	        return new RequestOptions({
	            method: lang_1.isPresent(options) && lang_1.isPresent(options.method) ? options.method : this.method,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	            search: lang_1.isPresent(options) && lang_1.isPresent(options.search) ?
	                (lang_1.isString(options.search) ? new url_search_params_1.URLSearchParams((options.search)) :
	                    (options.search).clone()) :
	                this.search
	        });
	    };
	    return RequestOptions;
	})();
	exports.RequestOptions = RequestOptions;
	/**
	 * Subclass of {@link RequestOptions}, with default values.
	 *
	 * Default values:
	 *  * method: {@link RequestMethod RequestMethod.Get}
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link RequestOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create and send {@link Request Requests}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	 *
	 * ```typescript
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Request}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	 *
	 * ```
	 * import {BaseRequestOptions, Request, RequestMethod} from 'angular2/http';
	 *
	 * var options = new BaseRequestOptions();
	 * var req = new Request(options.merge({
	 *   method: RequestMethod.Post,
	 *   url: 'https://google.com'
	 * }));
	 * console.log('req.method:', RequestMethod[req.method]); // Post
	 * console.log('options.url:', options.url); // null
	 * console.log('req.url:', req.url); // https://google.com
	 * ```
	 */
	var BaseRequestOptions = (function (_super) {
	    __extends(BaseRequestOptions, _super);
	    function BaseRequestOptions() {
	        _super.call(this, { method: enums_1.RequestMethod.Get, headers: new headers_1.Headers() });
	    }
	    BaseRequestOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseRequestOptions);
	    return BaseRequestOptions;
	})(RequestOptions);
	exports.BaseRequestOptions = BaseRequestOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yZXF1ZXN0X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYXNlX3JlcXVlc3Rfb3B0aW9ucy50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0T3B0aW9ucyIsIlJlcXVlc3RPcHRpb25zLmNvbnN0cnVjdG9yIiwiUmVxdWVzdE9wdGlvbnMubWVyZ2UiLCJCYXNlUmVxdWVzdE9wdGlvbnMiLCJCYXNlUmVxdWVzdE9wdGlvbnMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFDN0Qsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHNCQUE0QixTQUFTLENBQUMsQ0FBQTtBQUV0QyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsa0NBQThCLHFCQUFxQixDQUFDLENBQUE7QUFDcEQsMkJBQWtDLGNBQWMsQ0FBQyxDQUFBO0FBRWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNIO0lBdUJFQSx3QkFBWUEsRUFBNkRBO2lDQUFGQyxFQUFFQSxPQUE1REEsTUFBTUEsY0FBRUEsT0FBT0EsZUFBRUEsSUFBSUEsWUFBRUEsR0FBR0EsV0FBRUEsTUFBTUE7UUFDN0NBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLGdCQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxnQ0FBbUJBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3JFQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsZ0JBQVNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsbUNBQWVBLENBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3BCQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRUREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3QkdBO0lBQ0hBLDhCQUFLQSxHQUFMQSxVQUFNQSxPQUE0QkE7UUFDaENFLE1BQU1BLENBQUNBLElBQUlBLGNBQWNBLENBQUNBO1lBQ3hCQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BO1lBQ3RGQSxPQUFPQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO1lBQzFGQSxJQUFJQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBO1lBQzlFQSxHQUFHQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBO1lBQzFFQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBO2dCQUMzQ0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsbUNBQWVBLENBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUMzQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ3hFQSxJQUFJQSxDQUFDQSxNQUFNQTtTQUN4QkEsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDSEYscUJBQUNBO0FBQURBLENBQUNBLEFBdEVELElBc0VDO0FBdEVZLHNCQUFjLGlCQXNFMUIsQ0FBQTtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0g7SUFDd0NHLHNDQUFjQTtJQUNwREE7UUFBZ0JDLGtCQUFNQSxFQUFDQSxNQUFNQSxFQUFFQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsaUJBQU9BLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO0lBQUNBLENBQUNBO0lBRi9FRDtRQUFDQSxpQkFBVUEsRUFBRUE7OzJCQUdaQTtJQUFEQSx5QkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxFQUN3QyxjQUFjLEVBRXJEO0FBRlksMEJBQWtCLHFCQUU5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzU3RyaW5nfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXF1ZXN0TWV0aG9kfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7UmVxdWVzdE9wdGlvbnNBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICcuL3VybF9zZWFyY2hfcGFyYW1zJztcbmltcG9ydCB7bm9ybWFsaXplTWV0aG9kTmFtZX0gZnJvbSAnLi9odHRwX3V0aWxzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdCBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7QGxpbmsgUmVxdWVzdH0uXG4gKlxuICogVGhpcyBjbGFzcyBpcyBiYXNlZCBvbiB0aGUgYFJlcXVlc3RJbml0YCBkZXNjcmlwdGlvbiBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9XG4gKiBjbGFzcywgd2hpY2ggc3ViLWNsYXNzZXMgYFJlcXVlc3RPcHRpb25zYC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvN1d2aTNsZkxxNDFhUVBLbHhCNE8/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KTtcbiAqIHZhciByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zKTtcbiAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogSHR0cCBtZXRob2Qgd2l0aCB3aGljaCB0byBleGVjdXRlIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKiBBY2NlcHRhYmxlIG1ldGhvZHMgYXJlIGRlZmluZWQgaW4gdGhlIHtAbGluayBSZXF1ZXN0TWV0aG9kfSBlbnVtLlxuICAgKi9cbiAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kIHwgc3RyaW5nO1xuICAvKipcbiAgICoge0BsaW5rIEhlYWRlcnN9IHRvIGJlIGF0dGFjaGVkIHRvIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgaGVhZGVyczogSGVhZGVycztcbiAgLyoqXG4gICAqIEJvZHkgdG8gYmUgdXNlZCB3aGVuIGNyZWF0aW5nIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgLy8gVE9ETzogc3VwcG9ydCBGb3JtRGF0YSwgQmxvYiwgVVJMU2VhcmNoUGFyYW1zXG4gIGJvZHk6IHN0cmluZztcbiAgLyoqXG4gICAqIFVybCB3aXRoIHdoaWNoIHRvIHBlcmZvcm0gYSB7QGxpbmsgUmVxdWVzdH0uXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFNlYXJjaCBwYXJhbWV0ZXJzIHRvIGJlIGluY2x1ZGVkIGluIGEge0BsaW5rIFJlcXVlc3R9LlxuICAgKi9cbiAgc2VhcmNoOiBVUkxTZWFyY2hQYXJhbXM7XG4gIGNvbnN0cnVjdG9yKHttZXRob2QsIGhlYWRlcnMsIGJvZHksIHVybCwgc2VhcmNofTogUmVxdWVzdE9wdGlvbnNBcmdzID0ge30pIHtcbiAgICB0aGlzLm1ldGhvZCA9IGlzUHJlc2VudChtZXRob2QpID8gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpIDogbnVsbDtcbiAgICB0aGlzLmhlYWRlcnMgPSBpc1ByZXNlbnQoaGVhZGVycykgPyBoZWFkZXJzIDogbnVsbDtcbiAgICB0aGlzLmJvZHkgPSBpc1ByZXNlbnQoYm9keSkgPyBib2R5IDogbnVsbDtcbiAgICB0aGlzLnVybCA9IGlzUHJlc2VudCh1cmwpID8gdXJsIDogbnVsbDtcbiAgICB0aGlzLnNlYXJjaCA9IGlzUHJlc2VudChzZWFyY2gpID8gKGlzU3RyaW5nKHNlYXJjaCkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKDxzdHJpbmc+KHNlYXJjaCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VVJMU2VhcmNoUGFyYW1zPihzZWFyY2gpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UsIHVzaW5nIHRoZSBvcHRpb25hbCBpbnB1dCBhcyB2YWx1ZXMgdG8gb3ZlcnJpZGVcbiAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICogY2FsbGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYGhlYWRlcnNgIGFuZCBgc2VhcmNoYCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlcyBjb21wbGV0ZWx5IGlmIHByZXNlbnQgaW5cbiAgICogdGhlIGBvcHRpb25zYCBvYmplY3QuIElmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgbWVyZ2VkLCBpdCBzaG91bGQgYmUgZG9uZSBwcmlvciB0byBjYWxsaW5nXG4gICAqIGBtZXJnZWAgb24gdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC82dzhYQThZVGtEUmNQWXBkQjlkaz9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICAgKlxuICAgKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAqICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgICogfSk7XG4gICAqIHZhciByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zLm1lcmdlKHtcbiAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAqIH0pKTtcbiAgICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgKiBjb25zb2xlLmxvZygncmVxLnVybDonLCByZXEudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAqIGBgYFxuICAgKi9cbiAgbWVyZ2Uob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgIG1ldGhvZDogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLm1ldGhvZCkgPyBvcHRpb25zLm1ldGhvZCA6IHRoaXMubWV0aG9kLFxuICAgICAgaGVhZGVyczogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmhlYWRlcnMpID8gb3B0aW9ucy5oZWFkZXJzIDogdGhpcy5oZWFkZXJzLFxuICAgICAgYm9keTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmJvZHkpID8gb3B0aW9ucy5ib2R5IDogdGhpcy5ib2R5LFxuICAgICAgdXJsOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMudXJsKSA/IG9wdGlvbnMudXJsIDogdGhpcy51cmwsXG4gICAgICBzZWFyY2g6IGlzUHJlc2VudChvcHRpb25zKSAmJiBpc1ByZXNlbnQob3B0aW9ucy5zZWFyY2gpID9cbiAgICAgICAgICAgICAgICAgIChpc1N0cmluZyhvcHRpb25zLnNlYXJjaCkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKDxzdHJpbmc+KG9wdGlvbnMuc2VhcmNoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VVJMU2VhcmNoUGFyYW1zPihvcHRpb25zLnNlYXJjaCkpLmNsb25lKCkpIDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoXG4gICAgfSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFN1YmNsYXNzIG9mIHtAbGluayBSZXF1ZXN0T3B0aW9uc30sIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogRGVmYXVsdCB2YWx1ZXM6XG4gKiAgKiBtZXRob2Q6IHtAbGluayBSZXF1ZXN0TWV0aG9kIFJlcXVlc3RNZXRob2QuR2V0fVxuICogICogaGVhZGVyczogZW1wdHkge0BsaW5rIEhlYWRlcnN9IG9iamVjdFxuICpcbiAqIFRoaXMgY2xhc3MgY291bGQgYmUgZXh0ZW5kZWQgYW5kIGJvdW5kIHRvIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IGNsYXNzXG4gKiB3aGVuIGNvbmZpZ3VyaW5nIGFuIHtAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge0BsaW5rIEh0dHB9IHRvIGNyZWF0ZSBhbmQgc2VuZCB7QGxpbmsgUmVxdWVzdCBSZXF1ZXN0c30uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0xFS1ZTeD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqIGltcG9ydCB7QXBwfSBmcm9tICcuL215YXBwJztcbiAqXG4gKiBjbGFzcyBNeU9wdGlvbnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICogICBzZWFyY2g6IHN0cmluZyA9ICdjb3JlVGVhbT10cnVlJztcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwLCBbSFRUUF9QUk9WSURFUlMsIHByb3ZpZGUoUmVxdWVzdE9wdGlvbnMsIHt1c2VDbGFzczogTXlPcHRpb25zfSldKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHRpb25zIGNvdWxkIGFsc28gYmUgZXh0ZW5kZWQgd2hlbiBtYW51YWxseSBjcmVhdGluZyBhIHtAbGluayBSZXF1ZXN0fVxuICogb2JqZWN0LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9veUJvRXZOdERoT1NmaTlZeGFWYj9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICpcbiAqIHZhciBvcHRpb25zID0gbmV3IEJhc2VSZXF1ZXN0T3B0aW9ucygpO1xuICogdmFyIHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMubWVyZ2Uoe1xuICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICogfSkpO1xuICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAqIGNvbnNvbGUubG9nKCdyZXEudXJsOicsIHJlcS51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVJlcXVlc3RPcHRpb25zIGV4dGVuZHMgUmVxdWVzdE9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoe21ldGhvZDogUmVxdWVzdE1ldGhvZC5HZXQsIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCl9KTsgfVxufVxuIl19

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var collection_1 = __webpack_require__(11);
	function paramParser(rawParams) {
	    if (rawParams === void 0) { rawParams = ''; }
	    var map = new collection_1.Map();
	    if (rawParams.length > 0) {
	        var params = rawParams.split('&');
	        params.forEach(function (param) {
	            var split = param.split('=');
	            var key = split[0];
	            var val = split[1];
	            var list = lang_1.isPresent(map.get(key)) ? map.get(key) : [];
	            list.push(val);
	            map.set(key, list);
	        });
	    }
	    return map;
	}
	/**
	 * Map-like representation of url search parameters, based on
	 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
	 * with several extensions for merging URLSearchParams objects:
	 *   - setAll()
	 *   - appendAll()
	 *   - replaceAll()
	 */
	var URLSearchParams = (function () {
	    function URLSearchParams(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        this.rawParams = rawParams;
	        this.paramsMap = paramParser(rawParams);
	    }
	    URLSearchParams.prototype.clone = function () {
	        var clone = new URLSearchParams();
	        clone.appendAll(this);
	        return clone;
	    };
	    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	    URLSearchParams.prototype.get = function (param) {
	        var storedParam = this.paramsMap.get(param);
	        if (collection_1.isListLikeIterable(storedParam)) {
	            return collection_1.ListWrapper.first(storedParam);
	        }
	        else {
	            return null;
	        }
	    };
	    URLSearchParams.prototype.getAll = function (param) {
	        var mapParam = this.paramsMap.get(param);
	        return lang_1.isPresent(mapParam) ? mapParam : [];
	    };
	    URLSearchParams.prototype.set = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        collection_1.ListWrapper.clear(list);
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.setAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            list.push(value[0]);
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.append = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `append(name, value)`
	    // for each value in `values`.
	    //
	    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.appendAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `delete(name)`,
	    // followed by `set(name, values)`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.replaceAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.toString = function () {
	        var paramsList = [];
	        this.paramsMap.forEach(function (values, k) { values.forEach(function (v) { return paramsList.push(k + '=' + v); }); });
	        return paramsList.join('&');
	    };
	    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	    return URLSearchParams;
	})();
	exports.URLSearchParams = URLSearchParams;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3NlYXJjaF9wYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC91cmxfc2VhcmNoX3BhcmFtcy50cyJdLCJuYW1lcyI6WyJwYXJhbVBhcnNlciIsIlVSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcy5jb25zdHJ1Y3RvciIsIlVSTFNlYXJjaFBhcmFtcy5jbG9uZSIsIlVSTFNlYXJjaFBhcmFtcy5oYXMiLCJVUkxTZWFyY2hQYXJhbXMuZ2V0IiwiVVJMU2VhcmNoUGFyYW1zLmdldEFsbCIsIlVSTFNlYXJjaFBhcmFtcy5zZXQiLCJVUkxTZWFyY2hQYXJhbXMuc2V0QWxsIiwiVVJMU2VhcmNoUGFyYW1zLmFwcGVuZCIsIlVSTFNlYXJjaFBhcmFtcy5hcHBlbmRBbGwiLCJVUkxTZWFyY2hQYXJhbXMucmVwbGFjZUFsbCIsIlVSTFNlYXJjaFBhcmFtcy50b1N0cmluZyIsIlVSTFNlYXJjaFBhcmFtcy5kZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE2QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hFLDJCQUErRCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhHLHFCQUFxQixTQUFzQjtJQUF0QkEseUJBQXNCQSxHQUF0QkEsY0FBc0JBO0lBQ3pDQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxnQkFBR0EsRUFBb0JBLENBQUNBO0lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsSUFBSUEsTUFBTUEsR0FBYUEsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEtBQWFBO1lBQzNCQSxJQUFJQSxLQUFLQSxHQUFhQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN2Q0EsSUFBSUEsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ25CQSxJQUFJQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDdkRBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtBQUNiQSxDQUFDQTtBQUVEOzs7Ozs7O0dBT0c7QUFDSDtJQUVFQyx5QkFBbUJBLFNBQXNCQTtRQUE3QkMseUJBQTZCQSxHQUE3QkEsY0FBNkJBO1FBQXRCQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFhQTtRQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUFDQSxDQUFDQTtJQUV2RkQsK0JBQUtBLEdBQUxBO1FBQ0VFLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLGVBQWVBLEVBQUVBLENBQUNBO1FBQ2xDQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0QkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREYsNkJBQUdBLEdBQUhBLFVBQUlBLEtBQWFBLElBQWFHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWpFSCw2QkFBR0EsR0FBSEEsVUFBSUEsS0FBYUE7UUFDZkksSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLEVBQUVBLENBQUNBLENBQUNBLCtCQUFrQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBLHdCQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREosZ0NBQU1BLEdBQU5BLFVBQU9BLEtBQWFBO1FBQ2xCSyxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN6Q0EsTUFBTUEsQ0FBQ0EsZ0JBQVNBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLFFBQVFBLEdBQUdBLEVBQUVBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVETCw2QkFBR0EsR0FBSEEsVUFBSUEsS0FBYUEsRUFBRUEsR0FBV0E7UUFDNUJNLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDL0NBLHdCQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBRUROLG9CQUFvQkE7SUFDcEJBLDhFQUE4RUE7SUFDOUVBLEVBQUVBO0lBQ0ZBLHVFQUF1RUE7SUFDdkVBLEVBQUVBO0lBQ0ZBLHFDQUFxQ0E7SUFDckNBLGdDQUFNQSxHQUFOQSxVQUFPQSxZQUE2QkE7UUFBcENPLGlCQVFDQTtRQVBDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxLQUFLQSxFQUFFQSxLQUFLQTtZQUMxQ0EsSUFBSUEsUUFBUUEsR0FBR0EsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMvQ0Esd0JBQVdBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbENBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURQLGdDQUFNQSxHQUFOQSxVQUFPQSxLQUFhQSxFQUFFQSxHQUFXQTtRQUMvQlEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUMvQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBRURSLG9CQUFvQkE7SUFDcEJBLDZFQUE2RUE7SUFDN0VBLDhCQUE4QkE7SUFDOUJBLEVBQUVBO0lBQ0ZBLHlFQUF5RUE7SUFDekVBLEVBQUVBO0lBQ0ZBLHFDQUFxQ0E7SUFDckNBLG1DQUFTQSxHQUFUQSxVQUFVQSxZQUE2QkE7UUFBdkNTLGlCQVNDQTtRQVJDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxLQUFLQSxFQUFFQSxLQUFLQTtZQUMxQ0EsSUFBSUEsUUFBUUEsR0FBR0EsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMvQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQ3RDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsQ0FBQ0E7WUFDREEsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbENBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBR0RULG9CQUFvQkE7SUFDcEJBLHVFQUF1RUE7SUFDdkVBLGtDQUFrQ0E7SUFDbENBLEVBQUVBO0lBQ0ZBLDJFQUEyRUE7SUFDM0VBLEVBQUVBO0lBQ0ZBLHFDQUFxQ0E7SUFDckNBLG9DQUFVQSxHQUFWQSxVQUFXQSxZQUE2QkE7UUFBeENVLGlCQVVDQTtRQVRDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxLQUFLQSxFQUFFQSxLQUFLQTtZQUMxQ0EsSUFBSUEsUUFBUUEsR0FBR0EsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMvQ0Esd0JBQVdBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDdENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxDQUFDQTtZQUNEQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFRFYsa0NBQVFBLEdBQVJBO1FBQ0VXLElBQUlBLFVBQVVBLEdBQWFBLEVBQUVBLENBQUNBO1FBQzlCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxJQUFPQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUE1QkEsQ0FBNEJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlGQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFFRFgsZ0NBQU1BLEdBQU5BLFVBQVFBLEtBQWFBLElBQVVZLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hFWixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0R0QsSUFzR0M7QUF0R1ksdUJBQWUsa0JBc0czQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSLCBpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hcCwgTWFwV3JhcHBlciwgTGlzdFdyYXBwZXIsIGlzTGlzdExpa2VJdGVyYWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuZnVuY3Rpb24gcGFyYW1QYXJzZXIocmF3UGFyYW1zOiBzdHJpbmcgPSAnJyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gIHZhciBtYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gIGlmIChyYXdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBwYXJhbXM6IHN0cmluZ1tdID0gcmF3UGFyYW1zLnNwbGl0KCcmJyk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHZhciBzcGxpdDogc3RyaW5nW10gPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgdmFyIGtleSA9IHNwbGl0WzBdO1xuICAgICAgdmFyIHZhbCA9IHNwbGl0WzFdO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwLmdldChrZXkpKSA/IG1hcC5nZXQoa2V5KSA6IFtdO1xuICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICBtYXAuc2V0KGtleSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBNYXAtbGlrZSByZXByZXNlbnRhdGlvbiBvZiB1cmwgc2VhcmNoIHBhcmFtZXRlcnMsIGJhc2VkIG9uXG4gKiBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHNlYXJjaHBhcmFtcykgaW4gdGhlIHVybCBsaXZpbmcgc3RhbmRhcmQsXG4gKiB3aXRoIHNldmVyYWwgZXh0ZW5zaW9ucyBmb3IgbWVyZ2luZyBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0czpcbiAqICAgLSBzZXRBbGwoKVxuICogICAtIGFwcGVuZEFsbCgpXG4gKiAgIC0gcmVwbGFjZUFsbCgpXG4gKi9cbmV4cG9ydCBjbGFzcyBVUkxTZWFyY2hQYXJhbXMge1xuICBwYXJhbXNNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcbiAgY29uc3RydWN0b3IocHVibGljIHJhd1BhcmFtczogc3RyaW5nID0gJycpIHsgdGhpcy5wYXJhbXNNYXAgPSBwYXJhbVBhcnNlcihyYXdQYXJhbXMpOyB9XG5cbiAgY2xvbmUoKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgY2xvbmUuYXBwZW5kQWxsKHRoaXMpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGhhcyhwYXJhbTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmFtc01hcC5oYXMocGFyYW0pOyB9XG5cbiAgZ2V0KHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBzdG9yZWRQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgaWYgKGlzTGlzdExpa2VJdGVyYWJsZShzdG9yZWRQYXJhbSkpIHtcbiAgICAgIHJldHVybiBMaXN0V3JhcHBlci5maXJzdChzdG9yZWRQYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbChwYXJhbTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHZhciBtYXBQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgcmV0dXJuIGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICB9XG5cbiAgc2V0KHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBzZXQobmFtZSwgdmFsdWVzWzBdKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0XSwgYz1bOF0sIGI9WzddXCJcbiAgLy9cbiAgLy8gVE9ETyhAY2FpdHApOiBkb2N1bWVudCB0aGlzIGJldHRlclxuICBzZXRBbGwoc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICBzZWFyY2hQYXJhbXMucGFyYW1zTWFwLmZvckVhY2goKHZhbHVlLCBwYXJhbSkgPT4ge1xuICAgICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICAgIHZhciBsaXN0ID0gaXNQcmVzZW50KG1hcFBhcmFtKSA/IG1hcFBhcmFtIDogW107XG4gICAgICBMaXN0V3JhcHBlci5jbGVhcihsaXN0KTtcbiAgICAgIGxpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICB0aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kKHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBhcHBlbmQobmFtZSwgdmFsdWUpYFxuICAvLyBmb3IgZWFjaCB2YWx1ZSBpbiBgdmFsdWVzYC5cbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMl0sIGM9WzhdXCIgKyBcImE9WzMsNF0sIGI9WzddXCIgPSBcImE9WzEsMiwzLDRdLCBjPVs4XSwgYj1bN11cIlxuICAvL1xuICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gIGFwcGVuZEFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGlzdC5wdXNoKHZhbHVlW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIEEgbWVyZ2Ugb3BlcmF0aW9uXG4gIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYGRlbGV0ZShuYW1lKWAsXG4gIC8vIGZvbGxvd2VkIGJ5IGBzZXQobmFtZSwgdmFsdWVzKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0LDUsNl0sIGM9WzhdLCBiPVs3XVwiXG4gIC8vXG4gIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgcmVwbGFjZUFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBsaXN0LnB1c2godmFsdWVbaV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHBhcmFtc0xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWVzLCBrKSA9PiB7IHZhbHVlcy5mb3JFYWNoKHYgPT4gcGFyYW1zTGlzdC5wdXNoKGsgKyAnPScgKyB2KSk7IH0pO1xuICAgIHJldHVybiBwYXJhbXNMaXN0LmpvaW4oJyYnKTtcbiAgfVxuXG4gIGRlbGV0ZSAocGFyYW06IHN0cmluZyk6IHZvaWQgeyB0aGlzLnBhcmFtc01hcC5kZWxldGUocGFyYW0pOyB9XG59XG4iXX0=

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var enums_1 = __webpack_require__(270);
	var static_response_1 = __webpack_require__(274);
	var headers_1 = __webpack_require__(268);
	var base_response_options_1 = __webpack_require__(275);
	var core_1 = __webpack_require__(22);
	var browser_xhr_1 = __webpack_require__(276);
	var lang_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(52);
	var http_utils_1 = __webpack_require__(269);
	/**
	* Creates connections using `XMLHttpRequest`. Given a fully-qualified
	* request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	* request.
	*
	* This class would typically not be created or interacted with directly inside applications, though
	* the {@link MockConnection} may be interacted with in tests.
	*/
	var XHRConnection = (function () {
	    function XHRConnection(req, browserXHR, baseResponseOptions) {
	        var _this = this;
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            var _xhr = browserXHR.build();
	            _xhr.open(enums_1.RequestMethod[req.method].toUpperCase(), req.url);
	            // load event handler
	            var onLoad = function () {
	                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                // response/responseType properties were introduced in XHR Level2 spec (supported by
	                // IE10)
	                var body = lang_1.isPresent(_xhr.response) ? _xhr.response : _xhr.responseText;
	                var headers = headers_1.Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                var url = http_utils_1.getResponseURL(_xhr);
	                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                // fix status code when it is 0 (0 status is undocumented).
	                // Occurs when accessing file resources or on Android 4.1 stock browser
	                // while retrieving files from application cache.
	                if (status === 0) {
	                    status = body ? 200 : 0;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: body, status: status, headers: headers, url: url });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                var response = new static_response_1.Response(responseOptions);
	                if (http_utils_1.isSuccess(status)) {
	                    responseObserver.next(response);
	                    // TODO(gdi2290): defer complete if array buffer until done
	                    responseObserver.complete();
	                    return;
	                }
	                responseObserver.error(response);
	            };
	            // error event handler
	            var onError = function (err) {
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: err, type: enums_1.ResponseType.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            if (lang_1.isPresent(req.headers)) {
	                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	            }
	            _xhr.addEventListener('load', onLoad);
	            _xhr.addEventListener('error', onError);
	            _xhr.send(_this.request.text());
	            return function () {
	                _xhr.removeEventListener('load', onLoad);
	                _xhr.removeEventListener('error', onError);
	                _xhr.abort();
	            };
	        });
	    }
	    return XHRConnection;
	})();
	exports.XHRConnection = XHRConnection;
	/**
	 * Creates {@link XHRConnection} instances.
	 *
	 * This class would typically not be used by end users, but could be
	 * overridden if a different backend implementation should be used,
	 * such as in a node backend.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from 'angular2/http';
	 * @Component({
	 *   viewProviders: [
	 *     HTTP_PROVIDERS,
	 *     provide(Http, {useFactory: (backend, options) => {
	 *       return new Http(backend, options);
	 *     }, deps: [MyNodeBackend, BaseRequestOptions]})]
	 * })
	 * class MyComponent {
	 *   constructor(http:Http) {
	 *     http.request('people.json').subscribe(res => this.people = res.json());
	 *   }
	 * }
	 * ```
	 *
	 **/
	var XHRBackend = (function () {
	    function XHRBackend(_browserXHR, _baseResponseOptions) {
	        this._browserXHR = _browserXHR;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    XHRBackend.prototype.createConnection = function (request) {
	        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	    };
	    XHRBackend = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_xhr_1.BrowserXhr, base_response_options_1.ResponseOptions])
	    ], XHRBackend);
	    return XHRBackend;
	})();
	exports.XHRBackend = XHRBackend;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyX2JhY2tlbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYWNrZW5kcy94aHJfYmFja2VuZC50cyJdLCJuYW1lcyI6WyJYSFJDb25uZWN0aW9uIiwiWEhSQ29ubmVjdGlvbi5jb25zdHJ1Y3RvciIsIlhIUkJhY2tlbmQiLCJYSFJCYWNrZW5kLmNvbnN0cnVjdG9yIiwiWEhSQmFja2VuZC5jcmVhdGVDb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxzQkFBc0QsVUFBVSxDQUFDLENBQUE7QUFFakUsZ0NBQXVCLG9CQUFvQixDQUFDLENBQUE7QUFDNUMsd0JBQXNCLFlBQVksQ0FBQyxDQUFBO0FBQ25DLHNDQUFtRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQzlFLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyw0QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXdCLDBCQUEwQixDQUFDLENBQUE7QUFDbkQsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsMkJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBRXhEOzs7Ozs7O0VBT0U7QUFDRjtJQVFFQSx1QkFBWUEsR0FBWUEsRUFBRUEsVUFBc0JBLEVBQUVBLG1CQUFxQ0E7UUFSekZDLGlCQXVFQ0E7UUE5REdBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEdBQUdBLENBQUNBO1FBQ25CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsVUFBQ0EsZ0JBQW9DQTtZQUNsRUEsSUFBSUEsSUFBSUEsR0FBbUJBLFVBQVVBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQzlDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLHFCQUFxQkE7WUFDckJBLElBQUlBLE1BQU1BLEdBQUdBO2dCQUNYQSxtRkFBbUZBO2dCQUNuRkEsb0ZBQW9GQTtnQkFDcEZBLFFBQVFBO2dCQUNSQSxJQUFJQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBRXhFQSxJQUFJQSxPQUFPQSxHQUFHQSxpQkFBT0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLEVBQUVBLENBQUNBLENBQUNBO2dCQUU3RUEsSUFBSUEsR0FBR0EsR0FBR0EsMkJBQWNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUUvQkEseURBQXlEQTtnQkFDekRBLElBQUlBLE1BQU1BLEdBQVdBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLElBQUlBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO2dCQUU5REEsMkRBQTJEQTtnQkFDM0RBLHVFQUF1RUE7Z0JBQ3ZFQSxpREFBaURBO2dCQUNqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pCQSxNQUFNQSxHQUFHQSxJQUFJQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUNEQSxJQUFJQSxlQUFlQSxHQUFHQSxJQUFJQSx1Q0FBZUEsQ0FBQ0EsRUFBQ0EsTUFBQUEsSUFBSUEsRUFBRUEsUUFBQUEsTUFBTUEsRUFBRUEsU0FBQUEsT0FBT0EsRUFBRUEsS0FBQUEsR0FBR0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hFQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbkNBLGVBQWVBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFDREEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsMEJBQVFBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO2dCQUM3Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0Esc0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN0QkEsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDaENBLDJEQUEyREE7b0JBQzNEQSxnQkFBZ0JBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO29CQUM1QkEsTUFBTUEsQ0FBQ0E7Z0JBQ1RBLENBQUNBO2dCQUNEQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQSxDQUFDQTtZQUNGQSxzQkFBc0JBO1lBQ3RCQSxJQUFJQSxPQUFPQSxHQUFHQSxVQUFDQSxHQUFRQTtnQkFDckJBLElBQUlBLGVBQWVBLEdBQUdBLElBQUlBLHVDQUFlQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxvQkFBWUEsQ0FBQ0EsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pGQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbkNBLGVBQWVBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFDREEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSwwQkFBUUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLENBQUNBLENBQUNBO1lBRUZBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLE1BQU1BLEVBQUVBLElBQUlBLElBQUtBLE9BQUFBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBN0NBLENBQTZDQSxDQUFDQSxDQUFDQTtZQUN2RkEsQ0FBQ0E7WUFFREEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUN0Q0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUV4Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFFL0JBLE1BQU1BLENBQUNBO2dCQUNMQSxJQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUN6Q0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDM0NBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ2ZBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBQ0hELG9CQUFDQTtBQUFEQSxDQUFDQSxBQXZFRCxJQXVFQztBQXZFWSxxQkFBYSxnQkF1RXpCLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKO0lBRUVFLG9CQUFvQkEsV0FBdUJBLEVBQVVBLG9CQUFxQ0E7UUFBdEVDLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtRQUFVQSx5QkFBb0JBLEdBQXBCQSxvQkFBb0JBLENBQWlCQTtJQUFHQSxDQUFDQTtJQUM5RkQscUNBQWdCQSxHQUFoQkEsVUFBaUJBLE9BQWdCQTtRQUMvQkUsTUFBTUEsQ0FBQ0EsSUFBSUEsYUFBYUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtJQUNqRkEsQ0FBQ0E7SUFMSEY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkFNWkE7SUFBREEsaUJBQUNBO0FBQURBLENBQUNBLEFBTkQsSUFNQztBQUxZLGtCQUFVLGFBS3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nvbm5lY3Rpb25CYWNrZW5kLCBDb25uZWN0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7UmVhZHlTdGF0ZSwgUmVxdWVzdE1ldGhvZCwgUmVzcG9uc2VUeXBlfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQge1JlcXVlc3R9IGZyb20gJy4uL3N0YXRpY19yZXF1ZXN0JztcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gJy4uL3N0YXRpY19yZXNwb25zZSc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJy4uL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXNwb25zZU9wdGlvbnMsIEJhc2VSZXNwb25zZU9wdGlvbnN9IGZyb20gJy4uL2Jhc2VfcmVzcG9uc2Vfb3B0aW9ucyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyWGhyfSBmcm9tICcuL2Jyb3dzZXJfeGhyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge2lzU3VjY2VzcywgZ2V0UmVzcG9uc2VVUkx9IGZyb20gJy4uL2h0dHBfdXRpbHMnO1xuXG4vKipcbiogQ3JlYXRlcyBjb25uZWN0aW9ucyB1c2luZyBgWE1MSHR0cFJlcXVlc3RgLiBHaXZlbiBhIGZ1bGx5LXF1YWxpZmllZFxuKiByZXF1ZXN0LCBhbiBgWEhSQ29ubmVjdGlvbmAgd2lsbCBpbW1lZGlhdGVseSBjcmVhdGUgYW4gYFhNTEh0dHBSZXF1ZXN0YCBvYmplY3QgYW5kIHNlbmQgdGhlXG4qIHJlcXVlc3QuXG4qXG4qIFRoaXMgY2xhc3Mgd291bGQgdHlwaWNhbGx5IG5vdCBiZSBjcmVhdGVkIG9yIGludGVyYWN0ZWQgd2l0aCBkaXJlY3RseSBpbnNpZGUgYXBwbGljYXRpb25zLCB0aG91Z2hcbiogdGhlIHtAbGluayBNb2NrQ29ubmVjdGlvbn0gbWF5IGJlIGludGVyYWN0ZWQgd2l0aCBpbiB0ZXN0cy5cbiovXG5leHBvcnQgY2xhc3MgWEhSQ29ubmVjdGlvbiBpbXBsZW1lbnRzIENvbm5lY3Rpb24ge1xuICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAvKipcbiAgICogUmVzcG9uc2Uge0BsaW5rIEV2ZW50RW1pdHRlcn0gd2hpY2ggZW1pdHMgYSBzaW5nbGUge0BsaW5rIFJlc3BvbnNlfSB2YWx1ZSBvbiBsb2FkIGV2ZW50IG9mXG4gICAqIGBYTUxIdHRwUmVxdWVzdGAuXG4gICAqL1xuICByZXNwb25zZTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG4gIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGU7XG4gIGNvbnN0cnVjdG9yKHJlcTogUmVxdWVzdCwgYnJvd3NlclhIUjogQnJvd3NlclhociwgYmFzZVJlc3BvbnNlT3B0aW9ucz86IFJlc3BvbnNlT3B0aW9ucykge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcTtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IE9ic2VydmFibGUoKHJlc3BvbnNlT2JzZXJ2ZXI6IE9ic2VydmVyPFJlc3BvbnNlPikgPT4ge1xuICAgICAgbGV0IF94aHI6IFhNTEh0dHBSZXF1ZXN0ID0gYnJvd3NlclhIUi5idWlsZCgpO1xuICAgICAgX3hoci5vcGVuKFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0udG9VcHBlckNhc2UoKSwgcmVxLnVybCk7XG4gICAgICAvLyBsb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgIGxldCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBYSFIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZCBieVxuICAgICAgICAvLyBJRTEwKVxuICAgICAgICBsZXQgYm9keSA9IGlzUHJlc2VudChfeGhyLnJlc3BvbnNlKSA/IF94aHIucmVzcG9uc2UgOiBfeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IEhlYWRlcnMuZnJvbVJlc3BvbnNlSGVhZGVyU3RyaW5nKF94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuXG4gICAgICAgIGxldCB1cmwgPSBnZXRSZXNwb25zZVVSTChfeGhyKTtcblxuICAgICAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICAgICAgbGV0IHN0YXR1czogbnVtYmVyID0gX3hoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiBfeGhyLnN0YXR1cztcblxuICAgICAgICAvLyBmaXggc3RhdHVzIGNvZGUgd2hlbiBpdCBpcyAwICgwIHN0YXR1cyBpcyB1bmRvY3VtZW50ZWQpLlxuICAgICAgICAvLyBPY2N1cnMgd2hlbiBhY2Nlc3NpbmcgZmlsZSByZXNvdXJjZXMgb3Igb24gQW5kcm9pZCA0LjEgc3RvY2sgYnJvd3NlclxuICAgICAgICAvLyB3aGlsZSByZXRyaWV2aW5nIGZpbGVzIGZyb20gYXBwbGljYXRpb24gY2FjaGUuXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBzdGF0dXMgPSBib2R5ID8gMjAwIDogMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7Ym9keSwgc3RhdHVzLCBoZWFkZXJzLCB1cmx9KTtcbiAgICAgICAgaWYgKGlzUHJlc2VudChiYXNlUmVzcG9uc2VPcHRpb25zKSkge1xuICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG4gICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc3BvbnNlKTtcbiAgICAgICAgICAvLyBUT0RPKGdkaTIyOTApOiBkZWZlciBjb21wbGV0ZSBpZiBhcnJheSBidWZmZXIgdW50aWwgZG9uZVxuICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgLy8gZXJyb3IgZXZlbnQgaGFuZGxlclxuICAgICAgbGV0IG9uRXJyb3IgPSAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdmFyIHJlc3BvbnNlT3B0aW9ucyA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHk6IGVyciwgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yfSk7XG4gICAgICAgIGlmIChpc1ByZXNlbnQoYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNQcmVzZW50KHJlcS5oZWFkZXJzKSkge1xuICAgICAgICByZXEuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZXMsIG5hbWUpID0+IF94aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZXMuam9pbignLCcpKSk7XG4gICAgICB9XG5cbiAgICAgIF94aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBfeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG5cbiAgICAgIF94aHIuc2VuZCh0aGlzLnJlcXVlc3QudGV4dCgpKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgX3hoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgX3hoci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICBfeGhyLmFib3J0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyB7QGxpbmsgWEhSQ29ubmVjdGlvbn0gaW5zdGFuY2VzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd291bGQgdHlwaWNhbGx5IG5vdCBiZSB1c2VkIGJ5IGVuZCB1c2VycywgYnV0IGNvdWxkIGJlXG4gKiBvdmVycmlkZGVuIGlmIGEgZGlmZmVyZW50IGJhY2tlbmQgaW1wbGVtZW50YXRpb24gc2hvdWxkIGJlIHVzZWQsXG4gKiBzdWNoIGFzIGluIGEgbm9kZSBiYWNrZW5kLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0h0dHAsIE15Tm9kZUJhY2tlbmQsIEhUVFBfUFJPVklERVJTLCBCYXNlUmVxdWVzdE9wdGlvbnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuICogQENvbXBvbmVudCh7XG4gKiAgIHZpZXdQcm92aWRlcnM6IFtcbiAqICAgICBIVFRQX1BST1ZJREVSUyxcbiAqICAgICBwcm92aWRlKEh0dHAsIHt1c2VGYWN0b3J5OiAoYmFja2VuZCwgb3B0aW9ucykgPT4ge1xuICogICAgICAgcmV0dXJuIG5ldyBIdHRwKGJhY2tlbmQsIG9wdGlvbnMpO1xuICogICAgIH0sIGRlcHM6IFtNeU5vZGVCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdfSldXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQge1xuICogICBjb25zdHJ1Y3RvcihodHRwOkh0dHApIHtcbiAqICAgICBodHRwLnJlcXVlc3QoJ3Blb3BsZS5qc29uJykuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnBlb3BsZSA9IHJlcy5qc29uKCkpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWEhSQmFja2VuZCBpbXBsZW1lbnRzIENvbm5lY3Rpb25CYWNrZW5kIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYnJvd3NlclhIUjogQnJvd3NlclhociwgcHJpdmF0ZSBfYmFzZVJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zKSB7fVxuICBjcmVhdGVDb25uZWN0aW9uKHJlcXVlc3Q6IFJlcXVlc3QpOiBYSFJDb25uZWN0aW9uIHtcbiAgICByZXR1cm4gbmV3IFhIUkNvbm5lY3Rpb24ocmVxdWVzdCwgdGhpcy5fYnJvd3NlclhIUiwgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(3);
	var exceptions_1 = __webpack_require__(13);
	var http_utils_1 = __webpack_require__(269);
	/**
	 * Creates `Response` instances from provided values.
	 *
	 * Though this object isn't
	 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
	 * add data to a view.
	 *
	 * ### Example
	 *
	 * ```
	 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
	 * ```
	 *
	 * The Response's interface is inspired by the Response constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
	 * can be accessed many times. There are other differences in the implementation, but this is the
	 * most significant.
	 */
	var Response = (function () {
	    function Response(responseOptions) {
	        this._body = responseOptions.body;
	        this.status = responseOptions.status;
	        this.statusText = responseOptions.statusText;
	        this.headers = responseOptions.headers;
	        this.type = responseOptions.type;
	        this.url = responseOptions.url;
	    }
	    /**
	     * Not yet implemented
	     */
	    // TODO: Blob return type
	    Response.prototype.blob = function () { throw new exceptions_1.BaseException('"blob()" method not implemented on Response superclass'); };
	    /**
	     * Attempts to return body as parsed `JSON` object, or raises an exception.
	     */
	    Response.prototype.json = function () {
	        var jsonResponse;
	        if (http_utils_1.isJsObject(this._body)) {
	            jsonResponse = this._body;
	        }
	        else if (lang_1.isString(this._body)) {
	            jsonResponse = lang_1.Json.parse(this._body);
	        }
	        return jsonResponse;
	    };
	    /**
	     * Returns the body as a string, presuming `toString()` can be called on the response body.
	     */
	    Response.prototype.text = function () { return this._body.toString(); };
	    /**
	     * Not yet implemented
	     */
	    // TODO: ArrayBuffer return type
	    Response.prototype.arrayBuffer = function () {
	        throw new exceptions_1.BaseException('"arrayBuffer()" method not implemented on Response superclass');
	    };
	    return Response;
	})();
	exports.Response = Response;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3Jlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2h0dHAvc3RhdGljX3Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIlJlc3BvbnNlIiwiUmVzcG9uc2UuY29uc3RydWN0b3IiLCJSZXNwb25zZS5ibG9iIiwiUmVzcG9uc2UuanNvbiIsIlJlc3BvbnNlLnRleHQiLCJSZXNwb25zZS5hcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6IkFBQ0EscUJBQW9ELDBCQUEwQixDQUFDLENBQUE7QUFDL0UsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFHL0UsMkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBRXhDOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIO0lBa0RFQSxrQkFBWUEsZUFBZ0NBO1FBQzFDQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZUFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGVBQWVBLENBQUNBLFVBQVVBLENBQUNBO1FBQzdDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN2Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLGVBQWVBLENBQUNBLEdBQUdBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVERDs7T0FFR0E7SUFDSEEseUJBQXlCQTtJQUN6QkEsdUJBQUlBLEdBQUpBLGNBQWNFLE1BQU1BLElBQUlBLDBCQUFhQSxDQUFDQSx3REFBd0RBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWxHRjs7T0FFR0E7SUFDSEEsdUJBQUlBLEdBQUpBO1FBQ0VHLElBQUlBLFlBQTZCQSxDQUFDQTtRQUNsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsdUJBQVVBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLFlBQVlBLEdBQUdBLFdBQUlBLENBQUNBLEtBQUtBLENBQVNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFFREg7O09BRUdBO0lBQ0hBLHVCQUFJQSxHQUFKQSxjQUFpQkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFaERKOztPQUVHQTtJQUNIQSxnQ0FBZ0NBO0lBQ2hDQSw4QkFBV0EsR0FBWEE7UUFDRUssTUFBTUEsSUFBSUEsMEJBQWFBLENBQUNBLCtEQUErREEsQ0FBQ0EsQ0FBQ0E7SUFDM0ZBLENBQUNBO0lBQ0hMLGVBQUNBO0FBQURBLENBQUNBLEFBMUZELElBMEZDO0FBMUZZLGdCQUFRLFdBMEZwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtDT05TVF9FWFBSLCBpc1N0cmluZywgaXNQcmVzZW50LCBKc29ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXNwb25zZU9wdGlvbnN9IGZyb20gJy4vYmFzZV9yZXNwb25zZV9vcHRpb25zJztcbmltcG9ydCB7aXNKc09iamVjdH0gZnJvbSAnLi9odHRwX3V0aWxzJztcblxuLyoqXG4gKiBDcmVhdGVzIGBSZXNwb25zZWAgaW5zdGFuY2VzIGZyb20gcHJvdmlkZWQgdmFsdWVzLlxuICpcbiAqIFRob3VnaCB0aGlzIG9iamVjdCBpc24ndFxuICogdXN1YWxseSBpbnN0YW50aWF0ZWQgYnkgZW5kLXVzZXJzLCBpdCBpcyB0aGUgcHJpbWFyeSBvYmplY3QgaW50ZXJhY3RlZCB3aXRoIHdoZW4gaXQgY29tZXMgdGltZSB0b1xuICogYWRkIGRhdGEgdG8gYSB2aWV3LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBodHRwLnJlcXVlc3QoJ215LWZyaWVuZHMudHh0Jykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuZnJpZW5kcyA9IHJlc3BvbnNlLnRleHQoKSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgUmVzcG9uc2UncyBpbnRlcmZhY2UgaXMgaW5zcGlyZWQgYnkgdGhlIFJlc3BvbnNlIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gdGhlIFtGZXRjaFxuICogU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlLWNsYXNzKSwgYnV0IGlzIGNvbnNpZGVyZWQgYSBzdGF0aWMgdmFsdWUgd2hvc2UgYm9keVxuICogY2FuIGJlIGFjY2Vzc2VkIG1hbnkgdGltZXMuIFRoZXJlIGFyZSBvdGhlciBkaWZmZXJlbmNlcyBpbiB0aGUgaW1wbGVtZW50YXRpb24sIGJ1dCB0aGlzIGlzIHRoZVxuICogbW9zdCBzaWduaWZpY2FudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIE9uZSBvZiBcImJhc2ljXCIsIFwiY29yc1wiLCBcImRlZmF1bHRcIiwgXCJlcnJvciwgb3IgXCJvcGFxdWVcIi5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gXCJkZWZhdWx0XCIuXG4gICAqL1xuICB0eXBlOiBSZXNwb25zZVR5cGU7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSByZXNwb25zZSdzIHN0YXR1cyBpcyB3aXRoaW4gMjAwLTI5OVxuICAgKi9cbiAgb2s6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBVUkwgb2YgcmVzcG9uc2UuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIHVybDogc3RyaW5nO1xuICAvKipcbiAgICogU3RhdHVzIGNvZGUgcmV0dXJuZWQgYnkgc2VydmVyLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAyMDAuXG4gICAqL1xuICBzdGF0dXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRleHQgcmVwcmVzZW50aW5nIHRoZSBjb3JyZXNwb25kaW5nIHJlYXNvbiBwaHJhc2UgdG8gdGhlIGBzdGF0dXNgLCBhcyBkZWZpbmVkIGluIFtpZXRmIHJmYyAyNjE2XG4gICAqIHNlY3Rpb24gNi4xLjFdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNjE2I3NlY3Rpb24tNi4xLjEpXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIFwiT0tcIlxuICAgKi9cbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogTm9uLXN0YW5kYXJkIHByb3BlcnR5XG4gICAqXG4gICAqIERlbm90ZXMgaG93IG1hbnkgb2YgdGhlIHJlc3BvbnNlIGJvZHkncyBieXRlcyBoYXZlIGJlZW4gbG9hZGVkLCBmb3IgZXhhbXBsZSBpZiB0aGUgcmVzcG9uc2UgaXNcbiAgICogdGhlIHJlc3VsdCBvZiBhIHByb2dyZXNzIGV2ZW50LlxuICAgKi9cbiAgYnl0ZXNMb2FkZWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIE5vbi1zdGFuZGFyZCBwcm9wZXJ0eVxuICAgKlxuICAgKiBEZW5vdGVzIGhvdyBtYW55IGJ5dGVzIGFyZSBleHBlY3RlZCBpbiB0aGUgZmluYWwgcmVzcG9uc2UgYm9keS5cbiAgICovXG4gIHRvdGFsQnl0ZXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIEhlYWRlcnMgb2JqZWN0IGJhc2VkIG9uIHRoZSBgSGVhZGVyc2AgY2xhc3MgaW4gdGhlIFtGZXRjaFxuICAgKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jaGVhZGVycy1jbGFzcykuXG4gICAqL1xuICBoZWFkZXJzOiBIZWFkZXJzO1xuICAvLyBUT0RPOiBTdXBwb3J0IEFycmF5QnVmZmVyLCBKU09OLCBGb3JtRGF0YSwgQmxvYlxuICBwcml2YXRlIF9ib2R5OiBzdHJpbmcgfCBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKHJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgdGhpcy5fYm9keSA9IHJlc3BvbnNlT3B0aW9ucy5ib2R5O1xuICAgIHRoaXMuc3RhdHVzID0gcmVzcG9uc2VPcHRpb25zLnN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSByZXNwb25zZU9wdGlvbnMuc3RhdHVzVGV4dDtcbiAgICB0aGlzLmhlYWRlcnMgPSByZXNwb25zZU9wdGlvbnMuaGVhZGVycztcbiAgICB0aGlzLnR5cGUgPSByZXNwb25zZU9wdGlvbnMudHlwZTtcbiAgICB0aGlzLnVybCA9IHJlc3BvbnNlT3B0aW9ucy51cmw7XG4gIH1cblxuICAvKipcbiAgICogTm90IHlldCBpbXBsZW1lbnRlZFxuICAgKi9cbiAgLy8gVE9ETzogQmxvYiByZXR1cm4gdHlwZVxuICBibG9iKCk6IGFueSB7IHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCdcImJsb2IoKVwiIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQgb24gUmVzcG9uc2Ugc3VwZXJjbGFzcycpOyB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJldHVybiBib2R5IGFzIHBhcnNlZCBgSlNPTmAgb2JqZWN0LCBvciByYWlzZXMgYW4gZXhjZXB0aW9uLlxuICAgKi9cbiAganNvbigpOiBhbnkge1xuICAgIHZhciBqc29uUmVzcG9uc2U6IHN0cmluZyB8IE9iamVjdDtcbiAgICBpZiAoaXNKc09iamVjdCh0aGlzLl9ib2R5KSkge1xuICAgICAganNvblJlc3BvbnNlID0gdGhpcy5fYm9keTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRoaXMuX2JvZHkpKSB7XG4gICAgICBqc29uUmVzcG9uc2UgPSBKc29uLnBhcnNlKDxzdHJpbmc+dGhpcy5fYm9keSk7XG4gICAgfVxuICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm9keSBhcyBhIHN0cmluZywgcHJlc3VtaW5nIGB0b1N0cmluZygpYCBjYW4gYmUgY2FsbGVkIG9uIHRoZSByZXNwb25zZSBib2R5LlxuICAgKi9cbiAgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYm9keS50b1N0cmluZygpOyB9XG5cbiAgLyoqXG4gICAqIE5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICovXG4gIC8vIFRPRE86IEFycmF5QnVmZmVyIHJldHVybiB0eXBlXG4gIGFycmF5QnVmZmVyKCk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oJ1wiYXJyYXlCdWZmZXIoKVwiIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQgb24gUmVzcG9uc2Ugc3VwZXJjbGFzcycpO1xuICB9XG59XG4iXX0=

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var lang_1 = __webpack_require__(3);
	var headers_1 = __webpack_require__(268);
	var enums_1 = __webpack_require__(270);
	/**
	 * Creates a response options object to be optionally provided when instantiating a
	 * {@link Response}.
	 *
	 * This class is based on the `ResponseInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#responseinit).
	 *
	 * All values are null by default. Typical defaults can be found in the
	 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	 *
	 * This class may be used in tests to build {@link Response Responses} for
	 * mock responses (see {@link MockBackend}).
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	 *
	 * ```typescript
	 * import {ResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new ResponseOptions({
	 *   body: '{"name":"Jeff"}'
	 * });
	 * var res = new Response(options);
	 *
	 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	 * ```
	 */
	var ResponseOptions = (function () {
	    function ResponseOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.status = lang_1.isPresent(status) ? status : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.statusText = lang_1.isPresent(statusText) ? statusText : null;
	        this.type = lang_1.isPresent(type) ? type : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	    }
	    /**
	     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
	     * override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * This may be useful when sharing a base `ResponseOptions` object inside tests,
	     * where certain properties may change from test to test.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from 'angular2/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: {name: 'Jeff'}
	     * });
	     * var res = new Response(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('options.url:', options.url); // null
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * console.log('res.url:', res.url); // https://google.com
	     * ```
	     */
	    ResponseOptions.prototype.merge = function (options) {
	        return new ResponseOptions({
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            status: lang_1.isPresent(options) && lang_1.isPresent(options.status) ? options.status : this.status,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            statusText: lang_1.isPresent(options) && lang_1.isPresent(options.statusText) ? options.statusText :
	                this.statusText,
	            type: lang_1.isPresent(options) && lang_1.isPresent(options.type) ? options.type : this.type,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	        });
	    };
	    return ResponseOptions;
	})();
	exports.ResponseOptions = ResponseOptions;
	/**
	 * Subclass of {@link ResponseOptions}, with default values.
	 *
	 * Default values:
	 *  * status: 200
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link ResponseOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create {@link Response Responses}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	 *
	 * ```typescript
	 * import {provide} from 'angular2/core';
	 * import {bootstrap} from 'angular2/platform/browser';
	 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	 * 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseResponseOptions {
	 *   headers:Headers = new Headers({network: 'github'});
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(ResponseOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Response}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	 *
	 * ```
	 * import {BaseResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new BaseResponseOptions();
	 * var res = new Response(options.merge({
	 *   body: 'Angular2',
	 *   headers: new Headers({framework: 'angular'})
	 * }));
	 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
	 * console.log('res.text():', res.text()); // Angular2;
	 * ```
	 */
	var BaseResponseOptions = (function (_super) {
	    __extends(BaseResponseOptions, _super);
	    function BaseResponseOptions() {
	        _super.call(this, { status: 200, statusText: 'Ok', type: enums_1.ResponseType.Default, headers: new headers_1.Headers() });
	    }
	    BaseResponseOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseResponseOptions);
	    return BaseResponseOptions;
	})(ResponseOptions);
	exports.BaseResponseOptions = BaseResponseOptions;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yZXNwb25zZV9vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2h0dHAvYmFzZV9yZXNwb25zZV9vcHRpb25zLnRzIl0sIm5hbWVzIjpbIlJlc3BvbnNlT3B0aW9ucyIsIlJlc3BvbnNlT3B0aW9ucy5jb25zdHJ1Y3RvciIsIlJlc3BvbnNlT3B0aW9ucy5tZXJnZSIsIkJhc2VSZXNwb25zZU9wdGlvbnMiLCJCYXNlUmVzcG9uc2VPcHRpb25zLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsc0JBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBR3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0g7SUF3QkVBLHlCQUFZQSxFQUF3RUE7aUNBQUZDLEVBQUVBLE9BQXZFQSxJQUFJQSxZQUFFQSxNQUFNQSxjQUFFQSxPQUFPQSxlQUFFQSxVQUFVQSxrQkFBRUEsSUFBSUEsWUFBRUEsR0FBR0E7UUFDdkRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsZ0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkRBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGdCQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUM1REEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsZ0JBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRUREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3QkdBO0lBQ0hBLCtCQUFLQSxHQUFMQSxVQUFNQSxPQUE2QkE7UUFDakNFLE1BQU1BLENBQUNBLElBQUlBLGVBQWVBLENBQUNBO1lBQ3pCQSxJQUFJQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBO1lBQzlFQSxNQUFNQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BO1lBQ3RGQSxPQUFPQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BO1lBQzFGQSxVQUFVQSxFQUFFQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBLFVBQVVBO2dCQUNsQkEsSUFBSUEsQ0FBQ0EsVUFBVUE7WUFDakZBLElBQUlBLEVBQUVBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUE7WUFDOUVBLEdBQUdBLEVBQUVBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0E7U0FDM0VBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBQ0hGLHNCQUFDQTtBQUFEQSxDQUFDQSxBQXJFRCxJQXFFQztBQXJFWSx1QkFBZSxrQkFxRTNCLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDRztBQUNIO0lBQ3lDRyx1Q0FBZUE7SUFDdERBO1FBQ0VDLGtCQUFNQSxFQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxvQkFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsaUJBQU9BLEVBQUVBLEVBQUNBLENBQUNBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUpIRDtRQUFDQSxpQkFBVUEsRUFBRUE7OzRCQUtaQTtJQUFEQSwwQkFBQ0E7QUFBREEsQ0FBQ0EsQUFMRCxFQUN5QyxlQUFlLEVBSXZEO0FBSlksMkJBQW1CLHNCQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7aXNQcmVzZW50LCBpc0pzT2JqZWN0fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICcuL2hlYWRlcnMnO1xuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtSZXNwb25zZU9wdGlvbnNBcmdzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZXNwb25zZSBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7QGxpbmsgUmVzcG9uc2V9LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgYmFzZWQgb24gdGhlIGBSZXNwb25zZUluaXRgIGRlc2NyaXB0aW9uIGluIHRoZSBbRmV0Y2hcbiAqIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZWluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlXG4gKiB7QGxpbmsgQmFzZVJlc3BvbnNlT3B0aW9uc30gY2xhc3MsIHdoaWNoIHN1Yi1jbGFzc2VzIGBSZXNwb25zZU9wdGlvbnNgLlxuICpcbiAqIFRoaXMgY2xhc3MgbWF5IGJlIHVzZWQgaW4gdGVzdHMgdG8gYnVpbGQge0BsaW5rIFJlc3BvbnNlIFJlc3BvbnNlc30gZm9yXG4gKiBtb2NrIHJlc3BvbnNlcyAoc2VlIHtAbGluayBNb2NrQmFja2VuZH0pLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9QOUprazhlOGN6Nk5WemJjeEVzRD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gKlxuICogdmFyIG9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAqICAgYm9keTogJ3tcIm5hbWVcIjpcIkplZmZcIn0nXG4gKiB9KTtcbiAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucyk7XG4gKlxuICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlT3B0aW9ucyB7XG4gIC8vIFRPRE86IEFycmF5QnVmZmVyIHwgRm9ybURhdGEgfCBCbG9iXG4gIC8qKlxuICAgKiBTdHJpbmcgb3IgT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYm9keSBvZiB0aGUge0BsaW5rIFJlc3BvbnNlfS5cbiAgICovXG4gIGJvZHk6IHN0cmluZyB8IE9iamVjdDtcbiAgLyoqXG4gICAqIEh0dHAge0BsaW5rIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMTAuaHRtbCBzdGF0dXMgY29kZX1cbiAgICogYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNwb25zZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogUmVzcG9uc2Uge0BsaW5rIEhlYWRlcnMgaGVhZGVyc31cbiAgICovXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdHlwZTogUmVzcG9uc2VUeXBlO1xuICB1cmw6IHN0cmluZztcbiAgY29uc3RydWN0b3Ioe2JvZHksIHN0YXR1cywgaGVhZGVycywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsfTogUmVzcG9uc2VPcHRpb25zQXJncyA9IHt9KSB7XG4gICAgdGhpcy5ib2R5ID0gaXNQcmVzZW50KGJvZHkpID8gYm9keSA6IG51bGw7XG4gICAgdGhpcy5zdGF0dXMgPSBpc1ByZXNlbnQoc3RhdHVzKSA/IHN0YXR1cyA6IG51bGw7XG4gICAgdGhpcy5oZWFkZXJzID0gaXNQcmVzZW50KGhlYWRlcnMpID8gaGVhZGVycyA6IG51bGw7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gaXNQcmVzZW50KHN0YXR1c1RleHQpID8gc3RhdHVzVGV4dCA6IG51bGw7XG4gICAgdGhpcy50eXBlID0gaXNQcmVzZW50KHR5cGUpID8gdHlwZSA6IG51bGw7XG4gICAgdGhpcy51cmwgPSBpc1ByZXNlbnQodXJsKSA/IHVybCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXNwb25zZU9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvXG4gICAqIG92ZXJyaWRlXG4gICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAqIGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gc2hhcmluZyBhIGJhc2UgYFJlc3BvbnNlT3B0aW9uc2Agb2JqZWN0IGluc2lkZSB0ZXN0cyxcbiAgICogd2hlcmUgY2VydGFpbiBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgZnJvbSB0ZXN0IHRvIHRlc3QuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC8xbFhxdXFGZmdkdVRGQldqTm9SRT9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4gICAqXG4gICAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAqICAgYm9keToge25hbWU6ICdKZWZmJ31cbiAgICogfSk7XG4gICAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucy5tZXJnZSh7XG4gICAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgKiB9KSk7XG4gICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gICAqIGNvbnNvbGUubG9nKCdyZXMudXJsOicsIHJlcy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICogYGBgXG4gICAqL1xuICBtZXJnZShvcHRpb25zPzogUmVzcG9uc2VPcHRpb25zQXJncyk6IFJlc3BvbnNlT3B0aW9ucyB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgYm9keTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLmJvZHkpID8gb3B0aW9ucy5ib2R5IDogdGhpcy5ib2R5LFxuICAgICAgc3RhdHVzOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuc3RhdHVzKSA/IG9wdGlvbnMuc3RhdHVzIDogdGhpcy5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuaGVhZGVycykgPyBvcHRpb25zLmhlYWRlcnMgOiB0aGlzLmhlYWRlcnMsXG4gICAgICBzdGF0dXNUZXh0OiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMuc3RhdHVzVGV4dCkgPyBvcHRpb25zLnN0YXR1c1RleHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgdHlwZTogaXNQcmVzZW50KG9wdGlvbnMpICYmIGlzUHJlc2VudChvcHRpb25zLnR5cGUpID8gb3B0aW9ucy50eXBlIDogdGhpcy50eXBlLFxuICAgICAgdXJsOiBpc1ByZXNlbnQob3B0aW9ucykgJiYgaXNQcmVzZW50KG9wdGlvbnMudXJsKSA/IG9wdGlvbnMudXJsIDogdGhpcy51cmwsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTdWJjbGFzcyBvZiB7QGxpbmsgUmVzcG9uc2VPcHRpb25zfSwgd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBEZWZhdWx0IHZhbHVlczpcbiAqICAqIHN0YXR1czogMjAwXG4gKiAgKiBoZWFkZXJzOiBlbXB0eSB7QGxpbmsgSGVhZGVyc30gb2JqZWN0XG4gKlxuICogVGhpcyBjbGFzcyBjb3VsZCBiZSBleHRlbmRlZCBhbmQgYm91bmQgdG8gdGhlIHtAbGluayBSZXNwb25zZU9wdGlvbnN9IGNsYXNzXG4gKiB3aGVuIGNvbmZpZ3VyaW5nIGFuIHtAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge0BsaW5rIEh0dHB9IHRvIGNyZWF0ZSB7QGxpbmsgUmVzcG9uc2UgUmVzcG9uc2VzfS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvcXY4RExUP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEhlYWRlcnMsIEh0dHAsIEJhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlT3B0aW9uc30gZnJvbVxuICogJ2FuZ3VsYXIyL2h0dHAnO1xuICogaW1wb3J0IHtBcHB9IGZyb20gJy4vbXlhcHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXNwb25zZU9wdGlvbnMge1xuICogICBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7bmV0d29yazogJ2dpdGh1Yid9KTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwLCBbSFRUUF9QUk9WSURFUlMsIHByb3ZpZGUoUmVzcG9uc2VPcHRpb25zLCB7dXNlQ2xhc3M6IE15T3B0aW9uc30pXSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgb3B0aW9ucyBjb3VsZCBhbHNvIGJlIGV4dGVuZGVkIHdoZW4gbWFudWFsbHkgY3JlYXRpbmcgYSB7QGxpbmsgUmVzcG9uc2V9XG4gKiBvYmplY3QuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L1ZuZ29zT1dpYUV4RXRic3REb2l4P3A9cHJldmlldykpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0Jhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBCYXNlUmVzcG9uc2VPcHRpb25zKCk7XG4gKiB2YXIgcmVzID0gbmV3IFJlc3BvbnNlKG9wdGlvbnMubWVyZ2Uoe1xuICogICBib2R5OiAnQW5ndWxhcjInLFxuICogICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ZnJhbWV3b3JrOiAnYW5ndWxhcid9KVxuICogfSkpO1xuICogY29uc29sZS5sb2coJ3Jlcy5oZWFkZXJzLmdldChcImZyYW1ld29ya1wiKTonLCByZXMuaGVhZGVycy5nZXQoJ2ZyYW1ld29yaycpKTsgLy8gYW5ndWxhclxuICogY29uc29sZS5sb2coJ3Jlcy50ZXh0KCk6JywgcmVzLnRleHQoKSk7IC8vIEFuZ3VsYXIyO1xuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2VPcHRpb25zIGV4dGVuZHMgUmVzcG9uc2VPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe3N0YXR1czogMjAwLCBzdGF0dXNUZXh0OiAnT2snLCB0eXBlOiBSZXNwb25zZVR5cGUuRGVmYXVsdCwgaGVhZGVyczogbmV3IEhlYWRlcnMoKX0pO1xuICB9XG59XG4iXX0=

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	/**
	 * A backend for http that uses the `XMLHttpRequest` browser API.
	 *
	 * Take care not to evaluate this in non-browser contexts.
	 */
	var BrowserXhr = (function () {
	    function BrowserXhr() {
	    }
	    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	    BrowserXhr = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserXhr);
	    return BrowserXhr;
	})();
	exports.BrowserXhr = BrowserXhr;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl94aHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvaHR0cC9iYWNrZW5kcy9icm93c2VyX3hoci50cyJdLCJuYW1lcyI6WyJCcm93c2VyWGhyIiwiQnJvd3Nlclhoci5jb25zdHJ1Y3RvciIsIkJyb3dzZXJYaHIuYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qzs7OztHQUlHO0FBQ0g7SUFFRUE7SUFBZUMsQ0FBQ0E7SUFDaEJELDBCQUFLQSxHQUFMQSxjQUFlRSxNQUFNQSxDQUFNQSxDQUFDQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUh0REY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkFJWkE7SUFBREEsaUJBQUNBO0FBQURBLENBQUNBLEFBSkQsSUFJQztBQUhZLGtCQUFVLGFBR3RCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKipcbiAqIEEgYmFja2VuZCBmb3IgaHR0cCB0aGF0IHVzZXMgdGhlIGBYTUxIdHRwUmVxdWVzdGAgYnJvd3NlciBBUEkuXG4gKlxuICogVGFrZSBjYXJlIG5vdCB0byBldmFsdWF0ZSB0aGlzIGluIG5vbi1icm93c2VyIGNvbnRleHRzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlclhociB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgYnVpbGQoKTogYW55IHsgcmV0dXJuIDxhbnk+KG5ldyBYTUxIdHRwUmVxdWVzdCgpKTsgfVxufVxuIl19

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var interfaces_1 = __webpack_require__(266);
	var enums_1 = __webpack_require__(270);
	var static_response_1 = __webpack_require__(274);
	var base_response_options_1 = __webpack_require__(275);
	var core_1 = __webpack_require__(22);
	var browser_jsonp_1 = __webpack_require__(278);
	var exceptions_1 = __webpack_require__(13);
	var lang_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(52);
	var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	/**
	 * Abstract base class for an in-flight JSONP request.
	 */
	var JSONPConnection = (function () {
	    function JSONPConnection() {
	    }
	    return JSONPConnection;
	})();
	exports.JSONPConnection = JSONPConnection;
	var JSONPConnection_ = (function (_super) {
	    __extends(JSONPConnection_, _super);
	    function JSONPConnection_(req, _dom, baseResponseOptions) {
	        var _this = this;
	        _super.call(this);
	        this._dom = _dom;
	        this.baseResponseOptions = baseResponseOptions;
	        this._finished = false;
	        if (req.method !== enums_1.RequestMethod.Get) {
	            throw exceptions_1.makeTypeError(JSONP_ERR_WRONG_METHOD);
	        }
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            _this.readyState = enums_1.ReadyState.Loading;
	            var id = _this._id = _dom.nextRequestID();
	            _dom.exposeConnection(id, _this);
	            // Workaround Dart
	            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	            var callback = _dom.requestCallback(_this._id);
	            var url = req.url;
	            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                url = lang_1.StringWrapper.replace(url, '=JSONP_CALLBACK&', "=" + callback + "&");
	            }
	            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	            }
	            var script = _this._script = _dom.build(url);
	            var onLoad = function (event) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                if (!_this._finished) {
	                    var responseOptions_1 = new base_response_options_1.ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: enums_1.ResponseType.Error, url: url });
	                    if (lang_1.isPresent(baseResponseOptions)) {
	                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                    }
	                    responseObserver.error(new static_response_1.Response(responseOptions_1));
	                    return;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: _this._responseData, url: url });
	                if (lang_1.isPresent(_this.baseResponseOptions)) {
	                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.next(new static_response_1.Response(responseOptions));
	                responseObserver.complete();
	            };
	            var onError = function (error) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: error.message, type: enums_1.ResponseType.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            script.addEventListener('load', onLoad);
	            script.addEventListener('error', onError);
	            _dom.send(script);
	            return function () {
	                _this.readyState = enums_1.ReadyState.Cancelled;
	                script.removeEventListener('load', onLoad);
	                script.removeEventListener('error', onError);
	                if (lang_1.isPresent(script)) {
	                    _this._dom.cleanup(script);
	                }
	            };
	        });
	    }
	    JSONPConnection_.prototype.finished = function (data) {
	        // Don't leak connections
	        this._finished = true;
	        this._dom.removeConnection(this._id);
	        if (this.readyState === enums_1.ReadyState.Cancelled)
	            return;
	        this._responseData = data;
	    };
	    return JSONPConnection_;
	})(JSONPConnection);
	exports.JSONPConnection_ = JSONPConnection_;
	/**
	 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
	 */
	var JSONPBackend = (function (_super) {
	    __extends(JSONPBackend, _super);
	    function JSONPBackend() {
	        _super.apply(this, arguments);
	    }
	    return JSONPBackend;
	})(interfaces_1.ConnectionBackend);
	exports.JSONPBackend = JSONPBackend;
	var JSONPBackend_ = (function (_super) {
	    __extends(JSONPBackend_, _super);
	    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	        _super.call(this);
	        this._browserJSONP = _browserJSONP;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    JSONPBackend_.prototype.createConnection = function (request) {
	        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	    };
	    JSONPBackend_ = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_jsonp_1.BrowserJsonp, base_response_options_1.ResponseOptions])
	    ], JSONPBackend_);
	    return JSONPBackend_;
	})(JSONPBackend);
	exports.JSONPBackend_ = JSONPBackend_;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnBfYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2JhY2tlbmRzL2pzb25wX2JhY2tlbmQudHMiXSwibmFtZXMiOlsiSlNPTlBDb25uZWN0aW9uIiwiSlNPTlBDb25uZWN0aW9uLmNvbnN0cnVjdG9yIiwiSlNPTlBDb25uZWN0aW9uXyIsIkpTT05QQ29ubmVjdGlvbl8uY29uc3RydWN0b3IiLCJKU09OUENvbm5lY3Rpb25fLmZpbmlzaGVkIiwiSlNPTlBCYWNrZW5kIiwiSlNPTlBCYWNrZW5kLmNvbnN0cnVjdG9yIiwiSlNPTlBCYWNrZW5kXyIsIkpTT05QQmFja2VuZF8uY29uc3RydWN0b3IiLCJKU09OUEJhY2tlbmRfLmNyZWF0ZUNvbm5lY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHNCQUFzRCxVQUFVLENBQUMsQ0FBQTtBQUVqRSxnQ0FBdUIsb0JBQW9CLENBQUMsQ0FBQTtBQUM1QyxzQ0FBbUQsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QscUJBQXVDLDBCQUEwQixDQUFDLENBQUE7QUFDbEUsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFHM0MsSUFBTSxxQkFBcUIsR0FBRyxnREFBZ0QsQ0FBQztBQUMvRSxJQUFNLHNCQUFzQixHQUFHLDZDQUE2QyxDQUFDO0FBRTdFOztHQUVHO0FBQ0g7SUFBQUE7SUFxQkFDLENBQUNBO0lBQURELHNCQUFDQTtBQUFEQSxDQUFDQSxBQXJCRCxJQXFCQztBQXJCcUIsdUJBQWUsa0JBcUJwQyxDQUFBO0FBRUQ7SUFBc0NFLG9DQUFlQTtJQU1uREEsMEJBQVlBLEdBQVlBLEVBQVVBLElBQWtCQSxFQUNoQ0EsbUJBQXFDQTtRQVAzREMsaUJBMEZDQTtRQWxGR0EsaUJBQU9BLENBQUNBO1FBRndCQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFjQTtRQUNoQ0Esd0JBQW1CQSxHQUFuQkEsbUJBQW1CQSxDQUFrQkE7UUFIakRBLGNBQVNBLEdBQVlBLEtBQUtBLENBQUNBO1FBS2pDQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxLQUFLQSxxQkFBYUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLE1BQU1BLDBCQUFhQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1FBQzlDQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsdUJBQVVBLENBQUNBLFVBQUNBLGdCQUFvQ0E7WUFFbEVBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGtCQUFVQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNyQ0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7WUFFekNBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBSUEsQ0FBQ0EsQ0FBQ0E7WUFFaENBLGtCQUFrQkE7WUFDbEJBLGlFQUFpRUE7WUFDakVBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzlDQSxJQUFJQSxHQUFHQSxHQUFXQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQTtZQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekNBLEdBQUdBLEdBQUdBLG9CQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxFQUFFQSxrQkFBa0JBLEVBQUVBLE1BQUlBLFFBQVFBLE1BQUdBLENBQUNBLENBQUNBO1lBQ3hFQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxpQkFBaUJBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLGlCQUFpQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hGQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxpQkFBaUJBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE9BQUlBLFFBQVFBLENBQUVBLENBQUNBO1lBQ2pGQSxDQUFDQTtZQUVEQSxJQUFJQSxNQUFNQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUU1Q0EsSUFBSUEsTUFBTUEsR0FBR0EsVUFBQ0EsS0FBWUE7Z0JBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxLQUFLQSxrQkFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQUNBLE1BQU1BLENBQUNBO2dCQUNyREEsS0FBSUEsQ0FBQ0EsVUFBVUEsR0FBR0Esa0JBQVVBLENBQUNBLElBQUlBLENBQUNBO2dCQUNsQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEJBLElBQUlBLGlCQUFlQSxHQUNmQSxJQUFJQSx1Q0FBZUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEscUJBQXFCQSxFQUFFQSxJQUFJQSxFQUFFQSxvQkFBWUEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBQUEsR0FBR0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3RGQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDbkNBLGlCQUFlQSxHQUFHQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLGlCQUFlQSxDQUFDQSxDQUFDQTtvQkFDL0RBLENBQUNBO29CQUNEQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLDBCQUFRQSxDQUFDQSxpQkFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3REQSxNQUFNQSxDQUFDQTtnQkFDVEEsQ0FBQ0E7Z0JBRURBLElBQUlBLGVBQWVBLEdBQUdBLElBQUlBLHVDQUFlQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxLQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxLQUFBQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0VBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxLQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN4Q0EsZUFBZUEsR0FBR0EsS0FBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtnQkFDcEVBLENBQUNBO2dCQUVEQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLDBCQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckRBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7WUFDOUJBLENBQUNBLENBQUNBO1lBRUZBLElBQUlBLE9BQU9BLEdBQUdBLFVBQUNBLEtBQVlBO2dCQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsS0FBS0Esa0JBQVVBLENBQUNBLFNBQVNBLENBQUNBO29CQUFDQSxNQUFNQSxDQUFDQTtnQkFDckRBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLGtCQUFVQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDbENBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyQkEsSUFBSUEsZUFBZUEsR0FBR0EsSUFBSUEsdUNBQWVBLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLG9CQUFZQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0ZBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNuQ0EsZUFBZUEsR0FBR0EsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtnQkFDL0RBLENBQUNBO2dCQUNEQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLDBCQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsQ0FBQ0EsQ0FBQ0E7WUFFRkEsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUN4Q0EsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUUxQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFbEJBLE1BQU1BLENBQUNBO2dCQUNMQSxLQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxrQkFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQ3ZDQSxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMzQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDN0NBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDdEJBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUM1QkEsQ0FBQ0E7WUFFSEEsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREQsbUNBQVFBLEdBQVJBLFVBQVNBLElBQVVBO1FBQ2pCRSx5QkFBeUJBO1FBQ3pCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUN0QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsS0FBS0Esa0JBQVVBLENBQUNBLFNBQVNBLENBQUNBO1lBQUNBLE1BQU1BLENBQUNBO1FBQ3JEQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFDSEYsdUJBQUNBO0FBQURBLENBQUNBLEFBMUZELEVBQXNDLGVBQWUsRUEwRnBEO0FBMUZZLHdCQUFnQixtQkEwRjVCLENBQUE7QUFFRDs7R0FFRztBQUNIO0lBQTJDRyxnQ0FBaUJBO0lBQTVEQTtRQUEyQ0MsOEJBQWlCQTtJQUFFQSxDQUFDQTtJQUFERCxtQkFBQ0E7QUFBREEsQ0FBQ0EsQUFBL0QsRUFBMkMsOEJBQWlCLEVBQUc7QUFBekMsb0JBQVksZUFBNkIsQ0FBQTtBQUUvRDtJQUNtQ0UsaUNBQVlBO0lBQzdDQSx1QkFBb0JBLGFBQTJCQSxFQUFVQSxvQkFBcUNBO1FBQzVGQyxpQkFBT0EsQ0FBQ0E7UUFEVUEsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWNBO1FBQVVBLHlCQUFvQkEsR0FBcEJBLG9CQUFvQkEsQ0FBaUJBO0lBRTlGQSxDQUFDQTtJQUVERCx3Q0FBZ0JBLEdBQWhCQSxVQUFpQkEsT0FBZ0JBO1FBQy9CRSxNQUFNQSxDQUFDQSxJQUFJQSxnQkFBZ0JBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7SUFDdEZBLENBQUNBO0lBUkhGO1FBQUNBLGlCQUFVQSxFQUFFQTs7c0JBU1pBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQVRELEVBQ21DLFlBQVksRUFROUM7QUFSWSxxQkFBYSxnQkFRekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29ubmVjdGlvbkJhY2tlbmQsIENvbm5lY3Rpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZVR5cGV9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSAnLi4vc3RhdGljX3JlcXVlc3QnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi4vc3RhdGljX3Jlc3BvbnNlJztcbmltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBCYXNlUmVzcG9uc2VPcHRpb25zfSBmcm9tICcuLi9iYXNlX3Jlc3BvbnNlX29wdGlvbnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QnJvd3Nlckpzb25wfSBmcm9tICcuL2Jyb3dzZXJfanNvbnAnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtTdHJpbmdXcmFwcGVyLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tICdyeGpzL09ic2VydmVyJztcblxuY29uc3QgSlNPTlBfRVJSX05PX0NBTExCQUNLID0gJ0pTT05QIGluamVjdGVkIHNjcmlwdCBkaWQgbm90IGludm9rZSBjYWxsYmFjay4nO1xuY29uc3QgSlNPTlBfRVJSX1dST05HX01FVEhPRCA9ICdKU09OUCByZXF1ZXN0cyBtdXN0IHVzZSBHRVQgcmVxdWVzdCBtZXRob2QuJztcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciBhbiBpbi1mbGlnaHQgSlNPTlAgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpTT05QQ29ubmVjdGlvbiBpbXBsZW1lbnRzIENvbm5lY3Rpb24ge1xuICAvKipcbiAgICogVGhlIHtAbGluayBSZWFkeVN0YXRlfSBvZiB0aGlzIHJlcXVlc3QuXG4gICAqL1xuICByZWFkeVN0YXRlOiBSZWFkeVN0YXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0Z29pbmcgSFRUUCByZXF1ZXN0LlxuICAgKi9cbiAgcmVxdWVzdDogUmVxdWVzdDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IGNvbXBsZXRlcyB3aXRoIHRoZSByZXNwb25zZSwgd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZC5cbiAgICovXG4gIHJlc3BvbnNlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPjtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIEpTT05QIHJlcXVlc3QgY29tcGxldGVzLCB0byBub3RpZnkgdGhlIGFwcGxpY2F0aW9uXG4gICAqIG9mIHRoZSBuZXcgZGF0YS5cbiAgICovXG4gIGFic3RyYWN0IGZpbmlzaGVkKGRhdGE/OiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgSlNPTlBDb25uZWN0aW9uXyBleHRlbmRzIEpTT05QQ29ubmVjdGlvbiB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NjcmlwdDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfcmVzcG9uc2VEYXRhOiBhbnk7XG4gIHByaXZhdGUgX2ZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocmVxOiBSZXF1ZXN0LCBwcml2YXRlIF9kb206IEJyb3dzZXJKc29ucCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBiYXNlUmVzcG9uc2VPcHRpb25zPzogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gUmVxdWVzdE1ldGhvZC5HZXQpIHtcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoSlNPTlBfRVJSX1dST05HX01FVEhPRCk7XG4gICAgfVxuICAgIHRoaXMucmVxdWVzdCA9IHJlcTtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IE9ic2VydmFibGUoKHJlc3BvbnNlT2JzZXJ2ZXI6IE9ic2VydmVyPFJlc3BvbnNlPikgPT4ge1xuXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkxvYWRpbmc7XG4gICAgICBsZXQgaWQgPSB0aGlzLl9pZCA9IF9kb20ubmV4dFJlcXVlc3RJRCgpO1xuXG4gICAgICBfZG9tLmV4cG9zZUNvbm5lY3Rpb24oaWQsIHRoaXMpO1xuXG4gICAgICAvLyBXb3JrYXJvdW5kIERhcnRcbiAgICAgIC8vIHVybCA9IHVybC5yZXBsYWNlKC89SlNPTlBfQ0FMTEJBQ0soJnwkKS8sIGBnZW5lcmF0ZWQgbWV0aG9kYCk7XG4gICAgICBsZXQgY2FsbGJhY2sgPSBfZG9tLnJlcXVlc3RDYWxsYmFjayh0aGlzLl9pZCk7XG4gICAgICBsZXQgdXJsOiBzdHJpbmcgPSByZXEudXJsO1xuICAgICAgaWYgKHVybC5pbmRleE9mKCc9SlNPTlBfQ0FMTEJBQ0smJykgPiAtMSkge1xuICAgICAgICB1cmwgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2UodXJsLCAnPUpTT05QX0NBTExCQUNLJicsIGA9JHtjYWxsYmFja30mYCk7XG4gICAgICB9IGVsc2UgaWYgKHVybC5sYXN0SW5kZXhPZignPUpTT05QX0NBTExCQUNLJykgPT09IHVybC5sZW5ndGggLSAnPUpTT05QX0NBTExCQUNLJy5sZW5ndGgpIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gJz1KU09OUF9DQUxMQkFDSycubGVuZ3RoKSArIGA9JHtjYWxsYmFja31gO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2NyaXB0ID0gdGhpcy5fc2NyaXB0ID0gX2RvbS5idWlsZCh1cmwpO1xuXG4gICAgICBsZXQgb25Mb2FkID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLkNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkRvbmU7XG4gICAgICAgIF9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlT3B0aW9ucyA9XG4gICAgICAgICAgICAgIG5ldyBSZXNwb25zZU9wdGlvbnMoe2JvZHk6IEpTT05QX0VSUl9OT19DQUxMQkFDSywgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yLCB1cmx9KTtcbiAgICAgICAgICBpZiAoaXNQcmVzZW50KGJhc2VSZXNwb25zZU9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IobmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtib2R5OiB0aGlzLl9yZXNwb25zZURhdGEsIHVybH0pO1xuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSB0aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBvbkVycm9yID0gKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLkNhbmNlbGxlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkRvbmU7XG4gICAgICAgIF9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICBsZXQgcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7Ym9keTogZXJyb3IubWVzc2FnZSwgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yfSk7XG4gICAgICAgIGlmIChpc1ByZXNlbnQoYmFzZVJlc3BvbnNlT3B0aW9ucykpIHtcbiAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcblxuICAgICAgX2RvbS5zZW5kKHNjcmlwdCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuQ2FuY2VsbGVkO1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICBpZiAoaXNQcmVzZW50KHNjcmlwdCkpIHtcbiAgICAgICAgICB0aGlzLl9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmaW5pc2hlZChkYXRhPzogYW55KSB7XG4gICAgLy8gRG9uJ3QgbGVhayBjb25uZWN0aW9uc1xuICAgIHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9kb20ucmVtb3ZlQ29ubmVjdGlvbih0aGlzLl9pZCk7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gUmVhZHlTdGF0ZS5DYW5jZWxsZWQpIHJldHVybjtcbiAgICB0aGlzLl9yZXNwb25zZURhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQSB7QGxpbmsgQ29ubmVjdGlvbkJhY2tlbmR9IHRoYXQgdXNlcyB0aGUgSlNPTlAgc3RyYXRlZ3kgb2YgbWFraW5nIHJlcXVlc3RzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSlNPTlBCYWNrZW5kIGV4dGVuZHMgQ29ubmVjdGlvbkJhY2tlbmQge31cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpTT05QQmFja2VuZF8gZXh0ZW5kcyBKU09OUEJhY2tlbmQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9icm93c2VySlNPTlA6IEJyb3dzZXJKc29ucCwgcHJpdmF0ZSBfYmFzZVJlc3BvbnNlT3B0aW9uczogUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdDogUmVxdWVzdCk6IEpTT05QQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBKU09OUENvbm5lY3Rpb25fKHJlcXVlc3QsIHRoaXMuX2Jyb3dzZXJKU09OUCwgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var lang_1 = __webpack_require__(3);
	var _nextRequestId = 0;
	exports.JSONP_HOME = '__ng_jsonp__';
	var _jsonpConnections = null;
	function _getJsonpConnections() {
	    if (_jsonpConnections === null) {
	        _jsonpConnections = lang_1.global[exports.JSONP_HOME] = {};
	    }
	    return _jsonpConnections;
	}
	// Make sure not to evaluate this in a non-browser environment!
	var BrowserJsonp = (function () {
	    function BrowserJsonp() {
	    }
	    // Construct a <script> element with the specified URL
	    BrowserJsonp.prototype.build = function (url) {
	        var node = document.createElement('script');
	        node.src = url;
	        return node;
	    };
	    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	    BrowserJsonp.prototype.requestCallback = function (id) { return exports.JSONP_HOME + "." + id + ".finished"; };
	    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	        var connections = _getJsonpConnections();
	        connections[id] = connection;
	    };
	    BrowserJsonp.prototype.removeConnection = function (id) {
	        var connections = _getJsonpConnections();
	        connections[id] = null;
	    };
	    // Attach the <script> element to the DOM
	    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
	    // Remove <script> element from the DOM
	    BrowserJsonp.prototype.cleanup = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild((node));
	        }
	    };
	    BrowserJsonp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserJsonp);
	    return BrowserJsonp;
	})();
	exports.BrowserJsonp = BrowserJsonp;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9qc29ucC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2JhY2tlbmRzL2Jyb3dzZXJfanNvbnAudHMiXSwibmFtZXMiOlsiX2dldEpzb25wQ29ubmVjdGlvbnMiLCJCcm93c2VySnNvbnAiLCJCcm93c2VySnNvbnAuY29uc3RydWN0b3IiLCJCcm93c2VySnNvbnAuYnVpbGQiLCJCcm93c2VySnNvbnAubmV4dFJlcXVlc3RJRCIsIkJyb3dzZXJKc29ucC5yZXF1ZXN0Q2FsbGJhY2siLCJCcm93c2VySnNvbnAuZXhwb3NlQ29ubmVjdGlvbiIsIkJyb3dzZXJKc29ucC5yZW1vdmVDb25uZWN0aW9uIiwiQnJvd3Nlckpzb25wLnNlbmQiLCJCcm93c2VySnNvbnAuY2xlYW51cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQiwwQkFBMEIsQ0FBQyxDQUFBO0FBRWhELElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNWLGtCQUFVLEdBQUcsY0FBYyxDQUFDO0FBQ3pDLElBQUksaUJBQWlCLEdBQXlCLElBQUksQ0FBQztBQUVuRDtJQUNFQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBaUJBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQy9CQSxpQkFBaUJBLEdBQTBCQSxhQUFPQSxDQUFDQSxrQkFBVUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDdEVBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0E7QUFDM0JBLENBQUNBO0FBRUQsK0RBQStEO0FBQy9EO0lBQUFDO0lBZ0NBQyxDQUFDQTtJQTlCQ0Qsc0RBQXNEQTtJQUN0REEsNEJBQUtBLEdBQUxBLFVBQU1BLEdBQVdBO1FBQ2ZFLElBQUlBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNmQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQUVERixvQ0FBYUEsR0FBYkEsY0FBMEJHLE1BQU1BLENBQUNBLFVBQVFBLGNBQWNBLEVBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBRTlESCxzQ0FBZUEsR0FBZkEsVUFBZ0JBLEVBQVVBLElBQVlJLE1BQU1BLENBQUlBLGtCQUFVQSxTQUFJQSxFQUFFQSxjQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU5RUosdUNBQWdCQSxHQUFoQkEsVUFBaUJBLEVBQVVBLEVBQUVBLFVBQWVBO1FBQzFDSyxJQUFJQSxXQUFXQSxHQUFHQSxvQkFBb0JBLEVBQUVBLENBQUNBO1FBQ3pDQSxXQUFXQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxVQUFVQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFREwsdUNBQWdCQSxHQUFoQkEsVUFBaUJBLEVBQVVBO1FBQ3pCTSxJQUFJQSxXQUFXQSxHQUFHQSxvQkFBb0JBLEVBQUVBLENBQUNBO1FBQ3pDQSxXQUFXQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFRE4seUNBQXlDQTtJQUN6Q0EsMkJBQUlBLEdBQUpBLFVBQUtBLElBQVNBLElBQUlPLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTVEUCx1Q0FBdUNBO0lBQ3ZDQSw4QkFBT0EsR0FBUEEsVUFBUUEsSUFBU0E7UUFDZlEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVDQSxDQUFDQTtJQUNIQSxDQUFDQTtJQS9CSFI7UUFBQ0EsaUJBQVVBLEVBQUVBOztxQkFnQ1pBO0lBQURBLG1CQUFDQTtBQUFEQSxDQUFDQSxBQWhDRCxJQWdDQztBQS9CWSxvQkFBWSxlQStCeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxubGV0IF9uZXh0UmVxdWVzdElkID0gMDtcbmV4cG9ydCBjb25zdCBKU09OUF9IT01FID0gJ19fbmdfanNvbnBfXyc7XG52YXIgX2pzb25wQ29ubmVjdGlvbnM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbDtcblxuZnVuY3Rpb24gX2dldEpzb25wQ29ubmVjdGlvbnMoKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICBpZiAoX2pzb25wQ29ubmVjdGlvbnMgPT09IG51bGwpIHtcbiAgICBfanNvbnBDb25uZWN0aW9ucyA9ICg8e1trZXk6IHN0cmluZ106IGFueX0+Z2xvYmFsKVtKU09OUF9IT01FXSA9IHt9O1xuICB9XG4gIHJldHVybiBfanNvbnBDb25uZWN0aW9ucztcbn1cblxuLy8gTWFrZSBzdXJlIG5vdCB0byBldmFsdWF0ZSB0aGlzIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQhXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3Nlckpzb25wIHtcbiAgLy8gQ29uc3RydWN0IGEgPHNjcmlwdD4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgVVJMXG4gIGJ1aWxkKHVybDogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUuc3JjID0gdXJsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgbmV4dFJlcXVlc3RJRCgpOiBzdHJpbmcgeyByZXR1cm4gYF9fcmVxJHtfbmV4dFJlcXVlc3RJZCsrfWA7IH1cblxuICByZXF1ZXN0Q2FsbGJhY2soaWQ6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBgJHtKU09OUF9IT01FfS4ke2lkfS5maW5pc2hlZGA7IH1cblxuICBleHBvc2VDb25uZWN0aW9uKGlkOiBzdHJpbmcsIGNvbm5lY3Rpb246IGFueSkge1xuICAgIGxldCBjb25uZWN0aW9ucyA9IF9nZXRKc29ucENvbm5lY3Rpb25zKCk7XG4gICAgY29ubmVjdGlvbnNbaWRdID0gY29ubmVjdGlvbjtcbiAgfVxuXG4gIHJlbW92ZUNvbm5lY3Rpb24oaWQ6IHN0cmluZykge1xuICAgIHZhciBjb25uZWN0aW9ucyA9IF9nZXRKc29ucENvbm5lY3Rpb25zKCk7XG4gICAgY29ubmVjdGlvbnNbaWRdID0gbnVsbDtcbiAgfVxuXG4gIC8vIEF0dGFjaCB0aGUgPHNjcmlwdD4gZWxlbWVudCB0byB0aGUgRE9NXG4gIHNlbmQobm9kZTogYW55KSB7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoPE5vZGU+KG5vZGUpKTsgfVxuXG4gIC8vIFJlbW92ZSA8c2NyaXB0PiBlbGVtZW50IGZyb20gdGhlIERPTVxuICBjbGVhbnVwKG5vZGU6IGFueSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCg8Tm9kZT4obm9kZSkpO1xuICAgIH1cbiAgfVxufVxuIl19

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	var Subject_1 = __webpack_require__(51);
	exports.Subject = Subject_1.Subject;
	/* tslint:enable:no-unused-variable */
	var Observable_1 = __webpack_require__(52);
	exports.Observable = Observable_1.Observable;
	// statics
	/* tslint:disable:no-use-before-declare */
	__webpack_require__(280);
	__webpack_require__(290);
	__webpack_require__(293);
	__webpack_require__(295);
	__webpack_require__(297);
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(307);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(316);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(330);
	__webpack_require__(333);
	__webpack_require__(335);
	__webpack_require__(337);
	__webpack_require__(340);
	//operators
	__webpack_require__(342);
	__webpack_require__(344);
	__webpack_require__(346);
	__webpack_require__(348);
	__webpack_require__(350);
	__webpack_require__(352);
	__webpack_require__(359);
	__webpack_require__(361);
	__webpack_require__(363);
	__webpack_require__(364);
	__webpack_require__(365);
	__webpack_require__(367);
	__webpack_require__(370);
	__webpack_require__(373);
	__webpack_require__(375);
	__webpack_require__(377);
	__webpack_require__(379);
	__webpack_require__(381);
	__webpack_require__(383);
	__webpack_require__(385);
	__webpack_require__(387);
	__webpack_require__(389);
	__webpack_require__(391);
	__webpack_require__(393);
	__webpack_require__(395);
	__webpack_require__(397);
	__webpack_require__(400);
	__webpack_require__(406);
	__webpack_require__(408);
	__webpack_require__(410);
	__webpack_require__(412);
	__webpack_require__(414);
	__webpack_require__(416);
	__webpack_require__(418);
	__webpack_require__(420);
	__webpack_require__(422);
	__webpack_require__(424);
	__webpack_require__(425);
	__webpack_require__(426);
	__webpack_require__(427);
	__webpack_require__(428);
	__webpack_require__(429);
	__webpack_require__(430);
	__webpack_require__(433);
	__webpack_require__(435);
	__webpack_require__(437);
	__webpack_require__(440);
	__webpack_require__(441);
	__webpack_require__(443);
	__webpack_require__(444);
	__webpack_require__(446);
	__webpack_require__(448);
	__webpack_require__(450);
	__webpack_require__(452);
	__webpack_require__(454);
	__webpack_require__(456);
	__webpack_require__(458);
	__webpack_require__(460);
	__webpack_require__(462);
	__webpack_require__(464);
	__webpack_require__(466);
	__webpack_require__(468);
	__webpack_require__(470);
	__webpack_require__(473);
	__webpack_require__(475);
	__webpack_require__(477);
	__webpack_require__(479);
	__webpack_require__(482);
	__webpack_require__(484);
	__webpack_require__(486);
	__webpack_require__(488);
	__webpack_require__(490);
	__webpack_require__(492);
	__webpack_require__(494);
	__webpack_require__(496);
	__webpack_require__(498);
	__webpack_require__(499);
	__webpack_require__(501);
	__webpack_require__(503);
	__webpack_require__(505);
	__webpack_require__(507);
	__webpack_require__(509);
	__webpack_require__(511);
	__webpack_require__(512);
	/* tslint:disable:no-unused-variable */
	var Operator_1 = __webpack_require__(402);
	exports.Operator = Operator_1.Operator;
	var Subscription_1 = __webpack_require__(59);
	exports.Subscription = Subscription_1.Subscription;
	exports.UnsubscriptionError = Subscription_1.UnsubscriptionError;
	var Subscriber_1 = __webpack_require__(57);
	exports.Subscriber = Subscriber_1.Subscriber;
	var AsyncSubject_1 = __webpack_require__(299);
	exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
	var ReplaySubject_1 = __webpack_require__(355);
	exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
	var BehaviorSubject_1 = __webpack_require__(439);
	exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
	var ConnectableObservable_1 = __webpack_require__(358);
	exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
	var Notification_1 = __webpack_require__(312);
	exports.Notification = Notification_1.Notification;
	var EmptyError_1 = __webpack_require__(399);
	exports.EmptyError = EmptyError_1.EmptyError;
	var ArgumentOutOfRangeError_1 = __webpack_require__(481);
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	var ObjectUnsubscribedError_1 = __webpack_require__(68);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
	var asap_1 = __webpack_require__(322);
	var queue_1 = __webpack_require__(356);
	var rxSubscriber_1 = __webpack_require__(64);
	/* tslint:enable:no-unused-variable */
	/* tslint:disable:no-var-keyword */
	var Scheduler = {
	    asap: asap_1.asap,
	    queue: queue_1.queue
	};
	exports.Scheduler = Scheduler;
	var Symbol = {
	    rxSubscriber: rxSubscriber_1.rxSubscriber
	};
	exports.Symbol = Symbol;
	/* tslint:enable:no-var-keyword */
	//# sourceMappingURL=Rx.js.map

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var combineLatest_1 = __webpack_require__(281);
	Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(282);
	var isArray_1 = __webpack_require__(60);
	var isScheduler_1 = __webpack_require__(285);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Combines the values from this observable with values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine the source with
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @returns {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	function combineLatestStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
	}
	exports.combineLatestStatic = combineLatestStatic;
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber) {
	        return new CombineLatestSubscriber(subscriber, this.project);
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	        this.toRespond = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        var toRespond = this.toRespond;
	        toRespond.push(toRespond.length);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	        if (toRespond.length === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var ScalarObservable_1 = __webpack_require__(283);
	var EmptyObservable_1 = __webpack_require__(284);
	var isScheduler_1 = __webpack_require__(285);
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (_a) {
	        var subscriber = _a.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 285 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(53);
	var isArray_1 = __webpack_require__(60);
	var isPromise_1 = __webpack_require__(288);
	var Observable_1 = __webpack_require__(52);
	var SymbolShim_1 = __webpack_require__(55);
	var InnerSubscriber_1 = __webpack_require__(289);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.iterator] === 'function') {
	        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
	            var item = result_1[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.observable] === 'function') {
	        var obs = result[SymbolShim_1.SymbolShim.observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 288 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var concat_1 = __webpack_require__(291);
	Observable_1.Observable.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(285);
	var ArrayObservable_1 = __webpack_require__(282);
	var mergeAll_1 = __webpack_require__(292);
	/**
	 * Joins this observable with multiple other observables by subscribing to them one at a time, starting with the source,
	 * and merging their results into the returned observable. Will wait for each observable to complete before moving
	 * on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/**
	 * Joins multiple observables together by subscribing to them one at a time and merging their results
	 * into the returned observable. Will wait for each observable to complete before moving on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer) {
	        return new MergeAllSubscriber(observer, this.concurrent);
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var merge_1 = __webpack_require__(294);
	Observable_1.Observable.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(282);
	var mergeAll_1 = __webpack_require__(292);
	var isScheduler_1 = __webpack_require__(285);
	/**
	 * Creates a result Observable which emits values from every given input Observable.
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * @param {Observable} input Observables
	 * @returns {Observable} an Observable that emits items that are the result of every input Observable.
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var race_1 = __webpack_require__(296);
	Observable_1.Observable.race = race_1.raceStatic;
	//# sourceMappingURL=race.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(60);
	var ArrayObservable_1 = __webpack_require__(282);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item
	 * from the combination of this Observable and supplied Observables
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @returns {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 */
	function race() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return raceStatic.apply(this, observables);
	}
	exports.race = race;
	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item.
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @returns {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 */
	function raceStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1) {
	        if (isArray_1.isArray(observables[0])) {
	            observables = observables[0];
	        }
	        else {
	            return observables[0];
	        }
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
	}
	exports.raceStatic = raceStatic;
	var RaceOperator = (function () {
	    function RaceOperator() {
	    }
	    RaceOperator.prototype.call = function (subscriber) {
	        return new RaceSubscriber(subscriber);
	    };
	    return RaceOperator;
	}());
	exports.RaceOperator = RaceOperator;
	var RaceSubscriber = (function (_super) {
	    __extends(RaceSubscriber, _super);
	    function RaceSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasFirst = false;
	        this.observables = [];
	        this.subscriptions = [];
	    }
	    RaceSubscriber.prototype._next = function (observable) {
	        this.observables.push(observable);
	    };
	    RaceSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
	                this.subscriptions.push(subscription);
	                this.add(subscription);
	            }
	            this.observables = null;
	        }
	    };
	    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (!this.hasFirst) {
	            this.hasFirst = true;
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                if (i !== outerIndex) {
	                    var subscription = this.subscriptions[i];
	                    subscription.unsubscribe();
	                    this.remove(subscription);
	                }
	            }
	            this.subscriptions = null;
	        }
	        this.destination.next(innerValue);
	    };
	    return RaceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.RaceSubscriber = RaceSubscriber;
	//# sourceMappingURL=race.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var BoundCallbackObservable_1 = __webpack_require__(298);
	Observable_1.Observable.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var AsyncSubject_1 = __webpack_require__(299);
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(_a) {
	    var value = _a.value, subject = _a.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(_a) {
	    var err = _a.err, subject = _a.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.apply(this, arguments);
	        this.value = null;
	        this.hasNext = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.hasCompleted && this.hasNext) {
	            subscriber.next(this.value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype._next = function (value) {
	        this.value = value;
	        this.hasNext = true;
	    };
	    AsyncSubject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.isUnsubscribed = true;
	        if (this.hasNext) {
	            while (++index < len) {
	                var o = observers[index];
	                o.next(this.value);
	                o.complete();
	            }
	        }
	        else {
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    return AsyncSubject;
	}(Subject_1.Subject));
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var BoundNodeCallbackObservable_1 = __webpack_require__(301);
	Observable_1.Observable.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var AsyncSubject_1 = __webpack_require__(299);
	var BoundNodeCallbackObservable = (function (_super) {
	    __extends(BoundNodeCallbackObservable, _super);
	    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    BoundNodeCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    var err = innerArgs.shift();
	                    if (err) {
	                        subject.error(err);
	                    }
	                    else if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundNodeCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            var err = innerArgs.shift();
	            if (err) {
	                subject.error(err);
	            }
	            else if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(_a) {
	    var value = _a.value, subject = _a.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(_a) {
	    var err = _a.err, subject = _a.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var DeferObservable_1 = __webpack_require__(303);
	Observable_1.Observable.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        var result = tryCatch_1.tryCatch(this.observableFactory)();
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(errorObject_1.errorObject.e);
	        }
	        else {
	            result.subscribe(subscriber);
	        }
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var EmptyObservable_1 = __webpack_require__(284);
	Observable_1.Observable.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var ForkJoinObservable_1 = __webpack_require__(306);
	Observable_1.Observable.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var Subscriber_1 = __webpack_require__(57);
	var PromiseObservable_1 = __webpack_require__(69);
	var EmptyObservable_1 = __webpack_require__(284);
	var isPromise_1 = __webpack_require__(288);
	var isArray_1 = __webpack_require__(60);
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        var sources = this.sources;
	        var len = sources.length;
	        var context = { completed: 0, total: len, values: emptyArray(len), selector: this.resultSelector };
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            if (isPromise_1.isPromise(source)) {
	                source = new PromiseObservable_1.PromiseObservable(source);
	            }
	            source.subscribe(new AllSubscriber(subscriber, i, context));
	        }
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	var AllSubscriber = (function (_super) {
	    __extends(AllSubscriber, _super);
	    function AllSubscriber(destination, index, context) {
	        _super.call(this, destination);
	        this.index = index;
	        this.context = context;
	        this._value = null;
	    }
	    AllSubscriber.prototype._next = function (value) {
	        this._value = value;
	    };
	    AllSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this._value == null) {
	            destination.complete();
	        }
	        var context = this.context;
	        context.completed++;
	        context.values[this.index] = this._value;
	        var values = context.values;
	        if (context.completed !== values.length) {
	            return;
	        }
	        if (values.every(hasValue)) {
	            var value = context.selector ? context.selector.apply(this, values) :
	                values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return AllSubscriber;
	}(Subscriber_1.Subscriber));
	function hasValue(x) {
	    return x !== null;
	}
	function emptyArray(len) {
	    var arr = [];
	    for (var i = 0; i < len; i++) {
	        arr.push(null);
	    }
	    return arr;
	}
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var FromObservable_1 = __webpack_require__(308);
	Observable_1.Observable.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(60);
	var isFunction_1 = __webpack_require__(58);
	var isPromise_1 = __webpack_require__(288);
	var isScheduler_1 = __webpack_require__(285);
	var PromiseObservable_1 = __webpack_require__(69);
	var IteratorObservable_1 = __webpack_require__(309);
	var ArrayObservable_1 = __webpack_require__(282);
	var ArrayLikeObservable_1 = __webpack_require__(310);
	var SymbolShim_1 = __webpack_require__(55);
	var Observable_1 = __webpack_require__(52);
	var observeOn_1 = __webpack_require__(311);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[SymbolShim_1.SymbolShim.observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[SymbolShim_1.SymbolShim.iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(53);
	var isObject_1 = __webpack_require__(61);
	var tryCatch_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(52);
	var isFunction_1 = __webpack_require__(58);
	var SymbolShim_1 = __webpack_require__(55);
	var errorObject_1 = __webpack_require__(63);
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[SymbolShim_1.SymbolShim.iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[SymbolShim_1.SymbolShim.iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var ScalarObservable_1 = __webpack_require__(283);
	var EmptyObservable_1 = __webpack_require__(284);
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Notification_1 = __webpack_require__(312);
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber) {
	        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (_a) {
	        var notification = _a.notification, destination = _a.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var ArrayObservable_1 = __webpack_require__(282);
	Observable_1.Observable.fromArray = ArrayObservable_1.ArrayObservable.create;
	Observable_1.Observable.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=fromArray.js.map

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var FromEventObservable_1 = __webpack_require__(315);
	Observable_1.Observable.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var Subscription_1 = __webpack_require__(59);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var FromEventPatternObservable_1 = __webpack_require__(317);
	Observable_1.Observable.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var Subscription_1 = __webpack_require__(59);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	}(Observable_1.Observable));
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var PromiseObservable_1 = __webpack_require__(69);
	Observable_1.Observable.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var IntervalObservable_1 = __webpack_require__(320);
	Observable_1.Observable.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(321);
	var Observable_1 = __webpack_require__(52);
	var asap_1 = __webpack_require__(322);
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	}(Observable_1.Observable));
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(60);
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(323);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(324);
	var QueueScheduler_1 = __webpack_require__(328);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(325);
	var FutureAction_1 = __webpack_require__(327);
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(53);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(326).clearImmediate, __webpack_require__(326).setImmediate))

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(257).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(326).setImmediate, __webpack_require__(326).clearImmediate))

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(53);
	var Subscription_1 = __webpack_require__(59);
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            throw new Error('How did did we execute a canceled Action?');
	        }
	        this.work(this.state);
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        this.delay = delay;
	        this.state = state;
	        var id = this.id;
	        if (id != null) {
	            this.id = undefined;
	            root_1.root.clearTimeout(id);
	        }
	        this.id = root_1.root.setTimeout(function () {
	            _this.id = null;
	            var scheduler = _this.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearTimeout(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(329);
	var FutureAction_1 = __webpack_require__(327);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = [];
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        for (var action = void 0; action = actions.shift();) {
	            action.execute();
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(327);
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var NeverObservable_1 = __webpack_require__(331);
	Observable_1.Observable.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var noop_1 = __webpack_require__(332);
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 332 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var RangeObservable_1 = __webpack_require__(334);
	Observable_1.Observable.range = RangeObservable_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, end, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this.end = end;
	        this.scheduler = scheduler;
	    }
	    RangeObservable.create = function (start, end, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = 0; }
	        return new RangeObservable(start, end, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, end = state.end, subscriber = state.subscriber;
	        if (index >= end) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var end = this.end;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, end: end, start: start, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                if (index++ >= end) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	}(Observable_1.Observable));
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var ErrorObservable_1 = __webpack_require__(336);
	Observable_1.Observable.throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (_a) {
	        var error = _a.error, subscriber = _a.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var TimerObservable_1 = __webpack_require__(338);
	Observable_1.Observable.timer = TimerObservable_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(321);
	var Observable_1 = __webpack_require__(52);
	var asap_1 = __webpack_require__(322);
	var isScheduler_1 = __webpack_require__(285);
	var isDate_1 = __webpack_require__(339);
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = -1;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this.period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = asap_1.asap;
	        }
	        this.scheduler = scheduler;
	        this.dueTime = isDate_1.isDate(dueTime) ?
	            (+dueTime - this.scheduler.now()) :
	            dueTime;
	    }
	    TimerObservable.create = function (dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        return new TimerObservable(dueTime, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (period === -1) {
	            return subscriber.complete();
	        }
	        state.index = index + 1;
	        action.schedule(state, period);
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
	        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	            index: index, period: period, subscriber: subscriber
	        });
	    };
	    return TimerObservable;
	}(Observable_1.Observable));
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 339 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var zip_1 = __webpack_require__(341);
	Observable_1.Observable.zip = zip_1.zipStatic;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(282);
	var isArray_1 = __webpack_require__(60);
	var Subscriber_1 = __webpack_require__(57);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	var SymbolShim_1 = __webpack_require__(55);
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	exports.zipProto = zipProto;
	/* tslint:enable:max-line-length */
	function zipStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
	}
	exports.zipStatic = zipStatic;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber) {
	        return new ZipSubscriber(subscriber, this.project);
	    };
	    return ZipOperator;
	}());
	exports.ZipOperator = ZipOperator;
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray_1.isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[SymbolShim_1.SymbolShim.iterator] === 'function') {
	            iterators.push(new StaticIterator(value[SymbolShim_1.SymbolShim.iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                this.add(iterator.subscribe(iterator, i));
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        if (this.project) {
	            this._tryProject(args);
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    ZipSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return ZipSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	}());
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	}());
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
	    };
	    return ZipBufferIterator;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=zip.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var buffer_1 = __webpack_require__(343);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Buffers the incoming observable values until the passed `closingNotifier`
	 * emits a value, at which point it emits the buffer on the returned observable
	 * and starts a new buffer internally, awaiting the next time `closingNotifier`
	 * emits.
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * @param {Observable<any>} closingNotifier an Observable that signals the
	 * buffer to be emitted} from the returned observable.
	 * @returns {Observable<T[]>} an Observable of buffers, which are arrays of
	 * values.
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber) {
	        return new BufferSubscriber(subscriber, this.closingNotifier);
	    };
	    return BufferOperator;
	}());
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	    };
	    return BufferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var bufferCount_1 = __webpack_require__(345);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Buffers a number of values from the source observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * @param {number} bufferSize the maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] optional interval at which to start a new
	 * buffer. (e.g. if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source.) A new buffer is started at the
	 * beginning of the source by default.
	 * @returns {Observable<T[]>} an Observable of arrays of buffered values.
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber) {
	        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
	    };
	    return BufferCountOperator;
	}());
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    return BufferCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var bufferTime_1 = __webpack_require__(347);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var asap_1 = __webpack_require__(322);
	/**
	 * Buffers values from the source for a specific time period. Optionally allows
	 * new buffers to be set up at an interval.
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * @param {number} bufferTimeSpan the amount of time to fill each buffer for
	 * before emitting them and clearing them.
	 * @param {number} [bufferCreationInterval] the interval at which to start new
	 * buffers.
	 * @param {Scheduler} [scheduler] (optional, defaults to `asap` scheduler) The
	 * scheduler on which to schedule the intervals that determine buffer
	 * boundaries.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
	    if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber) {
	        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
	    };
	    return BufferTimeOperator;
	}());
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	        this.buffers = [];
	        var buffer = this.openBuffer();
	        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
	            var closeState = { subscriber: this, buffer: buffer };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        else {
	            var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
	            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var buffers = this.buffers;
	        var len = buffers.length;
	        for (var i = 0; i < len; i++) {
	            buffers[i].push(value);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.buffers.length = 0;
	        _super.prototype._error.call(this, err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var _a = this, buffers = _a.buffers, destination = _a.destination;
	        while (buffers.length > 0) {
	            destination.next(buffers.shift());
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferTimeSubscriber.prototype._unsubscribe = function () {
	        this.buffers = null;
	    };
	    BufferTimeSubscriber.prototype.openBuffer = function () {
	        var buffer = [];
	        this.buffers.push(buffer);
	        return buffer;
	    };
	    BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
	        this.destination.next(buffer);
	        var buffers = this.buffers;
	        buffers.splice(buffers.indexOf(buffer), 1);
	    };
	    return BufferTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevBuffer = state.buffer;
	    if (prevBuffer) {
	        subscriber.closeBuffer(prevBuffer);
	    }
	    state.buffer = subscriber.openBuffer();
	    if (!subscriber.isUnsubscribed) {
	        this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var buffer = subscriber.openBuffer();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(_a) {
	    var subscriber = _a.subscriber, buffer = _a.buffer;
	    subscriber.closeBuffer(buffer);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var bufferToggle_1 = __webpack_require__(349);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Subscription_1 = __webpack_require__(59);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	/**
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * an Observable returned by the `closingSelector` emits.
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * buffers.
	 * @param {Function} closingSelector a function that takes the value emitted by
	 * the `openings` observable and returns an Observable, which, when it emits,
	 * signals that the associated buffer should be emitted and cleared.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber) {
	        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return BufferToggleOperator;
	}());
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openings.subscribe(new BufferToggleOpeningsSubscriber(this)));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._error.call(this, err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._complete.call(this);
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        var closingSelector = this.closingSelector;
	        var contexts = this.contexts;
	        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(value);
	        if (closingNotifier === errorObject_1.errorObject) {
	            this._error(errorObject_1.errorObject.e);
	        }
	        else {
	            var context = {
	                buffer: [],
	                subscription: new Subscription_1.Subscription()
	            };
	            contexts.push(context);
	            var subscriber = new BufferToggleClosingsSubscriber(this, context);
	            var subscription = closingNotifier.subscribe(subscriber);
	            context.subscription.add(subscription);
	            this.add(subscription);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts === null) {
	            return;
	        }
	        var buffer = context.buffer, subscription = context.subscription;
	        this.destination.next(buffer);
	        contexts.splice(contexts.indexOf(context), 1);
	        this.remove(subscription);
	        subscription.unsubscribe();
	    };
	    return BufferToggleSubscriber;
	}(Subscriber_1.Subscriber));
	var BufferToggleOpeningsSubscriber = (function (_super) {
	    __extends(BufferToggleOpeningsSubscriber, _super);
	    function BufferToggleOpeningsSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    BufferToggleOpeningsSubscriber.prototype._next = function (value) {
	        this.parent.openBuffer(value);
	    };
	    BufferToggleOpeningsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleOpeningsSubscriber.prototype._complete = function () {
	        // noop
	    };
	    return BufferToggleOpeningsSubscriber;
	}(Subscriber_1.Subscriber));
	var BufferToggleClosingsSubscriber = (function (_super) {
	    __extends(BufferToggleClosingsSubscriber, _super);
	    function BufferToggleClosingsSubscriber(parent, context) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.context = context;
	    }
	    BufferToggleClosingsSubscriber.prototype._next = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    BufferToggleClosingsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleClosingsSubscriber.prototype._complete = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    return BufferToggleClosingsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var bufferWhen_1 = __webpack_require__(351);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(59);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` emits a value. It that immediately
	 * opens a new buffer and repeats the process.
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * @param {function} closingSelector a function that takes no arguments and
	 * returns an Observable that signals buffer closure.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber) {
	        return new BufferWhenSubscriber(subscriber, this.closingSelector);
	    };
	    return BufferWhenOperator;
	}());
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.subscribing = false;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferWhenSubscriber.prototype._unsubscribe = function () {
	        this.buffer = null;
	        this.subscribing = false;
	    };
	    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openBuffer();
	    };
	    BufferWhenSubscriber.prototype.notifyComplete = function () {
	        if (this.subscribing) {
	            this.complete();
	        }
	        else {
	            this.openBuffer();
	        }
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var closingSubscription = this.closingSubscription;
	        if (closingSubscription) {
	            this.remove(closingSubscription);
	            closingSubscription.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (this.buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            closingSubscription = new Subscription_1.Subscription();
	            this.closingSubscription = closingSubscription;
	            this.add(closingSubscription);
	            this.subscribing = true;
	            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.subscribing = false;
	        }
	    };
	    return BufferWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var cache_1 = __webpack_require__(353);
	Observable_1.Observable.prototype.cache = cache_1.cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var publishReplay_1 = __webpack_require__(354);
	function cache(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
	}
	exports.cache = cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(355);
	var multicast_1 = __webpack_require__(357);
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var queue_1 = __webpack_require__(356);
	var observeOn_1 = __webpack_require__(311);
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(328);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(358);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @returns {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var Subscriber_1 = __webpack_require__(57);
	var Subscription_1 = __webpack_require__(59);
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var catch_1 = __webpack_require__(360);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber) {
	        return new CatchSubscriber(subscriber, this.selector, this.caught);
	    };
	    return CatchOperator;
	}());
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var combineAll_1 = __webpack_require__(362);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var combineLatest_1 = __webpack_require__(281);
	/**
	 * Takes an Observable of Observables, and collects all observables from it. Once the outer observable
	 * completes, it subscribes to all collected observables and "combines" their values, such that:
	 *  - every time an observable emits, the returned observable emits
	 *  - when the returned observable emits, it emits all of the most recent values by:
	 *    - if a `project` function is provided, it is called with each recent value from each observable in whatever order they arrived,
	 *      and the result of the `project` function is what is emitted by the returned observable
	 *    - if there is no `project` function, an array of all of the most recent values is emitted by the returned observable.
	 * @param {function} [project] an optional function to map the most recent values from each observable into a new result. Takes each of the
	 *   most recent values from each collected observable as arguments, in order.
	 * @returns {Observable} an observable of projected results or arrays of recent values.
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var combineLatest_1 = __webpack_require__(281);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var concat_1 = __webpack_require__(291);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var concatAll_1 = __webpack_require__(366);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(292);
	/**
	 * Joins every Observable emitted by the source (an Observable of Observables), in a serial
	 * fashion. Subscribing to each one only when the previous one has completed, and merging
	 * all of their values into the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and endlessly, and the
	 * Observables it emits generally complete slower than the source emits, you can run into
	 * memory issues as the incoming observables collect in an unbounded buffer.
	 *
	 * @returns {Observable} an observable of values merged from the incoming observables.
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var concatMap_1 = __webpack_require__(368);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(369);
	/**
	 * Maps values from the source observable into new Observables, then merges them in a serialized fashion,
	 * waiting for each one to complete before merging the next.
	 *
	 * __Warning:__ if incoming values arrive endlessly and faster than the observables they're being mapped
	 * to can complete, it will result in memory issues as created observables amass in an unbounded buffer
	 * waiting for their turn to be subscribed to.
	 *
	 * @param {function} project a function to map incoming values into Observables to be concatenated. accepts
	 * the `value` and the `index` as arguments.
	 * @param {function} [resultSelector] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged from the projected Observables as they were subscribed to,
	 * one at a time. Optionally, these values may have been projected from a passed `projectResult` argument.
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(287);
	var OuterSubscriber_1 = __webpack_require__(286);
	/**
	 * Returns an Observable that emits items based on applying a function that you supply to each item emitted by the
	 * source Observable, where that function returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * @param {Function} a function that, when applied to an item emitted by the source Observable, returns an Observable.
	 * @returns {Observable} an Observable that emits the result of applying the transformation function to each item
	 * emitted by the source Observable and merging the results of the Observables obtained from this transformation
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer) {
	        return new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent);
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var concatMapTo_1 = __webpack_require__(371);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMapTo_1 = __webpack_require__(372);
	/**
	 * Maps values from the source to a specific observable, and merges them together in a serialized fashion.
	 *
	 * @param {Observable} observable the observable to map each source value to
	 * @param {function} [resultSelector] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged together by joining the passed observable
	 * with itself, one after the other, for each value emitted from the source.
	 */
	function concatMapTo(observable, resultSelector) {
	    return this.lift(new mergeMapTo_1.MergeMapToOperator(observable, resultSelector, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function mergeMapTo(observable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeMapToOperator(observable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R2>
	//       needs to implement call(observer: Subscriber<R2>): Subscriber<Observable<T>>
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer) {
	        return new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent);
	    };
	    return MergeMapToOperator;
	}());
	exports.MergeMapToOperator = MergeMapToOperator;
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var count_1 = __webpack_require__(374);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an observable of a single number that represents the number of items that either:
	 * Match a provided predicate function, _or_ if a predicate is not provided, the number
	 * represents the total count of all items in the source observable. The count is emitted
	 * by the returned observable when the source observable completes.
	 * @param {function} [predicate] a boolean function to select what values are to be counted.
	 * it is provided with arguments of:
	 *   - `value`: the value from the source observable
	 *   - `index`: the "index" of the value from the source observable
	 *   - `source`: the source observable instance itself.
	 * @returns {Observable} an observable of one number that represents the count as described
	 * above
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber) {
	        return new CountSubscriber(subscriber, this.predicate, this.source);
	    };
	    return CountOperator;
	}());
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        if (this.predicate) {
	            this._tryPredicate(value);
	        }
	        else {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._tryPredicate = function (value) {
	        var result;
	        try {
	            result = this.predicate(value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=count.js.map

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var dematerialize_1 = __webpack_require__(376);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that transforms Notification objects into the items or notifications they represent.
	 * @returns {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber) {
	        return new DeMaterializeSubscriber(subscriber);
	    };
	    return DeMaterializeOperator;
	}());
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var debounce_1 = __webpack_require__(378);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence as long as the `durationSelector` specifies,
	 * and only then emits the latest source item on the result Observable.
	 * @param {function} durationSelector function for computing the timeout duration for each item.
	 * @returns {Observable} an Observable the same as source Observable, but drops items.
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (subscriber) {
	        return new DebounceSubscriber(subscriber, this.durationSelector);
	    };
	    return DebounceOperator;
	}());
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	        this.durationSubscription = null;
	    }
	    DebounceSubscriber.prototype._next = function (value) {
	        try {
	            var result = this.durationSelector.call(this, value);
	            if (result) {
	                this._tryNext(value, result);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.emitValue();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype._tryNext = function (value, duration) {
	        var subscription = this.durationSubscription;
	        this.value = value;
	        this.hasValue = true;
	        if (subscription) {
	            subscription.unsubscribe();
	            this.remove(subscription);
	        }
	        subscription = subscribeToResult_1.subscribeToResult(this, duration);
	        if (!subscription.isUnsubscribed) {
	            this.add(this.durationSubscription = subscription);
	        }
	    };
	    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            var value = this.value;
	            var subscription = this.durationSubscription;
	            if (subscription) {
	                this.durationSubscription = null;
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            this.value = null;
	            this.hasValue = false;
	            _super.prototype._next.call(this, value);
	        }
	    };
	    return DebounceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var debounceTime_1 = __webpack_require__(380);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var asap_1 = __webpack_require__(322);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence for the `dueTime` length, and only then
	 * emits the latest source item on the result Observable.
	 * Optionally takes a scheduler for manging timers.
	 * @param {number} dueTime the timeout value for the window of time required to not drop the item.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @returns {Observable} an Observable the same as source Observable, but drops items.
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber) {
	        return new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler);
	    };
	    return DebounceTimeOperator;
	}());
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var defaultIfEmpty_1 = __webpack_require__(382);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that emits the elements of the source or a specified default value if empty.
	 * @param {any} defaultValue the default value used if source is empty; defaults to null.
	 * @returns {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
	 */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber) {
	        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
	    };
	    return DefaultIfEmptyOperator;
	}());
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var delay_1 = __webpack_require__(384);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(322);
	var isDate_1 = __webpack_require__(339);
	var Subscriber_1 = __webpack_require__(57);
	var Notification_1 = __webpack_require__(312);
	/**
	 * Returns an Observable that delays the emission of items from the source Observable
	 * by a given timeout or until a given Date.
	 * @param {number|Date} delay the timeout value or date until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @returns {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber) {
	        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return DelayOperator;
	}());
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var delayWhen_1 = __webpack_require__(386);
	Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Observable_1 = __webpack_require__(52);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns an Observable that delays the emission of items from the source Observable
	 * by a subscription delay and a delay selector function for each element.
	 * @param {Function} selector function to retrieve a sequence indicating the delay for each given element.
	 * @param {Observable} sequence indicating the delay for the subscription to the source.
	 * @returns {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
	 */
	function delayWhen(delayDurationSelector, subscriptionDelay) {
	    if (subscriptionDelay) {
	        return new SubscriptionDelayObservable(this, subscriptionDelay)
	            .lift(new DelayWhenOperator(delayDurationSelector));
	    }
	    return this.lift(new DelayWhenOperator(delayDurationSelector));
	}
	exports.delayWhen = delayWhen;
	var DelayWhenOperator = (function () {
	    function DelayWhenOperator(delayDurationSelector) {
	        this.delayDurationSelector = delayDurationSelector;
	    }
	    DelayWhenOperator.prototype.call = function (subscriber) {
	        return new DelayWhenSubscriber(subscriber, this.delayDurationSelector);
	    };
	    return DelayWhenOperator;
	}());
	var DelayWhenSubscriber = (function (_super) {
	    __extends(DelayWhenSubscriber, _super);
	    function DelayWhenSubscriber(destination, delayDurationSelector) {
	        _super.call(this, destination);
	        this.delayDurationSelector = delayDurationSelector;
	        this.completed = false;
	        this.delayNotifierSubscriptions = [];
	        this.values = [];
	    }
	    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(outerValue);
	        this.removeSubscription(innerSub);
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
	        var value = this.removeSubscription(innerSub);
	        if (value) {
	            this.destination.next(value);
	        }
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype._next = function (value) {
	        try {
	            var delayNotifier = this.delayDurationSelector(value);
	            if (delayNotifier) {
	                this.tryDelay(delayNotifier, value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DelayWhenSubscriber.prototype._complete = function () {
	        this.completed = true;
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
	        subscription.unsubscribe();
	        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
	        var value = null;
	        if (subscriptionIdx !== -1) {
	            value = this.values[subscriptionIdx];
	            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
	            this.values.splice(subscriptionIdx, 1);
	        }
	        return value;
	    };
	    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
	        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
	        this.add(notifierSubscription);
	        this.delayNotifierSubscriptions.push(notifierSubscription);
	        this.values.push(value);
	    };
	    DelayWhenSubscriber.prototype.tryComplete = function () {
	        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
	            this.destination.complete();
	        }
	    };
	    return DelayWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	var SubscriptionDelayObservable = (function (_super) {
	    __extends(SubscriptionDelayObservable, _super);
	    function SubscriptionDelayObservable(source, subscriptionDelay) {
	        _super.call(this);
	        this.source = source;
	        this.subscriptionDelay = subscriptionDelay;
	    }
	    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
	        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
	    };
	    return SubscriptionDelayObservable;
	}(Observable_1.Observable));
	var SubscriptionDelaySubscriber = (function (_super) {
	    __extends(SubscriptionDelaySubscriber, _super);
	    function SubscriptionDelaySubscriber(parent, source) {
	        _super.call(this);
	        this.parent = parent;
	        this.source = source;
	        this.sourceSubscribed = false;
	    }
	    SubscriptionDelaySubscriber.prototype._next = function (unused) {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype._error = function (err) {
	        this.unsubscribe();
	        this.parent.error(err);
	    };
	    SubscriptionDelaySubscriber.prototype._complete = function () {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
	        if (!this.sourceSubscribed) {
	            this.sourceSubscribed = true;
	            this.unsubscribe();
	            this.source.subscribe(this.parent);
	        }
	    };
	    return SubscriptionDelaySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var distinctUntilChanged_1 = __webpack_require__(388);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber) {
	        return new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector);
	    };
	    return DistinctUntilChangedOperator;
	}());
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var do_1 = __webpack_require__(390);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var noop_1 = __webpack_require__(332);
	/**
	 * Returns a mirrored Observable of the source Observable, but modified so that the provided Observer is called
	 * for every item emitted by the source.
	 * This operator is useful for debugging your observables for the correct values or performing other side effects.
	 * @param {Observer|function} [nextOrObserver] a normal observer callback or callback for onNext.
	 * @param {function} [error] callback for errors in the source.
	 * @param {function} [complete] callback for the completion of the source.
	 * @reurns {Observable} a mirrored Observable with the specified Observer or callback attached for each item.
	 */
	function _do(nextOrObserver, error, complete) {
	    var next;
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        next = nextOrObserver.next;
	        error = nextOrObserver.error;
	        complete = nextOrObserver.complete;
	    }
	    else {
	        next = nextOrObserver;
	    }
	    return this.lift(new DoOperator(next || noop_1.noop, error || noop_1.noop, complete || noop_1.noop));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(next, error, complete) {
	        this.next = next;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber) {
	        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
	    };
	    return DoOperator;
	}());
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, next, error, complete) {
	        _super.call(this, destination);
	        this.__next = next;
	        this.__error = error;
	        this.__complete = complete;
	    }
	    // NOTE: important, all try catch blocks below are there for performance
	    // reasons. tryCatcher approach does not benefit this operator.
	    DoSubscriber.prototype._next = function (value) {
	        try {
	            this.__next(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(value);
	    };
	    DoSubscriber.prototype._error = function (err) {
	        try {
	            this.__error(err);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.error(err);
	    };
	    DoSubscriber.prototype._complete = function () {
	        try {
	            this.__complete();
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.complete();
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var expand_1 = __webpack_require__(392);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
	 * resulting in a new value to then be applied again with the function.
	 * @param {function} project the function for projecting the next emitted item of the Observable.
	 * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
	 * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
	 * @returns {Observable} an Observable containing the expansions of the source Observable.
	 */
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber) {
	        return new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler);
	    };
	    return ExpandOperator;
	}());
	exports.ExpandOperator = ExpandOperator;
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (_a) {
	        var subscriber = _a.subscriber, result = _a.result, value = _a.value, index = _a.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        this.active++;
	        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._next(innerValue);
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return ExpandSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var filter_1 = __webpack_require__(394);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
	 * allowed by a `select` function
	 *
	 * @param {Function} select a function that is used to select the resulting values
	 *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
	 * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
	 * @returns {Observable} an observable of values allowed by the select function
	 */
	function filter(select, thisArg) {
	    return this.lift(new FilterOperator(select, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(select, thisArg) {
	        this.select = select;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber) {
	        return new FilterSubscriber(subscriber, this.select, this.thisArg);
	    };
	    return FilterOperator;
	}());
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, select, thisArg) {
	        _super.call(this, destination);
	        this.select = select;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.select = select;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.select.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var finally_1 = __webpack_require__(396);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Subscription_1 = __webpack_require__(59);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @returns {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber) {
	        return new FinallySubscriber(subscriber, this.finallySelector);
	    };
	    return FinallyOperator;
	}());
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var first_1 = __webpack_require__(398);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var EmptyError_1 = __webpack_require__(399);
	/**
	 * Returns an Observable that emits the first item of the source Observable that matches the specified condition.
	 * Throws an error if matching element is not found.
	 * @param {function} predicate function called with each item to test for condition matching.
	 * @returns {Observable} an Observable of the first item that matches the condition.
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer) {
	        return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return FirstOperator;
	}());
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 399 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var groupBy_1 = __webpack_require__(401);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Subscription_1 = __webpack_require__(59);
	var Observable_1 = __webpack_require__(52);
	var Operator_1 = __webpack_require__(402);
	var Subject_1 = __webpack_require__(51);
	var Map_1 = __webpack_require__(403);
	var FastMap_1 = __webpack_require__(405);
	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one `GroupedObservable` per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {Function} keySelector - a function that extracts the key for each item
	 * @param {Function} elementSelector - a function that extracts the return element for each item
	 * @returns {Observable} an Observable that emits GroupedObservables, each of which corresponds
	 * to a unique key value and each of which emits those items from the source Observable that share
	 * that key value.
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}
	exports.groupBy = groupBy;
	var GroupByOperator = (function (_super) {
	    __extends(GroupByOperator, _super);
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByOperator.prototype.call = function (subscriber) {
	        return new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector);
	    };
	    return GroupByOperator;
	}(Operator_1.Operator));
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.attemptedToUnsubscribe = false;
	        this.count = 0;
	        this.destination = destination;
	        this.add(destination);
	    }
	    GroupBySubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            key = this.keySelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this._group(value, key);
	    };
	    GroupBySubscriber.prototype._group = function (value, key) {
	        var groups = this.groups;
	        if (!groups) {
	            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	        }
	        var group = groups.get(key);
	        if (!group) {
	            groups.set(key, group = new Subject_1.Subject());
	            var groupedObservable = new GroupedObservable(key, group, this);
	            if (this.durationSelector) {
	                this._selectDuration(key, group);
	            }
	            this.destination.next(groupedObservable);
	        }
	        if (this.elementSelector) {
	            this._selectElement(value, group);
	        }
	        else {
	            this.tryGroupNext(value, group);
	        }
	    };
	    GroupBySubscriber.prototype._selectElement = function (value, group) {
	        var result;
	        try {
	            result = this.elementSelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.tryGroupNext(result, group);
	    };
	    GroupBySubscriber.prototype._selectDuration = function (key, group) {
	        var duration;
	        try {
	            duration = this.durationSelector(new GroupedObservable(key, group));
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	    };
	    GroupBySubscriber.prototype.tryGroupNext = function (value, group) {
	        if (!group.isUnsubscribed) {
	            group.next(value);
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	            });
	            groups.clear();
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	            });
	            groups.clear();
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    GroupBySubscriber.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
	            this.attemptedToUnsubscribe = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	            }
	        }
	    };
	    return GroupBySubscriber;
	}(Subscriber_1.Subscriber));
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        this.tryError(err);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype.tryError = function (err) {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.error(err);
	        }
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype.tryComplete = function () {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.complete();
	        }
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	}(Subscriber_1.Subscriber));
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
	        if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(refCountSubscription));
	        }
	        subscription.add(groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	}(Observable_1.Observable));
	exports.GroupedObservable = GroupedObservable;
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        var parent = this.parent;
	        if (!parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            parent.count -= 1;
	            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                parent.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(57);
	var Operator = (function () {
	    function Operator() {
	    }
	    Operator.prototype.call = function (subscriber) {
	        return new Subscriber_1.Subscriber(subscriber);
	    };
	    return Operator;
	}());
	exports.Operator = Operator;
	//# sourceMappingURL=Operator.js.map

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(53);
	var MapPolyfill_1 = __webpack_require__(404);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 404 */
/***/ function(module, exports) {

	"use strict";
	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this.size = 0;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	}());
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 405 */
/***/ function(module, exports) {

	"use strict";
	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	}());
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var ignoreElements_1 = __webpack_require__(407);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var noop_1 = __webpack_require__(332);
	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @returns {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber) {
	        return new IgnoreElementsSubscriber(subscriber);
	    };
	    return IgnoreElementsOperator;
	}());
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
	 * Any manual edits to this file will be lost next time the script is run.
	 **/
	var Observable_1 = __webpack_require__(52);
	var inspect_1 = __webpack_require__(409);
	Observable_1.Observable.prototype.inspect = inspect_1.inspect;
	//# sourceMappingURL=inspect.js.map

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function inspect(durationSelector) {
	    return this.lift(new InspectOperator(durationSelector));
	}
	exports.inspect = inspect;
	var InspectOperator = (function () {
	    function InspectOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    InspectOperator.prototype.call = function (subscriber) {
	        return new InspectSubscriber(subscriber, this.durationSelector);
	    };
	    return InspectOperator;
	}());
	var InspectSubscriber = (function (_super) {
	    __extends(InspectSubscriber, _super);
	    function InspectSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	    }
	    InspectSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	            }
	        }
	    };
	    InspectSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    InspectSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    InspectSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return InspectSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=inspect.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
	 * Any manual edits to this file will be lost next time the script is run.
	 **/
	var Observable_1 = __webpack_require__(52);
	var inspectTime_1 = __webpack_require__(411);
	Observable_1.Observable.prototype.inspectTime = inspectTime_1.inspectTime;
	//# sourceMappingURL=inspectTime.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(322);
	var Subscriber_1 = __webpack_require__(57);
	function inspectTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new InspectTimeOperator(delay, scheduler));
	}
	exports.inspectTime = inspectTime;
	var InspectTimeOperator = (function () {
	    function InspectTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    InspectTimeOperator.prototype.call = function (subscriber) {
	        return new InspectTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return InspectTimeOperator;
	}());
	var InspectTimeSubscriber = (function (_super) {
	    __extends(InspectTimeSubscriber, _super);
	    function InspectTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	    }
	    InspectTimeSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
	        }
	    };
	    InspectTimeSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    return InspectTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=inspectTime.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var every_1 = __webpack_require__(413);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @returns {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 */
	function every(predicate, thisArg) {
	    var source = this;
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer) {
	        return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
	    };
	    return EveryOperator;
	}());
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var last_1 = __webpack_require__(415);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var EmptyError_1 = __webpack_require__(399);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @returns {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer) {
	        return new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return LastOperator;
	}());
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var let_1 = __webpack_require__(417);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 417 */
/***/ function(module, exports) {

	"use strict";
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var map_1 = __webpack_require__(419);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the returned observable
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * @param {Function} project the function to create projection
	 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
	 * @returns {Observable} a observable of projected values
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber) {
	        return new MapSubscriber(subscriber, this.project, this.thisArg);
	    };
	    return MapOperator;
	}());
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var mapTo_1 = __webpack_require__(421);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Maps every value to the same value every time.
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * @param {any} value the value to map each incoming value to
	 * @returns {Observable} an observable of the passed value that emits everytime the source does
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber) {
	        return new MapToSubscriber(subscriber, this.value);
	    };
	    return MapToOperator;
	}());
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var materialize_1 = __webpack_require__(423);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Notification_1 = __webpack_require__(312);
	/**
	 * Returns an Observable that represents all of the emissions and notifications
	 * from the source Observable into emissions marked with their original types
	 * within a `Notification` objects.
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * @scheduler materialize does not operate by default on a particular Scheduler.
	 * @returns {Observable} an Observable that emits items that are the result of
	 * materializing the items and notifications of the source Observable.
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber) {
	        return new MaterializeSubscriber(subscriber);
	    };
	    return MaterializeOperator;
	}());
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var merge_1 = __webpack_require__(294);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var mergeAll_1 = __webpack_require__(292);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var mergeMap_1 = __webpack_require__(369);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var mergeMapTo_1 = __webpack_require__(372);
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var multicast_1 = __webpack_require__(357);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var observeOn_1 = __webpack_require__(311);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var partition_1 = __webpack_require__(431);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var not_1 = __webpack_require__(432);
	var filter_1 = __webpack_require__(394);
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 432 */
/***/ function(module, exports) {

	"use strict";
	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var pluck_1 = __webpack_require__(434);
	Observable_1.Observable.prototype.pluck = pluck_1.pluck;
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(419);
	/**
	 * Retrieves the value of a specified nested property from all elements in
	 * the Observable sequence. If a property can't be resolved, it will return
	 * `undefined` for that value.
	 *
	 * @param {...args} properties the nested properties to pluck
	 * @returns {Observable} Returns a new Observable sequence of property values
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var publish_1 = __webpack_require__(436);
	Observable_1.Observable.prototype.publish = publish_1.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subject_1 = __webpack_require__(51);
	var multicast_1 = __webpack_require__(357);
	/**
	 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
	 * before it begins emitting items to those Observers that have subscribed to it.
	 *
	 * <img src="./img/publish.png" width="100%">
	 *
	 * @returns a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
	 */
	function publish() {
	    return multicast_1.multicast.call(this, new Subject_1.Subject());
	}
	exports.publish = publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var publishBehavior_1 = __webpack_require__(438);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BehaviorSubject_1 = __webpack_require__(439);
	var multicast_1 = __webpack_require__(357);
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var throwError_1 = __webpack_require__(67);
	var ObjectUnsubscribedError_1 = __webpack_require__(68);
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasErrored) {
	            throwError_1.throwError(this.errorValue);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    BehaviorSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var publishReplay_1 = __webpack_require__(354);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var publishLast_1 = __webpack_require__(442);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncSubject_1 = __webpack_require__(299);
	var multicast_1 = __webpack_require__(357);
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var race_1 = __webpack_require__(296);
	Observable_1.Observable.prototype.race = race_1.race;
	//# sourceMappingURL=race.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var reduce_1 = __webpack_require__(445);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
	 * then feeds the result of that function along with the second item emitted by the source Observable into the same
	 * function, and so on until all items have been emitted by the source Observable, and emits the final result from
	 * the final call to your function as its sole item.
	 * This technique, which is called "reduce" here, is sometimes called "aggregate," "fold," "accumulate," "compress," or
	 * "inject" in other programming contexts.
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * @param {initialValue} the initial (seed) accumulator value
	 * @param {accumulator} an accumulator function to be invoked on each item emitted by the source Observable, the
	 * result of which will be used in the next accumulator call.
	 * @returns {Observable} an Observable that emits a single item that is the result of accumulating the output from the
	 * items emitted by the source Observable.
	 */
	function reduce(project, seed) {
	    return this.lift(new ReduceOperator(project, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(project, seed) {
	        this.project = project;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber) {
	        return new ReduceSubscriber(subscriber, this.project, this.seed);
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, project, seed) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.acc = seed;
	        this.project = project;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.project(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var repeat_1 = __webpack_require__(447);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var EmptyObservable_1 = __webpack_require__(284);
	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @returns {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 */
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    }
	    else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber) {
	        return new RepeatSubscriber(subscriber, this.count, this.source);
	    };
	    return RepeatOperator;
	}());
	var RepeatSubscriber = (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RepeatSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.complete.call(this);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RepeatSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var retry_1 = __webpack_require__(449);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @returns {Observable} the source Observable modified with the retry logic.
	 */
	function retry(count) {
	    if (count === void 0) { count = -1; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber) {
	        return new RetrySubscriber(subscriber, this.count, this.source);
	    };
	    return RetryOperator;
	}());
	var RetrySubscriber = (function (_super) {
	    __extends(RetrySubscriber, _super);
	    function RetrySubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RetrySubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.error.call(this, err);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RetrySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=retry.js.map

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var retryWhen_1 = __webpack_require__(451);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @returns {Observable} the source Observable modified with retry logic.
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber) {
	        return new RetryWhenSubscriber(subscriber, this.notifier, this.source);
	    };
	    return RetryWhenOperator;
	}());
	var RetryWhenSubscriber = (function (_super) {
	    __extends(RetryWhenSubscriber, _super);
	    function RetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;
	            if (!retries) {
	                errors = new Subject_1.Subject();
	                retries = tryCatch_1.tryCatch(this.notifier)(errors);
	                if (retries === errorObject_1.errorObject) {
	                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
	                }
	                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
	            }
	            else {
	                this.errors = null;
	                this.retriesSubscription = null;
	            }
	            this.unsubscribe();
	            this.isUnsubscribed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            errors.next(err);
	        }
	    };
	    RetryWhenSubscriber.prototype._unsubscribe = function () {
	        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
	        if (errors) {
	            errors.unsubscribe();
	            this.errors = null;
	        }
	        if (retriesSubscription) {
	            retriesSubscription.unsubscribe();
	            this.retriesSubscription = null;
	        }
	        this.retries = null;
	    };
	    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
	        this.errors = null;
	        this.retries = null;
	        this.retriesSubscription = null;
	        this.unsubscribe();
	        this.isStopped = false;
	        this.isUnsubscribed = false;
	        this.errors = errors;
	        this.retries = retries;
	        this.retriesSubscription = retriesSubscription;
	        this.source.subscribe(this);
	    };
	    return RetryWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var sample_1 = __webpack_require__(453);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns an Observable that, when the specified sampler Observable emits an item or completes, it then emits the most
	 * recently emitted item (if any) emitted by the source Observable since the previous emission from the sampler
	 * Observable.
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * @param {Observable} sampler - the Observable to use for sampling the source Observable.
	 * @returns {Observable<T>} an Observable that emits the results of sampling the items emitted by this Observable
	 * whenever the sampler Observable emits an item or completes.
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber) {
	        return new SampleSubscriber(subscriber, this.notifier);
	    };
	    return SampleOperator;
	}());
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.value);
	        }
	    };
	    return SampleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=sample.js.map

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var sampleTime_1 = __webpack_require__(455);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var asap_1 = __webpack_require__(322);
	function sampleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new SampleTimeOperator(delay, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber) {
	        return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return SampleTimeOperator;
	}());
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, delay = state.delay;
	    subscriber.notifyNext();
	    this.schedule(state, delay);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var scan_1 = __webpack_require__(457);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that applies a specified accumulator function to each item emitted by the source Observable.
	 * If a seed value is specified, then that value will be used as the initial value for the accumulator.
	 * If no seed value is specified, the first item of the source is used as the seed.
	 * @param {function} accumulator The accumulator function called on each item.
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * @param {any} [seed] The initial accumulator value.
	 * @returns {Obervable} An observable of the accumulated values.
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber) {
	        return new ScanSubscriber(subscriber, this.accumulator, this.seed);
	    };
	    return ScanOperator;
	}());
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var share_1 = __webpack_require__(459);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(357);
	var Subject_1 = __webpack_require__(51);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @returns {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var single_1 = __webpack_require__(461);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var EmptyError_1 = __webpack_require__(399);
	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @returns {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber) {
	        return new SingleSubscriber(subscriber, this.predicate, this.source);
	    };
	    return SingleOperator;
	}());
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        this.index++;
	        if (predicate) {
	            this.tryNext(value);
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype.tryNext = function (value) {
	        try {
	            var result = this.predicate(value, this.index, this.source);
	            if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=single.js.map

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var skip_1 = __webpack_require__(463);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @returns {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber) {
	        return new SkipSubscriber(subscriber, this.total);
	    };
	    return SkipOperator;
	}());
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var skipUntil_1 = __webpack_require__(465);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	* Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	*
	* <img src="./img/skipUntil.png" width="100%">
	*
	* @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	* be mirrored by the resulting Observable.
	* @returns {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	* an item, then emits the remaining items.
	*/
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber) {
	        return new SkipUntilSubscriber(subscriber, this.notifier);
	    };
	    return SkipUntilOperator;
	}());
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.isInnerStopped = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.hasValue) {
	            _super.prototype._next.call(this, value);
	        }
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.isInnerStopped) {
	            _super.prototype._complete.call(this);
	        }
	        else {
	            this.unsubscribe();
	        }
	    };
	    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.hasValue = true;
	    };
	    SkipUntilSubscriber.prototype.notifyComplete = function () {
	        this.isInnerStopped = true;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var skipWhile_1 = __webpack_require__(467);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @returns {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber) {
	        return new SkipWhileSubscriber(subscriber, this.predicate);
	    };
	    return SkipWhileOperator;
	}());
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var startWith_1 = __webpack_require__(469);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(282);
	var ScalarObservable_1 = __webpack_require__(283);
	var EmptyObservable_1 = __webpack_require__(284);
	var concat_1 = __webpack_require__(291);
	var isScheduler_1 = __webpack_require__(285);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @returns {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var subscribeOn_1 = __webpack_require__(471);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(472);
	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @returns {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 */
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(52);
	var asap_1 = __webpack_require__(322);
	var isNumeric_1 = __webpack_require__(321);
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (_a) {
	        var source = _a.source, subscriber = _a.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        });
	    };
	    return SubscribeOnObservable;
	}(Observable_1.Observable));
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var switch_1 = __webpack_require__(474);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Converts an Observable that emits Observables into an Observable that emits the items emitted by the most recently
	 * emitted of those Observables.
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * Switch subscribes to an Observable that emits Observables. Each time it observes one of these emitted Observables,
	 * the Observable returned by switchOnNext begins emitting the items emitted by that Observable. When a new Observable
	 * is emitted, switchOnNext stops emitting items from the earlier-emitted Observable and begins emitting items from the
	 * new one.
	 *
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @returns {Observable<T>} an Observable that emits the items emitted by the Observable most recently emitted by the
	 * source Observable.
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber) {
	        return new SwitchSubscriber(subscriber);
	    };
	    return SwitchOperator;
	}());
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switch.js.map

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var switchMap_1 = __webpack_require__(476);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * Returns a new Observable by applying a function that you supply to each item emitted by the source Observable that
	 * returns an Observable, and then emitting the items emitted by the most recently emitted of these Observables.
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * @param {Observable} a function that, when applied to an item emitted by the source Observable, returns an Observable.
	 * @returns {Observable} an Observable that emits the items emitted by the Observable returned from applying func to
	 * the most recently emitted item emitted by the source Observable.
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber) {
	        return new SwitchMapSubscriber(subscriber, this.project, this.resultSelector);
	    };
	    return SwitchMapOperator;
	}());
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var switchMapTo_1 = __webpack_require__(478);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function switchMapTo(observable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(observable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber) {
	        return new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector);
	    };
	    return SwitchMapToOperator;
	}());
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var take_1 = __webpack_require__(480);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var ArgumentOutOfRangeError_1 = __webpack_require__(481);
	var EmptyObservable_1 = __webpack_require__(284);
	function take(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber) {
	        return new TakeSubscriber(subscriber, this.total);
	    };
	    return TakeOperator;
	}());
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 481 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
	 * Any manual edits to this file will be lost next time the script is run.
	 **/
	var Observable_1 = __webpack_require__(52);
	var takeLast_1 = __webpack_require__(483);
	Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var ArgumentOutOfRangeError_1 = __webpack_require__(481);
	var EmptyObservable_1 = __webpack_require__(284);
	function takeLast(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeLastOperator(total));
	    }
	}
	exports.takeLast = takeLast;
	var TakeLastOperator = (function () {
	    function TakeLastOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeLastOperator.prototype.call = function (subscriber) {
	        return new TakeLastSubscriber(subscriber, this.total);
	    };
	    return TakeLastOperator;
	}());
	var TakeLastSubscriber = (function (_super) {
	    __extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	        this.index = 0;
	        this.ring = new Array(total);
	    }
	    TakeLastSubscriber.prototype._next = function (value) {
	        var index = this.index;
	        var ring = this.ring;
	        var total = this.total;
	        var count = this.count;
	        if (total > 1) {
	            if (count < total) {
	                this.count = count + 1;
	                this.index = index + 1;
	            }
	            else if (index === 0) {
	                this.index = ++index;
	            }
	            else if (index < total) {
	                this.index = index + 1;
	            }
	            else {
	                this.index = index = 0;
	            }
	        }
	        else if (count < total) {
	            this.count = total;
	        }
	        ring[index] = value;
	    };
	    TakeLastSubscriber.prototype._complete = function () {
	        var iter = -1;
	        var _a = this, ring = _a.ring, count = _a.count, total = _a.total, destination = _a.destination;
	        var index = (total === 1 || count < total) ? 0 : this.index - 1;
	        while (++iter < count) {
	            if (iter + index === total) {
	                index = total - iter;
	            }
	            destination.next(ring[iter + index]);
	        }
	        destination.complete();
	    };
	    return TakeLastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var takeUntil_1 = __webpack_require__(485);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber) {
	        return new TakeUntilSubscriber(subscriber, this.notifier);
	    };
	    return TakeUntilOperator;
	}());
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var takeWhile_1 = __webpack_require__(487);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber) {
	        return new TakeWhileSubscriber(subscriber, this.predicate);
	    };
	    return TakeWhileOperator;
	}());
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result;
	        try {
	            result = this.predicate(value, this.index++);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        this.nextOrComplete(value, result);
	    };
	    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
	        var destination = this.destination;
	        if (Boolean(predicateResult)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var throttle_1 = __webpack_require__(489);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber) {
	        return new ThrottleSubscriber(subscriber, this.durationSelector);
	    };
	    return ThrottleOperator;
	}());
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.tryDurationSelector(value);
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        var duration = null;
	        try {
	            duration = this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.emitAndThrottle(value, duration);
	    };
	    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
	        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	        this.destination.next(value);
	    };
	    ThrottleSubscriber.prototype._unsubscribe = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._unsubscribe();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this._unsubscribe();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var throttleTime_1 = __webpack_require__(491);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var asap_1 = __webpack_require__(322);
	function throttleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new ThrottleTimeOperator(delay, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber) {
	        return new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return ThrottleTimeOperator;
	}());
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(_a) {
	    var subscriber = _a.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var timeout_1 = __webpack_require__(493);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(322);
	var isDate_1 = __webpack_require__(339);
	var Subscriber_1 = __webpack_require__(57);
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber) {
	        return new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler);
	    };
	    return TimeoutOperator;
	}());
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var timeoutWith_1 = __webpack_require__(495);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(322);
	var isDate_1 = __webpack_require__(339);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber) {
	        return new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler);
	    };
	    return TimeoutWithOperator;
	}());
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var toArray_1 = __webpack_require__(497);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber) {
	        return new ToArraySubscriber(subscriber);
	    };
	    return ToArrayOperator;
	}());
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var toPromise_1 = __webpack_require__(70);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var window_1 = __webpack_require__(500);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function window(closingNotifier) {
	    return this.lift(new WindowOperator(closingNotifier));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingNotifier);
	    };
	    return WindowOperator;
	}());
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingNotifier = closingNotifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow();
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this._complete();
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=window.js.map

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var windowCount_1 = __webpack_require__(502);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Subject_1 = __webpack_require__(51);
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber) {
	        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
	    };
	    return WindowCountOperator;
	}());
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var windowTime_1 = __webpack_require__(504);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(57);
	var Subject_1 = __webpack_require__(51);
	var asap_1 = __webpack_require__(322);
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber) {
	        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
	    };
	    return WindowTimeOperator;
	}());
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            var window_3 = windows[i];
	            if (!window_3.isUnsubscribed) {
	                window_3.next(value);
	            }
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            var window_4 = windows.shift();
	            if (!window_4.isUnsubscribed) {
	                window_4.complete();
	            }
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(_a) {
	    var subscriber = _a.subscriber, window = _a.window, context = _a.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var windowToggle_1 = __webpack_require__(506);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var Subscription_1 = __webpack_require__(59);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber) {
	        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return WindowToggleOperator;
	}());
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        if (contexts) {
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].window.next(value);
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.error(err);
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._error.call(this, err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.complete();
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    WindowToggleSubscriber.prototype._unsubscribe = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.unsubscribe();
	                context.subscription.unsubscribe();
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (outerValue === this.openings) {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
	            if (closingNotifier === errorObject_1.errorObject) {
	                return this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                var window_1 = new Subject_1.Subject();
	                var subscription = new Subscription_1.Subscription();
	                var context = { window: window_1, subscription: subscription };
	                this.contexts.push(context);
	                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	                innerSubscription.context = context;
	                subscription.add(innerSubscription);
	                this.destination.next(window_1);
	            }
	        }
	        else {
	            this.closeWindow(this.contexts.indexOf(outerValue));
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyError = function (err) {
	        this.error(err);
	    };
	    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
	        if (inner !== this.openSubscription) {
	            this.closeWindow(this.contexts.indexOf(inner.context));
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (index) {
	        var contexts = this.contexts;
	        var context = contexts[index];
	        var window = context.window, subscription = context.subscription;
	        contexts.splice(index, 1);
	        window.complete();
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var windowWhen_1 = __webpack_require__(508);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(51);
	var tryCatch_1 = __webpack_require__(62);
	var errorObject_1 = __webpack_require__(63);
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingSelector);
	    };
	    return WindowOperator;
	}());
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
	        if (this.closingNotification) {
	            this.closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function (innerSub) {
	        if (innerSub === void 0) { innerSub = null; }
	        if (innerSub) {
	            this.remove(innerSub);
	            innerSub.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = errorObject_1.errorObject.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var withLatestFrom_1 = __webpack_require__(510);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(286);
	var subscribeToResult_1 = __webpack_require__(287);
	/**
	 * @param {Observable} observables the observables to get the latest values from.
	 * @param {Function} [project] optional projection function for merging values together. Receives all values in order
	 *  of observables passed. (e.g. `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not passed, arrays
	 *  will be returned.
	 * @description merges each value from an observable with the latest values from the other passed observables.
	 * All observables must emit at least one value before the resulting observable will emit
	 *
	 * #### example
	 * ```
	 * A.withLatestFrom(B, C)
	 *
	 *  A:     ----a-----------------b---------------c-----------|
	 *  B:     ---d----------------e--------------f---------|
	 *  C:     --x----------------y-------------z-------------|
	 * result: ---([a,d,x])---------([b,e,y])--------([c,f,z])---|
	 * ```
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber) {
	        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
	    };
	    return WithLatestFromOperator;
	}());
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var zip_1 = __webpack_require__(341);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(52);
	var zipAll_1 = __webpack_require__(513);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(341);
	function zipAll(project) {
	    return this.lift(new zip_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ }
]);
//# sourceMappingURL=vendor.js.map