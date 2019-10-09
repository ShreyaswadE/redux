import React from 'react';
import store from '../store';

class DisplayTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };

        console.log("printing from constructore ",store.getState());

        store.subscribe(() => {

            this.setState({
                todos: store.getState().todos
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <div>{todo}</div>)}
            </div>
        );
    }
}

export default DisplayTodo;