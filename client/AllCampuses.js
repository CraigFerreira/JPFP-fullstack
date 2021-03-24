import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {fetchData} from '../src/actions'

class AllCampus extends Component{
    constructor(props){
        super(props)
        this.renderCampusData= this.renderCampusData.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchData()
    }

    renderCampusData(){
        console.log('campus data',this.props)
        return(
            <div>
               { 
                    this.props.campus.map((curr)=>{
                        return (
                            <ul className='campus' key={curr.name}>
                                <li>Campus Name: {curr.name}</li>
                                <li>Number of Sudents: {curr.Students.length}</li>  
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
                <h1>All Campus</h1>
                <button>Add Campus</button>
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


export default connect(mapStateToProps, {fetchData})(AllCampus)
