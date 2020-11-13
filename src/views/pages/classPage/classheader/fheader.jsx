import React from 'react'
import fheader from './fheader.css'
import { withRouter } from 'react-router-dom'
class Fheader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentItem :'left'
        }
    }
    componentDidMount(){
        
        if(this.props.location.pathname === '/categoryfacation'){
            this.setState({
                currentItem:'left'
            })
        }else{
            this.setState({
                currentItem:'right'
            })
        }
    }
    handler(currentItem){
        this.setState({
            currentItem
        })
       switch (currentItem) {
           case 'left':
               this.props.history.push('/categoryfacation')
               break;
            case 'right':
                this.props.history.push('/materialfacation')
                break;
           default:
            this.props.history.push('/categoryfacation')
               break;
       }
    }
    render(){
        return (
            <header className='fheader_title'>
                <ul className="fheader_content">
                    <li className={this.state.currentItem === 'left'?'last_li':'last_li anitate'} ></li>
                    <li className={this.state.currentItem === 'left'?'active':''} onClick={() => {this.handler('left')}}>分类</li>
                    <li className={this.state.currentItem === 'right'?'active':''} onClick={() => {this.handler('right')}}>食材</li>
                </ul>
            </header>
        )
    }
}
export default withRouter(Fheader)