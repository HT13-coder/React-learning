import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[{ id: 1 , text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo' , 
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const todo = {
                id: nanoid() ,  //  Date.now() ,
                text: action.payload
            }
            state.todos.push(todo)
        }, //we will always get state and action , state -> gives access to current values in inntial state , action -> contains values necessary to do the task (like id)
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload )
        },
        updateTodo : (state , action)=>{
            state.todos.map((todo)=> ( todo.id === action.payload.id ? todo.text = action.payload.text : todo))
        }

    }
})

export const {addTodo , removeTodo ,updateTodo} = todoSlice.actions

export default todoSlice.reducer