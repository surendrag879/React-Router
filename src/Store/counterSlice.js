import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        Increment: (state) => {
            state.value += 1;
        },
        Decrement: (state) => {
            state.value -= 1;
        },
        IncrementByAmount: (state, action) => {
            const num = Number(action.payload)
            state.value += num
        },
    },
});

export const { Increment, Decrement, IncrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
