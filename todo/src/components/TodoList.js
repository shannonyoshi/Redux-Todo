import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted, deleteTodo } from "../actions";
import Form from "./Form";

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
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div className="todo-list-container">
        <h2>To-Do List</h2>
        {this.props.todos.map(todo => (
          <div className="todo-item" key={todo.id} >
            <p onClick={(e)=>this.toggleCompleted(e, todo.id)} key={todo.id}>{todo.task}</p> 
            {todo.completed? <span>Completed</span>: <span>Unatained</span>}
            <button onClick={e =>this.deleteTodo(e, todo.id)}>Delete Item</button>
          </div>

          //   <Todo key={todo.id} task={todo.task} toggleCompleted={toggleCompleted}/>
        ))}
        <Form />
      </div>
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
