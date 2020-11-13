import React from 'react'
import mapcss from './map.css'
class FoodMap extends React.Component{
    render(){
        return (
            <div className="map_container">
                <iframe src="/map.html"  frameBorder="0" style={{width:'100%',height:'100%'}}></iframe>
            </div>
        )
    }
}

export default FoodMap