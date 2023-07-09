export const todosReducer = (state, action) => {
  if (action.type === "SUBMIT_FORM") {
    const obj = {
      id: Date.now().toString(),
      name: action.payload,
      completed: false,
    };
    const countCompleted = state.allTodos.map((todo) => todo.completed == true);
    return {
      ...state,
      allTodos: [...state.allTodos, obj],
      completedItems: countCompleted.length,
    };
  }
  if (action.type === "ALL_TODO_FILTERS") {
    return { ...state, filteredTodos: [...state.allTodos] };
  }
  if (action.type === "COMPLETED") {
    const { checkboxId, isChecked } = action.payload;
    const checkCompleted = state.allTodos.map((todo) => {
      if (todo.id == checkboxId) {
        return { ...todo, completed: isChecked };
      }
      return todo;
    });

    return {
      ...state,
      allTodos: [...checkCompleted],
    };
  }
  if (action.type === "FILTER_COMPLETED") {
    const completedList = state.allTodos.filter((todo) => {
      return todo.completed == true;
    });
    return { ...state, filteredTodos: completedList };
  }
  if (action.type === "SHOW_ALL_TODOS") {
    return { ...state, filteredTodos: [...state.allTodos] };
  }
  if (action.type === "ACTIVE_TODOS") {
    const completedList = state.allTodos.filter((todo) => {
      return todo.completed == false;
    });
    return { ...state, filteredTodos: completedList };
  }
  if (action.type === "REMOVE_ITEM") {
    const removeItem = state.allTodos.filter((todo) => {
      return todo.id !== action.payload;
    });
    return { ...state, allTodos: removeItem };
  }
  if (action.type === "CLEAR_COMPLETED") {
    const clearCompleted = state.allTodos.filter((todo) => {
      return todo.completed !== true;
    });
    return { ...state, allTodos: clearCompleted };
  }
  if (action.type === "COMPLETED_LENGTH") {
    const completedLength = state.allTodos.filter(
      (todo) => todo.completed != true
    );

    return { ...state, completedItems: completedLength.length };
  }
};
