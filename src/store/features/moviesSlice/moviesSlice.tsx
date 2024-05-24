import {
  Movie,
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";
import {
  getMovieById,
  getNowPlayingMovies,
} from "@/modules/movies/infrastructure/moviesServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MoviesSliceState = {
  loading: true,
  movies: [],
  movie: {} as Movie,
  moviesApiResponse: {} as NowPlayingMoviesApiResponse,
  error: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.data?.results!;
        state.moviesApiResponse = action.payload.data!;
        state.error = action.payload.error! && action.payload.error!;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });

    builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload.data!;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
