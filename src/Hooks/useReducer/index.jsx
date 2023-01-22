import React, { useReducer } from 'react'

const initialState = {
    value: 0,
}
function reducer(state, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + 1
        }

    }
    else if (action.type === 'decrement') {
        return {
            value: state.value - 1
        }

    }
    else if (action.type === 'reset') {
        return {
            value: state.value = action.payload
        }

    }
    else {
        alert('please check functionality..')
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <div className='main'>
                <h1>React Hooks - useReducer</h1>
                <p> Count:{state.value}</p>
                <button className='add-btn' onClick={() => dispatch({ type: 'increment' })} >INCREMENT</button>
                <button className='add-btn' onClick={() => dispatch({ type: 'reset', payload: 0 })} >Reset</button>
                <button className='add-btn' onClick={() => dispatch({ type: 'decrement' })} >DECREMENT</button>
            </div>
        </>
    )
}

export default UseReducer