import { AsyncThunk } from "@reduxjs/toolkit";
import { FullList, List, ListApiResponse } from "./List";

export interface ListRepository {
  createMoviesList: AsyncThunk<
    ListApiResponse,
    { session_id: string; list: List },
    {}
  >;
  getMovieListById: AsyncThunk<FullList, { list_id: string }, {}>;
  deleteMovieListById: AsyncThunk<
    { success: boolean },
    { list_id: string; session_id: string },
    {}
  >;
}
