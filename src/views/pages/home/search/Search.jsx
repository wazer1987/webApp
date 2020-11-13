import React from 'react'
import search from './search.css'
import searchImg from '@/asset/search.png'
class Search extends React.Component{
    render(){
        return(
            <div className="search_container">
               <div className="search_content">
                <img src={searchImg} alt=""/>
                <span>想吃什么搜这里,如川菜</span>
               </div>
            </div>
        )
    }
}
export default Search
