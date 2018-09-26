const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const jokes = db.collection('jokes');
exports.main = ({ docId, key }) =>
  jokes.doc(docId).update({
    data: {
      [key]: db.command.inc(1),
    },
  });
