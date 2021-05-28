import React, { Component } from 'react' 


class DelayedButton extends Component{

    clickEvent = (e) => {
        e.persist()
        setTimeout(()=>
        this.props.onDelayedClick(e),this.props.delay)
    }

    render(){
        return(
            <div>
                <button onClick={this.clickEvent}></button>
            </div>
        )
    }
}

export default DelayedButton
