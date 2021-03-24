import data from '../apis/data.js'

export const fetchData= ()=>{
    return async(dispatch)=>{
        const response =await data.get('/data')
        dispatch({type: 'FETCH_DATA',payload: response.data})
    }
}

