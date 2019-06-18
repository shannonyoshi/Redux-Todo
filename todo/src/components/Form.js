import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class Form extends React.Component {
  state = {
    input: ""
  };
  
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form>
          <input
            type="text"
            name="input"
            placeholder="Add new task"
            onChange={this.handleChanges}
            value={this.state.input}
          />
          <button onClick={this.submitTodo}>Add To-Do</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(Form);
