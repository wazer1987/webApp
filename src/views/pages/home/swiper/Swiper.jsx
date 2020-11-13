import React from 'react'
import {connect} from 'react-redux'
import { Carousel } from 'antd-mobile';
import {ACTIONS} from '@/store/actionsType.js'
import Img1 from '../../../../asset/01.jpg'
import Img2 from '../../../../asset/02.jpg'
class Swiper extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [Img1,Img2],
          });
        }, 100);
       
        this.props.setSwiperList()
      }
      componentDidUpdate(){
      }
      render() {
        return (
            <Carousel
              autoplay={true}
              infinite
            >
              {this.props.swiper.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
        );
      }
}
const setList = (dispatch) => {
  return{
    setSwiperList:() => {
      dispatch({
        type:ACTIONS.GETSWIPER
      })
    }
  }
}
const getList = (state) => {
  return {
    ...state
  }
}
export default connect(getList,setList)(Swiper)