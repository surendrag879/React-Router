import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice';
import authReducer from '../services/authSlice';
import authServiceReducer from '../services/authService';
const Store = configureStore({
    reducer: {
        auth: authReducer,
        authService: authServiceReducer,
        counter: counterReducer,
    },
})
export default Store;