import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Delete, Update } from '../../Store/todoSlice';
const TodoList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Todo.todoList);
    // console.log(data);

    const handleDelete = (id) => {
        console.log('delete', id)
        dispatch(Delete(id));
    }

    const handleUpdate = (id) => {
        console.log(id)
        dispatch(Update(id));
    }

    return (
        <>
            {data?.length > 0 ? (
                <ul className="todo-ul">
                    {data.map((item, index) => (
                        <div className="todo" key={index}>
                            <li className="todo-li">
                                {item.content}
                            </li>

                            <button
                                className="delete-button"
                                onClick={() => (handleDelete(item.id))}
                            >
                                Delete
                            </button>

                            <button
                                className="delete-button"
                                onClick={() => (handleUpdate(item.id))}
                            >
                                Update
                            </button>

                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    );
};

export default TodoList;