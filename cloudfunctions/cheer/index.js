const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
exports.main = async (event, context) => {
  try {
    return await db
      .collection('jokes')
      .doc(event.docId)
      .update({
        data: {
          [event.key]: db.command.inc(1),
        },
      });
  } catch (e) {
    console.error(e);
  }
};
