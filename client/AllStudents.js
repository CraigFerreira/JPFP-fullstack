import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {fetchStudentData} from '../src/actions'


class AllStudents extends Component{
    constructor(props){
        super(props)
        this.renderStudentData= this.renderStudentData.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchStudentData()
    }

    renderStudentData(){
        console.log('student data',this.props)
        return(
            <div>
                <h1>Student list</h1>
               { 
                    this.props.students.map((curr)=>{
                        return (
                            <ul className='campus' key={curr.name}>
                                <li>First Name: {curr.firstName}</li>
                                <li> Last Name: {curr.lastName}</li>
                                <li>Email: <a href={curr.email}>{curr.email}</a></li>
                                <li>GPA: {curr.gpa}</li>
                                {/* <li>Campus Name: {curr.Students.length}</li>   */}
                                <img className='img' src={curr.imgURL}/>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>All Students</h1>
                <button>Add Student</button>
                <div className='campus-info'>
                    {this.renderStudentData()}

                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {students: state.students}
}


export default connect(mapStateToProps, {fetchStudentData})(AllStudents)