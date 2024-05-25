import { List, ListsSliceState } from "@/modules/lists/domain/List";
import { createMoviesList } from "@/modules/lists/infrastructure/listServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ListsSliceState = {
  loading: true,
  list: {} as List,
  listId: 0,
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
      })
      .addCase(createMoviesList.rejected, (state, action) => {
        state.loading = false;
        state.listId = state.listId;
      });
  },
});

export const listsReducer = listsSlice.reducer;
