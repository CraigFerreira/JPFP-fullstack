import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {fetchCampusData} from '../src/actions'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class SingleStudent extends Component{
    constructor(props){
        super(props)
        this.state={
                firstName: '',
                lastName: '',
                email: '',
                imgURL:'',
                Campus: {},
                gpa: ''
        }
        this.renderStudent= this.renderStudent.bind(this)
    }
    async componentDidMount(){
        // console.log('single page props',this.props.match.url)
        let newUrl=`api${this.props.match.url}`
        // console.log('url',newUrl)
        const student = (await axios.get(newUrl)).data
        // console.log('my students', student[0].Campus)
        this.setState({
            firstName: student[0].firstName,
            lastName: student[0].lastName,
            email: student[0].email,
            imgURL: student[0].imgURL,
            Campus: student[0].Campus,
            gpa: student[0].gpa
        })
        console.log('single student',this.state)

    }
    renderStudent(){
        return(
            <div>

                <ul className='campus' key={this.state.firstName +this.state.lastName}>
                    <li >First Name: {this.state.firstName}</li>
                    <li> Last Name: {this.state.lastName}</li>
                    <li>Email: <a href={this.state.email}>{this.state.email}</a></li>
                    <li>GPA: {this.state.gpa}</li>
                    {/* <li>Campus Name: {curr.Students.length}</li>   */}
                    <img key={this.state.name} className='img' src={this.state.imgURL}/>
                    <h3>Student {this.state.firstName} {this.state.lastName} studys at {this.state.Campus.name}</h3>
                    <NavLink to={`/SingleCampus/${this.state.Campus.id}`}>{this.state.Campus.name}</NavLink>
                </ul>

            </div>
        )
    }    

    render(){
        return(
        <div>
            <h3>Single Student</h3>
            {this.renderStudent()}
        </div>
        )
    }
}