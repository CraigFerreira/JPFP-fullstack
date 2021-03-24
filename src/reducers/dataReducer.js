export default(state=[], action)=>{
    if(action.type==='FETCH_DATA'){
        return action.payload
    }
    return state
}