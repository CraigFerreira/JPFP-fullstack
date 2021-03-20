import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import AllCampus from '../client/AllCampuses.js'
import axios from 'axios'
import './style.css'


class App extends Component{
    constructor(props){
        super(props)
        this.state={
            data: []
        }
        this.addCampusInfo=this.addCampusInfo.bind(this)
    }
    async componentDidMount(){
        const data= (await axios.get('api/data')).data
        console.log('client side data', data)
        this.setState({
            data
        })
        console.log('state 1', this.state)
    }

    addCampusInfo(){
        return(
            <div className='campus-info'>
            {this.state.data.map((curr)=>{
                return(
                    <div className='campus-info-inner'>
                        {curr.name}
                        {/* <img className='campus-img' src={curr.imgURL} alt={curr.name}/> */}
                    </div>
                )
            })}
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>Campus Listing</h1>
                <AllCampus/>
                {this.addCampusInfo()}
            </div>
        )
    }
}

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>, 
    document.getElementById('app'))