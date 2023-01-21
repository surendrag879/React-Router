import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../Store/todoReduxSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todoList } = useSelector((state) => state.todoRedux);
    return (
        <>
            {todoList?.length > 0 ? (
                <ul className='todo-ul'>
                    {todoList.map((item, index) => (
                        <div className='todo' key={index}>
                            <li className='todo-li'>
                                {item.value}
                            </li>
                            <button className='delete-button' onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
                            <button className='update-button' onClick={() => dispatch(editTodo(item.id))}>Edit</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className='empty'>
                    <p>No Task Found</p>
                </div>
            )}
        </>
    )
}

export default TodoList