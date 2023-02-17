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
  reducers: {},
});
