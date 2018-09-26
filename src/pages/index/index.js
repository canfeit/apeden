import Taro, { Component } from '@tarojs/taro';
import { AtList, AtListItem, AtTabs, AtTabsPane, AtTabBar, AtIcon } from 'taro-ui';
import { jokes, users } from '../db';
import './index.css';

export default class extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {
    jokes.get({
      success: ({ data }) => this.setState({ freshJokes: data }),
    });
    jokes
      .orderBy('good', 'desc')
      .get()
      .then(({ data }) => this.setState({ hotJokes: data }));
    users
      .orderBy('jokes', 'desc')
      .get()
      .then(({ data }) => this.setState({ users: data }));
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
      .then(console.log)
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
              {this.state.freshJokes &&
                this.state.freshJokes.map(joke => (
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
          <AtTabsPane>
            <AtList>
              {this.state.hotJokes &&
                this.state.hotJokes.map(joke => (
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
          <AtTabsPane>
            <AtList>
              {this.state.users &&
                this.state.users.map(
                  user =>
                    user.nickName && (
                      <AtListItem title={user.nickName} extraText={'段子:' + user.jokes} />
                    )
                )}
            </AtList>
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
