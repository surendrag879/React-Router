import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
          padding: "10px",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h2>Count: {count}</h2>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
