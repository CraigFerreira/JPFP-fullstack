import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {getSingleCampusData} from '../src/actions'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import UpdateCampus from './UpdateCampus'

class SingleCampus extends Component{
    constructor(props){
        super(props)
        this.renderCampus= this.renderCampus.bind(this)
        this.UpdateCampusData= this.UpdateCampusData.bind(this)
    }
    async componentDidMount(){  
        console.log(this.props)
        const id=this.props.match.params.campusId
        console.log('single campus id',id)
        this.props.getSingleCampusData(id)
        console.log(this.props)
    }
    UpdateCampusData(){
        const id=this.props.match.params.campusId
        this.props.getSingleCampusData(id)
        console.log('upadated data', this.props)
    }

    renderCampus(){
        console.log('single campus data', this.props)
        return(
            <div>
                <div className='form'>
                    <UpdateCampus updateState={this.UpdateCampusData} currCampus={this.props}/>
                </div>
                <div>
                    
                        {this.props.campus.map((currCampus)=>{
                            return(
                                <ul key={currCampus.name} className='campus'>
                                    <li>{currCampus.name}</li>
                                    <li>{currCampus.address}</li>
                                    <li>Number of Students: {currCampus.Students.length}</li>
                                    <img className='img' src={currCampus.imgURL}/>
                                    <p>{currCampus.description}</p>
                                    <li>
                                        {currCampus.Students.map((currStudent)=>{
                                            return(
                                                <ul key={currStudent.name} className='campus'>
                                                    <h3>Students at {currStudent.name}</h3>
                                                    <li >First Name: {currStudent.firstName}</li>
                                                    <li> Last Name: {currStudent.lastName}</li>
                                                    <NavLink to={`/SingleStudent/${currStudent.id}`}>{currStudent.firstName } {currStudent.lastName}</NavLink>
                                                    <li>Email: <a href={currStudent.email}>{currStudent.email}</a></li>
                                                    <li>GPA: {currStudent.gpa}</li>
                                                    {/* <li>Campus Name: {curr.Students.length}</li>   */}
                                                    <img key={currStudent.name} className='img' src={currStudent.imgURL}/>
                                                </ul>
                                            )
                                        })}
                                    </li>
                                </ul>
                                
                            )
                        })}
                    
                </div>
            </div>
            
        )
    }    

    render(){
        return(
        <div>
            {this.renderCampus()}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        campus: state.data
    }
}

export default connect(mapStateToProps, {getSingleCampusData})(SingleCampus)

            // <div>
            //     <UpdateCampus currCampus={this.state}/>
            //     <ul>
            //         <li>
            //             Campus Name: {this.state.SingleCampus.name}
            //         </li>
            //         <li>Address: {this.state.SingleCampus.address}</li>
            //         <li>Number of Students: {this.state.students.length}</li>
            //         <img className='img' src={this.state.SingleCampus.imgURL}/>
            //         <li>
            //             <p>{this.state.SingleCampus.description}</p>
            //                 {this.state.students.map((student)=>{
            //                     return (
            //                         <ul className='campus' key={student.firstName +student.lastName}>
            //                         <h3>Students at {this.state.SingleCampus.name}</h3>
            //                         <li >First Name: {student.firstName}</li>
            //                         <li> Last Name: {student.lastName}</li>
            //                         <NavLink to={`/SingleStudent/${student.id}`}>{student.firstName } {student.lastName}</NavLink>
            //                         <li>Email: <a href={student.email}>{student.email}</a></li>
            //                         <li>GPA: {student.gpa}</li>
            //                         {/* <li>Campus Name: {curr.Students.length}</li>   */}
            //                         <img key={student.name} className='img' src={student.imgURL}/>
            //                     </ul>
            //                     )
            //                 })}
            //         </li>
            //     </ul>
            // </div>