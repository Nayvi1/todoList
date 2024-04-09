import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    //     {
    //       id: "",
    //       todo: [
    //         {
    //           id: "",
    //           todoTitle: "",
    //           notes: "",
    //           checked: false,
    //           subtasks: [
    //             {
    //               subtaskTitle: "",
    //               checked: false,
    //             },
    //           ],
    //         },
    //       ],
    //     },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo(state, action) {
      const group = state.todos.findIndex(
        (group) => group.id === action.payload.id
      );

      if (group + 1) {
        state.todos[group].todo.push({ todoTitle: action.payload.name });
      }
    },
    createTodos(state, action) {
      if (state.todos.some((id) => id.id === action.payload)) return;
      state.todos.push({ id: action.payload, todo: [] });
    },
    /**
     * TODO:
     * complete the deleteTodo and editTodo
     */
    deleteTodo() {
      console.log("Todo Deleted!");
    },
    editTodo() {
      console.log("Todo Edited!");
    },
  },
});

export default todoSlice.reducer;
export const { createTodo, deleteTodo, editTodo, createTodos } =
  todoSlice.actions;
