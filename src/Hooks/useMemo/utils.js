export const CreateTodos = () => {
    const todos = [];
    for (let i = 0; i < 20; i++) {
        todos.push({
            id: i,
            text: `New Todo ${i + 1}`,
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

export const filterTodos = (todos, tab) => {
    return todos.filter(todo => {
        if (tab === 'all') {
            return true;
        } else if (tab === 'active') {
            return !todo.completed;
        } else if (tab === 'completed') {
            return todo.completed;
        }
    });
}