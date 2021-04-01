import React, { Component } from 'react'
import '../src/style.css'

class Unregister extends Component{
    UnregisterStudent(){
        console.log(this.props.update)
    }
    render(){
        return(
            <div>
                <button onClick={this.UnregisterStudent} className='unregister'>Unregister</button>
            </div>
        )
    }
}

export default Unregister