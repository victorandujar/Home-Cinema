import {
  Movie,
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";
import { getNowPlayingMovies } from "@/modules/movies/infrastructure/moviesServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MoviesSliceState = {
  loading: true,
  movies: [],
  moviesApiResponse: {} as NowPlayingMoviesApiResponse,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.data?.results!;
        state.moviesApiResponse = action.payload.data!;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
