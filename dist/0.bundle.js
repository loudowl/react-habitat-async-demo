webpackJsonp([0,2],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlbumCounter = function (_React$Component) {
	_inherits(AlbumCounter, _React$Component);

	function AlbumCounter() {
		_classCallCheck(this, AlbumCounter);

		return _possibleConstructorReturn(this, (AlbumCounter.__proto__ || Object.getPrototypeOf(AlbumCounter)).apply(this, arguments));
	}

	_createClass(AlbumCounter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'AlbumCounter Component'
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'i',
						null,
						'How many albums:'
					),
					' ',
					this.props.albums.length,
					' ',
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'i',
						null,
						'Last albumn added title:'
					),
					' ',
					this.props.albums[0]
				)
			);
		}
	}]);

	return AlbumCounter;
}(_react2.default.Component);

AlbumCounter.propTypes = {
	albums: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		albums: state.albums || []
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(AlbumCounter);

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(126);

var _Album = __webpack_require__(539);

var _Album2 = _interopRequireDefault(_Album);

var _AlbumCounter = __webpack_require__(536);

var _AlbumCounter2 = _interopRequireDefault(_AlbumCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlbumCollection = function (_React$Component) {
	_inherits(AlbumCollection, _React$Component);

	function AlbumCollection() {
		_classCallCheck(this, AlbumCollection);

		return _possibleConstructorReturn(this, (AlbumCollection.__proto__ || Object.getPrototypeOf(AlbumCollection)).apply(this, arguments));
	}

	_createClass(AlbumCollection, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				!this.props.albums.length && _react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'i',
						null,
						'No albums to display. Why not add one above.'
					)
				),
				this.props.albums.map(function (a) {
					return _react2.default.createElement(_Album2.default, { text: a, key: a });
				})
			);
		}
	}]);

	return AlbumCollection;
}(_react2.default.Component);

AlbumCollection.propTypes = {
	albums: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		albums: state.albums
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(AlbumCollection);

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(66);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Album = function (_React$PureComponent) {
	_inherits(Album, _React$PureComponent);

	function Album() {
		_classCallCheck(this, Album);

		return _possibleConstructorReturn(this, (Album.__proto__ || Object.getPrototypeOf(Album)).apply(this, arguments));
	}

	_createClass(Album, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'card' },
				_react2.default.createElement('img', { src: 'http://lorempixel.com/356/280', alt: '' }),
				_react2.default.createElement(
					'p',
					{ className: 'card-text' },
					this.props.text
				)
			);
		}
	}]);

	return Album;
}(_react2.default.PureComponent);

Album.defaultProps = {
	text: ''
};

Album.propTypes = {
	text: _propTypes2.default.string
};

exports.default = Album;

/***/ })

});