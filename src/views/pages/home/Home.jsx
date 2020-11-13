import React from 'react'
import home from './home.css'
import Swiper from './swiper/Swiper.jsx'
import Search from './search/Search.jsx'
import HotCate from '@/views/pages/home/hotcate/Hotcate.jsx'
import Good from '@/views/pages/home/goodfood/Good.jsx'
class Home extends React.Component{
    render(){
        return(
            <div className='home_container'>
                <Swiper></Swiper>
                <Search></Search>
                <HotCate></HotCate>
                <Good/>
                {/* <div className="home_content"></div> */}
            </div>
        )
    }
}
export default Home