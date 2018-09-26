import Taro, { Component } from '@tarojs/taro';
import { AtList, AtListItem, AtTabs, AtTabsPane, AtTabBar, AtIcon } from 'taro-ui';
import './index.css';

// const db = wx.cloud.database();
import { jokes } from '../db';

export default class extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {
    jokes.get({
      success: res => this.setState({ jokes: res.data }),
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
    switch (index) {
      case 2:
        Taro.redirectTo({
          url: '/pages/addJoke/index',
        });
        break;
    }
    this.setState({
      currentTabBar: index,
    });
  }

  onCheer(docId, key) {
    wx.cloud
      .callFunction({
        name: 'cheer',
        data: { docId, key },
      })
      .then(res => {
        console.log(res.result); // 3
      })
      .catch(console.error);
  }

  render() {
    return (
      <View>
        <AtTabs
          tabList={[{ title: '最新' }, { title: '劲爆' }, { title: '段子手' }]}
          current={this.state.current}
          onClick={this.handleClick}
        >
          <AtTabsPane>
            <AtList>
              {this.state.jokes &&
                this.state.jokes.map(joke => (
                  <View>
                    <AtListItem title={joke.content} />
                    <AtIcon value="heart-2" onClick={this.onCheer.bind(this, joke._id, 'good')} />
                    {joke.good}
                    <AtIcon value="heart" onClick={this.onCheer.bind(this, joke._id, 'boo')} />
                    {joke.boo}
                  </View>
                ))}
            </AtList>
          </AtTabsPane>
          <AtTabsPane>2</AtTabsPane>
          <AtTabsPane>3</AtTabsPane>
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
