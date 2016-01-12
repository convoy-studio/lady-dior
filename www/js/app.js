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

var App = (function () {
	function App() {
		_classCallCheck(this, App);

		this.onMainDataLoaded = this.onMainDataLoaded.bind(this);
	}

	_createClass(App, [{
		key: 'init',
		value: function init() {

			// Init global events
			window.GlobalEvents = new _GlobalEvents2['default']();
			GlobalEvents.init();

			window.Preloader = new _Preloader2['default']();
			Preloader.load({ id: 'main-data', src: 'data/data.json' }, this.onMainDataLoaded);
		}
	}, {
		key: 'onMainDataLoaded',
		value: function onMainDataLoaded() {

			_AppStore2['default'].Data = Preloader.getContentById('main-data');

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

},{"./AppTemplate":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/AppTemplate.js","./actions/AppActions":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js","./services/GlobalEvents":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/GlobalEvents.js","./services/Preloader":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Preloader.js","./services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/AppTemplate.js":[function(require,module,exports){
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

			this.container = new PIXI.Container();
			setTimeout(function () {
				AppActions.addPXChild(_this.container);
			}, 0);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {
			_get(Object.getPrototypeOf(Page.prototype), 'setupAnimations', this).call(this);
		}
	}, {
		key: 'getBasePageDom',
		value: function getBasePageDom(html) {
			var content = _AppStore2['default'].getCurrentPageMenuItem();
			var id = content.id + '-page';

			return _react2['default'].createElement(
				'div',
				{ id: id, ref: 'page-wrapper', className: 'page-wrapper' },
				_react2['default'].createElement(
					'div',
					{ className: 'elements-holder' },
					html
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

},{"./../../pager/components/BasePage":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePage.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PagesContainer.js":[function(require,module,exports){
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

var Architecture = (function (_Page) {
	_inherits(Architecture, _Page);

	function Architecture(props) {
		_classCallCheck(this, Architecture);

		_get(Object.getPrototypeOf(Architecture.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Architecture, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(Architecture.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(Architecture.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Architecture.prototype), 'resize', this).call(this);
		}
	}]);

	return Architecture;
})(_Page3['default']);

exports['default'] = Architecture;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Eclectic.js":[function(require,module,exports){
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

var Quintessentially = (function (_Page) {
	_inherits(Quintessentially, _Page);

	function Quintessentially(props) {
		_classCallCheck(this, Quintessentially);

		_get(Object.getPrototypeOf(Quintessentially.prototype), 'constructor', this).call(this, props);
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
			_get(Object.getPrototypeOf(Quintessentially.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(Quintessentially.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(Quintessentially.prototype), 'resize', this).call(this);
		}
	}]);

	return Quintessentially;
})(_Page3['default']);

exports['default'] = Quintessentially;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Stylish.js":[function(require,module,exports){
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

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
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
				top: (windowH >> 1) - (newH >> 1)
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
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			this.parent = _react2['default'].findDOMNode(this.refs['page-wrapper']);
			this.resize();
			this.setupAnimations();
			setTimeout(function () {
				return _this.props.isReady(_this.props.hash);
			}, 0);
		}
	}, {
		key: 'setupAnimations',
		value: function setupAnimations() {

			// transition In
			this.tlIn.from(this.parent, 1, { opacity: 0, ease: Expo.easeInOut });

			// transition Out
			this.tlOut.to(this.parent, 1, { opacity: 0, ease: Expo.easeInOut });

			// reset
			this.tlIn.pause(0);
			this.tlOut.pause(0);
		}
	}, {
		key: 'willTransitionIn',
		value: function willTransitionIn() {
			this.tlIn.play(0);
		}
	}, {
		key: 'willTransitionOut',
		value: function willTransitionOut() {
			this.tlOut.play(0);
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
			// console.log('didPageTransitionInComplete')
			_Pager.PagerActions.pageTransitionDidFinish();
			this.unmountComponent('old-component');
		}
	}, {
		key: 'didPageTransitionOutComplete',
		value: function didPageTransitionOutComplete() {
			// console.log('didPageTransitionOutComplete')
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

},{"./../Pager":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/Pager.js","lodash/String/capitalize":"/Users/panagiotisthomoglou/Projects/lady-dior/node_modules/lodash/String/capitalize.js","react":"react"}]},{},["/Users/panagiotisthomoglou/Projects/lady-dior/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9FY2xlY3RpYy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRlc3NlbnRpYWxseS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGlzaC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvV29ya09mQXJ0LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29uc3RhbnRzL0FwcENvbnN0YW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9taXhpbnMvSGVscGVycy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9Qb2x5ZmlsbHMuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9HbG9iYWxFdmVudHMuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9QcmVsb2FkZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zZXJ2aWNlcy9Sb3V0ZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9zdmcvU1ZHQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvQXV0b2JpbmQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9VdGlscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL3JhZi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvUGFnZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL3BhZ2VyL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlUGFnZXIuanMiXSwibmFt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QUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pDO0dBQ0Q7OztTQUNLLGtCQUFHO0FBQ1IsT0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtBQUNqRCxRQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3pDO0dBQ0Q7OztTQUNLLGtCQUFHO0FBQ1IsT0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtBQUNqRCxRQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3pDO0dBQ0Q7OztTQUNtQixnQ0FBRztBQUN0QixxQkFBVyxHQUFHLENBQUMsc0JBQWUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDNUUscUJBQVcsR0FBRyxDQUFDLHNCQUFlLG1CQUFtQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlFLE9BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUN0QyxPQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUE7R0FDdEM7OztRQXpGbUIsU0FBUztHQUFTLG1CQUFNLFNBQVM7O3FCQUFqQyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiAoc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiaW1wb3J0IEFwcCBmcm9tICdBcHAnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBQYWdlciBmcm9tICdQYWdlcidcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IFBvbHlmaWxscyBmcm9tICdQb2x5ZmlsbHMnXG5cbi8vIFN0YXJ0IEFwcFxudmFyIGFwcCA9IG5ldyBBcHAoKVxuYXBwLmluaXQoKVxuIiwiaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBBcHBUZW1wbGF0ZSBmcm9tICdBcHBUZW1wbGF0ZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IEdFdmVudHMgZnJvbSAnR2xvYmFsRXZlbnRzJ1xuaW1wb3J0IFByZWxvYWQgZnJvbSAnUHJlbG9hZGVyJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9uTWFpbkRhdGFMb2FkZWQgPSB0aGlzLm9uTWFpbkRhdGFMb2FkZWQuYmluZCh0aGlzKVxuXHR9XG5cdGluaXQoKSB7XG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblxuXHRcdHdpbmRvdy5QcmVsb2FkZXIgPSBuZXcgUHJlbG9hZCgpXG5cdFx0UHJlbG9hZGVyLmxvYWQoe2lkOidtYWluLWRhdGEnLCBzcmM6ICdkYXRhL2RhdGEuanNvbid9LCB0aGlzLm9uTWFpbkRhdGFMb2FkZWQpXG5cdFx0XG5cdH1cblxuXHRvbk1haW5EYXRhTG9hZGVkKCkge1xuXG5cdFx0QXBwU3RvcmUuRGF0YSA9IFByZWxvYWRlci5nZXRDb250ZW50QnlJZCgnbWFpbi1kYXRhJylcblx0XHRcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEZyb250Q29udGFpbmVyIGZyb20gJ0Zyb250Q29udGFpbmVyJ1xuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJ1BhZ2VzQ29udGFpbmVyJ1xuaW1wb3J0IFBYQ29udGFpbmVyIGZyb20gJ1BYQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUZW1wbGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdhcHAtdGVtcGxhdGUnPlxuXHRcdFx0XHQ8RnJvbnRDb250YWluZXIgcmVmPSdmcm9udC1jb250YWluZXInIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciByZWY9J3BhZ2VzLWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBYQ29udGFpbmVyIHJlZj0ncHgtY29udGFpbmVyJyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEdsb2JhbEV2ZW50cy5yZXNpemUoKVxuXHRcdHRoaXMuYW5pbWF0ZSgpXG5cdH1cblx0YW5pbWF0ZSgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuXHRcdHRoaXMucmVmc1sncHgtY29udGFpbmVyJ10udXBkYXRlKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snZnJvbnQtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZFBYQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuQUREX1BYX0NISUxELFxuICAgICAgICAgICAgaXRlbTogeyBjaGlsZDpjaGlsZCB9XG4gICAgICAgIH0pICAgIFxuICAgIH0sXG4gICAgcmVtb3ZlUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfVxufVxuXG53aW5kb3cuQXBwQWN0aW9ucyA9IEFwcEFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnQmFzZUNvbXBvbmVudCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnTWVudSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IFNWR0NvbXBvbmVudCBmcm9tICdTVkdDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2Zyb250LWNvbnRhaW5lcicgcmVmPSdmcm9udC1jb250YWluZXInPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuXHRcdFx0XHRcdDxTVkdDb21wb25lbnQgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxODcuMDg2IDczLjg2M1wiPlxuXHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNDEuOTU2LDM5LjYzYy0yLjAyMy0wLjkwMy00LjI2NS0xLjM3My02LjY4Ny0xLjQ4M2wtNi42ODgsMC4zOThjLTEuODA3LDAuMzI1LTMuNTQyLDAuOTc3LTUuMjc3LDEuOTg5Yy0xLjk1MSwxLjE1Ni0zLjU3OCwyLjYwMy00Ljg3OSw0LjMzN2MtMy4zMjUsNC4xNTYtNC41MTksOS4wMzYtMy42MTQsMTQuNzgzYzEuMDEyLDYuMDczLDQuMTU2LDEwLjIyOSw5LjMyNSwxMi4zMjdjMy45NzcsMS42MjYsOC4zODYsMS45NSwxMy4xMjEsMC45MDJjNC41MTgtMC45MzksOC4wOTctMy4xMDgsMTAuODA4LTYuNTA1YzMuMTgxLTQuMDE0LDQuMTkyLTguOTY1LDMtMTQuODIxQzE0OS45MDksNDUuNzc1LDE0Ni44MzYsNDEuNzk5LDE0MS45NTYsMzkuNjN6IE0xNDEuODQ5LDY1LjkwOWMtMS41NTUsMi44OS0zLjkwMyw0LjYyNi03LjEyMSw1LjI0MWMtMy4wNzIsMC41NDEtNS44MTktMC42NTItOC4yNDEtMy41MDhjLTIuMjc3LTIuNzEtMy42ODgtNi4yNTQtNC4wODUtMTAuNjk4Yy0wLjU0Mi00LjQ4MywwLTguMjc4LDEuNDgxLTExLjM4OGMxLjYyNy0zLjQzNCw0LjEyMS01LjI0MSw3LjM3NS01LjU2NWMzLjM2MS0wLjI4OCw2LjE0NSwwLjc5NSw4LjM1LDMuMjU0YzIuMjQxLDIuNDkzLDMuNTA2LDYuMTA5LDMuOTQsMTAuOTg4QzE0My45MDgsNTkuMTEzLDE0My4zNjcsNjIuOTQ1LDE0MS44NDksNjUuOTA5eiBNNDAuNTY2LDAuMzc1SDQuMzEyYy0wLjcyMywwLTEuMDg1LDAuMjE2LTEuMDg1LDAuNzIybDAuMjksMC41NDNsMS40NDYsMC4yODhMOC40NjgsMi4xMWwzLjQzNCwwLjQzM2MyLjQ1OCwwLjU0MywzLjcyMywxLjkxNiwzLjcyMyw0LjE1N3Y1Ny4zMjhjLTAuMDM2LDEuNzczLTAuMjE3LDMuMDc0LTAuNTQyLDMuOTRsLTAuOTAzLDEuMjY3Yy0wLjQ3LDAuNTQxLTEuNDQ2LDAuOTM5LTIuODE5LDEuMTE5bC04Ljg1NiwwLjU0M2MtMS4wMTIsMC0xLjU1NCwwLjI1NC0xLjU1NCwwLjcyNGMwLDAuNDMzLDAuMzYxLDAuNjg2LDEuMTIxLDAuNjg2aDQ2LjIzMWM1LjYwMywwLDEwLjU5MS0xLjA0OCwxNS4wMzctMy4wNzFjNC4xNTctMS45ODksNy43NzEtNC43LDEwLjczNS04LjIwNWMyLjcxMS0zLjMyNyw0LjgwOC03LjA0OSw2LjMyNi0xMS4yNzljMS4zMzctNC4wMTIsMS45ODgtOC4xNjgsMS45ODgtMTIuNDY5YzAtOC4yNDItMS45ODgtMTUuMzYyLTUuOTY0LTIxLjM2M0M2OS40ODMsNS41NDMsNTcuNTU1LDAuMzc1LDQwLjU2NiwwLjM3NXogTTY4LjgzMyw0Ni4yOGMtMS4xOTMsNS41MzEtMy4xNDUsMTAuMDQ5LTUuODU2LDEzLjU5MWMtMS42MjYsMi4xNjktMy4xMDgsMy44NjgtNC41NTQsNS4wNjJjLTEuNjI2LDEuMjY1LTMuNTA2LDIuMzEyLTUuNDk0LDMuMDM1Yy0xLjk4OCwwLjY1MS00LjUxOSwxLjEyMS03LjQ4MywxLjQ0NmwtMTEuMDYsMC4zOThoLTQuNzcxbC0xLjQ0Ni0wLjIxN2MtMC4yODktMC4xODItMC40MzMtMC42ODgtMC40MzMtMS40MTFWNC41MzJsMC4yNTItMS40NDVjMC4yNTMtMC40MzUsMC43OTUtMC42MTUsMS42MjctMC41NDNoNy4zMzdjMTEuODkzLDAsMjAuNDk1LDMuNTQzLDI1LjczNiwxMC43YzIuNzExLDMuNjg3LDQuNjI3LDguMDI0LDUuODkyLDEyLjk3NmMwLjkwNCwzLjQzNSwxLjMzNyw2LjYxNSwxLjMzNyw5LjU3OUM2OS45MTcsMzkuMTYsNjkuNTU2LDQyLjY2Nyw2OC44MzMsNDYuMjh6IE05MC4zNTcsNDQuODM1bDAuOTQzLTAuMTA4bDIuMTEyLTAuNTc5bDEuODgsMC4xODJjMC41NDIsMC4zNjIsMC44MzEsMC45NzcsMC44MzEsMS43NzF2MjEuMDAxbC0wLjQ3LDIuNjAzYy0wLjMyNiwwLjcyMy0xLjE1NywxLjE5Mi0yLjUzLDEuMzcybC0yLjUzLDAuMDc0Yy0wLjc5NSwwLTEuMTU3LDAuMTgtMS4wODQsMC42MTRjMCwwLjI4OCwwLjIxNywwLjQ3LDAuNjUsMC40N2gxOS4yNjZjMC40MzUsMCwwLjY4Ny0wLjExLDAuNjg3LTAuNDM1Yy0wLjA3Mi0wLjM5Ni0wLjUwNi0wLjU3OC0xLjMzNy0wLjU3OGMtMi4zNSwwLTMuODY3LTAuMzI1LTQuNTE5LTAuOTc3Yy0wLjU0Mi0wLjU0MS0wLjgzMS0xLjQ0Ni0wLjgzMS0yLjcxdi0yNi40NmMwLTEuMzAxLTAuMTgxLTIuMDIzLTAuNTQyLTIuMDk1bC0xLjA4NSwwLjEwN2MtMC40MzQsMC4xOC0xLjQxLDAuNjE1LTIuNzgyLDEuNDFjLTIuMjQyLDEuMjY0LTQuODgsMi4yNzctNy44OCwzLjA3MWMtMS4yNjYsMC4zNjEtMS44MDgsMC43Ni0xLjYyNywxLjE5M0w5MC4zNTcsNDQuODM1eiBNMTg2LjEyNyw0Mi45NTVjMC4wNzMsMS4yNjYtMC4yODksMi4yNC0xLjA4NCwzYy0wLjcyMywwLjYxNS0xLjQ0NSwwLjc5NS0yLjA5NiwwLjYxNWMtMC42MTUtMC4xMDgtMS4wODUtMC4zNjEtMS40MS0wLjcyNGwtMS4wMTMtMS4yNjRjLTAuNzk1LTEuMTU4LTEuNTU0LTEuNTItMi40NTgtMS4xOTNjLTEuMDQ4LDAuMjg4LTIuMTMyLDEuMDgzLTMuMjUzLDIuMzQ5Yy0xLjc3MSwxLjg0My0yLjk2NCw0LjAxMi0zLjYxNCw2LjYxNHYxNS4zNjRjMCwxLjM3MiwwLjQ3LDIuMzQ5LDEuNDQ1LDIuOTYzbDIuMjA1LDAuMzk2bDIuMzE0LDAuMjU0YzAuNTQyLDAuMDczLDAuNzU5LDAuMTgyLDAuNzU5LDAuNDdsLTAuMTA4LDAuMjUzbC0wLjYxNSwwLjE4MkgxNTcuODZjLTAuNTc4LDAtMC45MDItMC4xODItMC45MDItMC40N2wwLjU0MS0wLjQzNWwzLjI1NC0wLjI1NGMxLjI2Ni0wLjIxNiwyLjA2LTAuNjQ5LDIuNDk0LTEuMzAxbDAuNTQyLTEuNjI2VjQ2LjQ2MmwtMC4zNjEtMS41OTFsLTAuNjE1LTAuMzYyYy0wLjE4MS0wLjE4LTAuNDctMC4yODgtMC45MDItMC4zNjFjLTAuNTQyLTAuMDM2LTEuMTk0LDAuMDczLTEuODgsMC4zNjFsLTEuODQ0LDAuNTA3bC0xLjA0OC0wLjI1M2MtMC4xODEtMC4yNTQtMC4xMDktMC40MzQsMC4xNDQtMC41NDJsMS41NTUtMC42NTFjMy41NDItMS4wNDgsNi4zOTgtMi4xMzIsOC4zODYtMy4yNTRsMi40NTgtMS4zMzVsMS4wODUsMC4wNzFsMC40MzQsMC45MDJ2Ny45NTRjMi43MTEtNC40MSw0Ljg4LTcuMTIyLDYuMzYxLTguMDI1YzAuOTA0LTAuNTQxLDEuNzcxLTAuOTc3LDIuNDIyLTEuMTU2bDEuMjY2LTAuMTA4YzAuNzk1LTAuMDczLDEuNjk5LDAuMTgsMi43MTEsMC44MzJDMTg1LjMzMyw0MC4yNDQsMTg2LjA1NSw0MS40MzgsMTg2LjEyNyw0Mi45NTV6IE05NS45NDIsMjQuMDUxYy0wLjk3Ni0wLjkwNS0xLjQ0Ni0xLjk4OS0xLjM3NC0zLjI1NGMtMC4wNzItMS4zMzgsMC4zOTgtMi40OTQsMS4zNzQtMy4zOThjMC45MDMtMC45MDQsMS45ODgtMS4zNzQsMy4zMjUtMS4zNzRjMS4yNjYsMCwyLjM4NiwwLjQ3LDMuMjg5LDEuMzc0YzAuOTA0LDAuOTA0LDEuNDEsMi4wNiwxLjQxLDMuMzk4YzAsMS4yNjUtMC41MDYsMi4zNDktMS40MSwzLjI1NGMtMC45MDMsMC45MDMtMi4wMjMsMS4zNzMtMy4yODksMS4zNzNDOTcuOTMxLDI1LjQyNCw5Ni44NDYsMjQuOTU0LDk1Ljk0MiwyNC4wNTF6XCIvPlxuXHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8TWVudSByZWY9J21lbnUnIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBpdGVtID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dGhpcy5yZWZzWydtZW51J10uaGlnaGxpZ2h0QnlJdGVtKGl0ZW0pXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snbWVudSddLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBtZW51RGF0YSA9IEFwcFN0b3JlLm1lbnVDb250ZW50KClcblx0XHR2YXIgbWVudUl0ZW1zID0gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdHZhciBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGlkPXtpdGVtLmlkfSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8YSBocmVmPXtwYXRoVXJsfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0aW4tbnVtXCI+e2l0ZW1bJ2xhdGluLW51bSddfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9J21lbnUnIGlkPSdtZW51Jz4gXG5cdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ21lbnUnXSlcblx0XHRcblx0XHR0aGlzLml0ZW1zID0gW11cblx0XHR2YXIgYnRucyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCdsaScpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnRuID0gYnRuc1tpXVxuXHRcdFx0dGhpcy5pdGVtc1tpXSA9IHtcblx0XHRcdFx0ZWw6IGJ0bixcblx0XHRcdFx0aWQ6IGJ0bi5pZFxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0aGlnaGxpZ2h0QnlJdGVtKGl0ZW0pIHtcblxuXHRcdGlmKGl0ZW0uaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdH07XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRpZihidG4uaWQgPT0gaXRlbS5pZCkge1xuXHRcdFx0XHRkb20oYnRuLmVsKS5hZGRDbGFzcygnZW5hYmxlJylcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLmFkZENsYXNzKCdkaXNhYmxlJylcdFxuXHRcdFx0fSBcblx0XHR9O1xuXHR9XG5cdHJlbW92ZUhpZ2hsaWdodCgpIHtcblxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcGFyZW50Q3NzID0ge1xuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAocGFyZW50U2l6ZVswXSA+PiAxKSArICdweCcsXG5cdFx0XHR0b3A6IHdpbmRvd0ggLSAocGFyZW50U2l6ZVsxXSkgLSBBcHBDb25zdGFudHMuT1ZFUkFMTF9NQVJHSU4gKyAncHgnXG5cdFx0fVxuXHRcdGRvbSh0aGlzLnBhcmVudCkuc3R5bGUocGFyZW50Q3NzKVxuXHR9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQWENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLkFERF9QWF9DSElMRCwgdGhpcy5hZGQpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCwgdGhpcy5yZW1vdmUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1ob2xkZXJcIj48L2NhbnZhcz5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgY2FudmFzID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5jYW52YXMtaG9sZGVyJylbMF1cblx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcigwLCAwLCB7IHZpZXc6Y2FudmFzIH0pXG5cdFx0cmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkZcblxuXHRcdHRoaXMucGl4aSA9IHtcblx0XHRcdGNhbnZhczogY2FudmFzLFxuXHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyLFxuXHRcdFx0c3RhZ2U6IHN0YWdlXG5cdFx0fVxuXHR9XG5cdGFkZChpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLmFkZENoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVtb3ZlKGl0ZW0pIHtcblx0XHR0aGlzLnBpeGkuc3RhZ2UucmVtb3ZlQ2hpbGQoaXRlbS5jaGlsZClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHNjYWxlID0gMVxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3dIICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZXNpemUod2luZG93VyAqIHNjYWxlLCB3aW5kb3dIICogc2NhbGUpXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZW5kZXIodGhpcy5waXhpLnN0YWdlKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQmFzZVBhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5hZGRQWENoaWxkKHRoaXMuY29udGFpbmVyKSB9LCAwKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0c3VwZXIuc2V0dXBBbmltYXRpb25zKClcblx0fVxuXHRnZXRCYXNlUGFnZURvbShodG1sKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcblx0XHR2YXIgaWQgPSBjb250ZW50LmlkICsgJy1wYWdlJ1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9e2lkfSByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlLXdyYXBwZXInPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHMtaG9sZGVyXCI+e2h0bWx9PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcblx0XHRIZWxwZXJzLnJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcih0aGlzLmNvbnRhaW5lcilcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5yZW1vdmVQWENoaWxkKHRoaXMuY29udGFpbmVyKSB9LCAwKVxuXG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZXIgZnJvbSAnQmFzZVBhZ2VyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBIb21lIGZyb20gJ0hvbWUnXG5pbXBvcnQgV29ya09mQXJ0IGZyb20gJ1dvcmtPZkFydCdcbmltcG9ydCBBcmNoaXRlY3R1cmUgZnJvbSAnQXJjaGl0ZWN0dXJlJ1xuaW1wb3J0IFF1aW50ZXNzZW50aWFsbHkgZnJvbSAnUXVpbnRlc3NlbnRpYWxseSdcbmltcG9ydCBFY2xlY3RpYyBmcm9tICdFY2xlY3RpYydcbmltcG9ydCBTdHlsaXNoIGZyb20gJ1N0eWxpc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBhZ2VyIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBoYXNoID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHRcdHZhciB0eXBlID0gdW5kZWZpbmVkXG5cblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJ3dvcmstb2YtYXJ0Jzpcblx0XHRcdFx0dHlwZSA9IFdvcmtPZkFydFxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnYXJjaGl0ZWN0dXJlJzpcblx0XHRcdFx0dHlwZSA9IEFyY2hpdGVjdHVyZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncXVpbnRlc3NlbnRpYWxseSc6XG5cdFx0XHRcdHR5cGUgPSBRdWludGVzc2VudGlhbGx5XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdlY2xlY3RpYyc6XG5cdFx0XHRcdHR5cGUgPSBFY2xlY3RpY1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnc3R5bGlzaCc6XG5cdFx0XHRcdHR5cGUgPSBTdHlsaXNoXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gSG9tZVxuXHRcdH1cblx0XHR0aGlzLnNldHVwTmV3Q29tcG9uZW50KGhhc2gucGFyZW50LCB0eXBlKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjaGl0ZWN0dXJlIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHN1cGVyLmFuaW1hdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWNsZWN0aWMgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXMgPSBbXVxuXHRcdHZhciB2aWRlb1VybHMgPSBbICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcgXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHR2YXIgdmlkZW9TcHJ0ID0gSGVscGVycy5nZXRQWFZpZGVvKHZpZGVvVXJsc1tpXSwgMzIwLCA1MTApXG5cdFx0XHR0aGlzLnZpZGVvU3ByaXRlc1tpXSA9IHZpZGVvU3BydFxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIuYWRkQ2hpbGQodmlkZW9TcHJ0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy52aWRlb3NDb250YWluZXIpO1xuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHZpZGVvSCA9IHRoaXMudmlkZW9TcHJpdGVzWzBdLmhlaWdodFxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemUgPSBbIHdpbmRvd1cgKiAwLjgsIHZpZGVvSCBdXG5cblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci54ID0gKHdpbmRvd1cgPj4gMSkgLSAodGhpcy52aWRlb3NDb250YWluZXIuc2l6ZVswXSA+PiAxKVxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnkgPSAod2luZG93SCA+PiAxKSAtICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzFdID4+IDEpIC0gKHdpbmRvd0ggKiAwLjAxKVxuXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMV0ueCA9ICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzBdID4+IDEpIC0gKHRoaXMudmlkZW9TcHJpdGVzWzFdLndpZHRoID4+IDEpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMl0ueCA9IHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemVbMF0gLSB0aGlzLnZpZGVvU3ByaXRlc1sxXS53aWR0aFxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRkZXN0cm95KCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb1Nwcml0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2aWRlb1NwcnQgPSB0aGlzLnZpZGVvU3ByaXRlc1tpXVxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodmlkZW9TcHJ0KVxuXHRcdFx0VXRpbHMuRGVzdHJveVZpZGVvVGV4dHVyZSh2aWRlb1NwcnQudGV4dHVyZSlcblx0XHRcdHZpZGVvU3BydC50ZXh0dXJlLmRlc3Ryb3koKVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kZXN0cm95KClcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpbnRlc3NlbnRpYWxseSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0YW5pbWF0ZSgpIHtcblx0XHRzdXBlci5hbmltYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxpc2ggZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrT2ZBcnQgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFdJTkRPV19SRVNJWkU6ICdXSU5ET1dfUkVTSVpFJyxcblx0Q0hBTkdFX0FNQklFTlQ6ICdDSEFOR0VfQU1CSUVOVCcsXG5cblx0TEFORFNDQVBFOiAnTEFORFNDQVBFJyxcblx0UE9SVFJBSVQ6ICdQT1JUUkFJVCcsXG5cblx0TUVESUFfR0xPQkFMX1c6IDE5MjAsXG5cdE1FRElBX0dMT0JBTF9IOiAxMDgwLFxuXHRcblx0QUREX1BYX0NISUxEOiAnQUREX1BYX0NISUxEJyxcblx0UkVNT1ZFX1BYX0NISUxEOiAnUkVNT1ZFX1BYX0NISUxEJyxcblx0XG5cdE9WRVJBTExfTUFSR0lOOiA0MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJ2YXIgSGVscGVycyA9IHtcblxuICAgIGdldFBYVmlkZW86IGZ1bmN0aW9uKHVybCwgd2lkdGgsIGhlaWdodCwgdmFycykge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tVmlkZW8odXJsKVxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIHRydWUpXG4gICAgICAgIHZhciB2aWRlb1Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKVxuICAgICAgICB2aWRlb1Nwcml0ZS53aWR0aCA9IHdpZHRoXG4gICAgICAgIHZpZGVvU3ByaXRlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICByZXR1cm4gdmlkZW9TcHJpdGVcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyOiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnMiLCJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cbk5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZih0aGlzW2ldICYmIHRoaXNbaV0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpc1tpXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbiAgICBcdFxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdEFwcEFjdGlvbnMud2luZG93UmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsRXZlbnRzXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFByZWxvYWRlciAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpXG5cdFx0dGhpcy5xdWV1ZS5vbihcImNvbXBsZXRlXCIsIHRoaXMub25NYW5pZmVzdExvYWRDb21wbGV0ZWQsIHRoaXMpXG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2sgPSB1bmRlZmluZWRcblx0XHR0aGlzLmFsbE1hbmlmZXN0cyA9IFtdXG5cdH1cblx0bG9hZChtYW5pZmVzdCwgb25Mb2FkZWQpIHtcblxuXHRcdGlmKHRoaXMuYWxsTWFuaWZlc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxNYW5pZmVzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIG0gPSB0aGlzLmFsbE1hbmlmZXN0c1tpXVxuXHRcdFx0XHRpZihtLmxlbmd0aCA9PSBtYW5pZmVzdC5sZW5ndGggJiYgbVswXS5pZCA9PSBtYW5pZmVzdFswXS5pZCAmJiBtW20ubGVuZ3RoLTFdLmlkID09IG1hbmlmZXN0W21hbmlmZXN0Lmxlbmd0aC0xXS5pZCkge1xuXHRcdFx0XHRcdG9uTG9hZGVkKClcdFxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLmFsbE1hbmlmZXN0cy5wdXNoKG1hbmlmZXN0KVxuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrID0gb25Mb2FkZWRcbiAgICAgICAgdGhpcy5xdWV1ZS5sb2FkTWFuaWZlc3QobWFuaWZlc3QpXG5cdH1cblx0b25NYW5pZmVzdExvYWRDb21wbGV0ZWQoKSB7XG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2soKVxuXHR9XG5cdGdldENvbnRlbnRCeUlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUuZ2V0UmVzdWx0KGlkKVxuXHR9XG5cdGdldEltYWdlVVJMKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q29udGVudEJ5SWQoaWQpLmdldEF0dHJpYnV0ZShcInNyY1wiKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlclxuIiwiaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2FkcydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUm91dGVyIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnJvdXRpbmcgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRoYXNoZXIubmV3SGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5vbGRIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5fc2V0dXBDcm9zc3JvYWRzKClcblx0fVxuXHRiZWdpblJvdXRpbmcoKSB7XG5cdFx0aGFzaGVyLmluaXQoKVxuXHR9XG5cdF9zZXR1cENyb3Nzcm9hZHMoKSB7XG5cdFx0dmFyIGJhc2ljU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfScsIHRoaXMuX29uRmlyc3REZWdyZWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDMpXG5cdFx0YmFzaWNTZWN0aW9uLnJ1bGVzID0ge1xuXHQgICAgICAgIHBhZ2UgOiBbJyAnLCAnd29yay1vZi1hcnQnLCAnd29ya3MnLCAnY29udGFjdCddIC8vdmFsaWQgc2VjdGlvbnNcblx0ICAgIH1cblx0fVxuXHRfb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocGFnZUlkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdC8vIHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKCcnKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdHZhciBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdHZhciBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0dmFyIGhhc2ggPSB1cmxcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIEFwcFN0b3JlLkRhdGEucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmZ1bmN0aW9uIF9wYWdlUm91dGVJZENoYW5nZWQoaWQpIHtcbn1cbmZ1bmN0aW9uIF9nZXRQYWdlQ29udGVudCgpIHtcbiAgICB2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcbiAgICB2YXIgaGFzaCA9IGhhc2hPYmouaGFzaC5sZW5ndGggPCAxID8gJy8nIDogaGFzaE9iai5oYXNoXG4gICAgdmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdbaGFzaF1cbiAgICByZXR1cm4gY29udGVudFxufVxuZnVuY3Rpb24gX2dldE1lbnVDb250ZW50KCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRNZW51SXRlbUJ5SWQoaWQpIHtcblxuICAgIHZhciBtZW51SXRlbXMgPSBBcHBTdG9yZS5EYXRhLm1lbnVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtZW51SXRlbXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5mdW5jdGlvbiBfZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpIHtcblxuICAgIHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuICAgIHZhciBpZCA9IGhhc2hPYmouaGFzaCA9PSAnJyA/ICdob21lJyA6IGhhc2hPYmouaGFzaFxuXG4gICAgdmFyIG1lbnVJdGVtcyA9IEFwcFN0b3JlLkRhdGEubWVudVxuICAgIHZhciBpdGVtO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbnVJdGVtc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgaXRlbSA9IG1lbnVJdGVtc1tpXVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKGl0ZW0gPT0gdW5kZWZpbmVkKSA/IHsgaWQ6ICdob21lJyB9IDogaXRlbVxufVxuZnVuY3Rpb24gX2dldEFwcERhdGEoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFcbn1cbmZ1bmN0aW9uIF9nZXREZWZhdWx0Um91dGUoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGEuY29udGVudFxufVxuZnVuY3Rpb24gX3dpbmRvd1dpZHRoSGVpZ2h0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG59XG5cbnZhciBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0eXBlLCBpdGVtKVxuICAgIH0sXG4gICAgcGFnZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldFBhZ2VDb250ZW50KClcbiAgICB9LFxuICAgIG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51Q29udGVudCgpXG4gICAgfSxcbiAgICBnZXRDdXJyZW50UGFnZU1lbnVJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcbiAgICB9LFxuICAgIGdldE1lbnVJdGVtQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51SXRlbUJ5SWQoaWQpXG4gICAgfSxcbiAgICBhcHBEYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRBcHBEYXRhKClcbiAgICB9LFxuICAgIGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcbiAgICB9LFxuICAgIGdsb2JhbENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuICAgIH0sXG4gICAgV2luZG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aW5kb3dXaWR0aEhlaWdodCgpXG4gICAgfSxcbiAgICBPcmllbnRhdGlvbjogQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSxcbiAgICBkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuICAgICAgICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQ6XG4gICAgICAgICAgICAgICAgX3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24uaXRlbSlcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy53ID0gYWN0aW9uLml0ZW0ud2luZG93V1xuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy5oID0gYWN0aW9uLml0ZW0ud2luZG93SFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLk9yaWVudGF0aW9uID0gKEFwcFN0b3JlLldpbmRvdy53ID4gQXBwU3RvcmUuV2luZG93LmgpID8gQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSA6IEFwcENvbnN0YW50cy5QT1JUUkFJVFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSwgYWN0aW9uLml0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxud2luZG93LkFwcFN0b3JlID0gQXBwU3RvcmVcblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8c3ZnIHsuLi50aGlzLnByb3BzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3N2Zz5cbiAgICB9XG59XG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIERlc3Ryb3lWaWRlbyh2aWRlbykge1xuICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB2aWRlby5zcmMgPSAnJztcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdmlkZW8uY2hpbGROb2Rlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgXHRjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcbiAgICAgICAgXHQvLyBXb3JraW5nIHdpdGggYSBwb2x5ZmlsbCBvciB1c2UganF1ZXJ5XG4gICAgICAgIFx0Y2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRGVzdHJveVZpZGVvVGV4dHVyZSh0ZXh0dXJlKSB7XG4gICAgXHR2YXIgdmlkZW8gPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZVxuICAgICAgICBVdGlscy5EZXN0cm95VmlkZW8odmlkZW8pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG4gXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdFx0dGhpcy5zZXR1cEFuaW1hdGlvbnMoKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5pc1JlYWR5KHRoaXMucHJvcHMuaGFzaCksIDApXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tKHRoaXMucGFyZW50LCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHRoaXMucGFyZW50LCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9KVxuXG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnRsSW4ucGxheSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMudGxPdXQucGxheSgwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpLCAwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCksIDApXG5cdH1cblx0cmVzaXplKCkge1xuXHR9XG5cdGZvcmNlVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5jbGVhcigpXG5cdFx0dGhpcy50bE91dC5jbGVhcigpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UGFnZXJTdG9yZSwgUGFnZXJBY3Rpb25zLCBQYWdlckNvbnN0YW50cywgUGFnZXJEaXNwYXRjaGVyfSBmcm9tICdQYWdlcidcbmltcG9ydCBfY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvU3RyaW5nL2NhcGl0YWxpemUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICdwYWdlLWInXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25JbiA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4uYmluZCh0aGlzKVxuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0ID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMuY29tcG9uZW50cyA9IHtcblx0XHRcdCduZXctY29tcG9uZW50JzogdW5kZWZpbmVkLFxuXHRcdFx0J29sZC1jb21wb25lbnQnOiB1bmRlZmluZWRcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwYWdlcy1jb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYSc+PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RoaXMuZGl2U3R5bGV9IHJlZj0ncGFnZS1iJz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0fVxuXHRzZXR1cE5ld0NvbXBvbmVudChoYXNoLCBUeXBlKSB7XG5cdFx0dmFyIGlkID0gX2NhcGl0YWxpemUoaGFzaC5yZXBsYWNlKFwiL1wiLCBcIlwiKSlcblx0XHR0aGlzLm9sZFBhZ2VEaXZSZWYgPSB0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICh0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID09PSAncGFnZS1hJykgPyAncGFnZS1iJyA6ICdwYWdlLWEnXG5cdFx0dmFyIGVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBwYWdlID0gXG5cdFx0XHQ8VHlwZSBcblx0XHRcdFx0aWQ9e3RoaXMuY3VycmVudFBhZ2VEaXZSZWZ9IFxuXHRcdFx0XHRpc1JlYWR5PXt0aGlzLm9uUGFnZVJlYWR5fSBcblx0XHRcdFx0aGFzaD17aGFzaH1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddID0gdGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J11cblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSA9IFJlYWN0LnJlbmRlcihwYWdlLCBlbClcblx0XHRpZihQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPT09IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10uZm9yY2VVbm1vdW50KClcblx0XHR9XG5cdH1cblx0b25QYWdlUmVhZHkoaGFzaCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblBhZ2VSZWFkeShoYXNoKVxuXHR9XG5cdHdpbGxQYWdlVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMuc3dpdGNoUGFnZXNEaXZJbmRleCgpXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25JbigpXG5cdH1cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2RpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZScpXG5cdFx0UGFnZXJBY3Rpb25zLnBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoKClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHR9XG5cdGRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2RpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUnKVxuXHRcdFBhZ2VyQWN0aW9ucy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10udXBkYXRlKClcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ucmVzaXplKClcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCduZXctY29tcG9uZW50Jylcblx0fVxufVxuIl19
