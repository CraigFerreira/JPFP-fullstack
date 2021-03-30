import React, { Component } from 'react'
import {connect} from 'react-redux'

class UpdateStudent extends Component{
    constructor(){
        super()
        this.state={
            studentName:'',
            studentAddress:'',
        }
        this.changeStudentData= this.changeStudentData.bind(this)
        this.updateCurrentStudent= this.updateCurrentStudent.bind(this)
    }
    changeStudentData(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    updateStudentCampus(event){
        event.preventDefault()
        // console.log('update campus data to',this.state, 'id', this.props.currCampus.SingleCampus.id)
        // console.log('props props', this.props)
        // console.log('curr campus props', this.props.currCampus.campus[0].id)
        const currId= this.props.currStudent.student[0].id
        console.log('curr curr id', currId)
        // console.log('update campus data to',this.state, 'id', currId)
        const currState= this.state
        const data= {currState, id: currId}
        console.log('data', data)
        console.log('updated student state to',this.state)
        this.props.updateStudent(data)
        this.props.updateState()
        this.setState({
            studentName:'',
            studentAddress:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.updateCurrentStudent}>
                    <label>Update Student Name</label>
                    <input name='studentName' value={this.state.studentName} onChange={this.changeStudentData} type='text'></input>
                    <label>Update Student Address</label>
                    <input name='studentAddress' value={this.state.studentAddress} onChange={this.changeStudentData} type='text'></input>
                    <button>Update Student Info !</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        updateStudent: (formData)=>{
            dispatch(UpdateStudentData(formData))
        }
    }
}



export default connect(null, mapDispatchToProps)(UpdateStudent)