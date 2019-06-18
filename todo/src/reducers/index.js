import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    {
      id: Date.now(),
      task: "create to-do list",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        task: action.payload,
        completed: false
      };
      return {...state, todos: [...state.todos, newTodo] };
    default:
      return state;
  }
};
