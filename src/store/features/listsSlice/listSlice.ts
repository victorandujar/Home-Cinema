import { FullList, ListsSliceState } from "@/modules/lists/domain/List";
import {
  createMoviesList,
  getMovieListById,
  updateMovieListById,
} from "@/modules/lists/infrastructure/listServicesRepository";
import { createSlice } from "@reduxjs/toolkit";
import { deleteMovieListById } from "../../../modules/lists/infrastructure/listServicesRepository";

const initialState: ListsSliceState = {
  loading: true,
  list: {} as FullList,
  listId: 0,
  lists: [],
  success: false,
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
        state.list = action.payload;
      })
      .addCase(getMovieListById.rejected, (state) => {
        state.loading = false;
        state.lists = state.lists;
      })
      .addCase(deleteMovieListById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMovieListById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.lists = [];
        state.listId = 0;
      })
      .addCase(deleteMovieListById.rejected, (state) => {
        state.loading = false;
        state.success = state.success;
      })
      .addCase(updateMovieListById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMovieListById.fulfilled, (state, action) => {
        state.success = action.payload.success;
      })
      .addCase(updateMovieListById.rejected, (state) => {
        state.loading = false;
        state.success = state.success;
      });
  },
});

export const listsReducer = listsSlice.reducer;
