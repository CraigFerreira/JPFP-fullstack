import axios from 'axios'
import React, { Component } from 'react'
import '../src/style.css'
import {connect} from 'react-redux'
import {deleteCampusData} from '../src/actions/'

class DeleteCampus extends Component{
    constructor(){
        super()
        this.deleteCampus= this.deleteCampus.bind(this)
    }
    deleteCampus(data){
        console.log('delete button click',data)
        console.log('delete campus',data.deleteCampus, 'id', data.props.id)
        data.deleteCampus(data.props.id)
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.deleteCampus(this.props)}} className='deleteButton'>X</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteCampus: (id)=>{
            dispatch(deleteCampusData(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteCampus)

