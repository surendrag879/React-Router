import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Services/authSlice';
import counterReducer from '../Common/Counter/counterSlice';;
const Store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
})
export default Store;