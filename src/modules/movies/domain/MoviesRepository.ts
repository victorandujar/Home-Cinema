import { AsyncThunk } from "@reduxjs/toolkit";
import { Movie, NowPlayingMoviesApiResponse } from "./Movies";

export interface MoviesRepository {
  getNowPlayingMovies: AsyncThunk<
    { data?: NowPlayingMoviesApiResponse; success?: boolean; error?: string },
    { page: number; language: string },
    {}
  >;

  getMovieById: AsyncThunk<
    { data?: Movie; success?: boolean; error?: string },
    { id: number },
    {}
  >;
}
