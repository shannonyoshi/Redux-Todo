import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted, deleteTodo } from "../actions";
import Form from "./Form";
import { FaTrashAlt, FaCheck, FaUndo } from "react-icons/fa";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  toggleCompleted = (e, id) => {
    e.preventDefault();
    this.props.toggleCompleted(id);
  };

  deleteTodo = (e, id) => {
    e.preventDefault();
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <>
        <header>
          <h2>To-Do List</h2>
        </header>
        <Form />
        <div className="todo-list-container">
          {this.props.todos.map(todo => (
            <div className="todo-item" key={todo.id}>
              <h4>{todo.task}</h4>
              <p><strong>Status: </strong>
              {todo.completed ? <span>Completed</span> : <span>Incomplete</span>}
              </p>
              {!todo.completed ? (
                <FaCheck className="icon check"
                  onClick={e => this.toggleCompleted(e, todo.id)}
                  key={todo.id}
                />
              ) : (
                <FaUndo className="icon undo"
                  onClick={e => this.toggleCompleted(e, todo.id)}
                  key={todo.id}
                />
              )}
              <FaTrashAlt className="icon trash" onClick={e => this.deleteTodo(e, todo.id)} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted, deleteTodo }
)(TodoList);
