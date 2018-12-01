import Taro, { Component } from "@tarojs/taro";
import { AtTextarea } from "taro-ui";
import { addJoke, upsertUser } from "../../utils/service";
import "./index.css";
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

  onSubmit({ detail: { userInfo } }) {
    addJoke({
      content: this.state.content,
      userName: userInfo && userInfo.nickName,
      createAt: new Date().getTime()
    }).then(() => {
      upsertUser(userInfo).catch(console.error);
      Taro.navigateBack({
        delta: 1
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
        <Button
          openType="getUserInfo"
          lang="zh_CN"
          onGetUserInfo={this.onSubmit}
        >
          提交
        </Button>
      </View>
    );
  }
}
