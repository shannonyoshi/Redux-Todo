export const ADD_TODO = "ADD_TODO";
// export const COMPLETE = "COMPLETE";

export const addTodo = (newTodo) => {
  return { type: ADD_TODO, payload: newTodo };
};

// export const complete = () => {
//   return { type: COMPLETE };
// };
