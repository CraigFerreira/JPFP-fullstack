import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {fetchCampusData} from '../src/actions'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class SingleCampus extends Component{
    constructor(props){
        super(props)
        this.state={
            SingleCampus: [],
            students:[]
        }
    }
    async componentDidMount(){
        console.log('single page props',this.props.match.url)
        let newUrl=`api${this.props.match.url}`
        console.log('url',newUrl)
        const campus = (await axios.get(newUrl)).data
        // console.log('my campus', campus[0])
        this.setState({
            SingleCampus: campus[0],
            students: campus[0].Students
        })
        // console.log('single campuses',this.state.students)

    }
    renderCampus(){
        return(
            <div>
                <ul>
                    <li>
                        Campus Name: {this.state.SingleCampus.name}
                    </li>
                    <li>Address: {this.state.SingleCampus.address}</li>
                    <li>Number of Students: {this.state.students.length}</li>
                    <img className='img' src={this.state.SingleCampus.imgURL}/>
                    <li>
                        <p>{this.state.SingleCampus.description}</p>
                            {this.state.students.map((student)=>{
                                return (
                                    <ul className='campus' key={student.firstName +student.lastName}>
                                    <h3>Students at {this.state.SingleCampus.name}</h3>
                                    <li >First Name: {student.firstName}</li>
                                    <li> Last Name: {student.lastName}</li>
                                    <NavLink to={`/SingleStudent/${student.id}`}>{student.firstName } {student.lastName}</NavLink>
                                    <li>Email: <a href={student.email}>{student.email}</a></li>
                                    <li>GPA: {student.gpa}</li>
                                    {/* <li>Campus Name: {curr.Students.length}</li>   */}
                                    <img key={student.name} className='img' src={student.imgURL}/>
                                </ul>
                                )
                            })}
                    </li>
                </ul>
            </div>
        )
    }    

    render(){
        return(
        <div>
            <h3>Single Campus</h3>
            {this.renderCampus()}
        </div>
        )
    }
}

// const mapStateToProps=(state)=>{
//     return {
//         campus: state.data
//     }
// }

// export default connect(mapStateToProps, null)(SingleCampus)