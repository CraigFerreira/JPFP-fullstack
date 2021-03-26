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

// export const addCampusData=()=>{
//     return async(dispatch)=>{
//         const 
//     }
// }