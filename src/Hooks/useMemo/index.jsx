import React, { useState } from 'react';
import { CreateTodos } from './utils';
import TodoList from './TodoList';

const todos = CreateTodos();

export default function UseMemo() {
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <div className='main'>
                <button onClick={() => setTab('all')}> All </button>
                <button onClick={() => setTab('active')}>Active </button>
                <button onClick={() => setTab('completed')}>Completed</button>

                <br />
                <hr />

                <label>
                    Dark mode
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={e => setIsDark(e.target.checked)}
                    />
                </label>

                <br />
                <hr />

                <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'}
                />
            </div>
        </>
    );
}