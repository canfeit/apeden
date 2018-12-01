import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { getHotJokes } from "../../utils/service";
import TabBar from "../../components/TabBar";
import JokeList from "../../components/JokeList";
import "./index.css";
@connect(({ common }) => ({ ...common }))
export default class extends Component {
  config = {
    navigationBarTitleText: "热门段子",
    enablePullDownRefresh: true
  };
  componentDidShow() {
    getHotJokes(this.props.dispatch);
  }
  onPullDownRefresh = () => {
    getHotJokes(this.props.dispatch);
  };

  render() {
    return (
      <View>
        <JokeList jokes={this.props.hotJokes} />
        <TabBar />
      </View>
    );
  }
}
