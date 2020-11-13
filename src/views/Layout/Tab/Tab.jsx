import React from 'react'
import {connect} from 'react-redux'
import { TabBar } from 'antd-mobile';
import {icon} from './tabItem.js'
import Home from '../../pages/home/Home.jsx'
import {ACTIONS} from '@/store/actionsType.js'
import {withRouter} from 'react-router-dom'
let icondata = icon()
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '菜谱大全',
      hidden: false,
      fullScreen: true,
      showmap:this.propsshowMap,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  componentDidMount(){
      
  }
  render() {
    if(!this.props.showMap){
      icondata = icondata.filter(item => {
        return item.title!== '美食地图'
      })
    }else{
      icondata = icon()
    }
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          style={{zIndex:-1}}
        >
            {
            icondata.map(item => 
                <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${item.default}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${item.active}) center center /  21px 21px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === `${item.title}`}
                onPress={() => {
                  this.setState({
                    selectedTab: `${item.title}`
                  });
                  // store.dispatch(setTitle(item.title))
                  //三、然后我们就可以使用this.props 触发这个函数 传入我们 需要的值 也就是TAB的每一项
                  this.props.setHeader(item.title)
                }}
              >
                {item.renderContent()}
              </TabBar.Item>
            )}
        </TabBar>
      </div>
    );
  }
}
//二、这是我们传入的第二个函数 首先它必须要返回一个对象 默认形参会有dipatch 
//这样就把我们返回的对象 挂载到了我们当前实例上 props 上 
const setHeader = (dispatch) => {
  return {
    setHeader:(data) => {
      dispatch({type:ACTIONS.SETHEADER,data})
    }
  }
}
//一、首先要引入我们的 conect 从react-redux中 
//然后把我们的组件包装一下 从而 让我们传入的函数 能挂载到props上
//由于我们这里是 点击tab 改变公共数据 所以这里我们之传入第二个参数
const showmap = state => {
  return {
    ...state
  }
}
export default connect(showmap,setHeader)(Tab)