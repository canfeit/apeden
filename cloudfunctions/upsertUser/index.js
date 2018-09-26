const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const users = db.collection('users');
exports.main = async ({ userInfo: { openId }, data }) =>
  (await users.doc(openId).update({
    data: {
      ...data,
      jokes: db.command.inc(1),
    },
  })).stats.updated ||
  (await users.add({
    data: {
      ...data,
      jokes: 1,
      _id: openId,
    },
  }))._id;
