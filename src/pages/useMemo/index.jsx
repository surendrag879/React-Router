
import { React, useReducer, useMemo } from 'react';
import ChildComponent from './childComponent';

//useReducer hook......
const initialState = 0;
const Reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}
const UseMemo = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const useMemoFunction = useMemo(() => <ChildComponent />, [])

    return (
        <div>
            {useMemoFunction}
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <h1>count:{state}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </div>
    )
}

export default UseMemo;


