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
			setTimeout(function () {
				_AppActions2['default'].introFinished();
			}, 5000);
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

var CreativityInnovation = (function (_Page) {
	_inherits(CreativityInnovation, _Page);

	function CreativityInnovation(props) {
		_classCallCheck(this, CreativityInnovation);

		_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'constructor', this).call(this, props);
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
			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'animate', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'resize', this).call(this);
		}
	}]);

	return CreativityInnovation;
})(_Page3['default']);

exports['default'] = CreativityInnovation;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9DcmVhdGl2aXR5SW5ub3ZhdGlvbi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSW5zcGlyYXRpb25TcGFyay5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRhZXNzZW5jZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9IZWxwZXJzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvbWl4aW5zL1BvbHlmaWxscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1ByZWxvYWRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N2Zy9TVkdDb21wb25lbnQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL1V0aWxzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQ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Ozs7QUNKOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBQb2x5ZmlsbHMgZnJvbSAnUG9seWZpbGxzJ1xuXG4vLyBTdGFydCBBcHBcbnZhciBhcHAgPSBuZXcgQXBwKClcbmFwcC5pbml0KClcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnQXBwVGVtcGxhdGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBHRXZlbnRzIGZyb20gJ0dsb2JhbEV2ZW50cydcbmltcG9ydCBQcmVsb2FkIGZyb20gJ1ByZWxvYWRlcidcbmltcG9ydCBEYXRhIGZyb20gJ0RhdGEnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblxuXHRcdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIGhpc3RvcnkpIHtcblx0XHRcdC8vIEJhY2sgb2ZmLCBicm93c2VyLCBJIGdvdCB0aGlzLi4uXG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbk1haW5EYXRhTG9hZGVkKClcblx0fVxuXG5cdG9uTWFpbkRhdGFMb2FkZWQoKSB7XG5cblx0XHRBcHBTdG9yZS5EYXRhID0gRGF0YVxuXHRcdFxuXHRcdC8vIEluaXQgcm91dGVyXG5cdFx0dmFyIHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXHRcdHJvdXRlci5pbml0KClcblxuXHRcdC8vIFJlbmRlciByZWFjdFxuXHRcdFJlYWN0LnJlbmRlcihcblx0XHRcdDxBcHBUZW1wbGF0ZSAvPixcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJylcblx0XHQpXG5cblx0XHQvLyBTdGFydCByb3V0aW5nXG5cdFx0cm91dGVyLmJlZ2luUm91dGluZygpXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiAgICBcdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgRnJvbnRDb250YWluZXIgZnJvbSAnRnJvbnRDb250YWluZXInXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnUGFnZXNDb250YWluZXInXG5pbXBvcnQgUFhDb250YWluZXIgZnJvbSAnUFhDb250YWluZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2FwcC10ZW1wbGF0ZSc+XG5cdFx0XHRcdDxGcm9udENvbnRhaW5lciByZWY9J2Zyb250LWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBhZ2VzQ29udGFpbmVyIHJlZj0ncGFnZXMtY29udGFpbmVyJyAvPlxuXHRcdFx0XHQ8UFhDb250YWluZXIgcmVmPSdweC1jb250YWluZXInIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0R2xvYmFsRXZlbnRzLnJlc2l6ZSgpXG5cdFx0dGhpcy5hbmltYXRlKClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS51cGRhdGUoKVxuXHRcdHRoaXMucmVmc1sncGFnZXMtY29udGFpbmVyJ10udXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dGhpcy5yZWZzWydmcm9udC1jb250YWluZXInXS5yZXNpemUoKVxuXHRcdHRoaXMucmVmc1sncGFnZXMtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3B4LWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgd2luZG93UmVzaXplOiBmdW5jdGlvbih3aW5kb3dXLCB3aW5kb3dIKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSxcbiAgICAgICAgICAgIGl0ZW06IHsgd2luZG93Vzp3aW5kb3dXLCB3aW5kb3dIOndpbmRvd0ggfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYWRkUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5BRERfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfSxcbiAgICByZW1vdmVQWENoaWxkOiBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCxcbiAgICAgICAgICAgIGl0ZW06IHsgY2hpbGQ6Y2hpbGQgfVxuICAgICAgICB9KSAgICBcbiAgICB9LFxuICAgIGludHJvRmluaXNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELFxuICAgICAgICAgICAgaXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cblxud2luZG93LkFwcEFjdGlvbnMgPSBBcHBBY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBNZW51IGZyb20gJ01lbnUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBTVkdDb21wb25lbnQgZnJvbSAnU1ZHQ29tcG9uZW50J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmludHJvRmluaXNoZWQgPSB0aGlzLmludHJvRmluaXNoZWQuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELCB0aGlzLmludHJvRmluaXNoZWQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdmcm9udC1jb250YWluZXInIHJlZj0nZnJvbnQtY29udGFpbmVyJz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJlZ2luLXNsaWRlXCIgcmVmPSdiZWdpbi1zbGlkZSc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0XHQ8U1ZHQ29tcG9uZW50IHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTg3LjA4NiA3My44NjNcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNDEuOTU2LDM5LjYzYy0yLjAyMy0wLjkwMy00LjI2NS0xLjM3My02LjY4Ny0xLjQ4M2wtNi42ODgsMC4zOThjLTEuODA3LDAuMzI1LTMuNTQyLDAuOTc3LTUuMjc3LDEuOTg5Yy0xLjk1MSwxLjE1Ni0zLjU3OCwyLjYwMy00Ljg3OSw0LjMzN2MtMy4zMjUsNC4xNTYtNC41MTksOS4wMzYtMy42MTQsMTQuNzgzYzEuMDEyLDYuMDczLDQuMTU2LDEwLjIyOSw5LjMyNSwxMi4zMjdjMy45NzcsMS42MjYsOC4zODYsMS45NSwxMy4xMjEsMC45MDJjNC41MTgtMC45MzksOC4wOTctMy4xMDgsMTAuODA4LTYuNTA1YzMuMTgxLTQuMDE0LDQuMTkyLTguOTY1LDMtMTQuODIxQzE0OS45MDksNDUuNzc1LDE0Ni44MzYsNDEuNzk5LDE0MS45NTYsMzkuNjN6IE0xNDEuODQ5LDY1LjkwOWMtMS41NTUsMi44OS0zLjkwMyw0LjYyNi03LjEyMSw1LjI0MWMtMy4wNzIsMC41NDEtNS44MTktMC42NTItOC4yNDEtMy41MDhjLTIuMjc3LTIuNzEtMy42ODgtNi4yNTQtNC4wODUtMTAuNjk4Yy0wLjU0Mi00LjQ4MywwLTguMjc4LDEuNDgxLTExLjM4OGMxLjYyNy0zLjQzNCw0LjEyMS01LjI0MSw3LjM3NS01LjU2NWMzLjM2MS0wLjI4OCw2LjE0NSwwLjc5NSw4LjM1LDMuMjU0YzIuMjQxLDIuNDkzLDMuNTA2LDYuMTA5LDMuOTQsMTAuOTg4QzE0My45MDgsNTkuMTEzLDE0My4zNjcsNjIuOTQ1LDE0MS44NDksNjUuOTA5eiBNNDAuNTY2LDAuMzc1SDQuMzEyYy0wLjcyMywwLTEuMDg1LDAuMjE2LTEuMDg1LDAuNzIybDAuMjksMC41NDNsMS40NDYsMC4yODhMOC40NjgsMi4xMWwzLjQzNCwwLjQzM2MyLjQ1OCwwLjU0MywzLjcyMywxLjkxNiwzLjcyMyw0LjE1N3Y1Ny4zMjhjLTAuMDM2LDEuNzczLTAuMjE3LDMuMDc0LTAuNTQyLDMuOTRsLTAuOTAzLDEuMjY3Yy0wLjQ3LDAuNTQxLTEuNDQ2LDAuOTM5LTIuODE5LDEuMTE5bC04Ljg1NiwwLjU0M2MtMS4wMTIsMC0xLjU1NCwwLjI1NC0xLjU1NCwwLjcyNGMwLDAuNDMzLDAuMzYxLDAuNjg2LDEuMTIxLDAuNjg2aDQ2LjIzMWM1LjYwMywwLDEwLjU5MS0xLjA0OCwxNS4wMzctMy4wNzFjNC4xNTctMS45ODksNy43NzEtNC43LDEwLjczNS04LjIwNWMyLjcxMS0zLjMyNyw0LjgwOC03LjA0OSw2LjMyNi0xMS4yNzljMS4zMzctNC4wMTIsMS45ODgtOC4xNjgsMS45ODgtMTIuNDY5YzAtOC4yNDItMS45ODgtMTUuMzYyLTUuOTY0LTIxLjM2M0M2OS40ODMsNS41NDMsNTcuNTU1LDAuMzc1LDQwLjU2NiwwLjM3NXogTTY4LjgzMyw0Ni4yOGMtMS4xOTMsNS41MzEtMy4xNDUsMTAuMDQ5LTUuODU2LDEzLjU5MWMtMS42MjYsMi4xNjktMy4xMDgsMy44NjgtNC41NTQsNS4wNjJjLTEuNjI2LDEuMjY1LTMuNTA2LDIuMzEyLTUuNDk0LDMuMDM1Yy0xLjk4OCwwLjY1MS00LjUxOSwxLjEyMS03LjQ4MywxLjQ0NmwtMTEuMDYsMC4zOThoLTQuNzcxbC0xLjQ0Ni0wLjIxN2MtMC4yODktMC4xODItMC40MzMtMC42ODgtMC40MzMtMS40MTFWNC41MzJsMC4yNTItMS40NDVjMC4yNTMtMC40MzUsMC43OTUtMC42MTUsMS42MjctMC41NDNoNy4zMzdjMTEuODkzLDAsMjAuNDk1LDMuNTQzLDI1LjczNiwxMC43YzIuNzExLDMuNjg3LDQuNjI3LDguMDI0LDUuODkyLDEyLjk3NmMwLjkwNCwzLjQzNSwxLjMzNyw2LjYxNSwxLjMzNyw5LjU3OUM2OS45MTcsMzkuMTYsNjkuNTU2LDQyLjY2Nyw2OC44MzMsNDYuMjh6IE05MC4zNTcsNDQuODM1bDAuOTQzLTAuMTA4bDIuMTEyLTAuNTc5bDEuODgsMC4xODJjMC41NDIsMC4zNjIsMC44MzEsMC45NzcsMC44MzEsMS43NzF2MjEuMDAxbC0wLjQ3LDIuNjAzYy0wLjMyNiwwLjcyMy0xLjE1NywxLjE5Mi0yLjUzLDEuMzcybC0yLjUzLDAuMDc0Yy0wLjc5NSwwLTEuMTU3LDAuMTgtMS4wODQsMC42MTRjMCwwLjI4OCwwLjIxNywwLjQ3LDAuNjUsMC40N2gxOS4yNjZjMC40MzUsMCwwLjY4Ny0wLjExLDAuNjg3LTAuNDM1Yy0wLjA3Mi0wLjM5Ni0wLjUwNi0wLjU3OC0xLjMzNy0wLjU3OGMtMi4zNSwwLTMuODY3LTAuMzI1LTQuNTE5LTAuOTc3Yy0wLjU0Mi0wLjU0MS0wLjgzMS0xLjQ0Ni0wLjgzMS0yLjcxdi0yNi40NmMwLTEuMzAxLTAuMTgxLTIuMDIzLTAuNTQyLTIuMDk1bC0xLjA4NSwwLjEwN2MtMC40MzQsMC4xOC0xLjQxLDAuNjE1LTIuNzgyLDEuNDFjLTIuMjQyLDEuMjY0LTQuODgsMi4yNzctNy44OCwzLjA3MWMtMS4yNjYsMC4zNjEtMS44MDgsMC43Ni0xLjYyNywxLjE5M0w5MC4zNTcsNDQuODM1eiBNMTg2LjEyNyw0Mi45NTVjMC4wNzMsMS4yNjYtMC4yODksMi4yNC0xLjA4NCwzYy0wLjcyMywwLjYxNS0xLjQ0NSwwLjc5NS0yLjA5NiwwLjYxNWMtMC42MTUtMC4xMDgtMS4wODUtMC4zNjEtMS40MS0wLjcyNGwtMS4wMTMtMS4yNjRjLTAuNzk1LTEuMTU4LTEuNTU0LTEuNTItMi40NTgtMS4xOTNjLTEuMDQ4LDAuMjg4LTIuMTMyLDEuMDgzLTMuMjUzLDIuMzQ5Yy0xLjc3MSwxLjg0My0yLjk2NCw0LjAxMi0zLjYxNCw2LjYxNHYxNS4zNjRjMCwxLjM3MiwwLjQ3LDIuMzQ5LDEuNDQ1LDIuOTYzbDIuMjA1LDAuMzk2bDIuMzE0LDAuMjU0YzAuNTQyLDAuMDczLDAuNzU5LDAuMTgyLDAuNzU5LDAuNDdsLTAuMTA4LDAuMjUzbC0wLjYxNSwwLjE4MkgxNTcuODZjLTAuNTc4LDAtMC45MDItMC4xODItMC45MDItMC40N2wwLjU0MS0wLjQzNWwzLjI1NC0wLjI1NGMxLjI2Ni0wLjIxNiwyLjA2LTAuNjQ5LDIuNDk0LTEuMzAxbDAuNTQyLTEuNjI2VjQ2LjQ2MmwtMC4zNjEtMS41OTFsLTAuNjE1LTAuMzYyYy0wLjE4MS0wLjE4LTAuNDctMC4yODgtMC45MDItMC4zNjFjLTAuNTQyLTAuMDM2LTEuMTk0LDAuMDczLTEuODgsMC4zNjFsLTEuODQ0LDAuNTA3bC0xLjA0OC0wLjI1M2MtMC4xODEtMC4yNTQtMC4xMDktMC40MzQsMC4xNDQtMC41NDJsMS41NTUtMC42NTFjMy41NDItMS4wNDgsNi4zOTgtMi4xMzIsOC4zODYtMy4yNTRsMi40NTgtMS4zMzVsMS4wODUsMC4wNzFsMC40MzQsMC45MDJ2Ny45NTRjMi43MTEtNC40MSw0Ljg4LTcuMTIyLDYuMzYxLTguMDI1YzAuOTA0LTAuNTQxLDEuNzcxLTAuOTc3LDIuNDIyLTEuMTU2bDEuMjY2LTAuMTA4YzAuNzk1LTAuMDczLDEuNjk5LDAuMTgsMi43MTEsMC44MzJDMTg1LjMzMyw0MC4yNDQsMTg2LjA1NSw0MS40MzgsMTg2LjEyNyw0Mi45NTV6IE05NS45NDIsMjQuMDUxYy0wLjk3Ni0wLjkwNS0xLjQ0Ni0xLjk4OS0xLjM3NC0zLjI1NGMtMC4wNzItMS4zMzgsMC4zOTgtMi40OTQsMS4zNzQtMy4zOThjMC45MDMtMC45MDQsMS45ODgtMS4zNzQsMy4zMjUtMS4zNzRjMS4yNjYsMCwyLjM4NiwwLjQ3LDMuMjg5LDEuMzc0YzAuOTA0LDAuOTA0LDEuNDEsMi4wNiwxLjQxLDMuMzk4YzAsMS4yNjUtMC41MDYsMi4zNDktMS40MSwzLjI1NGMtMC45MDMsMC45MDMtMi4wMjMsMS4zNzMtMy4yODksMS4zNzNDOTcuOTMxLDI1LjQyNCw5Ni44NDYsMjQuOTU0LDk1Ljk0MiwyNC4wNTF6XCIvPlxuXHRcdFx0XHRcdFx0PC9TVkdDb21wb25lbnQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxhIGhyZWY9JyMvJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiByZWY9J2xvZ28nPlxuXHRcdFx0XHRcdFx0PFNWR0NvbXBvbmVudCB3aWR0aD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE4Ny4wODYgNzMuODYzXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQxLjk1NiwzOS42M2MtMi4wMjMtMC45MDMtNC4yNjUtMS4zNzMtNi42ODctMS40ODNsLTYuNjg4LDAuMzk4Yy0xLjgwNywwLjMyNS0zLjU0MiwwLjk3Ny01LjI3NywxLjk4OWMtMS45NTEsMS4xNTYtMy41NzgsMi42MDMtNC44NzksNC4zMzdjLTMuMzI1LDQuMTU2LTQuNTE5LDkuMDM2LTMuNjE0LDE0Ljc4M2MxLjAxMiw2LjA3Myw0LjE1NiwxMC4yMjksOS4zMjUsMTIuMzI3YzMuOTc3LDEuNjI2LDguMzg2LDEuOTUsMTMuMTIxLDAuOTAyYzQuNTE4LTAuOTM5LDguMDk3LTMuMTA4LDEwLjgwOC02LjUwNWMzLjE4MS00LjAxNCw0LjE5Mi04Ljk2NSwzLTE0LjgyMUMxNDkuOTA5LDQ1Ljc3NSwxNDYuODM2LDQxLjc5OSwxNDEuOTU2LDM5LjYzeiBNMTQxLjg0OSw2NS45MDljLTEuNTU1LDIuODktMy45MDMsNC42MjYtNy4xMjEsNS4yNDFjLTMuMDcyLDAuNTQxLTUuODE5LTAuNjUyLTguMjQxLTMuNTA4Yy0yLjI3Ny0yLjcxLTMuNjg4LTYuMjU0LTQuMDg1LTEwLjY5OGMtMC41NDItNC40ODMsMC04LjI3OCwxLjQ4MS0xMS4zODhjMS42MjctMy40MzQsNC4xMjEtNS4yNDEsNy4zNzUtNS41NjVjMy4zNjEtMC4yODgsNi4xNDUsMC43OTUsOC4zNSwzLjI1NGMyLjI0MSwyLjQ5MywzLjUwNiw2LjEwOSwzLjk0LDEwLjk4OEMxNDMuOTA4LDU5LjExMywxNDMuMzY3LDYyLjk0NSwxNDEuODQ5LDY1LjkwOXogTTQwLjU2NiwwLjM3NUg0LjMxMmMtMC43MjMsMC0xLjA4NSwwLjIxNi0xLjA4NSwwLjcyMmwwLjI5LDAuNTQzbDEuNDQ2LDAuMjg4TDguNDY4LDIuMTFsMy40MzQsMC40MzNjMi40NTgsMC41NDMsMy43MjMsMS45MTYsMy43MjMsNC4xNTd2NTcuMzI4Yy0wLjAzNiwxLjc3My0wLjIxNywzLjA3NC0wLjU0MiwzLjk0bC0wLjkwMywxLjI2N2MtMC40NywwLjU0MS0xLjQ0NiwwLjkzOS0yLjgxOSwxLjExOWwtOC44NTYsMC41NDNjLTEuMDEyLDAtMS41NTQsMC4yNTQtMS41NTQsMC43MjRjMCwwLjQzMywwLjM2MSwwLjY4NiwxLjEyMSwwLjY4Nmg0Ni4yMzFjNS42MDMsMCwxMC41OTEtMS4wNDgsMTUuMDM3LTMuMDcxYzQuMTU3LTEuOTg5LDcuNzcxLTQuNywxMC43MzUtOC4yMDVjMi43MTEtMy4zMjcsNC44MDgtNy4wNDksNi4zMjYtMTEuMjc5YzEuMzM3LTQuMDEyLDEuOTg4LTguMTY4LDEuOTg4LTEyLjQ2OWMwLTguMjQyLTEuOTg4LTE1LjM2Mi01Ljk2NC0yMS4zNjNDNjkuNDgzLDUuNTQzLDU3LjU1NSwwLjM3NSw0MC41NjYsMC4zNzV6IE02OC44MzMsNDYuMjhjLTEuMTkzLDUuNTMxLTMuMTQ1LDEwLjA0OS01Ljg1NiwxMy41OTFjLTEuNjI2LDIuMTY5LTMuMTA4LDMuODY4LTQuNTU0LDUuMDYyYy0xLjYyNiwxLjI2NS0zLjUwNiwyLjMxMi01LjQ5NCwzLjAzNWMtMS45ODgsMC42NTEtNC41MTksMS4xMjEtNy40ODMsMS40NDZsLTExLjA2LDAuMzk4aC00Ljc3MWwtMS40NDYtMC4yMTdjLTAuMjg5LTAuMTgyLTAuNDMzLTAuNjg4LTAuNDMzLTEuNDExVjQuNTMybDAuMjUyLTEuNDQ1YzAuMjUzLTAuNDM1LDAuNzk1LTAuNjE1LDEuNjI3LTAuNTQzaDcuMzM3YzExLjg5MywwLDIwLjQ5NSwzLjU0MywyNS43MzYsMTAuN2MyLjcxMSwzLjY4Nyw0LjYyNyw4LjAyNCw1Ljg5MiwxMi45NzZjMC45MDQsMy40MzUsMS4zMzcsNi42MTUsMS4zMzcsOS41NzlDNjkuOTE3LDM5LjE2LDY5LjU1Niw0Mi42NjcsNjguODMzLDQ2LjI4eiBNOTAuMzU3LDQ0LjgzNWwwLjk0My0wLjEwOGwyLjExMi0wLjU3OWwxLjg4LDAuMTgyYzAuNTQyLDAuMzYyLDAuODMxLDAuOTc3LDAuODMxLDEuNzcxdjIxLjAwMWwtMC40NywyLjYwM2MtMC4zMjYsMC43MjMtMS4xNTcsMS4xOTItMi41MywxLjM3MmwtMi41MywwLjA3NGMtMC43OTUsMC0xLjE1NywwLjE4LTEuMDg0LDAuNjE0YzAsMC4yODgsMC4yMTcsMC40NywwLjY1LDAuNDdoMTkuMjY2YzAuNDM1LDAsMC42ODctMC4xMSwwLjY4Ny0wLjQzNWMtMC4wNzItMC4zOTYtMC41MDYtMC41NzgtMS4zMzctMC41NzhjLTIuMzUsMC0zLjg2Ny0wLjMyNS00LjUxOS0wLjk3N2MtMC41NDItMC41NDEtMC44MzEtMS40NDYtMC44MzEtMi43MXYtMjYuNDZjMC0xLjMwMS0wLjE4MS0yLjAyMy0wLjU0Mi0yLjA5NWwtMS4wODUsMC4xMDdjLTAuNDM0LDAuMTgtMS40MSwwLjYxNS0yLjc4MiwxLjQxYy0yLjI0MiwxLjI2NC00Ljg4LDIuMjc3LTcuODgsMy4wNzFjLTEuMjY2LDAuMzYxLTEuODA4LDAuNzYtMS42MjcsMS4xOTNMOTAuMzU3LDQ0LjgzNXogTTE4Ni4xMjcsNDIuOTU1YzAuMDczLDEuMjY2LTAuMjg5LDIuMjQtMS4wODQsM2MtMC43MjMsMC42MTUtMS40NDUsMC43OTUtMi4wOTYsMC42MTVjLTAuNjE1LTAuMTA4LTEuMDg1LTAuMzYxLTEuNDEtMC43MjRsLTEuMDEzLTEuMjY0Yy0wLjc5NS0xLjE1OC0xLjU1NC0xLjUyLTIuNDU4LTEuMTkzYy0xLjA0OCwwLjI4OC0yLjEzMiwxLjA4My0zLjI1MywyLjM0OWMtMS43NzEsMS44NDMtMi45NjQsNC4wMTItMy42MTQsNi42MTR2MTUuMzY0YzAsMS4zNzIsMC40NywyLjM0OSwxLjQ0NSwyLjk2M2wyLjIwNSwwLjM5NmwyLjMxNCwwLjI1NGMwLjU0MiwwLjA3MywwLjc1OSwwLjE4MiwwLjc1OSwwLjQ3bC0wLjEwOCwwLjI1M2wtMC42MTUsMC4xODJIMTU3Ljg2Yy0wLjU3OCwwLTAuOTAyLTAuMTgyLTAuOTAyLTAuNDdsMC41NDEtMC40MzVsMy4yNTQtMC4yNTRjMS4yNjYtMC4yMTYsMi4wNi0wLjY0OSwyLjQ5NC0xLjMwMWwwLjU0Mi0xLjYyNlY0Ni40NjJsLTAuMzYxLTEuNTkxbC0wLjYxNS0wLjM2MmMtMC4xODEtMC4xOC0wLjQ3LTAuMjg4LTAuOTAyLTAuMzYxYy0wLjU0Mi0wLjAzNi0xLjE5NCwwLjA3My0xLjg4LDAuMzYxbC0xLjg0NCwwLjUwN2wtMS4wNDgtMC4yNTNjLTAuMTgxLTAuMjU0LTAuMTA5LTAuNDM0LDAuMTQ0LTAuNTQybDEuNTU1LTAuNjUxYzMuNTQyLTEuMDQ4LDYuMzk4LTIuMTMyLDguMzg2LTMuMjU0bDIuNDU4LTEuMzM1bDEuMDg1LDAuMDcxbDAuNDM0LDAuOTAydjcuOTU0YzIuNzExLTQuNDEsNC44OC03LjEyMiw2LjM2MS04LjAyNWMwLjkwNC0wLjU0MSwxLjc3MS0wLjk3NywyLjQyMi0xLjE1NmwxLjI2Ni0wLjEwOGMwLjc5NS0wLjA3MywxLjY5OSwwLjE4LDIuNzExLDAuODMyQzE4NS4zMzMsNDAuMjQ0LDE4Ni4wNTUsNDEuNDM4LDE4Ni4xMjcsNDIuOTU1eiBNOTUuOTQyLDI0LjA1MWMtMC45NzYtMC45MDUtMS40NDYtMS45ODktMS4zNzQtMy4yNTRjLTAuMDcyLTEuMzM4LDAuMzk4LTIuNDk0LDEuMzc0LTMuMzk4YzAuOTAzLTAuOTA0LDEuOTg4LTEuMzc0LDMuMzI1LTEuMzc0YzEuMjY2LDAsMi4zODYsMC40NywzLjI4OSwxLjM3NGMwLjkwNCwwLjkwNCwxLjQxLDIuMDYsMS40MSwzLjM5OGMwLDEuMjY1LTAuNTA2LDIuMzQ5LTEuNDEsMy4yNTRjLTAuOTAzLDAuOTAzLTIuMDIzLDEuMzczLTMuMjg5LDEuMzczQzk3LjkzMSwyNS40MjQsOTYuODQ2LDI0Ljk1NCw5NS45NDIsMjQuMDUxelwiLz5cblx0XHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0PE1lbnUgcmVmPSdtZW51JyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuYmVnaW5TbGlkZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1snYmVnaW4tc2xpZGUnXSlcblx0XHR0aGlzLmxvZ28gPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2xvZ28nXSlcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgZG9tKHRoaXMuYmVnaW5TbGlkZSkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24taW4nKSB9LCAxMDAwKVxuXHRcdHNldFRpbWVvdXQoKCk9PnsgZG9tKHRoaXMuYmVnaW5TbGlkZSkucmVtb3ZlQ2xhc3MoJ3RyYW5zaXRpb24taW4nKTsgZG9tKHRoaXMuYmVnaW5TbGlkZSkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24tb3V0Jyk7IH0sIDQwMDApXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmludHJvRmluaXNoZWQoKSB9LCA1MDAwKVxuXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBpdGVtID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dGhpcy5yZWZzWydtZW51J10uaGlnaGxpZ2h0QnlJdGVtKGl0ZW0pXG5cdH1cblx0aW50cm9GaW5pc2hlZCgpIHtcblx0XHRkb20odGhpcy5iZWdpblNsaWRlKS5yZW1vdmUoKVxuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuSU5UUk9fRklOSVNIRUQsIHRoaXMuaW50cm9GaW5pc2hlZClcblx0XHRcblx0XHR0aGlzLnJlZnNbJ21lbnUnXS50cmFuc2l0aW9uSW4oKVxuXHRcdGRvbSh0aGlzLmxvZ28pLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJylcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRcblx0XHR0aGlzLnJlZnNbJ21lbnUnXS5yZXNpemUoKVxuXG5cdFx0dGhpcy5iZWdpblNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93VyArICdweCdcblx0XHR0aGlzLmJlZ2luU2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIG1lbnVEYXRhID0gQXBwU3RvcmUubWVudUNvbnRlbnQoKVxuXHRcdHZhciBtZW51SXRlbXMgPSBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0dmFyIHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkgaWQ9e2l0ZW0uaWR9IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdDxhIGhyZWY9e3BhdGhVcmx9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRpbi1udW1cIj57aXRlbVsnbGF0aW4tbnVtJ119PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0ubmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdClcblx0XHR9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHJlZj0nbWVudScgaWQ9J21lbnUnPiBcblx0XHRcdFx0e21lbnVJdGVtc31cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnBhcmVudCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1snbWVudSddKVxuXHRcdFxuXHRcdHRoaXMuaXRlbXMgPSBbXVxuXHRcdHZhciBidG5zID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJ2xpJylcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSBidG5zW2ldXG5cdFx0XHR0aGlzLml0ZW1zW2ldID0ge1xuXHRcdFx0XHRlbDogYnRuLFxuXHRcdFx0XHRpZDogYnRuLmlkXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHRoaWdobGlnaHRCeUl0ZW0oaXRlbSkge1xuXG5cdFx0aWYoaXRlbS5pZCA9PSAnaG9tZScpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYnRuID0gdGhpcy5pdGVtc1tpXVxuXHRcdFx0XHRkb20oYnRuLmVsKS5yZW1vdmVDbGFzcygnZW5hYmxlJylcblx0XHRcdFx0ZG9tKGJ0bi5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0fTtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdGlmKGJ0bi5pZCA9PSBpdGVtLmlkKSB7XG5cdFx0XHRcdGRvbShidG4uZWwpLmFkZENsYXNzKCdlbmFibGUnKVxuXHRcdFx0XHRkb20oYnRuLmVsKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb20oYnRuLmVsKS5yZW1vdmVDbGFzcygnZW5hYmxlJylcblx0XHRcdFx0ZG9tKGJ0bi5lbCkuYWRkQ2xhc3MoJ2Rpc2FibGUnKVx0XG5cdFx0XHR9IFxuXHRcdH07XG5cdH1cblx0cmVtb3ZlSGlnaGxpZ2h0KCkge1xuXG5cdH1cblx0dHJhbnNpdGlvbkluKCkge1xuXHRcdGRvbSh0aGlzLnBhcmVudCkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24taW4nKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcGFyZW50Q3NzID0ge1xuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAocGFyZW50U2l6ZVswXSA+PiAxKSArICdweCcsXG5cdFx0XHR0b3A6IHdpbmRvd0ggLSAocGFyZW50U2l6ZVsxXSkgLSBBcHBDb25zdGFudHMuT1ZFUkFMTF9NQVJHSU4gKyAncHgnXG5cdFx0fVxuXHRcdGRvbSh0aGlzLnBhcmVudCkuc3R5bGUocGFyZW50Q3NzKVxuXHR9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQWENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLkFERF9QWF9DSElMRCwgdGhpcy5hZGQpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCwgdGhpcy5yZW1vdmUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1ob2xkZXJcIj48L2NhbnZhcz5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgY2FudmFzID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5jYW52YXMtaG9sZGVyJylbMF1cblx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcigwLCAwLCB7IHZpZXc6Y2FudmFzIH0pXG5cdFx0cmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkZcblxuXHRcdHRoaXMucGl4aSA9IHtcblx0XHRcdGNhbnZhczogY2FudmFzLFxuXHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyLFxuXHRcdFx0c3RhZ2U6IHN0YWdlXG5cdFx0fVxuXHR9XG5cdGFkZChpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLmFkZENoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVtb3ZlKGl0ZW0pIHtcblx0XHR0aGlzLnBpeGkuc3RhZ2UucmVtb3ZlQ2hpbGQoaXRlbS5jaGlsZClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHNjYWxlID0gMVxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3dIICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZXNpemUod2luZG93VyAqIHNjYWxlLCB3aW5kb3dIICogc2NhbGUpXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZW5kZXIodGhpcy5waXhpLnN0YWdlKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQmFzZVBhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IHNjcm9sbHRvcCBmcm9tICdzaW1wbGUtc2Nyb2xsdG9wJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmFkZFBYQ2hpbGQodGhpcy5jb250YWluZXIpIH0sIDApXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXHRcdHRoaXMuZWxlbWVudHNIb2xkZXIgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLmVsZW1lbnRzLWhvbGRlcicpWzBdXG5cdFx0dGhpcy5pbnRyb1NsaWRlID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5pbnRyby1zbGlkZScpWzBdXG5cdFx0dGhpcy5mcm9udEhvbGRlciA9IGRvbSh0aGlzLmludHJvU2xpZGUpLnNlbGVjdCgnLmZyb250LWhvbGRlcicpWzBdXG5cdFx0XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0c2Nyb2xsdG9wKDApXG5cdFx0fSwgMTAwMClcblx0XHRzdXBlci53aWxsVHJhbnNpdGlvbkluKClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5pbnRyb1NsaWRlLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCB7IG9wYWNpdHk6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxJbi50byh0aGlzLmludHJvU2xpZGUsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDMpXG5cdFx0dGhpcy50bEluLmZyb21Ubyh0aGlzLmVsZW1lbnRzSG9sZGVyLCAxLCB7IG9wYWNpdHk6MCB9LCB7IG9wYWNpdHk6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAyKVxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5jb250YWluZXIsIDEsIHsgYWxwaGE6MCB9LCB7IGFscGhhOjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMilcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byh0aGlzLmVsZW1lbnRzSG9sZGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxPdXQudG8odGhpcy5jb250YWluZXIsIDEsIHsgYWxwaGE6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXG5cdFx0c3VwZXIuc2V0dXBBbmltYXRpb25zKClcblx0fVxuXHRnZXRCYXNlUGFnZURvbShodG1sKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcblx0XHR2YXIgaWQgPSBjb250ZW50LmlkICsgJy1wYWdlJ1xuXG5cdFx0dmFyIGZyb250SG9sZGVyO1xuXHRcdGlmKGNvbnRlbnQuaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmcm9udEhvbGRlciA9IChcblx0XHRcdFx0PGRpdj48L2Rpdj5cblx0XHRcdClcblx0XHR9ZWxzZXtcblx0XHRcdGZyb250SG9sZGVyID0gPGRpdiBjbGFzc05hbWU9J3RpdGxlJz57Y29udGVudC5uYW1lfTwvZGl2PlxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPXtpZH0gcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzLWhvbGRlclwiPntodG1sfTwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyb250LWhvbGRlclwiPntmcm9udEhvbGRlcn08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgdGl0bGVTaXplID0gc2l6ZSh0aGlzLmZyb250SG9sZGVyKVxuXHRcdHRoaXMuZnJvbnRIb2xkZXIuc3R5bGUubGVmdCA9ICh3aW5kb3dXID4+IDEpIC0gKHRpdGxlU2l6ZVswXSA+PiAxKSArICdweCdcblx0XHR0aGlzLmZyb250SG9sZGVyLnN0eWxlLnRvcCA9ICh3aW5kb3dIID4+IDEpIC0gKHRpdGxlU2l6ZVsxXSA+PiAxKSArICdweCdcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XG5cdFx0SGVscGVycy5yZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXIodGhpcy5jb250YWluZXIpXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMucmVtb3ZlUFhDaGlsZCh0aGlzLmNvbnRhaW5lcikgfSwgMClcblxuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEluc3BpcmF0aW9uU3BhcmsgZnJvbSAnSW5zcGlyYXRpb25TcGFyaydcbmltcG9ydCBBcmNoaXRlY3R1cmUgZnJvbSAnQXJjaGl0ZWN0dXJlJ1xuaW1wb3J0IFF1aW50YWVzc2VuY2UgZnJvbSAnUXVpbnRhZXNzZW5jZSdcbmltcG9ydCBDcmVhdGl2aXR5SW5ub3ZhdGlvbiBmcm9tICdDcmVhdGl2aXR5SW5ub3ZhdGlvbidcbmltcG9ydCBTdHlsZSBmcm9tICdTdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNDb250YWluZXIgZXh0ZW5kcyBCYXNlUGFnZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dmFyIGhhc2ggPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdFx0dmFyIHR5cGUgPSB1bmRlZmluZWRcblxuXHRcdHN3aXRjaChoYXNoLnBhcmVudCkge1xuXHRcdFx0Y2FzZSAnaW5zcGlyYXRpb24tc3BhcmsnOlxuXHRcdFx0XHR0eXBlID0gSW5zcGlyYXRpb25TcGFya1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnYXJjaGl0ZWN0dXJlJzpcblx0XHRcdFx0dHlwZSA9IEFyY2hpdGVjdHVyZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncXVpbnRhZXNzZW5jZSc6XG5cdFx0XHRcdHR5cGUgPSBRdWludGFlc3NlbmNlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjcmVhdGl2aXR5LWlubm92YXRpb24nOlxuXHRcdFx0XHR0eXBlID0gQ3JlYXRpdml0eUlubm92YXRpb25cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3N0eWxlJzpcblx0XHRcdFx0dHlwZSA9IFN0eWxlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gSG9tZVxuXHRcdH1cblx0XHR0aGlzLnNldHVwTmV3Q29tcG9uZW50KGhhc2gucGFyZW50LCB0eXBlKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBzY3JvbGx0b3AgZnJvbSAnc2ltcGxlLXNjcm9sbHRvcCdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5wYWdlSGVpZ2h0ID0gMFxuXHRcdHRoaXMuY3VycmVudFNjcm9sbFBvcyA9IDBcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHR2YXIgdmlkZW9zID0gY29udGVudC52aWRlb3MubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdFxuXHRcdFx0dmFyIHNpZGUgPSBVdGlscy5Jc0V2ZW4oaW5kZXgpID8gJ2xlZnQnIDogJ3JpZ2h0J1xuXHRcdFx0dmFyIGNsYXNzZXMgPSAndmlkZW8taXRlbSBjbGVhci1mbG9hdCAnICsgc2lkZVxuXHRcdFx0dmFyIHNjcmVlbnNob3RQYXRoID0gJ2ltYWdlL3ZpZGVvLXNjcmVlbnMvJyArIGl0ZW0uaW1nbmFtZVxuXHRcdFx0dmFyIHZpZGVvUGF0aCA9ICd2aWRlby9hcmNoaXRlY3R1cmUvJyArIGl0ZW0uZmlsZW5hbWVcblx0XHRcdHZhciBzcmNfbXA0ID0gdmlkZW9QYXRoICsgJy5tcDQnXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuXHRcdFx0XHRcdFx0PHZpZGVvIHdpZHRoPScxMDAlJz5cblx0XHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPSd2aWRlby9tcDQnIHNyYz17c3JjX21wNH0gYXV0b1BsYXk+PC9zb3VyY2U+XG5cdFx0XHRcdFx0XHQ8L3ZpZGVvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOml0ZW0uZGVzY3JpcHRpb24gfSB9PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5zaWRlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IHJlZj0ndmlkZW9zLWNvbnRhaW5lcicgY2xhc3NOYW1lPVwidmlkZW9zLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHt2aWRlb3N9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sndmlkZW9zLWNvbnRhaW5lciddKVxuXG5cdCAgICB2YXIgdG90YWxGcmFtZXMgPSAxNTlcblx0ICAgIHZhciBiYWdJbWFnZXMgPSBIZWxwZXJzLmdldEZyYW1lSW1hZ2VzQXJyYXkodG90YWxGcmFtZXMsICdpbWFnZS9iYWctc2VxdWVuY2UvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXNcblx0ICAgIH1cblxuXHQgICAgdGhpcy52aWRlb0l0ZW1zID0gW11cblx0ICAgIHZhciBpdGVtcyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcudmlkZW8taXRlbScpXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBcdHZhciBpdGVtID0gaXRlbXNbaV1cblx0ICAgIFx0dmFyIHZpZGVvID0gZG9tKGl0ZW0pLnNlbGVjdCgndmlkZW8nKVswXVxuXHQgICAgXHR0aGlzLnZpZGVvSXRlbXNbaV0gPSB7XG4gICAgXHRcdFx0ZWw6IGl0ZW0sXG4gICAgXHRcdFx0dmlkZW86IHZpZGVvLFxuICAgIFx0XHRcdG1lZGlhRWw6IGRvbShpdGVtKS5zZWxlY3QoJy5tZWRpYScpWzBdLFxuICAgIFx0XHRcdHRpdGxlRWw6IGRvbShpdGVtKS5zZWxlY3QoJy50aXRsZScpWzBdLFxuICAgIFx0XHRcdGRlc2NyaXB0aW9uRWw6IGRvbShpdGVtKS5zZWxlY3QoJy5kZXNjcmlwdGlvbicpWzBdLFxuICAgIFx0XHRcdGlzUGxheWluZzogZmFsc2UsXG4gICAgXHRcdFx0aW5kZXg6IGlcbiAgICBcdFx0fVxuXHQgICAgfTtcblxuICBcdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGNoZWNrVmlkZW9zVmlld3BvcnRGb2N1cygpIHtcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHNjcm9sbHQgPSBzY3JvbGx0b3AoKVxuXHRcdHZhciBtYXJnaW4gPSB3aW5kb3dIICogMC4xXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZpZGVvSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy52aWRlb0l0ZW1zW2ldXG5cdFx0XHRpZihzY3JvbGx0ICsgd2luZG93SCA+IGl0ZW0udG9wICsgKCBtYXJnaW4gKiAyICkgJiYgc2Nyb2xsdCA8IGl0ZW0udG9wICsgaXRlbS5zaXplWzFdIC0gbWFyZ2luKSB7XG5cdFx0XHRcdGlmKGl0ZW0uaXNQbGF5aW5nICE9IHRydWUpIHtcblx0XHRcdFx0XHRpdGVtLnZpZGVvLnBsYXkoKVxuXHRcdFx0XHRcdGl0ZW0udGwucGxheSgwKVxuXHRcdFx0XHRcdGl0ZW0uaXNQbGF5aW5nID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aWYoaXRlbS5pc1BsYXlpbmcgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHRpdGVtLnZpZGVvLnBhdXNlKClcblx0XHRcdFx0XHRpdGVtLnZpZGVvLmN1cnJlbnRUaW1lID0gMFxuXHRcdFx0XHRcdGl0ZW0udGwucmV2ZXJzZSgpXG5cdFx0XHRcdFx0aXRlbS5pc1BsYXlpbmcgPSBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHQgICAgXG5cdCAgICAvLyBnZXQgc2Nyb2xsdG9wIHBvc2l0aW9uXG5cdCAgICB0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSBzY3JvbGx0b3AoKVxuXG5cdCAgICAvLyB1cGRhdGUgbWMgY3VycmVudCBmcmFtZVxuXHQgICAgdmFyIGN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IoICggdGhpcy5jdXJyZW50U2Nyb2xsUG9zIC8gdGhpcy5wYWdlSGVpZ2h0ICkgKiB0aGlzLmJnLnRvdGFsRnJhbWVzIClcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA+IHRoaXMuYmcudG90YWxGcmFtZXMpIGN1cnJlbnRGcmFtZSA9IHRoaXMuYmcudG90YWxGcmFtZXNcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA8IDApIGN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIHRoaXMuYmcubWMuZ290b0FuZFN0b3AoY3VycmVudEZyYW1lKVxuXG5cdCAgICB0aGlzLmNoZWNrVmlkZW9zVmlld3BvcnRGb2N1cygpXG5cblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHR0aGlzLnBhZ2VIZWlnaHQgPSAwXG5cdFx0XHR2YXIgc2Nyb2xsdCA9IHNjcm9sbHRvcCgpXG5cdFx0XHR2YXIgbWFyZ2luVG9wID0gMjQwXG5cdFx0XHR2YXIgbWFyZ2luQm90dG9tID0gMjQwXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9JdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0XHR2YXIgaXRlbVNpemUgPSBzaXplKGl0ZW0uZWwpXG5cdFx0XHRcdHZhciBoID0gaXRlbVNpemVbMV0gKyAobWFyZ2luVG9wICsgbWFyZ2luQm90dG9tKVxuXHRcdFx0XHRpdGVtLnNpemUgPSBpdGVtU2l6ZVxuXHRcdFx0XHRpdGVtLnRvcCA9IHRoaXMucGFnZUhlaWdodCArIG1hcmdpblRvcFxuXHRcdFx0XHRpdGVtLmVsLnN0eWxlLnRvcCA9ICh0aGlzLnBhZ2VIZWlnaHQgKyBtYXJnaW5Ub3ApICsgJ3B4J1xuXHRcdFx0XHRpZihkb20oaXRlbS5lbCkuaGFzQ2xhc3MoJ3JpZ2h0JykpIGl0ZW0uZWwuc3R5bGUubGVmdCA9IHRoaXMudmlkZW9zQ29udGFpbmVyLm9mZnNldFdpZHRoIC0gaXRlbVNpemVbMF0gKyAncHgnXG5cdFx0XHRcdGl0ZW0ueSA9IDBcblx0XHRcdFx0XG5cdFx0XHRcdGl0ZW0ucExpbmVzID0gbmV3IFNwbGl0VGV4dChpdGVtLmRlc2NyaXB0aW9uRWwsIHsgdHlwZTonbGluZXMnIH0pLmxpbmVzXG5cdFx0XHRcdGl0ZW0udGl0bGVDaGFycyA9IFV0aWxzLlRyYW5mb3JtQXJyYXlGcm9tTWlkZGxlQW5kT3V0KG5ldyBTcGxpdFRleHQoaXRlbS50aXRsZUVsLCB7IHR5bGU6J2NoYXJzJyB9KS5jaGFycylcblxuXHRcdFx0XHRpdGVtLnRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG5cdFx0XHRcdGl0ZW0udGwuc3RhZ2dlckZyb20oaXRlbS50aXRsZUNoYXJzLCAxLCB7IG9wYWNpdHk6MCwgeToyMCwgc2NhbGVZOjAuOCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wNSwgMC4zKVxuXHRcdFx0XHRpdGVtLnRsLmZyb20oaXRlbS52aWRlbywgMSwgeyBvcGFjaXR5OjAsIHk6MjAsIHNjYWxlWToyLCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjUpXG5cdFx0XHRcdGl0ZW0udGwuc3RhZ2dlckZyb20oaXRlbS5wTGluZXMsIDEsIHsgb3BhY2l0eTowLCB5OjIwLCBzY2FsZVk6MC44LCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjA1LCAwLjgpXG5cdFx0XHRcdGl0ZW0udGwucGF1c2UoMClcblxuXHRcdFx0XHRpdGVtLmlzUGxheWluZyA9IGZhbHNlXG5cblx0XHRcdFx0dGhpcy5wYWdlSGVpZ2h0ICs9IGhcblx0XHRcdH07XG5cdFx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhZ2VIZWlnaHQgKyAncHgnXG5cdFx0XHR0aGlzLnBhZ2VIZWlnaHQgLT0gd2luZG93SFxuXG5cdFx0fSwgMClcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRpdml0eUlubm92YXRpb24gZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXMgPSBbXVxuXHRcdHZhciB2aWRlb1VybHMgPSBbICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcsICd2aWRlby9ob21lX2FfMV8xLm1wNCcgXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHR2YXIgdmlkZW9TcHJ0ID0gSGVscGVycy5nZXRQWFZpZGVvKHZpZGVvVXJsc1tpXSwgMzIwLCA1MTApXG5cdFx0XHR0aGlzLnZpZGVvU3ByaXRlc1tpXSA9IHZpZGVvU3BydFxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIuYWRkQ2hpbGQodmlkZW9TcHJ0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy52aWRlb3NDb250YWluZXIpO1xuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHZpZGVvSCA9IHRoaXMudmlkZW9TcHJpdGVzWzBdLmhlaWdodFxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemUgPSBbIHdpbmRvd1cgKiAwLjgsIHZpZGVvSCBdXG5cblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci54ID0gKHdpbmRvd1cgPj4gMSkgLSAodGhpcy52aWRlb3NDb250YWluZXIuc2l6ZVswXSA+PiAxKVxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnkgPSAod2luZG93SCA+PiAxKSAtICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzFdID4+IDEpIC0gKHdpbmRvd0ggKiAwLjAxKVxuXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMV0ueCA9ICh0aGlzLnZpZGVvc0NvbnRhaW5lci5zaXplWzBdID4+IDEpIC0gKHRoaXMudmlkZW9TcHJpdGVzWzFdLndpZHRoID4+IDEpXG5cdFx0dGhpcy52aWRlb1Nwcml0ZXNbMl0ueCA9IHRoaXMudmlkZW9zQ29udGFpbmVyLnNpemVbMF0gLSB0aGlzLnZpZGVvU3ByaXRlc1sxXS53aWR0aFxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRkZXN0cm95KCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb1Nwcml0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB2aWRlb1NwcnQgPSB0aGlzLnZpZGVvU3ByaXRlc1tpXVxuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodmlkZW9TcHJ0KVxuXHRcdFx0VXRpbHMuRGVzdHJveVZpZGVvVGV4dHVyZSh2aWRlb1NwcnQudGV4dHVyZSlcblx0XHRcdHZpZGVvU3BydC50ZXh0dXJlLmRlc3Ryb3koKVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kZXN0cm95KClcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGlyYXRpb25TcGFyayBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpbnRhZXNzZW5jZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5tb3VzZU1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YWdlTW91c2VPdXQgPSB0aGlzLnN0YWdlTW91c2VPdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdFx0dGhpcy5kcmFnVmFycyA9IHtcblx0XHRcdHN0YXJ0UG9zOiAwLFxuXHRcdFx0Zm9yY2U6IDAuMSxcblx0XHRcdGRpcmVjdGlvbjogMSxcblx0XHRcdGFjdGl2ZTogZmFsc2Vcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMTU5XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvdGhyZWVzaXh0eS90dXJuXycsICdqcGcnKVxuXHQgICAgdmFyIG1jID0gUElYSS5leHRyYXMuTW92aWVDbGlwLmZyb21JbWFnZXMoYmFnSW1hZ2VzKVxuICAgICAgICBtYy5hbmNob3IueCA9IDAuNVxuICAgICAgICBtYy5hbmNob3IueSA9IDAuNVxuXHQgICAgbWMuZ290b0FuZFN0b3AoMClcblx0ICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1jKVxuXHQgICAgXG5cdCAgICB0aGlzLmJnID0ge1xuXHQgICAgXHRtYzogbWMsXG5cdCAgICBcdHRvdGFsRnJhbWVzOiB0b3RhbEZyYW1lcyxcblx0ICAgIFx0Y3VycmVudEZyYW1lOiAwXG5cdCAgICB9XG5cblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKVxuXHQgICAgZG9tKHRoaXMucGFyZW50KS5vbignbW91c2V1cCcsIHRoaXMubW91c2VVcClcblx0ICAgIGRvbShkb2N1bWVudCkub24oJ21vdXNlb3V0JywgdGhpcy5zdGFnZU1vdXNlT3V0KVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdG1vdXNlRG93bihlKSB7XG5cdFx0ZG9tKHdpbmRvdykub24oJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKVxuXHRcdHRoaXMuZHJhZ1ZhcnMuYWN0aXZlID0gdHJ1ZVxuXHRcdHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MgPSBlLmNsaWVudFhcblx0fVxuXHRtb3VzZVVwKCkge1xuXHRcdHRoaXMuZGlzYWJsZURyYWcoKVxuXHR9XG5cdHN0YWdlTW91c2VPdXQoZSkge1xuXHRcdGUgPSBlID8gZSA6IHdpbmRvdy5ldmVudDtcbiAgICAgICAgdmFyIGZyb20gPSBlLnJlbGF0ZWRUYXJnZXQgfHwgZS50b0VsZW1lbnQ7XG4gICAgICAgIGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09IFwiSFRNTFwiKSB7XG5cdFx0XHR0aGlzLmRpc2FibGVEcmFnKClcbiAgICAgICAgfVxuXHR9XG5cdG1vdXNlTW92ZShlKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHRoaXMubW91c2UueCA9IGUuY2xpZW50WFxuXHRcdHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuXG5cdFx0dGhpcy5kcmFnVmFycy5kaXJlY3Rpb24gPSAoIHRoaXMubW91c2UueCA+IHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MgKSA/IDEgOiAtMVxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMubW91c2UueCAtIHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MpIC8gd2luZG93V1xuXG5cdFx0dGhpcy5kcmFnVmFycy5mb3JjZSArPSAoOCAqIHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uKSAqIE1hdGgubWluKGRpc3RhbmNlLCAxMDApXG5cdH1cblx0ZGlzYWJsZURyYWcoKSB7XG5cdFx0ZG9tKHdpbmRvdykub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0XHR0aGlzLmRyYWdWYXJzLmFjdGl2ZSA9IGZhbHNlXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93LndcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDAuMDAwMDAxIC0gdGhpcy5kcmFnVmFycy5mb3JjZSkgKiAwLjRcblx0ICAgIFx0XG5cdCAgICAvLyB1cGRhdGUgbWMgY3VycmVudCBmcmFtZVxuXHQgICAgdmFyIG5ld0ZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmJnLmN1cnJlbnRGcmFtZSArIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpXG5cdCAgICB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IG5ld0ZyYW1lXG5cdCAgICBpZih0aGlzLmJnLmN1cnJlbnRGcmFtZSA+IHRoaXMuYmcudG90YWxGcmFtZXMpIHRoaXMuYmcuY3VycmVudEZyYW1lID0gMFxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPCAwKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IHRoaXMuYmcudG90YWxGcmFtZXNcblx0ICAgIHRoaXMuYmcubWMuZ290b0FuZFN0b3AodGhpcy5iZy5jdXJyZW50RnJhbWUpXG5cblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZW1vdmVTcHJpdGUgPSB0aGlzLnJlbW92ZVNwcml0ZS5iaW5kKHRoaXMpXG5cblx0XHR0aGlzLnRleHR1cmVzID0gW11cblx0XHR0aGlzLm1vdXNlID0geyB4OjAsIHk6MCB9XG5cdFx0dGhpcy5hY3RpdmVTcHJpdGVzID0gW11cblx0XHR0aGlzLmFkZFNwcml0ZUlzQWN0aXZlID0gdHJ1ZVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCkgXHRcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR0aGlzLmJnID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2ltYWdlL2JhZy1zdGF0aWMuanBnJykpXG5cblx0XHR0aGlzLmJnLmFuY2hvci54ID0gMC41XG5cdFx0dGhpcy5iZy5hbmNob3IueSA9IDAuNVxuXG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5iZylcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmltYWdlc0NvbnRhaW5lcilcblxuXHRcdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucmVtb3ZlU3ByaXRlLCA3NSlcblx0XHRkb20od2luZG93KS5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXHRcdHRoaXMuY291bnRlciA9IDBcblxuXHRcdHRoaXMubG9hZEltYWdlcygpXG5cblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0bG9hZEltYWdlcygpIHtcblx0XHR2YXIgcGFnZUNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIGltYWdlU3JjcyA9IHBhZ2VDb250ZW50LmltYWdlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VTcmNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZmlsZW5hbWUgPSBpbWFnZVNyY3NbaV1cblx0XHRcdHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnaW1hZ2Uvc3R5bGUtaW1hZ2VzLycgKyBmaWxlbmFtZSk7XG5cdFx0XHR0aGlzLnRleHR1cmVzLnB1c2godGV4dHVyZSlcblx0XHR9O1xuXHR9XG5cdGFkZFNwcml0ZSgpIHtcblx0XHR2YXIgcmFuZG9tTnVtID0gVXRpbHMuUmFuZCgwLCB0aGlzLnRleHR1cmVzLmxlbmd0aC0xLCAwKVxuXHRcdHZhciB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlc1tyYW5kb21OdW1dXG5cdFx0aWYodGV4dHVyZSA9PSB1bmRlZmluZWQpIHJldHVyblxuXHRcdHZhciBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSlcblx0XHR2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgc2hhcGUgPSBuZXcgUElYSS5HcmFwaGljcygpXG5cdFx0dmFyIHNpemUgPSAyNVxuXHRcdHNoYXBlLmxpbmVTdHlsZSgxLCAweDAwMDBmZiwgMSlcblx0XHRzaGFwZS5kcmF3UmVjdCgtc2l6ZS8yLCAtc2l6ZS8yLCBzaXplLCBzaXplKVxuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpXG5cdFx0Y29udGFpbmVyLmFkZENoaWxkKHNoYXBlKVxuXHRcdHNwcml0ZS5hbmNob3IueCA9IDAuNVxuXHRcdHNwcml0ZS5hbmNob3IueSA9IDAuNVxuXHRcdHNwcml0ZS5ibGVuZE1vZGUgPSBQSVhJLkJMRU5EX01PREVTLk1VTFRJUExZXG5cdFx0Y29udGFpbmVyLnBvc2l0aW9uLnggPSB0aGlzLm1vdXNlLnhcblx0XHRjb250YWluZXIucG9zaXRpb24ueSA9IHRoaXMubW91c2UueVxuXHRcdHRoaXMuYWN0aXZlU3ByaXRlcy5wdXNoKHtcblx0XHRcdHNwcml0ZTogc3ByaXRlLFxuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXJcblx0XHR9KVxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyLmFkZENoaWxkKGNvbnRhaW5lcilcblx0fVxuXHRyZW1vdmVTcHJpdGUoKSB7XG5cdFx0aWYodGhpcy5hY3RpdmVTcHJpdGVzLmxlbmd0aCA8PSAxKSByZXR1cm5cblx0XHR2YXIgc3ByaXRlVG9SZW1vdmUgPSB0aGlzLmFjdGl2ZVNwcml0ZXMuc2hpZnQoKVxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNwcml0ZVRvUmVtb3ZlLmNvbnRhaW5lcilcblx0XHRzcHJpdGVUb1JlbW92ZS5jb250YWluZXIuZGVzdHJveSgpXG5cdFx0c3ByaXRlVG9SZW1vdmUuc3ByaXRlLmRlc3Ryb3koKVxuXHR9XG5cdG9uTW91c2VNb3ZlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0aWYoZS5jbGllbnRZID4gd2luZG93SCAqIDAuOCkgcmV0dXJuIFxuXHRcdHRoaXMubW91c2UueCA9IGUuY2xpZW50WFxuXHRcdHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuXHRcdGlmKHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUpIHtcblx0XHRcdHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUgPSBmYWxzZVxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHR0aGlzLmFkZFNwcml0ZUlzQWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLmFkZFNwcml0ZSgpXG5cdFx0XHR9LCA2MClcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmVTcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYWN0aXZlID0gdGhpcy5hY3RpdmVTcHJpdGVzW2ldXG5cdFx0XHR2YXIgY29udGFpbmVyID0gYWN0aXZlLmNvbnRhaW5lclxuXHRcdFx0Y29udGFpbmVyLnBvc2l0aW9uLnkgLT0gMVxuXHRcdH07XG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93LmhcblxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcuc2NhbGUueCA9IHRoaXMuYmcuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVx0XG5cdFx0SGVscGVycy5yZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXIodGhpcy5pbWFnZXNDb250YWluZXIpXG5cdFx0ZG9tKHdpbmRvdykub2ZmKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG5cdH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXHRJTlRST19GSU5JU0hFRDogJ0lOVFJPX0ZJTklTSEVEJyxcblxuXHRMQU5EU0NBUEU6ICdMQU5EU0NBUEUnLFxuXHRQT1JUUkFJVDogJ1BPUlRSQUlUJyxcblxuXHRNRURJQV9HTE9CQUxfVzogMTkyMCxcblx0TUVESUFfR0xPQkFMX0g6IDEwODAsXG5cdFxuXHRBRERfUFhfQ0hJTEQ6ICdBRERfUFhfQ0hJTEQnLFxuXHRSRU1PVkVfUFhfQ0hJTEQ6ICdSRU1PVkVfUFhfQ0hJTEQnLFxuXHRcblx0T1ZFUkFMTF9NQVJHSU46IDQwLFxuXG5cdE1JTl9NSURETEVfVzogOTYwLFxuXHRNUV9YU01BTEw6IDMyMCxcblx0TVFfU01BTEw6IDQ4MCxcblx0TVFfTUVESVVNOiA3NjgsXG5cdE1RX0xBUkdFOiAxMDI0LFxuXHRNUV9YTEFSR0U6IDEyODAsXG5cdE1RX1hYTEFSR0U6IDE2ODAsXG59IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG52YXIgQXBwRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlVmlld0FjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdWSUVXX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGF0Y2hlciIsInZhciBIZWxwZXJzID0ge1xuXG4gICAgZ2V0UFhWaWRlbzogZnVuY3Rpb24odXJsLCB3aWR0aCwgaGVpZ2h0LCB2YXJzKSB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21WaWRlbyh1cmwpXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgdHJ1ZSlcbiAgICAgICAgdmFyIHZpZGVvU3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpXG4gICAgICAgIHZpZGVvU3ByaXRlLndpZHRoID0gd2lkdGhcbiAgICAgICAgdmlkZW9TcHJpdGUuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHJldHVybiB2aWRlb1Nwcml0ZVxuICAgIH0sXG5cbiAgICByZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXI6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0RnJhbWVJbWFnZXNBcnJheTogZnVuY3Rpb24oZnJhbWVzLCBiYXNldXJsLCBleHQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW11cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gZnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBiYXNldXJsICsgaSArICcuJyArIGV4dFxuICAgICAgICAgICAgYXJyYXlbaV0gPSB1cmxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnMiLCJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cbk5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZih0aGlzW2ldICYmIHRoaXNbaV0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpc1tpXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbiAgICBcdFxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdEFwcEFjdGlvbnMud2luZG93UmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsRXZlbnRzXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFByZWxvYWRlciAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpXG5cdFx0dGhpcy5xdWV1ZS5vbihcImNvbXBsZXRlXCIsIHRoaXMub25NYW5pZmVzdExvYWRDb21wbGV0ZWQsIHRoaXMpXG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2sgPSB1bmRlZmluZWRcblx0XHR0aGlzLmFsbE1hbmlmZXN0cyA9IFtdXG5cdH1cblx0bG9hZChtYW5pZmVzdCwgb25Mb2FkZWQpIHtcblxuXHRcdGlmKHRoaXMuYWxsTWFuaWZlc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxNYW5pZmVzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIG0gPSB0aGlzLmFsbE1hbmlmZXN0c1tpXVxuXHRcdFx0XHRpZihtLmxlbmd0aCA9PSBtYW5pZmVzdC5sZW5ndGggJiYgbVswXS5pZCA9PSBtYW5pZmVzdFswXS5pZCAmJiBtW20ubGVuZ3RoLTFdLmlkID09IG1hbmlmZXN0W21hbmlmZXN0Lmxlbmd0aC0xXS5pZCkge1xuXHRcdFx0XHRcdG9uTG9hZGVkKClcdFxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLmFsbE1hbmlmZXN0cy5wdXNoKG1hbmlmZXN0KVxuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrID0gb25Mb2FkZWRcbiAgICAgICAgdGhpcy5xdWV1ZS5sb2FkTWFuaWZlc3QobWFuaWZlc3QpXG5cdH1cblx0b25NYW5pZmVzdExvYWRDb21wbGV0ZWQoKSB7XG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2soKVxuXHR9XG5cdGdldENvbnRlbnRCeUlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUuZ2V0UmVzdWx0KGlkKVxuXHR9XG5cdGdldEltYWdlVVJMKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q29udGVudEJ5SWQoaWQpLmdldEF0dHJpYnV0ZShcInNyY1wiKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlclxuIiwiaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2FkcydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUm91dGVyIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnJvdXRpbmcgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRoYXNoZXIubmV3SGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5vbGRIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5fc2V0dXBDcm9zc3JvYWRzKClcblx0fVxuXHRiZWdpblJvdXRpbmcoKSB7XG5cdFx0aGFzaGVyLmluaXQoKVxuXHR9XG5cdF9zZXR1cENyb3Nzcm9hZHMoKSB7XG5cdFx0dmFyIGJhc2ljU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfScsIHRoaXMuX29uRmlyc3REZWdyZWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDMpXG5cdFx0YmFzaWNTZWN0aW9uLnJ1bGVzID0ge1xuXHQgICAgICAgIHBhZ2UgOiBbJyAnLCAnd29yay1vZi1hcnQnLCAnd29ya3MnLCAnY29udGFjdCddIC8vdmFsaWQgc2VjdGlvbnNcblx0ICAgIH1cblx0fVxuXHRfb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocGFnZUlkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdC8vIHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKCcnKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdHZhciBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdHZhciBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0dmFyIGhhc2ggPSB1cmxcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIEFwcFN0b3JlLkRhdGEucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmZ1bmN0aW9uIF9wYWdlUm91dGVJZENoYW5nZWQoaWQpIHtcbn1cbmZ1bmN0aW9uIF9nZXRQYWdlQ29udGVudCgpIHtcbiAgICB2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcbiAgICB2YXIgaGFzaCA9IGhhc2hPYmouaGFzaC5sZW5ndGggPCAxID8gJy8nIDogaGFzaE9iai5oYXNoXG4gICAgdmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdbaGFzaF1cbiAgICByZXR1cm4gY29udGVudFxufVxuZnVuY3Rpb24gX2dldE1lbnVDb250ZW50KCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRNZW51SXRlbUJ5SWQoaWQpIHtcblxuICAgIHZhciBtZW51SXRlbXMgPSBBcHBTdG9yZS5EYXRhLm1lbnVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtZW51SXRlbXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5mdW5jdGlvbiBfZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpIHtcblxuICAgIHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuICAgIHZhciBpZCA9IGhhc2hPYmouaGFzaCA9PSAnJyA/ICdob21lJyA6IGhhc2hPYmouaGFzaFxuXG4gICAgdmFyIG1lbnVJdGVtcyA9IEFwcFN0b3JlLkRhdGEubWVudVxuICAgIHZhciBpdGVtO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbnVJdGVtc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgaXRlbSA9IG1lbnVJdGVtc1tpXVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKGl0ZW0gPT0gdW5kZWZpbmVkKSA/IHsgaWQ6ICdob21lJyB9IDogaXRlbVxufVxuZnVuY3Rpb24gX2dldEFwcERhdGEoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFcbn1cbmZ1bmN0aW9uIF9nZXREZWZhdWx0Um91dGUoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGEuY29udGVudFxufVxuZnVuY3Rpb24gX3dpbmRvd1dpZHRoSGVpZ2h0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG59XG5cbnZhciBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0eXBlLCBpdGVtKVxuICAgIH0sXG4gICAgcGFnZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldFBhZ2VDb250ZW50KClcbiAgICB9LFxuICAgIG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51Q29udGVudCgpXG4gICAgfSxcbiAgICBnZXRDdXJyZW50UGFnZU1lbnVJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcbiAgICB9LFxuICAgIGdldE1lbnVJdGVtQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51SXRlbUJ5SWQoaWQpXG4gICAgfSxcbiAgICBhcHBEYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRBcHBEYXRhKClcbiAgICB9LFxuICAgIGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcbiAgICB9LFxuICAgIGdsb2JhbENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuICAgIH0sXG4gICAgV2luZG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aW5kb3dXaWR0aEhlaWdodCgpXG4gICAgfSxcbiAgICBPcmllbnRhdGlvbjogQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSxcbiAgICBkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuICAgICAgICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQ6XG4gICAgICAgICAgICAgICAgX3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24uaXRlbSlcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy53ID0gYWN0aW9uLml0ZW0ud2luZG93V1xuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy5oID0gYWN0aW9uLml0ZW0ud2luZG93SFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLk9yaWVudGF0aW9uID0gKEFwcFN0b3JlLldpbmRvdy53ID4gQXBwU3RvcmUuV2luZG93LmgpID8gQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSA6IEFwcENvbnN0YW50cy5QT1JUUkFJVFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSwgYWN0aW9uLml0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxud2luZG93LkFwcFN0b3JlID0gQXBwU3RvcmVcblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8c3ZnIHsuLi50aGlzLnByb3BzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3N2Zz5cbiAgICB9XG59XG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKSxcblx0XHRcdHNjYWxlOiBzY2FsZVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIERlc3Ryb3lWaWRlbyh2aWRlbykge1xuICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB2aWRlby5zcmMgPSAnJztcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdmlkZW8uY2hpbGROb2Rlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgXHRjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcbiAgICAgICAgXHQvLyBXb3JraW5nIHdpdGggYSBwb2x5ZmlsbCBvciB1c2UganF1ZXJ5XG4gICAgICAgIFx0Y2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRGVzdHJveVZpZGVvVGV4dHVyZSh0ZXh0dXJlKSB7XG4gICAgXHR2YXIgdmlkZW8gPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZVxuICAgICAgICBVdGlscy5EZXN0cm95VmlkZW8odmlkZW8pXG4gICAgfVxuICAgIHN0YXRpYyBJc0V2ZW4obikge1xuXHQgICByZXR1cm4gbiAlIDIgPT0gMDtcblx0fVxuXHRzdGF0aWMgUmFuZChtaW4sIG1heCwgZGVjaW1hbHMpIHtcbiAgICAgICAgdmFyIHJhbmRvbU51bSA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxuICAgICAgICBpZihkZWNpbWFscyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgXHRyZXR1cm4gcmFuZG9tTnVtXG4gICAgICAgIH1lbHNle1xuXHQgICAgICAgIHZhciBkID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKVxuXHQgICAgICAgIHJldHVybiB+figoZCAqIHJhbmRvbU51bSkgKyAwLjUpIC8gZFxuICAgICAgICB9XG5cdH1cblx0c3RhdGljIFRyYW5mb3JtQXJyYXlGcm9tTWlkZGxlQW5kT3V0KGFycmF5KSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdXG4gICAgICAgIHZhciBpID0gTWF0aC5jZWlsKGFycmF5Lmxlbmd0aC8yKVxuICAgICAgICB2YXIgaiA9IGkgLSAxXG4gICAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBcdG5ld0FycmF5LnB1c2goYXJyYXlbai0tXSlcbiAgICAgICAgICAgIGlmKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIFx0bmV3QXJyYXkucHVzaChhcnJheVtpKytdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheVxuICAgIH1cbiAgICBzdGF0aWMgU2V0KGVsZW1lbnQsIHZhcnMsIGFuaW1hdGlvbkNsYXNzKSB7XG5cdFx0YW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb25DbGFzcyB8fCAnYW5pbWF0ZSdcblx0XHRkb20oZWxlbWVudCkucmVtb3ZlQ2xhc3MoYW5pbWF0aW9uQ2xhc3MpXG5cdFx0VHdlZW5MaXRlLnNldChlbGVtZW50LCB2YXJzKVxuXHR9XG5cdHN0YXRpYyBBbmltYXRlKGVsZW1lbnQsIHZhcnMsIGFuaW1hdGlvbkNsYXNzKSB7XG5cdFx0YW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb25DbGFzcyB8fCAnYW5pbWF0ZSdcblx0XHRkb20oZWxlbWVudCkuYWRkQ2xhc3MoYW5pbWF0aW9uQ2xhc3MpXG5cdFx0dmFyc1snZm9yY2UzRCddID0gdHJ1ZVxuXHRcdFR3ZWVuTGl0ZS5zZXQoZWxlbWVudCwgdmFycylcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG4gXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdFx0dGhpcy5zZXR1cEFuaW1hdGlvbnMoKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5pc1JlYWR5KHRoaXMucHJvcHMuaGFzaCksIDApXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMudGxJbi50aW1lU2NhbGUoMikucGxheSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQudGltZVNjYWxlKDIpLnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAncGFnZS1iJ1xuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4gPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluLmJpbmQodGhpcylcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dCA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLmNvbXBvbmVudHMgPSB7XG5cdFx0XHQnbmV3LWNvbXBvbmVudCc6IHVuZGVmaW5lZCxcblx0XHRcdCdvbGQtY29tcG9uZW50JzogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXMtY29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWEnPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblx0c2V0dXBOZXdDb21wb25lbnQoaGFzaCwgVHlwZSkge1xuXHRcdHZhciBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdHZhciBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHR2YXIgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cdHdpbGxQYWdlVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXS53aWxsVHJhbnNpdGlvbk91dCgpXG5cdH1cblx0ZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5wYWdlVHJhbnNpdGlvbkRpZEZpbmlzaCgpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10udXBkYXRlKClcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ucmVzaXplKClcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCduZXctY29tcG9uZW50Jylcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImNvbnRlbnRcIjoge1xuXHRcdFwibXl0ZXh0XCI6IFwic29tZSBnbG9iYWwgdGV4dFwiXG5cdH0sXG5cblx0XCJtZW51XCI6IFtcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwicXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiUXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvcXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJhcmNoaXRlY3R1cmVcIixcblx0XHRcdFwibmFtZVwiOiBcIkFyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvYXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJjcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibmFtZVwiOiBcIkNyZWF0aXZpdHkgJiBJbm5vdmF0aW9uXCIsXG5cdFx0XHRcInVybFwiOiBcIi9jcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSUlJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJzdHlsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiU3R5bGVcIixcblx0XHRcdFwidXJsXCI6IFwiL3N0eWxlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklWXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJpbnNwaXJhdGlvbi1zcGFya1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwiSW5zcGlyYXRpb24gU3BhcmtcIixcblx0XHRcdFwidXJsXCI6IFwiL2luc3BpcmF0aW9uLXNwYXJrXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIlZcIlxuXHRcdH1cblx0XSxcblxuXHRcImRlZmF1bHQtcm91dGVcIjogXCJcIixcblxuXHRcInJvdXRpbmdcIjoge1xuXHRcdFwiL1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiaG9tZSBwYWdlXCJcblx0XHR9LFxuXHRcdFwiaW5zcGlyYXRpb24tc3BhcmtcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImluc3BpcmF0aW9uLXNwYXJrIHBhZ2VcIlxuXHRcdH0sXG5cdFx0XCJhcmNoaXRlY3R1cmVcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImFyY2hpdGVjdHVyZSBwYWdlXCIsXG5cdFx0XHRcInZpZGVvc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIExJTkVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTGFkeSBEaW9yIGlzIGFuIGFyY2hpdGVjdHVyYWwgY29uc3RydWN0aW9uLjxici8+SXRzIGJlYXV0eSBsaWVzLCBhdCB0aGUgYmVnaW5uaW5nLCBvbiBpdHMg4oCcbGluZXPigJ0sPGJyLz5pdHMgcHJvcG9ydGlvbnMgYW5kIGlkZWFsIGRpbWVuc2lvbnMuPGJyLz5UaGUgbGluZSBjcmVhdGVzIHRoZSBzaGFwZS4uLjxici8+SW4gYWxsIGl0IHRha2VzIDE0NCBzZXBhcmF0ZSBwYXJ0cyB0byBtYWtlIGVhY2ggTGFkeSBEaW9yLjxici8+PGJyLz5UaGUgc2hhcGUgZ2l2ZXMgbGl2ZSB0byB0aGUgbWF0ZXJpYWwuXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIkRpb3JcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBNQVRFUklBTFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGVhdGhlciBtdXN0IGJlIHBlcmZlY3QuPGJyLz5JdCBhbGwgYmVnaW5zIHdpdGggdGhlIHNlbGVjdGlvbiB3aGljaCBtdXN0IG1lZXQgc3BlY2lhbGx5IGRlbWFuZGluZyBjcml0ZXJpYSwgYWx3YXlzIGZvbGxvd2luZyB0aGUgc2FtZSByaXR1YWwgOiB0b3VjaGluZywgZXhhbWluaW5nLCBzZWVpbmcuLi48YnIvPlRoZSBjcmFmdG1hbuKAmXMgaGFuZHMgYW5kIGV5ZXMgYXJlIHRyYWluZWQgdG8gZGV0ZWN0IHRoZSBtaW5vciBmbGF3Ljxici8+PGJyLz5UaGUgbGVhdGhlciBpcyB0aGVuIGN1dCwgZm9sbG93aW5nIHRoZSBwYXR0ZXJucy48YnIvPkFmdGVyIHRoZSBjYW5uaW5nIHN0aXRjaGluZywgdGhlIHBhcnRzIGFyZSByZWFkeSB0byBjcmVhdGUgdGhlIHZvbHVtZS5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiRGlvclwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIFZPTFVNRVwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMYWR5IERpb3IgaXMgYXNzZW1ibGVkIGFyb3VuZCBhIHdvb2RlbiBmb3JtLjxici8+VGhlIHRhc2sgaXMgaXMgYW4gZXNwZWNpYWxseSBkaWZmaWN1bHQgb25lLCBhcyB0aGUgY2FubmluZyBoYXMgdG8gYWxpZ24gcGVyZmVjdGx5Ljxici8+PGJyLz5UaGUgZnJvbnQsIGJhY2sgYW5kIHNpZGVzIGFyZSByZWluZm9yY2VkIHRvIGd1YXJhbnR5IHRoYXQgdGhlIGJhZyB3aWxsIG1haW50YWluIGl0cyBzaGFwZSwgcHJldmVudGluZyBpdCBmcm9tIGJ1Y2tsaW5nLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJEaW9yXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgREVUQUlMXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIk1ldGFsd29yayBzdHJlbmd0aGVuIGFuZCBhY2Nlc3Nvcml6ZSB0aGUgYmFnOiBjaGFybXMsIHppcHBlciwgZ3JvbW1ldHMgb3IgYmFzZSBzdHVkcy4uLjxici8+VGhpcyBpcyB0aGUgRGlvciBzaWduYXR1cmUsIG1ha2luZyBlYWNoIGRldGFpbCBhbiBpbmRlc3BlbnNhYmxlIHBhcnQgb2YgdGhlIGJlYXV0eSBvZiB0aGUgd2hvbGUuPGJyLz48YnIvPkxhZHkgRGlvciBjYXJyaWVzIHdpdGhpbiBpdCB0aGUgdmVyeSBzcGlyaXQgb2YgRGlvci4uLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJEaW9yXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuICAgICAgICB9LFxuICAgICAgICBcInF1aW50YWVzc2VuY2VcIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJxdWludGFlc3NlbmNlIHBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0aXZpdHktaW5ub3ZhdGlvblwiOiB7XG4gICAgICAgIFx0XCJ0aXRsZVwiOiBcIkNSRUFUSVZJVFkgJiBJTk5PVkFUSU9OIHBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwic3R5bGUgcGFnZVwiLFxuICAgICAgICBcdFwiaW1hZ2VzXCI6IFtcbiAgICAgICAgXHRcdFwiXzEyNDAwMTguanBnXCIsXG5cdFx0XHRcdFwiMC5qcGdcIixcblx0XHRcdFx0XCIxLmpwZ1wiLFxuXHRcdFx0XHRcIjMuanBnXCIsXG5cdFx0XHRcdFwiMy5tdWJpLmpwZ1wiLFxuXHRcdFx0XHRcIjQuanBnXCIsXG5cdFx0XHRcdFwiMDA0LU11YmktSEQtMy0wNDIuanBnXCIsXG5cdFx0XHRcdFwiNS4tYmFsbHJvb20uanBnXCIsXG5cdFx0XHRcdFwiOC5jYW1wZXJnZW0uanBnXCIsXG5cdFx0XHRcdFwiMTEtS0VOWk8tU1MtRklOQUwtQS1TLTIuanBnXCIsXG5cdFx0XHRcdFwiMTcuZGlvci5qcGdcIixcblx0XHRcdFx0XCIxOC5oZXJtZXMuanBnXCIsXG5cdFx0XHRcdFwiMjEuZGlvci5qcGdcIixcblx0XHRcdFx0XCJjYXRjaGVyX3Jvc2UucG5nXCIsXG5cdFx0XHRcdFwiSW1hZ2VzX3Rlc3RfY2xpZW50XzAyLmpwZ1wiLFxuXHRcdFx0XHRcImxhcmdlLTEuanBnXCIsXG5cdFx0XHRcdFwibGFyZ2UuanBnXCIsXG5cdFx0XHRcdFwicHVzaF9oYXJkZXJfMDAwNi5wbmdcIixcblx0XHRcdFx0XCJTY3JhdGNoZXIucG5nXCIsXG5cdFx0XHRcdFwiU2NyZWVuLVNob3QtMjAxNS0xMi0wNC1hdC0xNy4xNC40MS5qcGdcIixcblx0XHRcdFx0XCJTY3JlZW4tU2hvdC0yMDE1LTEyLTA0LWF0LTE3LjE3LjA2LmpwZ1wiLFxuXHRcdFx0XHRcIjE2LmNhbXBlci5qcGdcIixcblx0XHRcdFx0XCJ0aHVtYm5haWwtMjMuanBnXCIsXG5cdFx0XHRcdFwidGh1bWJuYWlsLTMyLmpwZ1wiLFxuXHRcdFx0XHRcIlZpc3VhbC0yLS0tQ29udm95LmpwZ1wiLFxuXHRcdFx0XHRcIlZpc3VhbC0zLS0tQ29udm95LmpwZ1wiLFxuXHRcdFx0XHRcIjExLmNhbXBlci5qcGdcIlxuXHRcdFx0XVxuICAgICAgICB9XG5cdH1cbn0iXX0=
