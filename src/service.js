const jokes = wx.cloud.database().collection("jokes");
const users = wx.cloud.database().collection("users");

export const cheer = (docId, key) => {
  wx.cloud.callFunction({
    name: "cheer",
    data: { docId, key }
  });
};
export const getHotJokes = dispatch => {
  jokes
    .orderBy("good", "desc")
    .get()
    .then(({ data }) =>
      dispatch({
        type: "common/save",
        payload: { hotJokes: data }
      })
    );
};
export const getFreshJokes = dispatch => {
  jokes
    .orderBy("createAt", "desc")
    .get()
    .then(({ data }) =>
      dispatch({
        type: "common/save",
        payload: { freshJokes: data }
      })
    );
};
export const getUsers = dispatch => {
  users
    .orderBy("jokes", "desc")
    .get()
    .then(({ data }) =>
      dispatch({
        type: "common/save",
        payload: { users: data }
      })
    );
};
export const addJoke = data => jokes.add({ data });
export const upsertUser = userInfo => {
  return wx.cloud.callFunction({
    name: "upsertUser",
    data: { data: userInfo }
  });
};
