import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./features/group/groupSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "group",
  storage,
};
export const localstorageMiddleware = () => (next) => (action) => {
  if (action.type === "group/createGroup") {
    action.payload.id = Math.floor(Math.random() * 1000000000) + "T";
  }

  // if (groupSlice.actions.createGroup.match(action)) {

  // }
  return next(action);
};

const persistedGroup = persistReducer(persistConfig, groupSlice);
const store = configureStore({
  reducer: {
    group: persistedGroup,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      localstorageMiddleware
    ),
});

export default store;
export const persistor = persistStore(store);
