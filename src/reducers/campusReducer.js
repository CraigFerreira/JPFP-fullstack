export default(state=[], action)=>{
    if(action.type==='FETCH_CAMPUS'){
        return action.payload
    }
    else if (action.type==='CREATE_NEW_CAMPUS'){
        console.log('create new campus reducer', action)
        return [...state, action.payload]
    }

    return state
}