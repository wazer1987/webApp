import React from 'react'
import { connect } from 'react-redux'
import classify from './classify.css'
import {ACTIONS} from '@/store/actionsType.js'
class Classify extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            leftList:{},
            currentIndex:0,
            currentItem:this.props.defaultItem,
            currentType:this.props.type
        }
    }
    // 在数据改变的时候调用钩子
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props,'-----props',state,'-----state')
    //     if(props.defaultItem!==state.currentItem){
    //         return {
    //             ...state,
    //             // defaultItem:props.defaultItem,
    //             currentItem:props.defaultItem
    //         }
    //     }
    //     return null
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps, prevState,'----')
        if(nextProps.type !== prevState.currentType){
            return {
               ...prevState,
               currentType:nextProps.type,
               currentItem:nextProps.defaultItem 
            }
        }
        return null
      }
    componentDidMount(){
        this.props.getList()
    }
    handler(index,item){
        this.setState({
            currentIndex:index,
            currentItem:item
        })
    }
    render(){
        const leftContent = this.props.facation[this.state.currentType]? Object.keys(this.props.facation[this.state.currentType]) : []
        const rightContent =leftContent.length !== 0? this.props.facation[this.state.currentType][this.state.currentItem] : []
        return(
            <div className="classify_container">
               <div className="classify_left">
                    <ul>
                        {
                           leftContent.map((item,index) => {
                            return <li key={item} className={this.state.currentItem === item?'classify_active':''} onClick={() => {this.handler(index,item)}}>{item}</li>
                           })
                        }
                    </ul>
                    
               </div>
               <div className="classify_right">
                    <ul>
                       {rightContent && rightContent.map( (item,index) => 
                        <li key={index}>{item}</li>
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
const getList = (dispatch) => {
    return {
        getList:() => {
            dispatch({
                type:ACTIONS.GETFACATION
            })
        }
    }
}
export default connect(mapState,getList)(Classify)