import React, { Component } from 'react'
import '../src/style.css'

export default class AllStudents extends Component{
    constructor(props){
        super(props)
        this.state={
            campusData: []
        }
    }
    render(){
        return(
            <div>
                <h1>All Students</h1>
                <button>Add Student</button>
                <div>All Students</div>
            </div>
        )
    }
}