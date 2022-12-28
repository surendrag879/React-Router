import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice';
import authReducer from '../services/auth';
const Store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
})
export default Store;