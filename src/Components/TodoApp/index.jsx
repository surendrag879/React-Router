import { useState } from "react";
import '../../assets/styles/style.css';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const TodoIndex = () => {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);
    const [updateIndex, setUpdateIndex] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    // const [dataSource, setDataSource] = useState('');

    const handleSubmit = () => {
        if (task.trim().length === 0) {
            alert('please enter task')
            return;
        }
        else {
            setTodo([...todo, task]);
            setTask("");
            // localStorage.setItem('Todo', JSON.stringify(todo))
        }
    }


    const edit = (id) => {
        setUpdateIndex(id);
        const updatedata = todo[id];
        setTask(updatedata);
        setIsEditMode(true)
    }

    const handleUpdate = () => {
        todo[updateIndex] = task;
        setTask('');
        setIsEditMode(false)
    }
    const handleDelete = (id) => {
        const clone = [...todo];
        clone.splice(id, 1)
        setTodo(clone)
    }
    return (
        <>
            <div className="todoApp">
                <h1>React Todo App</h1>
                <input className='todo-Input'
                    type="text"
                    value={task}
                    placeholder="Enter a new task"
                    onChange={(event) => setTask(event.target.value)}
                />

                <button className="add-button"
                    onClick={() => {
                        isEditMode ? handleUpdate() : handleSubmit()
                    }}>

                    {isEditMode ? <EditIcon /> : <AddIcon />}

                </button>

                {/* todo list print */}

                {todo?.length > 0 ? (
                    <ul className="todo-ul">
                        {todo.map((item, index) => (
                            <div className="todo" key={index}>
                                <li className="todo-li">
                                    {item}
                                </li>

                                <button
                                    className="delete-button"
                                    onClick={() => (handleDelete(index))}
                                >
                                    <DeleteForeverIcon />
                                </button>

                                <button
                                    className="update-button"
                                    onClick={() => (edit(index))}
                                >
                                    <EditIcon />
                                </button>

                            </div>
                        ))}
                    </ul>
                ) : (
                    <div className="empty">
                        <p>No task found</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TodoIndex;