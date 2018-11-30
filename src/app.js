import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import dva from "./dva";
import models from "./models";
import Index from "./pages/index";
import "./app.css";
wx.cloud.init({
  traceUser: true
});
if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5")
  require("nerv-devtools");
const app = dva.createApp({
  initialState: {},
  models: models
});
const store = app.getStore();

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
