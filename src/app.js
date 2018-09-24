import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';

import './app.css';
wx.cloud.init({
  traceUser: true,
});
class App extends Component {
  config = {
    pages: ['pages/index/index', 'pages/addJoke/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
