"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = [{
  namespace: "common",
  state: {},
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;

      return _extends({}, state, payload);
    }
  }
}];