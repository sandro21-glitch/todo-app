import React, { useContext, useEffect, useReducer, useState } from "react";
import { todosReducer } from "./todosReducer";
const TODOS = React.createContext();

const getLocalStorage = () => {
  let storedTodo = localStorage.getItem("storedTodo");
  if (storedTodo) {
    return JSON.parse(localStorage.getItem("storedTodo"));
  } else {
    return [];
  }
};
const initialState = {
  allTodos: getLocalStorage(),
  filteredTodos: [],
  completedItems: 0,
};

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  const handleSubmit = (item) => {
    if (item === "" || item == null) {
      return;
    }
    dispatch({ type: "SUBMIT_FORM", payload: item });
  };

  const handleCheckbox = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;
    dispatch({ type: "COMPLETED", payload: { checkboxId, isChecked } });
  };

  useEffect(() => {
    localStorage.setItem("storedTodo", JSON.stringify(state.allTodos));
    dispatch({ type: "ALL_TODO_FILTERS" });
  }, [state.allTodos]);

  const handleCompleted = () => {
    dispatch({ type: "FILTER_COMPLETED" });
  };
  const handleAllTodos = () => {
    dispatch({ type: "SHOW_ALL_TODOS" });
  };
  const handleActiveTodos = () => {
    dispatch({ type: "ACTIVE_TODOS" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };
  useEffect(() => {
    dispatch({ type: "COMPLETED_LENGTH" });
  }, [state.allTodos, state.filteredTodos]);
  return (
    <TODOS.Provider
      value={{
        ...state,
        handleSubmit,
        handleCheckbox,
        handleCompleted,
        handleAllTodos,
        handleActiveTodos,
        removeItem,
        clearCompleted,
        lightMode,
        setLightMode,
      }}
    >
      {children}
    </TODOS.Provider>
  );
};

export default TodoContext;

export const useTodosContext = () => {
  return useContext(TODOS);
};
