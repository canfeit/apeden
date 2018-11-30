import Taro, { Component } from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
export default class extends Component {
  handleClickTabBar(index) {
    switch (index) {
      case 2:
        Taro.navigateTo({
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
    );
  }
}
