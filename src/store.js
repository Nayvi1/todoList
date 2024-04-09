import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./features/group/groupSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import todoSlice from "./features/todos/todoSlice";

const persistGroupConfig = {
  key: "group",
  storage,
};
const persistTodoConfig = {
  key: "todo",
  storage,
};
export const localstorageMiddleware = () => (next) => (action) => {
  if (action.type === "group/createGroup") {
    action.payload.id = Math.floor(Math.random() * 1000000000) + "T";
  }
  return next(action);
};

const persistedGroup = persistReducer(persistGroupConfig, groupSlice);
const persistedTodo = persistReducer(persistTodoConfig, todoSlice);
const store = configureStore({
  reducer: {
    group: persistedGroup,
    todo: persistedTodo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      localstorageMiddleware
    ),
});

export default store;
export const persistor = persistStore(store);
