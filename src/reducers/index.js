import {combineReducers} from 'redux'
import campusReducer from './campusReducer'
import studentsReducer from './studentsReducer'

export default combineReducers({
    data: campusReducer,
    students: studentsReducer
})