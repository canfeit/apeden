"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _db = require("../db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const db = wx.cloud.database();


var _TaroComponentClass = function (_BaseComponent) {
  _inherits(_TaroComponentClass, _BaseComponent);

  function _TaroComponentClass() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _TaroComponentClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "current", "jokes", "currentTabBar"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_TaroComponentClass, [{
    key: "_constructor",
    value: function _constructor() {
      var _this2 = this;

      _db.jokes.get({
        success: function success(res) {
          _this2.setState({ jokes: res.data });
        }
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleClick",
    value: function handleClick(index) {
      this.setState({
        current: index
      });
    }
  }, {
    key: "handleClickTabBar",
    value: function handleClickTabBar(index) {
      switch (index) {
        case 2:
          _index2.default.redirectTo({
            url: "/pages/addJoke/index"
          });
          break;
      }
      this.setState({
        currentTabBar: index
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var anonymousState__temp = [{ title: "最新" }, { title: "劲爆" }, { title: "段子手" }];
      var anonymousState__temp2 = [{ iconType: "bullet-list" }, { iconType: "image" }, { iconType: "add" }, { iconType: "heart" }, { iconType: "user" }];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index.Component);

_TaroComponentClass.properties = {};
_TaroComponentClass.$$events = ["handleClick", "handleClickTabBar"];
exports.default = _TaroComponentClass;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(_TaroComponentClass, true));