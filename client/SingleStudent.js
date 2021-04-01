import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSingleStudentData} from '../src/actions/index'
import {NavLink} from 'react-router-dom'
import UpdateStudent from './UpdateStudent'
import '../src/style.css'

class SingleStudent extends Component{
    constructor(props){
        super(props)
        this.renderStudent= this.renderStudent.bind(this)
        this.updateStudent= this.updateStudent.bind(this)
    }
    componentDidMount(){
        const id= this.props.match.params.studentId
        this.props.getSingleStudentData(id)

    }
    updateStudent(){
        this.props.getSingleStudentData(this.props.match.params.studentId)
    }

    renderStudent(){
        return(
            <div>
                {this.props.singleStudent.map((currStudent)=>{
                    return( 
                        <ul className='campus' key={currStudent.firstName +currStudent.lastName}>
                            <li >First Name: {currStudent.firstName}</li>
                            <li> Last Name: {currStudent.lastName}</li>
                            <li>Email: <a href={currStudent.email}>{currStudent.email}</a></li>
                            <li>GPA: {currStudent.gpa}</li>
                            <img key={currStudent.firstName +currStudent.lastName} className='img' src={currStudent.imgURL}/>
                            {currStudent.Campus===null? '':<h3>Student {currStudent.firstName} {currStudent.lastName} studys at {currStudent.Campus.name}</h3>}
                            {currStudent.Campus===null?'':<NavLink to={`/SingleCampus/${currStudent.Campus.id}`}>{currStudent.Campus.name}</NavLink>} 
                        </ul>
                    )

                })}
            </div>
        )
    }

    render(){
        return(
            <div>
                <h3>Single Student</h3>
                <UpdateStudent updateCurrStudent={this.updateStudent} singleStudentProps={this.props}/>
                {this.renderStudent()}
            </div>
        )
    }
}




const mapStateToProps=(state)=>{
    return{
        singleStudent: state.students
    }
}

export default connect(mapStateToProps, {getSingleStudentData})(SingleStudent)




// import React, { Component } from 'react'
// import '../src/style.css'
// import {connect} from 'react-redux'
// import {fetchCampusData} from '../src/actions'
// import axios from 'axios'
// import {NavLink} from 'react-router-dom'

// export default class SingleStudent extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 imgURL:'',
//                 Campus: {},
//                 gpa: ''
//         }
//         this.renderStudent= this.renderStudent.bind(this)
//     }
//     async componentDidMount(){
//         // console.log('single page props',this.props.match.url)
//         let newUrl=`api${this.props.match.url}`
//         // console.log('url',newUrl)
//         const student = (await axios.get(newUrl)).data
//         // console.log('my students', student[0].Campus)
//         this.setState({
//             firstName: student[0].firstName,
//             lastName: student[0].lastName,
//             email: student[0].email,
//             imgURL: student[0].imgURL,
//             Campus: student[0].Campus,
//             gpa: student[0].gpa
//         })
//         console.log('single student',this.state)

//     }
//     renderStudent(){
//         return(
//             <div>

//                 <ul className='campus' key={this.state.firstName +this.state.lastName}>
//                     <li >First Name: {this.state.firstName}</li>
//                     <li> Last Name: {this.state.lastName}</li>
//                     <li>Email: <a href={this.state.email}>{this.state.email}</a></li>
//                     <li>GPA: {this.state.gpa}</li>
//                     {/* <li>Campus Name: {curr.Students.length}</li>   */}
//                     <img key={this.state.firstName +this.state.lastName} className='img' src={this.state.imgURL}/>
//                     {console.log(this.state.Campus)}
//                      {this.state.Campus===null? '':<h3>Student {this.state.firstName} {this.state.lastName} studys at{this.state.Campus.name}</h3>}
//                     {this.state.Campus===null?'':<NavLink to={`/SingleCampus/${this.state.Campus.id}`}>{this.state.Campus.name}</NavLink>} 
//                 </ul>

//             </div>
//         )
//     }    

//     render(){
//         return(
//         <div>
//             <h3>Single Student</h3>
//             {this.renderStudent()}
//         </div>
//         )
//     }












// }

                {/* {this.props.singleStudent.map((currStudent)=>{
                    return currStudent.firstName
                })} */}