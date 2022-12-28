import React, { useState } from "react";
import Todos from "../../_components/todo";

const TodoList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    // console.log("increment clicked..");
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    // console.log("add todo clicked..");
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <React.Fragment>
      <div style={{ display: "block", margin: "auto", justifyContent: "center" }}>
        {/* <button onClick={decrement}>-</button> */}
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
      </div>
      <div style={{ display: "block", margin: "auto" }}>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
