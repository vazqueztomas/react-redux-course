import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: { id: nanoid(), title, content, userId },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
