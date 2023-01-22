import React from 'react';
import { filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }) {
    const visibleTodos = filterTodos(todos, tab);
    return (
        <div className={theme}>
            <ol>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ?
                            <s>{todo.text}</s> :
                            todo.text
                        }
                    </li>
                ))}
            </ol>
        </div>
    );
}
