import React, { useState } from "react";
import { useTodosContext } from "../TodoContext";

const FilterButtons = () => {
  const { handleCompleted, handleAllTodos, handleActiveTodos } =
    useTodosContext();
  const [active, setActive] = useState(0);

  const handleFilterClick = (index) => {
    setActive(index);
  };

  return (
    <ul className="filters">
      <li
        onClick={() => {
          handleFilterClick(0);
          handleAllTodos();
        }}
        className={active === 0 ? "active-filter" : ""}
      >
        All
      </li>
      <li
        onClick={() => {
          handleFilterClick(1);
          handleActiveTodos();
        }}
        className={active === 1 ? "active-filter" : ""}
      >
        Active
      </li>
      <li
        onClick={() => {
          handleFilterClick(2);
          handleCompleted();
        }}
        className={active === 2 ? "active-filter" : ""}
      >
        Completed
      </li>
    </ul>
  );
};

export default FilterButtons;
