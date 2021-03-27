import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {fetchCampusData} from '../src/actions'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import SingleCampus from './SingleCampus'
import AddCampus from './AddCampus'

class AllCampus extends Component{
    constructor(props){
        super(props)
        this.renderCampusData= this.renderCampusData.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchCampusData()
    }


    renderCampusData(){
        console.log('campus data',this.props)
        return(
            <div>
               { 
                    this.props.campus.map((curr)=>{
                        return (
                            <div key={curr.name}>
                            <ul className='campus' key={curr.name}>
                                <li>Campus Name: {curr.name}</li>
                                {curr.Students===undefined?<li>Number of Sudents: 0</li> :<li>Number of Sudents: {curr.Students.length}</li>  } 
                                {console.log('curr student length',curr.Students)}
                                <li>Address: {curr.address}</li>
                                <img className='img' src={curr.imgURL}/>
                                <li>
                                    <p>{curr.description}</p>
                                </li>
                                <NavLink to={`/SingleCampus/${curr.id}`}>Campus Info</NavLink>
                            </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>All Campus</h1>
                <AddCampus/>
                <div className='campus-info'>
                    {this.renderCampusData()}

                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {campus: state.data}
}


export default connect(mapStateToProps, {fetchCampusData})(AllCampus)
