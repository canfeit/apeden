import Taro, { Component } from '@tarojs/taro';
import { AtInput, AtTextarea, AtButton } from 'taro-ui';
import './index.css';
// const jokes = wx.cloud.database().collection('jokes');
import { jokes } from '../db';
export default class Index extends Component {
  config = {
    navigationBarTitleText: '写段子',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onTitle(value) {
    this.setState({ newJoke: { ...this.state.newJoke, title: value } });
  }

  onContent({ target: { value } }) {
    this.setState({ newJoke: { ...this.state.newJoke, content: value } });
  }
  onContentFocus(e) {
    this.contentE = e;
  }
  onSubmit() {
    const { newJoke } = this.state;
    console.log(this.contentE.target.value);
    if (newJoke.title && newJoke.content)
      jokes
        .add({
          data: newJoke,
        })
        .then(() => {
          Taro.navigateTo({
            url: '/pages/index/index',
          });
        });
  }
  render() {
    return (
      <View>
        <AtInput placeholder="段子标题" onChange={this.onTitle.bind(this)} />
        <AtTextarea
          maxlength="200"
          placeholder="段子内容..."
          onChange={this.onContent.bind(this)}
          onFocus={this.onContentFocus.bind(this)}
        />
        <AtButton onClick={this.onSubmit}>提交</AtButton>
      </View>
    );
  }
}
