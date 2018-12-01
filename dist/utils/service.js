"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertUser = exports.addJoke = exports.getUsers = exports.getFreshJokes = exports.getHotJokes = exports.cheer = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jokes = wx.cloud.database().collection("jokes");
var users = wx.cloud.database().collection("users");

var cheer = exports.cheer = function cheer(docId, key) {
  wx.cloud.callFunction({
    name: "cheer",
    data: { docId: docId, key: key }
  });
};
var getHotJokes = exports.getHotJokes = function getHotJokes(dispatch) {
  _index2.default.showLoading({ title: "刷新中" });
  jokes.orderBy("good", "desc").get().then(function (_ref) {
    var data = _ref.data;
    return dispatch({
      type: "common/save",
      payload: { hotJokes: data }
    });
  });
};
var getFreshJokes = exports.getFreshJokes = function getFreshJokes(dispatch) {
  _index2.default.showLoading({ title: "刷新中" });
  jokes.orderBy("createAt", "desc").get().then(function (_ref2) {
    var data = _ref2.data;
    return dispatch({
      type: "common/save",
      payload: { freshJokes: data }
    });
  });
};
var getUsers = exports.getUsers = function getUsers(dispatch) {
  _index2.default.showLoading({ title: "刷新中" });
  users.orderBy("jokes", "desc").get().then(function (_ref3) {
    var data = _ref3.data;
    return dispatch({
      type: "common/save",
      payload: { users: data }
    });
  });
};
var addJoke = exports.addJoke = function addJoke(data) {
  return jokes.add({ data: data });
};
var upsertUser = exports.upsertUser = function upsertUser(userInfo) {
  return wx.cloud.callFunction({
    name: "upsertUser",
    data: { data: userInfo }
  });
};