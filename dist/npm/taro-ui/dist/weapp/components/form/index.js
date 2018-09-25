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

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultFunc = function defaultFunc() {};

var AtForm = function (_AtComponent) {
  _inherits(AtForm, _AtComponent);

  function AtForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtForm.__proto__ || Object.getPrototypeOf(AtForm)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "reportSubmit", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtForm, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtForm.prototype.__proto__ || Object.getPrototypeOf(AtForm.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.__triggerPropsFn("onSubmit", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "reportSubmit",
    value: function reportSubmit() {
      var _props;

      (_props = this.props).reportSubmit.apply(_props, arguments);
    }
  }, {
    key: "onReset",
    value: function onReset() {
      this.__triggerPropsFn("onReset", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props2 = this.__props,
          customStyle = _props2.customStyle,
          className = _props2.className,
          reportSubmit = _props2.reportSubmit;


      var anonymousState__temp = (0, _index6.default)('at-form', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return AtForm;
}(_component2.default);

AtForm.properties = {
  "__fn_onSubmit": null,
  "reportSubmit": null,
  "__fn_onReset": null,
  "customStyle": null,
  "className": null
};
AtForm.$$events = ["onSubmit", "onReset"];
AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false,
  onSubmit: defaultFunc,
  onReset: defaultFunc
};
AtForm.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  reportSubmit: _index4.default.bool,
  onSubmit: _index4.default.func,
  onReset: _index4.default.func
};
exports.default = AtForm;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtForm));