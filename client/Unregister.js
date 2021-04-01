import React, { Component } from 'react'
import {connect} from 'react-redux'
import {unlinkStudentFromCampus} from '../src/actions/index'
import '../src/style.css'

class Unregister extends Component{
    constructor(){
        super()
        this.UnregisterStudent= this.UnregisterStudent.bind(this)
    }
    UnregisterStudent(){
        console.log('unregister props',this.props)
        const data={
            campusId:this.props.campusId,
            studentId: this.props.studentId
        }
        this.props.unregisterCurrStudent(data)
        this.props.updateStudentList()
    }
    render(){
        return(
            <div>
                <button onClick={this.UnregisterStudent} className='unregister'>Unregister</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        unregisterCurrStudent: (currStudentData)=>{
            dispatch(unlinkStudentFromCampus(currStudentData))
        }
    }
}

export default connect(null, mapDispatchToProps)(Unregister)