import React from 'react'
import {  Switch } from 'antd-mobile';
import {connect} from 'react-redux'
import {ACTIONS} from '@/store/actionsType'
class More extends React.Component{
    state = {
        checked:this.props.showMap
    }
    showMap(){
        this.props.shocheck(this.state.checked)
    }
    componentDidMount(){
        // console.log(this.props,'------more')
        // this.setState({
        //     checked:this.props.showMap
        // })
    }
    render(){
        return(
            <div style={{paddingTop:'1.8rem'}}>
                是否显示地图
                <Switch
                    checked={this.state.checked}
                    onChange={() => {
                    this.setState({
                        checked: !this.state.checked,
                    },() => {
                        this.showMap()
                    });                   
                    }}
                />
            </div>
        )
    }
}
const shocheck = (dispatch) => {
    return {
        shocheck : (data) => {
            dispatch({
                type:ACTIONS.SHOWMAP,
                data
            })
        }
    }
}
const showmap = state => {
    return {
        ...state
    }
}
export default connect(showmap,shocheck)(More)