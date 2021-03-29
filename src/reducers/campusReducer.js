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
    else if(action.type==='UPDATE_CAMPUS'){
        console.log('update campus data', action.payload)
        let updatedCampus= state.map((currCampus)=>{
            if(currCampus.id===action.payload.id){
                return action.payload
            }
        })
        return updatedCampus
    }

    return state
}