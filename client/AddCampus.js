import axios from 'axios'
import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {addCampusData} from '../src/actions/'

class AddCampus extends Component{
    constructor(){
        super()
        this.state={
            campusName: '',
            campusAdress: ''
        }
        this.updateState= this.updateState.bind(this)
        this.updateCampusData= this.updateCampusData.bind(this)
    }
    updateState(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    async updateCampusData(event){
        event.preventDefault()
        // await axios.post('/campus', this.state)
        this.props.createNewCampus(this.state)
        this.setState({
            campusName:'',
            campusAdress: ''
        })
    }
    clearFields(){
        value=''
    }

    render(){
        console.log('propsprops',this.props)
        return(
            <div>
                <form className='form' >
                    <h3>Add Campus</h3>
                    <label>Campus Name</label>
                    <input name='campusName' value={this.state.campusName} onChange={this.updateState} type='text'></input>
                    <label>Campus Address</label>
                    <input name='campusAddress' value={this.state.campusAdress} onChange={this.updateState} type='text'></input>
                    <button onClick={()=>{this.updateCampusData}}>Add New Campus!</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
 return {
     createNewCampus: (formData)=>{
         dispatch(addCampusData(formData))
     }
 }
}

export default connect(null , mapDispatchToProps)(AddCampus)