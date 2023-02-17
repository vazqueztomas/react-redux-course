import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  },
  {
    id: "2",
    title: "Learning Slice with Redux Toolkit",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
