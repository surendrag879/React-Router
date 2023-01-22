import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
    Increment,
    Decrement,
    IncrementByAmount,
} from "../../Store/counterSlice";
const Counter = () => {
    const [values, setValues] = useState('');
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleChange = ((e) => setValues(e.target.value))
    const AddCount = () => {
        if (values.trim().length === 0) {
            alert("enter any number");
            return;
        } else {
            dispatch(IncrementByAmount(values));
            setValues("");
        }
    }
    return (
        <>
            <div className="main">
                <h1>Counter update</h1>
                <div className="todo-input">
                    <Button onClick={() => dispatch(Decrement())}>DECREMENT</Button>
                    <span>{count}</span>
                    <Button color="primary" onClick={() => dispatch(Increment())}>
                        INCREMENT
                    </Button>
                </div>
                <div className="todo-input">
                    <label sx={{ color: 'red' }}>Enter Number:  </label>
                    <input
                        type={"number"}
                        value={values}
                        style={{ width: "100px" }}
                        onChange={handleChange}
                    />

                    <Button color="success" onClick={AddCount}>
                        Add Count
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Counter;
