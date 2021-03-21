import React, { Component } from 'react'
import '../src/style.css'

export default class AllCampus extends Component{
    constructor(props){
        super(props)
        this.state={
            campusData: []
        }
        this.addCampusInfo= this.addCampusInfo.bind(this)
    }

    addCampusInfo(){
        return(
            <div className='campus-info'>
            {
                this.props.data.map((curr)=>{
                    return (
                        <ul className='campus'>
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
                {this.addCampusInfo()}
            </div>
        )
    }
}

