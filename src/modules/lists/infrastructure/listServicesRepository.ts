import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListRepository } from "../domain/ListRepository";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import endpoints from "@/sections/shared/utils/api/endpoints/endpoints";
import { FullList, List, ListApiResponse } from "../domain/List";
import { revalidateTag } from "next/cache";

export const listRepository = (): ListRepository => {
  return { createMoviesList, getMovieListById };
};

export const createMoviesList = createAsyncThunk<
  ListApiResponse,
  { session_id: string; list: List }
>("list/createMoviesList", async ({ session_id, list }) => {
  const { data, success } = await customFetch(
    "POST",
    `${endpoints.baseMovieList}?session_id=${session_id}`,
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

export const getMovieListById = createAsyncThunk<FullList, { list_id: string }>(
  "list/getMovieListById",
  async ({ list_id }) => {
    const { data, success } = await customFetch(
      "GET",
      `${endpoints.baseMovieList}/${list_id}`,
    );
    if (!success) {
      return {} as FullList;
    }

    return data as FullList;
  },
);
