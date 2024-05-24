import endpoints from "@/sections/shared/utils/api/endpoints/endpoints";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import { Movie, NowPlayingMoviesApiResponse } from "../domain/Movies";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesRepository } from "../domain/MoviesRepository";

export const moviesRepository = (): MoviesRepository => {
  return { getNowPlayingMovies, getMovieById };
};

export const getNowPlayingMovies = createAsyncThunk<
  { data?: NowPlayingMoviesApiResponse; success?: boolean; error?: string },
  { page: number; language: string }
>("movies/getNowPlayingMovies", async ({ page, language }) => {
  const { data, success, error } = await customFetch(
    "GET",
    `${endpoints.nowPlayingMovies}?page=${page}&language=${language}`,
  );
  if (!success) {
    return {
      success,
      error,
    };
  }

  return { data: data as NowPlayingMoviesApiResponse, success };
});

export const getMovieById = createAsyncThunk<
  { data?: Movie; success?: boolean; error?: string },
  { id: number }
>("movies/getMovieById", async ({ id }) => {
  const { data, success, error } = await customFetch(
    "GET",
    `${endpoints.getMovieById}/${id}`,
  );
  if (!success) {
    return {
      success,
      error,
    };
  }

  return { data: data as Movie, success };
});
