import React, { useEffect, useState } from "react";
import { useTodosContext } from "../TodoContext";

const Form = () => {
  const { handleSubmit, lightMode } = useTodosContext();
  const [item, setItem] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(item);
    setItem("");
  };

  return (
    <form className={`form-control ${lightMode ? 'light-mode' : null}`} onSubmit={handleFormSubmit}>
      <span className="round"></span>
      <input
        type="text"
        className="todo-input"
        placeholder="Create a new todo..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </form>
  );
};

export default Form;
