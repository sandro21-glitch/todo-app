import React from "react";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import { useTodosContext } from "../TodoContext";
import FilterButtons from "./FilterButtons";
import { DragDropContext } from 'react-beautiful-dnd';
const TodoList = () => {
  const { filteredTodos, lightMode } = useTodosContext();
  if (filteredTodos.length < 1) {
    return (
      <article
        className={`todo-list__container ${lightMode ? "light-mode" : null}`}
      >
        <p className="no-items">No todo items left!</p>
        {/* filter todos */}
        <TodoFilters />
      </article>
    );
  }
  return (
    <article
      className={`todo-list__container ${lightMode ? "light-mode" : null}`}
    >
      {/* todo items */}
      <ul className="added-todos">
        {filteredTodos?.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
      {/* filter todos */}
      <TodoFilters />
    </article>
  );
};

export default TodoList;
