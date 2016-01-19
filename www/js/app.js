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
    },
    introFinished: function introFinished() {
        _AppDispatcher2['default'].handleViewAction({
            actionType: _AppConstants2['default'].INTRO_FINISHED,
            item: undefined
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

var _domquery = require('domquery');

var _domquery2 = _interopRequireDefault(_domquery);

var _AppActions = require('./../actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var FrontContainer = (function (_BaseComponent) {
	_inherits(FrontContainer, _BaseComponent);

	function FrontContainer(props) {
		_classCallCheck(this, FrontContainer);

		_get(Object.getPrototypeOf(FrontContainer.prototype), 'constructor', this).call(this, props);

		this.introFinished = this.introFinished.bind(this);
		this.didHasherChange = this.didHasherChange.bind(this);
	}

	_createClass(FrontContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_AppStore2['default'].on(_AppConstants2['default'].PAGE_HASHER_CHANGED, this.didHasherChange);
			_AppStore2['default'].on(_AppConstants2['default'].INTRO_FINISHED, this.introFinished);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ id: 'front-container', ref: 'front-container' },
				_react2['default'].createElement(
					'div',
					{ className: 'begin-slide', ref: 'begin-slide' },
					_react2['default'].createElement(
						'div',
						{ className: 'icon' },
						_react2['default'].createElement(
							_SVGComponent2['default'],
							{ width: '100%', viewBox: '0 0 187.086 73.863' },
							_react2['default'].createElement('path', { d: 'M141.956,39.63c-2.023-0.903-4.265-1.373-6.687-1.483l-6.688,0.398c-1.807,0.325-3.542,0.977-5.277,1.989c-1.951,1.156-3.578,2.603-4.879,4.337c-3.325,4.156-4.519,9.036-3.614,14.783c1.012,6.073,4.156,10.229,9.325,12.327c3.977,1.626,8.386,1.95,13.121,0.902c4.518-0.939,8.097-3.108,10.808-6.505c3.181-4.014,4.192-8.965,3-14.821C149.909,45.775,146.836,41.799,141.956,39.63z M141.849,65.909c-1.555,2.89-3.903,4.626-7.121,5.241c-3.072,0.541-5.819-0.652-8.241-3.508c-2.277-2.71-3.688-6.254-4.085-10.698c-0.542-4.483,0-8.278,1.481-11.388c1.627-3.434,4.121-5.241,7.375-5.565c3.361-0.288,6.145,0.795,8.35,3.254c2.241,2.493,3.506,6.109,3.94,10.988C143.908,59.113,143.367,62.945,141.849,65.909z M40.566,0.375H4.312c-0.723,0-1.085,0.216-1.085,0.722l0.29,0.543l1.446,0.288L8.468,2.11l3.434,0.433c2.458,0.543,3.723,1.916,3.723,4.157v57.328c-0.036,1.773-0.217,3.074-0.542,3.94l-0.903,1.267c-0.47,0.541-1.446,0.939-2.819,1.119l-8.856,0.543c-1.012,0-1.554,0.254-1.554,0.724c0,0.433,0.361,0.686,1.121,0.686h46.231c5.603,0,10.591-1.048,15.037-3.071c4.157-1.989,7.771-4.7,10.735-8.205c2.711-3.327,4.808-7.049,6.326-11.279c1.337-4.012,1.988-8.168,1.988-12.469c0-8.242-1.988-15.362-5.964-21.363C69.483,5.543,57.555,0.375,40.566,0.375z M68.833,46.28c-1.193,5.531-3.145,10.049-5.856,13.591c-1.626,2.169-3.108,3.868-4.554,5.062c-1.626,1.265-3.506,2.312-5.494,3.035c-1.988,0.651-4.519,1.121-7.483,1.446l-11.06,0.398h-4.771l-1.446-0.217c-0.289-0.182-0.433-0.688-0.433-1.411V4.532l0.252-1.445c0.253-0.435,0.795-0.615,1.627-0.543h7.337c11.893,0,20.495,3.543,25.736,10.7c2.711,3.687,4.627,8.024,5.892,12.976c0.904,3.435,1.337,6.615,1.337,9.579C69.917,39.16,69.556,42.667,68.833,46.28z M90.357,44.835l0.943-0.108l2.112-0.579l1.88,0.182c0.542,0.362,0.831,0.977,0.831,1.771v21.001l-0.47,2.603c-0.326,0.723-1.157,1.192-2.53,1.372l-2.53,0.074c-0.795,0-1.157,0.18-1.084,0.614c0,0.288,0.217,0.47,0.65,0.47h19.266c0.435,0,0.687-0.11,0.687-0.435c-0.072-0.396-0.506-0.578-1.337-0.578c-2.35,0-3.867-0.325-4.519-0.977c-0.542-0.541-0.831-1.446-0.831-2.71v-26.46c0-1.301-0.181-2.023-0.542-2.095l-1.085,0.107c-0.434,0.18-1.41,0.615-2.782,1.41c-2.242,1.264-4.88,2.277-7.88,3.071c-1.266,0.361-1.808,0.76-1.627,1.193L90.357,44.835z M186.127,42.955c0.073,1.266-0.289,2.24-1.084,3c-0.723,0.615-1.445,0.795-2.096,0.615c-0.615-0.108-1.085-0.361-1.41-0.724l-1.013-1.264c-0.795-1.158-1.554-1.52-2.458-1.193c-1.048,0.288-2.132,1.083-3.253,2.349c-1.771,1.843-2.964,4.012-3.614,6.614v15.364c0,1.372,0.47,2.349,1.445,2.963l2.205,0.396l2.314,0.254c0.542,0.073,0.759,0.182,0.759,0.47l-0.108,0.253l-0.615,0.182H157.86c-0.578,0-0.902-0.182-0.902-0.47l0.541-0.435l3.254-0.254c1.266-0.216,2.06-0.649,2.494-1.301l0.542-1.626V46.462l-0.361-1.591l-0.615-0.362c-0.181-0.18-0.47-0.288-0.902-0.361c-0.542-0.036-1.194,0.073-1.88,0.361l-1.844,0.507l-1.048-0.253c-0.181-0.254-0.109-0.434,0.144-0.542l1.555-0.651c3.542-1.048,6.398-2.132,8.386-3.254l2.458-1.335l1.085,0.071l0.434,0.902v7.954c2.711-4.41,4.88-7.122,6.361-8.025c0.904-0.541,1.771-0.977,2.422-1.156l1.266-0.108c0.795-0.073,1.699,0.18,2.711,0.832C185.333,40.244,186.055,41.438,186.127,42.955z M95.942,24.051c-0.976-0.905-1.446-1.989-1.374-3.254c-0.072-1.338,0.398-2.494,1.374-3.398c0.903-0.904,1.988-1.374,3.325-1.374c1.266,0,2.386,0.47,3.289,1.374c0.904,0.904,1.41,2.06,1.41,3.398c0,1.265-0.506,2.349-1.41,3.254c-0.903,0.903-2.023,1.373-3.289,1.373C97.931,25.424,96.846,24.954,95.942,24.051z' })
						)
					),
					_react2['default'].createElement('div', { className: 'background' })
				),
				_react2['default'].createElement(
					'a',
					{ href: '#/' },
					_react2['default'].createElement(
						'div',
						{ className: 'logo', ref: 'logo' },
						_react2['default'].createElement(
							_SVGComponent2['default'],
							{ width: '100%', viewBox: '0 0 187.086 73.863' },
							_react2['default'].createElement('path', { d: 'M141.956,39.63c-2.023-0.903-4.265-1.373-6.687-1.483l-6.688,0.398c-1.807,0.325-3.542,0.977-5.277,1.989c-1.951,1.156-3.578,2.603-4.879,4.337c-3.325,4.156-4.519,9.036-3.614,14.783c1.012,6.073,4.156,10.229,9.325,12.327c3.977,1.626,8.386,1.95,13.121,0.902c4.518-0.939,8.097-3.108,10.808-6.505c3.181-4.014,4.192-8.965,3-14.821C149.909,45.775,146.836,41.799,141.956,39.63z M141.849,65.909c-1.555,2.89-3.903,4.626-7.121,5.241c-3.072,0.541-5.819-0.652-8.241-3.508c-2.277-2.71-3.688-6.254-4.085-10.698c-0.542-4.483,0-8.278,1.481-11.388c1.627-3.434,4.121-5.241,7.375-5.565c3.361-0.288,6.145,0.795,8.35,3.254c2.241,2.493,3.506,6.109,3.94,10.988C143.908,59.113,143.367,62.945,141.849,65.909z M40.566,0.375H4.312c-0.723,0-1.085,0.216-1.085,0.722l0.29,0.543l1.446,0.288L8.468,2.11l3.434,0.433c2.458,0.543,3.723,1.916,3.723,4.157v57.328c-0.036,1.773-0.217,3.074-0.542,3.94l-0.903,1.267c-0.47,0.541-1.446,0.939-2.819,1.119l-8.856,0.543c-1.012,0-1.554,0.254-1.554,0.724c0,0.433,0.361,0.686,1.121,0.686h46.231c5.603,0,10.591-1.048,15.037-3.071c4.157-1.989,7.771-4.7,10.735-8.205c2.711-3.327,4.808-7.049,6.326-11.279c1.337-4.012,1.988-8.168,1.988-12.469c0-8.242-1.988-15.362-5.964-21.363C69.483,5.543,57.555,0.375,40.566,0.375z M68.833,46.28c-1.193,5.531-3.145,10.049-5.856,13.591c-1.626,2.169-3.108,3.868-4.554,5.062c-1.626,1.265-3.506,2.312-5.494,3.035c-1.988,0.651-4.519,1.121-7.483,1.446l-11.06,0.398h-4.771l-1.446-0.217c-0.289-0.182-0.433-0.688-0.433-1.411V4.532l0.252-1.445c0.253-0.435,0.795-0.615,1.627-0.543h7.337c11.893,0,20.495,3.543,25.736,10.7c2.711,3.687,4.627,8.024,5.892,12.976c0.904,3.435,1.337,6.615,1.337,9.579C69.917,39.16,69.556,42.667,68.833,46.28z M90.357,44.835l0.943-0.108l2.112-0.579l1.88,0.182c0.542,0.362,0.831,0.977,0.831,1.771v21.001l-0.47,2.603c-0.326,0.723-1.157,1.192-2.53,1.372l-2.53,0.074c-0.795,0-1.157,0.18-1.084,0.614c0,0.288,0.217,0.47,0.65,0.47h19.266c0.435,0,0.687-0.11,0.687-0.435c-0.072-0.396-0.506-0.578-1.337-0.578c-2.35,0-3.867-0.325-4.519-0.977c-0.542-0.541-0.831-1.446-0.831-2.71v-26.46c0-1.301-0.181-2.023-0.542-2.095l-1.085,0.107c-0.434,0.18-1.41,0.615-2.782,1.41c-2.242,1.264-4.88,2.277-7.88,3.071c-1.266,0.361-1.808,0.76-1.627,1.193L90.357,44.835z M186.127,42.955c0.073,1.266-0.289,2.24-1.084,3c-0.723,0.615-1.445,0.795-2.096,0.615c-0.615-0.108-1.085-0.361-1.41-0.724l-1.013-1.264c-0.795-1.158-1.554-1.52-2.458-1.193c-1.048,0.288-2.132,1.083-3.253,2.349c-1.771,1.843-2.964,4.012-3.614,6.614v15.364c0,1.372,0.47,2.349,1.445,2.963l2.205,0.396l2.314,0.254c0.542,0.073,0.759,0.182,0.759,0.47l-0.108,0.253l-0.615,0.182H157.86c-0.578,0-0.902-0.182-0.902-0.47l0.541-0.435l3.254-0.254c1.266-0.216,2.06-0.649,2.494-1.301l0.542-1.626V46.462l-0.361-1.591l-0.615-0.362c-0.181-0.18-0.47-0.288-0.902-0.361c-0.542-0.036-1.194,0.073-1.88,0.361l-1.844,0.507l-1.048-0.253c-0.181-0.254-0.109-0.434,0.144-0.542l1.555-0.651c3.542-1.048,6.398-2.132,8.386-3.254l2.458-1.335l1.085,0.071l0.434,0.902v7.954c2.711-4.41,4.88-7.122,6.361-8.025c0.904-0.541,1.771-0.977,2.422-1.156l1.266-0.108c0.795-0.073,1.699,0.18,2.711,0.832C185.333,40.244,186.055,41.438,186.127,42.955z M95.942,24.051c-0.976-0.905-1.446-1.989-1.374-3.254c-0.072-1.338,0.398-2.494,1.374-3.398c0.903-0.904,1.988-1.374,3.325-1.374c1.266,0,2.386,0.47,3.289,1.374c0.904,0.904,1.41,2.06,1.41,3.398c0,1.265-0.506,2.349-1.41,3.254c-0.903,0.903-2.023,1.373-3.289,1.373C97.931,25.424,96.846,24.954,95.942,24.051z' })
						)
					)
				),
				_react2['default'].createElement(_Menu2['default'], { ref: 'menu' })
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			this.beginSlide = _react2['default'].findDOMNode(this.refs['begin-slide']);
			this.logo = _react2['default'].findDOMNode(this.refs['logo']);

			setTimeout(function () {
				(0, _domquery2['default'])(_this.beginSlide).addClass('transition-in');
			}, 1000);
			setTimeout(function () {
				(0, _domquery2['default'])(_this.beginSlide).removeClass('transition-in');(0, _domquery2['default'])(_this.beginSlide).addClass('transition-out');
			}, 4000);
			// setTimeout(()=>{ AppActions.introFinished() }, 5000)
			setTimeout(function () {
				_AppActions2['default'].introFinished();
			}, 500);
		}
	}, {
		key: 'didHasherChange',
		value: function didHasherChange() {
			var item = _AppStore2['default'].getCurrentPageMenuItem();
			this.refs['menu'].highlightByItem(item);
		}
	}, {
		key: 'introFinished',
		value: function introFinished() {
			(0, _domquery2['default'])(this.beginSlide).remove();
			_AppStore2['default'].off(_AppConstants2['default'].INTRO_FINISHED, this.introFinished);

			this.refs['menu'].transitionIn();
			(0, _domquery2['default'])(this.logo).addClass('transition-in');
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			this.refs['menu'].resize();

			this.beginSlide.style.width = windowW + 'px';
			this.beginSlide.style.height = windowH + 'px';
		}
	}]);

	return FrontContainer;
})(_BaseComponent3['default']);

exports['default'] = FrontContainer;
module.exports = exports['default'];

},{"./../../pager/components/BaseComponent":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BaseComponent.js","./../actions/AppActions":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/actions/AppActions.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../svg/SVGComponent":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/svg/SVGComponent.js","./Menu":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Menu.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Menu.js":[function(require,module,exports){
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
		key: 'transitionIn',
		value: function transitionIn() {
			(0, _domquery2['default'])(this.parent).addClass('transition-in');
		}
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
			this.tlIn.fromTo(this.elementsHolder, 1, { opacity: 0 }, { opacity: 1, ease: Expo.easeInOut }, 2);
			this.tlIn.fromTo(this.container, 1, { alpha: 0 }, { alpha: 1, ease: Expo.easeInOut }, 2);

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
				frontHolder = _react2['default'].createElement('div', null);
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

var _InspirationSpark = require('./pages/InspirationSpark');

var _InspirationSpark2 = _interopRequireDefault(_InspirationSpark);

var _Architecture = require('./pages/Architecture');

var _Architecture2 = _interopRequireDefault(_Architecture);

var _Quintaessence = require('./pages/Quintaessence');

var _Quintaessence2 = _interopRequireDefault(_Quintaessence);

var _CreativityInnovation = require('./pages/CreativityInnovation');

var _CreativityInnovation2 = _interopRequireDefault(_CreativityInnovation);

var _Style = require('./pages/Style');

var _Style2 = _interopRequireDefault(_Style);

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
				case 'inspiration-spark':
					type = _InspirationSpark2['default'];
					break;
				case 'architecture':
					type = _Architecture2['default'];
					break;
				case 'quintaessence':
					type = _Quintaessence2['default'];
					break;
				case 'creativity-innovation':
					type = _CreativityInnovation2['default'];
					break;
				case 'style':
					type = _Style2['default'];
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

},{"./../../pager/components/BasePager":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/pager/components/BasePager.js","./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../services/Router":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/services/Router.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./pages/Architecture":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Architecture.js","./pages/CreativityInnovation":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/CreativityInnovation.js","./pages/Home":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Home.js","./pages/InspirationSpark":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/InspirationSpark.js","./pages/Quintaessence":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Quintaessence.js","./pages/Style":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Style.js","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Architecture.js":[function(require,module,exports){
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
				var videoPath = 'video/architecture/' + item.filename;
				var src_mp4 = videoPath + '.mp4';
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
						{ className: 'media' },
						_react2['default'].createElement(
							'video',
							{ width: '100%' },
							_react2['default'].createElement('source', { type: 'video/mp4', src: src_mp4, autoPlay: true })
						)
					),
					_react2['default'].createElement('div', { className: 'description', dangerouslySetInnerHTML: { __html: item.description } })
				);
			});

			return this.getBasePageDom(_react2['default'].createElement(
				'div',
				{ className: 'inside-wrapper' },
				_react2['default'].createElement(
					'div',
					{ ref: 'videos-container', className: 'videos-container' },
					videos
				)
			));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.videosContainer = _react2['default'].findDOMNode(this.refs['videos-container']);

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
				var video = (0, _domquery2['default'])(item).select('video')[0];
				this.videoItems[i] = {
					el: item,
					video: video,
					mediaEl: (0, _domquery2['default'])(item).select('.media')[0],
					titleEl: (0, _domquery2['default'])(item).select('.title')[0],
					descriptionEl: (0, _domquery2['default'])(item).select('.description')[0],
					isPlaying: false,
					index: i
				};
			};

			_get(Object.getPrototypeOf(Architecture.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'checkVideosViewportFocus',
		value: function checkVideosViewportFocus() {
			var windowH = _AppStore2['default'].Window.h;
			var scrollt = (0, _simpleScrolltop2['default'])();
			var margin = windowH * 0.1;
			for (var i = 0; i < this.videoItems.length; i++) {
				var item = this.videoItems[i];
				if (scrollt + windowH > item.top + margin * 2 && scrollt < item.top + item.size[1] - margin) {
					if (item.isPlaying != true) {
						item.video.play();
						item.tl.play(0);
						item.isPlaying = true;
					}
				} else {
					if (item.isPlaying != false) {
						item.video.pause();
						item.video.currentTime = 0;
						item.tl.reverse();
						item.isPlaying = false;
					}
				}
			};
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

			this.checkVideosViewportFocus();

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
				var marginTop = 240;
				var marginBottom = 240;
				for (var i = 0; i < _this.videoItems.length; i++) {
					var item = _this.videoItems[i];
					var itemSize = (0, _elementSize2['default'])(item.el);
					var h = itemSize[1] + (marginTop + marginBottom);
					item.size = itemSize;
					item.top = _this.pageHeight + marginTop;
					item.el.style.top = _this.pageHeight + marginTop + 'px';
					if ((0, _domquery2['default'])(item.el).hasClass('right')) item.el.style.left = _this.videosContainer.offsetWidth - itemSize[0] + 'px';
					item.y = 0;

					item.pLines = new SplitText(item.descriptionEl, { type: 'lines' }).lines;
					item.titleChars = _Utils2['default'].TranformArrayFromMiddleAndOut(new SplitText(item.titleEl, { tyle: 'chars' }).chars);

					item.tl = new TimelineLite();
					item.tl.staggerFrom(item.titleChars, 1, { opacity: 0, y: 20, scaleY: 0.8, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.05, 0.3);
					item.tl.from(item.video, 1, { opacity: 0, y: 20, scaleY: 2, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.5);
					item.tl.staggerFrom(item.pLines, 1, { opacity: 0, y: 20, scaleY: 0.8, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.05, 0.8);
					item.tl.pause(0);

					item.isPlaying = false;

					_this.pageHeight += h;
				};
				_this.videosContainer.style.height = _this.pageHeight + 'px';
				_this.pageHeight -= windowH;
			}, 0);

			_get(Object.getPrototypeOf(Architecture.prototype), 'resize', this).call(this);
		}
	}]);

	return Architecture;
})(_Page3['default']);

exports['default'] = Architecture;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","element-size":"element-size","react":"react","simple-scrolltop":"simple-scrolltop"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/CreativityInnovation.js":[function(require,module,exports){
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

var CreativityInnovation = (function (_Page) {
	_inherits(CreativityInnovation, _Page);

	function CreativityInnovation(props) {
		_classCallCheck(this, CreativityInnovation);

		_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'constructor', this).call(this, props);

		this.time = 0;
		this.debugMode = false;
		this.circles = [];
		this.rects = [];

		this.M = {
			Engine: Matter.Engine,
			World: Matter.World,
			Body: Matter.Body,
			Bodies: Matter.Bodies,
			Common: Matter.Common,
			Composites: Matter.Composites,
			Composite: Matter.Composite,
			Events: Matter.Events,
			Mouse: Matter.Mouse,
			MouseConstraint: Matter.MouseConstraint
		};

		this.explosion = this.explosion.bind(this);
	}

	_createClass(CreativityInnovation, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.parent = _react2['default'].findDOMNode(this.refs['page-wrapper']);

			var el = this.debugMode ? this.parent : undefined;
			var engine = this.engine = this.M.Engine.create(el, {
				render: {
					options: {
						showAngleIndicator: true,
						wireframes: true
					}
				}
			});

			engine.world.gravity.x = 0;
			engine.world.gravity.y = 0;

			var bodyOptions = {
				frictionAir: 0,
				friction: 0,
				restitution: 0.6
			};

			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			var patternPath = 'image/patterns/';
			var patternUrls = ['brown-x-pattern.jpg', 'pattern.jpg', 'brown-x-pattern.jpg', 'pattern.jpg'];
			var circleRadius = 60;

			// Add circles
			for (var i = 0; i < 4; i++) {
				var c = this.M.Bodies.circle(windowW >> 1, windowH >> 1, circleRadius, bodyOptions);
				this.M.World.add(engine.world, c);

				var circle = _Helpers2['default'].getGravityCircle(patternPath + patternUrls[i], circleRadius);
				this.container.addChild(circle.container);

				circle.body = c;

				this.circles[i] = circle;
			}

			var rectW = 200;
			var rectH = 60;

			// Add rects
			for (var i = 0; i < 4; i++) {
				var r = this.M.Bodies.rectangle(windowW >> 1, windowH >> 1, rectW, rectH, bodyOptions);
				this.M.World.add(engine.world, r);

				var rect = _Helpers2['default'].getGravityRect(patternPath + patternUrls[i], rectW, rectH);
				this.container.addChild(rect.container);

				rect.body = r;

				this.rects[i] = rect;
			};

			// Add Walls
			this.addWalls();

			// run the engine
			this.M.Engine.run(engine);

			setInterval(this.explosion, 5000);

			this.explosion();

			// an example of using collisionStart event on an engine
			this.M.Events.on(engine, 'collisionStart', function (event) {
				console.log('yo');
				var pairs = event.pairs;
				for (var i = 0; i < pairs.length; i++) {
					var pair = pairs[i];
					console.log(pair.bodyA, pair.bodyB);
				}
			});

			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'addWalls',
		value: function addWalls() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			var size = 50;
			var wallW = windowW;
			var wallH = windowH;
			this.M.World.add(this.engine.world, [this.M.Bodies.rectangle(0, -size / 2, wallW * 2, size, { isStatic: true }), this.M.Bodies.rectangle(-size / 2, 0, size, wallH * 2, { isStatic: true }), this.M.Bodies.rectangle(0, windowH + size / 2, wallW * 2, size, { isStatic: true }), this.M.Bodies.rectangle(windowW + size / 2, 0, size, wallH * 2, { isStatic: true })]);
		}
	}, {
		key: 'explosion',
		value: function explosion() {
			var bodies = this.M.Composite.allBodies(this.engine.world);

			for (var i = 0; i < bodies.length; i++) {
				var body = bodies[i];

				if (!body.isStatic) {
					var forceMagnitude = 0.001 * body.mass;

					// apply extra force
					this.M.Body.applyForce(body, { x: 0, y: 0 }, {
						x: (forceMagnitude + Math.random() * forceMagnitude) * this.M.Common.choose([1, -1]),
						y: -forceMagnitude + Math.random() * -forceMagnitude
					});

					// add bounds to velocity
					var bound = 0.5;
					if (Matter.Vector.magnitude(body.velocity) > bound) {
						this.M.Body.setVelocity(body, { x: Math.min(bound, body.velocity.x), y: Math.min(bound, body.velocity.x) });
					}

					// add bounds to rotation
					if (body.angularSpeed > 0.02) {
						this.M.Body.setAngularVelocity(body, body.angularVelocity * -0.1);
					}
				}
			}
		}
	}, {
		key: 'update',
		value: function update() {

			this.time += 0.005;
			this.engine.world.gravity.y = Math.sin(this.time) * 0.01;

			for (var i = 0; i < this.circles.length; i++) {
				var circle = this.circles[i];
				circle.container.x = circle.body.position.x;
				circle.container.y = circle.body.position.y;
				circle.container.rotation = circle.body.angle;
			};

			for (var i = 0; i < this.rects.length; i++) {
				var rect = this.rects[i];
				rect.container.x = rect.body.position.x;
				rect.container.y = rect.body.position.y;
				rect.container.rotation = rect.body.angle;
			};

			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			if (this.debugMode) {
				var canvas = this.engine.render.canvas;
				canvas.style.width = windowW + 'px';
				canvas.style.height = windowH + 'px';
				canvas.width = windowW;
				canvas.height = windowH;
			}

			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'resize', this).call(this);
		}
	}]);

	return CreativityInnovation;
})(_Page3['default']);

exports['default'] = CreativityInnovation;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Home.js":[function(require,module,exports){
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

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/InspirationSpark.js":[function(require,module,exports){
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

var InspirationSpark = (function (_Page) {
	_inherits(InspirationSpark, _Page);

	function InspirationSpark(props) {
		_classCallCheck(this, InspirationSpark);

		_get(Object.getPrototypeOf(InspirationSpark.prototype), 'constructor', this).call(this, props);
	}

	_createClass(InspirationSpark, [{
		key: 'render',
		value: function render() {

			return this.getBasePageDom(_react2['default'].createElement('div', null));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'resize', this).call(this);
		}
	}]);

	return InspirationSpark;
})(_Page3['default']);

exports['default'] = InspirationSpark;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Quintaessence.js":[function(require,module,exports){
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

var Quintaessence = (function (_Page) {
	_inherits(Quintaessence, _Page);

	function Quintaessence(props) {
		_classCallCheck(this, Quintaessence);

		_get(Object.getPrototypeOf(Quintaessence.prototype), 'constructor', this).call(this, props);

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

	_createClass(Quintaessence, [{
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

			_get(Object.getPrototypeOf(Quintaessence.prototype), 'componentDidMount', this).call(this);
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

			this.dragVars.force += 8 * this.dragVars.direction * Math.min(distance, 100);
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

			this.dragVars.force += (0.000001 - this.dragVars.force) * 0.4;

			// update mc current frame
			var newFrame = Math.floor(this.bg.currentFrame + this.dragVars.force);
			this.bg.currentFrame = newFrame;
			if (this.bg.currentFrame > this.bg.totalFrames) this.bg.currentFrame = 0;
			if (this.bg.currentFrame < 0) this.bg.currentFrame = this.bg.totalFrames;
			this.bg.mc.gotoAndStop(this.bg.currentFrame);

			_get(Object.getPrototypeOf(Quintaessence.prototype), 'update', this).call(this);
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

			_get(Object.getPrototypeOf(Quintaessence.prototype), 'resize', this).call(this);
		}
	}]);

	return Quintaessence;
})(_Page3['default']);

exports['default'] = Quintaessence;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Style.js":[function(require,module,exports){
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

var _Helpers = require('./../../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var Style = (function (_Page) {
	_inherits(Style, _Page);

	function Style(props) {
		_classCallCheck(this, Style);

		_get(Object.getPrototypeOf(Style.prototype), 'constructor', this).call(this, props);

		this.onMouseMove = this.onMouseMove.bind(this);
		this.removeSprite = this.removeSprite.bind(this);

		this.textures = [];
		this.mouse = { x: 0, y: 0 };
		this.activeSprites = [];
		this.addSpriteIsActive = true;
	}

	_createClass(Style, [{
		key: 'render',
		value: function render() {

			var html = _react2['default'].createElement('div', null);

			return this.getBasePageDom(html);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.imagesContainer = new PIXI.Container();
			this.bg = new PIXI.Sprite(PIXI.Texture.fromImage('image/bag-static.jpg'));

			this.bg.anchor.x = 0.5;
			this.bg.anchor.y = 0.5;

			this.container.addChild(this.bg);
			this.container.addChild(this.imagesContainer);

			this.intervalId = setInterval(this.removeSprite, 75);
			(0, _domquery2['default'])(window).on("mousemove", this.onMouseMove);
			this.counter = 0;

			this.loadImages();

			_get(Object.getPrototypeOf(Style.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'loadImages',
		value: function loadImages() {
			var pageContent = _AppStore2['default'].pageContent();
			var imageSrcs = pageContent.images;
			for (var i = 0; i < imageSrcs.length; i++) {
				var filename = imageSrcs[i];
				var texture = PIXI.Texture.fromImage('image/style-images/' + filename);
				this.textures.push(texture);
			};
		}
	}, {
		key: 'addSprite',
		value: function addSprite() {
			var randomNum = _Utils2['default'].Rand(0, this.textures.length - 1, 0);
			var texture = this.textures[randomNum];
			if (texture == undefined) return;
			var sprite = new PIXI.Sprite(texture);
			var container = new PIXI.Container();
			var shape = new PIXI.Graphics();
			var size = 25;
			shape.lineStyle(1, 0x0000ff, 1);
			shape.drawRect(-size / 2, -size / 2, size, size);
			container.addChild(sprite);
			container.addChild(shape);
			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0.5;
			sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
			container.position.x = this.mouse.x;
			container.position.y = this.mouse.y;
			this.activeSprites.push({
				sprite: sprite,
				container: container
			});
			this.imagesContainer.addChild(container);
		}
	}, {
		key: 'removeSprite',
		value: function removeSprite() {
			if (this.activeSprites.length <= 1) return;
			var spriteToRemove = this.activeSprites.shift();
			this.imagesContainer.removeChild(spriteToRemove.container);
			spriteToRemove.container.destroy();
			spriteToRemove.sprite.destroy();
		}
	}, {
		key: 'onMouseMove',
		value: function onMouseMove(e) {
			var _this = this;

			e.preventDefault();
			var windowH = _AppStore2['default'].Window.h;
			if (e.clientY > windowH * 0.8) return;
			this.mouse.x = e.clientX;
			this.mouse.y = e.clientY;
			if (this.addSpriteIsActive) {
				this.addSpriteIsActive = false;
				setTimeout(function () {
					_this.addSpriteIsActive = true;
					_this.addSprite();
				}, 60);
			}
		}
	}, {
		key: 'update',
		value: function update() {
			for (var i = 0; i < this.activeSprites.length; i++) {
				var active = this.activeSprites[i];
				var container = active.container;
				container.position.y -= 1;
			};
			_get(Object.getPrototypeOf(Style.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			var resizeVals = _Utils2['default'].ResizePositionProportionally(windowW, windowH, _AppConstants2['default'].MEDIA_GLOBAL_W, _AppConstants2['default'].MEDIA_GLOBAL_H);

			this.bg.x = windowW >> 1;
			this.bg.y = windowH >> 1;
			this.bg.scale.x = this.bg.scale.y = resizeVals.scale;

			_get(Object.getPrototypeOf(Style.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(Style.prototype), 'componentWillUnmount', this).call(this);
			_Helpers2['default'].removeChildrenFromContainer(this.imagesContainer);
			(0, _domquery2['default'])(window).off("mousemove", this.onMouseMove);
			clearInterval(this.intervalId);
		}
	}]);

	return Style;
})(_Page3['default']);

exports['default'] = Style;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {
	WINDOW_RESIZE: 'WINDOW_RESIZE',
	CHANGE_AMBIENT: 'CHANGE_AMBIENT',
	INTRO_FINISHED: 'INTRO_FINISHED',

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
    },

    getGravityCircle: function getGravityCircle(url, radius) {
        var container = new PIXI.Container();

        var sprite = new PIXI.Sprite.fromImage(url);
        sprite.anchor.x = sprite.anchor.y = 0.5;

        var mask = new PIXI.Graphics();
        mask.beginFill(0x000000, 1);
        mask.drawCircle(0, 0, radius);
        mask.endFill();

        sprite.mask = mask;

        container.addChild(sprite);
        container.addChild(mask);

        return {
            container: container,
            sprite: sprite,
            mask: mask
        };
    },

    getGravityRect: function getGravityRect(url, width, height) {
        var container = new PIXI.Container();

        var sprite = new PIXI.Sprite.fromImage(url);
        sprite.anchor.x = sprite.anchor.y = 0.5;

        var mask = new PIXI.Graphics();
        mask.beginFill(0x000000, 1);
        mask.drawRect(-width / 2, -height / 2, width, height);
        mask.endFill();

        sprite.mask = mask;

        container.addChild(sprite);
        container.addChild(mask);

        return {
            container: container,
            sprite: sprite,
            mask: mask
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
	}, {
		key: 'Rand',
		value: function Rand(min, max, decimals) {
			var randomNum = Math.random() * (max - min) + min;
			if (decimals == undefined) {
				return randomNum;
			} else {
				var d = Math.pow(10, decimals);
				return ~ ~(d * randomNum + 0.5) / d;
			}
		}
	}, {
		key: 'TranformArrayFromMiddleAndOut',
		value: function TranformArrayFromMiddleAndOut(array) {
			var newArray = [];
			var i = Math.ceil(array.length / 2);
			var j = i - 1;
			while (j >= 0) {
				newArray.push(array[j--]);
				if (i < array.length) {
					newArray.push(array[i++]);
				}
			}
			return newArray;
		}
	}, {
		key: 'Set',
		value: function Set(element, vars, animationClass) {
			animationClass = animationClass || 'animate';
			dom(element).removeClass(animationClass);
			TweenLite.set(element, vars);
		}
	}, {
		key: 'Animate',
		value: function Animate(element, vars, animationClass) {
			animationClass = animationClass || 'animate';
			dom(element).addClass(animationClass);
			vars['force3D'] = true;
			TweenLite.set(element, vars);
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
			this.tlOut.pause(0);
			this.tlIn.timeScale(2).play(0);
		}
	}, {
		key: 'willTransitionOut',
		value: function willTransitionOut() {
			this.tlIn.pause(0);
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
			"id": "quintaessence",
			"name": "Quintaessence",
			"url": "/quintaessence",
			"latin-num": "I"
		},
		{
			"id": "architecture",
			"name": "Architecture",
			"url": "/architecture",
			"latin-num": "II"
		},
		{
			"id": "creativity-innovation",
			"name": "Creativity & Innovation",
			"url": "/creativity-innovation",
			"latin-num": "III"
		},
		{
			"id": "style",
			"name": "Style",
			"url": "/style",
			"latin-num": "IV"
		},
		{
			"id": "inspiration-spark",
			"name": "Inspiration Spark",
			"url": "/inspiration-spark",
			"latin-num": "V"
		}
	],

	"default-route": "",

	"routing": {
		"/": {
			"title": "home page"
		},
		"inspiration-spark": {
			"title": "inspiration-spark page"
		},
		"architecture": {
			"title": "architecture page",
			"videos": [
				{
					"title": "THE LINE",
					"description": "Lady Dior is an architectural construction.<br/>Its beauty lies, at the beginning, on its “lines”,<br/>its proportions and ideal dimensions.<br/>The line creates the shape...<br/>In all it takes 144 separate parts to make each Lady Dior.<br/><br/>The shape gives live to the material.",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE MATERIAL",
					"description": "The leather must be perfect.<br/>It all begins with the selection which must meet specially demanding criteria, always following the same ritual : touching, examining, seeing...<br/>The craftman’s hands and eyes are trained to detect the minor flaw.<br/><br/>The leather is then cut, following the patterns.<br/>After the canning stitching, the parts are ready to create the volume.",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE VOLUME",
					"description": "Lady Dior is assembled around a wooden form.<br/>The task is is an especially difficult one, as the canning has to align perfectly.<br/><br/>The front, back and sides are reinforced to guaranty that the bag will maintain its shape, preventing it from buckling.",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE DETAIL",
					"description": "Metalwork strengthen and accessorize the bag: charms, zipper, grommets or base studs...<br/>This is the Dior signature, making each detail an indespensable part of the beauty of the whole.<br/><br/>Lady Dior carries within it the very spirit of Dior...",
					"filename": "Dior",
					"imgname": "screen-a.jpg"
				}
			]
        },
        "quintaessence": {
        	"title": "quintaessence page"
        },
        "creativity-innovation": {
        	"title": "CREATIVITY & INNOVATION page"
        },
        "style": {
        	"title": "style page",
        	"images": [
        		"_1240018.jpg",
				"0.jpg",
				"1.jpg",
				"3.jpg",
				"3.mubi.jpg",
				"4.jpg",
				"004-Mubi-HD-3-042.jpg",
				"5.-ballroom.jpg",
				"8.campergem.jpg",
				"11-KENZO-SS-FINAL-A-S-2.jpg",
				"17.dior.jpg",
				"18.hermes.jpg",
				"21.dior.jpg",
				"catcher_rose.png",
				"Images_test_client_02.jpg",
				"large-1.jpg",
				"large.jpg",
				"push_harder_0006.png",
				"Scratcher.png",
				"Screen-Shot-2015-12-04-at-17.14.41.jpg",
				"Screen-Shot-2015-12-04-at-17.17.06.jpg",
				"16.camper.jpg",
				"thumbnail-23.jpg",
				"thumbnail-32.jpg",
				"Visual-2---Convoy.jpg",
				"Visual-3---Convoy.jpg",
				"11.camper.jpg"
			]
        }
	}
}
},{}]},{},["/Users/panagiotisthomoglou/Projects/lady-dior/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9DcmVhdGl2aXR5SW5ub3ZhdGlvbi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSW5zcGlyYXRpb25TcGFyay5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRhZXNzZW5jZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9IZWxwZXJzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvbWl4aW5zL1BvbHlmaWxscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1ByZWxvYWRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N2Zy9TVkdDb21wb25lbnQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL1V0aWxzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQ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QyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUVWLFNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQTtBQUN2RSxTQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFNLDZCQUE2QixDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFMUcsU0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0FBQzVCLFNBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ2hKLFNBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDNUgsU0FBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsSUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIChzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcGl0YWxpemU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJpbXBvcnQgQXBwIGZyb20gJ0FwcCdcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuaW1wb3J0IFBhZ2VyIGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgUG9seWZpbGxzIGZyb20gJ1BvbHlmaWxscydcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5pbXBvcnQgUHJlbG9hZCBmcm9tICdQcmVsb2FkZXInXG5pbXBvcnQgRGF0YSBmcm9tICdEYXRhJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXHRpbml0KCkge1xuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cblx0XHRpZiAoJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiBoaXN0b3J5KSB7XG5cdFx0XHQvLyBCYWNrIG9mZiwgYnJvd3NlciwgSSBnb3QgdGhpcy4uLlxuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXHRcdH1cblxuXHRcdHRoaXMub25NYWluRGF0YUxvYWRlZCgpXG5cdH1cblxuXHRvbk1haW5EYXRhTG9hZGVkKCkge1xuXG5cdFx0QXBwU3RvcmUuRGF0YSA9IERhdGFcblx0XHRcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEZyb250Q29udGFpbmVyIGZyb20gJ0Zyb250Q29udGFpbmVyJ1xuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJ1BhZ2VzQ29udGFpbmVyJ1xuaW1wb3J0IFBYQ29udGFpbmVyIGZyb20gJ1BYQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUZW1wbGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdhcHAtdGVtcGxhdGUnPlxuXHRcdFx0XHQ8RnJvbnRDb250YWluZXIgcmVmPSdmcm9udC1jb250YWluZXInIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciByZWY9J3BhZ2VzLWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBYQ29udGFpbmVyIHJlZj0ncHgtY29udGFpbmVyJyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEdsb2JhbEV2ZW50cy5yZXNpemUoKVxuXHRcdHRoaXMuYW5pbWF0ZSgpXG5cdH1cblx0YW5pbWF0ZSgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuXHRcdHRoaXMucmVmc1sncHgtY29udGFpbmVyJ10udXBkYXRlKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snZnJvbnQtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZFBYQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuQUREX1BYX0NISUxELFxuICAgICAgICAgICAgaXRlbTogeyBjaGlsZDpjaGlsZCB9XG4gICAgICAgIH0pICAgIFxuICAgIH0sXG4gICAgcmVtb3ZlUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfSxcbiAgICBpbnRyb0ZpbmlzaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5JTlRST19GSU5JU0hFRCxcbiAgICAgICAgICAgIGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG5cbndpbmRvdy5BcHBBY3Rpb25zID0gQXBwQWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBBcHBBY3Rpb25zXG5cblxuICAgICAgXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdCYXNlQ29tcG9uZW50J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgTWVudSBmcm9tICdNZW51J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgU1ZHQ29tcG9uZW50IGZyb20gJ1NWR0NvbXBvbmVudCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5pbnRyb0ZpbmlzaGVkID0gdGhpcy5pbnRyb0ZpbmlzaGVkLmJpbmQodGhpcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5JTlRST19GSU5JU0hFRCwgdGhpcy5pbnRyb0ZpbmlzaGVkKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZWdpbi1zbGlkZVwiIHJlZj0nYmVnaW4tc2xpZGUnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuXHRcdFx0XHRcdFx0PFNWR0NvbXBvbmVudCB3aWR0aD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE4Ny4wODYgNzMuODYzXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQxLjk1NiwzOS42M2MtMi4wMjMtMC45MDMtNC4yNjUtMS4zNzMtNi42ODctMS40ODNsLTYuNjg4LDAuMzk4Yy0xLjgwNywwLjMyNS0zLjU0MiwwLjk3Ny01LjI3NywxLjk4OWMtMS45NTEsMS4xNTYtMy41NzgsMi42MDMtNC44NzksNC4zMzdjLTMuMzI1LDQuMTU2LTQuNTE5LDkuMDM2LTMuNjE0LDE0Ljc4M2MxLjAxMiw2LjA3Myw0LjE1NiwxMC4yMjksOS4zMjUsMTIuMzI3YzMuOTc3LDEuNjI2LDguMzg2LDEuOTUsMTMuMTIxLDAuOTAyYzQuNTE4LTAuOTM5LDguMDk3LTMuMTA4LDEwLjgwOC02LjUwNWMzLjE4MS00LjAxNCw0LjE5Mi04Ljk2NSwzLTE0LjgyMUMxNDkuOTA5LDQ1Ljc3NSwxNDYuODM2LDQxLjc5OSwxNDEuOTU2LDM5LjYzeiBNMTQxLjg0OSw2NS45MDljLTEuNTU1LDIuODktMy45MDMsNC42MjYtNy4xMjEsNS4yNDFjLTMuMDcyLDAuNTQxLTUuODE5LTAuNjUyLTguMjQxLTMuNTA4Yy0yLjI3Ny0yLjcxLTMuNjg4LTYuMjU0LTQuMDg1LTEwLjY5OGMtMC41NDItNC40ODMsMC04LjI3OCwxLjQ4MS0xMS4zODhjMS42MjctMy40MzQsNC4xMjEtNS4yNDEsNy4zNzUtNS41NjVjMy4zNjEtMC4yODgsNi4xNDUsMC43OTUsOC4zNSwzLjI1NGMyLjI0MSwyLjQ5MywzLjUwNiw2LjEwOSwzLjk0LDEwLjk4OEMxNDMuOTA4LDU5LjExMywxNDMuMzY3LDYyLjk0NSwxNDEuODQ5LDY1LjkwOXogTTQwLjU2NiwwLjM3NUg0LjMxMmMtMC43MjMsMC0xLjA4NSwwLjIxNi0xLjA4NSwwLjcyMmwwLjI5LDAuNTQzbDEuNDQ2LDAuMjg4TDguNDY4LDIuMTFsMy40MzQsMC40MzNjMi40NTgsMC41NDMsMy43MjMsMS45MTYsMy43MjMsNC4xNTd2NTcuMzI4Yy0wLjAzNiwxLjc3My0wLjIxNywzLjA3NC0wLjU0MiwzLjk0bC0wLjkwMywxLjI2N2MtMC40NywwLjU0MS0xLjQ0NiwwLjkzOS0yLjgxOSwxLjExOWwtOC44NTYsMC41NDNjLTEuMDEyLDAtMS41NTQsMC4yNTQtMS41NTQsMC43MjRjMCwwLjQzMywwLjM2MSwwLjY4NiwxLjEyMSwwLjY4Nmg0Ni4yMzFjNS42MDMsMCwxMC41OTEtMS4wNDgsMTUuMDM3LTMuMDcxYzQuMTU3LTEuOTg5LDcuNzcxLTQuNywxMC43MzUtOC4yMDVjMi43MTEtMy4zMjcsNC44MDgtNy4wNDksNi4zMjYtMTEuMjc5YzEuMzM3LTQuMDEyLDEuOTg4LTguMTY4LDEuOTg4LTEyLjQ2OWMwLTguMjQyLTEuOTg4LTE1LjM2Mi01Ljk2NC0yMS4zNjNDNjkuNDgzLDUuNTQzLDU3LjU1NSwwLjM3NSw0MC41NjYsMC4zNzV6IE02OC44MzMsNDYuMjhjLTEuMTkzLDUuNTMxLTMuMTQ1LDEwLjA0OS01Ljg1NiwxMy41OTFjLTEuNjI2LDIuMTY5LTMuMTA4LDMuODY4LTQuNTU0LDUuMDYyYy0xLjYyNiwxLjI2NS0zLjUwNiwyLjMxMi01LjQ5NCwzLjAzNWMtMS45ODgsMC42NTEtNC41MTksMS4xMjEtNy40ODMsMS40NDZsLTExLjA2LDAuMzk4aC00Ljc3MWwtMS40NDYtMC4yMTdjLTAuMjg5LTAuMTgyLTAuNDMzLTAuNjg4LTAuNDMzLTEuNDExVjQuNTMybDAuMjUyLTEuNDQ1YzAuMjUzLTAuNDM1LDAuNzk1LTAuNjE1LDEuNjI3LTAuNTQzaDcuMzM3YzExLjg5MywwLDIwLjQ5NSwzLjU0MywyNS43MzYsMTAuN2MyLjcxMSwzLjY4Nyw0LjYyNyw4LjAyNCw1Ljg5MiwxMi45NzZjMC45MDQsMy40MzUsMS4zMzcsNi42MTUsMS4zMzcsOS41NzlDNjkuOTE3LDM5LjE2LDY5LjU1Niw0Mi42NjcsNjguODMzLDQ2LjI4eiBNOTAuMzU3LDQ0LjgzNWwwLjk0My0wLjEwOGwyLjExMi0wLjU3OWwxLjg4LDAuMTgyYzAuNTQyLDAuMzYyLDAuODMxLDAuOTc3LDAuODMxLDEuNzcxdjIxLjAwMWwtMC40NywyLjYwM2MtMC4zMjYsMC43MjMtMS4xNTcsMS4xOTItMi41MywxLjM3MmwtMi41MywwLjA3NGMtMC43OTUsMC0xLjE1NywwLjE4LTEuMDg0LDAuNjE0YzAsMC4yODgsMC4yMTcsMC40NywwLjY1LDAuNDdoMTkuMjY2YzAuNDM1LDAsMC42ODctMC4xMSwwLjY4Ny0wLjQzNWMtMC4wNzItMC4zOTYtMC41MDYtMC41NzgtMS4zMzctMC41NzhjLTIuMzUsMC0zLjg2Ny0wLjMyNS00LjUxOS0wLjk3N2MtMC41NDItMC41NDEtMC44MzEtMS40NDYtMC44MzEtMi43MXYtMjYuNDZjMC0xLjMwMS0wLjE4MS0yLjAyMy0wLjU0Mi0yLjA5NWwtMS4wODUsMC4xMDdjLTAuNDM0LDAuMTgtMS40MSwwLjYxNS0yLjc4MiwxLjQxYy0yLjI0MiwxLjI2NC00Ljg4LDIuMjc3LTcuODgsMy4wNzFjLTEuMjY2LDAuMzYxLTEuODA4LDAuNzYtMS42MjcsMS4xOTNMOTAuMzU3LDQ0LjgzNXogTTE4Ni4xMjcsNDIuOTU1YzAuMDczLDEuMjY2LTAuMjg5LDIuMjQtMS4wODQsM2MtMC43MjMsMC42MTUtMS40NDUsMC43OTUtMi4wOTYsMC42MTVjLTAuNjE1LTAuMTA4LTEuMDg1LTAuMzYxLTEuNDEtMC43MjRsLTEuMDEzLTEuMjY0Yy0wLjc5NS0xLjE1OC0xLjU1NC0xLjUyLTIuNDU4LTEuMTkzYy0xLjA0OCwwLjI4OC0yLjEzMiwxLjA4My0zLjI1MywyLjM0OWMtMS43NzEsMS44NDMtMi45NjQsNC4wMTItMy42MTQsNi42MTR2MTUuMzY0YzAsMS4zNzIsMC40NywyLjM0OSwxLjQ0NSwyLjk2M2wyLjIwNSwwLjM5NmwyLjMxNCwwLjI1NGMwLjU0MiwwLjA3MywwLjc1OSwwLjE4MiwwLjc1OSwwLjQ3bC0wLjEwOCwwLjI1M2wtMC42MTUsMC4xODJIMTU3Ljg2Yy0wLjU3OCwwLTAuOTAyLTAuMTgyLTAuOTAyLTAuNDdsMC41NDEtMC40MzVsMy4yNTQtMC4yNTRjMS4yNjYtMC4yMTYsMi4wNi0wLjY0OSwyLjQ5NC0xLjMwMWwwLjU0Mi0xLjYyNlY0Ni40NjJsLTAuMzYxLTEuNTkxbC0wLjYxNS0wLjM2MmMtMC4xODEtMC4xOC0wLjQ3LTAuMjg4LTAuOTAyLTAuMzYxYy0wLjU0Mi0wLjAzNi0xLjE5NCwwLjA3My0xLjg4LDAuMzYxbC0xLjg0NCwwLjUwN2wtMS4wNDgtMC4yNTNjLTAuMTgxLTAuMjU0LTAuMTA5LTAuNDM0LDAuMTQ0LTAuNTQybDEuNTU1LTAuNjUxYzMuNTQyLTEuMDQ4LDYuMzk4LTIuMTMyLDguMzg2LTMuMjU0bDIuNDU4LTEuMzM1bDEuMDg1LDAuMDcxbDAuNDM0LDAuOTAydjcuOTU0YzIuNzExLTQuNDEsNC44OC03LjEyMiw2LjM2MS04LjAyNWMwLjkwNC0wLjU0MSwxLjc3MS0wLjk3NywyLjQyMi0xLjE1NmwxLjI2Ni0wLjEwOGMwLjc5NS0wLjA3MywxLjY5OSwwLjE4LDIuNzExLDAuODMyQzE4NS4zMzMsNDAuMjQ0LDE4Ni4wNTUsNDEuNDM4LDE4Ni4xMjcsNDIuOTU1eiBNOTUuOTQyLDI0LjA1MWMtMC45NzYtMC45MDUtMS40NDYtMS45ODktMS4zNzQtMy4yNTRjLTAuMDcyLTEuMzM4LDAuMzk4LTIuNDk0LDEuMzc0LTMuMzk4YzAuOTAzLTAuOTA0LDEuOTg4LTEuMzc0LDMuMzI1LTEuMzc0YzEuMjY2LDAsMi4zODYsMC40NywzLjI4OSwxLjM3NGMwLjkwNCwwLjkwNCwxLjQxLDIuMDYsMS40MSwzLjM5OGMwLDEuMjY1LTAuNTA2LDIuMzQ5LTEuNDEsMy4yNTRjLTAuOTAzLDAuOTAzLTIuMDIzLDEuMzczLTMuMjg5LDEuMzczQzk3LjkzMSwyNS40MjQsOTYuODQ2LDI0Ljk1NCw5NS45NDIsMjQuMDUxelwiLz5cblx0XHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8YSBocmVmPScjLyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgcmVmPSdsb2dvJz5cblx0XHRcdFx0XHRcdDxTVkdDb21wb25lbnQgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxODcuMDg2IDczLjg2M1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE0MS45NTYsMzkuNjNjLTIuMDIzLTAuOTAzLTQuMjY1LTEuMzczLTYuNjg3LTEuNDgzbC02LjY4OCwwLjM5OGMtMS44MDcsMC4zMjUtMy41NDIsMC45NzctNS4yNzcsMS45ODljLTEuOTUxLDEuMTU2LTMuNTc4LDIuNjAzLTQuODc5LDQuMzM3Yy0zLjMyNSw0LjE1Ni00LjUxOSw5LjAzNi0zLjYxNCwxNC43ODNjMS4wMTIsNi4wNzMsNC4xNTYsMTAuMjI5LDkuMzI1LDEyLjMyN2MzLjk3NywxLjYyNiw4LjM4NiwxLjk1LDEzLjEyMSwwLjkwMmM0LjUxOC0wLjkzOSw4LjA5Ny0zLjEwOCwxMC44MDgtNi41MDVjMy4xODEtNC4wMTQsNC4xOTItOC45NjUsMy0xNC44MjFDMTQ5LjkwOSw0NS43NzUsMTQ2LjgzNiw0MS43OTksMTQxLjk1NiwzOS42M3ogTTE0MS44NDksNjUuOTA5Yy0xLjU1NSwyLjg5LTMuOTAzLDQuNjI2LTcuMTIxLDUuMjQxYy0zLjA3MiwwLjU0MS01LjgxOS0wLjY1Mi04LjI0MS0zLjUwOGMtMi4yNzctMi43MS0zLjY4OC02LjI1NC00LjA4NS0xMC42OThjLTAuNTQyLTQuNDgzLDAtOC4yNzgsMS40ODEtMTEuMzg4YzEuNjI3LTMuNDM0LDQuMTIxLTUuMjQxLDcuMzc1LTUuNTY1YzMuMzYxLTAuMjg4LDYuMTQ1LDAuNzk1LDguMzUsMy4yNTRjMi4yNDEsMi40OTMsMy41MDYsNi4xMDksMy45NCwxMC45ODhDMTQzLjkwOCw1OS4xMTMsMTQzLjM2Nyw2Mi45NDUsMTQxLjg0OSw2NS45MDl6IE00MC41NjYsMC4zNzVINC4zMTJjLTAuNzIzLDAtMS4wODUsMC4yMTYtMS4wODUsMC43MjJsMC4yOSwwLjU0M2wxLjQ0NiwwLjI4OEw4LjQ2OCwyLjExbDMuNDM0LDAuNDMzYzIuNDU4LDAuNTQzLDMuNzIzLDEuOTE2LDMuNzIzLDQuMTU3djU3LjMyOGMtMC4wMzYsMS43NzMtMC4yMTcsMy4wNzQtMC41NDIsMy45NGwtMC45MDMsMS4yNjdjLTAuNDcsMC41NDEtMS40NDYsMC45MzktMi44MTksMS4xMTlsLTguODU2LDAuNTQzYy0xLjAxMiwwLTEuNTU0LDAuMjU0LTEuNTU0LDAuNzI0YzAsMC40MzMsMC4zNjEsMC42ODYsMS4xMjEsMC42ODZoNDYuMjMxYzUuNjAzLDAsMTAuNTkxLTEuMDQ4LDE1LjAzNy0zLjA3MWM0LjE1Ny0xLjk4OSw3Ljc3MS00LjcsMTAuNzM1LTguMjA1YzIuNzExLTMuMzI3LDQuODA4LTcuMDQ5LDYuMzI2LTExLjI3OWMxLjMzNy00LjAxMiwxLjk4OC04LjE2OCwxLjk4OC0xMi40NjljMC04LjI0Mi0xLjk4OC0xNS4zNjItNS45NjQtMjEuMzYzQzY5LjQ4Myw1LjU0Myw1Ny41NTUsMC4zNzUsNDAuNTY2LDAuMzc1eiBNNjguODMzLDQ2LjI4Yy0xLjE5Myw1LjUzMS0zLjE0NSwxMC4wNDktNS44NTYsMTMuNTkxYy0xLjYyNiwyLjE2OS0zLjEwOCwzLjg2OC00LjU1NCw1LjA2MmMtMS42MjYsMS4yNjUtMy41MDYsMi4zMTItNS40OTQsMy4wMzVjLTEuOTg4LDAuNjUxLTQuNTE5LDEuMTIxLTcuNDgzLDEuNDQ2bC0xMS4wNiwwLjM5OGgtNC43NzFsLTEuNDQ2LTAuMjE3Yy0wLjI4OS0wLjE4Mi0wLjQzMy0wLjY4OC0wLjQzMy0xLjQxMVY0LjUzMmwwLjI1Mi0xLjQ0NWMwLjI1My0wLjQzNSwwLjc5NS0wLjYxNSwxLjYyNy0wLjU0M2g3LjMzN2MxMS44OTMsMCwyMC40OTUsMy41NDMsMjUuNzM2LDEwLjdjMi43MTEsMy42ODcsNC42MjcsOC4wMjQsNS44OTIsMTIuOTc2YzAuOTA0LDMuNDM1LDEuMzM3LDYuNjE1LDEuMzM3LDkuNTc5QzY5LjkxNywzOS4xNiw2OS41NTYsNDIuNjY3LDY4LjgzMyw0Ni4yOHogTTkwLjM1Nyw0NC44MzVsMC45NDMtMC4xMDhsMi4xMTItMC41NzlsMS44OCwwLjE4MmMwLjU0MiwwLjM2MiwwLjgzMSwwLjk3NywwLjgzMSwxLjc3MXYyMS4wMDFsLTAuNDcsMi42MDNjLTAuMzI2LDAuNzIzLTEuMTU3LDEuMTkyLTIuNTMsMS4zNzJsLTIuNTMsMC4wNzRjLTAuNzk1LDAtMS4xNTcsMC4xOC0xLjA4NCwwLjYxNGMwLDAuMjg4LDAuMjE3LDAuNDcsMC42NSwwLjQ3aDE5LjI2NmMwLjQzNSwwLDAuNjg3LTAuMTEsMC42ODctMC40MzVjLTAuMDcyLTAuMzk2LTAuNTA2LTAuNTc4LTEuMzM3LTAuNTc4Yy0yLjM1LDAtMy44NjctMC4zMjUtNC41MTktMC45NzdjLTAuNTQyLTAuNTQxLTAuODMxLTEuNDQ2LTAuODMxLTIuNzF2LTI2LjQ2YzAtMS4zMDEtMC4xODEtMi4wMjMtMC41NDItMi4wOTVsLTEuMDg1LDAuMTA3Yy0wLjQzNCwwLjE4LTEuNDEsMC42MTUtMi43ODIsMS40MWMtMi4yNDIsMS4yNjQtNC44OCwyLjI3Ny03Ljg4LDMuMDcxYy0xLjI2NiwwLjM2MS0xLjgwOCwwLjc2LTEuNjI3LDEuMTkzTDkwLjM1Nyw0NC44MzV6IE0xODYuMTI3LDQyLjk1NWMwLjA3MywxLjI2Ni0wLjI4OSwyLjI0LTEuMDg0LDNjLTAuNzIzLDAuNjE1LTEuNDQ1LDAuNzk1LTIuMDk2LDAuNjE1Yy0wLjYxNS0wLjEwOC0xLjA4NS0wLjM2MS0xLjQxLTAuNzI0bC0xLjAxMy0xLjI2NGMtMC43OTUtMS4xNTgtMS41NTQtMS41Mi0yLjQ1OC0xLjE5M2MtMS4wNDgsMC4yODgtMi4xMzIsMS4wODMtMy4yNTMsMi4zNDljLTEuNzcxLDEuODQzLTIuOTY0LDQuMDEyLTMuNjE0LDYuNjE0djE1LjM2NGMwLDEuMzcyLDAuNDcsMi4zNDksMS40NDUsMi45NjNsMi4yMDUsMC4zOTZsMi4zMTQsMC4yNTRjMC41NDIsMC4wNzMsMC43NTksMC4xODIsMC43NTksMC40N2wtMC4xMDgsMC4yNTNsLTAuNjE1LDAuMTgySDE1Ny44NmMtMC41NzgsMC0wLjkwMi0wLjE4Mi0wLjkwMi0wLjQ3bDAuNTQxLTAuNDM1bDMuMjU0LTAuMjU0YzEuMjY2LTAuMjE2LDIuMDYtMC42NDksMi40OTQtMS4zMDFsMC41NDItMS42MjZWNDYuNDYybC0wLjM2MS0xLjU5MWwtMC42MTUtMC4zNjJjLTAuMTgxLTAuMTgtMC40Ny0wLjI4OC0wLjkwMi0wLjM2MWMtMC41NDItMC4wMzYtMS4xOTQsMC4wNzMtMS44OCwwLjM2MWwtMS44NDQsMC41MDdsLTEuMDQ4LTAuMjUzYy0wLjE4MS0wLjI1NC0wLjEwOS0wLjQzNCwwLjE0NC0wLjU0MmwxLjU1NS0wLjY1MWMzLjU0Mi0xLjA0OCw2LjM5OC0yLjEzMiw4LjM4Ni0zLjI1NGwyLjQ1OC0xLjMzNWwxLjA4NSwwLjA3MWwwLjQzNCwwLjkwMnY3Ljk1NGMyLjcxMS00LjQxLDQuODgtNy4xMjIsNi4zNjEtOC4wMjVjMC45MDQtMC41NDEsMS43NzEtMC45NzcsMi40MjItMS4xNTZsMS4yNjYtMC4xMDhjMC43OTUtMC4wNzMsMS42OTksMC4xOCwyLjcxMSwwLjgzMkMxODUuMzMzLDQwLjI0NCwxODYuMDU1LDQxLjQzOCwxODYuMTI3LDQyLjk1NXogTTk1Ljk0MiwyNC4wNTFjLTAuOTc2LTAuOTA1LTEuNDQ2LTEuOTg5LTEuMzc0LTMuMjU0Yy0wLjA3Mi0xLjMzOCwwLjM5OC0yLjQ5NCwxLjM3NC0zLjM5OGMwLjkwMy0wLjkwNCwxLjk4OC0xLjM3NCwzLjMyNS0xLjM3NGMxLjI2NiwwLDIuMzg2LDAuNDcsMy4yODksMS4zNzRjMC45MDQsMC45MDQsMS40MSwyLjA2LDEuNDEsMy4zOThjMCwxLjI2NS0wLjUwNiwyLjM0OS0xLjQxLDMuMjU0Yy0wLjkwMywwLjkwMy0yLjAyMywxLjM3My0zLjI4OSwxLjM3M0M5Ny45MzEsMjUuNDI0LDk2Ljg0NiwyNC45NTQsOTUuOTQyLDI0LjA1MXpcIi8+XG5cdFx0XHRcdFx0XHQ8L1NWR0NvbXBvbmVudD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdDxNZW51IHJlZj0nbWVudScgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmJlZ2luU2xpZGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2JlZ2luLXNsaWRlJ10pXG5cdFx0dGhpcy5sb2dvID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydsb2dvJ10pXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IGRvbSh0aGlzLmJlZ2luU2xpZGUpLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJykgfSwgMTAwMClcblx0XHRzZXRUaW1lb3V0KCgpPT57IGRvbSh0aGlzLmJlZ2luU2xpZGUpLnJlbW92ZUNsYXNzKCd0cmFuc2l0aW9uLWluJyk7IGRvbSh0aGlzLmJlZ2luU2xpZGUpLmFkZENsYXNzKCd0cmFuc2l0aW9uLW91dCcpOyB9LCA0MDAwKVxuXHRcdC8vIHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5pbnRyb0ZpbmlzaGVkKCkgfSwgNTAwMClcblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMuaW50cm9GaW5pc2hlZCgpIH0sIDUwMClcblxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR2YXIgaXRlbSA9IEFwcFN0b3JlLmdldEN1cnJlbnRQYWdlTWVudUl0ZW0oKVxuXHRcdHRoaXMucmVmc1snbWVudSddLmhpZ2hsaWdodEJ5SXRlbShpdGVtKVxuXHR9XG5cdGludHJvRmluaXNoZWQoKSB7XG5cdFx0ZG9tKHRoaXMuYmVnaW5TbGlkZSkucmVtb3ZlKClcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELCB0aGlzLmludHJvRmluaXNoZWQpXG5cdFx0XG5cdFx0dGhpcy5yZWZzWydtZW51J10udHJhbnNpdGlvbkluKClcblx0XHRkb20odGhpcy5sb2dvKS5hZGRDbGFzcygndHJhbnNpdGlvbi1pbicpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0XG5cdFx0dGhpcy5yZWZzWydtZW51J10ucmVzaXplKClcblxuXHRcdHRoaXMuYmVnaW5TbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5iZWdpblNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvd0ggKyAncHgnXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBtZW51RGF0YSA9IEFwcFN0b3JlLm1lbnVDb250ZW50KClcblx0XHR2YXIgbWVudUl0ZW1zID0gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdHZhciBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGlkPXtpdGVtLmlkfSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8YSBocmVmPXtwYXRoVXJsfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0aW4tbnVtXCI+e2l0ZW1bJ2xhdGluLW51bSddfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9J21lbnUnIGlkPSdtZW51Jz4gXG5cdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ21lbnUnXSlcblx0XHRcblx0XHR0aGlzLml0ZW1zID0gW11cblx0XHR2YXIgYnRucyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCdsaScpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnRuID0gYnRuc1tpXVxuXHRcdFx0dGhpcy5pdGVtc1tpXSA9IHtcblx0XHRcdFx0ZWw6IGJ0bixcblx0XHRcdFx0aWQ6IGJ0bi5pZFxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0aGlnaGxpZ2h0QnlJdGVtKGl0ZW0pIHtcblxuXHRcdGlmKGl0ZW0uaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdH07XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRpZihidG4uaWQgPT0gaXRlbS5pZCkge1xuXHRcdFx0XHRkb20oYnRuLmVsKS5hZGRDbGFzcygnZW5hYmxlJylcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRcdGRvbShidG4uZWwpLmFkZENsYXNzKCdkaXNhYmxlJylcdFxuXHRcdFx0fSBcblx0XHR9O1xuXHR9XG5cdHJlbW92ZUhpZ2hsaWdodCgpIHtcblxuXHR9XG5cdHRyYW5zaXRpb25JbigpIHtcblx0XHRkb20odGhpcy5wYXJlbnQpLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJylcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcGFyZW50U2l6ZSA9IHNpemUodGhpcy5wYXJlbnQpXG5cdFx0dmFyIHBhcmVudENzcyA9IHtcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKHBhcmVudFNpemVbMF0gPj4gMSkgKyAncHgnLFxuXHRcdFx0dG9wOiB3aW5kb3dIIC0gKHBhcmVudFNpemVbMV0pIC0gQXBwQ29uc3RhbnRzLk9WRVJBTExfTUFSR0lOICsgJ3B4J1xuXHRcdH1cblx0XHRkb20odGhpcy5wYXJlbnQpLnN0eWxlKHBhcmVudENzcylcblx0fVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUFhDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5BRERfUFhfQ0hJTEQsIHRoaXMuYWRkKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsIHRoaXMucmVtb3ZlKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNhbnZhcyBjbGFzc05hbWU9XCJjYW52YXMtaG9sZGVyXCI+PC9jYW52YXM+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dmFyIGNhbnZhcyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcuY2FudmFzLWhvbGRlcicpWzBdXG5cdFx0dmFyIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoMCwgMCwgeyB2aWV3OmNhbnZhcyB9KVxuXHRcdHJlbmRlcmVyLmJhY2tncm91bmRDb2xvciA9IDB4RkZGRkZGXG5cblx0XHR0aGlzLnBpeGkgPSB7XG5cdFx0XHRjYW52YXM6IGNhbnZhcyxcblx0XHRcdHJlbmRlcmVyOiByZW5kZXJlcixcblx0XHRcdHN0YWdlOiBzdGFnZVxuXHRcdH1cblx0fVxuXHRhZGQoaXRlbSkge1xuXHRcdHRoaXMucGl4aS5zdGFnZS5hZGRDaGlsZChpdGVtLmNoaWxkKVxuXHR9XG5cdHJlbW92ZShpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLnJlbW92ZUNoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciBzY2FsZSA9IDFcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHRoaXMucGl4aS5jYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3dXICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0XHR0aGlzLnBpeGkucmVuZGVyZXIucmVzaXplKHdpbmRvd1cgKiBzY2FsZSwgd2luZG93SCAqIHNjYWxlKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnBpeGkucmVuZGVyZXIucmVuZGVyKHRoaXMucGl4aS5zdGFnZSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBzY3JvbGx0b3AgZnJvbSAnc2ltcGxlLXNjcm9sbHRvcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5hZGRQWENoaWxkKHRoaXMuY29udGFpbmVyKSB9LCAwKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblx0XHR0aGlzLmVsZW1lbnRzSG9sZGVyID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5lbGVtZW50cy1ob2xkZXInKVswXVxuXHRcdHRoaXMuaW50cm9TbGlkZSA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcuaW50cm8tc2xpZGUnKVswXVxuXHRcdHRoaXMuZnJvbnRIb2xkZXIgPSBkb20odGhpcy5pbnRyb1NsaWRlKS5zZWxlY3QoJy5mcm9udC1ob2xkZXInKVswXVxuXHRcdFxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbkluKCkge1xuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHNjcm9sbHRvcCgwKVxuXHRcdH0sIDEwMDApXG5cdFx0c3VwZXIud2lsbFRyYW5zaXRpb25JbigpXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbVRvKHRoaXMuaW50cm9TbGlkZSwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgeyBvcGFjaXR5OjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsSW4udG8odGhpcy5pbnRyb1NsaWRlLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAzKVxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAgfSwgeyBvcGFjaXR5OjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMilcblx0XHR0aGlzLnRsSW4uZnJvbVRvKHRoaXMuY29udGFpbmVyLCAxLCB7IGFscGhhOjAgfSwgeyBhbHBoYToxLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDIpXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKHRoaXMuY29udGFpbmVyLCAxLCB7IGFscGhhOjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblxuXHRcdHN1cGVyLnNldHVwQW5pbWF0aW9ucygpXG5cdH1cblx0Z2V0QmFzZVBhZ2VEb20oaHRtbCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dmFyIGlkID0gY29udGVudC5pZCArICctcGFnZSdcblxuXHRcdHZhciBmcm9udEhvbGRlcjtcblx0XHRpZihjb250ZW50LmlkID09ICdob21lJykge1xuXHRcdFx0ZnJvbnRIb2xkZXIgPSAoXG5cdFx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0XHQpXG5cdFx0fWVsc2V7XG5cdFx0XHRmcm9udEhvbGRlciA9IDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+e2NvbnRlbnQubmFtZX08L2Rpdj5cblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD17aWR9IHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2Utd3JhcHBlcic+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbGVtZW50cy1ob2xkZXJcIj57aHRtbH08L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcm9udC1ob2xkZXJcIj57ZnJvbnRIb2xkZXJ9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0dXBkYXRlKCkge1xuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHRpdGxlU2l6ZSA9IHNpemUodGhpcy5mcm9udEhvbGRlcilcblx0XHR0aGlzLmZyb250SG9sZGVyLnN0eWxlLmxlZnQgPSAod2luZG93VyA+PiAxKSAtICh0aXRsZVNpemVbMF0gPj4gMSkgKyAncHgnXG5cdFx0dGhpcy5mcm9udEhvbGRlci5zdHlsZS50b3AgPSAod2luZG93SCA+PiAxKSAtICh0aXRsZVNpemVbMV0gPj4gMSkgKyAncHgnXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFxuXHRcdEhlbHBlcnMucmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyKHRoaXMuY29udGFpbmVyKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLnJlbW92ZVBYQ2hpbGQodGhpcy5jb250YWluZXIpIH0sIDApXG5cblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsIHRoaXMucmVzaXplKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlciBmcm9tICdCYXNlUGFnZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnSG9tZSdcbmltcG9ydCBJbnNwaXJhdGlvblNwYXJrIGZyb20gJ0luc3BpcmF0aW9uU3BhcmsnXG5pbXBvcnQgQXJjaGl0ZWN0dXJlIGZyb20gJ0FyY2hpdGVjdHVyZSdcbmltcG9ydCBRdWludGFlc3NlbmNlIGZyb20gJ1F1aW50YWVzc2VuY2UnXG5pbXBvcnQgQ3JlYXRpdml0eUlubm92YXRpb24gZnJvbSAnQ3JlYXRpdml0eUlubm92YXRpb24nXG5pbXBvcnQgU3R5bGUgZnJvbSAnU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBhZ2VyIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBoYXNoID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHRcdHZhciB0eXBlID0gdW5kZWZpbmVkXG5cblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJ2luc3BpcmF0aW9uLXNwYXJrJzpcblx0XHRcdFx0dHlwZSA9IEluc3BpcmF0aW9uU3Bhcmtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2FyY2hpdGVjdHVyZSc6XG5cdFx0XHRcdHR5cGUgPSBBcmNoaXRlY3R1cmVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3F1aW50YWVzc2VuY2UnOlxuXHRcdFx0XHR0eXBlID0gUXVpbnRhZXNzZW5jZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY3JlYXRpdml0eS1pbm5vdmF0aW9uJzpcblx0XHRcdFx0dHlwZSA9IENyZWF0aXZpdHlJbm5vdmF0aW9uXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdzdHlsZSc6XG5cdFx0XHRcdHR5cGUgPSBTdHlsZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IEhvbWVcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSlcblx0fVxufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgc2Nyb2xsdG9wIGZyb20gJ3NpbXBsZS1zY3JvbGx0b3AnXG5pbXBvcnQgc2l6ZSBmcm9tICdlbGVtZW50LXNpemUnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucGFnZUhlaWdodCA9IDBcblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIHZpZGVvcyA9IGNvbnRlbnQudmlkZW9zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRcblx0XHRcdHZhciBzaWRlID0gVXRpbHMuSXNFdmVuKGluZGV4KSA/ICdsZWZ0JyA6ICdyaWdodCdcblx0XHRcdHZhciBjbGFzc2VzID0gJ3ZpZGVvLWl0ZW0gY2xlYXItZmxvYXQgJyArIHNpZGVcblx0XHRcdHZhciBzY3JlZW5zaG90UGF0aCA9ICdpbWFnZS92aWRlby1zY3JlZW5zLycgKyBpdGVtLmltZ25hbWVcblx0XHRcdHZhciB2aWRlb1BhdGggPSAndmlkZW8vYXJjaGl0ZWN0dXJlLycgKyBpdGVtLmZpbGVuYW1lXG5cdFx0XHR2YXIgc3JjX21wNCA9IHZpZGVvUGF0aCArICcubXA0J1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cblx0XHRcdFx0XHRcdDx2aWRlbyB3aWR0aD0nMTAwJSc+XG5cdFx0XHRcdFx0XHRcdDxzb3VyY2UgdHlwZT0ndmlkZW8vbXA0JyBzcmM9e3NyY19tcDR9IGF1dG9QbGF5Pjwvc291cmNlPlxuXHRcdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDppdGVtLmRlc2NyaXB0aW9uIH0gfT48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fSlcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2luc2lkZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiByZWY9J3ZpZGVvcy1jb250YWluZXInIGNsYXNzTmFtZT1cInZpZGVvcy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7dmlkZW9zfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy52aWRlb3NDb250YWluZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3ZpZGVvcy1jb250YWluZXInXSlcblxuXHQgICAgdmFyIHRvdGFsRnJhbWVzID0gMTU5XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvYmFnLXNlcXVlbmNlL3R1cm5fJywgJ2pwZycpXG5cdCAgICB2YXIgbWMgPSBQSVhJLmV4dHJhcy5Nb3ZpZUNsaXAuZnJvbUltYWdlcyhiYWdJbWFnZXMpXG4gICAgICAgIG1jLmFuY2hvci54ID0gMC41XG4gICAgICAgIG1jLmFuY2hvci55ID0gMC41XG5cdCAgICBtYy5nb3RvQW5kU3RvcCgwKVxuXHQgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWMpXG5cdCAgICBcblx0ICAgIHRoaXMuYmcgPSB7XG5cdCAgICBcdG1jOiBtYyxcblx0ICAgIFx0dG90YWxGcmFtZXM6IHRvdGFsRnJhbWVzXG5cdCAgICB9XG5cblx0ICAgIHRoaXMudmlkZW9JdGVtcyA9IFtdXG5cdCAgICB2YXIgaXRlbXMgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLnZpZGVvLWl0ZW0nKVxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHQgICAgXHR2YXIgaXRlbSA9IGl0ZW1zW2ldXG5cdCAgICBcdHZhciB2aWRlbyA9IGRvbShpdGVtKS5zZWxlY3QoJ3ZpZGVvJylbMF1cblx0ICAgIFx0dGhpcy52aWRlb0l0ZW1zW2ldID0ge1xuICAgIFx0XHRcdGVsOiBpdGVtLFxuICAgIFx0XHRcdHZpZGVvOiB2aWRlbyxcbiAgICBcdFx0XHRtZWRpYUVsOiBkb20oaXRlbSkuc2VsZWN0KCcubWVkaWEnKVswXSxcbiAgICBcdFx0XHR0aXRsZUVsOiBkb20oaXRlbSkuc2VsZWN0KCcudGl0bGUnKVswXSxcbiAgICBcdFx0XHRkZXNjcmlwdGlvbkVsOiBkb20oaXRlbSkuc2VsZWN0KCcuZGVzY3JpcHRpb24nKVswXSxcbiAgICBcdFx0XHRpc1BsYXlpbmc6IGZhbHNlLFxuICAgIFx0XHRcdGluZGV4OiBpXG4gICAgXHRcdH1cblx0ICAgIH07XG5cbiAgXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRjaGVja1ZpZGVvc1ZpZXdwb3J0Rm9jdXMoKSB7XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBzY3JvbGx0ID0gc2Nyb2xsdG9wKClcblx0XHR2YXIgbWFyZ2luID0gd2luZG93SCAqIDAuMVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0aWYoc2Nyb2xsdCArIHdpbmRvd0ggPiBpdGVtLnRvcCArICggbWFyZ2luICogMiApICYmIHNjcm9sbHQgPCBpdGVtLnRvcCArIGl0ZW0uc2l6ZVsxXSAtIG1hcmdpbikge1xuXHRcdFx0XHRpZihpdGVtLmlzUGxheWluZyAhPSB0cnVlKSB7XG5cdFx0XHRcdFx0aXRlbS52aWRlby5wbGF5KClcblx0XHRcdFx0XHRpdGVtLnRsLnBsYXkoMClcblx0XHRcdFx0XHRpdGVtLmlzUGxheWluZyA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKGl0ZW0uaXNQbGF5aW5nICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0aXRlbS52aWRlby5wYXVzZSgpXG5cdFx0XHRcdFx0aXRlbS52aWRlby5jdXJyZW50VGltZSA9IDBcblx0XHRcdFx0XHRpdGVtLnRsLnJldmVyc2UoKVxuXHRcdFx0XHRcdGl0ZW0uaXNQbGF5aW5nID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0ICAgIFxuXHQgICAgLy8gZ2V0IHNjcm9sbHRvcCBwb3NpdGlvblxuXHQgICAgdGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gc2Nyb2xsdG9wKClcblxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBjdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKCAoIHRoaXMuY3VycmVudFNjcm9sbFBvcyAvIHRoaXMucGFnZUhlaWdodCApICogdGhpcy5iZy50b3RhbEZyYW1lcyApXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSBjdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPCAwKSBjdXJyZW50RnJhbWUgPSAwXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKGN1cnJlbnRGcmFtZSlcblxuXHQgICAgdGhpcy5jaGVja1ZpZGVvc1ZpZXdwb3J0Rm9jdXMoKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcGFyZW50U2l6ZSA9IHNpemUodGhpcy5wYXJlbnQpXG5cdFx0dmFyIHJlc2l6ZVZhbHMgPSBVdGlscy5SZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfVywgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9IKVxuXG5cdFx0dGhpcy5iZy5tYy54ID0gd2luZG93VyA+PiAxXG5cdFx0dGhpcy5iZy5tYy55ID0gd2luZG93SCA+PiAxXG5cdFx0dGhpcy5iZy5tYy5zY2FsZS54ID0gdGhpcy5iZy5tYy5zY2FsZS55ID0gcmVzaXplVmFscy5zY2FsZVxuXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0dGhpcy5wYWdlSGVpZ2h0ID0gMFxuXHRcdFx0dmFyIHNjcm9sbHQgPSBzY3JvbGx0b3AoKVxuXHRcdFx0dmFyIG1hcmdpblRvcCA9IDI0MFxuXHRcdFx0dmFyIG1hcmdpbkJvdHRvbSA9IDI0MFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZpZGVvSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnZpZGVvSXRlbXNbaV1cblx0XHRcdFx0dmFyIGl0ZW1TaXplID0gc2l6ZShpdGVtLmVsKVxuXHRcdFx0XHR2YXIgaCA9IGl0ZW1TaXplWzFdICsgKG1hcmdpblRvcCArIG1hcmdpbkJvdHRvbSlcblx0XHRcdFx0aXRlbS5zaXplID0gaXRlbVNpemVcblx0XHRcdFx0aXRlbS50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgKyBtYXJnaW5Ub3Bcblx0XHRcdFx0aXRlbS5lbC5zdHlsZS50b3AgPSAodGhpcy5wYWdlSGVpZ2h0ICsgbWFyZ2luVG9wKSArICdweCdcblx0XHRcdFx0aWYoZG9tKGl0ZW0uZWwpLmhhc0NsYXNzKCdyaWdodCcpKSBpdGVtLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnZpZGVvc0NvbnRhaW5lci5vZmZzZXRXaWR0aCAtIGl0ZW1TaXplWzBdICsgJ3B4J1xuXHRcdFx0XHRpdGVtLnkgPSAwXG5cdFx0XHRcdFxuXHRcdFx0XHRpdGVtLnBMaW5lcyA9IG5ldyBTcGxpdFRleHQoaXRlbS5kZXNjcmlwdGlvbkVsLCB7IHR5cGU6J2xpbmVzJyB9KS5saW5lc1xuXHRcdFx0XHRpdGVtLnRpdGxlQ2hhcnMgPSBVdGlscy5UcmFuZm9ybUFycmF5RnJvbU1pZGRsZUFuZE91dChuZXcgU3BsaXRUZXh0KGl0ZW0udGl0bGVFbCwgeyB0eWxlOidjaGFycycgfSkuY2hhcnMpXG5cblx0XHRcdFx0aXRlbS50bCA9IG5ldyBUaW1lbGluZUxpdGUoKVxuXHRcdFx0XHRpdGVtLnRsLnN0YWdnZXJGcm9tKGl0ZW0udGl0bGVDaGFycywgMSwgeyBvcGFjaXR5OjAsIHk6MjAsIHNjYWxlWTowLjgsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuMDUsIDAuMylcblx0XHRcdFx0aXRlbS50bC5mcm9tKGl0ZW0udmlkZW8sIDEsIHsgb3BhY2l0eTowLCB5OjIwLCBzY2FsZVk6MiwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC41KVxuXHRcdFx0XHRpdGVtLnRsLnN0YWdnZXJGcm9tKGl0ZW0ucExpbmVzLCAxLCB7IG9wYWNpdHk6MCwgeToyMCwgc2NhbGVZOjAuOCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wNSwgMC44KVxuXHRcdFx0XHRpdGVtLnRsLnBhdXNlKDApXG5cblx0XHRcdFx0aXRlbS5pc1BsYXlpbmcgPSBmYWxzZVxuXG5cdFx0XHRcdHRoaXMucGFnZUhlaWdodCArPSBoXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYWdlSGVpZ2h0ICsgJ3B4J1xuXHRcdFx0dGhpcy5wYWdlSGVpZ2h0IC09IHdpbmRvd0hcblxuXHRcdH0sIDApXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGl2aXR5SW5ub3ZhdGlvbiBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy50aW1lID0gMFxuXHRcdHRoaXMuZGVidWdNb2RlID0gZmFsc2Vcblx0XHR0aGlzLmNpcmNsZXMgPSBbXVxuXHRcdHRoaXMucmVjdHMgPSBbXVxuXG5cdFx0dGhpcy5NID0ge1xuXHRcdFx0RW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuXHRcdCAgICBXb3JsZDogTWF0dGVyLldvcmxkLFxuXHRcdCAgICBCb2R5OiBNYXR0ZXIuQm9keSxcblx0XHQgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuXHRcdCAgICBDb21tb246IE1hdHRlci5Db21tb24sXG5cdFx0ICAgIENvbXBvc2l0ZXM6IE1hdHRlci5Db21wb3NpdGVzLFxuXHRcdCAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG5cdFx0ICAgIEV2ZW50czogTWF0dGVyLkV2ZW50cyxcblx0XHQgICAgTW91c2U6IE1hdHRlci5Nb3VzZSxcblx0XHQgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50XG5cdFx0fVxuXG5cdFx0dGhpcy5leHBsb3Npb24gPSB0aGlzLmV4cGxvc2lvbi5iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0dmFyIGVsID0gdGhpcy5kZWJ1Z01vZGUgPyB0aGlzLnBhcmVudCA6IHVuZGVmaW5lZFxuXHRcdHZhciBlbmdpbmUgPSB0aGlzLmVuZ2luZSA9IHRoaXMuTS5FbmdpbmUuY3JlYXRlKGVsLCB7XG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdHNob3dBbmdsZUluZGljYXRvcjogdHJ1ZSxcblx0XHRcdFx0XHR3aXJlZnJhbWVzOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGVuZ2luZS53b3JsZC5ncmF2aXR5LnggPSAwXG5cdFx0ZW5naW5lLndvcmxkLmdyYXZpdHkueSA9IDBcblxuXHRcdHZhciBib2R5T3B0aW9ucyA9IHtcblx0XHQgICAgZnJpY3Rpb25BaXI6IDAsIFxuXHRcdCAgICBmcmljdGlvbjogMCxcblx0XHQgICAgcmVzdGl0dXRpb246IDAuNlxuXHRcdH1cblxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgcGF0dGVyblBhdGggPSAnaW1hZ2UvcGF0dGVybnMvJ1xuXHRcdHZhciBwYXR0ZXJuVXJscyA9IFtcblx0XHRcdCdicm93bi14LXBhdHRlcm4uanBnJyxcblx0XHRcdCdwYXR0ZXJuLmpwZycsXG5cdFx0XHQnYnJvd24teC1wYXR0ZXJuLmpwZycsXG5cdFx0XHQncGF0dGVybi5qcGcnLFxuXHRcdF1cblx0XHR2YXIgY2lyY2xlUmFkaXVzID0gNjBcblxuXHRcdC8vIEFkZCBjaXJjbGVzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHZhciBjID0gdGhpcy5NLkJvZGllcy5jaXJjbGUod2luZG93VyA+PiAxLCB3aW5kb3dIID4+IDEsIGNpcmNsZVJhZGl1cywgYm9keU9wdGlvbnMpXG5cdFx0XHR0aGlzLk0uV29ybGQuYWRkKGVuZ2luZS53b3JsZCwgYylcblxuXHRcdFx0dmFyIGNpcmNsZSA9IEhlbHBlcnMuZ2V0R3Jhdml0eUNpcmNsZShwYXR0ZXJuUGF0aCArIHBhdHRlcm5VcmxzW2ldLCBjaXJjbGVSYWRpdXMpXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUuY29udGFpbmVyKVxuXG5cdFx0XHRjaXJjbGUuYm9keSA9IGNcblxuXHRcdFx0dGhpcy5jaXJjbGVzW2ldID0gY2lyY2xlXG5cdFx0fVxuXG5cdFx0dmFyIHJlY3RXID0gMjAwXG5cdFx0dmFyIHJlY3RIID0gNjBcblxuXHRcdC8vIEFkZCByZWN0c1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2YXIgciA9IHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKHdpbmRvd1cgPj4gMSwgd2luZG93SCA+PiAxLCByZWN0VywgcmVjdEgsIGJvZHlPcHRpb25zKVxuXHRcdFx0dGhpcy5NLldvcmxkLmFkZChlbmdpbmUud29ybGQsIHIpXG5cblx0XHRcdHZhciByZWN0ID0gSGVscGVycy5nZXRHcmF2aXR5UmVjdChwYXR0ZXJuUGF0aCArIHBhdHRlcm5VcmxzW2ldLCByZWN0VywgcmVjdEgpXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChyZWN0LmNvbnRhaW5lcilcblxuXHRcdFx0cmVjdC5ib2R5ID0gclxuXG5cdFx0XHR0aGlzLnJlY3RzW2ldID0gcmVjdFxuXHRcdH07XG5cblx0XHQvLyBBZGQgV2FsbHNcblx0XHR0aGlzLmFkZFdhbGxzKClcblxuXHRcdC8vIHJ1biB0aGUgZW5naW5lXG5cdFx0dGhpcy5NLkVuZ2luZS5ydW4oZW5naW5lKTtcblxuXHRcdHNldEludGVydmFsKHRoaXMuZXhwbG9zaW9uLCA1MDAwKVxuXG5cdFx0dGhpcy5leHBsb3Npb24oKVxuXG5cdFx0Ly8gYW4gZXhhbXBsZSBvZiB1c2luZyBjb2xsaXNpb25TdGFydCBldmVudCBvbiBhbiBlbmdpbmVcbiAgICAgICAgdGhpcy5NLkV2ZW50cy5vbihlbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIChldmVudCk9PiB7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ3lvJylcbiAgICAgICAgICAgIHZhciBwYWlycyA9IGV2ZW50LnBhaXJzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFpci5ib2R5QSwgcGFpci5ib2R5QilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRhZGRXYWxscygpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBzaXplID0gNTBcblx0XHR2YXIgd2FsbFcgPSB3aW5kb3dXXG5cdFx0dmFyIHdhbGxIID0gd2luZG93SFxuXHRcdHRoaXMuTS5Xb3JsZC5hZGQodGhpcy5lbmdpbmUud29ybGQsIFtcblx0XHQgIHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKDAsIC1zaXplIC8gMiwgd2FsbFcgKiAyLCBzaXplLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdCAgdGhpcy5NLkJvZGllcy5yZWN0YW5nbGUoLXNpemUgLyAyLCAwLCBzaXplLCB3YWxsSCAqIDIsIHsgaXNTdGF0aWM6IHRydWUgfSksXG5cdFx0ICB0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSgwLCB3aW5kb3dIICsgc2l6ZSAvIDIsIHdhbGxXICogMiwgc2l6ZSwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcblx0XHQgIHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKHdpbmRvd1cgKyBzaXplIC8gMiwgMCwgc2l6ZSwgd2FsbEggKiAyLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdF0pO1xuXHR9XG5cdGV4cGxvc2lvbigpIHtcblx0ICAgIHZhciBib2RpZXMgPSB0aGlzLk0uQ29tcG9zaXRlLmFsbEJvZGllcyh0aGlzLmVuZ2luZS53b3JsZCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cblx0ICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcblx0ICAgICAgICAgICAgdmFyIGZvcmNlTWFnbml0dWRlID0gMC4wMDEgKiBib2R5Lm1hc3M7XG5cblx0ICAgICAgICAgICAgLy8gYXBwbHkgZXh0cmEgZm9yY2Vcblx0ICAgICAgICAgICAgdGhpcy5NLkJvZHkuYXBwbHlGb3JjZShib2R5LCB7IHg6IDAsIHk6IDAgfSwgeyBcblx0ICAgICAgICAgICAgICAgIHg6IChmb3JjZU1hZ25pdHVkZSArIE1hdGgucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKiB0aGlzLk0uQ29tbW9uLmNob29zZShbMSwgLTFdKSwgXG5cdCAgICAgICAgICAgICAgICB5OiAtZm9yY2VNYWduaXR1ZGUgKyBNYXRoLnJhbmRvbSgpICogLWZvcmNlTWFnbml0dWRlXG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIC8vIGFkZCBib3VuZHMgdG8gdmVsb2NpdHlcblx0ICAgICAgICAgICAgdmFyIGJvdW5kID0gMC41XG5cdCAgICAgICAgICAgIGlmKE1hdHRlci5WZWN0b3IubWFnbml0dWRlKGJvZHkudmVsb2NpdHkpID4gYm91bmQpIHtcblx0XHRcdFx0XHR0aGlzLk0uQm9keS5zZXRWZWxvY2l0eShib2R5LCB7IHg6IE1hdGgubWluKGJvdW5kLCBib2R5LnZlbG9jaXR5LngpLCB5OiBNYXRoLm1pbihib3VuZCwgYm9keS52ZWxvY2l0eS54KSB9IClcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIGFkZCBib3VuZHMgdG8gcm90YXRpb25cblx0XHRcdFx0aWYoYm9keS5hbmd1bGFyU3BlZWQgPiAwLjAyKSB7XG5cdFx0ICAgICAgICAgICAgdGhpcy5NLkJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KGJvZHksIGJvZHkuYW5ndWxhclZlbG9jaXR5Ki0wLjEpO1xuXHRcdFx0XHR9XG5cblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0dXBkYXRlKCkge1xuXG5cdFx0dGhpcy50aW1lICs9IDAuMDA1XG5cdFx0dGhpcy5lbmdpbmUud29ybGQuZ3Jhdml0eS55ID0gTWF0aC5zaW4odGhpcy50aW1lKSAqIDAuMDFcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaXJjbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2lyY2xlID0gdGhpcy5jaXJjbGVzW2ldXG5cdFx0XHRjaXJjbGUuY29udGFpbmVyLnggPSBjaXJjbGUuYm9keS5wb3NpdGlvbi54XG5cdFx0XHRjaXJjbGUuY29udGFpbmVyLnkgPSBjaXJjbGUuYm9keS5wb3NpdGlvbi55XG5cdFx0XHRjaXJjbGUuY29udGFpbmVyLnJvdGF0aW9uID0gY2lyY2xlLmJvZHkuYW5nbGVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcmVjdCA9IHRoaXMucmVjdHNbaV1cblx0XHRcdHJlY3QuY29udGFpbmVyLnggPSByZWN0LmJvZHkucG9zaXRpb24ueFxuXHRcdFx0cmVjdC5jb250YWluZXIueSA9IHJlY3QuYm9keS5wb3NpdGlvbi55XG5cdFx0XHRyZWN0LmNvbnRhaW5lci5yb3RhdGlvbiA9IHJlY3QuYm9keS5hbmdsZVxuXHRcdH07XG5cblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0aWYodGhpcy5kZWJ1Z01vZGUpIHtcblx0XHRcdHZhciBjYW52YXMgPSB0aGlzLmVuZ2luZS5yZW5kZXIuY2FudmFzXG5cdFx0XHRjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3dXICsgJ3B4J1xuXHRcdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvd0ggKyAncHgnXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3dXXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93SFxuXHRcdH1cblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy52aWRlb3NDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHRcdHRoaXMudmlkZW9TcHJpdGVzID0gW11cblx0XHR2YXIgdmlkZW9VcmxzID0gWyAndmlkZW8vaG9tZV9hXzFfMS5tcDQnLCAndmlkZW8vaG9tZV9hXzFfMS5tcDQnLCAndmlkZW8vaG9tZV9hXzFfMS5tcDQnIF1cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0dmFyIHZpZGVvU3BydCA9IEhlbHBlcnMuZ2V0UFhWaWRlbyh2aWRlb1VybHNbaV0sIDMyMCwgNTEwKVxuXHRcdFx0dGhpcy52aWRlb1Nwcml0ZXNbaV0gPSB2aWRlb1NwcnRcblx0XHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLmFkZENoaWxkKHZpZGVvU3BydCk7XG5cdFx0fTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMudmlkZW9zQ29udGFpbmVyKTtcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93LmhcblxuXHRcdHZhciB2aWRlb0ggPSB0aGlzLnZpZGVvU3ByaXRlc1swXS5oZWlnaHRcblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplID0gWyB3aW5kb3dXICogMC44LCB2aWRlb0ggXVxuXG5cdFx0dGhpcy52aWRlb3NDb250YWluZXIueCA9ICh3aW5kb3dXID4+IDEpIC0gKHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemVbMF0gPj4gMSlcblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci55ID0gKHdpbmRvd0ggPj4gMSkgLSAodGhpcy52aWRlb3NDb250YWluZXIuc2l6ZVsxXSA+PiAxKSAtICh3aW5kb3dIICogMC4wMSlcblxuXHRcdHRoaXMudmlkZW9TcHJpdGVzWzFdLnggPSAodGhpcy52aWRlb3NDb250YWluZXIuc2l6ZVswXSA+PiAxKSAtICh0aGlzLnZpZGVvU3ByaXRlc1sxXS53aWR0aCA+PiAxKVxuXHRcdHRoaXMudmlkZW9TcHJpdGVzWzJdLnggPSB0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzBdIC0gdGhpcy52aWRlb1Nwcml0ZXNbMV0ud2lkdGhcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0ZGVzdHJveSgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9TcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmlkZW9TcHJ0ID0gdGhpcy52aWRlb1Nwcml0ZXNbaV1cblx0XHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHZpZGVvU3BydClcblx0XHRcdFV0aWxzLkRlc3Ryb3lWaWRlb1RleHR1cmUodmlkZW9TcHJ0LnRleHR1cmUpXG5cdFx0XHR2aWRlb1NwcnQudGV4dHVyZS5kZXN0cm95KClcblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZGVzdHJveSgpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BpcmF0aW9uU3BhcmsgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHN1cGVyLmFuaW1hdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aW50YWVzc2VuY2UgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMubW91c2VNb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGFnZU1vdXNlT3V0ID0gdGhpcy5zdGFnZU1vdXNlT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLm1vdXNlID0geyB4OjAsIHk6MCB9XG5cdFx0dGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gMFxuXHRcdHRoaXMuZHJhZ1ZhcnMgPSB7XG5cdFx0XHRzdGFydFBvczogMCxcblx0XHRcdGZvcmNlOiAwLjEsXG5cdFx0XHRkaXJlY3Rpb246IDEsXG5cdFx0XHRhY3RpdmU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdHZhciB0b3RhbEZyYW1lcyA9IDE1OVxuXHQgICAgdmFyIGJhZ0ltYWdlcyA9IEhlbHBlcnMuZ2V0RnJhbWVJbWFnZXNBcnJheSh0b3RhbEZyYW1lcywgJ2ltYWdlL3RocmVlc2l4dHkvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXMsXG5cdCAgICBcdGN1cnJlbnRGcmFtZTogMFxuXHQgICAgfVxuXG5cdCAgICBkb20odGhpcy5wYXJlbnQpLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bilcblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApXG5cdCAgICBkb20oZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsIHRoaXMuc3RhZ2VNb3VzZU91dClcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRtb3VzZURvd24oZSkge1xuXHRcdGRvbSh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0XHR0aGlzLmRyYWdWYXJzLmFjdGl2ZSA9IHRydWVcblx0XHR0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zID0gZS5jbGllbnRYXG5cdH1cblx0bW91c2VVcCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcmFnKClcblx0fVxuXHRzdGFnZU1vdXNlT3V0KGUpIHtcblx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuICAgICAgICBpZiAoIWZyb20gfHwgZnJvbS5ub2RlTmFtZSA9PSBcIkhUTUxcIikge1xuXHRcdFx0dGhpcy5kaXNhYmxlRHJhZygpXG4gICAgICAgIH1cblx0fVxuXHRtb3VzZU1vdmUoZSkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uID0gKCB0aGlzLm1vdXNlLnggPiB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zICkgPyAxIDogLTFcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm1vdXNlLnggLSB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zKSAvIHdpbmRvd1dcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDggKiB0aGlzLmRyYWdWYXJzLmRpcmVjdGlvbikgKiBNYXRoLm1pbihkaXN0YW5jZSwgMTAwKVxuXHR9XG5cdGRpc2FibGVEcmFnKCkge1xuXHRcdGRvbSh3aW5kb3cpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpXG5cdFx0dGhpcy5kcmFnVmFycy5hY3RpdmUgPSBmYWxzZVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cblx0XHR0aGlzLmRyYWdWYXJzLmZvcmNlICs9ICgwLjAwMDAwMSAtIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpICogMC40XG5cdCAgICBcdFxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBuZXdGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5iZy5jdXJyZW50RnJhbWUgKyB0aGlzLmRyYWdWYXJzLmZvcmNlKVxuXHQgICAgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSBuZXdGcmFtZVxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIGlmKHRoaXMuYmcuY3VycmVudEZyYW1lIDwgMCkgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKHRoaXMuYmcuY3VycmVudEZyYW1lKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVtb3ZlU3ByaXRlID0gdGhpcy5yZW1vdmVTcHJpdGUuYmluZCh0aGlzKVxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdXG5cdFx0dGhpcy5tb3VzZSA9IHsgeDowLCB5OjAgfVxuXHRcdHRoaXMuYWN0aXZlU3ByaXRlcyA9IFtdXG5cdFx0dGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSA9IHRydWVcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpIFx0XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHR0aGlzLmltYWdlc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dGhpcy5iZyA9IG5ldyBQSVhJLlNwcml0ZShQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdpbWFnZS9iYWctc3RhdGljLmpwZycpKVxuXG5cdFx0dGhpcy5iZy5hbmNob3IueCA9IDAuNVxuXHRcdHRoaXMuYmcuYW5jaG9yLnkgPSAwLjVcblxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmcpXG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5pbWFnZXNDb250YWluZXIpXG5cblx0XHR0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnJlbW92ZVNwcml0ZSwgNzUpXG5cdFx0ZG9tKHdpbmRvdykub24oXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSlcblx0XHR0aGlzLmNvdW50ZXIgPSAwXG5cblx0XHR0aGlzLmxvYWRJbWFnZXMoKVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGxvYWRJbWFnZXMoKSB7XG5cdFx0dmFyIHBhZ2VDb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHZhciBpbWFnZVNyY3MgPSBwYWdlQ29udGVudC5pbWFnZXNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlU3Jjcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGZpbGVuYW1lID0gaW1hZ2VTcmNzW2ldXG5cdFx0XHR2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2ltYWdlL3N0eWxlLWltYWdlcy8nICsgZmlsZW5hbWUpO1xuXHRcdFx0dGhpcy50ZXh0dXJlcy5wdXNoKHRleHR1cmUpXG5cdFx0fTtcblx0fVxuXHRhZGRTcHJpdGUoKSB7XG5cdFx0dmFyIHJhbmRvbU51bSA9IFV0aWxzLlJhbmQoMCwgdGhpcy50ZXh0dXJlcy5sZW5ndGgtMSwgMClcblx0XHR2YXIgdGV4dHVyZSA9IHRoaXMudGV4dHVyZXNbcmFuZG9tTnVtXVxuXHRcdGlmKHRleHR1cmUgPT0gdW5kZWZpbmVkKSByZXR1cm5cblx0XHR2YXIgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpXG5cdFx0dmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dmFyIHNoYXBlID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuXHRcdHZhciBzaXplID0gMjVcblx0XHRzaGFwZS5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDEpXG5cdFx0c2hhcGUuZHJhd1JlY3QoLXNpemUvMiwgLXNpemUvMiwgc2l6ZSwgc2l6ZSlcblx0XHRjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKVxuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChzaGFwZSlcblx0XHRzcHJpdGUuYW5jaG9yLnggPSAwLjVcblx0XHRzcHJpdGUuYW5jaG9yLnkgPSAwLjVcblx0XHRzcHJpdGUuYmxlbmRNb2RlID0gUElYSS5CTEVORF9NT0RFUy5NVUxUSVBMWVxuXHRcdGNvbnRhaW5lci5wb3NpdGlvbi54ID0gdGhpcy5tb3VzZS54XG5cdFx0Y29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLm1vdXNlLnlcblx0XHR0aGlzLmFjdGl2ZVNwcml0ZXMucHVzaCh7XG5cdFx0XHRzcHJpdGU6IHNwcml0ZSxcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyXG5cdFx0fSlcblx0XHR0aGlzLmltYWdlc0NvbnRhaW5lci5hZGRDaGlsZChjb250YWluZXIpXG5cdH1cblx0cmVtb3ZlU3ByaXRlKCkge1xuXHRcdGlmKHRoaXMuYWN0aXZlU3ByaXRlcy5sZW5ndGggPD0gMSkgcmV0dXJuXG5cdFx0dmFyIHNwcml0ZVRvUmVtb3ZlID0gdGhpcy5hY3RpdmVTcHJpdGVzLnNoaWZ0KClcblx0XHR0aGlzLmltYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChzcHJpdGVUb1JlbW92ZS5jb250YWluZXIpXG5cdFx0c3ByaXRlVG9SZW1vdmUuY29udGFpbmVyLmRlc3Ryb3koKVxuXHRcdHNwcml0ZVRvUmVtb3ZlLnNwcml0ZS5kZXN0cm95KClcblx0fVxuXHRvbk1vdXNlTW92ZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdGlmKGUuY2xpZW50WSA+IHdpbmRvd0ggKiAwLjgpIHJldHVybiBcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblx0XHRpZih0aGlzLmFkZFNwcml0ZUlzQWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFkZFNwcml0ZUlzQWN0aXZlID0gZmFsc2Vcblx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0dGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSA9IHRydWVcblx0XHRcdFx0dGhpcy5hZGRTcHJpdGUoKVxuXHRcdFx0fSwgNjApXG5cdFx0fVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlU3ByaXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFjdGl2ZSA9IHRoaXMuYWN0aXZlU3ByaXRlc1tpXVxuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGFjdGl2ZS5jb250YWluZXJcblx0XHRcdGNvbnRhaW5lci5wb3NpdGlvbi55IC09IDFcblx0XHR9O1xuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLnNjYWxlLnggPSB0aGlzLmJnLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcdFxuXHRcdEhlbHBlcnMucmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyKHRoaXMuaW1hZ2VzQ29udGFpbmVyKVxuXHRcdGRvbSh3aW5kb3cpLm9mZihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuXHR9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0V0lORE9XX1JFU0laRTogJ1dJTkRPV19SRVNJWkUnLFxuXHRDSEFOR0VfQU1CSUVOVDogJ0NIQU5HRV9BTUJJRU5UJyxcblx0SU5UUk9fRklOSVNIRUQ6ICdJTlRST19GSU5JU0hFRCcsXG5cblx0TEFORFNDQVBFOiAnTEFORFNDQVBFJyxcblx0UE9SVFJBSVQ6ICdQT1JUUkFJVCcsXG5cblx0TUVESUFfR0xPQkFMX1c6IDE5MjAsXG5cdE1FRElBX0dMT0JBTF9IOiAxMDgwLFxuXHRcblx0QUREX1BYX0NISUxEOiAnQUREX1BYX0NISUxEJyxcblx0UkVNT1ZFX1BYX0NISUxEOiAnUkVNT1ZFX1BYX0NISUxEJyxcblx0XG5cdE9WRVJBTExfTUFSR0lOOiA0MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJ2YXIgSGVscGVycyA9IHtcblxuICAgIGdldFBYVmlkZW86IGZ1bmN0aW9uKHVybCwgd2lkdGgsIGhlaWdodCwgdmFycykge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tVmlkZW8odXJsKVxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIHRydWUpXG4gICAgICAgIHZhciB2aWRlb1Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKVxuICAgICAgICB2aWRlb1Nwcml0ZS53aWR0aCA9IHdpZHRoXG4gICAgICAgIHZpZGVvU3ByaXRlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICByZXR1cm4gdmlkZW9TcHJpdGVcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyOiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEZyYW1lSW1hZ2VzQXJyYXk6IGZ1bmN0aW9uKGZyYW1lcywgYmFzZXVybCwgZXh0KSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGZyYW1lczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYmFzZXVybCArIGkgKyAnLicgKyBleHRcbiAgICAgICAgICAgIGFycmF5W2ldID0gdXJsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgIH0sIFxuXG4gICAgZ2V0R3Jhdml0eUNpcmNsZTogZnVuY3Rpb24odXJsLCByYWRpdXMpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgICAgIFxuICAgICAgICB2YXIgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlLmZyb21JbWFnZSh1cmwpXG4gICAgICAgIHNwcml0ZS5hbmNob3IueCA9IHNwcml0ZS5hbmNob3IueSA9IDAuNVxuXG4gICAgICAgIHZhciBtYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICAgICBtYXNrLmJlZ2luRmlsbCgweDAwMDAwMCwgMSlcbiAgICAgICAgbWFzay5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cylcbiAgICAgICAgbWFzay5lbmRGaWxsKClcblxuICAgICAgICBzcHJpdGUubWFzayA9IG1hc2tcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChtYXNrKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgIHNwcml0ZTogc3ByaXRlLFxuICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9XG4gICAgfSwgXG5cbiAgICBnZXRHcmF2aXR5UmVjdDogZnVuY3Rpb24odXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgICAgIFxuICAgICAgICB2YXIgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlLmZyb21JbWFnZSh1cmwpXG4gICAgICAgIHNwcml0ZS5hbmNob3IueCA9IHNwcml0ZS5hbmNob3IueSA9IDAuNVxuXG4gICAgICAgIHZhciBtYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICAgICBtYXNrLmJlZ2luRmlsbCgweDAwMDAwMCwgMSlcbiAgICAgICAgbWFzay5kcmF3UmVjdCgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgbWFzay5lbmRGaWxsKClcblxuICAgICAgICBzcHJpdGUubWFzayA9IG1hc2tcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChtYXNrKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgIHNwcml0ZTogc3ByaXRlLFxuICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9IFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzIiwiXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5Ob2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYodGhpc1tpXSAmJiB0aGlzW2ldLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXNbaV0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG4gICAgXHRcbmNsYXNzIEdsb2JhbEV2ZW50cyB7XG5cdGluaXQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRBcHBBY3Rpb25zLndpbmRvd1Jlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEV2ZW50c1xuIiwiaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBQcmVsb2FkZXIgIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5xdWV1ZSA9IG5ldyBjcmVhdGVqcy5Mb2FkUXVldWUoKVxuXHRcdHRoaXMucXVldWUub24oXCJjb21wbGV0ZVwiLCB0aGlzLm9uTWFuaWZlc3RMb2FkQ29tcGxldGVkLCB0aGlzKVxuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrID0gdW5kZWZpbmVkXG5cdFx0dGhpcy5hbGxNYW5pZmVzdHMgPSBbXVxuXHR9XG5cdGxvYWQobWFuaWZlc3QsIG9uTG9hZGVkKSB7XG5cblx0XHRpZih0aGlzLmFsbE1hbmlmZXN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsTWFuaWZlc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBtID0gdGhpcy5hbGxNYW5pZmVzdHNbaV1cblx0XHRcdFx0aWYobS5sZW5ndGggPT0gbWFuaWZlc3QubGVuZ3RoICYmIG1bMF0uaWQgPT0gbWFuaWZlc3RbMF0uaWQgJiYgbVttLmxlbmd0aC0xXS5pZCA9PSBtYW5pZmVzdFttYW5pZmVzdC5sZW5ndGgtMV0uaWQpIHtcblx0XHRcdFx0XHRvbkxvYWRlZCgpXHRcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0dGhpcy5hbGxNYW5pZmVzdHMucHVzaChtYW5pZmVzdClcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjayA9IG9uTG9hZGVkXG4gICAgICAgIHRoaXMucXVldWUubG9hZE1hbmlmZXN0KG1hbmlmZXN0KVxuXHR9XG5cdG9uTWFuaWZlc3RMb2FkQ29tcGxldGVkKCkge1xuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrKClcblx0fVxuXHRnZXRDb250ZW50QnlJZChpZCkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlLmdldFJlc3VsdChpZClcblx0fVxuXHRnZXRJbWFnZVVSTChpZCkge1xuXHRcdHJldHVybiB0aGlzLmdldENvbnRlbnRCeUlkKGlkKS5nZXRBdHRyaWJ1dGUoXCJzcmNcIilcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXJcbiIsImltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBjcm9zc3JvYWRzIGZyb20gJ2Nyb3Nzcm9hZHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFJvdXRlciB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yb3V0aW5nID0gQXBwU3RvcmUuRGF0YS5yb3V0aW5nXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIub2xkSGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMuX3NldHVwQ3Jvc3Nyb2FkcygpXG5cdH1cblx0YmVnaW5Sb3V0aW5nKCkge1xuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXHRfc2V0dXBDcm9zc3JvYWRzKCkge1xuXHRcdHZhciBiYXNpY1NlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0nLCB0aGlzLl9vbkZpcnN0RGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdGJhc2ljU2VjdGlvbi5ydWxlcyA9IHtcblx0ICAgICAgICBwYWdlIDogWycgJywgJ3dvcmstb2YtYXJ0JywgJ3dvcmtzJywgJ2NvbnRhY3QnXSAvL3ZhbGlkIHNlY3Rpb25zXG5cdCAgICB9XG5cdH1cblx0X29uRmlyc3REZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHBhZ2VJZClcblx0fVxuXHRfb25EZWZhdWx0VVJMSGFuZGxlcigpIHtcblx0XHQvLyB0aGlzLl9zZW5kVG9EZWZhdWx0KClcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZSgnJylcblx0fVxuXHRfYXNzaWduUm91dGUoaWQpIHtcblx0XHR2YXIgaGFzaCA9IGhhc2hlci5nZXRIYXNoKClcblx0XHR2YXIgcGFydHMgPSB0aGlzLl9nZXRVUkxQYXJ0cyhoYXNoKVxuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFydHNbMF0sIGlkKVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSB0cnVlXG5cdH1cblx0X2dldFVSTFBhcnRzKHVybCkge1xuXHRcdHZhciBoYXNoID0gdXJsXG5cdFx0cmV0dXJuIGhhc2guc3BsaXQoJy8nKVxuXHR9XG5cdF91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcmVudCwgdGFyZ2V0SWQpIHtcblx0XHRoYXNoZXIub2xkSGFzaCA9IGhhc2hlci5uZXdIYXNoXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB7XG5cdFx0XHRoYXNoOiBoYXNoLFxuXHRcdFx0cGFydHM6IHBhcnRzLFxuXHRcdFx0cGFyZW50OiBwYXJlbnQsXG5cdFx0XHR0YXJnZXRJZDogdGFyZ2V0SWRcblx0XHR9XG5cdFx0QXBwQWN0aW9ucy5wYWdlSGFzaGVyQ2hhbmdlZCgpXG5cdH1cblx0X2RpZEhhc2hlckNoYW5nZShuZXdIYXNoLCBvbGRIYXNoKSB7XG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0Y3Jvc3Nyb2Fkcy5wYXJzZShuZXdIYXNoKVxuXHRcdGlmKHRoaXMubmV3SGFzaEZvdW5kZWQpIHJldHVyblxuXHRcdC8vIElmIFVSTCBkb24ndCBtYXRjaCBhIHBhdHRlcm4sIHNlbmQgdG8gZGVmYXVsdFxuXHRcdHRoaXMuX29uRGVmYXVsdFVSTEhhbmRsZXIoKVxuXHR9XG5cdF9zZW5kVG9EZWZhdWx0KCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKEFwcFN0b3JlLmRlZmF1bHRSb3V0ZSgpKVxuXHR9XG5cdHN0YXRpYyBnZXRCYXNlVVJMKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5VUkwuc3BsaXQoXCIjXCIpWzBdXG5cdH1cblx0c3RhdGljIGdldEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5nZXRIYXNoKClcblx0fVxuXHRzdGF0aWMgZ2V0Um91dGVzKCkge1xuXHRcdHJldHVybiBBcHBTdG9yZS5EYXRhLnJvdXRpbmdcblx0fVxuXHRzdGF0aWMgZ2V0TmV3SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm5ld0hhc2hcblx0fVxuXHRzdGF0aWMgZ2V0T2xkSGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm9sZEhhc2hcblx0fVxuXHRzdGF0aWMgc2V0SGFzaChoYXNoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goaGFzaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5mdW5jdGlvbiBfcGFnZVJvdXRlSWRDaGFuZ2VkKGlkKSB7XG59XG5mdW5jdGlvbiBfZ2V0UGFnZUNvbnRlbnQoKSB7XG4gICAgdmFyIGhhc2hPYmogPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG4gICAgdmFyIGhhc2ggPSBoYXNoT2JqLmhhc2gubGVuZ3RoIDwgMSA/ICcvJyA6IGhhc2hPYmouaGFzaFxuICAgIHZhciBjb250ZW50ID0gQXBwU3RvcmUuRGF0YS5yb3V0aW5nW2hhc2hdXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YS5tZW51XG59XG5mdW5jdGlvbiBfZ2V0TWVudUl0ZW1CeUlkKGlkKSB7XG5cbiAgICB2YXIgbWVudUl0ZW1zID0gQXBwU3RvcmUuRGF0YS5tZW51XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobWVudUl0ZW1zW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9XG4gICAgfTtcblxufVxuZnVuY3Rpb24gX2dldEN1cnJlbnRQYWdlTWVudUl0ZW0oKSB7XG5cbiAgICB2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcbiAgICB2YXIgaWQgPSBoYXNoT2JqLmhhc2ggPT0gJycgPyAnaG9tZScgOiBoYXNoT2JqLmhhc2hcblxuICAgIHZhciBtZW51SXRlbXMgPSBBcHBTdG9yZS5EYXRhLm1lbnVcbiAgICB2YXIgaXRlbTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtZW51SXRlbXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBtZW51SXRlbXNbaV1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChpdGVtID09IHVuZGVmaW5lZCkgPyB7IGlkOiAnaG9tZScgfSA6IGl0ZW1cbn1cbmZ1bmN0aW9uIF9nZXRBcHBEYXRhKCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhWydkZWZhdWx0LXJvdXRlJ11cbn1cbmZ1bmN0aW9uIF9nZXRHbG9iYWxDb250ZW50KCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhLmNvbnRlbnRcbn1cbmZ1bmN0aW9uIF93aW5kb3dXaWR0aEhlaWdodCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxufVxuXG52YXIgQXBwU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24odHlwZSwgaXRlbSkge1xuICAgICAgICB0aGlzLmVtaXQodHlwZSwgaXRlbSlcbiAgICB9LFxuICAgIHBhZ2VDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRQYWdlQ29udGVudCgpXG4gICAgfSxcbiAgICBtZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0TWVudUNvbnRlbnQoKVxuICAgIH0sXG4gICAgZ2V0Q3VycmVudFBhZ2VNZW51SXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG4gICAgfSxcbiAgICBnZXRNZW51SXRlbUJ5SWQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiBfZ2V0TWVudUl0ZW1CeUlkKGlkKVxuICAgIH0sXG4gICAgYXBwRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0QXBwRGF0YSgpXG4gICAgfSxcbiAgICBkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldERlZmF1bHRSb3V0ZSgpXG4gICAgfSxcbiAgICBnbG9iYWxDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRHbG9iYWxDb250ZW50KClcbiAgICB9LFxuICAgIFdpbmRvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2luZG93V2lkdGhIZWlnaHQoKVxuICAgIH0sXG4gICAgT3JpZW50YXRpb246IEFwcENvbnN0YW50cy5MQU5EU0NBUEUsXG4gICAgZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cbiAgICAgICAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VEOlxuICAgICAgICAgICAgICAgIF9wYWdlUm91dGVJZENoYW5nZWQoYWN0aW9uLml0ZW0pXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRTpcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5XaW5kb3cuaCA9IGFjdGlvbi5pdGVtLndpbmRvd0hcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5PcmllbnRhdGlvbiA9IChBcHBTdG9yZS5XaW5kb3cudyA+IEFwcFN0b3JlLldpbmRvdy5oKSA/IEFwcENvbnN0YW50cy5MQU5EU0NBUEUgOiBBcHBDb25zdGFudHMuUE9SVFJBSVRcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUsIGFjdGlvbi5pdGVtKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbndpbmRvdy5BcHBTdG9yZSA9IEFwcFN0b3JlXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHN2ZyB7Li4udGhpcy5wcm9wc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9zdmc+XG4gICAgfVxufVxuIiwiaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kcyhvYmopIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iailcblx0XHQuZmlsdGVyKGtleSA9PiBpcy5mbihvYmpba2V5XSkpXG59XG5cbmZ1bmN0aW9uIGF1dG9CaW5kKG9iaikge1xuXHQvLyBjb25zb2xlLmxvZygnb2JqIC0tLS0tJywgb2JqKVxuICBcdGdldEFsbE1ldGhvZHMob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblx0XHQuZm9yRWFjaChtdGQgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobXRkKVxuXHRcdFx0b2JqW210ZF0gPSBvYmpbbXRkXS5iaW5kKG9iaik7XG5cdFx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b0JpbmQ7IiwiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgTm9ybWFsaXplTW91c2VDb29yZHMoZSwgb2JqV3JhcHBlcikge1xuXHRcdHZhciBwb3N4ID0gMDtcblx0XHR2YXIgcG9zeSA9IDA7XG5cdFx0aWYgKCFlKSB2YXIgZSA9IHdpbmRvdy5ldmVudDtcblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0b2JqV3JhcHBlci54ID0gcG9zeFxuXHRcdG9ialdyYXBwZXIueSA9IHBvc3lcblx0XHRyZXR1cm4gb2JqV3JhcHBlclxuXHR9XG5cdHN0YXRpYyBSZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIGNvbnRlbnRXLCBjb250ZW50SCkge1xuXHRcdHZhciBhc3BlY3RSYXRpbyA9IGNvbnRlbnRXIC8gY29udGVudEhcblx0XHR2YXIgc2NhbGUgPSAoKHdpbmRvd1cgLyB3aW5kb3dIKSA8IGFzcGVjdFJhdGlvKSA/ICh3aW5kb3dIIC8gY29udGVudEgpICogMSA6ICh3aW5kb3dXIC8gY29udGVudFcpICogMVxuXHRcdHZhciBuZXdXID0gY29udGVudFcgKiBzY2FsZVxuXHRcdHZhciBuZXdIID0gY29udGVudEggKiBzY2FsZVxuXHRcdHZhciBjc3MgPSB7XG5cdFx0XHR3aWR0aDogbmV3Vyxcblx0XHRcdGhlaWdodDogbmV3SCxcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKG5ld1cgPj4gMSksXG5cdFx0XHR0b3A6ICh3aW5kb3dIID4+IDEpIC0gKG5ld0ggPj4gMSksXG5cdFx0XHRzY2FsZTogc2NhbGVcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGNzc1xuXHR9XG5cdHN0YXRpYyBEZXN0cm95VmlkZW8odmlkZW8pIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgdmlkZW8uc3JjID0gJyc7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZpZGVvLmNoaWxkTm9kZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgIFx0Y2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCAnJyk7XG4gICAgICAgIFx0Ly8gV29ya2luZyB3aXRoIGEgcG9seWZpbGwgb3IgdXNlIGpxdWVyeVxuICAgICAgICBcdGNoaWxkLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIERlc3Ryb3lWaWRlb1RleHR1cmUodGV4dHVyZSkge1xuICAgIFx0dmFyIHZpZGVvID0gdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2VcbiAgICAgICAgVXRpbHMuRGVzdHJveVZpZGVvKHZpZGVvKVxuICAgIH1cbiAgICBzdGF0aWMgSXNFdmVuKG4pIHtcblx0ICAgcmV0dXJuIG4gJSAyID09IDA7XG5cdH1cblx0c3RhdGljIFJhbmQobWluLCBtYXgsIGRlY2ltYWxzKSB7XG4gICAgICAgIHZhciByYW5kb21OdW0gPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbiAgICAgICAgaWYoZGVjaW1hbHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFx0cmV0dXJuIHJhbmRvbU51bVxuICAgICAgICB9ZWxzZXtcblx0ICAgICAgICB2YXIgZCA9IE1hdGgucG93KDEwLCBkZWNpbWFscylcblx0ICAgICAgICByZXR1cm4gfn4oKGQgKiByYW5kb21OdW0pICsgMC41KSAvIGRcbiAgICAgICAgfVxuXHR9XG5cdHN0YXRpYyBUcmFuZm9ybUFycmF5RnJvbU1pZGRsZUFuZE91dChhcnJheSkge1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXVxuICAgICAgICB2YXIgaSA9IE1hdGguY2VpbChhcnJheS5sZW5ndGgvMilcbiAgICAgICAgdmFyIGogPSBpIC0gMVxuICAgICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgXHRuZXdBcnJheS5wdXNoKGFycmF5W2otLV0pXG4gICAgICAgICAgICBpZihpIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBcdG5ld0FycmF5LnB1c2goYXJyYXlbaSsrXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXlcbiAgICB9XG4gICAgc3RhdGljIFNldChlbGVtZW50LCB2YXJzLCBhbmltYXRpb25DbGFzcykge1xuXHRcdGFuaW1hdGlvbkNsYXNzID0gYW5pbWF0aW9uQ2xhc3MgfHwgJ2FuaW1hdGUnXG5cdFx0ZG9tKGVsZW1lbnQpLnJlbW92ZUNsYXNzKGFuaW1hdGlvbkNsYXNzKVxuXHRcdFR3ZWVuTGl0ZS5zZXQoZWxlbWVudCwgdmFycylcblx0fVxuXHRzdGF0aWMgQW5pbWF0ZShlbGVtZW50LCB2YXJzLCBhbmltYXRpb25DbGFzcykge1xuXHRcdGFuaW1hdGlvbkNsYXNzID0gYW5pbWF0aW9uQ2xhc3MgfHwgJ2FuaW1hdGUnXG5cdFx0ZG9tKGVsZW1lbnQpLmFkZENsYXNzKGFuaW1hdGlvbkNsYXNzKVxuXHRcdHZhcnNbJ2ZvcmNlM0QnXSA9IHRydWVcblx0XHRUd2VlbkxpdGUuc2V0KGVsZW1lbnQsIHZhcnMpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHNcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gXG4vLyBNSVQgbGljZW5zZVxuIFxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuICAgIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuIFxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIFxuICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuIFxuICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbn0oKSk7IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG4vLyBBY3Rpb25zXG52YXIgUGFnZXJBY3Rpb25zID0ge1xuICAgIG9uUGFnZVJlYWR5OiBmdW5jdGlvbihoYXNoKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWSxcbiAgICAgICAgXHRpdGVtOiBoYXNoXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICBcdFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURSxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgcGFnZVRyYW5zaXRpb25EaWRGaW5pc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNILFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfVxufVxuXG4vLyBDb25zdGFudHNcbnZhciBQYWdlckNvbnN0YW50cyA9IHtcblx0UEFHRV9JU19SRUFEWTogJ1BBR0VfSVNfUkVBRFknLFxuXHRQQUdFX1RSQU5TSVRJT05fSU46ICdQQUdFX1RSQU5TSVRJT05fSU4nLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUOiAnUEFHRV9UUkFOU0lUSU9OX09VVCcsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6ICdQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTOiAnUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTJyxcblx0UEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6ICdQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCcsXG59XG5cbi8vIERpc3BhdGNoZXJcbnZhciBQYWdlckRpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVBhZ2VyQWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKGFjdGlvbilcblx0fVxufSlcblxuLy8gU3RvcmVcbnZhciBQYWdlclN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuICAgIGZpcnN0UGFnZVRyYW5zaXRpb246IHRydWUsXG4gICAgcGFnZVRyYW5zaXRpb25TdGF0ZTogdW5kZWZpbmVkLCBcbiAgICBkaXNwYXRjaGVySW5kZXg6IFBhZ2VyRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBwYXlsb2FkLnR5cGVcbiAgICAgICAgdmFyIGl0ZW0gPSBwYXlsb2FkLml0ZW1cbiAgICAgICAgc3dpdGNoKGFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9JU19SRUFEWTpcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTXG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID8gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOIDogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVFxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTpcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5cbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOlxuICAgICAgICAgICAgXHRpZiAoUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uKSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5lbWl0KGFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFBhZ2VyU3RvcmU6IFBhZ2VyU3RvcmUsXG5cdFBhZ2VyQWN0aW9uczogUGFnZXJBY3Rpb25zLFxuXHRQYWdlckNvbnN0YW50czogUGFnZXJDb25zdGFudHMsXG5cdFBhZ2VyRGlzcGF0Y2hlcjogUGFnZXJEaXNwYXRjaGVyXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnQXV0b2JpbmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdGF1dG9iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnRsSW4gPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlXG5cdFx0fSlcblx0XHR0aGlzLnRsT3V0ID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGVcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5yZXNpemUoKVxuXHRcdHRoaXMuc2V0dXBBbmltYXRpb25zKClcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaXNSZWFkeSh0aGlzLnByb3BzLmhhc2gpLCAwKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHQvLyByZXNldFxuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0XHR0aGlzLnRsSW4udGltZVNjYWxlKDIpLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnRpbWVTY2FsZSgyKS5wbGF5KDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCksIDApXG5cdH1cblx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSwgMClcblx0fVxuXHRyZXNpemUoKSB7XG5cdH1cblx0Zm9yY2VVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQucGF1c2UoMClcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLmNsZWFyKClcblx0XHR0aGlzLnRsT3V0LmNsZWFyKClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQYWdlclN0b3JlLCBQYWdlckFjdGlvbnMsIFBhZ2VyQ29uc3RhbnRzLCBQYWdlckRpc3BhdGNoZXJ9IGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IF9jYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9TdHJpbmcvY2FwaXRhbGl6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gJ3BhZ2UtYidcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQgPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb21wb25lbnRzID0ge1xuXHRcdFx0J25ldy1jb21wb25lbnQnOiB1bmRlZmluZWQsXG5cdFx0XHQnb2xkLWNvbXBvbmVudCc6IHVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J3BhZ2VzLWNvbnRhaW5lcic+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RoaXMuZGl2U3R5bGV9IHJlZj0ncGFnZS1hJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWInPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRQYWdlclN0b3JlLm9uKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9uKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHR9XG5cdHNldHVwTmV3Q29tcG9uZW50KGhhc2gsIFR5cGUpIHtcblx0XHR2YXIgaWQgPSBfY2FwaXRhbGl6ZShoYXNoLnJlcGxhY2UoXCIvXCIsIFwiXCIpKVxuXHRcdHRoaXMub2xkUGFnZURpdlJlZiA9IHRoaXMuY3VycmVudFBhZ2VEaXZSZWZcblx0XHR0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID0gKHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPT09ICdwYWdlLWEnKSA/ICdwYWdlLWInIDogJ3BhZ2UtYSdcblx0XHR2YXIgZWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIHBhZ2UgPSBcblx0XHRcdDxUeXBlIFxuXHRcdFx0XHRpZD17dGhpcy5jdXJyZW50UGFnZURpdlJlZn0gXG5cdFx0XHRcdGlzUmVhZHk9e3RoaXMub25QYWdlUmVhZHl9IFxuXHRcdFx0XHRoYXNoPXtoYXNofVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKX1cblx0XHRcdC8+XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10gPSB0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddID0gUmVhY3QucmVuZGVyKHBhZ2UsIGVsKVxuXHRcdGlmKFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9PT0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOX1BST0dSRVNTKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS5mb3JjZVVubW91bnQoKVxuXHRcdH1cblx0fVxuXHRvblBhZ2VSZWFkeShoYXNoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLm9uUGFnZVJlYWR5KGhhc2gpXG5cdH1cblx0d2lsbFBhZ2VUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy5zd2l0Y2hQYWdlc0RpdkluZGV4KClcblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbkluKClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25PdXQoKVxuXHR9XG5cdGRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRQYWdlckFjdGlvbnMucGFnZVRyYW5zaXRpb25EaWRGaW5pc2goKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdH1cblx0ZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRQYWdlckFjdGlvbnMub25UcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdHN3aXRjaFBhZ2VzRGl2SW5kZXgoKSB7XG5cdFx0dmFyIG5ld0VsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBvbGRFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLm9sZFBhZ2VEaXZSZWZdKVxuXHRcdG5ld0VsLnN0eWxlLnpJbmRleCA9IDJcblx0XHRvbGRFbC5zdHlsZS56SW5kZXggPSAxXG5cdH1cblx0dW5tb3VudENvbXBvbmVudChyZWYpIHtcblx0XHRpZih0aGlzLmNvbXBvbmVudHNbcmVmXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzLmNvbXBvbmVudHNbcmVmXS5wcm9wcy5pZFxuXHRcdFx0dmFyIGRvbVRvUmVtb3ZlID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW2lkXSlcblx0XHRcdFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUoZG9tVG9SZW1vdmUpXG5cdFx0fVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRpZih0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSAhPSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLnVwZGF0ZSgpXG5cdFx0fVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRpZih0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSAhPSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLnJlc2l6ZSgpXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25Jbilcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnbmV3LWNvbXBvbmVudCcpXG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJjb250ZW50XCI6IHtcblx0XHRcIm15dGV4dFwiOiBcInNvbWUgZ2xvYmFsIHRleHRcIlxuXHR9LFxuXG5cdFwibWVudVwiOiBbXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiBcInF1aW50YWVzc2VuY2VcIixcblx0XHRcdFwibmFtZVwiOiBcIlF1aW50YWVzc2VuY2VcIixcblx0XHRcdFwidXJsXCI6IFwiL3F1aW50YWVzc2VuY2VcIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwiYXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJBcmNoaXRlY3R1cmVcIixcblx0XHRcdFwidXJsXCI6IFwiL2FyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJSVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwiY3JlYXRpdml0eS1pbm5vdmF0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJDcmVhdGl2aXR5ICYgSW5ub3ZhdGlvblwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvY3JlYXRpdml0eS1pbm5vdmF0aW9uXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklJSVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwic3R5bGVcIixcblx0XHRcdFwibmFtZVwiOiBcIlN0eWxlXCIsXG5cdFx0XHRcInVybFwiOiBcIi9zdHlsZVwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJVlwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwiaW5zcGlyYXRpb24tc3BhcmtcIixcblx0XHRcdFwibmFtZVwiOiBcIkluc3BpcmF0aW9uIFNwYXJrXCIsXG5cdFx0XHRcInVybFwiOiBcIi9pbnNwaXJhdGlvbi1zcGFya1wiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJWXCJcblx0XHR9XG5cdF0sXG5cblx0XCJkZWZhdWx0LXJvdXRlXCI6IFwiXCIsXG5cblx0XCJyb3V0aW5nXCI6IHtcblx0XHRcIi9cIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImhvbWUgcGFnZVwiXG5cdFx0fSxcblx0XHRcImluc3BpcmF0aW9uLXNwYXJrXCI6IHtcblx0XHRcdFwidGl0bGVcIjogXCJpbnNwaXJhdGlvbi1zcGFyayBwYWdlXCJcblx0XHR9LFxuXHRcdFwiYXJjaGl0ZWN0dXJlXCI6IHtcblx0XHRcdFwidGl0bGVcIjogXCJhcmNoaXRlY3R1cmUgcGFnZVwiLFxuXHRcdFx0XCJ2aWRlb3NcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBMSU5FXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkxhZHkgRGlvciBpcyBhbiBhcmNoaXRlY3R1cmFsIGNvbnN0cnVjdGlvbi48YnIvPkl0cyBiZWF1dHkgbGllcywgYXQgdGhlIGJlZ2lubmluZywgb24gaXRzIOKAnGxpbmVz4oCdLDxici8+aXRzIHByb3BvcnRpb25zIGFuZCBpZGVhbCBkaW1lbnNpb25zLjxici8+VGhlIGxpbmUgY3JlYXRlcyB0aGUgc2hhcGUuLi48YnIvPkluIGFsbCBpdCB0YWtlcyAxNDQgc2VwYXJhdGUgcGFydHMgdG8gbWFrZSBlYWNoIExhZHkgRGlvci48YnIvPjxici8+VGhlIHNoYXBlIGdpdmVzIGxpdmUgdG8gdGhlIG1hdGVyaWFsLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJEaW9yXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgTUFURVJJQUxcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGxlYXRoZXIgbXVzdCBiZSBwZXJmZWN0Ljxici8+SXQgYWxsIGJlZ2lucyB3aXRoIHRoZSBzZWxlY3Rpb24gd2hpY2ggbXVzdCBtZWV0IHNwZWNpYWxseSBkZW1hbmRpbmcgY3JpdGVyaWEsIGFsd2F5cyBmb2xsb3dpbmcgdGhlIHNhbWUgcml0dWFsIDogdG91Y2hpbmcsIGV4YW1pbmluZywgc2VlaW5nLi4uPGJyLz5UaGUgY3JhZnRtYW7igJlzIGhhbmRzIGFuZCBleWVzIGFyZSB0cmFpbmVkIHRvIGRldGVjdCB0aGUgbWlub3IgZmxhdy48YnIvPjxici8+VGhlIGxlYXRoZXIgaXMgdGhlbiBjdXQsIGZvbGxvd2luZyB0aGUgcGF0dGVybnMuPGJyLz5BZnRlciB0aGUgY2FubmluZyBzdGl0Y2hpbmcsIHRoZSBwYXJ0cyBhcmUgcmVhZHkgdG8gY3JlYXRlIHRoZSB2b2x1bWUuXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIkRpb3JcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBWT0xVTUVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTGFkeSBEaW9yIGlzIGFzc2VtYmxlZCBhcm91bmQgYSB3b29kZW4gZm9ybS48YnIvPlRoZSB0YXNrIGlzIGlzIGFuIGVzcGVjaWFsbHkgZGlmZmljdWx0IG9uZSwgYXMgdGhlIGNhbm5pbmcgaGFzIHRvIGFsaWduIHBlcmZlY3RseS48YnIvPjxici8+VGhlIGZyb250LCBiYWNrIGFuZCBzaWRlcyBhcmUgcmVpbmZvcmNlZCB0byBndWFyYW50eSB0aGF0IHRoZSBiYWcgd2lsbCBtYWludGFpbiBpdHMgc2hhcGUsIHByZXZlbnRpbmcgaXQgZnJvbSBidWNrbGluZy5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIERFVEFJTFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJNZXRhbHdvcmsgc3RyZW5ndGhlbiBhbmQgYWNjZXNzb3JpemUgdGhlIGJhZzogY2hhcm1zLCB6aXBwZXIsIGdyb21tZXRzIG9yIGJhc2Ugc3R1ZHMuLi48YnIvPlRoaXMgaXMgdGhlIERpb3Igc2lnbmF0dXJlLCBtYWtpbmcgZWFjaCBkZXRhaWwgYW4gaW5kZXNwZW5zYWJsZSBwYXJ0IG9mIHRoZSBiZWF1dHkgb2YgdGhlIHdob2xlLjxici8+PGJyLz5MYWR5IERpb3IgY2FycmllcyB3aXRoaW4gaXQgdGhlIHZlcnkgc3Bpcml0IG9mIERpb3IuLi5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH1cblx0XHRcdF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWludGFlc3NlbmNlXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwicXVpbnRhZXNzZW5jZSBwYWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGl2aXR5LWlubm92YXRpb25cIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJDUkVBVElWSVRZICYgSU5OT1ZBVElPTiBwYWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFx0XCJ0aXRsZVwiOiBcInN0eWxlIHBhZ2VcIixcbiAgICAgICAgXHRcImltYWdlc1wiOiBbXG4gICAgICAgIFx0XHRcIl8xMjQwMDE4LmpwZ1wiLFxuXHRcdFx0XHRcIjAuanBnXCIsXG5cdFx0XHRcdFwiMS5qcGdcIixcblx0XHRcdFx0XCIzLmpwZ1wiLFxuXHRcdFx0XHRcIjMubXViaS5qcGdcIixcblx0XHRcdFx0XCI0LmpwZ1wiLFxuXHRcdFx0XHRcIjAwNC1NdWJpLUhELTMtMDQyLmpwZ1wiLFxuXHRcdFx0XHRcIjUuLWJhbGxyb29tLmpwZ1wiLFxuXHRcdFx0XHRcIjguY2FtcGVyZ2VtLmpwZ1wiLFxuXHRcdFx0XHRcIjExLUtFTlpPLVNTLUZJTkFMLUEtUy0yLmpwZ1wiLFxuXHRcdFx0XHRcIjE3LmRpb3IuanBnXCIsXG5cdFx0XHRcdFwiMTguaGVybWVzLmpwZ1wiLFxuXHRcdFx0XHRcIjIxLmRpb3IuanBnXCIsXG5cdFx0XHRcdFwiY2F0Y2hlcl9yb3NlLnBuZ1wiLFxuXHRcdFx0XHRcIkltYWdlc190ZXN0X2NsaWVudF8wMi5qcGdcIixcblx0XHRcdFx0XCJsYXJnZS0xLmpwZ1wiLFxuXHRcdFx0XHRcImxhcmdlLmpwZ1wiLFxuXHRcdFx0XHRcInB1c2hfaGFyZGVyXzAwMDYucG5nXCIsXG5cdFx0XHRcdFwiU2NyYXRjaGVyLnBuZ1wiLFxuXHRcdFx0XHRcIlNjcmVlbi1TaG90LTIwMTUtMTItMDQtYXQtMTcuMTQuNDEuanBnXCIsXG5cdFx0XHRcdFwiU2NyZWVuLVNob3QtMjAxNS0xMi0wNC1hdC0xNy4xNy4wNi5qcGdcIixcblx0XHRcdFx0XCIxNi5jYW1wZXIuanBnXCIsXG5cdFx0XHRcdFwidGh1bWJuYWlsLTIzLmpwZ1wiLFxuXHRcdFx0XHRcInRodW1ibmFpbC0zMi5qcGdcIixcblx0XHRcdFx0XCJWaXN1YWwtMi0tLUNvbnZveS5qcGdcIixcblx0XHRcdFx0XCJWaXN1YWwtMy0tLUNvbnZveS5qcGdcIixcblx0XHRcdFx0XCIxMS5jYW1wZXIuanBnXCJcblx0XHRcdF1cbiAgICAgICAgfVxuXHR9XG59Il19
