import React, { useReducer } from 'react'

const initialState = { count: 0 };
function init({ initialCount }) {
    return {
        count: initialCount,
    };
}
function reducer(state, action) {
    if (action.type === 'increment') {
         count :state.count += 1;
    }
    else if (action.type === 'decrement') {
        state.count -= 1;
    }
    else if (action.type === 'reset') {
        state.count = action.payload;
    }
    else {
        alert('please check functionality..')
    }
}




const UseReducer = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialState, init);


    return (
        <>
            <div className='main'>
                <h1>React Hooks - useReducer</h1>
                <h2>Count: {state.count}</h2>
                <button className='add-btn' onClick={() => dispatch({ type: 'increment' })} >INCREMENT</button>
                <button className='add-btn' onClick={() => dispatch({ type: 'reset', payload: initialCount })} >Reset</button>
                <button className='add-btn' onClick={() => dispatch({ type: 'decrement' })} >DECREMENT</button>
            </div>
        </>
    )
}

export default UseReducer