import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtList, AtListItem, AtTabs, AtTabsPane, AtTabBar } from "taro-ui";
import "./index.css";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {
    this.setState({
      current: 0
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick(index) {
    this.setState({
      current: index
    });
  }
  render() {
    return (
      <View className="index">
        <AtTabs
          current={this.state.current}
          tabList={[{ title: "最新" }, { title: "劲爆" }, { title: "段子手" }]}
          onClick={this.handleClick}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页一的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="font-size:18px;text-align:center;height:100px;">
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs>
        <AtTabBar
          fixed
          tabList={[
            { iconType: "bullet-list" },
            { iconType: "image" },
            { iconType: "add" },
            { iconType: "heart" },
            { iconType: "user", dot: true }
          ]}
        />
      </View>
    );
  }
}
