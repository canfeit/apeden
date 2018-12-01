import Taro, { Component } from "@tarojs/taro";
import { AtList, AtListItem, AtIcon } from "taro-ui";
import { cheer } from "../utils/service";

export default class extends Component {
  onCheer(docId, key) {
    cheer(docId, key);
  }

  render() {
    return (
      <AtList>
        {this.props.jokes &&
          this.props.jokes.map(joke => (
            <View>
              <AtListItem title={joke.content} />
              <AtIcon
                value="heart-2"
                onClick={this.onCheer.bind(this, joke._id, "good")}
              />
              {joke.good}
              <AtIcon
                value="heart"
                onClick={this.onCheer.bind(this, joke._id, "boo")}
              />
              {joke.boo}
            </View>
          ))}
      </AtList>
    );
  }
}
