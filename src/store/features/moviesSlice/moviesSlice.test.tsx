import configureStore from "redux-mock-store";
import { moviesReducer } from "@/store/features/moviesSlice/moviesSlice";
import { getNowPlayingMovies } from "@/modules/movies/infrastructure/moviesServicesRepository";
import { mockMovies, mockMoviesApiResponse } from "@/mocks/moviesMocks";
import { thunk } from "redux-thunk";
import {
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

const initialState: MoviesSliceState = {
  loading: false,
  movies: [],
  error: null,
  moviesApiResponse: {} as NowPlayingMoviesApiResponse,
};

describe("Given a moviesSlice", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe("When it receives a new state and the action to load now playing movies & request is not fullfilled", () => {
    test("Then it should handle getNowPlayingMovies.pending", () => {
      const action = { type: getNowPlayingMovies.pending.type };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: true,
        movies: [],
        error: null,
        moviesApiResponse: {},
      });
    });
  });
  describe("When it receives a new state and the action to load now playing movies & request is fullfilled", () => {
    test("Then it should handle getNowPlayingMovies.fulfilled", () => {
      const payload = { data: mockMoviesApiResponse };
      const action = { type: getNowPlayingMovies.fulfilled.type, payload };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        movies: mockMovies,
        error: null,
        moviesApiResponse: mockMoviesApiResponse,
      });
    });
  });
  describe("When it receives a new state and the action to load now playing movies & request is rejected", () => {
    test("Then it should handle getNowPlayingMovies.rejected", () => {
      const error = { message: "Failed to load" };
      const action = { type: getNowPlayingMovies.rejected.type, error };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        movies: [],
        error: "Failed to load",
        moviesApiResponse: {},
      });
    });
  });
});
