import React, { Component } from 'react' 


class CoordinatesButton extends Component{

    coordinates = (e) => {
       this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }

    render(){
        return(
            <div>
                <button onClick={this.coordinates}></button>
            </div>
        )
    }
}

export default CoordinatesButton
