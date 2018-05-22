import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: "ADD_TODO", payload: text })
});

const TodoForm = props => {
  let input;
  return (
    <div>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            if (!input.value) return;
            props.addTodo(input.value);
            input.value = "";
            input.focus();
          }}
        >
          <input type="text" placeholder="task" ref={node => (input = node)} />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoForm);
