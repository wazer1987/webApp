import React from 'react'
import Fheader from './classheader/fheader'
import Search from '@/views/pages/home/search/Search.jsx'
import Classify from './classify/classify'
import Material from './classify/classify'
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
class Fication extends React.Component{
    render(){
        return (
            <Router>
            <div className="fication_container">
               <Fheader></Fheader>
               <Search></Search>
               <Switch>
               <Route path="/categoryfacation" render={() => <Classify type={'category'} defaultItem={'热门'}/>} />
               <Route path="/materialfacation" render={() => <Material type={'material'} defaultItem={'肉类'}/>} />
               <Redirect from="/" to="/categoryfacation"/>
               </Switch>   
            </div>
            </Router>
        )
    }
}

export default Fication