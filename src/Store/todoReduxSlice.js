import { createSlice } from "@reduxjs/toolkit";


const TodoReduxSlice = createSlice({
    name: 'todoRedux',
    initialState: {
        count: 0,
        todoList: [],
        itemId: 0,
    },

    reducers: {
        addTodo: (state, action) => {
            let receiveData = {
                id: Date.now(),
                value: action.payload,
            }
            state.todoList.push(receiveData);
            state.count += 1;
            localStorage.setItem('todoApp', JSON.stringify({ state }))
        },
        deleteTodo: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.filter((item) => item.id !== action.payload);
            state.count -= 1;
        },
        editTodo: (state, action) => {
            state.itemId = action.payload;
        },
        updateTodo: (state, action) => {
            console.log('state', action.payload)
            let {id, value } = action.payload;
            state.todoList = state.todoList.map(d => { 
                if(d.id === id) {
                    return { id,value}
                }
                return d;
            })
           state.itemId = '';
        }

    }
})
export const { addTodo, deleteTodo, editTodo, updateTodo } = TodoReduxSlice.actions;
export default TodoReduxSlice.reducer;