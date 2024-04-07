import {configureStore} from "@reduxjs/toolkit";
import appState from "./appState.ts";
import stepsState from "./stepsState.ts";
import filterState from "./filterState.ts";

export const store = configureStore({
  reducer: {
    appState,
    stepsState,
    filterState,
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
