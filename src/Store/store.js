import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Services/authSlice';
import TodoReduxReducer from './todoReduxSlice';
const Store = configureStore({
    reducer: {
        auth: authReducer,
        todoRedux: TodoReduxReducer,
    },
})
export default Store;