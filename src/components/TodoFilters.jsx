import React from "react";
import { useTodosContext } from "../TodoContext";
import FilterButtons from "./FilterButtons";
const TodoFilters = () => {
  const {
    completedItems,
    clearCompleted,
  } = useTodosContext();
  return (
    <div className="filters-container">
      <span>{completedItems} items left</span>
      <div className="filters-desktop">
        <FilterButtons />
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoFilters;
