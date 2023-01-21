import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Services/authSlice';
import TodoReduxReducer from './todoReduxSlice';
import CounterReducer from './counterSlice';
const Store = configureStore({
    reducer: {
        auth: authReducer,
        todoRedux: TodoReduxReducer,
        counter: CounterReducer,
    },
})
export default Store;