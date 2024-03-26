import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    // {
    //   id: "",
    //   groupName: "",
    //   category: "",
    //   numberOfTodos: 0,
    // },
  ],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    createGroup(state, action) {
      state.groups.push(action.payload);
    },
    editGroup(state, action) {
      state.groups.forEach((group) => {
        if (group.id === action.payload.id) {
          group.name = action.payload.name;
          group.category = action.payload.category;
        }
      });
    },
    deleteGroup(state, action) {
      state.groups = state.groups.filter(
        (group) => group.id !== action.payload
      );
    },
  },
});

export const { createGroup, deleteGroup, editGroup } = groupSlice.actions;

export default groupSlice.reducer;

const selectGroup = (state) => state.group.groups;
const selectCategories = (_, category) => category;
const selectId = (_, id) => id;
export const getGroup = createSelector(
  [selectGroup, selectCategories],
  (group, category) => {
    return group.filter((group) =>
      category.toLowerCase() === "all"
        ? true
        : group.category.toLowerCase() === category.toLowerCase()
    );
  }
);

export const getGroupById = createSelector(
  [selectGroup, selectId],
  (group, id) => {
    return group.find((group) => group.id === id);
  }
);

export const getCategories = createSelector(selectGroup, (state) => {
  const categories = new Set();
  state.forEach((group) => categories.add(group.category.toLowerCase()));
  const categoriesArray = Array.from(categories);

  return categoriesArray;
});
