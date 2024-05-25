import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListRepository } from "../domain/ListRepository";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import endpoints from "@/sections/shared/utils/api/endpoints/endpoints";
import { List, ListApiResponse } from "../domain/List";

export const listRepository = (): ListRepository => {
  return { createMoviesList };
};

export const createMoviesList = createAsyncThunk<
  ListApiResponse,
  { session_id: string; list: List }
>("list/createMoviesList", async ({ session_id, list }) => {
  const { data, success } = await customFetch(
    "POST",
    `${endpoints.createMovieList}?session_id=${session_id}`,
    {
      body: {
        ...list,
      },
    },
  );
  if (!success) {
    return { list_id: 0, success: false };
  }

  return data as ListApiResponse;
});
