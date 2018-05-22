import React from "react";

const TodoItem = ({ complete, title, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      {title}
    </li>
  );
};

export default TodoItem;
