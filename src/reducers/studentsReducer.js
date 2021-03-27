export default(state=[], action)=>{
    if(action.type==='FETCH_STUDENTS'){
        return action.payload
    }
    else if(action.type==='CREATE_NEW_STUDENT'){
        return [...state, action.payload]
    }
    else return state
}