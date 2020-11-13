import React from 'react'
// import {Route} from 'react-router-dom'
import Header from './header/Header'
import Tap from './Tab/Tab.jsx'
class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Tap/>
            </div>
        )
    }
}
export default Layout