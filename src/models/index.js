export default [
  {
    namespace: "common",
    state: {},
    reducers: {
      save(state, { payload }) {
        return { ...state, ...payload };
      }
    }
  }
];
