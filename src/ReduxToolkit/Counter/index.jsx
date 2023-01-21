import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../../assets/styles/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement, IncrementByAmount } from '../../Store/counterSlice';
const Counter = () => {
    const [values, setValues] = useState('');
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const AddCount = () => {
        dispatch(IncrementByAmount(values));
        setValues("");
    }
    return (
        <>
            <div className='main'>
                <h1>Counter update</h1>
                <div className='todo-input'>
                    <Button onClick={() => dispatch(Decrement())}>DECREMENT</Button>
                    <span>{count}</span>
                    <Button color='primary' onClick={() => dispatch(Increment())}>INCREMENT</Button>
                </div>
                <div className='todo-input'>
                    <input type={'text'} style={{ width: '100px' }} onChange={(e) => setValues(e.target.value)} />
                    <Button color='success' onClick={AddCount}>Add Count</Button>
                </div>
            </div>

        </>
    )
}

export default Counter