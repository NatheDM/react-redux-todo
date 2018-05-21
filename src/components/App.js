import React from "react";
import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import TodoFrom from "./TodoForm";

const store = createStore(todoReducer);

const App = props => (
  <Provider store={store}>
    <div>
      <TodoFrom />
      <TodoList />
    </div>
  </Provider>
);

export default App;
