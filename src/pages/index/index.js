import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { getFreshJokes } from "../../service";
import TabBar from "../../components/TabBar";
import JokeList from "../../components/JokeList";
import "./index.css";
@connect(({ common }) => ({ ...common }))
export default class extends Component {
  config = {
    navigationBarTitleText: "新鲜段子",
    enablePullDownRefresh: true
  };
  componentDidShow() {
    getFreshJokes(this.props.dispatch);
  }
  onPullDownRefresh = () => {
    console.log("下划手势刷新段子");
    getFreshJokes(this.props.dispatch);
  };
  onReachBottom = () => {
    console.log("上划手势");
  };
  render() {
    return (
      <View>
        <JokeList jokes={this.props.freshJokes} />
        <TabBar />
      </View>
    );
  }
}
