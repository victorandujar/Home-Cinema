"use client";

import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { moviesReducer } from "./features/moviesSlice/moviesSlice";
import { userReducer } from "./features/userSlice/userSlice";
import { listsReducer } from "./features/listsSlice/listSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  lists: listsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
