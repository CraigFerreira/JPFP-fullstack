import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter, Switch, Route, NavLink, useHistory} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import AllCampus from '../client/AllCampuses'
import AllStudents from '../client/AllStudents'
import SingleCampus from '../client/SingleCampus'
import SingleStudent from '../client/SingleStudent'
import thunk from 'redux-thunk'


class App extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/Students'>Students</NavLink>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={()=><AllCampus/>}></Route>
                        <Route exact path='/Students' component={()=><AllStudents/>}></Route>
                        <Route exact path='/SingleCampus/:campusId' component={SingleCampus}></Route>
                        <Route exact path='/SingleStudent/:studentId' component={SingleStudent}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

const store= createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}><App/></Provider>, 
    document.getElementById('app'))