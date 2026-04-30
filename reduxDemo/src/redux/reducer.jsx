const initialstate={
    todo:[]
}

export const todoreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return{
            ...state,
            todos: [...state.todo,{id:Date.now(),text:action.payload,completed:false}]
            };

        case "DELETE_TODO":
            return{
            ...state,
            todos: state.todos.filter(todo=> todo.id!==action.payload)
            };


        case "TOGGLE":
            return{
            ...state,
            todos:state.todos.map(todo=>
                todo.id
            )
        }
    }
}