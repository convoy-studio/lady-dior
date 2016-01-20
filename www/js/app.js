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
			config.angle += 0.1;
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

var _Utils = require('./../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Helpers = require('./../../mixins/Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var InspirationSpark = (function (_Page) {
	_inherits(InspirationSpark, _Page);

	function InspirationSpark(props) {
		_classCallCheck(this, InspirationSpark);

		_get(Object.getPrototypeOf(InspirationSpark.prototype), 'constructor', this).call(this, props);

		this.mouse = { x: 0, y: 0 };
		this.mouseMove = this.mouseMove.bind(this);
	}

	_createClass(InspirationSpark, [{
		key: 'render',
		value: function render() {

			return this.getBasePageDom(_react2['default'].createElement('div', null));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.colorGraphic = new PIXI.Graphics();
			this.container.addChild(this.colorGraphic);

			var totalFrames = 20;
			var bagImages = _Helpers2['default'].getFrameImagesArray(totalFrames, 'image/sculptures/turn_', 'jpg');
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

			(0, _domquery2['default'])(window).on('mousemove', this.mouseMove);

			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'componentDidMount', this).call(this);
		}
	}, {
		key: 'update',
		value: function update() {
			var windowW = _AppStore2['default'].Window.w;

			// update mc current frame
			var currentFrame = Math.floor(this.mouse.x / windowW * this.bg.totalFrames);
			if (currentFrame > this.bg.totalFrames) currentFrame = this.bg.totalFrames;
			if (currentFrame < 0) currentFrame = 0;
			this.bg.mc.gotoAndStop(currentFrame);

			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'update', this).call(this);
		}
	}, {
		key: 'mouseMove',
		value: function mouseMove(e) {
			e.preventDefault();
			this.mouse.x = e.clientX;
			this.mouse.y = e.clientY;
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

			var g = this.colorGraphic;
			g.clear();
			g.beginFill(0x000000, 1);
			g.drawRect(0, 0, windowW, windowH);
			g.endFill();

			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'resize', this).call(this);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(InspirationSpark.prototype), 'componentWillUnmount', this).call(this);
			(0, _domquery2['default'])(window).off('mousemove', this.mouseMove);
			this.bg.mc.destroy();
		}
	}]);

	return InspirationSpark;
})(_Page3['default']);

exports['default'] = InspirationSpark;
module.exports = exports['default'];

},{"./../../constants/AppConstants":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/constants/AppConstants.js","./../../mixins/Helpers":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/mixins/Helpers.js","./../../stores/AppStore":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/stores/AppStore.js","./../../utils/Utils":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/utils/Utils.js","./../Page":"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/Page.js","domquery":"domquery","react":"react"}],"/Users/panagiotisthomoglou/Projects/lady-dior/src/js/app/components/pages/Quintaessence.js":[function(require,module,exports){
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
			e.preventDefault();
			(0, _domquery2['default'])(window).on('mousemove', this.mouseMove);
			this.dragVars.active = true;
			this.dragVars.startPos = e.clientX;
		}
	}, {
		key: 'mouseUp',
		value: function mouseUp(e) {
			e.preventDefault();
			this.disableDrag();
		}
	}, {
		key: 'stageMouseOut',
		value: function stageMouseOut(e) {
			e.preventDefault();
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName == "HTML") {
				this.disableDrag();
			}
		}
	}, {
		key: 'mouseMove',
		value: function mouseMove(e) {
			e.preventDefault();
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
			sprite.scale.x = sprite.scale.y = 0.7;
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
			this.tlIn.timeScale(1.2).play(0);
		}
	}, {
		key: 'willTransitionOut',
		value: function willTransitionOut() {
			this.tlIn.pause(0);
			this.tlOut.timeScale(1.4).play(0);
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
			"title": "inspiration-spark page",
			"images": [
				"1 - LDS04 Mona Oren.jpg",
				"2 - LDS01 Liu Juan Hua.jpg",
				"3 - LDS 37 Laerte Ramos.jpg",
				"4 - LDS 40 Erdal Duman.jpg",
				"5 - LDS01 Liu Juan Hua.jpg",
				"6 - LDS07 Gregor Hidebrandt.jpg",
				"7 - LDS08 Daniel Arsham.jpg",
				"8 - LDS12 Kowei Nawa.jpg",
				"9 - LDS13 Marteen Baas.jpg",
				"10 - LDS17 Marie Christophe.jpg",
				"11 - LDS18 Wen Fang.jpg",
				"12 - LDS19 Nicolas Milhe.jpg",
				"13 - LDS20 Biju Jose.jpg",
				"14 - LDS24 Kengo Kito.jpg",
				"15 - LDS27 Susan Hefuna.jpg",
				"16 - LDS28 Morgane Tschiember.jpg",
				"17 - LDS36 Brigida Baltar.jpg",
				"18 - LDS42 Martin & Youle.jpg",
				"19 - LDS43 Alice Anderson.jpg",
				"20 - LDS44 Jack Lavender.jpg",
				"21 - LDS14 Olympia Scarry.jpg"
			]
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL01haW4uanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHAuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9BcHBUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvRnJvbnRDb250YWluZXIuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL01lbnUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb21wb25lbnRzL1BYQ29udGFpbmVyLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9QYWdlc0NvbnRhaW5lci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvQXJjaGl0ZWN0dXJlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvY29tcG9uZW50cy9wYWdlcy9DcmVhdGl2aXR5SW5ub3ZhdGlvbi5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSG9tZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvSW5zcGlyYXRpb25TcGFyay5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvUXVpbnRhZXNzZW5jZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL2NvbXBvbmVudHMvcGFnZXMvU3R5bGUuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC9jb25zdGFudHMvQXBwQ29uc3RhbnRzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL21peGlucy9IZWxwZXJzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvbWl4aW5zL1BvbHlmaWxscy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL0dsb2JhbEV2ZW50cy5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1ByZWxvYWRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3NlcnZpY2VzL1JvdXRlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3N2Zy9TVkdDb21wb25lbnQuanMiLCIvVXNlcnMvcGFuYWdpb3Rpc3Rob21vZ2xvdS9Qcm9qZWN0cy9sYWR5LWRpb3Ivc3JjL2pzL2FwcC91dGlscy9BdXRvYmluZC5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvYXBwL3V0aWxzL1V0aWxzLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9hcHAvdXRpbHMvcmFmLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9QYWdlci5qcyIsIi9Vc2Vycy9wYW5hZ2lvdGlzdGhvbW9nbG91L1Byb2plY3RzL2xhZHktZGlvci9zcmMvanMvcGFnZXIvY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQYWdlLmpzIiwiL1VzZXJzL3BhbmFnaW90aXN0aG9tb2dsb3UvUHJvamVjdHMvbGFkeS1kaW9yL3NyYy9qcy9wYWdlci9jb21wb25lbnRzL0Jhc2VQ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QUNuQixPQUFJLEtBQUssR0FBRyxPQUFPLENBQUE7QUFDbkIsT0FBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDbkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRixDQUFDLENBQUM7R0FDSDs7O1NBQ1EscUJBQUc7QUFDUixPQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0QsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDcEMsUUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIChzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcGl0YWxpemU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJpbXBvcnQgQXBwIGZyb20gJ0FwcCdcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJ1xuaW1wb3J0IFBhZ2VyIGZyb20gJ1BhZ2VyJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgUG9seWZpbGxzIGZyb20gJ1BvbHlmaWxscydcblxuLy8gU3RhcnQgQXBwXG52YXIgYXBwID0gbmV3IEFwcCgpXG5hcHAuaW5pdCgpXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IEFwcFRlbXBsYXRlIGZyb20gJ0FwcFRlbXBsYXRlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgR0V2ZW50cyBmcm9tICdHbG9iYWxFdmVudHMnXG5pbXBvcnQgUHJlbG9hZCBmcm9tICdQcmVsb2FkZXInXG5pbXBvcnQgRGF0YSBmcm9tICdEYXRhJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXHRpbml0KCkge1xuXG5cdFx0Ly8gSW5pdCBnbG9iYWwgZXZlbnRzXG5cdFx0d2luZG93Lkdsb2JhbEV2ZW50cyA9IG5ldyBHRXZlbnRzKClcblx0XHRHbG9iYWxFdmVudHMuaW5pdCgpXG5cblx0XHRBcHBTdG9yZS5QYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG5cblx0XHRpZiAoJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiBoaXN0b3J5KSB7XG5cdFx0XHQvLyBCYWNrIG9mZiwgYnJvd3NlciwgSSBnb3QgdGhpcy4uLlxuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXHRcdH1cblxuXHRcdHRoaXMub25NYWluRGF0YUxvYWRlZCgpXG5cdH1cblxuXHRvbk1haW5EYXRhTG9hZGVkKCkge1xuXG5cdFx0QXBwU3RvcmUuRGF0YSA9IERhdGFcblx0XHRcblx0XHQvLyBJbml0IHJvdXRlclxuXHRcdHZhciByb3V0ZXIgPSBuZXcgUm91dGVyKClcblx0XHRyb3V0ZXIuaW5pdCgpXG5cblx0XHQvLyBSZW5kZXIgcmVhY3Rcblx0XHRSZWFjdC5yZW5kZXIoXG5cdFx0XHQ8QXBwVGVtcGxhdGUgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpXG5cdFx0KVxuXG5cdFx0Ly8gU3RhcnQgcm91dGluZ1xuXHRcdHJvdXRlci5iZWdpblJvdXRpbmcoKVxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4gICAgXHRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEZyb250Q29udGFpbmVyIGZyb20gJ0Zyb250Q29udGFpbmVyJ1xuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJ1BhZ2VzQ29udGFpbmVyJ1xuaW1wb3J0IFBYQ29udGFpbmVyIGZyb20gJ1BYQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUZW1wbGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuV0lORE9XX1JFU0laRSwgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPSdhcHAtdGVtcGxhdGUnPlxuXHRcdFx0XHQ8RnJvbnRDb250YWluZXIgcmVmPSdmcm9udC1jb250YWluZXInIC8+XG5cdFx0XHRcdDxQYWdlc0NvbnRhaW5lciByZWY9J3BhZ2VzLWNvbnRhaW5lcicgLz5cblx0XHRcdFx0PFBYQ29udGFpbmVyIHJlZj0ncHgtY29udGFpbmVyJyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEdsb2JhbEV2ZW50cy5yZXNpemUoKVxuXHRcdHRoaXMuYW5pbWF0ZSgpXG5cdH1cblx0YW5pbWF0ZSgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuXHRcdHRoaXMucmVmc1sncHgtY29udGFpbmVyJ10udXBkYXRlKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMucmVmc1snZnJvbnQtY29udGFpbmVyJ10ucmVzaXplKClcblx0XHR0aGlzLnJlZnNbJ3BhZ2VzLWNvbnRhaW5lciddLnJlc2l6ZSgpXG5cdFx0dGhpcy5yZWZzWydweC1jb250YWluZXInXS5yZXNpemUoKVxuXHR9XG59XG4iLCJpbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJ0FwcERpc3BhdGNoZXInXG5cbnZhciBBcHBBY3Rpb25zID0ge1xuICAgIHBhZ2VIYXNoZXJDaGFuZ2VkOiBmdW5jdGlvbihwYWdlSWQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELFxuICAgICAgICAgICAgaXRlbTogcGFnZUlkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24od2luZG93Vywgd2luZG93SCkge1xuICAgICAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uVHlwZTogQXBwQ29uc3RhbnRzLldJTkRPV19SRVNJWkUsXG4gICAgICAgICAgICBpdGVtOiB7IHdpbmRvd1c6d2luZG93Vywgd2luZG93SDp3aW5kb3dIIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZFBYQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlVmlld0FjdGlvbih7XG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBBcHBDb25zdGFudHMuQUREX1BYX0NISUxELFxuICAgICAgICAgICAgaXRlbTogeyBjaGlsZDpjaGlsZCB9XG4gICAgICAgIH0pICAgIFxuICAgIH0sXG4gICAgcmVtb3ZlUFhDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5SRU1PVkVfUFhfQ0hJTEQsXG4gICAgICAgICAgICBpdGVtOiB7IGNoaWxkOmNoaWxkIH1cbiAgICAgICAgfSkgICAgXG4gICAgfSxcbiAgICBpbnRyb0ZpbmlzaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVWaWV3QWN0aW9uKHtcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IEFwcENvbnN0YW50cy5JTlRST19GSU5JU0hFRCxcbiAgICAgICAgICAgIGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG5cbndpbmRvdy5BcHBBY3Rpb25zID0gQXBwQWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBBcHBBY3Rpb25zXG5cblxuICAgICAgXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdCYXNlQ29tcG9uZW50J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgTWVudSBmcm9tICdNZW51J1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5pbXBvcnQgU1ZHQ29tcG9uZW50IGZyb20gJ1NWR0NvbXBvbmVudCdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5pbnRyb0ZpbmlzaGVkID0gdGhpcy5pbnRyb0ZpbmlzaGVkLmJpbmQodGhpcylcblx0XHR0aGlzLmRpZEhhc2hlckNoYW5nZSA9IHRoaXMuZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0QXBwU3RvcmUub24oQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQsIHRoaXMuZGlkSGFzaGVyQ2hhbmdlKVxuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5JTlRST19GSU5JU0hFRCwgdGhpcy5pbnRyb0ZpbmlzaGVkKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0nZnJvbnQtY29udGFpbmVyJyByZWY9J2Zyb250LWNvbnRhaW5lcic+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZWdpbi1zbGlkZVwiIHJlZj0nYmVnaW4tc2xpZGUnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuXHRcdFx0XHRcdFx0PFNWR0NvbXBvbmVudCB3aWR0aD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE4Ny4wODYgNzMuODYzXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTQxLjk1NiwzOS42M2MtMi4wMjMtMC45MDMtNC4yNjUtMS4zNzMtNi42ODctMS40ODNsLTYuNjg4LDAuMzk4Yy0xLjgwNywwLjMyNS0zLjU0MiwwLjk3Ny01LjI3NywxLjk4OWMtMS45NTEsMS4xNTYtMy41NzgsMi42MDMtNC44NzksNC4zMzdjLTMuMzI1LDQuMTU2LTQuNTE5LDkuMDM2LTMuNjE0LDE0Ljc4M2MxLjAxMiw2LjA3Myw0LjE1NiwxMC4yMjksOS4zMjUsMTIuMzI3YzMuOTc3LDEuNjI2LDguMzg2LDEuOTUsMTMuMTIxLDAuOTAyYzQuNTE4LTAuOTM5LDguMDk3LTMuMTA4LDEwLjgwOC02LjUwNWMzLjE4MS00LjAxNCw0LjE5Mi04Ljk2NSwzLTE0LjgyMUMxNDkuOTA5LDQ1Ljc3NSwxNDYuODM2LDQxLjc5OSwxNDEuOTU2LDM5LjYzeiBNMTQxLjg0OSw2NS45MDljLTEuNTU1LDIuODktMy45MDMsNC42MjYtNy4xMjEsNS4yNDFjLTMuMDcyLDAuNTQxLTUuODE5LTAuNjUyLTguMjQxLTMuNTA4Yy0yLjI3Ny0yLjcxLTMuNjg4LTYuMjU0LTQuMDg1LTEwLjY5OGMtMC41NDItNC40ODMsMC04LjI3OCwxLjQ4MS0xMS4zODhjMS42MjctMy40MzQsNC4xMjEtNS4yNDEsNy4zNzUtNS41NjVjMy4zNjEtMC4yODgsNi4xNDUsMC43OTUsOC4zNSwzLjI1NGMyLjI0MSwyLjQ5MywzLjUwNiw2LjEwOSwzLjk0LDEwLjk4OEMxNDMuOTA4LDU5LjExMywxNDMuMzY3LDYyLjk0NSwxNDEuODQ5LDY1LjkwOXogTTQwLjU2NiwwLjM3NUg0LjMxMmMtMC43MjMsMC0xLjA4NSwwLjIxNi0xLjA4NSwwLjcyMmwwLjI5LDAuNTQzbDEuNDQ2LDAuMjg4TDguNDY4LDIuMTFsMy40MzQsMC40MzNjMi40NTgsMC41NDMsMy43MjMsMS45MTYsMy43MjMsNC4xNTd2NTcuMzI4Yy0wLjAzNiwxLjc3My0wLjIxNywzLjA3NC0wLjU0MiwzLjk0bC0wLjkwMywxLjI2N2MtMC40NywwLjU0MS0xLjQ0NiwwLjkzOS0yLjgxOSwxLjExOWwtOC44NTYsMC41NDNjLTEuMDEyLDAtMS41NTQsMC4yNTQtMS41NTQsMC43MjRjMCwwLjQzMywwLjM2MSwwLjY4NiwxLjEyMSwwLjY4Nmg0Ni4yMzFjNS42MDMsMCwxMC41OTEtMS4wNDgsMTUuMDM3LTMuMDcxYzQuMTU3LTEuOTg5LDcuNzcxLTQuNywxMC43MzUtOC4yMDVjMi43MTEtMy4zMjcsNC44MDgtNy4wNDksNi4zMjYtMTEuMjc5YzEuMzM3LTQuMDEyLDEuOTg4LTguMTY4LDEuOTg4LTEyLjQ2OWMwLTguMjQyLTEuOTg4LTE1LjM2Mi01Ljk2NC0yMS4zNjNDNjkuNDgzLDUuNTQzLDU3LjU1NSwwLjM3NSw0MC41NjYsMC4zNzV6IE02OC44MzMsNDYuMjhjLTEuMTkzLDUuNTMxLTMuMTQ1LDEwLjA0OS01Ljg1NiwxMy41OTFjLTEuNjI2LDIuMTY5LTMuMTA4LDMuODY4LTQuNTU0LDUuMDYyYy0xLjYyNiwxLjI2NS0zLjUwNiwyLjMxMi01LjQ5NCwzLjAzNWMtMS45ODgsMC42NTEtNC41MTksMS4xMjEtNy40ODMsMS40NDZsLTExLjA2LDAuMzk4aC00Ljc3MWwtMS40NDYtMC4yMTdjLTAuMjg5LTAuMTgyLTAuNDMzLTAuNjg4LTAuNDMzLTEuNDExVjQuNTMybDAuMjUyLTEuNDQ1YzAuMjUzLTAuNDM1LDAuNzk1LTAuNjE1LDEuNjI3LTAuNTQzaDcuMzM3YzExLjg5MywwLDIwLjQ5NSwzLjU0MywyNS43MzYsMTAuN2MyLjcxMSwzLjY4Nyw0LjYyNyw4LjAyNCw1Ljg5MiwxMi45NzZjMC45MDQsMy40MzUsMS4zMzcsNi42MTUsMS4zMzcsOS41NzlDNjkuOTE3LDM5LjE2LDY5LjU1Niw0Mi42NjcsNjguODMzLDQ2LjI4eiBNOTAuMzU3LDQ0LjgzNWwwLjk0My0wLjEwOGwyLjExMi0wLjU3OWwxLjg4LDAuMTgyYzAuNTQyLDAuMzYyLDAuODMxLDAuOTc3LDAuODMxLDEuNzcxdjIxLjAwMWwtMC40NywyLjYwM2MtMC4zMjYsMC43MjMtMS4xNTcsMS4xOTItMi41MywxLjM3MmwtMi41MywwLjA3NGMtMC43OTUsMC0xLjE1NywwLjE4LTEuMDg0LDAuNjE0YzAsMC4yODgsMC4yMTcsMC40NywwLjY1LDAuNDdoMTkuMjY2YzAuNDM1LDAsMC42ODctMC4xMSwwLjY4Ny0wLjQzNWMtMC4wNzItMC4zOTYtMC41MDYtMC41NzgtMS4zMzctMC41NzhjLTIuMzUsMC0zLjg2Ny0wLjMyNS00LjUxOS0wLjk3N2MtMC41NDItMC41NDEtMC44MzEtMS40NDYtMC44MzEtMi43MXYtMjYuNDZjMC0xLjMwMS0wLjE4MS0yLjAyMy0wLjU0Mi0yLjA5NWwtMS4wODUsMC4xMDdjLTAuNDM0LDAuMTgtMS40MSwwLjYxNS0yLjc4MiwxLjQxYy0yLjI0MiwxLjI2NC00Ljg4LDIuMjc3LTcuODgsMy4wNzFjLTEuMjY2LDAuMzYxLTEuODA4LDAuNzYtMS42MjcsMS4xOTNMOTAuMzU3LDQ0LjgzNXogTTE4Ni4xMjcsNDIuOTU1YzAuMDczLDEuMjY2LTAuMjg5LDIuMjQtMS4wODQsM2MtMC43MjMsMC42MTUtMS40NDUsMC43OTUtMi4wOTYsMC42MTVjLTAuNjE1LTAuMTA4LTEuMDg1LTAuMzYxLTEuNDEtMC43MjRsLTEuMDEzLTEuMjY0Yy0wLjc5NS0xLjE1OC0xLjU1NC0xLjUyLTIuNDU4LTEuMTkzYy0xLjA0OCwwLjI4OC0yLjEzMiwxLjA4My0zLjI1MywyLjM0OWMtMS43NzEsMS44NDMtMi45NjQsNC4wMTItMy42MTQsNi42MTR2MTUuMzY0YzAsMS4zNzIsMC40NywyLjM0OSwxLjQ0NSwyLjk2M2wyLjIwNSwwLjM5NmwyLjMxNCwwLjI1NGMwLjU0MiwwLjA3MywwLjc1OSwwLjE4MiwwLjc1OSwwLjQ3bC0wLjEwOCwwLjI1M2wtMC42MTUsMC4xODJIMTU3Ljg2Yy0wLjU3OCwwLTAuOTAyLTAuMTgyLTAuOTAyLTAuNDdsMC41NDEtMC40MzVsMy4yNTQtMC4yNTRjMS4yNjYtMC4yMTYsMi4wNi0wLjY0OSwyLjQ5NC0xLjMwMWwwLjU0Mi0xLjYyNlY0Ni40NjJsLTAuMzYxLTEuNTkxbC0wLjYxNS0wLjM2MmMtMC4xODEtMC4xOC0wLjQ3LTAuMjg4LTAuOTAyLTAuMzYxYy0wLjU0Mi0wLjAzNi0xLjE5NCwwLjA3My0xLjg4LDAuMzYxbC0xLjg0NCwwLjUwN2wtMS4wNDgtMC4yNTNjLTAuMTgxLTAuMjU0LTAuMTA5LTAuNDM0LDAuMTQ0LTAuNTQybDEuNTU1LTAuNjUxYzMuNTQyLTEuMDQ4LDYuMzk4LTIuMTMyLDguMzg2LTMuMjU0bDIuNDU4LTEuMzM1bDEuMDg1LDAuMDcxbDAuNDM0LDAuOTAydjcuOTU0YzIuNzExLTQuNDEsNC44OC03LjEyMiw2LjM2MS04LjAyNWMwLjkwNC0wLjU0MSwxLjc3MS0wLjk3NywyLjQyMi0xLjE1NmwxLjI2Ni0wLjEwOGMwLjc5NS0wLjA3MywxLjY5OSwwLjE4LDIuNzExLDAuODMyQzE4NS4zMzMsNDAuMjQ0LDE4Ni4wNTUsNDEuNDM4LDE4Ni4xMjcsNDIuOTU1eiBNOTUuOTQyLDI0LjA1MWMtMC45NzYtMC45MDUtMS40NDYtMS45ODktMS4zNzQtMy4yNTRjLTAuMDcyLTEuMzM4LDAuMzk4LTIuNDk0LDEuMzc0LTMuMzk4YzAuOTAzLTAuOTA0LDEuOTg4LTEuMzc0LDMuMzI1LTEuMzc0YzEuMjY2LDAsMi4zODYsMC40NywzLjI4OSwxLjM3NGMwLjkwNCwwLjkwNCwxLjQxLDIuMDYsMS40MSwzLjM5OGMwLDEuMjY1LTAuNTA2LDIuMzQ5LTEuNDEsMy4yNTRjLTAuOTAzLDAuOTAzLTIuMDIzLDEuMzczLTMuMjg5LDEuMzczQzk3LjkzMSwyNS40MjQsOTYuODQ2LDI0Ljk1NCw5NS45NDIsMjQuMDUxelwiLz5cblx0XHRcdFx0XHRcdDwvU1ZHQ29tcG9uZW50PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8YSBocmVmPScjLyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgcmVmPSdsb2dvJz5cblx0XHRcdFx0XHRcdDxTVkdDb21wb25lbnQgd2lkdGg9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxODcuMDg2IDczLjg2M1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE0MS45NTYsMzkuNjNjLTIuMDIzLTAuOTAzLTQuMjY1LTEuMzczLTYuNjg3LTEuNDgzbC02LjY4OCwwLjM5OGMtMS44MDcsMC4zMjUtMy41NDIsMC45NzctNS4yNzcsMS45ODljLTEuOTUxLDEuMTU2LTMuNTc4LDIuNjAzLTQuODc5LDQuMzM3Yy0zLjMyNSw0LjE1Ni00LjUxOSw5LjAzNi0zLjYxNCwxNC43ODNjMS4wMTIsNi4wNzMsNC4xNTYsMTAuMjI5LDkuMzI1LDEyLjMyN2MzLjk3NywxLjYyNiw4LjM4NiwxLjk1LDEzLjEyMSwwLjkwMmM0LjUxOC0wLjkzOSw4LjA5Ny0zLjEwOCwxMC44MDgtNi41MDVjMy4xODEtNC4wMTQsNC4xOTItOC45NjUsMy0xNC44MjFDMTQ5LjkwOSw0NS43NzUsMTQ2LjgzNiw0MS43OTksMTQxLjk1NiwzOS42M3ogTTE0MS44NDksNjUuOTA5Yy0xLjU1NSwyLjg5LTMuOTAzLDQuNjI2LTcuMTIxLDUuMjQxYy0zLjA3MiwwLjU0MS01LjgxOS0wLjY1Mi04LjI0MS0zLjUwOGMtMi4yNzctMi43MS0zLjY4OC02LjI1NC00LjA4NS0xMC42OThjLTAuNTQyLTQuNDgzLDAtOC4yNzgsMS40ODEtMTEuMzg4YzEuNjI3LTMuNDM0LDQuMTIxLTUuMjQxLDcuMzc1LTUuNTY1YzMuMzYxLTAuMjg4LDYuMTQ1LDAuNzk1LDguMzUsMy4yNTRjMi4yNDEsMi40OTMsMy41MDYsNi4xMDksMy45NCwxMC45ODhDMTQzLjkwOCw1OS4xMTMsMTQzLjM2Nyw2Mi45NDUsMTQxLjg0OSw2NS45MDl6IE00MC41NjYsMC4zNzVINC4zMTJjLTAuNzIzLDAtMS4wODUsMC4yMTYtMS4wODUsMC43MjJsMC4yOSwwLjU0M2wxLjQ0NiwwLjI4OEw4LjQ2OCwyLjExbDMuNDM0LDAuNDMzYzIuNDU4LDAuNTQzLDMuNzIzLDEuOTE2LDMuNzIzLDQuMTU3djU3LjMyOGMtMC4wMzYsMS43NzMtMC4yMTcsMy4wNzQtMC41NDIsMy45NGwtMC45MDMsMS4yNjdjLTAuNDcsMC41NDEtMS40NDYsMC45MzktMi44MTksMS4xMTlsLTguODU2LDAuNTQzYy0xLjAxMiwwLTEuNTU0LDAuMjU0LTEuNTU0LDAuNzI0YzAsMC40MzMsMC4zNjEsMC42ODYsMS4xMjEsMC42ODZoNDYuMjMxYzUuNjAzLDAsMTAuNTkxLTEuMDQ4LDE1LjAzNy0zLjA3MWM0LjE1Ny0xLjk4OSw3Ljc3MS00LjcsMTAuNzM1LTguMjA1YzIuNzExLTMuMzI3LDQuODA4LTcuMDQ5LDYuMzI2LTExLjI3OWMxLjMzNy00LjAxMiwxLjk4OC04LjE2OCwxLjk4OC0xMi40NjljMC04LjI0Mi0xLjk4OC0xNS4zNjItNS45NjQtMjEuMzYzQzY5LjQ4Myw1LjU0Myw1Ny41NTUsMC4zNzUsNDAuNTY2LDAuMzc1eiBNNjguODMzLDQ2LjI4Yy0xLjE5Myw1LjUzMS0zLjE0NSwxMC4wNDktNS44NTYsMTMuNTkxYy0xLjYyNiwyLjE2OS0zLjEwOCwzLjg2OC00LjU1NCw1LjA2MmMtMS42MjYsMS4yNjUtMy41MDYsMi4zMTItNS40OTQsMy4wMzVjLTEuOTg4LDAuNjUxLTQuNTE5LDEuMTIxLTcuNDgzLDEuNDQ2bC0xMS4wNiwwLjM5OGgtNC43NzFsLTEuNDQ2LTAuMjE3Yy0wLjI4OS0wLjE4Mi0wLjQzMy0wLjY4OC0wLjQzMy0xLjQxMVY0LjUzMmwwLjI1Mi0xLjQ0NWMwLjI1My0wLjQzNSwwLjc5NS0wLjYxNSwxLjYyNy0wLjU0M2g3LjMzN2MxMS44OTMsMCwyMC40OTUsMy41NDMsMjUuNzM2LDEwLjdjMi43MTEsMy42ODcsNC42MjcsOC4wMjQsNS44OTIsMTIuOTc2YzAuOTA0LDMuNDM1LDEuMzM3LDYuNjE1LDEuMzM3LDkuNTc5QzY5LjkxNywzOS4xNiw2OS41NTYsNDIuNjY3LDY4LjgzMyw0Ni4yOHogTTkwLjM1Nyw0NC44MzVsMC45NDMtMC4xMDhsMi4xMTItMC41NzlsMS44OCwwLjE4MmMwLjU0MiwwLjM2MiwwLjgzMSwwLjk3NywwLjgzMSwxLjc3MXYyMS4wMDFsLTAuNDcsMi42MDNjLTAuMzI2LDAuNzIzLTEuMTU3LDEuMTkyLTIuNTMsMS4zNzJsLTIuNTMsMC4wNzRjLTAuNzk1LDAtMS4xNTcsMC4xOC0xLjA4NCwwLjYxNGMwLDAuMjg4LDAuMjE3LDAuNDcsMC42NSwwLjQ3aDE5LjI2NmMwLjQzNSwwLDAuNjg3LTAuMTEsMC42ODctMC40MzVjLTAuMDcyLTAuMzk2LTAuNTA2LTAuNTc4LTEuMzM3LTAuNTc4Yy0yLjM1LDAtMy44NjctMC4zMjUtNC41MTktMC45NzdjLTAuNTQyLTAuNTQxLTAuODMxLTEuNDQ2LTAuODMxLTIuNzF2LTI2LjQ2YzAtMS4zMDEtMC4xODEtMi4wMjMtMC41NDItMi4wOTVsLTEuMDg1LDAuMTA3Yy0wLjQzNCwwLjE4LTEuNDEsMC42MTUtMi43ODIsMS40MWMtMi4yNDIsMS4yNjQtNC44OCwyLjI3Ny03Ljg4LDMuMDcxYy0xLjI2NiwwLjM2MS0xLjgwOCwwLjc2LTEuNjI3LDEuMTkzTDkwLjM1Nyw0NC44MzV6IE0xODYuMTI3LDQyLjk1NWMwLjA3MywxLjI2Ni0wLjI4OSwyLjI0LTEuMDg0LDNjLTAuNzIzLDAuNjE1LTEuNDQ1LDAuNzk1LTIuMDk2LDAuNjE1Yy0wLjYxNS0wLjEwOC0xLjA4NS0wLjM2MS0xLjQxLTAuNzI0bC0xLjAxMy0xLjI2NGMtMC43OTUtMS4xNTgtMS41NTQtMS41Mi0yLjQ1OC0xLjE5M2MtMS4wNDgsMC4yODgtMi4xMzIsMS4wODMtMy4yNTMsMi4zNDljLTEuNzcxLDEuODQzLTIuOTY0LDQuMDEyLTMuNjE0LDYuNjE0djE1LjM2NGMwLDEuMzcyLDAuNDcsMi4zNDksMS40NDUsMi45NjNsMi4yMDUsMC4zOTZsMi4zMTQsMC4yNTRjMC41NDIsMC4wNzMsMC43NTksMC4xODIsMC43NTksMC40N2wtMC4xMDgsMC4yNTNsLTAuNjE1LDAuMTgySDE1Ny44NmMtMC41NzgsMC0wLjkwMi0wLjE4Mi0wLjkwMi0wLjQ3bDAuNTQxLTAuNDM1bDMuMjU0LTAuMjU0YzEuMjY2LTAuMjE2LDIuMDYtMC42NDksMi40OTQtMS4zMDFsMC41NDItMS42MjZWNDYuNDYybC0wLjM2MS0xLjU5MWwtMC42MTUtMC4zNjJjLTAuMTgxLTAuMTgtMC40Ny0wLjI4OC0wLjkwMi0wLjM2MWMtMC41NDItMC4wMzYtMS4xOTQsMC4wNzMtMS44OCwwLjM2MWwtMS44NDQsMC41MDdsLTEuMDQ4LTAuMjUzYy0wLjE4MS0wLjI1NC0wLjEwOS0wLjQzNCwwLjE0NC0wLjU0MmwxLjU1NS0wLjY1MWMzLjU0Mi0xLjA0OCw2LjM5OC0yLjEzMiw4LjM4Ni0zLjI1NGwyLjQ1OC0xLjMzNWwxLjA4NSwwLjA3MWwwLjQzNCwwLjkwMnY3Ljk1NGMyLjcxMS00LjQxLDQuODgtNy4xMjIsNi4zNjEtOC4wMjVjMC45MDQtMC41NDEsMS43NzEtMC45NzcsMi40MjItMS4xNTZsMS4yNjYtMC4xMDhjMC43OTUtMC4wNzMsMS42OTksMC4xOCwyLjcxMSwwLjgzMkMxODUuMzMzLDQwLjI0NCwxODYuMDU1LDQxLjQzOCwxODYuMTI3LDQyLjk1NXogTTk1Ljk0MiwyNC4wNTFjLTAuOTc2LTAuOTA1LTEuNDQ2LTEuOTg5LTEuMzc0LTMuMjU0Yy0wLjA3Mi0xLjMzOCwwLjM5OC0yLjQ5NCwxLjM3NC0zLjM5OGMwLjkwMy0wLjkwNCwxLjk4OC0xLjM3NCwzLjMyNS0xLjM3NGMxLjI2NiwwLDIuMzg2LDAuNDcsMy4yODksMS4zNzRjMC45MDQsMC45MDQsMS40MSwyLjA2LDEuNDEsMy4zOThjMCwxLjI2NS0wLjUwNiwyLjM0OS0xLjQxLDMuMjU0Yy0wLjkwMywwLjkwMy0yLjAyMywxLjM3My0zLjI4OSwxLjM3M0M5Ny45MzEsMjUuNDI0LDk2Ljg0NiwyNC45NTQsOTUuOTQyLDI0LjA1MXpcIi8+XG5cdFx0XHRcdFx0XHQ8L1NWR0NvbXBvbmVudD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdDxNZW51IHJlZj0nbWVudScgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmJlZ2luU2xpZGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2JlZ2luLXNsaWRlJ10pXG5cdFx0dGhpcy5sb2dvID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydsb2dvJ10pXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IGRvbSh0aGlzLmJlZ2luU2xpZGUpLmFkZENsYXNzKCd0cmFuc2l0aW9uLWluJykgfSwgMTAwMClcblx0XHRzZXRUaW1lb3V0KCgpPT57IGRvbSh0aGlzLmJlZ2luU2xpZGUpLnJlbW92ZUNsYXNzKCd0cmFuc2l0aW9uLWluJyk7IGRvbSh0aGlzLmJlZ2luU2xpZGUpLmFkZENsYXNzKCd0cmFuc2l0aW9uLW91dCcpOyB9LCA0MDAwKVxuXHRcdC8vIHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5pbnRyb0ZpbmlzaGVkKCkgfSwgNTAwMClcblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMuaW50cm9GaW5pc2hlZCgpIH0sIDUwMClcblxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR2YXIgaXRlbSA9IEFwcFN0b3JlLmdldEN1cnJlbnRQYWdlTWVudUl0ZW0oKVxuXHRcdHRoaXMucmVmc1snbWVudSddLmhpZ2hsaWdodEJ5SXRlbShpdGVtKVxuXHR9XG5cdGludHJvRmluaXNoZWQoKSB7XG5cdFx0ZG9tKHRoaXMuYmVnaW5TbGlkZSkucmVtb3ZlKClcblx0XHRBcHBTdG9yZS5vZmYoQXBwQ29uc3RhbnRzLklOVFJPX0ZJTklTSEVELCB0aGlzLmludHJvRmluaXNoZWQpXG5cdFx0XG5cdFx0dGhpcy5yZWZzWydtZW51J10udHJhbnNpdGlvbkluKClcblx0XHRkb20odGhpcy5sb2dvKS5hZGRDbGFzcygndHJhbnNpdGlvbi1pbicpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0XG5cdFx0dGhpcy5yZWZzWydtZW51J10ucmVzaXplKClcblxuXHRcdHRoaXMuYmVnaW5TbGlkZS5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0dGhpcy5iZWdpblNsaWRlLnN0eWxlLmhlaWdodCA9IHdpbmRvd0ggKyAncHgnXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBzaXplIGZyb20gJ2VsZW1lbnQtc2l6ZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm1vdXNlRW50ZXIgPSB0aGlzLm1vdXNlRW50ZXIuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2VMZWF2ZSA9IHRoaXMubW91c2VMZWF2ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jbGljayA9IHRoaXMuY2xpY2suYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIgbWVudURhdGEgPSBBcHBTdG9yZS5tZW51Q29udGVudCgpXG5cdFx0dmFyIG1lbnVJdGVtcyA9IG1lbnVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHR2YXIgcGF0aFVybCA9ICcjJyArIGl0ZW0udXJsXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxsaSBpZD17aXRlbS5pZH0ga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0PGEgaHJlZj17cGF0aFVybH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhdGluLW51bVwiPntpdGVtWydsYXRpbi1udW0nXX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgcmVmPSdtZW51JyBpZD0nbWVudSc+IFxuXHRcdFx0XHR7bWVudUl0ZW1zfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucGFyZW50ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzWydtZW51J10pXG5cdFx0XG5cdFx0dGhpcy5pdGVtcyA9IFtdXG5cdFx0dmFyIGJ0bnMgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnbGknKVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJ0biA9IGJ0bnNbaV1cblx0XHRcdHZhciB0aXRsZSA9IGRvbShidG4pLnNlbGVjdCgnLnRpdGxlJylbMF1cblx0XHRcdHZhciBjaGFycyA9IFV0aWxzLlRyYW5mb3JtQXJyYXlGcm9tTWlkZGxlQW5kT3V0KG5ldyBTcGxpdFRleHQodGl0bGUsIHsgdHlwZTonY2hhcnMnIH0pLmNoYXJzKVxuXHRcdFx0XG5cdFx0XHR2YXIgdGwgPSBuZXcgVGltZWxpbmVMaXRlKClcblx0XHRcdHRsLnN0YWdnZXJGcm9tKGNoYXJzLCAxLCB7IG9wYWNpdHk6MCwgeToxMCwgc2NhbGVZOjAuOCwgZm9yY2UzRDp0cnVlLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMCUnLCBlYXNlOiBFeHBvLmVhc2VPdXQgfSwgMC4wMSwgMClcblx0XHRcdHRsLnBhdXNlKDApXG5cblx0XHRcdHZhciB0bEhvbWUgPSBuZXcgVGltZWxpbmVMaXRlKClcblx0XHRcdHRsSG9tZS5zdGFnZ2VyVG8oY2hhcnMsIDEsIHsgeTotMTAsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuMDEsIDApXG5cdFx0XHR0bEhvbWUucGF1c2UoMClcblxuXHRcdFx0ZG9tKGJ0bikub24oJ21vdXNlZW50ZXInLCB0aGlzLm1vdXNlRW50ZXIpXG5cdFx0XHRkb20oYnRuKS5vbignbW91c2VsZWF2ZScsIHRoaXMubW91c2VMZWF2ZSlcblx0XHRcdGRvbShidG4pLm9uKCdjbGljaycsIHRoaXMuY2xpY2spXG5cblx0XHRcdHRoaXMuaXRlbXNbaV0gPSB7XG5cdFx0XHRcdGVsOiBidG4sXG5cdFx0XHRcdGlkOiBidG4uaWQsXG5cdFx0XHRcdHRsOiB0bCxcblx0XHRcdFx0dGxIb21lOiB0bEhvbWUsXG5cdFx0XHRcdGhpZ2hsaWdodDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0bW91c2VFbnRlcihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKGUuY3VycmVudFRhcmdldC5pZClcblx0XHR2YXIgY3VycmVudFBhZ2VJZCA9IEFwcFN0b3JlLmdldEN1cnJlbnRQYWdlTWVudUl0ZW0oKS5pZFxuXG5cdFx0aWYoY3VycmVudFBhZ2VJZCAhPSAnaG9tZScpIHtcblx0XHRcdGlmKCFpdGVtLmhpZ2hsaWdodCkge1xuXHRcdFx0XHRkb20oaXRlbS5lbCkuYWRkQ2xhc3MoJ2hvdmVyZWQnKVxuXHRcdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0XHRpdGVtLnRsLnRpbWVTY2FsZSgxLjYpLnBsYXkoMClcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGRvbShpdGVtLmVsKS5hZGRDbGFzcygnaG92ZXJlZC1ob21lJylcblx0XHRcdGl0ZW0udGxIb21lLnRpbWVTY2FsZSgyKS5wbGF5KDApXG5cdFx0fVxuXG5cdH1cblx0bW91c2VMZWF2ZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKGUuY3VycmVudFRhcmdldC5pZClcblx0XHR2YXIgY3VycmVudFBhZ2VJZCA9IEFwcFN0b3JlLmdldEN1cnJlbnRQYWdlTWVudUl0ZW0oKS5pZFxuXG5cdFx0aWYoY3VycmVudFBhZ2VJZCAhPSAnaG9tZScpIHtcblx0XHRcdGlmKCFpdGVtLmhpZ2hsaWdodCkge1xuXHRcdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKVxuXHRcdFx0XHRkb20oaXRlbS5lbCkuYWRkQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0XHRpdGVtLnRsLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGRvbShpdGVtLmVsKS5yZW1vdmVDbGFzcygnaG92ZXJlZC1ob21lJylcblx0XHRcdGl0ZW0udGxIb21lLnRpbWVTY2FsZSgzKS5yZXZlcnNlKClcblx0XHR9XG5cdH1cblx0Y2xpY2soZSkge1xuXHRcdHZhciBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChlLmN1cnJlbnRUYXJnZXQuaWQpXG5cdFx0aXRlbS50bC50aW1lU2NhbGUoMS42KS5yZXZlcnNlKClcblx0XHRpdGVtLnRsSG9tZS50aW1lU2NhbGUoMS42KS5yZXZlcnNlKClcblx0fVxuXHRoaWdobGlnaHRCeUl0ZW0oaXRlbSkge1xuXG5cdFx0Ly8gaWYgSG9tZSByZW1vdmUgYWxsIGhpZ2hsaWdodHMgYW5kIHJldHVyblxuXHRcdGlmKGl0ZW0uaWQgPT0gJ2hvbWUnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGJ0biA9IHRoaXMuaXRlbXNbaV1cblx0XHRcdFx0dGhpcy5oaWdobGlnaHRUb0hvbWVTdGF0ZShidG4pXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYnRuID0gdGhpcy5pdGVtc1tpXVxuXHRcdFx0aWYoYnRuLmlkID09IGl0ZW0uaWQpIHRoaXMuYWRkSGlnaGxpZ2h0KGJ0bilcblx0XHRcdGVsc2UgdGhpcy5yZW1vdmVIaWdobGlnaHQoYnRuKVxuXHRcdH07XG5cdH1cblx0YWRkSGlnaGxpZ2h0KGl0ZW0pIHtcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRkb20oaXRlbS5lbCkuYWRkQ2xhc3MoJ2VuYWJsZScpXG5cdFx0XHRkb20oaXRlbS5lbCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKVxuXHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdob3ZlcmVkLWhvbWUnKVxuXHRcdFx0aXRlbS5oaWdobGlnaHQgPSB0cnVlXG5cdFx0XHRpdGVtLnRsLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcblx0XHR9LCAxMDAwKVxuXHR9XG5cdHJlbW92ZUhpZ2hsaWdodChpdGVtKSB7XG5cdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdlbmFibGUnKVxuXHRcdGRvbShpdGVtLmVsKS5hZGRDbGFzcygnZGlzYWJsZScpXG5cdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdob3ZlcmVkLWhvbWUnKVxuXHRcdGl0ZW0uaGlnaGxpZ2h0ID0gZmFsc2Vcblx0XHRpdGVtLnRsLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcblx0fVxuXHRoaWdobGlnaHRUb0hvbWVTdGF0ZShpdGVtKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdlbmFibGUnKVxuXHRcdFx0ZG9tKGl0ZW0uZWwpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJylcblx0XHRcdGl0ZW0udGwudGltZVNjYWxlKDEpLnBsYXkoMClcblx0XHR9LCAxMDAwKVxuXHRcdGl0ZW0uaGlnaGxpZ2h0ID0gZmFsc2Vcblx0fVxuXHRnZXRJdGVtQnlJZChpZCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldXG5cdFx0XHRpZihpdGVtLmlkID09IGlkKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHR0cmFuc2l0aW9uSW4oKSB7XG5cdFx0ZG9tKHRoaXMucGFyZW50KS5hZGRDbGFzcygndHJhbnNpdGlvbi1pbicpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cdFx0dmFyIHBhcmVudFNpemUgPSBzaXplKHRoaXMucGFyZW50KVxuXHRcdHZhciBwYXJlbnRDc3MgPSB7XG5cdFx0XHRsZWZ0OiAod2luZG93VyA+PiAxKSAtIChwYXJlbnRTaXplWzBdID4+IDEpICsgJ3B4Jyxcblx0XHRcdHRvcDogd2luZG93SCAtIChwYXJlbnRTaXplWzFdKSAtIEFwcENvbnN0YW50cy5PVkVSQUxMX01BUkdJTiArICdweCdcblx0XHR9XG5cdFx0ZG9tKHRoaXMucGFyZW50KS5zdHlsZShwYXJlbnRDc3MpXG5cdH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBYQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmFkZCA9IHRoaXMuYWRkLmJpbmQodGhpcylcblx0XHR0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcylcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuQUREX1BYX0NISUxELCB0aGlzLmFkZClcblx0XHRBcHBTdG9yZS5vbihBcHBDb25zdGFudHMuUkVNT1ZFX1BYX0NISUxELCB0aGlzLnJlbW92ZSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxjYW52YXMgY2xhc3NOYW1lPVwiY2FudmFzLWhvbGRlclwiPjwvY2FudmFzPlxuXHRcdClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHRcdHZhciBjYW52YXMgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLmNhbnZhcy1ob2xkZXInKVswXVxuXHRcdHZhciByZW5kZXJlciA9IG5ldyBQSVhJLkNhbnZhc1JlbmRlcmVyKDAsIDAsIHsgdmlldzpjYW52YXMgfSlcblx0XHRyZW5kZXJlci5iYWNrZ3JvdW5kQ29sb3IgPSAweEZGRkZGRlxuXG5cdFx0dGhpcy5waXhpID0ge1xuXHRcdFx0Y2FudmFzOiBjYW52YXMsXG5cdFx0XHRyZW5kZXJlcjogcmVuZGVyZXIsXG5cdFx0XHRzdGFnZTogc3RhZ2Vcblx0XHR9XG5cdH1cblx0YWRkKGl0ZW0pIHtcblx0XHR0aGlzLnBpeGkuc3RhZ2UuYWRkQ2hpbGQoaXRlbS5jaGlsZClcblx0fVxuXHRyZW1vdmUoaXRlbSkge1xuXHRcdHRoaXMucGl4aS5zdGFnZS5yZW1vdmVDaGlsZChpdGVtLmNoaWxkKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgc2NhbGUgPSAxXG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR0aGlzLnBpeGkuY2FudmFzLnN0eWxlLndpZHRoID0gd2luZG93VyArICdweCdcblx0XHR0aGlzLnBpeGkuY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvd0ggKyAncHgnXG5cdFx0dGhpcy5waXhpLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3dXICogc2NhbGUsIHdpbmRvd0ggKiBzY2FsZSlcblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5waXhpLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBpeGkuc3RhZ2UpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZSBmcm9tICdCYXNlUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgc2l6ZSBmcm9tICdlbGVtZW50LXNpemUnXG5pbXBvcnQgc2Nyb2xsdG9wIGZyb20gJ3NpbXBsZS1zY3JvbGx0b3AnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxNb3VudCgpXG5cblx0XHRzZXRUaW1lb3V0KCgpPT57IEFwcEFjdGlvbnMuYWRkUFhDaGlsZCh0aGlzLmNvbnRhaW5lcikgfSwgMClcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnBhcmVudCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cdFx0dGhpcy5lbGVtZW50c0hvbGRlciA9IGRvbSh0aGlzLnBhcmVudCkuc2VsZWN0KCcuZWxlbWVudHMtaG9sZGVyJylbMF1cblx0XHR0aGlzLmludHJvU2xpZGUgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLmludHJvLXNsaWRlJylbMF1cblx0XHR0aGlzLmZyb250SG9sZGVyID0gZG9tKHRoaXMuaW50cm9TbGlkZSkuc2VsZWN0KCcuZnJvbnQtaG9sZGVyJylbMF1cblx0XHRcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRzY3JvbGx0b3AoMClcblx0XHR9LCAxMDAwKVxuXHRcdHN1cGVyLndpbGxUcmFuc2l0aW9uSW4oKVxuXHR9XG5cdHNldHVwQW5pbWF0aW9ucygpIHtcblx0XHQvLyB0cmFuc2l0aW9uIEluXG5cdFx0dGhpcy50bEluLmZyb21Ubyh0aGlzLmludHJvU2xpZGUsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIHsgb3BhY2l0eToxLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDApXG5cdFx0dGhpcy50bEluLnRvKHRoaXMuaW50cm9TbGlkZSwgMSwgeyBvcGFjaXR5OjAsIGVhc2U6RXhwby5lYXNlSW5PdXQgfSwgMylcblx0XHR0aGlzLnRsSW4uZnJvbVRvKHRoaXMuZWxlbWVudHNIb2xkZXIsIDEsIHsgb3BhY2l0eTowIH0sIHsgb3BhY2l0eToxLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDIpXG5cdFx0dGhpcy50bEluLmZyb21Ubyh0aGlzLmNvbnRhaW5lciwgMSwgeyBhbHBoYTowIH0sIHsgYWxwaGE6MSwgZWFzZTpFeHBvLmVhc2VJbk91dCB9LCAyKVxuXG5cdFx0Ly8gdHJhbnNpdGlvbiBPdXRcblx0XHR0aGlzLnRsT3V0LnRvKHRoaXMuZWxlbWVudHNIb2xkZXIsIDEsIHsgb3BhY2l0eTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDApXG5cdFx0dGhpcy50bE91dC50byh0aGlzLmNvbnRhaW5lciwgMSwgeyBhbHBoYTowLCBlYXNlOkV4cG8uZWFzZUluT3V0IH0sIDApXG5cblx0XHRzdXBlci5zZXR1cEFuaW1hdGlvbnMoKVxuXHR9XG5cdGdldEJhc2VQYWdlRG9tKGh0bWwpIHtcblx0XHR2YXIgY29udGVudCA9IEFwcFN0b3JlLmdldEN1cnJlbnRQYWdlTWVudUl0ZW0oKVxuXHRcdHZhciBpZCA9IGNvbnRlbnQuaWQgKyAnLXBhZ2UnXG5cblx0XHR2YXIgZnJvbnRIb2xkZXI7XG5cdFx0aWYoY29udGVudC5pZCA9PSAnaG9tZScpIHtcblx0XHRcdGZyb250SG9sZGVyID0gKFxuXHRcdFx0XHQ8ZGl2PjwvZGl2PlxuXHRcdFx0KVxuXHRcdH1lbHNle1xuXHRcdFx0ZnJvbnRIb2xkZXIgPSA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPntjb250ZW50Lm5hbWV9PC9kaXY+XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9e2lkfSByZWY9J3BhZ2Utd3JhcHBlcicgY2xhc3NOYW1lPSdwYWdlLXdyYXBwZXInPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHMtaG9sZGVyXCI+e2h0bWx9PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZnJvbnQtaG9sZGVyXCI+e2Zyb250SG9sZGVyfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93LmhcblxuXHRcdHZhciB0aXRsZVNpemUgPSBzaXplKHRoaXMuZnJvbnRIb2xkZXIpXG5cdFx0dGhpcy5mcm9udEhvbGRlci5zdHlsZS5sZWZ0ID0gKHdpbmRvd1cgPj4gMSkgLSAodGl0bGVTaXplWzBdID4+IDEpICsgJ3B4J1xuXHRcdHRoaXMuZnJvbnRIb2xkZXIuc3R5bGUudG9wID0gKHdpbmRvd0ggPj4gMSkgLSAodGl0bGVTaXplWzFdID4+IDEpICsgJ3B4J1xuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcblx0XHRIZWxwZXJzLnJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcih0aGlzLmNvbnRhaW5lcilcblxuXHRcdHNldFRpbWVvdXQoKCk9PnsgQXBwQWN0aW9ucy5yZW1vdmVQWENoaWxkKHRoaXMuY29udGFpbmVyKSB9LCAwKVxuXG5cdFx0QXBwU3RvcmUub2ZmKEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFLCB0aGlzLnJlc2l6ZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYXNlUGFnZXIgZnJvbSAnQmFzZVBhZ2VyJ1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ1JvdXRlcidcbmltcG9ydCBIb21lIGZyb20gJ0hvbWUnXG5pbXBvcnQgSW5zcGlyYXRpb25TcGFyayBmcm9tICdJbnNwaXJhdGlvblNwYXJrJ1xuaW1wb3J0IEFyY2hpdGVjdHVyZSBmcm9tICdBcmNoaXRlY3R1cmUnXG5pbXBvcnQgUXVpbnRhZXNzZW5jZSBmcm9tICdRdWludGFlc3NlbmNlJ1xuaW1wb3J0IENyZWF0aXZpdHlJbm5vdmF0aW9uIGZyb20gJ0NyZWF0aXZpdHlJbm5vdmF0aW9uJ1xuaW1wb3J0IFN0eWxlIGZyb20gJ1N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0NvbnRhaW5lciBleHRlbmRzIEJhc2VQYWdlciB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5kaWRIYXNoZXJDaGFuZ2UgPSB0aGlzLmRpZEhhc2hlckNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9uKEFwcENvbnN0YW50cy5QQUdFX0hBU0hFUl9DSEFOR0VELCB0aGlzLmRpZEhhc2hlckNoYW5nZSlcblx0XHRzdXBlci5jb21wb25lbnRXaWxsTW91bnQoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEFwcFN0b3JlLm9mZihBcHBDb25zdGFudHMuUEFHRV9IQVNIRVJfQ0hBTkdFRCwgdGhpcy5kaWRIYXNoZXJDaGFuZ2UpXG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHR9XG5cdGRpZEhhc2hlckNoYW5nZSgpIHtcblx0XHR2YXIgaGFzaCA9IFJvdXRlci5nZXROZXdIYXNoKClcblx0XHR2YXIgdHlwZSA9IHVuZGVmaW5lZFxuXG5cdFx0c3dpdGNoKGhhc2gucGFyZW50KSB7XG5cdFx0XHRjYXNlICdpbnNwaXJhdGlvbi1zcGFyayc6XG5cdFx0XHRcdHR5cGUgPSBJbnNwaXJhdGlvblNwYXJrXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdhcmNoaXRlY3R1cmUnOlxuXHRcdFx0XHR0eXBlID0gQXJjaGl0ZWN0dXJlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdxdWludGFlc3NlbmNlJzpcblx0XHRcdFx0dHlwZSA9IFF1aW50YWVzc2VuY2Vcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2NyZWF0aXZpdHktaW5ub3ZhdGlvbic6XG5cdFx0XHRcdHR5cGUgPSBDcmVhdGl2aXR5SW5ub3ZhdGlvblxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnc3R5bGUnOlxuXHRcdFx0XHR0eXBlID0gU3R5bGVcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHR5cGUgPSBIb21lXG5cdFx0fVxuXHRcdHRoaXMuc2V0dXBOZXdDb21wb25lbnQoaGFzaC5wYXJlbnQsIHR5cGUpXG5cdH1cbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IHNjcm9sbHRvcCBmcm9tICdzaW1wbGUtc2Nyb2xsdG9wJ1xuaW1wb3J0IHNpemUgZnJvbSAnZWxlbWVudC1zaXplJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjaGl0ZWN0dXJlIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnBhZ2VIZWlnaHQgPSAwXG5cdFx0dGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gMFxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHZhciBnZXRNZWRpYSA9IChzcmMpPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuXHRcdFx0XHRcdDx2aWRlbyBsb29wPSd0cnVlJyB3aWR0aD0nMTAwJSc+XG5cdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9J3ZpZGVvL21wNCcgc3JjPXtzcmN9Pjwvc291cmNlPlxuXHRcdFx0XHRcdDwvdmlkZW8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdHZhciBjb250ZW50ID0gQXBwU3RvcmUucGFnZUNvbnRlbnQoKVxuXHRcdHZhciB2aWRlb3MgPSBjb250ZW50LnZpZGVvcy5tYXAoKGl0ZW0sIGluZGV4KT0+e1xuXHRcdFx0dmFyIHNpZGUgPSBVdGlscy5Jc0V2ZW4oaW5kZXgpID8gJ2xlZnQnIDogJ3JpZ2h0J1xuXHRcdFx0dmFyIGNsYXNzZXMgPSAndmlkZW8taXRlbSBjbGVhci1mbG9hdCAnICsgc2lkZVxuXHRcdFx0dmFyIHNjcmVlbnNob3RQYXRoID0gJ2ltYWdlL3ZpZGVvLXNjcmVlbnMvJyArIGl0ZW0uaW1nbmFtZVxuXHRcdFx0dmFyIHZpZGVvUGF0aCA9ICd2aWRlby9hcmNoaXRlY3R1cmUvJyArIGl0ZW0uZmlsZW5hbWVcblx0XHRcdHZhciBzcmNfbXA0ID0gdmlkZW9QYXRoICsgJy5tcDQnXG5cdFx0XHR2YXIgbWVkaWEgPSAoaXRlbS5maWxlbmFtZS5sZW5ndGggPCAxKSA/ICcnIDogZ2V0TWVkaWEoc3JjX21wNClcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHR7bWVkaWF9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6aXRlbS5kZXNjcmlwdGlvbiB9IH0+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH0pXG5cblxuXHRcdHJldHVybiB0aGlzLmdldEJhc2VQYWdlRG9tKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2luc2lkZS13cmFwcGVyJz5cblx0XHRcdFx0PGRpdiByZWY9J3ZpZGVvcy1jb250YWluZXInIGNsYXNzTmFtZT1cInZpZGVvcy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7dmlkZW9zfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy52aWRlb3NDb250YWluZXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3ZpZGVvcy1jb250YWluZXInXSlcblxuXHQgICAgdmFyIHRvdGFsRnJhbWVzID0gMjY2XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvYmFnLXNlcXVlbmNlL3R1cm5fJywgJ2pwZycpXG5cdCAgICB2YXIgbWMgPSBQSVhJLmV4dHJhcy5Nb3ZpZUNsaXAuZnJvbUltYWdlcyhiYWdJbWFnZXMpXG4gICAgICAgIG1jLmFuY2hvci54ID0gMC41XG4gICAgICAgIG1jLmFuY2hvci55ID0gMC41XG5cdCAgICBtYy5nb3RvQW5kU3RvcCgwKVxuXHQgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWMpXG5cdCAgICBcblx0ICAgIHRoaXMuYmcgPSB7XG5cdCAgICBcdG1jOiBtYyxcblx0ICAgIFx0dG90YWxGcmFtZXM6IHRvdGFsRnJhbWVzXG5cdCAgICB9XG5cblx0ICAgIHRoaXMudmlkZW9JdGVtcyA9IFtdXG5cdCAgICB2YXIgaXRlbXMgPSBkb20odGhpcy5wYXJlbnQpLnNlbGVjdCgnLnZpZGVvLWl0ZW0nKVxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHQgICAgXHR2YXIgaXRlbSA9IGl0ZW1zW2ldXG5cdCAgICBcdHZhciB2aWRlbyA9IGRvbShpdGVtKS5zZWxlY3QoJ3ZpZGVvJylbMF1cblx0ICAgIFx0dGhpcy52aWRlb0l0ZW1zW2ldID0ge1xuICAgIFx0XHRcdGVsOiBpdGVtLFxuICAgIFx0XHRcdHZpZGVvOiB2aWRlbyxcbiAgICBcdFx0XHRtZWRpYUVsOiBkb20oaXRlbSkuc2VsZWN0KCcubWVkaWEnKVswXSxcbiAgICBcdFx0XHR0aXRsZUVsOiBkb20oaXRlbSkuc2VsZWN0KCcudGl0bGUnKVswXSxcbiAgICBcdFx0XHRkZXNjcmlwdGlvbkVsOiBkb20oaXRlbSkuc2VsZWN0KCcuZGVzY3JpcHRpb24nKVswXSxcbiAgICBcdFx0XHRpc1BsYXlpbmc6IGZhbHNlLFxuICAgIFx0XHRcdGluZGV4OiBpXG4gICAgXHRcdH1cblx0ICAgIH07XG5cbiAgXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRjaGVja1ZpZGVvc1ZpZXdwb3J0Rm9jdXMoKSB7XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBzY3JvbGx0ID0gc2Nyb2xsdG9wKClcblx0XHR2YXIgbWFyZ2luID0gd2luZG93SCAqIDAuMVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52aWRlb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMudmlkZW9JdGVtc1tpXVxuXHRcdFx0aWYoc2Nyb2xsdCArIHdpbmRvd0ggPiBpdGVtLnRvcCArICggbWFyZ2luICogMiApICYmIHNjcm9sbHQgPCBpdGVtLnRvcCArIGl0ZW0uc2l6ZVsxXSAtIG1hcmdpbikge1xuXHRcdFx0XHRpZihpdGVtLmlzUGxheWluZyAhPSB0cnVlKSB7XG5cdFx0XHRcdFx0aWYoaXRlbS52aWRlbyAhPSB1bmRlZmluZWQpIGl0ZW0udmlkZW8ucGxheSgpXG5cdFx0XHRcdFx0aXRlbS50bC5wbGF5KDApXG5cdFx0XHRcdFx0aXRlbS5pc1BsYXlpbmcgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRpZihpdGVtLmlzUGxheWluZyAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdGlmKGl0ZW0udmlkZW8gIT0gdW5kZWZpbmVkKSBpdGVtLnZpZGVvLnBhdXNlKClcblx0XHRcdFx0XHRpZihpdGVtLnZpZGVvICE9IHVuZGVmaW5lZCkgaXRlbS52aWRlby5jdXJyZW50VGltZSA9IDBcblx0XHRcdFx0XHRpdGVtLnRsLnJldmVyc2UoKVxuXHRcdFx0XHRcdGl0ZW0uaXNQbGF5aW5nID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0ICAgIFxuXHQgICAgLy8gZ2V0IHNjcm9sbHRvcCBwb3NpdGlvblxuXHQgICAgdGhpcy5jdXJyZW50U2Nyb2xsUG9zID0gc2Nyb2xsdG9wKClcblxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBjdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKCAoIHRoaXMuY3VycmVudFNjcm9sbFBvcyAvIHRoaXMucGFnZUhlaWdodCApICogdGhpcy5iZy50b3RhbEZyYW1lcyApXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSBjdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICBpZihjdXJyZW50RnJhbWUgPCAwKSBjdXJyZW50RnJhbWUgPSAwXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKGN1cnJlbnRGcmFtZSlcblxuXHQgICAgdGhpcy5jaGVja1ZpZGVvc1ZpZXdwb3J0Rm9jdXMoKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcGFyZW50U2l6ZSA9IHNpemUodGhpcy5wYXJlbnQpXG5cdFx0dmFyIHJlc2l6ZVZhbHMgPSBVdGlscy5SZXNpemVQb3NpdGlvblByb3BvcnRpb25hbGx5KHdpbmRvd1csIHdpbmRvd0gsIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfVywgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9IKVxuXG5cdFx0dGhpcy5iZy5tYy54ID0gd2luZG93VyA+PiAxXG5cdFx0dGhpcy5iZy5tYy55ID0gd2luZG93SCA+PiAxXG5cdFx0dGhpcy5iZy5tYy5zY2FsZS54ID0gdGhpcy5iZy5tYy5zY2FsZS55ID0gcmVzaXplVmFscy5zY2FsZVxuXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0dGhpcy5wYWdlSGVpZ2h0ID0gMFxuXHRcdFx0dmFyIHNjcm9sbHQgPSBzY3JvbGx0b3AoKVxuXHRcdFx0dmFyIG1hcmdpblRvcCA9IDI0MFxuXHRcdFx0dmFyIG1hcmdpbkJvdHRvbSA9IDI0MFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZpZGVvSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnZpZGVvSXRlbXNbaV1cblx0XHRcdFx0dmFyIGl0ZW1TaXplID0gc2l6ZShpdGVtLmVsKVxuXHRcdFx0XHR2YXIgaCA9IGl0ZW1TaXplWzFdICsgKG1hcmdpblRvcCArIG1hcmdpbkJvdHRvbSlcblx0XHRcdFx0aXRlbS5zaXplID0gaXRlbVNpemVcblx0XHRcdFx0aXRlbS50b3AgPSB0aGlzLnBhZ2VIZWlnaHQgKyBtYXJnaW5Ub3Bcblx0XHRcdFx0aXRlbS5lbC5zdHlsZS50b3AgPSAodGhpcy5wYWdlSGVpZ2h0ICsgbWFyZ2luVG9wKSArICdweCdcblx0XHRcdFx0aWYoZG9tKGl0ZW0uZWwpLmhhc0NsYXNzKCdyaWdodCcpKSBpdGVtLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnZpZGVvc0NvbnRhaW5lci5vZmZzZXRXaWR0aCAtIGl0ZW1TaXplWzBdICsgJ3B4J1xuXHRcdFx0XHRpdGVtLnkgPSAwXG5cdFx0XHRcdFxuXHRcdFx0XHRpdGVtLnBMaW5lcyA9IG5ldyBTcGxpdFRleHQoaXRlbS5kZXNjcmlwdGlvbkVsLCB7IHR5cGU6J2xpbmVzJyB9KS5saW5lc1xuXHRcdFx0XHRpdGVtLnRpdGxlQ2hhcnMgPSBVdGlscy5UcmFuZm9ybUFycmF5RnJvbU1pZGRsZUFuZE91dChuZXcgU3BsaXRUZXh0KGl0ZW0udGl0bGVFbCwgeyB0eWxlOidjaGFycycgfSkuY2hhcnMpXG5cblx0XHRcdFx0aXRlbS50bCA9IG5ldyBUaW1lbGluZUxpdGUoKVxuXHRcdFx0XHRpdGVtLnRsLnN0YWdnZXJGcm9tKGl0ZW0udGl0bGVDaGFycywgMSwgeyBvcGFjaXR5OjAsIHk6MjAsIHNjYWxlWTowLjgsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuMDUsIDAuMylcblx0XHRcdFx0aWYoaXRlbS52aWRlbyAhPSB1bmRlZmluZWQpIGl0ZW0udGwuZnJvbShpdGVtLnZpZGVvLCAxLCB7IG9wYWNpdHk6MCwgeToyMCwgc2NhbGVZOjIsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuNSlcblx0XHRcdFx0aXRlbS50bC5zdGFnZ2VyRnJvbShpdGVtLnBMaW5lcywgMSwgeyBvcGFjaXR5OjAsIHk6MjAsIHNjYWxlWTowLjgsIGZvcmNlM0Q6dHJ1ZSwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDAlJywgZWFzZTogRXhwby5lYXNlT3V0IH0sIDAuMDUsIDAuOClcblx0XHRcdFx0aXRlbS50bC5wYXVzZSgwKVxuXG5cdFx0XHRcdGl0ZW0uaXNQbGF5aW5nID0gZmFsc2VcblxuXHRcdFx0XHR0aGlzLnBhZ2VIZWlnaHQgKz0gaFxuXHRcdFx0fTtcblx0XHRcdHRoaXMucGFnZUhlaWdodCArPSAzMDBcblx0XHRcdHRoaXMudmlkZW9zQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMucGFnZUhlaWdodCArICdweCdcblx0XHRcdHRoaXMucGFnZUhlaWdodCAtPSB3aW5kb3dIXG5cblx0XHR9LCAwKVxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdFx0dGhpcy5iZy5tYy5kZXN0cm95KClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9JdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLnZpZGVvSXRlbXNbaV1cblx0XHRcdGl0ZW0udGwuY2xlYXIoKVxuXHRcdH07XG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5pbXBvcnQgVXRpbHMgZnJvbSAnVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0aXZpdHlJbm5vdmF0aW9uIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnRpbWUgPSAwXG5cdFx0dGhpcy5kZWJ1Z01vZGUgPSBmYWxzZVxuXHRcdHRoaXMuYm9kaWVzID0gW11cblxuXHRcdHRoaXMuTSA9IHtcblx0XHRcdEVuZ2luZTogTWF0dGVyLkVuZ2luZSxcblx0XHQgICAgV29ybGQ6IE1hdHRlci5Xb3JsZCxcblx0XHQgICAgQm9keTogTWF0dGVyLkJvZHksXG5cdFx0ICAgIEJvZGllczogTWF0dGVyLkJvZGllcyxcblx0XHQgICAgQ29tbW9uOiBNYXR0ZXIuQ29tbW9uLFxuXHRcdCAgICBDb21wb3NpdGVzOiBNYXR0ZXIuQ29tcG9zaXRlcyxcblx0XHQgICAgQ29tcG9zaXRlOiBNYXR0ZXIuQ29tcG9zaXRlLFxuXHRcdCAgICBFdmVudHM6IE1hdHRlci5FdmVudHMsXG5cdFx0ICAgIE1vdXNlOiBNYXR0ZXIuTW91c2UsXG5cdFx0ICAgIE1vdXNlQ29uc3RyYWludDogTWF0dGVyLk1vdXNlQ29uc3RyYWludFxuXHRcdH1cblxuXHRcdHRoaXMuZXhwbG9zaW9uID0gdGhpcy5leHBsb3Npb24uYmluZCh0aGlzKVxuXHRcdHRoaXMub25Db2xsaXNpb24gPSB0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHR2YXIgaHRtbCA9IChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShodG1sKVxuXG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHR0aGlzLnBhcmVudCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1sncGFnZS13cmFwcGVyJ10pXG5cblx0XHR2YXIgZWwgPSB0aGlzLmRlYnVnTW9kZSA/IHRoaXMucGFyZW50IDogdW5kZWZpbmVkXG5cdFx0dmFyIGVuZ2luZSA9IHRoaXMuZW5naW5lID0gdGhpcy5NLkVuZ2luZS5jcmVhdGUoZWwsIHtcblx0XHRcdHJlbmRlcjoge1xuXHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0c2hvd0FuZ2xlSW5kaWNhdG9yOiB0cnVlLFxuXHRcdFx0XHRcdHdpcmVmcmFtZXM6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZW5naW5lLndvcmxkLmdyYXZpdHkueCA9IDBcblx0XHRlbmdpbmUud29ybGQuZ3Jhdml0eS55ID0gMFxuXG5cdFx0dGhpcy5iZyA9IHtcblx0XHRcdGNvbG9yczogW1xuXHRcdFx0XHQweGZmZmZmZixcblx0XHRcdFx0MHhmNTc0NzQsXG5cdFx0XHRcdDB4NEE5MEUyXG5cdFx0XHRdLFxuXHRcdFx0c3ByaW5nQ29uZmlnOiB7XG5cdFx0XHRcdHNwcmluZzogMC44LFxuXHRcdFx0XHRmcmljdGlvbjogMC43LFxuXHRcdFx0XHRsZW5ndGg6IDAsXG5cdFx0XHRcdGFuZ2xlOiAwLFxuXHRcdFx0fSxcblx0XHRcdGNvbG9yR3JhcGhpYzogbmV3IFBJWEkuR3JhcGhpY3MoKSxcblx0XHRcdGJhZ3M6IFtdLFxuXHRcdFx0YmFnc0NvbnRhaW5lcjogbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR9XG5cdFx0dmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIGJhZ1VybHMgPSBjb250ZW50LmJhZ1VybHNcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJhZ1VybHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB1cmwgPSAnaW1hZ2UvY3JlYXRpdml0eS1iYWdzLycgKyBiYWdVcmxzW2ldICsgJy5wbmcnXG5cdFx0XHR2YXIgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlLmZyb21JbWFnZSh1cmwpXG5cdFx0XHRzcHJpdGUuYW5jaG9yLnggPSBzcHJpdGUuYW5jaG9yLnkgPSAwLjVcblx0XHRcdHNwcml0ZS5hbHBoYSA9IDBcblx0XHRcdHNwcml0ZS50b1Bvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMClcblx0XHRcdHNwcml0ZS52ZWxvY2l0eSA9IG5ldyBQSVhJLlBvaW50KDAsIDApXG5cdFx0XHR0aGlzLmJnLmJhZ3NDb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKVxuXHRcdFx0dGhpcy5iZy5iYWdzW2ldID0gc3ByaXRlXG5cdFx0fTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmcuY29sb3JHcmFwaGljKVxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuYmcuYmFnc0NvbnRhaW5lcilcblxuXHRcdHZhciBib2R5T3B0aW9ucyA9IHtcblx0XHQgICAgZnJpY3Rpb25BaXI6IDAsIFxuXHRcdCAgICBmcmljdGlvbjogMCxcblx0XHQgICAgcmVzdGl0dXRpb246IDAuNlxuXHRcdH1cblxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgcGF0dGVyblBhdGggPSAnaW1hZ2UvcGF0dGVybnMvJ1xuXHRcdHZhciBwYXR0ZXJuVXJscyA9IFtcblx0XHRcdCdicm93bi14LXBhdHRlcm4uanBnJyxcblx0XHRcdCdwYXR0ZXJuLmpwZycsXG5cdFx0XHQnYnJvd24teC1wYXR0ZXJuLmpwZycsXG5cdFx0XHQncGF0dGVybi5qcGcnLFxuXHRcdF1cblx0XHR2YXIgY2lyY2xlUmFkaXVzID0gNjBcblxuXHRcdC8vIEFkZCBjaXJjbGVzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHZhciBjID0gdGhpcy5NLkJvZGllcy5jaXJjbGUod2luZG93VyA+PiAxLCB3aW5kb3dIID4+IDEsIGNpcmNsZVJhZGl1cywgYm9keU9wdGlvbnMpXG5cdFx0XHR0aGlzLk0uV29ybGQuYWRkKGVuZ2luZS53b3JsZCwgYylcblxuXHRcdFx0dmFyIGNpcmNsZSA9IEhlbHBlcnMuZ2V0R3Jhdml0eUNpcmNsZShwYXR0ZXJuUGF0aCArIHBhdHRlcm5VcmxzW2ldLCBjaXJjbGVSYWRpdXMpXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGUuY29udGFpbmVyKVxuXG5cdFx0XHRjaXJjbGUuYm9keSA9IGNcblxuXHRcdFx0dGhpcy5ib2RpZXMucHVzaChjaXJjbGUpXG5cdFx0fVxuXG5cdFx0dmFyIHJlY3RXID0gMjAwXG5cdFx0dmFyIHJlY3RIID0gNjBcblxuXHRcdC8vIEFkZCByZWN0c1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2YXIgciA9IHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKHdpbmRvd1cgPj4gMSwgd2luZG93SCA+PiAxLCByZWN0VywgcmVjdEgsIGJvZHlPcHRpb25zKVxuXHRcdFx0dGhpcy5NLldvcmxkLmFkZChlbmdpbmUud29ybGQsIHIpXG5cblx0XHRcdHZhciByZWN0ID0gSGVscGVycy5nZXRHcmF2aXR5UmVjdChwYXR0ZXJuUGF0aCArIHBhdHRlcm5VcmxzW2ldLCByZWN0VywgcmVjdEgpXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChyZWN0LmNvbnRhaW5lcilcblxuXHRcdFx0cmVjdC5ib2R5ID0gclxuXG5cdFx0XHR0aGlzLmJvZGllcy5wdXNoKHJlY3QpXG5cdFx0fTtcblxuXHRcdC8vIEFkZCBXYWxsc1xuXHRcdHRoaXMuYWRkV2FsbHMoKVxuXG5cdFx0Ly8gcnVuIHRoZSBlbmdpbmVcblx0XHR0aGlzLk0uRW5naW5lLnJ1bihlbmdpbmUpXG5cblx0XHR0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLmV4cGxvc2lvbiwgNTAwMClcblxuXHRcdHRoaXMuZXhwbG9zaW9uKClcblxuICAgICAgICB0aGlzLk0uRXZlbnRzLm9uKGVuZ2luZSwgJ2NvbGxpc2lvblN0YXJ0JywgdGhpcy5vbkNvbGxpc2lvbilcblxuXHRcdHN1cGVyLmNvbXBvbmVudERpZE1vdW50KClcblx0fVxuXHRvbkNvbGxpc2lvbihldmVudCkge1xuXG5cdFx0aWYodGhpcy5jb2xsaXNpb25FbmFibGUgPT0gZmFsc2UpIHJldHVyblxuXHRcdHRoaXMuY29sbGlzaW9uRW5hYmxlID0gZmFsc2Vcblx0XHRzZXRUaW1lb3V0KCgpPT57IHRoaXMuY29sbGlzaW9uRW5hYmxlID0gdHJ1ZSB9LCAyMDApXG5cbiAgICAgICAgdmFyIHBhaXJzID0gZXZlbnQucGFpcnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBpZihwYWlyLmJvZHlBLmlzU3RhdGljIHx8IHBhaXIuYm9keUIuaXNTdGF0aWMpIHJldHVyblxuICAgICAgICBcdHRoaXMudXBkYXRlQmdDb2xvcigpXG4gICAgICAgIFx0dGhpcy51cGRhdGVCYWcoKVxuICAgICAgICB9XG5cdH1cblx0dXBkYXRlQmFnKCkge1xuXHRcdHZhciBiYWdzID0gdGhpcy5iZy5iYWdzXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYmFnID0gYmFnc1tpXVxuXHRcdFx0YmFnLmFscGhhID0gMFxuXHRcdFx0YmFnLnggPSAwXG5cdFx0XHRiYWcueSA9IDEwXG5cdFx0fTtcblx0XHR0aGlzLmJnLnNwcmluZ0NvbmZpZy5sZW5ndGggPSA2MFxuXHRcdHZhciByYW5kSW5kZXggPSBVdGlscy5SYW5kKDAsIGJhZ3MubGVuZ3RoIC0gMSwgMClcblx0XHRiYWdzW3JhbmRJbmRleF0uYWxwaGEgPSAxXG5cdH1cblx0dXBkYXRlQmdDb2xvcigpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciByYW5kSW5kZXggPSBVdGlscy5SYW5kKDAsIHRoaXMuYmcuY29sb3JzLmxlbmd0aCAtIDEsIDApXG5cdFx0dmFyIGNvbG9yID0gdGhpcy5iZy5jb2xvcnNbcmFuZEluZGV4XVxuXHRcdHZhciBnID0gdGhpcy5iZy5jb2xvckdyYXBoaWNcblx0XHRcblx0XHRnLmNsZWFyKClcblx0XHRnLmJlZ2luRmlsbChjb2xvciwgMSlcblx0XHRnLmRyYXdSZWN0KDAsIDAsIHdpbmRvd1csIHdpbmRvd0gpXG5cdFx0Zy5lbmRGaWxsKClcblx0fVxuXHRhZGRXYWxscygpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciBzaXplID0gNTBcblx0XHR2YXIgd2FsbFcgPSB3aW5kb3dXXG5cdFx0dmFyIHdhbGxIID0gd2luZG93SFxuXHRcdHRoaXMuTS5Xb3JsZC5hZGQodGhpcy5lbmdpbmUud29ybGQsIFtcblx0XHRcdHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKDAsIC1zaXplIC8gMiwgd2FsbFcgKiAyLCBzaXplLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdFx0dGhpcy5NLkJvZGllcy5yZWN0YW5nbGUoLXNpemUgLyAyLCAwLCBzaXplLCB3YWxsSCAqIDIsIHsgaXNTdGF0aWM6IHRydWUgfSksXG5cdFx0XHR0aGlzLk0uQm9kaWVzLnJlY3RhbmdsZSgwLCB3aW5kb3dIICsgc2l6ZSAvIDIsIHdhbGxXICogMiwgc2l6ZSwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcblx0XHRcdHRoaXMuTS5Cb2RpZXMucmVjdGFuZ2xlKHdpbmRvd1cgKyBzaXplIC8gMiwgMCwgc2l6ZSwgd2FsbEggKiAyLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuXHRcdF0pO1xuXHR9XG5cdGV4cGxvc2lvbigpIHtcblx0ICAgIHZhciBib2RpZXMgPSB0aGlzLk0uQ29tcG9zaXRlLmFsbEJvZGllcyh0aGlzLmVuZ2luZS53b3JsZCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cblx0ICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcblx0ICAgICAgICAgICAgdmFyIGZvcmNlTWFnbml0dWRlID0gMC4wMDEgKiBib2R5Lm1hc3M7XG5cblx0ICAgICAgICAgICAgLy8gYXBwbHkgZXh0cmEgZm9yY2Vcblx0ICAgICAgICAgICAgdGhpcy5NLkJvZHkuYXBwbHlGb3JjZShib2R5LCB7IHg6IDAsIHk6IDAgfSwgeyBcblx0ICAgICAgICAgICAgICAgIHg6IChmb3JjZU1hZ25pdHVkZSArIE1hdGgucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKiB0aGlzLk0uQ29tbW9uLmNob29zZShbMSwgLTFdKSwgXG5cdCAgICAgICAgICAgICAgICB5OiAtZm9yY2VNYWduaXR1ZGUgKyBNYXRoLnJhbmRvbSgpICogLWZvcmNlTWFnbml0dWRlXG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIC8vIGFkZCBib3VuZHMgdG8gdmVsb2NpdHlcblx0ICAgICAgICAgICAgdmFyIGJvdW5kID0gMC41XG5cdCAgICAgICAgICAgIGlmKE1hdHRlci5WZWN0b3IubWFnbml0dWRlKGJvZHkudmVsb2NpdHkpID4gYm91bmQpIHtcblx0XHRcdFx0XHR0aGlzLk0uQm9keS5zZXRWZWxvY2l0eShib2R5LCB7IHg6IE1hdGgubWluKGJvdW5kLCBib2R5LnZlbG9jaXR5LngpLCB5OiBNYXRoLm1pbihib3VuZCwgYm9keS52ZWxvY2l0eS54KSB9IClcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIGFkZCBib3VuZHMgdG8gcm90YXRpb25cblx0XHRcdFx0aWYoYm9keS5hbmd1bGFyU3BlZWQgPiAwLjAyKSB7XG5cdFx0ICAgICAgICAgICAgdGhpcy5NLkJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KGJvZHksIGJvZHkuYW5ndWxhclZlbG9jaXR5Ki0wLjEpO1xuXHRcdFx0XHR9XG5cblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblx0dXBkYXRlKCkge1xuXG5cdFx0dGhpcy50aW1lICs9IDAuMDA1XG5cdFx0dGhpcy5lbmdpbmUud29ybGQuZ3Jhdml0eS55ID0gTWF0aC5zaW4odGhpcy50aW1lKSAqIDAuMDJcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBib2R5ID0gdGhpcy5ib2RpZXNbaV1cblx0XHRcdGJvZHkuY29udGFpbmVyLnggPSBib2R5LmJvZHkucG9zaXRpb24ueFxuXHRcdFx0Ym9keS5jb250YWluZXIueSA9IGJvZHkuYm9keS5wb3NpdGlvbi55XG5cdFx0XHRib2R5LmNvbnRhaW5lci5yb3RhdGlvbiA9IGJvZHkuYm9keS5hbmdsZVxuXHRcdH07XG5cblxuXHRcdHZhciBjb25maWcgPSB0aGlzLmJnLnNwcmluZ0NvbmZpZ1xuXHRcdHZhciBhbmdsZSA9IGNvbmZpZy5hbmdsZVxuXHRcdHZhciBiYWdzID0gdGhpcy5iZy5iYWdzXG5cdFx0Y29uZmlnLmFuZ2xlICs9IDAuMVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYmFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJhZyA9IGJhZ3NbaV1cblx0XHRcdFV0aWxzLlNwcmluZ1RvKGJhZywgYmFnLnRvUG9zaXRpb24sIGksIGNvbmZpZylcblx0XHRcdGJhZy54ICs9IGJhZy52ZWxvY2l0eS54XG5cdFx0XHRiYWcueSArPSBiYWcudmVsb2NpdHkueVxuXHRcdH07XG5cblx0XHRjb25maWcubGVuZ3RoICs9ICgwLjAxIC0gY29uZmlnLmxlbmd0aCkgKiAwLjVcblxuXHRcdHN1cGVyLnVwZGF0ZSgpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR2YXIgd2luZG93SCA9IEFwcFN0b3JlLldpbmRvdy5oXG5cblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XICogMC44LCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0ggKiAwLjgpXG5cblx0XHR0aGlzLmJnLmJhZ3NDb250YWluZXIueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcuYmFnc0NvbnRhaW5lci55ID0gKCB3aW5kb3dIID4+IDEgKSAtICggd2luZG93SCAqIDAuMDIgKVxuXHRcdHRoaXMuYmcuYmFnc0NvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5iZy5iYWdzQ29udGFpbmVyLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRpZih0aGlzLmRlYnVnTW9kZSkge1xuXHRcdFx0dmFyIGNhbnZhcyA9IHRoaXMuZW5naW5lLnJlbmRlci5jYW52YXNcblx0XHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvd1cgKyAncHgnXG5cdFx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd2luZG93SCArICdweCdcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvd1dcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3dIXG5cdFx0fVxuXG5cdFx0c3VwZXIucmVzaXplKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdFx0dGhpcy5NLkV2ZW50cy5vZmYodGhpcy5lbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHRoaXMub25Db2xsaXNpb24pXG5cdFx0dGhpcy5NLkVuZ2luZS5jbGVhcih0aGlzLmVuZ2luZSlcblx0XHRIZWxwZXJzLnJlbW92ZUNoaWxkcmVuRnJvbUNvbnRhaW5lcih0aGlzLmJnLmJhZ3NDb250YWluZXIpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJnLmJhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBiYWcgPSB0aGlzLmJnLmJhZ3NbaV1cblx0XHRcdGJhZy5kZXN0cm95KClcblx0XHR9O1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuXHR9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJ1BhZ2UnXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5pbXBvcnQgZG9tIGZyb20gJ2RvbXF1ZXJ5J1xuaW1wb3J0IEFwcENvbnN0YW50cyBmcm9tICdBcHBDb25zdGFudHMnXG5pbXBvcnQgSGVscGVycyBmcm9tICdIZWxwZXJzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFxuXHRcdHRoaXMucHhWaWRlbyA9IEhlbHBlcnMuZ2V0UFhWaWRlbygndmlkZW8vVHJpcHR5Y2ggLSAyLm1wNCcsIDE5MjAsIDEwODApXG5cdFx0dGhpcy5weFZpZGVvLmFuY2hvci54ID0gdGhpcy5weFZpZGVvLmFuY2hvci55ID0gMC41XG5cdFx0dGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5weFZpZGVvKVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXG5cdFx0XHR2YXIgdmlkZW9WaWV3cG9ydCA9IFsgd2luZG93VyAqIDAuOCwgd2luZG93SCAqIDAuOCBdXG5cdFx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkodmlkZW9WaWV3cG9ydFswXSwgdmlkZW9WaWV3cG9ydFsxXSwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHRcdHRoaXMucHhWaWRlby54ID0gd2luZG93VyA+PiAxXG5cdFx0XHR0aGlzLnB4VmlkZW8ueSA9ICggd2luZG93SCA+PiAxICkgLSAoIHdpbmRvd0ggKiAwLjAxIClcblx0XHRcdHRoaXMucHhWaWRlby5zY2FsZS54ID0gdGhpcy5weFZpZGVvLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHR9LCAxMDAwKVxuXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5weFZpZGVvKVxuXHRcdFV0aWxzLkRlc3Ryb3lWaWRlb1RleHR1cmUodGhpcy5weFZpZGVvLnRleHR1cmUpXG5cdFx0dGhpcy5weFZpZGVvLnRleHR1cmUuZGVzdHJveSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kZXN0cm95KClcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpXG5cdH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnUGFnZSdcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcbmltcG9ydCBkb20gZnJvbSAnZG9tcXVlcnknXG5pbXBvcnQgQXBwQ29uc3RhbnRzIGZyb20gJ0FwcENvbnN0YW50cydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcbmltcG9ydCBIZWxwZXJzIGZyb20gJ0hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BpcmF0aW9uU3BhcmsgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLm1vdXNlTW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRCYXNlUGFnZURvbShcblx0XHRcdDxkaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMuY29sb3JHcmFwaGljID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuXHRcdHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29sb3JHcmFwaGljKVxuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMjBcblx0ICAgIHZhciBiYWdJbWFnZXMgPSBIZWxwZXJzLmdldEZyYW1lSW1hZ2VzQXJyYXkodG90YWxGcmFtZXMsICdpbWFnZS9zY3VscHR1cmVzL3R1cm5fJywgJ2pwZycpXG5cdCAgICB2YXIgbWMgPSBQSVhJLmV4dHJhcy5Nb3ZpZUNsaXAuZnJvbUltYWdlcyhiYWdJbWFnZXMpXG4gICAgICAgIG1jLmFuY2hvci54ID0gMC41XG4gICAgICAgIG1jLmFuY2hvci55ID0gMC41XG5cdCAgICBtYy5nb3RvQW5kU3RvcCgwKVxuXHQgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWMpXG5cdCAgICBcblx0ICAgIHRoaXMuYmcgPSB7XG5cdCAgICBcdG1jOiBtYyxcblx0ICAgIFx0dG90YWxGcmFtZXM6IHRvdGFsRnJhbWVzLFxuXHQgICAgXHRjdXJyZW50RnJhbWU6IDBcblx0ICAgIH1cblxuXHQgICAgZG9tKHdpbmRvdykub24oJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cblx0ICAgIC8vIHVwZGF0ZSBtYyBjdXJyZW50IGZyYW1lXG5cdCAgICB2YXIgY3VycmVudEZyYW1lID0gTWF0aC5mbG9vciggKCB0aGlzLm1vdXNlLnggLyB3aW5kb3dXICkgKiB0aGlzLmJnLnRvdGFsRnJhbWVzIClcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA+IHRoaXMuYmcudG90YWxGcmFtZXMpIGN1cnJlbnRGcmFtZSA9IHRoaXMuYmcudG90YWxGcmFtZXNcblx0ICAgIGlmKGN1cnJlbnRGcmFtZSA8IDApIGN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIHRoaXMuYmcubWMuZ290b0FuZFN0b3AoY3VycmVudEZyYW1lKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRtb3VzZU1vdmUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHRoaXMubW91c2UueCA9IGUuY2xpZW50WFxuXHRcdHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHZhciBnID0gdGhpcy5jb2xvckdyYXBoaWNcblx0XHRnLmNsZWFyKClcblx0XHRnLmJlZ2luRmlsbCgweDAwMDAwMCwgMSlcblx0XHRnLmRyYXdSZWN0KDAsIDAsIHdpbmRvd1csIHdpbmRvd0gpXG5cdFx0Zy5lbmRGaWxsKClcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHRcdGRvbSh3aW5kb3cpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpXG5cdFx0dGhpcy5iZy5tYy5kZXN0cm95KClcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcbmltcG9ydCBVdGlscyBmcm9tICdVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpbnRhZXNzZW5jZSBleHRlbmRzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5tb3VzZU1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpXG5cdFx0dGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcylcblx0XHR0aGlzLnN0YWdlTW91c2VPdXQgPSB0aGlzLnN0YWdlTW91c2VPdXQuYmluZCh0aGlzKVxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLmN1cnJlbnRTY3JvbGxQb3MgPSAwXG5cdFx0dGhpcy5kcmFnVmFycyA9IHtcblx0XHRcdHN0YXJ0UG9zOiAwLFxuXHRcdFx0Zm9yY2U6IDAuMSxcblx0XHRcdGRpcmVjdGlvbjogMSxcblx0XHRcdGFjdGl2ZTogZmFsc2Vcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5wYXJlbnQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BhZ2Utd3JhcHBlciddKVxuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMjY2XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvdGhyZWVzaXh0eS90dXJuXycsICdqcGcnKVxuXHQgICAgdmFyIG1jID0gUElYSS5leHRyYXMuTW92aWVDbGlwLmZyb21JbWFnZXMoYmFnSW1hZ2VzKVxuICAgICAgICBtYy5hbmNob3IueCA9IDAuNVxuICAgICAgICBtYy5hbmNob3IueSA9IDAuNVxuXHQgICAgbWMuZ290b0FuZFN0b3AoMClcblx0ICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1jKVxuXHQgICAgXG5cdCAgICB0aGlzLmJnID0ge1xuXHQgICAgXHRtYzogbWMsXG5cdCAgICBcdHRvdGFsRnJhbWVzOiB0b3RhbEZyYW1lcyxcblx0ICAgIFx0Y3VycmVudEZyYW1lOiAwXG5cdCAgICB9XG5cblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub24oJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKVxuXHQgICAgZG9tKHRoaXMucGFyZW50KS5vbignbW91c2V1cCcsIHRoaXMubW91c2VVcClcblx0ICAgIGRvbShkb2N1bWVudCkub24oJ21vdXNlb3V0JywgdGhpcy5zdGFnZU1vdXNlT3V0KVxuXG5cdFx0c3VwZXIuY29tcG9uZW50RGlkTW91bnQoKVxuXHR9XG5cdG1vdXNlRG93bihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0ZG9tKHdpbmRvdykub24oJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKVxuXHRcdHRoaXMuZHJhZ1ZhcnMuYWN0aXZlID0gdHJ1ZVxuXHRcdHRoaXMuZHJhZ1ZhcnMuc3RhcnRQb3MgPSBlLmNsaWVudFhcblx0fVxuXHRtb3VzZVVwKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR0aGlzLmRpc2FibGVEcmFnKClcblx0fVxuXHRzdGFnZU1vdXNlT3V0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRlID0gZSA/IGUgOiB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuICAgICAgICBpZiAoIWZyb20gfHwgZnJvbS5ub2RlTmFtZSA9PSBcIkhUTUxcIikge1xuXHRcdFx0dGhpcy5kaXNhYmxlRHJhZygpXG4gICAgICAgIH1cblx0fVxuXHRtb3VzZU1vdmUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciB3aW5kb3dXID0gQXBwU3RvcmUuV2luZG93Lndcblx0XHR0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcblx0XHR0aGlzLm1vdXNlLnkgPSBlLmNsaWVudFlcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZGlyZWN0aW9uID0gKCB0aGlzLm1vdXNlLnggPiB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zICkgPyAxIDogLTFcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm1vdXNlLnggLSB0aGlzLmRyYWdWYXJzLnN0YXJ0UG9zKSAvIHdpbmRvd1dcblxuXHRcdHRoaXMuZHJhZ1ZhcnMuZm9yY2UgKz0gKDggKiB0aGlzLmRyYWdWYXJzLmRpcmVjdGlvbikgKiBNYXRoLm1pbihkaXN0YW5jZSwgMTAwKVxuXHR9XG5cdGRpc2FibGVEcmFnKCkge1xuXHRcdGRvbSh3aW5kb3cpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpXG5cdFx0dGhpcy5kcmFnVmFycy5hY3RpdmUgPSBmYWxzZVxuXHR9XG5cdHVwZGF0ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cblx0XHR0aGlzLmRyYWdWYXJzLmZvcmNlICs9ICgwLjAwMDAwMSAtIHRoaXMuZHJhZ1ZhcnMuZm9yY2UpICogMC40XG5cdCAgICBcdFxuXHQgICAgLy8gdXBkYXRlIG1jIGN1cnJlbnQgZnJhbWVcblx0ICAgIHZhciBuZXdGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5iZy5jdXJyZW50RnJhbWUgKyB0aGlzLmRyYWdWYXJzLmZvcmNlKVxuXHQgICAgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSBuZXdGcmFtZVxuXHQgICAgaWYodGhpcy5iZy5jdXJyZW50RnJhbWUgPiB0aGlzLmJnLnRvdGFsRnJhbWVzKSB0aGlzLmJnLmN1cnJlbnRGcmFtZSA9IDBcblx0ICAgIGlmKHRoaXMuYmcuY3VycmVudEZyYW1lIDwgMCkgdGhpcy5iZy5jdXJyZW50RnJhbWUgPSB0aGlzLmJnLnRvdGFsRnJhbWVzXG5cdCAgICB0aGlzLmJnLm1jLmdvdG9BbmRTdG9wKHRoaXMuYmcuY3VycmVudEZyYW1lKVxuXG5cdFx0c3VwZXIudXBkYXRlKClcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIHdpbmRvd1cgPSBBcHBTdG9yZS5XaW5kb3cud1xuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHR2YXIgcmVzaXplVmFscyA9IFV0aWxzLlJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgQXBwQ29uc3RhbnRzLk1FRElBX0dMT0JBTF9XLCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX0gpXG5cblx0XHR0aGlzLmJnLm1jLnggPSB3aW5kb3dXID4+IDFcblx0XHR0aGlzLmJnLm1jLnkgPSB3aW5kb3dIID4+IDFcblx0XHR0aGlzLmJnLm1jLnNjYWxlLnggPSB0aGlzLmJnLm1jLnNjYWxlLnkgPSByZXNpemVWYWxzLnNjYWxlXG5cblx0XHRzdXBlci5yZXNpemUoKVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KClcblx0XHR0aGlzLmJnLm1jLmRlc3Ryb3koKVxuXHRcdGRvbSh0aGlzLnBhcmVudCkub2ZmKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bilcblx0ICAgIGRvbSh0aGlzLnBhcmVudCkub2ZmKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKVxuXHQgICAgZG9tKGRvY3VtZW50KS5vZmYoJ21vdXNlb3V0JywgdGhpcy5zdGFnZU1vdXNlT3V0KVxuXHQgICAgZG9tKHdpbmRvdykub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSlcblx0fVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnZSBmcm9tICdQYWdlJ1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJ0FwcFN0b3JlJ1xuaW1wb3J0IGRvbSBmcm9tICdkb21xdWVyeSdcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IFV0aWxzIGZyb20gJ1V0aWxzJ1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnSGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUgZXh0ZW5kcyBQYWdlIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcblx0XHR0aGlzLnJlbW92ZVNwcml0ZSA9IHRoaXMucmVtb3ZlU3ByaXRlLmJpbmQodGhpcylcblxuXHRcdHRoaXMudGV4dHVyZXMgPSBbXVxuXHRcdHRoaXMubW91c2UgPSB7IHg6MCwgeTowIH1cblx0XHR0aGlzLmFjdGl2ZVNwcml0ZXMgPSBbXVxuXHRcdHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUgPSB0cnVlXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0dmFyIGh0bWwgPSAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KSBcdFxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QmFzZVBhZ2VEb20oaHRtbClcblxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dmFyIHRvdGFsRnJhbWVzID0gMjY2XG5cdCAgICB2YXIgYmFnSW1hZ2VzID0gSGVscGVycy5nZXRGcmFtZUltYWdlc0FycmF5KHRvdGFsRnJhbWVzLCAnaW1hZ2UvYmFnLXR1cm4tbGlnaHQvdHVybl8nLCAnanBnJylcblx0ICAgIHZhciBtYyA9IFBJWEkuZXh0cmFzLk1vdmllQ2xpcC5mcm9tSW1hZ2VzKGJhZ0ltYWdlcylcbiAgICAgICAgbWMuYW5jaG9yLnggPSAwLjVcbiAgICAgICAgbWMuYW5jaG9yLnkgPSAwLjVcblx0ICAgIG1jLmdvdG9BbmRTdG9wKDApXG5cdCAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtYylcblx0ICAgIFxuXHQgICAgdGhpcy5iZyA9IHtcblx0ICAgIFx0bWM6IG1jLFxuXHQgICAgXHR0b3RhbEZyYW1lczogdG90YWxGcmFtZXMsXG5cdCAgICBcdGN1cnJlbnRGcmFtZTogMFxuXHQgICAgfVxuXHQgICAgdGhpcy5iZy5tYy5wbGF5KClcblxuXHRcdHRoaXMuaW1hZ2VzQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmltYWdlc0NvbnRhaW5lcilcblxuXHRcdHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucmVtb3ZlU3ByaXRlLCA3NSlcblx0XHRkb20od2luZG93KS5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXHRcdHRoaXMuY291bnRlciA9IDBcblxuXHRcdHRoaXMubG9hZEltYWdlcygpXG5cblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpXG5cdH1cblx0bG9hZEltYWdlcygpIHtcblx0XHR2YXIgcGFnZUNvbnRlbnQgPSBBcHBTdG9yZS5wYWdlQ29udGVudCgpXG5cdFx0dmFyIGltYWdlU3JjcyA9IHBhZ2VDb250ZW50LmltYWdlc1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VTcmNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZmlsZW5hbWUgPSBpbWFnZVNyY3NbaV1cblx0XHRcdHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnaW1hZ2Uvc3R5bGUtaW1hZ2VzLycgKyBmaWxlbmFtZSk7XG5cdFx0XHR0aGlzLnRleHR1cmVzLnB1c2godGV4dHVyZSlcblx0XHR9O1xuXHR9XG5cdGFkZFNwcml0ZSgpIHtcblx0XHR2YXIgcmFuZG9tTnVtID0gVXRpbHMuUmFuZCgwLCB0aGlzLnRleHR1cmVzLmxlbmd0aC0xLCAwKVxuXHRcdHZhciB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlc1tyYW5kb21OdW1dXG5cdFx0aWYodGV4dHVyZSA9PSB1bmRlZmluZWQpIHJldHVyblxuXHRcdHZhciBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSlcblx0XHR2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblx0XHR2YXIgc2hhcGUgPSBuZXcgUElYSS5HcmFwaGljcygpXG5cdFx0dmFyIHNpemUgPSAyNVxuXHRcdHNoYXBlLmxpbmVTdHlsZSgxLCAweDAwMDBmZiwgMSlcblx0XHRzaGFwZS5kcmF3UmVjdCgtc2l6ZS8yLCAtc2l6ZS8yLCBzaXplLCBzaXplKVxuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpXG5cdFx0Y29udGFpbmVyLmFkZENoaWxkKHNoYXBlKVxuXHRcdHNwcml0ZS5hbmNob3IueCA9IDAuNVxuXHRcdHNwcml0ZS5hbmNob3IueSA9IDAuNVxuXHRcdHNwcml0ZS5zY2FsZS54ID0gc3ByaXRlLnNjYWxlLnkgPSAwLjdcblx0XHRzcHJpdGUuYmxlbmRNb2RlID0gUElYSS5CTEVORF9NT0RFUy5NVUxUSVBMWVxuXHRcdC8vIHNwcml0ZS5ibGVuZE1vZGUgPSBQSVhJLkJMRU5EX01PREVTLkRJRkZFUkVOQ0Vcblx0XHRjb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMubW91c2UueFxuXHRcdGNvbnRhaW5lci5wb3NpdGlvbi55ID0gdGhpcy5tb3VzZS55XG5cdFx0dGhpcy5hY3RpdmVTcHJpdGVzLnB1c2goe1xuXHRcdFx0c3ByaXRlOiBzcHJpdGUsXG5cdFx0XHRjb250YWluZXI6IGNvbnRhaW5lclxuXHRcdH0pXG5cdFx0dGhpcy5pbWFnZXNDb250YWluZXIuYWRkQ2hpbGQoY29udGFpbmVyKVxuXHR9XG5cdHJlbW92ZVNwcml0ZSgpIHtcblx0XHRpZih0aGlzLmFjdGl2ZVNwcml0ZXMubGVuZ3RoIDw9IDEpIHJldHVyblxuXHRcdHZhciBzcHJpdGVUb1JlbW92ZSA9IHRoaXMuYWN0aXZlU3ByaXRlcy5zaGlmdCgpXG5cdFx0dGhpcy5pbWFnZXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc3ByaXRlVG9SZW1vdmUuY29udGFpbmVyKVxuXHRcdHNwcml0ZVRvUmVtb3ZlLmNvbnRhaW5lci5kZXN0cm95KClcblx0XHRzcHJpdGVUb1JlbW92ZS5zcHJpdGUuZGVzdHJveSgpXG5cdH1cblx0b25Nb3VzZU1vdmUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciB3aW5kb3dIID0gQXBwU3RvcmUuV2luZG93Lmhcblx0XHRpZihlLmNsaWVudFkgPiB3aW5kb3dIICogMC44KSByZXR1cm4gXG5cdFx0dGhpcy5tb3VzZS54ID0gZS5jbGllbnRYXG5cdFx0dGhpcy5tb3VzZS55ID0gZS5jbGllbnRZXG5cdFx0aWYodGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSkge1xuXHRcdFx0dGhpcy5hZGRTcHJpdGVJc0FjdGl2ZSA9IGZhbHNlXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdHRoaXMuYWRkU3ByaXRlSXNBY3RpdmUgPSB0cnVlXG5cdFx0XHRcdHRoaXMuYWRkU3ByaXRlKClcblx0XHRcdH0sIDYwKVxuXHRcdH1cblx0fVxuXHR1cGRhdGUoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZVNwcml0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhY3RpdmUgPSB0aGlzLmFjdGl2ZVNwcml0ZXNbaV1cblx0XHRcdHZhciBjb250YWluZXIgPSBhY3RpdmUuY29udGFpbmVyXG5cdFx0XHRjb250YWluZXIucG9zaXRpb24ueSAtPSAxXG5cdFx0fTtcblx0XHRzdXBlci51cGRhdGUoKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgd2luZG93VyA9IEFwcFN0b3JlLldpbmRvdy53XG5cdFx0dmFyIHdpbmRvd0ggPSBBcHBTdG9yZS5XaW5kb3cuaFxuXHRcdHZhciByZXNpemVWYWxzID0gVXRpbHMuUmVzaXplUG9zaXRpb25Qcm9wb3J0aW9uYWxseSh3aW5kb3dXLCB3aW5kb3dILCBBcHBDb25zdGFudHMuTUVESUFfR0xPQkFMX1csIEFwcENvbnN0YW50cy5NRURJQV9HTE9CQUxfSClcblxuXHRcdHRoaXMuYmcubWMueCA9IHdpbmRvd1cgPj4gMVxuXHRcdHRoaXMuYmcubWMueSA9IHdpbmRvd0ggPj4gMVxuXHRcdHRoaXMuYmcubWMuc2NhbGUueCA9IHRoaXMuYmcubWMuc2NhbGUueSA9IHJlc2l6ZVZhbHMuc2NhbGVcblxuXHRcdHN1cGVyLnJlc2l6ZSgpXG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0c3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKVxuXHRcdEhlbHBlcnMucmVtb3ZlQ2hpbGRyZW5Gcm9tQ29udGFpbmVyKHRoaXMuaW1hZ2VzQ29udGFpbmVyKVxuXHRcdHRoaXMuYmcubWMuZGVzdHJveSgpXG5cdFx0ZG9tKHdpbmRvdykub2ZmKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG5cdH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRXSU5ET1dfUkVTSVpFOiAnV0lORE9XX1JFU0laRScsXG5cdENIQU5HRV9BTUJJRU5UOiAnQ0hBTkdFX0FNQklFTlQnLFxuXHRJTlRST19GSU5JU0hFRDogJ0lOVFJPX0ZJTklTSEVEJyxcblxuXHRMQU5EU0NBUEU6ICdMQU5EU0NBUEUnLFxuXHRQT1JUUkFJVDogJ1BPUlRSQUlUJyxcblxuXHRNRURJQV9HTE9CQUxfVzogMTkyMCxcblx0TUVESUFfR0xPQkFMX0g6IDEwODAsXG5cdFxuXHRBRERfUFhfQ0hJTEQ6ICdBRERfUFhfQ0hJTEQnLFxuXHRSRU1PVkVfUFhfQ0hJTEQ6ICdSRU1PVkVfUFhfQ0hJTEQnLFxuXHRcblx0T1ZFUkFMTF9NQVJHSU46IDQwLFxuXG5cdE1JTl9NSURETEVfVzogOTYwLFxuXHRNUV9YU01BTEw6IDMyMCxcblx0TVFfU01BTEw6IDQ4MCxcblx0TVFfTUVESVVNOiA3NjgsXG5cdE1RX0xBUkdFOiAxMDI0LFxuXHRNUV9YTEFSR0U6IDEyODAsXG5cdE1RX1hYTEFSR0U6IDE2ODAsXG59IiwiaW1wb3J0IEZsdXggZnJvbSAnZmx1eCdcbmltcG9ydCByZWFjdE1peGluIGZyb20gJ3JlYWN0LW1peGluJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG52YXIgQXBwRGlzcGF0Y2hlciA9IGFzc2lnbihuZXcgRmx1eC5EaXNwYXRjaGVyKCksIHtcblx0aGFuZGxlVmlld0FjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaCh7XG5cdFx0XHRzb3VyY2U6ICdWSUVXX0FDVElPTicsXG5cdFx0XHRhY3Rpb246IGFjdGlvblxuXHRcdH0pO1xuXHR9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwRGlzcGF0Y2hlciIsInZhciBIZWxwZXJzID0ge1xuXG4gICAgZ2V0UFhWaWRlbzogZnVuY3Rpb24odXJsLCB3aWR0aCwgaGVpZ2h0LCB2YXJzKSB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21WaWRlbyh1cmwpXG4gICAgICAgIHRleHR1cmUuYmFzZVRleHR1cmUuc291cmNlLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgdHJ1ZSlcbiAgICAgICAgdmFyIHZpZGVvU3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpXG4gICAgICAgIHZpZGVvU3ByaXRlLndpZHRoID0gd2lkdGhcbiAgICAgICAgdmlkZW9TcHJpdGUuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHJldHVybiB2aWRlb1Nwcml0ZVxuICAgIH0sXG5cbiAgICByZW1vdmVDaGlsZHJlbkZyb21Db250YWluZXI6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0RnJhbWVJbWFnZXNBcnJheTogZnVuY3Rpb24oZnJhbWVzLCBiYXNldXJsLCBleHQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW11cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gZnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBiYXNldXJsICsgaSArICcuJyArIGV4dFxuICAgICAgICAgICAgYXJyYXlbaV0gPSB1cmxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgfSwgXG5cbiAgICBnZXRHcmF2aXR5Q2lyY2xlOiBmdW5jdGlvbih1cmwsIHJhZGl1cykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICAgICAgXG4gICAgICAgIHZhciBnID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICAgICBnLmJlZ2luRmlsbCgweGZmZmZmZiwgMC4xKVxuICAgICAgICBnLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSlcbiAgICAgICAgZy5kcmF3Q2lyY2xlKDAsIDAsIHJhZGl1cylcbiAgICAgICAgZy5lbmRGaWxsKClcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoZylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICBnOiBnXG4gICAgICAgIH1cbiAgICB9LCBcblxuICAgIGdldEdyYXZpdHlSZWN0OiBmdW5jdGlvbih1cmwsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICAgICAgXG4gICAgICAgIHZhciBnID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgICAgICBnLmJlZ2luRmlsbCgweGZmZmZmZiwgMC4xKVxuICAgICAgICBnLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSlcbiAgICAgICAgZy5kcmF3UmVjdCgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgZy5lbmRGaWxsKClcblxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoZylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICBnOiBnXG4gICAgICAgIH0gXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnMiLCJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cbk5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yKHZhciBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZih0aGlzW2ldICYmIHRoaXNbaV0ucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpc1tpXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnQXBwQWN0aW9ucydcbiAgICBcdFxuY2xhc3MgR2xvYmFsRXZlbnRzIHtcblx0aW5pdCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpXG5cdH1cblx0cmVzaXplKCkge1xuXHRcdEFwcEFjdGlvbnMud2luZG93UmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsRXZlbnRzXG4iLCJpbXBvcnQgQXBwU3RvcmUgZnJvbSAnQXBwU3RvcmUnXG5cbmNsYXNzIFByZWxvYWRlciAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpXG5cdFx0dGhpcy5xdWV1ZS5vbihcImNvbXBsZXRlXCIsIHRoaXMub25NYW5pZmVzdExvYWRDb21wbGV0ZWQsIHRoaXMpXG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2sgPSB1bmRlZmluZWRcblx0XHR0aGlzLmFsbE1hbmlmZXN0cyA9IFtdXG5cdH1cblx0bG9hZChtYW5pZmVzdCwgb25Mb2FkZWQpIHtcblxuXHRcdGlmKHRoaXMuYWxsTWFuaWZlc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxNYW5pZmVzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIG0gPSB0aGlzLmFsbE1hbmlmZXN0c1tpXVxuXHRcdFx0XHRpZihtLmxlbmd0aCA9PSBtYW5pZmVzdC5sZW5ndGggJiYgbVswXS5pZCA9PSBtYW5pZmVzdFswXS5pZCAmJiBtW20ubGVuZ3RoLTFdLmlkID09IG1hbmlmZXN0W21hbmlmZXN0Lmxlbmd0aC0xXS5pZCkge1xuXHRcdFx0XHRcdG9uTG9hZGVkKClcdFxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLmFsbE1hbmlmZXN0cy5wdXNoKG1hbmlmZXN0KVxuXHRcdHRoaXMuY3VycmVudExvYWRlZENhbGxiYWNrID0gb25Mb2FkZWRcbiAgICAgICAgdGhpcy5xdWV1ZS5sb2FkTWFuaWZlc3QobWFuaWZlc3QpXG5cdH1cblx0b25NYW5pZmVzdExvYWRDb21wbGV0ZWQoKSB7XG5cdFx0dGhpcy5jdXJyZW50TG9hZGVkQ2FsbGJhY2soKVxuXHR9XG5cdGdldENvbnRlbnRCeUlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUuZ2V0UmVzdWx0KGlkKVxuXHR9XG5cdGdldEltYWdlVVJMKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q29udGVudEJ5SWQoaWQpLmdldEF0dHJpYnV0ZShcInNyY1wiKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlclxuIiwiaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICdBcHBBY3Rpb25zJ1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2FkcydcbmltcG9ydCBBcHBTdG9yZSBmcm9tICdBcHBTdG9yZSdcblxuY2xhc3MgUm91dGVyIHtcblx0aW5pdCgpIHtcblx0XHR0aGlzLnJvdXRpbmcgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRoYXNoZXIubmV3SGFzaCA9IHVuZGVmaW5lZFxuXHRcdGhhc2hlci5vbGRIYXNoID0gdW5kZWZpbmVkXG5cdFx0aGFzaGVyLmluaXRpYWxpemVkLmFkZCh0aGlzLl9kaWRIYXNoZXJDaGFuZ2UuYmluZCh0aGlzKSlcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5fZGlkSGFzaGVyQ2hhbmdlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5fc2V0dXBDcm9zc3JvYWRzKClcblx0fVxuXHRiZWdpblJvdXRpbmcoKSB7XG5cdFx0aGFzaGVyLmluaXQoKVxuXHR9XG5cdF9zZXR1cENyb3Nzcm9hZHMoKSB7XG5cdFx0dmFyIGJhc2ljU2VjdGlvbiA9IGNyb3Nzcm9hZHMuYWRkUm91dGUoJ3twYWdlfScsIHRoaXMuX29uRmlyc3REZWdyZWVVUkxIYW5kbGVyLmJpbmQodGhpcyksIDMpXG5cdFx0YmFzaWNTZWN0aW9uLnJ1bGVzID0ge1xuXHQgICAgICAgIHBhZ2UgOiBbJyAnLCAnd29yay1vZi1hcnQnLCAnd29ya3MnLCAnY29udGFjdCddIC8vdmFsaWQgc2VjdGlvbnNcblx0ICAgIH1cblx0fVxuXHRfb25GaXJzdERlZ3JlZVVSTEhhbmRsZXIocGFnZUlkKSB7XG5cdFx0dGhpcy5fYXNzaWduUm91dGUocGFnZUlkKVxuXHR9XG5cdF9vbkRlZmF1bHRVUkxIYW5kbGVyKCkge1xuXHRcdC8vIHRoaXMuX3NlbmRUb0RlZmF1bHQoKVxuXHRcdHRoaXMuX2Fzc2lnblJvdXRlKCcnKVxuXHR9XG5cdF9hc3NpZ25Sb3V0ZShpZCkge1xuXHRcdHZhciBoYXNoID0gaGFzaGVyLmdldEhhc2goKVxuXHRcdHZhciBwYXJ0cyA9IHRoaXMuX2dldFVSTFBhcnRzKGhhc2gpXG5cdFx0dGhpcy5fdXBkYXRlUGFnZVJvdXRlKGhhc2gsIHBhcnRzLCBwYXJ0c1swXSwgaWQpXG5cdFx0dGhpcy5uZXdIYXNoRm91bmRlZCA9IHRydWVcblx0fVxuXHRfZ2V0VVJMUGFydHModXJsKSB7XG5cdFx0dmFyIGhhc2ggPSB1cmxcblx0XHRyZXR1cm4gaGFzaC5zcGxpdCgnLycpXG5cdH1cblx0X3VwZGF0ZVBhZ2VSb3V0ZShoYXNoLCBwYXJ0cywgcGFyZW50LCB0YXJnZXRJZCkge1xuXHRcdGhhc2hlci5vbGRIYXNoID0gaGFzaGVyLm5ld0hhc2hcblx0XHRoYXNoZXIubmV3SGFzaCA9IHtcblx0XHRcdGhhc2g6IGhhc2gsXG5cdFx0XHRwYXJ0czogcGFydHMsXG5cdFx0XHRwYXJlbnQ6IHBhcmVudCxcblx0XHRcdHRhcmdldElkOiB0YXJnZXRJZFxuXHRcdH1cblx0XHRBcHBBY3Rpb25zLnBhZ2VIYXNoZXJDaGFuZ2VkKClcblx0fVxuXHRfZGlkSGFzaGVyQ2hhbmdlKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHR0aGlzLm5ld0hhc2hGb3VuZGVkID0gZmFsc2Vcblx0XHRjcm9zc3JvYWRzLnBhcnNlKG5ld0hhc2gpXG5cdFx0aWYodGhpcy5uZXdIYXNoRm91bmRlZCkgcmV0dXJuXG5cdFx0Ly8gSWYgVVJMIGRvbid0IG1hdGNoIGEgcGF0dGVybiwgc2VuZCB0byBkZWZhdWx0XG5cdFx0dGhpcy5fb25EZWZhdWx0VVJMSGFuZGxlcigpXG5cdH1cblx0X3NlbmRUb0RlZmF1bHQoKSB7XG5cdFx0aGFzaGVyLnNldEhhc2goQXBwU3RvcmUuZGVmYXVsdFJvdXRlKCkpXG5cdH1cblx0c3RhdGljIGdldEJhc2VVUkwoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LlVSTC5zcGxpdChcIiNcIilbMF1cblx0fVxuXHRzdGF0aWMgZ2V0SGFzaCgpIHtcblx0XHRyZXR1cm4gaGFzaGVyLmdldEhhc2goKVxuXHR9XG5cdHN0YXRpYyBnZXRSb3V0ZXMoKSB7XG5cdFx0cmV0dXJuIEFwcFN0b3JlLkRhdGEucm91dGluZ1xuXHR9XG5cdHN0YXRpYyBnZXROZXdIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIubmV3SGFzaFxuXHR9XG5cdHN0YXRpYyBnZXRPbGRIYXNoKCkge1xuXHRcdHJldHVybiBoYXNoZXIub2xkSGFzaFxuXHR9XG5cdHN0YXRpYyBzZXRIYXNoKGhhc2gpIHtcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlclxuIiwiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnQXBwRGlzcGF0Y2hlcidcbmltcG9ydCBBcHBDb25zdGFudHMgZnJvbSAnQXBwQ29uc3RhbnRzJ1xuaW1wb3J0IHtFdmVudEVtaXR0ZXIyfSBmcm9tICdldmVudGVtaXR0ZXIyJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdSb3V0ZXInXG5cbmZ1bmN0aW9uIF9wYWdlUm91dGVJZENoYW5nZWQoaWQpIHtcbn1cbmZ1bmN0aW9uIF9nZXRQYWdlQ29udGVudCgpIHtcbiAgICB2YXIgaGFzaE9iaiA9IFJvdXRlci5nZXROZXdIYXNoKClcbiAgICB2YXIgaGFzaCA9IGhhc2hPYmouaGFzaC5sZW5ndGggPCAxID8gJy8nIDogaGFzaE9iai5oYXNoXG4gICAgdmFyIGNvbnRlbnQgPSBBcHBTdG9yZS5EYXRhLnJvdXRpbmdbaGFzaF1cbiAgICByZXR1cm4gY29udGVudFxufVxuZnVuY3Rpb24gX2dldE1lbnVDb250ZW50KCkge1xuICAgIHJldHVybiBBcHBTdG9yZS5EYXRhLm1lbnVcbn1cbmZ1bmN0aW9uIF9nZXRNZW51SXRlbUJ5SWQoaWQpIHtcblxuICAgIHZhciBtZW51SXRlbXMgPSBBcHBTdG9yZS5EYXRhLm1lbnVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtZW51SXRlbXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5mdW5jdGlvbiBfZ2V0Q3VycmVudFBhZ2VNZW51SXRlbSgpIHtcblxuICAgIHZhciBoYXNoT2JqID0gUm91dGVyLmdldE5ld0hhc2goKVxuICAgIHZhciBpZCA9IGhhc2hPYmouaGFzaCA9PSAnJyA/ICdob21lJyA6IGhhc2hPYmouaGFzaFxuXG4gICAgdmFyIG1lbnVJdGVtcyA9IEFwcFN0b3JlLkRhdGEubWVudVxuICAgIHZhciBpdGVtO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbnVJdGVtc1tpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgaXRlbSA9IG1lbnVJdGVtc1tpXVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKGl0ZW0gPT0gdW5kZWZpbmVkKSA/IHsgaWQ6ICdob21lJyB9IDogaXRlbVxufVxuZnVuY3Rpb24gX2dldEFwcERhdGEoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFcbn1cbmZ1bmN0aW9uIF9nZXREZWZhdWx0Um91dGUoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGFbJ2RlZmF1bHQtcm91dGUnXVxufVxuZnVuY3Rpb24gX2dldEdsb2JhbENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEFwcFN0b3JlLkRhdGEuY29udGVudFxufVxuZnVuY3Rpb24gX3dpbmRvd1dpZHRoSGVpZ2h0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHc6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG59XG5cbnZhciBBcHBTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbih0eXBlLCBpdGVtKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0eXBlLCBpdGVtKVxuICAgIH0sXG4gICAgcGFnZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldFBhZ2VDb250ZW50KClcbiAgICB9LFxuICAgIG1lbnVDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51Q29udGVudCgpXG4gICAgfSxcbiAgICBnZXRDdXJyZW50UGFnZU1lbnVJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRDdXJyZW50UGFnZU1lbnVJdGVtKClcbiAgICB9LFxuICAgIGdldE1lbnVJdGVtQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZW51SXRlbUJ5SWQoaWQpXG4gICAgfSxcbiAgICBhcHBEYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRBcHBEYXRhKClcbiAgICB9LFxuICAgIGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZ2V0RGVmYXVsdFJvdXRlKClcbiAgICB9LFxuICAgIGdsb2JhbENvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2dldEdsb2JhbENvbnRlbnQoKVxuICAgIH0sXG4gICAgV2luZG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aW5kb3dXaWR0aEhlaWdodCgpXG4gICAgfSxcbiAgICBPcmllbnRhdGlvbjogQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSxcbiAgICBQYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICBkaXNwYXRjaGVySW5kZXg6IEFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvblxuICAgICAgICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwQ29uc3RhbnRzLlBBR0VfSEFTSEVSX0NIQU5HRUQ6XG4gICAgICAgICAgICAgICAgX3BhZ2VSb3V0ZUlkQ2hhbmdlZChhY3Rpb24uaXRlbSlcbiAgICAgICAgICAgICAgICBBcHBTdG9yZS5lbWl0Q2hhbmdlKGFjdGlvbi5hY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEFwcENvbnN0YW50cy5XSU5ET1dfUkVTSVpFOlxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy53ID0gYWN0aW9uLml0ZW0ud2luZG93V1xuICAgICAgICAgICAgICAgIEFwcFN0b3JlLldpbmRvdy5oID0gYWN0aW9uLml0ZW0ud2luZG93SFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLk9yaWVudGF0aW9uID0gKEFwcFN0b3JlLldpbmRvdy53ID4gQXBwU3RvcmUuV2luZG93LmgpID8gQXBwQ29uc3RhbnRzLkxBTkRTQ0FQRSA6IEFwcENvbnN0YW50cy5QT1JUUkFJVFxuICAgICAgICAgICAgICAgIEFwcFN0b3JlLmVtaXRDaGFuZ2UoYWN0aW9uLmFjdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgQXBwU3RvcmUuZW1pdENoYW5nZShhY3Rpb24uYWN0aW9uVHlwZSwgYWN0aW9uLml0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxud2luZG93LkFwcFN0b3JlID0gQXBwU3RvcmVcblxuZXhwb3J0IGRlZmF1bHQgQXBwU3RvcmVcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8c3ZnIHsuLi50aGlzLnByb3BzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3N2Zz5cbiAgICB9XG59XG4iLCJpbXBvcnQgaXMgZnJvbSAnaXMnO1xuXG5mdW5jdGlvbiBnZXRBbGxNZXRob2RzKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKVxuXHRcdC5maWx0ZXIoa2V5ID0+IGlzLmZuKG9ialtrZXldKSlcbn1cblxuZnVuY3Rpb24gYXV0b0JpbmQob2JqKSB7XG5cdC8vIGNvbnNvbGUubG9nKCdvYmogLS0tLS0nLCBvYmopXG4gIFx0Z2V0QWxsTWV0aG9kcyhvYmouY29uc3RydWN0b3IucHJvdG90eXBlKVxuXHRcdC5mb3JFYWNoKG10ZCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhtdGQpXG5cdFx0XHRvYmpbbXRkXSA9IG9ialttdGRdLmJpbmQob2JqKTtcblx0XHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvQmluZDsiLCJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBOb3JtYWxpemVNb3VzZUNvb3JkcyhlLCBvYmpXcmFwcGVyKSB7XG5cdFx0dmFyIHBvc3ggPSAwO1xuXHRcdHZhciBwb3N5ID0gMDtcblx0XHRpZiAoIWUpIHZhciBlID0gd2luZG93LmV2ZW50O1xuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG5cdFx0XHRcdCsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3Bcblx0XHRcdFx0KyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRvYmpXcmFwcGVyLnggPSBwb3N4XG5cdFx0b2JqV3JhcHBlci55ID0gcG9zeVxuXHRcdHJldHVybiBvYmpXcmFwcGVyXG5cdH1cblx0c3RhdGljIFJlc2l6ZVBvc2l0aW9uUHJvcG9ydGlvbmFsbHkod2luZG93Vywgd2luZG93SCwgY29udGVudFcsIGNvbnRlbnRIKSB7XG5cdFx0dmFyIGFzcGVjdFJhdGlvID0gY29udGVudFcgLyBjb250ZW50SFxuXHRcdHZhciBzY2FsZSA9ICgod2luZG93VyAvIHdpbmRvd0gpIDwgYXNwZWN0UmF0aW8pID8gKHdpbmRvd0ggLyBjb250ZW50SCkgKiAxIDogKHdpbmRvd1cgLyBjb250ZW50VykgKiAxXG5cdFx0dmFyIG5ld1cgPSBjb250ZW50VyAqIHNjYWxlXG5cdFx0dmFyIG5ld0ggPSBjb250ZW50SCAqIHNjYWxlXG5cdFx0dmFyIGNzcyA9IHtcblx0XHRcdHdpZHRoOiBuZXdXLFxuXHRcdFx0aGVpZ2h0OiBuZXdILFxuXHRcdFx0bGVmdDogKHdpbmRvd1cgPj4gMSkgLSAobmV3VyA+PiAxKSxcblx0XHRcdHRvcDogKHdpbmRvd0ggPj4gMSkgLSAobmV3SCA+PiAxKSxcblx0XHRcdHNjYWxlOiBzY2FsZVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gY3NzXG5cdH1cblx0c3RhdGljIERlc3Ryb3lWaWRlbyh2aWRlbykge1xuICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB2aWRlby5zcmMgPSAnJztcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdmlkZW8uY2hpbGROb2Rlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgXHRjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcbiAgICAgICAgXHQvLyBXb3JraW5nIHdpdGggYSBwb2x5ZmlsbCBvciB1c2UganF1ZXJ5XG4gICAgICAgIFx0Y2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgRGVzdHJveVZpZGVvVGV4dHVyZSh0ZXh0dXJlKSB7XG4gICAgXHR2YXIgdmlkZW8gPSB0ZXh0dXJlLmJhc2VUZXh0dXJlLnNvdXJjZVxuICAgICAgICBVdGlscy5EZXN0cm95VmlkZW8odmlkZW8pXG4gICAgfVxuICAgIHN0YXRpYyBJc0V2ZW4obikge1xuXHQgICByZXR1cm4gbiAlIDIgPT0gMDtcblx0fVxuXHRzdGF0aWMgUmFuZChtaW4sIG1heCwgZGVjaW1hbHMpIHtcbiAgICAgICAgdmFyIHJhbmRvbU51bSA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxuICAgICAgICBpZihkZWNpbWFscyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgXHRyZXR1cm4gcmFuZG9tTnVtXG4gICAgICAgIH1lbHNle1xuXHQgICAgICAgIHZhciBkID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKVxuXHQgICAgICAgIHJldHVybiB+figoZCAqIHJhbmRvbU51bSkgKyAwLjUpIC8gZFxuICAgICAgICB9XG5cdH1cblx0c3RhdGljIFRyYW5mb3JtQXJyYXlGcm9tTWlkZGxlQW5kT3V0KGFycmF5KSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdXG4gICAgICAgIHZhciBpID0gTWF0aC5jZWlsKGFycmF5Lmxlbmd0aC8yKVxuICAgICAgICB2YXIgaiA9IGkgLSAxXG4gICAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBcdG5ld0FycmF5LnB1c2goYXJyYXlbai0tXSlcbiAgICAgICAgICAgIGlmKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIFx0bmV3QXJyYXkucHVzaChhcnJheVtpKytdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheVxuICAgIH1cbiAgICBzdGF0aWMgU2V0KGVsZW1lbnQsIHZhcnMsIGFuaW1hdGlvbkNsYXNzKSB7XG5cdFx0YW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb25DbGFzcyB8fCAnYW5pbWF0ZSdcblx0XHRkb20oZWxlbWVudCkucmVtb3ZlQ2xhc3MoYW5pbWF0aW9uQ2xhc3MpXG5cdFx0VHdlZW5MaXRlLnNldChlbGVtZW50LCB2YXJzKVxuXHR9XG5cdHN0YXRpYyBBbmltYXRlKGVsZW1lbnQsIHZhcnMsIGFuaW1hdGlvbkNsYXNzKSB7XG5cdFx0YW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb25DbGFzcyB8fCAnYW5pbWF0ZSdcblx0XHRkb20oZWxlbWVudCkuYWRkQ2xhc3MoYW5pbWF0aW9uQ2xhc3MpXG5cdFx0dmFyc1snZm9yY2UzRCddID0gdHJ1ZVxuXHRcdFR3ZWVuTGl0ZS5zZXQoZWxlbWVudCwgdmFycylcblx0fVxuXHRzdGF0aWMgU3ByaW5nVG8oaXRlbSwgdG9Qb3NpdGlvbiwgaW5kZXgsIHNwcmluZ0NvbmZpZykge1xuICAgIFx0dmFyIGR4ID0gdG9Qb3NpdGlvbi54IC0gaXRlbS54XG4gICAgXHR2YXIgZHkgPSB0b1Bvc2l0aW9uLnkgLSBpdGVtLnlcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeClcblx0XHR2YXIgdGFyZ2V0WCA9IHRvUG9zaXRpb24ueCAtIE1hdGguY29zKGFuZ2xlKSAqIChzcHJpbmdDb25maWcubGVuZ3RoICogaW5kZXgpXG5cdFx0dmFyIHRhcmdldFkgPSB0b1Bvc2l0aW9uLnkgLSBNYXRoLnNpbihhbmdsZSkgKiAoc3ByaW5nQ29uZmlnLmxlbmd0aCAqIGluZGV4KVxuXHRcdGl0ZW0udmVsb2NpdHkueCArPSAodGFyZ2V0WCAtIGl0ZW0ueCkgKiBzcHJpbmdDb25maWcuc3ByaW5nXG5cdFx0aXRlbS52ZWxvY2l0eS55ICs9ICh0YXJnZXRZIC0gaXRlbS55KSAqIHNwcmluZ0NvbmZpZy5zcHJpbmdcblx0XHRpdGVtLnZlbG9jaXR5LnggKj0gc3ByaW5nQ29uZmlnLmZyaWN0aW9uXG5cdFx0aXRlbS52ZWxvY2l0eS55ICo9IHNwcmluZ0NvbmZpZy5mcmljdGlvblxuICAgIH1cbiAgICBzdGF0aWMgU3ByaW5nVmFsKGZyb21WYWwsIHRvVmFsLCB2ZWxvY2l0eSwgYW5nbGUsIGZyaWN0aW9uLCBzcHJpbmcsIGxlbmd0aCkge1xuICAgIFx0dmFyIGRpc3RhbmNlID0gdG9WYWwgLSBmcm9tVmFsXG5cdFx0dmFyIHRhcmdldCA9IHRvVmFsIC0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoXG5cdFx0dmVsb2NpdHkgKz0gKHRhcmdldCAtIGZyb21WYWwpICogc3ByaW5nXG5cdFx0dmVsb2NpdHkgKj0gZnJpY3Rpb25cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxzXG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuIFxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuIFxuLy8gTUlUIGxpY2Vuc2VcbiBcbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIH1cbiBcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCBcbiAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcbiBcbiAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG59KCkpOyIsImltcG9ydCBGbHV4IGZyb20gJ2ZsdXgnXG5pbXBvcnQgcmVhY3RNaXhpbiBmcm9tICdyZWFjdC1taXhpbidcbmltcG9ydCB7RXZlbnRFbWl0dGVyMn0gZnJvbSAnZXZlbnRlbWl0dGVyMidcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuLy8gQWN0aW9uc1xudmFyIFBhZ2VyQWN0aW9ucyA9IHtcbiAgICBvblBhZ2VSZWFkeTogZnVuY3Rpb24oaGFzaCkge1xuICAgICAgICBQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFksXG4gICAgICAgIFx0aXRlbTogaGFzaFxuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgXHRQYWdlckRpc3BhdGNoZXIuaGFuZGxlUGFnZXJBY3Rpb24oe1xuICAgICAgICBcdHR5cGU6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEUsXG4gICAgICAgIFx0aXRlbTogdW5kZWZpbmVkXG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIHBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUGFnZXJEaXNwYXRjaGVyLmhhbmRsZVBhZ2VyQWN0aW9uKHtcbiAgICAgICAgXHR0eXBlOiBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSCxcbiAgICAgICAgXHRpdGVtOiB1bmRlZmluZWRcbiAgICAgICAgfSkgIFxuICAgIH1cbn1cblxuLy8gQ29uc3RhbnRzXG52YXIgUGFnZXJDb25zdGFudHMgPSB7XG5cdFBBR0VfSVNfUkVBRFk6ICdQQUdFX0lTX1JFQURZJyxcblx0UEFHRV9UUkFOU0lUSU9OX0lOOiAnUEFHRV9UUkFOU0lUSU9OX0lOJyxcblx0UEFHRV9UUkFOU0lUSU9OX09VVDogJ1BBR0VfVFJBTlNJVElPTl9PVVQnLFxuXHRQQUdFX1RSQU5TSVRJT05fT1VUX0NPTVBMRVRFOiAnUEFHRV9UUkFOU0lUSU9OX09VVF9DT01QTEVURScsXG5cdFBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUzogJ1BBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTUycsXG5cdFBBR0VfVFJBTlNJVElPTl9ESURfRklOSVNIOiAnUEFHRV9UUkFOU0lUSU9OX0RJRF9GSU5JU0gnLFxufVxuXG4vLyBEaXNwYXRjaGVyXG52YXIgUGFnZXJEaXNwYXRjaGVyID0gYXNzaWduKG5ldyBGbHV4LkRpc3BhdGNoZXIoKSwge1xuXHRoYW5kbGVQYWdlckFjdGlvbjogZnVuY3Rpb24oYWN0aW9uKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChhY3Rpb24pXG5cdH1cbn0pXG5cbi8vIFN0b3JlXG52YXIgUGFnZXJTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyMi5wcm90b3R5cGUsIHtcbiAgICBmaXJzdFBhZ2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgIHBhZ2VUcmFuc2l0aW9uU3RhdGU6IHVuZGVmaW5lZCwgXG4gICAgZGlzcGF0Y2hlckluZGV4OiBQYWdlckRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gcGF5bG9hZC50eXBlXG4gICAgICAgIHZhciBpdGVtID0gcGF5bG9hZC5pdGVtXG4gICAgICAgIHN3aXRjaChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfSVNfUkVBRFk6XG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUucGFnZVRyYW5zaXRpb25TdGF0ZSA9IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTl9QUk9HUkVTU1xuICAgICAgICAgICAgXHR2YXIgdHlwZSA9IFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbiA/IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9JTiA6IFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRcbiAgICAgICAgICAgIFx0UGFnZXJTdG9yZS5lbWl0KHR5cGUpXG4gICAgICAgICAgICBcdGJyZWFrXG4gICAgICAgICAgICBjYXNlIFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVRfQ09NUExFVEU6XG4gICAgICAgICAgICBcdHZhciB0eXBlID0gUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOXG4gICAgICAgICAgICBcdFBhZ2VyU3RvcmUuZW1pdCh0eXBlKVxuICAgICAgICAgICAgXHRicmVha1xuICAgICAgICAgICAgY2FzZSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSDpcbiAgICAgICAgICAgIFx0aWYgKFBhZ2VyU3RvcmUuZmlyc3RQYWdlVHJhbnNpdGlvbikgUGFnZXJTdG9yZS5maXJzdFBhZ2VUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgICBQYWdlclN0b3JlLnBhZ2VUcmFuc2l0aW9uU3RhdGUgPSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fRElEX0ZJTklTSFxuICAgICAgICAgICAgICAgIFBhZ2VyU3RvcmUuZW1pdChhY3Rpb25UeXBlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRQYWdlclN0b3JlOiBQYWdlclN0b3JlLFxuXHRQYWdlckFjdGlvbnM6IFBhZ2VyQWN0aW9ucyxcblx0UGFnZXJDb25zdGFudHM6IFBhZ2VyQ29uc3RhbnRzLFxuXHRQYWdlckRpc3BhdGNoZXI6IFBhZ2VyRGlzcGF0Y2hlclxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ0F1dG9iaW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRhdXRvYmluZCh0aGlzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmRpZFRyYW5zaXRpb25JbkNvbXBsZXRlID0gdGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUgPSB0aGlzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy50bEluID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdG9uQ29tcGxldGU6dGhpcy5kaWRUcmFuc2l0aW9uSW5Db21wbGV0ZVxuXHRcdH0pXG5cdFx0dGhpcy50bE91dCA9IG5ldyBUaW1lbGluZU1heCh7XG5cdFx0XHRvbkNvbXBsZXRlOnRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlXG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKClcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucmVzaXplKClcblx0XHR0aGlzLnNldHVwQW5pbWF0aW9ucygpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmlzUmVhZHkodGhpcy5wcm9wcy5oYXNoKSwgMClcblx0fVxuXHRzZXR1cEFuaW1hdGlvbnMoKSB7XG5cdFx0Ly8gcmVzZXRcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdH1cblx0d2lsbFRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnRsT3V0LnBhdXNlKDApXG5cdFx0dGhpcy50bEluLnRpbWVTY2FsZSgxLjIpLnBsYXkoMClcblx0fVxuXHR3aWxsVHJhbnNpdGlvbk91dCgpIHtcblx0XHR0aGlzLnRsSW4ucGF1c2UoMClcblx0XHR0aGlzLnRsT3V0LnRpbWVTY2FsZSgxLjQpLnBsYXkoMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuZGlkVHJhbnNpdGlvbkluQ29tcGxldGUoKSwgMClcblx0fVxuXHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpZFRyYW5zaXRpb25PdXRDb21wbGV0ZSgpLCAwKVxuXHR9XG5cdHJlc2l6ZSgpIHtcblx0fVxuXHRmb3JjZVVubW91bnQoKSB7XG5cdFx0dGhpcy50bEluLnBhdXNlKDApXG5cdFx0dGhpcy50bE91dC5wYXVzZSgwKVxuXHRcdHRoaXMuZGlkVHJhbnNpdGlvbk91dENvbXBsZXRlKClcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnRsSW4uY2xlYXIoKVxuXHRcdHRoaXMudGxPdXQuY2xlYXIoKVxuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1BhZ2VyU3RvcmUsIFBhZ2VyQWN0aW9ucywgUGFnZXJDb25zdGFudHMsIFBhZ2VyRGlzcGF0Y2hlcn0gZnJvbSAnUGFnZXInXG5pbXBvcnQgX2NhcGl0YWxpemUgZnJvbSAnbG9kYXNoL1N0cmluZy9jYXBpdGFsaXplJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAncGFnZS1iJ1xuXHRcdHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uSW4gPSB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluLmJpbmQodGhpcylcblx0XHR0aGlzLndpbGxQYWdlVHJhbnNpdGlvbk91dCA9IHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0LmJpbmQodGhpcylcblx0XHR0aGlzLmNvbXBvbmVudHMgPSB7XG5cdFx0XHQnbmV3LWNvbXBvbmVudCc6IHVuZGVmaW5lZCxcblx0XHRcdCdvbGQtY29tcG9uZW50JzogdW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD0ncGFnZXMtY29udGFpbmVyJz5cblx0XHRcdFx0PGRpdiBzdHlsZT17dGhpcy5kaXZTdHlsZX0gcmVmPSdwYWdlLWEnPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSByZWY9J3BhZ2UtYic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub24oUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX09VVCwgdGhpcy53aWxsUGFnZVRyYW5zaXRpb25PdXQpXG5cdH1cblx0c2V0dXBOZXdDb21wb25lbnQoaGFzaCwgVHlwZSkge1xuXHRcdHZhciBpZCA9IF9jYXBpdGFsaXplKGhhc2gucmVwbGFjZShcIi9cIiwgXCJcIikpXG5cdFx0dGhpcy5vbGRQYWdlRGl2UmVmID0gdGhpcy5jdXJyZW50UGFnZURpdlJlZlxuXHRcdHRoaXMuY3VycmVudFBhZ2VEaXZSZWYgPSAodGhpcy5jdXJyZW50UGFnZURpdlJlZiA9PT0gJ3BhZ2UtYScpID8gJ3BhZ2UtYicgOiAncGFnZS1hJ1xuXHRcdHZhciBlbCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmc1t0aGlzLmN1cnJlbnRQYWdlRGl2UmVmXSlcblx0XHR2YXIgcGFnZSA9IFxuXHRcdFx0PFR5cGUgXG5cdFx0XHRcdGlkPXt0aGlzLmN1cnJlbnRQYWdlRGl2UmVmfSBcblx0XHRcdFx0aXNSZWFkeT17dGhpcy5vblBhZ2VSZWFkeX0gXG5cdFx0XHRcdGhhc2g9e2hhc2h9XG5cdFx0XHRcdGRpZFRyYW5zaXRpb25JbkNvbXBsZXRlPXt0aGlzLmRpZFBhZ2VUcmFuc2l0aW9uSW5Db21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWRUcmFuc2l0aW9uT3V0Q29tcGxldGU9e3RoaXMuZGlkUGFnZVRyYW5zaXRpb25PdXRDb21wbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR0aGlzLmNvbXBvbmVudHNbJ29sZC1jb21wb25lbnQnXSA9IHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddXG5cdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10gPSBSZWFjdC5yZW5kZXIocGFnZSwgZWwpXG5cdFx0aWYoUGFnZXJTdG9yZS5wYWdlVHJhbnNpdGlvblN0YXRlID09PSBQYWdlckNvbnN0YW50cy5QQUdFX1RSQU5TSVRJT05fSU5fUFJPR1JFU1MpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLmZvcmNlVW5tb3VudCgpXG5cdFx0fVxuXHR9XG5cdG9uUGFnZVJlYWR5KGhhc2gpIHtcblx0XHRQYWdlckFjdGlvbnMub25QYWdlUmVhZHkoaGFzaClcblx0fVxuXHR3aWxsUGFnZVRyYW5zaXRpb25JbigpIHtcblx0XHR0aGlzLnN3aXRjaFBhZ2VzRGl2SW5kZXgoKVxuXHRcdHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uSW4oKVxuXHRcdEFwcFN0b3JlLlBhcmVudC5zdHlsZS5jdXJzb3IgPSAncHJvZ3Jlc3MnXG5cdH1cblx0d2lsbFBhZ2VUcmFuc2l0aW9uT3V0KCkge1xuXHRcdHRoaXMuY29tcG9uZW50c1snb2xkLWNvbXBvbmVudCddLndpbGxUcmFuc2l0aW9uT3V0KClcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG5cdFx0UGFnZXJBY3Rpb25zLnBhZ2VUcmFuc2l0aW9uRGlkRmluaXNoKClcblx0XHR0aGlzLnVubW91bnRDb21wb25lbnQoJ29sZC1jb21wb25lbnQnKVxuXHRcdEFwcFN0b3JlLlBhcmVudC5zdHlsZS5jdXJzb3IgPSAnYXV0bydcblx0fVxuXHRkaWRQYWdlVHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuXHRcdFBhZ2VyQWN0aW9ucy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZSgpXG5cdH1cblx0c3dpdGNoUGFnZXNEaXZJbmRleCgpIHtcblx0XHR2YXIgbmV3RWwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbdGhpcy5jdXJyZW50UGFnZURpdlJlZl0pXG5cdFx0dmFyIG9sZEVsID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzW3RoaXMub2xkUGFnZURpdlJlZl0pXG5cdFx0bmV3RWwuc3R5bGUuekluZGV4ID0gMlxuXHRcdG9sZEVsLnN0eWxlLnpJbmRleCA9IDFcblx0fVxuXHR1bm1vdW50Q29tcG9uZW50KHJlZikge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1tyZWZdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBpZCA9IHRoaXMuY29tcG9uZW50c1tyZWZdLnByb3BzLmlkXG5cdFx0XHR2YXIgZG9tVG9SZW1vdmUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnNbaWRdKVxuXHRcdFx0UmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ub1JlbW92ZSlcblx0XHR9XG5cdH1cblx0dXBkYXRlKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10udXBkYXRlKClcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdGlmKHRoaXMuY29tcG9uZW50c1snbmV3LWNvbXBvbmVudCddICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnRzWyduZXctY29tcG9uZW50J10ucmVzaXplKClcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0UGFnZXJTdG9yZS5vZmYoUGFnZXJDb25zdGFudHMuUEFHRV9UUkFOU0lUSU9OX0lOLCB0aGlzLndpbGxQYWdlVHJhbnNpdGlvbkluKVxuXHRcdFBhZ2VyU3RvcmUub2ZmKFBhZ2VyQ29uc3RhbnRzLlBBR0VfVFJBTlNJVElPTl9PVVQsIHRoaXMud2lsbFBhZ2VUcmFuc2l0aW9uT3V0KVxuXHRcdHRoaXMudW5tb3VudENvbXBvbmVudCgnb2xkLWNvbXBvbmVudCcpXG5cdFx0dGhpcy51bm1vdW50Q29tcG9uZW50KCduZXctY29tcG9uZW50Jylcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImNvbnRlbnRcIjoge1xuXHRcdFwibXl0ZXh0XCI6IFwic29tZSBnbG9iYWwgdGV4dFwiXG5cdH0sXG5cblx0XCJtZW51XCI6IFtcblx0XHR7XG5cdFx0XHRcImlkXCI6IFwicXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiUXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvcXVpbnRhZXNzZW5jZVwiLFxuXHRcdFx0XCJsYXRpbi1udW1cIjogXCJJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJhcmNoaXRlY3R1cmVcIixcblx0XHRcdFwibmFtZVwiOiBcIkFyY2hpdGVjdHVyZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCIvYXJjaGl0ZWN0dXJlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJjcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibmFtZVwiOiBcIkNyZWF0aXZpdHkgJiBJbm5vdmF0aW9uXCIsXG5cdFx0XHRcInVybFwiOiBcIi9jcmVhdGl2aXR5LWlubm92YXRpb25cIixcblx0XHRcdFwibGF0aW4tbnVtXCI6IFwiSUlJXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJzdHlsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiU3R5bGVcIixcblx0XHRcdFwidXJsXCI6IFwiL3N0eWxlXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIklWXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwiaWRcIjogXCJpbnNwaXJhdGlvbi1zcGFya1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwiSW5zcGlyYXRpb24gU3BhcmtcIixcblx0XHRcdFwidXJsXCI6IFwiL2luc3BpcmF0aW9uLXNwYXJrXCIsXG5cdFx0XHRcImxhdGluLW51bVwiOiBcIlZcIlxuXHRcdH1cblx0XSxcblxuXHRcImRlZmF1bHQtcm91dGVcIjogXCJcIixcblxuXHRcInJvdXRpbmdcIjoge1xuXHRcdFwiL1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IFwiaG9tZSBwYWdlXCJcblx0XHR9LFxuXHRcdFwiaW5zcGlyYXRpb24tc3BhcmtcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBcImluc3BpcmF0aW9uLXNwYXJrIHBhZ2VcIixcblx0XHRcdFwiaW1hZ2VzXCI6IFtcblx0XHRcdFx0XCIxIC0gTERTMDQgTW9uYSBPcmVuLmpwZ1wiLFxuXHRcdFx0XHRcIjIgLSBMRFMwMSBMaXUgSnVhbiBIdWEuanBnXCIsXG5cdFx0XHRcdFwiMyAtIExEUyAzNyBMYWVydGUgUmFtb3MuanBnXCIsXG5cdFx0XHRcdFwiNCAtIExEUyA0MCBFcmRhbCBEdW1hbi5qcGdcIixcblx0XHRcdFx0XCI1IC0gTERTMDEgTGl1IEp1YW4gSHVhLmpwZ1wiLFxuXHRcdFx0XHRcIjYgLSBMRFMwNyBHcmVnb3IgSGlkZWJyYW5kdC5qcGdcIixcblx0XHRcdFx0XCI3IC0gTERTMDggRGFuaWVsIEFyc2hhbS5qcGdcIixcblx0XHRcdFx0XCI4IC0gTERTMTIgS293ZWkgTmF3YS5qcGdcIixcblx0XHRcdFx0XCI5IC0gTERTMTMgTWFydGVlbiBCYWFzLmpwZ1wiLFxuXHRcdFx0XHRcIjEwIC0gTERTMTcgTWFyaWUgQ2hyaXN0b3BoZS5qcGdcIixcblx0XHRcdFx0XCIxMSAtIExEUzE4IFdlbiBGYW5nLmpwZ1wiLFxuXHRcdFx0XHRcIjEyIC0gTERTMTkgTmljb2xhcyBNaWxoZS5qcGdcIixcblx0XHRcdFx0XCIxMyAtIExEUzIwIEJpanUgSm9zZS5qcGdcIixcblx0XHRcdFx0XCIxNCAtIExEUzI0IEtlbmdvIEtpdG8uanBnXCIsXG5cdFx0XHRcdFwiMTUgLSBMRFMyNyBTdXNhbiBIZWZ1bmEuanBnXCIsXG5cdFx0XHRcdFwiMTYgLSBMRFMyOCBNb3JnYW5lIFRzY2hpZW1iZXIuanBnXCIsXG5cdFx0XHRcdFwiMTcgLSBMRFMzNiBCcmlnaWRhIEJhbHRhci5qcGdcIixcblx0XHRcdFx0XCIxOCAtIExEUzQyIE1hcnRpbiAmIFlvdWxlLmpwZ1wiLFxuXHRcdFx0XHRcIjE5IC0gTERTNDMgQWxpY2UgQW5kZXJzb24uanBnXCIsXG5cdFx0XHRcdFwiMjAgLSBMRFM0NCBKYWNrIExhdmVuZGVyLmpwZ1wiLFxuXHRcdFx0XHRcIjIxIC0gTERTMTQgT2x5bXBpYSBTY2FycnkuanBnXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiYXJjaGl0ZWN0dXJlXCI6IHtcblx0XHRcdFwidGl0bGVcIjogXCJhcmNoaXRlY3R1cmUgcGFnZVwiLFxuXHRcdFx0XCJ2aWRlb3NcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBMSU5FXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkxhZHkgRGlvciBpcyBhbiBhcmNoaXRlY3R1cmFsIGNvbnN0cnVjdGlvbi48YnIvPkl0cyBiZWF1dHkgbGllcywgYXQgdGhlIGJlZ2lubmluZywgb24gaXRzIOKAnGxpbmVz4oCdLDxici8+aXRzIHByb3BvcnRpb25zIGFuZCBpZGVhbCBkaW1lbnNpb25zLjxici8+VGhlIGxpbmUgY3JlYXRlcyB0aGUgc2hhcGUuLi48YnIvPkluIGFsbCBpdCB0YWtlcyAxNDQgc2VwYXJhdGUgcGFydHMgdG8gbWFrZSBlYWNoIExhZHkgRGlvci48YnIvPjxici8+VGhlIHNoYXBlIGdpdmVzIGxpdmUgdG8gdGhlIG1hdGVyaWFsLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCJcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBNQVRFUklBTFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGVhdGhlciBtdXN0IGJlIHBlcmZlY3QuPGJyLz5JdCBhbGwgYmVnaW5zIHdpdGggdGhlIHNlbGVjdGlvbiB3aGljaCBtdXN0IG1lZXQgc3BlY2lhbGx5IGRlbWFuZGluZyBjcml0ZXJpYSwgYWx3YXlzIGZvbGxvd2luZyB0aGUgc2FtZSByaXR1YWwgOiB0b3VjaGluZywgZXhhbWluaW5nLCBzZWVpbmcuLi48YnIvPlRoZSBjcmFmdG1hbuKAmXMgaGFuZHMgYW5kIGV5ZXMgYXJlIHRyYWluZWQgdG8gZGV0ZWN0IHRoZSBtaW5vciBmbGF3Ljxici8+PGJyLz5UaGUgbGVhdGhlciBpcyB0aGVuIGN1dCwgZm9sbG93aW5nIHRoZSBwYXR0ZXJucy48YnIvPkFmdGVyIHRoZSBjYW5uaW5nIHN0aXRjaGluZywgdGhlIHBhcnRzIGFyZSByZWFkeSB0byBjcmVhdGUgdGhlIHZvbHVtZS5cIixcblx0XHRcdFx0XHRcImZpbGVuYW1lXCI6IFwiMjVfTEFEWURJT1JfRGVjb3VwZV9kZXNfQ3VpcnNfMTVzZWNfREVGX0gyNjRfMVwiLFxuXHRcdFx0XHRcdFwiaW1nbmFtZVwiOiBcInNjcmVlbi1hLmpwZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVEhFIFZPTFVNRVwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJMYWR5IERpb3IgaXMgYXNzZW1ibGVkIGFyb3VuZCBhIHdvb2RlbiBmb3JtLjxici8+VGhlIHRhc2sgaXMgaXMgYW4gZXNwZWNpYWxseSBkaWZmaWN1bHQgb25lLCBhcyB0aGUgY2FubmluZyBoYXMgdG8gYWxpZ24gcGVyZmVjdGx5Ljxici8+PGJyLz5UaGUgZnJvbnQsIGJhY2sgYW5kIHNpZGVzIGFyZSByZWluZm9yY2VkIHRvIGd1YXJhbnR5IHRoYXQgdGhlIGJhZyB3aWxsIG1haW50YWluIGl0cyBzaGFwZSwgcHJldmVudGluZyBpdCBmcm9tIGJ1Y2tsaW5nLlwiLFxuXHRcdFx0XHRcdFwiZmlsZW5hbWVcIjogXCIyNl9MQURZRElPUl9NaXNlX2VuX2Zvcm1lXzE1c2VjX0RFRl9IMjY0XzFcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlRIRSBERVRBSUxcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWx3b3JrIHN0cmVuZ3RoZW4gYW5kIGFjY2Vzc29yaXplIHRoZSBiYWc6IGNoYXJtcywgemlwcGVyLCBncm9tbWV0cyBvciBiYXNlIHN0dWRzLi4uPGJyLz5UaGlzIGlzIHRoZSBEaW9yIHNpZ25hdHVyZSwgbWFraW5nIGVhY2ggZGV0YWlsIGFuIGluZGVzcGVuc2FibGUgcGFydCBvZiB0aGUgYmVhdXR5IG9mIHRoZSB3aG9sZS48YnIvPjxici8+TGFkeSBEaW9yIGNhcnJpZXMgd2l0aGluIGl0IHRoZSB2ZXJ5IHNwaXJpdCBvZiBEaW9yLi4uXCIsXG5cdFx0XHRcdFx0XCJmaWxlbmFtZVwiOiBcIjI3X0xBRFlESU9SX1Bvc2VfZGVzX2Jpam91dGVyaWVzXzE1c2VjX0RFRl9IMjY0XzFcIixcblx0XHRcdFx0XHRcImltZ25hbWVcIjogXCJzY3JlZW4tYS5qcGdcIlxuXHRcdFx0XHR9XG5cdFx0XHRdXG4gICAgICAgIH0sXG4gICAgICAgIFwicXVpbnRhZXNzZW5jZVwiOiB7XG4gICAgICAgIFx0XCJ0aXRsZVwiOiBcInF1aW50YWVzc2VuY2UgcGFnZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3JlYXRpdml0eS1pbm5vdmF0aW9uXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwiQ1JFQVRJVklUWSAmIElOTk9WQVRJT04gcGFnZVwiLFxuICAgICAgICBcdFwiYmFnVXJsc1wiOiBbXG4gICAgICAgIFx0XHRcImJhZzBcIixcbiAgICAgICAgXHRcdFwiYmFnMVwiXG4gICAgICAgIFx0XVxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXHRcInRpdGxlXCI6IFwic3R5bGUgcGFnZVwiLFxuICAgICAgICBcdFwiaW1hZ2VzXCI6IFtcbiAgICAgICAgXHRcdFwiMmEzYzVjZTA4ODQ1NzdiYTZkN2ZjY2UzY2ZlOGZiNjguanBnXCIsXG4gICAgICAgIFx0XHRcIjNiZDk3OWMyNWQzYzY3Zjc1NjY5OGFjNTBjYjlhNTc2LmpwZ1wiLFxuICAgICAgICBcdFx0XCIwNWUyMjIyMTQwODU0NjBlYmM5MDVjNzlkZTQ2OGRjNy5qcGdcIixcbiAgICAgICAgXHRcdFwiN2VmYzlkYmNhZmI3MGRiYWIzZTNlMTlkYTM1MWUzMzEuanBnXCIsXG4gICAgICAgIFx0XHRcIjlkNTNhNGM1NDU3YzRkNzZjMzkxNzc0MDYzMDJhMjg3LmpwZ1wiLFxuICAgICAgICBcdFx0XCIxNWUzNzU1MmJlZmQ1NWRmM2RlYmQ2ODE4ODVmYWNkZC5qcGdcIixcbiAgICAgICAgXHRcdFwiMzJiNjIwOGVkZTNjMzNiZWRhOGEwZWVkYmQ4YjU1N2EuanBnXCIsXG4gICAgICAgIFx0XHRcIjA5MmI4N2FlYWVhZjI1MzYxMDM2OWQzZGFhZmY0ZmU0LmpwZ1wiLFxuICAgICAgICBcdFx0XCIxMTIuanBnXCIsXG4gICAgICAgIFx0XHRcIjE0ODM4ZGI1OTlkYzJkMGU2YWNjM2MxNTc4YjNjY2NmLmpwZ1wiLFxuICAgICAgICBcdFx0XCIyMzExNjEyX0lNR18wNTI1LmpwZ1wiLFxuICAgICAgICBcdFx0XCI0NDg2ODIxX29wZW4tdXJpMjAxNTA1MTctNzExNy1laG9xYTMuanBnXCIsXG4gICAgICAgIFx0XHRcImNocmlzdGlhbi1kaW9yLWZhbGwtd2ludGVyLTIwMTEtMjAxMi1sb29rYm9vay05LmpwZ1wiLFxuICAgICAgICBcdFx0XCJkNDk2MjhjYjczNDE1M2IzZjBlMDc0YmRhZTQwMTNhNS5qcGdcIixcbiAgICAgICAgXHRcdFwiZGE5NzQwMTQyNDUzMWU2YTYzODYxNjhjMmFjYWZkZTIuanBnXCIsXG4gICAgICAgIFx0XHRcImRjODM4YjNjYmZjNGEyZDhjZGY5OGU5NTEyMmYyZDc3LmpwZ1wiLFxuICAgICAgICBcdFx0XCJkc2NfMDgyOS5qcGdcIixcbiAgICAgICAgXHRcdFwiZWxpemFiZXRoLW1pbmV0dC1sYWR5LWRpb3Itc3RyZWV0LXN0eWxlLmpwZ1wiLFxuICAgICAgICBcdFx0XCJJTUdfMTI0MS1SQy0xLmpwZ1wiLFxuICAgICAgICBcdFx0XCJJTUdfNjc3My5qcGdcIixcbiAgICAgICAgXHRcdFwiTGUtU2FjLUxhZHktRGlvci1kZS1DaHJpc3RpYW4tRGlvciAoMSkuanBnXCIsXG4gICAgICAgIFx0XHRcIkxGVy1EYXkxLUFXMTUtU3RyZWV0U3R5bGUtTmF0YWxpYS1LYXV0LUJsdWVEcmVzcy1SYWV5LVllbGxvdy1Db2F0LU1hdGNoZXNGYXNoaW9uLU1heWFXaWxsaWFtcy1GYXNoaW9uTG9sbGlwb3AtMS0xMDI0eDY4Mi5qcGdcIixcbiAgICAgICAgXHRcdFwibW9kNDEuanBnXCIsXG4gICAgICAgIFx0XHRcInAxOWo1c2RyNWs0MW8xNmp1MW1rcGQ1YjFwZ2JnLmpwZ1wiLFxuICAgICAgICBcdFx0XCJ0dW1ibHJfbXpzbmRtUlFIaTFzdTd4aWVvMV8xMjgwLmpwZ1wiXG5cdFx0XHRdXG4gICAgICAgIH1cblx0fVxufSJdfQ==
