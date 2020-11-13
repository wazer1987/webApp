import React from 'react'
import hotcate from './hotcate.css'
import {getHotcat} from '@/api/hotcate'
import { Grid } from 'antd-mobile';



const data1 = Array.from(new Array(9)).map(() => ({
  title:'xixi',
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));


class HotCate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hotList :[]
        }
    }
    async componentDidMount(){
       const {data:{hotcate}} = await getHotcat()
       this.setState({
        hotList:hotcate
       },() => {
       })
    }
    render(){
        return(
            <div className="hotcate_container">
                <header className="hotcate_header">热门菜系</header>
                <Grid data={this.state.hotList}
                hasLine={false}
                columnNum={3}
                renderItem={dataItem => (
                    <div className="hotcate_item">
                        <img src={dataItem.icon} alt=""/>
                        <span>{dataItem.title}</span>
                    </div>
                )}
                />
            </div>
        )
    }
}
export default HotCate