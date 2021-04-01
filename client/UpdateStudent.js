import React, { Component } from 'react'
import {connect} from 'react-redux'
import {UpdateStudentData} from '../src/actions/index'

class updateStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            email: ''
        }
        this.changeStudentData= this.changeStudentData.bind(this)
        this.updateStudentData= this.updateStudentData.bind(this)
    }

    changeStudentData(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    updateStudentData(event){
        event.preventDefault()
        // this.props.updateStudent(this.state)
        const data= {id: this.props.singleStudentProps.match.params.studentId, currState: this.state}
        console.log('props props', this.props)
        this.props.updateStudent(data)
        this.props.updateCurrStudent()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.updateStudentData}>
                    <label>Update Student First Name</label>
                    <input onChange={this.changeStudentData} name='firstName' type='text'></input>
                    <label>Update Student Last Name</label>
                    <input onChange={this.changeStudentData} name='lastName' type='text'></input>
                    <label>Update Student Email</label>
                    <input onChange={this.changeStudentData} name='email' type='text'></input>
                    <button>Update Student Info !</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        updateStudent: (formData)=>{
            dispatch(UpdateStudentData(formData))
        }
    }
}

export default connect(null, mapDispatchToProps)(updateStudent)