import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom'
import AllStudents from '../client/AllStudents.js'
import axios from 'axios'
import './style.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import AllCampus from '../client/AllCampuses'
import thunk from 'redux-thunk'


class App extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:[]
    //     }
    // }
    // async componentDidMount(){
    //     const data= (await axios.get('api/data')).data
    //     console.log('client side data', data)
    //     this.setState({data})
    //     console.log('state 1', this.state)
    // }

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
                        {/* <Route exact path='/' render={()=><AllCampus data={this.state.data}/>} ></Route> */}
                        <Route exact path='/' render={()=><AllCampus/>}></Route>
                        <Route exact path='/Students' render={()=><AllStudents/>}></Route>
                    </Switch>
                    {/* <AllCampus data={this.state.data}/>
                    <AllStudents/> */}
                </div>
            </HashRouter>
        )
    }
}

const store= createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}><App/></Provider>, 
    document.getElementById('app'))