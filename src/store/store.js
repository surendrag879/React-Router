import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice';
const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
export default Store;