"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _isFunction2 = require("../../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtListItem = function (_AtComponent) {
  _inherits(AtListItem, _AtComponent);

  function AtListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtListItem.__proto__ || Object.getPrototypeOf(AtListItem)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtListItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtListItem.prototype.__proto__ || Object.getPrototypeOf(AtListItem.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleSwitchClick",
    value: function handleSwitchClick(e) {
      e.stopPropagation();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          note = _props.note,
          arrow = _props.arrow,
          title = _props.title,
          thumb = _props.thumb,
          isSwitch = _props.isSwitch,
          extraText = _props.extraText,
          hasBorder = _props.hasBorder,
          extraThumb = _props.extraThumb,
          switchIsCheck = _props.switchIsCheck;


      var rootClass = (0, _index6.default)('at-list__item', {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--no-border': !hasBorder
      }, this.__props.className);

      var anonymousState__temp = arrow ? "chevron-" + arrow : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClass: rootClass,
        thumb: thumb,
        note: note,
        extraText: extraText,
        extraThumb: extraThumb,
        isSwitch: isSwitch,
        switchIsCheck: switchIsCheck,
        arrow: arrow,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtListItem;
}(_component2.default);

AtListItem.properties = {
  "onClick": null,
  "__fn_onClick": null,
  "onSwitchChange": null,
  "__fn_onSwitchChange": null,
  "note": null,
  "arrow": null,
  "title": null,
  "thumb": null,
  "isSwitch": null,
  "extraText": null,
  "hasBorder": null,
  "extraThumb": null,
  "switchIsCheck": null,
  "className": null
};
AtListItem.$$events = ["handleClick", "handleSwitchClick", "handleSwitchChange"];

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.$usedState = ["anonymousState__temp", "rootClass", "thumb", "note", "extraText", "extraThumb", "isSwitch", "switchIsCheck", "arrow", "title"];

  this.handleClick = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if ((0, _isFunction3.default)(_this2.props.onClick)) {
      _this2.__triggerPropsFn("onClick", [null].concat([].concat(args)));
    }
  };

  this.handleSwitchChange = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if ((0, _isFunction3.default)(_this2.props.onSwitchChange)) {
      _this2.__triggerPropsFn("onSwitchChange", [null].concat([].concat(args)));
    }
  };

  this.$$refs = [];
};

AtListItem.defaultProps = {
  hasBorder: true,
  isSwitch: false
};

AtListItem.propTypes = {
  note: _index4.default.string,
  title: _index4.default.string,
  thumb: _index4.default.string,
  onClick: _index4.default.func,
  isSwitch: _index4.default.bool,
  hasBorder: _index4.default.bool,
  switchIsCheck: _index4.default.bool,
  extraText: _index4.default.string,
  extraThumb: _index4.default.string,
  onSwitchChange: _index4.default.func,
  arrow: _index4.default.oneOf(['up', 'down', 'right'])
};
exports.default = AtListItem;

Component(require('../../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtListItem));