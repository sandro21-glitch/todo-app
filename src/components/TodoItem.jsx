import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTodosContext } from "../TodoContext";

const TodoItem = ({ todo }) => {
  const { handleCheckbox, removeItem } = useTodosContext();
  return (
    <>
      <li className="todo-item">
        <label htmlFor={todo.id}>
          <input
            id={todo.id}
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={(e) => handleCheckbox(e)}
          />
          <p className={`list-name ${todo.completed ? "completed" : null}`}>
            {todo.name}
          </p>
        </label>
        <span
          className="remove-item"
          onClick={() => removeItem(todo.id)}
        ></span>
      </li>
    </>
  );
};

export default TodoItem;
