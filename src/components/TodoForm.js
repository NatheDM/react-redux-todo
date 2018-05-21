import React from "react";
import { connect } from "react-redux";

const mapStateToProps = props => ({});

const mapDispatchToProps = dispatch => ({});

const TodoForm = () => (
  <div>
    <input type="text" placeholder="task" />
    <button>add</button>
  </div>
);

export default connect()(TodoForm);
