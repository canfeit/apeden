"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
};

var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};

var AtButton = function (_AtComponent) {
  _inherits(AtButton, _AtComponent);

  function AtButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtButton.__proto__ || Object.getPrototypeOf(AtButton)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loading", "loadingColor", "loadingSize", "isWEAPP", "disabled", "formType", "openType", "lang", "sessionFrom", "sendMessageTitle", "sendMessagePath", "sendMessageImg", "showMessageCard", "appParameter", "BUTTON_PROPS_FUNC", "className", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtButton, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtButton.prototype.__proto__ || Object.getPrototypeOf(AtButton.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isWEAPP: _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP,
        BUTTON_PROPS_FUNC: {
          ONGETUSERINFO: 'onGetUserInfo',
          ONGETPHONENUMBER: 'onGetPhoneNumber',
          ONCONTACT: 'onContact',
          ONERROR: 'onError',
          ONOPENSETTING: 'onOpenSetting'
        }
      };
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var _console;

      (_console = console).log.apply(_console, arguments);
      if (!this.props.disabled) {
        this.props.onClick && this.__triggerPropsFn("onClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
      }
    }
  }, {
    key: "onButtonCall",
    value: function onButtonCall() {
      var _props;

      var _arg = [].concat(Array.prototype.slice.call(arguments));
      var type = _arg.shift();
      if (!type || this.props.disabled) {
        return;
      }this.props[type] && (_props = this.props)[type].apply(_props, _toConsumableArray(_arg));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props2 = this.__props,
          _props2$size = _props2.size,
          size = _props2$size === undefined ? 'normal' : _props2$size,
          _props2$type = _props2.type,
          type = _props2$type === undefined ? '' : _props2$type,
          circle = _props2.circle,
          loading = _props2.loading,
          disabled = _props2.disabled,
          customStyle = _props2.customStyle,
          formType = _props2.formType,
          openType = _props2.openType,
          lang = _props2.lang,
          sessionFrom = _props2.sessionFrom,
          sendMessageTitle = _props2.sendMessageTitle,
          sendMessagePath = _props2.sendMessagePath,
          sendMessageImg = _props2.sendMessageImg,
          showMessageCard = _props2.showMessageCard,
          appParameter = _props2.appParameter;
      var _state = this.__state,
          isWEAPP = _state.isWEAPP,
          BUTTON_PROPS_FUNC = _state.BUTTON_PROPS_FUNC;

      var rootClassName = ['at-button'];
      var sizeClass = SIZE_CLASS[size] || '';
      var disabledClass = disabled ? 'at-button--disabled' : '';
      var typeClass = TYPE_CLASS[type] ? "at-button--" + type : '';
      var circleClass = circle ? 'at-button--circle' : '';

      rootClassName.push("at-button--" + sizeClass, typeClass, circleClass, disabledClass);
      rootClassName = rootClassName.filter(function (str) {
        return str !== '';
      });
      var loadingColor = type === 'primary' ? '#fff' : '#6190E8';
      var loadingSize = size === 'small' ? '16' : '18';
      var component = void 0;
      if (loading) {
        rootClassName.push('at-button--icon');
      }
      var anonymousState__temp = this.getClassName(rootClassName, this.__props.className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loading: loading,
        loadingColor: loadingColor,
        loadingSize: loadingSize,
        disabled: disabled,
        formType: formType,
        openType: openType,
        lang: lang,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        showMessageCard: showMessageCard,
        appParameter: appParameter
      });
      return this.__state;
    }
  }]);

  return AtButton;
}(_component2.default);

AtButton.properties = {
  "disabled": null,
  "onClick": null,
  "__fn_onClick": null,
  "type": null,
  "size": null,
  "circle": null,
  "loading": null,
  "customStyle": null,
  "formType": null,
  "openType": null,
  "lang": null,
  "sessionFrom": null,
  "sendMessageTitle": null,
  "sendMessagePath": null,
  "sendMessageImg": null,
  "showMessageCard": null,
  "appParameter": null,
  "className": null
};
AtButton.$$events = ["onClick", "onButtonCall"];


AtButton.defaultProps = {
  size: 'normal',
  type: '',
  circle: false,
  loading: false,
  disabled: false,
  customStyle: {},
  onClick: function onClick() {},
  // Button props
  formType: '',
  openType: '',
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onGetUserInfo: function onGetUserInfo() {},
  onContact: function onContact() {},
  onGetPhoneNumber: function onGetPhoneNumber() {},
  onError: function onError() {},
  onOpenSetting: function onOpenSetting() {}
};

AtButton.propTypes = {
  size: _index4.default.oneOf(['normal', 'small']),
  type: _index4.default.oneOf(['primary', 'secondary']),
  circle: _index4.default.bool,
  loading: _index4.default.bool,
  disabled: _index4.default.bool,
  onClick: _index4.default.func,
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),

  formType: _index4.default.oneOf(['submit', 'reset']),
  openType: _index4.default.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo']),
  lang: _index4.default.string,
  sessionFrom: _index4.default.string,
  sendMessageTitle: _index4.default.string,
  sendMessagePath: _index4.default.string,
  sendMessageImg: _index4.default.string,
  showMessageCard: _index4.default.bool,
  appParameter: _index4.default.string,
  onGetUserInfo: _index4.default.func,
  onContact: _index4.default.func,
  onGetPhoneNumber: _index4.default.func,
  onError: _index4.default.func,
  onOpenSetting: _index4.default.func
};
exports.default = AtButton;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtButton));