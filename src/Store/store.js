import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Services/authSlice';
import counterReducer from '../Common/Counter/counterSlice';
import TodoReducer from '../Store/todoSlice';
const Store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
        Todo: TodoReducer,
    },
})
export default Store;