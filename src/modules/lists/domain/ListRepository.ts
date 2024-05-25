import { AsyncThunk } from "@reduxjs/toolkit";
import { List, ListApiResponse } from "./List";

export interface ListRepository {
  createMoviesList: AsyncThunk<
    ListApiResponse,
    { session_id: string; list: List },
    {}
  >;
}
