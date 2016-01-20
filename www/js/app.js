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

			_AppStore2['default'].Parent = document.getElementById('app-container');

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

var _Utils = require('./../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var Menu = (function (_React$Component) {
	_inherits(Menu, _React$Component);

	function Menu(props) {
		_classCallCheck(this, Menu);

		_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);

		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.click = this.click.bind(this);
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
				var title = (0, _domquery2['default'])(btn).select('.title')[0];
				var chars = _Utils2['default'].TranformArrayFromMiddleAndOut(new SplitText(title, { type: 'chars' }).chars);

				var tl = new TimelineLite();
				tl.staggerFrom(chars, 1, { opacity: 0, y: 10, scaleY: 0.8, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.01, 0);
				tl.pause(0);

				var tlHome = new TimelineLite();
				tlHome.staggerTo(chars, 1, { y: -10, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.01, 0);
				tlHome.pause(0);

				(0, _domquery2['default'])(btn).on('mouseenter', this.mouseEnter);
				(0, _domquery2['default'])(btn).on('mouseleave', this.mouseLeave);
				(0, _domquery2['default'])(btn).on('click', this.click);

				this.items[i] = {
					el: btn,
					id: btn.id,
					tl: tl,
					tlHome: tlHome,
					highlight: false
				};
			}
		}
	}, {
		key: 'mouseEnter',
		value: function mouseEnter(e) {
			e.preventDefault();
			var item = this.getItemById(e.currentTarget.id);
			var currentPageId = _AppStore2['default'].getCurrentPageMenuItem().id;

			if (currentPageId != 'home') {
				if (!item.highlight) {
					(0, _domquery2['default'])(item.el).addClass('hovered');
					(0, _domquery2['default'])(item.el).removeClass('disable');
					item.tl.timeScale(1.6).play(0);
				}
			} else {
				(0, _domquery2['default'])(item.el).addClass('hovered-home');
				item.tlHome.timeScale(2).play(0);
			}
		}
	}, {
		key: 'mouseLeave',
		value: function mouseLeave(e) {
			e.preventDefault();
			var item = this.getItemById(e.currentTarget.id);
			var currentPageId = _AppStore2['default'].getCurrentPageMenuItem().id;

			if (currentPageId != 'home') {
				if (!item.highlight) {
					(0, _domquery2['default'])(item.el).removeClass('hovered');
					(0, _domquery2['default'])(item.el).addClass('disable');
					item.tl.timeScale(2).reverse();
				}
			} else {
				(0, _domquery2['default'])(item.el).removeClass('hovered-home');
				item.tlHome.timeScale(3).reverse();
			}
		}
	}, {
		key: 'click',
		value: function click(e) {
			var item = this.getItemById(e.currentTarget.id);
			item.tl.timeScale(1.6).reverse();
			item.tlHome.timeScale(1.6).reverse();
		}
	}, {
		key: 'highlightByItem',
		value: function highlightByItem(item) {

			// if Home remove all highlights and return
			if (item.id == 'home') {
				for (var i = 0; i < this.items.length; i++) {
					var btn = this.items[i];
					this.highlightToHomeState(btn);
				};
				return;
			}

			for (var i = 0; i < this.items.length; i++) {
				var btn = this.items[i];
				if (btn.id == item.id) this.addHighlight(btn);else this.removeHighlight(btn);
			};
		}
	}, {
		key: 'addHighlight',
		value: function addHighlight(item) {
			setTimeout(function () {
				(0, _domquery2['default'])(item.el).addClass('enable');
				(0, _domquery2['default'])(item.el).removeClass('disable');
				(0, _domquery2['default'])(item.el).removeClass('hovered-home');
				item.highlight = true;
				item.tl.timeScale(2).reverse();
			}, 1000);
		}
	}, {
		key: 'removeHighlight',
		value: function removeHighlight(item) {
			(0, _domquery2['default'])(item.el).removeClass('enable');
			(0, _domquery2['default'])(item.el).addClass('disable');
			(0, _domquery2['default'])(item.el).removeClass('hovered-home');
			item.highlight = false;
			item.tl.timeScale(2).reverse();
		}
	}, {
		key: 'highlightToHomeState',
		value: function highlightToHomeState(item) {
			setTimeout(function () {
				(0, _domquery2['default'])(item.el).removeClass('enable');
				(0, _domquery2['default'])(item.el).removeClass('disable');
				item.tl.timeScale(1).play(0);
			}, 1000);
			item.highlight = false;
		}
	}, {
		key: 'getItemById',
		value: function getItemById(id) {
			for (var i = 0; i < this.items.length; i++) {
				var item = this.items[i];
				if (item.id == id) {
					return item;
				}
			};
		}
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

},{"./../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","domquery":"domquery","element-size":"element-size","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/PXContainer.js":[function(require,module,exports){
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

			var getMedia = function getMedia(src) {
				return _react2['default'].createElement(
					'div',
					{ className: 'media' },
					_react2['default'].createElement(
						'video',
						{ loop: 'true', width: '100%' },
						_react2['default'].createElement('source', { type: 'video/mp4', src: src })
					)
				);
			};

			var content = _AppStore2['default'].pageContent();
			var videos = content.videos.map(function (item, index) {
				var side = _Utils2['default'].IsEven(index) ? 'left' : 'right';
				var classes = 'video-item clear-float ' + side;
				var screenshotPath = 'image/video-screens/' + item.imgname;
				var videoPath = 'video/architecture/' + item.filename;
				var src_mp4 = videoPath + '.mp4';
				var media = item.filename.length < 1 ? '' : getMedia(src_mp4);
				return _react2['default'].createElement(
					'div',
					{ key: index, className: classes },
					_react2['default'].createElement(
						'div',
						{ className: 'title' },
						item.title
					),
					media,
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

			var totalFrames = 266;
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
						if (item.video != undefined) item.video.play();
						item.tl.play(0);
						item.isPlaying = true;
					}
				} else {
					if (item.isPlaying != false) {
						if (item.video != undefined) item.video.pause();
						if (item.video != undefined) item.video.currentTime = 0;
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
					if (item.video != undefined) item.tl.from(item.video, 1, { opacity: 0, y: 20, scaleY: 2, force3D: true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.5);
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
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(Architecture.prototype), 'componentWillUnmount', this).call(this);
			this.bg.mc.destroy();
			for (var i = 0; i < this.videoItems.length; i++) {
				var item = this.videoItems[i];
				item.tl.clear();
			};
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
		this.bodies = [];

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
		this.onCollision = this.onCollision.bind(this);
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

				this.bodies.push(circle);
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

				this.bodies.push(rect);
			};

			// Add Walls
			this.addWalls();

			// run the engine
			this.M.Engine.run(engine);

			this.intervalId = setInterval(this.explosion, 5000);

			this.explosion();

			this.M.Events.on(engine, 'collisionStart', this.onCollision);

			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'onCollision',
		value: function onCollision(event) {
			var pairs = event.pairs;
			for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i];
				// console.log(pair.bodyA, pair.bodyB)
			}
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

			for (var i = 0; i < this.bodies.length; i++) {
				var body = this.bodies[i];
				body.container.x = body.body.position.x;
				body.container.y = body.body.position.y;
				body.container.rotation = body.body.angle;
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
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'componentWillUnmount', this).call(this);
			this.M.Events.off(this.engine, 'collisionStart', this.onCollision);
			this.M.Engine.clear(this.engine);
			clearInterval(this.intervalId);
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

			this.pxVideo = _Helpers2['default'].getPXVideo('video/Triptych - 2.mp4', 1920, 1080);
			this.pxVideo.anchor.x = this.pxVideo.anchor.y = 0.5;
			this.container.addChild(this.pxVideo);

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
			var _this = this;

			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			setTimeout(function () {

				var videoViewport = [windowW * 0.8, windowH * 0.8];
				var resizeVals = _Utils2['default'].ResizePositionProportionally(videoViewport[0], videoViewport[1], _AppConstants2['default'].MEDIA_GLOBAL_W, _AppConstants2['default'].MEDIA_GLOBAL_H);

				_this.pxVideo.x = windowW >> 1;
				_this.pxVideo.y = (windowH >> 1) - windowH * 0.01;
				_this.pxVideo.scale.x = _this.pxVideo.scale.y = resizeVals.scale;
			}, 1000);

			_get(Object.getPrototypeOf(Home.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.container.removeChild(this.pxVideo);
			_Utils2['default'].DestroyVideoTexture(this.pxVideo.texture);
			this.pxVideo.texture.destroy();
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

			var totalFrames = 266;
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
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(Quintaessence.prototype), 'componentWillUnmount', this).call(this);
			this.bg.mc.destroy();
			(0, _domquery2['default'])(this.parent).off('mousedown', this.mouseDown);
			(0, _domquery2['default'])(this.parent).off('mouseup', this.mouseUp);
			(0, _domquery2['default'])(document).off('mouseout', this.stageMouseOut);
			(0, _domquery2['default'])(window).off('mousemove', this.mouseMove);
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

			var totalFrames = 266;
			var bagImages = _Helpers2['default'].getFrameImagesArray(totalFrames, 'image/bag-turn-light/turn_', 'jpg');
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
			this.bg.mc.play();

			this.imagesContainer = new PIXI.Container();
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
			// sprite.blendMode = PIXI.BLEND_MODES.DIFFERENCE
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

			this.bg.mc.x = windowW >> 1;
			this.bg.mc.y = windowH >> 1;
			this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale;

			_get(Object.getPrototypeOf(Style.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(Style.prototype), 'componentWillUnmount', this).call(this);
			_Helpers2['default'].removeChildrenFromContainer(this.imagesContainer);
			this.bg.mc.destroy();
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
    Parent: undefined,
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
			AppStore.Parent.style.cursor = 'progress';
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
			AppStore.Parent.style.cursor = 'auto';
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
					"filename": "",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE MATERIAL",
					"description": "The leather must be perfect.<br/>It all begins with the selection which must meet specially demanding criteria, always following the same ritual : touching, examining, seeing...<br/>The craftman’s hands and eyes are trained to detect the minor flaw.<br/><br/>The leather is then cut, following the patterns.<br/>After the canning stitching, the parts are ready to create the volume.",
					"filename": "25_LADYDIOR_Decoupe_des_Cuirs_15sec_DEF_H264_1",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE VOLUME",
					"description": "Lady Dior is assembled around a wooden form.<br/>The task is is an especially difficult one, as the canning has to align perfectly.<br/><br/>The front, back and sides are reinforced to guaranty that the bag will maintain its shape, preventing it from buckling.",
					"filename": "26_LADYDIOR_Mise_en_forme_15sec_DEF_H264_1",
					"imgname": "screen-a.jpg"
				},
				{
					"title": "THE DETAIL",
					"description": "Metalwork strengthen and accessorize the bag: charms, zipper, grommets or base studs...<br/>This is the Dior signature, making each detail an indespensable part of the beauty of the whole.<br/><br/>Lady Dior carries within it the very spirit of Dior...",
					"filename": "27_LADYDIOR_Pose_des_bijouteries_15sec_DEF_H264_1",
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
        		"2a3c5ce0884577ba6d7fcce3cfe8fb68.jpg",
        		"3bd979c25d3c67f756698ac50cb9a576.jpg",
        		"05e222214085460ebc905c79de468dc7.jpg",
        		"7efc9dbcafb70dbab3e3e19da351e331.jpg",
        		"9d53a4c5457c4d76c39177406302a287.jpg",
        		"15e37552befd55df3debd681885facdd.jpg",
        		"32b6208ede3c33beda8a0eedbd8b557a.jpg",
        		"092b87aeaeaf253610369d3daaff4fe4.jpg",
        		"112.jpg",
        		"14838db599dc2d0e6acc3c1578b3cccf.jpg",
        		"2311612_IMG_0525.jpg",
        		"4486821_open-uri20150517-7117-ehoqa3.jpg",
        		"christian-dior-fall-winter-2011-2012-lookbook-9.jpg",
        		"d49628cb734153b3f0e074bdae4013a5.jpg",
        		"da97401424531e6a6386168c2acafde2.jpg",
        		"dc838b3cbfc4a2d8cdf98e95122f2d77.jpg",
        		"dsc_0829.jpg",
        		"elizabeth-minett-lady-dior-street-style.jpg",
        		"IMG_1241-RC-1.jpg",
        		"IMG_6773.jpg",
        		"Le-Sac-Lady-Dior-de-Christian-Dior (1).jpg",
        		"LFW-Day1-AW15-StreetStyle-Natalia-Kaut-BlueDress-Raey-Yellow-Coat-MatchesFashion-MayaWilliams-FashionLollipop-1-1024x682.jpg",
        		"mod41.jpg",
        		"p19j5sdr5k41o16ju1mkpd5b1pgbg.jpg",
        		"tumblr_mzsndmRQHi1su7xieo1_1280.jpg"
			]
        }
	}
}
},{}]},{},["/Users/panagiotisthomoglou/Projects/lady-dior/src/js/Main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9DcmVhdGl2aXR5SW5ub3ZhdGlvbi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSW5zcGlyYXRpb25TcGFyay5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRhZXNzZW5jZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9IZWxwZXJzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvbWl4aW5zL1BvbHlmaWxscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1ByZWxvYWRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N2Zy9TVkdDb21wb25lbnQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL1V0aWxzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQ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cmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgKHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBBcHAgZnJvbSAnQXBwJ1xuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnXG5pbXBvcnQgUGFnZXIgZnJvbSAnUGFnZXInXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBQb2x5ZmlsbHMgZnJvbSAnUG9seWZpbGxzJ1xuXG4vLyBTdGFydCBBcHBcbnZhciBhcHAgPSBuZXcgQXBwKClcbmFwcC5pbml0KClcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnQXBwVGVtcGxhdGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBHRXZlbnRzIGZyb20gJ0dsb2JhbEV2ZW50cydcbmltcG9ydCBQcmVsb2FkIGZyb20gJ1ByZWxvYWRlcidcbmltcG9ydCBEYXRhIGZyb20gJ0RhdGEnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cdGluaXQoKSB7XG5cblx0XHQvLyBJbml0IGdsb2JhbCBldmVudHNcblx0XHR3aW5kb3cuR2xvYmFsRXZlbnRzID0gbmV3IEdFdmVudHMoKVxuXHRcdEdsb2JhbEV2ZW50cy5pbml0KClcblxuXHRcdEFwcFN0b3JlLlBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJylcblxuXHRcdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIGhpc3RvcnkpIHtcblx0XHRcdC8vIEJhY2sgb2ZmLCBicm93c2VyLCBJIGdvdCB0aGlzLi4uXG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbk1haW5EYXRhTG9hZGVkKClcblx0fVxuXG5cdG9uTWFpbkRhdGFMb2FkZWQoKSB7XG5cblx0XHRBcHBTdG9yZS5EYXRhID0gRGF0YVxuXHRcdFxuXHRcdC8vIEluaXQgcm91dGVyXG5cdFx0dmFyIHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXHRcdHJvdXRlci5pbml0KClcblxuXHRcdC8vIFJlbmRlciByZWFjdFxuXHRcdFJlYWN0LnJlbmRlcihcblx0XHRcdDxBcHBUZW1wbGF0ZSAvPixcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY29udGFpbmVyJylcblx0XHQpXG5cblx0XHQvLyBTdGFydCByb3V0aW5nXG5cdFx0cm91dGVyLmJlZ2luUm91dGluZygpXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiAgICBcdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgRnJvbnRDb250YWluZXIgZnJvbSAnRnJvbnRDb250YWluZXInXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnUGFnZXNDb250YWluZXInXG5pbXBvcnQgUFhDb250YWluZXIgZnJvbSAnUFhDb250YWluZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2FwcC10ZW1wbGF0ZSc+XG5cdFx0XHRcdDxGcm9udENvbnRhaW5lciByZWY9J2Zyb250LWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBhZ2VzQ29udGFpbmVyIHJlZj0ncGFnZXMtY29udGFpbmVyJyAvPlxuXHRcdFx0XHQ8UFhDb250YWluZXIgcmVmPSdweC1jb250YWluZXInIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0R2xvYmFsRXZlbnRzLnJlc2l6ZSgpXG5cdFx0dGhpcy5hbmltYXRlKClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS51cGRhdGUoKVxuXHRcdHRoaXMucmVmc1sncGFnZXMtY29udGFpbmVyJ10udXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dGhpcy5yZWZzWydmcm9udC1jb250YWluZXInXS5yZXNpemUoKVxuXHRcdHRoaXMucmVmc1sncGFnZXMtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3B4LWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdH1cbn1cbiIsImltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcblxudmFyIEFwcEFjdGlvbnMgPSB7XG4gICAgcGFnZUhhc2hlckNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2VJZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsXG4gICAgICAgICAgICBpdGVtOiBwYWdlSWRcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgd2luZG93UmVzaXplOiBmdW5jdGlvbih3aW5kb3dXLCB3aW5kb3dIKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSxcbiAgICAgICAgICAgIGl0ZW06IHsgd2luZG93Vzp3aW5kb3dXLCB3aW5kb3dIOndpbmRvd0ggfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYWRkUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5BRERfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfSxcbiAgICByZW1vdmVQWENoaWxkOiBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCxcbiAgICAgICAgICAgIGl0ZW06IHsgY2hpbGQ6Y2hpbGQgfVxuICAgICAgICB9KSAgICBcbiAgICB9LFxuICAgIGludHJvRmluaXNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELFxuICAgICAgICAgICAgaXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cblxud2luZG93LkFwcEFjdGlvbnMgPSBBcHBBY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IEFwcEFjdGlvbnNcblxuXG4gICAgICBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBNZW51IGZyb20gJ01lbnUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBTVkdDb21wb25lbnQgZnJvbSAnU1ZHQ29tcG9uZW50J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyb250Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmludHJvRmluaXNoZWQgPSB0aGlzLmludHJvRmluaXNoZWQuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELCB0aGlzLmludHJvRmluaXNoZWQpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdmcm9udC1jb250YWluZXInIHJlZj0nZnJvbnQtY29udGFpbmVyJz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJlZ2luLXNsaWRlXCIgcmVmPSdiZWdpbi1zbGlkZSc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG5cdFx0XHRcdFx0XHQ8U1ZHQ29tcG9uZW50IHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTg3LjA4NiA3My44NjNcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNDEuOTU2LDM5LjYzYy0yLjAyMy0wLjkwMy00LjI2NS0xLjM3My02LjY4Ny0xLjQ4M2wtNi42ODgsMC4zOThjLTEuODA3LDAuMzI1LTMuNTQyLDAuOTc3LTUuMjc3LDEuOTg5Yy0xLjk1MSwxLjE1Ni0zLjU3OCwyLjYwMy00Ljg3OSw0LjMzN2MtMy4zMjUsNC4xNTYtNC41MTksOS4wMzYtMy42MTQsMTQuNzgzYzEuMDEyLDYuMDczLDQuMTU2LDEwLjIyOSw5LjMyNSwxMi4zMjdjMy45NzcsMS42MjYsOC4zODYsMS45NSwxMy4xMjEsMC45MDJjNC41MTgtMC45MzksOC4wOTctMy4xMDgsMTAuODA4LTYuNTA1YzMuMTgxLTQuMDE0LDQuMTkyLTguOTY1LDMtMTQuODIxQzE0OS45MDksNDUuNzc1LDE0Ni44MzYsNDEuNzk5LDE0MS45NTYsMzkuNjN6IE0xNDEuODQ5LDY1LjkwOWMtMS41NTUsMi44OS0zLjkwMyw0LjYyNi03LjEyMSw1LjI0MWMtMy4wNzIsMC41NDEtNS44MTktMC42NTItOC4yNDEtMy41MDhjLTIuMjc3LTIuNzEtMy42ODgtNi4yNTQtNC4wODUtMTAuNjk4Yy0wLjU0Mi00LjQ4MywwLTguMjc4LDEuNDgxLTExLjM4OGMxLjYyNy0zLjQzNCw0LjEyMS01LjI0MSw3LjM3NS01LjU2NWMzLjM2MS0wLjI4OCw2LjE0NSwwLjc5NSw4LjM1LDMuMjU0YzIuMjQxLDIuNDkzLDMuNTA2LDYuMTA5LDMuOTQsMTAuOTg4QzE0My45MDgsNTkuMTEzLDE0My4zNjcsNjIuOTQ1LDE0MS44NDksNjUuOTA5eiBNNDAuNTY2LDAuMzc1SDQuMzEyYy0wLjcyMywwLTEuMDg1LDAuMjE2LTEuMDg1LDAuNzIybDAuMjksMC41NDNsMS40NDYsMC4yODhMOC40NjgsMi4xMWwzLjQzNCwwLjQzM2MyLjQ1OCwwLjU0MywzLjcyMywxLjkxNiwzLjcyMyw0LjE1N3Y1Ny4zMjhjLTAuMDM2LDEuNzczLTAuMjE3LDMuMDc0LTAuNTQyLDMuOTRsLTAuOTAzLDEuMjY3Yy0wLjQ3LDAuNTQxLTEuNDQ2LDAuOTM5LTIuODE5LDEuMTE5bC04Ljg1NiwwLjU0M2MtMS4wMTIsMC0xLjU1NCwwLjI1NC0xLjU1NCwwLjcyNGMwLDAuNDMzLDAuMzYxLDAuNjg2LDEuMTIxLDAuNjg2aDQ2LjIzMWM1LjYwMywwLDEwLjU5MS0xLjA0OCwxNS4wMzctMy4wNzFjNC4xNTctMS45ODksNy43NzEtNC43LDEwLjczNS04LjIwNWMyLjcxMS0zLjMyNyw0LjgwOC03LjA0OSw2LjMyNi0xMS4yNzljMS4zMzctNC4wMTIsMS45ODgtOC4xNjgsMS45ODgtMTIuNDY5YzAtOC4yNDItMS45ODgtMTUuMzYyLTUuOTY0LTIxLjM2M0M2OS40ODMsNS41NDMsNTcuNTU1LDAuMzc1LDQwLjU2NiwwLjM3NXogTTY4LjgzMyw0Ni4yOGMtMS4xOTMsNS41MzEtMy4xNDUsMTAuMDQ5LTUuODU2LDEzLjU5MWMtMS42MjYsMi4xNjktMy4xMDgsMy44NjgtNC41NTQsNS4wNjJjLTEuNjI2LDEuMjY1LTMuNTA2LDIuMzEyLTUuNDk0LDMuMDM1Yy0xLjk4OCwwLjY1MS00LjUxOSwxLjEyMS03LjQ4MywxLjQ0NmwtMTEuMDYsMC4zOThoLTQuNzcxbC0xLjQ0Ni0wLjIxN2MtMC4yODktMC4xODItMC40MzMtMC42ODgtMC40MzMtMS40MTFWNC41MzJsMC4yNTItMS40NDVjMC4yNTMtMC40MzUsMC43OTUtMC42MTUsMS42MjctMC41NDNoNy4zMzdjMTEuODkzLDAsMjAuNDk1LDMuNTQzLDI1LjczNiwxMC43YzIuNzExLDMuNjg3LDQuNjI3LDguMDI0LDUuODkyLDEyLjk3NmMwLjkwNCwzLjQzNSwxLjMzNyw2LjYxNSwxLjMzNyw5LjU3OUM2OS45MTcsMzkuMTYsNjkuNTU2LDQyLjY2Nyw2OC44MzMsNDYuMjh6IE05MC4zNTcsNDQuODM1bDAuOTQzLTAuMTA4bDIuMTEyLTAuNTc5bDEuODgsMC4xODJjMC41NDIsMC4zNjIsMC44MzEsMC45NzcsMC44MzEsMS43NzF2MjEuMDAxbC0wLjQ3LDIuNjAzYy0wLjMyNiwwLjcyMy0xLjE1NywxLjE5Mi0yLjUzLDEuMzcybC0yLjUzLDAuMDc0Yy0wLjc5NSwwLTEuMTU3LDAuMTgtMS4wODQsMC42MTRjMCwwLjI4OCwwLjIxNywwLjQ3LDAuNjUsMC40N2gxOS4yNjZjMC40MzUsMCwwLjY4Ny0wLjExLDAuNjg3LTAuNDM1Yy0wLjA3Mi0wLjM5Ni0wLjUwNi0wLjU3OC0xLjMzNy0wLjU3OGMtMi4zNSwwLTMuODY3LTAuMzI1LTQuNTE5LTAuOTc3Yy0wLjU0Mi0wLjU0MS0wLjgzMS0xLjQ0Ni0wLjgzMS0yLjcxdi0yNi40NmMwLTEuMzAxLTAuMTgxLTIuMDIzLTAuNTQyLTIuMDk1bC0xLjA4NSwwLjEwN2MtMC40MzQsMC4xOC0xLjQxLDAuNjE1LTIuNzgyLDEuNDFjLTIuMjQyLDEuMjY0LTQuODgsMi4yNzctNy44OCwzLjA3MWMtMS4yNjYsMC4zNjEtMS44MDgsMC43Ni0xLjYyNywxLjE5M0w5MC4zNTcsNDQuODM1eiBNMTg2LjEyNyw0Mi45NTVjMC4wNzMsMS4yNjYtMC4yODksMi4yNC0xLjA4NCwzYy0wLjcyMywwLjYxNS0xLjQ0NSwwLjc5NS0yLjA5NiwwLjYxNWMtMC42MTUtMC4xMDgtMS4wODUtMC4zNjEtMS40MS0wLjcyNGwtMS4wMTMtMS4yNjRjLTAuNzk1LTEuMTU4LTEuNTU0LTEuNTItMi40NTgtMS4xOTNjLTEuMDQ4LDAuMjg4LTIuMTMyLDEuMDgzLTMuMjUzLDIuMzQ5Yy0xLjc3MSwxLjg0My0yLjk2NCw0LjAxMi0zLjYxNCw2LjYxNHYxNS4zNjRjMCwxLjM3MiwwLjQ3LDIuMzQ5LDEuNDQ1LDIuOTYzbDIuMjA1LDAuMzk2bDIuMzE0LDAuMjU0YzAuNTQyLDAuMDczLDAuNzU5LDAuMTgyLDAuNzU5LDAuNDdsLTAuMTA4LDAuMjUzbC0wLjYxNSwwLjE4MkgxNTcuODZjLTAuNTc4LDAtMC45MDItMC4xODItMC45MDItMC40N2wwLjU0MS0wLjQzNWwzLjI1NC0wLjI1NGMxLjI2Ni0wLjIxNiwyLjA2LTAuNjQ5LDIuNDk0LTEuMzAxbDAuNTQyLTEuNjI2VjQ2LjQ2MmwtMC4zNjEtMS41OTFsLTAuNjE1LTAuMzYyYy0wLjE4MS0wLjE4LTAuNDctMC4yODgtMC45MDItMC4zNjFjLTAuNTQyLTAuMDM2LTEuMTk0LDAuMDczLTEuODgsMC4zNjFsLTEuODQ0LDAuNTA3bC0xLjA0OC0wLjI1M2MtMC4xODEtMC4yNTQtMC4xMDktMC40MzQsMC4xNDQtMC41NDJsMS41NTUtMC42NTFjMy41NDItMS4wNDgsNi4zOTgtMi4xMzIsOC4zODYtMy4yNTRsMi40NTgtMS4zMzVsMS4wODUsMC4wNzFsMC40MzQsMC45MDJ2Ny45NTRjMi43MTEtNC40MSw0Ljg4LTcuMTIyLDYuMzYxLTguMDI1YzAuOTA0LTAuNTQxLDEuNzcxLTAuOTc3LDIuNDIyLTEuMTU2bDEuMjY2LTAuMTA4YzAuNzk1LTAuMDczLDEuNjk5LDAuMTgsMi43MTEsMC44MzJDMTg1LjMzMyw0MC4yNDQsMTg2LjA1NSw0MS40MzgsMTg2LjEyNyw0Mi45NTV6IE05NS45NDIsMjQuMDUxYy0wLjk3Ni0wLjkwNS0xLjQ0Ni0xLjk4OS0xLjM3NC0zLjI1NGMtMC4wNzItMS4zMzgsMC4zOTgtMi40OTQsMS4zNzQtMy4zOThjMC45MDMtMC45MDQsMS45ODgtMS4zNzQsMy4zMjUtMS4zNzRjMS4yNjYsMCwyLjM4NiwwLjQ3LDMuMjg5LDEuMzc0YzAuOTA0LDAuOTA0LDEuNDEsMi4wNiwxLjQxLDMuMzk4YzAsMS4yNjUtMC41MDYsMi4zNDktMS40MSwzLjI1NGMtMC45MDMsMC45MDMtMi4wMjMsMS4zNzMtMy4yODksMS4zNzNDOTcuOTMxLDI1LjQyNCw5Ni44NDYsMjQuOTU0LDk1Ljk0MiwyNC4wNTF6XCIvPlxuXHRcdFx0XHRcdFx0PC9TVkdDb21wb25lbnQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxhIGhyZWY9JyMvJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiByZWY9J2xvZ28nPlxuXHRcdFx0XHRcdFx0PFNWR0NvbXBvbmVudCB3aWR0aD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE4Ny4wODYgNzMuODYzXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQxLjk1NiwzOS42M2MtMi4wMjMtMC45MDMtNC4yNjUtMS4zNzMtNi42ODctMS40ODNsLTYuNjg4LDAuMzk4Yy0xLjgwNywwLjMyNS0zLjU0MiwwLjk3Ny01LjI3NywxLjk4OWMtMS45NTEsMS4xNTYtMy41NzgsMi42MDMtNC44NzksNC4zMzdjLTMuMzI1LDQuMTU2LTQuNTE5LDkuMDM2LTMuNjE0LDE0Ljc4M2MxLjAxMiw2LjA3Myw0LjE1NiwxMC4yMjksOS4zMjUsMTIuMzI3YzMuOTc3LDEuNjI2LDguMzg2LDEuOTUsMTMuMTIxLDAuOTAyYzQuNTE4LTAuOTM5LDguMDk3LTMuMTA4LDEwLjgwOC02LjUwNWMzLjE4MS00LjAxNCw0LjE5Mi04Ljk2NSwzLTE0LjgyMUMxNDkuOTA5LDQ1Ljc3NSwxNDYuODM2LDQxLjc5OSwxNDEuOTU2LDM5LjYzeiBNMTQxLjg0OSw2NS45MDljLTEuNTU1LDIuODktMy45MDMsNC42MjYtNy4xMjEsNS4yNDFjLTMuMDcyLDAuNTQxLTUuODE5LTAuNjUyLTguMjQxLTMuNTA4Yy0yLjI3Ny0yLjcxLTMuNjg4LTYuMjU0LTQuMDg1LTEwLjY5OGMtMC41NDItNC40ODMsMC04LjI3OCwxLjQ4MS0xMS4zODhjMS42MjctMy40MzQsNC4xMjEtNS4yNDEsNy4zNzUtNS41NjVjMy4zNjEtMC4yODgsNi4xNDUsMC43OTUsOC4zNSwzLjI1NGMyLjI0MSwyLjQ5MywzLjUwNiw2LjEwOSwzLjk0LDEwLjk4OEMxNDMuOTA4LDU5LjExMywxNDMuMzY3LDYyLjk0NSwxNDEuODQ5LDY1LjkwOXogTTQwLjU2NiwwLjM3NUg0LjMxMmMtMC43MjMsMC0xLjA4NSwwLjIxNi0xLjA4NSwwLjcyMmwwLjI5LDAuNTQzbDEuNDQ2LDAuMjg4TDguNDY4LDIuMTFsMy40MzQsMC40MzNjMi40NTgsMC41NDMsMy43MjMsMS45MTYsMy43MjMsNC4xNTd2NTcuMzI4Yy0wLjAzNiwxLjc3My0wLjIxNywzLjA3NC0wLjU0MiwzLjk0bC0wLjkwMywxLjI2N2MtMC40NywwLjU0MS0xLjQ0NiwwLjkzOS0yLjgxOSwxLjExOWwtOC44NTYsMC41NDNjLTEuMDEyLDAtMS41NTQsMC4yNTQtMS41NTQsMC43MjRjMCwwLjQzMywwLjM2MSwwLjY4NiwxLjEyMSwwLjY4Nmg0Ni4yMzFjNS42MDMsMCwxMC41OTEtMS4wNDgsMTUuMDM3LTMuMDcxYzQuMTU3LTEuOTg5LDcuNzcxLTQuNywxMC43MzUtOC4yMDVjMi43MTEtMy4zMjcsNC44MDgtNy4wNDksNi4zMjYtMTEuMjc5YzEuMzM3LTQuMDEyLDEuOTg4LTguMTY4LDEuOTg4LTEyLjQ2OWMwLTguMjQyLTEuOTg4LTE1LjM2Mi01Ljk2NC0yMS4zNjNDNjkuNDgzLDUuNTQzLDU3LjU1NSwwLjM3NSw0MC41NjYsMC4zNzV6IE02OC44MzMsNDYuMjhjLTEuMTkzLDUuNTMxLTMuMTQ1LDEwLjA0OS01Ljg1NiwxMy41OTFjLTEuNjI2LDIuMTY5LTMuMTA4LDMuODY4LTQuNTU0LDUuMDYyYy0xLjYyNiwxLjI2NS0zLjUwNiwyLjMxMi01LjQ5NCwzLjAzNWMtMS45ODgsMC42NTEtNC41MTksMS4xMjEtNy40ODMsMS40NDZsLTExLjA2LDAuMzk4aC00Ljc3MWwtMS40NDYtMC4yMTdjLTAuMjg5LTAuMTgyLTAuNDMzLTAuNjg4LTAuNDMzLTEuNDExVjQuNTMybDAuMjUyLTEuNDQ1YzAuMjUzLTAuNDM1LDAuNzk1LTAuNjE1LDEuNjI3LTAuNTQzaDcuMzM3YzExLjg5MywwLDIwLjQ5NSwzLjU0MywyNS43MzYsMTAuN2MyLjcxMSwzLjY4Nyw0LjYyNyw4LjAyNCw1Ljg5MiwxMi45NzZjMC45MDQsMy40MzUsMS4zMzcsNi42MTUsMS4zMzcsOS41NzlDNjkuOTE3LDM5LjE2LDY5LjU1Niw0Mi42NjcsNjguODMzLDQ2LjI4eiBNOTAuMzU3LDQ0LjgzNWwwLjk0My0wLjEwOGwyLjExMi0wLjU3OWwxLjg4LDAuMTgyYzAuNTQyLDAuMzYyLDAuODMxLDAuOTc3LDAuODMxLDEuNzcxdjIxLjAwMWwtMC40NywyLjYwM2MtMC4zMjYsMC43MjMtMS4xNTcsMS4xOTItMi41MywxLjM3MmwtMi41MywwLjA3NGMtMC43OTUsMC0xLjE1NywwLjE4LTEuMDg0LDAuNjE0YzAsMC4yODgsMC4yMTcsMC40NywwLjY1LDAuNDdoMTkuMjY2YzAuNDM1LDAsMC42ODctMC4xMSwwLjY4Ny0wLjQzNWMtMC4wNzItMC4zOTYtMC41MDYtMC41NzgtMS4zMzctMC41NzhjLTIuMzUsMC0zLjg2Ny0wLjMyNS00LjUxOS0wLjk3N2MtMC41NDItMC41NDEtMC44MzEtMS40NDYtMC44MzEtMi43MXYtMjYuNDZjMC0xLjMwMS0wLjE4MS0yLjAyMy0wLjU0Mi0yLjA5NWwtMS4wODUsMC4xMDdjLTAuNDM0LDAuMTgtMS40MSwwLjYxNS0yLjc4MiwxLjQxYy0yLjI0MiwxLjI2NC00Ljg4LDIuMjc3LTcuODgsMy4wNzFjLTEuMjY2LDAuMzYxLTEuODA4LDAuNzYtMS42MjcsMS4xOTNMOTAuMzU3LDQ0LjgzNXogTTE4Ni4xMjcsNDIuOTU1YzAuMDczLDEuMjY2LTAuMjg5LDIuMjQtMS4wODQsM2MtMC43MjMsMC42MTUtMS40NDUsMC43OTUtMi4wOTYsMC42MTVjLTAuNjE1LTAuMTA4LTEuMDg1LTAuMzYxLTEuNDEtMC43MjRsLTEuMDEzLTEuMjY0Yy0wLjc5NS0xLjE1OC0xLjU1NC0xLjUyLTIuNDU4LTEuMTkzYy0xLjA0OCwwLjI4OC0yLjEzMiwxLjA4My0zLjI1MywyLjM0OWMtMS43NzEsMS44NDMtMi45NjQsNC4wMTItMy42MTQsNi42MTR2MTUuMzY0YzAsMS4zNzIsMC40NywyLjM0OSwxLjQ0NSwyLjk2M2wyLjIwNSwwLjM5NmwyLjMxNCwwLjI1NGMwLjU0MiwwLjA3MywwLjc1OSwwLjE4MiwwLjc1OSwwLjQ3bC0wLjEwOCwwLjI1M2wtMC42MTUsMC4xODJIMTU3Ljg2Yy0wLjU3OCwwLTAuOTAyLTAuMTgyLTAuOTAyLTAuNDdsMC41NDEtMC40MzVsMy4yNTQtMC4yNTRjMS4yNjYtMC4yMTYsMi4wNi0wLjY0OSwyLjQ5NC0xLjMwMWwwLjU0Mi0xLjYyNlY0Ni40NjJsLTAuMzYxLTEuNTkxbC0wLjYxNS0wLjM2MmMtMC4xODEtMC4xOC0wLjQ3LTAuMjg4LTAuOTAyLTAuMzYxYy0wLjU0Mi0wLjAzNi0xLjE5NCwwLjA3My0xLjg4LDAuMzYxbC0xLjg0NCwwLjUwN2wtMS4wNDgtMC4yNTNjLTAuMTgxLTAuMjU0LTAuMTA5LTAuNDM0LDAuMTQ0LTAuNTQybDEuNTU1LTAuNjUxYzMuNTQyLTEuMDQ4LDYuMzk4LTIuMTMyLDguMzg2LTMuMjU0bDIuNDU4LTEuMzM1bDEuMDg1LDAuMDcxbDAuNDM0LDAuOTAydjcuOTU0YzIuNzExLTQuNDEsNC44OC03LjEyMiw2LjM2MS04LjAyNWMwLjkwNC0wLjU0MSwxLjc3MS0wLjk3NywyLjQyMi0xLjE1NmwxLjI2Ni0wLjEwOGMwLjc5NS0wLjA3MywxLjY5OSwwLjE4LDIuNzExLDAuODMyQzE4NS4zMzMsNDAuMjQ0LDE4Ni4wNTUsNDEuNDM4LDE4Ni4xMjcsNDIuOTU1eiBNOTUuOTQyLDI0LjA1MWMtMC45NzYtMC45MDUtMS40NDYtMS45ODktMS4zNzQtMy4yNTRjLTAuMDcyLTEuMzM4LDAuMzk4LTIuNDk0LDEuMzc0LTMuMzk4YzAuOTAzLTAuOTA0LDEuOTg4LTEuMzc0LDMuMzI1LTEuMzc0YzEuMjY2LDAsMi4zODYsMC40NywzLjI4OSwxLjM3NGMwLjkwNCwwLjkwNCwxLjQxLDIuMDYsMS40MSwzLjM5OGMwLDEuMjY1LTAuNTA2LDIuMzQ5LTEuNDEsMy4yNTRjLTAuOTAzLDAuOTAzLTIuMDIzLDEuMzczLTMuMjg5LDEuMzczQzk3LjkzMSwyNS40MjQsOTYuODQ2LDI0Ljk1NCw5NS45NDIsMjQuMDUxelwiLz5cblx0XHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0PE1lbnUgcmVmPSdtZW51JyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuYmVnaW5TbGlkZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1snYmVnaW4tc2xpZGUnXSlcblx0XHR0aGlzLmxvZ28gPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2xvZ28nXSlcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgZG9tKHRoaXMuYmVnaW5TbGlkZSkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24taW4nKSB9LCAxMDAwKVxuXHRcdHNldFRpbWVvdXQoKCk9PnsgZG9tKHRoaXMuYmVnaW5TbGlkZSkucmVtb3ZlQ2xhc3MoJ3RyYW5zaXRpb24taW4nKTsgZG9tKHRoaXMuYmVnaW5TbGlkZSkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24tb3V0Jyk7IH0sIDQwMDApXG5cdFx0Ly8gc2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmludHJvRmluaXNoZWQoKSB9LCA1MDAwKVxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5pbnRyb0ZpbmlzaGVkKCkgfSwgNTAwKVxuXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBpdGVtID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dGhpcy5yZWZzWydtZW51J10uaGlnaGxpZ2h0QnlJdGVtKGl0ZW0pXG5cdH1cblx0aW50cm9GaW5pc2hlZCgpIHtcblx0XHRkb20odGhpcy5iZWdpblNsaWRlKS5yZW1vdmUoKVxuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuSU5UUk9fRklOSVNIRUQsIHRoaXMuaW50cm9GaW5pc2hlZClcblx0XHRcblx0XHR0aGlzLnJlZnNbJ21lbnUnXS50cmFuc2l0aW9uSW4oKVxuXHRcdGRvbSh0aGlzLmxvZ28pLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJylcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRcblx0XHR0aGlzLnJlZnNbJ21lbnUnXS5yZXNpemUoKVxuXG5cdFx0dGhpcy5iZWdpblNsaWRlLnN0eWxlLndpZHRoID0gd2luZG93VyArICdweCdcblx0XHR0aGlzLmJlZ2luU2xpZGUuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMubW91c2VFbnRlciA9IHRoaXMubW91c2VFbnRlci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZUxlYXZlID0gdGhpcy5tb3VzZUxlYXZlLmJpbmQodGhpcylcblx0XHR0aGlzLmNsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHZhciBtZW51RGF0YSA9IEFwcFN0b3JlLm1lbnVDb250ZW50KClcblx0XHR2YXIgbWVudUl0ZW1zID0gbWVudURhdGEubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdHZhciBwYXRoVXJsID0gJyMnICsgaXRlbS51cmxcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGxpIGlkPXtpdGVtLmlkfSBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHQ8YSBocmVmPXtwYXRoVXJsfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF0aW4tbnVtXCI+e2l0ZW1bJ2xhdGluLW51bSddfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLm5hbWV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9J21lbnUnIGlkPSdtZW51Jz4gXG5cdFx0XHRcdHttZW51SXRlbXN9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ21lbnUnXSlcblx0XHRcblx0XHR0aGlzLml0ZW1zID0gW11cblx0XHR2YXIgYnRucyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCdsaScpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnRuID0gYnRuc1tpXVxuXHRcdFx0dmFyIHRpdGxlID0gZG9tKGJ0bikuc2VsZWN0KCcudGl0bGUnKVswXVxuXHRcdFx0dmFyIGNoYXJzID0gVXRpbHMuVHJhbmZvcm1BcnJheUZyb21NaWRkbGVBbmRPdXQobmV3IFNwbGl0VGV4dCh0aXRsZSwgeyB0eXBlOidjaGFycycgfSkuY2hhcnMpXG5cdFx0XHRcblx0XHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKVxuXHRcdFx0dGwuc3RhZ2dlckZyb20oY2hhcnMsIDEsIHsgb3BhY2l0eTowLCB5OjEwLCBzY2FsZVk6MC44LCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjAxLCAwKVxuXHRcdFx0dGwucGF1c2UoMClcblxuXHRcdFx0dmFyIHRsSG9tZSA9IG5ldyBUaW1lbGluZUxpdGUoKVxuXHRcdFx0dGxIb21lLnN0YWdnZXJUbyhjaGFycywgMSwgeyB5Oi0xMCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wMSwgMClcblx0XHRcdHRsSG9tZS5wYXVzZSgwKVxuXG5cdFx0XHRkb20oYnRuKS5vbignbW91c2VlbnRlcicsIHRoaXMubW91c2VFbnRlcilcblx0XHRcdGRvbShidG4pLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5tb3VzZUxlYXZlKVxuXHRcdFx0ZG9tKGJ0bikub24oJ2NsaWNrJywgdGhpcy5jbGljaylcblxuXHRcdFx0dGhpcy5pdGVtc1tpXSA9IHtcblx0XHRcdFx0ZWw6IGJ0bixcblx0XHRcdFx0aWQ6IGJ0bi5pZCxcblx0XHRcdFx0dGw6IHRsLFxuXHRcdFx0XHR0bEhvbWU6IHRsSG9tZSxcblx0XHRcdFx0aGlnaGxpZ2h0OiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRtb3VzZUVudGVyKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5SWQoZS5jdXJyZW50VGFyZ2V0LmlkKVxuXHRcdHZhciBjdXJyZW50UGFnZUlkID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpLmlkXG5cblx0XHRpZihjdXJyZW50UGFnZUlkICE9ICdob21lJykge1xuXHRcdFx0aWYoIWl0ZW0uaGlnaGxpZ2h0KSB7XG5cdFx0XHRcdGRvbShpdGVtLmVsKS5hZGRDbGFzcygnaG92ZXJlZCcpXG5cdFx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpXG5cdFx0XHRcdGl0ZW0udGwudGltZVNjYWxlKDEuNikucGxheSgwKVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0ZG9tKGl0ZW0uZWwpLmFkZENsYXNzKCdob3ZlcmVkLWhvbWUnKVxuXHRcdFx0aXRlbS50bEhvbWUudGltZVNjYWxlKDIpLnBsYXkoMClcblx0XHR9XG5cblx0fVxuXHRtb3VzZUxlYXZlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5SWQoZS5jdXJyZW50VGFyZ2V0LmlkKVxuXHRcdHZhciBjdXJyZW50UGFnZUlkID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpLmlkXG5cblx0XHRpZihjdXJyZW50UGFnZUlkICE9ICdob21lJykge1xuXHRcdFx0aWYoIWl0ZW0uaGlnaGxpZ2h0KSB7XG5cdFx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnaG92ZXJlZCcpXG5cdFx0XHRcdGRvbShpdGVtLmVsKS5hZGRDbGFzcygnZGlzYWJsZScpXG5cdFx0XHRcdGl0ZW0udGwudGltZVNjYWxlKDIpLnJldmVyc2UoKVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdob3ZlcmVkLWhvbWUnKVxuXHRcdFx0aXRlbS50bEhvbWUudGltZVNjYWxlKDMpLnJldmVyc2UoKVxuXHRcdH1cblx0fVxuXHRjbGljayhlKSB7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKGUuY3VycmVudFRhcmdldC5pZClcblx0XHRpdGVtLnRsLnRpbWVTY2FsZSgxLjYpLnJldmVyc2UoKVxuXHRcdGl0ZW0udGxIb21lLnRpbWVTY2FsZSgxLjYpLnJldmVyc2UoKVxuXHR9XG5cdGhpZ2hsaWdodEJ5SXRlbShpdGVtKSB7XG5cblx0XHQvLyBpZiBIb21lIHJlbW92ZSBhbGwgaGlnaGxpZ2h0cyBhbmQgcmV0dXJuXG5cdFx0aWYoaXRlbS5pZCA9PSAnaG9tZScpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYnRuID0gdGhpcy5pdGVtc1tpXVxuXHRcdFx0XHR0aGlzLmhpZ2hsaWdodFRvSG9tZVN0YXRlKGJ0bilcblx0XHRcdH07XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRpZihidG4uaWQgPT0gaXRlbS5pZCkgdGhpcy5hZGRIaWdobGlnaHQoYnRuKVxuXHRcdFx0ZWxzZSB0aGlzLnJlbW92ZUhpZ2hsaWdodChidG4pXG5cdFx0fTtcblx0fVxuXHRhZGRIaWdobGlnaHQoaXRlbSkge1xuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdGRvbShpdGVtLmVsKS5hZGRDbGFzcygnZW5hYmxlJylcblx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpXG5cdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQtaG9tZScpXG5cdFx0XHRpdGVtLmhpZ2hsaWdodCA9IHRydWVcblx0XHRcdGl0ZW0udGwudGltZVNjYWxlKDIpLnJldmVyc2UoKVxuXHRcdH0sIDEwMDApXG5cdH1cblx0cmVtb3ZlSGlnaGxpZ2h0KGl0ZW0pIHtcblx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0ZG9tKGl0ZW0uZWwpLmFkZENsYXNzKCdkaXNhYmxlJylcblx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQtaG9tZScpXG5cdFx0aXRlbS5oaWdobGlnaHQgPSBmYWxzZVxuXHRcdGl0ZW0udGwudGltZVNjYWxlKDIpLnJldmVyc2UoKVxuXHR9XG5cdGhpZ2hsaWdodFRvSG9tZVN0YXRlKGl0ZW0pIHtcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0aXRlbS50bC50aW1lU2NhbGUoMSkucGxheSgwKVxuXHRcdH0sIDEwMDApXG5cdFx0aXRlbS5oaWdobGlnaHQgPSBmYWxzZVxuXHR9XG5cdGdldEl0ZW1CeUlkKGlkKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdGlmKGl0ZW0uaWQgPT0gaWQpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdHRyYW5zaXRpb25JbigpIHtcblx0XHRkb20odGhpcy5wYXJlbnQpLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJylcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcGFyZW50U2l6ZSA9IHNpemUodGhpcy5wYXJlbnQpXG5cdFx0dmFyIHBhcmVudENzcyA9IHtcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKHBhcmVudFNpemVbMF0gPj4gMSkgKyAncHgnLFxuXHRcdFx0dG9wOiB3aW5kb3dIIC0gKHBhcmVudFNpemVbMV0pIC0gQXBwQ29uc3RhbnRzLk9WRVJBTExfTUFSR0lOICsgJ3B4J1xuXHRcdH1cblx0XHRkb20odGhpcy5wYXJlbnQpLnN0eWxlKHBhcmVudENzcylcblx0fVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUFhDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5BRERfUFhfQ0hJTEQsIHRoaXMuYWRkKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsIHRoaXMucmVtb3ZlKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNhbnZhcyBjbGFzc05hbWU9XCJjYW52YXMtaG9sZGVyXCI+PC9jYW52YXM+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBzdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0dmFyIGNhbnZhcyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcuY2FudmFzLWhvbGRlcicpWzBdXG5cdFx0dmFyIHJlbmRlcmVyID0gbmV3IFBJWEkuQ2FudmFzUmVuZGVyZXIoMCwgMCwgeyB2aWV3OmNhbnZhcyB9KVxuXHRcdHJlbmRlcmVyLmJhY2tncm91bmRDb2xvciA9IDB4RkZGRkZGXG5cblx0XHR0aGlzLnBpeGkgPSB7XG5cdFx0XHRjYW52YXM6IGNhbnZhcyxcblx0XHRcdHJlbmRlcmVyOiByZW5kZXJlcixcblx0XHRcdHN0YWdlOiBzdGFnZVxuXHRcdH1cblx0fVxuXHRhZGQoaXRlbSkge1xuXHRcdHRoaXMucGl4aS5zdGFnZS5hZGRDaGlsZChpdGVtLmNoaWxkKVxuXHR9XG5cdHJlbW92ZShpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLnJlbW92ZUNoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciBzY2FsZSA9IDFcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHRoaXMucGl4aS5jYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3dXICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0XHR0aGlzLnBpeGkucmVuZGVyZXIucmVzaXplKHdpbmRvd1cgKiBzY2FsZSwgd2luZG93SCAqIHNjYWxlKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnBpeGkucmVuZGVyZXIucmVuZGVyKHRoaXMucGl4aS5zdGFnZSlcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJ0Jhc2VQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBzY3JvbGx0b3AgZnJvbSAnc2ltcGxlLXNjcm9sbHRvcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5hZGRQWENoaWxkKHRoaXMuY29udGFpbmVyKSB9LCAwKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblx0XHR0aGlzLmVsZW1lbnRzSG9sZGVyID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5lbGVtZW50cy1ob2xkZXInKVswXVxuXHRcdHRoaXMuaW50cm9TbGlkZSA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcuaW50cm8tc2xpZGUnKVswXVxuXHRcdHRoaXMuZnJvbnRIb2xkZXIgPSBkb20odGhpcy5pbnRyb1NsaWRlKS5zZWxlY3QoJy5mcm9udC1ob2xkZXInKVswXVxuXHRcdFxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbkluKCkge1xuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHNjcm9sbHRvcCgwKVxuXHRcdH0sIDEwMDApXG5cdFx0c3VwZXIud2lsbFRyYW5zaXRpb25JbigpXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdC8vIHRyYW5zaXRpb24gSW5cblx0XHR0aGlzLnRsSW4uZnJvbVRvKHRoaXMuaW50cm9TbGlkZSwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgeyBvcGFjaXR5OjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsSW4udG8odGhpcy5pbnRyb1NsaWRlLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAzKVxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAgfSwgeyBvcGFjaXR5OjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMilcblx0XHR0aGlzLnRsSW4uZnJvbVRvKHRoaXMuY29udGFpbmVyLCAxLCB7IGFscGhhOjAgfSwgeyBhbHBoYToxLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDIpXG5cblx0XHQvLyB0cmFuc2l0aW9uIE91dFxuXHRcdHRoaXMudGxPdXQudG8odGhpcy5lbGVtZW50c0hvbGRlciwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblx0XHR0aGlzLnRsT3V0LnRvKHRoaXMuY29udGFpbmVyLCAxLCB7IGFscGhhOjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMClcblxuXHRcdHN1cGVyLnNldHVwQW5pbWF0aW9ucygpXG5cdH1cblx0Z2V0QmFzZVBhZ2VEb20oaHRtbCkge1xuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUuZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG5cdFx0dmFyIGlkID0gY29udGVudC5pZCArICctcGFnZSdcblxuXHRcdHZhciBmcm9udEhvbGRlcjtcblx0XHRpZihjb250ZW50LmlkID09ICdob21lJykge1xuXHRcdFx0ZnJvbnRIb2xkZXIgPSAoXG5cdFx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0XHQpXG5cdFx0fWVsc2V7XG5cdFx0XHRmcm9udEhvbGRlciA9IDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+e2NvbnRlbnQubmFtZX08L2Rpdj5cblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD17aWR9IHJlZj0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J3BhZ2Utd3JhcHBlcic+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbGVtZW50cy1ob2xkZXJcIj57aHRtbH08L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmcm9udC1ob2xkZXJcIj57ZnJvbnRIb2xkZXJ9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0dXBkYXRlKCkge1xuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHRpdGxlU2l6ZSA9IHNpemUodGhpcy5mcm9udEhvbGRlcilcblx0XHR0aGlzLmZyb250SG9sZGVyLnN0eWxlLmxlZnQgPSAod2luZG93VyA+PiAxKSAtICh0aXRsZVNpemVbMF0gPj4gMSkgKyAncHgnXG5cdFx0dGhpcy5mcm9udEhvbGRlci5zdHlsZS50b3AgPSAod2luZG93SCA+PiAxKSAtICh0aXRsZVNpemVbMV0gPj4gMSkgKyAncHgnXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFxuXHRcdEhlbHBlcnMucmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyKHRoaXMuY29udGFpbmVyKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLnJlbW92ZVBYQ2hpbGQodGhpcy5jb250YWluZXIpIH0sIDApXG5cblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsIHRoaXMucmVzaXplKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VQYWdlciBmcm9tICdCYXNlUGFnZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnSG9tZSdcbmltcG9ydCBJbnNwaXJhdGlvblNwYXJrIGZyb20gJ0luc3BpcmF0aW9uU3BhcmsnXG5pbXBvcnQgQXJjaGl0ZWN0dXJlIGZyb20gJ0FyY2hpdGVjdHVyZSdcbmltcG9ydCBRdWludGFlc3NlbmNlIGZyb20gJ1F1aW50YWVzc2VuY2UnXG5pbXBvcnQgQ3JlYXRpdml0eUlubm92YXRpb24gZnJvbSAnQ3JlYXRpdml0eUlubm92YXRpb24nXG5pbXBvcnQgU3R5bGUgZnJvbSAnU3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VzQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBhZ2VyIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cblx0ZGlkSGFzaGVyQ2hhbmdlKCkge1xuXHRcdHZhciBoYXNoID0gUm91dGVyLmdldE5ld0hhc2goKVxuXHRcdHZhciB0eXBlID0gdW5kZWZpbmVkXG5cblx0XHRzd2l0Y2goaGFzaC5wYXJlbnQpIHtcblx0XHRcdGNhc2UgJ2luc3BpcmF0aW9uLXNwYXJrJzpcblx0XHRcdFx0dHlwZSA9IEluc3BpcmF0aW9uU3Bhcmtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2FyY2hpdGVjdHVyZSc6XG5cdFx0XHRcdHR5cGUgPSBBcmNoaXRlY3R1cmVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3F1aW50YWVzc2VuY2UnOlxuXHRcdFx0XHR0eXBlID0gUXVpbnRhZXNzZW5jZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnY3JlYXRpdml0eS1pbm5vdmF0aW9uJzpcblx0XHRcdFx0dHlwZSA9IENyZWF0aXZpdHlJbm5vdmF0aW9uXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdzdHlsZSc6XG5cdFx0XHRcdHR5cGUgPSBTdHlsZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9IEhvbWVcblx0XHR9XG5cdFx0dGhpcy5zZXR1cE5ld0NvbXBvbmVudChoYXNoLnBhcmVudCwgdHlwZSlcblx0fVxufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgc2Nyb2xsdG9wIGZyb20gJ3NpbXBsZS1zY3JvbGx0b3AnXG5pbXBvcnQgc2l6ZSBmcm9tICdlbGVtZW50LXNpemUnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNoaXRlY3R1cmUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMucGFnZUhlaWdodCA9IDBcblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGdldE1lZGlhID0gKHNyYyk9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG5cdFx0XHRcdFx0PHZpZGVvIGxvb3A9J3RydWUnIHdpZHRoPScxMDAlJz5cblx0XHRcdFx0XHRcdDxzb3VyY2UgdHlwZT0ndmlkZW8vbXA0JyBzcmM9e3NyY30+PC9zb3VyY2U+XG5cdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIHZpZGVvcyA9IGNvbnRlbnQudmlkZW9zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHR2YXIgc2lkZSA9IFV0aWxzLklzRXZlbihpbmRleCkgPyAnbGVmdCcgOiAncmlnaHQnXG5cdFx0XHR2YXIgY2xhc3NlcyA9ICd2aWRlby1pdGVtIGNsZWFyLWZsb2F0ICcgKyBzaWRlXG5cdFx0XHR2YXIgc2NyZWVuc2hvdFBhdGggPSAnaW1hZ2UvdmlkZW8tc2NyZWVucy8nICsgaXRlbS5pbWduYW1lXG5cdFx0XHR2YXIgdmlkZW9QYXRoID0gJ3ZpZGVvL2FyY2hpdGVjdHVyZS8nICsgaXRlbS5maWxlbmFtZVxuXHRcdFx0dmFyIHNyY19tcDQgPSB2aWRlb1BhdGggKyAnLm1wNCdcblx0XHRcdHZhciBtZWRpYSA9IChpdGVtLmZpbGVuYW1lLmxlbmd0aCA8IDEpID8gJycgOiBnZXRNZWRpYShzcmNfbXA0KVxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdHttZWRpYX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDppdGVtLmRlc2NyaXB0aW9uIH0gfT48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fSlcblxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5zaWRlLXdyYXBwZXInPlxuXHRcdFx0XHQ8ZGl2IHJlZj0ndmlkZW9zLWNvbnRhaW5lcicgY2xhc3NOYW1lPVwidmlkZW9zLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHt2aWRlb3N9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lciA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sndmlkZW9zLWNvbnRhaW5lciddKVxuXG5cdCAgICB2YXIgdG90YWxGcmFtZXMgPSAyNjZcblx0ICAgIHZhciBiYWdJbWFnZXMgPSBIZWxwZXJzLmdldEZyYW1lSW1hZ2VzQXJyYXkodG90YWxGcmFtZXMsICdpbWFnZS9iYWctc2VxdWVuY2UvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXNcblx0ICAgIH1cblxuXHQgICAgdGhpcy52aWRlb0l0ZW1zID0gW11cblx0ICAgIHZhciBpdGVtcyA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcudmlkZW8taXRlbScpXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdCAgICBcdHZhciBpdGVtID0gaXRlbXNbaV1cblx0ICAgIFx0dmFyIHZpZGVvID0gZG9tKGl0ZW0pLnNlbGVjdCgndmlkZW8nKVswXVxuXHQgICAgXHR0aGlzLnZpZGVvSXRlbXNbaV0gPSB7XG4gICAgXHRcdFx0ZWw6IGl0ZW0sXG4gICAgXHRcdFx0dmlkZW86IHZpZGVvLFxuICAgIFx0XHRcdG1lZGlhRWw6IGRvbShpdGVtKS5zZWxlY3QoJy5tZWRpYScpWzBdLFxuICAgIFx0XHRcdHRpdGxlRWw6IGRvbShpdGVtKS5zZWxlY3QoJy50aXRsZScpWzBdLFxuICAgIFx0XHRcdGRlc2NyaXB0aW9uRWw6IGRvbShpdGVtKS5zZWxlY3QoJy5kZXNjcmlwdGlvbicpWzBdLFxuICAgIFx0XHRcdGlzUGxheWluZzogZmFsc2UsXG4gICAgXHRcdFx0aW5kZXg6IGlcbiAgICBcdFx0fVxuXHQgICAgfTtcblxuICBcdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGNoZWNrVmlkZW9zVmlld3BvcnRGb2N1cygpIHtcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHNjcm9sbHQgPSBzY3JvbGx0b3AoKVxuXHRcdHZhciBtYXJnaW4gPSB3aW5kb3dIICogMC4xXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZpZGVvSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy52aWRlb0l0ZW1zW2ldXG5cdFx0XHRpZihzY3JvbGx0ICsgd2luZG93SCA+IGl0ZW0udG9wICsgKCBtYXJnaW4gKiAyICkgJiYgc2Nyb2xsdCA8IGl0ZW0udG9wICsgaXRlbS5zaXplWzFdIC0gbWFyZ2luKSB7XG5cdFx0XHRcdGlmKGl0ZW0uaXNQbGF5aW5nICE9IHRydWUpIHtcblx0XHRcdFx0XHRpZihpdGVtLnZpZGVvICE9IHVuZGVmaW5lZCkgaXRlbS52aWRlby5wbGF5KClcblx0XHRcdFx0XHRpdGVtLnRsLnBsYXkoMClcblx0XHRcdFx0XHRpdGVtLmlzUGxheWluZyA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKGl0ZW0uaXNQbGF5aW5nICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0aWYoaXRlbS52aWRlbyAhPSB1bmRlZmluZWQpIGl0ZW0udmlkZW8ucGF1c2UoKVxuXHRcdFx0XHRcdGlmKGl0ZW0udmlkZW8gIT0gdW5kZWZpbmVkKSBpdGVtLnZpZGVvLmN1cnJlbnRUaW1lID0gMFxuXHRcdFx0XHRcdGl0ZW0udGwucmV2ZXJzZSgpXG5cdFx0XHRcdFx0aXRlbS5pc1BsYXlpbmcgPSBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHQgICAgXG5cdCAgICAvLyBnZXQgc2Nyb2xsdG9wIHBvc2l0aW9uXG5cdCAgICB0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSBzY3JvbGx0b3AoKVxuXG5cdCAgICAvLyB1cGRhdGUgbWMgY3VycmVudCBmcmFtZVxuXHQgICAgdmFyIGN1cnJlbnRGcmFtZSA9IE1hdGguZmxvb3IoICggdGhpcy5jdXJyZW50U2Nyb2xsUG9zIC8gdGhpcy5wYWdlSGVpZ2h0ICkgKiB0aGlzLmJnLnRvdGFsRnJhbWVzIClcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA+IHRoaXMuYmcudG90YWxGcmFtZXMpIGN1cnJlbnRGcmFtZSA9IHRoaXMuYmcudG90YWxGcmFtZXNcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA8IDApIGN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIHRoaXMuYmcubWMuZ290b0FuZFN0b3AoY3VycmVudEZyYW1lKVxuXG5cdCAgICB0aGlzLmNoZWNrVmlkZW9zVmlld3BvcnRGb2N1cygpXG5cblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHR0aGlzLnBhZ2VIZWlnaHQgPSAwXG5cdFx0XHR2YXIgc2Nyb2xsdCA9IHNjcm9sbHRvcCgpXG5cdFx0XHR2YXIgbWFyZ2luVG9wID0gMjQwXG5cdFx0XHR2YXIgbWFyZ2luQm90dG9tID0gMjQwXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9JdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0XHR2YXIgaXRlbVNpemUgPSBzaXplKGl0ZW0uZWwpXG5cdFx0XHRcdHZhciBoID0gaXRlbVNpemVbMV0gKyAobWFyZ2luVG9wICsgbWFyZ2luQm90dG9tKVxuXHRcdFx0XHRpdGVtLnNpemUgPSBpdGVtU2l6ZVxuXHRcdFx0XHRpdGVtLnRvcCA9IHRoaXMucGFnZUhlaWdodCArIG1hcmdpblRvcFxuXHRcdFx0XHRpdGVtLmVsLnN0eWxlLnRvcCA9ICh0aGlzLnBhZ2VIZWlnaHQgKyBtYXJnaW5Ub3ApICsgJ3B4J1xuXHRcdFx0XHRpZihkb20oaXRlbS5lbCkuaGFzQ2xhc3MoJ3JpZ2h0JykpIGl0ZW0uZWwuc3R5bGUubGVmdCA9IHRoaXMudmlkZW9zQ29udGFpbmVyLm9mZnNldFdpZHRoIC0gaXRlbVNpemVbMF0gKyAncHgnXG5cdFx0XHRcdGl0ZW0ueSA9IDBcblx0XHRcdFx0XG5cdFx0XHRcdGl0ZW0ucExpbmVzID0gbmV3IFNwbGl0VGV4dChpdGVtLmRlc2NyaXB0aW9uRWwsIHsgdHlwZTonbGluZXMnIH0pLmxpbmVzXG5cdFx0XHRcdGl0ZW0udGl0bGVDaGFycyA9IFV0aWxzLlRyYW5mb3JtQXJyYXlGcm9tTWlkZGxlQW5kT3V0KG5ldyBTcGxpdFRleHQoaXRlbS50aXRsZUVsLCB7IHR5bGU6J2NoYXJzJyB9KS5jaGFycylcblxuXHRcdFx0XHRpdGVtLnRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG5cdFx0XHRcdGl0ZW0udGwuc3RhZ2dlckZyb20oaXRlbS50aXRsZUNoYXJzLCAxLCB7IG9wYWNpdHk6MCwgeToyMCwgc2NhbGVZOjAuOCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wNSwgMC4zKVxuXHRcdFx0XHRpZihpdGVtLnZpZGVvICE9IHVuZGVmaW5lZCkgaXRlbS50bC5mcm9tKGl0ZW0udmlkZW8sIDEsIHsgb3BhY2l0eTowLCB5OjIwLCBzY2FsZVk6MiwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC41KVxuXHRcdFx0XHRpdGVtLnRsLnN0YWdnZXJGcm9tKGl0ZW0ucExpbmVzLCAxLCB7IG9wYWNpdHk6MCwgeToyMCwgc2NhbGVZOjAuOCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wNSwgMC44KVxuXHRcdFx0XHRpdGVtLnRsLnBhdXNlKDApXG5cblx0XHRcdFx0aXRlbS5pc1BsYXlpbmcgPSBmYWxzZVxuXG5cdFx0XHRcdHRoaXMucGFnZUhlaWdodCArPSBoXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy52aWRlb3NDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYWdlSGVpZ2h0ICsgJ3B4J1xuXHRcdFx0dGhpcy5wYWdlSGVpZ2h0IC09IHdpbmRvd0hcblxuXHRcdH0sIDApXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0XHR0aGlzLmJnLm1jLmRlc3Ryb3koKVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0aXRlbS50bC5jbGVhcigpXG5cdFx0fTtcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRpdml0eUlubm92YXRpb24gZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMudGltZSA9IDBcblx0XHR0aGlzLmRlYnVnTW9kZSA9IGZhbHNlXG5cdFx0dGhpcy5ib2RpZXMgPSBbXVxuXG5cdFx0dGhpcy5NID0ge1xuXHRcdFx0RW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuXHRcdCAgICBXb3JsZDogTWF0dGVyLldvcmxkLFxuXHRcdCAgICBCb2R5OiBNYXR0ZXIuQm9keSxcblx0XHQgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuXHRcdCAgICBDb21tb246IE1hdHRlci5Db21tb24sXG5cdFx0ICAgIENvbXBvc2l0ZXM6IE1hdHRlci5Db21wb3NpdGVzLFxuXHRcdCAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG5cdFx0ICAgIEV2ZW50czogTWF0dGVyLkV2ZW50cyxcblx0XHQgICAgTW91c2U6IE1hdHRlci5Nb3VzZSxcblx0XHQgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50XG5cdFx0fVxuXG5cdFx0dGhpcy5leHBsb3Npb24gPSB0aGlzLmV4cGxvc2lvbi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5vbkNvbGxpc2lvbiA9IHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdHZhciBlbCA9IHRoaXMuZGVidWdNb2RlID8gdGhpcy5wYXJlbnQgOiB1bmRlZmluZWRcblx0XHR2YXIgZW5naW5lID0gdGhpcy5lbmdpbmUgPSB0aGlzLk0uRW5naW5lLmNyZWF0ZShlbCwge1xuXHRcdFx0cmVuZGVyOiB7XG5cdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRzaG93QW5nbGVJbmRpY2F0b3I6IHRydWUsXG5cdFx0XHRcdFx0d2lyZWZyYW1lczogdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRlbmdpbmUud29ybGQuZ3Jhdml0eS54ID0gMFxuXHRcdGVuZ2luZS53b3JsZC5ncmF2aXR5LnkgPSAwXG5cblx0XHR2YXIgYm9keU9wdGlvbnMgPSB7XG5cdFx0ICAgIGZyaWN0aW9uQWlyOiAwLCBcblx0XHQgICAgZnJpY3Rpb246IDAsXG5cdFx0ICAgIHJlc3RpdHV0aW9uOiAwLjZcblx0XHR9XG5cblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHBhdHRlcm5QYXRoID0gJ2ltYWdlL3BhdHRlcm5zLydcblx0XHR2YXIgcGF0dGVyblVybHMgPSBbXG5cdFx0XHQnYnJvd24teC1wYXR0ZXJuLmpwZycsXG5cdFx0XHQncGF0dGVybi5qcGcnLFxuXHRcdFx0J2Jyb3duLXgtcGF0dGVybi5qcGcnLFxuXHRcdFx0J3BhdHRlcm4uanBnJyxcblx0XHRdXG5cdFx0dmFyIGNpcmNsZVJhZGl1cyA9IDYwXG5cblx0XHQvLyBBZGQgY2lyY2xlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2YXIgYyA9IHRoaXMuTS5Cb2RpZXMuY2lyY2xlKHdpbmRvd1cgPj4gMSwgd2luZG93SCA+PiAxLCBjaXJjbGVSYWRpdXMsIGJvZHlPcHRpb25zKVxuXHRcdFx0dGhpcy5NLldvcmxkLmFkZChlbmdpbmUud29ybGQsIGMpXG5cblx0XHRcdHZhciBjaXJjbGUgPSBIZWxwZXJzLmdldEdyYXZpdHlDaXJjbGUocGF0dGVyblBhdGggKyBwYXR0ZXJuVXJsc1tpXSwgY2lyY2xlUmFkaXVzKVxuXHRcdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlLmNvbnRhaW5lcilcblxuXHRcdFx0Y2lyY2xlLmJvZHkgPSBjXG5cblx0XHRcdHRoaXMuYm9kaWVzLnB1c2goY2lyY2xlKVxuXHRcdH1cblxuXHRcdHZhciByZWN0VyA9IDIwMFxuXHRcdHZhciByZWN0SCA9IDYwXG5cblx0XHQvLyBBZGQgcmVjdHNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dmFyIHIgPSB0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSh3aW5kb3dXID4+IDEsIHdpbmRvd0ggPj4gMSwgcmVjdFcsIHJlY3RILCBib2R5T3B0aW9ucylcblx0XHRcdHRoaXMuTS5Xb3JsZC5hZGQoZW5naW5lLndvcmxkLCByKVxuXG5cdFx0XHR2YXIgcmVjdCA9IEhlbHBlcnMuZ2V0R3Jhdml0eVJlY3QocGF0dGVyblBhdGggKyBwYXR0ZXJuVXJsc1tpXSwgcmVjdFcsIHJlY3RIKVxuXHRcdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQocmVjdC5jb250YWluZXIpXG5cblx0XHRcdHJlY3QuYm9keSA9IHJcblxuXHRcdFx0dGhpcy5ib2RpZXMucHVzaChyZWN0KVxuXHRcdH07XG5cblx0XHQvLyBBZGQgV2FsbHNcblx0XHR0aGlzLmFkZFdhbGxzKClcblxuXHRcdC8vIHJ1biB0aGUgZW5naW5lXG5cdFx0dGhpcy5NLkVuZ2luZS5ydW4oZW5naW5lKTtcblxuXHRcdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMuZXhwbG9zaW9uLCA1MDAwKVxuXG5cdFx0dGhpcy5leHBsb3Npb24oKVxuXG4gICAgICAgIHRoaXMuTS5FdmVudHMub24oZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB0aGlzLm9uQ29sbGlzaW9uKVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdG9uQ29sbGlzaW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBwYWlycyA9IGV2ZW50LnBhaXJzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFpci5ib2R5QSwgcGFpci5ib2R5QilcbiAgICAgICAgfVxuXHR9XG5cdGFkZFdhbGxzKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHNpemUgPSA1MFxuXHRcdHZhciB3YWxsVyA9IHdpbmRvd1dcblx0XHR2YXIgd2FsbEggPSB3aW5kb3dIXG5cdFx0dGhpcy5NLldvcmxkLmFkZCh0aGlzLmVuZ2luZS53b3JsZCwgW1xuXHRcdFx0dGhpcy5NLkJvZGllcy5yZWN0YW5nbGUoMCwgLXNpemUgLyAyLCB3YWxsVyAqIDIsIHNpemUsIHsgaXNTdGF0aWM6IHRydWUgfSksXG5cdFx0XHR0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSgtc2l6ZSAvIDIsIDAsIHNpemUsIHdhbGxIICogMiwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcblx0XHRcdHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKDAsIHdpbmRvd0ggKyBzaXplIC8gMiwgd2FsbFcgKiAyLCBzaXplLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdFx0dGhpcy5NLkJvZGllcy5yZWN0YW5nbGUod2luZG93VyArIHNpemUgLyAyLCAwLCBzaXplLCB3YWxsSCAqIDIsIHsgaXNTdGF0aWM6IHRydWUgfSksXG5cdFx0XSk7XG5cdH1cblx0ZXhwbG9zaW9uKCkge1xuXHQgICAgdmFyIGJvZGllcyA9IHRoaXMuTS5Db21wb3NpdGUuYWxsQm9kaWVzKHRoaXMuZW5naW5lLndvcmxkKTtcblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuXHQgICAgICAgIGlmICghYm9keS5pc1N0YXRpYykge1xuXHQgICAgICAgICAgICB2YXIgZm9yY2VNYWduaXR1ZGUgPSAwLjAwMSAqIGJvZHkubWFzcztcblxuXHQgICAgICAgICAgICAvLyBhcHBseSBleHRyYSBmb3JjZVxuXHQgICAgICAgICAgICB0aGlzLk0uQm9keS5hcHBseUZvcmNlKGJvZHksIHsgeDogMCwgeTogMCB9LCB7IFxuXHQgICAgICAgICAgICAgICAgeDogKGZvcmNlTWFnbml0dWRlICsgTWF0aC5yYW5kb20oKSAqIGZvcmNlTWFnbml0dWRlKSAqIHRoaXMuTS5Db21tb24uY2hvb3NlKFsxLCAtMV0pLCBcblx0ICAgICAgICAgICAgICAgIHk6IC1mb3JjZU1hZ25pdHVkZSArIE1hdGgucmFuZG9tKCkgKiAtZm9yY2VNYWduaXR1ZGVcblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgLy8gYWRkIGJvdW5kcyB0byB2ZWxvY2l0eVxuXHQgICAgICAgICAgICB2YXIgYm91bmQgPSAwLjVcblx0ICAgICAgICAgICAgaWYoTWF0dGVyLlZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSkgPiBib3VuZCkge1xuXHRcdFx0XHRcdHRoaXMuTS5Cb2R5LnNldFZlbG9jaXR5KGJvZHksIHsgeDogTWF0aC5taW4oYm91bmQsIGJvZHkudmVsb2NpdHkueCksIHk6IE1hdGgubWluKGJvdW5kLCBib2R5LnZlbG9jaXR5LngpIH0gKVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gYWRkIGJvdW5kcyB0byByb3RhdGlvblxuXHRcdFx0XHRpZihib2R5LmFuZ3VsYXJTcGVlZCA+IDAuMDIpIHtcblx0XHQgICAgICAgICAgICB0aGlzLk0uQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoYm9keSwgYm9keS5hbmd1bGFyVmVsb2NpdHkqLTAuMSk7XG5cdFx0XHRcdH1cblxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXHR1cGRhdGUoKSB7XG5cblx0XHR0aGlzLnRpbWUgKz0gMC4wMDVcblx0XHR0aGlzLmVuZ2luZS53b3JsZC5ncmF2aXR5LnkgPSBNYXRoLnNpbih0aGlzLnRpbWUpICogMC4wMVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJvZGllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJvZHkgPSB0aGlzLmJvZGllc1tpXVxuXHRcdFx0Ym9keS5jb250YWluZXIueCA9IGJvZHkuYm9keS5wb3NpdGlvbi54XG5cdFx0XHRib2R5LmNvbnRhaW5lci55ID0gYm9keS5ib2R5LnBvc2l0aW9uLnlcblx0XHRcdGJvZHkuY29udGFpbmVyLnJvdGF0aW9uID0gYm9keS5ib2R5LmFuZ2xlXG5cdFx0fTtcblxuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHRpZih0aGlzLmRlYnVnTW9kZSkge1xuXHRcdFx0dmFyIGNhbnZhcyA9IHRoaXMuZW5naW5lLnJlbmRlci5jYW52YXNcblx0XHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvd1dcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3dIXG5cdFx0fVxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdFx0dGhpcy5NLkV2ZW50cy5vZmYodGhpcy5lbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHRoaXMub25Db2xsaXNpb24pXG5cdFx0dGhpcy5NLkVuZ2luZS5jbGVhcih0aGlzLmVuZ2luZSlcblx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcblx0XHR0aGlzLnB4VmlkZW8gPSBIZWxwZXJzLmdldFBYVmlkZW8oJ3ZpZGVvL1RyaXB0eWNoIC0gMi5tcDQnLCAxOTIwLCAxMDgwKVxuXHRcdHRoaXMucHhWaWRlby5hbmNob3IueCA9IHRoaXMucHhWaWRlby5hbmNob3IueSA9IDAuNVxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMucHhWaWRlbylcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93LmhcblxuXHRcdHNldFRpbWVvdXQoKCk9PntcblxuXHRcdFx0dmFyIHZpZGVvVmlld3BvcnQgPSBbIHdpbmRvd1cgKiAwLjgsIHdpbmRvd0ggKiAwLjggXVxuXHRcdFx0dmFyIHJlc2l6ZVZhbHMgPSBVdGlscy5SZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHZpZGVvVmlld3BvcnRbMF0sIHZpZGVvVmlld3BvcnRbMV0sIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfVywgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9IKVxuXG5cdFx0XHR0aGlzLnB4VmlkZW8ueCA9IHdpbmRvd1cgPj4gMVxuXHRcdFx0dGhpcy5weFZpZGVvLnkgPSAoIHdpbmRvd0ggPj4gMSApIC0gKCB3aW5kb3dIICogMC4wMSApXG5cdFx0XHR0aGlzLnB4VmlkZW8uc2NhbGUueCA9IHRoaXMucHhWaWRlby5zY2FsZS55ID0gcmVzaXplVmFscy5zY2FsZVxuXG5cdFx0fSwgMTAwMClcblxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMucHhWaWRlbylcblx0XHRVdGlscy5EZXN0cm95VmlkZW9UZXh0dXJlKHRoaXMucHhWaWRlby50ZXh0dXJlKVxuXHRcdHRoaXMucHhWaWRlby50ZXh0dXJlLmRlc3Ryb3koKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZGVzdHJveSgpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BpcmF0aW9uU3BhcmsgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRhbmltYXRlKCkge1xuXHRcdHN1cGVyLmFuaW1hdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aW50YWVzc2VuY2UgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMubW91c2VNb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGFnZU1vdXNlT3V0ID0gdGhpcy5zdGFnZU1vdXNlT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLm1vdXNlID0geyB4OjAsIHk6MCB9XG5cdFx0dGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gMFxuXHRcdHRoaXMuZHJhZ1ZhcnMgPSB7XG5cdFx0XHRzdGFydFBvczogMCxcblx0XHRcdGZvcmNlOiAwLjEsXG5cdFx0XHRkaXJlY3Rpb246IDEsXG5cdFx0XHRhY3RpdmU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBodG1sID0gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKGh0bWwpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydwYWdlLXdyYXBwZXInXSlcblxuXHRcdHZhciB0b3RhbEZyYW1lcyA9IDI2NlxuXHQgICAgdmFyIGJhZ0ltYWdlcyA9IEhlbHBlcnMuZ2V0RnJhbWVJbWFnZXNBcnJheSh0b3RhbEZyYW1lcywgJ2ltYWdlL3RocmVlc2l4dHkvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXMsXG5cdCAgICBcdGN1cnJlbnRGcmFtZTogMFxuXHQgICAgfVxuXG5cdCAgICBkb20odGhpcy5wYXJlbnQpLm9uKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bilcblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApXG5cdCAgICBkb20oZG9jdW1lbnQpLm9uKCdtb3VzZW91dCcsIHRoaXMuc3RhZ2VNb3VzZU91dClcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRtb3VzZURvd24oZSkge1xuXHRcdGRvbSh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0XHR0aGlzLmRyYWdWYXJzLmFjdGl2ZSA9IHRydWVcblx0XHR0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zID0gZS5jbGllbnRYXG5cdH1cblx0bW91c2VVcCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcmFnKClcblx0fVxuXHRzdGFnZU1vdXNlT3V0KGUpIHtcblx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuICAgICAgICBpZiAoIWZyb20gfHwgZnJvbS5ub2RlTmFtZSA9PSBcIkhUTUxcIikge1xuXHRcdFx0dGhpcy5kaXNhYmxlRHJhZygpXG4gICAgICAgIH1cblx0fVxuXHRtb3VzZU1vdmUoZSkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uID0gKCB0aGlzLm1vdXNlLnggPiB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zICkgPyAxIDogLTFcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm1vdXNlLnggLSB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zKSAvIHdpbmRvd1dcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDggKiB0aGlzLmRyYWdWYXJzLmRpcmVjdGlvbikgKiBNYXRoLm1pbihkaXN0YW5jZSwgMTAwKVxuXHR9XG5cdGRpc2FibGVEcmFnKCkge1xuXHRcdGRvbSh3aW5kb3cpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpXG5cdFx0dGhpcy5kcmFnVmFycy5hY3RpdmUgPSBmYWxzZVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cblx0XHR0aGlzLmRyYWdWYXJzLmZvcmNlICs9ICgwLjAwMDAwMSAtIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpICogMC40XG5cdCAgICBcdFxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBuZXdGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5iZy5jdXJyZW50RnJhbWUgKyB0aGlzLmRyYWdWYXJzLmZvcmNlKVxuXHQgICAgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSBuZXdGcmFtZVxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIGlmKHRoaXMuYmcuY3VycmVudEZyYW1lIDwgMCkgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKHRoaXMuYmcuY3VycmVudEZyYW1lKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0XHR0aGlzLmJnLm1jLmRlc3Ryb3koKVxuXHRcdGRvbSh0aGlzLnBhcmVudCkub2ZmKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bilcblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub2ZmKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKVxuXHQgICAgZG9tKGRvY3VtZW50KS5vZmYoJ21vdXNlb3V0JywgdGhpcy5zdGFnZU1vdXNlT3V0KVxuXHQgICAgZG9tKHdpbmRvdykub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlbW92ZVNwcml0ZSA9IHRoaXMucmVtb3ZlU3ByaXRlLmJpbmQodGhpcylcblxuXHRcdHRoaXMudGV4dHVyZXMgPSBbXVxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLmFjdGl2ZVNwcml0ZXMgPSBbXVxuXHRcdHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUgPSB0cnVlXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KSBcdFxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMjY2XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvYmFnLXR1cm4tbGlnaHQvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXMsXG5cdCAgICBcdGN1cnJlbnRGcmFtZTogMFxuXHQgICAgfVxuXHQgICAgdGhpcy5iZy5tYy5wbGF5KClcblxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmltYWdlc0NvbnRhaW5lcilcblxuXHRcdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucmVtb3ZlU3ByaXRlLCA3NSlcblx0XHRkb20od2luZG93KS5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXHRcdHRoaXMuY291bnRlciA9IDBcblxuXHRcdHRoaXMubG9hZEltYWdlcygpXG5cblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0bG9hZEltYWdlcygpIHtcblx0XHR2YXIgcGFnZUNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIGltYWdlU3JjcyA9IHBhZ2VDb250ZW50LmltYWdlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VTcmNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZmlsZW5hbWUgPSBpbWFnZVNyY3NbaV1cblx0XHRcdHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnaW1hZ2Uvc3R5bGUtaW1hZ2VzLycgKyBmaWxlbmFtZSk7XG5cdFx0XHR0aGlzLnRleHR1cmVzLnB1c2godGV4dHVyZSlcblx0XHR9O1xuXHR9XG5cdGFkZFNwcml0ZSgpIHtcblx0XHR2YXIgcmFuZG9tTnVtID0gVXRpbHMuUmFuZCgwLCB0aGlzLnRleHR1cmVzLmxlbmd0aC0xLCAwKVxuXHRcdHZhciB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlc1tyYW5kb21OdW1dXG5cdFx0aWYodGV4dHVyZSA9PSB1bmRlZmluZWQpIHJldHVyblxuXHRcdHZhciBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSlcblx0XHR2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgc2hhcGUgPSBuZXcgUElYSS5HcmFwaGljcygpXG5cdFx0dmFyIHNpemUgPSAyNVxuXHRcdHNoYXBlLmxpbmVTdHlsZSgxLCAweDAwMDBmZiwgMSlcblx0XHRzaGFwZS5kcmF3UmVjdCgtc2l6ZS8yLCAtc2l6ZS8yLCBzaXplLCBzaXplKVxuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpXG5cdFx0Y29udGFpbmVyLmFkZENoaWxkKHNoYXBlKVxuXHRcdHNwcml0ZS5hbmNob3IueCA9IDAuNVxuXHRcdHNwcml0ZS5hbmNob3IueSA9IDAuNVxuXHRcdHNwcml0ZS5ibGVuZE1vZGUgPSBQSVhJLkJMRU5EX01PREVTLk1VTFRJUExZXG5cdFx0Ly8gc3ByaXRlLmJsZW5kTW9kZSA9IFBJWEkuQkxFTkRfTU9ERVMuRElGRkVSRU5DRVxuXHRcdGNvbnRhaW5lci5wb3NpdGlvbi54ID0gdGhpcy5tb3VzZS54XG5cdFx0Y29udGFpbmVyLnBvc2l0aW9uLnkgPSB0aGlzLm1vdXNlLnlcblx0XHR0aGlzLmFjdGl2ZVNwcml0ZXMucHVzaCh7XG5cdFx0XHRzcHJpdGU6IHNwcml0ZSxcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyXG5cdFx0fSlcblx0XHR0aGlzLmltYWdlc0NvbnRhaW5lci5hZGRDaGlsZChjb250YWluZXIpXG5cdH1cblx0cmVtb3ZlU3ByaXRlKCkge1xuXHRcdGlmKHRoaXMuYWN0aXZlU3ByaXRlcy5sZW5ndGggPD0gMSkgcmV0dXJuXG5cdFx0dmFyIHNwcml0ZVRvUmVtb3ZlID0gdGhpcy5hY3RpdmVTcHJpdGVzLnNoaWZ0KClcblx0XHR0aGlzLmltYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChzcHJpdGVUb1JlbW92ZS5jb250YWluZXIpXG5cdFx0c3ByaXRlVG9SZW1vdmUuY29udGFpbmVyLmRlc3Ryb3koKVxuXHRcdHNwcml0ZVRvUmVtb3ZlLnNwcml0ZS5kZXN0cm95KClcblx0fVxuXHRvbk1vdXNlTW92ZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdGlmKGUuY2xpZW50WSA+IHdpbmRvd0ggKiAwLjgpIHJldHVybiBcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblx0XHRpZih0aGlzLmFkZFNwcml0ZUlzQWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFkZFNwcml0ZUlzQWN0aXZlID0gZmFsc2Vcblx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0dGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSA9IHRydWVcblx0XHRcdFx0dGhpcy5hZGRTcHJpdGUoKVxuXHRcdFx0fSwgNjApXG5cdFx0fVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWN0aXZlU3ByaXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFjdGl2ZSA9IHRoaXMuYWN0aXZlU3ByaXRlc1tpXVxuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGFjdGl2ZS5jb250YWluZXJcblx0XHRcdGNvbnRhaW5lci5wb3NpdGlvbi55IC09IDFcblx0XHR9O1xuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHJlc2l6ZVZhbHMgPSBVdGlscy5SZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfVywgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9IKVxuXG5cdFx0dGhpcy5iZy5tYy54ID0gd2luZG93VyA+PiAxXG5cdFx0dGhpcy5iZy5tYy55ID0gd2luZG93SCA+PiAxXG5cdFx0dGhpcy5iZy5tYy5zY2FsZS54ID0gdGhpcy5iZy5tYy5zY2FsZS55ID0gcmVzaXplVmFscy5zY2FsZVxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdFx0SGVscGVycy5yZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXIodGhpcy5pbWFnZXNDb250YWluZXIpXG5cdFx0dGhpcy5iZy5tYy5kZXN0cm95KClcblx0XHRkb20od2luZG93KS5vZmYoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSlcblx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcblx0fVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFdJTkRPV19SRVNJWkU6ICdXSU5ET1dfUkVTSVpFJyxcblx0Q0hBTkdFX0FNQklFTlQ6ICdDSEFOR0VfQU1CSUVOVCcsXG5cdElOVFJPX0ZJTklTSEVEOiAnSU5UUk9fRklOSVNIRUQnLFxuXG5cdExBTkRTQ0FQRTogJ0xBTkRTQ0FQRScsXG5cdFBPUlRSQUlUOiAnUE9SVFJBSVQnLFxuXG5cdE1FRElBX0dMT0JBTF9XOiAxOTIwLFxuXHRNRURJQV9HTE9CQUxfSDogMTA4MCxcblx0XG5cdEFERF9QWF9DSElMRDogJ0FERF9QWF9DSElMRCcsXG5cdFJFTU9WRV9QWF9DSElMRDogJ1JFTU9WRV9QWF9DSElMRCcsXG5cdFxuXHRPVkVSQUxMX01BUkdJTjogNDAsXG5cblx0TUlOX01JRERMRV9XOiA5NjAsXG5cdE1RX1hTTUFMTDogMzIwLFxuXHRNUV9TTUFMTDogNDgwLFxuXHRNUV9NRURJVU06IDc2OCxcblx0TVFfTEFSR0U6IDEwMjQsXG5cdE1RX1hMQVJHRTogMTI4MCxcblx0TVFfWFhMQVJHRTogMTY4MCxcbn0iLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbnZhciBBcHBEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVWaWV3QWN0aW9uOiBmdW5jdGlvbihhY3Rpb24pIHtcblx0XHR0aGlzLmRpc3BhdGNoKHtcblx0XHRcdHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcblx0XHRcdGFjdGlvbjogYWN0aW9uXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEaXNwYXRjaGVyIiwidmFyIEhlbHBlcnMgPSB7XG5cbiAgICBnZXRQWFZpZGVvOiBmdW5jdGlvbih1cmwsIHdpZHRoLCBoZWlnaHQsIHZhcnMpIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbVZpZGVvKHVybClcbiAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2Uuc2V0QXR0cmlidXRlKFwibG9vcFwiLCB0cnVlKVxuICAgICAgICB2YXIgdmlkZW9TcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSlcbiAgICAgICAgdmlkZW9TcHJpdGUud2lkdGggPSB3aWR0aFxuICAgICAgICB2aWRlb1Nwcml0ZS5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgcmV0dXJuIHZpZGVvU3ByaXRlXG4gICAgfSxcblxuICAgIHJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcjogZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRGcmFtZUltYWdlc0FycmF5OiBmdW5jdGlvbihmcmFtZXMsIGJhc2V1cmwsIGV4dCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBmcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHVybCA9IGJhc2V1cmwgKyBpICsgJy4nICsgZXh0XG4gICAgICAgICAgICBhcnJheVtpXSA9IHVybFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICB9LCBcblxuICAgIGdldEdyYXZpdHlDaXJjbGU6IGZ1bmN0aW9uKHVybCwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuICAgICAgICBcbiAgICAgICAgdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UodXJsKVxuICAgICAgICBzcHJpdGUuYW5jaG9yLnggPSBzcHJpdGUuYW5jaG9yLnkgPSAwLjVcblxuICAgICAgICB2YXIgbWFzayA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAgICAgbWFzay5iZWdpbkZpbGwoMHgwMDAwMDAsIDEpXG4gICAgICAgIG1hc2suZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMpXG4gICAgICAgIG1hc2suZW5kRmlsbCgpXG5cbiAgICAgICAgc3ByaXRlLm1hc2sgPSBtYXNrXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKVxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQobWFzaylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICBzcHJpdGU6IHNwcml0ZSxcbiAgICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfVxuICAgIH0sIFxuXG4gICAgZ2V0R3Jhdml0eVJlY3Q6IGZ1bmN0aW9uKHVybCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuICAgICAgICBcbiAgICAgICAgdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UodXJsKVxuICAgICAgICBzcHJpdGUuYW5jaG9yLnggPSBzcHJpdGUuYW5jaG9yLnkgPSAwLjVcblxuICAgICAgICB2YXIgbWFzayA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAgICAgbWFzay5iZWdpbkZpbGwoMHgwMDAwMDAsIDEpXG4gICAgICAgIG1hc2suZHJhd1JlY3QoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIG1hc2suZW5kRmlsbCgpXG5cbiAgICAgICAgc3ByaXRlLm1hc2sgPSBtYXNrXG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKVxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQobWFzaylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICBzcHJpdGU6IHNwcml0ZSxcbiAgICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVscGVycyIsIlxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuTm9kZUxpc3QucHJvdG90eXBlLnJlbW92ZSA9IEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmKHRoaXNbaV0gJiYgdGhpc1tpXS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzW2ldLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuICAgIFx0XG5jbGFzcyBHbG9iYWxFdmVudHMge1xuXHRpbml0KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSlcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0QXBwQWN0aW9ucy53aW5kb3dSZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxFdmVudHNcbiIsImltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUHJlbG9hZGVyICB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKClcblx0XHR0aGlzLnF1ZXVlLm9uKFwiY29tcGxldGVcIiwgdGhpcy5vbk1hbmlmZXN0TG9hZENvbXBsZXRlZCwgdGhpcylcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjayA9IHVuZGVmaW5lZFxuXHRcdHRoaXMuYWxsTWFuaWZlc3RzID0gW11cblx0fVxuXHRsb2FkKG1hbmlmZXN0LCBvbkxvYWRlZCkge1xuXG5cdFx0aWYodGhpcy5hbGxNYW5pZmVzdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbE1hbmlmZXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgbSA9IHRoaXMuYWxsTWFuaWZlc3RzW2ldXG5cdFx0XHRcdGlmKG0ubGVuZ3RoID09IG1hbmlmZXN0Lmxlbmd0aCAmJiBtWzBdLmlkID09IG1hbmlmZXN0WzBdLmlkICYmIG1bbS5sZW5ndGgtMV0uaWQgPT0gbWFuaWZlc3RbbWFuaWZlc3QubGVuZ3RoLTFdLmlkKSB7XG5cdFx0XHRcdFx0b25Mb2FkZWQoKVx0XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuYWxsTWFuaWZlc3RzLnB1c2gobWFuaWZlc3QpXG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2sgPSBvbkxvYWRlZFxuICAgICAgICB0aGlzLnF1ZXVlLmxvYWRNYW5pZmVzdChtYW5pZmVzdClcblx0fVxuXHRvbk1hbmlmZXN0TG9hZENvbXBsZXRlZCgpIHtcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjaygpXG5cdH1cblx0Z2V0Q29udGVudEJ5SWQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5nZXRSZXN1bHQoaWQpXG5cdH1cblx0Z2V0SW1hZ2VVUkwoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb250ZW50QnlJZChpZCkuZ2V0QXR0cmlidXRlKFwic3JjXCIpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyXG4iLCJpbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcidcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBSb3V0ZXIge1xuXHRpbml0KCkge1xuXHRcdHRoaXMucm91dGluZyA9IEFwcFN0b3JlLkRhdGEucm91dGluZ1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGhhc2hlci5uZXdIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLm9sZEhhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIuaW5pdGlhbGl6ZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdGhhc2hlci5jaGFuZ2VkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLl9zZXR1cENyb3Nzcm9hZHMoKVxuXHR9XG5cdGJlZ2luUm91dGluZygpIHtcblx0XHRoYXNoZXIuaW5pdCgpXG5cdH1cblx0X3NldHVwQ3Jvc3Nyb2FkcygpIHtcblx0XHR2YXIgYmFzaWNTZWN0aW9uID0gY3Jvc3Nyb2Fkcy5hZGRSb3V0ZSgne3BhZ2V9JywgdGhpcy5fb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIuYmluZCh0aGlzKSwgMylcblx0XHRiYXNpY1NlY3Rpb24ucnVsZXMgPSB7XG5cdCAgICAgICAgcGFnZSA6IFsnICcsICd3b3JrLW9mLWFydCcsICd3b3JrcycsICdjb250YWN0J10gLy92YWxpZCBzZWN0aW9uc1xuXHQgICAgfVxuXHR9XG5cdF9vbkZpcnN0RGVncmVlVVJMSGFuZGxlcihwYWdlSWQpIHtcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZShwYWdlSWQpXG5cdH1cblx0X29uRGVmYXVsdFVSTEhhbmRsZXIoKSB7XG5cdFx0Ly8gdGhpcy5fc2VuZFRvRGVmYXVsdCgpXG5cdFx0dGhpcy5fYXNzaWduUm91dGUoJycpXG5cdH1cblx0X2Fzc2lnblJvdXRlKGlkKSB7XG5cdFx0dmFyIGhhc2ggPSBoYXNoZXIuZ2V0SGFzaCgpXG5cdFx0dmFyIHBhcnRzID0gdGhpcy5fZ2V0VVJMUGFydHMoaGFzaClcblx0XHR0aGlzLl91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcnRzWzBdLCBpZClcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gdHJ1ZVxuXHR9XG5cdF9nZXRVUkxQYXJ0cyh1cmwpIHtcblx0XHR2YXIgaGFzaCA9IHVybFxuXHRcdHJldHVybiBoYXNoLnNwbGl0KCcvJylcblx0fVxuXHRfdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJlbnQsIHRhcmdldElkKSB7XG5cdFx0aGFzaGVyLm9sZEhhc2ggPSBoYXNoZXIubmV3SGFzaFxuXHRcdGhhc2hlci5uZXdIYXNoID0ge1xuXHRcdFx0aGFzaDogaGFzaCxcblx0XHRcdHBhcnRzOiBwYXJ0cyxcblx0XHRcdHBhcmVudDogcGFyZW50LFxuXHRcdFx0dGFyZ2V0SWQ6IHRhcmdldElkXG5cdFx0fVxuXHRcdEFwcEFjdGlvbnMucGFnZUhhc2hlckNoYW5nZWQoKVxuXHR9XG5cdF9kaWRIYXNoZXJDaGFuZ2UobmV3SGFzaCwgb2xkSGFzaCkge1xuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSBmYWxzZVxuXHRcdGNyb3Nzcm9hZHMucGFyc2UobmV3SGFzaClcblx0XHRpZih0aGlzLm5ld0hhc2hGb3VuZGVkKSByZXR1cm5cblx0XHQvLyBJZiBVUkwgZG9uJ3QgbWF0Y2ggYSBwYXR0ZXJuLCBzZW5kIHRvIGRlZmF1bHRcblx0XHR0aGlzLl9vbkRlZmF1bHRVUkxIYW5kbGVyKClcblx0fVxuXHRfc2VuZFRvRGVmYXVsdCgpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChBcHBTdG9yZS5kZWZhdWx0Um91dGUoKSlcblx0fVxuXHRzdGF0aWMgZ2V0QmFzZVVSTCgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuVVJMLnNwbGl0KFwiI1wiKVswXVxuXHR9XG5cdHN0YXRpYyBnZXRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIuZ2V0SGFzaCgpXG5cdH1cblx0c3RhdGljIGdldFJvdXRlcygpIHtcblx0XHRyZXR1cm4gQXBwU3RvcmUuRGF0YS5yb3V0aW5nXG5cdH1cblx0c3RhdGljIGdldE5ld0hhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5uZXdIYXNoXG5cdH1cblx0c3RhdGljIGdldE9sZEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5vbGRIYXNoXG5cdH1cblx0c3RhdGljIHNldEhhc2goaGFzaCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKGhhc2gpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyXG4iLCJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcblxuZnVuY3Rpb24gX3BhZ2VSb3V0ZUlkQ2hhbmdlZChpZCkge1xufVxuZnVuY3Rpb24gX2dldFBhZ2VDb250ZW50KCkge1xuICAgIHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuICAgIHZhciBoYXNoID0gaGFzaE9iai5oYXNoLmxlbmd0aCA8IDEgPyAnLycgOiBoYXNoT2JqLmhhc2hcbiAgICB2YXIgY29udGVudCA9IEFwcFN0b3JlLkRhdGEucm91dGluZ1toYXNoXVxuICAgIHJldHVybiBjb250ZW50XG59XG5mdW5jdGlvbiBfZ2V0TWVudUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGEubWVudVxufVxuZnVuY3Rpb24gX2dldE1lbnVJdGVtQnlJZChpZCkge1xuXG4gICAgdmFyIG1lbnVJdGVtcyA9IEFwcFN0b3JlLkRhdGEubWVudVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbnVJdGVtc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfVxuICAgIH07XG5cbn1cbmZ1bmN0aW9uIF9nZXRDdXJyZW50UGFnZU1lbnVJdGVtKCkge1xuXG4gICAgdmFyIGhhc2hPYmogPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG4gICAgdmFyIGlkID0gaGFzaE9iai5oYXNoID09ICcnID8gJ2hvbWUnIDogaGFzaE9iai5oYXNoXG5cbiAgICB2YXIgbWVudUl0ZW1zID0gQXBwU3RvcmUuRGF0YS5tZW51XG4gICAgdmFyIGl0ZW07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobWVudUl0ZW1zW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICBpdGVtID0gbWVudUl0ZW1zW2ldXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoaXRlbSA9PSB1bmRlZmluZWQpID8geyBpZDogJ2hvbWUnIH0gOiBpdGVtXG59XG5mdW5jdGlvbiBfZ2V0QXBwRGF0YSgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YVxufVxuZnVuY3Rpb24gX2dldERlZmF1bHRSb3V0ZSgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YVsnZGVmYXVsdC1yb3V0ZSddXG59XG5mdW5jdGlvbiBfZ2V0R2xvYmFsQ29udGVudCgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YS5jb250ZW50XG59XG5mdW5jdGlvbiBfd2luZG93V2lkdGhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdzogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGg6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH1cbn1cblxudmFyIEFwcFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIyLnByb3RvdHlwZSwge1xuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKHR5cGUsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy5lbWl0KHR5cGUsIGl0ZW0pXG4gICAgfSxcbiAgICBwYWdlQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0UGFnZUNvbnRlbnQoKVxuICAgIH0sXG4gICAgbWVudUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldE1lbnVDb250ZW50KClcbiAgICB9LFxuICAgIGdldEN1cnJlbnRQYWdlTWVudUl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEN1cnJlbnRQYWdlTWVudUl0ZW0oKVxuICAgIH0sXG4gICAgZ2V0TWVudUl0ZW1CeUlkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gX2dldE1lbnVJdGVtQnlJZChpZClcbiAgICB9LFxuICAgIGFwcERhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEFwcERhdGEoKVxuICAgIH0sXG4gICAgZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXREZWZhdWx0Um91dGUoKVxuICAgIH0sXG4gICAgZ2xvYmFsQ29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0R2xvYmFsQ29udGVudCgpXG4gICAgfSxcbiAgICBXaW5kb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpbmRvd1dpZHRoSGVpZ2h0KClcbiAgICB9LFxuICAgIE9yaWVudGF0aW9uOiBBcHBDb25zdGFudHMuTEFORFNDQVBFLFxuICAgIFBhcmVudDogdW5kZWZpbmVkLFxuICAgIGRpc3BhdGNoZXJJbmRleDogQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uXG4gICAgICAgIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRDpcbiAgICAgICAgICAgICAgICBfcGFnZVJvdXRlSWRDaGFuZ2VkKGFjdGlvbi5pdGVtKVxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkU6XG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuV2luZG93LncgPSBhY3Rpb24uaXRlbS53aW5kb3dXXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuV2luZG93LmggPSBhY3Rpb24uaXRlbS53aW5kb3dIXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuT3JpZW50YXRpb24gPSAoQXBwU3RvcmUuV2luZG93LncgPiBBcHBTdG9yZS5XaW5kb3cuaCkgPyBBcHBDb25zdGFudHMuTEFORFNDQVBFIDogQXBwQ29uc3RhbnRzLlBPUlRSQUlUXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlLCBhY3Rpb24uaXRlbSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG59KVxuXG53aW5kb3cuQXBwU3RvcmUgPSBBcHBTdG9yZVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdG9yZVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxzdmcgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvc3ZnPlxuICAgIH1cbn1cbiIsImltcG9ydCBpcyBmcm9tICdpcyc7XG5cbmZ1bmN0aW9uIGdldEFsbE1ldGhvZHMob2JqKSB7XG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopXG5cdFx0LmZpbHRlcihrZXkgPT4gaXMuZm4ob2JqW2tleV0pKVxufVxuXG5mdW5jdGlvbiBhdXRvQmluZChvYmopIHtcblx0Ly8gY29uc29sZS5sb2coJ29iaiAtLS0tLScsIG9iailcbiAgXHRnZXRBbGxNZXRob2RzKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpXG5cdFx0LmZvckVhY2gobXRkID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKG10ZClcblx0XHRcdG9ialttdGRdID0gb2JqW210ZF0uYmluZChvYmopO1xuXHRcdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dG9CaW5kOyIsImNsYXNzIFV0aWxzIHtcblx0c3RhdGljIE5vcm1hbGl6ZU1vdXNlQ29vcmRzKGUsIG9ialdyYXBwZXIpIHtcblx0XHR2YXIgcG9zeCA9IDA7XG5cdFx0dmFyIHBvc3kgPSAwO1xuXHRcdGlmICghZSkgdmFyIGUgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0aWYgKGUucGFnZVggfHwgZS5wYWdlWSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5wYWdlWDtcblx0XHRcdHBvc3kgPSBlLnBhZ2VZO1xuXHRcdH1cblx0XHRlbHNlIGlmIChlLmNsaWVudFggfHwgZS5jbGllbnRZKSBcdHtcblx0XHRcdHBvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHRcdHBvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdFx0fVxuXHRcdG9ialdyYXBwZXIueCA9IHBvc3hcblx0XHRvYmpXcmFwcGVyLnkgPSBwb3N5XG5cdFx0cmV0dXJuIG9ialdyYXBwZXJcblx0fVxuXHRzdGF0aWMgUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBjb250ZW50VywgY29udGVudEgpIHtcblx0XHR2YXIgYXNwZWN0UmF0aW8gPSBjb250ZW50VyAvIGNvbnRlbnRIXG5cdFx0dmFyIHNjYWxlID0gKCh3aW5kb3dXIC8gd2luZG93SCkgPCBhc3BlY3RSYXRpbykgPyAod2luZG93SCAvIGNvbnRlbnRIKSAqIDEgOiAod2luZG93VyAvIGNvbnRlbnRXKSAqIDFcblx0XHR2YXIgbmV3VyA9IGNvbnRlbnRXICogc2NhbGVcblx0XHR2YXIgbmV3SCA9IGNvbnRlbnRIICogc2NhbGVcblx0XHR2YXIgY3NzID0ge1xuXHRcdFx0d2lkdGg6IG5ld1csXG5cdFx0XHRoZWlnaHQ6IG5ld0gsXG5cdFx0XHRsZWZ0OiAod2luZG93VyA+PiAxKSAtIChuZXdXID4+IDEpLFxuXHRcdFx0dG9wOiAod2luZG93SCA+PiAxKSAtIChuZXdIID4+IDEpLFxuXHRcdFx0c2NhbGU6IHNjYWxlXG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBjc3Ncblx0fVxuXHRzdGF0aWMgRGVzdHJveVZpZGVvKHZpZGVvKSB7XG4gICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgIHZpZGVvLnNyYyA9ICcnO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2aWRlby5jaGlsZE5vZGVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICBcdGNoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgJycpO1xuICAgICAgICBcdC8vIFdvcmtpbmcgd2l0aCBhIHBvbHlmaWxsIG9yIHVzZSBqcXVlcnlcbiAgICAgICAgXHRjaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBEZXN0cm95VmlkZW9UZXh0dXJlKHRleHR1cmUpIHtcbiAgICBcdHZhciB2aWRlbyA9IHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlXG4gICAgICAgIFV0aWxzLkRlc3Ryb3lWaWRlbyh2aWRlbylcbiAgICB9XG4gICAgc3RhdGljIElzRXZlbihuKSB7XG5cdCAgIHJldHVybiBuICUgMiA9PSAwO1xuXHR9XG5cdHN0YXRpYyBSYW5kKG1pbiwgbWF4LCBkZWNpbWFscykge1xuICAgICAgICB2YXIgcmFuZG9tTnVtID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG4gICAgICAgIGlmKGRlY2ltYWxzID09IHVuZGVmaW5lZCkge1xuICAgICAgICBcdHJldHVybiByYW5kb21OdW1cbiAgICAgICAgfWVsc2V7XG5cdCAgICAgICAgdmFyIGQgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpXG5cdCAgICAgICAgcmV0dXJuIH5+KChkICogcmFuZG9tTnVtKSArIDAuNSkgLyBkXG4gICAgICAgIH1cblx0fVxuXHRzdGF0aWMgVHJhbmZvcm1BcnJheUZyb21NaWRkbGVBbmRPdXQoYXJyYXkpIHtcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW11cbiAgICAgICAgdmFyIGkgPSBNYXRoLmNlaWwoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIHZhciBqID0gaSAtIDFcbiAgICAgICAgd2hpbGUoaiA+PSAwKSB7XG4gICAgICAgIFx0bmV3QXJyYXkucHVzaChhcnJheVtqLS1dKVxuICAgICAgICAgICAgaWYoaSA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgXHRuZXdBcnJheS5wdXNoKGFycmF5W2krK10pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5XG4gICAgfVxuICAgIHN0YXRpYyBTZXQoZWxlbWVudCwgdmFycywgYW5pbWF0aW9uQ2xhc3MpIHtcblx0XHRhbmltYXRpb25DbGFzcyA9IGFuaW1hdGlvbkNsYXNzIHx8ICdhbmltYXRlJ1xuXHRcdGRvbShlbGVtZW50KS5yZW1vdmVDbGFzcyhhbmltYXRpb25DbGFzcylcblx0XHRUd2VlbkxpdGUuc2V0KGVsZW1lbnQsIHZhcnMpXG5cdH1cblx0c3RhdGljIEFuaW1hdGUoZWxlbWVudCwgdmFycywgYW5pbWF0aW9uQ2xhc3MpIHtcblx0XHRhbmltYXRpb25DbGFzcyA9IGFuaW1hdGlvbkNsYXNzIHx8ICdhbmltYXRlJ1xuXHRcdGRvbShlbGVtZW50KS5hZGRDbGFzcyhhbmltYXRpb25DbGFzcylcblx0XHR2YXJzWydmb3JjZTNEJ10gPSB0cnVlXG5cdFx0VHdlZW5MaXRlLnNldChlbGVtZW50LCB2YXJzKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuIFxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuIFxuLy8gTUlUIGxpY2Vuc2VcbiBcbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcbiAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiBcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG59KCkpOyIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuLy8gQWN0aW9uc1xudmFyIFBhZ2VyQWN0aW9ucyA9IHtcbiAgICBvblBhZ2VSZWFkeTogZnVuY3Rpb24oaGFzaCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFksXG4gICAgICAgIFx0aXRlbTogaGFzaFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgXHRQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH1cbn1cblxuLy8gQ29uc3RhbnRzXG52YXIgUGFnZXJDb25zdGFudHMgPSB7XG5cdFBBR0VfSVNfUkVBRFk6ICdQQUdFX0lTX1JFQURZJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOOiAnUEFHRV9UUkFOU0lUSU9OX0lOJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVDogJ1BBR0VfVFJBTlNJVElPTl9PVVQnLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOiAnUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUzogJ1BBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUycsXG5cdFBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOiAnUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gnLFxufVxuXG4vLyBEaXNwYXRjaGVyXG52YXIgUGFnZXJEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVQYWdlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChhY3Rpb24pXG5cdH1cbn0pXG5cbi8vIFN0b3JlXG52YXIgUGFnZXJTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBmaXJzdFBhZ2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgIHBhZ2VUcmFuc2l0aW9uU3RhdGU6IHVuZGVmaW5lZCwgXG4gICAgZGlzcGF0Y2hlckluZGV4OiBQYWdlckRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gcGF5bG9hZC50eXBlXG4gICAgICAgIHZhciBpdGVtID0gcGF5bG9hZC5pdGVtXG4gICAgICAgIHN3aXRjaChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFk6XG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTU1xuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA/IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiA6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6XG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDpcbiAgICAgICAgICAgIFx0aWYgKFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbikgUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSFxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUuZW1pdChhY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRQYWdlclN0b3JlOiBQYWdlclN0b3JlLFxuXHRQYWdlckFjdGlvbnM6IFBhZ2VyQWN0aW9ucyxcblx0UGFnZXJDb25zdGFudHM6IFBhZ2VyQ29uc3RhbnRzLFxuXHRQYWdlckRpc3BhdGNoZXI6IFBhZ2VyRGlzcGF0Y2hlclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ0F1dG9iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRhdXRvYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy50bEluID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZVxuXHRcdH0pXG5cdFx0dGhpcy50bE91dCA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdFx0dGhpcy50bEluLnRpbWVTY2FsZSgyKS5wbGF5KDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC50aW1lU2NhbGUoMikucGxheSgwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpLCAwKVxuXHR9XG5cdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKCksIDApXG5cdH1cblx0cmVzaXplKCkge1xuXHR9XG5cdGZvcmNlVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMudGxJbi5jbGVhcigpXG5cdFx0dGhpcy50bE91dC5jbGVhcigpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UGFnZXJTdG9yZSwgUGFnZXJBY3Rpb25zLCBQYWdlckNvbnN0YW50cywgUGFnZXJEaXNwYXRjaGVyfSBmcm9tICdQYWdlcidcbmltcG9ydCBfY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvU3RyaW5nL2NhcGl0YWxpemUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICdwYWdlLWInXG5cdFx0dGhpcy53aWxsUGFnZVRyYW5zaXRpb25JbiA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4uYmluZCh0aGlzKVxuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0ID0gdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMuY29tcG9uZW50cyA9IHtcblx0XHRcdCduZXctY29tcG9uZW50JzogdW5kZWZpbmVkLFxuXHRcdFx0J29sZC1jb21wb25lbnQnOiB1bmRlZmluZWRcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdwYWdlcy1jb250YWluZXInPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYSc+PC9kaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RoaXMuZGl2U3R5bGV9IHJlZj0ncGFnZS1iJz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vbihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VULCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dClcblx0fVxuXHRzZXR1cE5ld0NvbXBvbmVudChoYXNoLCBUeXBlKSB7XG5cdFx0dmFyIGlkID0gX2NhcGl0YWxpemUoaGFzaC5yZXBsYWNlKFwiL1wiLCBcIlwiKSlcblx0XHR0aGlzLm9sZFBhZ2VEaXZSZWYgPSB0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXG5cdFx0dGhpcy5jdXJyZW50UGFnZURpdlJlZiA9ICh0aGlzLmN1cnJlbnRQYWdlRGl2UmVmID09PSAncGFnZS1hJykgPyAncGFnZS1iJyA6ICdwYWdlLWEnXG5cdFx0dmFyIGVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMuY3VycmVudFBhZ2VEaXZSZWZdKVxuXHRcdHZhciBwYWdlID0gXG5cdFx0XHQ8VHlwZSBcblx0XHRcdFx0aWQ9e3RoaXMuY3VycmVudFBhZ2VEaXZSZWZ9IFxuXHRcdFx0XHRpc1JlYWR5PXt0aGlzLm9uUGFnZVJlYWR5fSBcblx0XHRcdFx0aGFzaD17aGFzaH1cblx0XHRcdFx0ZGlkVHJhbnNpdGlvbkluQ29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25JbkNvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZT17dGhpcy5kaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddID0gdGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J11cblx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXSA9IFJlYWN0LnJlbmRlcihwYWdlLCBlbClcblx0XHRpZihQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPT09IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10uZm9yY2VVbm1vdW50KClcblx0XHR9XG5cdH1cblx0b25QYWdlUmVhZHkoaGFzaCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblBhZ2VSZWFkeShoYXNoKVxuXHR9XG5cdHdpbGxQYWdlVHJhbnNpdGlvbkluKCkge1xuXHRcdHRoaXMuc3dpdGNoUGFnZXNEaXZJbmRleCgpXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25JbigpXG5cdFx0QXBwU3RvcmUuUGFyZW50LnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcydcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25PdXQoKSB7XG5cdFx0dGhpcy5jb21wb25lbnRzWydvbGQtY29tcG9uZW50J10ud2lsbFRyYW5zaXRpb25PdXQoKVxuXHR9XG5cdGRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRQYWdlckFjdGlvbnMucGFnZVRyYW5zaXRpb25EaWRGaW5pc2goKVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0QXBwU3RvcmUuUGFyZW50LnN0eWxlLmN1cnNvciA9ICdhdXRvJ1xuXHR9XG5cdGRpZFBhZ2VUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRzd2l0Y2hQYWdlc0RpdkluZGV4KCkge1xuXHRcdHZhciBuZXdFbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHR2YXIgb2xkRWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5vbGRQYWdlRGl2UmVmXSlcblx0XHRuZXdFbC5zdHlsZS56SW5kZXggPSAyXG5cdFx0b2xkRWwuc3R5bGUuekluZGV4ID0gMVxuXHR9XG5cdHVubW91bnRDb21wb25lbnQocmVmKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzW3JlZl0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGlkID0gdGhpcy5jb21wb25lbnRzW3JlZl0ucHJvcHMuaWRcblx0XHRcdHZhciBkb21Ub1JlbW92ZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1tpZF0pXG5cdFx0XHRSZWFjdC51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbVRvUmVtb3ZlKVxuXHRcdH1cblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXS51cGRhdGUoKVxuXHRcdH1cblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0aWYodGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudHNbJ25ldy1jb21wb25lbnQnXS5yZXNpemUoKVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRQYWdlclN0b3JlLm9mZihQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4sIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4pXG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCdvbGQtY29tcG9uZW50Jylcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ25ldy1jb21wb25lbnQnKVxuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwiY29udGVudFwiOiB7XG5cdFx0XCJteXRleHRcIjogXCJzb21lIGdsb2JhbCB0ZXh0XCJcblx0fSxcblxuXHRcIm1lbnVcIjogW1xuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJxdWludGFlc3NlbmNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJRdWludGFlc3NlbmNlXCIsXG5cdFx0XHRcInVybFwiOiBcIi9xdWludGFlc3NlbmNlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiBcImFyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiQXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcInVybFwiOiBcIi9hcmNoaXRlY3R1cmVcIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSUlcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiBcImNyZWF0aXZpdHktaW5ub3ZhdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiQ3JlYXRpdml0eSAmIElubm92YXRpb25cIixcblx0XHRcdFwidXJsXCI6IFwiL2NyZWF0aXZpdHktaW5ub3ZhdGlvblwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJSUlcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiBcInN0eWxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJTdHlsZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvc3R5bGVcIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSVZcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJpZFwiOiBcImluc3BpcmF0aW9uLXNwYXJrXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJJbnNwaXJhdGlvbiBTcGFya1wiLFxuXHRcdFx0XCJ1cmxcIjogXCIvaW5zcGlyYXRpb24tc3BhcmtcIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiVlwiXG5cdFx0fVxuXHRdLFxuXG5cdFwiZGVmYXVsdC1yb3V0ZVwiOiBcIlwiLFxuXG5cdFwicm91dGluZ1wiOiB7XG5cdFx0XCIvXCI6IHtcblx0XHRcdFwidGl0bGVcIjogXCJob21lIHBhZ2VcIlxuXHRcdH0sXG5cdFx0XCJpbnNwaXJhdGlvbi1zcGFya1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiaW5zcGlyYXRpb24tc3BhcmsgcGFnZVwiXG5cdFx0fSxcblx0XHRcImFyY2hpdGVjdHVyZVwiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiYXJjaGl0ZWN0dXJlIHBhZ2VcIixcblx0XHRcdFwidmlkZW9zXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgTElORVwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMYWR5IERpb3IgaXMgYW4gYXJjaGl0ZWN0dXJhbCBjb25zdHJ1Y3Rpb24uPGJyLz5JdHMgYmVhdXR5IGxpZXMsIGF0IHRoZSBiZWdpbm5pbmcsIG9uIGl0cyDigJxsaW5lc+KAnSw8YnIvPml0cyBwcm9wb3J0aW9ucyBhbmQgaWRlYWwgZGltZW5zaW9ucy48YnIvPlRoZSBsaW5lIGNyZWF0ZXMgdGhlIHNoYXBlLi4uPGJyLz5JbiBhbGwgaXQgdGFrZXMgMTQ0IHNlcGFyYXRlIHBhcnRzIHRvIG1ha2UgZWFjaCBMYWR5IERpb3IuPGJyLz48YnIvPlRoZSBzaGFwZSBnaXZlcyBsaXZlIHRvIHRoZSBtYXRlcmlhbC5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgTUFURVJJQUxcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGxlYXRoZXIgbXVzdCBiZSBwZXJmZWN0Ljxici8+SXQgYWxsIGJlZ2lucyB3aXRoIHRoZSBzZWxlY3Rpb24gd2hpY2ggbXVzdCBtZWV0IHNwZWNpYWxseSBkZW1hbmRpbmcgY3JpdGVyaWEsIGFsd2F5cyBmb2xsb3dpbmcgdGhlIHNhbWUgcml0dWFsIDogdG91Y2hpbmcsIGV4YW1pbmluZywgc2VlaW5nLi4uPGJyLz5UaGUgY3JhZnRtYW7igJlzIGhhbmRzIGFuZCBleWVzIGFyZSB0cmFpbmVkIHRvIGRldGVjdCB0aGUgbWlub3IgZmxhdy48YnIvPjxici8+VGhlIGxlYXRoZXIgaXMgdGhlbiBjdXQsIGZvbGxvd2luZyB0aGUgcGF0dGVybnMuPGJyLz5BZnRlciB0aGUgY2FubmluZyBzdGl0Y2hpbmcsIHRoZSBwYXJ0cyBhcmUgcmVhZHkgdG8gY3JlYXRlIHRoZSB2b2x1bWUuXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIjI1X0xBRFlESU9SX0RlY291cGVfZGVzX0N1aXJzXzE1c2VjX0RFRl9IMjY0XzFcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBWT0xVTUVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTGFkeSBEaW9yIGlzIGFzc2VtYmxlZCBhcm91bmQgYSB3b29kZW4gZm9ybS48YnIvPlRoZSB0YXNrIGlzIGlzIGFuIGVzcGVjaWFsbHkgZGlmZmljdWx0IG9uZSwgYXMgdGhlIGNhbm5pbmcgaGFzIHRvIGFsaWduIHBlcmZlY3RseS48YnIvPjxici8+VGhlIGZyb250LCBiYWNrIGFuZCBzaWRlcyBhcmUgcmVpbmZvcmNlZCB0byBndWFyYW50eSB0aGF0IHRoZSBiYWcgd2lsbCBtYWludGFpbiBpdHMgc2hhcGUsIHByZXZlbnRpbmcgaXQgZnJvbSBidWNrbGluZy5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiMjZfTEFEWURJT1JfTWlzZV9lbl9mb3JtZV8xNXNlY19ERUZfSDI2NF8xXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgREVUQUlMXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIk1ldGFsd29yayBzdHJlbmd0aGVuIGFuZCBhY2Nlc3Nvcml6ZSB0aGUgYmFnOiBjaGFybXMsIHppcHBlciwgZ3JvbW1ldHMgb3IgYmFzZSBzdHVkcy4uLjxici8+VGhpcyBpcyB0aGUgRGlvciBzaWduYXR1cmUsIG1ha2luZyBlYWNoIGRldGFpbCBhbiBpbmRlc3BlbnNhYmxlIHBhcnQgb2YgdGhlIGJlYXV0eSBvZiB0aGUgd2hvbGUuPGJyLz48YnIvPkxhZHkgRGlvciBjYXJyaWVzIHdpdGhpbiBpdCB0aGUgdmVyeSBzcGlyaXQgb2YgRGlvci4uLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCIyN19MQURZRElPUl9Qb3NlX2Rlc19iaWpvdXRlcmllc18xNXNlY19ERUZfSDI2NF8xXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuICAgICAgICB9LFxuICAgICAgICBcInF1aW50YWVzc2VuY2VcIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJxdWludGFlc3NlbmNlIHBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0aXZpdHktaW5ub3ZhdGlvblwiOiB7XG4gICAgICAgIFx0XCJ0aXRsZVwiOiBcIkNSRUFUSVZJVFkgJiBJTk5PVkFUSU9OIHBhZ2VcIlxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwic3R5bGUgcGFnZVwiLFxuICAgICAgICBcdFwiaW1hZ2VzXCI6IFtcbiAgICAgICAgXHRcdFwiMmEzYzVjZTA4ODQ1NzdiYTZkN2ZjY2UzY2ZlOGZiNjguanBnXCIsXG4gICAgICAgIFx0XHRcIjNiZDk3OWMyNWQzYzY3Zjc1NjY5OGFjNTBjYjlhNTc2LmpwZ1wiLFxuICAgICAgICBcdFx0XCIwNWUyMjIyMTQwODU0NjBlYmM5MDVjNzlkZTQ2OGRjNy5qcGdcIixcbiAgICAgICAgXHRcdFwiN2VmYzlkYmNhZmI3MGRiYWIzZTNlMTlkYTM1MWUzMzEuanBnXCIsXG4gICAgICAgIFx0XHRcIjlkNTNhNGM1NDU3YzRkNzZjMzkxNzc0MDYzMDJhMjg3LmpwZ1wiLFxuICAgICAgICBcdFx0XCIxNWUzNzU1MmJlZmQ1NWRmM2RlYmQ2ODE4ODVmYWNkZC5qcGdcIixcbiAgICAgICAgXHRcdFwiMzJiNjIwOGVkZTNjMzNiZWRhOGEwZWVkYmQ4YjU1N2EuanBnXCIsXG4gICAgICAgIFx0XHRcIjA5MmI4N2FlYWVhZjI1MzYxMDM2OWQzZGFhZmY0ZmU0LmpwZ1wiLFxuICAgICAgICBcdFx0XCIxMTIuanBnXCIsXG4gICAgICAgIFx0XHRcIjE0ODM4ZGI1OTlkYzJkMGU2YWNjM2MxNTc4YjNjY2NmLmpwZ1wiLFxuICAgICAgICBcdFx0XCIyMzExNjEyX0lNR18wNTI1LmpwZ1wiLFxuICAgICAgICBcdFx0XCI0NDg2ODIxX29wZW4tdXJpMjAxNTA1MTctNzExNy1laG9xYTMuanBnXCIsXG4gICAgICAgIFx0XHRcImNocmlzdGlhbi1kaW9yLWZhbGwtd2ludGVyLTIwMTEtMjAxMi1sb29rYm9vay05LmpwZ1wiLFxuICAgICAgICBcdFx0XCJkNDk2MjhjYjczNDE1M2IzZjBlMDc0YmRhZTQwMTNhNS5qcGdcIixcbiAgICAgICAgXHRcdFwiZGE5NzQwMTQyNDUzMWU2YTYzODYxNjhjMmFjYWZkZTIuanBnXCIsXG4gICAgICAgIFx0XHRcImRjODM4YjNjYmZjNGEyZDhjZGY5OGU5NTEyMmYyZDc3LmpwZ1wiLFxuICAgICAgICBcdFx0XCJkc2NfMDgyOS5qcGdcIixcbiAgICAgICAgXHRcdFwiZWxpemFiZXRoLW1pbmV0dC1sYWR5LWRpb3Itc3RyZWV0LXN0eWxlLmpwZ1wiLFxuICAgICAgICBcdFx0XCJJTUdfMTI0MS1SQy0xLmpwZ1wiLFxuICAgICAgICBcdFx0XCJJTUdfNjc3My5qcGdcIixcbiAgICAgICAgXHRcdFwiTGUtU2FjLUxhZHktRGlvci1kZS1DaHJpc3RpYW4tRGlvciAoMSkuanBnXCIsXG4gICAgICAgIFx0XHRcIkxGVy1EYXkxLUFXMTUtU3RyZWV0U3R5bGUtTmF0YWxpYS1LYXV0LUJsdWVEcmVzcy1SYWV5LVllbGxvdy1Db2F0LU1hdGNoZXNGYXNoaW9uLU1heWFXaWxsaWFtcy1GYXNoaW9uTG9sbGlwb3AtMS0xMDI0eDY4Mi5qcGdcIixcbiAgICAgICAgXHRcdFwibW9kNDEuanBnXCIsXG4gICAgICAgIFx0XHRcInAxOWo1c2RyNWs0MW8xNmp1MW1rcGQ1YjFwZ2JnLmpwZ1wiLFxuICAgICAgICBcdFx0XCJ0dW1ibHJfbXpzbmRtUlFIaTFzdTd4aWVvMV8xMjgwLmpwZ1wiXG5cdFx0XHRdXG4gICAgICAgIH1cblx0fVxufSJdfQ==
