'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jokes = exports.jokes = wx.cloud.database().collection('jokes');
var users = exports.users = wx.cloud.database().collection('users');