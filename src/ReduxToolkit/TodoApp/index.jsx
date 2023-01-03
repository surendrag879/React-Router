import React, { useEffect, useState } from "react";
import useKey from "@rooks/use-key";
import "../../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Store/todoReduxSlice";
import TodoList from "./todoList";

const TodoAppRedux = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const { todoList, itemId, count } = useSelector((state) => state.todoRedux);

    console.log("todoList:", todoList, "updateItem:", itemId);

    const windowEnter = (e) => {
        if (task.trim().length === 0) {
            alert("enter task");
            return;
        } else {
            dispatch(addTodo(task));
            setTask("");
            setIsEditMode(false)
        }
    };
    useKey(["Enter"], windowEnter);

    const editData = () => {
        let editData = todoList?.[itemId]?.data;
        console.log(editData)
        setIsEditMode(true)
        // setTask(editData)
    }
    // editData();
    const handleUpdate = (e) => {
        console.log('handleUpdate clicked..')
        setIsEditMode(true)
    };

  
    return (
        <div className="todoApp">
            <h1>React Todo App</h1>
            <p>{`total count: ${count}`}</p>
            <input
                className="todo-Input"
                type="text"
                value={task}
                placeholder="Create a new todo"
                onChange={(event) => setTask(event.target.value)}
            />

            <button className="add-button"
                onClick={() => {
                    isEditMode ? handleUpdate() : windowEnter()
                }}>

                {isEditMode ? "Update" : "Enter"}
            </button>
            <TodoList />
        </div>
    );
};

export default TodoAppRedux;
