/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/js/button-brends.js":
/*!*********************************!*\
  !*** ./src/js/button-brends.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.section__content-button-down');
  const mainContent = document.querySelector('.swiper');
  const textButton = document.querySelector('.section__content-button-down_text');
  const svgArrows = document.querySelector('.section__content-button-down-blue');
  let isHidden = true;
  openButton.addEventListener('click', () => {
    if (!isHidden) {
      mainContent.style.height = "164px";
      textButton.textContent = 'Показать все';
      svgArrows.classList.remove('section__content-button-down-blue--hide');
    } else {
      mainContent.style.height = mainContent.scrollHeight + "px";
      textButton.textContent = 'Скрыть';
      svgArrows.classList.add('section__content-button-down-blue--hide');
    }
    isHidden = !isHidden;
  });
});

/***/ }),

/***/ "./src/js/button-main.js":
/*!*******************************!*\
  !*** ./src/js/button-main.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.more-button');
  const mainContent = document.querySelector('.text-all__text');
  const textButton = document.querySelector('.text-all__button-text');
  const svgArrows = document.querySelector('.more-button__down-blue');
  let isHidden = true;
  openButton.addEventListener('click', () => {
    if (!isHidden) {
      mainContent.style.height = "134.5px";
      textButton.textContent = 'Читать далее';
      svgArrows.classList.remove('more-button__down-blue--hide');
    } else {
      mainContent.style.height = mainContent.scrollHeight + "px";
      textButton.textContent = 'Скрыть';
      svgArrows.classList.add('more-button__down-blue--hide');
    }
    isHidden = !isHidden;
  });
});

/***/ }),

/***/ "./src/js/button-repair.js":
/*!*********************************!*\
  !*** ./src/js/button-repair.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.section-repair__content-button-down');
  const mainContent = document.querySelector('.section-repair__swiper');
  const textButton = document.querySelector('.section-repair__content-button-down_text');
  const svgArrows = document.querySelector('.section-repair__content-button-down-blue');
  let isHidden = true;
  openButton.addEventListener('click', () => {
    if (!isHidden) {
      mainContent.style.height = "164px";
      textButton.textContent = 'Показать все';
      svgArrows.classList.remove('section-repair__content-button-down-blue--hide');
    } else {
      mainContent.style.height = mainContent.scrollHeight + "px";
      textButton.textContent = 'Скрыть';
      svgArrows.classList.add('section-repair__content-button-down-blue--hide');
    }
    isHidden = !isHidden;
  });
});

/***/ }),

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

const contentMenu = document.querySelector(".mobile-menu");
const openButtonMenu = document.querySelector(".button-aside--open");
const closeButtonMenu = document.querySelector(".button-aside--close");
const whiteBackground = document.querySelector(".background-white");
function closeMenu() {
  contentMenu.classList.remove("button-aside--open");
  whiteBackground.classList.remove("background-white--active");
}
openButtonMenu.addEventListener("click", function (evt) {
  contentMenu.classList.add("button-aside--open");
  whiteBackground.classList.add("background-white--active");
});
closeButtonMenu.addEventListener("click", function (evt) {
  closeMenu();
});
whiteBackground.addEventListener("click", function (evt) {
  if (contentMenu.classList.contains("button-aside--open")) {
    closeMenu();
  }
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

// call
const contentMenu = document.querySelector(".mobile-menu");
const contentCall = document.querySelector('.modal-call');
const openButtonCall = document.querySelector(".button_call--open");
const closeButtonCall = document.querySelector(".button_call--close");
const whiteBackgroundCall = document.querySelector(".background-white");
openButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.add("button_call--open");
  whiteBackgroundCall.classList.add("background-white--active");
});
closeButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.remove("button_call--open");
  whiteBackgroundCall.classList.remove("background-white--active");
});
const openButtonCallMenu = document.querySelector(".mobile-menu__button--open");
openButtonCallMenu.addEventListener("click", function (evt) {
  contentCall.classList.add("button_call--open");
  whiteBackgroundCall.classList.add("background-white--active");
  contentMenu.classList.remove("button-menu_call--open");
});
closeButtonCall.addEventListener("click", function (evt) {
  contentCall.classList.remove("button_call--open");
  whiteBackgroundCall.classList.remove("background-white--active");
});

// chat
const contentChat = document.querySelector(".modal-chat");
const openButtonChat = document.querySelector(".modal-chat__button--open");
const closeButtonChat = document.querySelector(".modal-chat__button--close");
const whiteBackgroundChat = document.querySelector(".background-white");
openButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.add("modal-chat--open");
  whiteBackgroundChat.classList.add("background-white--active");
});
closeButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.remove("modal-chat--open");
  whiteBackgroundChat.classList.remove("background-white--active");
});
const openButtonChatMenu = document.querySelector(".mobile-menu__button-chat--open");
openButtonChatMenu.addEventListener("click", function (evt) {
  contentChat.classList.add("modal-chat--open");
  whiteBackgroundChat.classList.add("background-white--active");
  contentMenu.classList.remove("mobile-menu__button-chat--open");
});
closeButtonChat.addEventListener("click", function (evt) {
  contentChat.classList.remove("modal-feedback--open");
  whiteBackgroundChat.classList.remove("background-white--active");
});

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ (() => {

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
      if (callback) {
        callback(swiper);
      }
    };
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener('change', checker);
    checker();
  };
  const someFunc = instance => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };
  resizableSwiper("(max-width: 767px)", ".slider1", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.3,
    initialSlide: 0,
    centeredSlidesBounds: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      550: {
        slidesPerView: 2.5
      },
      650: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 4
      }
    }
  });
  resizableSwiper("(max-width: 767px)", ".slider2", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      550: {
        slidesPerView: 2.5
      },
      650: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 4
      }
    }
  });
  resizableSwiper("(max-width: 767px)", ".slider3", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.3,
    initialSlide: 0,
    centeredSlidesBounds: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      550: {
        slidesPerView: 2.5
      },
      650: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 4
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_libs_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./libs/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/libs/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Regular.woff */ "./src/fonts/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Regular.eot */ "./src/fonts/TTLakes-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Medium.woff */ "./src/fonts/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Medium.eot */ "./src/fonts/TTLakes-Medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Bold.woff */ "./src/fonts/TTLakes-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/TTLakes-Bold.eot */ "./src/fonts/TTLakes-Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/more.svg */ "./src/img/more.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_libs_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: "TT Lakes";
  src: local("TT Lakes Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("embedded-opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "TT Lakes";
  src: local("TT Lakes Medium"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("embedded-opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "TT Lakes";
  src: local("TT Lakes Bold"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("embedded-opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
*,
::before,
::after {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: "TT Lakes";
  font-size: 14px;
  list-style-type: none;
  -webkit-text-decoration: none;
  text-decoration: none;
}

body {
  background-color: #F8F8F8;
  color: #1B1C21;
}

@media (min-width: 1440px) {
  .body {
    display: flex;
  }
}

.body-container {
  max-width: 1920px;
}

button {
  cursor: pointer;
  background-color: transparent;
  outline: none;
}
button:hover,
button :focus {
  opacity: 0.6;
  transition: 0.3s ease-in-out;
}

.background-white {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  opacity: 0;
  z-index: -1;
}
.background-white--active {
  opacity: 0.9;
  z-index: 2;
  transition: opacity 0.6s ease-in-out, z-index 0.3s ease-in-out;
}

.mobile-menu {
  position: fixed;
  width: 320px;
  background-color: #FFF;
  transition: left 500ms ease-in-out;
  z-index: 2;
  overflow-y: auto;
  left: -150%;
}
.mobile-menu--open {
  height: 100%;
  left: 0;
}
@media (min-width: 360px) {
  .mobile-menu {
    width: 360px;
  }
}
@media (min-width: 768px) {
  .mobile-menu {
    width: 320px;
  }
}
@media (min-width: 1440px) {
  .mobile-menu {
    display: block;
    position: static;
    box-shadow: none;
    z-index: 1;
    min-width: 320px;
  }
}
.mobile-menu__header-aside {
  width: 100%;
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 1440px) {
  .mobile-menu__header-aside {
    margin-bottom: 37px;
  }
}
@media (max-width: 768px) {
  .mobile-menu__header-aside {
    margin-bottom: 0px;
  }
}
.mobile-menu__header-aside-part-left {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  margin-left: 24px;
}
@media (max-width: 360px) {
  .mobile-menu__header-aside-part-left {
    gap: 24px;
  }
}
.mobile-menu__header-aside-part-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
}
.mobile-menu__navigation-aside {
  padding: 0px 0px;
  margin-bottom: 24px;
}
.mobile-menu__footer-aside {
  margin-left: 24px;
}
@media (min-width: 1120px) {
  .mobile-menu__footer-aside {
    margin-top: 268px;
  }
}
@media (max-width: 768px) {
  .mobile-menu__footer-aside {
    margin-top: 16px;
  }
}

.navigation-aside__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}
.navigation-aside__list-item:focus, .navigation-aside__list-item:hover {
  content: "";
  width: 4px;
  height: 32px;
  background-color: rgb(65, 246, 215);
  border-radius: 0px 10px 10px 0px;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
}
.navigation-aside__link {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  padding: 0 0 0 24px;
}
.navigation-aside__link:focus, .navigation-aside__link:hover {
  color: #7e7e82;
  transition: 0.3s ease-in-out;
}

.footer-aside__contacts {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  padding-bottom: 16px;
}
@media (max-width: 768px) {
  .footer-aside__contacts {
    padding-bottom: 8px;
  }
}
.footer-aside__lang-options {
  display: flex;
  justify-content: flex-start;
  gap: 7px;
  padding: 0;
}
@media (max-width: 1440px) {
  .footer-aside__lang-options {
    padding-top: 40px;
    padding-bottom: 32px;
  }
}
@media (min-width: 768px) {
  .footer-aside__lang-options {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

.link {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.link__email {
  display: block;
  padding-bottom: 12px;
}
.link__email:hover, .link__email:focus {
  color: #7e7e82;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.link__phone {
  display: block;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
}
.link__phone:hover, .link__phone:focus {
  color: #7e7e82;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.button-aside--open {
  height: 100%;
  left: 0;
}

.lang-link_active {
  color: #7e7e82;
}
.lang-link:hover, .lang-link:focus {
  display: block;
  color: #7e7e82;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

@media (min-width: 1440px) {
  .header-aside__button_close {
    display: none;
  }
}

.modal-window {
  position: fixed;
  width: 288px;
  padding: 24px 16px;
  overflow-y: auto;
  height: 100%;
  top: 0;
  right: -150%;
  background-color: #FFF;
  z-index: 3;
  transition: right 0.5s ease-in-out;
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
}
@media (min-width: 1440px) {
  .modal-window {
    width: 520px;
    display: flex;
    justify-content: right;
    padding: 0;
    background-color: rgba(224, 224, 224, 0);
    box-shadow: none;
  }
}
@media (min-width: 1440px) {
  .modal-window__wrapper {
    width: 376px;
    padding: 24px 32px 24px 32px;
    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
    background: #FFF;
    z-index: 3;
  }
}

.modal__title {
  margin: 40px 0 24px 0;
  color: #1B1C21;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
}
.modal__title::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 40px;
  top: 105px;
  left: 0px;
  border-radius: 0 10px 10px 0;
  background-color: rgb(65, 246, 215);
}
@media (min-width: 1440px) {
  .modal__title {
    margin-top: 16px;
  }
  .modal__title::before {
    top: 35px;
    left: 80px;
  }
}
.modal__form {
  display: flex;
  flex-direction: column;
}
.modal__input {
  min-width: 88%;
  height: 22px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #EAEAEA;
  background: #FFF;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.2px;
}
.modal__input:hover, .modal__input:focus {
  border-color: 1px solid #d9fff5;
  outline: 0;
}
.modal__information {
  max-width: 288px;
  margin-bottom: 18px;
  color: #7e7e82;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.modal__link {
  color: #FF3E79;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.modal__button {
  display: flex;
  gap: 10px;
  align-self: flex-end;
  align-items: center;
  min-width: 136px;
  height: 32px;
  padding: 4px 12px 4px 18px;
  background-color: #FF3E79;
  border-radius: 16px;
  color: #FFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
  letter-spacing: -0.15px;
  text-transform: uppercase;
}
.modal__button--close:hover, .modal__button--close:focus {
  opacity: 0.6;
}
@media (min-width: 1440px) {
  .modal__button--close {
    position: absolute;
    left: 3px;
    top: 32.5px;
  }
}

/* ПОЯВЛЕНИЕ МОДАЛКИ -ПОЗВОНИТЬ- ПОСЛЕ НАЖАТИЯ НА КНОПКУ */
.button_call--open {
  right: 0;
}

/* МОДАЛЬНОЕ ОКНО -ОБРАТНАЯ СВЯЗЬ- */
.modal-chat {
  /* ПОЯВЛЕНИЕ МОДАЛКИ ПОСЛЕ НАЖАТИЯ НА КНОПКУ */
}
.modal-chat__messages {
  height: 118px;
}
.modal-chat--open {
  right: 0;
}

.menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #FFF;
  align-items: center;
}
@media (min-width: 1120px) {
  .menu {
    display: none;
  }
}
.menu__center-side {
  margin-right: 20px;
}
.menu__button {
  margin-top: 24px;
  margin-bottom: 24px;
  cursor: pointer;
  background-color: transparent;
}
.menu__left-side {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
}
@media (max-width: 768px) {
  .menu__left-side {
    margin-left: 16px;
  }
}
@media (min-width: 768px) {
  .menu__left-side {
    margin-left: 24px;
  }
}
.menu__center-side {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
}
@media (max-width: 768px) {
  .menu__center-side {
    display: none;
  }
}
@media (min-width: 768px) {
  .menu__center-side {
    display: flex;
    margin-left: auto;
  }
}
.menu__right-side {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
}
@media (max-width: 768px) {
  .menu__right-side {
    margin-right: 16px;
    margin-left: 20px;
  }
}
@media (min-width: 768px) {
  .menu__right-side {
    margin-right: 24px;
  }
}
.menu__line-right {
  height: 32px;
  width: 2px;
  background-color: #EAEAEA;
  margin-top: 28px;
  margin-bottom: 28px;
  border-radius: 1px;
}
@media (min-width: 768px) {
  .menu__logo {
    padding-left: 22px;
  }
  .menu__line-left {
    height: 32px;
    width: 2px;
    background-color: #EAEAEA;
    margin-top: 28px;
    margin-bottom: 28px;
    border-radius: 1px;
  }
}

.right-side__hidden {
  display: none;
}

.button-menu_call--open {
  right: 0;
}

.mobile-menu__button--open {
  right: 0;
}

.title {
  padding-top: 24px;
  padding-bottom: 24px;
}
.title__text {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.title__text-img {
  background-color: rgb(65, 246, 215);
  width: 4px;
  border-radius: 0 4px 4px 0;
  margin-right: 12px;
}
@media (min-width: 768px) {
  .title__text-img {
    margin-right: 24px;
  }
}
@media (min-width: 1120px) {
  .title__text-img {
    margin-right: 32px;
  }
}
.title__text-name {
  width: 288px;
  height: 40px;
  color: #1B1C21;
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.6px;
  margin: 0em 0;
}
@media (min-width: 768px) {
  .title .right-side__hidden {
    display: none;
  }
}
@media (min-width: 1120px) {
  .title .right-side__hidden {
    display: flex;
    align-items: center;
  }
}
@media (min-width: 1120px) {
  .title__right-side {
    margin-right: 32px;
    justify-content: flex-end;
    margin-left: auto;
  }
}

.button_text {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 180px;
  background-position: right 50%;
  color: #1B1C21;
  background-color: #F8F8F8;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  gap: 8px;
}

.navigation {
  padding: 0;
  margin: 0 16px;
}
@media (min-width: 1120px) {
  .navigation {
    overflow: visible;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
}

.nav__list {
  color: #7e7e82;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  overflow-x: scroll;
  padding: 0;
  margin-left: 0px;
}
.nav__list::-webkit-scrollbar {
  display: none;
}
@media (min-width: 1120px) {
  .nav__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
  }
}
.nav__button {
  background: none;
  font-size: 16px;
  padding: 8px 16.67px;
  margin: 0;
  flex-shrink: 0;
  white-space: nowrap;
  color: #7e7e82;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
}
.nav__list-item {
  border: 2px solid transparent;
  white-space: nowrap;
}
.nav__list-item:focus, .nav__list-item:hover {
  background-color: #FFF;
  border-radius: 6px;
  border-color: #B8FFEC;
}
@media (min-width: 768px) {
  .nav__list-item {
    margin-bottom: 0px;
  }
}
@media (min-width: 1120px) {
  .nav__list-item {
    margin-right: auto;
  }
}
@media (min-width: 768px) {
  .nav__list-item_hidden-320 {
    display: none;
  }
}
@media (min-width: 1120px) {
  .nav__list-item_hidden-320 {
    display: block;
  }
}
@media (min-width: 1120px) {
  .nav__list-item_hidden-1120 {
    display: none;
  }
}

.main-discription__text-all {
  margin-left: 16px;
  margin-right: 16px;
}
@media (max-width: 768px) {
  .main-discription__text-all {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
}
@media (min-width: 768px) {
  .main-discription__text-all {
    margin-left: 24px;
    margin-top: 0px;
  }
}
@media (min-width: 1120px) {
  .main-discription__text-all {
    margin-left: 32px;
    margin-right: 0;
    padding: 0;
  }
}
.main-discription__text-all .text-all_more-button {
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.main-discription__text-all .text-all__button-text:hover, .main-discription__text-all .text-all__button-text:focus {
  opacity: 0.6;
}
.main-discription__text-all .text-all__text {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  color: #1B1C21;
  line-height: 20px;
  font-style: normal;
  letter-spacing: 0.2px;
  text-align: left;
  gap: 10px;
}
@media (max-width: 768px) {
  .main-discription__text-all .text-all__text {
    width: 310px;
    height: 100px;
    overflow: hidden;
  }
}
@media (min-width: 768px) {
  .main-discription__text-all .text-all__text {
    width: 90%;
    height: 134.5px;
    transition: height 0.5s ease;
    align-content: space-between;
    overflow: hidden;
  }
}
@media (min-width: 1120px) {
  .main-discription__text-all .text-all__text {
    max-width: 490px;
    overflow: hidden;
  }
}
.main-discription__text-all .text-all__img {
  width: 320px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .img__picture {
    margin: 7.2px 0;
    width: 320px;
  }
}
@media (min-width: 768px) {
  .img__picture {
    width: 360px;
    height: auto;
    border-radius: 10px;
  }
}
@media (min-width: 1120px) {
  .img__picture {
    width: 531px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 30px;
  }
}

@media (min-width: 768px) {
  .main-discription {
    width: 100%;
    min-width: 768px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-top: 32px;
  }
}
@media (min-width: 1120px) {
  .main-discription {
    align-items: start;
    margin-top: 18px;
  }
}

@media (min-width: 768px) {
  .main-discription__img {
    margin: auto;
    margin-right: 24px;
    height: auto;
  }
}

.more-button__down-blue--hide {
  transform: rotate(180deg);
  transition-duration: 0.2s;
}

.section {
  margin-bottom: 24px;
}
.section__content {
  margin-top: 16px;
}
@media (min-width: 1120px) {
  .section__content {
    margin-left: 0px;
  }
}
.section__swiper {
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.section__swiper-slide {
  height: 72px;
  min-width: 220px;
  max-width: 240px;
}
@media (min-width: 768px) {
  .section__swiper-slide {
    min-width: none;
    max-width: none;
    width: calc((100% - 48px) / 3);
    margin: 0;
  }
}
@media (min-width: 1440px) {
  .section__swiper-slide {
    width: calc((100% - 96px) / 4);
  }
}
.section__content-card {
  display: flex;
  justify-content: space-between;
  height: 50%;
  background-color: #FFF;
  border-radius: 6px;
  align-items: center;
  padding: 16px 20px;
  border: 1px solid #EAEAEA;
}
.section__content-button {
  height: 40px;
}
@media (min-width: 768px) {
  .section__button {
    display: flex;
    align-items: center;
    margin: 10px 0 0 24px;
    gap: 9px;
    padding-left: 5px;
  }
}
.section__content-button:focus, .section__content-button:hover {
  opacity: 0.5;
  transition: 0.2s;
}
@media (min-width: 768px) and (min-width: 1120px) {
  .section__content-button-down-blue--hide {
    transform: rotate(180deg);
  }
}
@media (min-width: 768px) {
  .section {
    margin-bottom: 32px;
  }
}
@media (min-width: 1120px) {
  .section {
    margin-bottom: 50px;
  }
}

.section-repair__content {
  margin-bottom: 24px;
  margin-left: 16px;
  margin: 16px;
}
@media (min-width: 768px) {
  .section-repair__content {
    margin-bottom: 32px;
    margin-left: 24px;
  }
}
@media (min-width: 1120px) {
  .section-repair__content {
    margin-left: 32px;
    margin-top: 40px;
  }
}
.section-repair__swiper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
@media (min-width: 768px) {
  .section-repair__swiper {
    transition: height 0.5s ease;
  }
}
@media (min-width: 768px) {
  .section-repair__swiper-wrapper {
    flex-wrap: wrap;
    gap: 16px 24px;
    height: 165px;
  }
}
@media (min-width: 1120px) {
  .section-repair__swiper-wrapper {
    width: 100%;
    height: 165px;
    padding: 0 32px 0 0;
  }
}
.section-repair__swiper-slide {
  margin: 0 16px 0 0;
  flex-shrink: 0;
  min-width: 224px;
  max-width: 240px;
  height: 160px;
}
@media (min-width: 768px) {
  .section-repair__swiper-slide {
    min-width: none;
    max-width: none;
    width: calc((100% - 48px) / 3);
    margin: 0;
  }
}
@media (min-width: 1120px) {
  .section-repair__swiper-slide {
    width: calc((100% - 96px) / 4);
  }
}
.section-repair__content-swiper-pagination {
  position: static;
}
@media (min-width: 768px) {
  .section-repair__content-swiper-pagination {
    display: none;
  }
}
.section-repair__content-card {
  height: 126px;
  display: flex;
  padding: 16px;
  border: 1px solid #EAEAEA;
  justify-content: space-between;
  background-color: #FFF;
  border-radius: 6px;
}
.section-repair__content-button {
  align-self: flex-end;
  height: 40px;
}
.section-repair__content-button:focus, .section-repair__content-button:hover {
  opacity: 0.5;
  transition: 0.2s;
}
.section-repair__content-button-down {
  display: none;
}
@media (min-width: 768px) {
  .section-repair__content-button-down {
    display: flex;
    align-items: center;
    margin: 10px 0 0 24px;
    gap: 9px;
    padding-left: 5px;
    margin-bottom: 32px;
  }
}
.section-repair__content-button-down_text {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
}

.swiper-pagination-bullet {
  background-color: #7e7e82;
  height: 12px;
  width: 12px;
}

.content-card__title {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
  white-space: nowrap;
  height: 126px;
}
@media (min-width: 768px) {
  .content-card__content-button-down__text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 32px;
  }
}
@media (min-width: 768px) and (min-width: 1120px) {
  .content-card__content-button-down__content-button-down-blue--hide {
    transform: rotate(180deg);
  }
}

.section-price {
  margin-bottom: 40px;
}
.section-price__description {
  display: none;
  padding: 0 20px;
  margin-bottom: 16px;
  margin-top: 16px;
  margin-left: 16px;
}
@media (min-width: 768px) {
  .section-price__description {
    display: flex;
    margin-left: 24px;
  }
}
@media (min-width: 1120px) {
  .section-price__description {
    margin-left: 32px;
    padding: 0 10px;
  }
}
.section-price__swiper {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
@media (min-width: 768px) {
  .section-price__swiper {
    height: auto;
    width: 100%;
    margin-bottom: 24px;
  }
}
@media (min-width: 768px) {
  .section-price__swiper-wrapper {
    flex-direction: column;
    padding: 0 24px;
    width: 100%;
    height: 320px;
    gap: 0;
  }
}
.section-price__swiper-slide {
  max-width: 260px;
  min-width: 260px;
  height: 200px;
}
@media (min-width: 768px) {
  .section-price__swiper-slide {
    max-height: 64px;
    width: 98%;
    height: auto;
    max-width: 100%;
  }
}
.section-price__content-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  border-radius: 6px;
  background-color: #FFF;
  height: 165px;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .section-price__content-card {
    align-items: center;
    flex-direction: row;
    height: 32px;
    border-radius: 0;
  }
  .section-price__content-card::after {
    content: "";
    position: absolute;
    bottom: 64px;
    left: 2%;
    width: 96%;
    height: 1px;
    background-color: #EAEAEA;
  }
}
.section-price__block-title {
  margin-bottom: 4px;
  color: #7e7e82;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  opacity: 0.72;
}
@media (min-width: 768px) {
  .section-price__block-title {
    display: none;
  }
}
.section-price__block-text {
  color: #7e7e82;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
}
.section-price__button {
  position: absolute;
  bottom: 20px;
  right: 16px;
  max-width: 120px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 4px 40px 4px 12px;
  background-color: #FF3E79;
  border-radius: 16px;
  color: #FFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
  letter-spacing: -0.15px;
  text-transform: uppercase;
  gap: 10px;
}
.section-price__button:focus, .section-price__button:hover {
  opacity: 0.5;
  transition: 0.2s;
}
@media (min-width: 768px) {
  .section-price__button {
    position: relative;
    bottom: 0;
    right: 0;
  }
}
.section-price__button-svg {
  position: absolute;
  right: 5px;
  min-width: 7px;
  min-height: 9px;
}
@media (min-width: 768px) {
  .section-price__description-text {
    color: text-color-main-grey;
    font-family: TT Lakes;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    opacity: 0.72;
    display: flex;
    white-space: nowrap;
  }
  .section-price__description-text:nth-child(1) {
    margin-right: 38%;
  }
  .section-price__description-text:nth-child(3) {
    margin-left: 12%;
  }
}
@media (min-width: 1120px) {
  .section-price__description-text:nth-child(1) {
    margin-right: 36%;
  }
  .section-price__description-text:nth-child(3) {
    margin-left: 18%;
  }
}
@media (min-width: 768px) {
  .section-price__type-service {
    width: 348px;
  }
}

.swiper-pagination {
  position: static;
}
@media (min-width: 768px) {
  .swiper-pagination {
    display: none;
  }
}

@media (max-width: 768px) {
  .section-information {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 768px) {
  .section-information {
    width: 90%;
    margin: 0 auto;
  }
}
.section-information__text {
  color: #1B1C21;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  max-width: 420px;
  margin-bottom: 18px;
}
.section-information__special {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
}
.section-information__special::after {
  content: "";
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 27px;
}

.section__title {
  display: block;
  margin-left: 16px;
  padding: 16px 0px;
  background: linear-gradient(90deg, #F8F8F8 1.39%, #FFF 100%);
  border-top: 2px solid #B8FFEC;
}
@media (min-width: 767px) {
  .section__title {
    margin-left: 24px;
  }
}
.section__title-text {
  color: #7e7e82;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
}
.section__content-button-down {
  display: flex;
  gap: 9px;
  margin-left: 24px;
  margin-top: 24px;
  padding: 0px;
  background-color: #F8F8F8;
}
@media (max-width: 767px) {
  .section__content-button-down {
    display: none;
  }
}
.section__content-button-down_text {
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
}
@media (min-width: 768px) {
  .section__content-button-down_text__content-swiper-pagination {
    display: none;
  }
}
@media (min-width: 1120px) {
  .section__content-button-down_text__content-swiper-pagination {
    display: none;
  }
}
.section .swiper {
  width: 100%;
}
@media (min-width: 768px) {
  .section .swiper {
    height: 164px;
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
.section .swiper-wrapper {
  padding: 0 16px;
  box-sizing: border-box;
}
@media (min-width: 768px) {
  .section .swiper-wrapper {
    flex-wrap: wrap;
    gap: 16px 24px;
  }
}
@media (min-width: 1120px) {
  .section .swiper-wrapper {
    width: 100%;
    height: 165px;
    padding: 0 32px;
  }
}
.section .swiper-slide {
  flex-shrink: 0;
}
.section .swiper-pagination {
  position: static;
}
@media (min-width: 768px) {
  .section .swiper-pagination {
    display: none;
  }
}
.section .swiper-pagination-bullet {
  background-color: #7e7e82;
  height: 12px;
  width: 12px;
}

footer {
  margin: 0 auto;
}

.footer-wrapper {
  width: 95%;
  margin-bottom: 20px;
  margin-top: 57px;
  margin-left: 16px;
}
@media (min-width: 768px) {
  .footer-wrapper {
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
    gap: 35px;
  }
}
@media (min-width: 1120px) {
  .footer-wrapper {
    padding-top: 80px;
    padding-bottom: 25px;
    margin-left: 32px;
    display: grid;
    grid-template-columns: 218px 214px 213px;
    grid-gap: 46px;
    gap: 46px;
  }
}
.footer-wrapper__copyright {
  margin-top: 16px;
  color: #7e7e82;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
@media (min-width: 768px) {
  .footer-wrapper__copyright:nth-child(1) {
    text-align: left;
    width: 218px;
  }
  .footer-wrapper__copyright:nth-child(3) {
    text-align: right;
    width: 218px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style/fonts.scss","webpack://./src/style/general_style.scss","webpack://./src/style/_var.scss","webpack://./src/style/background-white.scss","webpack://./src/style/aside-menu.scss","webpack://./src/style/modal.scss","webpack://./src/style/header.scss","webpack://./src/style/main-title.scss","webpack://./src/style/main-navigation.scss","webpack://./src/style/main-discription.scss","webpack://./src/style/section-brand.scss","webpack://./src/style/section-repair.scss","webpack://./src/style/section-price.scss","webpack://./src/style/section-information.scss","webpack://./src/style/swiper.scss","webpack://./src/style/footer.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACEhB;EACI,uBAAA;EACA,2JAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADCJ;ACEE;EACE,uBAAA;EACA,0JAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADAJ;ACGE;EACE,uBAAA;EACA,wJAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADDJ;AEtBA;;;EAGI,UAAA;EACA,SAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;EACA,qBAAA;EACA,6BAAA;EAAA,qBAAA;AFwBJ;;AErBA;EACI,yBCbG;EDcH,cCZG;AHoCP;;AErBI;EADJ;IAEQ,aAAA;EFyBN;AACF;;AEtBA;EACI,iBAAA;AFyBJ;;AEvBA;EACI,eAAA;EACA,6BAAA;EACA,aAAA;AF0BJ;AEzBI;;EAEC,YAAA;EACA,4BAAA;AF2BL;;AI3DA;EACI,eAAA;EACA,WAAA;EACA,YAAA;EACA,sBDHO;ECIP,UAAA;EACA,WAAA;AJ8DJ;AI5DI;EACE,YAAA;EACA,UAAA;EACA,8DAAA;AJ8DN;;AKxEA;EACI,eAAA;EACA,YAAA;EACA,sBFHO;EEIP,kCAAA;EACA,UAAA;EACA,gBAAA;EACA,WAAA;AL2EJ;AKzEI;EACI,YAAA;EACA,OAAA;AL2ER;AKzEI;EAbJ;IAcQ,YAAA;EL4EN;AACF;AK1EI;EAjBJ;IAkBQ,YAAA;EL6EN;AACF;AK3EI;EArBJ;IAsBQ,cAAA;IACA,gBAAA;IACA,gBAAA;IACA,UAAA;IACA,gBAAA;EL8EN;AACF;AK5EI;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AL8ER;AK5EQ;EAPJ;IAQQ,mBAAA;EL+EV;AACF;AK9EQ;EAVJ;IAWQ,kBAAA;ELiFV;AACF;AK9EI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,iBAAA;ALgFR;AK/EQ;EANJ;IAOQ,SAAA;ELkFV;AACF;AKhFI;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;ALkFR;AKhFI;EACI,gBAAA;EACA,mBAAA;ALkFR;AKhFI;EACI,iBAAA;ALkFR;AKjFQ;EAFJ;IAGQ,iBAAA;ELoFV;AACF;AKnFQ;EALJ;IAMQ,gBAAA;ELsFV;AACF;;AKhFI;EACI,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,SAAA;ALmFR;AK/EQ;EAEA,WAAA;EACA,UAAA;EACA,YAAA;EACA,mCFpFE;EEqFF,gCAAA;EACA,mBAAA;EACA,4BAAA;ALgFR;AK5EI;EACI,cFjGD;EEkGC,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AL8ER;AK7EQ;EAEE,cFxGI;EEyGJ,4BAAA;AL8EV;;AKtEI;EACI,aAAA;EACA,2BAAA;EACA,SAAA;EACA,oBAAA;ALyER;AKxEQ;EALJ;IAMQ,mBAAA;EL2EV;AACF;AKxEI;EACI,aAAA;EACA,2BAAA;EACA,QAAA;EACA,UAAA;AL0ER;AKzEQ;EALJ;IAMI,iBAAA;IACA,oBAAA;EL4EN;AACF;AK3EQ;EATJ;IAUQ,iBAAA;IACA,oBAAA;EL8EV;AACF;;AK1EA;EACI,cF7IG;EE8IH,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AL6EJ;AK3EI;EACI,cAAA;EACA,oBAAA;AL6ER;AK5EQ;EAEI,cFvJE;EEwJF,4BAAA;EACA,eAAA;AL6EZ;AK1EI;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AL4ER;AK3EQ;EAEI,cFrKE;EEsKF,4BAAA;EACA,eAAA;AL4EZ;;AKxEA;EACI,YAAA;EACA,OAAA;AL2EJ;;AKvEE;EACE,cFlLU;AH4Pd;AKxEI;EAEI,cAAA;EACA,cFvLM;EEwLN,eAAA;EACA,4BAAA;ALyER;;AKpEI;EADF;IAEI,aAAA;ELwEJ;AACF;;AM3QA;EACI,eAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,MAAA;EACA,YAAA;EACA,sBHPO;EGQP,UAAA;EACA,kCAAA;EACA,6FAAA;AN8QJ;AM5QI;EAbJ;IAcM,YAAA;IACA,aAAA;IACA,sBAAA;IACA,UAAA;IACA,wCHTO;IGUP,gBAAA;EN+QJ;AACF;AM5QM;EADF;IAEI,YAAA;IACA,4BAAA;IACA,6FAAA;IACA,gBH1BG;IG2BH,UAAA;EN+QN;AACF;;AM1QI;EACE,qBAAA;EACA,cHlCC;EGmCD,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AN6QN;AM3QM;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;EACA,mCH5CE;AHyTV;AM1QM;EApBF;IAqBI,gBAAA;EN6QN;EM5QM;IACE,SAAA;IACA,UAAA;EN8QR;AACF;AM1QI;EACE,aAAA;EACA,sBAAA;AN4QN;AMzQI;EACE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBHzEK;EG0EL,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AN2QN;AMzQM;EAEE,+BH9EM;EG+EN,UAAA;AN0QR;AMtQI;EACE,gBAAA;EACA,mBAAA;EACA,cHxFQ;EGyFR,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;ANwQN;AMrQI;EACE,cH3FI;EG4FJ,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;ANuQN;AMpQI;EACE,aAAA;EACA,SAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,0BAAA;EACA,yBH1GI;EG2GJ,mBAAA;EACA,WHnHK;EGoHL,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;ANsQN;AM9PQ;EAEE,YAAA;AN+PV;AM5PQ;EANF;IAOI,kBAAA;IACA,SAAA;IACA,WAAA;EN+PR;AACF;;AM1PE,0DAAA;AAEE;EACE,QAAA;AN4PN;;AMxPE,oCAAA;AAEA;EAIE,8CAAA;ANuPJ;AM1PI;EACE,aAAA;AN4PN;AMzPI;EACE,QAAA;AN2PN;;AO1ZA;EACI,aAAA;EACA,iBAAA;EACA,8BAAA;EACA,sBJHO;EIIP,mBAAA;AP6ZJ;AO5ZI;EANJ;IAOQ,aAAA;EP+ZN;AACF;AO7ZI;EACI,kBAAA;AP+ZR;AO5ZI;EACI,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;AP8ZR;AO5ZI;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;AP8ZR;AO7ZQ;EALJ;IAMQ,iBAAA;EPgaV;AACF;AO/ZQ;EARJ;IASQ,iBAAA;EPkaV;AACF;AO/ZI;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;APiaR;AOhaQ;EALJ;IAMQ,aAAA;EPmaV;AACF;AOlaQ;EARJ;IASQ,aAAA;IACA,iBAAA;EPqaV;AACF;AOlaI;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;APoaR;AOnaQ;EALJ;IAMQ,kBAAA;IACA,iBAAA;EPsaV;AACF;AOraQ;EATJ;IAUQ,kBAAA;EPwaV;AACF;AOtaI;EACI,YAAA;EACA,UAAA;EACA,yBJzDD;EI0DC,gBAAA;EACA,mBAAA;EACA,kBAAA;APwaR;AOraI;EAEI;IACI,kBAAA;EPsaV;EOnaM;IACI,YAAA;IACA,UAAA;IACA,yBJxEL;IIyEK,gBAAA;IACA,mBAAA;IACA,kBAAA;EPqaV;AACF;;AOlaA;EACI,aAAA;APqaJ;;AOnaA;EACI,QAAA;APsaJ;;AOlaG;EACC,QAAA;APqaJ;;AQlgBA;EACI,iBAAA;EACA,oBAAA;ARqgBJ;AQngBA;EACI,aAAA;EACA,YAAA;EACA,iBAAA;ARqgBJ;AQjgBA;EACI,mCLNM;EKON,UAAA;EACA,0BAAA;EACA,kBAAA;ARmgBJ;AQlgBI;EALJ;IAMQ,kBAAA;ERqgBN;AACF;AQngBI;EATJ;IAUQ,kBAAA;ERsgBN;AACF;AQlgBA;EACI,YAAA;EACA,YAAA;EACA,cL5BG;EK6BH,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,aAAA;ARogBJ;AQ/fI;EAFJ;IAGY,aAAA;ERkgBV;AACF;AQhgBI;EANJ;IAOQ,aAAA;IACA,mBAAA;ERmgBN;AACF;AQ/fA;EAEI;IACI,kBAAA;IACA,yBAAA;IACA,iBAAA;ERggBN;AACF;;AQ3fI;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,8BAAA;EACA,cLlED;EKmEC,yBLrED;EKsEC,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,QAAA;AR8fR;;ASvkBA;EACI,UAAA;EACA,cAAA;AT0kBJ;ASxkBI;EAJJ;IAKY,iBAAA;IACA,aAAA;IACA,eAAA;IACA,cAAA;ET2kBV;AACF;;ASxkBA;EACI,cNXU;EMYV,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;AT2kBJ;ASzkBI;EACI,aAAA;AT2kBR;ASzkBI;EAjBJ;IAkBQ,aAAA;IACA,8BAAA;IACA,eAAA;IACA,yBAAA;ET4kBN;AACF;ASzkBA;EACI,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,SAAA;EACA,cAAA;EACA,mBAAA;EACA,cN1CU;EM2CV,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AT2kBJ;ASzkBA;EACI,6BAAA;EACA,mBAAA;AT2kBJ;ASzkBI;EAGA,sBN1DO;EM2DP,kBAAA;EACA,qBNzDY;AHkoBhB;ASrkBI;EAbJ;IAcQ,kBAAA;ETwkBN;AACF;ASvkBI;EAhBJ;IAiBQ,kBAAA;ET0kBN;AACF;ASrkBI;EAFJ;IAGQ,aAAA;ETwkBN;AACF;ASvkBI;EALJ;IAMQ,cAAA;ET0kBN;AACF;AStkBI;EAFJ;IAGQ,aAAA;ETykBN;AACF;;AU9pBA;EACQ,iBAAA;EACA,kBAAA;AViqBR;AU/pBQ;EAJR;IAKY,aAAA;IACA,sBAAA;IACA,gBAAA;EVkqBV;AACF;AUhqBQ;EAVR;IAWY,iBAAA;IACA,eAAA;EVmqBV;AACF;AUlqBQ;EAdR;IAeY,iBAAA;IACA,eAAA;IACA,UAAA;EVqqBV;AACF;AUlqBQ;EACI,aAAA;EACA,2BAAA;EACA,gBAAA;EACA,cPxBL;EOyBK,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AVoqBZ;AUjqBY;EAEA,YAAA;AVkqBZ;AU9pBQ;EACQ,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,cPzCT;EO0CS,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,SAAA;AVgqBhB;AU9pBgB;EAXR;IAYY,YAAA;IACA,aAAA;IACA,gBAAA;EViqBlB;AACF;AU/pBgB;EAjBR;IAkBY,UAAA;IACA,eAAA;IACA,4BAAA;IACA,4BAAA;IACA,gBAAA;EVkqBlB;AACF;AUjqBgB;EAxBR;IAyBQ,gBAAA;IACA,gBAAA;EVoqBd;AACF;AUlqBY;EACI,YAAA;EACA,gBAAA;AVoqBhB;;AU9pBI;EADJ;IAEI,eAAA;IACA,YAAA;EVkqBF;AACF;AUjqBI;EALJ;IAMQ,YAAA;IACA,YAAA;IACA,mBAAA;EVoqBN;AACF;AUnqBI;EAVJ;IAWQ,YAAA;IACA,YAAA;IACA,mBAAA;IACA,mBAAA;EVsqBN;AACF;;AUjqBQ;EADR;IAEQ,WAAA;IACA,gBAAA;IACA,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,iBAAA;IACA,uBAAA;IACA,gBAAA;EVqqBN;AACF;AUpqBQ;EAXR;IAYQ,kBAAA;IACA,gBAAA;EVuqBN;AACF;;AUnqBI;EADJ;IAEY,YAAA;IACA,kBAAA;IACA,YAAA;EVuqBV;AACF;;AUnqBI;EACI,yBAAA;EACA,yBAAA;AVsqBR;;AWhyBA;EAsEE,mBAAA;AX8tBF;AWnyBE;EACE,gBAAA;AXqyBJ;AWpyBI;EAFF;IAGE,gBAAA;EXuyBF;AACF;AWpyBE;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AXsyBJ;AWpyBE;EACE,YAAA;EACA,gBAAA;EACA,gBAAA;AXsyBJ;AWpyBI;EALF;IAMI,eAAA;IACA,eAAA;IACA,8BAAA;IACA,SAAA;EXuyBJ;AACF;AWryBI;EAZF;IAaI,8BAAA;EXwyBJ;AACF;AWryBE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,sBRnCO;EQoCP,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;AXuyBJ;AWpyBE;EACE,YAAA;AXsyBJ;AWjyBI;EAFF;IAGI,aAAA;IACA,mBAAA;IACA,qBAAA;IACA,QAAA;IACA,iBAAA;EXoyBJ;AACF;AWhyBI;EAEE,YAAA;EACA,gBAAA;AXiyBN;AW7xBI;EADF;IAEE,yBAAA;EXgyBF;AACF;AW5xBE;EAxEF;IAyEM,mBAAA;EX+xBJ;AACF;AW7xBE;EA5EF;IA6EM,mBAAA;EXgyBJ;AACF;;AY72BE;EACE,mBAAA;EACA,iBAAA;EACA,YAAA;AZg3BJ;AY92BI;EALF;IAMI,mBAAA;IACA,iBAAA;EZi3BJ;AACF;AYh3BI;EATF;IAUI,iBAAA;IACA,gBAAA;EZm3BJ;AACF;AYj3BI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AZm3BN;AYj3BM;EANF;IAOI,4BAAA;EZo3BN;AACF;AYj3BQ;EADJ;IAEM,eAAA;IACA,cAAA;IACA,aAAA;EZo3BR;AACF;AYn3BQ;EANJ;IAOM,WAAA;IACA,aAAA;IACA,mBAAA;EZs3BR;AACF;AYn3BI;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;AZq3BN;AYl3BM;EARF;IASI,eAAA;IACA,eAAA;IACA,8BAAA;IACA,SAAA;EZq3BN;AACF;AYn3BM;EAfF;IAgBI,8BAAA;EZs3BN;AACF;AYp3BI;EACE,gBAAA;AZs3BN;AYp3BM;EAHF;IAII,aAAA;EZu3BN;AACF;AYp3BI;EACE,aAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;EACA,sBTtEK;ESuEL,kBAAA;AZs3BN;AYn3BI;EACE,oBAAA;EACA,YAAA;AZq3BN;AYn3BM;EAEE,YAAA;EACA,gBAAA;AZo3BR;AYh3BI;EACE,aAAA;AZk3BN;AY/2BM;EAJF;IAKI,aAAA;IACA,mBAAA;IACA,qBAAA;IACA,QAAA;IACA,iBAAA;IACA,mBAAA;EZk3BN;AACF;AYh3BI;EACE,cTlGC;ESmGD,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AZk3BN;;AY92BA;EACE,yBT3GY;ES4GZ,YAAA;EACA,WAAA;AZi3BF;;AY72BI;EACE,cTnHC;ESoHD,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;AZg3BN;AY32BM;EADF;IAEI,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,mBAAA;EZ82BN;AACF;AY12BM;EADJ;IAEI,yBAAA;EZ62BJ;AACF;;Aaz/BA;EACI,mBAAA;Ab4/BJ;Aa1/BI;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;Ab4/BN;Aa1/BM;EAPF;IAQI,aAAA;IACA,iBAAA;Eb6/BN;AACF;Aa5/BM;EAXF;IAYI,iBAAA;IACA,eAAA;Eb+/BN;AACF;Aa7/BI;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;Ab+/BN;Aa7/BM;EAPF;IAQI,YAAA;IACA,WAAA;IACA,mBAAA;EbggCN;AACF;Aa5/BM;EADF;IAEI,sBAAA;IACA,eAAA;IACA,WAAA;IACA,aAAA;IACA,MAAA;Eb+/BN;AACF;Aa5/BI;EACE,gBAAA;EACA,gBAAA;EACA,aAAA;Ab8/BN;Aa5/BM;EALF;IAMI,gBAAA;IACA,UAAA;IACA,YAAA;IACA,eAAA;Eb+/BN;AACF;Aa5/BI;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,sBV7DK;EU8DL,aAAA;EACA,8BAAA;Ab8/BN;Aa5/BM;EAVF;IAWI,mBAAA;IACA,mBAAA;IACA,YAAA;IACA,gBAAA;Eb+/BN;Ea7/BM;IACE,WAAA;IACA,kBAAA;IACA,YAAA;IACA,QAAA;IACA,UAAA;IACA,WAAA;IACA,yBVzEH;EHwkCL;AACF;Aa1/BI;EACE,kBAAA;EACA,cVpFQ;EUqFR,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;Ab4/BN;Aa1/BM;EATF;IAUI,aAAA;Eb6/BN;AACF;Aa1/BI;EACE,cVjGQ;EUkGR,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;Ab4/BN;Aaz/BI;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,0BAAA;EACA,yBV7GI;EU8GJ,mBAAA;EACA,WVtHK;EUuHL,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,SAAA;Ab2/BN;Aaz/BM;EAEE,YAAA;EACA,gBAAA;Ab0/BR;Aav/BM;EA1BF;IA2BI,kBAAA;IACA,SAAA;IACA,QAAA;Eb0/BN;AACF;Aav/BI;EACE,kBAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;Aby/BN;Aar/BM;EADF;IAEI,2BAAA;IACA,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,aAAA;IACA,aAAA;IACA,mBAAA;Ebw/BN;Eat/BM;IACE,iBAAA;Ebw/BR;Eat/BM;IACE,gBAAA;Ebw/BR;AACF;Aat/BM;EACE;IACE,iBAAA;Ebw/BR;Eat/BM;IACE,gBAAA;Ebw/BR;AACF;Aan/BM;EADF;IAEI,YAAA;Ebs/BN;AACF;;Aal/BE;EACE,gBAAA;Abq/BJ;Aan/BI;EAHF;IAII,aAAA;Ebs/BJ;AACF;;AclrCE;EADF;IAEI,UAAA;IACA,cAAA;EdsrCF;AACF;AcrrCE;EALF;IAMI,UAAA;IACA,cAAA;EdwrCF;AACF;AcvrCA;EACI,cXRG;EWSH,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,mBAAA;AdyrCJ;ActrCE;EACE,cXnBG;EWoBH,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AdwrCJ;ActrCI;EACE,WAAA;EACA,kBAAA;EACA,yDAAA;EACA,kCAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AdwrCN;;Ae3tCI;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,4DAAA;EACA,6BAAA;Af8tCR;Ae7tCQ;EANJ;IAOM,iBAAA;EfguCR;AACF;Ae9tCI;EACI,cZTM;EYUN,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AfguCR;Ae9tCM;EACE,aAAA;EACA,QAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,yBZzBD;AHyvCP;Ae/tCQ;EAPF;IAQI,aAAA;EfkuCR;AACF;AehuCK;EACG,cZ7BD;EY8BC,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AfkuCR;AehuCM;EADD;IAEK,aAAA;EfmuCR;AACF;AeluCK;EAJA;IAKC,aAAA;EfquCJ;AACF;AejuCA;EACI,WAAA;AfmuCJ;AejuCI;EAHJ;IAIM,aAAA;IACA,gBAAA;IACA,4BAAA;EfouCJ;AACF;AejuCE;EACE,eAAA;EACA,sBAAA;AfmuCJ;AejuCI;EAJF;IAKI,eAAA;IACA,cAAA;EfouCJ;AACF;AeluCI;EATF;IAUI,WAAA;IACA,aAAA;IACA,eAAA;EfquCJ;AACF;AejuCE;EACE,cAAA;AfmuCJ;AehuCE;EACE,gBAAA;AfkuCJ;AehuCI;EAHF;IAII,aAAA;EfmuCJ;AACF;AehuCE;EACE,yBZpFU;EYqFV,YAAA;EACA,WAAA;AfkuCJ;;AgB3zCA;EACI,cAAA;AhB8zCJ;;AgB3zCA;EACI,UAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AhB8zCJ;AgB5zCI;EANJ;IAOK,iBAAA;IACC,aAAA;IACA,8BAAA;IACA,SAAA;EhB+zCJ;AACF;AgB9zCI;EAZJ;IAaQ,iBAAA;IACA,oBAAA;IACA,iBAAA;IACA,aAAA;IACA,wCAAA;IACA,cAAA;IAAA,SAAA;EhBi0CN;AACF;AgB/zCI;EACI,gBAAA;EACA,cbxBM;EayBN,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AhBi0CR;AgBh0CQ;EACM;IACE,gBAAA;IACA,YAAA;EhBk0Cd;EgBh0Cc;IACA,iBAAA;IACA,YAAA;EhBk0Cd;AACF","sourcesContent":["@import 'libs/normalize.css';\r\n@import 'style/fonts';\r\n@import 'style/var';\r\n@import 'style/general_style';\r\n@import 'style/background-white.scss';\r\n@import 'style/aside-menu.scss';\r\n@import 'style/modal.scss';\r\n@import 'style/header.scss';\r\n@import 'style/main-title';\r\n@import 'style/main-navigation';\r\n@import 'style/main-discription.scss';\r\n@import 'style/section-brand.scss';\r\n@import 'style/section-repair.scss';\r\n@import 'style/section-price.scss';\r\n@import 'style/section-information.scss';\r\n@import 'style/swiper.scss';\r\n@import 'style/footer.scss';\r\n\r\n// @import 'style/swiper-bundle.min.css';","// /* ШРИФТ */\r\n\r\n@font-face {\r\n    font-family: \"TT Lakes\";\r\n    src: local(\"TT Lakes Regular\"), url(\"/src/fonts/TTLakes-Regular.woff\") format(\"woff\"), url(\"/src/fonts/TTLakes-Regular.eot\") format(\"embedded-opentype\");\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-display: swap;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"TT Lakes\";\r\n    src: local(\"TT Lakes Medium\"), url(\"/src/fonts/TTLakes-Medium.woff\") format(\"woff\"), url(\"/src/fonts/TTLakes-Medium.eot\") format(\"embedded-opentype\");\r\n    font-weight: 500;\r\n    font-style: normal;\r\n    font-display: swap;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"TT Lakes\";\r\n    src: local(\"TT Lakes Bold\"), url(\"/src/fonts/TTLakes-Bold.woff\") format(\"woff\"), url(\"/src/fonts/TTLakes-Bold.eot\") format(\"embedded-opentype\");\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-display: swap;\r\n  }","*,\r\n::before,\r\n::after {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    font-family:\"TT Lakes\";\r\n    font-size: 14px;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\nbody{\r\n    background-color: $back;\r\n    color: $text;\r\n}\r\n.body{\r\n    @media(min-width: 1440px){\r\n        display: flex; \r\n    }\r\n}\r\n\r\n.body-container {\r\n    max-width: 1920px;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    outline: none;\r\n    &:hover,\r\n    :focus{\r\n     opacity: 0.6;\r\n     transition: 0.3s ease-in-out;\r\n}\r\n}","$back: #F8F8F8;\r\n$back-menu:#FFF;\r\n$text: #1B1C21;\r\n$text-focuse: #7e7e82;\r\n$border-focuse: #B8FFEC;\r\n$border-list: 1px solid #d9fff5;\r\n$line: #EAEAEA;\r\n$element: rgba(65, 246, 215, 1);\r\n$button:  #FF3E79;\r\n$color-black:rgba(224, 224, 224, 0);\r\n\r\n",".background-white {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: $back-menu;\r\n    opacity: 0;\r\n    z-index: -1;\r\n  \r\n    &--active {\r\n      opacity: 0.9;\r\n      z-index: 2;\r\n      transition: opacity 0.6s ease-in-out, z-index 0.3s ease-in-out;\r\n    }\r\n  }","\r\n.mobile-menu {\r\n    position: fixed;\r\n    width: 320px; \r\n    background-color: $back-menu;\r\n    transition: left 500ms ease-in-out;\r\n    z-index: 2;\r\n    overflow-y: auto;\r\n    left: -150%;\r\n\r\n    &--open {\r\n        height: 100%;\r\n        left:0;\r\n    }\r\n    @media (min-width: 360px) {\r\n        width: 360px;\r\n      }\r\n    \r\n    @media (min-width: 768px) {\r\n        width: 320px;\r\n      }\r\n    \r\n    @media (min-width: 1440px) {\r\n        display: block;\r\n        position: static;\r\n        box-shadow: none;\r\n        z-index: 1;\r\n        min-width: 320px;\r\n      }\r\n\r\n    &__header-aside{\r\n        width: 100%;\r\n        margin-top: 18px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n\r\n        @media(min-width: 1440px){\r\n            margin-bottom: 37px;\r\n        }\r\n        @media(max-width: 768px){\r\n            margin-bottom: 0px;\r\n        }\r\n    }\r\n\r\n    &__header-aside-part-left{\r\n        display: flex;\r\n        flex-direction: row;\r\n        gap:24px;\r\n        align-items: center;\r\n        margin-left: 24px;\r\n        @media(max-width: 360px){\r\n            gap:24px;\r\n        }\r\n    }\r\n    &__header-aside-part-right{\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        margin-right: 24px;\r\n    }\r\n    &__navigation-aside{\r\n        padding: 0px 0px;\r\n        margin-bottom: 24px;\r\n    }\r\n    &__footer-aside{\r\n        margin-left: 24px;\r\n        @media(min-width: 1120px){\r\n            margin-top: 268px;\r\n        }\r\n        @media (max-width: 768px) {\r\n            margin-top: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n.navigation-aside {\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        gap: 16px;\r\n    }\r\n\r\n    &__list-item {\r\n        &:focus,\r\n        &:hover {\r\n        content: \"\";\r\n        width: 4px;\r\n        height: 32px;\r\n        background-color: $element;\r\n        border-radius: 0px 10px 10px 0px;\r\n        white-space: nowrap; \r\n        transition: 0.3s ease-in-out;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        color:$text;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 32px; \r\n        padding: 0 0 0 24px;\r\n        &:focus,\r\n        &:hover {\r\n          color: $text-focuse;\r\n          transition: 0.3s ease-in-out;\r\n        }\r\n\r\n    }\r\n}\r\n\r\n.footer-aside{\r\n    \r\n    &__contacts {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        gap: 16px;\r\n        padding-bottom: 16px;\r\n        @media (max-width: 768px) {\r\n            padding-bottom: 8px;\r\n        }\r\n    }\r\n\r\n    &__lang-options {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        gap: 7px;\r\n        padding: 0;\r\n        @media (max-width: 1440px) {\r\n        padding-top: 40px;\r\n        padding-bottom: 32px;\r\n        }\r\n        @media (min-width: 768px) {\r\n            padding-top: 16px;\r\n            padding-bottom: 16px;\r\n        }\r\n}\r\n}\r\n\r\n.link{\r\n    color: $text;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; \r\n\r\n    &__email{\r\n        display: block;\r\n        padding-bottom: 12px;\r\n        &:hover,\r\n        &:focus{\r\n            color:$text-focuse;\r\n            transition: 0.3s ease-in-out;\r\n            cursor: pointer; \r\n        }\r\n    }\r\n    &__phone{\r\n        display: block;\r\n        font-size: 24px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: 32px;\r\n        letter-spacing: -0.6px;\r\n        &:hover,\r\n        &:focus{\r\n            color: $text-focuse;\r\n            transition: 0.3s ease-in-out;\r\n            cursor: pointer; \r\n        }\r\n    }\r\n}\r\n.button-aside--open {\r\n    height: 100%;\r\n    left: 0;\r\n  }\r\n\r\n.lang-link{\r\n  &_active{\r\n    color: $text-focuse;\r\n} \r\n    &:hover,\r\n    &:focus{\r\n        display: block;\r\n        color:  $text-focuse;\r\n        cursor: pointer;\r\n        transition: 0.3s ease-in-out;\r\n    } \r\n}\r\n\r\n  .header-aside__button_close {\r\n    @media (min-width: 1440px) {\r\n      display: none;\r\n    }\r\n}\r\n\r\n",".modal-window {\r\n    position: fixed;\r\n    width: 288px;\r\n    padding: 24px 16px;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    top: 0;\r\n    right: -150%;\r\n    background-color: $back-menu;\r\n    z-index: 3; \r\n    transition: right 0.5s ease-in-out;\r\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n  \r\n    @media (min-width: 1440px) {\r\n      width: 520px;\r\n      display: flex;\r\n      justify-content: right;\r\n      padding: 0;\r\n      background-color: $color-black;\r\n      box-shadow: none;\r\n    }\r\n  \r\n    &__wrapper {\r\n      @media (min-width: 1440px) {\r\n        width: 376px;\r\n        padding: 24px 32px 24px 32px;\r\n        box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n        background: $back-menu;\r\n        z-index: 3;\r\n      }\r\n    }\r\n  }\r\n  \r\n  .modal {\r\n    &__title {\r\n      margin: 40px 0 24px 0;\r\n      color: $text;\r\n      font-size: 24px;\r\n      font-style: normal;\r\n      font-weight: 700;\r\n      line-height: 32px; \r\n      letter-spacing: -0.6px;\r\n  \r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 4px;\r\n        height: 40px;\r\n        top: 105px;\r\n        left: 0px;\r\n        border-radius: 0 10px 10px 0;\r\n        background-color: $element;\r\n      }\r\n  \r\n      @media (min-width: 1440px) {\r\n        margin-top: 16px;\r\n        &::before {\r\n          top: 35px;\r\n          left: 80px;\r\n        }\r\n      }\r\n    }\r\n  \r\n    &__form {\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n  \r\n    &__input {\r\n      min-width: 88%;\r\n      height: 22px;\r\n      padding: 12px 16px;\r\n      border-radius: 8px;\r\n      border: 1px solid $line;\r\n      background: $back-menu;\r\n      margin-bottom: 16px;\r\n      font-size: 16px;\r\n      font-weight: 500;\r\n      line-height: 150%;\r\n      letter-spacing: -0.2px;\r\n  \r\n      &:hover,\r\n      &:focus {\r\n        border-color: $border-list;\r\n        outline: 0;\r\n      }\r\n    }\r\n  \r\n    &__information {\r\n      max-width: 288px;\r\n      margin-bottom: 18px;\r\n      color: $text-focuse;\r\n      font-size: 14px;\r\n      font-style: normal;\r\n      font-weight: 500;\r\n      line-height: 16px;\r\n    }\r\n  \r\n    &__link {\r\n      color: $button;\r\n      font-size: 14px;\r\n      font-style: normal;\r\n      font-weight: 500;\r\n      line-height: 16px;\r\n    }\r\n  \r\n    &__button {\r\n      display: flex;\r\n      gap: 10px;\r\n      align-self: flex-end;\r\n      align-items: center;\r\n      min-width: 136px;\r\n      height: 32px;\r\n      padding: 4px 12px 4px 18px;\r\n      background-color: $button;\r\n      border-radius: 16px;\r\n      color: $back-menu;\r\n      font-size: 12px;\r\n      font-style: normal;\r\n      font-weight: 700;\r\n      line-height: 200%;\r\n      letter-spacing: -0.15px;\r\n      text-transform: uppercase;\r\n  \r\n      // &:hover,\r\n      // &:focus {\r\n      //   opacity: 0.6;\r\n      // }\r\n  \r\n      &--close {\r\n        &:hover,\r\n        &:focus {\r\n          opacity: 0.6;\r\n        }\r\n  \r\n        @media (min-width: 1440px) {\r\n          position: absolute;\r\n          left: 3px;\r\n          top: 32.5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n  /* ПОЯВЛЕНИЕ МОДАЛКИ -ПОЗВОНИТЬ- ПОСЛЕ НАЖАТИЯ НА КНОПКУ */\r\n  .button_call {\r\n    &--open {\r\n      right: 0;\r\n    }\r\n  }\r\n  \r\n  /* МОДАЛЬНОЕ ОКНО -ОБРАТНАЯ СВЯЗЬ- */\r\n  \r\n  .modal-chat{\r\n    &__messages {\r\n      height: 118px;\r\n    }\r\n    /* ПОЯВЛЕНИЕ МОДАЛКИ ПОСЛЕ НАЖАТИЯ НА КНОПКУ */\r\n    &--open {\r\n      right: 0;\r\n    }\r\n  }",".menu {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    background-color: $back-menu;\r\n    align-items: center;\r\n    @media (min-width:1120px){\r\n        display:none;\r\n    }\r\n\r\n    &__center-side{\r\n        margin-right: 20px;\r\n    }\r\n\r\n    &__button{\r\n        margin-top: 24px;\r\n        margin-bottom: 24px;\r\n        cursor: pointer;\r\n        background-color: transparent;\r\n    }\r\n    &__left-side{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n        gap: 16px; \r\n        @media (max-width:768px) {\r\n            margin-left: 16px;\r\n        }\r\n        @media (min-width:768px) {\r\n            margin-left: 24px;\r\n        }\r\n    }\r\n\r\n    &__center-side{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n        gap:16px;\r\n        @media (max-width:768px) {\r\n            display: none;\r\n    }\r\n        @media (min-width:768px) {\r\n            display: flex;\r\n            margin-left: auto;\r\n    }\r\n    }\r\n\r\n    &__right-side{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n        gap:16px;\r\n        @media (max-width:768px) {\r\n            margin-right: 16px;\r\n            margin-left: 20px;\r\n    }\r\n        @media (min-width:768px) {\r\n            margin-right: 24px;\r\n    }\r\n    }\r\n    &__line-right{\r\n        height: 32px;\r\n        width: 2px;\r\n        background-color: $line;\r\n        margin-top: 28px;\r\n        margin-bottom: 28px;\r\n        border-radius: 1px;\r\n    }\r\n\r\n    @media (min-width:768px){\r\n\r\n        &__logo{\r\n            padding-left: 22px;\r\n        }\r\n\r\n        &__line-left{\r\n            height: 32px;\r\n            width: 2px;\r\n            background-color: $line;\r\n            margin-top: 28px;\r\n            margin-bottom: 28px;\r\n            border-radius: 1px;\r\n        }\r\n    }\r\n}\r\n.right-side__hidden{\r\n    display: none;\r\n   }\r\n.button-menu_call--open{\r\n    right: 0;\r\n}\r\n\r\n.mobile-menu__button{\r\n   &--open {\r\n    right: 0;\r\n   }\r\n}\r\n","\r\n.title{\r\n    padding-top: 24px;\r\n    padding-bottom: 24px;\r\n\r\n&__text{\r\n    display: flex;\r\n    height: 40px;\r\n    line-height: 40px;\r\n\r\n}\r\n\r\n&__text-img{\r\n    background-color: $element;\r\n    width: 4px;\r\n    border-radius: 0 4px 4px 0;\r\n    margin-right: 12px; \r\n    @media (min-width:768px){\r\n        margin-right: 24px;\r\n    }\r\n\r\n    @media (min-width:1120px){\r\n        margin-right: 32px;\r\n    }\r\n\r\n}\r\n\r\n&__text-name{\r\n    width: 288px;\r\n    height: 40px;\r\n    color: $text;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    line-height: 40px;\r\n    letter-spacing: -0.6px;\r\n    margin: -0.0em 0;\r\n}\r\n\r\n.right-side__hidden {\r\n\r\n    @media (min-width:768px){\r\n            display: none;\r\n    }\r\n\r\n    @media (min-width:1120px){\r\n        display: flex;\r\n        align-items: center; \r\n    }\r\n\r\n}\r\n\r\n@media (min-width:1120px){\r\n\r\n    &__right-side{\r\n        margin-right:32px;\r\n        justify-content: flex-end;\r\n        margin-left: auto;\r\n    }\r\n\r\n}\r\n\r\n}\r\n    .button_text{\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        align-items: center;\r\n        width: 180px;\r\n        background-position: right 50%;\r\n        color: $text;\r\n        background-color: $back;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        gap: 8px;\r\n    }\r\n","\r\n.navigation{\r\n    padding: 0;\r\n    margin: 0 16px;\r\n\r\n    @media (min-width:1120px){\r\n            overflow: visible;\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            flex-shrink: 0;\r\n    }   \r\n}\r\n.nav {\r\n&__list{\r\n    color: $text-focuse;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    list-style-type:none;\r\n    overflow-x: scroll; \r\n    padding: 0;\r\n    margin-left: 0px;\r\n\r\n    &::-webkit-scrollbar {\r\n        display: none;\r\n      }\r\n    @media (min-width:1120px){\r\n        display: flex;\r\n        justify-content: space-between;\r\n        flex-wrap: wrap;\r\n        align-content: flex-start;\r\n}  \r\n  }\r\n\r\n&__button{\r\n    background: none;\r\n    font-size: 16px;\r\n    padding: 8px 16.67px;\r\n    margin:0;\r\n    flex-shrink: 0;\r\n    white-space: nowrap;\r\n    color: $text-focuse;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n}\r\n&__list-item{\r\n    border: 2px solid transparent;\r\n    white-space: nowrap;\r\n\r\n    &:focus,\r\n    &:hover {\r\n\r\n    background-color:$back-menu;\r\n    border-radius: 6px;\r\n    border-color: $border-focuse;\r\n\r\n    }\r\n\r\n    @media (min-width:768px){\r\n        margin-bottom: 0px;\r\n    }\r\n    @media (min-width:1120px){\r\n        margin-right: auto; \r\n    }\r\n\r\n}\r\n&__list-item_hidden-320{\r\n\r\n    @media (min-width:768px){\r\n        display: none;\r\n    }\r\n    @media (min-width:1120px){\r\n        display: block;  \r\n    }\r\n}\r\n&__list-item_hidden-1120{\r\n    \r\n    @media (min-width:1120px){\r\n        display: none;  \r\n    }\r\n}\r\n}\r\n","\r\n.main-discription__text-all{\r\n        margin-left: 16px;\r\n        margin-right: 16px;\r\n\r\n        @media (max-width:768px){\r\n            display: flex;\r\n            flex-direction: column;\r\n            margin-top: 24px;\r\n        }\r\n\r\n        @media (min-width:768px){\r\n            margin-left: 24px;\r\n            margin-top: 0px;\r\n        }\r\n        @media (min-width:1120px){\r\n            margin-left: 32px;\r\n            margin-right: 0;\r\n            padding: 0;\r\n        }\r\n\r\n    .text-all {\r\n        &_more-button {\r\n            display: flex;  \r\n            justify-content: flex-start;\r\n            margin-top: 16px;\r\n            color: $text;\r\n            font-size: 16px;\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            line-height: 24px;\r\n        }\r\n        &__button-text{\r\n            &:hover,\r\n            &:focus {\r\n            opacity: 0.6;\r\n            }\r\n        }\r\n\r\n        &__text {\r\n                display: flex;\r\n                flex-direction: column;\r\n                font-weight: 400;\r\n                color: $text;\r\n                line-height: 20px;\r\n                font-style: normal;\r\n                letter-spacing: 0.2px;\r\n                text-align: left;\r\n                gap: 10px;\r\n\r\n                @media (max-width:768px){\r\n                    width: 310px;\r\n                    height: 100px;\r\n                    overflow: hidden;\r\n                }\r\n\r\n                @media (min-width:768px){\r\n                    width: 90%;\r\n                    height: 134.5px;\r\n                    transition: height 0.5s ease;\r\n                    align-content: space-between;\r\n                    overflow: hidden;\r\n                }\r\n                @media (min-width:1120px){\r\n                max-width:  490px;\r\n                overflow: hidden;\r\n                }\r\n            }\r\n            &__img{\r\n                width: 320px;\r\n                overflow: hidden;\r\n            }    \r\n        }\r\n    }\r\n\r\n.img__picture{\r\n    @media (max-width:768px){\r\n    margin: 7.2px 0;\r\n    width: 320px;\r\n    }\r\n    @media (min-width:768px){\r\n        width: 360px;\r\n        height: auto;\r\n        border-radius: 10px;\r\n    }\r\n    @media (min-width:1120px){\r\n        width: 531px;\r\n        height: auto;\r\n        border-radius: 10px;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n}\r\n\r\n.main-discription{ \r\n        @media (min-width:768px){\r\n        width: 100%;\r\n        min-width: 768px;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        flex-wrap: nowrap;\r\n        align-items: flex-start;\r\n        margin-top: 32px;\r\n        }\r\n        @media (min-width:1120px){\r\n        align-items: start;\r\n        margin-top: 18px;\r\n        }\r\n\r\n    }\r\n.main-discription__img{\r\n    @media (min-width:768px){\r\n            margin: auto;\r\n            margin-right: 24px;\r\n            height: auto; \r\n        }\r\n    }\r\n.more-button{\r\n &__down-blue{\r\n    &--hide {\r\n        transform: rotate(180deg);\r\n        transition-duration: 0.2s;\r\n      }\r\n }\r\n}",".section {\r\n  &__content{\r\n    margin-top: 16px;\r\n    @media (min-width: 1120px) {\r\n    margin-left: 0px;\r\n    }\r\n  }\r\n    \r\n  &__swiper {\r\n    min-height: 110px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 16px;\r\n  }\r\n  &__swiper-slide {\r\n    height: 72px;\r\n    min-width: 220px;\r\n    max-width: 240px;\r\n\r\n    @media (min-width: 768px) {\r\n      min-width: none;\r\n      max-width: none;\r\n      width: calc((100% - (2 * 24px)) / 3);\r\n      margin: 0;\r\n    }\r\n\r\n    @media (min-width: 1440px) {\r\n      width: calc((100% - (3 * 32px)) / 4);\r\n    }\r\n  }\r\n\r\n  &__content-card {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 50%;\r\n    background-color: $back-menu;\r\n    border-radius: 6px;\r\n    align-items: center;\r\n    padding: 16px 20px;\r\n    border: 1px solid $line;\r\n  }\r\n\r\n  &__content-button {\r\n    height: 40px;\r\n  }\r\n\r\n  &__button {\r\n    \r\n    @media (min-width: 768px) {\r\n      display: flex;\r\n      align-items: center;\r\n      margin: 10px 0 0 24px;\r\n      gap: 9px;\r\n      padding-left: 5px;\r\n    }\r\n  }\r\n\r\n  &__content-button {\r\n    &:focus,\r\n    &:hover {\r\n      opacity: 0.5;\r\n      transition: 0.2s;\r\n    }\r\n  }\r\n  &__content-button-down-blue--hide{\r\n    @media (min-width: 768px) and (min-width: 1120px) {\r\n    transform: rotate(180deg);\r\n    }\r\n  }\r\n  margin-bottom: 24px;\r\n  \r\n  @media (min-width: 768px) {\r\n      margin-bottom: 32px;\r\n  }\r\n\r\n  @media (min-width: 1120px) {\r\n      margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n  ",".section-repair {\r\n  &__content{\r\n    margin-bottom: 24px;\r\n    margin-left: 16px;\r\n    margin: 16px;\r\n  \r\n    @media (min-width: 768px) {\r\n      margin-bottom: 32px;\r\n      margin-left: 24px;\r\n    }\r\n    @media (min-width: 1120px) {\r\n      margin-left: 32px;\r\n      margin-top: 40px;\r\n    }\r\n  }\r\n    &__swiper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 16px;\r\n  \r\n      @media (min-width: 768px) {\r\n        transition: height 0.5s ease;\r\n      }\r\n    }\r\n    &__swiper-wrapper{\r\n        @media (min-width: 768px) {\r\n          flex-wrap: wrap;\r\n          gap: 16px 24px;\r\n          height: 165px;\r\n        }\r\n        @media (min-width: 1120px) {\r\n          width: 100%;\r\n          height: 165px;\r\n          padding: 0 32px 0 0;\r\n        }\r\n      }\r\n  \r\n    &__swiper-slide {\r\n      margin: 0 16px 0 0;\r\n      flex-shrink: 0;\r\n      min-width: 224px;\r\n      max-width: 240px;\r\n      height: 160px;\r\n      \r\n  \r\n      @media (min-width: 768px) {\r\n        min-width: none;\r\n        max-width: none;\r\n        width: calc((100% - (2 * 24px)) / 3);\r\n        margin: 0;\r\n      }\r\n  \r\n      @media (min-width: 1120px) {\r\n        width: calc((100% - (3 * 32px)) / 4);\r\n      }\r\n    }\r\n    &__content-swiper-pagination {\r\n      position: static;\r\n      \r\n      @media (min-width: 768px) {\r\n        display: none;\r\n      }\r\n    }\r\n    \r\n    &__content-card {\r\n      height: 126px;\r\n      display: flex;\r\n      padding: 16px;\r\n      border: 1px solid $line;\r\n      justify-content: space-between;\r\n      background-color: $back-menu;\r\n      border-radius: 6px;\r\n    }\r\n  \r\n    &__content-button {\r\n      align-self: flex-end;\r\n      height: 40px;\r\n    \r\n      &:focus,\r\n      &:hover {\r\n        opacity: 0.5;\r\n        transition: 0.2s;\r\n      }\r\n    } \r\n  \r\n    &__content-button-down {\r\n      display: none;\r\n      \r\n  \r\n      @media (min-width: 768px) {\r\n        display: flex;\r\n        align-items: center;\r\n        margin: 10px 0 0 24px;\r\n        gap: 9px;\r\n        padding-left: 5px;\r\n        margin-bottom: 32px;\r\n      }\r\n    }\r\n    &__content-button-down_text {\r\n      color: $text;\r\n      font-size: 16px;\r\n      font-style: normal;\r\n      font-weight: 500;\r\n      line-height: 24px;\r\n      letter-spacing: -0.2px;\r\n      \r\n  }\r\n}\r\n.swiper-pagination-bullet {\r\n  background-color: $text-focuse;\r\n  height: 12px;\r\n  width: 12px;\r\n}\r\n\r\n  .content-card {\r\n    &__title {\r\n      color: $text;\r\n      font-size: 16px;\r\n      font-style: normal;\r\n      font-weight: 500;\r\n      line-height: 24px; \r\n      letter-spacing: -0.2px;\r\n      white-space: nowrap;\r\n      height: 126px;\r\n    }\r\n  \r\n  &__content-button-down {\r\n    &__text {\r\n      @media (min-width: 768px) {\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        margin-bottom: 32px;\r\n      }\r\n    }\r\n  \r\n  &__content-button-down-blue--hide{\r\n      @media (min-width: 768px) and (min-width: 1120px) {\r\n      transform: rotate(180deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n",".section-price {\r\n    margin-bottom: 40px;\r\n\r\n    &__description {\r\n      display: none;\r\n      padding: 0 20px;\r\n      margin-bottom: 16px;\r\n      margin-top: 16px;\r\n      margin-left: 16px;\r\n  \r\n      @media (min-width: 768px) {\r\n        display: flex;\r\n        margin-left: 24px;\r\n      }\r\n      @media (min-width: 1120px) {\r\n        margin-left: 32px;\r\n        padding: 0 10px;\r\n      }\r\n    }\r\n    &__swiper {\r\n      margin-bottom: 16px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      gap: 16px;\r\n  \r\n      @media (min-width: 768px) {\r\n        height: auto;\r\n        width: 100%;\r\n        margin-bottom: 24px;\r\n      }\r\n    }\r\n  \r\n    &__swiper-wrapper {\r\n      @media (min-width: 768px) {\r\n        flex-direction:column;\r\n        padding: 0 24px;\r\n        width: 100%;\r\n        height: 320px;\r\n        gap: 0;\r\n      }\r\n    }\r\n\r\n    &__swiper-slide {\r\n      max-width: 260px;\r\n      min-width: 260px;\r\n      height: 200px;\r\n  \r\n      @media (min-width: 768px) {\r\n        max-height: 64px;\r\n        width: 98%;\r\n        height: auto;\r\n        max-width: 100%;\r\n      }\r\n    }\r\n  \r\n    &__content-card {\r\n      display: flex;\r\n      flex-direction: column;\r\n      padding: 16px;\r\n      gap: 16px;\r\n      border-radius: 6px;\r\n      background-color: $back-menu;\r\n      height: 165px;\r\n      justify-content: space-between;\r\n  \r\n      @media (min-width: 768px) {\r\n        align-items: center;\r\n        flex-direction: row;\r\n        height: 32px;\r\n        border-radius: 0;\r\n  \r\n        &::after {\r\n          content: \"\";\r\n          position: absolute;\r\n          bottom: 64px;\r\n          left: 2%;\r\n          width: 96%;\r\n          height: 1px;\r\n          background-color: $line;\r\n          ;\r\n        }\r\n      }\r\n    }\r\n    \r\n    &__block-title {\r\n      margin-bottom: 4px;\r\n      color: $text-focuse;\r\n      font-size: 14px;\r\n      font-style: normal;\r\n      font-weight: 500;\r\n      line-height: 16px;\r\n      opacity: 0.72;\r\n  \r\n      @media (min-width: 768px) {\r\n        display: none;\r\n      }\r\n    }\r\n  \r\n    &__block-text {\r\n      color: $text-focuse;\r\n      font-size: 14px;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      line-height: 18px; \r\n      letter-spacing: 0.2px;\r\n    }\r\n  \r\n    &__button {\r\n      position: absolute;\r\n      bottom: 20px;\r\n      right: 16px;\r\n      max-width: 120px;\r\n      display: flex;\r\n      align-items: center;\r\n      height: 32px;\r\n      padding: 4px 40px 4px 12px;\r\n      background-color: $button;\r\n      border-radius: 16px;\r\n      color: $back-menu;\r\n      font-size: 12px;\r\n      font-style: normal;\r\n      font-weight: 700;\r\n      line-height: 200%;\r\n      letter-spacing: -0.15px;\r\n      text-transform: uppercase;\r\n      gap: 10px;\r\n  \r\n      &:focus,\r\n      &:hover {\r\n        opacity: 0.5;\r\n        transition: 0.2s;\r\n      }\r\n  \r\n      @media (min-width: 768px) {\r\n        position: relative;\r\n        bottom: 0;\r\n        right: 0;\r\n      }\r\n    }\r\n  \r\n    &__button-svg {\r\n      position: absolute;\r\n      right: 5px;\r\n      min-width: 7px;\r\n      min-height: 9px;\r\n    }\r\n\r\n    &__description-text {\r\n      @media (min-width: 768px) {\r\n        color: text-color-main-grey;\r\n        font-family: TT Lakes;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 16px; \r\n        opacity: 0.72;\r\n        display: flex;\r\n        white-space: nowrap;\r\n  \r\n        &:nth-child(1) {\r\n          margin-right: 38%;\r\n        }\r\n        &:nth-child(3) {\r\n          margin-left: 12% ;\r\n        }\r\n      }\r\n      @media (min-width: 1120px) {\r\n        &:nth-child(1) {\r\n          margin-right: 36%;\r\n        }\r\n        &:nth-child(3) {\r\n          margin-left: 18% ;\r\n        }\r\n      }\r\n    }\r\n  \r\n    &__type-service {\r\n      @media (min-width: 768px) {\r\n        width: 348px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .swiper-pagination {\r\n    position: static;\r\n  \r\n    @media (min-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n  ",".section-information{\r\n  @media (max-width: 768px) {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n  @media (min-width: 768px) {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n&__text {\r\n    color: $text;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n    letter-spacing: 0.2px;\r\n    max-width: 420px;\r\n    margin-bottom: 18px;\r\n  }\r\n\r\n  &__special {\r\n    color: $text;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      background-image: url(/src/img/more.svg);\r\n      background-position: center center;\r\n      background-repeat: no-repeat;\r\n      background-size: cover;\r\n      width: 24px;\r\n      height: 27px;\r\n    }\r\n  }\r\n  }",".section{\r\n    &__title {\r\n        display:block;\r\n        margin-left: 16px;\r\n        padding: 16px 0px;\r\n        background: linear-gradient(90deg, #F8F8F8 1.39%, #FFF 100%);\r\n        border-top: 2px solid $border-focuse;\r\n        @media (min-width:767px){\r\n          margin-left: 24px;\r\n        }\r\n    }\r\n    &__title-text{\r\n        color: $text-focuse;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 24px;\r\n        text-transform: uppercase;\r\n      }\r\n      &__content-button-down {\r\n        display: flex;\r\n        gap: 9px;\r\n        margin-left: 24px;\r\n        margin-top: 24px;\r\n        padding: 0px;\r\n        background-color:$back;\r\n        @media (max-width: 767px) {\r\n          display: none;\r\n        }\r\n     }\r\n     &__content-button-down_text {\r\n        color: $text;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 24px;\r\n        letter-spacing: -0.2px;\r\n     &__content-swiper-pagination{\r\n      @media (min-width:768px){\r\n          display: none;\r\n     } \r\n     @media (min-width:1120px){\r\n      display: none;\r\n } \r\n}  \r\n}\r\n\r\n.swiper {\r\n    width: 100%;\r\n  \r\n    @media (min-width: 768px) {\r\n      height: 164px;\r\n      overflow: hidden;\r\n      transition: height 0.5s ease;\r\n    }\r\n  }\r\n  \r\n  .swiper-wrapper {\r\n    padding: 0 16px;\r\n    box-sizing: border-box;\r\n  \r\n    @media (min-width: 768px) {\r\n      flex-wrap: wrap;\r\n      gap: 16px 24px;\r\n    }\r\n  \r\n    @media (min-width: 1120px) {\r\n      width: 100%;\r\n      height: 165px;\r\n      padding: 0 32px;\r\n    }\r\n\r\n  }\r\n  \r\n  .swiper-slide {\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .swiper-pagination {\r\n    position: static;\r\n  \r\n    @media (min-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .swiper-pagination-bullet {\r\n    background-color: $text-focuse;\r\n    height: 12px;\r\n    width: 12px;\r\n  }\r\n\r\n}","footer{\r\n    margin: 0 auto;\r\n    // max-width: 1120px;\r\n}\r\n.footer-wrapper {\r\n    width: 95%;\r\n    margin-bottom: 20px;\r\n    margin-top: 57px;\r\n    margin-left: 16px;\r\n\r\n    @media (min-width: 768px) {\r\n     margin-left: 24px;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      gap: 35px;\r\n    }  \r\n    @media (min-width: 1120px) {\r\n        padding-top: 80px;\r\n        padding-bottom: 25px;\r\n        margin-left: 32px;\r\n        display: grid;\r\n        grid-template-columns: 218px 214px 213px;\r\n        gap: 46px;\r\n    }\r\n    \r\n    &__copyright{\r\n        margin-top: 16px;\r\n        color: $text-focuse;\r\n        text-align: center;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        line-height: 16px;\r\n        @media (min-width: 768px) {\r\n              &:nth-child(1) {\r\n                text-align: left;\r\n                width: 218px;\r\n            }\r\n                &:nth-child(3) {\r\n                text-align: right;\r\n                width: 218px;\r\n            }\r\n            }\r\n    }\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/libs/normalize.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/libs/normalize.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/libs/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group.svg */ "./src/img/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/_MG_3223.png */ "./src/img/_MG_3223.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap.png */ "./src/img/Bitmap.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (2).png */ "./src/img/Bitmap (2).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (4).png */ "./src/img/Bitmap (4).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (6).png */ "./src/img/Bitmap (6).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (1).png */ "./src/img/Bitmap (1).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (3).png */ "./src/img/Bitmap (3).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (5).png */ "./src/img/Bitmap (5).png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bitmap (7).png */ "./src/img/Bitmap (7).png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>CPS-Webpack</title>\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css\"\r\n    />\r\n</head>\r\n<body class=\"body\">\r\n            <div class=\"background-white\"></div>\r\n            <aside class=\"mobile-menu \">\r\n                <div class=\"header-aside mobile-menu__header-aside\">\r\n                    <div class=\"mobile-menu__header-aside-part-left\">\r\n                        <button class=\"button header-aside__button_close button-aside--close\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" \r\n                                width=\"40\" \r\n                                height=\"40\" \r\n                                viewBox=\"0 0 40 40\" \r\n                                fill=\"none\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.7935 12.2571C13.403 11.8666 12.7698 11.8666 12.3793 12.2571L12.2571 12.3793C11.8666 12.7698 11.8666 13.403 12.2571 13.7935L18.4636 20L12.2571 26.2065C11.8666 26.597 11.8666 27.2302 12.2571 27.6207L12.3793 27.7429C12.7698 28.1334 13.403 28.1334 13.7935 27.7429L20 21.5364L26.2065 27.7429C26.597 28.1334 27.2302 28.1334 27.6207 27.7429L27.7429 27.6207C28.1334 27.2302 28.1334 26.597 27.7429 26.2065L21.5364 20L27.7429 13.7935C28.1334 13.403 28.1334 12.7698 27.7429 12.3793L27.6207 12.2571C27.2302 11.8666 26.597 11.8666 26.2065 12.2571L20 18.4636L13.7935 12.2571Z\" fill=\"white\"/>\r\n                            </svg>\r\n                        </button>\r\n                        <a href=\"#\" class=\"logo header-aside__logo \">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"/>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"mobile-menu__header-aside-part-right\">\r\n                        <button class=\"button header__button_search-img\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" \r\n                                width=\"40\" \r\n                                height=\"40\" \r\n                                viewBox=\"0 0 40 40\" \r\n                                fill=\"none\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.5006 22.0006H22.7106L22.4306 21.7306C23.6306 20.3306 24.2506 18.4206 23.9106 16.3906C23.4406 13.6106 21.1206 11.3906 18.3206 11.0506C14.0906 10.5306 10.5306 14.0906 11.0506 18.3206C11.3906 21.1206 13.6106 23.4406 16.3906 23.9106C18.4206 24.2506 20.3306 23.6306 21.7306 22.4306L22.0006 22.7106V23.5006L26.2606 27.7506C26.6706 28.1606 27.3306 28.1606 27.7406 27.7506L27.7506 27.7406C28.1606 27.3306 28.1606 26.6706 27.7506 26.2606L23.5006 22.0006ZM17.5006 22.0006C15.0106 22.0006 13.0006 19.9906 13.0006 17.5006C13.0006 15.0106 15.0106 13.0006 17.5006 13.0006C19.9906 13.0006 22.0006 15.0106 22.0006 17.5006C22.0006 19.9906 19.9906 22.0006 17.5006 22.0006Z\" fill=\"white\"/>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div> \r\n                <nav class=\"navigation-aside mobile-menu__navigation-aside\">\r\n                    <ul class=\"navigation-aside__list\">\r\n                            <li class=\"navigation-aside__list-item\">\r\n                            <a class=\"navigation-aside__link navigation-aside__link_active\" href=\"#\" alt=\"Ремонт техники\">Ремонт техники</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                            <a class=\"navigation-aside__link\" href=\"#\" alt=\"Услуги и сервисы\">Услуги и сервисы</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                            <a class=\"navigation-aside__link\" href=\"#\" alt=\"Корпоративным клиентам\">Корпоративным клиентам</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                                <a class=\"navigation-aside__link\" href=\"#\" alt=\"Продавцам техники\">Продавцам техники</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                                <a class=\"navigation-aside__link\" href=\"#\" alt=\"Партнерам\">Партнерам</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                                <a class=\"navigation-aside__link\" href=\"#\" alt=\"Производителям\">Производителям</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                            <a class=\"navigation-aside__link\" href=\"#\" alt=\"Наши сервисные центры\">Наши сервисные центры</a>\r\n                            </li>\r\n                            <li class=\"navigation-aside__list-item\">\r\n                                <a class=\"navigation-aside__link\" href=\"#\" alt=\"Контакты\">Контакты</a>\r\n                            </li>\r\n                        </ul>\r\n                </nav>\r\n                <div class=\"footer-aside mobile-menu__footer-aside\">\r\n                    <div class=\"contacts footer-aside__contacts\">\r\n                        <button class=\"button footer-aside__button_call button_call--open\"> \r\n                            <svg \r\n                                width=\"40\" \r\n                                height=\"40\" \r\n                                viewBox=\"0 0 40 40\" \r\n                                fill=\"none\" \r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.7602 23.25L15.3002 22.96C15.9102 22.89 16.5102 23.1 16.9402 23.53L18.7802 25.37C21.6102 23.93 23.9302 21.62 25.3702 18.78L23.5202 16.93C23.0902 16.5 22.8802 15.9 22.9502 15.29L23.2402 12.77C23.3602 11.76 24.2102 11 25.2302 11H26.9602C28.0902 11 29.0302 11.94 28.9602 13.07C28.4302 21.61 21.6002 28.43 13.0702 28.96C11.9402 29.03 11.0002 28.09 11.0002 26.96V25.23C10.9902 24.22 11.7502 23.37 12.7602 23.25Z\" fill=\"white\"/>\r\n                            </svg>                \r\n                        </button>\r\n                        <button class=\"button footer-aside__button_chat-img modal-chat__button--open\"> \r\n                            <svg width=\"40\" \r\n                                height=\"40\" \r\n                                viewBox=\"0 0 40 40\" \r\n                                fill=\"none\" \r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\" fill=\"white\"/>\r\n                                <mask id=\"mask0_0_1880\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"11\" width=\"20\" height=\"20\">\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\" fill=\"white\"/>\r\n                                </mask>\r\n                                <g mask=\"url(#mask0_0_1880)\">\r\n                                </g>\r\n                            </svg>\r\n                        </button>\r\n                        <button class=\"button footer-aside__button_profile-img\"> \r\n                            <svg width=\"40\" \r\n                                height=\"40\" \r\n                                viewBox=\"0 0 40 40\" \r\n                                fill=\"none\" \r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                                <path d=\"M20.5 19C22.9853 19 25 16.9853 25 14.5C25 12.0147 22.9853 10 20.5 10C18.0147 10 16 12.0147 16 14.5C16 16.9853 18.0147 19 20.5 19Z\" fill=\"white\"/>\r\n                                <path d=\"M10.0166 26.6118C9.88693 27.3412 10.5352 28 11.339 28H28.6604C29.4902 28 30.1125 27.3412 29.9829 26.6118C29.2309 22.4 25.0561 20 19.9997 20C14.9433 20 10.7686 22.4 10.0166 26.6118Z\" fill=\"white\"/>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                    <div>\r\n                        <a class=\"link link__email \" href=\"#\" alt=\"e-mail\">mail@cps.com</a>\r\n                        <a class=\"link link__phone \"href=\"#\" alt=\"namber\">8 800 890 8900</a>\r\n                    </div>\r\n                    <ul class=\"lang-options footer-aside__lang-options\">\r\n                        <li class=\"item\">\r\n                            <a class=\"lang-link lang-link_active link\" href=\"#\" alt=\"RU\">RU</a>\r\n                        </li>\r\n                        <li class=\"item\">\r\n                            <a class=\"lang-link link\" href=\"#\" alt=\"EN\">EN</a>\r\n                        </li>\r\n                        <li class=\"item\">\r\n                            <a class=\"lang-link link\" href=\"#\" alt=\"CH\">CH</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </aside>\r\n            <aside class=\"modal-call modal-window\">\r\n                <div class=\"modal-window__wrapper\">\r\n                    <button class=\"modal-call__button--close button_call--close\">\r\n                        <svg\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                        viewBox=\"0 0 40 40\"\r\n                        fill=\"none\"\r\n                        >\r\n                        <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                        <path\r\n                            fill-rule=\"evenodd\"\r\n                            clip-rule=\"evenodd\"\r\n                            d=\"M13.7935 12.2571C13.403 11.8666 12.7698 11.8666 12.3793 12.2571L12.2571 12.3793C11.8666 12.7698 11.8666 13.403 12.2571 13.7935L18.4636 20L12.2571 26.2065C11.8666 26.597 11.8666 27.2302 12.2571 27.6207L12.3793 27.7429C12.7698 28.1334 13.403 28.1334 13.7935 27.7429L20 21.5364L26.2065 27.7429C26.597 28.1334 27.2302 28.1334 27.6207 27.7429L27.7429 27.6207C28.1334 27.2302 28.1334 26.597 27.7429 26.2065L21.5364 20L27.7429 13.7935C28.1334 13.403 28.1334 12.7698 27.7429 12.3793L27.6207 12.2571C27.2302 11.8666 26.597 11.8666 26.2065 12.2571L20 18.4636L13.7935 12.2571Z\"\r\n                            fill=\"white\"\r\n                        />\r\n                        </svg>\r\n                    </button>\r\n                    <h2 class=\"modal__title\">Заказать звонок</h2>\r\n                    <form action=\"\" class=\"modal__form\">\r\n                        <input class=\"modal__input\" type=\"text\" placeholder=\"Телефон\" />\r\n                        <p class=\"modal__information\">\r\n                        Нажимая \"отправить\", вы даете согласие на\r\n                        <a href=\"#\" class=\"modal__link\">обработку персональных данных </a>и\r\n                        соглашаетесь с нашей\r\n                        <a href=\"#\" class=\"modal__link\">политикой конфиденциальности</a>\r\n                        </p>\r\n                        <button class=\"modal__button\">\r\n                        Отправить\r\n                        <svg\r\n                        class=\"modal-svg\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        width=\"28\"\r\n                        height=\"24\"\r\n                        viewBox=\"0 0 28 24\"\r\n                        fill=\"none\"\r\n                      >\r\n                        <rect\r\n                          x=\"0.428589\"\r\n                          width=\"27.4286\"\r\n                          height=\"24\"\r\n                          rx=\"12\"\r\n                          fill=\"#FF3E79\"\r\n                        />\r\n                        <path\r\n                          fill-rule=\"evenodd\"\r\n                          clip-rule=\"evenodd\"\r\n                          d=\"M15.0572 11.9999L11.6719 9.27169C11.178 8.87364 11.1747 8.12223 11.6652 7.71992L11.9126 7.51698C12.2795 7.21596 12.8075 7.21436 13.1763 7.51313L18.6223 11.9254C18.6697 11.9638 18.6697 12.0361 18.6223 12.0745L13.2754 16.4064C12.8489 16.752 12.2383 16.7501 11.8139 16.402C11.2468 15.9367 11.2505 15.0678 11.8217 14.6074L15.0572 11.9999Z\"\r\n                          fill=\"white\"\r\n                        />\r\n                      </svg>\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </aside>\r\n            <aside class=\"modal-chat modal-window\">\r\n                <div class=\"modal-window__wrapper\">\r\n                    <button class=\"modal-chat__button--close modal__button--close\">\r\n                        <svg\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                        viewBox=\"0 0 40 40\"\r\n                        fill=\"none\"\r\n                        >\r\n                        <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                        <path\r\n                            fill-rule=\"evenodd\"\r\n                            clip-rule=\"evenodd\"\r\n                            d=\"M13.7935 12.2571C13.403 11.8666 12.7698 11.8666 12.3793 12.2571L12.2571 12.3793C11.8666 12.7698 11.8666 13.403 12.2571 13.7935L18.4636 20L12.2571 26.2065C11.8666 26.597 11.8666 27.2302 12.2571 27.6207L12.3793 27.7429C12.7698 28.1334 13.403 28.1334 13.7935 27.7429L20 21.5364L26.2065 27.7429C26.597 28.1334 27.2302 28.1334 27.6207 27.7429L27.7429 27.6207C28.1334 27.2302 28.1334 26.597 27.7429 26.2065L21.5364 20L27.7429 13.7935C28.1334 13.403 28.1334 12.7698 27.7429 12.3793L27.6207 12.2571C27.2302 11.8666 26.597 11.8666 26.2065 12.2571L20 18.4636L13.7935 12.2571Z\"\r\n                            fill=\"white\"\r\n                        />\r\n                        </svg>\r\n                    </button>\r\n                    <h2 class=\"modal__title\">Обратная связь</h2>\r\n                    <form action=\"\" class=\"modal__form\">\r\n                        <input class=\"modal__input\" type=\"text\" placeholder=\"Имя\" />\r\n                        <input class=\"modal__input\" type=\"text\" placeholder=\"Телефон\" />\r\n                        <input\r\n                        class=\"modal__input\"\r\n                        type=\"text\"\r\n                        placeholder=\"Электронная почта\"\r\n                        />\r\n                        <textarea\r\n                        class=\"modal__input modal-chat__messages\"\r\n                        placeholder=\"Сообщение\"\r\n                        name=\"\"\r\n                        id=\"\"\r\n                        cols=\"30\"\r\n                        rows=\"10\"\r\n                        ></textarea>\r\n                        <p class=\"modal__information\">\r\n                        Нажимая \"отправить\", вы даете согласие на\r\n                        <a href=\"#\" class=\"modal__link\">обработку персональных данных </a>и\r\n                        соглашаетесь с нашей\r\n                        <a href=\"#\" class=\"modal__link\">политикой конфиденциальности</a>\r\n                        </p>\r\n                        <button class=\"modal__button\">\r\n                        Отправить\r\n                        <svg\r\n                            class=\"modal__svg\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                            width=\"28\"\r\n                            height=\"24\"\r\n                            viewBox=\"0 0 28 24\"\r\n                            fill=\"none\"\r\n                        >\r\n                            <rect\r\n                            x=\"0.428589\"\r\n                            width=\"27.4286\"\r\n                            height=\"24\"\r\n                            rx=\"12\"\r\n                            fill=\"#FF3E79\"\r\n                            />\r\n                            <path\r\n                            fill-rule=\"evenodd\"\r\n                            clip-rule=\"evenodd\"\r\n                            d=\"M15.0572 11.9999L11.6719 9.27169C11.178 8.87364 11.1747 8.12223 11.6652 7.71992L11.9126 7.51698C12.2795 7.21596 12.8075 7.21436 13.1763 7.51313L18.6223 11.9254C18.6697 11.9638 18.6697 12.0361 18.6223 12.0745L13.2754 16.4064C12.8489 16.752 12.2383 16.7501 11.8139 16.402C11.2468 15.9367 11.2505 15.0678 11.8217 14.6074L15.0572 11.9999Z\"\r\n                            fill=\"white\"\r\n                            />\r\n                        </svg>\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n              </aside>\r\n    <div class=\"body-container\">\r\n        <header class=\"header\">\r\n            <nav class=\"menu\">\r\n                <div class=\"left-side menu__left-side\">\r\n                    <button class=\"button menu__button menu__button_burger button-aside--open\">\r\n                        <svg\r\n                            width=\"40\"\r\n                            height=\"40\"\r\n                            viewBox=\"0 0 40 40\"\r\n                            fill=\"none\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                            <path\r\n                            fill-rule=\"evenodd\"\r\n                            clip-rule=\"evenodd\"\r\n                            d=\"M11 13C11 12.4477 11.4477 12 12 12H28C28.5523 12 29 12.4477 29 13C29 13.5523 28.5523 14 28 14H12C11.4477 14 11 13.5523 11 13ZM11 20C11 19.4477 11.4477 19 12 19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H12C11.4477 21 11 20.5523 11 20ZM12 26C11.4477 26 11 26.4477 11 27C11 27.5523 11.4477 28 12 28H24C24.5523 28 25 27.5523 25 27C25 26.4477 24.5523 26 24 26H12Z\"\r\n                            fill=\"white\"\r\n                            />\r\n                        </svg>\r\n                    </button>\r\n                    <span class=\"line menu__line-left\"></span>\r\n                    <a href=\"#\" class=\"logo menu__logo \">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"/>\r\n                    </a>\r\n                </div> \r\n                <div class=\"center-side menu__center-side\">\r\n                    <button class=\"button menu__button menu__button_call mobile-menu__button--open\"> \r\n                        <svg \r\n                            width=\"40\" \r\n                            height=\"40\" \r\n                            viewBox=\"0 0 40 40\" \r\n                            fill=\"none\" \r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.7602 23.25L15.3002 22.96C15.9102 22.89 16.5102 23.1 16.9402 23.53L18.7802 25.37C21.6102 23.93 23.9302 21.62 25.3702 18.78L23.5202 16.93C23.0902 16.5 22.8802 15.9 22.9502 15.29L23.2402 12.77C23.3602 11.76 24.2102 11 25.2302 11H26.9602C28.0902 11 29.0302 11.94 28.9602 13.07C28.4302 21.61 21.6002 28.43 13.0702 28.96C11.9402 29.03 11.0002 28.09 11.0002 26.96V25.23C10.9902 24.22 11.7502 23.37 12.7602 23.25Z\" fill=\"white\"/>\r\n                        </svg>                \r\n                    </button>\r\n                    <button class=\"button menu__button menu__button_chat mobile-menu__button-chat--open\"> \r\n                        <svg width=\"40\" \r\n                            height=\"40\" \r\n                            viewBox=\"0 0 40 40\" \r\n                            fill=\"none\" \r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\" fill=\"white\"/>\r\n                            <mask id=\"mask0_0_1880\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"10\" y=\"11\" width=\"20\" height=\"20\">\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 11H12C10.9 11 10.01 11.9 10.01 13L10 31L14 26H28C29.1 26 30 25.1 30 24V13C30 11.9 29.1 11 28 11ZM21 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20H21C21.55 20 22 20.45 22 21C22 21.55 21.55 22 21 22ZM25 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H25C25.55 15 26 15.45 26 16C26 16.55 25.55 17 25 17Z\" fill=\"white\"/>\r\n                            </mask>\r\n                            <g mask=\"url(#mask0_0_1880)\">\r\n                            </g>\r\n                        </svg>\r\n                    </button>\r\n                    <button class=\"button menu__button menu__button_profile\"> \r\n                        <svg width=\"40\" \r\n                            height=\"40\" \r\n                            viewBox=\"0 0 40 40\" \r\n                            fill=\"none\" \r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                            <path d=\"M20.5 19C22.9853 19 25 16.9853 25 14.5C25 12.0147 22.9853 10 20.5 10C18.0147 10 16 12.0147 16 14.5C16 16.9853 18.0147 19 20.5 19Z\" fill=\"white\"/>\r\n                            <path d=\"M10.0166 26.6118C9.88693 27.3412 10.5352 28 11.339 28H28.6604C29.4902 28 30.1125 27.3412 29.9829 26.6118C29.2309 22.4 25.0561 20 19.9997 20C14.9433 20 10.7686 22.4 10.0166 26.6118Z\" fill=\"white\"/>\r\n                        </svg>\r\n                    </button>\r\n                </div>\r\n                <div class=\"right-side  menu__right-side\">\r\n                    <span class=\"line menu__line-right\"></span>\r\n                    <button class=\"button menu__button menu__button_repair-img\">\r\n                        <svg width=\"40\" \r\n                            height=\"40\" \r\n                            viewBox=\"0 0 40 40\" \r\n                            fill=\"none\" \r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" fill=\"#F2F2F2\"/>\r\n                            <g clip-path=\"url(#clip0_0_312)\">\r\n                            <rect width=\"320\" height=\"597\" transform=\"translate(-208 -24)\" fill=\"white\"/>\r\n                            <rect x=\"-208\" y=\"-24\" width=\"320\" height=\"88\" fill=\"white\"/>\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                            <path d=\"M18.2581 23.4583L18.6668 23.0494L16.95 21.3322L16.5412 21.7411L16.3368 21.5367C16.0098 21.1687 15.6828 20.9643 15.3558 21.0052C15.1105 21.0052 14.9061 21.1687 14.7426 21.414C14.4973 21.8229 14.62 22.2726 14.6608 22.5588C14.6608 22.6406 14.7017 22.6815 14.7017 22.7632C14.7017 22.8859 14.7017 23.0494 14.4156 23.0903C14.0068 23.213 13.4754 23.3356 12.944 23.6218C12.2082 24.0307 11.7176 24.3987 11.4315 24.7666C9.91902 26.7291 10.0008 28.4055 10.0008 28.4872C10.0008 28.6099 10.0417 28.6917 10.1234 28.7325L11.2271 29.8773C11.3089 29.9591 11.3906 30 11.4724 30C11.4724 30 11.5133 30 11.595 30C12.0038 30 13.4754 29.9182 15.1922 28.569C15.5601 28.2828 15.928 27.7922 16.3368 27.0562C16.623 26.5656 16.7865 26.0341 16.8682 25.5844C16.95 25.2982 17.0726 25.2982 17.1953 25.2982C17.2361 25.2982 17.3179 25.339 17.3996 25.339C17.5631 25.3799 17.7267 25.4208 17.931 25.4208C18.1354 25.4208 18.3398 25.3799 18.5442 25.2573C18.7895 25.0937 18.953 24.8893 18.9939 24.644C19.0347 24.3169 18.8712 23.9898 18.5033 23.7036L18.2581 23.4583Z\" fill=\"white\"/>\r\n                            <path d=\"M26.884 14.8784L28.0188 14.326C28.0609 14.2835 28.1449 14.241 28.1869 14.1986L29.9101 11.8616C30.0362 11.6916 30.0362 11.4367 29.8681 11.3092L28.6913 10.1195C28.5652 9.99199 28.313 9.9495 28.1449 10.077L25.8333 11.8191C25.7913 11.8616 25.7493 11.9041 25.7072 11.989L25.1609 13.1363L21 17.2154L22.7652 19L26.884 14.8784Z\" fill=\"white\"/>\r\n                            <path d=\"M27.8527 23.0448C26.8636 22.0036 25.4393 21.6288 24.0941 22.0036L17.6453 15.1733C17.7244 14.7985 17.764 14.4653 17.764 14.0905C17.764 13.0493 17.3683 12.0081 16.6166 11.2167C15.588 10.0923 14.045 9.71742 12.6207 10.2172C12.5416 10.2588 12.4229 10.3838 12.3833 10.5504C12.3833 10.6753 12.4229 10.8003 12.502 10.9252L14.4406 12.966C14.8758 13.4241 14.8758 14.2154 14.4406 14.6735C14.0054 15.1317 13.2537 15.1317 12.8185 14.6735L10.8799 12.6328C10.7612 12.5495 10.6425 12.5078 10.4843 12.5495C10.3656 12.5495 10.2469 12.6744 10.2073 12.7994C9.73256 14.2571 10.0886 15.8813 11.1173 16.9642C11.8294 17.7555 12.8581 18.172 13.8867 18.172C14.2032 18.172 14.5593 18.1303 14.8758 18.047L21.3642 24.8773C21.0082 26.2933 21.4038 27.7927 22.3533 28.8339C23.105 29.6252 24.0546 30 25.0832 30C25.5184 30 25.914 29.9167 26.3492 29.7918C26.4679 29.7501 26.5866 29.6252 26.6262 29.5002C26.6658 29.3753 26.6262 29.2087 26.5075 29.1254L24.5689 27.0846C24.3711 26.8764 24.2128 26.5432 24.2128 26.21C24.2128 25.8768 24.3315 25.5853 24.5689 25.3354C24.8063 25.0855 25.0832 24.9606 25.3997 24.9606C25.7162 24.9606 25.9932 25.0855 26.2306 25.3354L28.1692 27.3762C28.2879 27.4595 28.4065 27.5011 28.5252 27.5011C28.6439 27.4595 28.7626 27.3762 28.8022 27.2512C28.9209 26.8348 29 26.3766 29 25.9185C29 24.8356 28.6044 23.7944 27.8527 23.0448Z\" fill=\"white\"/>\r\n                            </g>\r\n                            <defs>\r\n                            <clipPath id=\"clip0_0_312\">\r\n                            <rect width=\"320\" height=\"597\" fill=\"white\" transform=\"translate(-208 -24)\"/>\r\n                            </clipPath>\r\n                            </defs>\r\n                        </svg>     \r\n                    </button>\r\n                    <button class=\"button menu__button menu__button_checkstatus-img\">\r\n                        <svg width=\"40\" \r\n                            height=\"40\" \r\n                            viewBox=\"0 0 40 40\" \r\n                            fill=\"none\" \r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                        >\r\n                            <rect width=\"40\" height=\"40\" fill=\"#F2F2F2\"/>\r\n                            <g clip-path=\"url(#clip0_0_312)\">\r\n                            <rect width=\"320\" height=\"597\" transform=\"translate(-264 -24)\" fill=\"white\"/>\r\n                            <rect x=\"-264\" y=\"-24\" width=\"320\" height=\"88\" fill=\"white\"/>\r\n                            <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\"/>\r\n                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 11C12 10.4477 12.4477 10 13 10H27C27.5523 10 28 10.4477 28 11V28.5C27.1716 28.5 26.5 29.1715 26.5 29.9999H25.5C25.5 29.1715 24.8284 28.5 24 28.5C23.1716 28.5 22.5 29.1715 22.5 29.9999H21.5C21.5 29.1715 20.8284 28.5 20 28.5C19.1716 28.5 18.5 29.1715 18.5 29.9999H17.5C17.5 29.1715 16.8284 28.5 16 28.5C15.1716 28.5 14.5 29.1715 14.5 29.9999H13.5C13.5 29.1715 12.8284 28.5 12 28.5V11ZM21.4163 21.7884C20.5536 22.3443 19.4703 22.5936 18.3296 22.3827C16.5274 22.0472 15.0895 20.5326 14.8595 18.7114C14.4952 15.8261 16.9492 13.4201 19.8538 13.8802C21.656 14.1677 23.1034 15.6439 23.4006 17.4365C23.5828 18.5484 23.3239 19.5741 22.7871 20.4272L24.896 22.5265C25.2699 22.9003 25.2699 23.5138 24.896 23.8876C24.5126 24.2711 23.8991 24.2711 23.5252 23.8972L21.4163 21.7884ZM16.7058 18.0588C16.7058 16.7599 17.7599 15.7058 19.0588 15.7058C20.3576 15.7058 21.4117 16.7599 21.4117 18.0588C21.4117 19.3576 20.3576 20.4117 19.0588 20.4117C17.7599 20.4117 16.7058 19.3576 16.7058 18.0588Z\" fill=\"white\"/>\r\n                            </g>\r\n                            <defs>\r\n                            <clipPath id=\"clip0_0_312\">\r\n                            <rect width=\"320\" height=\"597\" fill=\"white\" transform=\"translate(-264 -24)\"/>\r\n                            </clipPath>\r\n                            </defs>\r\n                        </svg>\r\n                    </button>\r\n                </div>\r\n            </nav>  \r\n        </header>\r\n        <main class=\"main-container\">\r\n            <div class=\"title\"> \r\n                <div class=\"title__text\">\r\n                    <span class=\"title__text-img\"></span>\r\n                    <h1 class=\"title__text-name\">Услуги и сервисы</h1>\r\n                    <div class=\"title__right-side right-side right-side__hidden\">\r\n                        <button class=\"button menu__button button_text menu__button_repair-img\">\r\n                            Оставить заявку\r\n                            <svg\r\n                                width=\"40\"\r\n                                height=\"40\"\r\n                                viewBox=\"0 0 40 40\"\r\n                                fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" fill=\"#F2F2F2\" />\r\n                                <g clip-path=\"url(#clip0_0_312)\">\r\n                                <rect\r\n                                    width=\"320\"\r\n                                    height=\"597\"\r\n                                    transform=\"translate(-208 -24)\"\r\n                                    fill=\"white\"\r\n                                />\r\n                                <rect x=\"-208\" y=\"-24\" width=\"320\" height=\"88\" fill=\"white\" />\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                                <path\r\n                                    d=\"M18.2581 23.4583L18.6668 23.0494L16.95 21.3322L16.5412 21.7411L16.3368 21.5367C16.0098 21.1687 15.6828 20.9643 15.3558 21.0052C15.1105 21.0052 14.9061 21.1687 14.7426 21.414C14.4973 21.8229 14.62 22.2726 14.6608 22.5588C14.6608 22.6406 14.7017 22.6815 14.7017 22.7632C14.7017 22.8859 14.7017 23.0494 14.4156 23.0903C14.0068 23.213 13.4754 23.3356 12.944 23.6218C12.2082 24.0307 11.7176 24.3987 11.4315 24.7666C9.91902 26.7291 10.0008 28.4055 10.0008 28.4872C10.0008 28.6099 10.0417 28.6917 10.1234 28.7325L11.2271 29.8773C11.3089 29.9591 11.3906 30 11.4724 30C11.4724 30 11.5133 30 11.595 30C12.0038 30 13.4754 29.9182 15.1922 28.569C15.5601 28.2828 15.928 27.7922 16.3368 27.0562C16.623 26.5656 16.7865 26.0341 16.8682 25.5844C16.95 25.2982 17.0726 25.2982 17.1953 25.2982C17.2361 25.2982 17.3179 25.339 17.3996 25.339C17.5631 25.3799 17.7267 25.4208 17.931 25.4208C18.1354 25.4208 18.3398 25.3799 18.5442 25.2573C18.7895 25.0937 18.953 24.8893 18.9939 24.644C19.0347 24.3169 18.8712 23.9898 18.5033 23.7036L18.2581 23.4583Z\"\r\n                                    fill=\"white\"\r\n                                />\r\n                                <path\r\n                                    d=\"M26.884 14.8784L28.0188 14.326C28.0609 14.2835 28.1449 14.241 28.1869 14.1986L29.9101 11.8616C30.0362 11.6916 30.0362 11.4367 29.8681 11.3092L28.6913 10.1195C28.5652 9.99199 28.313 9.9495 28.1449 10.077L25.8333 11.8191C25.7913 11.8616 25.7493 11.9041 25.7072 11.989L25.1609 13.1363L21 17.2154L22.7652 19L26.884 14.8784Z\"\r\n                                    fill=\"white\"\r\n                                />\r\n                                <path\r\n                                    d=\"M27.8527 23.0448C26.8636 22.0036 25.4393 21.6288 24.0941 22.0036L17.6453 15.1733C17.7244 14.7985 17.764 14.4653 17.764 14.0905C17.764 13.0493 17.3683 12.0081 16.6166 11.2167C15.588 10.0923 14.045 9.71742 12.6207 10.2172C12.5416 10.2588 12.4229 10.3838 12.3833 10.5504C12.3833 10.6753 12.4229 10.8003 12.502 10.9252L14.4406 12.966C14.8758 13.4241 14.8758 14.2154 14.4406 14.6735C14.0054 15.1317 13.2537 15.1317 12.8185 14.6735L10.8799 12.6328C10.7612 12.5495 10.6425 12.5078 10.4843 12.5495C10.3656 12.5495 10.2469 12.6744 10.2073 12.7994C9.73256 14.2571 10.0886 15.8813 11.1173 16.9642C11.8294 17.7555 12.8581 18.172 13.8867 18.172C14.2032 18.172 14.5593 18.1303 14.8758 18.047L21.3642 24.8773C21.0082 26.2933 21.4038 27.7927 22.3533 28.8339C23.105 29.6252 24.0546 30 25.0832 30C25.5184 30 25.914 29.9167 26.3492 29.7918C26.4679 29.7501 26.5866 29.6252 26.6262 29.5002C26.6658 29.3753 26.6262 29.2087 26.5075 29.1254L24.5689 27.0846C24.3711 26.8764 24.2128 26.5432 24.2128 26.21C24.2128 25.8768 24.3315 25.5853 24.5689 25.3354C24.8063 25.0855 25.0832 24.9606 25.3997 24.9606C25.7162 24.9606 25.9932 25.0855 26.2306 25.3354L28.1692 27.3762C28.2879 27.4595 28.4065 27.5011 28.5252 27.5011C28.6439 27.4595 28.7626 27.3762 28.8022 27.2512C28.9209 26.8348 29 26.3766 29 25.9185C29 24.8356 28.6044 23.7944 27.8527 23.0448Z\"\r\n                                    fill=\"white\"\r\n                                />\r\n                                </g>\r\n                                <defs>\r\n                                    <clipPath id=\"clip0_0_312\">\r\n                                        <rect\r\n                                        width=\"320\"\r\n                                        height=\"597\"\r\n                                        fill=\"white\"\r\n                                        transform=\"translate(-208 -24)\"\r\n                                    />\r\n                                    </clipPath>\r\n                                </defs>\r\n                            </svg> \r\n                        </button>\r\n                        <button class=\"button menu__button button_text menu__button_checkstatus-img\"> \r\n                            Статус ремонта\r\n                            <svg\r\n                                width=\"40\"\r\n                                height=\"40\"\r\n                                viewBox=\"0 0 40 40\"\r\n                                zill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                                <rect width=\"40\" height=\"40\" fill=\"#F2F2F2\" />\r\n                                <g clip-path=\"url(#clip0_0_312)\">\r\n                                <rect\r\n                                width=\"320\"\r\n                                height=\"597\"\r\n                                transform=\"translate(-264 -24)\"\r\n                                fill=\"white\"\r\n                                />\r\n                                <rect x=\"-264\" y=\"-24\" width=\"320\" height=\"88\" fill=\"white\" />\r\n                                <rect width=\"40\" height=\"40\" rx=\"20\" fill=\"#FF3E79\" />\r\n                                <path\r\n                                    fill-rule=\"evenodd\"\r\n                                    clip-rule=\"evenodd\"\r\n                                    d=\"M12 11C12 10.4477 12.4477 10 13 10H27C27.5523 10 28 10.4477 28 11V28.5C27.1716 28.5 26.5 29.1715 26.5 29.9999H25.5C25.5 29.1715 24.8284 28.5 24 28.5C23.1716 28.5 22.5 29.1715 22.5 29.9999H21.5C21.5 29.1715 20.8284 28.5 20 28.5C19.1716 28.5 18.5 29.1715 18.5 29.9999H17.5C17.5 29.1715 16.8284 28.5 16 28.5C15.1716 28.5 14.5 29.1715 14.5 29.9999H13.5C13.5 29.1715 12.8284 28.5 12 28.5V11ZM21.4163 21.7884C20.5536 22.3443 19.4703 22.5936 18.3296 22.3827C16.5274 22.0472 15.0895 20.5326 14.8595 18.7114C14.4952 15.8261 16.9492 13.4201 19.8538 13.8802C21.656 14.1677 23.1034 15.6439 23.4006 17.4365C23.5828 18.5484 23.3239 19.5741 22.7871 20.4272L24.896 22.5265C25.2699 22.9003 25.2699 23.5138 24.896 23.8876C24.5126 24.2711 23.8991 24.2711 23.5252 23.8972L21.4163 21.7884ZM16.7058 18.0588C16.7058 16.7599 17.7599 15.7058 19.0588 15.7058C20.3576 15.7058 21.4117 16.7599 21.4117 18.0588C21.4117 19.3576 20.3576 20.4117 19.0588 20.4117C17.7599 20.4117 16.7058 19.3576 16.7058 18.0588Z\"\r\n                                    fill=\"white\"\r\n                                />\r\n                                </g>\r\n                                <defs>\r\n                                    <clipPath id=\"clip0_0_312\">\r\n                                        <rect\r\n                                        width=\"320\"\r\n                                        height=\"597\"\r\n                                        fill=\"white\"\r\n                                        transform=\"translate(-264 -24)\"\r\n                                        />\r\n                                    </clipPath>\r\n                                </defs>\r\n                            </svg>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <nav class=\"navigation\">\r\n                <ul class=\"nav__list\">\r\n                    <li class=\"nav__list-item nav__list-item_selected\">\r\n                        <button class=\"nav__button\">Ремонтируемые бренды</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item nav__list-item nav__list-item_hidden-1120\">\r\n                        <button class=\"nav__button\">Дополнительные услуги</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item nav__list-item nav__list-item_hidden-320\">\r\n                        <button class=\"nav__button\">Ремонтируемые устройства</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item\">\r\n                            <button class=\"nav__button\">Цены на услуги</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item\">\r\n                            <button class=\"nav__button\">Адреса сервисных центров</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item\">\r\n                            <button class=\"nav__button\">Специальные цены</button>\r\n                    </li>\r\n                    <li class=\"nav__list-item\">\r\n                        <button class=\"nav__button\">Отзывы</button>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"main-discription\">\r\n                <div class=\"text-all main-discription__text-all\">\r\n                    <div class=\"text-all__text\">\r\n                        <p >\r\n                            Мы являемся авторизованным сервисным центром по ремонту техники Dell.\r\n                            Только у нас вы можете отремонтировать свой ноутбук Dell с официальной\r\n                            гарантией производителя.\r\n                        </p>\r\n                        <p >\r\n                            Мы успешно работаем с 1992 года и заслужили репутацию надежного \r\n                            партнера, что подтверждает большое количество постоянных клиентов. \r\n                            Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою \r\n                            очередь, советуют нас родным и близким.\r\n                        </p> \r\n                        <p >\r\n                            Выбрав наш сервисный центр, вы получаете не только профессиональный \r\n                            ремонт, но и заботу о вашем устройстве, которая превращает наше \r\n                            сотрудничество в долгосрочное и взаимовыгодное партнерство. \r\n                            Благодарим вас за доверие, и будем рады помочь вам в поддержании \r\n                            вашей техники Dell в отличной форме.\r\n                        </p>\r\n                    </div>\r\n                    <button class=\"more-button text-all_more-button\">\r\n                    <svg class=\"more-button__down-blue\"\r\n                        width=\"24\"\r\n                        height=\"24\"\r\n                        viewBox=\"0 0 24 24\"\r\n                        fill=\"none\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                    >\r\n                        <path\r\n                        fill-rule=\"evenodd\"\r\n                        clip-rule=\"evenodd\"\r\n                        d=\"M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z\"\r\n                        fill=\"#41F6D7\"\r\n                        />\r\n                    </svg>\r\n                    <p class=\"text-all__button-text\">Читать далее</p>\r\n                    </button> \r\n                </div>\r\n                <div class=\"img main-discription__img\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Фон\" class=\"img__picture\"/> \r\n                </div>   \r\n            </div> \r\n            <!-- 1 -->\r\n            <section class=\"section\">\r\n                <div class=\"section__title\">\r\n                    <h1 class=\"text section__title-text\">Ремонт техники различных брендов</h1>\r\n                </div>\r\n                <div class=\"section__content\">\r\n                    <div class=\"swiper slider1 section__swiper\">\r\n                        <div class=\"swiper-wrapper section__swiper-wrapper\">\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Lenovo\" width=\"108px\" height=\"32px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Sumsung\" width=\"116px\" height=\"38px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Apple\" width=\"44px\" height=\"44px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"ViewSonic\"  width=\"128px\" height=\"21px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Bocsh\" width=\"128px\" height=\"28px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"HP\" width=\"52px\" height=\"52px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Acer\" width=\"94px\" height=\"24px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Sony\" width=\"108px\" height=\"32px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Lenovo\" width=\"108px\" height=\"32px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Sumsung\" width=\"116px\" height=\"38px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section__swiper-slide\">\r\n                                <div class=\"content-card section__content-card\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Apple\" width=\"44px\" height=\"44px\">\r\n                                    <button class=\"button section__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                      <div class=\"swiper-pagination section__content-swiper-pagination\">\r\n                      </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <button class=\"button section__content-button-down\">\r\n                    <svg class=\"section__content-button-down-blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z\" fill=\"#41F6D7\"/>\r\n                    </svg>\r\n                    <p class=\"section__content-button-down_text\">Показать все</p>\r\n                </button>\r\n            </section>\r\n            <!-- 2 -->\r\n            <section class=\"section-repair\">\r\n                <div class=\"section__title\">\r\n                    <h1 class=\"text section__title-text\">Ремонт различных видов техники</h1>\r\n                </div>\r\n                <div class=\"section-repair__content\">\r\n                    <div class=\"swiper slider2 section-repair__swiper\">\r\n                        <div class=\"swiper-wrapper section-repair__swiper-wrapper\">\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт ноутбуков</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт планшетов</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт ПК</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт мониторов</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт мониторов</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт ноутбуков</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт планшетов</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-repair__swiper-slide\">\r\n                                <div class=\"content-card section-repair__content-card\">\r\n                                    <p class=\"content-card__title\">Ремонт ПК</p>\r\n                                    <button class=\"button section-repair__content-button\">\r\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\">\r\n                                            <rect x=\"1\" y=\"1\" width=\"38\" height=\"38\" rx=\"19\" stroke=\"#FF3E79\" stroke-width=\"2\"/>\r\n                                            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z\" fill=\"#FF3E79\"/>\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                      <div class=\"swiper-pagination section-repair__content-swiper-pagination\">\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <button class=\"button section-repair__content-button-down\">\r\n                    <svg class=\"section-repair__content-button-down-blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z\" fill=\"#41F6D7\"/>\r\n                    </svg>\r\n                    <p class=\"section-repair__content-button-down_text\">Показать все</p>\r\n                </button>\r\n            </section>\r\n            <!-- 3 -->\r\n            <section class=\"section-price\">\r\n                <div class=\"section__title\">\r\n                    <h1 class=\"text section__title-text\">Цены на услуги</h1>\r\n                </div>\r\n                <div class=\"section-price__description\">\r\n                    <p class=\"section-price__description-text\">Ремонтные услуги</p>\r\n                    <p class=\"section-price__description-text\">Цена</p>\r\n                    <p class=\"section-price__description-text\">Срок</p>\r\n                </div>\r\n                <div class=\"section-price__content\">\r\n                    <div class=\"swiper slider3 section-price__swiper\">\r\n                        <div class=\"swiper-wrapper section-price__swiper-wrapper\">\r\n                            <div class=\"swiper-slide section-price__swiper-slide\">\r\n                            <div class=\"content-card section-price__content-card\">\r\n                                    <div class=\"block-service section-price__block-service\">\r\n                                    <p class=\"section-price__block-title\">Ремонтные услуги</p>\r\n                                    <p\r\n                                        class=\"section-price__block-text section-price__type-service\"\r\n                                    >\r\n                                        Тестирование с выдачей технического заключения\r\n                                    </p>\r\n                                    </div>\r\n                                    <div class=\"block-price section-price__block-price\">\r\n                                    <p class=\"section-price__block-title\">Цена</p>\r\n                                    <p class=\"section-price__block-text\">1 000 ₽</p>\r\n                                    </div>\r\n                                    <div class=\"block-term section-price__block-term\">\r\n                                    <p class=\"section-price__block-title\">Срок</p>\r\n                                    <p class=\"section-price__block-text\">30-120 мин</p>\r\n                                    </div>\r\n                                    <button class=\"button section-price__button\">\r\n                                    <p>Заказать</p>\r\n                                    <svg\r\n                                        class=\"section-price__button-svg\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"24\"\r\n                                        height=\"24\"\r\n                                        viewBox=\"0 0 24 24\"\r\n                                        fill=\"none\"\r\n                                    >\r\n                                        <rect width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                                        <path\r\n                                        fill-rule=\"evenodd\"\r\n                                        clip-rule=\"evenodd\"\r\n                                        d=\"M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z\"\r\n                                        fill=\"white\"\r\n                                        />\r\n                                    </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-price__swiper-slide\">\r\n                                <div class=\"content-card section-price__content-card\">\r\n                                    <div class=\"block-service section-price__block-service\">\r\n                                        <p class=\"section-price__block-title\">Ремонтные услуги</p>\r\n                                        <p\r\n                                        class=\"section-price__block-text section-price__type-service\"\r\n                                        >\r\n                                        Диагностика\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"block-price section-price__block-price\">\r\n                                        <p class=\"section-price__block-title\">Цена</p>\r\n                                        <p class=\"section-price__block-text\">Бесплатно</p>\r\n                                    </div>\r\n                                    <div class=\"block-term section-price__block-term\">\r\n                                        <p class=\"section-price__block-title\">Срок</p>\r\n                                        <p class=\"section-price__block-text\">30 мин</p>\r\n                                    </div>\r\n                                    <button class=\"button section-price__button\">\r\n                                        <p>Заказать</p>\r\n                                        <svg\r\n                                        class=\"section-price__button-svg\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"24\"\r\n                                        height=\"24\"\r\n                                        viewBox=\"0 0 24 24\"\r\n                                        fill=\"none\"\r\n                                        >\r\n                                        <rect width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                                        <path\r\n                                            fill-rule=\"evenodd\"\r\n                                            clip-rule=\"evenodd\"\r\n                                            d=\"M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z\"\r\n                                            fill=\"white\"\r\n                                        />\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-price__swiper-slide\">\r\n                                <div class=\"content-card section-price__content-card\">\r\n                                    <div class=\"block-service section-price__block-service\">\r\n                                        <p class=\"section-price__block-title\">Ремонтные услуги</p>\r\n                                        <p\r\n                                        class=\"section-price__block-text section-price__type-service\"\r\n                                        >\r\n                                        Замена дисплея\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"block-price section-price__block-price\">\r\n                                        <p class=\"section-price__block-title\">Цена</p>\r\n                                        <p class=\"section-price__block-text\">1 000 ₽</p>\r\n                                    </div>\r\n                                    <div class=\"block-term section-price__block-term\">\r\n                                        <p class=\"section-price__block-title\">Срок</p>\r\n                                        <p class=\"section-price__block-text\">30-120 мин</p>\r\n                                    </div>\r\n                                    <button class=\"button section-price__button\">\r\n                                        <p>Заказать</p>\r\n                                        <svg\r\n                                        class=\"section-price__button-svg\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"24\"\r\n                                        height=\"24\"\r\n                                        viewBox=\"0 0 24 24\"\r\n                                        fill=\"none\"\r\n                                        >\r\n                                        <rect width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                                        <path\r\n                                            fill-rule=\"evenodd\"\r\n                                            clip-rule=\"evenodd\"\r\n                                            d=\"M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z\"\r\n                                            fill=\"white\"\r\n                                        />\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-price__swiper-slide\">\r\n                                <div class=\"content-card section-price__content-card\">\r\n                                    <div class=\"block-service section-price__block-service\">\r\n                                        <p class=\"section-price__block-title\">Ремонтные услуги</p>\r\n                                        <p\r\n                                        class=\"section-price__block-text section-price__type-service\"\r\n                                        >\r\n                                        Замена полифонического динамика\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"block-price section-price__block-price\">\r\n                                        <p class=\"section-price__block-title\">Цена</p>\r\n                                        <p class=\"section-price__block-text\">1 000 ₽</p>\r\n                                    </div>\r\n                                    <div class=\"block-term section-price__block-term\">\r\n                                        <p class=\"section-price__block-title\">Срок</p>\r\n                                        <p class=\"section-price__block-text\">30-120 мин</p>\r\n                                    </div>\r\n                                    <button class=\"button section-price__button\">\r\n                                        <p>Заказать</p>\r\n                                        <svg\r\n                                        class=\"section-price__button-svg\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"24\"\r\n                                        height=\"24\"\r\n                                        viewBox=\"0 0 24 24\"\r\n                                        fill=\"none\"\r\n                                        >\r\n                                        <rect width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                                        <path\r\n                                            fill-rule=\"evenodd\"\r\n                                            clip-rule=\"evenodd\"\r\n                                            d=\"M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z\"\r\n                                            fill=\"white\"\r\n                                        />\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"swiper-slide section-price__swiper-slide\">\r\n                                <div class=\"content-card section-price__content-card\">\r\n                                    <div class=\"block-service section-price__block-service\">\r\n                                        <p class=\"section-price__block-title\">Ремонтные услуги</p>\r\n                                        <p\r\n                                        class=\"section-price__block-text section-price__type-service\"\r\n                                        >\r\n                                        Замена программного обеспечения\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"block-price section-price__block-price\">\r\n                                        <p class=\"section-price__block-title\">Цена</p>\r\n                                        <p class=\"section-price__block-text\">1 000 ₽</p>\r\n                                    </div>\r\n                                    <div class=\"block-term section-price__block-term\">\r\n                                        <p class=\"section-price__block-title\">Срок</p>\r\n                                        <p class=\"section-price__block-text\">30-120 мин</p>\r\n                                    </div>\r\n                                    <button class=\"button section-price__button\">\r\n                                        <p>Заказать</p>\r\n                                        <svg\r\n                                        class=\"section-price__button-svg\"\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"24\"\r\n                                        height=\"24\"\r\n                                        viewBox=\"0 0 24 24\"\r\n                                        fill=\"none\"\r\n                                        >\r\n                                        <rect width=\"24\" height=\"24\" rx=\"12\" fill=\"#FF3E79\" />\r\n                                        <path\r\n                                            fill-rule=\"evenodd\"\r\n                                            clip-rule=\"evenodd\"\r\n                                            d=\"M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z\"\r\n                                            fill=\"white\"\r\n                                        />\r\n                                        </svg>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"swiper-pagination section-price__content-swiper-pagination\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <div class=\"section-information\">\r\n                <p class=\"section-information__text\">\r\n                  Все цены указаны с учетом НДС. Стоимость ремонта указана на\r\n                  единичную услугу. Для получения коммерческого предложения на\r\n                  постоянное обслуживание, оставьте заявку.\r\n                </p>\r\n                <a href=\"#\" class=\"section-information__special\"\r\n                  >Получить коммерческое предложение\r\n                </a>\r\n            </div>\r\n        </main> \r\n        <footer>\r\n            <div class=\"footer-wrapper\">\r\n                <p class=\"footer-wrapper__copyright\">© 2019 CPS <br>Разработано командой Apesong</p>\r\n                <p class=\"footer-wrapper__copyright\">Политика конфиденциальности</p>\r\n                <p class=\"footer-wrapper__copyright\">Информация, размещенная на данной странице, не является публичной офертой</p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n    <" + "script\r\n    src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"\r\n    defer\r\n  ><" + "/script>\r\n    </section>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/Bitmap (1).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (1).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (1).png";

/***/ }),

/***/ "./src/img/Bitmap (2).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (2).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (2).png";

/***/ }),

/***/ "./src/img/Bitmap (3).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (3).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (3).png";

/***/ }),

/***/ "./src/img/Bitmap (4).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (4).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (4).png";

/***/ }),

/***/ "./src/img/Bitmap (5).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (5).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (5).png";

/***/ }),

/***/ "./src/img/Bitmap (6).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (6).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (6).png";

/***/ }),

/***/ "./src/img/Bitmap (7).png":
/*!********************************!*\
  !*** ./src/img/Bitmap (7).png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap (7).png";

/***/ }),

/***/ "./src/img/Bitmap.png":
/*!****************************!*\
  !*** ./src/img/Bitmap.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bitmap.png";

/***/ }),

/***/ "./src/img/Group.svg":
/*!***************************!*\
  !*** ./src/img/Group.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Group.svg";

/***/ }),

/***/ "./src/img/_MG_3223.png":
/*!******************************!*\
  !*** ./src/img/_MG_3223.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/_MG_3223.png";

/***/ }),

/***/ "./src/img/more.svg":
/*!**************************!*\
  !*** ./src/img/more.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/more.svg";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold.eot":
/*!************************************!*\
  !*** ./src/fonts/TTLakes-Bold.eot ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold..eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold.woff":
/*!*************************************!*\
  !*** ./src/fonts/TTLakes-Bold.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Bold..woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium.eot":
/*!**************************************!*\
  !*** ./src/fonts/TTLakes-Medium.eot ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium..eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium.woff":
/*!***************************************!*\
  !*** ./src/fonts/TTLakes-Medium.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium..woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular.eot":
/*!***************************************!*\
  !*** ./src/fonts/TTLakes-Regular.eot ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular..eot";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular.woff":
/*!****************************************!*\
  !*** ./src/fonts/TTLakes-Regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular..woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_button_brends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/button-brends.js */ "./src/js/button-brends.js");
/* harmony import */ var _js_button_brends_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_button_brends_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_button_repair_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/button-repair.js */ "./src/js/button-repair.js");
/* harmony import */ var _js_button_repair_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_button_repair_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_button_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/button-main.js */ "./src/js/button-main.js");
/* harmony import */ var _js_button_main_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_button_main_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/mobile-menu.js */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/modal.js */ "./src/js/modal.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_modal_js__WEBPACK_IMPORTED_MODULE_7__);








// import './js/swiper-bundle.min';
})();

/******/ })()
;
//# sourceMappingURL=index.07fdbb142e160b888277.js.map