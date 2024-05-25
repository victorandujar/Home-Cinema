import { FullList, List, ListsSliceState } from "@/modules/lists/domain/List";
import {
  createMoviesList,
  getMovieListById,
} from "@/modules/lists/infrastructure/listServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ListsSliceState = {
  loading: true,
  list: {} as List,
  listId: 0,
  lists: [],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMoviesList.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMoviesList.fulfilled, (state, action) => {
        state.loading = false;
        state.listId = action.payload.list_id;
        localStorage.setItem("listId", action.payload.list_id.toString());
      })
      .addCase(createMoviesList.rejected, (state) => {
        state.loading = false;
        state.listId = state.listId;
      })
      .addCase(getMovieListById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieListById.fulfilled, (state, action) => {
        state.loading = false;
        state.lists = [action.payload];
      })
      .addCase(getMovieListById.rejected, (state) => {
        state.loading = false;
        state.lists = state.lists;
      });
  },
});

export const listsReducer = listsSlice.reducer;
