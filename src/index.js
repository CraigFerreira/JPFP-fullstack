import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom'
import AllCampus from '../client/AllCampuses.js'
import AllStudents from '../client/AllStudents.js'
import axios from 'axios'
import './style.css'


class App extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        const data= (await axios.get('api/data')).data
        console.log('client side data', data)
        this.setState({data})
        console.log('state 1', this.state)
    }

    render(){
        return(
            <HashRouter>
                <div>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='Students'>Students</NavLink>
                    </nav>
                    <h1>Campus Listing</h1>
                    <Switch>
                        <Route exact path='/' render={()=><AllCampus data={this.state.data}/>} ></Route>
                        <Route exact path='/Students' render={()=><AllStudents/>}></Route>
                    </Switch>
                    {/* <AllCampus data={this.state.data}/>
                    <AllStudents/> */}
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(
<App/>, 
    document.getElementById('app'))