import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

const TodoList = props => {
  return <ul>{props.todos.map(td => <li>{td.title}</li>)}</ul>;
};

export default connect(mapStateToProps)(TodoList);
