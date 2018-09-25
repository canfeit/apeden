import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem, AtTabs, AtTabsPane, AtTabBar } from "taro-ui";
import "./index.css";

// const db = wx.cloud.database();
import { jokes } from "../db";

export default class extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  constructor() {
    jokes.get({
      success: res => {
        this.setState({ jokes: res.data });
      }
    });
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(index) {
    this.setState({
      current: index
    });
  }
  handleClickTabBar(index) {
    switch (index) {
      case 2:
        Taro.redirectTo({
          url: "/pages/addJoke/index"
        });
        break;
    }
    this.setState({
      currentTabBar: index
    });
  }
  render() {
    return (
      <View>
        <AtTabs
          tabList={[{ title: "最新" }, { title: "劲爆" }, { title: "段子手" }]}
          current={this.state.current}
          onClick={this.handleClick}
        >
          <AtTabsPane>
            <AtList>
              {this.state.jokes &&
                this.state.jokes.map(joke => (
                  <AtListItem title={joke.content} />
                ))}
            </AtList>
          </AtTabsPane>
          <AtTabsPane>2</AtTabsPane>
          <AtTabsPane>3</AtTabsPane>
        </AtTabs>
        <AtTabBar
          fixed
          tabList={[
            { iconType: "bullet-list" },
            { iconType: "image" },
            { iconType: "add" },
            { iconType: "heart" },
            { iconType: "user" }
          ]}
          onClick={this.handleClickTabBar}
          current={this.state.currentTabBar}
        />
      </View>
    );
  }
}
