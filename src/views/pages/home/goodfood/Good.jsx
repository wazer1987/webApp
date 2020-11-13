import React from 'react'
import {connect} from 'react-redux'
import goodfood from './goodfood.css'
import img from '@/asset/01.jpg'

class GoodFood extends React.Component{
    render(){
        return(
            
            <div className="good_container">
               <header className="hotcate_header color">
                   精品好菜
               </header>
               <div className="good_list">
                    <ul>
                        {/* <li>
                        <div>
                            <img src={img} alt=""/>
                            <div  className='text_container'>
                                <h4>西红柿炒饭</h4>
                                <span>好评如潮</span>
                            </div>
                        </div>
                        </li> */}
                    {this.props.swiper.map( item =>  
                        <li key={item.id}>
                        <div>
                            <img src={item.img} alt=""/>
                            <div  className='text_container'>
                                <h4>{item.text}</h4>
                                <span>{item.discription}</span>
                            </div>
                        </div>
                        </li>
                    )}
                    </ul>
               </div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        ...state
    }
}
export default connect(mapState)(GoodFood)