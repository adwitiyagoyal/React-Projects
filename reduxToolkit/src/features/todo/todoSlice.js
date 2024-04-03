import {createSlice, nanoid} from '@reduxjs/toolkit';//nanoid generates unique id

const initialState = {
    todos: [{id: 1, text: "hello World"}]
}

//reducers => it is functionality

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {// we hve to define and declare function both unlike context API
        //addTodo(state, action) -> addTodo fn give acess of state and action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload//here payload is object we can access many thing
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )//automatically it will compare id from payload(object)
        }, 
        updateTodo: (state,action) => {
            const updatedTodo = {
                id: action.payload.id,
                text: action.payload.text,
            }
            state.todos = state.todos.map((prevtodo) => (prevtodo.id === action.payload ? updatedTodo:prevtodo))
        }
        //updateTodo -> HOMEWORK
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
