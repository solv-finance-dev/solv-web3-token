'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Base64 = _interopDefault(require('base-64'));
var ms = _interopDefault(require('ms'));
var isValidDomain = _interopDefault(require('is-valid-domain'));
var parseAsHeaders = _interopDefault(require('parse-headers'));
var ethereumjsUtil = require('ethereumjs-util');
var toHex = _interopDefault(require('to-hex'));

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var timeSpan = function timeSpan(val) {
  var err_str = '"expires_in" argument should be a number of milliseconds or a string representing a timespan eg: "1d", "20h", 60';
  if (typeof val === 'string') {
    var milliseconds = ms(val);
    if (typeof milliseconds === 'undefined') {
      throw new Error(err_str);
    }
    return new Date(Date.now() + milliseconds);
  } else if (typeof val === 'number') {
    return new Date(Date.now() + val);
  } else {
    throw new Error(err_str);
  }
};

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_unused) {
    return false;
  }
}
var sign = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(signer, opts) {
    var params, body, msg, signature, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (opts === void 0) {
              opts = '1d';
            }
            params = typeof opts === 'string' ? {
              expires_in: opts
            } : opts;
            validateParams(params);
            body = processParams(params);
            msg = buildMessage(body);
            _context.next = 7;
            return signer(msg);
          case 7:
            signature = _context.sent;
            if (!(typeof signature !== 'string')) {
              _context.next = 10;
              break;
            }
            throw new Error('"signer" argument should be a function that returns a signature string (Promise<string>)');
          case 10:
            token = Base64.encode(JSON.stringify({
              signature: signature,
              body: msg
            }));
            return _context.abrupt("return", token);
          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function sign(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var isValidString = function isValidString(val) {
  return typeof val === 'string' && !!val.length;
};
var validateParams = function validateParams(params) {
  if (params.domain && (!isValidString(params.domain) || !isValidDomain(params.domain))) {
    throw new Error('Invalid domain format (must be example.com)');
  }
  if (params.uri !== undefined && (!isValidString(params.uri) || !isURL(params.uri))) {
    throw new Error('Invalid uri format (must be https://example.com/login)');
  }
  if (params.chain_id !== undefined && (typeof params.chain_id !== 'number' || isNaN(params.chain_id))) {
    throw new Error('chain_id must be an int');
  }
  if (params.expiration_time && !(params.expiration_time instanceof Date)) {
    throw new Error('expiration_time must be an instance of Date');
  }
  if (params.not_before && !(params.not_before instanceof Date)) {
    throw new Error('not_before must be an instance of Date');
  }
};
var processParams = function processParams(params) {
  var _window, _window$location;
  var body = {};
  body.web3_token_version = '2';
  body.issued_at = new Date();
  if (params.expiration_time) {
    body.expiration_time = new Date(params.expiration_time);
  }
  if (params.expires_in && !params.expiration_time) {
    body.expiration_time = timeSpan(params.expires_in);
  }
  if (!params.expires_in && !params.expiration_time) {
    body.expiration_time = timeSpan('1d');
  }
  if (params.not_before) {
    body.not_before = new Date(params.not_before);
  }
  if (params.chain_id) {
    body.chain_id = parseInt(String(params.chain_id));
  }
  if (!params.uri && typeof window !== 'undefined' && (_window = window) != null && (_window$location = _window.location) != null && _window$location.href) {
    body.uri = window.location.href;
  }
  if (!params.nonce) {
    body.nonce = parseInt(String(Math.random() * 99999999));
  } else {
    body.nonce = params.nonce;
  }
  if (params.domain) {
    body.domain = params.domain;
  }
  if (params.statement) {
    body.statement = params.statement;
  }
  return body;
};
var buildMessage = function buildMessage(params) {
  var message = [];
  if (params.domain) {
    message.push(params.domain + " wants you to sign in with your Ethereum account.");
    message.push('');
  }
  if (params.statement) {
    message.push(params.statement);
    message.push('');
  }
  var param_labels = {
    URI: params.uri,
    'Web3 Token Version': params.web3_token_version,
    'Chain ID': params.chain_id,
    Nonce: params.nonce,
    'Issued At': params.issued_at.toISOString(),
    'Expiration Time': params.expiration_time.toISOString(),
    'Not Before': params.not_before ? params.not_before.toISOString() : undefined,
    'Request ID': params.request_id
  };
  for (var label in param_labels) {
    if (param_labels[label] !== undefined) {
      message.push(label + ": " + param_labels[label]);
    }
  }
  return message.join('\n');
};

var getVersion = function getVersion(body) {
  var _body$match = body.match(/Web3[\s-]+Token[\s-]+Version: \d/),
    str = _body$match[0];
  return Number(str.replace(' ', '').split(':')[1]);
};
var decrypt = function decrypt(token, contractSignerAddress) {
  if (contractSignerAddress === void 0) {
    contractSignerAddress = '';
  }
  if (!token || !token.length) {
    throw new Error('Token required.');
  }
  var address = contractSignerAddress;
  var base64_decoded = Base64.decode(token);
  if (!base64_decoded || !base64_decoded.length) {
    throw new Error('Token malformed (must be base64 encoded)');
  }
  var body, signature;
  try {
    var _JSON$parse = JSON.parse(base64_decoded);
    body = _JSON$parse.body;
    signature = _JSON$parse.signature;
  } catch (error) {
    throw new Error('Token malformed (unparsable JSON)');
  }
  if (!body || !body.length) {
    throw new Error('Token malformed (empty message)');
  }
  if (!ethereumjsUtil.isValidAddress(contractSignerAddress)) {
    if (!signature || !signature.length) {
      throw new Error('Token malformed (empty signature)');
    }
    var msgBuffer = ethereumjsUtil.toBuffer('0x' + toHex(body));
    var msgHash = ethereumjsUtil.hashPersonalMessage(msgBuffer);
    var signatureBuffer = ethereumjsUtil.toBuffer(signature);
    var signatureParams = ethereumjsUtil.fromRpcSig(signatureBuffer);
    var publicKey = ethereumjsUtil.ecrecover(msgHash, signatureParams.v, signatureParams.r, signatureParams.s);
    var addressBuffer = ethereumjsUtil.publicToAddress(publicKey);
    var userAddress = ethereumjsUtil.bufferToHex(addressBuffer).toLowerCase();
    address = userAddress;
  }
  var version = getVersion(body);
  return {
    version: version,
    address: address,
    body: body,
    signature: signature
  };
};

var getDomain = function getDomain(sections) {
  if (/ wants you to sign in with your Ethereum account\.$/.test(sections[0][0])) {
    return sections[0][0].replace(" wants you to sign in with your Ethereum account.", '').trim();
  }
  return undefined;
};
var splitSections = function splitSections(lines) {
  var sections = [[]];
  var section_number = 0;
  for (var _iterator = _createForOfIteratorHelperLoose(lines), _step; !(_step = _iterator()).done;) {
    var line = _step.value;
    sections[section_number].push(line);
    if (line === '') {
      section_number++;
      sections.push([]);
    }
  }
  return sections;
};
var getStatement = function getStatement(sections) {
  if (sections.length === 2) {
    var has_domain = !!getDomain(sections);
    if (!has_domain) {
      return sections[0][0];
    }
  } else if (sections.length === 3) {
    return sections[1][0];
  }
  return undefined;
};
var parseBody = function parseBody(lines) {
  var sections = splitSections(lines);
  var main_section = sections[sections.length - 1].join('\n');
  var parsed_body = parseAsHeaders(main_section);
  for (var key in parsed_body) {
    var new_key = key.replace(/ /g, '-');
    parsed_body[new_key] = parsed_body[key];
    if (new_key !== key) {
      delete parsed_body[key];
    }
  }
  var domain = getDomain(sections);
  var statement = getStatement(sections);
  if (typeof domain !== 'undefined') {
    parsed_body.domain = domain;
  }
  if (typeof statement !== 'undefined') {
    parsed_body.statement = statement;
  }
  if (typeof parsed_body['issued-at'] === 'undefined' || typeof parsed_body['expiration-time'] === 'undefined' || typeof parsed_body['web3-token-version'] === 'undefined') {
    throw new Error('Decrypted body is damaged');
  }
  return parsed_body;
};
var verify = function verify(token, opts) {
  if (opts === void 0) {
    opts = {
      address: ''
    };
  }
  var _decrypt = decrypt(token, opts.address),
    version = _decrypt.version,
    address = _decrypt.address,
    body = _decrypt.body;
  if (version === 1) {
    throw new Error('Tokens version 1 are not supported by the current version of module');
  }
  var lines = body.split('\n');
  var parsed_body = parseBody(lines);
  if (new Date(parsed_body['expiration-time']) < new Date()) {
    throw new Error('Token expired');
  }
  if (parsed_body['not-before'] && new Date(parsed_body['not-before']) > new Date()) {
    throw new Error('It\'s not yet time to use the token');
  }
  if (opts.domain && opts.domain !== parsed_body.domain) {
    throw new Error('Inappropriate token domain');
  }
  return {
    address: address,
    body: parsed_body
  };
};

var SolvWeb3Token = {
  sign: sign,
  verify: verify
};

exports.default = SolvWeb3Token;
exports.sign = sign;
exports.verify = verify;
//# sourceMappingURL=web3-token.cjs.development.js.map
