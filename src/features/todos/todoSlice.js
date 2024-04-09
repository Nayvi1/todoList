import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   Todos: [
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
  //   ],
};

/**
 * TODO:
 * implement the creating todo function
 * should be able to create more todos
 */

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo() {
      console.log("Todo Created!");
    },
    deleteTodo() {
      console.log("Todo Deleted!");
    },
    editTodo() {
      console.log("Todo Edited!");
    },
  },
});

export default todoSlice.reducer;
