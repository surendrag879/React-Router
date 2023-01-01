import { useState } from "react";
import './style.css';
import TodoInput from "./todoInput";
import TodoList from "./todoList";
const TodoIndex = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    };

    return (
        <div className="todoApp">
            <h1>React Todo App</h1>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList list={todos} remove={deleteTodo} />
        </div>
    );
};

export default TodoIndex;