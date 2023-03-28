import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo";

export const store = configureStore({
  reducer: {
    todo,
  },
});
//here there is no default keyword,then we import this store as {store} in other components.
//if we have default keyword, then we import that component normalyy like add from "./add".