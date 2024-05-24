import { AsyncThunk } from "@reduxjs/toolkit";
import { FullMovie, Movie, NowPlayingMoviesApiResponse } from "./Movies";

export interface MoviesRepository {
  getNowPlayingMovies: AsyncThunk<
    { data?: NowPlayingMoviesApiResponse; success?: boolean; error?: string },
    { page: number; language: string },
    {}
  >;

  getMovieById: AsyncThunk<
    { data?: FullMovie; success?: boolean; error?: string },
    { id: number },
    {}
  >;
}
