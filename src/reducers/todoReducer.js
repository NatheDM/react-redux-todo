const initialState = {
  todos: []
};

let todoId = 0;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      todoId++;
      return {
        todos: [
          ...state.todos,
          {
            id: todoId,
            title: action.payload,
            complete: false
          }
        ]
      };
    }

    case "TOGGLE_TODO":
      return {
        todos: state.todos.map(
          td =>
            td.id === action.payload ? { ...td, complete: !td.complete } : td
        )
      };

    default:
      return state;
  }
};

export default todoReducer;
