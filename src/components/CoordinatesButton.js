import React, { Component } from 'react' 


class CoordinatesButton extends Component{

    coordinates = (e) => {
       return [e.clientX,e.clientY]
    }

    render(){
        return(
            <div>
                <button onClick={this.props.onRecieveCoordinates(coordinates)}></button>
            </div>
        )
    }
}

export default CoordinatesButton
