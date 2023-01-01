import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todoList: [
            { id: 1, content: "Surendra" },
            { id: 2, content: "Parveen" },
        ]
    },
    reducers: {
        Add: (state, action) => {
            let newTodoList = {
                id: +1,
                content: action.payload,
            }
            state.todoList.push(newTodoList);
        },
        Delete: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.filter((item) => item.id !== action.payload);
        },
        Update: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.map((item) =>
                item.id === action.payload ? action.payload : item)


        }

    }
})
export const { Add, Update, Delete } = TodoSlice.actions;
export default TodoSlice.reducer;