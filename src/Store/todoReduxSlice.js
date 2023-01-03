import { createSlice } from "@reduxjs/toolkit";


const TodoReduxSlice = createSlice({
    name: 'todoRedux',
    itemId: '',
    initialState: {
        count: 0,
        todoList: [],
    },

    reducers: {
        addTodo: (state, action) => {
            let receiveData = {
                id: Date.now(),
                data: action.payload,
            }
            state.todoList.push(receiveData);
            state.count += 1;
            localStorage.setItem('todoApp', JSON.stringify({state}))
        },
        deleteTodo: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.filter((item) => item.id !== action.payload);
            state.count -= 1;
        },
        editTodo: (state, action) => {
            state.itemId = action.payload;
        }

    }
})
export const { addTodo, deleteTodo, editTodo } = TodoReduxSlice.actions;
export default TodoReduxSlice.reducer;