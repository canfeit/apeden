import Taro, { Component } from "@tarojs/taro";
import { AtTextarea, AtButton } from "taro-ui";
import "./index.css";
// const jokes = wx.cloud.database().collection('jokes');
import { jokes } from "../db";
export default class Index extends Component {
  config = {
    navigationBarTitleText: "写段子"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onContent({ target: { value } }) {
    this.changeTimer && clearTimeout(this.changeTimer);
    this.changeTimer = setTimeout(() => {
      this.setState({
        content: value
      });
    }, 100);
  }

  onSubmit() {
    jokes
      .add({
        data: { content: this.state.content }
      })
      .then(() => {
        Taro.redirectTo({
          url: '/pages/index/index',
        });
      });
  }

  render() {
    return (
      <View>
        <AtTextarea
          value={this.state.content}
          maxlength="200"
          placeholder="段子内容..."
          onChange={this.onContent.bind(this)}
        />
        <AtButton onClick={this.onSubmit}>提交</AtButton>
      </View>
    );
  }
}
