import { createSlice } from 'react-toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        status: 'idel' | 'loading' | 'success' | 'error',
        state: '',
    },
    reducers: {

    }
})