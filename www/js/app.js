(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/panagiotisthomoglou/Projects/lady-dior/node_modules/lodash/String/capitalize.js":[function(require,module,exports){
var baseToString = require('../internal/baseToString');

/**
 * Capitalizes the first character of `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('fred');
 * // => 'Fred'
 */
function capitalize(string) {
  string = baseToString(string);
  return string && (string.charAt(0).toUpperCase() + string.slice(1));
}

module.exports = capitalize;

},{"../internal/baseToString":"/Users/panagiotisthomoglou/Projects/lady-dior/node_modules/lodash/internal/baseToString.js"}],"/Users/panagiotisthomoglou/Projects/lady-dior/node_modules/lodash/internal/baseToString.js":[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/Main.js":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _gsap = require('gsap');

var _gsap2 = _interopRequireDefault(_gsap);

var _Pager = require('./pager/Pager');

var _Pager2 = _interopRequireDefault(_Pager);

var _raf = require('./app/utils/raf');

var _raf2 = _interopRequireDefault(_raf);

var _Polyfills = require('./app/mixins/Polyfills');

var _Polyfills2 = _interopRequireDefault(_Polyfills);

// Start App
var app = new _App2['default']();
app.init();

},{"./app/App":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/App.js","./app/mixins/Polyfills":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Polyfills.js","./app/utils/raf":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/raf.js","./pager/Pager":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/Pager.js","gsap":"gsap"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/App.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _AppStore = require('./stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppActions = require('./actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _AppTemplate = require('./AppTemplate');

var _AppTemplate2 = _interopRequireDefault(_AppTemplate);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Router = require('./services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _GlobalEvents = require('./services/GlobalEvents');

var _GlobalEvents2 = _interopRequireDefault(_GlobalEvents);

var _Preloader = require('./services/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

var _Data = require('./../../../www/data/data.json');

var _Data2 = _interopRequireDefault(_Data);

var App = (function () {
	function App() {
		_classCallCheck(this, App);
	}

	_createClass(App, [{
		key: 'init',
		value: function init() {

			// Init global events
			window.GlobalEvents = new _GlobalEvents2['default']();
			GlobalEvents.init();

			if ('scrollRestoration' in history) {
				// Back off, browser, I got this...
				history.scrollRestoration = 'manual';
			}

			this.onMainDataLoaded();
		}
	}, {
		key: 'onMainDataLoaded',
		value: function onMainDataLoaded() {

			_AppStore2['default'].Data = _Data2['default'];

			// Init router
			var router = new _Router2['default']();
			router.init();

			// Render react
			_react2['default'].render(_react2['default'].createElement(_AppTemplate2['default'], null), document.getElementById('app-container'));

			// Start routing
			router.beginRouting();
		}
	}]);

	return App;
})();

exports['default'] = App;
module.exports = exports['default'];

},{"./../../../www/data/data.json":"/Users/panagiotisthomoglou/Projects/lady-dior/www/data/data.json","./AppTemplate":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/AppTemplate.js","./actions/AppActions":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js","./services/GlobalEvents":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/GlobalEvents.js","./services/Preloader":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Preloader.js","./services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/AppTemplate.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppConstants = require('./constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppStore = require('./stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _FrontContainer = require('./components/FrontContainer');

var _FrontContainer2 = _interopRequireDefault(_FrontContainer);

var _PagesContainer = require('./components/PagesContainer');

var _PagesContainer2 = _interopRequireDefault(_PagesContainer);

var _PXContainer = require('./components/PXContainer');

var _PXContainer2 = _interopRequireDefault(_PXContainer);

var AppTemplate = (function (_React$Component) {
	_inherits(AppTemplate, _React$Component);

	function AppTemplate(props) {
		_classCallCheck(this, AppTemplate);

		_get(Object.getPrototypeOf(AppTemplate.prototype), 'constructor', this).call(this, props);
		this.animate = this.animate.bind(this);
		this.resize = this.resize.bind(this);
		_AppStore2['default'].on(_AppConstants2['default'].WINDOW_RESIZE, this.resize);
	}

	_createClass(AppTemplate, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'app-template' },
				_react2['default'].createElement(_FrontContainer2['default'], { ref: 'front-container' }),
				_react2['default'].createElement(_PagesContainer2['default'], { ref: 'pages-container' }),
				_react2['default'].createElement(_PXContainer2['default'], { ref: 'px-container' })
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			GlobalEvents.resize();
			this.animate();
		}
	}, {
		key: 'animate',
		value: function animate() {
			requestAnimationFrame(this.animate);
			this.refs['px-container'].update();
			this.refs['pages-container'].update();
		}
	}, {
		key: 'resize',
		value: function resize() {
			this.refs['front-container'].resize();
			this.refs['pages-container'].resize();
			this.refs['px-container'].resize();
		}
	}]);

	return AppTemplate;
})(_react2['default'].Component);

exports['default'] = AppTemplate;
module.exports = exports['default'];

},{"./components/FrontContainer":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/FrontContainer.js","./components/PXContainer":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PXContainer.js","./components/PagesContainer":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PagesContainer.js","./constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var AppActions = {
    pageHasherChanged: function pageHasherChanged(pageId) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].PAGE_HASHER_CHANGED,
            item: pageId
        });
    },
    windowResize: function windowResize(windowW, windowH) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].WINDOW_RESIZE,
            item: { windowW: windowW, windowH: windowH }
        });
    },
    addPXChild: function addPXChild(child) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].ADD_PX_CHILD,
            item: { child: child }
        });
    },
    removePXChild: function removePXChild(child) {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].REMOVE_PX_CHILD,
            item: { child: child }
        });
    }
};

window.AppActions = AppActions;

exports['default'] = AppActions;
module.exports = exports['default'];

},{"./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/dispatchers/AppDispatcher.js"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/FrontContainer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent2 = require('./../../pager/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _SVGComponent = require('./../svg/SVGComponent');

var _SVGComponent2 = _interopRequireDefault(_SVGComponent);

var FrontContainer = (function (_BaseComponent) {
	_inherits(FrontContainer, _BaseComponent);

	function FrontContainer(props) {
		_classCallCheck(this, FrontContainer);

		_get(Object.getPrototypeOf(FrontContainer.prototype), 'constructor', this).call(this, props);
	}

	_createClass(FrontContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'front-container', ref: 'front-container' },
				_react2['default'].createElement(
					'div',
					{ className: 'logo' },
					_react2['default'].createElement(
						_SVGComponent2['default'],
						{ width: '100%', viewBox: '0 0 187.086 73.863' },
						_react2['default'].createElement('path', { d: 'M141.956,39.63c-2.023-0.903-4.265-1.373-6.687-1.483l-6.688,0.398c-1.807,0.325-3.542,0.977-5.277,1.989c-1.951,1.156-3.578,2.603-4.879,4.337c-3.325,4.156-4.519,9.036-3.614,14.783c1.012,6.073,4.156,10.229,9.325,12.327c3.977,1.626,8.386,1.95,13.121,0.902c4.518-0.939,8.097-3.108,10.808-6.505c3.181-4.014,4.192-8.965,3-14.821C149.909,45.775,146.836,41.799,141.956,39.63z M141.849,65.909c-1.555,2.89-3.903,4.626-7.121,5.241c-3.072,0.541-5.819-0.652-8.241-3.508c-2.277-2.71-3.688-6.254-4.085-10.698c-0.542-4.483,0-8.278,1.481-11.388c1.627-3.434,4.121-5.241,7.375-5.565c3.361-0.288,6.145,0.795,8.35,3.254c2.241,2.493,3.506,6.109,3.94,10.988C143.908,59.113,143.367,62.945,141.849,65.909z M40.566,0.375H4.312c-0.723,0-1.085,0.216-1.085,0.722l0.29,0.543l1.446,0.288L8.468,2.11l3.434,0.433c2.458,0.543,3.723,1.916,3.723,4.157v57.328c-0.036,1.773-0.217,3.074-0.542,3.94l-0.903,1.267c-0.47,0.541-1.446,0.939-2.819,1.119l-8.856,0.543c-1.012,0-1.554,0.254-1.554,0.724c0,0.433,0.361,0.686,1.121,0.686h46.231c5.603,0,10.591-1.048,15.037-3.071c4.157-1.989,7.771-4.7,10.735-8.205c2.711-3.327,4.808-7.049,6.326-11.279c1.337-4.012,1.988-8.168,1.988-12.469c0-8.242-1.988-15.362-5.964-21.363C69.483,5.543,57.555,0.375,40.566,0.375z M68.833,46.28c-1.193,5.531-3.145,10.049-5.856,13.591c-1.626,2.169-3.108,3.868-4.554,5.062c-1.626,1.265-3.506,2.312-5.494,3.035c-1.988,0.651-4.519,1.121-7.483,1.446l-11.06,0.398h-4.771l-1.446-0.217c-0.289-0.182-0.433-0.688-0.433-1.411V4.532l0.252-1.445c0.253-0.435,0.795-0.615,1.627-0.543h7.337c11.893,0,20.495,3.543,25.736,10.7c2.711,3.687,4.627,8.024,5.892,12.976c0.904,3.435,1.337,6.615,1.337,9.579C69.917,39.16,69.556,42.667,68.833,46.28z M90.357,44.835l0.943-0.108l2.112-0.579l1.88,0.182c0.542,0.362,0.831,0.977,0.831,1.771v21.001l-0.47,2.603c-0.326,0.723-1.157,1.192-2.53,1.372l-2.53,0.074c-0.795,0-1.157,0.18-1.084,0.614c0,0.288,0.217,0.47,0.65,0.47h19.266c0.435,0,0.687-0.11,0.687-0.435c-0.072-0.396-0.506-0.578-1.337-0.578c-2.35,0-3.867-0.325-4.519-0.977c-0.542-0.541-0.831-1.446-0.831-2.71v-26.46c0-1.301-0.181-2.023-0.542-2.095l-1.085,0.107c-0.434,0.18-1.41,0.615-2.782,1.41c-2.242,1.264-4.88,2.277-7.88,3.071c-1.266,0.361-1.808,0.76-1.627,1.193L90.357,44.835z M186.127,42.955c0.073,1.266-0.289,2.24-1.084,3c-0.723,0.615-1.445,0.795-2.096,0.615c-0.615-0.108-1.085-0.361-1.41-0.724l-1.013-1.264c-0.795-1.158-1.554-1.52-2.458-1.193c-1.048,0.288-2.132,1.083-3.253,2.349c-1.771,1.843-2.964,4.012-3.614,6.614v15.364c0,1.372,0.47,2.349,1.445,2.963l2.205,0.396l2.314,0.254c0.542,0.073,0.759,0.182,0.759,0.47l-0.108,0.253l-0.615,0.182H157.86c-0.578,0-0.902-0.182-0.902-0.47l0.541-0.435l3.254-0.254c1.266-0.216,2.06-0.649,2.494-1.301l0.542-1.626V46.462l-0.361-1.591l-0.615-0.362c-0.181-0.18-0.47-0.288-0.902-0.361c-0.542-0.036-1.194,0.073-1.88,0.361l-1.844,0.507l-1.048-0.253c-0.181-0.254-0.109-0.434,0.144-0.542l1.555-0.651c3.542-1.048,6.398-2.132,8.386-3.254l2.458-1.335l1.085,0.071l0.434,0.902v7.954c2.711-4.41,4.88-7.122,6.361-8.025c0.904-0.541,1.771-0.977,2.422-1.156l1.266-0.108c0.795-0.073,1.699,0.18,2.711,0.832C185.333,40.244,186.055,41.438,186.127,42.955z M95.942,24.051c-0.976-0.905-1.446-1.989-1.374-3.254c-0.072-1.338,0.398-2.494,1.374-3.398c0.903-0.904,1.988-1.374,3.325-1.374c1.266,0,2.386,0.47,3.289,1.374c0.904,0.904,1.41,2.06,1.41,3.398c0,1.265-0.506,2.349-1.41,3.254c-0.903,0.903-2.023,1.373-3.289,1.373C97.931,25.424,96.846,24.954,95.942,24.051z' })
					)
				),
				_react2['default'].createElement(_Menu2['default'], { ref: 'menu' })
			);
		}
	}, {
		key: 'didHasherChange',
		value: function didHasherChange() {
			var item = _AppStore2['default'].getCurrentPageMenuItem();
			this.refs['menu'].highlightByItem(item);
		}
	}, {
		key: 'resize',
		value: function resize() {
			this.refs['menu'].resize();
		}
	}]);

	return FrontContainer;
})(_BaseComponent3['default']);

exports['default'] = FrontContainer;
module.exports = exports['default'];

},{"./../../pager/components/BaseComponent":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BaseComponent.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../svg/SVGComponent":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/svg/SVGComponent.js","./Menu":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Menu.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Menu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _elementSize = require('element-size');

var _elementSize2 = _interopRequireDefault(_elementSize);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var Menu = (function (_React$Component) {
	_inherits(Menu, _React$Component);

	function Menu(props) {
		_classCallCheck(this, Menu);

		_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Menu, [{
		key: 'render',
		value: function render() {
			var menuData = _AppStore2['default'].menuContent();
			var menuItems = menuData.map(function (item, index) {
				var pathUrl = '#' + item.url;
				return _react2['default'].createElement(
					'li',
					{ id: item.id, key: index },
					_react2['default'].createElement(
						'a',
						{ href: pathUrl },
						_react2['default'].createElement(
							'div',
							{ className: 'latin-num' },
							item['latin-num']
						),
						_react2['default'].createElement(
							'div',
							{ className: 'title' },
							item.name
						),
						_react2['default'].createElement('div', { className: 'line' })
					)
				);
			});
			return _react2['default'].createElement(
				'div',
				{ ref: 'menu', id: 'menu' },
				menuItems
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.parent = _react2['default'].findDOMNode(this.refs['menu']);

			this.items = [];
			var btns = (0, _domquery2['default'])(this.parent).select('li');
			for (var i = 0; i < btns.length; i++) {
				var btn = btns[i];
				this.items[i] = {
					el: btn,
					id: btn.id
				};
			};
		}
	}, {
		key: 'highlightByItem',
		value: function highlightByItem(item) {

			if (item.id == 'home') {
				for (var i = 0; i < this.items.length; i++) {
					var btn = this.items[i];
					(0, _domquery2['default'])(btn.el).removeClass('enable');
					(0, _domquery2['default'])(btn.el).removeClass('disable');
				};
				return;
			}

			for (var i = 0; i < this.items.length; i++) {
				var btn = this.items[i];
				if (btn.id == item.id) {
					(0, _domquery2['default'])(btn.el).addClass('enable');
					(0, _domquery2['default'])(btn.el).removeClass('disable');
				} else {
					(0, _domquery2['default'])(btn.el).removeClass('enable');
					(0, _domquery2['default'])(btn.el).addClass('disable');
				}
			};
		}
	}, {
		key: 'removeHighlight',
		value: function removeHighlight() {}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			var parentSize = (0, _elementSize2['default'])(this.parent);
			var parentCss = {
				left: (windowW >> 1) - (parentSize[0] >> 1) + 'px',
				top: windowH - parentSize[1] - _AppConstants2['default'].OVERALL_MARGIN + 'px'
			};
			(0, _domquery2['default'])(this.parent).style(parentCss);
		}
	}]);

	return Menu;
})(_react2['default'].Component);

exports['default'] = Menu;
module.exports = exports['default'];

},{"./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","domquery":"domquery","element-size":"element-size","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PXContainer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var PXContainer = (function (_React$Component) {
	_inherits(PXContainer, _React$Component);

	function PXContainer(props) {
		_classCallCheck(this, PXContainer);

		_get(Object.getPrototypeOf(PXContainer.prototype), 'constructor', this).call(this, props);
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		_AppStore2['default'].on(_AppConstants2['default'].ADD_PX_CHILD, this.add);
		_AppStore2['default'].on(_AppConstants2['default'].REMOVE_PX_CHILD, this.remove);
	}

	_createClass(PXContainer, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('canvas', { className: 'canvas-holder' });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var stage = new PIXI.Container();
			var canvas = (0, _domquery2['default'])(this.parent).select('.canvas-holder')[0];
			var renderer = new PIXI.CanvasRenderer(0, 0, { view: canvas });
			renderer.backgroundColor = 0xFFFFFF;

			this.pixi = {
				canvas: canvas,
				renderer: renderer,
				stage: stage
			};
		}
	}, {
		key: 'add',
		value: function add(item) {
			this.pixi.stage.addChild(item.child);
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			this.pixi.stage.removeChild(item.child);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var scale = 1;
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			this.pixi.canvas.style.width = windowW + 'px';
			this.pixi.canvas.style.height = windowH + 'px';
			this.pixi.renderer.resize(windowW * scale, windowH * scale);
		}
	}, {
		key: 'update',
		value: function update() {
			this.pixi.renderer.render(this.pixi.stage);
		}
	}]);

	return PXContainer;
})(_react2['default'].Component);

exports['default'] = PXContainer;
module.exports = exports['default'];

},{"./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasePage2 = require('./../../pager/components/BasePage');

var _BasePage3 = _interopRequireDefault(_BasePage2);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _Helpers = require('./../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _elementSize = require('element-size');

var _elementSize2 = _interopRequireDefault(_elementSize);

var _simpleScrolltop = require('simple-scrolltop');

var _simpleScrolltop2 = _interopRequireDefault(_simpleScrolltop);

var Page = (function (_BasePage) {
	_inherits(Page, _BasePage);

	function Page(props) {
		_classCallCheck(this, Page);

		_get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Page, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this = this;

			_get(Object.getPrototypeOf(Page.prototype), 'componentWillMount', this).call(this);

			setTimeout(function () {
				AppActions.addPXChild(_this.container);
			}, 0);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.parent = _react2['default'].findDOMNode(this.refs['page-wrapper']);
			this.elementsHolder = (0, _domquery2['default'])(this.parent).select('.elements-holder')[0];
			this.introSlide = (0, _domquery2['default'])(this.parent).select('.intro-slide')[0];
			this.frontHolder = (0, _domquery2['default'])(this.introSlide).select('.front-holder')[0];

			_get(Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'willTransitionIn',
		value: function willTransitionIn() {
			setTimeout(function () {
				(0, _simpleScrolltop2['default'])(0);
			}, 1000);
			_get(Object.getPrototypeOf(Page.prototype), 'willTransitionIn', this).call(this);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			// transition In
			this.tlIn.fromTo(this.introSlide, 1, { opacity: 0, ease: Expo.easeInOut }, { opacity: 1, ease: Expo.easeInOut }, 0);
			this.tlIn.to(this.introSlide, 1, { opacity: 0, ease: Expo.easeInOut }, 3);
			this.tlIn.from(this.elementsHolder, 1, { opacity: 0, ease: Expo.easeInOut }, 2);
			this.tlIn.from(this.container, 1, { alpha: 0, ease: Expo.easeInOut }, 2);

			// transition Out
			this.tlOut.to(this.elementsHolder, 1, { opacity: 0, ease: Expo.easeInOut }, 0);
			this.tlOut.to(this.container, 1, { alpha: 0, ease: Expo.easeInOut }, 0);

			_get(Object.getPrototypeOf(Page.prototype), 'setupAnimations', this).call(this);
		}
	}, {
		key: 'getBasePageDom',
		value: function getBasePageDom(html) {
			var content = _AppStore2['default'].getCurrentPageMenuItem();
			var id = content.id + '-page';

			var frontHolder;
			if (content.id == 'home') {
				frontHolder = 'home';
			} else {
				frontHolder = _react2['default'].createElement(
					'div',
					{ className: 'title' },
					content.name
				);
			}

			return _react2['default'].createElement(
				'div',
				{ id: id, ref: 'page-wrapper', className: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'elements-holder' },
					html
				),
				_react2['default'].createElement(
					'div',
					{ className: 'intro-slide' },
					_react2['default'].createElement(
						'div',
						{ className: 'front-holder' },
						frontHolder
					),
					_react2['default'].createElement('div', { className: 'background' })
				)
			);
		}
	}, {
		key: 'update',
		value: function update() {}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			var titleSize = (0, _elementSize2['default'])(this.frontHolder);
			this.frontHolder.style.left = (windowW >> 1) - (titleSize[0] >> 1) + 'px';
			this.frontHolder.style.top = (windowH >> 1) - (titleSize[1] >> 1) + 'px';

			_get(Object.getPrototypeOf(Page.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var _this2 = this;

			_Helpers2['default'].removeChildrenFromContainer(this.container);

			setTimeout(function () {
				AppActions.removePXChild(_this2.container);
			}, 0);

			_AppStore2['default'].off(_AppConstants2['default'].WINDOW_RESIZE, this.resize);
			_get(Object.getPrototypeOf(Page.prototype), 'componentWillUnmount', this).call(this);
		}
	}]);

	return Page;
})(_BasePage3['default']);

exports['default'] = Page;
module.exports = exports['default'];

},{"./../../pager/components/BasePage":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePage.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","domquery":"domquery","element-size":"element-size","react":"react","simple-scrolltop":"simple-scrolltop"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PagesContainer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasePager2 = require('./../../pager/components/BasePager');

var _BasePager3 = _interopRequireDefault(_BasePager2);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

var _Home = require('./pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _WorkOfArt = require('./pages/WorkOfArt');

var _WorkOfArt2 = _interopRequireDefault(_WorkOfArt);

var _Architecture = require('./pages/Architecture');

var _Architecture2 = _interopRequireDefault(_Architecture);

var _Quintessentially = require('./pages/Quintessentially');

var _Quintessentially2 = _interopRequireDefault(_Quintessentially);

var _Eclectic = require('./pages/Eclectic');

var _Eclectic2 = _interopRequireDefault(_Eclectic);

var _Stylish = require('./pages/Stylish');

var _Stylish2 = _interopRequireDefault(_Stylish);

var PagesContainer = (function (_BasePager) {
	_inherits(PagesContainer, _BasePager);

	function PagesContainer(props) {
		_classCallCheck(this, PagesContainer);

		_get(Object.getPrototypeOf(PagesContainer.prototype), 'constructor', this).call(this, props);
		this.didHasherChange = this.didHasherChange.bind(this);
	}

	_createClass(PagesContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
			_get(Object.getPrototypeOf(PagesContainer.prototype), 'componentWillMount', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AppStore2['default'].off(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
			_get(Object.getPrototypeOf(PagesContainer.prototype), 'componentWillUnmount', this).call(this);
		}
	}, {
		key: 'didHasherChange',
		value: function didHasherChange() {
			var hash = _Router2['default'].getNewHash();
			var type = undefined;

			switch (hash.parent) {
				case 'work-of-art':
					type = _WorkOfArt2['default'];
					break;
				case 'architecture':
					type = _Architecture2['default'];
					break;
				case 'quintessentially':
					type = _Quintessentially2['default'];
					break;
				case 'eclectic':
					type = _Eclectic2['default'];
					break;
				case 'stylish':
					type = _Stylish2['default'];
					break;
				default:
					type = _Home2['default'];
			}
			this.setupNewComponent(hash.parent, type);
		}
	}]);

	return PagesContainer;
})(_BasePager3['default']);

exports['default'] = PagesContainer;
module.exports = exports['default'];

},{"./../../pager/components/BasePager":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./pages/Architecture":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Architecture.js","./pages/Eclectic":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Eclectic.js","./pages/Home":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Home.js","./pages/Quintessentially":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Quintessentially.js","./pages/Stylish":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Stylish.js","./pages/WorkOfArt":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/WorkOfArt.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Architecture.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _simpleScrolltop = require('simple-scrolltop');

var _simpleScrolltop2 = _interopRequireDefault(_simpleScrolltop);

var _elementSize = require('element-size');

var _elementSize2 = _interopRequireDefault(_elementSize);

var _Helpers = require('./../../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var Architecture = (function (_Page) {
	_inherits(Architecture, _Page);

	function Architecture(props) {
		_classCallCheck(this, Architecture);

		_get(Object.getPrototypeOf(Architecture.prototype), 'constructor', this).call(this, props);

		this.pageHeight = 0;
		this.currentScrollPos = 0;
	}

	_createClass(Architecture, [{
		key: 'render',
		value: function render() {

			var content = _AppStore2['default'].pageContent();
			var videos = content.videos.map(function (item, index) {

				var side = _Utils2['default'].IsEven(index) ? 'left' : 'right';
				var classes = 'video-item clear-float ' + side;
				var screenshotPath = 'image/video-screens/' + item.imgname;
				return _react2['default'].createElement(
					'div',
					{ key: index, className: classes },
					_react2['default'].createElement(
						'div',
						{ className: 'title' },
						item.title
					),
					_react2['default'].createElement(
						'div',
						{ className: 'screenshot' },
						_react2['default'].createElement('img', { src: screenshotPath })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'description' },
						item.description
					)
				);
			});

			return this.getBasePageDom(_react2['default'].createElement(
				'div',
				{ className: 'inside-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'videos-container' },
					videos
				)
			));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			var totalFrames = 159;
			var bagImages = _Helpers2['default'].getFrameImagesArray(totalFrames, 'image/bag-sequence/turn_', 'jpg');
			var mc = PIXI.extras.MovieClip.fromImages(bagImages);
			mc.anchor.x = 0.5;
			mc.anchor.y = 0.5;
			mc.gotoAndStop(0);
			this.container.addChild(mc);

			this.bg = {
				mc: mc,
				totalFrames: totalFrames
			};

			this.videoItems = [];
			var items = (0, _domquery2['default'])(this.parent).select('.video-item');
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				this.videoItems[i] = {
					el: item
				};
			};

			_get(Object.getPrototypeOf(Architecture.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'updateParallaxItems',
		value: function updateParallaxItems() {
			var windowH = _AppStore2['default'].Window.h;
			var relativeY = this.currentScrollPos / this.pageHeight;
			for (var i = 0; i < this.videoItems.length; i++) {
				var item = this.videoItems[i];
				if (item.y == undefined) return;
				var posY = this.pos(0, -1000, relativeY, 0);
				TweenMax.set(item.el, { y: posY, force3D: true });
			};
		}
	}, {
		key: 'pos',
		value: function pos(base, range, relY, offset) {
			return base + this.limit(0, 1, relY - offset) * range;
		}
	}, {
		key: 'limit',
		value: function limit(min, max, value) {
			return Math.max(min, Math.min(max, value));
		}
	}, {
		key: 'update',
		value: function update() {
			var windowH = _AppStore2['default'].Window.h;

			// get scrolltop position
			this.currentScrollPos = (0, _simpleScrolltop2['default'])();

			// update mc current frame
			var currentFrame = Math.floor(this.currentScrollPos / this.pageHeight * this.bg.totalFrames);
			if (currentFrame > this.bg.totalFrames) currentFrame = this.bg.totalFrames;
			if (currentFrame < 0) currentFrame = 0;
			this.bg.mc.gotoAndStop(currentFrame);

			// this.updateParallaxItems()

			_get(Object.getPrototypeOf(Architecture.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var _this = this;

			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			var parentSize = (0, _elementSize2['default'])(this.parent);
			var resizeVals = _Utils2['default'].ResizePositionProportionally(windowW, windowH, _AppConstants2['default'].MEDIA_GLOBAL_W, _AppConstants2['default'].MEDIA_GLOBAL_H);

			this.bg.mc.x = windowW >> 1;
			this.bg.mc.y = windowH >> 1;
			this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale;

			setTimeout(function () {
				_this.pageHeight = 0;
				var scrollt = (0, _simpleScrolltop2['default'])();
				for (var i = 0; i < _this.videoItems.length; i++) {
					var item = _this.videoItems[i];
					var itemSize = (0, _elementSize2['default'])(item.el);
					var h = itemSize[1];
					item.size = itemSize;
					item.top = item.el.getBoundingClientRect().top;
					item.top += scrollt;
					item.y = 0;
					_this.pageHeight += h;
				};
				_this.pageHeight -= windowH;
			}, 0);

			_get(Object.getPrototypeOf(Architecture.prototype), 'resize', this).call(this);
		}
	}]);

	return Architecture;
})(_Page3['default']);

exports['default'] = Architecture;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","element-size":"element-size","react":"react","simple-scrolltop":"simple-scrolltop"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Eclectic.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var Eclectic = (function (_Page) {
	_inherits(Eclectic, _Page);

	function Eclectic(props) {
		_classCallCheck(this, Eclectic);

		_get(Object.getPrototypeOf(Eclectic.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Eclectic, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Eclectic.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(Eclectic.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Eclectic.prototype), 'resize', this).call(this);
		}
	}]);

	return Eclectic;
})(_Page3['default']);

exports['default'] = Eclectic;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Home.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _Helpers = require('./../../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var Home = (function (_Page) {
	_inherits(Home, _Page);

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return this.getBasePageDom(_react2['default'].createElement('div', null));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.videosContainer = new PIXI.Container();
			this.videoSprites = [];
			var videoUrls = ['video/home_a_1_1.mp4', 'video/home_a_1_1.mp4', 'video/home_a_1_1.mp4'];
			for (var i = 0; i < 3; i++) {
				var videoSprt = _Helpers2['default'].getPXVideo(videoUrls[i], 320, 510);
				this.videoSprites[i] = videoSprt;
				this.videosContainer.addChild(videoSprt);
			};

			this.container.addChild(this.videosContainer);

			_get(Object.getPrototypeOf(Home.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'update',
		value: function update() {
			_get(Object.getPrototypeOf(Home.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			var videoH = this.videoSprites[0].height;
			this.videosContainer.size = [windowW * 0.8, videoH];

			this.videosContainer.x = (windowW >> 1) - (this.videosContainer.size[0] >> 1);
			this.videosContainer.y = (windowH >> 1) - (this.videosContainer.size[1] >> 1) - windowH * 0.01;

			this.videoSprites[1].x = (this.videosContainer.size[0] >> 1) - (this.videoSprites[1].width >> 1);
			this.videoSprites[2].x = this.videosContainer.size[0] - this.videoSprites[1].width;

			_get(Object.getPrototypeOf(Home.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			for (var i = 0; i < this.videoSprites.length; i++) {
				var videoSprt = this.videoSprites[i];
				this.videosContainer.removeChild(videoSprt);
				_Utils2['default'].DestroyVideoTexture(videoSprt.texture);
				videoSprt.texture.destroy();
			};
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.destroy();
			_get(Object.getPrototypeOf(Home.prototype), 'componentWillUnmount', this).call(this);
		}
	}]);

	return Home;
})(_Page3['default']);

exports['default'] = Home;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Quintessentially.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _Helpers = require('./../../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var Quintessentially = (function (_Page) {
	_inherits(Quintessentially, _Page);

	function Quintessentially(props) {
		_classCallCheck(this, Quintessentially);

		_get(Object.getPrototypeOf(Quintessentially.prototype), 'constructor', this).call(this, props);

		this.mouseMove = this.mouseMove.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.stageMouseOut = this.stageMouseOut.bind(this);
		this.mouse = { x: 0, y: 0 };
		this.currentScrollPos = 0;
		this.dragVars = {
			startPos: 0,
			force: 0.1,
			direction: 1,
			active: false
		};
	}

	_createClass(Quintessentially, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.parent = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			var totalFrames = 159;
			var bagImages = _Helpers2['default'].getFrameImagesArray(totalFrames, 'image/threesixty/turn_', 'jpg');
			var mc = PIXI.extras.MovieClip.fromImages(bagImages);
			mc.anchor.x = 0.5;
			mc.anchor.y = 0.5;
			mc.gotoAndStop(0);
			this.container.addChild(mc);

			this.bg = {
				mc: mc,
				totalFrames: totalFrames,
				currentFrame: 0
			};

			(0, _domquery2['default'])(this.parent).on('mousedown', this.mouseDown);
			(0, _domquery2['default'])(this.parent).on('mouseup', this.mouseUp);
			(0, _domquery2['default'])(document).on('mouseout', this.stageMouseOut);

			_get(Object.getPrototypeOf(Quintessentially.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'mouseDown',
		value: function mouseDown(e) {
			(0, _domquery2['default'])(window).on('mousemove', this.mouseMove);
			this.dragVars.active = true;
			this.dragVars.startPos = e.clientX;
		}
	}, {
		key: 'mouseUp',
		value: function mouseUp() {
			this.disableDrag();
		}
	}, {
		key: 'stageMouseOut',
		value: function stageMouseOut(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName == "HTML") {
				this.disableDrag();
			}
		}
	}, {
		key: 'mouseMove',
		value: function mouseMove(e) {
			var windowW = _AppStore2['default'].Window.w;
			this.mouse.x = e.clientX;
			this.mouse.y = e.clientY;

			this.dragVars.direction = this.mouse.x > this.dragVars.startPos ? 1 : -1;
			var distance = Math.abs(this.mouse.x - this.dragVars.startPos) / windowW;

			this.dragVars.force += 7 * this.dragVars.direction * Math.min(distance, 100);
		}
	}, {
		key: 'disableDrag',
		value: function disableDrag() {
			(0, _domquery2['default'])(window).off('mousemove', this.mouseMove);
			this.dragVars.active = false;
		}
	}, {
		key: 'update',
		value: function update() {
			var windowW = _AppStore2['default'].Window.w;

			this.dragVars.force += (0.000001 - this.dragVars.force) * 0.2;

			// update mc current frame
			var newFrame = Math.floor(this.bg.currentFrame + this.dragVars.force);
			this.bg.currentFrame = newFrame;
			if (this.bg.currentFrame > this.bg.totalFrames) this.bg.currentFrame = 0;
			if (this.bg.currentFrame < 0) this.bg.currentFrame = this.bg.totalFrames;
			this.bg.mc.gotoAndStop(this.bg.currentFrame);

			_get(Object.getPrototypeOf(Quintessentially.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			var resizeVals = _Utils2['default'].ResizePositionProportionally(windowW, windowH, _AppConstants2['default'].MEDIA_GLOBAL_W, _AppConstants2['default'].MEDIA_GLOBAL_H);

			this.bg.mc.x = windowW >> 1;
			this.bg.mc.y = windowH >> 1;
			this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale;

			_get(Object.getPrototypeOf(Quintessentially.prototype), 'resize', this).call(this);
		}
	}]);

	return Quintessentially;
})(_Page3['default']);

exports['default'] = Quintessentially;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Stylish.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var Stylish = (function (_Page) {
	_inherits(Stylish, _Page);

	function Stylish(props) {
		_classCallCheck(this, Stylish);

		_get(Object.getPrototypeOf(Stylish.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Stylish, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Stylish.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(Stylish.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Stylish.prototype), 'resize', this).call(this);
		}
	}]);

	return Stylish;
})(_Page3['default']);

exports['default'] = Stylish;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/WorkOfArt.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page2 = require('./../Page');

var _Page3 = _interopRequireDefault(_Page2);

var _AppStore = require('./../../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppConstants = require('./../../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var WorkOfArt = (function (_Page) {
	_inherits(WorkOfArt, _Page);

	function WorkOfArt(props) {
		_classCallCheck(this, WorkOfArt);

		_get(Object.getPrototypeOf(WorkOfArt.prototype), 'constructor', this).call(this, props);
	}

	_createClass(WorkOfArt, [{
		key: 'render',
		value: function render() {

			return this.getBasePageDom(_react2['default'].createElement('div', null));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(WorkOfArt.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(WorkOfArt.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(WorkOfArt.prototype), 'resize', this).call(this);
		}
	}]);

	return WorkOfArt;
})(_Page3['default']);

exports['default'] = WorkOfArt;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	WINDOW_RESIZE: 'WINDOW_RESIZE',
	CHANGE_AMBIENT: 'CHANGE_AMBIENT',

	LANDSCAPE: 'LANDSCAPE',
	PORTRAIT: 'PORTRAIT',

	MEDIA_GLOBAL_W: 1920,
	MEDIA_GLOBAL_H: 1080,

	ADD_PX_CHILD: 'ADD_PX_CHILD',
	REMOVE_PX_CHILD: 'REMOVE_PX_CHILD',

	OVERALL_MARGIN: 40,

	MIN_MIDDLE_W: 960,
	MQ_XSMALL: 320,
	MQ_SMALL: 480,
	MQ_MEDIUM: 768,
	MQ_LARGE: 1024,
	MQ_XLARGE: 1280,
	MQ_XXLARGE: 1680
};
module.exports = exports['default'];

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/dispatchers/AppDispatcher.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var AppDispatcher = (0, _objectAssign2['default'])(new _flux2['default'].Dispatcher(), {
	handleViewAction: function handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

exports['default'] = AppDispatcher;
module.exports = exports['default'];

},{"flux":"flux","object-assign":"object-assign","react-mixin":"react-mixin"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Helpers = {

    getPXVideo: function getPXVideo(url, width, height, vars) {
        var texture = PIXI.Texture.fromVideo(url);
        texture.baseTexture.source.setAttribute("loop", true);
        var videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = width;
        videoSprite.height = height;
        return videoSprite;
    },

    removeChildrenFromContainer: function removeChildrenFromContainer(container) {
        var children = container.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            container.removeChild(child);
        };
    },

    getFrameImagesArray: function getFrameImagesArray(frames, baseurl, ext) {
        var array = [];
        for (var i = 0; i <= frames; i++) {
            var url = baseurl + i + '.' + ext;
            array[i] = url;
        };
        return array;
    }

};

exports["default"] = Helpers;
module.exports = exports["default"];

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Polyfills.js":[function(require,module,exports){
"use strict";

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/GlobalEvents.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _AppActions = require('./../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var GlobalEvents = (function () {
	function GlobalEvents() {
		_classCallCheck(this, GlobalEvents);
	}

	_createClass(GlobalEvents, [{
		key: 'init',
		value: function init() {
			window.addEventListener('resize', this.resize);
		}
	}, {
		key: 'resize',
		value: function resize() {
			_AppActions2['default'].windowResize(window.innerWidth, window.innerHeight);
		}
	}]);

	return GlobalEvents;
})();

exports['default'] = GlobalEvents;
module.exports = exports['default'];

},{"./../actions/AppActions":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Preloader.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Preloader = (function () {
	function Preloader() {
		_classCallCheck(this, Preloader);

		this.queue = new createjs.LoadQueue();
		this.queue.on("complete", this.onManifestLoadCompleted, this);
		this.currentLoadedCallback = undefined;
		this.allManifests = [];
	}

	_createClass(Preloader, [{
		key: "load",
		value: function load(manifest, onLoaded) {

			if (this.allManifests.length > 0) {
				for (var i = 0; i < this.allManifests.length; i++) {
					var m = this.allManifests[i];
					if (m.length == manifest.length && m[0].id == manifest[0].id && m[m.length - 1].id == manifest[manifest.length - 1].id) {
						onLoaded();
						return;
					}
				};
			}
			this.allManifests.push(manifest);
			this.currentLoadedCallback = onLoaded;
			this.queue.loadManifest(manifest);
		}
	}, {
		key: "onManifestLoadCompleted",
		value: function onManifestLoadCompleted() {
			this.currentLoadedCallback();
		}
	}, {
		key: "getContentById",
		value: function getContentById(id) {
			return this.queue.getResult(id);
		}
	}, {
		key: "getImageURL",
		value: function getImageURL(id) {
			return this.getContentById(id).getAttribute("src");
		}
	}]);

	return Preloader;
})();

exports["default"] = Preloader;
module.exports = exports["default"];

},{"./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _hasher = require('hasher');

var _hasher2 = _interopRequireDefault(_hasher);

var _AppActions = require('./../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _crossroads = require('crossroads');

var _crossroads2 = _interopRequireDefault(_crossroads);

var _AppStore = require('./../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var Router = (function () {
	function Router() {
		_classCallCheck(this, Router);
	}

	_createClass(Router, [{
		key: 'init',
		value: function init() {
			this.routing = _AppStore2['default'].Data.routing;
			this.newHashFounded = false;
			_hasher2['default'].newHash = undefined;
			_hasher2['default'].oldHash = undefined;
			_hasher2['default'].initialized.add(this._didHasherChange.bind(this));
			_hasher2['default'].changed.add(this._didHasherChange.bind(this));
			this._setupCrossroads();
		}
	}, {
		key: 'beginRouting',
		value: function beginRouting() {
			_hasher2['default'].init();
		}
	}, {
		key: '_setupCrossroads',
		value: function _setupCrossroads() {
			var basicSection = _crossroads2['default'].addRoute('{page}', this._onFirstDegreeURLHandler.bind(this), 3);
			basicSection.rules = {
				page: [' ', 'work-of-art', 'works', 'contact'] //valid sections
			};
		}
	}, {
		key: '_onFirstDegreeURLHandler',
		value: function _onFirstDegreeURLHandler(pageId) {
			this._assignRoute(pageId);
		}
	}, {
		key: '_onDefaultURLHandler',
		value: function _onDefaultURLHandler() {
			// this._sendToDefault()
			this._assignRoute('');
		}
	}, {
		key: '_assignRoute',
		value: function _assignRoute(id) {
			var hash = _hasher2['default'].getHash();
			var parts = this._getURLParts(hash);
			this._updatePageRoute(hash, parts, parts[0], id);
			this.newHashFounded = true;
		}
	}, {
		key: '_getURLParts',
		value: function _getURLParts(url) {
			var hash = url;
			return hash.split('/');
		}
	}, {
		key: '_updatePageRoute',
		value: function _updatePageRoute(hash, parts, parent, targetId) {
			_hasher2['default'].oldHash = _hasher2['default'].newHash;
			_hasher2['default'].newHash = {
				hash: hash,
				parts: parts,
				parent: parent,
				targetId: targetId
			};
			_AppActions2['default'].pageHasherChanged();
		}
	}, {
		key: '_didHasherChange',
		value: function _didHasherChange(newHash, oldHash) {
			this.newHashFounded = false;
			_crossroads2['default'].parse(newHash);
			if (this.newHashFounded) return;
			// If URL don't match a pattern, send to default
			this._onDefaultURLHandler();
		}
	}, {
		key: '_sendToDefault',
		value: function _sendToDefault() {
			_hasher2['default'].setHash(_AppStore2['default'].defaultRoute());
		}
	}], [{
		key: 'getBaseURL',
		value: function getBaseURL() {
			return document.URL.split("#")[0];
		}
	}, {
		key: 'getHash',
		value: function getHash() {
			return _hasher2['default'].getHash();
		}
	}, {
		key: 'getRoutes',
		value: function getRoutes() {
			return _AppStore2['default'].Data.routing;
		}
	}, {
		key: 'getNewHash',
		value: function getNewHash() {
			return _hasher2['default'].newHash;
		}
	}, {
		key: 'getOldHash',
		value: function getOldHash() {
			return _hasher2['default'].oldHash;
		}
	}, {
		key: 'setHash',
		value: function setHash(hash) {
			_hasher2['default'].setHash(hash);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"./../actions/AppActions":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","crossroads":"crossroads","hasher":"hasher"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _AppDispatcher = require('./../dispatchers/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = require('./../constants/AppConstants');

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Router = require('./../services/Router');

var _Router2 = _interopRequireDefault(_Router);

function _pageRouteIdChanged(id) {}
function _getPageContent() {
    var hashObj = _Router2['default'].getNewHash();
    var hash = hashObj.hash.length < 1 ? '/' : hashObj.hash;
    var content = AppStore.Data.routing[hash];
    return content;
}
function _getMenuContent() {
    return AppStore.Data.menu;
}
function _getMenuItemById(id) {

    var menuItems = AppStore.Data.menu;
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id == id) {
            return item;
        }
    };
}
function _getCurrentPageMenuItem() {

    var hashObj = _Router2['default'].getNewHash();
    var id = hashObj.hash == '' ? 'home' : hashObj.hash;

    var menuItems = AppStore.Data.menu;
    var item;
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id == id) {
            item = menuItems[i];
        }
    };

    return item == undefined ? { id: 'home' } : item;
}
function _getAppData() {
    return AppStore.Data;
}
function _getDefaultRoute() {
    return AppStore.Data['default-route'];
}
function _getGlobalContent() {
    return AppStore.Data.content;
}
function _windowWidthHeight() {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    };
}

var AppStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
    emitChange: function emitChange(type, item) {
        this.emit(type, item);
    },
    pageContent: function pageContent() {
        return _getPageContent();
    },
    menuContent: function menuContent() {
        return _getMenuContent();
    },
    getCurrentPageMenuItem: function getCurrentPageMenuItem() {
        return _getCurrentPageMenuItem();
    },
    getMenuItemById: function getMenuItemById(id) {
        return _getMenuItemById(id);
    },
    appData: function appData() {
        return _getAppData();
    },
    defaultRoute: function defaultRoute() {
        return _getDefaultRoute();
    },
    globalContent: function globalContent() {
        return _getGlobalContent();
    },
    Window: function Window() {
        return _windowWidthHeight();
    },
    Orientation: _AppConstants2['default'].LANDSCAPE,
    dispatcherIndex: _AppDispatcher2['default'].register(function (payload) {
        var action = payload.action;
        switch (action.actionType) {
            case _AppConstants2['default'].PAGE_HASHER_CHANGED:
                _pageRouteIdChanged(action.item);
                AppStore.emitChange(action.actionType);
                break;
            case _AppConstants2['default'].WINDOW_RESIZE:
                AppStore.Window.w = action.item.windowW;
                AppStore.Window.h = action.item.windowH;
                AppStore.Orientation = AppStore.Window.w > AppStore.Window.h ? _AppConstants2['default'].LANDSCAPE : _AppConstants2['default'].PORTRAIT;
                AppStore.emitChange(action.actionType);
                break;
            default:
                AppStore.emitChange(action.actionType, action.item);
        }
        return true;
    })
});

window.AppStore = AppStore;

exports['default'] = AppStore;
module.exports = exports['default'];

},{"./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../dispatchers/AppDispatcher":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/dispatchers/AppDispatcher.js","./../services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","eventemitter2":"eventemitter2","object-assign":"object-assign"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/svg/SVGComponent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SVGComponent = (function (_React$Component) {
  _inherits(SVGComponent, _React$Component);

  function SVGComponent() {
    _classCallCheck(this, SVGComponent);

    _get(Object.getPrototypeOf(SVGComponent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SVGComponent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'svg',
        this.props,
        this.props.children
      );
    }
  }]);

  return SVGComponent;
})(_react2['default'].Component);

exports['default'] = SVGComponent;
module.exports = exports['default'];

},{"react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Autobind.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _is = require('is');

var _is2 = _interopRequireDefault(_is);

function getAllMethods(obj) {
	return Object.getOwnPropertyNames(obj).filter(function (key) {
		return _is2['default'].fn(obj[key]);
	});
}

function autoBind(obj) {
	// console.log('obj -----', obj)
	getAllMethods(obj.constructor.prototype).forEach(function (mtd) {
		// console.log(mtd)
		obj[mtd] = obj[mtd].bind(obj);
	});
}

exports['default'] = autoBind;
module.exports = exports['default'];

},{"is":"is"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'NormalizeMouseCoords',
		value: function NormalizeMouseCoords(e, objWrapper) {
			var posx = 0;
			var posy = 0;
			if (!e) var e = window.event;
			if (e.pageX || e.pageY) {
				posx = e.pageX;
				posy = e.pageY;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			objWrapper.x = posx;
			objWrapper.y = posy;
			return objWrapper;
		}
	}, {
		key: 'ResizePositionProportionally',
		value: function ResizePositionProportionally(windowW, windowH, contentW, contentH) {
			var aspectRatio = contentW / contentH;
			var scale = windowW / windowH < aspectRatio ? windowH / contentH * 1 : windowW / contentW * 1;
			var newW = contentW * scale;
			var newH = contentH * scale;
			var css = {
				width: newW,
				height: newH,
				left: (windowW >> 1) - (newW >> 1),
				top: (windowH >> 1) - (newH >> 1),
				scale: scale
			};

			return css;
		}
	}, {
		key: 'DestroyVideo',
		value: function DestroyVideo(video) {
			video.pause();
			video.src = '';
			var children = video.childNodes;
			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				child.setAttribute('src', '');
				// Working with a polyfill or use jquery
				child.remove();
			}
		}
	}, {
		key: 'DestroyVideoTexture',
		value: function DestroyVideoTexture(texture) {
			var video = texture.baseTexture.source;
			Utils.DestroyVideo(video);
		}
	}, {
		key: 'IsEven',
		value: function IsEven(n) {
			return n % 2 == 0;
		}
	}]);

	return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/raf.js":[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

'use strict';

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
})();

},{}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/Pager.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _eventemitter2 = require('eventemitter2');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

// Actions
var PagerActions = {
    onPageReady: function onPageReady(hash) {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_IS_READY,
            item: hash
        });
    },
    onTransitionOutComplete: function onTransitionOutComplete() {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_TRANSITION_OUT_COMPLETE,
            item: undefined
        });
    },
    pageTransitionDidFinish: function pageTransitionDidFinish() {
        PagerDispatcher.handlePagerAction({
            type: PagerConstants.PAGE_TRANSITION_DID_FINISH,
            item: undefined
        });
    }
};

// Constants
var PagerConstants = {
    PAGE_IS_READY: 'PAGE_IS_READY',
    PAGE_TRANSITION_IN: 'PAGE_TRANSITION_IN',
    PAGE_TRANSITION_OUT: 'PAGE_TRANSITION_OUT',
    PAGE_TRANSITION_OUT_COMPLETE: 'PAGE_TRANSITION_OUT_COMPLETE',
    PAGE_TRANSITION_IN_PROGRESS: 'PAGE_TRANSITION_IN_PROGRESS',
    PAGE_TRANSITION_DID_FINISH: 'PAGE_TRANSITION_DID_FINISH'
};

// Dispatcher
var PagerDispatcher = (0, _objectAssign2['default'])(new _flux2['default'].Dispatcher(), {
    handlePagerAction: function handlePagerAction(action) {
        this.dispatch(action);
    }
});

// Store
var PagerStore = (0, _objectAssign2['default'])({}, _eventemitter2.EventEmitter2.prototype, {
    firstPageTransition: true,
    pageTransitionState: undefined,
    dispatcherIndex: PagerDispatcher.register(function (payload) {
        var actionType = payload.type;
        var item = payload.item;
        switch (actionType) {
            case PagerConstants.PAGE_IS_READY:
                PagerStore.pageTransitionState = PagerConstants.PAGE_TRANSITION_IN_PROGRESS;
                var type = PagerStore.firstPageTransition ? PagerConstants.PAGE_TRANSITION_IN : PagerConstants.PAGE_TRANSITION_OUT;
                PagerStore.emit(type);
                break;
            case PagerConstants.PAGE_TRANSITION_OUT_COMPLETE:
                var type = PagerConstants.PAGE_TRANSITION_IN;
                PagerStore.emit(type);
                break;
            case PagerConstants.PAGE_TRANSITION_DID_FINISH:
                if (PagerStore.firstPageTransition) PagerStore.firstPageTransition = false;
                PagerStore.pageTransitionState = PagerConstants.PAGE_TRANSITION_DID_FINISH;
                PagerStore.emit(actionType);
                break;
        }
        return true;
    })
});

exports['default'] = {
    PagerStore: PagerStore,
    PagerActions: PagerActions,
    PagerConstants: PagerConstants,
    PagerDispatcher: PagerDispatcher
};
module.exports = exports['default'];

},{"eventemitter2":"eventemitter2","flux":"flux","object-assign":"object-assign","react-mixin":"react-mixin"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BaseComponent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Autobind = require('./../../app/utils/Autobind');

var _Autobind2 = _interopRequireDefault(_Autobind);

var BaseComponent = (function (_React$Component) {
	_inherits(BaseComponent, _React$Component);

	function BaseComponent(props) {
		_classCallCheck(this, BaseComponent);

		_get(Object.getPrototypeOf(BaseComponent.prototype), 'constructor', this).call(this, props);
		(0, _Autobind2['default'])(this);
	}

	_createClass(BaseComponent, [{
		key: 'render',
		value: function render() {
			return true;
		}
	}]);

	return BaseComponent;
})(_react2['default'].Component);

exports['default'] = BaseComponent;
module.exports = exports['default'];

},{"./../../app/utils/Autobind":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Autobind.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var BasePage = (function (_React$Component) {
	_inherits(BasePage, _React$Component);

	function BasePage(props) {
		_classCallCheck(this, BasePage);

		_get(Object.getPrototypeOf(BasePage.prototype), 'constructor', this).call(this, props);
		this.didTransitionInComplete = this.didTransitionInComplete.bind(this);
		this.didTransitionOutComplete = this.didTransitionOutComplete.bind(this);
		this.tlIn = new TimelineMax({
			onComplete: this.didTransitionInComplete
		});
		this.tlOut = new TimelineMax({
			onComplete: this.didTransitionOutComplete
		});
	}

	_createClass(BasePage, [{
		key: 'render',
		value: function render() {
			_get(Object.getPrototypeOf(BasePage.prototype), 'render', this).call(this);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.container = new PIXI.Container();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			this.resize();
			this.setupAnimations();
			setTimeout(function () {
				return _this.props.isReady(_this.props.hash);
			}, 0);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'willTransitionIn',
		value: function willTransitionIn() {
			this.tlIn.timeScale(2).play(0);
		}
	}, {
		key: 'willTransitionOut',
		value: function willTransitionOut() {
			this.tlIn.pause();
			this.tlOut.timeScale(2).play(0);
		}
	}, {
		key: 'didTransitionInComplete',
		value: function didTransitionInComplete() {
			var _this2 = this;

			setTimeout(function () {
				return _this2.props.didTransitionInComplete();
			}, 0);
		}
	}, {
		key: 'didTransitionOutComplete',
		value: function didTransitionOutComplete() {
			var _this3 = this;

			setTimeout(function () {
				return _this3.props.didTransitionOutComplete();
			}, 0);
		}
	}, {
		key: 'resize',
		value: function resize() {}
	}, {
		key: 'forceUnmount',
		value: function forceUnmount() {
			this.tlIn.pause(0);
			this.tlOut.pause(0);
			this.didTransitionOutComplete();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.tlIn.clear();
			this.tlOut.clear();
		}
	}]);

	return BasePage;
})(_react2['default'].Component);

exports['default'] = BasePage;
module.exports = exports['default'];

},{"react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePager.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pager = require('./../Pager');

var _lodashStringCapitalize = require('lodash/String/capitalize');

var _lodashStringCapitalize2 = _interopRequireDefault(_lodashStringCapitalize);

var BasePager = (function (_React$Component) {
	_inherits(BasePager, _React$Component);

	function BasePager(props) {
		_classCallCheck(this, BasePager);

		_get(Object.getPrototypeOf(BasePager.prototype), 'constructor', this).call(this, props);
		this.currentPageDivRef = 'page-b';
		this.willPageTransitionIn = this.willPageTransitionIn.bind(this);
		this.willPageTransitionOut = this.willPageTransitionOut.bind(this);
		this.components = {
			'new-component': undefined,
			'old-component': undefined
		};
	}

	_createClass(BasePager, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'pages-container' },
				_react2['default'].createElement('div', { style: this.divStyle, ref: 'page-a' }),
				_react2['default'].createElement('div', { style: this.divStyle, ref: 'page-b' })
			);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_Pager.PagerStore.on(_Pager.PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn);
			_Pager.PagerStore.on(_Pager.PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut);
		}
	}, {
		key: 'setupNewComponent',
		value: function setupNewComponent(hash, Type) {
			var id = (0, _lodashStringCapitalize2['default'])(hash.replace("/", ""));
			this.oldPageDivRef = this.currentPageDivRef;
			this.currentPageDivRef = this.currentPageDivRef === 'page-a' ? 'page-b' : 'page-a';
			var el = _react2['default'].findDOMNode(this.refs[this.currentPageDivRef]);
			var page = _react2['default'].createElement(Type, {
				id: this.currentPageDivRef,
				isReady: this.onPageReady,
				hash: hash,
				didTransitionInComplete: this.didPageTransitionInComplete.bind(this),
				didTransitionOutComplete: this.didPageTransitionOutComplete.bind(this)
			});
			this.components['old-component'] = this.components['new-component'];
			this.components['new-component'] = _react2['default'].render(page, el);
			if (_Pager.PagerStore.pageTransitionState === _Pager.PagerConstants.PAGE_TRANSITION_IN_PROGRESS) {
				this.components['old-component'].forceUnmount();
			}
		}
	}, {
		key: 'onPageReady',
		value: function onPageReady(hash) {
			_Pager.PagerActions.onPageReady(hash);
		}
	}, {
		key: 'willPageTransitionIn',
		value: function willPageTransitionIn() {
			this.switchPagesDivIndex();
			this.components['new-component'].willTransitionIn();
		}
	}, {
		key: 'willPageTransitionOut',
		value: function willPageTransitionOut() {
			this.components['old-component'].willTransitionOut();
		}
	}, {
		key: 'didPageTransitionInComplete',
		value: function didPageTransitionInComplete() {
			_Pager.PagerActions.pageTransitionDidFinish();
			this.unmountComponent('old-component');
		}
	}, {
		key: 'didPageTransitionOutComplete',
		value: function didPageTransitionOutComplete() {
			_Pager.PagerActions.onTransitionOutComplete();
		}
	}, {
		key: 'switchPagesDivIndex',
		value: function switchPagesDivIndex() {
			var newEl = _react2['default'].findDOMNode(this.refs[this.currentPageDivRef]);
			var oldEl = _react2['default'].findDOMNode(this.refs[this.oldPageDivRef]);
			newEl.style.zIndex = 2;
			oldEl.style.zIndex = 1;
		}
	}, {
		key: 'unmountComponent',
		value: function unmountComponent(ref) {
			if (this.components[ref] !== undefined) {
				var id = this.components[ref].props.id;
				var domToRemove = _react2['default'].findDOMNode(this.refs[id]);
				_react2['default'].unmountComponentAtNode(domToRemove);
			}
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.components['new-component'] != undefined) {
				this.components['new-component'].update();
			}
		}
	}, {
		key: 'resize',
		value: function resize() {
			if (this.components['new-component'] != undefined) {
				this.components['new-component'].resize();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_Pager.PagerStore.off(_Pager.PagerConstants.PAGE_TRANSITION_IN, this.willPageTransitionIn);
			_Pager.PagerStore.off(_Pager.PagerConstants.PAGE_TRANSITION_OUT, this.willPageTransitionOut);
			this.unmountComponent('old-component');
			this.unmountComponent('new-component');
		}
	}]);

	return BasePager;
})(_react2['default'].Component);

exports['default'] = BasePager;
module.exports = exports['default'];

},{"./../Pager":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/Pager.js","lodash/String/capitalize":"/Users/panagiotisthomoglou/Projects/lady-dior/node_modules/lodash/String/capitalize.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/www/data/data.json":[function(require,module,exports){
module.exports={
	"content": {
		"mytext": "some global text"
	},

	"menu": [
		{
			"id": "work-of-art",
			"name": "Work of Art",
			"url": "/work-of-art",
			"latin-num": "I"
		},{
			"id": "architecture",
			"name": "Architecture",
			"url": "/architecture",
			"latin-num": "II"
		},{
			"id": "quintessentially",
			"name": "Quintessentially Dior",
			"url": "/quintessentially",
			"latin-num": "III"
		},{
			"id": "eclectic",
			"name": "Eclectic",
			"url": "/eclectic",
			"latin-num": "IV"
		},{
			"id": "stylish",
			"name": "Stylish",
			"url": "/stylish",
			"latin-num": "V"
		}
	],

	"default-route": "",

	"routing": {
		"/": {
			"title": "home page"
		},
		"work-of-art": {
			"title": "work-of-art page"
		},
		"architecture": {
			"title": "architecture page",
			"videos": [
				{
					"title": "LA FORME",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES.",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 2",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "LA FORME 5",
					"description": "LA LIGNE CRÉE LA FORME.\u2028POUR CONSTRUIRE UN SAC LADY DIOR, 130 PIÈCES SONT NÉCESSAIRES. 2",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				}
			]
        },
        "quintessentially": {
        	"title": "quintessentially page"
        },
        "eclectic": {
        	"title": "eclectic page"
        },
        "stylish": {
        	"title": "stylish page"
        }
	}
}
},{}]},{},["/Users/panagiotisthomoglou/Projects/lady-dior/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9FY2xlY3RpYy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRlc3NlbnRpYWxseS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGlzaC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvV29ya09mQXJ0LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29uc3RhbnRzL0FwcENvbnN0YW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9taXhpbnMvSGVscGVycy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9Qb2x5ZmlsbHMuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9HbG9iYWxFdmVudHMuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9QcmVsb2FkZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9Sb3V0ZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zdmcvU1ZHQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvQXV0b2JpbmQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL3JhZi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvUGFnZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZXIuanMiLCJ3d3cv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIChzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcGl0YWxpemU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJpbXBvcnQgQXBwIGZyb20gJ0FwcCdcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuaW1wb3J0IFBhZ2VyIGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgUG9seWZpbGxzIGZyb20gJ1BvbHlmaWxscydcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5pbXBvcnQgUHJlbG9hZCBmcm9tICdQcmVsb2FkZXInXG5pbXBvcnQgRGF0YSBmcm9tICdEYXRhJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXHRpbml0KCkge1xuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cblx0XHRpZiAoJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiBoaXN0b3J5KSB7XG5cdFx0XHQvLyBCYWNrIG9mZiwgYnJvd3NlciwgSSBnb3QgdGhpcy4uLlxuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXHRcdH1cblxuXHRcdHRoaXMub25NYWluRGF0YUxvYWRlZCgpXG5cdH1cblxuXHRvbk1haW5EYXRhTG9hZGVkKCkge1xuXG5cdFx0QXBwU3RvcmUuRGF0YSA9IERhdGFcblx0XHRcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEZyb250Q29udGFpbmVyIGZyb20gJ0Zyb250Q29udGFpbmVyJ1xuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJ1BhZ2VzQ29udGFpbmVyJ1xuaW1wb3J0IFBYQ29udGFpbmVyIGZyb20gJ1BYQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUZW1wbGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdhcHAtdGVtcGxhdGUnPlxuXHRcdFx0XHQ8RnJvbnRDb250YWluZXIgcmVmPSdmcm9udC1jb250YWluZXInIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciByZWY9J3BhZ2VzLWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBYQ29udGFpbmVyIHJlZj0ncHgtY29udGFpbmVyJyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEdsb2JhbEV2ZW50cy5yZXNpemUoKVxuXHRcdHRoaXMuYW5pbWF0ZSgpXG5cdH1cblx0YW5pbWF0ZSgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuXHRcdHRoaXMucmVmc1sncHgtY29udGFpbmVyJ10udXBkYXRlKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snZnJvbnQtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZFBYQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuQUREX1BYX0NISUxELFxuICAgICAgICAgICAgaXRlbTogeyBjaGlsZDpjaGlsZCB9XG4gICAgICAgIH0pICAgIFxuICAgIH0sXG4gICAgcmVtb3ZlUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfVxufVxuXG53aW5kb3cuQXBwQWN0aW9ucyA9IEFwcEFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnQmFzZUNvbXBvbmVudCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnTWVudSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IFNWR0NvbXBvbmVudCBmcm9tICdTVkdDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2Zyb250LWNvbnRhaW5lcicgcmVmPSdmcm9udC1jb250YWluZXInPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuXHRcdFx0XHRcdDxTVkdDb21wb25lbnQgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxODcuMDg2IDczLjg2M1wiPlxuXHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNDEuOTU2LDM5LjYzYy0yLjAyMy0wLjkwMy00LjI2NS0xLjM3My02LjY4Ny0xLjQ4M2wtNi42ODgsMC4zOThjLTEuODA3LDAuMzI1LTMuNTQyLDAuOTc3LTUuMjc3LDEuOTg5Yy0xLjk1MSwxLjE1Ni0zLjU3OCwyLjYwMy00Ljg3OSw0LjMzN2MtMy4zMjUsNC4xNTYtNC41MTksOS4wMzYtMy42MTQsMTQuNzgzYzEuMDEyLDYuMDczLDQuMTU2LDEwLjIyOSw5LjMyNSwxMi4zMjdjMy45NzcsMS42MjYsOC4zODYsMS45NSwxMy4xMjEsMC45MDJjNC41MTgtMC45MzksOC4wOTctMy4xMDgsMTAuODA4LTYuNTA1YzMuMTgxLTQuMDE0LDQuMTkyLTguOTY1LDMtMTQuODIxQzE0OS45MDksNDUuNzc1LDE0Ni44MzYsNDEuNzk5LDE0MS45NTYsMzkuNjN6IE0xNDEuODQ5LDY1LjkwOWMtMS41NTUsMi44OS0zLjkwMyw0LjYyNi03LjEyMSw1LjI0MWMtMy4wNzIsMC41NDEtNS44MTktMC42NTItOC4yNDEtMy41MDhjLTIuMjc3LTIuNzEtMy42ODgtNi4yNTQtNC4wODUtMTAuNjk4Yy0wLjU0Mi00LjQ4MywwLTguMjc4LDEuNDgxLTExLjM4OGMxLjYyNy0zLjQzNCw0LjEyMS01LjI0MSw3LjM3NS01LjU2NWMzLjM2MS0wLjI4OCw2LjE0NSwwLjc5NSw4LjM1LDMuMjU0YzIuMjQxLDIuNDkzLDMuNTA2LDYuMTA5LDMuOTQsMTAuOTg4QzE0My45MDgsNTkuMTEzLDE0My4zNjcsNjIuOTQ1LDE0MS44NDksNjUuOTA5eiBNNDAuNTY2LDAuMzc1SDQuMzEyYy0wLjcyMywwLTEuMDg1LDAuMjE2LTEuMDg1LDAuNzIybDAuMjksMC41NDNsMS40NDYsMC4yODhMOC40NjgsMi4xMWwzLjQzNCwwLjQzM2MyLjQ1OCwwLjU0MywzLjcyMywxLjkxNiwzLjcyMyw0LjE1N3Y1Ny4zMjhjLTAuMDM2LDEuNzczLTAuMjE3LDMuMDc0LTAuNTQyLDMuOTRsLTAuOTAzLDEuMjY3Yy0wLjQ3LDAuNTQxLTEuNDQ2LDAuOTM5LTIuODE5LDEuMTE5bC04Ljg1NiwwLjU0M2MtMS4wMTIsMC0xLjU1NCwwLjI1NC0xLjU1NCwwLjcyNGMwLDAuNDMzLDAuMzYxLDAuNjg2LDEuMTIxLDAuNjg2aDQ2LjIzMWM1LjYwMywwLDEwLjU5MS0xLjA0OCwxNS4wMzctMy4wNzFjNC4xNTctMS45ODksNy43NzEtNC43LDEwLjczNS04LjIwNWMyLjcxMS0zLjMyNyw0LjgwOC03LjA0OSw2LjMyNi0xMS4yNzljMS4zMzctNC4wMTIsMS45ODgtOC4xNjgsMS45ODgtMTIuNDY5YzAtOC4yNDItMS45ODgtMTUuMzYyLTUuOTY0LTIxLjM2M0M2OS40ODMsNS41NDMsNTcuNTU1LDAuMzc1LDQwLjU2NiwwLjM3NXogTTY4LjgzMyw0Ni4yOGMtMS4xOTMsNS41MzEtMy4xNDUsMTAuMDQ5LTUuODU2LDEzLjU5MWMtMS42MjYsMi4xNjktMy4xMDgsMy44NjgtNC41NTQsNS4wNjJjLTEuNjI2LDEuMjY1LTMuNTA2LDIuMzEyLTUuNDk0LDMuMDM1Yy0xLjk4OCwwLjY1MS00LjUxOSwxLjEyMS03LjQ4MywxLjQ0NmwtMTEuMDYsMC4zOThoLTQuNzcxbC0xLjQ0Ni0wLjIxN2MtMC4yODktMC4xODItMC40MzMtMC42ODgtMC40MzMtMS40MTFWNC41MzJsMC4yNTItMS40NDVjMC4yNTMtMC40MzUsMC43OTUtMC42MTUsMS42MjctMC41NDNoNy4zMzdjMTEuODkzLDAsMjAuNDk1LDMuNTQzLDI1LjczNiwxMC43YzIuNzExLDMuNjg3LDQuNjI3LDguMDI0LDUuODkyLDEyLjk3NmMwLjkwNCwzLjQzNSwxLjMzNyw2LjYxNSwxLjMzNyw5LjU3OUM2OS45MTcsMzkuMTYsNjkuNTU2LDQyLjY2Nyw2OC44MzMsNDYuMjh6IE05MC4zNTcsNDQuODM1bDAuOTQzLTAuMTA4bDIuMTEyLTAuNTc5bDEuODgsMC4xODJjMC41NDIsMC4zNjIsMC44MzEsMC45NzcsMC44MzEsMS43NzF2MjEuMDAxbC0wLjQ3LDIuNjAzYy0wLjMyNiwwLjcyMy0xLjE1NywxLjE5Mi0yLjUzLDEuMzcybC0yLjUzLDAuMDc0Yy0wLjc5NSwwLTEuMTU3LDAuMTgtMS4wODQsMC42MTRjMCwwLjI4OCwwLjIxNywwLjQ3LDAuNjUsMC40N2gxOS4yNjZjMC40MzUsMCwwLjY4Ny0wLjExLDAuNjg3LTAuNDM1Yy0wLjA3Mi0wLjM5Ni0wLjUwNi0wLjU3OC0xLjMzNy0wLjU3OGMtMi4zNSwwLTMuODY3LTAuMzI1LTQuNTE5LTAuOTc3Yy0wLjU0Mi0wLjU0MS0wLjgzMS0xLjQ0Ni0wLjgzMS0yLjcxdi0yNi40NmMwLTEuMzAxLTAuMTgxLTIuMDIzLTAuNTQyLTIuMDk1bC0xLjA4NSwwLjEwN2MtMC40MzQsMC4xOC0xLjQxLDAuNjE1LTIuNzgyLDEuNDFjLTIuMjQyLDEuMjY0LTQuODgsMi4yNzctNy44OCwzLjA3MWMtMS4yNjYsMC4zNjEtMS44MDgsMC43Ni0xLjYyNywxLjE5M0w5MC4zNTcsNDQuODM1eiBNMTg2LjEyNyw0Mi45NTVjMC4wNzMsMS4yNjYtMC4yODksMi4yNC0xLjA4NCwzYy0wLjcyMywwLjYxNS0xLjQ0NSwwLjc5NS0yLjA5NiwwLjYxNWMtMC42MTUtMC4xMDgtMS4wODUtMC4zNjEtMS40MS0wLjcyNGwtMS4wMTMtMS4yNjRjLTAuNzk1LTEuMTU4LTEuNTU0LTEuNTItMi40NTgtMS4xOTNjLTEuMDQ4LDAuMjg4LTIuMTMyLDEuMDgzLTMuMjUzLDIuMzQ5Yy0xLjc3MSwxLjg0My0yLjk2NCw0LjAxMi0zLjYxNCw2LjYxNHYxNS4zNjRjMCwxLjM3MiwwLjQ3LDIuMzQ5LDEuNDQ1LDIuOTYzbDIuMjA1LDAuMzk2bDIuMzE0LDAuMjU0YzAuNTQyLDAuMDczLDAuNzU5LDAuMTgyLDAuNzU5LDAuNDdsLTAuMTA4LDAuMjUzbC0wLjYxNSwwLjE4MkgxNTcuODZjLTAuNTc4LDAtMC45MDItMC4xODItMC45MDItMC40N2wwLjU0MS0wLjQzNWwzLjI1NC0wLjI1NGMxLjI2Ni0wLjIxNiwyLjA2LTAuNjQ5LDIuNDk0LTEuMzAxbDAuNTQyLTEuNjI2VjQ2LjQ2MmwtMC4zNjEtMS41OTFsLTAuNjE1LTAuMzYyYy0wLjE4MS0wLjE4LTAuNDctMC4yODgtMC45MDItMC4zNjFjLTAuNTQyLTAuMDM2LTEuMTk0LDAuMDczLTEuODgsMC4zNjFsLTEuODQ0LDAuNTA3bC0xLjA0OC0wLjI1M2MtMC4xODEtMC4yNTQtMC4xMDktMC40MzQsMC4xNDQtMC41NDJsMS41NTUtMC42NTFjMy41NDItMS4wNDgsNi4zOTgtMi4xMzIsOC4zODYtMy4yNTRsMi40NTgtMS4zMzVsMS4wODUsMC4wNzFsMC40MzQsMC45MDJ2Ny45NTRjMi43MTEtNC40MSw0Ljg4LTcuMTIyLDYuMzYxLTguMDI1YzAuOTA0LTAuNTQxLDEuNzcxLTAuOTc3LDIuNDIyLTEuMTU2bDEuMjY2LTAuMTA4YzAuNzk1LTAuMDczLDEuNjk5LDAuMTgsMi43MTEsMC44MzJDMTg1LjMzMyw0MC4yNDQsMTg2LjA1NSw0MS40MzgsMTg2LjEyNyw0Mi45NTV6IE05NS45NDIsMjQuMDUxYy0wLjk3Ni0wLjkwNS0xLjQ0Ni0xLjk4OS0xLjM3NC0zLjI1NGMtMC4wNzItMS4zMzgsMC4zOTgtMi40OTQsMS4zNzQtMy4zOThjMC45MDMtMC45MDQsMS45ODgtMS4zNzQsMy4zMjUtMS4zNzRjMS4yNjYsMCwyLjM4NiwwLjQ3LDMuMjg5LDEuMzc0YzAuOTA0LDAuOTA0LDEuNDEsMi4wNiwxLjQxLDMuMzk4YzAsMS4yNjUtMC41MDYsMi4zNDktMS40MSwzLjI1NGMtMC45MDMsMC45MDMtMi4wMjMsMS4zNzMtMy4yODksMS4zNzNDOTcuOTMxLDI1LjQyNCw5Ni44NDYsMjQuOTU0LDk1Ljk0MiwyNC4wNTF6XCIvPlxuXHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8TWVudSByZWY9J21lbnUnIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBpdGVtID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dGhpcy5yZWZzWydtZW51J10uaGlnaGxpZ2h0QnlJdGVtKGl0ZW0pXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snbWVudSddLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBtZW51RGF0YSA9IEFwcFN0b3JlLm1lbnVDb250ZW50KClcblx0XHR2YXIgbWVudUl0ZW1zID0gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdHZhciBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGlkPXtpdGVtLmlkfSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8YSBocmVmPXtwYXRoVXJsfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0aW4tbnVtXCI+e2l0ZW1bJ2xhdGluLW51bSddfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9J21lbnUnIGlkPSdtZW51Jz4gXG5cdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ21lbnUnXSlcblx0XHRcblx0XHR0aGlzLml0ZW1zID0gW11cblx0XHR2YXIgYnRucyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCdsaScpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnRuID0gYnRuc1tpXVxuXHRcdFx0dGhpcy5pdGVtc1tpXSA9IHtcblx0XHRcdFx0ZWw6IGJ0bixcblx0XHRcdFx0aWQ6IGJ0bi5pZFxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0aGlnaGxpZ2h0QnlJdGVtKGl0ZW0pIHtcblxuXHRcdGlmKGl0ZW0uaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdH07XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRpZihidG4uaWQgPT0gaXRlbS5pZCkge1xuXHRcdFx0XHRkb20oYnRuLmVsKS5hZGRDbGFzcygnZW5hYmxlJylcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLmFkZENsYXNzKCdkaXNhYmxlJylcdFxuXHRcdFx0fSBcblx0XHR9O1xuXHR9XG5cdHJlbW92ZUhpZ2hsaWdodCgpIHtcblxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcGFyZW50Q3NzID0ge1xuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAocGFyZW50U2l6ZVswXSA+PiAxKSArICdweCcsXG5cdFx0XHR0b3A6IHdpbmRvd0ggLSAocGFyZW50U2l6ZVsxXSkgLSBBcHBDb25zdGFudHMuT1ZFUkFMTF9NQVJHSU4gKyAncHgnXG5cdFx0fVxuXHRcdGRvbSh0aGlzLnBhcmVudCkuc3R5bGUocGFyZW50Q3NzKVxuXHR9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQWENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLkFERF9QWF9DSElMRCwgdGhpcy5hZGQpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCwgdGhpcy5yZW1vdmUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1ob2xkZXJcIj48L2NhbnZhcz5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgY2FudmFzID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5jYW52YXMtaG9sZGVyJylbMF1cblx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcigwLCAwLCB7IHZpZXc6Y2FudmFzIH0pXG5cdFx0cmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkZcblxuXHRcdHRoaXMucGl4aSA9IHtcblx0XHRcdGNhbnZhczogY2FudmFzLFxuXHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyLFxuXHRcdFx0c3RhZ2U6IHN0YWdlXG5cdFx0fVxuXHR9XG5cdGFkZChpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLmFkZENoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVtb3ZlKGl0ZW0pIHtcblx0XHR0aGlzLnBpeGkuc3RhZ2UucmVtb3ZlQ2hpbGQoaXRlbS5jaGlsZClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHNjYWxlID0gMVxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3dIICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZXNpemUod2luZG93VyAqIHNjYWxlLCB3aW5kb3dIICogc2NhbGUpXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZW5kZXIodGhpcy5waXhpLnN0YWdlKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQmFzZVBhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IHNjcm9sbHRvcCBmcm9tICdzaW1wbGUtc2Nyb2xsdG9wJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmFkZFBYQ2hpbGQodGhpcy5jb250YWluZXIpIH0sIDApXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXHRcdHRoaXMuZWxlbWVudHNIb2xkZXIgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLmVsZW1lbnRzLWhvbGRlcicpWzBdXG5cdFx0dGhpcy5pbnRyb1NsaWRlID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5pbnRyby1zbGlkZScpWzBdXG5cdFx0dGhpcy5mcm9udEhvbGRlciA9IGRvbSh0aGlzLmludHJvU2xpZGUpLnNlbGVjdCgnLmZyb250LWhvbGRlcicpWzBdXG5cdFx0XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0c2Nyb2xsdG9wKDApXG5cdFx0fSwgMTAwMClcblx0XHRzdXBlci53aWxsVHJhbnNpdGlvbkluKClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5pbnRyb1NsaWRlLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCB7IG9wYWNpdHk6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxJbi50byh0aGlzLmludHJvU2xpZGUsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDMpXG5cdFx0dGhpcy50bEluLmZyb20odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMilcblx0XHR0aGlzLnRsSW4uZnJvbSh0aGlzLmNvbnRhaW5lciwgMSwgeyBhbHBoYTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDIpXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKHRoaXMuY29udGFpbmVyLCAxLCB7IGFscGhhOjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblxuXHRcdHN1cGVyLnNldHVwQW5pbWF0aW9ucygpXG5cdH1cblx0Z2V0QmFzZVBhZ2VEb20oaHRtbCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dmFyIGlkID0gY29udGVudC5pZCArICctcGFnZSdcblxuXHRcdHZhciBmcm9udEhvbGRlcjtcblx0XHRpZihjb250ZW50LmlkID09ICdob21lJykge1xuXHRcdFx0ZnJvbnRIb2xkZXIgPSAnaG9tZSdcblx0XHR9ZWxzZXtcblx0XHRcdGZyb250SG9sZGVyID0gPGRpdiBjbGFzc05hbWU9J3RpdGxlJz57Y29udGVudC5uYW1lfTwvZGl2PlxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPXtpZH0gcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzLWhvbGRlclwiPntodG1sfTwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyb250LWhvbGRlclwiPntmcm9udEhvbGRlcn08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgdGl0bGVTaXplID0gc2l6ZSh0aGlzLmZyb250SG9sZGVyKVxuXHRcdHRoaXMuZnJvbnRIb2xkZXIuc3R5bGUubGVmdCA9ICh3aW5kb3dXID4+IDEpIC0gKHRpdGxlU2l6ZVswXSA+PiAxKSArICdweCdcblx0XHR0aGlzLmZyb250SG9sZGVyLnN0eWxlLnRvcCA9ICh3aW5kb3dIID4+IDEpIC0gKHRpdGxlU2l6ZVsxXSA+PiAxKSArICdweCdcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XG5cdFx0SGVscGVycy5yZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXIodGhpcy5jb250YWluZXIpXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMucmVtb3ZlUFhDaGlsZCh0aGlzLmNvbnRhaW5lcikgfSwgMClcblxuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IFdvcmtPZkFydCBmcm9tICdXb3JrT2ZBcnQnXG5pbXBvcnQgQXJjaGl0ZWN0dXJlIGZyb20gJ0FyY2hpdGVjdHVyZSdcbmltcG9ydCBRdWludGVzc2VudGlhbGx5IGZyb20gJ1F1aW50ZXNzZW50aWFsbHknXG5pbXBvcnQgRWNsZWN0aWMgZnJvbSAnRWNsZWN0aWMnXG5pbXBvcnQgU3R5bGlzaCBmcm9tICdTdHlsaXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0NvbnRhaW5lciBleHRlbmRzIEJhc2VQYWdlciB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2UgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR2YXIgaGFzaCA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0XHR2YXIgdHlwZSA9IHVuZGVmaW5lZFxuXG5cdFx0c3dpdGNoKGhhc2gucGFyZW50KSB7XG5cdFx0XHRjYXNlICd3b3JrLW9mLWFydCc6XG5cdFx0XHRcdHR5cGUgPSBXb3JrT2ZBcnRcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2FyY2hpdGVjdHVyZSc6XG5cdFx0XHRcdHR5cGUgPSBBcmNoaXRlY3R1cmVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3F1aW50ZXNzZW50aWFsbHknOlxuXHRcdFx0XHR0eXBlID0gUXVpbnRlc3NlbnRpYWxseVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZWNsZWN0aWMnOlxuXHRcdFx0XHR0eXBlID0gRWNsZWN0aWNcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3N0eWxpc2gnOlxuXHRcdFx0XHR0eXBlID0gU3R5bGlzaFxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IEhvbWVcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSlcblx0fVxufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgc2Nyb2xsdG9wIGZyb20gJ3NpbXBsZS1zY3JvbGx0b3AnXG5pbXBvcnQgc2l6ZSBmcm9tICdlbGVtZW50LXNpemUnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucGFnZUhlaWdodCA9IDBcblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIHZpZGVvcyA9IGNvbnRlbnQudmlkZW9zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRcblx0XHRcdHZhciBzaWRlID0gVXRpbHMuSXNFdmVuKGluZGV4KSA/ICdsZWZ0JyA6ICdyaWdodCdcblx0XHRcdHZhciBjbGFzc2VzID0gJ3ZpZGVvLWl0ZW0gY2xlYXItZmxvYXQgJyArIHNpZGVcblx0XHRcdHZhciBzY3JlZW5zaG90UGF0aCA9ICdpbWFnZS92aWRlby1zY3JlZW5zLycgKyBpdGVtLmltZ25hbWVcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbnNob3RcIj48aW1nIHNyYz17c2NyZWVuc2hvdFBhdGh9IC8+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntpdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5zaWRlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpZGVvcy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7dmlkZW9zfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdCAgICB2YXIgdG90YWxGcmFtZXMgPSAxNTlcblx0ICAgIHZhciBiYWdJbWFnZXMgPSBIZWxwZXJzLmdldEZyYW1lSW1hZ2VzQXJyYXkodG90YWxGcmFtZXMsICdpbWFnZS9iYWctc2VxdWVuY2UvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXNcblx0ICAgIH1cblxuXHQgICAgdGhpcy52aWRlb0l0ZW1zID0gW11cblx0ICAgIHZhciBpdGVtcyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcudmlkZW8taXRlbScpXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBcdHZhciBpdGVtID0gaXRlbXNbaV1cblx0ICAgIFx0dGhpcy52aWRlb0l0ZW1zW2ldID0ge1xuICAgIFx0XHRcdGVsOiBpdGVtXG4gICAgXHRcdH1cblx0ICAgIH07XG5cblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0dXBkYXRlUGFyYWxsYXhJdGVtcygpIHtcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHJlbGF0aXZlWSA9IHRoaXMuY3VycmVudFNjcm9sbFBvcyAvIHRoaXMucGFnZUhlaWdodFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0aWYoaXRlbS55ID09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0XHR2YXIgcG9zWSA9IHRoaXMucG9zKDAsIC0xMDAwLCByZWxhdGl2ZVksIDApXG4gICAgICAgICAgICBUd2Vlbk1heC5zZXQoaXRlbS5lbCwgeyB5OnBvc1ksIGZvcmNlM0Q6dHJ1ZSB9KVxuXHRcdH07XG5cdH1cblx0cG9zKGJhc2UsIHJhbmdlLCByZWxZLCBvZmZzZXQpIHtcblx0XHRyZXR1cm4gYmFzZSArIHRoaXMubGltaXQoMCwgMSwgcmVsWSAtIG9mZnNldCkgKiByYW5nZTtcblx0fVxuXHRsaW1pdChtaW4sIG1heCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0ICAgIFxuXHQgICAgLy8gZ2V0IHNjcm9sbHRvcCBwb3NpdGlvblxuXHQgICAgdGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gc2Nyb2xsdG9wKClcblxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBjdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKCAoIHRoaXMuY3VycmVudFNjcm9sbFBvcyAvIHRoaXMucGFnZUhlaWdodCApICogdGhpcy5iZy50b3RhbEZyYW1lcyApXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSBjdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPCAwKSBjdXJyZW50RnJhbWUgPSAwXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKGN1cnJlbnRGcmFtZSlcblxuXHQgICAgLy8gdGhpcy51cGRhdGVQYXJhbGxheEl0ZW1zKClcblxuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHBhcmVudFNpemUgPSBzaXplKHRoaXMucGFyZW50KVxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMucGFnZUhlaWdodCA9IDBcblx0XHRcdHZhciBzY3JvbGx0ID0gc2Nyb2xsdG9wKClcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gdGhpcy52aWRlb0l0ZW1zW2ldXG5cdFx0XHRcdHZhciBpdGVtU2l6ZSA9IHNpemUoaXRlbS5lbClcblx0XHRcdFx0dmFyIGggPSBpdGVtU2l6ZVsxXVxuXHRcdFx0XHRpdGVtLnNpemUgPSBpdGVtU2l6ZVxuXHRcdFx0XHRpdGVtLnRvcCA9IGl0ZW0uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cdFx0XHRcdGl0ZW0udG9wICs9IHNjcm9sbHRcblx0XHRcdFx0aXRlbS55ID0gMFxuXHRcdFx0XHR0aGlzLnBhZ2VIZWlnaHQgKz0gaFxuXHRcdFx0fTtcblx0XHRcdHRoaXMucGFnZUhlaWdodCAtPSB3aW5kb3dIXG5cdFx0fSwgMClcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWNsZWN0aWMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXMgPSBbXVxuXHRcdHZhciB2aWRlb1VybHMgPSBbICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcgXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHR2YXIgdmlkZW9TcHJ0ID0gSGVscGVycy5nZXRQWFZpZGVvKHZpZGVvVXJsc1tpXSwgMzIwLCA1MTApXG5cdFx0XHR0aGlzLnZpZGVvU3ByaXRlc1tpXSA9IHZpZGVvU3BydFxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIuYWRkQ2hpbGQodmlkZW9TcHJ0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy52aWRlb3NDb250YWluZXIpO1xuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHZpZGVvSCA9IHRoaXMudmlkZW9TcHJpdGVzWzBdLmhlaWdodFxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemUgPSBbIHdpbmRvd1cgKiAwLjgsIHZpZGVvSCBdXG5cblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci54ID0gKHdpbmRvd1cgPj4gMSkgLSAodGhpcy52aWRlb3NDb250YWluZXIuc2l6ZVswXSA+PiAxKVxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnkgPSAod2luZG93SCA+PiAxKSAtICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzFdID4+IDEpIC0gKHdpbmRvd0ggKiAwLjAxKVxuXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMV0ueCA9ICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzBdID4+IDEpIC0gKHRoaXMudmlkZW9TcHJpdGVzWzFdLndpZHRoID4+IDEpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMl0ueCA9IHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemVbMF0gLSB0aGlzLnZpZGVvU3ByaXRlc1sxXS53aWR0aFxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRkZXN0cm95KCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb1Nwcml0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2aWRlb1NwcnQgPSB0aGlzLnZpZGVvU3ByaXRlc1tpXVxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodmlkZW9TcHJ0KVxuXHRcdFx0VXRpbHMuRGVzdHJveVZpZGVvVGV4dHVyZSh2aWRlb1NwcnQudGV4dHVyZSlcblx0XHRcdHZpZGVvU3BydC50ZXh0dXJlLmRlc3Ryb3koKVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kZXN0cm95KClcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aW50ZXNzZW50aWFsbHkgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMubW91c2VNb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGFnZU1vdXNlT3V0ID0gdGhpcy5zdGFnZU1vdXNlT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLm1vdXNlID0geyB4OjAsIHk6MCB9XG5cdFx0dGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gMFxuXHRcdHRoaXMuZHJhZ1ZhcnMgPSB7XG5cdFx0XHRzdGFydFBvczogMCxcblx0XHRcdGZvcmNlOiAwLjEsXG5cdFx0XHRkaXJlY3Rpb246IDEsXG5cdFx0XHRhY3RpdmU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdHZhciB0b3RhbEZyYW1lcyA9IDE1OVxuXHQgICAgdmFyIGJhZ0ltYWdlcyA9IEhlbHBlcnMuZ2V0RnJhbWVJbWFnZXNBcnJheSh0b3RhbEZyYW1lcywgJ2ltYWdlL3RocmVlc2l4dHkvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXMsXG5cdCAgICBcdGN1cnJlbnRGcmFtZTogMFxuXHQgICAgfVxuXG5cdCAgICBkb20odGhpcy5wYXJlbnQpLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bilcblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApXG5cdCAgICBkb20oZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsIHRoaXMuc3RhZ2VNb3VzZU91dClcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRtb3VzZURvd24oZSkge1xuXHRcdGRvbSh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0XHR0aGlzLmRyYWdWYXJzLmFjdGl2ZSA9IHRydWVcblx0XHR0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zID0gZS5jbGllbnRYXG5cdH1cblx0bW91c2VVcCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcmFnKClcblx0fVxuXHRzdGFnZU1vdXNlT3V0KGUpIHtcblx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuICAgICAgICBpZiAoIWZyb20gfHwgZnJvbS5ub2RlTmFtZSA9PSBcIkhUTUxcIikge1xuXHRcdFx0dGhpcy5kaXNhYmxlRHJhZygpXG4gICAgICAgIH1cblx0fVxuXHRtb3VzZU1vdmUoZSkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uID0gKCB0aGlzLm1vdXNlLnggPiB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zICkgPyAxIDogLTFcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm1vdXNlLnggLSB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zKSAvIHdpbmRvd1dcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDcgKiB0aGlzLmRyYWdWYXJzLmRpcmVjdGlvbikgKiBNYXRoLm1pbihkaXN0YW5jZSwgMTAwKVxuXHR9XG5cdGRpc2FibGVEcmFnKCkge1xuXHRcdGRvbSh3aW5kb3cpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpXG5cdFx0dGhpcy5kcmFnVmFycy5hY3RpdmUgPSBmYWxzZVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cblx0XHR0aGlzLmRyYWdWYXJzLmZvcmNlICs9ICgwLjAwMDAwMSAtIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpICogMC4yXG5cdCAgICBcdFxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBuZXdGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5iZy5jdXJyZW50RnJhbWUgKyB0aGlzLmRyYWdWYXJzLmZvcmNlKVxuXHQgICAgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSBuZXdGcmFtZVxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIGlmKHRoaXMuYmcuY3VycmVudEZyYW1lIDwgMCkgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKHRoaXMuYmcuY3VycmVudEZyYW1lKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxpc2ggZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrT2ZBcnQgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHN1cGVyLmFuaW1hdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXG5cdExBTkRTQ0FQRTogJ0xBTkRTQ0FQRScsXG5cdFBPUlRSQUlUOiAnUE9SVFJBSVQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblx0XG5cdEFERF9QWF9DSElMRDogJ0FERF9QWF9DSElMRCcsXG5cdFJFTU9WRV9QWF9DSElMRDogJ1JFTU9WRV9QWF9DSElMRCcsXG5cdFxuXHRPVkVSQUxMX01BUkdJTjogNDAsXG5cblx0TUlOX01JRERMRV9XOiA5NjAsXG5cdE1RX1hTTUFMTDogMzIwLFxuXHRNUV9TTUFMTDogNDgwLFxuXHRNUV9NRURJVU06IDc2OCxcblx0TVFfTEFSR0U6IDEwMjQsXG5cdE1RX1hMQVJHRTogMTI4MCxcblx0TVFfWFhMQVJHRTogMTY4MCxcbn0iLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbnZhciBBcHBEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVWaWV3QWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEaXNwYXRjaGVyIiwidmFyIEhlbHBlcnMgPSB7XG5cbiAgICBnZXRQWFZpZGVvOiBmdW5jdGlvbih1cmwsIHdpZHRoLCBoZWlnaHQsIHZhcnMpIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbVZpZGVvKHVybClcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2Uuc2V0QXR0cmlidXRlKFwibG9vcFwiLCB0cnVlKVxuICAgICAgICB2YXIgdmlkZW9TcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSlcbiAgICAgICAgdmlkZW9TcHJpdGUud2lkdGggPSB3aWR0aFxuICAgICAgICB2aWRlb1Nwcml0ZS5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgcmV0dXJuIHZpZGVvU3ByaXRlXG4gICAgfSxcblxuICAgIHJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcjogZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRGcmFtZUltYWdlc0FycmF5OiBmdW5jdGlvbihmcmFtZXMsIGJhc2V1cmwsIGV4dCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBmcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHVybCA9IGJhc2V1cmwgKyBpICsgJy4nICsgZXh0XG4gICAgICAgICAgICBhcnJheVtpXSA9IHVybFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVscGVycyIsIlxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmKHRoaXNbaV0gJiYgdGhpc1tpXS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzW2ldLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuICAgIFx0XG5jbGFzcyBHbG9iYWxFdmVudHMge1xuXHRpbml0KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0QXBwQWN0aW9ucy53aW5kb3dSZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxFdmVudHNcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUHJlbG9hZGVyICB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKClcblx0XHR0aGlzLnF1ZXVlLm9uKFwiY29tcGxldGVcIiwgdGhpcy5vbk1hbmlmZXN0TG9hZENvbXBsZXRlZCwgdGhpcylcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjayA9IHVuZGVmaW5lZFxuXHRcdHRoaXMuYWxsTWFuaWZlc3RzID0gW11cblx0fVxuXHRsb2FkKG1hbmlmZXN0LCBvbkxvYWRlZCkge1xuXG5cdFx0aWYodGhpcy5hbGxNYW5pZmVzdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbE1hbmlmZXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgbSA9IHRoaXMuYWxsTWFuaWZlc3RzW2ldXG5cdFx0XHRcdGlmKG0ubGVuZ3RoID09IG1hbmlmZXN0Lmxlbmd0aCAmJiBtWzBdLmlkID09IG1hbmlmZXN0WzBdLmlkICYmIG1bbS5sZW5ndGgtMV0uaWQgPT0gbWFuaWZlc3RbbWFuaWZlc3QubGVuZ3RoLTFdLmlkKSB7XG5cdFx0XHRcdFx0b25Mb2FkZWQoKVx0XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuYWxsTWFuaWZlc3RzLnB1c2gobWFuaWZlc3QpXG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2sgPSBvbkxvYWRlZFxuICAgICAgICB0aGlzLnF1ZXVlLmxvYWRNYW5pZmVzdChtYW5pZmVzdClcblx0fVxuXHRvbk1hbmlmZXN0TG9hZENvbXBsZXRlZCgpIHtcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjaygpXG5cdH1cblx0Z2V0Q29udGVudEJ5SWQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5nZXRSZXN1bHQoaWQpXG5cdH1cblx0Z2V0SW1hZ2VVUkwoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb250ZW50QnlJZChpZCkuZ2V0QXR0cmlidXRlKFwic3JjXCIpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyXG4iLCJpbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcidcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXHRpbml0KCkge1xuXHRcdHRoaXMucm91dGluZyA9IEFwcFN0b3JlLkRhdGEucm91dGluZ1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGhhc2hlci5uZXdIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLm9sZEhhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIuaW5pdGlhbGl6ZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdGhhc2hlci5jaGFuZ2VkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLl9zZXR1cENyb3Nzcm9hZHMoKVxuXHR9XG5cdGJlZ2luUm91dGluZygpIHtcblx0XHRoYXNoZXIuaW5pdCgpXG5cdH1cblx0X3NldHVwQ3Jvc3Nyb2FkcygpIHtcblx0XHR2YXIgYmFzaWNTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgne3BhZ2V9JywgdGhpcy5fb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMylcblx0XHRiYXNpY1NlY3Rpb24ucnVsZXMgPSB7XG5cdCAgICAgICAgcGFnZSA6IFsnICcsICd3b3JrLW9mLWFydCcsICd3b3JrcycsICdjb250YWN0J10gLy92YWxpZCBzZWN0aW9uc1xuXHQgICAgfVxuXHR9XG5cdF9vbkZpcnN0RGVncmVlVVJMSGFuZGxlcihwYWdlSWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwYWdlSWQpXG5cdH1cblx0X29uRGVmYXVsdFVSTEhhbmRsZXIoKSB7XG5cdFx0Ly8gdGhpcy5fc2VuZFRvRGVmYXVsdCgpXG5cdFx0dGhpcy5fYXNzaWduUm91dGUoJycpXG5cdH1cblx0X2Fzc2lnblJvdXRlKGlkKSB7XG5cdFx0dmFyIGhhc2ggPSBoYXNoZXIuZ2V0SGFzaCgpXG5cdFx0dmFyIHBhcnRzID0gdGhpcy5fZ2V0VVJMUGFydHMoaGFzaClcblx0XHR0aGlzLl91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcnRzWzBdLCBpZClcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gdHJ1ZVxuXHR9XG5cdF9nZXRVUkxQYXJ0cyh1cmwpIHtcblx0XHR2YXIgaGFzaCA9IHVybFxuXHRcdHJldHVybiBoYXNoLnNwbGl0KCcvJylcblx0fVxuXHRfdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJlbnQsIHRhcmdldElkKSB7XG5cdFx0aGFzaGVyLm9sZEhhc2ggPSBoYXNoZXIubmV3SGFzaFxuXHRcdGhhc2hlci5uZXdIYXNoID0ge1xuXHRcdFx0aGFzaDogaGFzaCxcblx0XHRcdHBhcnRzOiBwYXJ0cyxcblx0XHRcdHBhcmVudDogcGFyZW50LFxuXHRcdFx0dGFyZ2V0SWQ6IHRhcmdldElkXG5cdFx0fVxuXHRcdEFwcEFjdGlvbnMucGFnZUhhc2hlckNoYW5nZWQoKVxuXHR9XG5cdF9kaWRIYXNoZXJDaGFuZ2UobmV3SGFzaCwgb2xkSGFzaCkge1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGNyb3Nzcm9hZHMucGFyc2UobmV3SGFzaClcblx0XHRpZih0aGlzLm5ld0hhc2hGb3VuZGVkKSByZXR1cm5cblx0XHQvLyBJZiBVUkwgZG9uJ3QgbWF0Y2ggYSBwYXR0ZXJuLCBzZW5kIHRvIGRlZmF1bHRcblx0XHR0aGlzLl9vbkRlZmF1bHRVUkxIYW5kbGVyKClcblx0fVxuXHRfc2VuZFRvRGVmYXVsdCgpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChBcHBTdG9yZS5kZWZhdWx0Um91dGUoKSlcblx0fVxuXHRzdGF0aWMgZ2V0QmFzZVVSTCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuVVJMLnNwbGl0KFwiI1wiKVswXVxuXHR9XG5cdHN0YXRpYyBnZXRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIuZ2V0SGFzaCgpXG5cdH1cblx0c3RhdGljIGdldFJvdXRlcygpIHtcblx0XHRyZXR1cm4gQXBwU3RvcmUuRGF0YS5yb3V0aW5nXG5cdH1cblx0c3RhdGljIGdldE5ld0hhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5uZXdIYXNoXG5cdH1cblx0c3RhdGljIGdldE9sZEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5vbGRIYXNoXG5cdH1cblx0c3RhdGljIHNldEhhc2goaGFzaCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKGhhc2gpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChpZCkge1xufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuICAgIHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuICAgIHZhciBoYXNoID0gaGFzaE9iai5oYXNoLmxlbmd0aCA8IDEgPyAnLycgOiBoYXNoT2JqLmhhc2hcbiAgICB2YXIgY29udGVudCA9IEFwcFN0b3JlLkRhdGEucm91dGluZ1toYXNoXVxuICAgIHJldHVybiBjb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0TWVudUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGEubWVudVxufVxuZnVuY3Rpb24gX2dldE1lbnVJdGVtQnlJZChpZCkge1xuXG4gICAgdmFyIG1lbnVJdGVtcyA9IEFwcFN0b3JlLkRhdGEubWVudVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbnVJdGVtc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfVxuICAgIH07XG5cbn1cbmZ1bmN0aW9uIF9nZXRDdXJyZW50UGFnZU1lbnVJdGVtKCkge1xuXG4gICAgdmFyIGhhc2hPYmogPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG4gICAgdmFyIGlkID0gaGFzaE9iai5oYXNoID09ICcnID8gJ2hvbWUnIDogaGFzaE9iai5oYXNoXG5cbiAgICB2YXIgbWVudUl0ZW1zID0gQXBwU3RvcmUuRGF0YS5tZW51XG4gICAgdmFyIGl0ZW07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobWVudUl0ZW1zW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICBpdGVtID0gbWVudUl0ZW1zW2ldXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoaXRlbSA9PSB1bmRlZmluZWQpID8geyBpZDogJ2hvbWUnIH0gOiBpdGVtXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YVxufVxuZnVuY3Rpb24gX2dldERlZmF1bHRSb3V0ZSgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YVsnZGVmYXVsdC1yb3V0ZSddXG59XG5mdW5jdGlvbiBfZ2V0R2xvYmFsQ29udGVudCgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YS5jb250ZW50XG59XG5mdW5jdGlvbiBfd2luZG93V2lkdGhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGg6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKHR5cGUsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG4gICAgfSxcbiAgICBwYWdlQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0UGFnZUNvbnRlbnQoKVxuICAgIH0sXG4gICAgbWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldE1lbnVDb250ZW50KClcbiAgICB9LFxuICAgIGdldEN1cnJlbnRQYWdlTWVudUl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEN1cnJlbnRQYWdlTWVudUl0ZW0oKVxuICAgIH0sXG4gICAgZ2V0TWVudUl0ZW1CeUlkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gX2dldE1lbnVJdGVtQnlJZChpZClcbiAgICB9LFxuICAgIGFwcERhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEFwcERhdGEoKVxuICAgIH0sXG4gICAgZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXREZWZhdWx0Um91dGUoKVxuICAgIH0sXG4gICAgZ2xvYmFsQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0R2xvYmFsQ29udGVudCgpXG4gICAgfSxcbiAgICBXaW5kb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpbmRvd1dpZHRoSGVpZ2h0KClcbiAgICB9LFxuICAgIE9yaWVudGF0aW9uOiBBcHBDb25zdGFudHMuTEFORFNDQVBFLFxuICAgIGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG4gICAgICAgIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRDpcbiAgICAgICAgICAgICAgICBfcGFnZVJvdXRlSWRDaGFuZ2VkKGFjdGlvbi5pdGVtKVxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkU6XG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuV2luZG93LncgPSBhY3Rpb24uaXRlbS53aW5kb3dXXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuT3JpZW50YXRpb24gPSAoQXBwU3RvcmUuV2luZG93LncgPiBBcHBTdG9yZS5XaW5kb3cuaCkgPyBBcHBDb25zdGFudHMuTEFORFNDQVBFIDogQXBwQ29uc3RhbnRzLlBPUlRSQUlUXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlLCBhY3Rpb24uaXRlbSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG59KVxuXG53aW5kb3cuQXBwU3RvcmUgPSBBcHBTdG9yZVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdG9yZVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxzdmcgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvc3ZnPlxuICAgIH1cbn1cbiIsImltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmZ1bmN0aW9uIGdldEFsbE1ldGhvZHMob2JqKSB7XG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopXG5cdFx0LmZpbHRlcihrZXkgPT4gaXMuZm4ob2JqW2tleV0pKVxufVxuXG5mdW5jdGlvbiBhdXRvQmluZChvYmopIHtcblx0Ly8gY29uc29sZS5sb2coJ29iaiAtLS0tLScsIG9iailcbiAgXHRnZXRBbGxNZXRob2RzKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpXG5cdFx0LmZvckVhY2gobXRkID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKG10ZClcblx0XHRcdG9ialttdGRdID0gb2JqW210ZF0uYmluZChvYmopO1xuXHRcdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dG9CaW5kOyIsImNsYXNzIFV0aWxzIHtcblx0c3RhdGljIE5vcm1hbGl6ZU1vdXNlQ29vcmRzKGUsIG9ialdyYXBwZXIpIHtcblx0XHR2YXIgcG9zeCA9IDA7XG5cdFx0dmFyIHBvc3kgPSAwO1xuXHRcdGlmICghZSkgdmFyIGUgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0aWYgKGUucGFnZVggfHwgZS5wYWdlWSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5wYWdlWDtcblx0XHRcdHBvc3kgPSBlLnBhZ2VZO1xuXHRcdH1cblx0XHRlbHNlIGlmIChlLmNsaWVudFggfHwgZS5jbGllbnRZKSBcdHtcblx0XHRcdHBvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHRcdHBvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdFx0fVxuXHRcdG9ialdyYXBwZXIueCA9IHBvc3hcblx0XHRvYmpXcmFwcGVyLnkgPSBwb3N5XG5cdFx0cmV0dXJuIG9ialdyYXBwZXJcblx0fVxuXHRzdGF0aWMgUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBjb250ZW50VywgY29udGVudEgpIHtcblx0XHR2YXIgYXNwZWN0UmF0aW8gPSBjb250ZW50VyAvIGNvbnRlbnRIXG5cdFx0dmFyIHNjYWxlID0gKCh3aW5kb3dXIC8gd2luZG93SCkgPCBhc3BlY3RSYXRpbykgPyAod2luZG93SCAvIGNvbnRlbnRIKSAqIDEgOiAod2luZG93VyAvIGNvbnRlbnRXKSAqIDFcblx0XHR2YXIgbmV3VyA9IGNvbnRlbnRXICogc2NhbGVcblx0XHR2YXIgbmV3SCA9IGNvbnRlbnRIICogc2NhbGVcblx0XHR2YXIgY3NzID0ge1xuXHRcdFx0d2lkdGg6IG5ld1csXG5cdFx0XHRoZWlnaHQ6IG5ld0gsXG5cdFx0XHRsZWZ0OiAod2luZG93VyA+PiAxKSAtIChuZXdXID4+IDEpLFxuXHRcdFx0dG9wOiAod2luZG93SCA+PiAxKSAtIChuZXdIID4+IDEpLFxuXHRcdFx0c2NhbGU6IHNjYWxlXG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBjc3Ncblx0fVxuXHRzdGF0aWMgRGVzdHJveVZpZGVvKHZpZGVvKSB7XG4gICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgIHZpZGVvLnNyYyA9ICcnO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2aWRlby5jaGlsZE5vZGVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICBcdGNoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgJycpO1xuICAgICAgICBcdC8vIFdvcmtpbmcgd2l0aCBhIHBvbHlmaWxsIG9yIHVzZSBqcXVlcnlcbiAgICAgICAgXHRjaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBEZXN0cm95VmlkZW9UZXh0dXJlKHRleHR1cmUpIHtcbiAgICBcdHZhciB2aWRlbyA9IHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlXG4gICAgICAgIFV0aWxzLkRlc3Ryb3lWaWRlbyh2aWRlbylcbiAgICB9XG4gICAgc3RhdGljIElzRXZlbihuKSB7XG5cdCAgIHJldHVybiBuICUgMiA9PSAwO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuIFxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuIFxuLy8gTUlUIGxpY2Vuc2VcbiBcbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcbiAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiBcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG59KCkpOyIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuLy8gQWN0aW9uc1xudmFyIFBhZ2VyQWN0aW9ucyA9IHtcbiAgICBvblBhZ2VSZWFkeTogZnVuY3Rpb24oaGFzaCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFksXG4gICAgICAgIFx0aXRlbTogaGFzaFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgXHRQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH1cbn1cblxuLy8gQ29uc3RhbnRzXG52YXIgUGFnZXJDb25zdGFudHMgPSB7XG5cdFBBR0VfSVNfUkVBRFk6ICdQQUdFX0lTX1JFQURZJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOOiAnUEFHRV9UUkFOU0lUSU9OX0lOJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVDogJ1BBR0VfVFJBTlNJVElPTl9PVVQnLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOiAnUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUzogJ1BBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUycsXG5cdFBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOiAnUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gnLFxufVxuXG4vLyBEaXNwYXRjaGVyXG52YXIgUGFnZXJEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVQYWdlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChhY3Rpb24pXG5cdH1cbn0pXG5cbi8vIFN0b3JlXG52YXIgUGFnZXJTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBmaXJzdFBhZ2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgIHBhZ2VUcmFuc2l0aW9uU3RhdGU6IHVuZGVmaW5lZCwgXG4gICAgZGlzcGF0Y2hlckluZGV4OiBQYWdlckRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gcGF5bG9hZC50eXBlXG4gICAgICAgIHZhciBpdGVtID0gcGF5bG9hZC5pdGVtXG4gICAgICAgIHN3aXRjaChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFk6XG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTU1xuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA/IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiA6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6XG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDpcbiAgICAgICAgICAgIFx0aWYgKFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbikgUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSFxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUuZW1pdChhY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRQYWdlclN0b3JlOiBQYWdlclN0b3JlLFxuXHRQYWdlckFjdGlvbnM6IFBhZ2VyQWN0aW9ucyxcblx0UGFnZXJDb25zdGFudHM6IFBhZ2VyQ29uc3RhbnRzLFxuXHRQYWdlckRpc3BhdGNoZXI6IFBhZ2VyRGlzcGF0Y2hlclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ0F1dG9iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRhdXRvYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy50bEluID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZVxuXHRcdH0pXG5cdFx0dGhpcy50bE91dCA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnRsSW4udGltZVNjYWxlKDIpLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoKVxuXHRcdHRoaXMudGxPdXQudGltZVNjYWxlKDIpLnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAncGFnZS1iJ1xuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4gPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluLmJpbmQodGhpcylcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dCA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLmNvbXBvbmVudHMgPSB7XG5cdFx0XHQnbmV3LWNvbXBvbmVudCc6IHVuZGVmaW5lZCxcblx0XHRcdCdvbGQtY29tcG9uZW50JzogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXMtY29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWEnPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblx0c2V0dXBOZXdDb21wb25lbnQoaGFzaCwgVHlwZSkge1xuXHRcdHZhciBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdHZhciBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHR2YXIgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cdHdpbGxQYWdlVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbk91dCgpXG5cdH1cblx0ZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5wYWdlVHJhbnNpdGlvbkRpZEZpbmlzaCgpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10udXBkYXRlKClcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ucmVzaXplKClcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCduZXctY29tcG9uZW50Jylcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImNvbnRlbnRcIjoge1xuXHRcdFwibXl0ZXh0XCI6IFwic29tZSBnbG9iYWwgdGV4dFwiXG5cdH0sXG5cblx0XCJtZW51XCI6IFtcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwid29yay1vZi1hcnRcIixcblx0XHRcdFwibmFtZVwiOiBcIldvcmsgb2YgQXJ0XCIsXG5cdFx0XHRcInVybFwiOiBcIi93b3JrLW9mLWFydFwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJXCJcblx0XHR9LHtcblx0XHRcdFwiaWRcIjogXCJhcmNoaXRlY3R1cmVcIixcblx0XHRcdFwibmFtZVwiOiBcIkFyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvYXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklJXCJcblx0XHR9LHtcblx0XHRcdFwiaWRcIjogXCJxdWludGVzc2VudGlhbGx5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJRdWludGVzc2VudGlhbGx5IERpb3JcIixcblx0XHRcdFwidXJsXCI6IFwiL3F1aW50ZXNzZW50aWFsbHlcIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSUlJXCJcblx0XHR9LHtcblx0XHRcdFwiaWRcIjogXCJlY2xlY3RpY1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwiRWNsZWN0aWNcIixcblx0XHRcdFwidXJsXCI6IFwiL2VjbGVjdGljXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklWXCJcblx0XHR9LHtcblx0XHRcdFwiaWRcIjogXCJzdHlsaXNoXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJTdHlsaXNoXCIsXG5cdFx0XHRcInVybFwiOiBcIi9zdHlsaXNoXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIlZcIlxuXHRcdH1cblx0XSxcblxuXHRcImRlZmF1bHQtcm91dGVcIjogXCJcIixcblxuXHRcInJvdXRpbmdcIjoge1xuXHRcdFwiL1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiaG9tZSBwYWdlXCJcblx0XHR9LFxuXHRcdFwid29yay1vZi1hcnRcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcIndvcmstb2YtYXJ0IHBhZ2VcIlxuXHRcdH0sXG5cdFx0XCJhcmNoaXRlY3R1cmVcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImFyY2hpdGVjdHVyZSBwYWdlXCIsXG5cdFx0XHRcInZpZGVvc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiTEEgRk9STUVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTEEgTElHTkUgQ1LDiUUgTEEgRk9STUUuXFx1MjAyOFBPVVIgQ09OU1RSVUlSRSBVTiBTQUMgTEFEWSBESU9SLCAxMzAgUEnDiENFUyBTT05UIE7DiUNFU1NBSVJFUy5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiTEEgRk9STUUgMlwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMQSBMSUdORSBDUsOJRSBMQSBGT1JNRS5cXHUyMDI4UE9VUiBDT05TVFJVSVJFIFVOIFNBQyBMQURZIERJT1IsIDEzMCBQScOIQ0VTIFNPTlQgTsOJQ0VTU0FJUkVTLiAyXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIkRpb3JcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkxBIEZPUk1FIDJcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTEEgTElHTkUgQ1LDiUUgTEEgRk9STUUuXFx1MjAyOFBPVVIgQ09OU1RSVUlSRSBVTiBTQUMgTEFEWSBESU9SLCAxMzAgUEnDiENFUyBTT05UIE7DiUNFU1NBSVJFUy4gMkxBIExJR05FIENSw4lFIExBIEZPUk1FLlxcdTIwMjhQT1VSIENPTlNUUlVJUkUgVU4gU0FDIExBRFkgRElPUiwgMTMwIFBJw4hDRVMgU09OVCBOw4lDRVNTQUlSRVMuIDJcIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiTEEgRk9STUUgMlwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMQSBMSUdORSBDUsOJRSBMQSBGT1JNRS5cXHUyMDI4UE9VUiBDT05TVFJVSVJFIFVOIFNBQyBMQURZIERJT1IsIDEzMCBQScOIQ0VTIFNPTlQgTsOJQ0VTU0FJUkVTLiAyXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIkRpb3JcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkxBIEZPUk1FIDJcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTEEgTElHTkUgQ1LDiUUgTEEgRk9STUUuXFx1MjAyOFBPVVIgQ09OU1RSVUlSRSBVTiBTQUMgTEFEWSBESU9SLCAxMzAgUEnDiENFUyBTT05UIE7DiUNFU1NBSVJFUy4gMlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJEaW9yXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJMQSBGT1JNRSAyXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkxBIExJR05FIENSw4lFIExBIEZPUk1FLlxcdTIwMjhQT1VSIENPTlNUUlVJUkUgVU4gU0FDIExBRFkgRElPUiwgMTMwIFBJw4hDRVMgU09OVCBOw4lDRVNTQUlSRVMuIDJcIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiTEEgRk9STUUgMlwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMQSBMSUdORSBDUsOJRSBMQSBGT1JNRS5cXHUyMDI4UE9VUiBDT05TVFJVSVJFIFVOIFNBQyBMQURZIERJT1IsIDEzMCBQScOIQ0VTIFNPTlQgTsOJQ0VTU0FJUkVTLiAyXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIkRpb3JcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkxBIEZPUk1FIDVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTEEgTElHTkUgQ1LDiUUgTEEgRk9STUUuXFx1MjAyOFBPVVIgQ09OU1RSVUlSRSBVTiBTQUMgTEFEWSBESU9SLCAxMzAgUEnDiENFUyBTT05UIE7DiUNFU1NBSVJFUy4gMlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJEaW9yXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuICAgICAgICB9LFxuICAgICAgICBcInF1aW50ZXNzZW50aWFsbHlcIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJxdWludGVzc2VudGlhbGx5IHBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcImVjbGVjdGljXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwiZWNsZWN0aWMgcGFnZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwic3R5bGlzaFwiOiB7XG4gICAgICAgIFx0XCJ0aXRsZVwiOiBcInN0eWxpc2ggcGFnZVwiXG4gICAgICAgIH1cblx0fVxufSJdfQ==
