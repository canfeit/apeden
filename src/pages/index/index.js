import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtList, AtListItem, AtTabs, AtTabsPane, AtTabBar } from 'taro-ui';
import './index.css';
const db = wx.cloud.database();

export default class extends Component {
  config = {
    navigationBarTitleText: '首页',
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    db.collection('jokes').get({
      success: res => {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]
        console.log(res);
        this.setState({ jokes: res.data });
      },
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick(index) {
    this.setState({
      current: index,
    });
  }
  handleClickTabBar(index) {
    index === 2 &&
      Taro.navigateTo({
        url: '/pages/addJoke/index',
      });
    this.setState({
      currentTabBar: index,
    });
  }
  render() {
    return (
      <View className="index">
        <AtTabs
          current={this.state.current}
          tabList={[{ title: '最新' }, { title: '劲爆' }, { title: '段子手' }]}
          onClick={this.handleClick}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              <AtList>
                {this.state.jokes &&
                  this.state.jokes.map(joke => (
                    <AtListItem title={joke.title} onClick={this.handleClick} />
                  ))}
              </AtList>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
        <AtTabBar
          fixed
          tabList={[
            { iconType: 'bullet-list' },
            { iconType: 'image' },
            { iconType: 'add' },
            { iconType: 'heart' },
            { iconType: 'user' },
          ]}
          onClick={this.handleClickTabBar}
          current={this.state.currentTabBar}
        />
      </View>
    );
  }
}
