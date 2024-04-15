import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: "",
    //   todo: [
    //     {
    //       id: "",
    //       todoTitle: "",
    //       notes: "",
    //       checked: false,
    //       subtasks: [
    //         {
    //           id: "",
    //           subtaskTitle: "",
    //           checked: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    createTodo(state, action) {
      const group = state.todos.find((group) => group.id === action.payload.id);

      group.todo.push({
        todoTitle: action.payload.name,
        id: action.payload.todoId,
        checked: false,
        subTasks: [],
      });
    },
    createTodos(state, action) {
      if (state.todos.some((id) => id.id === action.payload)) return;
      state.todos.push({ id: action.payload, todo: [] });
    },
    completeTodo(state, action) {
      const group = state.todos.find(
        (group) => group.id === action.payload.todosId
      );

      const todo = group.todo.find((todo) => todo.id === action.payload.id);

      todo.checked = !todo.checked;
    },
    /**
     * TODO:
     * complete the deleteTodo and editTodo
     */
    deleteTodo(state, action) {
      const group = state.todos.find(
        (group) => group.id === action.payload.todosId
      );
      const todo = group.todo.filter((todo) => todo.id !== action.payload.id);
      group.todo = todo;
    },
    editTodo() {
      console.log("Todo Edited!");
    },
  },
});

function selectTodosId(_, todosId) {
  return todosId;
}
function selectTodoId(_, __, todoId) {
  return todoId;
}
function selectTodos(state) {
  return state;
}

export const getTodos = createSelector(
  [selectTodosId, selectTodos],
  (todosId, state) => {
    const result = state.todo.todos.find((todo) => todo.id === todosId);
    return result;
  }
);

export const getTodo = createSelector(
  [selectTodosId, selectTodoId, selectTodos],
  (todosId, todoId, state) => {
    const todos = state.todo.todos.find((todo) => todo.id === todosId);

    const result = todos.todo.find((todo) => todo.id === todoId);
    return result;
  }
);

export default todoSlice.reducer;
export const { createTodo, deleteTodo, editTodo, createTodos, completeTodo } =
  todoSlice.actions;
