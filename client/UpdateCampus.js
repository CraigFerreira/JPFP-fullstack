import React, { Component } from 'react'
import {connect} from 'react-redux'
import {UpdateCampusData} from '../src/actions/index'
import {getSingleCampusData} from '../src/actions'

class UpdateCampus extends Component{
    constructor(){
        super()
        this.state={
            campusName:'',
            campusAddress:'',
        }
        this.changeCampusData= this.changeCampusData.bind(this)
        this.updateCurrentCampus= this.updateCurrentCampus.bind(this)
    }
    changeCampusData(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateCurrentCampus(event){
        event.preventDefault()
        const currId= this.props.currCampus.campus[0].id
        const currState= this.state
        const data= {currState, id: currId}
        this.props.updateCampus(data)
        this.props.updateState()
        this.setState({
            campusName:'',
            campusAddress:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.updateCurrentCampus}>
                    <label>Update Campus Name</label>
                    <input name='campusName' value={this.state.campusName} onChange={this.changeCampusData} type='text'></input>
                    <label>Update Campus Address</label>
                    <input name='campusAddress' value={this.state.campusAddress} onChange={this.changeCampusData} type='text'></input>
                    <button>Update Campus Info !</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        updateCampus: (formData)=>{
            dispatch(UpdateCampusData(formData))
        }
    }
}



export default connect(null, mapDispatchToProps)(UpdateCampus)