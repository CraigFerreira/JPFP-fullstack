import axios from 'axios'
import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {deleteStudentData} from '../src/actions/index'

class DeleteStudent extends Component{
    constructor(){
        super()
        this.deleteCurrentStudent= this.deleteCurrentStudent.bind(this)

    }
    deleteCurrentStudent(data){
        data.deleteStudent(data.props.id)
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.deleteCurrentStudent(this.props)}} className='deleteButton'>X</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteStudent: (id)=>{
            dispatch(deleteStudentData(id))
        }
    }
}


export default connect(null, mapDispatchToProps)(DeleteStudent)