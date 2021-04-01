import axios from 'axios'

export const fetchCampusData= ()=>{
    console.log('all campus thunk')
    return async(dispatch)=>{
        const response =await axios.get('/api/campus')
        dispatch({type: 'FETCH_CAMPUS',payload: response.data})
    }
}

export const fetchStudentData=()=>{
    return async(dispatch)=>{
        const response = await axios.get('/api/students')
        dispatch({type: 'FETCH_STUDENTS', payload: response.data})
    }
}

export const addCampusData=(formInput)=>{
    return async(dispatch)=>{
        const response= await axios.post('/api/campus', formInput)
        dispatch({type: 'CREATE_NEW_CAMPUS', payload: response.data})
    }
}

export const addStudentData=(formInput)=>{
    return async(dispatch)=>{
        const response= await axios.post('/api/students', formInput)
        dispatch({type: 'CREATE_NEW_STUDENT', payload: response.data})
    }
}

export const deleteCampusData=(id)=>{
    return async(dispatch)=>{
        const response= await axios.delete(`/api/campus/${id}`)
        dispatch({type: 'DELETE_CAMPUS', payload: id})
    }
}

export const deleteStudentData= (id)=>{
    return async(dispatch)=>{
        const response= await axios.delete(`/api/students/${id}`)
        dispatch({type: 'DELETE_STUDENT', payload: id})
    }
}

export const UpdateCampusData=(currdata)=>{
    return async(dispatch)=>{
        const response= await axios.put(`/api/campus/${currdata.id}`, currdata.currState)
        // dispatch({type: 'UPDATE_CAMPUS', payload: response.data})
    }
}

export const getSingleCampusData= (id)=>{
    return async(dispatch)=>{
        const response= await axios.get(`/api/SingleCampus/${id}`)
        dispatch({type: 'GET_SINGLE_CAMPUS', payload: response.data})
    }
}

export const UpdateStudentData=(currdata)=>{
    return async(dispatch)=>{
        const response= await axios.put(`/api/students/${currdata.id}`, currdata.currState)
        // dispatch({type: 'UPDATE_CAMPUS', payload: response.data})
    }
}

export const getSingleStudentData= (id)=>{
    return async(dispatch)=>{
        const response= await axios.get(`/api/SingleStudent/${id}`)
        dispatch({type: 'GET_SINGLE_STUDENT', payload: response.data})
    }
}

export const unlinkStudentFromCampus=(studentData)=>{
    return async(dispatch)=>{
        console.log('action creator unlink student', studentData)
        const response= await axios.put(`/api/campus/${studentData.campusId}/Unlink`, studentData)
    }
}