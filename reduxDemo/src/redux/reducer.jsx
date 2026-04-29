const initialstate={
    todo:[]
}

export const todoreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return{
            ...state,
            todo:[...state.todo,action.payload]
            }

        case "DELETE_TODO":
            return{
            ...state,
            id:acton.payload
            }


        case "TOGGLE":
            return{
            ...state,
            }
    }
}