import React from "react";
import ToDoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
