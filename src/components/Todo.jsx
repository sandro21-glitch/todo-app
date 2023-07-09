import React from "react";
import ThemeControl from "./ThemeControl";
import Form from "./Form";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
const Todo = () => {
  return (
    <section className="todo">
      <ThemeControl />
      <Form />
      <TodoList />
      <div className="filters-mobile">
        <FilterButtons />
      </div>
    </section>
  );
};

export default Todo;
