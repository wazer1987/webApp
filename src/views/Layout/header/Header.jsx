import React from 'react'
import header from './header.css'
import {connect} from 'react-redux'
class Header extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     titile:this.props.state
        // }
    }
    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({
    //             titile:store.getState()
    //         })
    //     })
    // }

    render(){
        return(
        this.props.header === '分类'?'':<div className='title'>{this.props.header}</div>
        )
        // return(
        // <div className='title'>{this.props.header}</div>
        // )
        
    }
}
//二 在connect传入的第第一个函数 这个默认的形参 就是 你的状态数据 如果有改变 就是你改变之后的状态数据  
//并且 把这个函数的返回值 挂载到了我们的props上 我们就可以通过this.props去使用了
const getTitle = (state)  => {
    return {
        ...state
    }
}
//一、我们的header需要使用这个公共数据 所以传入一个对象进去
export default connect(getTitle)(Header)