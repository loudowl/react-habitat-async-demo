webpackJsonp([1],{

/***/ 538:
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

var _actions = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddAlbumForm = function (_React$PureComponent) {
	_inherits(AddAlbumForm, _React$PureComponent);

	function AddAlbumForm(props) {
		_classCallCheck(this, AddAlbumForm);

		var _this = _possibleConstructorReturn(this, (AddAlbumForm.__proto__ || Object.getPrototypeOf(AddAlbumForm)).call(this, props));

		_this._txtName = null;
		_this._txtNamRef = function (r) {
			_this._txtName = r;
		};

		_this._handleSubmit = _this._handleSubmit.bind(_this);
		return _this;
	}

	_createClass(AddAlbumForm, [{
		key: '_handleSubmit',
		value: function _handleSubmit(e) {
			e.preventDefault();
			if (this._txtName) {
				this.props.onAddAlbum(this._txtName.value);
				this._txtName.value = '';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this._handleSubmit, className: 'form-inline' },
				_react2.default.createElement(
					'div',
					{ className: 'form-group mx-sm-3' },
					_react2.default.createElement('input', { type: 'text', ref: this._txtNamRef, className: 'form-control', placeholder: 'Album name' })
				),
				_react2.default.createElement(
					'button',
					{ type: 'submit', className: 'btn btn-primary' },
					'Add Album'
				)
			);
		}
	}]);

	return AddAlbumForm;
}(_react2.default.PureComponent);

AddAlbumForm.propTypes = {
	onAddAlbum: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onAddAlbum: function onAddAlbum(title) {
			dispatch((0, _actions.addAlbum)(title));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddAlbumForm);

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var addAlbum = exports.addAlbum = function addAlbum(title) {
	return {
		type: 'ADD_ALBUM',
		title: title
	};
};

/***/ })

});