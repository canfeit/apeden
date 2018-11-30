import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import { create } from "dva-core";
import loading from "dva-loading";
import models from "./models";
import Index from "./pages/index";
import "./app.css";
// 在 h5 环境中开启 React Devtools
if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5")
  require("nerv-devtools");

wx.cloud.init({
  traceUser: true
});

const app = create();
app.use(loading());
models.forEach(model => app.model(model));
app.start();
const store = app._store;

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/index/hot",
      "pages/index/User",
      "pages/addJoke/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "apeden",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "最新"
        },
        {
          pagePath: "pages/index/hot",
          text: "劲爆"
        },
        {
          pagePath: "pages/index/User",
          text: "段子手"
        }
      ],
      // color: "",
      // selectedColor: "",
      // backgroundColor: "#fff",
      position: "top"
    }
  };
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
Taro.render(<App />, document.getElementById("app"));
