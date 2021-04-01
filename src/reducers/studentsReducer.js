export default(state=[], action)=>{
    if(action.type==='FETCH_STUDENTS'){
        return action.payload
    }
    else if(action.type==='CREATE_NEW_STUDENT'){
        return [...state, action.payload]
    }
    else if (action.type==='DELETE_STUDENT'){
        const updatedStudents= state.filter((currStudent)=>{
            return currStudent.id!==action.payload
        })
        return [...updatedStudents]
    }
        // else if(action.type==='UPDATE_STUDENT'){
    //     console.log('update student data', action.payload)
    //     let updatedStudent= state.map((currStudent)=>{
    //         if(currStudent.id===action.payload.id){
    //             return action.payload
    //         }
    //     })
    //     return updatedCampus
    // }
    else if(action.type==='GET_SINGLE_STUDENT'){
        return action.payload
    }

    else return state
}