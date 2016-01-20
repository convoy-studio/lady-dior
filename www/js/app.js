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
				_this.pageHeight += 300;
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

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

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

			this.bg = {
				colors: [0xffffff, 0xf57474, 0x4A90E2],
				springConfig: {
					spring: 0.8,
					friction: 0.7,
					length: 0,
					angle: 0
				},
				colorGraphic: new PIXI.Graphics(),
				bags: [],
				bagsContainer: new PIXI.Container()
			};
			var content = _AppStore2['default'].pageContent();
			var bagUrls = content.bagUrls;
			for (var i = 0; i < bagUrls.length; i++) {
				var url = 'image/creativity-bags/' + bagUrls[i] + '.png';
				var sprite = new PIXI.Sprite.fromImage(url);
				sprite.anchor.x = sprite.anchor.y = 0.5;
				sprite.alpha = 0;
				sprite.toPosition = new PIXI.Point(0, 0);
				sprite.velocity = new PIXI.Point(0, 0);
				this.bg.bagsContainer.addChild(sprite);
				this.bg.bags[i] = sprite;
			};

			this.container.addChild(this.bg.colorGraphic);
			this.container.addChild(this.bg.bagsContainer);

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
			var _this = this;

			if (this.collisionEnable == false) return;
			this.collisionEnable = false;
			setTimeout(function () {
				_this.collisionEnable = true;
			}, 200);

			var pairs = event.pairs;
			for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i];
				if (pair.bodyA.isStatic || pair.bodyB.isStatic) return;
				this.updateBgColor();
				this.updateBag();
			}
		}
	}, {
		key: 'updateBag',
		value: function updateBag() {
			var bags = this.bg.bags;
			for (var i = 0; i < bags.length; i++) {
				var bag = bags[i];
				bag.alpha = 0;
				bag.x = 0;
				bag.y = 10;
			};
			this.bg.springConfig.length = 60;
			var randIndex = _Utils2['default'].Rand(0, bags.length - 1, 0);
			bags[randIndex].alpha = 1;
		}
	}, {
		key: 'updateBgColor',
		value: function updateBgColor() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;
			var randIndex = _Utils2['default'].Rand(0, this.bg.colors.length - 1, 0);
			var color = this.bg.colors[randIndex];
			var g = this.bg.colorGraphic;

			g.clear();
			g.beginFill(color, 1);
			g.drawRect(0, 0, windowW, windowH);
			g.endFill();
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
			this.engine.world.gravity.y = Math.sin(this.time) * 0.02;

			for (var i = 0; i < this.bodies.length; i++) {
				var body = this.bodies[i];
				body.container.x = body.body.position.x;
				body.container.y = body.body.position.y;
				body.container.rotation = body.body.angle;
			};

			var config = this.bg.springConfig;
			var angle = config.angle;
			var bags = this.bg.bags;
			angle += 0.1;
			for (var i = 0; i < bags.length; i++) {
				var bag = bags[i];
				_Utils2['default'].SpringTo(bag, bag.toPosition, i, config);
				bag.x += bag.velocity.x;
				bag.y += bag.velocity.y;
			};

			config.length += (0.01 - config.length) * 0.5;

			_get(Object.getPrototypeOf(CreativityInnovation.prototype), 'update', this).call(this);
		}
	}, {
		key: 'resize',
		value: function resize() {
			var windowW = _AppStore2['default'].Window.w;
			var windowH = _AppStore2['default'].Window.h;

			var resizeVals = _Utils2['default'].ResizePositionProportionally(windowW, windowH, _AppConstants2['default'].MEDIA_GLOBAL_W * 0.8, _AppConstants2['default'].MEDIA_GLOBAL_H * 0.8);

			this.bg.bagsContainer.x = windowW >> 1;
			this.bg.bagsContainer.y = (windowH >> 1) - windowH * 0.02;
			this.bg.bagsContainer.scale.x = this.bg.bagsContainer.scale.y = resizeVals.scale;

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
			_Helpers2['default'].removeChildrenFromContainer(this.bg.bagsContainer);
			for (var i = 0; i < this.bg.bags.length; i++) {
				var bag = this.bg.bags[i];
				bag.destroy();
			};
			clearInterval(this.intervalId);
		}
	}]);

	return CreativityInnovation;
})(_Page3['default']);

exports['default'] = CreativityInnovation;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Home.js":[function(require,module,exports){
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

        var g = new PIXI.Graphics();
        g.beginFill(0xffffff, 0.1);
        g.lineStyle(1, 0x000000, 1);
        g.drawCircle(0, 0, radius);
        g.endFill();

        container.addChild(g);

        return {
            container: container,
            g: g
        };
    },

    getGravityRect: function getGravityRect(url, width, height) {
        var container = new PIXI.Container();

        var g = new PIXI.Graphics();
        g.beginFill(0xffffff, 0.1);
        g.lineStyle(1, 0x000000, 1);
        g.drawRect(-width / 2, -height / 2, width, height);
        g.endFill();

        container.addChild(g);

        return {
            container: container,
            g: g
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
	}, {
		key: 'SpringTo',
		value: function SpringTo(item, toPosition, index, springConfig) {
			var dx = toPosition.x - item.x;
			var dy = toPosition.y - item.y;
			var angle = Math.atan2(dy, dx);
			var targetX = toPosition.x - Math.cos(angle) * (springConfig.length * index);
			var targetY = toPosition.y - Math.sin(angle) * (springConfig.length * index);
			item.velocity.x += (targetX - item.x) * springConfig.spring;
			item.velocity.y += (targetY - item.y) * springConfig.spring;
			item.velocity.x *= springConfig.friction;
			item.velocity.y *= springConfig.friction;
		}
	}, {
		key: 'SpringVal',
		value: function SpringVal(fromVal, toVal, velocity, angle, friction, spring, length) {
			var distance = toVal - fromVal;
			var target = toVal - Math.cos(angle) * length;
			velocity += (target - fromVal) * spring;
			velocity *= friction;
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
        	"title": "CREATIVITY & INNOVATION page",
        	"bagUrls": [
        		"bag0",
        		"bag1"
        	]
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9DcmVhdGl2aXR5SW5ub3ZhdGlvbi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSW5zcGlyYXRpb25TcGFyay5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRhZXNzZW5jZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9IZWxwZXJzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvbWl4aW5zL1BvbHlmaWxscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1ByZWxvYWRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N2Zy9TVkdDb21wb25lbnQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL1V0aWxzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQ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QUNuQixPQUFJLEtBQUssR0FBRyxPQUFPLENBQUE7QUFDbkIsT0FBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDbkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRixDQUFDLENBQUM7R0FDSDs7O1NBQ1EscUJBQUc7QUFDUixPQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0QsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDcEMsUUFB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LCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiAoc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiaW1wb3J0IEFwcCBmcm9tICdBcHAnXG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCdcbmltcG9ydCBQYWdlciBmcm9tICdQYWdlcidcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IFBvbHlmaWxscyBmcm9tICdQb2x5ZmlsbHMnXG5cbi8vIFN0YXJ0IEFwcFxudmFyIGFwcCA9IG5ldyBBcHAoKVxuYXBwLmluaXQoKVxuIiwiaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBBcHBUZW1wbGF0ZSBmcm9tICdBcHBUZW1wbGF0ZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IEdFdmVudHMgZnJvbSAnR2xvYmFsRXZlbnRzJ1xuaW1wb3J0IFByZWxvYWQgZnJvbSAnUHJlbG9hZGVyJ1xuaW1wb3J0IERhdGEgZnJvbSAnRGF0YSdcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblx0aW5pdCgpIHtcblxuXHRcdC8vIEluaXQgZ2xvYmFsIGV2ZW50c1xuXHRcdHdpbmRvdy5HbG9iYWxFdmVudHMgPSBuZXcgR0V2ZW50cygpXG5cdFx0R2xvYmFsRXZlbnRzLmluaXQoKVxuXG5cdFx0QXBwU3RvcmUuUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKVxuXG5cdFx0aWYgKCdzY3JvbGxSZXN0b3JhdGlvbicgaW4gaGlzdG9yeSkge1xuXHRcdFx0Ly8gQmFjayBvZmYsIGJyb3dzZXIsIEkgZ290IHRoaXMuLi5cblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblx0XHR9XG5cblx0XHR0aGlzLm9uTWFpbkRhdGFMb2FkZWQoKVxuXHR9XG5cblx0b25NYWluRGF0YUxvYWRlZCgpIHtcblxuXHRcdEFwcFN0b3JlLkRhdGEgPSBEYXRhXG5cdFx0XG5cdFx0Ly8gSW5pdCByb3V0ZXJcblx0XHR2YXIgcm91dGVyID0gbmV3IFJvdXRlcigpXG5cdFx0cm91dGVyLmluaXQoKVxuXG5cdFx0Ly8gUmVuZGVyIHJlYWN0XG5cdFx0UmVhY3QucmVuZGVyKFxuXHRcdFx0PEFwcFRlbXBsYXRlIC8+LFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jb250YWluZXInKVxuXHRcdClcblxuXHRcdC8vIFN0YXJ0IHJvdXRpbmdcblx0XHRyb3V0ZXIuYmVnaW5Sb3V0aW5nKClcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuICAgIFx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBGcm9udENvbnRhaW5lciBmcm9tICdGcm9udENvbnRhaW5lcidcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICdQYWdlc0NvbnRhaW5lcidcbmltcG9ydCBQWENvbnRhaW5lciBmcm9tICdQWENvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGVtcGxhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsIHRoaXMucmVzaXplKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nYXBwLXRlbXBsYXRlJz5cblx0XHRcdFx0PEZyb250Q29udGFpbmVyIHJlZj0nZnJvbnQtY29udGFpbmVyJyAvPlxuXHRcdFx0XHQ8UGFnZXNDb250YWluZXIgcmVmPSdwYWdlcy1jb250YWluZXInIC8+XG5cdFx0XHRcdDxQWENvbnRhaW5lciByZWY9J3B4LWNvbnRhaW5lcicgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRHbG9iYWxFdmVudHMucmVzaXplKClcblx0XHR0aGlzLmFuaW1hdGUoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcblx0XHR0aGlzLnJlZnNbJ3B4LWNvbnRhaW5lciddLnVwZGF0ZSgpXG5cdFx0dGhpcy5yZWZzWydwYWdlcy1jb250YWluZXInXS51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlZnNbJ2Zyb250LWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdFx0dGhpcy5yZWZzWydwYWdlcy1jb250YWluZXInXS5yZXNpemUoKVxuXHRcdHRoaXMucmVmc1sncHgtY29udGFpbmVyJ10ucmVzaXplKClcblx0fVxufVxuIiwiaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICdBcHBEaXNwYXRjaGVyJ1xuXG52YXIgQXBwQWN0aW9ucyA9IHtcbiAgICBwYWdlSGFzaGVyQ2hhbmdlZDogZnVuY3Rpb24ocGFnZUlkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCxcbiAgICAgICAgICAgIGl0ZW06IHBhZ2VJZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICB3aW5kb3dSZXNpemU6IGZ1bmN0aW9uKHdpbmRvd1csIHdpbmRvd0gpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLFxuICAgICAgICAgICAgaXRlbTogeyB3aW5kb3dXOndpbmRvd1csIHdpbmRvd0g6d2luZG93SCB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRQWENoaWxkOiBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLkFERF9QWF9DSElMRCxcbiAgICAgICAgICAgIGl0ZW06IHsgY2hpbGQ6Y2hpbGQgfVxuICAgICAgICB9KSAgICBcbiAgICB9LFxuICAgIHJlbW92ZVBYQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuUkVNT1ZFX1BYX0NISUxELFxuICAgICAgICAgICAgaXRlbTogeyBjaGlsZDpjaGlsZCB9XG4gICAgICAgIH0pICAgIFxuICAgIH0sXG4gICAgaW50cm9GaW5pc2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuSU5UUk9fRklOSVNIRUQsXG4gICAgICAgICAgICBpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgICAgXG4gICAgfVxufVxuXG53aW5kb3cuQXBwQWN0aW9ucyA9IEFwcEFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgQXBwQWN0aW9uc1xuXG5cbiAgICAgIFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnQmFzZUNvbXBvbmVudCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnTWVudSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuaW1wb3J0IFNWR0NvbXBvbmVudCBmcm9tICdTVkdDb21wb25lbnQnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJvbnRDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuaW50cm9GaW5pc2hlZCA9IHRoaXMuaW50cm9GaW5pc2hlZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2UgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuSU5UUk9fRklOSVNIRUQsIHRoaXMuaW50cm9GaW5pc2hlZClcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9J2Zyb250LWNvbnRhaW5lcicgcmVmPSdmcm9udC1jb250YWluZXInPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmVnaW4tc2xpZGVcIiByZWY9J2JlZ2luLXNsaWRlJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cblx0XHRcdFx0XHRcdDxTVkdDb21wb25lbnQgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxODcuMDg2IDczLjg2M1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE0MS45NTYsMzkuNjNjLTIuMDIzLTAuOTAzLTQuMjY1LTEuMzczLTYuNjg3LTEuNDgzbC02LjY4OCwwLjM5OGMtMS44MDcsMC4zMjUtMy41NDIsMC45NzctNS4yNzcsMS45ODljLTEuOTUxLDEuMTU2LTMuNTc4LDIuNjAzLTQuODc5LDQuMzM3Yy0zLjMyNSw0LjE1Ni00LjUxOSw5LjAzNi0zLjYxNCwxNC43ODNjMS4wMTIsNi4wNzMsNC4xNTYsMTAuMjI5LDkuMzI1LDEyLjMyN2MzLjk3NywxLjYyNiw4LjM4NiwxLjk1LDEzLjEyMSwwLjkwMmM0LjUxOC0wLjkzOSw4LjA5Ny0zLjEwOCwxMC44MDgtNi41MDVjMy4xODEtNC4wMTQsNC4xOTItOC45NjUsMy0xNC44MjFDMTQ5LjkwOSw0NS43NzUsMTQ2LjgzNiw0MS43OTksMTQxLjk1NiwzOS42M3ogTTE0MS44NDksNjUuOTA5Yy0xLjU1NSwyLjg5LTMuOTAzLDQuNjI2LTcuMTIxLDUuMjQxYy0zLjA3MiwwLjU0MS01LjgxOS0wLjY1Mi04LjI0MS0zLjUwOGMtMi4yNzctMi43MS0zLjY4OC02LjI1NC00LjA4NS0xMC42OThjLTAuNTQyLTQuNDgzLDAtOC4yNzgsMS40ODEtMTEuMzg4YzEuNjI3LTMuNDM0LDQuMTIxLTUuMjQxLDcuMzc1LTUuNTY1YzMuMzYxLTAuMjg4LDYuMTQ1LDAuNzk1LDguMzUsMy4yNTRjMi4yNDEsMi40OTMsMy41MDYsNi4xMDksMy45NCwxMC45ODhDMTQzLjkwOCw1OS4xMTMsMTQzLjM2Nyw2Mi45NDUsMTQxLjg0OSw2NS45MDl6IE00MC41NjYsMC4zNzVINC4zMTJjLTAuNzIzLDAtMS4wODUsMC4yMTYtMS4wODUsMC43MjJsMC4yOSwwLjU0M2wxLjQ0NiwwLjI4OEw4LjQ2OCwyLjExbDMuNDM0LDAuNDMzYzIuNDU4LDAuNTQzLDMuNzIzLDEuOTE2LDMuNzIzLDQuMTU3djU3LjMyOGMtMC4wMzYsMS43NzMtMC4yMTcsMy4wNzQtMC41NDIsMy45NGwtMC45MDMsMS4yNjdjLTAuNDcsMC41NDEtMS40NDYsMC45MzktMi44MTksMS4xMTlsLTguODU2LDAuNTQzYy0xLjAxMiwwLTEuNTU0LDAuMjU0LTEuNTU0LDAuNzI0YzAsMC40MzMsMC4zNjEsMC42ODYsMS4xMjEsMC42ODZoNDYuMjMxYzUuNjAzLDAsMTAuNTkxLTEuMDQ4LDE1LjAzNy0zLjA3MWM0LjE1Ny0xLjk4OSw3Ljc3MS00LjcsMTAuNzM1LTguMjA1YzIuNzExLTMuMzI3LDQuODA4LTcuMDQ5LDYuMzI2LTExLjI3OWMxLjMzNy00LjAxMiwxLjk4OC04LjE2OCwxLjk4OC0xMi40NjljMC04LjI0Mi0xLjk4OC0xNS4zNjItNS45NjQtMjEuMzYzQzY5LjQ4Myw1LjU0Myw1Ny41NTUsMC4zNzUsNDAuNTY2LDAuMzc1eiBNNjguODMzLDQ2LjI4Yy0xLjE5Myw1LjUzMS0zLjE0NSwxMC4wNDktNS44NTYsMTMuNTkxYy0xLjYyNiwyLjE2OS0zLjEwOCwzLjg2OC00LjU1NCw1LjA2MmMtMS42MjYsMS4yNjUtMy41MDYsMi4zMTItNS40OTQsMy4wMzVjLTEuOTg4LDAuNjUxLTQuNTE5LDEuMTIxLTcuNDgzLDEuNDQ2bC0xMS4wNiwwLjM5OGgtNC43NzFsLTEuNDQ2LTAuMjE3Yy0wLjI4OS0wLjE4Mi0wLjQzMy0wLjY4OC0wLjQzMy0xLjQxMVY0LjUzMmwwLjI1Mi0xLjQ0NWMwLjI1My0wLjQzNSwwLjc5NS0wLjYxNSwxLjYyNy0wLjU0M2g3LjMzN2MxMS44OTMsMCwyMC40OTUsMy41NDMsMjUuNzM2LDEwLjdjMi43MTEsMy42ODcsNC42MjcsOC4wMjQsNS44OTIsMTIuOTc2YzAuOTA0LDMuNDM1LDEuMzM3LDYuNjE1LDEuMzM3LDkuNTc5QzY5LjkxNywzOS4xNiw2OS41NTYsNDIuNjY3LDY4LjgzMyw0Ni4yOHogTTkwLjM1Nyw0NC44MzVsMC45NDMtMC4xMDhsMi4xMTItMC41NzlsMS44OCwwLjE4MmMwLjU0MiwwLjM2MiwwLjgzMSwwLjk3NywwLjgzMSwxLjc3MXYyMS4wMDFsLTAuNDcsMi42MDNjLTAuMzI2LDAuNzIzLTEuMTU3LDEuMTkyLTIuNTMsMS4zNzJsLTIuNTMsMC4wNzRjLTAuNzk1LDAtMS4xNTcsMC4xOC0xLjA4NCwwLjYxNGMwLDAuMjg4LDAuMjE3LDAuNDcsMC42NSwwLjQ3aDE5LjI2NmMwLjQzNSwwLDAuNjg3LTAuMTEsMC42ODctMC40MzVjLTAuMDcyLTAuMzk2LTAuNTA2LTAuNTc4LTEuMzM3LTAuNTc4Yy0yLjM1LDAtMy44NjctMC4zMjUtNC41MTktMC45NzdjLTAuNTQyLTAuNTQxLTAuODMxLTEuNDQ2LTAuODMxLTIuNzF2LTI2LjQ2YzAtMS4zMDEtMC4xODEtMi4wMjMtMC41NDItMi4wOTVsLTEuMDg1LDAuMTA3Yy0wLjQzNCwwLjE4LTEuNDEsMC42MTUtMi43ODIsMS40MWMtMi4yNDIsMS4yNjQtNC44OCwyLjI3Ny03Ljg4LDMuMDcxYy0xLjI2NiwwLjM2MS0xLjgwOCwwLjc2LTEuNjI3LDEuMTkzTDkwLjM1Nyw0NC44MzV6IE0xODYuMTI3LDQyLjk1NWMwLjA3MywxLjI2Ni0wLjI4OSwyLjI0LTEuMDg0LDNjLTAuNzIzLDAuNjE1LTEuNDQ1LDAuNzk1LTIuMDk2LDAuNjE1Yy0wLjYxNS0wLjEwOC0xLjA4NS0wLjM2MS0xLjQxLTAuNzI0bC0xLjAxMy0xLjI2NGMtMC43OTUtMS4xNTgtMS41NTQtMS41Mi0yLjQ1OC0xLjE5M2MtMS4wNDgsMC4yODgtMi4xMzIsMS4wODMtMy4yNTMsMi4zNDljLTEuNzcxLDEuODQzLTIuOTY0LDQuMDEyLTMuNjE0LDYuNjE0djE1LjM2NGMwLDEuMzcyLDAuNDcsMi4zNDksMS40NDUsMi45NjNsMi4yMDUsMC4zOTZsMi4zMTQsMC4yNTRjMC41NDIsMC4wNzMsMC43NTksMC4xODIsMC43NTksMC40N2wtMC4xMDgsMC4yNTNsLTAuNjE1LDAuMTgySDE1Ny44NmMtMC41NzgsMC0wLjkwMi0wLjE4Mi0wLjkwMi0wLjQ3bDAuNTQxLTAuNDM1bDMuMjU0LTAuMjU0YzEuMjY2LTAuMjE2LDIuMDYtMC42NDksMi40OTQtMS4zMDFsMC41NDItMS42MjZWNDYuNDYybC0wLjM2MS0xLjU5MWwtMC42MTUtMC4zNjJjLTAuMTgxLTAuMTgtMC40Ny0wLjI4OC0wLjkwMi0wLjM2MWMtMC41NDItMC4wMzYtMS4xOTQsMC4wNzMtMS44OCwwLjM2MWwtMS44NDQsMC41MDdsLTEuMDQ4LTAuMjUzYy0wLjE4MS0wLjI1NC0wLjEwOS0wLjQzNCwwLjE0NC0wLjU0MmwxLjU1NS0wLjY1MWMzLjU0Mi0xLjA0OCw2LjM5OC0yLjEzMiw4LjM4Ni0zLjI1NGwyLjQ1OC0xLjMzNWwxLjA4NSwwLjA3MWwwLjQzNCwwLjkwMnY3Ljk1NGMyLjcxMS00LjQxLDQuODgtNy4xMjIsNi4zNjEtOC4wMjVjMC45MDQtMC41NDEsMS43NzEtMC45NzcsMi40MjItMS4xNTZsMS4yNjYtMC4xMDhjMC43OTUtMC4wNzMsMS42OTksMC4xOCwyLjcxMSwwLjgzMkMxODUuMzMzLDQwLjI0NCwxODYuMDU1LDQxLjQzOCwxODYuMTI3LDQyLjk1NXogTTk1Ljk0MiwyNC4wNTFjLTAuOTc2LTAuOTA1LTEuNDQ2LTEuOTg5LTEuMzc0LTMuMjU0Yy0wLjA3Mi0xLjMzOCwwLjM5OC0yLjQ5NCwxLjM3NC0zLjM5OGMwLjkwMy0wLjkwNCwxLjk4OC0xLjM3NCwzLjMyNS0xLjM3NGMxLjI2NiwwLDIuMzg2LDAuNDcsMy4yODksMS4zNzRjMC45MDQsMC45MDQsMS40MSwyLjA2LDEuNDEsMy4zOThjMCwxLjI2NS0wLjUwNiwyLjM0OS0xLjQxLDMuMjU0Yy0wLjkwMywwLjkwMy0yLjAyMywxLjM3My0zLjI4OSwxLjM3M0M5Ny45MzEsMjUuNDI0LDk2Ljg0NiwyNC45NTQsOTUuOTQyLDI0LjA1MXpcIi8+XG5cdFx0XHRcdFx0XHQ8L1NWR0NvbXBvbmVudD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGEgaHJlZj0nIy8nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIHJlZj0nbG9nbyc+XG5cdFx0XHRcdFx0XHQ8U1ZHQ29tcG9uZW50IHdpZHRoPVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTg3LjA4NiA3My44NjNcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNDEuOTU2LDM5LjYzYy0yLjAyMy0wLjkwMy00LjI2NS0xLjM3My02LjY4Ny0xLjQ4M2wtNi42ODgsMC4zOThjLTEuODA3LDAuMzI1LTMuNTQyLDAuOTc3LTUuMjc3LDEuOTg5Yy0xLjk1MSwxLjE1Ni0zLjU3OCwyLjYwMy00Ljg3OSw0LjMzN2MtMy4zMjUsNC4xNTYtNC41MTksOS4wMzYtMy42MTQsMTQuNzgzYzEuMDEyLDYuMDczLDQuMTU2LDEwLjIyOSw5LjMyNSwxMi4zMjdjMy45NzcsMS42MjYsOC4zODYsMS45NSwxMy4xMjEsMC45MDJjNC41MTgtMC45MzksOC4wOTctMy4xMDgsMTAuODA4LTYuNTA1YzMuMTgxLTQuMDE0LDQuMTkyLTguOTY1LDMtMTQuODIxQzE0OS45MDksNDUuNzc1LDE0Ni44MzYsNDEuNzk5LDE0MS45NTYsMzkuNjN6IE0xNDEuODQ5LDY1LjkwOWMtMS41NTUsMi44OS0zLjkwMyw0LjYyNi03LjEyMSw1LjI0MWMtMy4wNzIsMC41NDEtNS44MTktMC42NTItOC4yNDEtMy41MDhjLTIuMjc3LTIuNzEtMy42ODgtNi4yNTQtNC4wODUtMTAuNjk4Yy0wLjU0Mi00LjQ4MywwLTguMjc4LDEuNDgxLTExLjM4OGMxLjYyNy0zLjQzNCw0LjEyMS01LjI0MSw3LjM3NS01LjU2NWMzLjM2MS0wLjI4OCw2LjE0NSwwLjc5NSw4LjM1LDMuMjU0YzIuMjQxLDIuNDkzLDMuNTA2LDYuMTA5LDMuOTQsMTAuOTg4QzE0My45MDgsNTkuMTEzLDE0My4zNjcsNjIuOTQ1LDE0MS44NDksNjUuOTA5eiBNNDAuNTY2LDAuMzc1SDQuMzEyYy0wLjcyMywwLTEuMDg1LDAuMjE2LTEuMDg1LDAuNzIybDAuMjksMC41NDNsMS40NDYsMC4yODhMOC40NjgsMi4xMWwzLjQzNCwwLjQzM2MyLjQ1OCwwLjU0MywzLjcyMywxLjkxNiwzLjcyMyw0LjE1N3Y1Ny4zMjhjLTAuMDM2LDEuNzczLTAuMjE3LDMuMDc0LTAuNTQyLDMuOTRsLTAuOTAzLDEuMjY3Yy0wLjQ3LDAuNTQxLTEuNDQ2LDAuOTM5LTIuODE5LDEuMTE5bC04Ljg1NiwwLjU0M2MtMS4wMTIsMC0xLjU1NCwwLjI1NC0xLjU1NCwwLjcyNGMwLDAuNDMzLDAuMzYxLDAuNjg2LDEuMTIxLDAuNjg2aDQ2LjIzMWM1LjYwMywwLDEwLjU5MS0xLjA0OCwxNS4wMzctMy4wNzFjNC4xNTctMS45ODksNy43NzEtNC43LDEwLjczNS04LjIwNWMyLjcxMS0zLjMyNyw0LjgwOC03LjA0OSw2LjMyNi0xMS4yNzljMS4zMzctNC4wMTIsMS45ODgtOC4xNjgsMS45ODgtMTIuNDY5YzAtOC4yNDItMS45ODgtMTUuMzYyLTUuOTY0LTIxLjM2M0M2OS40ODMsNS41NDMsNTcuNTU1LDAuMzc1LDQwLjU2NiwwLjM3NXogTTY4LjgzMyw0Ni4yOGMtMS4xOTMsNS41MzEtMy4xNDUsMTAuMDQ5LTUuODU2LDEzLjU5MWMtMS42MjYsMi4xNjktMy4xMDgsMy44NjgtNC41NTQsNS4wNjJjLTEuNjI2LDEuMjY1LTMuNTA2LDIuMzEyLTUuNDk0LDMuMDM1Yy0xLjk4OCwwLjY1MS00LjUxOSwxLjEyMS03LjQ4MywxLjQ0NmwtMTEuMDYsMC4zOThoLTQuNzcxbC0xLjQ0Ni0wLjIxN2MtMC4yODktMC4xODItMC40MzMtMC42ODgtMC40MzMtMS40MTFWNC41MzJsMC4yNTItMS40NDVjMC4yNTMtMC40MzUsMC43OTUtMC42MTUsMS42MjctMC41NDNoNy4zMzdjMTEuODkzLDAsMjAuNDk1LDMuNTQzLDI1LjczNiwxMC43YzIuNzExLDMuNjg3LDQuNjI3LDguMDI0LDUuODkyLDEyLjk3NmMwLjkwNCwzLjQzNSwxLjMzNyw2LjYxNSwxLjMzNyw5LjU3OUM2OS45MTcsMzkuMTYsNjkuNTU2LDQyLjY2Nyw2OC44MzMsNDYuMjh6IE05MC4zNTcsNDQuODM1bDAuOTQzLTAuMTA4bDIuMTEyLTAuNTc5bDEuODgsMC4xODJjMC41NDIsMC4zNjIsMC44MzEsMC45NzcsMC44MzEsMS43NzF2MjEuMDAxbC0wLjQ3LDIuNjAzYy0wLjMyNiwwLjcyMy0xLjE1NywxLjE5Mi0yLjUzLDEuMzcybC0yLjUzLDAuMDc0Yy0wLjc5NSwwLTEuMTU3LDAuMTgtMS4wODQsMC42MTRjMCwwLjI4OCwwLjIxNywwLjQ3LDAuNjUsMC40N2gxOS4yNjZjMC40MzUsMCwwLjY4Ny0wLjExLDAuNjg3LTAuNDM1Yy0wLjA3Mi0wLjM5Ni0wLjUwNi0wLjU3OC0xLjMzNy0wLjU3OGMtMi4zNSwwLTMuODY3LTAuMzI1LTQuNTE5LTAuOTc3Yy0wLjU0Mi0wLjU0MS0wLjgzMS0xLjQ0Ni0wLjgzMS0yLjcxdi0yNi40NmMwLTEuMzAxLTAuMTgxLTIuMDIzLTAuNTQyLTIuMDk1bC0xLjA4NSwwLjEwN2MtMC40MzQsMC4xOC0xLjQxLDAuNjE1LTIuNzgyLDEuNDFjLTIuMjQyLDEuMjY0LTQuODgsMi4yNzctNy44OCwzLjA3MWMtMS4yNjYsMC4zNjEtMS44MDgsMC43Ni0xLjYyNywxLjE5M0w5MC4zNTcsNDQuODM1eiBNMTg2LjEyNyw0Mi45NTVjMC4wNzMsMS4yNjYtMC4yODksMi4yNC0xLjA4NCwzYy0wLjcyMywwLjYxNS0xLjQ0NSwwLjc5NS0yLjA5NiwwLjYxNWMtMC42MTUtMC4xMDgtMS4wODUtMC4zNjEtMS40MS0wLjcyNGwtMS4wMTMtMS4yNjRjLTAuNzk1LTEuMTU4LTEuNTU0LTEuNTItMi40NTgtMS4xOTNjLTEuMDQ4LDAuMjg4LTIuMTMyLDEuMDgzLTMuMjUzLDIuMzQ5Yy0xLjc3MSwxLjg0My0yLjk2NCw0LjAxMi0zLjYxNCw2LjYxNHYxNS4zNjRjMCwxLjM3MiwwLjQ3LDIuMzQ5LDEuNDQ1LDIuOTYzbDIuMjA1LDAuMzk2bDIuMzE0LDAuMjU0YzAuNTQyLDAuMDczLDAuNzU5LDAuMTgyLDAuNzU5LDAuNDdsLTAuMTA4LDAuMjUzbC0wLjYxNSwwLjE4MkgxNTcuODZjLTAuNTc4LDAtMC45MDItMC4xODItMC45MDItMC40N2wwLjU0MS0wLjQzNWwzLjI1NC0wLjI1NGMxLjI2Ni0wLjIxNiwyLjA2LTAuNjQ5LDIuNDk0LTEuMzAxbDAuNTQyLTEuNjI2VjQ2LjQ2MmwtMC4zNjEtMS41OTFsLTAuNjE1LTAuMzYyYy0wLjE4MS0wLjE4LTAuNDctMC4yODgtMC45MDItMC4zNjFjLTAuNTQyLTAuMDM2LTEuMTk0LDAuMDczLTEuODgsMC4zNjFsLTEuODQ0LDAuNTA3bC0xLjA0OC0wLjI1M2MtMC4xODEtMC4yNTQtMC4xMDktMC40MzQsMC4xNDQtMC41NDJsMS41NTUtMC42NTFjMy41NDItMS4wNDgsNi4zOTgtMi4xMzIsOC4zODYtMy4yNTRsMi40NTgtMS4zMzVsMS4wODUsMC4wNzFsMC40MzQsMC45MDJ2Ny45NTRjMi43MTEtNC40MSw0Ljg4LTcuMTIyLDYuMzYxLTguMDI1YzAuOTA0LTAuNTQxLDEuNzcxLTAuOTc3LDIuNDIyLTEuMTU2bDEuMjY2LTAuMTA4YzAuNzk1LTAuMDczLDEuNjk5LDAuMTgsMi43MTEsMC44MzJDMTg1LjMzMyw0MC4yNDQsMTg2LjA1NSw0MS40MzgsMTg2LjEyNyw0Mi45NTV6IE05NS45NDIsMjQuMDUxYy0wLjk3Ni0wLjkwNS0xLjQ0Ni0xLjk4OS0xLjM3NC0zLjI1NGMtMC4wNzItMS4zMzgsMC4zOTgtMi40OTQsMS4zNzQtMy4zOThjMC45MDMtMC45MDQsMS45ODgtMS4zNzQsMy4zMjUtMS4zNzRjMS4yNjYsMCwyLjM4NiwwLjQ3LDMuMjg5LDEuMzc0YzAuOTA0LDAuOTA0LDEuNDEsMi4wNiwxLjQxLDMuMzk4YzAsMS4yNjUtMC41MDYsMi4zNDktMS40MSwzLjI1NGMtMC45MDMsMC45MDMtMi4wMjMsMS4zNzMtMy4yODksMS4zNzNDOTcuOTMxLDI1LjQyNCw5Ni44NDYsMjQuOTU0LDk1Ljk0MiwyNC4wNTF6XCIvPlxuXHRcdFx0XHRcdFx0PC9TVkdDb21wb25lbnQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYT5cblxuXHRcdFx0XHQ8TWVudSByZWY9J21lbnUnIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5iZWdpblNsaWRlID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydiZWdpbi1zbGlkZSddKVxuXHRcdHRoaXMubG9nbyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1snbG9nbyddKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBkb20odGhpcy5iZWdpblNsaWRlKS5hZGRDbGFzcygndHJhbnNpdGlvbi1pbicpIH0sIDEwMDApXG5cdFx0c2V0VGltZW91dCgoKT0+eyBkb20odGhpcy5iZWdpblNsaWRlKS5yZW1vdmVDbGFzcygndHJhbnNpdGlvbi1pbicpOyBkb20odGhpcy5iZWdpblNsaWRlKS5hZGRDbGFzcygndHJhbnNpdGlvbi1vdXQnKTsgfSwgNDAwMClcblx0XHQvLyBzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMuaW50cm9GaW5pc2hlZCgpIH0sIDUwMDApXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmludHJvRmluaXNoZWQoKSB9LCA1MDApXG5cblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dmFyIGl0ZW0gPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcblx0XHR0aGlzLnJlZnNbJ21lbnUnXS5oaWdobGlnaHRCeUl0ZW0oaXRlbSlcblx0fVxuXHRpbnRyb0ZpbmlzaGVkKCkge1xuXHRcdGRvbSh0aGlzLmJlZ2luU2xpZGUpLnJlbW92ZSgpXG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5JTlRST19GSU5JU0hFRCwgdGhpcy5pbnRyb0ZpbmlzaGVkKVxuXHRcdFxuXHRcdHRoaXMucmVmc1snbWVudSddLnRyYW5zaXRpb25JbigpXG5cdFx0ZG9tKHRoaXMubG9nbykuYWRkQ2xhc3MoJ3RyYW5zaXRpb24taW4nKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdFxuXHRcdHRoaXMucmVmc1snbWVudSddLnJlc2l6ZSgpXG5cblx0XHR0aGlzLmJlZ2luU2xpZGUuc3R5bGUud2lkdGggPSB3aW5kb3dXICsgJ3B4J1xuXHRcdHRoaXMuYmVnaW5TbGlkZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3dIICsgJ3B4J1xuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgc2l6ZSBmcm9tICdlbGVtZW50LXNpemUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5tb3VzZUVudGVyID0gdGhpcy5tb3VzZUVudGVyLmJpbmQodGhpcylcblx0XHR0aGlzLm1vdXNlTGVhdmUgPSB0aGlzLm1vdXNlTGVhdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMuY2xpY2sgPSB0aGlzLmNsaWNrLmJpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIG1lbnVEYXRhID0gQXBwU3RvcmUubWVudUNvbnRlbnQoKVxuXHRcdHZhciBtZW51SXRlbXMgPSBtZW51RGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0dmFyIHBhdGhVcmwgPSAnIycgKyBpdGVtLnVybFxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8bGkgaWQ9e2l0ZW0uaWR9IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdDxhIGhyZWY9e3BhdGhVcmx9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXRpbi1udW1cIj57aXRlbVsnbGF0aW4tbnVtJ119PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0ubmFtZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdClcblx0XHR9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHJlZj0nbWVudScgaWQ9J21lbnUnPiBcblx0XHRcdFx0e21lbnVJdGVtc31cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnBhcmVudCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1snbWVudSddKVxuXHRcdFxuXHRcdHRoaXMuaXRlbXMgPSBbXVxuXHRcdHZhciBidG5zID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJ2xpJylcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBidG4gPSBidG5zW2ldXG5cdFx0XHR2YXIgdGl0bGUgPSBkb20oYnRuKS5zZWxlY3QoJy50aXRsZScpWzBdXG5cdFx0XHR2YXIgY2hhcnMgPSBVdGlscy5UcmFuZm9ybUFycmF5RnJvbU1pZGRsZUFuZE91dChuZXcgU3BsaXRUZXh0KHRpdGxlLCB7IHR5cGU6J2NoYXJzJyB9KS5jaGFycylcblx0XHRcdFxuXHRcdFx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG5cdFx0XHR0bC5zdGFnZ2VyRnJvbShjaGFycywgMSwgeyBvcGFjaXR5OjAsIHk6MTAsIHNjYWxlWTowLjgsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuMDEsIDApXG5cdFx0XHR0bC5wYXVzZSgwKVxuXG5cdFx0XHR2YXIgdGxIb21lID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG5cdFx0XHR0bEhvbWUuc3RhZ2dlclRvKGNoYXJzLCAxLCB7IHk6LTEwLCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjAxLCAwKVxuXHRcdFx0dGxIb21lLnBhdXNlKDApXG5cblx0XHRcdGRvbShidG4pLm9uKCdtb3VzZWVudGVyJywgdGhpcy5tb3VzZUVudGVyKVxuXHRcdFx0ZG9tKGJ0bikub24oJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlTGVhdmUpXG5cdFx0XHRkb20oYnRuKS5vbignY2xpY2snLCB0aGlzLmNsaWNrKVxuXG5cdFx0XHR0aGlzLml0ZW1zW2ldID0ge1xuXHRcdFx0XHRlbDogYnRuLFxuXHRcdFx0XHRpZDogYnRuLmlkLFxuXHRcdFx0XHR0bDogdGwsXG5cdFx0XHRcdHRsSG9tZTogdGxIb21lLFxuXHRcdFx0XHRoaWdobGlnaHQ6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdG1vdXNlRW50ZXIoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChlLmN1cnJlbnRUYXJnZXQuaWQpXG5cdFx0dmFyIGN1cnJlbnRQYWdlSWQgPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKCkuaWRcblxuXHRcdGlmKGN1cnJlbnRQYWdlSWQgIT0gJ2hvbWUnKSB7XG5cdFx0XHRpZighaXRlbS5oaWdobGlnaHQpIHtcblx0XHRcdFx0ZG9tKGl0ZW0uZWwpLmFkZENsYXNzKCdob3ZlcmVkJylcblx0XHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdFx0aXRlbS50bC50aW1lU2NhbGUoMS42KS5wbGF5KDApXG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRkb20oaXRlbS5lbCkuYWRkQ2xhc3MoJ2hvdmVyZWQtaG9tZScpXG5cdFx0XHRpdGVtLnRsSG9tZS50aW1lU2NhbGUoMikucGxheSgwKVxuXHRcdH1cblxuXHR9XG5cdG1vdXNlTGVhdmUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChlLmN1cnJlbnRUYXJnZXQuaWQpXG5cdFx0dmFyIGN1cnJlbnRQYWdlSWQgPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKCkuaWRcblxuXHRcdGlmKGN1cnJlbnRQYWdlSWQgIT0gJ2hvbWUnKSB7XG5cdFx0XHRpZighaXRlbS5oaWdobGlnaHQpIHtcblx0XHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdob3ZlcmVkJylcblx0XHRcdFx0ZG9tKGl0ZW0uZWwpLmFkZENsYXNzKCdkaXNhYmxlJylcblx0XHRcdFx0aXRlbS50bC50aW1lU2NhbGUoMikucmV2ZXJzZSgpXG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQtaG9tZScpXG5cdFx0XHRpdGVtLnRsSG9tZS50aW1lU2NhbGUoMykucmV2ZXJzZSgpXG5cdFx0fVxuXHR9XG5cdGNsaWNrKGUpIHtcblx0XHR2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5SWQoZS5jdXJyZW50VGFyZ2V0LmlkKVxuXHRcdGl0ZW0udGwudGltZVNjYWxlKDEuNikucmV2ZXJzZSgpXG5cdFx0aXRlbS50bEhvbWUudGltZVNjYWxlKDEuNikucmV2ZXJzZSgpXG5cdH1cblx0aGlnaGxpZ2h0QnlJdGVtKGl0ZW0pIHtcblxuXHRcdC8vIGlmIEhvbWUgcmVtb3ZlIGFsbCBoaWdobGlnaHRzIGFuZCByZXR1cm5cblx0XHRpZihpdGVtLmlkID09ICdob21lJykge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBidG4gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0VG9Ib21lU3RhdGUoYnRuKVxuXHRcdFx0fTtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdGlmKGJ0bi5pZCA9PSBpdGVtLmlkKSB0aGlzLmFkZEhpZ2hsaWdodChidG4pXG5cdFx0XHRlbHNlIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KGJ0bilcblx0XHR9O1xuXHR9XG5cdGFkZEhpZ2hsaWdodChpdGVtKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0ZG9tKGl0ZW0uZWwpLmFkZENsYXNzKCdlbmFibGUnKVxuXHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnaG92ZXJlZC1ob21lJylcblx0XHRcdGl0ZW0uaGlnaGxpZ2h0ID0gdHJ1ZVxuXHRcdFx0aXRlbS50bC50aW1lU2NhbGUoMikucmV2ZXJzZSgpXG5cdFx0fSwgMTAwMClcblx0fVxuXHRyZW1vdmVIaWdobGlnaHQoaXRlbSkge1xuXHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnZW5hYmxlJylcblx0XHRkb20oaXRlbS5lbCkuYWRkQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnaG92ZXJlZC1ob21lJylcblx0XHRpdGVtLmhpZ2hsaWdodCA9IGZhbHNlXG5cdFx0aXRlbS50bC50aW1lU2NhbGUoMikucmV2ZXJzZSgpXG5cdH1cblx0aGlnaGxpZ2h0VG9Ib21lU3RhdGUoaXRlbSkge1xuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnZW5hYmxlJylcblx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpXG5cdFx0XHRpdGVtLnRsLnRpbWVTY2FsZSgxKS5wbGF5KDApXG5cdFx0fSwgMTAwMClcblx0XHRpdGVtLmhpZ2hsaWdodCA9IGZhbHNlXG5cdH1cblx0Z2V0SXRlbUJ5SWQoaWQpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXVxuXHRcdFx0aWYoaXRlbS5pZCA9PSBpZCkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0dHJhbnNpdGlvbkluKCkge1xuXHRcdGRvbSh0aGlzLnBhcmVudCkuYWRkQ2xhc3MoJ3RyYW5zaXRpb24taW4nKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBwYXJlbnRTaXplID0gc2l6ZSh0aGlzLnBhcmVudClcblx0XHR2YXIgcGFyZW50Q3NzID0ge1xuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAocGFyZW50U2l6ZVswXSA+PiAxKSArICdweCcsXG5cdFx0XHR0b3A6IHdpbmRvd0ggLSAocGFyZW50U2l6ZVsxXSkgLSBBcHBDb25zdGFudHMuT1ZFUkFMTF9NQVJHSU4gKyAncHgnXG5cdFx0fVxuXHRcdGRvbSh0aGlzLnBhcmVudCkuc3R5bGUocGFyZW50Q3NzKVxuXHR9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQWENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLkFERF9QWF9DSElMRCwgdGhpcy5hZGQpXG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlJFTU9WRV9QWF9DSElMRCwgdGhpcy5yZW1vdmUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhcy1ob2xkZXJcIj48L2NhbnZhcz5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgY2FudmFzID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5jYW52YXMtaG9sZGVyJylbMF1cblx0XHR2YXIgcmVuZGVyZXIgPSBuZXcgUElYSS5DYW52YXNSZW5kZXJlcigwLCAwLCB7IHZpZXc6Y2FudmFzIH0pXG5cdFx0cmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkZcblxuXHRcdHRoaXMucGl4aSA9IHtcblx0XHRcdGNhbnZhczogY2FudmFzLFxuXHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyLFxuXHRcdFx0c3RhZ2U6IHN0YWdlXG5cdFx0fVxuXHR9XG5cdGFkZChpdGVtKSB7XG5cdFx0dGhpcy5waXhpLnN0YWdlLmFkZENoaWxkKGl0ZW0uY2hpbGQpXG5cdH1cblx0cmVtb3ZlKGl0ZW0pIHtcblx0XHR0aGlzLnBpeGkuc3RhZ2UucmVtb3ZlQ2hpbGQoaXRlbS5jaGlsZClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHNjYWxlID0gMVxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5waXhpLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3dIICsgJ3B4J1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZXNpemUod2luZG93VyAqIHNjYWxlLCB3aW5kb3dIICogc2NhbGUpXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucGl4aS5yZW5kZXJlci5yZW5kZXIodGhpcy5waXhpLnN0YWdlKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQmFzZVBhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IHNjcm9sbHRvcCBmcm9tICdzaW1wbGUtc2Nyb2xsdG9wJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXG5cdFx0c2V0VGltZW91dCgoKT0+eyBBcHBBY3Rpb25zLmFkZFBYQ2hpbGQodGhpcy5jb250YWluZXIpIH0sIDApXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXHRcdHRoaXMuZWxlbWVudHNIb2xkZXIgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLmVsZW1lbnRzLWhvbGRlcicpWzBdXG5cdFx0dGhpcy5pbnRyb1NsaWRlID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy5pbnRyby1zbGlkZScpWzBdXG5cdFx0dGhpcy5mcm9udEhvbGRlciA9IGRvbSh0aGlzLmludHJvU2xpZGUpLnNlbGVjdCgnLmZyb250LWhvbGRlcicpWzBdXG5cdFx0XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0c2Nyb2xsdG9wKDApXG5cdFx0fSwgMTAwMClcblx0XHRzdXBlci53aWxsVHJhbnNpdGlvbkluKClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gdHJhbnNpdGlvbiBJblxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5pbnRyb1NsaWRlLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCB7IG9wYWNpdHk6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxJbi50byh0aGlzLmludHJvU2xpZGUsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDMpXG5cdFx0dGhpcy50bEluLmZyb21Ubyh0aGlzLmVsZW1lbnRzSG9sZGVyLCAxLCB7IG9wYWNpdHk6MCB9LCB7IG9wYWNpdHk6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAyKVxuXHRcdHRoaXMudGxJbi5mcm9tVG8odGhpcy5jb250YWluZXIsIDEsIHsgYWxwaGE6MCB9LCB7IGFscGhhOjEsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMilcblxuXHRcdC8vIHRyYW5zaXRpb24gT3V0XG5cdFx0dGhpcy50bE91dC50byh0aGlzLmVsZW1lbnRzSG9sZGVyLCAxLCB7IG9wYWNpdHk6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXHRcdHRoaXMudGxPdXQudG8odGhpcy5jb250YWluZXIsIDEsIHsgYWxwaGE6MCwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAwKVxuXG5cdFx0c3VwZXIuc2V0dXBBbmltYXRpb25zKClcblx0fVxuXHRnZXRCYXNlUGFnZURvbShodG1sKSB7XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcblx0XHR2YXIgaWQgPSBjb250ZW50LmlkICsgJy1wYWdlJ1xuXG5cdFx0dmFyIGZyb250SG9sZGVyO1xuXHRcdGlmKGNvbnRlbnQuaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmcm9udEhvbGRlciA9IChcblx0XHRcdFx0PGRpdj48L2Rpdj5cblx0XHRcdClcblx0XHR9ZWxzZXtcblx0XHRcdGZyb250SG9sZGVyID0gPGRpdiBjbGFzc05hbWU9J3RpdGxlJz57Y29udGVudC5uYW1lfTwvZGl2PlxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPXtpZH0gcmVmPSdwYWdlLXdyYXBwZXInIGNsYXNzTmFtZT0ncGFnZS13cmFwcGVyJz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzLWhvbGRlclwiPntodG1sfTwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyb250LWhvbGRlclwiPntmcm9udEhvbGRlcn08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHR1cGRhdGUoKSB7XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgdGl0bGVTaXplID0gc2l6ZSh0aGlzLmZyb250SG9sZGVyKVxuXHRcdHRoaXMuZnJvbnRIb2xkZXIuc3R5bGUubGVmdCA9ICh3aW5kb3dXID4+IDEpIC0gKHRpdGxlU2l6ZVswXSA+PiAxKSArICdweCdcblx0XHR0aGlzLmZyb250SG9sZGVyLnN0eWxlLnRvcCA9ICh3aW5kb3dIID4+IDEpIC0gKHRpdGxlU2l6ZVsxXSA+PiAxKSArICdweCdcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XG5cdFx0SGVscGVycy5yZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXIodGhpcy5jb250YWluZXIpXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMucmVtb3ZlUFhDaGlsZCh0aGlzLmNvbnRhaW5lcikgfSwgMClcblxuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZVBhZ2VyIGZyb20gJ0Jhc2VQYWdlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgSG9tZSBmcm9tICdIb21lJ1xuaW1wb3J0IEluc3BpcmF0aW9uU3BhcmsgZnJvbSAnSW5zcGlyYXRpb25TcGFyaydcbmltcG9ydCBBcmNoaXRlY3R1cmUgZnJvbSAnQXJjaGl0ZWN0dXJlJ1xuaW1wb3J0IFF1aW50YWVzc2VuY2UgZnJvbSAnUXVpbnRhZXNzZW5jZSdcbmltcG9ydCBDcmVhdGl2aXR5SW5ub3ZhdGlvbiBmcm9tICdDcmVhdGl2aXR5SW5ub3ZhdGlvbidcbmltcG9ydCBTdHlsZSBmcm9tICdTdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNDb250YWluZXIgZXh0ZW5kcyBCYXNlUGFnZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuZGlkSGFzaGVyQ2hhbmdlID0gdGhpcy5kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbE1vdW50KClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0fVxuXHRkaWRIYXNoZXJDaGFuZ2UoKSB7XG5cdFx0dmFyIGhhc2ggPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG5cdFx0dmFyIHR5cGUgPSB1bmRlZmluZWRcblxuXHRcdHN3aXRjaChoYXNoLnBhcmVudCkge1xuXHRcdFx0Y2FzZSAnaW5zcGlyYXRpb24tc3BhcmsnOlxuXHRcdFx0XHR0eXBlID0gSW5zcGlyYXRpb25TcGFya1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnYXJjaGl0ZWN0dXJlJzpcblx0XHRcdFx0dHlwZSA9IEFyY2hpdGVjdHVyZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAncXVpbnRhZXNzZW5jZSc6XG5cdFx0XHRcdHR5cGUgPSBRdWludGFlc3NlbmNlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdjcmVhdGl2aXR5LWlubm92YXRpb24nOlxuXHRcdFx0XHR0eXBlID0gQ3JlYXRpdml0eUlubm92YXRpb25cblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3N0eWxlJzpcblx0XHRcdFx0dHlwZSA9IFN0eWxlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0eXBlID0gSG9tZVxuXHRcdH1cblx0XHR0aGlzLnNldHVwTmV3Q29tcG9uZW50KGhhc2gucGFyZW50LCB0eXBlKVxuXHR9XG59XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBzY3JvbGx0b3AgZnJvbSAnc2ltcGxlLXNjcm9sbHRvcCdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY2hpdGVjdHVyZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5wYWdlSGVpZ2h0ID0gMFxuXHRcdHRoaXMuY3VycmVudFNjcm9sbFBvcyA9IDBcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgZ2V0TWVkaWEgPSAoc3JjKT0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cblx0XHRcdFx0XHQ8dmlkZW8gbG9vcD0ndHJ1ZScgd2lkdGg9JzEwMCUnPlxuXHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPSd2aWRlby9tcDQnIHNyYz17c3JjfT48L3NvdXJjZT5cblx0XHRcdFx0XHQ8L3ZpZGVvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHR2YXIgdmlkZW9zID0gY29udGVudC52aWRlb3MubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdHZhciBzaWRlID0gVXRpbHMuSXNFdmVuKGluZGV4KSA/ICdsZWZ0JyA6ICdyaWdodCdcblx0XHRcdHZhciBjbGFzc2VzID0gJ3ZpZGVvLWl0ZW0gY2xlYXItZmxvYXQgJyArIHNpZGVcblx0XHRcdHZhciBzY3JlZW5zaG90UGF0aCA9ICdpbWFnZS92aWRlby1zY3JlZW5zLycgKyBpdGVtLmltZ25hbWVcblx0XHRcdHZhciB2aWRlb1BhdGggPSAndmlkZW8vYXJjaGl0ZWN0dXJlLycgKyBpdGVtLmZpbGVuYW1lXG5cdFx0XHR2YXIgc3JjX21wNCA9IHZpZGVvUGF0aCArICcubXA0J1xuXHRcdFx0dmFyIG1lZGlhID0gKGl0ZW0uZmlsZW5hbWUubGVuZ3RoIDwgMSkgPyAnJyA6IGdldE1lZGlhKHNyY19tcDQpXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0e21lZGlhfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOml0ZW0uZGVzY3JpcHRpb24gfSB9PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9KVxuXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnNpZGUtd3JhcHBlcic+XG5cdFx0XHRcdDxkaXYgcmVmPSd2aWRlb3MtY29udGFpbmVyJyBjbGFzc05hbWU9XCJ2aWRlb3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e3ZpZGVvc31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMudmlkZW9zQ29udGFpbmVyID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWyd2aWRlb3MtY29udGFpbmVyJ10pXG5cblx0ICAgIHZhciB0b3RhbEZyYW1lcyA9IDI2NlxuXHQgICAgdmFyIGJhZ0ltYWdlcyA9IEhlbHBlcnMuZ2V0RnJhbWVJbWFnZXNBcnJheSh0b3RhbEZyYW1lcywgJ2ltYWdlL2JhZy1zZXF1ZW5jZS90dXJuXycsICdqcGcnKVxuXHQgICAgdmFyIG1jID0gUElYSS5leHRyYXMuTW92aWVDbGlwLmZyb21JbWFnZXMoYmFnSW1hZ2VzKVxuICAgICAgICBtYy5hbmNob3IueCA9IDAuNVxuICAgICAgICBtYy5hbmNob3IueSA9IDAuNVxuXHQgICAgbWMuZ290b0FuZFN0b3AoMClcblx0ICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1jKVxuXHQgICAgXG5cdCAgICB0aGlzLmJnID0ge1xuXHQgICAgXHRtYzogbWMsXG5cdCAgICBcdHRvdGFsRnJhbWVzOiB0b3RhbEZyYW1lc1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnZpZGVvSXRlbXMgPSBbXVxuXHQgICAgdmFyIGl0ZW1zID0gZG9tKHRoaXMucGFyZW50KS5zZWxlY3QoJy52aWRlby1pdGVtJylcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0ICAgIFx0dmFyIGl0ZW0gPSBpdGVtc1tpXVxuXHQgICAgXHR2YXIgdmlkZW8gPSBkb20oaXRlbSkuc2VsZWN0KCd2aWRlbycpWzBdXG5cdCAgICBcdHRoaXMudmlkZW9JdGVtc1tpXSA9IHtcbiAgICBcdFx0XHRlbDogaXRlbSxcbiAgICBcdFx0XHR2aWRlbzogdmlkZW8sXG4gICAgXHRcdFx0bWVkaWFFbDogZG9tKGl0ZW0pLnNlbGVjdCgnLm1lZGlhJylbMF0sXG4gICAgXHRcdFx0dGl0bGVFbDogZG9tKGl0ZW0pLnNlbGVjdCgnLnRpdGxlJylbMF0sXG4gICAgXHRcdFx0ZGVzY3JpcHRpb25FbDogZG9tKGl0ZW0pLnNlbGVjdCgnLmRlc2NyaXB0aW9uJylbMF0sXG4gICAgXHRcdFx0aXNQbGF5aW5nOiBmYWxzZSxcbiAgICBcdFx0XHRpbmRleDogaVxuICAgIFx0XHR9XG5cdCAgICB9O1xuXG4gIFx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0Y2hlY2tWaWRlb3NWaWV3cG9ydEZvY3VzKCkge1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgc2Nyb2xsdCA9IHNjcm9sbHRvcCgpXG5cdFx0dmFyIG1hcmdpbiA9IHdpbmRvd0ggKiAwLjFcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9JdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnZpZGVvSXRlbXNbaV1cblx0XHRcdGlmKHNjcm9sbHQgKyB3aW5kb3dIID4gaXRlbS50b3AgKyAoIG1hcmdpbiAqIDIgKSAmJiBzY3JvbGx0IDwgaXRlbS50b3AgKyBpdGVtLnNpemVbMV0gLSBtYXJnaW4pIHtcblx0XHRcdFx0aWYoaXRlbS5pc1BsYXlpbmcgIT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGlmKGl0ZW0udmlkZW8gIT0gdW5kZWZpbmVkKSBpdGVtLnZpZGVvLnBsYXkoKVxuXHRcdFx0XHRcdGl0ZW0udGwucGxheSgwKVxuXHRcdFx0XHRcdGl0ZW0uaXNQbGF5aW5nID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aWYoaXRlbS5pc1BsYXlpbmcgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHRpZihpdGVtLnZpZGVvICE9IHVuZGVmaW5lZCkgaXRlbS52aWRlby5wYXVzZSgpXG5cdFx0XHRcdFx0aWYoaXRlbS52aWRlbyAhPSB1bmRlZmluZWQpIGl0ZW0udmlkZW8uY3VycmVudFRpbWUgPSAwXG5cdFx0XHRcdFx0aXRlbS50bC5yZXZlcnNlKClcblx0XHRcdFx0XHRpdGVtLmlzUGxheWluZyA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdCAgICBcblx0ICAgIC8vIGdldCBzY3JvbGx0b3AgcG9zaXRpb25cblx0ICAgIHRoaXMuY3VycmVudFNjcm9sbFBvcyA9IHNjcm9sbHRvcCgpXG5cblx0ICAgIC8vIHVwZGF0ZSBtYyBjdXJyZW50IGZyYW1lXG5cdCAgICB2YXIgY3VycmVudEZyYW1lID0gTWF0aC5mbG9vciggKCB0aGlzLmN1cnJlbnRTY3JvbGxQb3MgLyB0aGlzLnBhZ2VIZWlnaHQgKSAqIHRoaXMuYmcudG90YWxGcmFtZXMgKVxuXHQgICAgaWYoY3VycmVudEZyYW1lID4gdGhpcy5iZy50b3RhbEZyYW1lcykgY3VycmVudEZyYW1lID0gdGhpcy5iZy50b3RhbEZyYW1lc1xuXHQgICAgaWYoY3VycmVudEZyYW1lIDwgMCkgY3VycmVudEZyYW1lID0gMFxuXHQgICAgdGhpcy5iZy5tYy5nb3RvQW5kU3RvcChjdXJyZW50RnJhbWUpXG5cblx0ICAgIHRoaXMuY2hlY2tWaWRlb3NWaWV3cG9ydEZvY3VzKClcblxuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHBhcmVudFNpemUgPSBzaXplKHRoaXMucGFyZW50KVxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMucGFnZUhlaWdodCA9IDBcblx0XHRcdHZhciBzY3JvbGx0ID0gc2Nyb2xsdG9wKClcblx0XHRcdHZhciBtYXJnaW5Ub3AgPSAyNDBcblx0XHRcdHZhciBtYXJnaW5Cb3R0b20gPSAyNDBcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gdGhpcy52aWRlb0l0ZW1zW2ldXG5cdFx0XHRcdHZhciBpdGVtU2l6ZSA9IHNpemUoaXRlbS5lbClcblx0XHRcdFx0dmFyIGggPSBpdGVtU2l6ZVsxXSArIChtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b20pXG5cdFx0XHRcdGl0ZW0uc2l6ZSA9IGl0ZW1TaXplXG5cdFx0XHRcdGl0ZW0udG9wID0gdGhpcy5wYWdlSGVpZ2h0ICsgbWFyZ2luVG9wXG5cdFx0XHRcdGl0ZW0uZWwuc3R5bGUudG9wID0gKHRoaXMucGFnZUhlaWdodCArIG1hcmdpblRvcCkgKyAncHgnXG5cdFx0XHRcdGlmKGRvbShpdGVtLmVsKS5oYXNDbGFzcygncmlnaHQnKSkgaXRlbS5lbC5zdHlsZS5sZWZ0ID0gdGhpcy52aWRlb3NDb250YWluZXIub2Zmc2V0V2lkdGggLSBpdGVtU2l6ZVswXSArICdweCdcblx0XHRcdFx0aXRlbS55ID0gMFxuXHRcdFx0XHRcblx0XHRcdFx0aXRlbS5wTGluZXMgPSBuZXcgU3BsaXRUZXh0KGl0ZW0uZGVzY3JpcHRpb25FbCwgeyB0eXBlOidsaW5lcycgfSkubGluZXNcblx0XHRcdFx0aXRlbS50aXRsZUNoYXJzID0gVXRpbHMuVHJhbmZvcm1BcnJheUZyb21NaWRkbGVBbmRPdXQobmV3IFNwbGl0VGV4dChpdGVtLnRpdGxlRWwsIHsgdHlsZTonY2hhcnMnIH0pLmNoYXJzKVxuXG5cdFx0XHRcdGl0ZW0udGwgPSBuZXcgVGltZWxpbmVMaXRlKClcblx0XHRcdFx0aXRlbS50bC5zdGFnZ2VyRnJvbShpdGVtLnRpdGxlQ2hhcnMsIDEsIHsgb3BhY2l0eTowLCB5OjIwLCBzY2FsZVk6MC44LCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjA1LCAwLjMpXG5cdFx0XHRcdGlmKGl0ZW0udmlkZW8gIT0gdW5kZWZpbmVkKSBpdGVtLnRsLmZyb20oaXRlbS52aWRlbywgMSwgeyBvcGFjaXR5OjAsIHk6MjAsIHNjYWxlWToyLCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjUpXG5cdFx0XHRcdGl0ZW0udGwuc3RhZ2dlckZyb20oaXRlbS5wTGluZXMsIDEsIHsgb3BhY2l0eTowLCB5OjIwLCBzY2FsZVk6MC44LCBmb3JjZTNEOnRydWUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSAwJScsIGVhc2U6IEV4cG8uZWFzZU91dCB9LCAwLjA1LCAwLjgpXG5cdFx0XHRcdGl0ZW0udGwucGF1c2UoMClcblxuXHRcdFx0XHRpdGVtLmlzUGxheWluZyA9IGZhbHNlXG5cblx0XHRcdFx0dGhpcy5wYWdlSGVpZ2h0ICs9IGhcblx0XHRcdH07XG5cdFx0XHR0aGlzLnBhZ2VIZWlnaHQgKz0gMzAwXG5cdFx0XHR0aGlzLnZpZGVvc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhZ2VIZWlnaHQgKyAncHgnXG5cdFx0XHR0aGlzLnBhZ2VIZWlnaHQgLT0gd2luZG93SFxuXG5cdFx0fSwgMClcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHRcdHRoaXMuYmcubWMuZGVzdHJveSgpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZpZGVvSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpcy52aWRlb0l0ZW1zW2ldXG5cdFx0XHRpdGVtLnRsLmNsZWFyKClcblx0XHR9O1xuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGl2aXR5SW5ub3ZhdGlvbiBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy50aW1lID0gMFxuXHRcdHRoaXMuZGVidWdNb2RlID0gZmFsc2Vcblx0XHR0aGlzLmJvZGllcyA9IFtdXG5cblx0XHR0aGlzLk0gPSB7XG5cdFx0XHRFbmdpbmU6IE1hdHRlci5FbmdpbmUsXG5cdFx0ICAgIFdvcmxkOiBNYXR0ZXIuV29ybGQsXG5cdFx0ICAgIEJvZHk6IE1hdHRlci5Cb2R5LFxuXHRcdCAgICBCb2RpZXM6IE1hdHRlci5Cb2RpZXMsXG5cdFx0ICAgIENvbW1vbjogTWF0dGVyLkNvbW1vbixcblx0XHQgICAgQ29tcG9zaXRlczogTWF0dGVyLkNvbXBvc2l0ZXMsXG5cdFx0ICAgIENvbXBvc2l0ZTogTWF0dGVyLkNvbXBvc2l0ZSxcblx0XHQgICAgRXZlbnRzOiBNYXR0ZXIuRXZlbnRzLFxuXHRcdCAgICBNb3VzZTogTWF0dGVyLk1vdXNlLFxuXHRcdCAgICBNb3VzZUNvbnN0cmFpbnQ6IE1hdHRlci5Nb3VzZUNvbnN0cmFpbnRcblx0XHR9XG5cblx0XHR0aGlzLmV4cGxvc2lvbiA9IHRoaXMuZXhwbG9zaW9uLmJpbmQodGhpcylcblx0XHR0aGlzLm9uQ29sbGlzaW9uID0gdGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0dmFyIGVsID0gdGhpcy5kZWJ1Z01vZGUgPyB0aGlzLnBhcmVudCA6IHVuZGVmaW5lZFxuXHRcdHZhciBlbmdpbmUgPSB0aGlzLmVuZ2luZSA9IHRoaXMuTS5FbmdpbmUuY3JlYXRlKGVsLCB7XG5cdFx0XHRyZW5kZXI6IHtcblx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdHNob3dBbmdsZUluZGljYXRvcjogdHJ1ZSxcblx0XHRcdFx0XHR3aXJlZnJhbWVzOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGVuZ2luZS53b3JsZC5ncmF2aXR5LnggPSAwXG5cdFx0ZW5naW5lLndvcmxkLmdyYXZpdHkueSA9IDBcblxuXHRcdHRoaXMuYmcgPSB7XG5cdFx0XHRjb2xvcnM6IFtcblx0XHRcdFx0MHhmZmZmZmYsXG5cdFx0XHRcdDB4ZjU3NDc0LFxuXHRcdFx0XHQweDRBOTBFMlxuXHRcdFx0XSxcblx0XHRcdHNwcmluZ0NvbmZpZzoge1xuXHRcdFx0XHRzcHJpbmc6IDAuOCxcblx0XHRcdFx0ZnJpY3Rpb246IDAuNyxcblx0XHRcdFx0bGVuZ3RoOiAwLFxuXHRcdFx0XHRhbmdsZTogMCxcblx0XHRcdH0sXG5cdFx0XHRjb2xvckdyYXBoaWM6IG5ldyBQSVhJLkdyYXBoaWNzKCksXG5cdFx0XHRiYWdzOiBbXSxcblx0XHRcdGJhZ3NDb250YWluZXI6IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cdFx0fVxuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHZhciBiYWdVcmxzID0gY29udGVudC5iYWdVcmxzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiYWdVcmxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdXJsID0gJ2ltYWdlL2NyZWF0aXZpdHktYmFncy8nICsgYmFnVXJsc1tpXSArICcucG5nJ1xuXHRcdFx0dmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UodXJsKVxuXHRcdFx0c3ByaXRlLmFuY2hvci54ID0gc3ByaXRlLmFuY2hvci55ID0gMC41XG5cdFx0XHRzcHJpdGUuYWxwaGEgPSAwXG5cdFx0XHRzcHJpdGUudG9Qb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApXG5cdFx0XHRzcHJpdGUudmVsb2NpdHkgPSBuZXcgUElYSS5Qb2ludCgwLCAwKVxuXHRcdFx0dGhpcy5iZy5iYWdzQ29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSlcblx0XHRcdHRoaXMuYmcuYmFnc1tpXSA9IHNwcml0ZVxuXHRcdH07XG5cblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmJnLmNvbG9yR3JhcGhpYylcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmJnLmJhZ3NDb250YWluZXIpXG5cblx0XHR2YXIgYm9keU9wdGlvbnMgPSB7XG5cdFx0ICAgIGZyaWN0aW9uQWlyOiAwLCBcblx0XHQgICAgZnJpY3Rpb246IDAsXG5cdFx0ICAgIHJlc3RpdHV0aW9uOiAwLjZcblx0XHR9XG5cblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0dmFyIHBhdHRlcm5QYXRoID0gJ2ltYWdlL3BhdHRlcm5zLydcblx0XHR2YXIgcGF0dGVyblVybHMgPSBbXG5cdFx0XHQnYnJvd24teC1wYXR0ZXJuLmpwZycsXG5cdFx0XHQncGF0dGVybi5qcGcnLFxuXHRcdFx0J2Jyb3duLXgtcGF0dGVybi5qcGcnLFxuXHRcdFx0J3BhdHRlcm4uanBnJyxcblx0XHRdXG5cdFx0dmFyIGNpcmNsZVJhZGl1cyA9IDYwXG5cblx0XHQvLyBBZGQgY2lyY2xlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2YXIgYyA9IHRoaXMuTS5Cb2RpZXMuY2lyY2xlKHdpbmRvd1cgPj4gMSwgd2luZG93SCA+PiAxLCBjaXJjbGVSYWRpdXMsIGJvZHlPcHRpb25zKVxuXHRcdFx0dGhpcy5NLldvcmxkLmFkZChlbmdpbmUud29ybGQsIGMpXG5cblx0XHRcdHZhciBjaXJjbGUgPSBIZWxwZXJzLmdldEdyYXZpdHlDaXJjbGUocGF0dGVyblBhdGggKyBwYXR0ZXJuVXJsc1tpXSwgY2lyY2xlUmFkaXVzKVxuXHRcdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlLmNvbnRhaW5lcilcblxuXHRcdFx0Y2lyY2xlLmJvZHkgPSBjXG5cblx0XHRcdHRoaXMuYm9kaWVzLnB1c2goY2lyY2xlKVxuXHRcdH1cblxuXHRcdHZhciByZWN0VyA9IDIwMFxuXHRcdHZhciByZWN0SCA9IDYwXG5cblx0XHQvLyBBZGQgcmVjdHNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dmFyIHIgPSB0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSh3aW5kb3dXID4+IDEsIHdpbmRvd0ggPj4gMSwgcmVjdFcsIHJlY3RILCBib2R5T3B0aW9ucylcblx0XHRcdHRoaXMuTS5Xb3JsZC5hZGQoZW5naW5lLndvcmxkLCByKVxuXG5cdFx0XHR2YXIgcmVjdCA9IEhlbHBlcnMuZ2V0R3Jhdml0eVJlY3QocGF0dGVyblBhdGggKyBwYXR0ZXJuVXJsc1tpXSwgcmVjdFcsIHJlY3RIKVxuXHRcdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQocmVjdC5jb250YWluZXIpXG5cblx0XHRcdHJlY3QuYm9keSA9IHJcblxuXHRcdFx0dGhpcy5ib2RpZXMucHVzaChyZWN0KVxuXHRcdH07XG5cblx0XHQvLyBBZGQgV2FsbHNcblx0XHR0aGlzLmFkZFdhbGxzKClcblxuXHRcdC8vIHJ1biB0aGUgZW5naW5lXG5cdFx0dGhpcy5NLkVuZ2luZS5ydW4oZW5naW5lKVxuXG5cdFx0dGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5leHBsb3Npb24sIDUwMDApXG5cblx0XHR0aGlzLmV4cGxvc2lvbigpXG5cbiAgICAgICAgdGhpcy5NLkV2ZW50cy5vbihlbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHRoaXMub25Db2xsaXNpb24pXG5cblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0b25Db2xsaXNpb24oZXZlbnQpIHtcblxuXHRcdGlmKHRoaXMuY29sbGlzaW9uRW5hYmxlID09IGZhbHNlKSByZXR1cm5cblx0XHR0aGlzLmNvbGxpc2lvbkVuYWJsZSA9IGZhbHNlXG5cdFx0c2V0VGltZW91dCgoKT0+eyB0aGlzLmNvbGxpc2lvbkVuYWJsZSA9IHRydWUgfSwgMjAwKVxuXG4gICAgICAgIHZhciBwYWlycyA9IGV2ZW50LnBhaXJzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgaWYocGFpci5ib2R5QS5pc1N0YXRpYyB8fCBwYWlyLmJvZHlCLmlzU3RhdGljKSByZXR1cm5cbiAgICAgICAgXHR0aGlzLnVwZGF0ZUJnQ29sb3IoKVxuICAgICAgICBcdHRoaXMudXBkYXRlQmFnKClcbiAgICAgICAgfVxuXHR9XG5cdHVwZGF0ZUJhZygpIHtcblx0XHR2YXIgYmFncyA9IHRoaXMuYmcuYmFnc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYmFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJhZyA9IGJhZ3NbaV1cblx0XHRcdGJhZy5hbHBoYSA9IDBcblx0XHRcdGJhZy54ID0gMFxuXHRcdFx0YmFnLnkgPSAxMFxuXHRcdH07XG5cdFx0dGhpcy5iZy5zcHJpbmdDb25maWcubGVuZ3RoID0gNjBcblx0XHR2YXIgcmFuZEluZGV4ID0gVXRpbHMuUmFuZCgwLCBiYWdzLmxlbmd0aCAtIDEsIDApXG5cdFx0YmFnc1tyYW5kSW5kZXhdLmFscGhhID0gMVxuXHR9XG5cdHVwZGF0ZUJnQ29sb3IoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmFuZEluZGV4ID0gVXRpbHMuUmFuZCgwLCB0aGlzLmJnLmNvbG9ycy5sZW5ndGggLSAxLCAwKVxuXHRcdHZhciBjb2xvciA9IHRoaXMuYmcuY29sb3JzW3JhbmRJbmRleF1cblx0XHR2YXIgZyA9IHRoaXMuYmcuY29sb3JHcmFwaGljXG5cdFx0XG5cdFx0Zy5jbGVhcigpXG5cdFx0Zy5iZWdpbkZpbGwoY29sb3IsIDEpXG5cdFx0Zy5kcmF3UmVjdCgwLCAwLCB3aW5kb3dXLCB3aW5kb3dIKVxuXHRcdGcuZW5kRmlsbCgpXG5cdH1cblx0YWRkV2FsbHMoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgc2l6ZSA9IDUwXG5cdFx0dmFyIHdhbGxXID0gd2luZG93V1xuXHRcdHZhciB3YWxsSCA9IHdpbmRvd0hcblx0XHR0aGlzLk0uV29ybGQuYWRkKHRoaXMuZW5naW5lLndvcmxkLCBbXG5cdFx0XHR0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSgwLCAtc2l6ZSAvIDIsIHdhbGxXICogMiwgc2l6ZSwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcblx0XHRcdHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKC1zaXplIC8gMiwgMCwgc2l6ZSwgd2FsbEggKiAyLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdFx0dGhpcy5NLkJvZGllcy5yZWN0YW5nbGUoMCwgd2luZG93SCArIHNpemUgLyAyLCB3YWxsVyAqIDIsIHNpemUsIHsgaXNTdGF0aWM6IHRydWUgfSksXG5cdFx0XHR0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSh3aW5kb3dXICsgc2l6ZSAvIDIsIDAsIHNpemUsIHdhbGxIICogMiwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcblx0XHRdKTtcblx0fVxuXHRleHBsb3Npb24oKSB7XG5cdCAgICB2YXIgYm9kaWVzID0gdGhpcy5NLkNvbXBvc2l0ZS5hbGxCb2RpZXModGhpcy5lbmdpbmUud29ybGQpO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG5cdCAgICAgICAgaWYgKCFib2R5LmlzU3RhdGljKSB7XG5cdCAgICAgICAgICAgIHZhciBmb3JjZU1hZ25pdHVkZSA9IDAuMDAxICogYm9keS5tYXNzO1xuXG5cdCAgICAgICAgICAgIC8vIGFwcGx5IGV4dHJhIGZvcmNlXG5cdCAgICAgICAgICAgIHRoaXMuTS5Cb2R5LmFwcGx5Rm9yY2UoYm9keSwgeyB4OiAwLCB5OiAwIH0sIHsgXG5cdCAgICAgICAgICAgICAgICB4OiAoZm9yY2VNYWduaXR1ZGUgKyBNYXRoLnJhbmRvbSgpICogZm9yY2VNYWduaXR1ZGUpICogdGhpcy5NLkNvbW1vbi5jaG9vc2UoWzEsIC0xXSksIFxuXHQgICAgICAgICAgICAgICAgeTogLWZvcmNlTWFnbml0dWRlICsgTWF0aC5yYW5kb20oKSAqIC1mb3JjZU1hZ25pdHVkZVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICAvLyBhZGQgYm91bmRzIHRvIHZlbG9jaXR5XG5cdCAgICAgICAgICAgIHZhciBib3VuZCA9IDAuNVxuXHQgICAgICAgICAgICBpZihNYXR0ZXIuVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KSA+IGJvdW5kKSB7XG5cdFx0XHRcdFx0dGhpcy5NLkJvZHkuc2V0VmVsb2NpdHkoYm9keSwgeyB4OiBNYXRoLm1pbihib3VuZCwgYm9keS52ZWxvY2l0eS54KSwgeTogTWF0aC5taW4oYm91bmQsIGJvZHkudmVsb2NpdHkueCkgfSApXG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBhZGQgYm91bmRzIHRvIHJvdGF0aW9uXG5cdFx0XHRcdGlmKGJvZHkuYW5ndWxhclNwZWVkID4gMC4wMikge1xuXHRcdCAgICAgICAgICAgIHRoaXMuTS5Cb2R5LnNldEFuZ3VsYXJWZWxvY2l0eShib2R5LCBib2R5LmFuZ3VsYXJWZWxvY2l0eSotMC4xKTtcblx0XHRcdFx0fVxuXG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cdHVwZGF0ZSgpIHtcblxuXHRcdHRoaXMudGltZSArPSAwLjAwNVxuXHRcdHRoaXMuZW5naW5lLndvcmxkLmdyYXZpdHkueSA9IE1hdGguc2luKHRoaXMudGltZSkgKiAwLjAyXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYm9keSA9IHRoaXMuYm9kaWVzW2ldXG5cdFx0XHRib2R5LmNvbnRhaW5lci54ID0gYm9keS5ib2R5LnBvc2l0aW9uLnhcblx0XHRcdGJvZHkuY29udGFpbmVyLnkgPSBib2R5LmJvZHkucG9zaXRpb24ueVxuXHRcdFx0Ym9keS5jb250YWluZXIucm90YXRpb24gPSBib2R5LmJvZHkuYW5nbGVcblx0XHR9O1xuXG5cblx0XHR2YXIgY29uZmlnID0gdGhpcy5iZy5zcHJpbmdDb25maWdcblx0XHR2YXIgYW5nbGUgPSBjb25maWcuYW5nbGVcblx0XHR2YXIgYmFncyA9IHRoaXMuYmcuYmFnc1xuXHRcdGFuZ2xlICs9IDAuMVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYmFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJhZyA9IGJhZ3NbaV1cblx0XHRcdFV0aWxzLlNwcmluZ1RvKGJhZywgYmFnLnRvUG9zaXRpb24sIGksIGNvbmZpZylcblx0XHRcdGJhZy54ICs9IGJhZy52ZWxvY2l0eS54XG5cdFx0XHRiYWcueSArPSBiYWcudmVsb2NpdHkueVxuXHRcdH07XG5cblx0XHRjb25maWcubGVuZ3RoICs9ICgwLjAxIC0gY29uZmlnLmxlbmd0aCkgKiAwLjVcblxuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XICogMC44LCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0ggKiAwLjgpXG5cblx0XHR0aGlzLmJnLmJhZ3NDb250YWluZXIueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcuYmFnc0NvbnRhaW5lci55ID0gKCB3aW5kb3dIID4+IDEgKSAtICggd2luZG93SCAqIDAuMDIgKVxuXHRcdHRoaXMuYmcuYmFnc0NvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5iZy5iYWdzQ29udGFpbmVyLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRpZih0aGlzLmRlYnVnTW9kZSkge1xuXHRcdFx0dmFyIGNhbnZhcyA9IHRoaXMuZW5naW5lLnJlbmRlci5jYW52YXNcblx0XHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvd1dcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3dIXG5cdFx0fVxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdFx0dGhpcy5NLkV2ZW50cy5vZmYodGhpcy5lbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHRoaXMub25Db2xsaXNpb24pXG5cdFx0dGhpcy5NLkVuZ2luZS5jbGVhcih0aGlzLmVuZ2luZSlcblx0XHRIZWxwZXJzLnJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcih0aGlzLmJnLmJhZ3NDb250YWluZXIpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJnLmJhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBiYWcgPSB0aGlzLmJnLmJhZ3NbaV1cblx0XHRcdGJhZy5kZXN0cm95KClcblx0XHR9O1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFxuXHRcdHRoaXMucHhWaWRlbyA9IEhlbHBlcnMuZ2V0UFhWaWRlbygndmlkZW8vVHJpcHR5Y2ggLSAyLm1wNCcsIDE5MjAsIDEwODApXG5cdFx0dGhpcy5weFZpZGVvLmFuY2hvci54ID0gdGhpcy5weFZpZGVvLmFuY2hvci55ID0gMC41XG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5weFZpZGVvKVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXG5cdFx0XHR2YXIgdmlkZW9WaWV3cG9ydCA9IFsgd2luZG93VyAqIDAuOCwgd2luZG93SCAqIDAuOCBdXG5cdFx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkodmlkZW9WaWV3cG9ydFswXSwgdmlkZW9WaWV3cG9ydFsxXSwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHRcdHRoaXMucHhWaWRlby54ID0gd2luZG93VyA+PiAxXG5cdFx0XHR0aGlzLnB4VmlkZW8ueSA9ICggd2luZG93SCA+PiAxICkgLSAoIHdpbmRvd0ggKiAwLjAxIClcblx0XHRcdHRoaXMucHhWaWRlby5zY2FsZS54ID0gdGhpcy5weFZpZGVvLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHR9LCAxMDAwKVxuXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5weFZpZGVvKVxuXHRcdFV0aWxzLkRlc3Ryb3lWaWRlb1RleHR1cmUodGhpcy5weFZpZGVvLnRleHR1cmUpXG5cdFx0dGhpcy5weFZpZGVvLnRleHR1cmUuZGVzdHJveSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kZXN0cm95KClcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGlyYXRpb25TcGFyayBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdGFuaW1hdGUoKSB7XG5cdFx0c3VwZXIuYW5pbWF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpbnRhZXNzZW5jZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5tb3VzZU1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YWdlTW91c2VPdXQgPSB0aGlzLnN0YWdlTW91c2VPdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdFx0dGhpcy5kcmFnVmFycyA9IHtcblx0XHRcdHN0YXJ0UG9zOiAwLFxuXHRcdFx0Zm9yY2U6IDAuMSxcblx0XHRcdGRpcmVjdGlvbjogMSxcblx0XHRcdGFjdGl2ZTogZmFsc2Vcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMjY2XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvdGhyZWVzaXh0eS90dXJuXycsICdqcGcnKVxuXHQgICAgdmFyIG1jID0gUElYSS5leHRyYXMuTW92aWVDbGlwLmZyb21JbWFnZXMoYmFnSW1hZ2VzKVxuICAgICAgICBtYy5hbmNob3IueCA9IDAuNVxuICAgICAgICBtYy5hbmNob3IueSA9IDAuNVxuXHQgICAgbWMuZ290b0FuZFN0b3AoMClcblx0ICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1jKVxuXHQgICAgXG5cdCAgICB0aGlzLmJnID0ge1xuXHQgICAgXHRtYzogbWMsXG5cdCAgICBcdHRvdGFsRnJhbWVzOiB0b3RhbEZyYW1lcyxcblx0ICAgIFx0Y3VycmVudEZyYW1lOiAwXG5cdCAgICB9XG5cblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKVxuXHQgICAgZG9tKHRoaXMucGFyZW50KS5vbignbW91c2V1cCcsIHRoaXMubW91c2VVcClcblx0ICAgIGRvbShkb2N1bWVudCkub24oJ21vdXNlb3V0JywgdGhpcy5zdGFnZU1vdXNlT3V0KVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdG1vdXNlRG93bihlKSB7XG5cdFx0ZG9tKHdpbmRvdykub24oJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKVxuXHRcdHRoaXMuZHJhZ1ZhcnMuYWN0aXZlID0gdHJ1ZVxuXHRcdHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MgPSBlLmNsaWVudFhcblx0fVxuXHRtb3VzZVVwKCkge1xuXHRcdHRoaXMuZGlzYWJsZURyYWcoKVxuXHR9XG5cdHN0YWdlTW91c2VPdXQoZSkge1xuXHRcdGUgPSBlID8gZSA6IHdpbmRvdy5ldmVudDtcbiAgICAgICAgdmFyIGZyb20gPSBlLnJlbGF0ZWRUYXJnZXQgfHwgZS50b0VsZW1lbnQ7XG4gICAgICAgIGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09IFwiSFRNTFwiKSB7XG5cdFx0XHR0aGlzLmRpc2FibGVEcmFnKClcbiAgICAgICAgfVxuXHR9XG5cdG1vdXNlTW92ZShlKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHRoaXMubW91c2UueCA9IGUuY2xpZW50WFxuXHRcdHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuXG5cdFx0dGhpcy5kcmFnVmFycy5kaXJlY3Rpb24gPSAoIHRoaXMubW91c2UueCA+IHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MgKSA/IDEgOiAtMVxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMubW91c2UueCAtIHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MpIC8gd2luZG93V1xuXG5cdFx0dGhpcy5kcmFnVmFycy5mb3JjZSArPSAoOCAqIHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uKSAqIE1hdGgubWluKGRpc3RhbmNlLCAxMDApXG5cdH1cblx0ZGlzYWJsZURyYWcoKSB7XG5cdFx0ZG9tKHdpbmRvdykub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0XHR0aGlzLmRyYWdWYXJzLmFjdGl2ZSA9IGZhbHNlXG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93LndcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDAuMDAwMDAxIC0gdGhpcy5kcmFnVmFycy5mb3JjZSkgKiAwLjRcblx0ICAgIFx0XG5cdCAgICAvLyB1cGRhdGUgbWMgY3VycmVudCBmcmFtZVxuXHQgICAgdmFyIG5ld0ZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmJnLmN1cnJlbnRGcmFtZSArIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpXG5cdCAgICB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IG5ld0ZyYW1lXG5cdCAgICBpZih0aGlzLmJnLmN1cnJlbnRGcmFtZSA+IHRoaXMuYmcudG90YWxGcmFtZXMpIHRoaXMuYmcuY3VycmVudEZyYW1lID0gMFxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPCAwKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IHRoaXMuYmcudG90YWxGcmFtZXNcblx0ICAgIHRoaXMuYmcubWMuZ290b0FuZFN0b3AodGhpcy5iZy5jdXJyZW50RnJhbWUpXG5cblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHRcdHRoaXMuYmcubWMuZGVzdHJveSgpXG5cdFx0ZG9tKHRoaXMucGFyZW50KS5vZmYoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKVxuXHQgICAgZG9tKHRoaXMucGFyZW50KS5vZmYoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApXG5cdCAgICBkb20oZG9jdW1lbnQpLm9mZignbW91c2VvdXQnLCB0aGlzLnN0YWdlTW91c2VPdXQpXG5cdCAgICBkb20od2luZG93KS5vZmYoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuXHRcdHRoaXMucmVtb3ZlU3ByaXRlID0gdGhpcy5yZW1vdmVTcHJpdGUuYmluZCh0aGlzKVxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdXG5cdFx0dGhpcy5tb3VzZSA9IHsgeDowLCB5OjAgfVxuXHRcdHRoaXMuYWN0aXZlU3ByaXRlcyA9IFtdXG5cdFx0dGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSA9IHRydWVcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpIFx0XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHR2YXIgdG90YWxGcmFtZXMgPSAyNjZcblx0ICAgIHZhciBiYWdJbWFnZXMgPSBIZWxwZXJzLmdldEZyYW1lSW1hZ2VzQXJyYXkodG90YWxGcmFtZXMsICdpbWFnZS9iYWctdHVybi1saWdodC90dXJuXycsICdqcGcnKVxuXHQgICAgdmFyIG1jID0gUElYSS5leHRyYXMuTW92aWVDbGlwLmZyb21JbWFnZXMoYmFnSW1hZ2VzKVxuICAgICAgICBtYy5hbmNob3IueCA9IDAuNVxuICAgICAgICBtYy5hbmNob3IueSA9IDAuNVxuXHQgICAgbWMuZ290b0FuZFN0b3AoMClcblx0ICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1jKVxuXHQgICAgXG5cdCAgICB0aGlzLmJnID0ge1xuXHQgICAgXHRtYzogbWMsXG5cdCAgICBcdHRvdGFsRnJhbWVzOiB0b3RhbEZyYW1lcyxcblx0ICAgIFx0Y3VycmVudEZyYW1lOiAwXG5cdCAgICB9XG5cdCAgICB0aGlzLmJnLm1jLnBsYXkoKVxuXG5cdFx0dGhpcy5pbWFnZXNDb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuaW1hZ2VzQ29udGFpbmVyKVxuXG5cdFx0dGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5yZW1vdmVTcHJpdGUsIDc1KVxuXHRcdGRvbSh3aW5kb3cpLm9uKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpXG5cdFx0dGhpcy5jb3VudGVyID0gMFxuXG5cdFx0dGhpcy5sb2FkSW1hZ2VzKClcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRsb2FkSW1hZ2VzKCkge1xuXHRcdHZhciBwYWdlQ29udGVudCA9IEFwcFN0b3JlLnBhZ2VDb250ZW50KClcblx0XHR2YXIgaW1hZ2VTcmNzID0gcGFnZUNvbnRlbnQuaW1hZ2VzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZVNyY3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBmaWxlbmFtZSA9IGltYWdlU3Jjc1tpXVxuXHRcdFx0dmFyIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdpbWFnZS9zdHlsZS1pbWFnZXMvJyArIGZpbGVuYW1lKTtcblx0XHRcdHRoaXMudGV4dHVyZXMucHVzaCh0ZXh0dXJlKVxuXHRcdH07XG5cdH1cblx0YWRkU3ByaXRlKCkge1xuXHRcdHZhciByYW5kb21OdW0gPSBVdGlscy5SYW5kKDAsIHRoaXMudGV4dHVyZXMubGVuZ3RoLTEsIDApXG5cdFx0dmFyIHRleHR1cmUgPSB0aGlzLnRleHR1cmVzW3JhbmRvbU51bV1cblx0XHRpZih0ZXh0dXJlID09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0dmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKVxuXHRcdHZhciBjb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHRcdHZhciBzaGFwZSA9IG5ldyBQSVhJLkdyYXBoaWNzKClcblx0XHR2YXIgc2l6ZSA9IDI1XG5cdFx0c2hhcGUubGluZVN0eWxlKDEsIDB4MDAwMGZmLCAxKVxuXHRcdHNoYXBlLmRyYXdSZWN0KC1zaXplLzIsIC1zaXplLzIsIHNpemUsIHNpemUpXG5cdFx0Y29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSlcblx0XHRjb250YWluZXIuYWRkQ2hpbGQoc2hhcGUpXG5cdFx0c3ByaXRlLmFuY2hvci54ID0gMC41XG5cdFx0c3ByaXRlLmFuY2hvci55ID0gMC41XG5cdFx0c3ByaXRlLmJsZW5kTW9kZSA9IFBJWEkuQkxFTkRfTU9ERVMuTVVMVElQTFlcblx0XHQvLyBzcHJpdGUuYmxlbmRNb2RlID0gUElYSS5CTEVORF9NT0RFUy5ESUZGRVJFTkNFXG5cdFx0Y29udGFpbmVyLnBvc2l0aW9uLnggPSB0aGlzLm1vdXNlLnhcblx0XHRjb250YWluZXIucG9zaXRpb24ueSA9IHRoaXMubW91c2UueVxuXHRcdHRoaXMuYWN0aXZlU3ByaXRlcy5wdXNoKHtcblx0XHRcdHNwcml0ZTogc3ByaXRlLFxuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXJcblx0XHR9KVxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyLmFkZENoaWxkKGNvbnRhaW5lcilcblx0fVxuXHRyZW1vdmVTcHJpdGUoKSB7XG5cdFx0aWYodGhpcy5hY3RpdmVTcHJpdGVzLmxlbmd0aCA8PSAxKSByZXR1cm5cblx0XHR2YXIgc3ByaXRlVG9SZW1vdmUgPSB0aGlzLmFjdGl2ZVNwcml0ZXMuc2hpZnQoKVxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNwcml0ZVRvUmVtb3ZlLmNvbnRhaW5lcilcblx0XHRzcHJpdGVUb1JlbW92ZS5jb250YWluZXIuZGVzdHJveSgpXG5cdFx0c3ByaXRlVG9SZW1vdmUuc3ByaXRlLmRlc3Ryb3koKVxuXHR9XG5cdG9uTW91c2VNb3ZlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0aWYoZS5jbGllbnRZID4gd2luZG93SCAqIDAuOCkgcmV0dXJuIFxuXHRcdHRoaXMubW91c2UueCA9IGUuY2xpZW50WFxuXHRcdHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuXHRcdGlmKHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUpIHtcblx0XHRcdHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUgPSBmYWxzZVxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHR0aGlzLmFkZFNwcml0ZUlzQWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLmFkZFNwcml0ZSgpXG5cdFx0XHR9LCA2MClcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3RpdmVTcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYWN0aXZlID0gdGhpcy5hY3RpdmVTcHJpdGVzW2ldXG5cdFx0XHR2YXIgY29udGFpbmVyID0gYWN0aXZlLmNvbnRhaW5lclxuXHRcdFx0Y29udGFpbmVyLnBvc2l0aW9uLnkgLT0gMVxuXHRcdH07XG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0XHRIZWxwZXJzLnJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcih0aGlzLmltYWdlc0NvbnRhaW5lcilcblx0XHR0aGlzLmJnLm1jLmRlc3Ryb3koKVxuXHRcdGRvbSh3aW5kb3cpLm9mZihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuXHR9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0V0lORE9XX1JFU0laRTogJ1dJTkRPV19SRVNJWkUnLFxuXHRDSEFOR0VfQU1CSUVOVDogJ0NIQU5HRV9BTUJJRU5UJyxcblx0SU5UUk9fRklOSVNIRUQ6ICdJTlRST19GSU5JU0hFRCcsXG5cblx0TEFORFNDQVBFOiAnTEFORFNDQVBFJyxcblx0UE9SVFJBSVQ6ICdQT1JUUkFJVCcsXG5cblx0TUVESUFfR0xPQkFMX1c6IDE5MjAsXG5cdE1FRElBX0dMT0JBTF9IOiAxMDgwLFxuXHRcblx0QUREX1BYX0NISUxEOiAnQUREX1BYX0NISUxEJyxcblx0UkVNT1ZFX1BYX0NISUxEOiAnUkVNT1ZFX1BYX0NISUxEJyxcblx0XG5cdE9WRVJBTExfTUFSR0lOOiA0MCxcblxuXHRNSU5fTUlERExFX1c6IDk2MCxcblx0TVFfWFNNQUxMOiAzMjAsXG5cdE1RX1NNQUxMOiA0ODAsXG5cdE1RX01FRElVTTogNzY4LFxuXHRNUV9MQVJHRTogMTAyNCxcblx0TVFfWExBUkdFOiAxMjgwLFxuXHRNUV9YWExBUkdFOiAxNjgwLFxufSIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IEZsdXguRGlzcGF0Y2hlcigpLCB7XG5cdGhhbmRsZVZpZXdBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goe1xuXHRcdFx0c291cmNlOiAnVklFV19BQ1RJT04nLFxuXHRcdFx0YWN0aW9uOiBhY3Rpb25cblx0XHR9KTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXIiLCJ2YXIgSGVscGVycyA9IHtcblxuICAgIGdldFBYVmlkZW86IGZ1bmN0aW9uKHVybCwgd2lkdGgsIGhlaWdodCwgdmFycykge1xuICAgICAgICB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tVmlkZW8odXJsKVxuICAgICAgICB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIHRydWUpXG4gICAgICAgIHZhciB2aWRlb1Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKVxuICAgICAgICB2aWRlb1Nwcml0ZS53aWR0aCA9IHdpZHRoXG4gICAgICAgIHZpZGVvU3ByaXRlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICByZXR1cm4gdmlkZW9TcHJpdGVcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyOiBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEZyYW1lSW1hZ2VzQXJyYXk6IGZ1bmN0aW9uKGZyYW1lcywgYmFzZXVybCwgZXh0KSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGZyYW1lczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYmFzZXVybCArIGkgKyAnLicgKyBleHRcbiAgICAgICAgICAgIGFycmF5W2ldID0gdXJsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgIH0sIFxuXG4gICAgZ2V0R3Jhdml0eUNpcmNsZTogZnVuY3Rpb24odXJsLCByYWRpdXMpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgICAgIFxuICAgICAgICB2YXIgZyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAgICAgZy5iZWdpbkZpbGwoMHhmZmZmZmYsIDAuMSlcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgMHgwMDAwMDAsIDEpXG4gICAgICAgIGcuZHJhd0NpcmNsZSgwLCAwLCByYWRpdXMpXG4gICAgICAgIGcuZW5kRmlsbCgpXG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGcpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICAgICAgZzogZ1xuICAgICAgICB9XG4gICAgfSwgXG5cbiAgICBnZXRHcmF2aXR5UmVjdDogZnVuY3Rpb24odXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgICAgIFxuICAgICAgICB2YXIgZyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICAgICAgZy5iZWdpbkZpbGwoMHhmZmZmZmYsIDAuMSlcbiAgICAgICAgZy5saW5lU3R5bGUoMSwgMHgwMDAwMDAsIDEpXG4gICAgICAgIGcuZHJhd1JlY3QoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGcuZW5kRmlsbCgpXG5cbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGcpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICAgICAgZzogZ1xuICAgICAgICB9IFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJzIiwiXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5Ob2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYodGhpc1tpXSAmJiB0aGlzW2ldLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXNbaV0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBcHBBY3Rpb25zIGZyb20gJ0FwcEFjdGlvbnMnXG4gICAgXHRcbmNsYXNzIEdsb2JhbEV2ZW50cyB7XG5cdGluaXQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHRBcHBBY3Rpb25zLndpbmRvd1Jlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEV2ZW50c1xuIiwiaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuXG5jbGFzcyBQcmVsb2FkZXIgIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5xdWV1ZSA9IG5ldyBjcmVhdGVqcy5Mb2FkUXVldWUoKVxuXHRcdHRoaXMucXVldWUub24oXCJjb21wbGV0ZVwiLCB0aGlzLm9uTWFuaWZlc3RMb2FkQ29tcGxldGVkLCB0aGlzKVxuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrID0gdW5kZWZpbmVkXG5cdFx0dGhpcy5hbGxNYW5pZmVzdHMgPSBbXVxuXHR9XG5cdGxvYWQobWFuaWZlc3QsIG9uTG9hZGVkKSB7XG5cblx0XHRpZih0aGlzLmFsbE1hbmlmZXN0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsTWFuaWZlc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBtID0gdGhpcy5hbGxNYW5pZmVzdHNbaV1cblx0XHRcdFx0aWYobS5sZW5ndGggPT0gbWFuaWZlc3QubGVuZ3RoICYmIG1bMF0uaWQgPT0gbWFuaWZlc3RbMF0uaWQgJiYgbVttLmxlbmd0aC0xXS5pZCA9PSBtYW5pZmVzdFttYW5pZmVzdC5sZW5ndGgtMV0uaWQpIHtcblx0XHRcdFx0XHRvbkxvYWRlZCgpXHRcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0dGhpcy5hbGxNYW5pZmVzdHMucHVzaChtYW5pZmVzdClcblx0XHR0aGlzLmN1cnJlbnRMb2FkZWRDYWxsYmFjayA9IG9uTG9hZGVkXG4gICAgICAgIHRoaXMucXVldWUubG9hZE1hbmlmZXN0KG1hbmlmZXN0KVxuXHR9XG5cdG9uTWFuaWZlc3RMb2FkQ29tcGxldGVkKCkge1xuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrKClcblx0fVxuXHRnZXRDb250ZW50QnlJZChpZCkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlLmdldFJlc3VsdChpZClcblx0fVxuXHRnZXRJbWFnZVVSTChpZCkge1xuXHRcdHJldHVybiB0aGlzLmdldENvbnRlbnRCeUlkKGlkKS5nZXRBdHRyaWJ1dGUoXCJzcmNcIilcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXJcbiIsImltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJ1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbmltcG9ydCBjcm9zc3JvYWRzIGZyb20gJ2Nyb3Nzcm9hZHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFJvdXRlciB7XG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yb3V0aW5nID0gQXBwU3RvcmUuRGF0YS5yb3V0aW5nXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB1bmRlZmluZWRcblx0XHRoYXNoZXIub2xkSGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuX2RpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMuX3NldHVwQ3Jvc3Nyb2FkcygpXG5cdH1cblx0YmVnaW5Sb3V0aW5nKCkge1xuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXHRfc2V0dXBDcm9zc3JvYWRzKCkge1xuXHRcdHZhciBiYXNpY1NlY3Rpb24gPSBjcm9zc3JvYWRzLmFkZFJvdXRlKCd7cGFnZX0nLCB0aGlzLl9vbkZpcnN0RGVncmVlVVJMSGFuZGxlci5iaW5kKHRoaXMpLCAzKVxuXHRcdGJhc2ljU2VjdGlvbi5ydWxlcyA9IHtcblx0ICAgICAgICBwYWdlIDogWycgJywgJ3dvcmstb2YtYXJ0JywgJ3dvcmtzJywgJ2NvbnRhY3QnXSAvL3ZhbGlkIHNlY3Rpb25zXG5cdCAgICB9XG5cdH1cblx0X29uRmlyc3REZWdyZWVVUkxIYW5kbGVyKHBhZ2VJZCkge1xuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKHBhZ2VJZClcblx0fVxuXHRfb25EZWZhdWx0VVJMSGFuZGxlcigpIHtcblx0XHQvLyB0aGlzLl9zZW5kVG9EZWZhdWx0KClcblx0XHR0aGlzLl9hc3NpZ25Sb3V0ZSgnJylcblx0fVxuXHRfYXNzaWduUm91dGUoaWQpIHtcblx0XHR2YXIgaGFzaCA9IGhhc2hlci5nZXRIYXNoKClcblx0XHR2YXIgcGFydHMgPSB0aGlzLl9nZXRVUkxQYXJ0cyhoYXNoKVxuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFydHNbMF0sIGlkKVxuXHRcdHRoaXMubmV3SGFzaEZvdW5kZWQgPSB0cnVlXG5cdH1cblx0X2dldFVSTFBhcnRzKHVybCkge1xuXHRcdHZhciBoYXNoID0gdXJsXG5cdFx0cmV0dXJuIGhhc2guc3BsaXQoJy8nKVxuXHR9XG5cdF91cGRhdGVQYWdlUm91dGUoaGFzaCwgcGFydHMsIHBhcmVudCwgdGFyZ2V0SWQpIHtcblx0XHRoYXNoZXIub2xkSGFzaCA9IGhhc2hlci5uZXdIYXNoXG5cdFx0aGFzaGVyLm5ld0hhc2ggPSB7XG5cdFx0XHRoYXNoOiBoYXNoLFxuXHRcdFx0cGFydHM6IHBhcnRzLFxuXHRcdFx0cGFyZW50OiBwYXJlbnQsXG5cdFx0XHR0YXJnZXRJZDogdGFyZ2V0SWRcblx0XHR9XG5cdFx0QXBwQWN0aW9ucy5wYWdlSGFzaGVyQ2hhbmdlZCgpXG5cdH1cblx0X2RpZEhhc2hlckNoYW5nZShuZXdIYXNoLCBvbGRIYXNoKSB7XG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IGZhbHNlXG5cdFx0Y3Jvc3Nyb2Fkcy5wYXJzZShuZXdIYXNoKVxuXHRcdGlmKHRoaXMubmV3SGFzaEZvdW5kZWQpIHJldHVyblxuXHRcdC8vIElmIFVSTCBkb24ndCBtYXRjaCBhIHBhdHRlcm4sIHNlbmQgdG8gZGVmYXVsdFxuXHRcdHRoaXMuX29uRGVmYXVsdFVSTEhhbmRsZXIoKVxuXHR9XG5cdF9zZW5kVG9EZWZhdWx0KCkge1xuXHRcdGhhc2hlci5zZXRIYXNoKEFwcFN0b3JlLmRlZmF1bHRSb3V0ZSgpKVxuXHR9XG5cdHN0YXRpYyBnZXRCYXNlVVJMKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5VUkwuc3BsaXQoXCIjXCIpWzBdXG5cdH1cblx0c3RhdGljIGdldEhhc2goKSB7XG5cdFx0cmV0dXJuIGhhc2hlci5nZXRIYXNoKClcblx0fVxuXHRzdGF0aWMgZ2V0Um91dGVzKCkge1xuXHRcdHJldHVybiBBcHBTdG9yZS5EYXRhLnJvdXRpbmdcblx0fVxuXHRzdGF0aWMgZ2V0TmV3SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm5ld0hhc2hcblx0fVxuXHRzdGF0aWMgZ2V0T2xkSGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLm9sZEhhc2hcblx0fVxuXHRzdGF0aWMgc2V0SGFzaChoYXNoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goaGFzaClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXJcbiIsImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBSb3V0ZXIgZnJvbSAnUm91dGVyJ1xuXG5mdW5jdGlvbiBfcGFnZVJvdXRlSWRDaGFuZ2VkKGlkKSB7XG59XG5mdW5jdGlvbiBfZ2V0UGFnZUNvbnRlbnQoKSB7XG4gICAgdmFyIGhhc2hPYmogPSBSb3V0ZXIuZ2V0TmV3SGFzaCgpXG4gICAgdmFyIGhhc2ggPSBoYXNoT2JqLmhhc2gubGVuZ3RoIDwgMSA/ICcvJyA6IGhhc2hPYmouaGFzaFxuICAgIHZhciBjb250ZW50ID0gQXBwU3RvcmUuRGF0YS5yb3V0aW5nW2hhc2hdXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cbmZ1bmN0aW9uIF9nZXRNZW51Q29udGVudCgpIHtcbiAgICByZXR1cm4gQXBwU3RvcmUuRGF0YS5tZW51XG59XG5mdW5jdGlvbiBfZ2V0TWVudUl0ZW1CeUlkKGlkKSB7XG5cbiAgICB2YXIgbWVudUl0ZW1zID0gQXBwU3RvcmUuRGF0YS5tZW51XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobWVudUl0ZW1zW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9XG4gICAgfTtcblxufVxuZnVuY3Rpb24gX2dldEN1cnJlbnRQYWdlTWVudUl0ZW0oKSB7XG5cbiAgICB2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcbiAgICB2YXIgaWQgPSBoYXNoT2JqLmhhc2ggPT0gJycgPyAnaG9tZScgOiBoYXNoT2JqLmhhc2hcblxuICAgIHZhciBtZW51SXRlbXMgPSBBcHBTdG9yZS5EYXRhLm1lbnVcbiAgICB2YXIgaXRlbTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtZW51SXRlbXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBtZW51SXRlbXNbaV1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChpdGVtID09IHVuZGVmaW5lZCkgPyB7IGlkOiAnaG9tZScgfSA6IGl0ZW1cbn1cbmZ1bmN0aW9uIF9nZXRBcHBEYXRhKCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhXG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdFJvdXRlKCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhWydkZWZhdWx0LXJvdXRlJ11cbn1cbmZ1bmN0aW9uIF9nZXRHbG9iYWxDb250ZW50KCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhLmNvbnRlbnRcbn1cbmZ1bmN0aW9uIF93aW5kb3dXaWR0aEhlaWdodCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxufVxuXG52YXIgQXBwU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24odHlwZSwgaXRlbSkge1xuICAgICAgICB0aGlzLmVtaXQodHlwZSwgaXRlbSlcbiAgICB9LFxuICAgIHBhZ2VDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRQYWdlQ29udGVudCgpXG4gICAgfSxcbiAgICBtZW51Q29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0TWVudUNvbnRlbnQoKVxuICAgIH0sXG4gICAgZ2V0Q3VycmVudFBhZ2VNZW51SXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpXG4gICAgfSxcbiAgICBnZXRNZW51SXRlbUJ5SWQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiBfZ2V0TWVudUl0ZW1CeUlkKGlkKVxuICAgIH0sXG4gICAgYXBwRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0QXBwRGF0YSgpXG4gICAgfSxcbiAgICBkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldERlZmF1bHRSb3V0ZSgpXG4gICAgfSxcbiAgICBnbG9iYWxDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRHbG9iYWxDb250ZW50KClcbiAgICB9LFxuICAgIFdpbmRvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2luZG93V2lkdGhIZWlnaHQoKVxuICAgIH0sXG4gICAgT3JpZW50YXRpb246IEFwcENvbnN0YW50cy5MQU5EU0NBUEUsXG4gICAgUGFyZW50OiB1bmRlZmluZWQsXG4gICAgZGlzcGF0Y2hlckluZGV4OiBBcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb25cbiAgICAgICAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VEOlxuICAgICAgICAgICAgICAgIF9wYWdlUm91dGVJZENoYW5nZWQoYWN0aW9uLml0ZW0pXG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRTpcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5XaW5kb3cudyA9IGFjdGlvbi5pdGVtLndpbmRvd1dcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5XaW5kb3cuaCA9IGFjdGlvbi5pdGVtLndpbmRvd0hcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5PcmllbnRhdGlvbiA9IChBcHBTdG9yZS5XaW5kb3cudyA+IEFwcFN0b3JlLldpbmRvdy5oKSA/IEFwcENvbnN0YW50cy5MQU5EU0NBUEUgOiBBcHBDb25zdGFudHMuUE9SVFJBSVRcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUsIGFjdGlvbi5pdGVtKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbndpbmRvdy5BcHBTdG9yZSA9IEFwcFN0b3JlXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHN2ZyB7Li4udGhpcy5wcm9wc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9zdmc+XG4gICAgfVxufVxuIiwiaW1wb3J0IGlzIGZyb20gJ2lzJztcblxuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kcyhvYmopIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iailcblx0XHQuZmlsdGVyKGtleSA9PiBpcy5mbihvYmpba2V5XSkpXG59XG5cbmZ1bmN0aW9uIGF1dG9CaW5kKG9iaikge1xuXHQvLyBjb25zb2xlLmxvZygnb2JqIC0tLS0tJywgb2JqKVxuICBcdGdldEFsbE1ldGhvZHMob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcblx0XHQuZm9yRWFjaChtdGQgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobXRkKVxuXHRcdFx0b2JqW210ZF0gPSBvYmpbbXRkXS5iaW5kKG9iaik7XG5cdFx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b0JpbmQ7IiwiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgTm9ybWFsaXplTW91c2VDb29yZHMoZSwgb2JqV3JhcHBlcikge1xuXHRcdHZhciBwb3N4ID0gMDtcblx0XHR2YXIgcG9zeSA9IDA7XG5cdFx0aWYgKCFlKSB2YXIgZSA9IHdpbmRvdy5ldmVudDtcblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuXHRcdFx0XHQrIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0b2JqV3JhcHBlci54ID0gcG9zeFxuXHRcdG9ialdyYXBwZXIueSA9IHBvc3lcblx0XHRyZXR1cm4gb2JqV3JhcHBlclxuXHR9XG5cdHN0YXRpYyBSZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIGNvbnRlbnRXLCBjb250ZW50SCkge1xuXHRcdHZhciBhc3BlY3RSYXRpbyA9IGNvbnRlbnRXIC8gY29udGVudEhcblx0XHR2YXIgc2NhbGUgPSAoKHdpbmRvd1cgLyB3aW5kb3dIKSA8IGFzcGVjdFJhdGlvKSA/ICh3aW5kb3dIIC8gY29udGVudEgpICogMSA6ICh3aW5kb3dXIC8gY29udGVudFcpICogMVxuXHRcdHZhciBuZXdXID0gY29udGVudFcgKiBzY2FsZVxuXHRcdHZhciBuZXdIID0gY29udGVudEggKiBzY2FsZVxuXHRcdHZhciBjc3MgPSB7XG5cdFx0XHR3aWR0aDogbmV3Vyxcblx0XHRcdGhlaWdodDogbmV3SCxcblx0XHRcdGxlZnQ6ICh3aW5kb3dXID4+IDEpIC0gKG5ld1cgPj4gMSksXG5cdFx0XHR0b3A6ICh3aW5kb3dIID4+IDEpIC0gKG5ld0ggPj4gMSksXG5cdFx0XHRzY2FsZTogc2NhbGVcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGNzc1xuXHR9XG5cdHN0YXRpYyBEZXN0cm95VmlkZW8odmlkZW8pIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgdmlkZW8uc3JjID0gJyc7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZpZGVvLmNoaWxkTm9kZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgIFx0Y2hpbGQuc2V0QXR0cmlidXRlKCdzcmMnLCAnJyk7XG4gICAgICAgIFx0Ly8gV29ya2luZyB3aXRoIGEgcG9seWZpbGwgb3IgdXNlIGpxdWVyeVxuICAgICAgICBcdGNoaWxkLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIERlc3Ryb3lWaWRlb1RleHR1cmUodGV4dHVyZSkge1xuICAgIFx0dmFyIHZpZGVvID0gdGV4dHVyZS5iYXNlVGV4dHVyZS5zb3VyY2VcbiAgICAgICAgVXRpbHMuRGVzdHJveVZpZGVvKHZpZGVvKVxuICAgIH1cbiAgICBzdGF0aWMgSXNFdmVuKG4pIHtcblx0ICAgcmV0dXJuIG4gJSAyID09IDA7XG5cdH1cblx0c3RhdGljIFJhbmQobWluLCBtYXgsIGRlY2ltYWxzKSB7XG4gICAgICAgIHZhciByYW5kb21OdW0gPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbiAgICAgICAgaWYoZGVjaW1hbHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFx0cmV0dXJuIHJhbmRvbU51bVxuICAgICAgICB9ZWxzZXtcblx0ICAgICAgICB2YXIgZCA9IE1hdGgucG93KDEwLCBkZWNpbWFscylcblx0ICAgICAgICByZXR1cm4gfn4oKGQgKiByYW5kb21OdW0pICsgMC41KSAvIGRcbiAgICAgICAgfVxuXHR9XG5cdHN0YXRpYyBUcmFuZm9ybUFycmF5RnJvbU1pZGRsZUFuZE91dChhcnJheSkge1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXVxuICAgICAgICB2YXIgaSA9IE1hdGguY2VpbChhcnJheS5sZW5ndGgvMilcbiAgICAgICAgdmFyIGogPSBpIC0gMVxuICAgICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgXHRuZXdBcnJheS5wdXNoKGFycmF5W2otLV0pXG4gICAgICAgICAgICBpZihpIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBcdG5ld0FycmF5LnB1c2goYXJyYXlbaSsrXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXlcbiAgICB9XG4gICAgc3RhdGljIFNldChlbGVtZW50LCB2YXJzLCBhbmltYXRpb25DbGFzcykge1xuXHRcdGFuaW1hdGlvbkNsYXNzID0gYW5pbWF0aW9uQ2xhc3MgfHwgJ2FuaW1hdGUnXG5cdFx0ZG9tKGVsZW1lbnQpLnJlbW92ZUNsYXNzKGFuaW1hdGlvbkNsYXNzKVxuXHRcdFR3ZWVuTGl0ZS5zZXQoZWxlbWVudCwgdmFycylcblx0fVxuXHRzdGF0aWMgQW5pbWF0ZShlbGVtZW50LCB2YXJzLCBhbmltYXRpb25DbGFzcykge1xuXHRcdGFuaW1hdGlvbkNsYXNzID0gYW5pbWF0aW9uQ2xhc3MgfHwgJ2FuaW1hdGUnXG5cdFx0ZG9tKGVsZW1lbnQpLmFkZENsYXNzKGFuaW1hdGlvbkNsYXNzKVxuXHRcdHZhcnNbJ2ZvcmNlM0QnXSA9IHRydWVcblx0XHRUd2VlbkxpdGUuc2V0KGVsZW1lbnQsIHZhcnMpXG5cdH1cblx0c3RhdGljIFNwcmluZ1RvKGl0ZW0sIHRvUG9zaXRpb24sIGluZGV4LCBzcHJpbmdDb25maWcpIHtcbiAgICBcdHZhciBkeCA9IHRvUG9zaXRpb24ueCAtIGl0ZW0ueFxuICAgIFx0dmFyIGR5ID0gdG9Qb3NpdGlvbi55IC0gaXRlbS55XG5cdFx0dmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpXG5cdFx0dmFyIHRhcmdldFggPSB0b1Bvc2l0aW9uLnggLSBNYXRoLmNvcyhhbmdsZSkgKiAoc3ByaW5nQ29uZmlnLmxlbmd0aCAqIGluZGV4KVxuXHRcdHZhciB0YXJnZXRZID0gdG9Qb3NpdGlvbi55IC0gTWF0aC5zaW4oYW5nbGUpICogKHNwcmluZ0NvbmZpZy5sZW5ndGggKiBpbmRleClcblx0XHRpdGVtLnZlbG9jaXR5LnggKz0gKHRhcmdldFggLSBpdGVtLngpICogc3ByaW5nQ29uZmlnLnNwcmluZ1xuXHRcdGl0ZW0udmVsb2NpdHkueSArPSAodGFyZ2V0WSAtIGl0ZW0ueSkgKiBzcHJpbmdDb25maWcuc3ByaW5nXG5cdFx0aXRlbS52ZWxvY2l0eS54ICo9IHNwcmluZ0NvbmZpZy5mcmljdGlvblxuXHRcdGl0ZW0udmVsb2NpdHkueSAqPSBzcHJpbmdDb25maWcuZnJpY3Rpb25cbiAgICB9XG4gICAgc3RhdGljIFNwcmluZ1ZhbChmcm9tVmFsLCB0b1ZhbCwgdmVsb2NpdHksIGFuZ2xlLCBmcmljdGlvbiwgc3ByaW5nLCBsZW5ndGgpIHtcbiAgICBcdHZhciBkaXN0YW5jZSA9IHRvVmFsIC0gZnJvbVZhbFxuXHRcdHZhciB0YXJnZXQgPSB0b1ZhbCAtIE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aFxuXHRcdHZlbG9jaXR5ICs9ICh0YXJnZXQgLSBmcm9tVmFsKSAqIHNwcmluZ1xuXHRcdHZlbG9jaXR5ICo9IGZyaWN0aW9uXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xuIiwiLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiBcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiBcbi8vIE1JVCBsaWNlbnNlXG4gXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG4gXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSwgXG4gICAgICAgICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG4gXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTsiLCJpbXBvcnQgRmx1eCBmcm9tICdmbHV4J1xuaW1wb3J0IHJlYWN0TWl4aW4gZnJvbSAncmVhY3QtbWl4aW4nXG5pbXBvcnQge0V2ZW50RW1pdHRlcjJ9IGZyb20gJ2V2ZW50ZW1pdHRlcjInXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbi8vIEFjdGlvbnNcbnZhciBQYWdlckFjdGlvbnMgPSB7XG4gICAgb25QYWdlUmVhZHk6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZLFxuICAgICAgICBcdGl0ZW06IGhhc2hcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIFx0UGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFLFxuICAgICAgICBcdGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBwYWdlVHJhbnNpdGlvbkRpZEZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VyRGlzcGF0Y2hlci5oYW5kbGVQYWdlckFjdGlvbih7XG4gICAgICAgIFx0dHlwZTogUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbi8vIENvbnN0YW50c1xudmFyIFBhZ2VyQ29uc3RhbnRzID0ge1xuXHRQQUdFX0lTX1JFQURZOiAnUEFHRV9JU19SRUFEWScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTjogJ1BBR0VfVFJBTlNJVElPTl9JTicsXG5cdFBBR0VfVFJBTlNJVElPTl9PVVQ6ICdQQUdFX1RSQU5TSVRJT05fT1VUJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURTogJ1BBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUnLFxuXHRQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1M6ICdQQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MnLFxuXHRQQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDogJ1BBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIJyxcbn1cblxuLy8gRGlzcGF0Y2hlclxudmFyIFBhZ2VyRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlUGFnZXJBY3Rpb246IGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uKVxuXHR9XG59KVxuXG4vLyBTdG9yZVxudmFyIFBhZ2VyU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlcjIucHJvdG90eXBlLCB7XG4gICAgZmlyc3RQYWdlVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBwYWdlVHJhbnNpdGlvblN0YXRlOiB1bmRlZmluZWQsIFxuICAgIGRpc3BhdGNoZXJJbmRleDogUGFnZXJEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IHBheWxvYWQudHlwZVxuICAgICAgICB2YXIgaXRlbSA9IHBheWxvYWQuaXRlbVxuICAgICAgICBzd2l0Y2goYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX0lTX1JFQURZOlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1NcbiAgICAgICAgICAgIFx0dmFyIHR5cGUgPSBQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24gPyBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU4gOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOlxuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTlxuICAgICAgICAgICAgXHRQYWdlclN0b3JlLmVtaXQodHlwZSlcbiAgICAgICAgICAgIFx0YnJlYWtcbiAgICAgICAgICAgIGNhc2UgUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0g6XG4gICAgICAgICAgICBcdGlmIChQYWdlclN0b3JlLmZpcnN0UGFnZVRyYW5zaXRpb24pIFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0hcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLmVtaXQoYWN0aW9uVHlwZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0UGFnZXJTdG9yZTogUGFnZXJTdG9yZSxcblx0UGFnZXJBY3Rpb25zOiBQYWdlckFjdGlvbnMsXG5cdFBhZ2VyQ29uc3RhbnRzOiBQYWdlckNvbnN0YW50cyxcblx0UGFnZXJEaXNwYXRjaGVyOiBQYWdlckRpc3BhdGNoZXJcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdBdXRvYmluZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0YXV0b2JpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSA9IHRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUuYmluZCh0aGlzKVxuXHRcdHRoaXMudGxJbiA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGVcblx0XHR9KVxuXHRcdHRoaXMudGxPdXQgPSBuZXcgVGltZWxpbmVNYXgoe1xuXHRcdFx0b25Db21wbGV0ZTp0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdFx0dGhpcy5zZXR1cEFuaW1hdGlvbnMoKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5pc1JlYWR5KHRoaXMucHJvcHMuaGFzaCksIDApXG5cdH1cblx0c2V0dXBBbmltYXRpb25zKCkge1xuXHRcdC8vIHJlc2V0XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uSW4oKSB7XG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMudGxJbi50aW1lU2NhbGUoMikucGxheSgwKVxuXHR9XG5cdHdpbGxUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMudGxJbi5wYXVzZSgwKVxuXHRcdHRoaXMudGxPdXQudGltZVNjYWxlKDIpLnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAncGFnZS1iJ1xuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4gPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluLmJpbmQodGhpcylcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dCA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLmNvbXBvbmVudHMgPSB7XG5cdFx0XHQnbmV3LWNvbXBvbmVudCc6IHVuZGVmaW5lZCxcblx0XHRcdCdvbGQtY29tcG9uZW50JzogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXMtY29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWEnPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblx0c2V0dXBOZXdDb21wb25lbnQoaGFzaCwgVHlwZSkge1xuXHRcdHZhciBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdHZhciBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHR2YXIgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHRcdEFwcFN0b3JlLlBhcmVudC5zdHlsZS5jdXJzb3IgPSAncHJvZ3Jlc3MnXG5cdH1cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLnBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoKClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdEFwcFN0b3JlLlBhcmVudC5zdHlsZS5jdXJzb3IgPSAnYXV0bydcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10udXBkYXRlKClcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ucmVzaXplKClcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCduZXctY29tcG9uZW50Jylcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImNvbnRlbnRcIjoge1xuXHRcdFwibXl0ZXh0XCI6IFwic29tZSBnbG9iYWwgdGV4dFwiXG5cdH0sXG5cblx0XCJtZW51XCI6IFtcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwicXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiUXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvcXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJhcmNoaXRlY3R1cmVcIixcblx0XHRcdFwibmFtZVwiOiBcIkFyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvYXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJjcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibmFtZVwiOiBcIkNyZWF0aXZpdHkgJiBJbm5vdmF0aW9uXCIsXG5cdFx0XHRcInVybFwiOiBcIi9jcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSUlJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJzdHlsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiU3R5bGVcIixcblx0XHRcdFwidXJsXCI6IFwiL3N0eWxlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklWXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJpbnNwaXJhdGlvbi1zcGFya1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwiSW5zcGlyYXRpb24gU3BhcmtcIixcblx0XHRcdFwidXJsXCI6IFwiL2luc3BpcmF0aW9uLXNwYXJrXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIlZcIlxuXHRcdH1cblx0XSxcblxuXHRcImRlZmF1bHQtcm91dGVcIjogXCJcIixcblxuXHRcInJvdXRpbmdcIjoge1xuXHRcdFwiL1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiaG9tZSBwYWdlXCJcblx0XHR9LFxuXHRcdFwiaW5zcGlyYXRpb24tc3BhcmtcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImluc3BpcmF0aW9uLXNwYXJrIHBhZ2VcIlxuXHRcdH0sXG5cdFx0XCJhcmNoaXRlY3R1cmVcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImFyY2hpdGVjdHVyZSBwYWdlXCIsXG5cdFx0XHRcInZpZGVvc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIExJTkVcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTGFkeSBEaW9yIGlzIGFuIGFyY2hpdGVjdHVyYWwgY29uc3RydWN0aW9uLjxici8+SXRzIGJlYXV0eSBsaWVzLCBhdCB0aGUgYmVnaW5uaW5nLCBvbiBpdHMg4oCcbGluZXPigJ0sPGJyLz5pdHMgcHJvcG9ydGlvbnMgYW5kIGlkZWFsIGRpbWVuc2lvbnMuPGJyLz5UaGUgbGluZSBjcmVhdGVzIHRoZSBzaGFwZS4uLjxici8+SW4gYWxsIGl0IHRha2VzIDE0NCBzZXBhcmF0ZSBwYXJ0cyB0byBtYWtlIGVhY2ggTGFkeSBEaW9yLjxici8+PGJyLz5UaGUgc2hhcGUgZ2l2ZXMgbGl2ZSB0byB0aGUgbWF0ZXJpYWwuXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIE1BVEVSSUFMXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlRoZSBsZWF0aGVyIG11c3QgYmUgcGVyZmVjdC48YnIvPkl0IGFsbCBiZWdpbnMgd2l0aCB0aGUgc2VsZWN0aW9uIHdoaWNoIG11c3QgbWVldCBzcGVjaWFsbHkgZGVtYW5kaW5nIGNyaXRlcmlhLCBhbHdheXMgZm9sbG93aW5nIHRoZSBzYW1lIHJpdHVhbCA6IHRvdWNoaW5nLCBleGFtaW5pbmcsIHNlZWluZy4uLjxici8+VGhlIGNyYWZ0bWFu4oCZcyBoYW5kcyBhbmQgZXllcyBhcmUgdHJhaW5lZCB0byBkZXRlY3QgdGhlIG1pbm9yIGZsYXcuPGJyLz48YnIvPlRoZSBsZWF0aGVyIGlzIHRoZW4gY3V0LCBmb2xsb3dpbmcgdGhlIHBhdHRlcm5zLjxici8+QWZ0ZXIgdGhlIGNhbm5pbmcgc3RpdGNoaW5nLCB0aGUgcGFydHMgYXJlIHJlYWR5IHRvIGNyZWF0ZSB0aGUgdm9sdW1lLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCIyNV9MQURZRElPUl9EZWNvdXBlX2Rlc19DdWlyc18xNXNlY19ERUZfSDI2NF8xXCIsXG5cdFx0XHRcdFx0XCJpbWduYW1lXCI6IFwic2NyZWVuLWEuanBnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUSEUgVk9MVU1FXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkxhZHkgRGlvciBpcyBhc3NlbWJsZWQgYXJvdW5kIGEgd29vZGVuIGZvcm0uPGJyLz5UaGUgdGFzayBpcyBpcyBhbiBlc3BlY2lhbGx5IGRpZmZpY3VsdCBvbmUsIGFzIHRoZSBjYW5uaW5nIGhhcyB0byBhbGlnbiBwZXJmZWN0bHkuPGJyLz48YnIvPlRoZSBmcm9udCwgYmFjayBhbmQgc2lkZXMgYXJlIHJlaW5mb3JjZWQgdG8gZ3VhcmFudHkgdGhhdCB0aGUgYmFnIHdpbGwgbWFpbnRhaW4gaXRzIHNoYXBlLCBwcmV2ZW50aW5nIGl0IGZyb20gYnVja2xpbmcuXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIjI2X0xBRFlESU9SX01pc2VfZW5fZm9ybWVfMTVzZWNfREVGX0gyNjRfMVwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIERFVEFJTFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJNZXRhbHdvcmsgc3RyZW5ndGhlbiBhbmQgYWNjZXNzb3JpemUgdGhlIGJhZzogY2hhcm1zLCB6aXBwZXIsIGdyb21tZXRzIG9yIGJhc2Ugc3R1ZHMuLi48YnIvPlRoaXMgaXMgdGhlIERpb3Igc2lnbmF0dXJlLCBtYWtpbmcgZWFjaCBkZXRhaWwgYW4gaW5kZXNwZW5zYWJsZSBwYXJ0IG9mIHRoZSBiZWF1dHkgb2YgdGhlIHdob2xlLjxici8+PGJyLz5MYWR5IERpb3IgY2FycmllcyB3aXRoaW4gaXQgdGhlIHZlcnkgc3Bpcml0IG9mIERpb3IuLi5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiMjdfTEFEWURJT1JfUG9zZV9kZXNfYmlqb3V0ZXJpZXNfMTVzZWNfREVGX0gyNjRfMVwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH1cblx0XHRcdF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWludGFlc3NlbmNlXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwicXVpbnRhZXNzZW5jZSBwYWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGl2aXR5LWlubm92YXRpb25cIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJDUkVBVElWSVRZICYgSU5OT1ZBVElPTiBwYWdlXCIsXG4gICAgICAgIFx0XCJiYWdVcmxzXCI6IFtcbiAgICAgICAgXHRcdFwiYmFnMFwiLFxuICAgICAgICBcdFx0XCJiYWcxXCJcbiAgICAgICAgXHRdXG4gICAgICAgIH0sXG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcdFwidGl0bGVcIjogXCJzdHlsZSBwYWdlXCIsXG4gICAgICAgIFx0XCJpbWFnZXNcIjogW1xuICAgICAgICBcdFx0XCIyYTNjNWNlMDg4NDU3N2JhNmQ3ZmNjZTNjZmU4ZmI2OC5qcGdcIixcbiAgICAgICAgXHRcdFwiM2JkOTc5YzI1ZDNjNjdmNzU2Njk4YWM1MGNiOWE1NzYuanBnXCIsXG4gICAgICAgIFx0XHRcIjA1ZTIyMjIxNDA4NTQ2MGViYzkwNWM3OWRlNDY4ZGM3LmpwZ1wiLFxuICAgICAgICBcdFx0XCI3ZWZjOWRiY2FmYjcwZGJhYjNlM2UxOWRhMzUxZTMzMS5qcGdcIixcbiAgICAgICAgXHRcdFwiOWQ1M2E0YzU0NTdjNGQ3NmMzOTE3NzQwNjMwMmEyODcuanBnXCIsXG4gICAgICAgIFx0XHRcIjE1ZTM3NTUyYmVmZDU1ZGYzZGViZDY4MTg4NWZhY2RkLmpwZ1wiLFxuICAgICAgICBcdFx0XCIzMmI2MjA4ZWRlM2MzM2JlZGE4YTBlZWRiZDhiNTU3YS5qcGdcIixcbiAgICAgICAgXHRcdFwiMDkyYjg3YWVhZWFmMjUzNjEwMzY5ZDNkYWFmZjRmZTQuanBnXCIsXG4gICAgICAgIFx0XHRcIjExMi5qcGdcIixcbiAgICAgICAgXHRcdFwiMTQ4MzhkYjU5OWRjMmQwZTZhY2MzYzE1NzhiM2NjY2YuanBnXCIsXG4gICAgICAgIFx0XHRcIjIzMTE2MTJfSU1HXzA1MjUuanBnXCIsXG4gICAgICAgIFx0XHRcIjQ0ODY4MjFfb3Blbi11cmkyMDE1MDUxNy03MTE3LWVob3FhMy5qcGdcIixcbiAgICAgICAgXHRcdFwiY2hyaXN0aWFuLWRpb3ItZmFsbC13aW50ZXItMjAxMS0yMDEyLWxvb2tib29rLTkuanBnXCIsXG4gICAgICAgIFx0XHRcImQ0OTYyOGNiNzM0MTUzYjNmMGUwNzRiZGFlNDAxM2E1LmpwZ1wiLFxuICAgICAgICBcdFx0XCJkYTk3NDAxNDI0NTMxZTZhNjM4NjE2OGMyYWNhZmRlMi5qcGdcIixcbiAgICAgICAgXHRcdFwiZGM4MzhiM2NiZmM0YTJkOGNkZjk4ZTk1MTIyZjJkNzcuanBnXCIsXG4gICAgICAgIFx0XHRcImRzY18wODI5LmpwZ1wiLFxuICAgICAgICBcdFx0XCJlbGl6YWJldGgtbWluZXR0LWxhZHktZGlvci1zdHJlZXQtc3R5bGUuanBnXCIsXG4gICAgICAgIFx0XHRcIklNR18xMjQxLVJDLTEuanBnXCIsXG4gICAgICAgIFx0XHRcIklNR182NzczLmpwZ1wiLFxuICAgICAgICBcdFx0XCJMZS1TYWMtTGFkeS1EaW9yLWRlLUNocmlzdGlhbi1EaW9yICgxKS5qcGdcIixcbiAgICAgICAgXHRcdFwiTEZXLURheTEtQVcxNS1TdHJlZXRTdHlsZS1OYXRhbGlhLUthdXQtQmx1ZURyZXNzLVJhZXktWWVsbG93LUNvYXQtTWF0Y2hlc0Zhc2hpb24tTWF5YVdpbGxpYW1zLUZhc2hpb25Mb2xsaXBvcC0xLTEwMjR4NjgyLmpwZ1wiLFxuICAgICAgICBcdFx0XCJtb2Q0MS5qcGdcIixcbiAgICAgICAgXHRcdFwicDE5ajVzZHI1azQxbzE2anUxbWtwZDViMXBnYmcuanBnXCIsXG4gICAgICAgIFx0XHRcInR1bWJscl9tenNuZG1SUUhpMXN1N3hpZW8xXzEyODAuanBnXCJcblx0XHRcdF1cbiAgICAgICAgfVxuXHR9XG59Il19
