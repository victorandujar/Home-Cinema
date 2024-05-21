import { AsyncThunk } from "@reduxjs/toolkit";
import { NowPlayingMoviesApiResponse } from "./Movies";

export interface MoviesRepository {
  getNowPlayingMovies: AsyncThunk<
    { data?: NowPlayingMoviesApiResponse; success?: boolean; error?: string },
    { page: number; language: string },
    {}
  >;
}
