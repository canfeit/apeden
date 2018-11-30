import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { AtList, AtListItem } from "taro-ui";
import { getUsers } from "../../service";

@connect(({ common }) => ({ ...common }))
export default class extends Component {
  config = {
    navigationBarTitleText: "段子手",
    enablePullDownRefresh: true
  };
  componentDidShow() {
    getUsers(this.props.dispatch);
  }
  onPullDownRefresh = () => {
    getUsers(this.props.dispatch);
  };

  render() {
    return (
      <AtList>
        {this.props.users &&
          this.props.users.map(
            user =>
              user.nickName && (
                <AtListItem
                  title={user.nickName}
                  extraText={"段子:" + user.jokes}
                />
              )
          )}
      </AtList>
    );
  }
}
