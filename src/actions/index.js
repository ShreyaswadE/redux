export const insertTodo = (todo) => {
    return {
        type : 'INSERT_TODO',
        payload : todo
    }
};
export const deleteTodos = (todo) => {
    return {
        type : 'DELETE_TODO',
        payload : todo
    }
};


