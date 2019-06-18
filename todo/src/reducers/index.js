import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      id: Date.now(),
      task: "Create To-Do list",
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
      return { ...state, todos: [...state.todos, newTodo] };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(el =>
          el.id === action.payload ? { ...el, completed: !el.completed } : el
        )
      };

    case DELETE_TODO:
    return{
      ...state, todos: state.todos.filter(todo=>
        todo.id !==action.payload)
    }  
    default:
      return state;
  }
};
