import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo } from '../actions';
import Form from "./Form"

class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="todo-list-container">
        <h2>To-Do List</h2>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} task={todo.task} />
        ))}
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, {addTodo})(TodoList);
