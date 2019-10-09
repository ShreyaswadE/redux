import {combineReducers} from "redux";

const thingsToDoWithTodo = (todos = [], action) => {
    if (action.type === 'INSERT_TODO') {
        return (
            [...todos, action.payload]

        );
    }
    if (action.type === 'DELETE_TODO') {
        return todos.filter(title => title !== action.payload);
    }
    return todos;
};

export default combineReducers(
    {todos: thingsToDoWithTodo}
);