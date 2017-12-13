'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = function (_Component) {
	_inherits(ContentEditable, _Component);

	function ContentEditable() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ContentEditable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call.apply(_ref, [this].concat(args))), _this), _this.emitChange = function (event) {
			if (!htmlEle) {
				return;
			}

			var _this2 = _this,
			    htmlEle = _this2.htmlEle,
			    props = _this2.props;

			var content = props.plainText ? htmlEle.innerText : htmlEle.innerHTML;

			if (props.onChange && content !== _this.lastContent) {
				event.target = { value: content };
				props.onChange(event);

				_this.lastContent = content;
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ContentEditable, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.plainText && this.htmlEle) {
				this.htmlEle.innerHTML = this.htmlEle.innerText;
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			var props = this.props,
			    htmlEle = this.htmlEle;


			if (!htmlEle) {
				return true;
			}

			if (nextProps.content !== props.content) {
				if (!props.plainText && nextProps.content !== htmlEle.innerHTML) {
					return true;
				}

				if (props.plainText && nextProps.content !== htmlEle.innerText) {
					return true;
				}
			}

			var params = ['style', 'className', 'disabled', 'plainText', 'tagName'];

			return params.some(function (name) {
				return props[name] !== nextProps[name];
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (!this.htmlEle) {
				return;
			}

			var props = this.props,
			    htmlEle = this.htmlEle;


			if (props.plainText && props.content !== htmlEle.innerText || !props.plainText && props.content !== htmlEle.innerHTML) {
				htmlEle.innerHTML = props.content;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    content = _props.content,
			    tagName = _props.tagName,
			    disabled = _props.disabled,
			    plainText = _props.plainText,
			    props = _objectWithoutProperties(_props, ['content', 'tagName', 'disabled', 'plainText']);

			return _react2.default.createElement(
				this.props.tagName,
				_extends({}, props, {
					ref: function ref(ele) {
						return _this3.htmlEle = ele;
					},
					onInput: this.emitChange,
					onBlur: this.props.onBlur || this.emitChange,
					contentEditable: !disabled,
					dangerouslySetInnerHTML: { __html: content } }),
				this.props.children
			);
		}
	}]);

	return ContentEditable;
}(_react.Component);

ContentEditable.defaultProps = {
	tagName: 'div',
	content: '',
	disabled: false,
	plainText: false,
	style: {
		minHeight: "360px",
		whiteSpace: "pre-wrap"
	}
};
exports.default = ContentEditable;