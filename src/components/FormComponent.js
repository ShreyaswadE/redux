import React from 'react';
import {insertTodo,deleteTodos} from "../actions";
import {connect} from 'react-redux';

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.submitPress = this.submitPress.bind(this);
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.todoToDelete = this.todoToDelete.bind(this);

        this.state = {
            todo: "",
            todoToDelete : ""
        };
    }

    inputChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    };

    todoToDelete = (e) => {
        this.setState({
            todoToDelete : e.target.value
        })
    }

    deleteTodoClicked = ()=> {
        this.props.deleteTodos(this.state.todoToDelete);
        this.setState({todoToDelete : ""})
    };

    submitPress = () => {
        console.log("prinintg the todo ", this.state);
        this.props.insertTodo(this.state.todo);
        this.setState({todo: ""})
    };

    render() {
        console.log("in the render of formcomponent ", this.props);
        return (
            <div>
                <div>
                    <input value={this.state.todo} onChange={this.inputChange}/>
                    <button onClick={this.submitPress}>Submit the todo</button>
                </div>
                <div>
                    <span>Enter the todo you want to delete</span>
                    <input value={this.state.todoToDelete} onChange={this.todoToDelete}/>
                    <button onClick={this.deleteTodoClicked}>Delete</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {todos: state.todos}
}

export default connect(mapStateToProps, {insertTodo,deleteTodos})(FormComponent);