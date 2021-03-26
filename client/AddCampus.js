import React, { Component } from 'react'
import '../src/style.css'

export default class AddCampus extends Component{
    constructor(){
        super()
        this.state={
            campusName: '',
            campusAdress: ''
        }
        this.updateState= this.updateState.bind(this)
    }
    updateState(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    updateCampusData(event){
        event.preventDefault()
        
    }

    render(){
        return(
            <div>
                <form className='form'>
                    <h3>Add Campus</h3>
                    <label>Campus Name</label>
                    <input name='campusName' onChange={this.updateState} type='text'></input>
                    <label>Campus Address</label>
                    <input name='campusAdress' onChange={this.updateState} type='text'></input>
                    <button>Add New Campus!</button>
                </form>
            </div>
        )
    }
}