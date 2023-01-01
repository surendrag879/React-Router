import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add } from '../../Store/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleSubmit = () => {
    dispatch(Add(todo));
    setTodo('');
  }
  return (
    <div className="input-wrapper">
      <input className='todo-Input'
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;