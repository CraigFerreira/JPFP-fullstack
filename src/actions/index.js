import data from '../apis/data.js'

export const fetchCampusData= ()=>{
    return async(dispatch)=>{
        const response =await data.get('/campus')
        dispatch({type: 'FETCH_CAMPUS',payload: response.data})
    }
}

export const fetchStudentData=()=>{
    return async(dispatch)=>{
        const response = await data.get('/students')
        dispatch({type: 'FETCH_STUDENTS', payload: response.data})
    }
}

export const addCampusData=(formInput)=>{
    return async(dispatch)=>{
        const response= await data.post('/campus', formInput)
        dispatch({type: 'CREATE_NEW_CAMPUS', payload: response.data})
    }
}

export const addStudentData=(formInput)=>{
    return async(dispatch)=>{
        const response= await data.post('/students', formInput)
        dispatch({type: 'CREATE_NEW_STUDENT', payload: response.data})
    }
}

export const deleteCampusData=(id)=>{
    return async(dispatch)=>{
        const response= await data.delete(`/campus/${id}`)
        dispatch({type: 'DELETE_CAMPUS', payload: id})
    }
}

export const deleteStudentData= (id)=>{
    return async(dispatch)=>{
        const response= await data.delete(`/students/${id}`)
        dispatch({type: 'DELETE_STUDENT', payload: id})
    }
}

export const UpdateCampusData=(currdata)=>{
    return async(dispatch)=>{
        const response= await data.put(`/campus/${currdata.id}`, currdata.currState)
        // dispatch({type: 'UPDATE_CAMPUS', payload: response.data})
    }
}

export const getSingleCampusData= (id)=>{
    return async(dispatch)=>{
        const response= await data.get(`/SingleCampus/${id}`)
        dispatch({type: 'GET_SINGLE_CAMPUS', payload: response.data})
    }
}

export const UpdateStudentData=(currdata)=>{
    return async(dispatch)=>{
        // console.log('update student action creator', currdata)
        const response= await data.put(`/students/${currdata.id}`, currdata.currState)
        // dispatch({type: 'UPDATE_CAMPUS', payload: response.data})
    }
}

export const getSingleStudentData= (id)=>{
    return async(dispatch)=>{
        const response= await data.get(`/SingleStudent/${id}`)
        dispatch({type: 'GET_SINGLE_STUDENT', payload: response.data})
    }
}