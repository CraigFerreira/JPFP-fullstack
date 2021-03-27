import axios from 'axios'
import React, { Component } from 'react'
import '../src/style.css'
import {addStudentData} from '../src/actions/index.js'
import { connect } from 'react-redux'

class AddStudent extends Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName: '',
            email: ''
        }
        this.updateState= this.updateState.bind(this)
        this.updateStudentData= this.updateStudentData.bind(this)
    }
    updateState(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    async updateStudentData(event){
        event.preventDefault()
        // await axios.post('/students', this.state)
        this.props.createNewStudent(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        })
    }

    render(){
        return(
            <div>
                <form className='form' onSubmit={this.updateStudentData}>
                    <h3>Add Student</h3>
                    <label>Student First Name</label>
                    <input name='firstName' value={this.state.firstName} onChange={this.updateState} type='text'></input>
                    <label>Student Last Name</label>
                    <input name='lastName' value={this.state.lastName} onChange={this.updateState} type='text'></input>
                    <label>Student Email Address</label>
                    <input name='email' value={this.state.email} onChange={this.updateState} type='text'></input>
                    <button>Add New Student!</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createNewStudent: (formData)=>{
            dispatch(addStudentData(formData))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddStudent)