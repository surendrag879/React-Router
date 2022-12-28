import { useState } from "react";
import Todos from "../../_components/todo";

const TodoList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    console.log('increment clicked..');
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    console.log('add todo clicked..')
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default TodoList;