const initialState = {
  todos: [
    {
      id: 0,
      title: "Do the Macarena.",
      complete: true
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  return state;
};

export default todoReducer;
