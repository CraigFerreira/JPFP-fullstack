export default(state=[], action)=>{
    if(action.type==='FETCH_CAMPUS'){
        return action.payload
    }
    else if (action.type==='CREATE_NEW_CAMPUS'){
        console.log('create new campus reducer', action)
        return [...state, action.payload]
    }
    else if(action.type==='DELETE_CAMPUS'){
        console.log('delete campus reducer', action)
        // return [...state, action.payload]
        let filteredCampus= state.filter((currCampus)=>{
            return currCampus.id !==action.payload
        })
        return [...filteredCampus]
    }

    return state
}