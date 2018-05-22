import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    })
});

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(td => (
        <TodoItem key={td.id} {...td} onClick={() => toggleTodo(td.id)} />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
