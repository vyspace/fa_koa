/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(32);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(51);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(216);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = __webpack_require__(109);

var _style2 = _interopRequireDefault(_style);

var _errorStackParser = __webpack_require__(110);

var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

var _objectAssign = __webpack_require__(112);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lib = __webpack_require__(113);

var _sourcemappedStacktrace = __webpack_require__(114);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RedBoxError = exports.RedBoxError = function (_get__2) {
  _inherits(RedBoxError, _get__2);

  function RedBoxError(props) {
    _classCallCheck(this, RedBoxError);

    var _this = _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).call(this, props));

    _this.state = {
      error: null,
      mapped: false
    };

    _this.mapOnConstruction(props.error);
    return _this;
  }

  // State is used to store the error mapped to the source map.


  _createClass(RedBoxError, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.mapped) this.mapError(this.props.error);
    }

    // Try to map the error when the component gets constructed, this is possible
    // in some cases like evals.

  }, {
    key: 'mapOnConstruction',
    value: function mapOnConstruction(error) {
      var stackLines = error.stack.split('\n');

      // There's no stack, only the error message.
      if (stackLines.length < 2) {
        this.state = { error: error, mapped: true };
        return;
      }

      // Using the “eval” setting on webpack already gives the correct location.
      var isWebpackEval = stackLines[1].search(/\(webpack:\/{3}/) !== -1;
      if (isWebpackEval) {
        // No changes are needed here.
        this.state = { error: error, mapped: true };
        return;
      }

      // Other eval follow a specific pattern and can be easily parsed.
      var isEval = stackLines[1].search(/\(eval at/) !== -1;
      if (!isEval) {
        // mapping will be deferred until `componentDidMount`
        this.state = { error: error, mapped: false };
        return;
      }

      // The first line is the error message.
      var fixedLines = [stackLines.shift()];
      // The rest needs to be fixed.
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stackLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var stackLine = _step.value;

          var evalStackLine = stackLine.match(/(.+)\(eval at (.+) \(.+?\), .+(\:[0-9]+\:[0-9]+)\)/);
          if (evalStackLine) {
            var _evalStackLine = _slicedToArray(evalStackLine, 4),
                atSomething = _evalStackLine[1],
                file = _evalStackLine[2],
                rowColumn = _evalStackLine[3];

            fixedLines.push(atSomething + ' (' + file + rowColumn + ')');
          } else {
            // TODO: When stack frames of different types are detected, try to load the additional source maps
            fixedLines.push(stackLine);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      error.stack = fixedLines.join('\n');
      this.state = { error: error, mapped: true };
    }
  }, {
    key: 'mapError',
    value: function mapError(error) {
      var _this2 = this;

      _get__('mapStackTrace')(error.stack, function (mappedStack) {
        error.stack = mappedStack.join('\n');
        _this2.setState({ error: error, mapped: true });
      });
    }
  }, {
    key: 'renderFrames',
    value: function renderFrames(frames) {
      var _props = this.props,
          filename = _props.filename,
          editorScheme = _props.editorScheme,
          useLines = _props.useLines,
          useColumns = _props.useColumns;

      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style),
          frame = _get__3.frame,
          file = _get__3.file,
          linkToFile = _get__3.linkToFile;

      return frames.map(function (f, index) {
        var text = void 0;
        var url = void 0;

        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
          url = _get__('makeUrl')(filename, editorScheme);
          text = _get__('makeLinkText')(filename);
        } else {
          var lines = useLines ? f.lineNumber : null;
          var columns = useColumns ? f.columnNumber : null;
          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
          text = _get__('makeLinkText')(f.fileName, lines, columns);
        }

        return _get__('React').createElement('div', { style: frame, key: index }, _get__('React').createElement('div', null, f.functionName), _get__('React').createElement('div', { style: file }, _get__('React').createElement('a', { href: url, style: linkToFile }, text)));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // The error is received as a property to initialize state.error, which may
      // be updated when it is mapped to the source map.
      var error = this.state.error;
      var className = this.props.className;

      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style),
          redbox = _get__4.redbox,
          message = _get__4.message,
          stack = _get__4.stack,
          frame = _get__4.frame;

      var frames = void 0;
      var parseError = void 0;
      try {
        frames = _get__('ErrorStackParser').parse(error);
      } catch (e) {
        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
      }

      if (parseError) {
        frames = _get__('React').createElement('div', { style: frame, key: 0 }, _get__('React').createElement('div', null, parseError.message));
      } else {
        frames = this.renderFrames(frames);
      }

      return _get__('React').createElement('div', { style: redbox, className: className }, _get__('React').createElement('div', { style: message }, error.name, ': ', error.message), _get__('React').createElement('div', { style: stack }, frames));
    }
  }]);

  return RedBoxError;
}(_get__('Component'));

// "Portal" component for actual RedBoxError component to
// render to (directly under body). Prevents bugs as in #27.


RedBoxError.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired,
  filename: _get__('PropTypes').string,
  editorScheme: _get__('PropTypes').string,
  useLines: _get__('PropTypes').bool,
  useColumns: _get__('PropTypes').bool,
  style: _get__('PropTypes').object,
  className: _get__('PropTypes').string
};
RedBoxError.displayName = 'RedBoxError';
RedBoxError.defaultProps = {
  useLines: true,
  useColumns: true
};

var RedBox = function (_get__5) {
  _inherits(RedBox, _get__5);

  function RedBox() {
    _classCallCheck(this, RedBox);

    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
  }

  _createClass(RedBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el = document.createElement('div');
      document.body.appendChild(this.el);
      this.renderRedBoxError();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderRedBoxError();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get__('ReactDOM').unmountComponentAtNode(this.el);
      document.body.removeChild(this.el);
      this.el = null;
    }
  }, {
    key: 'renderRedBoxError',
    value: function renderRedBoxError() {
      _get__('ReactDOM').render(_get__('React').createElement(_get__('RedBoxError'), this.props), this.el);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RedBox;
}(_get__('Component'));

RedBox.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired
};
RedBox.displayName = 'RedBox';
exports.default = RedBox;

function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}

;
var _RewireModuleId__ = null;

function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    var globalVariable = _getGlobalObject();

    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }

    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }

  return _RewireModuleId__;
}

function _getRewireRegistry__() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }

  return __$$GLOBAL_REWIRE_REGISTRY__;
}

function _getRewiredData__() {
  var moduleId = _getRewireModuleId__();

  var registry = _getRewireRegistry__();

  var rewireData = registry[moduleId];

  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }

  return rewireData;
}

(function registerResetAll() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'PropTypes':
      return _propTypes2.default;

    case 'mapStackTrace':
      return _sourcemappedStacktrace.mapStackTrace;

    case 'assign':
      return _objectAssign2.default;

    case 'style':
      return _style2.default;

    case 'isFilenameAbsolute':
      return _lib.isFilenameAbsolute;

    case 'makeUrl':
      return _lib.makeUrl;

    case 'makeLinkText':
      return _lib.makeLinkText;

    case 'ErrorStackParser':
      return _errorStackParser2.default;

    case 'Component':
      return _react.Component;

    case 'ReactDOM':
      return _reactDom2.default;

    case 'React':
      return _react2.default;

    case 'RedBoxError':
      return RedBoxError;
  }

  return undefined;
}

function _assign__(variableName, value) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  var rewireData = _getRewiredData__();

  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  var rewireData = _getRewiredData__();

  delete rewireData[variableName];

  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }

  ;
}

function _with__(object) {
  var rewireData = _getRewiredData__();

  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(RedBox, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = catchErrors;
function catchErrors(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;

  var _imports = _slicedToArray(imports, 3);

  var React = _imports[0];
  var ErrorReporter = _imports[1];
  var reporterOptions = _imports[2];

  if (!React || !React.Component) {
    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
  }
  if (typeof ErrorReporter !== 'function') {
    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
  }

  return function wrapToCatchErrors(ReactClass, componentId) {
    var originalRender = ReactClass.prototype.render;

    ReactClass.prototype.render = function tryRender() {
      try {
        return originalRender.apply(this, arguments);
      } catch (err) {
        setTimeout(function () {
          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
            // We're in React Native. Don't throw.
            // Stop react-native from triggering its own error handler
            console.reportErrorsAsExceptions = false;
            // Log an error
            console.error(err);
            // Reactivate it so other errors are still handled
            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
          } else {
            throw err;
          }
        });

        return React.createElement(ErrorReporter, _extends({
          error: err,
          filename: filename
        }, reporterOptions));
      }
    };

    return ReactClass;
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
}();

exports['default'] = proxyReactComponents;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _reactProxy = __webpack_require__(115);

var _globalWindow = __webpack_require__(219);

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var componentProxies = undefined;
if (_globalWindow2['default'].__reactComponentProxies) {
  componentProxies = _globalWindow2['default'].__reactComponentProxies;
} else {
  componentProxies = {};
  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: componentProxies
  });
}

function proxyReactComponents(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;
  var locals = _ref.locals;

  var _imports = _slicedToArray(imports, 1);

  var React = _imports[0];

  var _locals = _slicedToArray(locals, 1);

  var hot = _locals[0].hot;

  if (!React.Component) {
    throw new Error('imports[0] for react-transform-hmr does not look like React.');
  }

  if (!hot || typeof hot.accept !== 'function') {
    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
  }

  if (Object.keys(components).some(function (key) {
    return !components[key].isInFunction;
  })) {
    hot.accept(function (err) {
      if (err) {
        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
        console.error(err);
      }
    });
  }

  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);

  return function wrapWithProxy(ReactClass, uniqueId) {
    var _components$uniqueId = components[uniqueId];
    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
    var _components$uniqueId$displayName = _components$uniqueId.displayName;
    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;

    if (isInFunction) {
      return ReactClass;
    }

    var globalUniqueId = filename + '$' + uniqueId;
    if (componentProxies[globalUniqueId]) {
      (function () {
        console.info('[React Transform HMR] Patching ' + displayName);
        var instances = componentProxies[globalUniqueId].update(ReactClass);
        setTimeout(function () {
          return instances.forEach(forceUpdate);
        });
      })();
    } else {
      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
    }

    return componentProxies[globalUniqueId].get();
  };
}

module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;

var _MemoryRouter2 = __webpack_require__(221);

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _Prompt2 = __webpack_require__(223);

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(224);

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(82);

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(48);

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(227);

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(228);

var _Switch3 = _interopRequireDefault(_Switch2);

var _matchPath2 = __webpack_require__(49);

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(229);

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MemoryRouter = _MemoryRouter3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(205);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(197);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(61);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateHeader = updateHeader;
var HEADER_UPDATE = exports.HEADER_UPDATE = 'HEADER_UPDATE';

function updateHeader(payload) {
    return {
        type: HEADER_UPDATE,
        payload: payload
    };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateFooter = updateFooter;
var FOOTER_UPDATE = exports.FOOTER_UPDATE = 'FOOTER_UPDATE';

function uFooter(payload) {
    return {
        type: FOOTER_UPDATE,
        payload: payload
    };
}

function updateFooter(payload) {
    return function (dispatch) {
        dispatch(uFooter(payload));
    };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsNative = __webpack_require__(131),
    getValue = __webpack_require__(136);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
var win = window;
(function (global, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return factory(global);
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else factory(global);
})(undefined, function () {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : win;

  var Zepto = function () {
    var undefined,
        key,
        $,
        classList,
        emptyArray = [],
        _concat = emptyArray.concat,
        _filter = emptyArray.filter,
        _slice = emptyArray.slice,
        document = window.document,
        elementDisplay = {},
        classCache = {},
        cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        rootNodeRE = /^(?:body|html)$/i,
        capitalRE = /([A-Z])/g,


    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
        table = document.createElement('table'),
        tableRow = document.createElement('tr'),
        containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
        readyRE = /complete|loaded|interactive/,
        simpleSelectorRE = /^[\w-]*$/,
        class2type = {},
        toString = class2type.toString,
        zepto = {},
        camelize,
        uniq,
        tempParent = document.createElement('div'),
        propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
        isArray = Array.isArray || function (object) {
      return object instanceof Array;
    };

    zepto.matches = function (element, selector) {
      if (!selector || !element || element.nodeType !== 1) return false;
      var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
      if (matchesSelector) return matchesSelector.call(element, selector);
      // fall back to performing a selector:
      var match,
          parent = element.parentNode,
          temp = !parent;
      if (temp) (parent = tempParent).appendChild(element);
      match = ~zepto.qsa(parent, selector).indexOf(element);
      temp && tempParent.removeChild(element);
      return match;
    };

    function type(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }

    function isFunction(value) {
      return type(value) == "function";
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    function isDocument(obj) {
      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    }
    function isObject(obj) {
      return type(obj) == "object";
    }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }

    function likeArray(obj) {
      var length = !!obj && 'length' in obj && obj.length,
          type = $.type(obj);

      return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
    }

    function compact(array) {
      return _filter.call(array, function (item) {
        return item != null;
      });
    }
    function flatten(array) {
      return array.length > 0 ? $.fn.concat.apply([], array) : array;
    }
    camelize = function camelize(str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }
    uniq = function uniq(array) {
      return _filter.call(array, function (item, idx) {
        return array.indexOf(item) == idx;
      });
    };

    function classRE(name) {
      return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
    }

    function maybeAddPx(name, value) {
      return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
    }

    function defaultDisplay(nodeName) {
      var element, display;
      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue("display");
        element.parentNode.removeChild(element);
        display == "none" && (display = "block");
        elementDisplay[nodeName] = display;
      }
      return elementDisplay[nodeName];
    }

    function _children(element) {
      return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
        if (node.nodeType == 1) return node;
      });
    }

    function Z(dom, selector) {
      var i,
          len = dom ? dom.length : 0;
      for (i = 0; i < len; i++) {
        this[i] = dom[i];
      }this.length = len;
      this.selector = selector || '';
    }

    // `$.zepto.fragment` takes a html string and an optional tag name
    // to generate DOM nodes from the given html string.
    // The generated DOM nodes are returned as an array.
    // This function can be overridden in plugins for example to make
    // it compatible with browsers that don't support the DOM fully.
    zepto.fragment = function (html, name, properties) {
      var dom, nodes, container;

      // A special case optimization for a single tag
      if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

      if (!dom) {
        if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
        if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
        if (!(name in containers)) name = '*';

        container = containers[name];
        container.innerHTML = '' + html;
        dom = $.each(_slice.call(container.childNodes), function () {
          container.removeChild(this);
        });
      }

      if (isPlainObject(properties)) {
        nodes = $(dom);
        $.each(properties, function (key, value) {
          if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
        });
      }

      return dom;
    };

    // `$.zepto.Z` swaps out the prototype of the given `dom` array
    // of nodes with `$.fn` and thus supplying all the Zepto functions
    // to the array. This method can be overridden in plugins.
    zepto.Z = function (dom, selector) {
      return new Z(dom, selector);
    };

    // `$.zepto.isZ` should return `true` if the given object is a Zepto
    // collection. This method can be overridden in plugins.
    zepto.isZ = function (object) {
      return object instanceof zepto.Z;
    };

    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
    // takes a CSS selector and an optional context (and handles various
    // special cases).
    // This method can be overridden in plugins.
    zepto.init = function (selector, context) {
      var dom;
      // If nothing given, return an empty Zepto collection
      if (!selector) return zepto.Z();
      // Optimize for string selectors
      else if (typeof selector == 'string') {
          selector = selector.trim();
          // If it's a html fragment, create nodes from it
          // Note: In both Chrome 21 and Firefox 15, DOM error 12
          // is thrown if the fragment doesn't begin with <
          if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
          // If there's a context, create a collection on that context first, and select
          // nodes from there
          else if (context !== undefined) return $(context).find(selector);
            // If it's a CSS selector, use it to select nodes.
            else dom = zepto.qsa(document, selector);
        }
        // If a function is given, call it when the DOM is ready
        else if (isFunction(selector)) return $(document).ready(selector);
          // If a Zepto collection is given, just return it
          else if (zepto.isZ(selector)) return selector;else {
              // normalize array if an array of nodes is given
              if (isArray(selector)) dom = compact(selector);
              // Wrap DOM nodes.
              else if (isObject(selector)) dom = [selector], selector = null;
                // If it's a html fragment, create nodes from it
                else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
                  // If there's a context, create a collection on that context first, and select
                  // nodes from there
                  else if (context !== undefined) return $(context).find(selector);
                    // And last but no least, if it's a CSS selector, use it to select nodes.
                    else dom = zepto.qsa(document, selector);
            }
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector);
    };

    // `$` will be the base `Zepto` object. When calling this
    // function just call `$.zepto.init, which makes the implementation
    // details of selecting nodes and creating Zepto collections
    // patchable in plugins.
    $ = function $(selector, context) {
      return zepto.init(selector, context);
    };

    function extend(target, source, deep) {
      for (key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
          if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
          extend(target[key], source[key], deep);
        } else if (source[key] !== undefined) target[key] = source[key];
      }
    }

    // Copy all but undefined properties from one or more
    // objects to the `target` object.
    $.extend = function (target) {
      var deep,
          args = _slice.call(arguments, 1);
      if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    };

    // `$.zepto.qsa` is Zepto's CSS selector implementation which
    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
    // This method can be overridden in plugins.
    zepto.qsa = function (element, selector) {
      var found,
          maybeID = selector[0] == '#',
          maybeClass = !maybeID && selector[0] == '.',
          nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
          // Ensure that a 1 char tag name still gets checked
      isSimple = simpleSelectorRE.test(nameOnly);
      return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
      (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
      maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
      element.getElementsByTagName(selector) : // Or a tag
      element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      );
    };

    function filtered(nodes, selector) {
      return selector == null ? $(nodes) : $(nodes).filter(selector);
    }

    $.contains = document.documentElement.contains ? function (parent, node) {
      return parent !== node && parent.contains(node);
    } : function (parent, node) {
      while (node && (node = node.parentNode)) {
        if (node === parent) return true;
      }return false;
    };

    function funcArg(context, arg, idx, payload) {
      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
    }

    function setAttribute(node, name, value) {
      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
    }

    // access className property while respecting SVGAnimatedString
    function className(node, value) {
      var klass = node.className || '',
          svg = klass && klass.baseVal !== undefined;

      if (value === undefined) return svg ? klass.baseVal : klass;
      svg ? klass.baseVal = value : node.className = value;
    }

    // "true"  => true
    // "false" => false
    // "null"  => null
    // "42"    => 42
    // "42.5"  => 42.5
    // "08"    => "08"
    // JSON    => parse if valid
    // String  => self
    function deserializeValue(value) {
      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
      } catch (e) {
        return value;
      }
    }

    $.type = type;
    $.isFunction = isFunction;
    $.isWindow = isWindow;
    $.isArray = isArray;
    $.isPlainObject = isPlainObject;

    $.isEmptyObject = function (obj) {
      var name;
      for (name in obj) {
        return false;
      }return true;
    };

    $.isNumeric = function (val) {
      var num = Number(val),
          type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
      return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;
    };

    $.inArray = function (elem, array, i) {
      return emptyArray.indexOf.call(array, elem, i);
    };

    $.camelCase = camelize;
    $.trim = function (str) {
      return str == null ? "" : String.prototype.trim.call(str);
    };

    // plugin compatibility
    $.uuid = 0;
    $.support = {};
    $.expr = {};
    $.noop = function () {};

    $.map = function (elements, callback) {
      var value,
          values = [],
          i,
          key;
      if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i);
        if (value != null) values.push(value);
      } else for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) values.push(value);
      }
      return flatten(values);
    };

    $.each = function (elements, callback) {
      var i, key;
      if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++) {
          if (callback.call(elements[i], i, elements[i]) === false) return elements;
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) return elements;
        }
      }

      return elements;
    };

    $.grep = function (elements, callback) {
      return _filter.call(elements, callback);
    };

    if (window.JSON) $.parseJSON = JSON.parse;

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    // Define methods that will be available on all
    // Zepto collections
    $.fn = {
      constructor: zepto.Z,
      length: 0,

      // Because a collection acts like an array
      // copy over these useful array functions.
      forEach: emptyArray.forEach,
      reduce: emptyArray.reduce,
      push: emptyArray.push,
      sort: emptyArray.sort,
      splice: emptyArray.splice,
      indexOf: emptyArray.indexOf,
      concat: function concat() {
        var i,
            value,
            args = [];
        for (i = 0; i < arguments.length; i++) {
          value = arguments[i];
          args[i] = zepto.isZ(value) ? value.toArray() : value;
        }
        return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
      },

      // `map` and `slice` in the jQuery API work differently
      // from their array counterparts
      map: function map(fn) {
        return $($.map(this, function (el, i) {
          return fn.call(el, i, el);
        }));
      },
      slice: function slice() {
        return $(_slice.apply(this, arguments));
      },

      ready: function ready(callback) {
        // need to check if document.body exists for IE as that browser reports
        // document ready when it hasn't yet created the body element
        if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
          callback($);
        }, false);
        return this;
      },
      get: function get(idx) {
        return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
      },
      toArray: function toArray() {
        return this.get();
      },
      size: function size() {
        return this.length;
      },
      remove: function remove() {
        return this.each(function () {
          if (this.parentNode != null) this.parentNode.removeChild(this);
        });
      },
      each: function each(callback) {
        emptyArray.every.call(this, function (el, idx) {
          return callback.call(el, idx, el) !== false;
        });
        return this;
      },
      filter: function filter(selector) {
        if (isFunction(selector)) return this.not(this.not(selector));
        return $(_filter.call(this, function (element) {
          return zepto.matches(element, selector);
        }));
      },
      add: function add(selector, context) {
        return $(uniq(this.concat($(selector, context))));
      },
      is: function is(selector) {
        return this.length > 0 && zepto.matches(this[0], selector);
      },
      not: function not(selector) {
        var nodes = [];
        if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
          if (!selector.call(this, idx)) nodes.push(this);
        });else {
          var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
          this.forEach(function (el) {
            if (excludes.indexOf(el) < 0) nodes.push(el);
          });
        }
        return $(nodes);
      },
      has: function has(selector) {
        return this.filter(function () {
          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
        });
      },
      eq: function eq(idx) {
        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
      },
      first: function first() {
        var el = this[0];
        return el && !isObject(el) ? el : $(el);
      },
      last: function last() {
        var el = this[this.length - 1];
        return el && !isObject(el) ? el : $(el);
      },
      find: function find(selector) {
        var result,
            $this = this;
        if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
          var node = this;
          return emptyArray.some.call($this, function (parent) {
            return $.contains(parent, node);
          });
        });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
          return zepto.qsa(this, selector);
        });
        return result;
      },
      closest: function closest(selector, context) {
        var nodes = [],
            collection = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object' && $(selector);
        this.each(function (_, node) {
          while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
            node = node !== context && !isDocument(node) && node.parentNode;
          }if (node && nodes.indexOf(node) < 0) nodes.push(node);
        });
        return $(nodes);
      },
      parents: function parents(selector) {
        var ancestors = [],
            nodes = this;
        while (nodes.length > 0) {
          nodes = $.map(nodes, function (node) {
            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
              ancestors.push(node);
              return node;
            }
          });
        }return filtered(ancestors, selector);
      },
      parent: function parent(selector) {
        return filtered(uniq(this.pluck('parentNode')), selector);
      },
      children: function children(selector) {
        return filtered(this.map(function () {
          return _children(this);
        }), selector);
      },
      contents: function contents() {
        return this.map(function () {
          return this.contentDocument || _slice.call(this.childNodes);
        });
      },
      siblings: function siblings(selector) {
        return filtered(this.map(function (i, el) {
          return _filter.call(_children(el.parentNode), function (child) {
            return child !== el;
          });
        }), selector);
      },
      empty: function empty() {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      // `pluck` is borrowed from Prototype.js
      pluck: function pluck(property) {
        return $.map(this, function (el) {
          return el[property];
        });
      },
      show: function show() {
        return this.each(function () {
          this.style.display == "none" && (this.style.display = '');
          if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
        });
      },
      replaceWith: function replaceWith(newContent) {
        return this.before(newContent).remove();
      },
      wrap: function wrap(structure) {
        var func = isFunction(structure);
        if (this[0] && !func) var dom = $(structure).get(0),
            clone = dom.parentNode || this.length > 1;

        return this.each(function (index) {
          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
        });
      },
      wrapAll: function wrapAll(structure) {
        if (this[0]) {
          $(this[0]).before(structure = $(structure));
          var children;
          // drill down to the inmost element
          while ((children = structure.children()).length) {
            structure = children.first();
          }$(structure).append(this);
        }
        return this;
      },
      wrapInner: function wrapInner(structure) {
        var func = isFunction(structure);
        return this.each(function (index) {
          var self = $(this),
              contents = self.contents(),
              dom = func ? structure.call(this, index) : structure;
          contents.length ? contents.wrapAll(dom) : self.append(dom);
        });
      },
      unwrap: function unwrap() {
        this.parent().each(function () {
          $(this).replaceWith($(this).children());
        });
        return this;
      },
      clone: function clone() {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },
      hide: function hide() {
        return this.css("display", "none");
      },
      toggle: function toggle(setting) {
        return this.each(function () {
          var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
        });
      },
      prev: function prev(selector) {
        return $(this.pluck('previousElementSibling')).filter(selector || '*');
      },
      next: function next(selector) {
        return $(this.pluck('nextElementSibling')).filter(selector || '*');
      },
      html: function html(_html) {
        return 0 in arguments ? this.each(function (idx) {
          var originHtml = this.innerHTML;
          $(this).empty().append(funcArg(this, _html, idx, originHtml));
        }) : 0 in this ? this[0].innerHTML : null;
      },
      text: function text(_text) {
        return 0 in arguments ? this.each(function (idx) {
          var newText = funcArg(this, _text, idx, this.textContent);
          this.textContent = newText == null ? '' : '' + newText;
        }) : 0 in this ? this.pluck('textContent').join("") : null;
      },
      attr: function attr(name, value) {
        var result;
        return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
          if (this.nodeType !== 1) return;
          if (isObject(name)) for (key in name) {
            setAttribute(this, key, name[key]);
          } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
        });
      },
      removeAttr: function removeAttr(name) {
        return this.each(function () {
          this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
            setAttribute(this, attribute);
          }, this);
        });
      },
      prop: function prop(name, value) {
        name = propMap[name] || name;
        return 1 in arguments ? this.each(function (idx) {
          this[name] = funcArg(this, value, idx, this[name]);
        }) : this[0] && this[0][name];
      },
      removeProp: function removeProp(name) {
        name = propMap[name] || name;
        return this.each(function () {
          delete this[name];
        });
      },
      data: function data(name, value) {
        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

        return data !== null ? deserializeValue(data) : undefined;
      },
      val: function val(value) {
        if (0 in arguments) {
          if (value == null) value = "";
          return this.each(function (idx) {
            this.value = funcArg(this, value, idx, this.value);
          });
        } else {
          return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
            return this.selected;
          }).pluck('value') : this[0].value);
        }
      },
      offset: function offset(coordinates) {
        if (coordinates) return this.each(function (index) {
          var $this = $(this),
              coords = funcArg(this, coordinates, index, $this.offset()),
              parentOffset = $this.offsetParent().offset(),
              props = {
            top: coords.top - parentOffset.top,
            left: coords.left - parentOffset.left
          };

          if ($this.css('position') == 'static') props['position'] = 'relative';
          $this.css(props);
        });
        if (!this.length) return null;
        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return { top: 0, left: 0 };
        var obj = this[0].getBoundingClientRect();
        return {
          left: obj.left + window.pageXOffset,
          top: obj.top + window.pageYOffset,
          width: Math.round(obj.width),
          height: Math.round(obj.height)
        };
      },
      css: function css(property, value) {
        if (arguments.length < 2) {
          var element = this[0];
          if (typeof property == 'string') {
            if (!element) return;
            return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
          } else if (isArray(property)) {
            if (!element) return;
            var props = {};
            var computedStyle = getComputedStyle(element, '');
            $.each(property, function (_, prop) {
              props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
            });
            return props;
          }
        }

        var css = '';
        if (type(property) == 'string') {
          if (!value && value !== 0) this.each(function () {
            this.style.removeProperty(dasherize(property));
          });else css = dasherize(property) + ":" + maybeAddPx(property, value);
        } else {
          for (key in property) {
            if (!property[key] && property[key] !== 0) this.each(function () {
              this.style.removeProperty(dasherize(key));
            });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
          }
        }

        return this.each(function () {
          this.style.cssText += ';' + css;
        });
      },
      index: function index(element) {
        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function hasClass(name) {
        if (!name) return false;
        return emptyArray.some.call(this, function (el) {
          return this.test(className(el));
        }, classRE(name));
      },
      addClass: function addClass(name) {
        if (!name) return this;
        return this.each(function (idx) {
          if (!('className' in this)) return;
          classList = [];
          var cls = className(this),
              newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function (klass) {
            if (!$(this).hasClass(klass)) classList.push(klass);
          }, this);
          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
        });
      },
      removeClass: function removeClass(name) {
        return this.each(function (idx) {
          if (!('className' in this)) return;
          if (name === undefined) return className(this, '');
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
            classList = classList.replace(classRE(klass), " ");
          });
          className(this, classList.trim());
        });
      },
      toggleClass: function toggleClass(name, when) {
        if (!name) return this;
        return this.each(function (idx) {
          var $this = $(this),
              names = funcArg(this, name, idx, className(this));
          names.split(/\s+/g).forEach(function (klass) {
            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
          });
        });
      },
      scrollTop: function scrollTop(value) {
        if (!this.length) return;
        var hasScrollTop = 'scrollTop' in this[0];
        if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
        return this.each(hasScrollTop ? function () {
          this.scrollTop = value;
        } : function () {
          this.scrollTo(this.scrollX, value);
        });
      },
      scrollLeft: function scrollLeft(value) {
        if (!this.length) return;
        var hasScrollLeft = 'scrollLeft' in this[0];
        if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
        return this.each(hasScrollLeft ? function () {
          this.scrollLeft = value;
        } : function () {
          this.scrollTo(value, this.scrollY);
        });
      },
      position: function position() {
        if (!this.length) return;

        var elem = this[0],

        // Get *real* offsetParent
        offsetParent = this.offsetParent(),

        // Get correct offsets
        offset = this.offset(),
            parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

        // Subtract element margins
        // note: when an element has margin: auto the offsetLeft and marginLeft
        // are the same in Safari causing offset.left to incorrectly be 0
        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
        offset.left -= parseFloat($(elem).css('margin-left')) || 0;

        // Add offsetParent borders
        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

        // Subtract the two offsets
        return {
          top: offset.top - parentOffset.top,
          left: offset.left - parentOffset.left
        };
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          var parent = this.offsetParent || document.body;
          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
            parent = parent.offsetParent;
          }return parent;
        });
      }

      // for now
    };$.fn.detach = $.fn.remove

    // Generate the `width` and `height` functions
    ;['width', 'height'].forEach(function (dimension) {
      var dimensionProperty = dimension.replace(/./, function (m) {
        return m[0].toUpperCase();
      });

      $.fn[dimension] = function (value) {
        var offset,
            el = this[0];
        if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
          el = $(this);
          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
        });
      };
    });

    function traverseNode(node, fun) {
      fun(node);
      for (var i = 0, len = node.childNodes.length; i < len; i++) {
        traverseNode(node.childNodes[i], fun);
      }
    }

    // Generate the `after`, `prepend`, `before`, `append`,
    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
    adjacencyOperators.forEach(function (operator, operatorIndex) {
      var inside = operatorIndex % 2; //=> prepend, append

      $.fn[operator] = function () {
        // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
        var argType,
            nodes = $.map(arguments, function (arg) {
          var arr = [];
          argType = type(arg);
          if (argType == "array") {
            arg.forEach(function (el) {
              if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
              arr = arr.concat(zepto.fragment(el));
            });
            return arr;
          }
          return argType == "object" || arg == null ? arg : zepto.fragment(arg);
        }),
            parent,
            copyByClone = this.length > 1;
        if (nodes.length < 1) return this;

        return this.each(function (_, target) {
          parent = inside ? target : target.parentNode;

          // convert all methods to a "before" operation
          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

          var parentInDocument = $.contains(document.documentElement, parent);

          nodes.forEach(function (node) {
            if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

            parent.insertBefore(node, target);
            if (parentInDocument) traverseNode(node, function (el) {
              if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {
                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
                target['eval'].call(target, el.innerHTML);
              }
            });
          });
        });
      };

      // after    => insertAfter
      // prepend  => prependTo
      // before   => insertBefore
      // append   => appendTo
      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
        $(html)[operator](this);
        return this;
      };
    });

    zepto.Z.prototype = Z.prototype = $.fn;

    // Export internal API functions in the `$.zepto` namespace
    zepto.uniq = uniq;
    zepto.deserializeValue = deserializeValue;
    $.zepto = zepto;

    return $;
  }();

  window.Zepto = Zepto;
  window.$ === undefined && (window.$ = Zepto);(function ($) {
    var _zid = 1,
        undefined,
        slice = Array.prototype.slice,
        isFunction = $.isFunction,
        isString = function isString(obj) {
      return typeof obj == 'string';
    },
        handlers = {},
        specialEvents = {},
        focusinSupported = 'onfocusin' in window,
        focus = { focus: 'focusin', blur: 'focusout' },
        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

    function zid(element) {
      return element._zid || (element._zid = _zid++);
    }
    function findHandlers(element, event, fn, selector) {
      event = parse(event);
      if (event.ns) var matcher = matcherFor(event.ns);
      return (handlers[zid(element)] || []).filter(function (handler) {
        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
      });
    }
    function parse(event) {
      var parts = ('' + event).split('.');
      return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
    }
    function matcherFor(ns) {
      return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
    }

    function eventCapture(handler, captureSetting) {
      return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
    }

    function realEvent(type) {
      return hover[type] || focusinSupported && focus[type] || type;
    }

    function add(element, events, fn, data, selector, delegator, capture) {
      var id = zid(element),
          set = handlers[id] || (handlers[id] = []);
      events.split(/\s/).forEach(function (event) {
        if (event == 'ready') return $(document).ready(fn);
        var handler = parse(event);
        handler.fn = fn;
        handler.sel = selector;
        // emulate mouseenter, mouseleave
        if (handler.e in hover) fn = function fn(e) {
          var related = e.relatedTarget;
          if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
        };
        handler.del = delegator;
        var callback = delegator || fn;
        handler.proxy = function (e) {
          e = compatible(e);
          if (e.isImmediatePropagationStopped()) return;
          e.data = data;
          var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
          if (result === false) e.preventDefault(), e.stopPropagation();
          return result;
        };
        handler.i = set.length;
        set.push(handler);
        if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
      });
    }
    function remove(element, events, fn, selector, capture) {
      var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
        findHandlers(element, event, fn, selector).forEach(function (handler) {
          delete handlers[id][handler.i];
          if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        });
      });
    }

    $.event = { add: add, remove: remove };

    $.proxy = function (fn, context) {
      var args = 2 in arguments && slice.call(arguments, 2);
      if (isFunction(fn)) {
        var proxyFn = function proxyFn() {
          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
        };
        proxyFn._zid = zid(fn);
        return proxyFn;
      } else if (isString(context)) {
        if (args) {
          args.unshift(fn[context], fn);
          return $.proxy.apply(null, args);
        } else {
          return $.proxy(fn[context], fn);
        }
      } else {
        throw new TypeError("expected function");
      }
    };

    $.fn.bind = function (event, data, callback) {
      return this.on(event, data, callback);
    };
    $.fn.unbind = function (event, callback) {
      return this.off(event, callback);
    };
    $.fn.one = function (event, selector, data, callback) {
      return this.on(event, selector, data, callback, 1);
    };

    var returnTrue = function returnTrue() {
      return true;
    },
        returnFalse = function returnFalse() {
      return false;
    },
        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        eventMethods = {
      preventDefault: 'isDefaultPrevented',
      stopImmediatePropagation: 'isImmediatePropagationStopped',
      stopPropagation: 'isPropagationStopped'
    };

    function compatible(event, source) {
      if (source || !event.isDefaultPrevented) {
        source || (source = event);

        $.each(eventMethods, function (name, predicate) {
          var sourceMethod = source[name];
          event[name] = function () {
            this[predicate] = returnTrue;
            return sourceMethod && sourceMethod.apply(source, arguments);
          };
          event[predicate] = returnFalse;
        });

        event.timeStamp || (event.timeStamp = Date.now());

        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
      }
      return event;
    }

    function createProxy(event) {
      var key,
          proxy = { originalEvent: event };
      for (key in event) {
        if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
      }return compatible(proxy, event);
    }

    $.fn.delegate = function (selector, event, callback) {
      return this.on(event, selector, callback);
    };
    $.fn.undelegate = function (selector, event, callback) {
      return this.off(event, selector, callback);
    };

    $.fn.live = function (event, callback) {
      $(document.body).delegate(this.selector, event, callback);
      return this;
    };
    $.fn.die = function (event, callback) {
      $(document.body).undelegate(this.selector, event, callback);
      return this;
    };

    $.fn.on = function (event, selector, data, callback, one) {
      var autoRemove,
          delegator,
          $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.on(type, selector, data, fn, one);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
      if (callback === undefined || data === false) callback = data, data = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function (_, element) {
        if (one) autoRemove = function autoRemove(e) {
          remove(element, e.type, callback);
          return callback.apply(this, arguments);
        };

        if (selector) delegator = function delegator(e) {
          var evt,
              match = $(e.target).closest(selector, element).get(0);
          if (match && match !== element) {
            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
          }
        };

        add(element, event, callback, data, selector, delegator || autoRemove);
      });
    };
    $.fn.off = function (event, selector, callback) {
      var $this = this;
      if (event && !isString(event)) {
        $.each(event, function (type, fn) {
          $this.off(type, selector, fn);
        });
        return $this;
      }

      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

      if (callback === false) callback = returnFalse;

      return $this.each(function () {
        remove(this, event, callback, selector);
      });
    };

    $.fn.trigger = function (event, args) {
      event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
      event._args = args;
      return this.each(function () {
        // handle focus(), blur() by calling them directly
        if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
        // items in the collection might not be DOM elements
        else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
      });
    };

    // triggers event handlers on current element just as if an event occurred,
    // doesn't trigger an actual event, doesn't bubble
    $.fn.triggerHandler = function (event, args) {
      var e, result;
      this.each(function (i, element) {
        e = createProxy(isString(event) ? $.Event(event) : event);
        e._args = args;
        e.target = element;
        $.each(findHandlers(element, event.type || event), function (i, handler) {
          result = handler.proxy(e);
          if (e.isImmediatePropagationStopped()) return false;
        });
      });
      return result;
    }

    // shortcut methods for `.bind(event, fn)` for each event type
    ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
      $.fn[event] = function (callback) {
        return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
      };
    });

    $.Event = function (type, props) {
      if (!isString(type)) props = type, type = props.type;
      var event = document.createEvent(specialEvents[type] || 'Events'),
          bubbles = true;
      if (props) for (var name in props) {
        name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
      }event.initEvent(type, bubbles, true);
      return compatible(event);
    };
  })(Zepto);(function ($) {
    var jsonpID = +new Date(),
        document = window.document,
        key,
        name,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        scriptTypeRE = /^(?:text|application)\/javascript/i,
        xmlTypeRE = /^(?:text|application)\/xml/i,
        jsonType = 'application/json',
        htmlType = 'text/html',
        blankRE = /^\s*$/,
        originAnchor = document.createElement('a');

    originAnchor.href = window.location.href;

    // trigger a custom event and return false if it was cancelled
    function triggerAndReturn(context, eventName, data) {
      var event = $.Event(eventName);
      $(context).trigger(event, data);
      return !event.isDefaultPrevented();
    }

    // trigger an Ajax "global" event
    function triggerGlobal(settings, context, eventName, data) {
      if (settings.global) return triggerAndReturn(context || document, eventName, data);
    }

    // Number of active Ajax requests
    $.active = 0;

    function ajaxStart(settings) {
      if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
    }
    function ajaxStop(settings) {
      if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
    }

    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
    function ajaxBeforeSend(xhr, settings) {
      var context = settings.context;
      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

      triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
    }
    function ajaxSuccess(data, xhr, settings, deferred) {
      var context = settings.context,
          status = 'success';
      settings.success.call(context, data, status, xhr);
      if (deferred) deferred.resolveWith(context, [data, status, xhr]);
      triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
      ajaxComplete(status, xhr, settings);
    }
    // type: "timeout", "error", "abort", "parsererror"
    function ajaxError(error, type, xhr, settings, deferred) {
      var context = settings.context;
      settings.error.call(context, xhr, type, error);
      if (deferred) deferred.rejectWith(context, [xhr, type, error]);
      triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
      ajaxComplete(type, xhr, settings);
    }
    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
    function ajaxComplete(status, xhr, settings) {
      var context = settings.context;
      settings.complete.call(context, xhr, status);
      triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
      ajaxStop(settings);
    }

    function ajaxDataFilter(data, type, settings) {
      if (settings.dataFilter == empty) return data;
      var context = settings.context;
      return settings.dataFilter.call(context, data, type);
    }

    // Empty function, used as default callback
    function empty() {}

    $.ajaxJSONP = function (options, deferred) {
      if (!('type' in options)) return $.ajax(options);

      var _callbackName = options.jsonpCallback,
          callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'Zepto' + jsonpID++,
          script = document.createElement('script'),
          originalCallback = window[callbackName],
          responseData,
          abort = function abort(errorType) {
        $(script).triggerHandler('error', errorType || 'abort');
      },
          xhr = { abort: abort },
          abortTimeout;

      if (deferred) deferred.promise(xhr);

      $(script).on('load error', function (e, errorType) {
        clearTimeout(abortTimeout);
        $(script).off().remove();

        if (e.type == 'error' || !responseData) {
          ajaxError(null, errorType || 'error', xhr, options, deferred);
        } else {
          ajaxSuccess(responseData[0], xhr, options, deferred);
        }

        window[callbackName] = originalCallback;
        if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

        originalCallback = responseData = undefined;
      });

      if (ajaxBeforeSend(xhr, options) === false) {
        abort('abort');
        return xhr;
      }

      window[callbackName] = function () {
        responseData = arguments;
      };

      script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
      document.head.appendChild(script);

      if (options.timeout > 0) abortTimeout = setTimeout(function () {
        abort('timeout');
      }, options.timeout);

      return xhr;
    };

    $.ajaxSettings = {
      // Default type of request
      type: 'GET',
      // Callback that is executed before request
      beforeSend: empty,
      // Callback that is executed if the request succeeds
      success: empty,
      // Callback that is executed the the server drops error
      error: empty,
      // Callback that is executed on request complete (both: error and success)
      complete: empty,
      // The context for the callbacks
      context: null,
      // Whether to trigger "global" Ajax events
      global: true,
      // Transport
      xhr: function xhr() {
        return new window.XMLHttpRequest();
      },
      // MIME types mapping
      // IIS returns Javascript as "application/x-javascript"
      accepts: {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json: jsonType,
        xml: 'application/xml, text/xml',
        html: htmlType,
        text: 'text/plain'
      },
      // Whether the request is to another domain
      crossDomain: false,
      // Default timeout
      timeout: 0,
      // Whether data should be serialized to string
      processData: true,
      // Whether the browser should be allowed to cache GET responses
      cache: true,
      //Used to handle the raw response data of XMLHttpRequest.
      //This is a pre-filtering function to sanitize the response.
      //The sanitized response should be returned
      dataFilter: empty
    };

    function mimeToDataType(mime) {
      if (mime) mime = mime.split(';', 2)[0];
      return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
    }

    function appendQuery(url, query) {
      if (query == '') return url;
      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }

    // serialize payload and append it to the URL for GET requests
    function serializeData(options) {
      if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
      if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;
    }

    $.ajax = function (options) {
      var settings = $.extend({}, options || {}),
          deferred = $.Deferred && $.Deferred(),
          urlAnchor,
          hashIndex;
      for (key in $.ajaxSettings) {
        if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
      }ajaxStart(settings);

      if (!settings.crossDomain) {
        urlAnchor = document.createElement('a');
        urlAnchor.href = settings.url;
        // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
        urlAnchor.href = urlAnchor.href;
        settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
      }

      if (!settings.url) settings.url = window.location.toString();
      if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);
      serializeData(settings);

      var dataType = settings.dataType,
          hasPlaceholder = /\?.+=\?/.test(settings.url);
      if (hasPlaceholder) dataType = 'jsonp';

      if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

      if ('jsonp' == dataType) {
        if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
        return $.ajaxJSONP(settings, deferred);
      }

      var mime = settings.accepts[dataType],
          headers = {},
          setHeader = function setHeader(name, value) {
        headers[name.toLowerCase()] = [name, value];
      },
          protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
          xhr = settings.xhr(),
          nativeSetHeader = xhr.setRequestHeader,
          abortTimeout;

      if (deferred) deferred.promise(xhr);

      if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
      setHeader('Accept', mime || '*/*');
      if (mime = settings.mimeType || mime) {
        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
        xhr.overrideMimeType && xhr.overrideMimeType(mime);
      }
      if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

      if (settings.headers) for (name in settings.headers) {
        setHeader(name, settings.headers[name]);
      }xhr.setRequestHeader = setHeader;

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;
          clearTimeout(abortTimeout);
          var result,
              error = false;
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));

            if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') result = xhr.response;else {
              result = xhr.responseText;

              try {
                // http://perfectionkills.com/global-eval-what-are-the-options/
                // sanitize response accordingly if data filter callback provided
                result = ajaxDataFilter(result, dataType, settings);
                if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
              } catch (e) {
                error = e;
              }

              if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred);
            }

            ajaxSuccess(result, xhr, settings, deferred);
          } else {
            ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
          }
        }
      };

      if (ajaxBeforeSend(xhr, settings) === false) {
        xhr.abort();
        ajaxError(null, 'abort', xhr, settings, deferred);
        return xhr;
      }

      var async = 'async' in settings ? settings.async : true;
      xhr.open(settings.type, settings.url, async, settings.username, settings.password);

      if (settings.xhrFields) for (name in settings.xhrFields) {
        xhr[name] = settings.xhrFields[name];
      }for (name in headers) {
        nativeSetHeader.apply(xhr, headers[name]);
      }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
        xhr.onreadystatechange = empty;
        xhr.abort();
        ajaxError(null, 'timeout', xhr, settings, deferred);
      }, settings.timeout);

      // avoid sending empty string (#319)
      xhr.send(settings.data ? settings.data : null);
      return xhr;
    };

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
      if ($.isFunction(data)) dataType = success, success = data, data = undefined;
      if (!$.isFunction(success)) dataType = success, success = undefined;
      return {
        url: url,
        data: data,
        success: success,
        dataType: dataType
      };
    }

    $.get = function () /* url, data, success, dataType */{
      return $.ajax(parseArguments.apply(null, arguments));
    };

    $.post = function () /* url, data, success, dataType */{
      var options = parseArguments.apply(null, arguments);
      options.type = 'POST';
      return $.ajax(options);
    };

    $.getJSON = function () /* url, data, success */{
      var options = parseArguments.apply(null, arguments);
      options.dataType = 'json';
      return $.ajax(options);
    };

    $.fn.load = function (url, data, success) {
      if (!this.length) return this;
      var self = this,
          parts = url.split(/\s/),
          selector,
          options = parseArguments(url, data, success),
          callback = options.success;
      if (parts.length > 1) options.url = parts[0], selector = parts[1];
      options.success = function (response) {
        self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
        callback && callback.apply(self, arguments);
      };
      $.ajax(options);
      return this;
    };

    var escape = encodeURIComponent;

    function serialize(params, obj, traditional, scope) {
      var type,
          array = $.isArray(obj),
          hash = $.isPlainObject(obj);
      $.each(obj, function (key, value) {
        type = $.type(value);
        if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
        // handle data in serializeArray() format
        if (!scope && array) params.add(value.name, value.value);
        // recurse into nested objects
        else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
      });
    }

    $.param = function (obj, traditional) {
      var params = [];
      params.add = function (key, value) {
        if ($.isFunction(value)) value = value();
        if (value == null) value = "";
        this.push(escape(key) + '=' + escape(value));
      };
      serialize(params, obj, traditional);
      return params.join('&').replace(/%20/g, '+');
    };
  })(Zepto);(function ($) {
    $.fn.serializeArray = function () {
      var name,
          type,
          result = [],
          add = function add(value) {
        if (value.forEach) return value.forEach(add);
        result.push({ name: name, value: value });
      };
      if (this[0]) $.each(this[0].elements, function (_, field) {
        type = field.type, name = field.name;
        if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
      });
      return result;
    };

    $.fn.serialize = function () {
      var result = [];
      this.serializeArray().forEach(function (elm) {
        result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
      });
      return result.join('&');
    };

    $.fn.submit = function (callback) {
      if (0 in arguments) this.bind('submit', callback);else if (this.length) {
        var event = $.Event('submit');
        this.eq(0).trigger(event);
        if (!event.isDefaultPrevented()) this.get(0).submit();
      }
      return this;
    };
  })(Zepto);(function () {
    // getComputedStyle shouldn't freak out when called
    // without a valid element as argument
    try {
      getComputedStyle(undefined);
    } catch (e) {
      var nativeGetComputedStyle = getComputedStyle;
      window.getComputedStyle = function (element, pseudoElement) {
        try {
          return nativeGetComputedStyle(element, pseudoElement);
        } catch (e) {
          return null;
        }
      };
    }
  })();
  return Zepto;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveStore = saveStore;
exports.restore = restore;
exports.savePageParams = savePageParams;
exports.getPageParams = getPageParams;
exports.saveEditArticle = saveEditArticle;
exports.getEditArticle = getEditArticle;
var storeTag = 'FA_PERSIST';
var isStore = 'FA_IS_PERSIST';
var pageParams = 'FA_PAGE_PARAMS';
var editArticle = 'FA_EDIT_ARTICLE';

function saveStore(obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(storeTag, str);
    sessionStorage.setItem(storeTag, isStore);
}

function getStore() {
    return JSON.parse(localStorage.getItem(storeTag));
}

function isRefreshPage() {
    return sessionStorage.getItem(storeTag) === isStore;
}

function restore(store) {
    if (isRefreshPage()) {
        Object.assign(store, getStore());
    }
}

function savePageParams(obj) {
    sessionStorage.setItem(pageParams, JSON.stringify(obj));
}

function getPageParams() {
    return JSON.parse(sessionStorage.getItem(pageParams));
}

function saveEditArticle(obj) {
    localStorage.setItem(editArticle, JSON.stringify(obj));
}

function getEditArticle() {
    return JSON.parse(localStorage.getItem(editArticle));
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(21),
    getRawTag = __webpack_require__(132),
    objectToString = __webpack_require__(133);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(10);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(60),
    isLength = __webpack_require__(44);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(200);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recordOriginal = recordOriginal;
var RECORD_ORIGINAL = exports.RECORD_ORIGINAL = 'RECORD_ORIGINAL';

function recordOriginal(payload) {
    return {
        type: RECORD_ORIGINAL,
        payload: payload
    };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggle = toggle;
var POPUP_TOGGLE = exports.POPUP_TOGGLE = 'POPUP_TOGGLE';

function toggle(payload) {
    return {
        type: POPUP_TOGGLE,
        payload: payload
    };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(90);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var listCacheClear = __webpack_require__(121),
    listCacheDelete = __webpack_require__(122),
    listCacheGet = __webpack_require__(123),
    listCacheHas = __webpack_require__(124),
    listCacheSet = __webpack_require__(125);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(30);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isKeyable = __webpack_require__(145);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__(163),
    baseKeys = __webpack_require__(169),
    isArrayLike = __webpack_require__(23);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _photoswipe = __webpack_require__(250);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PhotoBrowser: {
        displayName: 'PhotoBrowser'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/PhotoBrowser.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/PhotoBrowser.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var _gallery = Symbol('gallery'),
    _options = Symbol('options'),
    _pswp = Symbol('pswp');

var PhotoBrowser = _wrapComponent('PhotoBrowser')(function (_Component) {
    _inherits(PhotoBrowser, _Component);

    function PhotoBrowser() {
        _classCallCheck(this, PhotoBrowser);

        return _possibleConstructorReturn(this, (PhotoBrowser.__proto__ || Object.getPrototypeOf(PhotoBrowser)).apply(this, arguments));
    }

    _createClass(PhotoBrowser, [{
        key: 'render',
        value: function render() {
            /* const {  } = this.props;*/
            return _react3.default.createElement(
                'div',
                { className: 'pswp', tabIndex: '-1', role: 'dialog', 'aria-hidden': 'true', id: 'pswp' },
                _react3.default.createElement('div', { className: 'pswp__bg' }),
                _react3.default.createElement(
                    'div',
                    { className: 'pswp__scroll-wrap' },
                    _react3.default.createElement(
                        'div',
                        { className: 'pswp__container' },
                        _react3.default.createElement('div', { className: 'pswp__item' }),
                        _react3.default.createElement('div', { className: 'pswp__item' }),
                        _react3.default.createElement('div', { className: 'pswp__item' })
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'pswp__ui pswp__ui--hidden' },
                        _react3.default.createElement(
                            'div',
                            { className: 'pswp__top-bar' },
                            _react3.default.createElement('div', { className: 'pswp__counter' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--close', title: 'Close (Esc)' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--share', title: 'Share' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--fs', title: 'Toggle fullscreen' }),
                            _react3.default.createElement('button', { className: 'pswp__button pswp__button--zoom', title: 'Zoom in/out' }),
                            _react3.default.createElement(
                                'div',
                                { className: 'pswp__preloader' },
                                _react3.default.createElement(
                                    'div',
                                    { className: 'pswp__preloader__icn' },
                                    _react3.default.createElement(
                                        'div',
                                        { className: 'pswp__preloader__cut' },
                                        _react3.default.createElement('div', { className: 'pswp__preloader__donut' })
                                    )
                                )
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'pswp__share-modal pswp__share-modal--hidden pswp__single-tap' },
                            _react3.default.createElement('div', { className: 'pswp__share-tooltip' })
                        ),
                        _react3.default.createElement('button', { className: 'pswp__button pswp__button--arrow--left', title: 'Previous (arrow left)' }),
                        _react3.default.createElement('button', { className: 'pswp__button pswp__button--arrow--right', title: 'Next (arrow right)' }),
                        _react3.default.createElement(
                            'div',
                            { className: 'pswp__caption' },
                            _react3.default.createElement('div', { className: 'pswp__caption__center' })
                        )
                    )
                )
            );
        }
    }], [{
        key: 'init',
        value: function init(items, i) {
            var thunbBound = function thunbBound() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    thumbnail = items[index].el,
                    rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left, y: rect.top + pageYScroll, w: rect.width
                };
            };
            this[_options] = {
                index: i,
                getThumbBoundsFn: thunbBound,
                showHideOpacity: true,
                allowPanToNext: false,
                loop: false,
                escKey: false,
                arrowKeys: false,
                shareEl: false,
                arrowEl: false,
                fullscreenEl: false,
                preloaderEl: false,
                history: false,
                focus: false,
                clickToCloseNonZoomable: false
            };

            this[_gallery] = new _photoswipe.PhotoSwipe(document.getElementById('pswp'), _photoswipe.PhotoSwipeUI, items, this[_options]);
            this[_gallery].init();
        }
    }]);

    return PhotoBrowser;
}(_react2.Component));

exports.default = PhotoBrowser;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _resolvePathname = __webpack_require__(91);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(92);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(18);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArticleData = exports.getCommentList = exports.getHomeList = undefined;

var _request = __webpack_require__(100);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL_ROOT = '' || location.protocol + '//' + location.host;

var getHomeList = exports.getHomeList = function getHomeList(resolve, reject) {
    var params = {
        url: URL_ROOT + '/testdata/home'
    };
    (0, _request2.default)(params, resolve, reject);
};

var getCommentList = exports.getCommentList = function getCommentList(resolve, reject) {
    var params = {
        url: URL_ROOT + '/testdata/comment'
    };
    (0, _request2.default)(params, resolve, reject);
};

var getArticleData = exports.getArticleData = function getArticleData(aid, resolve, reject) {
    var params = {
        url: URL_ROOT + '/testdata/article'
    };
    (0, _request2.default)(params, resolve, reject);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapCacheClear = __webpack_require__(137),
    mapCacheDelete = __webpack_require__(144),
    mapCacheGet = __webpack_require__(146),
    mapCacheHas = __webpack_require__(147),
    mapCacheSet = __webpack_require__(148);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsArguments = __webpack_require__(165),
    isObjectLike = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(34);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(220);

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(231);

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(83);

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(233);

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(234);

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(235);

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(236);

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(237);

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(238);

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(239);

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(240);

var _Switch3 = _interopRequireDefault(_Switch2);

var _matchPath2 = __webpack_require__(241);

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(242);

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Router;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = __webpack_require__(225);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict;

  var _compilePath = compilePath(path, { end: exact, strict: strict }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(110);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(37);

var _PathUtils = __webpack_require__(18);

var _createTransitionManager = __webpack_require__(38);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(52);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HOME_SCROLL_TOP = exports.HOME_PARAMS = exports.HOME_GET_FAILURE = exports.HOME_GET_SUCCESS = exports.HOME_GET = undefined;
exports.saveParams = saveParams;
exports.saveScrollTop = saveScrollTop;
exports.getHomeData = getHomeData;

var _api = __webpack_require__(39);

var HOME_GET = exports.HOME_GET = 'HOME_GET';
var HOME_GET_SUCCESS = exports.HOME_GET_SUCCESS = 'HOME_GET_SUCCESS';
var HOME_GET_FAILURE = exports.HOME_GET_FAILURE = 'HOME_GET_FAILURE';
var HOME_PARAMS = exports.HOME_PARAMS = 'HOME_PARAMS';
var HOME_SCROLL_TOP = exports.HOME_SCROLL_TOP = 'HOME_SCROLL_TOP';

function getHome() {
    return {
        type: HOME_GET
    };
}

function getHomeSuccess(json) {
    return {
        type: HOME_GET_SUCCESS,
        payload: json
    };
}

function getHomeFailure(err) {
    return {
        type: HOME_GET_FAILURE,
        payload: err
    };
}

function saveParams(payload) {
    return {
        type: HOME_PARAMS,
        payload: payload
    };
}

function saveScrollTop(payload) {
    return {
        type: HOME_SCROLL_TOP,
        payload: payload
    };
}

function getHomeData() {
    return function (dispatch) {
        (0, _api.getHomeList)(function (json) {
            dispatch(getHomeSuccess(json));
        }, function (err) {
            dispatch(getHomeFailure(err));
        });
    };
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COMMENT_PARAMS = exports.COMMENT_SCROLL_TOP = exports.COMMENT_GET_FAILURE = exports.COMMENT_GET_SUCCESS = exports.COMMENT_GET = undefined;
exports.saveScrollTop = saveScrollTop;
exports.saveParams = saveParams;
exports.getCommentData = getCommentData;

var _api = __webpack_require__(39);

var COMMENT_GET = exports.COMMENT_GET = 'GET_COMMENT';
var COMMENT_GET_SUCCESS = exports.COMMENT_GET_SUCCESS = 'GET_COMMENT_SUCCESS';
var COMMENT_GET_FAILURE = exports.COMMENT_GET_FAILURE = 'GET_COMMENT_FAILURE';
var COMMENT_SCROLL_TOP = exports.COMMENT_SCROLL_TOP = 'COMMENT_SCROLL_TOP';
var COMMENT_PARAMS = exports.COMMENT_PARAMS = 'COMMENT_PARAMS';

function getComment() {
    return {
        type: COMMENT_GET
    };
}

function getCommentSuccess(json) {
    return {
        type: COMMENT_GET_SUCCESS,
        payload: json
    };
}

function getCommentFailure(err) {
    return {
        type: COMMENT_GET_FAILURE,
        payload: err
    };
}

function saveScrollTop(payload) {
    return {
        type: COMMENT_SCROLL_TOP,
        payload: payload
    };
}

function saveParams(payload) {
    return {
        type: COMMENT_PARAMS,
        payload: payload
    };
}

function getCommentData() {
    return function (dispatch) {
        dispatch(getComment());
        (0, _api.getCommentList)(function (json) {
            dispatch(getCommentSuccess(json));
        }, function (err) {
            dispatch(getCommentFailure(err));
        });
    };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PREVIEW_GET = exports.ARTICLE_GET_FAILURE = exports.ARTICLE_GET_SUCCESS = exports.ARTICLE_GET = undefined;
exports.getArticle = getArticle;
exports.getArtData = getArtData;
exports.getPreviewData = getPreviewData;

var _api = __webpack_require__(39);

var ARTICLE_GET = exports.ARTICLE_GET = 'GET_COMMENT';
var ARTICLE_GET_SUCCESS = exports.ARTICLE_GET_SUCCESS = 'GET_COMMENT_SUCCESS';
var ARTICLE_GET_FAILURE = exports.ARTICLE_GET_FAILURE = 'GET_COMMENT_FAILURE';
var PREVIEW_GET = exports.PREVIEW_GET = 'PREVIEW_GET';

function getArticle() {
    return {
        type: ARTICLE_GET
    };
}

function getArticleSuccess(json) {
    return {
        type: ARTICLE_GET_SUCCESS,
        payload: json
    };
}

function getArticleFailure(err) {
    return {
        type: ARTICLE_GET_FAILURE,
        payload: err
    };
}

function getArtData(aid) {
    return function (dispatch) {
        dispatch(getArticle());
        (0, _api.getArticleData)(aid, function (json) {
            dispatch(getArticleSuccess(json));
        }, function (err) {
            dispatch(getArticleFailure(err));
        });
    };
}

function getPreviewData() {
    return {
        type: PREVIEW_GET
    };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveEditArticle = saveEditArticle;
var EDIT_ARTICLE_SAVE = exports.EDIT_ARTICLE_SAVE = 'EDIT_ARTICLE_SAVE';

function saveEditArticle(payload) {
    return {
        type: EDIT_ARTICLE_SAVE,
        payload: payload
    };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsProtoAssignment;
var x = {};
var y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

function supportsProtoAssignment() {
  return x.supports || false;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseMatches = __webpack_require__(119),
    baseMatchesProperty = __webpack_require__(178),
    identity = __webpack_require__(46),
    isArray = __webpack_require__(11),
    property = __webpack_require__(188);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(28),
    stackClear = __webpack_require__(126),
    stackDelete = __webpack_require__(127),
    stackGet = __webpack_require__(128),
    stackHas = __webpack_require__(129),
    stackSet = __webpack_require__(130);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(20),
    isObject = __webpack_require__(22);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqualDeep = __webpack_require__(149),
    isObjectLike = __webpack_require__(16);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SetCache = __webpack_require__(65),
    arraySome = __webpack_require__(152),
    cacheHas = __webpack_require__(66);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(41),
    setCacheAdd = __webpack_require__(150),
    setCacheHas = __webpack_require__(151);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(10),
    stubFalse = __webpack_require__(166);

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsTypedArray = __webpack_require__(167),
    baseUnary = __webpack_require__(70),
    nodeUtil = __webpack_require__(168);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(22);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(75),
    toKey = __webpack_require__(35);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(11),
    isKey = __webpack_require__(45),
    stringToPath = __webpack_require__(180),
    toString = __webpack_require__(183);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseAssignValue = __webpack_require__(79),
    eq = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperty = __webpack_require__(80);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(46),
    overRest = __webpack_require__(199),
    setToString = __webpack_require__(201);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__(49);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact;
    var route = _ref2.route;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    var pathname = (location || route.location).pathname;

    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        component = _props.component,
        render = _props.render,
        children = _props.children;

    (0, _warning2.default)(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    (0, _warning2.default)(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    (0, _warning2.default)(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props2 = this.props,
        children = _props2.children,
        component = _props2.component,
        render = _props2.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    _react2.default.Children.only(children) : null : null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Route;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        props = _objectWithoutProperties(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};

exports.default = Link;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CompHead = __webpack_require__(85);

var _CompHead2 = _interopRequireDefault(_CompHead);

var _SpeedDial = __webpack_require__(247);

var _SpeedDial2 = _interopRequireDefault(_SpeedDial);

var _CardAction = __webpack_require__(248);

var _CardAction2 = _interopRequireDefault(_CardAction);

var _CardText = __webpack_require__(249);

var _CardText2 = _interopRequireDefault(_CardText);

var _SinglePhoto = __webpack_require__(86);

var _SinglePhoto2 = _interopRequireDefault(_SinglePhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Card: {
        displayName: 'Card'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/Card.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/Card.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Card = _wrapComponent('Card')(function (_Component) {
    _inherits(Card, _Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var animation = this.props.animation;

            if (animation) {
                animation(this.ul);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                cssStyle = _props.cssStyle,
                index = _props.index,
                commentOps = _props.commentOps,
                dataArr = _props.dataArr;

            var html = void 0;
            if (data.typeId === 1) {
                html = _react3.default.createElement(
                    'ul',
                    {
                        ref: function ref(c) {
                            _this2.ul = c;
                        },
                        className: 'card-item',
                        style: cssStyle,
                        'data-index': index
                    },
                    _react3.default.createElement(
                        'li',
                        { className: 'mar-b' },
                        _react3.default.createElement(_CompHead2.default, { profile: data.profile, nickname: data.nickname, dateTime: data.dateTime })
                    ),
                    _react3.default.createElement(
                        'li',
                        { className: 'mar-b' },
                        _react3.default.createElement(_SpeedDial2.default, { photos: data.photos })
                    ),
                    _react3.default.createElement(_CardText2.default, { text: data.text }),
                    _react3.default.createElement(_CardAction2.default, {
                        numOfLikes: data.numOfLikes,
                        numOfComments: data.numOfComments,
                        numOfForwards: data.numOfForwards,
                        commentOps: commentOps
                    })
                );
            }
            if (data.typeId === 2) {
                html = _react3.default.createElement(
                    'ul',
                    {
                        ref: function ref(c) {
                            _this2.ul = c;
                        },
                        className: 'card-item',
                        style: cssStyle,
                        'data-index': index
                    },
                    _react3.default.createElement(
                        'li',
                        { className: 'mar-b' },
                        _react3.default.createElement(_CompHead2.default, { profile: data.profile, nickname: data.nickname, dateTime: data.dateTime })
                    ),
                    _react3.default.createElement(
                        'li',
                        { className: 'mar-b title', 'data-tag': 'article', 'data-aid': data.articleId },
                        data.title
                    ),
                    _react3.default.createElement(
                        'li',
                        { className: 'mar-b' },
                        _react3.default.createElement(_SinglePhoto2.default, { photo: data.photo, aid: data.articleId, browser: false })
                    ),
                    _react3.default.createElement(_CardAction2.default, { numOfLikes: data.numOfLikes, numOfComments: data.numOfComments, numOfForwards: data.numOfForwards, commentOps: commentOps })
                );
            }
            return html;
        }
    }]);

    return Card;
}(_react2.Component));

Card.propTypes = {
    data: _propTypes2.default.object.isRequired,
    cssStyle: _propTypes2.default.object.isRequired,
    index: _propTypes2.default.number.isRequired,
    commentOps: _propTypes2.default.string,
    animation: _propTypes2.default.func,
    dataArr: _propTypes2.default.array
};

Card.defaultProps = {
    dataArr: [],
    animation: null,
    commentOps: ''
};

exports.default = Card;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CompHead: {
        displayName: 'CompHead'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CompHead.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CompHead.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var CompHead = _wrapComponent('CompHead')(function (_Component) {
    _inherits(CompHead, _Component);

    function CompHead() {
        _classCallCheck(this, CompHead);

        return _possibleConstructorReturn(this, (CompHead.__proto__ || Object.getPrototypeOf(CompHead)).apply(this, arguments));
    }

    _createClass(CompHead, [{
        key: 'render',
        value: function render() {
            var profileImg = './img/avator.jpg';
            var _props = this.props,
                profile = _props.profile,
                nickname = _props.nickname,
                dateTime = _props.dateTime;

            if (profile !== '') {
                profileImg = profile;
            }
            return _react3.default.createElement(
                'div',
                { className: 'comp-head' },
                _react3.default.createElement(
                    'div',
                    { className: 'left' },
                    _react3.default.createElement(
                        'div',
                        { className: 'via' },
                        _react3.default.createElement('img', { src: profileImg, alt: '' })
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'middle' },
                    _react3.default.createElement(
                        'div',
                        null,
                        nickname
                    ),
                    _react3.default.createElement(
                        'div',
                        null,
                        dateTime
                    )
                ),
                _react3.default.createElement('div', { className: 'right' })
            );
        }
    }]);

    return CompHead;
}(_react2.Component));

CompHead.propTypes = {
    profile: _propTypes2.default.string.isRequired,
    nickname: _propTypes2.default.string.isRequired,
    dateTime: _propTypes2.default.string.isRequired
};

exports.default = CompHead;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SinglePhoto: {
        displayName: 'SinglePhoto'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/SinglePhoto.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/SinglePhoto.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var SinglePhoto = _wrapComponent('SinglePhoto')(function (_Component) {
    _inherits(SinglePhoto, _Component);

    function SinglePhoto() {
        _classCallCheck(this, SinglePhoto);

        return _possibleConstructorReturn(this, (SinglePhoto.__proto__ || Object.getPrototypeOf(SinglePhoto)).apply(this, arguments));
    }

    _createClass(SinglePhoto, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                browser = _props.browser,
                photo = _props.photo,
                aid = _props.aid,
                index = _props.index;

            var html = void 0;
            if (browser) {
                html = _react3.default.createElement('img', { src: photo, alt: '', 'data-tag': 'thumbnail', 'data-index': index });
            } else {
                html = _react3.default.createElement('img', { src: photo, alt: '', 'data-tag': 'article', 'data-aid': aid });
            }
            return _react3.default.createElement(
                'div',
                { className: 'single-img' },
                html
            );
        }
    }]);

    return SinglePhoto;
}(_react2.Component));

SinglePhoto.propTypes = {
    browser: _propTypes2.default.bool.isRequired,
    photo: _propTypes2.default.string.isRequired,
    aid: _propTypes2.default.number,
    index: _propTypes2.default.number
};

SinglePhoto.defaultProps = {
    aid: undefined,
    index: 0
};

exports.default = SinglePhoto;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(88);
__webpack_require__(89);

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _createBrowserHistory = __webpack_require__(51);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _configureStore = __webpack_require__(93);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _persistence = __webpack_require__(19);

var _Root = __webpack_require__(108);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 's1234567890';
alert(a);
var browserHistory = (0, _createBrowserHistory2.default)(),
    store = (0, _configureStore2.default)();

store.subscribe(function () {
    return (0, _persistence.saveStore)(store.getState());
});

window.FaKoa.history = browserHistory;

if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        if (target === null) {
            target = {};
        }
        target = Object(target);
        for (var index = 1; index < (arguments.length <= 1 ? 0 : arguments.length - 1); index += 1) {
            var source = arguments.length <= index + 1 ? undefined : arguments[index + 1];
            if (source !== null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store, history: browserHistory }), document.getElementById('root'));

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(0);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(94);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _combine = __webpack_require__(95);

var _combine2 = _interopRequireDefault(_combine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

function configureStore() {
    return createStoreWithMiddleware(_combine2.default);
}

exports.default = configureStore;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _header = __webpack_require__(96);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(97);

var _footer2 = _interopRequireDefault(_footer);

var _record = __webpack_require__(98);

var _record2 = _interopRequireDefault(_record);

var _home = __webpack_require__(99);

var _home2 = _interopRequireDefault(_home);

var _popup = __webpack_require__(103);

var _popup2 = _interopRequireDefault(_popup);

var _comment = __webpack_require__(104);

var _comment2 = _interopRequireDefault(_comment);

var _search = __webpack_require__(105);

var _search2 = _interopRequireDefault(_search);

var _article = __webpack_require__(106);

var _article2 = _interopRequireDefault(_article);

var _editarticle = __webpack_require__(107);

var _editarticle2 = _interopRequireDefault(_editarticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    header: _header2.default,
    footer: _footer2.default,
    record: _record2.default,
    home: _home2.default,
    popup: _popup2.default,
    comment: _comment2.default,
    search: _search2.default,
    article: _article2.default,
    editarticle: _editarticle2.default
});

exports.default = rootReducer;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = header;

var _header = __webpack_require__(12);

function header() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        type: 'base',
        title: 'Header',
        isBack: false,
        backHandler: null,
        rBtn: {
            type: 'txt',
            content: '',
            handler: null
        }
    };
    var action = arguments[1];

    switch (action.type) {
        case _header.HEADER_UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = footer;

var _footer = __webpack_require__(13);

function footer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        type: 'home'
    };
    var action = arguments[1];

    switch (action.type) {
        case _footer.FOOTER_UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = article;

var _record = __webpack_require__(25);

function article() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { original: '' };
    var action = arguments[1];

    switch (action.type) {
        case _record.RECORD_ORIGINAL:
            state.original = action.payload;
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = home;

var _home = __webpack_require__(53);

function home() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetching: true,
        scrollTop: 0
    };
    var action = arguments[1];

    switch (action.type) {
        case _home.HOME_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _home.HOME_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _home.HOME_PARAMS:
            state.params = action.payload;
            return state;
        case _home.HOME_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case _home.HOME_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;

var _isomorphicFetch = __webpack_require__(101);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    } else {
        var err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function parseJSON(res) {
    return res.json();
}

function request(params, resolve, reject) {
    var defaults = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        url: '',
        body: undefined
    };

    var _Object$assign = Object.assign({}, defaults, params),
        url = _Object$assign.url,
        method = _Object$assign.method,
        headers = _Object$assign.headers,
        body = _Object$assign.body;

    return (0, _isomorphicFetch2.default)(url, {
        method: method,
        headers: headers,
        body: body
    }).then(checkStatus).then(parseJSON).then(resolve).catch(reject);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(102);
module.exports = self.fetch.bind(self);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = header;

var _popup = __webpack_require__(26);

function header() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { toggle: false };
    var action = arguments[1];

    switch (action.type) {
        case _popup.POPUP_TOGGLE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = comment;

var _comment = __webpack_require__(54);

function comment() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetching: true,
        scrollTop: 0 };
    var action = arguments[1];

    switch (action.type) {
        case _comment.COMMENT_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _comment.COMMENT_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _comment.COMMENT_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case _comment.COMMENT_PARAMS:
            state.params = action.payload;
            return state;
        case _comment.COMMENT_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = header;

var _popup = __webpack_require__(26);

function header() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _popup.SEARCH_UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = article;

var _article = __webpack_require__(55);

function article() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFetching: true };
    var action = arguments[1];

    switch (action.type) {
        case _article.ARTICLE_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _article.ARTICLE_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case _article.ARTICLE_GET:
            state.isFetching = true;
            return state;
        case _article.PREVIEW_GET:
            state.isFetching = false;
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = article;

var _editarticle = __webpack_require__(56);

function article() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: null };
    var action = arguments[1];

    switch (action.type) {
        case _editarticle.EDIT_ARTICLE_SAVE:
            state.data = action.payload;
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(47);

var _App = __webpack_require__(243);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Root: {
        displayName: 'Root'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/containers/Root.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/containers/Root.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Root = _wrapComponent('Root')(function (_Component) {
    _inherits(Root, _Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                history = _props.history,
                store = _props.store;

            return _react3.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react3.default.createElement(
                    _reactRouterDom.BrowserRouter,
                    { history: history },
                    _react3.default.createElement(_App2.default, null)
                )
            );
        }
    }]);

    return Root;
}(_react2.Component));

Root.propTypes = {
    store: _propTypes2.default.object.isRequired,
    history: _propTypes2.default.object.isRequired
};

exports.default = Root;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DefaultExportValue = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    position: 'fixed',
    padding: 10,
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    width: '100%',
    background: 'rgb(204, 0, 0)',
    color: 'white',
    zIndex: 2147483647,
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.2,
    overflow: 'auto'
  },
  message: {
    fontWeight: 'bold'
  },
  stack: {
    fontFamily: 'monospace',
    marginTop: '2em'
  },
  frame: {
    marginTop: '1em'
  },
  file: {
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
  }
};
exports.default = _DefaultExportValue;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(111)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory(require('stackframe'));
    } else {
        root.ErrorStackParser = factory(root.StackFrame);
    }
})(undefined, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') {
            return array.map(fn, thisArg);
        } else {
            var output = new Array(array.length);
            for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
            }
            return output;
        }
    }

    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') {
            return array.filter(fn, thisArg);
        } else {
            var output = [];
            for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                    output.push(array[i]);
                }
            }
            return output;
        }
    }

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function (line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function (line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return _map(filtered, function (line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || '';
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
            }, this);
        }
    };
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory();
    } else {
        root.StackFrame = factory();
    }
})(undefined, function () {
    'use strict';

    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) {
            this.setFunctionName(functionName);
        }
        if (args !== undefined) {
            this.setArgs(args);
        }
        if (fileName !== undefined) {
            this.setFileName(fileName);
        }
        if (lineNumber !== undefined) {
            this.setLineNumber(lineNumber);
        }
        if (columnNumber !== undefined) {
            this.setColumnNumber(columnNumber);
        }
        if (source !== undefined) {
            this.setSource(source);
        }
    }

    StackFrame.prototype = {
        getFunctionName: function getFunctionName() {
            return this.functionName;
        },
        setFunctionName: function setFunctionName(v) {
            this.functionName = String(v);
        },

        getArgs: function getArgs() {
            return this.args;
        },
        setArgs: function setArgs(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function getFileName() {
            return this.fileName;
        },
        setFileName: function setFileName(v) {
            this.fileName = String(v);
        },

        getLineNumber: function getLineNumber() {
            return this.lineNumber;
        },
        setLineNumber: function setLineNumber(v) {
            if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
            }
            this.lineNumber = Number(v);
        },

        getColumnNumber: function getColumnNumber() {
            return this.columnNumber;
        },
        setColumnNumber: function setColumnNumber(v) {
            if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
            }
            this.columnNumber = Number(v);
        },

        getSource: function getSource() {
            return this.source;
        },
        setSource: function setSource(v) {
            this.source = String(v);
        },

        toString: function toString() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? '@' + this.getFileName() : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    return StackFrame;
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(4);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var index = filename.lastIndexOf('!');

  return index < 0 ? filename : filename.substr(index + 1);
};

var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  return actualFilename !== filename;
};

var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
  return (/^[\w]+\:/.test(filename)
  );
};

var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (actualFilename.indexOf('/') === 0) {
    return true;
  }

  return false;
};

var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (_get__('filenameHasSchema')(filename)) {
    return actualFilename;
  }

  var url = 'file://' + actualFilename;

  if (scheme) {
    url = scheme + '://open?url=' + url;

    if (line && actualFilename === filename) {
      url = url + '&line=' + line;

      if (column) {
        url = url + '&column=' + column;
      }
    }
  }

  return url;
};

var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
  var text = _get__('filenameWithoutLoaders')(filename);

  if (line && text === filename) {
    text = text + ':' + line;

    if (column) {
      text = text + ':' + column;
    }
  }

  return text;
};

function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}

;
var _RewireModuleId__ = null;

function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    var globalVariable = _getGlobalObject();

    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }

    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }

  return _RewireModuleId__;
}

function _getRewireRegistry__() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }

  return __$$GLOBAL_REWIRE_REGISTRY__;
}

function _getRewiredData__() {
  var moduleId = _getRewireModuleId__();

  var registry = _getRewireRegistry__();

  var rewireData = registry[moduleId];

  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }

  return rewireData;
}

(function registerResetAll() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'filenameWithoutLoaders':
      return filenameWithoutLoaders;

    case 'filenameHasSchema':
      return filenameHasSchema;
  }

  return undefined;
}

function _assign__(variableName, value) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  var rewireData = _getRewiredData__();

  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  var rewireData = _getRewiredData__();

  delete rewireData[variableName];

  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }

  ;
}

function _with__(object) {
  var rewireData = _getRewiredData__();

  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
exports.default = _RewireAPI__;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["sourceMappedStackTrace"] = factory();else root["sourceMappedStackTrace"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*
                                                                    * sourcemapped-stacktrace.js
                                                                    * created by James Salter <iteration@gmail.com> (2014)
                                                                    *
                                                                    * https://github.com/novocaine/sourcemapped-stacktrace
                                                                    *
                                                                    * Licensed under the New BSD license. See LICENSE or:
                                                                    * http://opensource.org/licenses/BSD-3-Clause
                                                                    */

			/*global define */

			// note we only include source-map-consumer, not the whole source-map library,
			// which includes gear for generating source maps that we don't need
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (source_map_consumer) {

				var global_mapForUri = {};

				/**
     * Re-map entries in a stacktrace using sourcemaps if available.
     *
     * @param {Array} stack - Array of strings from the browser's stack
     *                        representation. Currently only Chrome
     *                        format is supported.
     * @param {function} done - Callback invoked with the transformed stacktrace
     *                          (an Array of Strings) passed as the first
     *                          argument
     * @param {Object} [opts] - Optional options object.
     * @param {Function} [opts.filter] - Filter function applied to each stackTrace line.
     *                                   Lines which do not pass the filter won't be processesd.
     * @param {boolean} [opts.cacheGlobally] - Whether to cache sourcemaps globally across multiple calls.
     */
				var mapStackTrace = function mapStackTrace(stack, done, opts) {
					var lines;
					var line;
					var mapForUri = {};
					var rows = {};
					var fields;
					var uri;
					var expected_fields;
					var regex;

					var fetcher = new Fetcher(function () {
						var result = processSourceMaps(lines, rows, fetcher.mapForUri);
						done(result);
					}, opts);

					if (isChrome()) {
						regex = /^ +at.+\((.*):([0-9]+):([0-9]+)/;
						expected_fields = 4;
						// (skip first line containing exception message)
						skip_lines = 1;
					} else if (isFirefox()) {
						regex = /@(.*):([0-9]+):([0-9]+)/;
						expected_fields = 4;
						skip_lines = 0;
					} else {
						throw new Error("unknown browser :(");
					}

					lines = stack.split("\n").slice(skip_lines);

					for (var i = 0; i < lines.length; i++) {
						line = lines[i];
						if (opts && opts.filter && !opts.filter(line)) continue;

						fields = line.match(regex);
						if (fields && fields.length === expected_fields) {
							rows[i] = fields;
							uri = fields[1];
							if (!uri.match(/<anonymous>/)) {
								fetcher.fetchScript(uri);
							}
						}
					}

					// if opts.cacheGlobally set, all maps could have been cached already,
					// thus we need to call done callback right away
					if (fetcher.sem === 0) {
						fetcher.done(fetcher.mapForUri);
					}
				};

				var isChrome = function isChrome() {
					return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
				};

				var isFirefox = function isFirefox() {
					return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
				};
				var Fetcher = function Fetcher(done, opts) {
					this.sem = 0;
					this.mapForUri = opts && opts.cacheGlobally ? global_mapForUri : {};
					this.done = done;
				};

				Fetcher.prototype.fetchScript = function (uri) {
					if (!(uri in this.mapForUri)) {
						this.sem++;
						this.mapForUri[uri] = null;
					} else {
						return;
					}

					var xhr = createXMLHTTPObject();
					var that = this;
					xhr.onreadystatechange = function (e) {
						that.onScriptLoad.call(that, e, uri);
					};
					xhr.open("GET", uri, true);
					xhr.send();
				};

				var absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

				Fetcher.prototype.onScriptLoad = function (e, uri) {
					if (e.target.readyState !== 4) {
						return;
					}

					if (e.target.status === 200 || uri.slice(0, 7) === "file://" && e.target.status === 0) {
						// find .map in file.
						//
						// attempt to find it at the very end of the file, but tolerate trailing
						// whitespace inserted by some packers.
						var match = e.target.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");
						if (match && match.length === 2) {
							// get the map
							var mapUri = match[1];

							var embeddedSourceMap = mapUri.match("data:application/json;(charset=[^;]+;)?base64,(.*)");

							if (embeddedSourceMap && embeddedSourceMap[2]) {
								this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(atob(embeddedSourceMap[2]));
								this.done(this.mapForUri);
							} else {
								if (!absUrlRegex.test(mapUri)) {
									// relative url; according to sourcemaps spec is 'source origin'
									var origin;
									var lastSlash = uri.lastIndexOf('/');
									if (lastSlash !== -1) {
										origin = uri.slice(0, lastSlash + 1);
										mapUri = origin + mapUri;
										// note if lastSlash === -1, actual script uri has no slash
										// somehow, so no way to use it as a prefix... we give up and try
										// as absolute
									}
								}

								var xhrMap = createXMLHTTPObject();
								var that = this;
								xhrMap.onreadystatechange = function () {
									if (xhrMap.readyState === 4) {
										that.sem--;
										if (xhrMap.status === 200 || mapUri.slice(0, 7) === "file://" && xhrMap.status === 0) {
											that.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(xhrMap.responseText);
										}
										if (that.sem === 0) {
											that.done(that.mapForUri);
										}
									}
								};

								xhrMap.open("GET", mapUri, true);
								xhrMap.send();
							}
						} else {
							// no map
							this.sem--;
						}
					} else {
						// HTTP error fetching uri of the script
						this.sem--;
					}

					if (this.sem === 0) {
						this.done(this.mapForUri);
					}
				};

				var processSourceMaps = function processSourceMaps(lines, rows, mapForUri) {
					var result = [];
					var map;
					for (var i = 0; i < lines.length; i++) {
						var row = rows[i];
						if (row) {
							var uri = row[1];
							var line = parseInt(row[2], 10);
							var column = parseInt(row[3], 10);
							map = mapForUri[uri];

							if (map) {
								// we think we have a map for that uri. call source-map library
								var origPos = map.originalPositionFor({ line: line, column: column });
								result.push(formatOriginalPosition(origPos.source, origPos.line, origPos.column, origPos.name || origName(lines[i])));
							} else {
								// we can't find a map for that url, but we parsed the row.
								// reformat unchanged line for consistency with the sourcemapped
								// lines.
								result.push(formatOriginalPosition(uri, line, column, origName(lines[i])));
							}
						} else {
							// we weren't able to parse the row, push back what we were given
							result.push(lines[i]);
						}
					}

					return result;
				};

				function origName(origLine) {
					var match = String(origLine).match(isChrome() ? / +at +([^ ]*).*/ : /([^@]*)@.*/);
					return match && match[1];
				}

				var formatOriginalPosition = function formatOriginalPosition(source, line, column, name) {
					// mimic chrome's format
					return "    at " + (name ? name : "(unknown)") + " (" + source + ":" + line + ":" + column + ")";
				};

				// xmlhttprequest boilerplate
				var XMLHttpFactories = [function () {
					return new XMLHttpRequest();
				}, function () {
					return new ActiveXObject("Msxml2.XMLHTTP");
				}, function () {
					return new ActiveXObject("Msxml3.XMLHTTP");
				}, function () {
					return new ActiveXObject("Microsoft.XMLHTTP");
				}];

				function createXMLHTTPObject() {
					var xmlhttp = false;
					for (var i = 0; i < XMLHttpFactories.length; i++) {
						try {
							xmlhttp = XMLHttpFactories[i]();
						} catch (e) {
							continue;
						}
						break;
					}
					return xmlhttp;
				}

				return {
					mapStackTrace: mapStackTrace
				};
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			var util = __webpack_require__(2);
			var binarySearch = __webpack_require__(3);
			var ArraySet = __webpack_require__(4).ArraySet;
			var base64VLQ = __webpack_require__(5);
			var quickSort = __webpack_require__(7).quickSort;

			function SourceMapConsumer(aSourceMap) {
				var sourceMap = aSourceMap;
				if (typeof aSourceMap === 'string') {
					sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
				}

				return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
			}

			SourceMapConsumer.fromSourceMap = function (aSourceMap) {
				return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
			};

			/**
    * The version of the source mapping spec that we are consuming.
    */
			SourceMapConsumer.prototype._version = 3;

			// `__generatedMappings` and `__originalMappings` are arrays that hold the
			// parsed mapping coordinates from the source map's "mappings" attribute. They
			// are lazily instantiated, accessed via the `_generatedMappings` and
			// `_originalMappings` getters respectively, and we only parse the mappings
			// and create these arrays once queried for a source location. We jump through
			// these hoops because there can be many thousands of mappings, and parsing
			// them is expensive, so we only want to do it if we must.
			//
			// Each object in the arrays is of the form:
			//
			//     {
			//       generatedLine: The line number in the generated code,
			//       generatedColumn: The column number in the generated code,
			//       source: The path to the original source file that generated this
			//               chunk of code,
			//       originalLine: The line number in the original source that
			//                     corresponds to this chunk of generated code,
			//       originalColumn: The column number in the original source that
			//                       corresponds to this chunk of generated code,
			//       name: The name of the original symbol which generated this chunk of
			//             code.
			//     }
			//
			// All properties except for `generatedLine` and `generatedColumn` can be
			// `null`.
			//
			// `_generatedMappings` is ordered by the generated positions.
			//
			// `_originalMappings` is ordered by the original positions.

			SourceMapConsumer.prototype.__generatedMappings = null;
			Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
				get: function get() {
					if (!this.__generatedMappings) {
						this._parseMappings(this._mappings, this.sourceRoot);
					}

					return this.__generatedMappings;
				}
			});

			SourceMapConsumer.prototype.__originalMappings = null;
			Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
				get: function get() {
					if (!this.__originalMappings) {
						this._parseMappings(this._mappings, this.sourceRoot);
					}

					return this.__originalMappings;
				}
			});

			SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
				var c = aStr.charAt(index);
				return c === ";" || c === ",";
			};

			/**
    * Parse the mappings in a string in to a data structure which we can easily
    * query (the ordered arrays in the `this.__generatedMappings` and
    * `this.__originalMappings` properties).
    */
			SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
				throw new Error("Subclasses must implement _parseMappings");
			};

			SourceMapConsumer.GENERATED_ORDER = 1;
			SourceMapConsumer.ORIGINAL_ORDER = 2;

			SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
			SourceMapConsumer.LEAST_UPPER_BOUND = 2;

			/**
    * Iterate over each mapping between an original source/line/column and a
    * generated line/column in this source map.
    *
    * @param Function aCallback
    *        The function that is called with each mapping.
    * @param Object aContext
    *        Optional. If specified, this object will be the value of `this` every
    *        time that `aCallback` is called.
    * @param aOrder
    *        Either `SourceMapConsumer.GENERATED_ORDER` or
    *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
    *        iterate over the mappings sorted by the generated file's line/column
    *        order or the original's source/line/column order, respectively. Defaults to
    *        `SourceMapConsumer.GENERATED_ORDER`.
    */
			SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
				var context = aContext || null;
				var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

				var mappings;
				switch (order) {
					case SourceMapConsumer.GENERATED_ORDER:
						mappings = this._generatedMappings;
						break;
					case SourceMapConsumer.ORIGINAL_ORDER:
						mappings = this._originalMappings;
						break;
					default:
						throw new Error("Unknown order of iteration.");
				}

				var sourceRoot = this.sourceRoot;
				mappings.map(function (mapping) {
					var source = mapping.source === null ? null : this._sources.at(mapping.source);
					if (source != null && sourceRoot != null) {
						source = util.join(sourceRoot, source);
					}
					return {
						source: source,
						generatedLine: mapping.generatedLine,
						generatedColumn: mapping.generatedColumn,
						originalLine: mapping.originalLine,
						originalColumn: mapping.originalColumn,
						name: mapping.name === null ? null : this._names.at(mapping.name)
					};
				}, this).forEach(aCallback, context);
			};

			/**
    * Returns all generated line and column information for the original source,
    * line, and column provided. If no column is provided, returns all mappings
    * corresponding to a either the line we are searching for or the next
    * closest line that has any mappings. Otherwise, returns all mappings
    * corresponding to the given line and either the column we are searching for
    * or the next closest column that has any offsets.
    *
    * The only argument is an object with the following properties:
    *
    *   - source: The filename of the original source.
    *   - line: The line number in the original source.
    *   - column: Optional. the column number in the original source.
    *
    * and an array of objects is returned, each with the following properties:
    *
    *   - line: The line number in the generated source, or null.
    *   - column: The column number in the generated source, or null.
    */
			SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
				var line = util.getArg(aArgs, 'line');

				// When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
				// returns the index of the closest mapping less than the needle. By
				// setting needle.originalColumn to 0, we thus find the last mapping for
				// the given line, provided such a mapping exists.
				var needle = {
					source: util.getArg(aArgs, 'source'),
					originalLine: line,
					originalColumn: util.getArg(aArgs, 'column', 0)
				};

				if (this.sourceRoot != null) {
					needle.source = util.relative(this.sourceRoot, needle.source);
				}
				if (!this._sources.has(needle.source)) {
					return [];
				}
				needle.source = this._sources.indexOf(needle.source);

				var mappings = [];

				var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
				if (index >= 0) {
					var mapping = this._originalMappings[index];

					if (aArgs.column === undefined) {
						var originalLine = mapping.originalLine;

						// Iterate until either we run out of mappings, or we run into
						// a mapping for a different line than the one we found. Since
						// mappings are sorted, this is guaranteed to find all mappings for
						// the line we found.
						while (mapping && mapping.originalLine === originalLine) {
							mappings.push({
								line: util.getArg(mapping, 'generatedLine', null),
								column: util.getArg(mapping, 'generatedColumn', null),
								lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
							});

							mapping = this._originalMappings[++index];
						}
					} else {
						var originalColumn = mapping.originalColumn;

						// Iterate until either we run out of mappings, or we run into
						// a mapping for a different line than the one we were searching for.
						// Since mappings are sorted, this is guaranteed to find all mappings for
						// the line we are searching for.
						while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
							mappings.push({
								line: util.getArg(mapping, 'generatedLine', null),
								column: util.getArg(mapping, 'generatedColumn', null),
								lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
							});

							mapping = this._originalMappings[++index];
						}
					}
				}

				return mappings;
			};

			exports.SourceMapConsumer = SourceMapConsumer;

			/**
    * A BasicSourceMapConsumer instance represents a parsed source map which we can
    * query for information about the original file positions by giving it a file
    * position in the generated source.
    *
    * The only parameter is the raw source map (either as a JSON string, or
    * already parsed to an object). According to the spec, source maps have the
    * following attributes:
    *
    *   - version: Which version of the source map spec this map is following.
    *   - sources: An array of URLs to the original source files.
    *   - names: An array of identifiers which can be referrenced by individual mappings.
    *   - sourceRoot: Optional. The URL root from which all sources are relative.
    *   - sourcesContent: Optional. An array of contents of the original source files.
    *   - mappings: A string of base64 VLQs which contain the actual mappings.
    *   - file: Optional. The generated file this source map is associated with.
    *
    * Here is an example source map, taken from the source map spec[0]:
    *
    *     {
    *       version : 3,
    *       file: "out.js",
    *       sourceRoot : "",
    *       sources: ["foo.js", "bar.js"],
    *       names: ["src", "maps", "are", "fun"],
    *       mappings: "AA,AB;;ABCDE;"
    *     }
    *
    * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
    */
			function BasicSourceMapConsumer(aSourceMap) {
				var sourceMap = aSourceMap;
				if (typeof aSourceMap === 'string') {
					sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
				}

				var version = util.getArg(sourceMap, 'version');
				var sources = util.getArg(sourceMap, 'sources');
				// Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
				// requires the array) to play nice here.
				var names = util.getArg(sourceMap, 'names', []);
				var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
				var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
				var mappings = util.getArg(sourceMap, 'mappings');
				var file = util.getArg(sourceMap, 'file', null);

				// Once again, Sass deviates from the spec and supplies the version as a
				// string rather than a number, so we use loose equality checking here.
				if (version != this._version) {
					throw new Error('Unsupported version: ' + version);
				}

				sources = sources.map(String)
				// Some source maps produce relative source paths like "./foo.js" instead of
				// "foo.js".  Normalize these first so that future comparisons will succeed.
				// See bugzil.la/1090768.
				.map(util.normalize)
				// Always ensure that absolute sources are internally stored relative to
				// the source root, if the source root is absolute. Not doing this would
				// be particularly problematic when the source root is a prefix of the
				// source (valid, but why??). See github issue #199 and bugzil.la/1188982.
				.map(function (source) {
					return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
				});

				// Pass `true` below to allow duplicate names and sources. While source maps
				// are intended to be compressed and deduplicated, the TypeScript compiler
				// sometimes generates source maps with duplicates in them. See Github issue
				// #72 and bugzil.la/889492.
				this._names = ArraySet.fromArray(names.map(String), true);
				this._sources = ArraySet.fromArray(sources, true);

				this.sourceRoot = sourceRoot;
				this.sourcesContent = sourcesContent;
				this._mappings = mappings;
				this.file = file;
			}

			BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
			BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

			/**
    * Create a BasicSourceMapConsumer from a SourceMapGenerator.
    *
    * @param SourceMapGenerator aSourceMap
    *        The source map that will be consumed.
    * @returns BasicSourceMapConsumer
    */
			BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
				var smc = Object.create(BasicSourceMapConsumer.prototype);

				var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
				var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
				smc.sourceRoot = aSourceMap._sourceRoot;
				smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
				smc.file = aSourceMap._file;

				// Because we are modifying the entries (by converting string sources and
				// names to indices into the sources and names ArraySets), we have to make
				// a copy of the entry or else bad things happen. Shared mutable state
				// strikes again! See github issue #191.

				var generatedMappings = aSourceMap._mappings.toArray().slice();
				var destGeneratedMappings = smc.__generatedMappings = [];
				var destOriginalMappings = smc.__originalMappings = [];

				for (var i = 0, length = generatedMappings.length; i < length; i++) {
					var srcMapping = generatedMappings[i];
					var destMapping = new Mapping();
					destMapping.generatedLine = srcMapping.generatedLine;
					destMapping.generatedColumn = srcMapping.generatedColumn;

					if (srcMapping.source) {
						destMapping.source = sources.indexOf(srcMapping.source);
						destMapping.originalLine = srcMapping.originalLine;
						destMapping.originalColumn = srcMapping.originalColumn;

						if (srcMapping.name) {
							destMapping.name = names.indexOf(srcMapping.name);
						}

						destOriginalMappings.push(destMapping);
					}

					destGeneratedMappings.push(destMapping);
				}

				quickSort(smc.__originalMappings, util.compareByOriginalPositions);

				return smc;
			};

			/**
    * The version of the source mapping spec that we are consuming.
    */
			BasicSourceMapConsumer.prototype._version = 3;

			/**
    * The list of original sources.
    */
			Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
				get: function get() {
					return this._sources.toArray().map(function (s) {
						return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
					}, this);
				}
			});

			/**
    * Provide the JIT with a nice shape / hidden class.
    */
			function Mapping() {
				this.generatedLine = 0;
				this.generatedColumn = 0;
				this.source = null;
				this.originalLine = null;
				this.originalColumn = null;
				this.name = null;
			}

			/**
    * Parse the mappings in a string in to a data structure which we can easily
    * query (the ordered arrays in the `this.__generatedMappings` and
    * `this.__originalMappings` properties).
    */
			BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
				var generatedLine = 1;
				var previousGeneratedColumn = 0;
				var previousOriginalLine = 0;
				var previousOriginalColumn = 0;
				var previousSource = 0;
				var previousName = 0;
				var length = aStr.length;
				var index = 0;
				var cachedSegments = {};
				var temp = {};
				var originalMappings = [];
				var generatedMappings = [];
				var mapping, str, segment, end, value;

				while (index < length) {
					if (aStr.charAt(index) === ';') {
						generatedLine++;
						index++;
						previousGeneratedColumn = 0;
					} else if (aStr.charAt(index) === ',') {
						index++;
					} else {
						mapping = new Mapping();
						mapping.generatedLine = generatedLine;

						// Because each offset is encoded relative to the previous one,
						// many segments often have the same encoding. We can exploit this
						// fact by caching the parsed variable length fields of each segment,
						// allowing us to avoid a second parse if we encounter the same
						// segment again.
						for (end = index; end < length; end++) {
							if (this._charIsMappingSeparator(aStr, end)) {
								break;
							}
						}
						str = aStr.slice(index, end);

						segment = cachedSegments[str];
						if (segment) {
							index += str.length;
						} else {
							segment = [];
							while (index < end) {
								base64VLQ.decode(aStr, index, temp);
								value = temp.value;
								index = temp.rest;
								segment.push(value);
							}

							if (segment.length === 2) {
								throw new Error('Found a source, but no line and column');
							}

							if (segment.length === 3) {
								throw new Error('Found a source and line, but no column');
							}

							cachedSegments[str] = segment;
						}

						// Generated column.
						mapping.generatedColumn = previousGeneratedColumn + segment[0];
						previousGeneratedColumn = mapping.generatedColumn;

						if (segment.length > 1) {
							// Original source.
							mapping.source = previousSource + segment[1];
							previousSource += segment[1];

							// Original line.
							mapping.originalLine = previousOriginalLine + segment[2];
							previousOriginalLine = mapping.originalLine;
							// Lines are stored 0-based
							mapping.originalLine += 1;

							// Original column.
							mapping.originalColumn = previousOriginalColumn + segment[3];
							previousOriginalColumn = mapping.originalColumn;

							if (segment.length > 4) {
								// Original name.
								mapping.name = previousName + segment[4];
								previousName += segment[4];
							}
						}

						generatedMappings.push(mapping);
						if (typeof mapping.originalLine === 'number') {
							originalMappings.push(mapping);
						}
					}
				}

				quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
				this.__generatedMappings = generatedMappings;

				quickSort(originalMappings, util.compareByOriginalPositions);
				this.__originalMappings = originalMappings;
			};

			/**
    * Find the mapping that best matches the hypothetical "needle" mapping that
    * we are searching for in the given "haystack" of mappings.
    */
			BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
				// To return the position we are searching for, we must first find the
				// mapping for the given position and then return the opposite position it
				// points to. Because the mappings are sorted, we can use binary search to
				// find the best mapping.

				if (aNeedle[aLineName] <= 0) {
					throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
				}
				if (aNeedle[aColumnName] < 0) {
					throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
				}

				return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
			};

			/**
    * Compute the last column for each generated mapping. The last column is
    * inclusive.
    */
			BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
				for (var index = 0; index < this._generatedMappings.length; ++index) {
					var mapping = this._generatedMappings[index];

					// Mappings do not contain a field for the last generated columnt. We
					// can come up with an optimistic estimate, however, by assuming that
					// mappings are contiguous (i.e. given two consecutive mappings, the
					// first mapping ends where the second one starts).
					if (index + 1 < this._generatedMappings.length) {
						var nextMapping = this._generatedMappings[index + 1];

						if (mapping.generatedLine === nextMapping.generatedLine) {
							mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
							continue;
						}
					}

					// The last mapping for each line spans the entire line.
					mapping.lastGeneratedColumn = Infinity;
				}
			};

			/**
    * Returns the original source, line, and column information for the generated
    * source's line and column positions provided. The only argument is an object
    * with the following properties:
    *
    *   - line: The line number in the generated source.
    *   - column: The column number in the generated source.
    *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
    *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
    *     closest element that is smaller than or greater than the one we are
    *     searching for, respectively, if the exact element cannot be found.
    *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
    *
    * and an object is returned with the following properties:
    *
    *   - source: The original source file, or null.
    *   - line: The line number in the original source, or null.
    *   - column: The column number in the original source, or null.
    *   - name: The original identifier, or null.
    */
			BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
				var needle = {
					generatedLine: util.getArg(aArgs, 'line'),
					generatedColumn: util.getArg(aArgs, 'column')
				};

				var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

				if (index >= 0) {
					var mapping = this._generatedMappings[index];

					if (mapping.generatedLine === needle.generatedLine) {
						var source = util.getArg(mapping, 'source', null);
						if (source !== null) {
							source = this._sources.at(source);
							if (this.sourceRoot != null) {
								source = util.join(this.sourceRoot, source);
							}
						}
						var name = util.getArg(mapping, 'name', null);
						if (name !== null) {
							name = this._names.at(name);
						}
						return {
							source: source,
							line: util.getArg(mapping, 'originalLine', null),
							column: util.getArg(mapping, 'originalColumn', null),
							name: name
						};
					}
				}

				return {
					source: null,
					line: null,
					column: null,
					name: null
				};
			};

			/**
    * Return true if we have the source content for every source in the source
    * map, false otherwise.
    */
			BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
				if (!this.sourcesContent) {
					return false;
				}
				return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
					return sc == null;
				});
			};

			/**
    * Returns the original source content. The only argument is the url of the
    * original source file. Returns null if no original source content is
    * available.
    */
			BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
				if (!this.sourcesContent) {
					return null;
				}

				if (this.sourceRoot != null) {
					aSource = util.relative(this.sourceRoot, aSource);
				}

				if (this._sources.has(aSource)) {
					return this.sourcesContent[this._sources.indexOf(aSource)];
				}

				var url;
				if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
					// XXX: file:// URIs and absolute paths lead to unexpected behavior for
					// many users. We can help them out when they expect file:// URIs to
					// behave like it would if they were running a local HTTP server. See
					// https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
					var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
					if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
						return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
					}

					if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
						return this.sourcesContent[this._sources.indexOf("/" + aSource)];
					}
				}

				// This function is used recursively from
				// IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
				// don't want to throw if we can't find the source - we just want to
				// return null, so we provide a flag to exit gracefully.
				if (nullOnMissing) {
					return null;
				} else {
					throw new Error('"' + aSource + '" is not in the SourceMap.');
				}
			};

			/**
    * Returns the generated line and column information for the original source,
    * line, and column positions provided. The only argument is an object with
    * the following properties:
    *
    *   - source: The filename of the original source.
    *   - line: The line number in the original source.
    *   - column: The column number in the original source.
    *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
    *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
    *     closest element that is smaller than or greater than the one we are
    *     searching for, respectively, if the exact element cannot be found.
    *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
    *
    * and an object is returned with the following properties:
    *
    *   - line: The line number in the generated source, or null.
    *   - column: The column number in the generated source, or null.
    */
			BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
				var source = util.getArg(aArgs, 'source');
				if (this.sourceRoot != null) {
					source = util.relative(this.sourceRoot, source);
				}
				if (!this._sources.has(source)) {
					return {
						line: null,
						column: null,
						lastColumn: null
					};
				}
				source = this._sources.indexOf(source);

				var needle = {
					source: source,
					originalLine: util.getArg(aArgs, 'line'),
					originalColumn: util.getArg(aArgs, 'column')
				};

				var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

				if (index >= 0) {
					var mapping = this._originalMappings[index];

					if (mapping.source === needle.source) {
						return {
							line: util.getArg(mapping, 'generatedLine', null),
							column: util.getArg(mapping, 'generatedColumn', null),
							lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
						};
					}
				}

				return {
					line: null,
					column: null,
					lastColumn: null
				};
			};

			exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

			/**
    * An IndexedSourceMapConsumer instance represents a parsed source map which
    * we can query for information. It differs from BasicSourceMapConsumer in
    * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
    * input.
    *
    * The only parameter is a raw source map (either as a JSON string, or already
    * parsed to an object). According to the spec for indexed source maps, they
    * have the following attributes:
    *
    *   - version: Which version of the source map spec this map is following.
    *   - file: Optional. The generated file this source map is associated with.
    *   - sections: A list of section definitions.
    *
    * Each value under the "sections" field has two fields:
    *   - offset: The offset into the original specified at which this section
    *       begins to apply, defined as an object with a "line" and "column"
    *       field.
    *   - map: A source map definition. This source map could also be indexed,
    *       but doesn't have to be.
    *
    * Instead of the "map" field, it's also possible to have a "url" field
    * specifying a URL to retrieve a source map from, but that's currently
    * unsupported.
    *
    * Here's an example source map, taken from the source map spec[0], but
    * modified to omit a section which uses the "url" field.
    *
    *  {
    *    version : 3,
    *    file: "app.js",
    *    sections: [{
    *      offset: {line:100, column:10},
    *      map: {
    *        version : 3,
    *        file: "section.js",
    *        sources: ["foo.js", "bar.js"],
    *        names: ["src", "maps", "are", "fun"],
    *        mappings: "AAAA,E;;ABCDE;"
    *      }
    *    }],
    *  }
    *
    * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
    */
			function IndexedSourceMapConsumer(aSourceMap) {
				var sourceMap = aSourceMap;
				if (typeof aSourceMap === 'string') {
					sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
				}

				var version = util.getArg(sourceMap, 'version');
				var sections = util.getArg(sourceMap, 'sections');

				if (version != this._version) {
					throw new Error('Unsupported version: ' + version);
				}

				this._sources = new ArraySet();
				this._names = new ArraySet();

				var lastOffset = {
					line: -1,
					column: 0
				};
				this._sections = sections.map(function (s) {
					if (s.url) {
						// The url field will require support for asynchronicity.
						// See https://github.com/mozilla/source-map/issues/16
						throw new Error('Support for url field in sections not implemented.');
					}
					var offset = util.getArg(s, 'offset');
					var offsetLine = util.getArg(offset, 'line');
					var offsetColumn = util.getArg(offset, 'column');

					if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
						throw new Error('Section offsets must be ordered and non-overlapping.');
					}
					lastOffset = offset;

					return {
						generatedOffset: {
							// The offset fields are 0-based, but we use 1-based indices when
							// encoding/decoding from VLQ.
							generatedLine: offsetLine + 1,
							generatedColumn: offsetColumn + 1
						},
						consumer: new SourceMapConsumer(util.getArg(s, 'map'))
					};
				});
			}

			IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
			IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

			/**
    * The version of the source mapping spec that we are consuming.
    */
			IndexedSourceMapConsumer.prototype._version = 3;

			/**
    * The list of original sources.
    */
			Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
				get: function get() {
					var sources = [];
					for (var i = 0; i < this._sections.length; i++) {
						for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
							sources.push(this._sections[i].consumer.sources[j]);
						}
					}
					return sources;
				}
			});

			/**
    * Returns the original source, line, and column information for the generated
    * source's line and column positions provided. The only argument is an object
    * with the following properties:
    *
    *   - line: The line number in the generated source.
    *   - column: The column number in the generated source.
    *
    * and an object is returned with the following properties:
    *
    *   - source: The original source file, or null.
    *   - line: The line number in the original source, or null.
    *   - column: The column number in the original source, or null.
    *   - name: The original identifier, or null.
    */
			IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
				var needle = {
					generatedLine: util.getArg(aArgs, 'line'),
					generatedColumn: util.getArg(aArgs, 'column')
				};

				// Find the section containing the generated position we're trying to map
				// to an original position.
				var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
					var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
					if (cmp) {
						return cmp;
					}

					return needle.generatedColumn - section.generatedOffset.generatedColumn;
				});
				var section = this._sections[sectionIndex];

				if (!section) {
					return {
						source: null,
						line: null,
						column: null,
						name: null
					};
				}

				return section.consumer.originalPositionFor({
					line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
					column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
					bias: aArgs.bias
				});
			};

			/**
    * Return true if we have the source content for every source in the source
    * map, false otherwise.
    */
			IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
				return this._sections.every(function (s) {
					return s.consumer.hasContentsOfAllSources();
				});
			};

			/**
    * Returns the original source content. The only argument is the url of the
    * original source file. Returns null if no original source content is
    * available.
    */
			IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
				for (var i = 0; i < this._sections.length; i++) {
					var section = this._sections[i];

					var content = section.consumer.sourceContentFor(aSource, true);
					if (content) {
						return content;
					}
				}
				if (nullOnMissing) {
					return null;
				} else {
					throw new Error('"' + aSource + '" is not in the SourceMap.');
				}
			};

			/**
    * Returns the generated line and column information for the original source,
    * line, and column positions provided. The only argument is an object with
    * the following properties:
    *
    *   - source: The filename of the original source.
    *   - line: The line number in the original source.
    *   - column: The column number in the original source.
    *
    * and an object is returned with the following properties:
    *
    *   - line: The line number in the generated source, or null.
    *   - column: The column number in the generated source, or null.
    */
			IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
				for (var i = 0; i < this._sections.length; i++) {
					var section = this._sections[i];

					// Only consider this section if the requested source is in the list of
					// sources of the consumer.
					if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
						continue;
					}
					var generatedPosition = section.consumer.generatedPositionFor(aArgs);
					if (generatedPosition) {
						var ret = {
							line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
							column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
						};
						return ret;
					}
				}

				return {
					line: null,
					column: null
				};
			};

			/**
    * Parse the mappings in a string in to a data structure which we can easily
    * query (the ordered arrays in the `this.__generatedMappings` and
    * `this.__originalMappings` properties).
    */
			IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
				this.__generatedMappings = [];
				this.__originalMappings = [];
				for (var i = 0; i < this._sections.length; i++) {
					var section = this._sections[i];
					var sectionMappings = section.consumer._generatedMappings;
					for (var j = 0; j < sectionMappings.length; j++) {
						var mapping = sectionMappings[j];

						var source = section.consumer._sources.at(mapping.source);
						if (section.consumer.sourceRoot !== null) {
							source = util.join(section.consumer.sourceRoot, source);
						}
						this._sources.add(source);
						source = this._sources.indexOf(source);

						var name = section.consumer._names.at(mapping.name);
						this._names.add(name);
						name = this._names.indexOf(name);

						// The mappings coming from the consumer for the section have
						// generated positions relative to the start of the section, so we
						// need to offset them to be relative to the start of the concatenated
						// generated file.
						var adjustedMapping = {
							source: source,
							generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
							generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
							originalLine: mapping.originalLine,
							originalColumn: mapping.originalColumn,
							name: name
						};

						this.__generatedMappings.push(adjustedMapping);
						if (typeof adjustedMapping.originalLine === 'number') {
							this.__originalMappings.push(adjustedMapping);
						}
					}
				}

				quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
				quickSort(this.__originalMappings, util.compareByOriginalPositions);
			};

			exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			/**
    * This is a helper function for getting values from parameter/options
    * objects.
    *
    * @param args The object we are extracting values from
    * @param name The name of the property we are getting.
    * @param defaultValue An optional value to return if the property is missing
    * from the object. If this is not specified and the property is missing, an
    * error will be thrown.
    */
			function getArg(aArgs, aName, aDefaultValue) {
				if (aName in aArgs) {
					return aArgs[aName];
				} else if (arguments.length === 3) {
					return aDefaultValue;
				} else {
					throw new Error('"' + aName + '" is a required argument.');
				}
			}
			exports.getArg = getArg;

			var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
			var dataUrlRegexp = /^data:.+\,.+$/;

			function urlParse(aUrl) {
				var match = aUrl.match(urlRegexp);
				if (!match) {
					return null;
				}
				return {
					scheme: match[1],
					auth: match[2],
					host: match[3],
					port: match[4],
					path: match[5]
				};
			}
			exports.urlParse = urlParse;

			function urlGenerate(aParsedUrl) {
				var url = '';
				if (aParsedUrl.scheme) {
					url += aParsedUrl.scheme + ':';
				}
				url += '//';
				if (aParsedUrl.auth) {
					url += aParsedUrl.auth + '@';
				}
				if (aParsedUrl.host) {
					url += aParsedUrl.host;
				}
				if (aParsedUrl.port) {
					url += ":" + aParsedUrl.port;
				}
				if (aParsedUrl.path) {
					url += aParsedUrl.path;
				}
				return url;
			}
			exports.urlGenerate = urlGenerate;

			/**
    * Normalizes a path, or the path portion of a URL:
    *
    * - Replaces consecutive slashes with one slash.
    * - Removes unnecessary '.' parts.
    * - Removes unnecessary '<dir>/..' parts.
    *
    * Based on code in the Node.js 'path' core module.
    *
    * @param aPath The path or url to normalize.
    */
			function normalize(aPath) {
				var path = aPath;
				var url = urlParse(aPath);
				if (url) {
					if (!url.path) {
						return aPath;
					}
					path = url.path;
				}
				var isAbsolute = exports.isAbsolute(path);

				var parts = path.split(/\/+/);
				for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
					part = parts[i];
					if (part === '.') {
						parts.splice(i, 1);
					} else if (part === '..') {
						up++;
					} else if (up > 0) {
						if (part === '') {
							// The first part is blank if the path is absolute. Trying to go
							// above the root is a no-op. Therefore we can remove all '..' parts
							// directly after the root.
							parts.splice(i + 1, up);
							up = 0;
						} else {
							parts.splice(i, 2);
							up--;
						}
					}
				}
				path = parts.join('/');

				if (path === '') {
					path = isAbsolute ? '/' : '.';
				}

				if (url) {
					url.path = path;
					return urlGenerate(url);
				}
				return path;
			}
			exports.normalize = normalize;

			/**
    * Joins two paths/URLs.
    *
    * @param aRoot The root path or URL.
    * @param aPath The path or URL to be joined with the root.
    *
    * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
    *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
    *   first.
    * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
    *   is updated with the result and aRoot is returned. Otherwise the result
    *   is returned.
    *   - If aPath is absolute, the result is aPath.
    *   - Otherwise the two paths are joined with a slash.
    * - Joining for example 'http://' and 'www.example.com' is also supported.
    */
			function join(aRoot, aPath) {
				if (aRoot === "") {
					aRoot = ".";
				}
				if (aPath === "") {
					aPath = ".";
				}
				var aPathUrl = urlParse(aPath);
				var aRootUrl = urlParse(aRoot);
				if (aRootUrl) {
					aRoot = aRootUrl.path || '/';
				}

				// `join(foo, '//www.example.org')`
				if (aPathUrl && !aPathUrl.scheme) {
					if (aRootUrl) {
						aPathUrl.scheme = aRootUrl.scheme;
					}
					return urlGenerate(aPathUrl);
				}

				if (aPathUrl || aPath.match(dataUrlRegexp)) {
					return aPath;
				}

				// `join('http://', 'www.example.com')`
				if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
					aRootUrl.host = aPath;
					return urlGenerate(aRootUrl);
				}

				var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

				if (aRootUrl) {
					aRootUrl.path = joined;
					return urlGenerate(aRootUrl);
				}
				return joined;
			}
			exports.join = join;

			exports.isAbsolute = function (aPath) {
				return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
			};

			/**
    * Make a path relative to a URL or another path.
    *
    * @param aRoot The root path or URL.
    * @param aPath The path or URL to be made relative to aRoot.
    */
			function relative(aRoot, aPath) {
				if (aRoot === "") {
					aRoot = ".";
				}

				aRoot = aRoot.replace(/\/$/, '');

				// It is possible for the path to be above the root. In this case, simply
				// checking whether the root is a prefix of the path won't work. Instead, we
				// need to remove components from the root one by one, until either we find
				// a prefix that fits, or we run out of components to remove.
				var level = 0;
				while (aPath.indexOf(aRoot + '/') !== 0) {
					var index = aRoot.lastIndexOf("/");
					if (index < 0) {
						return aPath;
					}

					// If the only part of the root that is left is the scheme (i.e. http://,
					// file:///, etc.), one or more slashes (/), or simply nothing at all, we
					// have exhausted all components, so the path is not relative to the root.
					aRoot = aRoot.slice(0, index);
					if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
						return aPath;
					}

					++level;
				}

				// Make sure we add a "../" for each component we removed from the root.
				return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
			}
			exports.relative = relative;

			var supportsNullProto = function () {
				var obj = Object.create(null);
				return !('__proto__' in obj);
			}();

			function identity(s) {
				return s;
			}

			/**
    * Because behavior goes wacky when you set `__proto__` on objects, we
    * have to prefix all the strings in our set with an arbitrary character.
    *
    * See https://github.com/mozilla/source-map/pull/31 and
    * https://github.com/mozilla/source-map/issues/30
    *
    * @param String aStr
    */
			function toSetString(aStr) {
				if (isProtoString(aStr)) {
					return '$' + aStr;
				}

				return aStr;
			}
			exports.toSetString = supportsNullProto ? identity : toSetString;

			function fromSetString(aStr) {
				if (isProtoString(aStr)) {
					return aStr.slice(1);
				}

				return aStr;
			}
			exports.fromSetString = supportsNullProto ? identity : fromSetString;

			function isProtoString(s) {
				if (!s) {
					return false;
				}

				var length = s.length;

				if (length < 9 /* "__proto__".length */) {
						return false;
					}

				if (s.charCodeAt(length - 1) !== 95 /* '_' */ || s.charCodeAt(length - 2) !== 95 /* '_' */ || s.charCodeAt(length - 3) !== 111 /* 'o' */ || s.charCodeAt(length - 4) !== 116 /* 't' */ || s.charCodeAt(length - 5) !== 111 /* 'o' */ || s.charCodeAt(length - 6) !== 114 /* 'r' */ || s.charCodeAt(length - 7) !== 112 /* 'p' */ || s.charCodeAt(length - 8) !== 95 /* '_' */ || s.charCodeAt(length - 9) !== 95 /* '_' */) {
						return false;
					}

				for (var i = length - 10; i >= 0; i--) {
					if (s.charCodeAt(i) !== 36 /* '$' */) {
							return false;
						}
				}

				return true;
			}

			/**
    * Comparator between two mappings where the original positions are compared.
    *
    * Optionally pass in `true` as `onlyCompareGenerated` to consider two
    * mappings with the same original source/line/column, but different generated
    * line and column the same. Useful when searching for a mapping with a
    * stubbed out mapping.
    */
			function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
				var cmp = mappingA.source - mappingB.source;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalLine - mappingB.originalLine;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalColumn - mappingB.originalColumn;
				if (cmp !== 0 || onlyCompareOriginal) {
					return cmp;
				}

				cmp = mappingA.generatedColumn - mappingB.generatedColumn;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.generatedLine - mappingB.generatedLine;
				if (cmp !== 0) {
					return cmp;
				}

				return mappingA.name - mappingB.name;
			}
			exports.compareByOriginalPositions = compareByOriginalPositions;

			/**
    * Comparator between two mappings with deflated source and name indices where
    * the generated positions are compared.
    *
    * Optionally pass in `true` as `onlyCompareGenerated` to consider two
    * mappings with the same generated line and column, but different
    * source/name/original line and column the same. Useful when searching for a
    * mapping with a stubbed out mapping.
    */
			function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
				var cmp = mappingA.generatedLine - mappingB.generatedLine;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.generatedColumn - mappingB.generatedColumn;
				if (cmp !== 0 || onlyCompareGenerated) {
					return cmp;
				}

				cmp = mappingA.source - mappingB.source;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalLine - mappingB.originalLine;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalColumn - mappingB.originalColumn;
				if (cmp !== 0) {
					return cmp;
				}

				return mappingA.name - mappingB.name;
			}
			exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

			function strcmp(aStr1, aStr2) {
				if (aStr1 === aStr2) {
					return 0;
				}

				if (aStr1 > aStr2) {
					return 1;
				}

				return -1;
			}

			/**
    * Comparator between two mappings with inflated source and name strings where
    * the generated positions are compared.
    */
			function compareByGeneratedPositionsInflated(mappingA, mappingB) {
				var cmp = mappingA.generatedLine - mappingB.generatedLine;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.generatedColumn - mappingB.generatedColumn;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = strcmp(mappingA.source, mappingB.source);
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalLine - mappingB.originalLine;
				if (cmp !== 0) {
					return cmp;
				}

				cmp = mappingA.originalColumn - mappingB.originalColumn;
				if (cmp !== 0) {
					return cmp;
				}

				return strcmp(mappingA.name, mappingB.name);
			}
			exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			exports.GREATEST_LOWER_BOUND = 1;
			exports.LEAST_UPPER_BOUND = 2;

			/**
    * Recursive implementation of binary search.
    *
    * @param aLow Indices here and lower do not contain the needle.
    * @param aHigh Indices here and higher do not contain the needle.
    * @param aNeedle The element being searched for.
    * @param aHaystack The non-empty array being searched.
    * @param aCompare Function which takes two elements and returns -1, 0, or 1.
    * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
    *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
    *     closest element that is smaller than or greater than the one we are
    *     searching for, respectively, if the exact element cannot be found.
    */
			function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
				// This function terminates when one of the following is true:
				//
				//   1. We find the exact element we are looking for.
				//
				//   2. We did not find the exact element, but we can return the index of
				//      the next-closest element.
				//
				//   3. We did not find the exact element, and there is no next-closest
				//      element than the one we are searching for, so we return -1.
				var mid = Math.floor((aHigh - aLow) / 2) + aLow;
				var cmp = aCompare(aNeedle, aHaystack[mid], true);
				if (cmp === 0) {
					// Found the element we are looking for.
					return mid;
				} else if (cmp > 0) {
					// Our needle is greater than aHaystack[mid].
					if (aHigh - mid > 1) {
						// The element is in the upper half.
						return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
					}

					// The exact needle element was not found in this haystack. Determine if
					// we are in termination case (3) or (2) and return the appropriate thing.
					if (aBias == exports.LEAST_UPPER_BOUND) {
						return aHigh < aHaystack.length ? aHigh : -1;
					} else {
						return mid;
					}
				} else {
					// Our needle is less than aHaystack[mid].
					if (mid - aLow > 1) {
						// The element is in the lower half.
						return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
					}

					// we are in termination case (3) or (2) and return the appropriate thing.
					if (aBias == exports.LEAST_UPPER_BOUND) {
						return mid;
					} else {
						return aLow < 0 ? -1 : aLow;
					}
				}
			}

			/**
    * This is an implementation of binary search which will always try and return
    * the index of the closest element if there is no exact hit. This is because
    * mappings between original and generated line/col pairs are single points,
    * and there is an implicit region between each of them, so a miss just means
    * that you aren't on the very start of a region.
    *
    * @param aNeedle The element you are looking for.
    * @param aHaystack The array that is being searched.
    * @param aCompare A function which takes the needle and an element in the
    *     array and returns -1, 0, or 1 depending on whether the needle is less
    *     than, equal to, or greater than the element, respectively.
    * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
    *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
    *     closest element that is smaller than or greater than the one we are
    *     searching for, respectively, if the exact element cannot be found.
    *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
    */
			exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
				if (aHaystack.length === 0) {
					return -1;
				}

				var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
				if (index < 0) {
					return -1;
				}

				// We have found either the exact element, or the next-closest element than
				// the one we are searching for. However, there may be more than one such
				// element. Make sure we always return the smallest of these.
				while (index - 1 >= 0) {
					if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
						break;
					}
					--index;
				}

				return index;
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			var util = __webpack_require__(2);
			var has = Object.prototype.hasOwnProperty;

			/**
    * A data structure which is a combination of an array and a set. Adding a new
    * member is O(1), testing for membership is O(1), and finding the index of an
    * element is O(1). Removing elements from the set is not supported. Only
    * strings are supported for membership.
    */
			function ArraySet() {
				this._array = [];
				this._set = Object.create(null);
			}

			/**
    * Static method for creating ArraySet instances from an existing array.
    */
			ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
				var set = new ArraySet();
				for (var i = 0, len = aArray.length; i < len; i++) {
					set.add(aArray[i], aAllowDuplicates);
				}
				return set;
			};

			/**
    * Return how many unique items are in this ArraySet. If duplicates have been
    * added, than those do not count towards the size.
    *
    * @returns Number
    */
			ArraySet.prototype.size = function ArraySet_size() {
				return Object.getOwnPropertyNames(this._set).length;
			};

			/**
    * Add the given string to this set.
    *
    * @param String aStr
    */
			ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
				var sStr = util.toSetString(aStr);
				var isDuplicate = has.call(this._set, sStr);
				var idx = this._array.length;
				if (!isDuplicate || aAllowDuplicates) {
					this._array.push(aStr);
				}
				if (!isDuplicate) {
					this._set[sStr] = idx;
				}
			};

			/**
    * Is the given string a member of this set?
    *
    * @param String aStr
    */
			ArraySet.prototype.has = function ArraySet_has(aStr) {
				var sStr = util.toSetString(aStr);
				return has.call(this._set, sStr);
			};

			/**
    * What is the index of the given string in the array?
    *
    * @param String aStr
    */
			ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
				var sStr = util.toSetString(aStr);
				if (has.call(this._set, sStr)) {
					return this._set[sStr];
				}
				throw new Error('"' + aStr + '" is not in the set.');
			};

			/**
    * What is the element at the given index?
    *
    * @param Number aIdx
    */
			ArraySet.prototype.at = function ArraySet_at(aIdx) {
				if (aIdx >= 0 && aIdx < this._array.length) {
					return this._array[aIdx];
				}
				throw new Error('No element indexed by ' + aIdx);
			};

			/**
    * Returns the array representation of this set (which has the proper indices
    * indicated by indexOf). Note that this is a copy of the internal array used
    * for storing the members so that no one can mess with internal state.
    */
			ArraySet.prototype.toArray = function ArraySet_toArray() {
				return this._array.slice();
			};

			exports.ArraySet = ArraySet;

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    *
    * Based on the Base 64 VLQ implementation in Closure Compiler:
    * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
    *
    * Copyright 2011 The Closure Compiler Authors. All rights reserved.
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are
    * met:
    *
    *  * Redistributions of source code must retain the above copyright
    *    notice, this list of conditions and the following disclaimer.
    *  * Redistributions in binary form must reproduce the above
    *    copyright notice, this list of conditions and the following
    *    disclaimer in the documentation and/or other materials provided
    *    with the distribution.
    *  * Neither the name of Google Inc. nor the names of its
    *    contributors may be used to endorse or promote products derived
    *    from this software without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

			var base64 = __webpack_require__(6);

			// A single base 64 digit can contain 6 bits of data. For the base 64 variable
			// length quantities we use in the source map spec, the first bit is the sign,
			// the next four bits are the actual value, and the 6th bit is the
			// continuation bit. The continuation bit tells us whether there are more
			// digits in this value following this digit.
			//
			//   Continuation
			//   |    Sign
			//   |    |
			//   V    V
			//   101011

			var VLQ_BASE_SHIFT = 5;

			// binary: 100000
			var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

			// binary: 011111
			var VLQ_BASE_MASK = VLQ_BASE - 1;

			// binary: 100000
			var VLQ_CONTINUATION_BIT = VLQ_BASE;

			/**
    * Converts from a two-complement value to a value where the sign bit is
    * placed in the least significant bit.  For example, as decimals:
    *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
    *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
    */
			function toVLQSigned(aValue) {
				return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
			}

			/**
    * Converts to a two-complement value from a value where the sign bit is
    * placed in the least significant bit.  For example, as decimals:
    *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
    *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
    */
			function fromVLQSigned(aValue) {
				var isNegative = (aValue & 1) === 1;
				var shifted = aValue >> 1;
				return isNegative ? -shifted : shifted;
			}

			/**
    * Returns the base 64 VLQ encoded value.
    */
			exports.encode = function base64VLQ_encode(aValue) {
				var encoded = "";
				var digit;

				var vlq = toVLQSigned(aValue);

				do {
					digit = vlq & VLQ_BASE_MASK;
					vlq >>>= VLQ_BASE_SHIFT;
					if (vlq > 0) {
						// There are still more digits in this value, so we must make sure the
						// continuation bit is marked.
						digit |= VLQ_CONTINUATION_BIT;
					}
					encoded += base64.encode(digit);
				} while (vlq > 0);

				return encoded;
			};

			/**
    * Decodes the next base 64 VLQ value from the given string and returns the
    * value and the rest of the string via the out parameter.
    */
			exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
				var strLen = aStr.length;
				var result = 0;
				var shift = 0;
				var continuation, digit;

				do {
					if (aIndex >= strLen) {
						throw new Error("Expected more digits in base 64 VLQ value.");
					}

					digit = base64.decode(aStr.charCodeAt(aIndex++));
					if (digit === -1) {
						throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
					}

					continuation = !!(digit & VLQ_CONTINUATION_BIT);
					digit &= VLQ_BASE_MASK;
					result = result + (digit << shift);
					shift += VLQ_BASE_SHIFT;
				} while (continuation);

				aOutParam.value = fromVLQSigned(result);
				aOutParam.rest = aIndex;
			};

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

			/**
    * Encode an integer in the range of 0 to 63 to a single base 64 digit.
    */
			exports.encode = function (number) {
				if (0 <= number && number < intToCharMap.length) {
					return intToCharMap[number];
				}
				throw new TypeError("Must be between 0 and 63: " + number);
			};

			/**
    * Decode a single base 64 character code digit to an integer. Returns -1 on
    * failure.
    */
			exports.decode = function (charCode) {
				var bigA = 65; // 'A'
				var bigZ = 90; // 'Z'

				var littleA = 97; // 'a'
				var littleZ = 122; // 'z'

				var zero = 48; // '0'
				var nine = 57; // '9'

				var plus = 43; // '+'
				var slash = 47; // '/'

				var littleOffset = 26;
				var numberOffset = 52;

				// 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
				if (bigA <= charCode && charCode <= bigZ) {
					return charCode - bigA;
				}

				// 26 - 51: abcdefghijklmnopqrstuvwxyz
				if (littleA <= charCode && charCode <= littleZ) {
					return charCode - littleA + littleOffset;
				}

				// 52 - 61: 0123456789
				if (zero <= charCode && charCode <= nine) {
					return charCode - zero + numberOffset;
				}

				// 62: +
				if (charCode == plus) {
					return 62;
				}

				// 63: /
				if (charCode == slash) {
					return 63;
				}

				// Invalid base64 digit.
				return -1;
			};

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			/* -*- Mode: js; js-indent-level: 2; -*- */
			/*
    * Copyright 2011 Mozilla Foundation and contributors
    * Licensed under the New BSD license. See LICENSE or:
    * http://opensource.org/licenses/BSD-3-Clause
    */

			// It turns out that some (most?) JavaScript engines don't self-host
			// `Array.prototype.sort`. This makes sense because C++ will likely remain
			// faster than JS when doing raw CPU-intensive sorting. However, when using a
			// custom comparator function, calling back and forth between the VM's C++ and
			// JIT'd JS is rather slow *and* loses JIT type information, resulting in
			// worse generated code for the comparator function than would be optimal. In
			// fact, when sorting with a comparator, these costs outweigh the benefits of
			// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
			// a ~3500ms mean speed-up in `bench/bench.html`.

			/**
    * Swap the elements indexed by `x` and `y` in the array `ary`.
    *
    * @param {Array} ary
    *        The array.
    * @param {Number} x
    *        The index of the first item.
    * @param {Number} y
    *        The index of the second item.
    */
			function swap(ary, x, y) {
				var temp = ary[x];
				ary[x] = ary[y];
				ary[y] = temp;
			}

			/**
    * Returns a random integer within the range `low .. high` inclusive.
    *
    * @param {Number} low
    *        The lower bound on the range.
    * @param {Number} high
    *        The upper bound on the range.
    */
			function randomIntInRange(low, high) {
				return Math.round(low + Math.random() * (high - low));
			}

			/**
    * The Quick Sort algorithm.
    *
    * @param {Array} ary
    *        An array to sort.
    * @param {function} comparator
    *        Function to use to compare two items.
    * @param {Number} p
    *        Start index of the array
    * @param {Number} r
    *        End index of the array
    */
			function doQuickSort(ary, comparator, p, r) {
				// If our lower bound is less than our upper bound, we (1) partition the
				// array into two pieces and (2) recurse on each half. If it is not, this is
				// the empty array and our base case.

				if (p < r) {
					// (1) Partitioning.
					//
					// The partitioning chooses a pivot between `p` and `r` and moves all
					// elements that are less than or equal to the pivot to the before it, and
					// all the elements that are greater than it after it. The effect is that
					// once partition is done, the pivot is in the exact place it will be when
					// the array is put in sorted order, and it will not need to be moved
					// again. This runs in O(n) time.

					// Always choose a random pivot so that an input array which is reverse
					// sorted does not cause O(n^2) running time.
					var pivotIndex = randomIntInRange(p, r);
					var i = p - 1;

					swap(ary, pivotIndex, r);
					var pivot = ary[r];

					// Immediately after `j` is incremented in this loop, the following hold
					// true:
					//
					//   * Every element in `ary[p .. i]` is less than or equal to the pivot.
					//
					//   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
					for (var j = p; j < r; j++) {
						if (comparator(ary[j], pivot) <= 0) {
							i += 1;
							swap(ary, i, j);
						}
					}

					swap(ary, i + 1, j);
					var q = i + 1;

					// (2) Recurse on each half.

					doQuickSort(ary, comparator, p, q - 1);
					doQuickSort(ary, comparator, q + 1, r);
				}
			}

			/**
    * Sort the given array in-place with the given comparator function.
    *
    * @param {Array} ary
    *        An array to sort.
    * @param {function} comparator
    *        Function to use to compare two items.
    */
			exports.quickSort = function (ary, comparator) {
				doQuickSort(ary, comparator, 0, ary.length - 1);
			};

			/***/
		}
		/******/])
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForceUpdate = exports.createProxy = undefined;

var _supportsProtoAssignment = __webpack_require__(57);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

var _createClassProxy = __webpack_require__(116);

var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

var _reactDeepForceUpdate = __webpack_require__(218);

var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

if (!(0, _supportsProtoAssignment2.default)()) {
  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
}

exports.createProxy = _createClassProxy2.default;
exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = proxyClass;
exports.default = createClassProxy;

var _find = __webpack_require__(117);

var _find2 = _interopRequireDefault(_find);

var _createPrototypeProxy = __webpack_require__(195);

var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

var _bindAutoBindMethods = __webpack_require__(216);

var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

var _deleteUnknownAutoBindMethods = __webpack_require__(217);

var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

var _supportsProtoAssignment = __webpack_require__(57);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];

function isEqualDescriptor(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// This was originally a WeakMap but we had issues with React Native:
// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
var allProxies = [];
function findProxy(Component) {
  var pair = (0, _find2.default)(allProxies, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var key = _ref2[0];
    return key === Component;
  });
  return pair ? pair[1] : null;
}
function addProxy(Component, proxy) {
  allProxies.push([Component, proxy]);
}

function proxyClass(InitialComponent) {
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = findProxy(InitialComponent);
  if (existingProxy) {
    return existingProxy;
  }

  var prototypeProxy = (0, _createPrototypeProxy2.default)();
  var CurrentComponent = undefined;
  var ProxyComponent = undefined;

  var staticDescriptors = {};
  function wasStaticModifiedByUser(key) {
    // Compare the descriptor with the one we previously set ourselves.
    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
  }

  function instantiate(factory, context, params) {
    var component = factory();

    try {
      return component.apply(context, params);
    } catch (err) {
      (function () {
        // Native ES6 class instantiation
        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

        Object.keys(instance).forEach(function (key) {
          if (RESERVED_STATICS.indexOf(key) > -1) {
            return;
          }
          context[key] = instance[key];
        });
      })();
    }
  }

  try {
    // Create a proxy constructor with matching name
    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + (InitialComponent.name || 'ProxyComponent') + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
      return CurrentComponent;
    }, instantiate);
  } catch (err) {
    // Some environments may forbid dynamic evaluation
    ProxyComponent = function ProxyComponent() {
      return instantiate(function () {
        return CurrentComponent;
      }, this, arguments);
    };
  }

  // Point proxy constructor to the proxy prototype
  ProxyComponent.prototype = prototypeProxy.get();

  // Proxy toString() to the current constructor
  ProxyComponent.toString = function toString() {
    return CurrentComponent.toString();
  };

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    // Prevent proxy cycles
    var existingProxy = findProxy(NextComponent);
    if (existingProxy) {
      return update(existingProxy.__getCurrent());
    }

    // Save the next constructor so we call it
    CurrentComponent = NextComponent;

    // Update the prototype proxy with new methods
    var mountedInstances = prototypeProxy.update(NextComponent.prototype);

    // Set up the constructor property so accessing the statics work
    ProxyComponent.prototype.constructor = ProxyComponent;

    // Set up the same prototype for inherited statics
    ProxyComponent.__proto__ = NextComponent.__proto__;

    // Copy static methods and properties
    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
        configurable: true
      });

      // Copy static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        Object.defineProperty(ProxyComponent, key, staticDescriptor);
        staticDescriptors[key] = staticDescriptor;
      }
    });

    // Remove old static methods and properties
    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      // Skip statics that exist on the next class
      if (NextComponent.hasOwnProperty(key)) {
        return;
      }

      // Skip non-configurable statics
      var descriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
      if (descriptor && !descriptor.configurable) {
        return;
      }

      // Delete static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        delete ProxyComponent[key];
        delete staticDescriptors[key];
      }
    });

    // Try to infer displayName
    ProxyComponent.displayName = NextComponent.displayName || NextComponent.name;

    // We might have added new methods that need to be auto-bound
    mountedInstances.forEach(_bindAutoBindMethods2.default);
    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);

    // Let the user take care of redrawing
    return mountedInstances;
  };

  function get() {
    return ProxyComponent;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  addProxy(ProxyComponent, proxy);

  Object.defineProperty(proxy, '__getCurrent', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

function createFallback(Component) {
  var CurrentComponent = Component;

  return {
    get: function get() {
      return CurrentComponent;
    },
    update: function update(NextComponent) {
      CurrentComponent = NextComponent;
    }
  };
}

function createClassProxy(Component) {
  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createFind = __webpack_require__(118),
    findIndex = __webpack_require__(191);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIteratee = __webpack_require__(58),
    isArrayLike = __webpack_require__(23),
    keys = __webpack_require__(33);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function predicate(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsMatch = __webpack_require__(120),
    getMatchData = __webpack_require__(177),
    matchesStrictComparable = __webpack_require__(73);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(59),
    baseIsEqual = __webpack_require__(63);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(29);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(29);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(29);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(29);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(28);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(28),
    Map = __webpack_require__(40),
    MapCache = __webpack_require__(41);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(60),
    isMasked = __webpack_require__(134),
    isObject = __webpack_require__(22),
    toSource = __webpack_require__(62);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreJsData = __webpack_require__(135);

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(10);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hash = __webpack_require__(138),
    ListCache = __webpack_require__(28),
    Map = __webpack_require__(40);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hashClear = __webpack_require__(139),
    hashDelete = __webpack_require__(140),
    hashGet = __webpack_require__(141),
    hashHas = __webpack_require__(142),
    hashSet = __webpack_require__(143);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(31);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(31);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(31);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(31);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(32);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(32);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(32);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(32);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(59),
    equalArrays = __webpack_require__(64),
    equalByTag = __webpack_require__(153),
    equalObjects = __webpack_require__(157),
    getTag = __webpack_require__(172),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(68),
    isTypedArray = __webpack_require__(69);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(21),
    Uint8Array = __webpack_require__(154),
    eq = __webpack_require__(30),
    equalArrays = __webpack_require__(64),
    mapToArray = __webpack_require__(155),
    setToArray = __webpack_require__(156);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(10);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAllKeys = __webpack_require__(158);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetAllKeys = __webpack_require__(159),
    getSymbols = __webpack_require__(160),
    keys = __webpack_require__(33);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__(67),
    isArray = __webpack_require__(11);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayFilter = __webpack_require__(161),
    stubArray = __webpack_require__(162);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__(164),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(68),
    isIndex = __webpack_require__(43),
    isTypedArray = __webpack_require__(69);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(20),
    isLength = __webpack_require__(44),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(61);

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(170);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var overArg = __webpack_require__(171);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DataView = __webpack_require__(173),
    Map = __webpack_require__(40),
    Promise = __webpack_require__(174),
    Set = __webpack_require__(175),
    WeakMap = __webpack_require__(176),
    baseGetTag = __webpack_require__(20),
    toSource = __webpack_require__(62);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(15),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStrictComparable = __webpack_require__(72),
    keys = __webpack_require__(33);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqual = __webpack_require__(63),
    get = __webpack_require__(179),
    hasIn = __webpack_require__(185),
    isKey = __webpack_require__(45),
    isStrictComparable = __webpack_require__(72),
    matchesStrictComparable = __webpack_require__(73),
    toKey = __webpack_require__(35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__(74);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoizeCapped = __webpack_require__(181);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(182);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(41);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseToString = __webpack_require__(184);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(21),
    arrayMap = __webpack_require__(76),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseHasIn = __webpack_require__(186),
    hasPath = __webpack_require__(187);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(75),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(11),
    isIndex = __webpack_require__(43),
    isLength = __webpack_require__(44),
    toKey = __webpack_require__(35);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseProperty = __webpack_require__(189),
    basePropertyDeep = __webpack_require__(190),
    isKey = __webpack_require__(45),
    toKey = __webpack_require__(35);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__(74);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseFindIndex = __webpack_require__(77),
    baseIteratee = __webpack_require__(58),
    toInteger = __webpack_require__(192);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toFinite = __webpack_require__(193);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toNumber = __webpack_require__(194);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(22),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrototypeProxy;

var _assign = __webpack_require__(196);

var _assign2 = _interopRequireDefault(_assign);

var _difference = __webpack_require__(206);

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createPrototypeProxy() {
  var proxy = {};
  var current = null;
  var mountedInstances = [];

  /**
   * Creates a proxied toString() method pointing to the current version's toString().
   */
  function proxyToString(name) {
    // Wrap to always call the current version
    return function toString() {
      if (typeof current[name] === 'function') {
        return current[name].toString();
      } else {
        return '<method was deleted>';
      }
    };
  }

  /**
   * Creates a proxied method that calls the current version, whenever available.
   */
  function proxyMethod(name) {
    // Wrap to always call the current version
    var proxiedMethod = function proxiedMethod() {
      if (typeof current[name] === 'function') {
        return current[name].apply(this, arguments);
      }
    };

    // Copy properties of the original function, if any
    (0, _assign2.default)(proxiedMethod, current[name]);
    proxiedMethod.toString = proxyToString(name);

    return proxiedMethod;
  }

  /**
   * Augments the original componentDidMount with instance tracking.
   */
  function proxiedComponentDidMount() {
    mountedInstances.push(this);
    if (typeof current.componentDidMount === 'function') {
      return current.componentDidMount.apply(this, arguments);
    }
  }
  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

  /**
   * Augments the original componentWillUnmount with instance tracking.
   */
  function proxiedComponentWillUnmount() {
    var index = mountedInstances.indexOf(this);
    // Unless we're in a weird environment without componentDidMount
    if (index !== -1) {
      mountedInstances.splice(index, 1);
    }
    if (typeof current.componentWillUnmount === 'function') {
      return current.componentWillUnmount.apply(this, arguments);
    }
  }
  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

  /**
   * Defines a property on the proxy.
   */
  function defineProxyProperty(name, descriptor) {
    Object.defineProperty(proxy, name, descriptor);
  }

  /**
   * Defines a property, attempting to keep the original descriptor configuration.
   */
  function defineProxyPropertyWithValue(name, value) {
    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

    var _ref$enumerable = _ref.enumerable;
    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
    var _ref$writable = _ref.writable;
    var writable = _ref$writable === undefined ? true : _ref$writable;

    defineProxyProperty(name, {
      configurable: true,
      enumerable: enumerable,
      writable: writable,
      value: value
    });
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindMap() {
    if (!current.__reactAutoBindMap) {
      return;
    }

    var __reactAutoBindMap = {};
    for (var name in current.__reactAutoBindMap) {
      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
        __reactAutoBindMap[name] = proxy[name];
      }
    }

    return __reactAutoBindMap;
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindPairs() {
    var __reactAutoBindPairs = [];

    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
      var name = current.__reactAutoBindPairs[i];
      var method = proxy[name];

      if (typeof method === 'function') {
        __reactAutoBindPairs.push(name, method);
      }
    }

    return __reactAutoBindPairs;
  }

  /**
   * Applies the updated prototype.
   */
  function update(next) {
    // Save current source of truth
    current = next;

    // Find changed property names
    var currentNames = Object.getOwnPropertyNames(current);
    var previousName = Object.getOwnPropertyNames(proxy);
    var removedNames = (0, _difference2.default)(previousName, currentNames);

    // Remove properties and methods that are no longer there
    removedNames.forEach(function (name) {
      delete proxy[name];
    });

    // Copy every descriptor
    currentNames.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(current, name);
      if (typeof descriptor.value === 'function') {
        // Functions require additional wrapping so they can be bound later
        defineProxyPropertyWithValue(name, proxyMethod(name));
      } else {
        // Other values can be copied directly
        defineProxyProperty(name, descriptor);
      }
    });

    // Track mounting and unmounting
    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

    if (current.hasOwnProperty('__reactAutoBindMap')) {
      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
    }

    if (current.hasOwnProperty('__reactAutoBindPairs')) {
      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
    }

    // Set up the prototype chain
    proxy.__proto__ = next;

    return mountedInstances;
  }

  /**
   * Returns the up-to-date proxy prototype.
   */
  function get() {
    return proxy;
  }

  return {
    update: update,
    get: get
  };
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignValue = __webpack_require__(78),
    copyObject = __webpack_require__(197),
    createAssigner = __webpack_require__(198),
    isArrayLike = __webpack_require__(23),
    isPrototype = __webpack_require__(71),
    keys = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function (object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignValue = __webpack_require__(78),
    baseAssignValue = __webpack_require__(79);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRest = __webpack_require__(81),
    isIterateeCall = __webpack_require__(205);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(200);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseSetToString = __webpack_require__(202),
    shortOut = __webpack_require__(204);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constant = __webpack_require__(203),
    defineProperty = __webpack_require__(80),
    identity = __webpack_require__(46);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var eq = __webpack_require__(30),
    isArrayLike = __webpack_require__(23),
    isIndex = __webpack_require__(43),
    isObject = __webpack_require__(22);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseDifference = __webpack_require__(207),
    baseFlatten = __webpack_require__(213),
    baseRest = __webpack_require__(81),
    isArrayLikeObject = __webpack_require__(215);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function (array, values) {
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});

module.exports = difference;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SetCache = __webpack_require__(65),
    arrayIncludes = __webpack_require__(208),
    arrayIncludesWith = __webpack_require__(212),
    arrayMap = __webpack_require__(76),
    baseUnary = __webpack_require__(70),
    cacheHas = __webpack_require__(66);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIndexOf = __webpack_require__(209);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseFindIndex = __webpack_require__(77),
    baseIsNaN = __webpack_require__(210),
    strictIndexOf = __webpack_require__(211);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__(67),
    isFlattenable = __webpack_require__(214);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(21),
    isArguments = __webpack_require__(42),
    isArray = __webpack_require__(11);

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(23),
    isObjectLike = __webpack_require__(16);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAutoBindMethods;
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of React source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Original:
 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
 */

function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);

  boundMethod.__reactBoundContext = component;
  boundMethod.__reactBoundMethod = method;
  boundMethod.__reactBoundArguments = null;

  var componentName = component.constructor.displayName,
      _bind = boundMethod.bind;

  boundMethod.bind = function (newThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (newThis !== component && newThis !== null) {
      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
    } else if (!args.length) {
      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
      return boundMethod;
    }

    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;

    return reboundMethod;
  };

  return boundMethod;
}

function bindAutoBindMethodsFromMap(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      return;
    }

    // Tweak: skip methods that are already bound.
    // This is to preserve method reference in case it is used
    // as a subscription handler that needs to be detached later.
    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = component.__reactAutoBindMap[autoBindKey];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

function bindAutoBindMethods(component) {
  if (component.__reactAutoBindPairs) {
    bindAutoBindMethodsFromArray(component);
  } else if (component.__reactAutoBindMap) {
    bindAutoBindMethodsFromMap(component);
  }
}

function bindAutoBindMethodsFromArray(component) {
  var pairs = component.__reactAutoBindPairs;

  if (!pairs) {
    return;
  }

  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];

    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = pairs[i + 1];

    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUnknownAutoBindMethods;
function shouldDeleteClassicInstanceMethod(component, name) {
  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component[name].__reactBoundArguments !== null) {
    // It's a function bound to specific args, keep it
    return false;
  }

  // It's a cached bound method for a function
  // that was deleted by user, so we delete it from component.
  return true;
}

function shouldDeleteModernInstanceMethod(component, name) {
  var prototype = component.constructor.prototype;

  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

  if (!prototypeDescriptor || !prototypeDescriptor.get) {
    // This is definitely not an autobinding getter
    return false;
  }

  if (prototypeDescriptor.get().length !== component[name].length) {
    // The length doesn't match, bail out
    return false;
  }

  // This seems like a method bound using an autobinding getter on the prototype
  // Hopefully we won't run into too many false positives.
  return true;
}

function shouldDeleteInstanceMethod(component, name) {
  var descriptor = Object.getOwnPropertyDescriptor(component, name);
  if (typeof descriptor.value !== 'function') {
    // Not a function, or something fancy: bail out
    return;
  }

  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
    // Classic
    return shouldDeleteClassicInstanceMethod(component, name);
  } else {
    // Modern
    return shouldDeleteModernInstanceMethod(component, name);
  }
}

/**
 * Deletes autobound methods from the instance.
 *
 * For classic React classes, we only delete the methods that no longer exist in map.
 * This means the user actually deleted them in code.
 *
 * For modern classes, we delete methods that exist on prototype with the same length,
 * and which have getters on prototype, but are normal values on the instance.
 * This is usually an indication that an autobinding decorator is being used,
 * and the getter will re-generate the memoized handler on next access.
 */
function deleteUnknownAutoBindMethods(component) {
  var names = Object.getOwnPropertyNames(component);

  names.forEach(function (name) {
    if (shouldDeleteInstanceMethod(component, name)) {
      delete component[name];
    }
  });
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getForceUpdate;
function traverseRenderedChildren(internalInstance, callback, argument) {
  callback(internalInstance, argument);

  if (internalInstance._renderedComponent) {
    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
  } else {
    for (var key in internalInstance._renderedChildren) {
      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
      }
    }
  }
}

function setPendingForceUpdate(internalInstance) {
  if (internalInstance._pendingForceUpdate === false) {
    internalInstance._pendingForceUpdate = true;
  }
}

function forceUpdateIfPending(internalInstance, React) {
  if (internalInstance._pendingForceUpdate === true) {
    var publicInstance = internalInstance._instance;
    React.Component.prototype.forceUpdate.call(publicInstance);
  }
}

function getForceUpdate(React) {
  return function (instance) {
    var internalInstance = instance._reactInternalInstance;
    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
  };
}

module.exports = exports["default"];

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined") {
    win = self;
} else {
    win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createBrowserHistory = __webpack_require__(51);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createBrowserHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_reactRouter.Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = BrowserRouter;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createMemoryHistory = __webpack_require__(222);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _Router = __webpack_require__(48);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(_react2.default.Component);

MemoryRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = MemoryRouter;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(18);

var _LocationUtils = __webpack_require__(37);

var _createTransitionManager = __webpack_require__(38);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(_react2.default.Component);

Prompt.propTypes = {
  when: _propTypes2.default.bool,
  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      block: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};

exports.default = Prompt;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for updating the location programatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.propTypes = {
  push: _propTypes2.default.bool,
  from: _propTypes2.default.string,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired,
    staticContext: _propTypes2.default.object
  }).isRequired
};

exports.default = Redirect;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__(226);

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PathUtils = __webpack_require__(18);

var _Router = __webpack_require__(48);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = (0, _PathUtils.addLeadingSlash)(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = StaticRouter;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _matchPath = __webpack_require__(49);

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (!_react2.default.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};

exports.default = Switch;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(230);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _Route = __webpack_require__(82);

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  return (0, _hoistNonReactStatics2.default)(C, Component);
};

exports.default = withRouter;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(199);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createHashHistory = __webpack_require__(232);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _reactRouter = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createHashHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_reactRouter.Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(['hashbang', 'noslash', 'slash']),
  children: _propTypes2.default.node
};

exports.default = HashRouter;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(37);

var _PathUtils = __webpack_require__(18);

var _createTransitionManager = __webpack_require__(38);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(52);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.MemoryRouter;
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(6);

var _Link = __webpack_require__(83);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

  return _react2.default.createElement(_reactRouter.Route, {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [activeClassName, className].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func
};

NavLink.defaultProps = {
  activeClassName: 'active'
};

exports.default = NavLink;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Prompt;
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Redirect;
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Route;
  }
});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Router;
  }
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.StaticRouter;
  }
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Switch;
  }
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.matchPath;
  }
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _reactRouter.withRouter;
  }
});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _routes = __webpack_require__(244);

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(266);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(268);

var _Footer2 = _interopRequireDefault(_Footer);

var _PhotoBrowser = __webpack_require__(36);

var _PhotoBrowser2 = _interopRequireDefault(_PhotoBrowser);

var _Popup = __webpack_require__(270);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    App: {
        displayName: 'App'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/containers/App.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/containers/App.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var App = _wrapComponent('App')(function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(_Header2.default, null),
                _react3.default.createElement(
                    'div',
                    { className: 'body-view', id: 'bodyView' },
                    _routes2.default
                ),
                _react3.default.createElement(_Footer2.default, null),
                _react3.default.createElement(_PhotoBrowser2.default, null),
                _react3.default.createElement(_Popup2.default, null)
            );
        }
    }]);

    return App;
}(_react2.Component));

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(47);

var _Home = __webpack_require__(245);

var _Home2 = _interopRequireDefault(_Home);

var _Comment = __webpack_require__(252);

var _Comment2 = _interopRequireDefault(_Comment);

var _EditComment = __webpack_require__(255);

var _EditComment2 = _interopRequireDefault(_EditComment);

var _Article = __webpack_require__(258);

var _Article2 = _interopRequireDefault(_Article);

var _Search = __webpack_require__(260);

var _Search2 = _interopRequireDefault(_Search);

var _EditArticle = __webpack_require__(263);

var _EditArticle2 = _interopRequireDefault(_EditArticle);

var _NotFound = __webpack_require__(265);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/comment', component: _Comment2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/editcomment', component: _EditComment2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/article', component: _Article2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/search', component: _Search2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/editarticle', component: _EditArticle2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _CardList = __webpack_require__(246);

var _CardList2 = _interopRequireDefault(_CardList);

var _home = __webpack_require__(53);

var HomeActions = _interopRequireWildcard(_home);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _record = __webpack_require__(25);

var RecordActions = _interopRequireWildcard(_record);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    var headerAction = (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        footerAction = (0, _redux.bindActionCreators)(FooterActions, dispatch),
        recordAction = (0, _redux.bindActionCreators)(RecordActions, dispatch),
        homeAction = (0, _redux.bindActionCreators)(HomeActions, dispatch);
    return {
        headerAction: headerAction,
        footerAction: footerAction,
        recordAction: recordAction,
        homeAction: homeAction
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CardList2.default);

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

var _Card = __webpack_require__(84);

var _Card2 = _interopRequireDefault(_Card);

var _PhotoBrowser = __webpack_require__(36);

var _PhotoBrowser2 = _interopRequireDefault(_PhotoBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CardList: {
        displayName: 'CardList'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CardList.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CardList.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var CardList = _wrapComponent('CardList')(function (_Component) {
    _inherits(CardList, _Component);

    function CardList() {
        _classCallCheck(this, CardList);

        return _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).apply(this, arguments));
    }

    _createClass(CardList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var getHomeData = this.props.homeAction.getHomeData,
                updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter,
                history = this.props.history;

            window.FaKoa.history = history;
            updateHeader({
                type: 'base',
                title: 'FAKOA',
                isBack: false,
                rBtn: null
            });
            updateFooter({ type: 'home' });
            getHomeData();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var scrollTop = this.props.store.home.scrollTop;

            document.body.scrollTop = scrollTop;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var saveScrollTop = this.props.homeAction.saveScrollTop,
                recordOriginal = this.props.recordAction.recordOriginal;

            saveScrollTop(document.body.scrollTop);
            recordOriginal('home');
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            e.stopPropagation();
            var data = this.props.store.home.data,
                history = this.props.history,
                saveParams = this.props.homeAction.saveParams,
                t = (0, _zepto2.default)(e.target);

            if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                var ul = t.parents('.card-item'),
                    rows = ul.data('index'),
                    imgs = ul.find('img'),
                    index = t.data('index'),
                    photos = data[rows].photos,
                    photoArr = [];
                for (var i = 0; i < photos.length; i += 1) {
                    var cell = Object.assign({}, photos[i]);
                    cell.el = imgs[i];
                    photoArr.push(cell);
                }
                _PhotoBrowser2.default.init(photoArr, index);
            }
            if (e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
                var _ul = t.parents('.card-item'),
                    _rows = _ul.data('index'),
                    cTop = this.topCalc(_ul.offset().top);
                var param = {
                    rows: _rows, cTop: cTop
                };
                saveParams(param);
                history.push('/comment');
            }
            if (t.data('tag') === 'article') {
                var _ul2 = t.parents('.card-item'),
                    aid = t.data('aid'),
                    _cTop = this.topCalc(_ul2.offset().top);
                var _param = {
                    aid: aid, cTop: _cTop
                };
                saveParams(_param);
                history.push('/article');
            }
        }
    }, {
        key: 'topCalc',
        value: function topCalc(oTop) {
            var cTop = 0;
            if (oTop <= 45) {
                cTop = -document.body.scrollTop;
            } else {
                var temp = oTop - document.body.scrollTop;
                cTop = Math.ceil(temp - 44);
            }
            return cTop;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$store$home = this.props.store.home,
                isFetching = _props$store$home.isFetching,
                data = _props$store$home.data;

            var html = void 0;
            if (isFetching) {
                html = 'loadding';
            } else {
                var css = {};
                html = data.map(function (cell, index) {
                    if (index + 1 >= data.length) {
                        css = { marginBottom: 0 };
                    }
                    return _react3.default.createElement(_Card2.default, { key: cell.id, data: cell, cssStyle: css, index: index });
                });
            }
            return _react3.default.createElement(
                'div',
                { ref: function ref(c) {
                        _this2.eventLayer = c;
                    }
                },
                html
            );
        }
    }]);

    return CardList;
}(_react2.Component));

CardList.propTypes = {
    store: _propTypes2.default.object.isRequired,
    homeAction: _propTypes2.default.object.isRequired,
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired,
    recordAction: _propTypes2.default.object.isRequired,
    history: _propTypes2.default.object.isRequired
};

exports.default = CardList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SpeedDial: {
        displayName: 'SpeedDial'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/SpeedDial.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/SpeedDial.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var photoLen = 6;

var SpeedDial = _wrapComponent('SpeedDial')(function (_Component) {
    _inherits(SpeedDial, _Component);

    function SpeedDial() {
        _classCallCheck(this, SpeedDial);

        return _possibleConstructorReturn(this, (SpeedDial.__proto__ || Object.getPrototypeOf(SpeedDial)).apply(this, arguments));
    }

    _createClass(SpeedDial, [{
        key: 'photosHandler',
        value: function photosHandler(photos) {
            var len = photos.length;
            if (photos.length === 0) {
                return '';
            }
            if (photos.length > photoLen) {
                len = photoLen;
            }
            var liArr = [];
            for (var index = 0; index < len; index += 1) {
                liArr.push('<li><div><img src="' + photos[index].src + '" data-tag="thumbnail" data-index="' + index + '" /></div></li>');
            }
            return { __html: liArr.join('') };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var photos = this.props.photos;

            return _react3.default.createElement('ul', {
                ref: function ref(c) {
                    _this2.eventLayer = c;
                },
                className: 'speed-dial',
                dangerouslySetInnerHTML: this.photosHandler(photos)
            });
        }
    }]);

    return SpeedDial;
}(_react2.Component));

SpeedDial.propTypes = {
    photos: _propTypes2.default.array.isRequired
};

exports.default = SpeedDial;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(47);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CardAction: {
        displayName: 'CardAction'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/CardAction.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/CardAction.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var CardAction = _wrapComponent('CardAction')(function (_Component) {
    _inherits(CardAction, _Component);

    function CardAction() {
        _classCallCheck(this, CardAction);

        return _possibleConstructorReturn(this, (CardAction.__proto__ || Object.getPrototypeOf(CardAction)).apply(this, arguments));
    }

    _createClass(CardAction, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                numOfLikes = _props.numOfLikes,
                numOfComments = _props.numOfComments,
                numOfForwards = _props.numOfForwards,
                commentOps = _props.commentOps;

            var comment = '\u8BC4\u8BBA' + numOfComments;
            if (commentOps !== '') {
                comment = commentOps;
            }
            return _react3.default.createElement(
                'li',
                { className: 'interaction' },
                _react3.default.createElement(
                    'div',
                    { 'data-tag': 'forward' },
                    '\u8F6C\u53D1',
                    numOfForwards
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'txt-center', 'data-tag': 'comment' },
                    comment
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'txt-right', 'data-tag': 'like' },
                    '\u559C\u6B22',
                    numOfLikes
                )
            );
        }
    }]);

    return CardAction;
}(_react2.Component));

CardAction.propTypes = {
    numOfLikes: _propTypes2.default.number.isRequired,
    numOfComments: _propTypes2.default.number.isRequired,
    numOfForwards: _propTypes2.default.number.isRequired,
    commentOps: _propTypes2.default.string.isRequired
};

exports.default = CardAction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CardText: {
        displayName: 'CardText'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/CardText.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Card/CardText.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var CardText = _wrapComponent('CardText')(function (_Component) {
    _inherits(CardText, _Component);

    function CardText() {
        _classCallCheck(this, CardText);

        return _possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
    }

    _createClass(CardText, [{
        key: 'render',
        value: function render() {
            var text = this.props.text;

            return _react3.default.createElement(
                'li',
                { className: 'article mar-b' },
                text
            );
        }
    }]);

    return CardText;
}(_react2.Component));

CardText.propTypes = {
    text: _propTypes2.default.string.isRequired
};

exports.default = CardText;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(undefined, function () {

	'use strict';

	var PhotoSwipe = function PhotoSwipe(template, UiClass, items, options) {

		/*>>framework-bridge*/
		/**
   *
   * Set of generic functions used by gallery.
   * 
   * You're free to modify anything here as long as functionality is kept.
   * 
   */
		var framework = {
			features: null,
			bind: function bind(target, type, listener, unbind) {
				var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
				type = type.split(' ');
				for (var i = 0; i < type.length; i++) {
					if (type[i]) {
						target[methodName](type[i], listener, false);
					}
				}
			},
			isArray: function isArray(obj) {
				return obj instanceof Array;
			},
			createEl: function createEl(classes, tag) {
				var el = document.createElement(tag || 'div');
				if (classes) {
					el.className = classes;
				}
				return el;
			},
			getScrollY: function getScrollY() {
				var yOffset = window.pageYOffset;
				return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
			},
			unbind: function unbind(target, type, listener) {
				framework.bind(target, type, listener, true);
			},
			removeClass: function removeClass(el, className) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
				el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			},
			addClass: function addClass(el, className) {
				if (!framework.hasClass(el, className)) {
					el.className += (el.className ? ' ' : '') + className;
				}
			},
			hasClass: function hasClass(el, className) {
				return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
			},
			getChildByClass: function getChildByClass(parentEl, childClassName) {
				var node = parentEl.firstChild;
				while (node) {
					if (framework.hasClass(node, childClassName)) {
						return node;
					}
					node = node.nextSibling;
				}
			},
			arraySearch: function arraySearch(array, value, key) {
				var i = array.length;
				while (i--) {
					if (array[i][key] === value) {
						return i;
					}
				}
				return -1;
			},
			extend: function extend(o1, o2, preventOverwrite) {
				for (var prop in o2) {
					if (o2.hasOwnProperty(prop)) {
						if (preventOverwrite && o1.hasOwnProperty(prop)) {
							continue;
						}
						o1[prop] = o2[prop];
					}
				}
			},
			easing: {
				sine: {
					out: function out(k) {
						return Math.sin(k * (Math.PI / 2));
					},
					inOut: function inOut(k) {
						return -(Math.cos(Math.PI * k) - 1) / 2;
					}
				},
				cubic: {
					out: function out(k) {
						return --k * k * k + 1;
					}
					/*
     	elastic: {
     		out: function ( k ) {
     				var s, a = 0.1, p = 0.4;
     			if ( k === 0 ) return 0;
     			if ( k === 1 ) return 1;
     			if ( !a || a < 1 ) { a = 1; s = p / 4; }
     			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
     			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
     			},
     	},
     	back: {
     		out: function ( k ) {
     			var s = 1.70158;
     			return --k * k * ( ( s + 1 ) * k + s ) + 1;
     		}
     	}
     */
				} },

			/**
    * 
    * @return {object}
    * 
    * {
    *  raf : request animation frame function
    *  caf : cancel animation frame function
    *  transfrom : transform property key (with vendor), or null if not supported
    *  oldIE : IE8 or below
    * }
    * 
    */
			detectFeatures: function detectFeatures() {
				if (framework.features) {
					return framework.features;
				}
				var helperEl = framework.createEl(),
				    helperStyle = helperEl.style,
				    vendor = '',
				    features = {};

				// IE8 and below
				features.oldIE = document.all && !document.addEventListener;

				features.touch = 'ontouchstart' in window;

				if (window.requestAnimationFrame) {
					features.raf = window.requestAnimationFrame;
					features.caf = window.cancelAnimationFrame;
				}

				features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

				// fix false-positive detection of old Android in new IE
				// (IE11 ua string contains "Android 4.0")

				if (!features.pointerEvent) {

					var ua = navigator.userAgent;

					// Detect if device is iPhone or iPod and if it's older than iOS 8
					// http://stackoverflow.com/a/14223920
					// 
					// This detection is made because of buggy top/bottom toolbars
					// that don't trigger window.resize event.
					// For more info refer to _isFixedPosition variable in core.js

					if (/iP(hone|od)/.test(navigator.platform)) {
						var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
						if (v && v.length > 0) {
							v = parseInt(v[1], 10);
							if (v >= 1 && v < 8) {
								features.isOldIOSPhone = true;
							}
						}
					}

					// Detect old Android (before KitKat)
					// due to bugs related to position:fixed
					// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

					var match = ua.match(/Android\s([0-9\.]*)/);
					var androidversion = match ? match[1] : 0;
					androidversion = parseFloat(androidversion);
					if (androidversion >= 1) {
						if (androidversion < 4.4) {
							features.isOldAndroid = true; // for fixed position bug & performance
						}
						features.androidVersion = androidversion; // for touchend bug
					}
					features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

					// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
				}

				var styleChecks = ['transform', 'perspective', 'animationName'],
				    vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
				    styleCheckItem,
				    styleName;

				for (var i = 0; i < 4; i++) {
					vendor = vendors[i];

					for (var a = 0; a < 3; a++) {
						styleCheckItem = styleChecks[a];

						// uppercase first letter of property name, if vendor is present
						styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);

						if (!features[styleCheckItem] && styleName in helperStyle) {
							features[styleCheckItem] = styleName;
						}
					}

					if (vendor && !features.raf) {
						vendor = vendor.toLowerCase();
						features.raf = window[vendor + 'RequestAnimationFrame'];
						if (features.raf) {
							features.caf = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
						}
					}
				}

				if (!features.raf) {
					var lastTime = 0;
					features.raf = function (fn) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function () {
							fn(currTime + timeToCall);
						}, timeToCall);
						lastTime = currTime + timeToCall;
						return id;
					};
					features.caf = function (id) {
						clearTimeout(id);
					};
				}

				// Detect SVG support
				features.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

				framework.features = features;

				return features;
			}
		};

		framework.detectFeatures();

		// Override addEventListener for old versions of IE
		if (framework.features.oldIE) {

			framework.bind = function (target, type, listener, unbind) {

				type = type.split(' ');

				var methodName = (unbind ? 'detach' : 'attach') + 'Event',
				    evName,
				    _handleEv = function _handleEv() {
					listener.handleEvent.call(listener);
				};

				for (var i = 0; i < type.length; i++) {
					evName = type[i];
					if (evName) {

						if ((typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object' && listener.handleEvent) {
							if (!unbind) {
								listener['oldIE' + evName] = _handleEv;
							} else {
								if (!listener['oldIE' + evName]) {
									return false;
								}
							}

							target[methodName]('on' + evName, listener['oldIE' + evName]);
						} else {
							target[methodName]('on' + evName, listener);
						}
					}
				}
			};
		}

		/*>>framework-bridge*/

		/*>>core*/
		//function(template, UiClass, items, options)

		var self = this;

		/**
   * Static vars, don't change unless you know what you're doing.
   */
		var DOUBLE_TAP_RADIUS = 25,
		    NUM_HOLDERS = 3;

		/**
   * Options
   */
		var _options = {
			allowPanToNext: true,
			spacing: 0.12,
			bgOpacity: 1,
			mouseUsed: false,
			loop: true,
			pinchToClose: true,
			closeOnScroll: true,
			closeOnVerticalDrag: true,
			verticalDragRange: 0.75,
			hideAnimationDuration: 333,
			showAnimationDuration: 333,
			showHideOpacity: false,
			focus: true,
			escKey: true,
			arrowKeys: true,
			mainScrollEndFriction: 0.35,
			panEndFriction: 0.35,
			isClickableElement: function isClickableElement(el) {
				return el.tagName === 'A';
			},
			getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
				if (isMouseClick) {
					return 1;
				} else {
					return item.initialZoomLevel < 0.7 ? 1 : 1.33;
				}
			},
			maxSpreadZoom: 1.33,
			modal: true,

			// not fully implemented yet
			scaleMode: 'fit' // TODO
		};
		framework.extend(_options, options);

		/**
   * Private helper variables & functions
   */

		var _getEmptyPoint = function _getEmptyPoint() {
			return { x: 0, y: 0 };
		};

		var _isOpen,
		    _isDestroying,
		    _closedByScroll,
		    _currentItemIndex,
		    _containerStyle,
		    _containerShiftIndex,
		    _currPanDist = _getEmptyPoint(),
		    _startPanOffset = _getEmptyPoint(),
		    _panOffset = _getEmptyPoint(),
		    _upMoveEvents,
		    // drag move, drag end & drag cancel events array
		_downEvents,
		    // drag start events array
		_globalEventHandlers,
		    _viewportSize = {},
		    _currZoomLevel,
		    _startZoomLevel,
		    _translatePrefix,
		    _translateSufix,
		    _updateSizeInterval,
		    _itemsNeedUpdate,
		    _currPositionIndex = 0,
		    _offset = {},
		    _slideSize = _getEmptyPoint(),
		    // size of slide area, including spacing
		_itemHolders,
		    _prevItemIndex,
		    _indexDiff = 0,
		    // difference of indexes since last content update
		_dragStartEvent,
		    _dragMoveEvent,
		    _dragEndEvent,
		    _dragCancelEvent,
		    _transformKey,
		    _pointerEventEnabled,
		    _isFixedPosition = true,
		    _likelyTouchDevice,
		    _modules = [],
		    _requestAF,
		    _cancelAF,
		    _initalClassName,
		    _initalWindowScrollY,
		    _oldIE,
		    _currentWindowScrollY,
		    _features,
		    _windowVisibleSize = {},
		    _renderMaxResolution = false,
		    _orientationChangeTimeout,


		// Registers PhotoSWipe module (History, Controller ...)
		_registerModule = function _registerModule(name, module) {
			framework.extend(self, module.publicMethods);
			_modules.push(name);
		},
		    _getLoopedId = function _getLoopedId(index) {
			var numSlides = _getNumItems();
			if (index > numSlides - 1) {
				return index - numSlides;
			} else if (index < 0) {
				return numSlides + index;
			}
			return index;
		},


		// Micro bind/trigger
		_listeners = {},
		    _listen = function _listen(name, fn) {
			if (!_listeners[name]) {
				_listeners[name] = [];
			}
			return _listeners[name].push(fn);
		},
		    _shout = function _shout(name) {
			var listeners = _listeners[name];

			if (listeners) {
				var args = Array.prototype.slice.call(arguments);
				args.shift();

				for (var i = 0; i < listeners.length; i++) {
					listeners[i].apply(self, args);
				}
			}
		},
		    _getCurrentTime = function _getCurrentTime() {
			return new Date().getTime();
		},
		    _applyBgOpacity = function _applyBgOpacity(opacity) {
			_bgOpacity = opacity;
			self.bg.style.opacity = opacity * _options.bgOpacity;
		},
		    _applyZoomTransform = function _applyZoomTransform(styleObj, x, y, zoom, item) {
			if (!_renderMaxResolution || item && item !== self.currItem) {
				zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
			}

			styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
		},
		    _applyCurrentZoomPan = function _applyCurrentZoomPan(allowRenderResolution) {
			if (_currZoomElementStyle) {

				if (allowRenderResolution) {
					if (_currZoomLevel > self.currItem.fitRatio) {
						if (!_renderMaxResolution) {
							_setImageSize(self.currItem, false, true);
							_renderMaxResolution = true;
						}
					} else {
						if (_renderMaxResolution) {
							_setImageSize(self.currItem);
							_renderMaxResolution = false;
						}
					}
				}

				_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
			}
		},
		    _applyZoomPanToItem = function _applyZoomPanToItem(item) {
			if (item.container) {

				_applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
			}
		},
		    _setTranslateX = function _setTranslateX(x, elStyle) {
			elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
		},
		    _moveMainScroll = function _moveMainScroll(x, dragging) {

			if (!_options.loop && dragging) {
				var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				    delta = Math.round(x - _mainScrollPos.x);

				if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) {
					x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
				}
			}

			_mainScrollPos.x = x;
			_setTranslateX(x, _containerStyle);
		},
		    _calculatePanOffset = function _calculatePanOffset(axis, zoomLevel) {
			var m = _midZoomPoint[axis] - _offset[axis];
			return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
		},
		    _equalizePoints = function _equalizePoints(p1, p2) {
			p1.x = p2.x;
			p1.y = p2.y;
			if (p2.id) {
				p1.id = p2.id;
			}
		},
		    _roundPoint = function _roundPoint(p) {
			p.x = Math.round(p.x);
			p.y = Math.round(p.y);
		},
		    _mouseMoveTimeout = null,
		    _onFirstMouseMove = function _onFirstMouseMove() {
			// Wait until mouse move event is fired at least twice during 100ms
			// We do this, because some mobile browsers trigger it on touchstart
			if (_mouseMoveTimeout) {
				framework.unbind(document, 'mousemove', _onFirstMouseMove);
				framework.addClass(template, 'pswp--has_mouse');
				_options.mouseUsed = true;
				_shout('mouseUsed');
			}
			_mouseMoveTimeout = setTimeout(function () {
				_mouseMoveTimeout = null;
			}, 100);
		},
		    _bindEvents = function _bindEvents() {
			framework.bind(document, 'keydown', self);

			if (_features.transform) {
				// don't bind click event in browsers that don't support transform (mostly IE8)
				framework.bind(self.scrollWrap, 'click', self);
			}

			if (!_options.mouseUsed) {
				framework.bind(document, 'mousemove', _onFirstMouseMove);
			}

			framework.bind(window, 'resize scroll orientationchange', self);

			_shout('bindEvents');
		},
		    _unbindEvents = function _unbindEvents() {
			framework.unbind(window, 'resize scroll orientationchange', self);
			framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
			framework.unbind(document, 'keydown', self);
			framework.unbind(document, 'mousemove', _onFirstMouseMove);

			if (_features.transform) {
				framework.unbind(self.scrollWrap, 'click', self);
			}

			if (_isDragging) {
				framework.unbind(window, _upMoveEvents, self);
			}

			clearTimeout(_orientationChangeTimeout);

			_shout('unbindEvents');
		},
		    _calculatePanBounds = function _calculatePanBounds(zoomLevel, update) {
			var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
			if (update) {
				_currPanBounds = bounds;
			}
			return bounds;
		},
		    _getMinZoomLevel = function _getMinZoomLevel(item) {
			if (!item) {
				item = self.currItem;
			}
			return item.initialZoomLevel;
		},
		    _getMaxZoomLevel = function _getMaxZoomLevel(item) {
			if (!item) {
				item = self.currItem;
			}
			return item.w > 0 ? _options.maxSpreadZoom : 1;
		},


		// Return true if offset is out of the bounds
		_modifyDestPanOffset = function _modifyDestPanOffset(axis, destPanBounds, destPanOffset, destZoomLevel) {
			if (destZoomLevel === self.currItem.initialZoomLevel) {
				destPanOffset[axis] = self.currItem.initialPosition[axis];
				return true;
			} else {
				destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

				if (destPanOffset[axis] > destPanBounds.min[axis]) {
					destPanOffset[axis] = destPanBounds.min[axis];
					return true;
				} else if (destPanOffset[axis] < destPanBounds.max[axis]) {
					destPanOffset[axis] = destPanBounds.max[axis];
					return true;
				}
			}
			return false;
		},
		    _setupTransforms = function _setupTransforms() {

			if (_transformKey) {
				// setup 3d transforms
				var allow3dTransform = _features.perspective && !_likelyTouchDevice;
				_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
				_translateSufix = _features.perspective ? ', 0px)' : ')';
				return;
			}

			// Override zoom/pan/move functions in case old browser is used (most likely IE)
			// (so they use left/top/width/height, instead of CSS transform)

			_transformKey = 'left';
			framework.addClass(template, 'pswp--ie');

			_setTranslateX = function _setTranslateX(x, elStyle) {
				elStyle.left = x + 'px';
			};
			_applyZoomPanToItem = function _applyZoomPanToItem(item) {

				var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				    s = item.container.style,
				    w = zoomRatio * item.w,
				    h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';
				s.left = item.initialPosition.x + 'px';
				s.top = item.initialPosition.y + 'px';
			};
			_applyCurrentZoomPan = function _applyCurrentZoomPan() {
				if (_currZoomElementStyle) {

					var s = _currZoomElementStyle,
					    item = self.currItem,
					    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					    w = zoomRatio * item.w,
					    h = zoomRatio * item.h;

					s.width = w + 'px';
					s.height = h + 'px';

					s.left = _panOffset.x + 'px';
					s.top = _panOffset.y + 'px';
				}
			};
		},
		    _onKeyDown = function _onKeyDown(e) {
			var keydownAction = '';
			if (_options.escKey && e.keyCode === 27) {
				keydownAction = 'close';
			} else if (_options.arrowKeys) {
				if (e.keyCode === 37) {
					keydownAction = 'prev';
				} else if (e.keyCode === 39) {
					keydownAction = 'next';
				}
			}

			if (keydownAction) {
				// don't do anything if special key pressed to prevent from overriding default browser actions
				// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
				if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
					if (e.preventDefault) {
						e.preventDefault();
					} else {
						e.returnValue = false;
					}
					self[keydownAction]();
				}
			}
		},
		    _onGlobalClick = function _onGlobalClick(e) {
			if (!e) {
				return;
			}

			// don't allow click event to pass through when triggering after drag or some other gesture
			if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		    _updatePageScrollOffset = function _updatePageScrollOffset() {
			self.setScrollOffset(0, framework.getScrollY());
		};

		// Micro animation engine
		var _animations = {},
		    _numAnimations = 0,
		    _stopAnimation = function _stopAnimation(name) {
			if (_animations[name]) {
				if (_animations[name].raf) {
					_cancelAF(_animations[name].raf);
				}
				_numAnimations--;
				delete _animations[name];
			}
		},
		    _registerStartAnimation = function _registerStartAnimation(name) {
			if (_animations[name]) {
				_stopAnimation(name);
			}
			if (!_animations[name]) {
				_numAnimations++;
				_animations[name] = {};
			}
		},
		    _stopAllAnimations = function _stopAllAnimations() {
			for (var prop in _animations) {

				if (_animations.hasOwnProperty(prop)) {
					_stopAnimation(prop);
				}
			}
		},
		    _animateProp = function _animateProp(name, b, endProp, d, easingFn, onUpdate, onComplete) {
			var startAnimTime = _getCurrentTime(),
			    t;
			_registerStartAnimation(name);

			var animloop = function animloop() {
				if (_animations[name]) {

					t = _getCurrentTime() - startAnimTime; // time diff
					//b - beginning (start prop)
					//d - anim duration

					if (t >= d) {
						_stopAnimation(name);
						onUpdate(endProp);
						if (onComplete) {
							onComplete();
						}
						return;
					}
					onUpdate((endProp - b) * easingFn(t / d) + b);

					_animations[name].raf = _requestAF(animloop);
				}
			};
			animloop();
		};

		var publicMethods = {

			// make a few local variables and functions public
			shout: _shout,
			listen: _listen,
			viewportSize: _viewportSize,
			options: _options,

			isMainScrollAnimating: function isMainScrollAnimating() {
				return _mainScrollAnimating;
			},
			getZoomLevel: function getZoomLevel() {
				return _currZoomLevel;
			},
			getCurrentIndex: function getCurrentIndex() {
				return _currentItemIndex;
			},
			isDragging: function isDragging() {
				return _isDragging;
			},
			isZooming: function isZooming() {
				return _isZooming;
			},
			setScrollOffset: function setScrollOffset(x, y) {
				_offset.x = x;
				_currentWindowScrollY = _offset.y = y;
				_shout('updateScrollOffset', _offset);
			},
			applyZoomPan: function applyZoomPan(zoomLevel, panX, panY, allowRenderResolution) {
				_panOffset.x = panX;
				_panOffset.y = panY;
				_currZoomLevel = zoomLevel;
				_applyCurrentZoomPan(allowRenderResolution);
			},

			init: function init() {

				if (_isOpen || _isDestroying) {
					return;
				}

				var i;

				self.framework = framework; // basic functionality
				self.template = template; // root DOM element of PhotoSwipe
				self.bg = framework.getChildByClass(template, 'pswp__bg');

				_initalClassName = template.className;
				_isOpen = true;

				_features = framework.detectFeatures();
				_requestAF = _features.raf;
				_cancelAF = _features.caf;
				_transformKey = _features.transform;
				_oldIE = _features.oldIE;

				self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
				self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

				_containerStyle = self.container.style; // for fast access

				// Objects that hold slides (there are only 3 in DOM)
				self.itemHolders = _itemHolders = [{ el: self.container.children[0], wrap: 0, index: -1 }, { el: self.container.children[1], wrap: 0, index: -1 }, { el: self.container.children[2], wrap: 0, index: -1 }];

				// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
				_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

				_setupTransforms();

				// Setup global events
				_globalEventHandlers = {
					resize: self.updateSize,

					// Fixes: iOS 10.3 resize event
					// does not update scrollWrap.clientWidth instantly after resize
					// https://github.com/dimsemenov/PhotoSwipe/issues/1315
					orientationchange: function orientationchange() {
						clearTimeout(_orientationChangeTimeout);
						_orientationChangeTimeout = setTimeout(function () {
							if (_viewportSize.x !== self.scrollWrap.clientWidth) {
								self.updateSize();
							}
						}, 500);
					},
					scroll: _updatePageScrollOffset,
					keydown: _onKeyDown,
					click: _onGlobalClick
				};

				// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
				// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
				var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
				if (!_features.animationName || !_features.transform || oldPhone) {
					_options.showAnimationDuration = _options.hideAnimationDuration = 0;
				}

				// init modules
				for (i = 0; i < _modules.length; i++) {
					self['init' + _modules[i]]();
				}

				// init
				if (UiClass) {
					var ui = self.ui = new UiClass(self, framework);
					ui.init();
				}

				_shout('firstUpdate');
				_currentItemIndex = _currentItemIndex || _options.index || 0;
				// validate index
				if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
					_currentItemIndex = 0;
				}
				self.currItem = _getItemAt(_currentItemIndex);

				if (_features.isOldIOSPhone || _features.isOldAndroid) {
					_isFixedPosition = false;
				}

				template.setAttribute('aria-hidden', 'false');
				if (_options.modal) {
					if (!_isFixedPosition) {
						template.style.position = 'absolute';
						template.style.top = framework.getScrollY() + 'px';
					} else {
						template.style.position = 'fixed';
					}
				}

				if (_currentWindowScrollY === undefined) {
					_shout('initialLayout');
					_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
				}

				// add classes to root element of PhotoSwipe
				var rootClasses = 'pswp--open ';
				if (_options.mainClass) {
					rootClasses += _options.mainClass + ' ';
				}
				if (_options.showHideOpacity) {
					rootClasses += 'pswp--animate_opacity ';
				}
				rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
				rootClasses += _features.animationName ? ' pswp--css_animation' : '';
				rootClasses += _features.svg ? ' pswp--svg' : '';
				framework.addClass(template, rootClasses);

				self.updateSize();

				// initial update
				_containerShiftIndex = -1;
				_indexDiff = null;
				for (i = 0; i < NUM_HOLDERS; i++) {
					_setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
				}

				if (!_oldIE) {
					framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
				}

				_listen('initialZoomInEnd', function () {
					self.setContent(_itemHolders[0], _currentItemIndex - 1);
					self.setContent(_itemHolders[2], _currentItemIndex + 1);

					_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

					if (_options.focus) {
						// focus causes layout, 
						// which causes lag during the animation, 
						// that's why we delay it untill the initial zoom transition ends
						template.focus();
					}

					_bindEvents();
				});

				// set content for center slide (first time)
				self.setContent(_itemHolders[1], _currentItemIndex);

				self.updateCurrItem();

				_shout('afterInit');

				if (!_isFixedPosition) {

					// On all versions of iOS lower than 8.0, we check size of viewport every second.
					// 
					// This is done to detect when Safari top & bottom bars appear, 
					// as this action doesn't trigger any events (like resize). 
					// 
					// On iOS8 they fixed this.
					// 
					// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

					_updateSizeInterval = setInterval(function () {
						if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
							self.updateSize();
						}
					}, 1000);
				}

				framework.addClass(template, 'pswp--visible');
			},

			// Close the gallery, then destroy it
			close: function close() {
				if (!_isOpen) {
					return;
				}

				_isOpen = false;
				_isDestroying = true;
				_shout('close');
				_unbindEvents();

				_showOrHide(self.currItem, null, true, self.destroy);
			},

			// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
			destroy: function destroy() {
				_shout('destroy');

				if (_showOrHideTimeout) {
					clearTimeout(_showOrHideTimeout);
				}

				template.setAttribute('aria-hidden', 'true');
				template.className = _initalClassName;

				if (_updateSizeInterval) {
					clearInterval(_updateSizeInterval);
				}

				framework.unbind(self.scrollWrap, _downEvents, self);

				// we unbind scroll event at the end, as closing animation may depend on it
				framework.unbind(window, 'scroll', self);

				_stopDragUpdateLoop();

				_stopAllAnimations();

				_listeners = null;
			},

			/**
    * Pan image to position
    * @param {Number} x     
    * @param {Number} y     
    * @param {Boolean} force Will ignore bounds if set to true.
    */
			panTo: function panTo(x, y, force) {
				if (!force) {
					if (x > _currPanBounds.min.x) {
						x = _currPanBounds.min.x;
					} else if (x < _currPanBounds.max.x) {
						x = _currPanBounds.max.x;
					}

					if (y > _currPanBounds.min.y) {
						y = _currPanBounds.min.y;
					} else if (y < _currPanBounds.max.y) {
						y = _currPanBounds.max.y;
					}
				}

				_panOffset.x = x;
				_panOffset.y = y;
				_applyCurrentZoomPan();
			},

			handleEvent: function handleEvent(e) {
				e = e || window.event;
				if (_globalEventHandlers[e.type]) {
					_globalEventHandlers[e.type](e);
				}
			},

			goTo: function goTo(index) {

				index = _getLoopedId(index);

				var diff = index - _currentItemIndex;
				_indexDiff = diff;

				_currentItemIndex = index;
				self.currItem = _getItemAt(_currentItemIndex);
				_currPositionIndex -= diff;

				_moveMainScroll(_slideSize.x * _currPositionIndex);

				_stopAllAnimations();
				_mainScrollAnimating = false;

				self.updateCurrItem();
			},
			next: function next() {
				self.goTo(_currentItemIndex + 1);
			},
			prev: function prev() {
				self.goTo(_currentItemIndex - 1);
			},

			// update current zoom/pan objects
			updateCurrZoomItem: function updateCurrZoomItem(emulateSetContent) {
				if (emulateSetContent) {
					_shout('beforeChange', 0);
				}

				// itemHolder[1] is middle (current) item
				if (_itemHolders[1].el.children.length) {
					var zoomElement = _itemHolders[1].el.children[0];
					if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
						_currZoomElementStyle = zoomElement.style;
					} else {
						_currZoomElementStyle = null;
					}
				} else {
					_currZoomElementStyle = null;
				}

				_currPanBounds = self.currItem.bounds;
				_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

				_panOffset.x = _currPanBounds.center.x;
				_panOffset.y = _currPanBounds.center.y;

				if (emulateSetContent) {
					_shout('afterChange');
				}
			},

			invalidateCurrItems: function invalidateCurrItems() {
				_itemsNeedUpdate = true;
				for (var i = 0; i < NUM_HOLDERS; i++) {
					if (_itemHolders[i].item) {
						_itemHolders[i].item.needsUpdate = true;
					}
				}
			},

			updateCurrItem: function updateCurrItem(beforeAnimation) {

				if (_indexDiff === 0) {
					return;
				}

				var diffAbs = Math.abs(_indexDiff),
				    tempHolder;

				if (beforeAnimation && diffAbs < 2) {
					return;
				}

				self.currItem = _getItemAt(_currentItemIndex);
				_renderMaxResolution = false;

				_shout('beforeChange', _indexDiff);

				if (diffAbs >= NUM_HOLDERS) {
					_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
					diffAbs = NUM_HOLDERS;
				}
				for (var i = 0; i < diffAbs; i++) {
					if (_indexDiff > 0) {
						tempHolder = _itemHolders.shift();
						_itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

						_containerShiftIndex++;
						_setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
						self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
					} else {
						tempHolder = _itemHolders.pop();
						_itemHolders.unshift(tempHolder); // move last to first

						_containerShiftIndex--;
						_setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
						self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
					}
				}

				// reset zoom/pan on previous item
				if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

					var prevItem = _getItemAt(_prevItemIndex);
					if (prevItem.initialZoomLevel !== _currZoomLevel) {
						_calculateItemSize(prevItem, _viewportSize);
						_setImageSize(prevItem);
						_applyZoomPanToItem(prevItem);
					}
				}

				// reset diff after update
				_indexDiff = 0;

				self.updateCurrZoomItem();

				_prevItemIndex = _currentItemIndex;

				_shout('afterChange');
			},

			updateSize: function updateSize(force) {

				if (!_isFixedPosition && _options.modal) {
					var windowScrollY = framework.getScrollY();
					if (_currentWindowScrollY !== windowScrollY) {
						template.style.top = windowScrollY + 'px';
						_currentWindowScrollY = windowScrollY;
					}
					if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
						return;
					}
					_windowVisibleSize.x = window.innerWidth;
					_windowVisibleSize.y = window.innerHeight;

					//template.style.width = _windowVisibleSize.x + 'px';
					template.style.height = _windowVisibleSize.y + 'px';
				}

				_viewportSize.x = self.scrollWrap.clientWidth;
				_viewportSize.y = self.scrollWrap.clientHeight;

				_updatePageScrollOffset();

				_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
				_slideSize.y = _viewportSize.y;

				_moveMainScroll(_slideSize.x * _currPositionIndex);

				_shout('beforeResize'); // even may be used for example to switch image sources


				// don't re-calculate size on inital size update
				if (_containerShiftIndex !== undefined) {

					var holder, item, hIndex;

					for (var i = 0; i < NUM_HOLDERS; i++) {
						holder = _itemHolders[i];
						_setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

						hIndex = _currentItemIndex + i - 1;

						if (_options.loop && _getNumItems() > 2) {
							hIndex = _getLoopedId(hIndex);
						}

						// update zoom level on items and refresh source (if needsUpdate)
						item = _getItemAt(hIndex);

						// re-render gallery item if `needsUpdate`,
						// or doesn't have `bounds` (entirely new slide object)
						if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {

							self.cleanSlide(item);

							self.setContent(holder, hIndex);

							// if "center" slide
							if (i === 1) {
								self.currItem = item;
								self.updateCurrZoomItem(true);
							}

							item.needsUpdate = false;
						} else if (holder.index === -1 && hIndex >= 0) {
							// add content first time
							self.setContent(holder, hIndex);
						}
						if (item && item.container) {
							_calculateItemSize(item, _viewportSize);
							_setImageSize(item);
							_applyZoomPanToItem(item);
						}
					}
					_itemsNeedUpdate = false;
				}

				_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
				_currPanBounds = self.currItem.bounds;

				if (_currPanBounds) {
					_panOffset.x = _currPanBounds.center.x;
					_panOffset.y = _currPanBounds.center.y;
					_applyCurrentZoomPan(true);
				}

				_shout('resize');
			},

			// Zoom current item to
			zoomTo: function zoomTo(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
				/*
    	if(destZoomLevel === 'fit') {
    		destZoomLevel = self.currItem.fitRatio;
    	} else if(destZoomLevel === 'fill') {
    		destZoomLevel = self.currItem.fillRatio;
    	}
    */

				if (centerPoint) {
					_startZoomLevel = _currZoomLevel;
					_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
					_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
					_equalizePoints(_startPanOffset, _panOffset);
				}

				var destPanBounds = _calculatePanBounds(destZoomLevel, false),
				    destPanOffset = {};

				_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
				_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

				var initialZoomLevel = _currZoomLevel;
				var initialPanOffset = {
					x: _panOffset.x,
					y: _panOffset.y
				};

				_roundPoint(destPanOffset);

				var onUpdate = function onUpdate(now) {
					if (now === 1) {
						_currZoomLevel = destZoomLevel;
						_panOffset.x = destPanOffset.x;
						_panOffset.y = destPanOffset.y;
					} else {
						_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
						_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
						_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
					}

					if (updateFn) {
						updateFn(now);
					}

					_applyCurrentZoomPan(now === 1);
				};

				if (speed) {
					_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
				} else {
					onUpdate(1);
				}
			}

		};

		/*>>core*/

		/*>>gestures*/
		/**
   * Mouse/touch/pointer event handlers.
   * 
   * separated from @core.js for readability
   */

		var MIN_SWIPE_DISTANCE = 30,
		    DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

		var _gestureStartTime,
		    _gestureCheckSpeedTime,


		// pool of objects that are used during dragging of zooming
		p = {},
		    // first point
		p2 = {},
		    // second point (for zoom gesture)
		delta = {},
		    _currPoint = {},
		    _startPoint = {},
		    _currPointers = [],
		    _startMainScrollPos = {},
		    _releaseAnimData,
		    _posPoints = [],
		    // array of points during dragging, used to determine type of gesture
		_tempPoint = {},
		    _isZoomingIn,
		    _verticalDragInitiated,
		    _oldAndroidTouchEndTimeout,
		    _currZoomedItemIndex = 0,
		    _centerPoint = _getEmptyPoint(),
		    _lastReleaseTime = 0,
		    _isDragging,
		    // at least one pointer is down
		_isMultitouch,
		    // at least two _pointers are down
		_zoomStarted,
		    // zoom level changed during zoom gesture
		_moved,
		    _dragAnimFrame,
		    _mainScrollShifted,
		    _currentPoints,
		    // array of current touch points
		_isZooming,
		    _currPointsDistance,
		    _startPointsDistance,
		    _currPanBounds,
		    _mainScrollPos = _getEmptyPoint(),
		    _currZoomElementStyle,
		    _mainScrollAnimating,
		    // true, if animation after swipe gesture is running
		_midZoomPoint = _getEmptyPoint(),
		    _currCenterPoint = _getEmptyPoint(),
		    _direction,
		    _isFirstMove,
		    _opacityChanged,
		    _bgOpacity,
		    _wasOverInitialZoom,
		    _isEqualPoints = function _isEqualPoints(p1, p2) {
			return p1.x === p2.x && p1.y === p2.y;
		},
		    _isNearbyPoints = function _isNearbyPoints(touch0, touch1) {
			return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
		},
		    _calculatePointsDistance = function _calculatePointsDistance(p1, p2) {
			_tempPoint.x = Math.abs(p1.x - p2.x);
			_tempPoint.y = Math.abs(p1.y - p2.y);
			return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
		},
		    _stopDragUpdateLoop = function _stopDragUpdateLoop() {
			if (_dragAnimFrame) {
				_cancelAF(_dragAnimFrame);
				_dragAnimFrame = null;
			}
		},
		    _dragUpdateLoop = function _dragUpdateLoop() {
			if (_isDragging) {
				_dragAnimFrame = _requestAF(_dragUpdateLoop);
				_renderMovement();
			}
		},
		    _canPan = function _canPan() {
			return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
		},


		// find the closest parent DOM element
		_closestElement = function _closestElement(el, fn) {
			if (!el || el === document) {
				return false;
			}

			// don't search elements above pswp__scroll-wrap
			if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
				return false;
			}

			if (fn(el)) {
				return el;
			}

			return _closestElement(el.parentNode, fn);
		},
		    _preventObj = {},
		    _preventDefaultEventBehaviour = function _preventDefaultEventBehaviour(e, isDown) {
			_preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

			_shout('preventDragEvent', e, isDown, _preventObj);
			return _preventObj.prevent;
		},
		    _convertTouchToPoint = function _convertTouchToPoint(touch, p) {
			p.x = touch.pageX;
			p.y = touch.pageY;
			p.id = touch.identifier;
			return p;
		},
		    _findCenterOfPoints = function _findCenterOfPoints(p1, p2, pCenter) {
			pCenter.x = (p1.x + p2.x) * 0.5;
			pCenter.y = (p1.y + p2.y) * 0.5;
		},
		    _pushPosPoint = function _pushPosPoint(time, x, y) {
			if (time - _gestureCheckSpeedTime > 50) {
				var o = _posPoints.length > 2 ? _posPoints.shift() : {};
				o.x = x;
				o.y = y;
				_posPoints.push(o);
				_gestureCheckSpeedTime = time;
			}
		},
		    _calculateVerticalDragOpacityRatio = function _calculateVerticalDragOpacityRatio() {
			var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
			return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
		},


		// points pool, reused during touch events
		_ePoint1 = {},
		    _ePoint2 = {},
		    _tempPointsArr = [],
		    _tempCounter,
		    _getTouchPoints = function _getTouchPoints(e) {
			// clean up previous points, without recreating array
			while (_tempPointsArr.length > 0) {
				_tempPointsArr.pop();
			}

			if (!_pointerEventEnabled) {
				if (e.type.indexOf('touch') > -1) {

					if (e.touches && e.touches.length > 0) {
						_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
						if (e.touches.length > 1) {
							_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
						}
					}
				} else {
					_ePoint1.x = e.pageX;
					_ePoint1.y = e.pageY;
					_ePoint1.id = '';
					_tempPointsArr[0] = _ePoint1; //_ePoint1;
				}
			} else {
				_tempCounter = 0;
				// we can use forEach, as pointer events are supported only in modern browsers
				_currPointers.forEach(function (p) {
					if (_tempCounter === 0) {
						_tempPointsArr[0] = p;
					} else if (_tempCounter === 1) {
						_tempPointsArr[1] = p;
					}
					_tempCounter++;
				});
			}
			return _tempPointsArr;
		},
		    _panOrMoveMainScroll = function _panOrMoveMainScroll(axis, delta) {

			var panFriction,
			    overDiff = 0,
			    newOffset = _panOffset[axis] + delta[axis],
			    startOverDiff,
			    dir = delta[axis] > 0,
			    newMainScrollPosition = _mainScrollPos.x + delta.x,
			    mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			    newPanPos,
			    newMainScrollPos;

			// calculate fdistance over the bounds and friction
			if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
				panFriction = _options.panEndFriction;
				// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
				// Looks not as nice as was expected. Left for history.
				// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
			} else {
				panFriction = 1;
			}

			newOffset = _panOffset[axis] + delta[axis] * panFriction;

			// move main scroll or start panning
			if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {

				if (!_currZoomElementStyle) {

					newMainScrollPos = newMainScrollPosition;
				} else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {

					if (dir) {
						if (newOffset > _currPanBounds.min[axis]) {
							panFriction = _options.panEndFriction;
							overDiff = _currPanBounds.min[axis] - newOffset;
							startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
						}

						// drag right
						if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
							newMainScrollPos = newMainScrollPosition;
							if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}
						} else {
							if (_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
						}
					} else {

						if (newOffset < _currPanBounds.max[axis]) {
							panFriction = _options.panEndFriction;
							overDiff = newOffset - _currPanBounds.max[axis];
							startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
						}

						if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
							newMainScrollPos = newMainScrollPosition;

							if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
								newMainScrollPos = _startMainScrollPos.x;
							}
						} else {
							if (_currPanBounds.min.x !== _currPanBounds.max.x) {
								newPanPos = newOffset;
							}
						}
					}

					//
				}

				if (axis === 'x') {

					if (newMainScrollPos !== undefined) {
						_moveMainScroll(newMainScrollPos, true);
						if (newMainScrollPos === _startMainScrollPos.x) {
							_mainScrollShifted = false;
						} else {
							_mainScrollShifted = true;
						}
					}

					if (_currPanBounds.min.x !== _currPanBounds.max.x) {
						if (newPanPos !== undefined) {
							_panOffset.x = newPanPos;
						} else if (!_mainScrollShifted) {
							_panOffset.x += delta.x * panFriction;
						}
					}

					return newMainScrollPos !== undefined;
				}
			}

			if (!_mainScrollAnimating) {

				if (!_mainScrollShifted) {
					if (_currZoomLevel > self.currItem.fitRatio) {
						_panOffset[axis] += delta[axis] * panFriction;
					}
				}
			}
		},


		// Pointerdown/touchstart/mousedown handler
		_onDragStart = function _onDragStart(e) {

			// Allow dragging only via left mouse button.
			// As this handler is not added in IE8 - we ignore e.which
			// 
			// http://www.quirksmode.org/js/events_properties.html
			// https://developer.mozilla.org/en-US/docs/Web/API/event.button
			if (e.type === 'mousedown' && e.button > 0) {
				return;
			}

			if (_initialZoomRunning) {
				e.preventDefault();
				return;
			}

			if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
				return;
			}

			if (_preventDefaultEventBehaviour(e, true)) {
				e.preventDefault();
			}

			_shout('pointerDown');

			if (_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if (pointerIndex < 0) {
					pointerIndex = _currPointers.length;
				}
				_currPointers[pointerIndex] = { x: e.pageX, y: e.pageY, id: e.pointerId };
			}

			var startPointsList = _getTouchPoints(e),
			    numPoints = startPointsList.length;

			_currentPoints = null;

			_stopAllAnimations();

			// init drag
			if (!_isDragging || numPoints === 1) {

				_isDragging = _isFirstMove = true;
				framework.bind(window, _upMoveEvents, self);

				_isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;

				_direction = null;

				_shout('firstTouchStart', startPointsList);

				_equalizePoints(_startPanOffset, _panOffset);

				_currPanDist.x = _currPanDist.y = 0;
				_equalizePoints(_currPoint, startPointsList[0]);
				_equalizePoints(_startPoint, _currPoint);

				//_equalizePoints(_startMainScrollPos, _mainScrollPos);
				_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

				_posPoints = [{
					x: _currPoint.x,
					y: _currPoint.y
				}];

				_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

				//_mainScrollAnimationEnd(true);
				_calculatePanBounds(_currZoomLevel, true);

				// Start rendering
				_stopDragUpdateLoop();
				_dragUpdateLoop();
			}

			// init zoom
			if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
				_startZoomLevel = _currZoomLevel;
				_zoomStarted = false; // true if zoom changed at least once

				_isZooming = _isMultitouch = true;
				_currPanDist.y = _currPanDist.x = 0;

				_equalizePoints(_startPanOffset, _panOffset);

				_equalizePoints(p, startPointsList[0]);
				_equalizePoints(p2, startPointsList[1]);

				_findCenterOfPoints(p, p2, _currCenterPoint);

				_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
				_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
				_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
			}
		},


		// Pointermove/touchmove/mousemove handler
		_onDragMove = function _onDragMove(e) {

			e.preventDefault();

			if (_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
				if (pointerIndex > -1) {
					var p = _currPointers[pointerIndex];
					p.x = e.pageX;
					p.y = e.pageY;
				}
			}

			if (_isDragging) {
				var touchesList = _getTouchPoints(e);
				if (!_direction && !_moved && !_isZooming) {

					if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
						// if main scroll position is shifted – direction is always horizontal
						_direction = 'h';
					} else {
						var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
						// check the direction of movement
						if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
							_direction = diff > 0 ? 'h' : 'v';
							_currentPoints = touchesList;
						}
					}
				} else {
					_currentPoints = touchesList;
				}
			}
		},

		// 
		_renderMovement = function _renderMovement() {

			if (!_currentPoints) {
				return;
			}

			var numPoints = _currentPoints.length;

			if (numPoints === 0) {
				return;
			}

			_equalizePoints(p, _currentPoints[0]);

			delta.x = p.x - _currPoint.x;
			delta.y = p.y - _currPoint.y;

			if (_isZooming && numPoints > 1) {
				// Handle behaviour for more than 1 point

				_currPoint.x = p.x;
				_currPoint.y = p.y;

				// check if one of two points changed
				if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
					return;
				}

				_equalizePoints(p2, _currentPoints[1]);

				if (!_zoomStarted) {
					_zoomStarted = true;
					_shout('zoomGestureStarted');
				}

				// Distance between two points
				var pointsDistance = _calculatePointsDistance(p, p2);

				var zoomLevel = _calculateZoomLevel(pointsDistance);

				// slightly over the of initial zoom level
				if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
					_wasOverInitialZoom = true;
				}

				// Apply the friction if zoom level is out of the bounds
				var zoomFriction = 1,
				    minZoomLevel = _getMinZoomLevel(),
				    maxZoomLevel = _getMaxZoomLevel();

				if (zoomLevel < minZoomLevel) {

					if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
						// fade out background if zooming out
						var minusDiff = minZoomLevel - zoomLevel;
						var percent = 1 - minusDiff / (minZoomLevel / 1.2);

						_applyBgOpacity(percent);
						_shout('onPinchClose', percent);
						_opacityChanged = true;
					} else {
						zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
						if (zoomFriction > 1) {
							zoomFriction = 1;
						}
						zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
					}
				} else if (zoomLevel > maxZoomLevel) {
					// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
					zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
					if (zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
				}

				if (zoomFriction < 0) {
					zoomFriction = 0;
				}

				// distance between touch points after friction is applied
				_currPointsDistance = pointsDistance;

				// _centerPoint - The point in the middle of two pointers
				_findCenterOfPoints(p, p2, _centerPoint);

				// paning with two pointers pressed
				_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
				_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
				_equalizePoints(_currCenterPoint, _centerPoint);

				_panOffset.x = _calculatePanOffset('x', zoomLevel);
				_panOffset.y = _calculatePanOffset('y', zoomLevel);

				_isZoomingIn = zoomLevel > _currZoomLevel;
				_currZoomLevel = zoomLevel;
				_applyCurrentZoomPan();
			} else {

				// handle behaviour for one point (dragging or panning)

				if (!_direction) {
					return;
				}

				if (_isFirstMove) {
					_isFirstMove = false;

					// subtract drag distance that was used during the detection direction  

					if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
						delta.x -= _currentPoints[0].x - _startPoint.x;
					}

					if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
						delta.y -= _currentPoints[0].y - _startPoint.y;
					}
				}

				_currPoint.x = p.x;
				_currPoint.y = p.y;

				// do nothing if pointers position hasn't changed
				if (delta.x === 0 && delta.y === 0) {
					return;
				}

				if (_direction === 'v' && _options.closeOnVerticalDrag) {
					if (!_canPan()) {
						_currPanDist.y += delta.y;
						_panOffset.y += delta.y;

						var opacityRatio = _calculateVerticalDragOpacityRatio();

						_verticalDragInitiated = true;
						_shout('onVerticalDrag', opacityRatio);

						_applyBgOpacity(opacityRatio);
						_applyCurrentZoomPan();
						return;
					}
				}

				_pushPosPoint(_getCurrentTime(), p.x, p.y);

				_moved = true;
				_currPanBounds = self.currItem.bounds;

				var mainScrollChanged = _panOrMoveMainScroll('x', delta);
				if (!mainScrollChanged) {
					_panOrMoveMainScroll('y', delta);

					_roundPoint(_panOffset);
					_applyCurrentZoomPan();
				}
			}
		},


		// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
		_onDragRelease = function _onDragRelease(e) {

			if (_features.isOldAndroid) {

				if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
					return;
				}

				// on Android (v4.1, 4.2, 4.3 & possibly older) 
				// ghost mousedown/up event isn't preventable via e.preventDefault,
				// which causes fake mousedown event
				// so we block mousedown/up for 600ms
				if (e.type.indexOf('touch') > -1) {
					clearTimeout(_oldAndroidTouchEndTimeout);
					_oldAndroidTouchEndTimeout = setTimeout(function () {
						_oldAndroidTouchEndTimeout = 0;
					}, 600);
				}
			}

			_shout('pointerUp');

			if (_preventDefaultEventBehaviour(e, false)) {
				e.preventDefault();
			}

			var releasePoint;

			if (_pointerEventEnabled) {
				var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

				if (pointerIndex > -1) {
					releasePoint = _currPointers.splice(pointerIndex, 1)[0];

					if (navigator.pointerEnabled) {
						releasePoint.type = e.pointerType || 'mouse';
					} else {
						var MSPOINTER_TYPES = {
							4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
							2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
							3: 'pen' // event.MSPOINTER_TYPE_PEN
						};
						releasePoint.type = MSPOINTER_TYPES[e.pointerType];

						if (!releasePoint.type) {
							releasePoint.type = e.pointerType || 'mouse';
						}
					}
				}
			}

			var touchList = _getTouchPoints(e),
			    gestureType,
			    numPoints = touchList.length;

			if (e.type === 'mouseup') {
				numPoints = 0;
			}

			// Do nothing if there were 3 touch points or more
			if (numPoints === 2) {
				_currentPoints = null;
				return true;
			}

			// if second pointer released
			if (numPoints === 1) {
				_equalizePoints(_startPoint, touchList[0]);
			}

			// pointer hasn't moved, send "tap release" point
			if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
				if (!releasePoint) {
					if (e.type === 'mouseup') {
						releasePoint = { x: e.pageX, y: e.pageY, type: 'mouse' };
					} else if (e.changedTouches && e.changedTouches[0]) {
						releasePoint = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: 'touch' };
					}
				}

				_shout('touchRelease', e, releasePoint);
			}

			// Difference in time between releasing of two last touch points (zoom gesture)
			var releaseTimeDiff = -1;

			// Gesture completed, no pointers left
			if (numPoints === 0) {
				_isDragging = false;
				framework.unbind(window, _upMoveEvents, self);

				_stopDragUpdateLoop();

				if (_isZooming) {
					// Two points released at the same time
					releaseTimeDiff = 0;
				} else if (_lastReleaseTime !== -1) {
					releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
				}
			}
			_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

			if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
				gestureType = 'zoom';
			} else {
				gestureType = 'swipe';
			}

			if (_isZooming && numPoints < 2) {
				_isZooming = false;

				// Only second point released
				if (numPoints === 1) {
					gestureType = 'zoomPointerUp';
				}
				_shout('zoomGestureEnded');
			}

			_currentPoints = null;
			if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
				// nothing to animate
				return;
			}

			_stopAllAnimations();

			if (!_releaseAnimData) {
				_releaseAnimData = _initDragReleaseAnimationData();
			}

			_releaseAnimData.calculateSwipeSpeed('x');

			if (_verticalDragInitiated) {

				var opacityRatio = _calculateVerticalDragOpacityRatio();

				if (opacityRatio < _options.verticalDragRange) {
					self.close();
				} else {
					var initalPanY = _panOffset.y,
					    initialBgOpacity = _bgOpacity;

					_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {

						_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

						_applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
						_applyCurrentZoomPan();
					});

					_shout('onVerticalDrag', 1);
				}

				return;
			}

			// main scroll 
			if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
				var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
				if (itemChanged) {
					return;
				}
				gestureType = 'zoomPointerUp';
			}

			// prevent zoom/pan animation when main scroll animation runs
			if (_mainScrollAnimating) {
				return;
			}

			// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
			if (gestureType !== 'swipe') {
				_completeZoomGesture();
				return;
			}

			// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
			if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
				_completePanGesture(_releaseAnimData);
			}
		},


		// Returns object with data about gesture
		// It's created only once and then reused
		_initDragReleaseAnimationData = function _initDragReleaseAnimationData() {
			// temp local vars
			var lastFlickDuration, tempReleasePos;

			// s = this
			var s = {
				lastFlickOffset: {},
				lastFlickDist: {},
				lastFlickSpeed: {},
				slowDownRatio: {},
				slowDownRatioReverse: {},
				speedDecelerationRatio: {},
				speedDecelerationRatioAbs: {},
				distanceOffset: {},
				backAnimDestination: {},
				backAnimStarted: {},
				calculateSwipeSpeed: function calculateSwipeSpeed(axis) {

					if (_posPoints.length > 1) {
						lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
						tempReleasePos = _posPoints[_posPoints.length - 2][axis];
					} else {
						lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
						tempReleasePos = _startPoint[axis];
					}
					s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
					s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
					if (s.lastFlickDist[axis] > 20) {
						s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
					} else {
						s.lastFlickSpeed[axis] = 0;
					}
					if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
						s.lastFlickSpeed[axis] = 0;
					}

					s.slowDownRatio[axis] = 0.95;
					s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
					s.speedDecelerationRatio[axis] = 1;
				},

				calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(axis, speed) {
					if (!s.backAnimStarted[axis]) {

						if (_panOffset[axis] > _currPanBounds.min[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.min[axis];
						} else if (_panOffset[axis] < _currPanBounds.max[axis]) {
							s.backAnimDestination[axis] = _currPanBounds.max[axis];
						}

						if (s.backAnimDestination[axis] !== undefined) {
							s.slowDownRatio[axis] = 0.7;
							s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
							if (s.speedDecelerationRatioAbs[axis] < 0.05) {

								s.lastFlickSpeed[axis] = 0;
								s.backAnimStarted[axis] = true;

								_animateProp('bounceZoomPan' + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function (pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								});
							}
						}
					}
				},

				// Reduces the speed by slowDownRatio (per 10ms)
				calculateAnimOffset: function calculateAnimOffset(axis) {
					if (!s.backAnimStarted[axis]) {
						s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);

						s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
						s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
						_panOffset[axis] += s.distanceOffset[axis];
					}
				},

				panAnimLoop: function panAnimLoop() {
					if (_animations.zoomPan) {
						_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

						s.now = _getCurrentTime();
						s.timeDiff = s.now - s.lastNow;
						s.lastNow = s.now;

						s.calculateAnimOffset('x');
						s.calculateAnimOffset('y');

						_applyCurrentZoomPan();

						s.calculateOverBoundsAnimOffset('x');
						s.calculateOverBoundsAnimOffset('y');

						if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

							// round pan position
							_panOffset.x = Math.round(_panOffset.x);
							_panOffset.y = Math.round(_panOffset.y);
							_applyCurrentZoomPan();

							_stopAnimation('zoomPan');
							return;
						}
					}
				}
			};
			return s;
		},
		    _completePanGesture = function _completePanGesture(animData) {
			// calculate swipe speed for Y axis (paanning)
			animData.calculateSwipeSpeed('y');

			_currPanBounds = self.currItem.bounds;

			animData.backAnimDestination = {};
			animData.backAnimStarted = {};

			// Avoid acceleration animation if speed is too low
			if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
				animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

				// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
				animData.calculateOverBoundsAnimOffset('x');
				animData.calculateOverBoundsAnimOffset('y');
				return true;
			}

			// Animation loop that controls the acceleration after pan gesture ends
			_registerStartAnimation('zoomPan');
			animData.lastNow = _getCurrentTime();
			animData.panAnimLoop();
		},
		    _finishSwipeMainScrollGesture = function _finishSwipeMainScrollGesture(gestureType, _releaseAnimData) {
			var itemChanged;
			if (!_mainScrollAnimating) {
				_currZoomedItemIndex = _currentItemIndex;
			}

			var itemsDiff;

			if (gestureType === 'swipe') {
				var totalShiftDist = _currPoint.x - _startPoint.x,
				    isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

				// if container is shifted for more than MIN_SWIPE_DISTANCE, 
				// and last flick gesture was in right direction
				if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
					// go to prev item
					itemsDiff = -1;
				} else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
					// go to next item
					itemsDiff = 1;
				}
			}

			var nextCircle;

			if (itemsDiff) {

				_currentItemIndex += itemsDiff;

				if (_currentItemIndex < 0) {
					_currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
					nextCircle = true;
				} else if (_currentItemIndex >= _getNumItems()) {
					_currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
					nextCircle = true;
				}

				if (!nextCircle || _options.loop) {
					_indexDiff += itemsDiff;
					_currPositionIndex -= itemsDiff;
					itemChanged = true;
				}
			}

			var animateToX = _slideSize.x * _currPositionIndex;
			var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
			var finishAnimDuration;

			if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
				// "return to current" duration, e.g. when dragging from slide 0 to -1
				finishAnimDuration = 333;
			} else {
				finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 333;

				finishAnimDuration = Math.min(finishAnimDuration, 400);
				finishAnimDuration = Math.max(finishAnimDuration, 250);
			}

			if (_currZoomedItemIndex === _currentItemIndex) {
				itemChanged = false;
			}

			_mainScrollAnimating = true;

			_shout('mainScrollAnimStart');

			_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function () {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;

				if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}

				_shout('mainScrollAnimComplete');
			});

			if (itemChanged) {
				self.updateCurrItem(true);
			}

			return itemChanged;
		},
		    _calculateZoomLevel = function _calculateZoomLevel(touchesDistance) {
			return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
		},


		// Resets zoom if it's out of bounds
		_completeZoomGesture = function _completeZoomGesture() {
			var destZoomLevel = _currZoomLevel,
			    minZoomLevel = _getMinZoomLevel(),
			    maxZoomLevel = _getMaxZoomLevel();

			if (_currZoomLevel < minZoomLevel) {
				destZoomLevel = minZoomLevel;
			} else if (_currZoomLevel > maxZoomLevel) {
				destZoomLevel = maxZoomLevel;
			}

			var destOpacity = 1,
			    onUpdate,
			    initialOpacity = _bgOpacity;

			if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
				//_closedByScroll = true;
				self.close();
				return true;
			}

			if (_opacityChanged) {
				onUpdate = function onUpdate(now) {
					_applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
				};
			}

			self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
			return true;
		};

		_registerModule('Gestures', {
			publicMethods: {

				initGestures: function initGestures() {

					// helper function that builds touch/pointer/mouse events
					var addEventNames = function addEventNames(pref, down, move, up, cancel) {
						_dragStartEvent = pref + down;
						_dragMoveEvent = pref + move;
						_dragEndEvent = pref + up;
						if (cancel) {
							_dragCancelEvent = pref + cancel;
						} else {
							_dragCancelEvent = '';
						}
					};

					_pointerEventEnabled = _features.pointerEvent;
					if (_pointerEventEnabled && _features.touch) {
						// we don't need touch events, if browser supports pointer events
						_features.touch = false;
					}

					if (_pointerEventEnabled) {
						if (navigator.pointerEnabled) {
							addEventNames('pointer', 'down', 'move', 'up', 'cancel');
						} else {
							// IE10 pointer events are case-sensitive
							addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
						}
					} else if (_features.touch) {
						addEventNames('touch', 'start', 'move', 'end', 'cancel');
						_likelyTouchDevice = true;
					} else {
						addEventNames('mouse', 'down', 'move', 'up');
					}

					_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
					_downEvents = _dragStartEvent;

					if (_pointerEventEnabled && !_likelyTouchDevice) {
						_likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
					}
					// make variable public
					self.likelyTouchDevice = _likelyTouchDevice;

					_globalEventHandlers[_dragStartEvent] = _onDragStart;
					_globalEventHandlers[_dragMoveEvent] = _onDragMove;
					_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

					if (_dragCancelEvent) {
						_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
					}

					// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
					if (_features.touch) {
						_downEvents += ' mousedown';
						_upMoveEvents += ' mousemove mouseup';
						_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
						_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
						_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
					}

					if (!_likelyTouchDevice) {
						// don't allow pan to next slide from zoomed state on Desktop
						_options.allowPanToNext = false;
					}
				}

			}
		});

		/*>>gestures*/

		/*>>show-hide-transition*/
		/**
   * show-hide-transition.js:
   *
   * Manages initial opening or closing transition.
   *
   * If you're not planning to use transition for gallery at all,
   * you may set options hideAnimationDuration and showAnimationDuration to 0,
   * and just delete startAnimation function.
   * 
   */

		var _showOrHideTimeout,
		    _showOrHide = function _showOrHide(item, img, out, completeFn) {

			if (_showOrHideTimeout) {
				clearTimeout(_showOrHideTimeout);
			}

			_initialZoomRunning = true;
			_initialContentSet = true;

			// dimensions of small thumbnail {x:,y:,w:}.
			// Height is optional, as calculated based on large image.
			var thumbBounds;
			if (item.initialLayout) {
				thumbBounds = item.initialLayout;
				item.initialLayout = null;
			} else {
				thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			}

			var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

			var onComplete = function onComplete() {
				_stopAnimation('initialZoom');
				if (!out) {
					_applyBgOpacity(1);
					if (img) {
						img.style.display = 'block';
					}
					framework.addClass(template, 'pswp--animated-in');
					_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
				} else {
					self.template.removeAttribute('style');
					self.bg.removeAttribute('style');
				}

				if (completeFn) {
					completeFn();
				}
				_initialZoomRunning = false;
			};

			// if bounds aren't provided, just open gallery without animation
			if (!duration || !thumbBounds || thumbBounds.x === undefined) {

				_shout('initialZoom' + (out ? 'Out' : 'In'));

				_currZoomLevel = item.initialZoomLevel;
				_equalizePoints(_panOffset, item.initialPosition);
				_applyCurrentZoomPan();

				template.style.opacity = out ? 0 : 1;
				_applyBgOpacity(1);

				if (duration) {
					setTimeout(function () {
						onComplete();
					}, duration);
				} else {
					onComplete();
				}

				return;
			}

			var startAnimation = function startAnimation() {
				var closeWithRaf = _closedByScroll,
				    fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

				// apply hw-acceleration to image
				if (item.miniImg) {
					item.miniImg.style.webkitBackfaceVisibility = 'hidden';
				}

				if (!out) {
					_currZoomLevel = thumbBounds.w / item.w;
					_panOffset.x = thumbBounds.x;
					_panOffset.y = thumbBounds.y - _initalWindowScrollY;

					self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
					_applyCurrentZoomPan();
				}

				_registerStartAnimation('initialZoom');

				if (out && !closeWithRaf) {
					framework.removeClass(template, 'pswp--animated-in');
				}

				if (fadeEverything) {
					if (out) {
						framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
					} else {
						setTimeout(function () {
							framework.addClass(template, 'pswp--animate_opacity');
						}, 30);
					}
				}

				_showOrHideTimeout = setTimeout(function () {

					_shout('initialZoom' + (out ? 'Out' : 'In'));

					if (!out) {

						// "in" animation always uses CSS transitions (instead of rAF).
						// CSS transition work faster here, 
						// as developer may also want to animate other things, 
						// like ui on top of sliding area, which can be animated just via CSS

						_currZoomLevel = item.initialZoomLevel;
						_equalizePoints(_panOffset, item.initialPosition);
						_applyCurrentZoomPan();
						_applyBgOpacity(1);

						if (fadeEverything) {
							template.style.opacity = 1;
						} else {
							_applyBgOpacity(1);
						}

						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					} else {

						// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
						var destZoomLevel = thumbBounds.w / item.w,
						    initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						    initialZoomLevel = _currZoomLevel,
						    initalBgOpacity = _bgOpacity,
						    onUpdate = function onUpdate(now) {

							if (now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}

							_applyCurrentZoomPan();
							if (fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
							}
						};

						if (closeWithRaf) {
							_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
						} else {
							onUpdate(1);
							_showOrHideTimeout = setTimeout(onComplete, duration + 20);
						}
					}
				}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
				// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
				// Which avoids lag at the beginning of scale transition.
			};
			startAnimation();
		};

		/*>>show-hide-transition*/

		/*>>items-controller*/
		/**
  *
  * Controller manages gallery items, their dimensions, and their content.
  * 
  */

		var _items,
		    _tempPanAreaSize = {},
		    _imagesToAppendPool = [],
		    _initialContentSet,
		    _initialZoomRunning,
		    _controllerDefaultOptions = {
			index: 0,
			errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
			forceProgressiveLoading: false, // TODO
			preload: [1, 1],
			getNumItemsFn: function getNumItemsFn() {
				return _items.length;
			}
		};

		var _getItemAt,
		    _getNumItems,
		    _initialIsLoop,
		    _getZeroBounds = function _getZeroBounds() {
			return {
				center: { x: 0, y: 0 },
				max: { x: 0, y: 0 },
				min: { x: 0, y: 0 }
			};
		},
		    _calculateSingleItemPanBounds = function _calculateSingleItemPanBounds(item, realPanElementW, realPanElementH) {
			var bounds = item.bounds;

			// position of element when it's centered
			bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
			bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

			// maximum pan position
			bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;

			bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y;

			// minimum pan position
			bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
			bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
		},
		    _calculateItemSize = function _calculateItemSize(item, viewportSize, zoomLevel) {

			if (item.src && !item.loadError) {
				var isInitial = !zoomLevel;

				if (isInitial) {
					if (!item.vGap) {
						item.vGap = { top: 0, bottom: 0 };
					}
					// allows overriding vertical margin for individual items
					_shout('parseVerticalMargin', item);
				}

				_tempPanAreaSize.x = viewportSize.x;
				_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

				if (isInitial) {
					var hRatio = _tempPanAreaSize.x / item.w;
					var vRatio = _tempPanAreaSize.y / item.h;

					item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
					//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

					var scaleMode = _options.scaleMode;

					if (scaleMode === 'orig') {
						zoomLevel = 1;
					} else if (scaleMode === 'fit') {
						zoomLevel = item.fitRatio;
					}

					if (zoomLevel > 1) {
						zoomLevel = 1;
					}

					item.initialZoomLevel = zoomLevel;

					if (!item.bounds) {
						// reuse bounds object
						item.bounds = _getZeroBounds();
					}
				}

				if (!zoomLevel) {
					return;
				}

				_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

				if (isInitial && zoomLevel === item.initialZoomLevel) {
					item.initialPosition = item.bounds.center;
				}

				return item.bounds;
			} else {
				item.w = item.h = 0;
				item.initialZoomLevel = item.fitRatio = 1;
				item.bounds = _getZeroBounds();
				item.initialPosition = item.bounds.center;

				// if it's not image, we return zero bounds (content is not zoomable)
				return item.bounds;
			}
		},
		    _appendImage = function _appendImage(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {

			if (item.loadError) {
				return;
			}

			if (img) {

				item.imageAppended = true;
				_setImageSize(item, img, item === self.currItem && _renderMaxResolution);

				baseDiv.appendChild(img);

				if (keepPlaceholder) {
					setTimeout(function () {
						if (item && item.loaded && item.placeholder) {
							item.placeholder.style.display = 'none';
							item.placeholder = null;
						}
					}, 500);
				}
			}
		},
		    _preloadImage = function _preloadImage(item) {
			item.loading = true;
			item.loaded = false;
			var img = item.img = framework.createEl('pswp__img', 'img');
			var onComplete = function onComplete() {
				item.loading = false;
				item.loaded = true;

				if (item.loadComplete) {
					item.loadComplete(item);
				} else {
					item.img = null; // no need to store image object
				}
				img.onload = img.onerror = null;
				img = null;
			};
			img.onload = onComplete;
			img.onerror = function () {
				item.loadError = true;
				onComplete();
			};

			img.src = item.src; // + '?a=' + Math.random();

			return img;
		},
		    _checkForError = function _checkForError(item, cleanUp) {
			if (item.src && item.loadError && item.container) {

				if (cleanUp) {
					item.container.innerHTML = '';
				}

				item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
				return true;
			}
		},
		    _setImageSize = function _setImageSize(item, img, maxRes) {
			if (!item.src) {
				return;
			}

			if (!img) {
				img = item.container.lastChild;
			}

			var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			    h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

			if (item.placeholder && !item.loaded) {
				item.placeholder.style.width = w + 'px';
				item.placeholder.style.height = h + 'px';
			}

			img.style.width = w + 'px';
			img.style.height = h + 'px';
		},
		    _appendImagesPool = function _appendImagesPool() {

			if (_imagesToAppendPool.length) {
				var poolItem;

				for (var i = 0; i < _imagesToAppendPool.length; i++) {
					poolItem = _imagesToAppendPool[i];
					if (poolItem.holder.index === poolItem.index) {
						_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
					}
				}
				_imagesToAppendPool = [];
			}
		};

		_registerModule('Controller', {

			publicMethods: {

				lazyLoadItem: function lazyLoadItem(index) {
					index = _getLoopedId(index);
					var item = _getItemAt(index);

					if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
						return;
					}

					_shout('gettingData', index, item);

					if (!item.src) {
						return;
					}

					_preloadImage(item);
				},
				initController: function initController() {
					framework.extend(_options, _controllerDefaultOptions, true);
					self.items = _items = items;
					_getItemAt = self.getItemAt;
					_getNumItems = _options.getNumItemsFn; //self.getNumItems;


					_initialIsLoop = _options.loop;
					if (_getNumItems() < 3) {
						_options.loop = false; // disable loop if less then 3 items
					}

					_listen('beforeChange', function (diff) {

						var p = _options.preload,
						    isNext = diff === null ? true : diff >= 0,
						    preloadBefore = Math.min(p[0], _getNumItems()),
						    preloadAfter = Math.min(p[1], _getNumItems()),
						    i;

						for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
							self.lazyLoadItem(_currentItemIndex + i);
						}
						for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
							self.lazyLoadItem(_currentItemIndex - i);
						}
					});

					_listen('initialLayout', function () {
						self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
					});

					_listen('mainScrollAnimComplete', _appendImagesPool);
					_listen('initialZoomInEnd', _appendImagesPool);

					_listen('destroy', function () {
						var item;
						for (var i = 0; i < _items.length; i++) {
							item = _items[i];
							// remove reference to DOM elements, for GC
							if (item.container) {
								item.container = null;
							}
							if (item.placeholder) {
								item.placeholder = null;
							}
							if (item.img) {
								item.img = null;
							}
							if (item.preloader) {
								item.preloader = null;
							}
							if (item.loadError) {
								item.loaded = item.loadError = false;
							}
						}
						_imagesToAppendPool = null;
					});
				},

				getItemAt: function getItemAt(index) {
					if (index >= 0) {
						return _items[index] !== undefined ? _items[index] : false;
					}
					return false;
				},

				allowProgressiveImg: function allowProgressiveImg() {
					// 1. Progressive image loading isn't working on webkit/blink 
					//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
					//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
					//    
					// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
					//    That's why it's disabled on touch devices (mainly because of swipe transition)
					//    
					// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

					// Don't allow progressive loading on non-large touch devices
					return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
					// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
				},

				setContent: function setContent(holder, index) {

					if (_options.loop) {
						index = _getLoopedId(index);
					}

					var prevItem = self.getItemAt(holder.index);
					if (prevItem) {
						prevItem.container = null;
					}

					var item = self.getItemAt(index),
					    img;

					if (!item) {
						holder.el.innerHTML = '';
						return;
					}

					// allow to override data
					_shout('gettingData', index, item);

					holder.index = index;
					holder.item = item;

					// base container DIV is created only once for each of 3 holders
					var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');

					if (!item.src && item.html) {
						if (item.html.tagName) {
							baseDiv.appendChild(item.html);
						} else {
							baseDiv.innerHTML = item.html;
						}
					}

					_checkForError(item);

					_calculateItemSize(item, _viewportSize);

					if (item.src && !item.loadError && !item.loaded) {

						item.loadComplete = function (item) {

							// gallery closed before image finished loading
							if (!_isOpen) {
								return;
							}

							// check if holder hasn't changed while image was loading
							if (holder && holder.index === index) {
								if (_checkForError(item, true)) {
									item.loadComplete = item.img = null;
									_calculateItemSize(item, _viewportSize);
									_applyZoomPanToItem(item);

									if (holder.index === _currentItemIndex) {
										// recalculate dimensions
										self.updateCurrZoomItem();
									}
									return;
								}
								if (!item.imageAppended) {
									if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
										_imagesToAppendPool.push({
											item: item,
											baseDiv: baseDiv,
											img: item.img,
											index: index,
											holder: holder,
											clearPlaceholder: true
										});
									} else {
										_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
									}
								} else {
									// remove preloader & mini-img
									if (!_initialZoomRunning && item.placeholder) {
										item.placeholder.style.display = 'none';
										item.placeholder = null;
									}
								}
							}

							item.loadComplete = null;
							item.img = null; // no need to store image element after it's added

							_shout('imageLoadComplete', index, item);
						};

						if (framework.features.transform) {

							var placeholderClassName = 'pswp__img pswp__img--placeholder';
							placeholderClassName += item.msrc ? '' : ' pswp__img--placeholder--blank';

							var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
							if (item.msrc) {
								placeholder.src = item.msrc;
							}

							_setImageSize(item, placeholder);

							baseDiv.appendChild(placeholder);
							item.placeholder = placeholder;
						}

						if (!item.loading) {
							_preloadImage(item);
						}

						if (self.allowProgressiveImg()) {
							// just append image
							if (!_initialContentSet && _features.transform) {
								_imagesToAppendPool.push({
									item: item,
									baseDiv: baseDiv,
									img: item.img,
									index: index,
									holder: holder
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, true, true);
							}
						}
					} else if (item.src && !item.loadError) {
						// image object is created every time, due to bugs of image loading & delay when switching images
						img = framework.createEl('pswp__img', 'img');
						img.style.opacity = 1;
						img.src = item.src;
						_setImageSize(item, img);
						_appendImage(index, item, baseDiv, img, true);
					}

					if (!_initialContentSet && index === _currentItemIndex) {
						_currZoomElementStyle = baseDiv.style;
						_showOrHide(item, img || item.img);
					} else {
						_applyZoomPanToItem(item);
					}

					holder.el.innerHTML = '';
					holder.el.appendChild(baseDiv);
				},

				cleanSlide: function cleanSlide(item) {
					if (item.img) {
						item.img.onload = item.img.onerror = null;
					}
					item.loaded = item.loading = item.img = item.imageAppended = false;
				}

			}
		});

		/*>>items-controller*/

		/*>>tap*/
		/**
   * tap.js:
   *
   * Displatches tap and double-tap events.
   * 
   */

		var tapTimer,
		    tapReleasePoint = {},
		    _dispatchTapEvent = function _dispatchTapEvent(origEvent, releasePoint, pointerType) {
			var e = document.createEvent('CustomEvent'),
			    eDetail = {
				origEvent: origEvent,
				target: origEvent.target,
				releasePoint: releasePoint,
				pointerType: pointerType || 'touch'
			};

			e.initCustomEvent('pswpTap', true, true, eDetail);
			origEvent.target.dispatchEvent(e);
		};

		_registerModule('Tap', {
			publicMethods: {
				initTap: function initTap() {
					_listen('firstTouchStart', self.onTapStart);
					_listen('touchRelease', self.onTapRelease);
					_listen('destroy', function () {
						tapReleasePoint = {};
						tapTimer = null;
					});
				},
				onTapStart: function onTapStart(touchList) {
					if (touchList.length > 1) {
						clearTimeout(tapTimer);
						tapTimer = null;
					}
				},
				onTapRelease: function onTapRelease(e, releasePoint) {
					if (!releasePoint) {
						return;
					}

					if (!_moved && !_isMultitouch && !_numAnimations) {
						var p0 = releasePoint;
						if (tapTimer) {
							clearTimeout(tapTimer);
							tapTimer = null;

							// Check if taped on the same place
							if (_isNearbyPoints(p0, tapReleasePoint)) {
								_shout('doubleTap', p0);
								return;
							}
						}

						if (releasePoint.type === 'mouse') {
							_dispatchTapEvent(e, releasePoint, 'mouse');
							return;
						}

						var clickedTagName = e.target.tagName.toUpperCase();
						// avoid double tap delay on buttons and elements that have class pswp__single-tap
						if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
							_dispatchTapEvent(e, releasePoint);
							return;
						}

						_equalizePoints(tapReleasePoint, p0);

						tapTimer = setTimeout(function () {
							_dispatchTapEvent(e, releasePoint);
							tapTimer = null;
						}, 300);
					}
				}
			}
		});

		/*>>tap*/

		/*>>desktop-zoom*/
		/**
   *
   * desktop-zoom.js:
   *
   * - Binds mousewheel event for paning zoomed image.
   * - Manages "dragging", "zoomed-in", "zoom-out" classes.
   *   (which are used for cursors and zoom icon)
   * - Adds toggleDesktopZoom function.
   * 
   */

		var _wheelDelta;

		_registerModule('DesktopZoom', {

			publicMethods: {

				initDesktopZoom: function initDesktopZoom() {

					if (_oldIE) {
						// no zoom for old IE (<=8)
						return;
					}

					if (_likelyTouchDevice) {
						// if detected hardware touch support, we wait until mouse is used,
						// and only then apply desktop-zoom features
						_listen('mouseUsed', function () {
							self.setupDesktopZoom();
						});
					} else {
						self.setupDesktopZoom(true);
					}
				},

				setupDesktopZoom: function setupDesktopZoom(onInit) {

					_wheelDelta = {};

					var events = 'wheel mousewheel DOMMouseScroll';

					_listen('bindEvents', function () {
						framework.bind(template, events, self.handleMouseWheel);
					});

					_listen('unbindEvents', function () {
						if (_wheelDelta) {
							framework.unbind(template, events, self.handleMouseWheel);
						}
					});

					self.mouseZoomedIn = false;

					var hasDraggingClass,
					    updateZoomable = function updateZoomable() {
						if (self.mouseZoomedIn) {
							framework.removeClass(template, 'pswp--zoomed-in');
							self.mouseZoomedIn = false;
						}
						if (_currZoomLevel < 1) {
							framework.addClass(template, 'pswp--zoom-allowed');
						} else {
							framework.removeClass(template, 'pswp--zoom-allowed');
						}
						removeDraggingClass();
					},
					    removeDraggingClass = function removeDraggingClass() {
						if (hasDraggingClass) {
							framework.removeClass(template, 'pswp--dragging');
							hasDraggingClass = false;
						}
					};

					_listen('resize', updateZoomable);
					_listen('afterChange', updateZoomable);
					_listen('pointerDown', function () {
						if (self.mouseZoomedIn) {
							hasDraggingClass = true;
							framework.addClass(template, 'pswp--dragging');
						}
					});
					_listen('pointerUp', removeDraggingClass);

					if (!onInit) {
						updateZoomable();
					}
				},

				handleMouseWheel: function handleMouseWheel(e) {

					if (_currZoomLevel <= self.currItem.fitRatio) {
						if (_options.modal) {

							if (!_options.closeOnScroll || _numAnimations || _isDragging) {
								e.preventDefault();
							} else if (_transformKey && Math.abs(e.deltaY) > 2) {
								// close PhotoSwipe
								// if browser supports transforms & scroll changed enough
								_closedByScroll = true;
								self.close();
							}
						}
						return true;
					}

					// allow just one event to fire
					e.stopPropagation();

					// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
					_wheelDelta.x = 0;

					if ('deltaX' in e) {
						if (e.deltaMode === 1 /* DOM_DELTA_LINE */) {
								// 18 - average line height
								_wheelDelta.x = e.deltaX * 18;
								_wheelDelta.y = e.deltaY * 18;
							} else {
							_wheelDelta.x = e.deltaX;
							_wheelDelta.y = e.deltaY;
						}
					} else if ('wheelDelta' in e) {
						if (e.wheelDeltaX) {
							_wheelDelta.x = -0.16 * e.wheelDeltaX;
						}
						if (e.wheelDeltaY) {
							_wheelDelta.y = -0.16 * e.wheelDeltaY;
						} else {
							_wheelDelta.y = -0.16 * e.wheelDelta;
						}
					} else if ('detail' in e) {
						_wheelDelta.y = e.detail;
					} else {
						return;
					}

					_calculatePanBounds(_currZoomLevel, true);

					var newPanX = _panOffset.x - _wheelDelta.x,
					    newPanY = _panOffset.y - _wheelDelta.y;

					// only prevent scrolling in nonmodal mode when not at edges
					if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
						e.preventDefault();
					}

					// TODO: use rAF instead of mousewheel?
					self.panTo(newPanX, newPanY);
				},

				toggleDesktopZoom: function toggleDesktopZoom(centerPoint) {
					centerPoint = centerPoint || { x: _viewportSize.x / 2 + _offset.x, y: _viewportSize.y / 2 + _offset.y };

					var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
					var zoomOut = _currZoomLevel === doubleTapZoomLevel;

					self.mouseZoomedIn = !zoomOut;

					self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
					framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
				}

			}
		});

		/*>>desktop-zoom*/

		/*>>history*/
		/**
   *
   * history.js:
   *
   * - Back button to close gallery.
   * 
   * - Unique URL for each slide: example.com/&pid=1&gid=3
   *   (where PID is picture index, and GID and gallery index)
   *   
   * - Switch URL when slides change.
   * 
   */

		var _historyDefaultOptions = {
			history: true,
			galleryUID: 1
		};

		var _historyUpdateTimeout,
		    _hashChangeTimeout,
		    _hashAnimCheckTimeout,
		    _hashChangedByScript,
		    _hashChangedByHistory,
		    _hashReseted,
		    _initialHash,
		    _historyChanged,
		    _closedFromURL,
		    _urlChangedOnce,
		    _windowLoc,
		    _supportsPushState,
		    _getHash = function _getHash() {
			return _windowLoc.hash.substring(1);
		},
		    _cleanHistoryTimeouts = function _cleanHistoryTimeouts() {

			if (_historyUpdateTimeout) {
				clearTimeout(_historyUpdateTimeout);
			}

			if (_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}
		},


		// pid - Picture index
		// gid - Gallery index
		_parseItemIndexFromURL = function _parseItemIndexFromURL() {
			var hash = _getHash(),
			    params = {};

			if (hash.length < 5) {
				// pid=1
				return params;
			}

			var i,
			    vars = hash.split('&');
			for (i = 0; i < vars.length; i++) {
				if (!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');
				if (pair.length < 2) {
					continue;
				}
				params[pair[0]] = pair[1];
			}
			if (_options.galleryPIDs) {
				// detect custom pid in hash and search for it among the items collection
				var searchfor = params.pid;
				params.pid = 0; // if custom pid cannot be found, fallback to the first item
				for (i = 0; i < _items.length; i++) {
					if (_items[i].pid === searchfor) {
						params.pid = i;
						break;
					}
				}
			} else {
				params.pid = parseInt(params.pid, 10) - 1;
			}
			if (params.pid < 0) {
				params.pid = 0;
			}
			return params;
		},
		    _updateHash = function _updateHash() {

			if (_hashAnimCheckTimeout) {
				clearTimeout(_hashAnimCheckTimeout);
			}

			if (_numAnimations || _isDragging) {
				// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
				// that's why we update hash only when no animations running
				_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
				return;
			}

			if (_hashChangedByScript) {
				clearTimeout(_hashChangeTimeout);
			} else {
				_hashChangedByScript = true;
			}

			var pid = _currentItemIndex + 1;
			var item = _getItemAt(_currentItemIndex);
			if (item.hasOwnProperty('pid')) {
				// carry forward any custom pid assigned to the item
				pid = item.pid;
			}
			var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

			if (!_historyChanged) {
				if (_windowLoc.hash.indexOf(newHash) === -1) {
					_urlChangedOnce = true;
				}
				// first time - add new hisory record, then just replace
			}

			var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

			if (_supportsPushState) {

				if ('#' + newHash !== window.location.hash) {
					history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
				}
			} else {
				if (_historyChanged) {
					_windowLoc.replace(newURL);
				} else {
					_windowLoc.hash = newHash;
				}
			}

			_historyChanged = true;
			_hashChangeTimeout = setTimeout(function () {
				_hashChangedByScript = false;
			}, 60);
		};

		_registerModule('History', {

			publicMethods: {
				initHistory: function initHistory() {

					framework.extend(_options, _historyDefaultOptions, true);

					if (!_options.history) {
						return;
					}

					_windowLoc = window.location;
					_urlChangedOnce = false;
					_closedFromURL = false;
					_historyChanged = false;
					_initialHash = _getHash();
					_supportsPushState = 'pushState' in history;

					if (_initialHash.indexOf('gid=') > -1) {
						_initialHash = _initialHash.split('&gid=')[0];
						_initialHash = _initialHash.split('?gid=')[0];
					}

					_listen('afterChange', self.updateURL);
					_listen('unbindEvents', function () {
						framework.unbind(window, 'hashchange', self.onHashChange);
					});

					var returnToOriginal = function returnToOriginal() {
						_hashReseted = true;
						if (!_closedFromURL) {

							if (_urlChangedOnce) {
								history.back();
							} else {

								if (_initialHash) {
									_windowLoc.hash = _initialHash;
								} else {
									if (_supportsPushState) {

										// remove hash from url without refreshing it or scrolling to top
										history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
									} else {
										_windowLoc.hash = '';
									}
								}
							}
						}

						_cleanHistoryTimeouts();
					};

					_listen('unbindEvents', function () {
						if (_closedByScroll) {
							// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
							// this is done to keep the scroll position
							returnToOriginal();
						}
					});
					_listen('destroy', function () {
						if (!_hashReseted) {
							returnToOriginal();
						}
					});
					_listen('firstUpdate', function () {
						_currentItemIndex = _parseItemIndexFromURL().pid;
					});

					var index = _initialHash.indexOf('pid=');
					if (index > -1) {
						_initialHash = _initialHash.substring(0, index);
						if (_initialHash.slice(-1) === '&') {
							_initialHash = _initialHash.slice(0, -1);
						}
					}

					setTimeout(function () {
						if (_isOpen) {
							// hasn't destroyed yet
							framework.bind(window, 'hashchange', self.onHashChange);
						}
					}, 40);
				},
				onHashChange: function onHashChange() {

					if (_getHash() === _initialHash) {

						_closedFromURL = true;
						self.close();
						return;
					}
					if (!_hashChangedByScript) {

						_hashChangedByHistory = true;
						self.goTo(_parseItemIndexFromURL().pid);
						_hashChangedByHistory = false;
					}
				},
				updateURL: function updateURL() {

					// Delay the update of URL, to avoid lag during transition, 
					// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

					_cleanHistoryTimeouts();

					if (_hashChangedByHistory) {
						return;
					}

					if (!_historyChanged) {
						_updateHash(); // first time
					} else {
						_historyUpdateTimeout = setTimeout(_updateHash, 800);
					}
				}

			}
		});

		/*>>history*/
		framework.extend(self, publicMethods);
	};
	var PhotoSwipeUI_Default = __webpack_require__(251);
	return { PhotoSwipe: PhotoSwipe, PhotoSwipeUI_Default: PhotoSwipeUI_Default };
});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(undefined, function () {

	'use strict';

	var PhotoSwipeUI_Default = function PhotoSwipeUI_Default(pswp, framework) {

		var ui = this;
		var _overlayUIUpdated = false,
		    _controlsVisible = true,
		    _fullscrenAPI,
		    _controls,
		    _captionContainer,
		    _fakeCaptionContainer,
		    _indexIndicator,
		    _shareButton,
		    _shareModal,
		    _shareModalHidden = true,
		    _initalCloseOnScrollValue,
		    _isIdle,
		    _listen,
		    _loadingIndicator,
		    _loadingIndicatorHidden,
		    _loadingIndicatorTimeout,
		    _galleryHasOneSlide,
		    _options,
		    _defaultUIOptions = {
			barsSize: { top: 44, bottom: 'auto' },
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
			timeToIdle: 4000,
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s

			addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl /*, isFake */) {
				if (!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl: true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [{ id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}' }, { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}' }, { id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}' }, { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: true }],
			getImageURLForShare: function getImageURLForShare() /* shareButtonData */{
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function getPageURLForShare() /* shareButtonData */{
				return window.location.href;
			},
			getTextForShare: function getTextForShare() /* shareButtonData */{
				return pswp.currItem.title || '';
			},

			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		    _blockControlsTap,
		    _blockControlsTapTimeout;

		var _onControlsTap = function _onControlsTap(e) {
			if (_blockControlsTap) {
				return true;
			}

			e = e || window.event;

			if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}

			var target = e.target || e.srcElement,
			    uiElement,
			    clickedClass = target.getAttribute('class') || '',
			    found;

			for (var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
					uiElement.onTap();
					found = true;
				}
			}

			if (found) {
				if (e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function () {
					_blockControlsTap = false;
				}, tapDelay);
			}
		},
		    _fitControlsInViewport = function _fitControlsInViewport() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		    _togglePswpClass = function _togglePswpClass(el, cName, add) {
			framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
		},


		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function _countNumItems() {
			var hasOneSlide = _options.getNumItemsFn() === 1;

			if (hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		    _toggleShareModalClass = function _toggleShareModalClass() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		    _toggleShareModal = function _toggleShareModal() {

			_shareModalHidden = !_shareModalHidden;

			if (!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function () {
					if (!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function () {
					if (_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}

			if (!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},
		    _openWindowPopup = function _openWindowPopup(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if (!target.href) {
				return false;
			}

			if (target.hasAttribute('download')) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' + 'location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));

			if (!_shareModalHidden) {
				_toggleShareModal();
			}

			return false;
		},
		    _updateShareURLs = function _updateShareURLs() {
			var shareButtonOut = '',
			    shareButtonData,
			    shareURL,
			    image_url,
			    page_url,
			    share_text;

			for (var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? 'download' : '') + '>' + shareButtonData.label + '</a>';

				if (_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;
		},
		    _hasCloseClass = function _hasCloseClass(target) {
			for (var i = 0; i < _options.closeElClasses.length; i++) {
				if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
					return true;
				}
			}
		},
		    _idleInterval,
		    _idleTimer,
		    _idleIncrement = 0,
		    _onIdleMouseMove = function _onIdleMouseMove() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if (_isIdle) {
				ui.setIdle(false);
			}
		},
		    _onMouseLeaveWindow = function _onMouseLeaveWindow(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function () {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		    _setupFullscreenAPI = function _setupFullscreenAPI() {
			if (_options.fullscreenEl && !framework.features.isOldAndroid) {
				if (!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if (_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		    _setupLoadingIndicator = function _setupLoadingIndicator() {
			// Setup loading indicator
			if (_options.preloaderEl) {

				_toggleLoadingIndicator(true);

				_listen('beforeChange', function () {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function () {

						if (pswp.currItem && pswp.currItem.loading) {

							if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false);
								// items-controller.js function allowProgressiveImg
							}
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}
					}, _options.loadingIndicatorDelay);
				});
				_listen('imageLoadComplete', function (index, item) {
					if (pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});
			}
		},
		    _toggleLoadingIndicator = function _toggleLoadingIndicator(hide) {
			if (_loadingIndicatorHidden !== hide) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		    _applyNavBarGaps = function _applyNavBarGaps(item) {
			var gap = item.vGap;

			if (_fitControlsInViewport()) {

				var bars = _options.barsSize;
				if (_options.captionEl && bars.bottom === 'auto') {
					if (!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize, 10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}

				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		    _setupIdle = function _setupIdle() {
			// Hide controls when mouse is used
			if (_options.timeToIdle) {
				_listen('mouseUsed', function () {

					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function () {
						_idleIncrement++;
						if (_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		    _setupHidingControlsDuringGestures = function _setupHidingControlsDuringGestures() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function (now) {
				if (_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if (!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose', function (now) {
				if (_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function () {
				pinchControlsHidden = false;
				if (pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});
		};

		var _uiElements = [{
			name: 'caption',
			option: 'captionEl',
			onInit: function onInit(el) {
				_captionContainer = el;
			}
		}, {
			name: 'share-modal',
			option: 'shareEl',
			onInit: function onInit(el) {
				_shareModal = el;
			},
			onTap: function onTap() {
				_toggleShareModal();
			}
		}, {
			name: 'button--share',
			option: 'shareEl',
			onInit: function onInit(el) {
				_shareButton = el;
			},
			onTap: function onTap() {
				_toggleShareModal();
			}
		}, {
			name: 'button--zoom',
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		}, {
			name: 'counter',
			option: 'counterEl',
			onInit: function onInit(el) {
				_indexIndicator = el;
			}
		}, {
			name: 'button--close',
			option: 'closeEl',
			onTap: pswp.close
		}, {
			name: 'button--arrow--left',
			option: 'arrowEl',
			onTap: pswp.prev
		}, {
			name: 'button--arrow--right',
			option: 'arrowEl',
			onTap: pswp.next
		}, {
			name: 'button--fs',
			option: 'fullscreenEl',
			onTap: function onTap() {
				if (_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			}
		}, {
			name: 'preloader',
			option: 'preloaderEl',
			onInit: function onInit(el) {
				_loadingIndicator = el;
			}
		}];

		var _setupUIElements = function _setupUIElements() {
			var item, classAttr, uiElement;

			var loopThroughChildElements = function loopThroughChildElements(sChildren) {
				if (!sChildren) {
					return;
				}

				var l = sChildren.length;
				for (var i = 0; i < l; i++) {
					item = sChildren[i];
					classAttr = item.className;

					for (var a = 0; a < _uiElements.length; a++) {
						uiElement = _uiElements[a];

						if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {

							if (_options[uiElement.option]) {
								// if element is not disabled from options

								framework.removeClass(item, 'pswp__element--disabled');
								if (uiElement.onInit) {
									uiElement.onInit(item);
								}

								//item.style.display = 'block';
							} else {
								framework.addClass(item, 'pswp__element--disabled');
								//item.style.display = 'none';
							}
						}
					}
				}
			};
			loopThroughChildElements(_controls.children);

			var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');
			if (topBar) {
				loopThroughChildElements(topBar.children);
			}
		};

		ui.init = function () {

			// extend options
			framework.extend(pswp.options, _defaultUIOptions, true);

			// create local link for fast access
			_options = pswp.options;

			// find pswp__ui element
			_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

			// create local link
			_listen = pswp.listen;

			_setupHidingControlsDuringGestures();

			// update controls when slides change
			_listen('beforeChange', ui.update);

			// toggle zoom on double-tap
			_listen('doubleTap', function (point) {
				var initialZoomLevel = pswp.currItem.initialZoomLevel;
				if (pswp.getZoomLevel() !== initialZoomLevel) {
					pswp.zoomTo(initialZoomLevel, point, 333);
				} else {
					pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
				}
			});

			// Allow text selection in caption
			_listen('preventDragEvent', function (e, isDown, preventObj) {
				var t = e.target || e.srcElement;
				if (t && t.getAttribute('class') && e.type.indexOf('mouse') > -1 && (t.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
					preventObj.prevent = false;
				}
			});

			// bind events for UI
			_listen('bindEvents', function () {
				framework.bind(_controls, 'pswpTap click', _onControlsTap);
				framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

				if (!pswp.likelyTouchDevice) {
					framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
				}
			});

			// unbind events for UI
			_listen('unbindEvents', function () {
				if (!_shareModalHidden) {
					_toggleShareModal();
				}

				if (_idleInterval) {
					clearInterval(_idleInterval);
				}
				framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
				framework.unbind(document, 'mousemove', _onIdleMouseMove);
				framework.unbind(_controls, 'pswpTap click', _onControlsTap);
				framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
				framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

				if (_fullscrenAPI) {
					framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					if (_fullscrenAPI.isFullscreen()) {
						_options.hideAnimationDuration = 0;
						_fullscrenAPI.exit();
					}
					_fullscrenAPI = null;
				}
			});

			// clean up things when gallery is destroyed
			_listen('destroy', function () {
				if (_options.captionEl) {
					if (_fakeCaptionContainer) {
						_controls.removeChild(_fakeCaptionContainer);
					}
					framework.removeClass(_captionContainer, 'pswp__caption--empty');
				}

				if (_shareModal) {
					_shareModal.children[0].onclick = null;
				}
				framework.removeClass(_controls, 'pswp__ui--over-close');
				framework.addClass(_controls, 'pswp__ui--hidden');
				ui.setIdle(false);
			});

			if (!_options.showAnimationDuration) {
				framework.removeClass(_controls, 'pswp__ui--hidden');
			}
			_listen('initialZoomIn', function () {
				if (_options.showAnimationDuration) {
					framework.removeClass(_controls, 'pswp__ui--hidden');
				}
			});
			_listen('initialZoomOut', function () {
				framework.addClass(_controls, 'pswp__ui--hidden');
			});

			_listen('parseVerticalMargin', _applyNavBarGaps);

			_setupUIElements();

			if (_options.shareEl && _shareButton && _shareModal) {
				_shareModalHidden = true;
			}

			_countNumItems();

			_setupIdle();

			_setupFullscreenAPI();

			_setupLoadingIndicator();
		};

		ui.setIdle = function (isIdle) {
			_isIdle = isIdle;
			_togglePswpClass(_controls, 'ui--idle', isIdle);
		};

		ui.update = function () {
			// Don't update UI if it's hidden
			if (_controlsVisible && pswp.currItem) {

				ui.updateIndexIndicator();

				if (_options.captionEl) {
					_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

					_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
				}

				_overlayUIUpdated = true;
			} else {
				_overlayUIUpdated = false;
			}

			if (!_shareModalHidden) {
				_toggleShareModal();
			}

			_countNumItems();
		};

		ui.updateFullscreen = function (e) {

			if (e) {
				// some browsers change window scroll position during the fullscreen
				// so PhotoSwipe updates it just in case
				setTimeout(function () {
					pswp.setScrollOffset(0, framework.getScrollY());
				}, 50);
			}

			// toogle pswp--fs class on root element
			framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
		};

		ui.updateIndexIndicator = function () {
			if (_options.counterEl) {
				_indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
			}
		};

		ui.onGlobalTap = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			if (_blockControlsTap) {
				return;
			}

			if (e.detail && e.detail.pointerType === 'mouse') {

				// close gallery if clicked outside of the image
				if (_hasCloseClass(target)) {
					pswp.close();
					return;
				}

				if (framework.hasClass(target, 'pswp__img')) {
					if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
						if (_options.clickToCloseNonZoomable) {
							pswp.close();
						}
					} else {
						pswp.toggleDesktopZoom(e.detail.releasePoint);
					}
				}
			} else {

				// tap anywhere (except buttons) to toggle visibility of controls
				if (_options.tapToToggleControls) {
					if (_controlsVisible) {
						ui.hideControls();
					} else {
						ui.showControls();
					}
				}

				// tap to close gallery
				if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
					pswp.close();
					return;
				}
			}
		};
		ui.onMouseOver = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			// add class when mouse is over an element that should close the gallery
			_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
		};

		ui.hideControls = function () {
			framework.addClass(_controls, 'pswp__ui--hidden');
			_controlsVisible = false;
		};

		ui.showControls = function () {
			_controlsVisible = true;
			if (!_overlayUIUpdated) {
				ui.update();
			}
			framework.removeClass(_controls, 'pswp__ui--hidden');
		};

		ui.supportsFullscreen = function () {
			var d = document;
			return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
		};

		ui.getFullscreenAPI = function () {
			var dE = document.documentElement,
			    api,
			    tF = 'fullscreenchange';

			if (dE.requestFullscreen) {
				api = {
					enterK: 'requestFullscreen',
					exitK: 'exitFullscreen',
					elementK: 'fullscreenElement',
					eventK: tF
				};
			} else if (dE.mozRequestFullScreen) {
				api = {
					enterK: 'mozRequestFullScreen',
					exitK: 'mozCancelFullScreen',
					elementK: 'mozFullScreenElement',
					eventK: 'moz' + tF
				};
			} else if (dE.webkitRequestFullscreen) {
				api = {
					enterK: 'webkitRequestFullscreen',
					exitK: 'webkitExitFullscreen',
					elementK: 'webkitFullscreenElement',
					eventK: 'webkit' + tF
				};
			} else if (dE.msRequestFullscreen) {
				api = {
					enterK: 'msRequestFullscreen',
					exitK: 'msExitFullscreen',
					elementK: 'msFullscreenElement',
					eventK: 'MSFullscreenChange'
				};
			}

			if (api) {
				api.enter = function () {
					// disable close-on-scroll in fullscreen
					_initalCloseOnScrollValue = _options.closeOnScroll;
					_options.closeOnScroll = false;

					if (this.enterK === 'webkitRequestFullscreen') {
						pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
					} else {
						return pswp.template[this.enterK]();
					}
				};
				api.exit = function () {
					_options.closeOnScroll = _initalCloseOnScrollValue;

					return document[this.exitK]();
				};
				api.isFullscreen = function () {
					return document[this.elementK];
				};
			}

			return api;
		};
	};
	return PhotoSwipeUI_Default;
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _CommentList = __webpack_require__(253);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _record = __webpack_require__(25);

var RecordActions = _interopRequireWildcard(_record);

var _comment = __webpack_require__(54);

var CommentActions = _interopRequireWildcard(_comment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    var headerAction = (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        footerAction = (0, _redux.bindActionCreators)(FooterActions, dispatch),
        recordAction = (0, _redux.bindActionCreators)(RecordActions, dispatch),
        commentAction = (0, _redux.bindActionCreators)(CommentActions, dispatch);
    return {
        headerAction: headerAction,
        footerAction: footerAction,
        recordAction: recordAction,
        commentAction: commentAction
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CommentList2.default);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = __webpack_require__(84);

var _Card2 = _interopRequireDefault(_Card);

var _PhotoBrowser = __webpack_require__(36);

var _PhotoBrowser2 = _interopRequireDefault(_PhotoBrowser);

var _Comment = __webpack_require__(254);

var _Comment2 = _interopRequireDefault(_Comment);

var _persistence = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CommentList: {
        displayName: 'CommentList'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CommentList.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/CommentList.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var showTimer = 0;
var tData = void 0;

var CommentList = _wrapComponent('CommentList')(function (_Component) {
    _inherits(CommentList, _Component);

    function CommentList() {
        _classCallCheck(this, CommentList);

        return _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).apply(this, arguments));
    }

    _createClass(CommentList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var store = this.props.store,
                getCommentData = this.props.commentAction.getCommentData,
                updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter;

            (0, _persistence.restore)(store);
            updateHeader({
                type: 'base',
                title: '评论列表',
                isBack: true,
                rBtn: null
            });
            updateFooter({ type: 'home' });
            getCommentData();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var scrollTop = this.props.store.comment.scrollTop;

            this.showList();
            setTimeout(function () {
                document.body.scrollTop = scrollTop;
            }, 100);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var saveScrollTop = this.props.commentAction.saveScrollTop,
                recordOriginal = this.props.recordAction.recordOriginal;

            clearTimeout(showTimer);
            saveScrollTop(document.body.scrollTop);
            recordOriginal('comment');
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            e.stopPropagation();
            var history = this.props.history,
                home = this.props.store.home,
                saveParams = this.props.commentAction.saveParams,
                t = $(e.target);

            if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                var ul = t.parents('.card-item'),
                    rows = home.params.rows,
                    imgs = ul.find('img'),
                    index = t.data('index'),
                    photos = home.data[rows].photos,
                    photoArr = [];
                for (var i = 0; i < photos.length; i += 1) {
                    var cell = Object.assign({}, photos[i]);
                    cell.el = imgs[i];
                    photoArr.push(cell);
                }
                _PhotoBrowser2.default.init(photoArr, index);
            }
            if (e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
                var params = {
                    type: 'comment',
                    userId: tData.userId,
                    workId: tData.id
                };
                saveParams(params);
                history.push('/editcomment');
            }
            if (e.target.className === 'comment' || t.parents('.comment').length > 0) {
                var el = t;
                if (e.target.className !== 'comment') {
                    el = t.parents('.comment');
                }
                var _params = {
                    type: 'reply',
                    userId: el.data('uid'),
                    workId: el.data('id'),
                    nickname: el.data('nickname')
                };
                saveParams(_params);
                history.push('/editcomment');
            }
            if (t.data('tag') === 'article') {
                var aid = t.data('aid'),
                    cTop = 0;
                var param = {
                    aid: aid, cTop: cTop
                };
                saveParams(param);
                history.push('/article');
            }
        }
    }, {
        key: 'cardMove',
        value: function cardMove(t) {
            setTimeout(function () {
                t.style.transform = 'translate3d(0, 0, 0)';
            }, 16);
        }
    }, {
        key: 'showList',
        value: function showList() {
            var _this2 = this;

            showTimer = setTimeout(function () {
                if (_this2.commentList) {
                    _this2.commentList.style.display = 'block';
                }
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var history = this.props.history,
                _props$store = this.props.store,
                home = _props$store.home,
                comment = _props$store.comment;

            tData = home.data[home.params.rows];
            var css = { marginBottom: 0 },
                vDom = null,
                cTop = 0;
            if (comment.isFetching) {
                vDom = _react3.default.createElement(
                    'div',
                    null,
                    'loading'
                );
            } else {
                vDom = _react3.default.createElement(
                    'div',
                    {
                        ref: function ref(c) {
                            _this3.commentList = c;
                        },
                        className: 'comment-list',
                        style: { display: 'none' }
                    },
                    comment.data.map(function (cell, index) {
                        return _react3.default.createElement(_Comment2.default, {
                            key: cell.id,
                            data: cell,
                            index: index
                        });
                    })
                );
            }
            if (history.action === 'PUSH') {
                cTop = home.params.cTop;
            }
            if (home.params.cTop !== 0) {
                css = Object.assign(css, { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out', transform: 'translate3d(0, ' + cTop + 'px, 0)' });
            }
            return _react3.default.createElement(
                'div',
                { ref: function ref(c) {
                        _this3.eventLayer = c;
                    }
                },
                _react3.default.createElement(_Card2.default, { data: tData, cssStyle: css, index: 0, animation: this.cardMove, commentOps: '发表评论' }),
                vDom
            );
        }
    }]);

    return CommentList;
}(_react2.Component));

CommentList.propTypes = {
    commentAction: _propTypes2.default.object.isRequired,
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired,
    recordAction: _propTypes2.default.object.isRequired,
    store: _propTypes2.default.object.isRequired,
    history: _propTypes2.default.object.isRequired
};

exports.default = CommentList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CompHead = __webpack_require__(85);

var _CompHead2 = _interopRequireDefault(_CompHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Comment: {
        displayName: 'Comment'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Comment/Comment.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Comment/Comment.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Comment = _wrapComponent('Comment')(function (_Component) {
    _inherits(Comment, _Component);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var data = this.props.data,
                lis = [];

            var reply = null;
            if (data.commentReply && data.commentReply.length > 0) {
                for (var i = 0; i < data.commentReply.length; i += 1) {
                    var cell = data.commentReply[i];
                    lis.push(_react3.default.createElement(
                        'li',
                        { key: i },
                        _react3.default.createElement(
                            'a',
                            { href: ' javascript:void(0);' },
                            '@',
                            cell.nickname,
                            ':'
                        ),
                        cell.reply
                    ));
                }
                reply = _react3.default.createElement(
                    'ul',
                    null,
                    lis
                );
            }
            return _react3.default.createElement(
                'div',
                { className: 'comment', 'data-nickname': data.nickname, 'data-uid': data.userId, 'data-id': data.id },
                _react3.default.createElement(_CompHead2.default, { profile: data.profile, nickname: data.nickname, dateTime: data.dateTime }),
                _react3.default.createElement(
                    'div',
                    { className: 'content' },
                    _react3.default.createElement(
                        'div',
                        null,
                        data.comment
                    ),
                    reply
                )
            );
        }
    }]);

    return Comment;
}(_react2.Component));

Comment.propTypes = {
    data: _propTypes2.default.object.isRequired
};

exports.default = Comment;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _EditComment = __webpack_require__(256);

var _EditComment2 = _interopRequireDefault(_EditComment);

var _editcomment = __webpack_require__(257);

var EditActions = _interopRequireWildcard(_editcomment);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    var editActions = (0, _redux.bindActionCreators)(EditActions, dispatch),
        headerAction = (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        footerAction = (0, _redux.bindActionCreators)(FooterActions, dispatch);
    return {
        headerAction: headerAction,
        footerAction: footerAction,
        editActions: editActions
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EditComment2.default);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persistence = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    EditComment: {
        displayName: 'EditComment'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/EditComment.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/EditComment.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var createDiv = null,
    tip = '写评论…';
var tb = 87;

var EditComment = _wrapComponent('EditComment')(function (_Component) {
    _inherits(EditComment, _Component);

    function EditComment() {
        _classCallCheck(this, EditComment);

        return _possibleConstructorReturn(this, (EditComment.__proto__ || Object.getPrototypeOf(EditComment)).apply(this, arguments));
    }

    _createClass(EditComment, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var store = this.props.store;

            (0, _persistence.restore)(store);
            var updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter,
                _props$store$comment$ = this.props.store.comment.params,
                type = _props$store$comment$.type,
                nickname = _props$store$comment$.nickname;

            var tit = '评论';
            tip = '写评论…';
            if (type === 'reply') {
                tit = '回复';
                tip = '\u56DE\u590D@' + nickname + '\u2026';
            }
            updateHeader({
                type: 'base',
                title: tit,
                isBack: true,
                rBtn: {
                    type: 'txt',
                    content: '发送',
                    handler: function handler() {
                        _this2.send();
                    }
                }
            });
            updateFooter({
                type: 'create'
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.create.addEventListener('click', this.focusTex.bind(this), false);
            createDiv = this.create;
            window.addEventListener('resize', this.reSize, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.reSize, false);
        }
    }, {
        key: 'focusTex',
        value: function focusTex(e) {
            e.stopPropagation();
            this.text.focus();
        }
    }, {
        key: 'reSize',
        value: function reSize() {
            var cHeight = window.innerHeight - tb;
            if (createDiv) {
                createDiv.style.height = cHeight + 'px';
            }
        }
    }, {
        key: 'send',
        value: function send() {
            var history = this.props.history;

            history.goBack(0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var cHeight = window.innerHeight - tb;
            return _react3.default.createElement(
                'div',
                {
                    ref: function ref(c) {
                        _this3.create = c;
                    },
                    className: 'edit-comment',
                    style: { height: cHeight + 'px' }
                },
                _react3.default.createElement('textarea', {
                    ref: function ref(c) {
                        _this3.text = c;
                    },
                    maxLength: '150',
                    placeholder: tip
                }),
                _react3.default.createElement(
                    'div',
                    { className: 'edit-tip' },
                    '\u5B57\u6570\u9650\u5236\uFF1A150'
                )
            );
        }
    }]);

    return EditComment;
}(_react2.Component));

EditComment.propTypes = {
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired,
    history: _propTypes2.default.object.isRequired,
    store: _propTypes2.default.object.isRequired
};

exports.default = EditComment;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _Article = __webpack_require__(259);

var _Article2 = _interopRequireDefault(_Article);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _article = __webpack_require__(55);

var ArticleActions = _interopRequireWildcard(_article);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    var articleAction = (0, _redux.bindActionCreators)(ArticleActions, dispatch),
        headerAction = (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        footerAction = (0, _redux.bindActionCreators)(FooterActions, dispatch);
    return {
        headerAction: headerAction,
        footerAction: footerAction,
        articleAction: articleAction
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Article2.default);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

var _SinglePhoto = __webpack_require__(86);

var _SinglePhoto2 = _interopRequireDefault(_SinglePhoto);

var _PhotoBrowser = __webpack_require__(36);

var _PhotoBrowser2 = _interopRequireDefault(_PhotoBrowser);

var _persistence = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Article: {
        displayName: 'Article'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Article.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Article.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var tb = 87;
var cHeight = 0,
    action = '';

var Article = _wrapComponent('Article')(function (_Component) {
    _inherits(Article, _Component);

    function Article() {
        _classCallCheck(this, Article);

        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    _createClass(Article, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var store = this.props.store;

            (0, _persistence.restore)(store);
            action = this.props.store.record.original;
            var _props$articleAction = this.props.articleAction,
                getArtData = _props$articleAction.getArtData,
                getPreviewData = _props$articleAction.getPreviewData,
                updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter;

            updateHeader({
                type: 'base',
                title: '文章',
                isBack: true,
                rBtn: null
            });
            updateFooter({ type: 'home' });
            if (action === 'editarticle') {
                getPreviewData();
            } else {
                var aid = this.props.store[action].params.aid;

                getArtData(aid);
            }
            cHeight = window.innerHeight - tb;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            document.body.scrollTop = 0;
        }
    }, {
        key: 'getData',
        value: function getData() {
            var data = void 0;
            if (action === 'editarticle') {
                data = this.props.store.editarticle.data;
            } else {
                data = this.props.store.article.data;
            }
            return data;
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            var data = this.getData();
            var photos = data.photos;

            e.stopPropagation();
            var t = (0, _zepto2.default)(e.target);
            if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                var index = t.data('index'),
                    photoArr = [],
                    imgs = (0, _zepto2.default)(this.eventLayer).find('img');
                for (var i = 0; i < photos.length; i += 1) {
                    var cell = Object.assign({}, photos[i]);
                    cell.el = imgs[i];
                    photoArr.push(cell);
                }
                _PhotoBrowser2.default.init(photoArr, index);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var html = [],
                isFetching = this.props.store.article.isFetching,
                data = this.getData();

            if (isFetching) {
                html.push('loading');
            } else {
                var index = 0;
                html.push(_react3.default.createElement(
                    'h1',
                    { key: data.article.length, className: 'title' },
                    data.title
                ));
                for (var i = 0; i < data.article.length; i += 1) {
                    var cell = data.article[i];
                    if (cell === '[img]') {
                        html.push(_react3.default.createElement(_SinglePhoto2.default, { key: i, browser: true, photo: data.photos[index].msrc, index: index }));
                        index += 1;
                    } else {
                        html.push(_react3.default.createElement(
                            'p',
                            { key: i },
                            cell
                        ));
                    }
                }
            }
            return _react3.default.createElement(
                'div',
                {
                    ref: function ref(c) {
                        _this2.eventLayer = c;
                    },
                    className: 'article-box',
                    style: { minHeight: cHeight + 'px' }
                },
                html
            );
        }
    }]);

    return Article;
}(_react2.Component));

Article.propTypes = {
    articleAction: _propTypes2.default.object.isRequired,
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired,
    store: _propTypes2.default.object.isRequired
};

exports.default = Article;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _Search = __webpack_require__(261);

var _Search2 = _interopRequireDefault(_Search);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

var _search = __webpack_require__(262);

var SearchActions = _interopRequireWildcard(_search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        footerAction: (0, _redux.bindActionCreators)(FooterActions, dispatch),
        headerAction: (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        searchAction: (0, _redux.bindActionCreators)(SearchActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Search2.default);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Search: {
        displayName: 'Search'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Search.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Search.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Search = _wrapComponent('Search')(function (_Component) {
    _inherits(Search, _Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter;

            updateHeader({
                type: 'search',
                title: '',
                isBack: true,
                rBtn: {
                    type: 'txt',
                    content: '搜索',
                    handler: function handler() {}
                }
            });
            updateFooter({ type: 'none' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'h1',
                null,
                'Search'
            );
        }
    }]);

    return Search;
}(_react2.Component));

Search.propTypes = {
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired
};

exports.default = Search;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchUpdate = searchUpdate;
var SEARCH_UPDATE = exports.SEARCH_UPDATE = 'SEARCH_UPDATE';

function searchUpdate(payload) {
    return {
        type: SEARCH_UPDATE,
        payload: payload
    };
}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _EditArticle = __webpack_require__(264);

var _EditArticle2 = _interopRequireDefault(_EditArticle);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _record = __webpack_require__(25);

var RecordActions = _interopRequireWildcard(_record);

var _editarticle = __webpack_require__(56);

var EditActions = _interopRequireWildcard(_editarticle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    var headerAction = (0, _redux.bindActionCreators)(HeaderActions, dispatch),
        footerAction = (0, _redux.bindActionCreators)(FooterActions, dispatch),
        recordAction = (0, _redux.bindActionCreators)(RecordActions, dispatch),
        editAction = (0, _redux.bindActionCreators)(EditActions, dispatch);
    return {
        headerAction: headerAction,
        footerAction: footerAction,
        recordAction: recordAction,
        editAction: editAction
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EditArticle2.default);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

var _persistence = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    EditArticle: {
        displayName: 'EditArticle'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/EditArticle.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/EditArticle.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var tb = 87,
    edit = {
    selection: null,
    range: null,
    imgReg: /<img\s*([\w]+=(\"|\')([^\"\']*)(\"|\')\s*)*\/?>/i,
    mY: 0,
    uploadSize: 2 * 1048576
};
var createDiv = void 0,
    contDiv = void 0,
    tip = void 0,
    g = void 0,
    titleHeight = 0,
    cHeight = 0,
    contHeight = 0,
    contBTop = 0,
    contMHeight = 0,
    _this = void 0,
    preData = void 0;

var EditArticle = _wrapComponent('EditArticle')(function (_Component) {
    _inherits(EditArticle, _Component);

    function EditArticle() {
        _classCallCheck(this, EditArticle);

        return _possibleConstructorReturn(this, (EditArticle.__proto__ || Object.getPrototypeOf(EditArticle)).apply(this, arguments));
    }

    _createClass(EditArticle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            g = window.FaKoa;
            var store = this.props.store;

            (0, _persistence.restore)(store);
            var updateHeader = this.props.headerAction.updateHeader,
                updateFooter = this.props.footerAction.updateFooter;

            updateHeader({
                type: 'base',
                title: '编辑',
                isBack: true,
                rBtn: {
                    type: 'txt',
                    content: '发布',
                    handler: function handler() {
                        _this3.send();
                    }
                }
            });
            updateFooter({
                type: 'editaricle'
            });
            titleHeight = 2.8 * g.fontSize;
            cHeight = window.innerHeight - tb;
            contHeight = window.innerHeight / 2 - 2 * g.fontSize;
            contBTop = 44 + contHeight - 1.8 * g.fontSize;
            contMHeight = cHeight - titleHeight;
            preData = {
                title: '',
                photos: [],
                article: []
            };
            _this = this;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = this.props.store.editarticle.data;

            var restoreCont = void 0;
            if (data) {
                this.title.value = data.title;
                restoreCont = this.restoreState(data);
                if (restoreCont !== '') {
                    this.content.innerHTML = restoreCont;
                    this.tip.value = ' ';
                }
            }
            this.content.addEventListener('focus', this.focusHandler.bind(this), false);
            this.content.addEventListener('blur', this.blurHandler, false);
            (0, _zepto2.default)(this.content).on('savePreviewData', this.saveData);
            this.file.addEventListener('change', this.fileChange.bind(this), false);
            window.addEventListener('resize', this.reSize, false);
            window.addEventListener('touchstart', this.getCursor, false);
            createDiv = this.eventLayer;
            contDiv = this.content;
            tip = this.tip;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var recordOriginal = this.props.recordAction.recordOriginal;

            window.removeEventListener('resize', this.reSize, false);
            recordOriginal('editarticle');
        }
    }, {
        key: 'getCursor',
        value: function getCursor(e) {
            e.stopPropagation();
            if (e.touches.length > 0) {
                edit.mY = e.touches[0].clientY;
            }
        }
    }, {
        key: 'getsr',
        value: function getsr() {
            var selection = window.getSelection ? window.getSelection() : document.selection;
            edit.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
            edit.selection = selection;
        }
    }, {
        key: 'reSize',
        value: function reSize() {
            cHeight = window.innerHeight - tb;
            contHeight = window.innerHeight / 2 - 2 * g.fontSize;
            contMHeight = cHeight - titleHeight;
            contBTop = 44 + contHeight - 1.8 * g.fontSize;
            if (createDiv) {
                createDiv.style.height = cHeight + 'px';
            }
            if (contDiv) {
                contDiv.style.height = contHeight + 'px';
            }
        }
    }, {
        key: 'focusHandler',
        value: function focusHandler(e) {
            var _this4 = this;

            e.stopPropagation();
            var t = (0, _zepto2.default)(e.target);
            contDiv.style.height = contHeight + 'px';
            setTimeout(function () {
                document.body.scrollTop = 44;
                if (!edit.range) {
                    _this4.getsr();
                }
                if (_zepto2.default.trim(t.text()) === '' && t.children().length === 0) {
                    _this4.insertDiv();
                }
            }, 20);
            if (_zepto2.default.trim(t.text()) === '') {
                tip.placeholder = '';
            }
            if (edit.mY > contBTop) {
                var h = edit.mY - contBTop;
                contDiv.scrollTop += h;
                contDiv.focus();
                edit.mY = 0;
            }
            return false;
        }
    }, {
        key: 'blurHandler',
        value: function blurHandler(e) {
            e.stopPropagation();
            var t = (0, _zepto2.default)(e.target);
            if (!_zepto2.default.trim(t.text()) && !edit.imgReg.test(t.html())) {
                tip.placeholder = '正文...';
            }
            contDiv.style.height = contMHeight + 'px';
        }
    }, {
        key: 'fileChange',
        value: function fileChange(e) {
            e.stopPropagation();
            var t = this,
                file = e.target.files[0];
            if (!/^image/.test(file.type)) {
                alert('请添加图片文件！');
                return;
            }
            if (file.size > edit.uploadSize) {
                alert('请添加小于2M的图片！');
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (f) {
                var data = f.target.result,
                    imgObj = new Image();
                imgObj.src = data;
                setTimeout(function () {
                    var imgDom = '<img src="' + data + '" data-width="' + imgObj.width + '" data-height="' + imgObj.height + '" alt="" />';
                    t.insertImage(imgDom);
                }, 20);
            };
        }
    }, {
        key: 'insertImage',
        value: function insertImage(dom) {
            if (!edit.range) {
                this.getsr();
            }
            if (window.getSelection) {
                var lastSub = (0, _zepto2.default)(contDiv).find('div:last-child');
                if ((0, _zepto2.default)(lastSub).text() === '') {
                    lastSub.remove();
                }
                var node = document.createElement('div');
                node.className = 'single-img mar';
                node.innerHTML = dom;
                contDiv.appendChild(node);
                _this.insertDiv();
            }
        }
    }, {
        key: 'insertDiv',
        value: function insertDiv() {
            var node = document.createElement('div');
            node.className = 'mar';
            node.innerHTML = '<br />';
            contDiv.appendChild(node);
            var range = document.createRange();
            range.selectNodeContents(node);
            range.setStart(node, node.length);
            range.collapse(false);
            edit.selection.removeAllRanges();
            edit.selection.addRange(range);
        }
    }, {
        key: 'saveData',
        value: function saveData() {
            var history = _this.props.history;
            var saveEditArticle = _this.props.editAction.saveEditArticle;

            var elems = (0, _zepto2.default)(contDiv).children('div');
            if (elems.length === 0 || _this.title.value === '') {
                alert('请填写标题和正文！');
                return;
            }
            preData.title = _this.title.value;
            for (var i = 0; i < elems.length; i += 1) {
                var cell = (0, _zepto2.default)(elems[i]),
                    img = cell.children('img');
                if (img.length > 0) {
                    var odata = img.attr('src'),
                        obj = {
                        src: odata,
                        msrc: odata,
                        w: img.data('width'),
                        h: img.data('height')
                    };
                    preData.photos.push(obj);
                    preData.article.push('[img]');
                } else {
                    preData.article.push(cell.text());
                }
            }
            saveEditArticle(preData);
            history.push('article');
        }
    }, {
        key: 'restoreState',
        value: function restoreState(data) {
            var i = 0,
                index = 0;
            var divArr = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.article[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cell = _step.value;

                    if (cell === '[img]') {
                        var photo = data.photos[i];
                        divArr.push('<div key=' + index + ' class="single-img mar"><img src="' + photo.msrc + '" data-width="' + photo.w + '" data-height="' + photo.h + '" alt="" /></div>');
                        i += 1;
                    } else {
                        divArr.push('<div key=' + index + ' class="mar">' + cell + '</div>');
                    }
                    index += 1;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return divArr.join('');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react3.default.createElement(
                'div',
                {
                    ref: function ref(c) {
                        _this5.eventLayer = c;
                    },
                    className: 'edit-article',
                    style: { height: cHeight + 'px' }
                },
                _react3.default.createElement(
                    'div',
                    { className: 'content-box' },
                    _react3.default.createElement(
                        'div',
                        { className: 'title-box' },
                        _react3.default.createElement('input', {
                            ref: function ref(c) {
                                _this5.title = c;
                            },
                            type: 'text',
                            placeholder: '\u6807\u9898...'
                        })
                    ),
                    _react3.default.createElement('input', {
                        ref: function ref(c) {
                            _this5.tip = c;
                        },
                        type: 'text',
                        className: 'tip-input',
                        placeholder: '\u6B63\u6587...'
                    }),
                    _react3.default.createElement('p', {
                        ref: function ref(c) {
                            _this5.content = c;
                        },
                        className: 'edit',
                        id: 'editBox',
                        style: { height: contMHeight + 'px' },
                        contentEditable: 'true'
                    })
                ),
                _react3.default.createElement('input', {
                    ref: function ref(c) {
                        _this5.file = c;
                    },
                    type: 'file',
                    id: 'fileUpload',
                    style: { display: 'none' }
                })
            );
        }
    }]);

    return EditArticle;
}(_react2.Component));

EditArticle.propTypes = {
    headerAction: _propTypes2.default.object.isRequired,
    footerAction: _propTypes2.default.object.isRequired,
    recordAction: _propTypes2.default.object.isRequired,
    store: _propTypes2.default.object.isRequired
};

exports.default = EditArticle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Error: {
        displayName: 'Error'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/NotFound.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/NotFound.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Error = _wrapComponent('Error')(function (_Component) {
    _inherits(Error, _Component);

    function Error() {
        _classCallCheck(this, Error);

        return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
    }

    _createClass(Error, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'h1',
                null,
                '404'
            );
        }
    }]);

    return Error;
}(_react2.Component));

exports.default = Error;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _Header = __webpack_require__(267);

var _Header2 = _interopRequireDefault(_Header);

var _header = __webpack_require__(12);

var HeaderActions = _interopRequireWildcard(_header);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(HeaderActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header2.default);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Header: {
        displayName: 'Header'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Header.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Header.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var range = 10;
var flag = true,
    g = void 0;

var Header = _wrapComponent('Header')(function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            g = window.FaKoa;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.header.addEventListener('click', this.eventHandler.bind(this), false);
            window.addEventListener('scroll', this.scrollHandler.bind(this), false);
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            e.stopPropagation();
            var target = e.target,
                t = (0, _zepto2.default)(target);
            if (target.tagName === 'I') {
                target = e.target.parentElement;
                t = (0, _zepto2.default)(target);
            }
            if (target.tagName === 'LI' && t.data('tag') === 'back') {
                this.back();
            }
            if (target.tagName === 'LI' && t.data('tag') === 'rbtn') {
                this.opt();
            }
        }
    }, {
        key: 'back',
        value: function back() {
            var backHandler = this.props.store.header.backHandler;

            if (backHandler) {
                backHandler();
            } else {
                g.history.goBack();
            }
        }
    }, {
        key: 'opt',
        value: function opt() {
            var rBtn = this.props.store.header.rBtn;

            if (rBtn && rBtn.handler) {
                rBtn.handler();
            }
        }
    }, {
        key: 'scrollHandler',
        value: function scrollHandler(e) {
            e.stopPropagation();
            if (document.body.scrollTop >= range) {
                if (flag) {
                    this.header.classList.add('bdb');
                    flag = false;
                }
            } else if (!flag) {
                this.header.classList.remove('bdb');
                flag = true;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var header = this.props.store.header;

            var backBtn = _react3.default.createElement('li', { className: 'item' }),
                optBtn = _react3.default.createElement('li', { className: 'item' }),
                middle = _react3.default.createElement(
                'li',
                { className: 'middle' },
                header.title
            );
            if (header.isBack) {
                backBtn = _react3.default.createElement(
                    'li',
                    { className: 'item left', 'data-tag': 'back' },
                    _react3.default.createElement('i', { className: 'icon-back', 'data-tag': 'back' })
                );
            }
            if (header.rBtn) {
                var cont = void 0;
                if (header.rBtn.type === 'txt') {
                    cont = header.rBtn.content;
                }
                if (header.rBtn.type === 'img') {
                    cont = _react3.default.createElement('img', { src: header.rBtn.content, alt: '' });
                }
                optBtn = _react3.default.createElement(
                    'li',
                    { className: 'item right', 'data-tag': 'rbtn' },
                    cont
                );
            }
            if (header.type === 'home') {
                middle = _react3.default.createElement(
                    'li',
                    { className: 'middle' },
                    _react3.default.createElement(
                        'h1',
                        { className: 'shimmer' },
                        header.title
                    )
                );
            }
            if (header.type === 'search') {
                middle = _react3.default.createElement(
                    'li',
                    { className: 'f-item middle flx' },
                    _react3.default.createElement(
                        'div',
                        { className: 'search-box' },
                        _react3.default.createElement('div', { className: 'icon-box' }),
                        _react3.default.createElement(
                            'div',
                            { className: 'input-box' },
                            _react3.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165...' })
                        ),
                        _react3.default.createElement('div', { className: 'fill' })
                    )
                );
            }
            return _react3.default.createElement(
                'div',
                { className: 'header-view' },
                _react3.default.createElement(
                    'div',
                    {
                        ref: function ref(c) {
                            _this2.header = c;
                        },
                        className: 'header-container'
                    },
                    _react3.default.createElement(
                        'ul',
                        { className: 'header' },
                        backBtn,
                        middle,
                        optBtn
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'toast', style: { display: 'none' } },
                        _react3.default.createElement(
                            'div',
                            { className: 'cont' },
                            '\u8FD9\u662F\u4E00\u6761\u63D0\u793A\u4FE1\u606F\uFF01'
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.Component));

Header.propTypes = {
    store: _propTypes2.default.object.isRequired
};

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _Footer = __webpack_require__(269);

var _Footer2 = _interopRequireDefault(_Footer);

var _footer = __webpack_require__(13);

var FooterActions = _interopRequireWildcard(_footer);

var _popup = __webpack_require__(26);

var PopupActions = _interopRequireWildcard(_popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        footerAction: (0, _redux.bindActionCreators)(FooterActions, dispatch),
        popupAction: (0, _redux.bindActionCreators)(PopupActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Footer2.default);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Footer: {
        displayName: 'Footer'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Footer.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Footer.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var range = 1;
var flag = true,
    g = void 0,
    fileUpload = void 0,
    editBox = void 0;

var Footer = _wrapComponent('Footer')(function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            g = window.FaKoa;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.footerScroll.bind(this), false);
            this.footer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var footer = this.props.store.footer;

            switch (footer.type) {
                case 'editaricle':
                    fileUpload = (0, _zepto2.default)('#fileUpload');
                    editBox = (0, _zepto2.default)('#editBox');
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'footerScroll',
        value: function footerScroll(e) {
            e.stopPropagation();
            if (document.body.scrollTop >= range) {
                if (flag) {
                    this.footer.classList.add('footer-hidden');
                    flag = false;
                }
            } else if (!flag) {
                this.footer.classList.remove('footer-hidden');
                flag = true;
            }
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            var toggle = this.props.popupAction.toggle;

            e.stopPropagation();
            var t = (0, _zepto2.default)(e.target),
                tag = t.data('tag');
            switch (tag) {
                case 'home':
                    break;
                case 'create':
                    toggle({ toggle: true });
                    break;
                case 'search':
                    g.history.push('search');
                    break;
                case 'album':
                    if (fileUpload && fileUpload.length > 0) {
                        fileUpload.trigger('click');
                    }
                    break;
                case 'preview':
                    if (editBox && editBox.length > 0) {
                        editBox.triggerHandler('savePreviewData');
                    }
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var footer = this.props.store.footer;

            var html = void 0;
            switch (footer.type) {
                case 'none':
                    break;
                case 'editaricle':
                    html = _react3.default.createElement(
                        'ul',
                        { className: 'footer' },
                        _react3.default.createElement(
                            'li',
                            { className: 'item-base' },
                            '\u62CD\u7167'
                        ),
                        _react3.default.createElement(
                            'li',
                            { className: 'item-base', 'data-tag': 'album' },
                            '\u76F8\u518C'
                        ),
                        _react3.default.createElement(
                            'li',
                            { className: 'item-base' },
                            '\u8868\u60C5'
                        ),
                        _react3.default.createElement(
                            'li',
                            { className: 'item-base', 'data-tag': 'preview' },
                            '\u9884\u89C8'
                        )
                    );
                    break;
                case 'home':
                default:
                    html = _react3.default.createElement(
                        'ul',
                        { className: 'footer footer-base' },
                        _react3.default.createElement(
                            'li',
                            { className: 'active', 'data-tag': 'home' },
                            '\u4E3B\u9875'
                        ),
                        _react3.default.createElement(
                            'li',
                            { 'data-tag': 'create' },
                            '\u521B\u5EFA'
                        ),
                        _react3.default.createElement(
                            'li',
                            { 'data-tag': 'search' },
                            '\u641C\u7D22'
                        ),
                        _react3.default.createElement(
                            'li',
                            { 'data-tag': 'my' },
                            '\u6211\u7684'
                        )
                    );
                    break;
            }
            return _react3.default.createElement(
                'div',
                {
                    ref: function ref(c) {
                        _this2.footer = c;
                    },
                    className: 'footer-container'
                },
                html
            );
        }
    }]);

    return Footer;
}(_react2.Component));

Footer.propTypes = {
    store: _propTypes2.default.object.isRequired,
    popupAction: _propTypes2.default.object.isRequired
};

exports.default = Footer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(9);

var _Popup = __webpack_require__(271);

var _Popup2 = _interopRequireDefault(_Popup);

var _popup = __webpack_require__(26);

var PopupActions = _interopRequireWildcard(_popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(store) {
    return {
        store: store
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(PopupActions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Popup2.default);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(4);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(0);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zepto = __webpack_require__(17);

var _zepto2 = _interopRequireDefault(_zepto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Popup: {
        displayName: 'Popup'
    }
};

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Popup.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/zh/works/nodejs_pros/fa_koa/webapp/src/components/Popup.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformHmrLibIndexJs2(_UsersZhWorksNodejs_prosFa_koaWebappSrcNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var g = void 0;

var Popup = _wrapComponent('Popup')(function (_Component) {
    _inherits(Popup, _Component);

    function Popup() {
        _classCallCheck(this, Popup);

        return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
    }

    _createClass(Popup, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            g = window.FaKoa;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.layer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            var popup = this.props.store.popup;

            if (popup.toggle) {
                setTimeout(function () {
                    _this2.layer.classList.add('pop-show');
                    document.body.style.overflow = 'hidden';
                }, 100);
            } else {
                document.body.style.overflow = '';
            }
        }
    }, {
        key: 'closePopup',
        value: function closePopup(callback) {
            var toggle = this.props.toggle;

            this.layer.classList.remove('pop-show');
            setTimeout(function () {
                toggle({ toggle: false });
                if (callback) {
                    callback();
                }
            }, 300);
        }
    }, {
        key: 'eventHandler',
        value: function eventHandler(e) {
            e.stopPropagation();
            var t = (0, _zepto2.default)(e.target),
                tag = t.data('tag');
            switch (tag) {
                case 'photo':
                    break;
                case 'article':
                    this.closePopup(function () {
                        g.history.push('editarticle');
                    });
                    break;
                case 'cancel':
                    this.closePopup();
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var popup = this.props.store.popup;

            var css = { display: 'none' };
            if (popup.toggle) {
                css = { display: 'block' };
            }
            return _react3.default.createElement(
                'div',
                {
                    ref: function ref(c) {
                        _this3.layer = c;
                    },
                    className: 'pop-layer',
                    id: 'popupLayer',
                    style: css
                },
                _react3.default.createElement(
                    'ul',
                    { className: '' },
                    _react3.default.createElement(
                        'li',
                        { 'data-tag': 'photo' },
                        '\u62CD\xA0\xA0\u7167'
                    ),
                    _react3.default.createElement(
                        'li',
                        { 'data-tag': 'album' },
                        '\u76F8\xA0\xA0\u518C'
                    ),
                    _react3.default.createElement(
                        'li',
                        { 'data-tag': 'article' },
                        '\u6587\xA0\xA0\u7AE0'
                    ),
                    _react3.default.createElement(
                        'li',
                        { 'data-tag': 'cancel' },
                        '\u53D6\xA0\xA0\u6D88'
                    )
                )
            );
        }
    }]);

    return Popup;
}(_react2.Component));

Popup.propTypes = {
    store: _propTypes2.default.object.isRequired,
    toggle: _propTypes2.default.func.isRequired
};

exports.default = Popup;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ })
/******/ ]);