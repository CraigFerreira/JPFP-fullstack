import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import AllCampus from '../client/AllCampuses.js'

class App extends Component{
    render(){
        return(
            <div>
                <h1>Campus Listing</h1>
                <AllCampus/>
            </div>
        )
    }
}

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>, 
    document.getElementById('app'))