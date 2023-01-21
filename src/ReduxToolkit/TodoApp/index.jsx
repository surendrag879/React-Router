import React, { useEffect, useState } from "react";
// import useKey from "@rooks/use-key";
import "../../assets/styles/style.css";
import TodoList from "./todoList";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../Store/todoReduxSlice";

const TodoAppRedux = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const { todoList, itemId, count } = useSelector((state) => state.todoRedux);

    const handleSubmit = (e) => {
        if (task.trim().length === 0) {
            alert("enter task");
            return;
        } else {
            dispatch(addTodo(task));
            setTask("");
            setIsEditMode(false);
        }
    };
    // useKey(["Enter"], windowEnter);

    useEffect(() => {
        if (itemId) {
            console.log("itemId", itemId);
            setIsEditMode(true);
            const UpdateValue = todoList.filter((d) => d.id === itemId);
            console.log('updateId', UpdateValue);
            setTask(UpdateValue[0].value);
        }
    }, [itemId, todoList]);

    const handleUpdate = (e) => {
        dispatch(updateTodo({ id: itemId, value: task }));
        setTask("");
        setIsEditMode(false);
    };

    return (
        <div className="main">
            <h1>Todo App With Redux</h1>
            <p>{`total count: ${count}`}</p>
            <input
                className="todo-Input"
                type="text"
                value={task}
                placeholder="Create a new todo"
                onChange={(event) => {
                    setTask(event.target.value);
                }}
            />
            <button
                className="add-button"
                onClick={() => {
                    isEditMode ? handleUpdate() : handleSubmit();
                }}
            >
                {isEditMode ? "Update" : "Add"}
            </button>
            <TodoList />
        </div>
    );
};

export default TodoAppRedux;
