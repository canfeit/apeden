import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtForm, AtInput, AtTextarea, AtButton } from 'taro-ui';
import './index.css';
const db = wx.cloud.database();

export default class Index extends Component {
  config = {
    navigationBarTitleText: '写段子',
  };
  constructor(props) {
    super(props);
    this.newJoke = {};
  }
  componentWillMount() {
    db.collection('jokes').get({
      success: res => {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]
        // console.log(res);
        // this.setState({ jokes: res.data });
      },
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onTitle(value) {
    this.newJoke.title = value;
  }
  onContent(e) {
    this.newJoke.content = e.target.value;
  }
  onSubmit(e) {
    db.collection('jokes')
      .add({
        // data 字段表示需新增的 JSON 数据
        data: this.newJoke,
      })
      .then(res => {
        Taro.navigateTo({
          url: '/pages/index/index',
        });
      });
  }
  render() {
    return (
      <View className="index">
        <AtForm onSubmit={this.onSubmit.bind(this)} onReset={this.onReset.bind(this)}>
          <AtInput
            name="value1"
            title="标题"
            type="text"
            placeholder="单行文本"
            onBlur={this.onTitle.bind(this)}
          />
          <AtTextarea
            value={this.state.value}
            // onChange={this.handleChange}
            maxlength="200"
            placeholder="段子内容..."
            onBlur={this.onContent.bind(this)}
          />
          <AtButton type="primary" size="small" onClick={this.onSubmit} formType="submit">
            提交
          </AtButton>
          <AtButton type="primary" size="small" formType="reset">
            重置
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
