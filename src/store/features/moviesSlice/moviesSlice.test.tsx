import configureStore from "redux-mock-store";
import { moviesReducer } from "@/store/features/moviesSlice/moviesSlice";
import {
  getMovieById,
  getNowPlayingMovies,
} from "@/modules/movies/infrastructure/moviesServicesRepository";
import {
  mockMovie,
  mockMovies,
  mockMoviesApiResponse,
} from "@/mocks/moviesMocks";
import { thunk } from "redux-thunk";
import {
  Movie,
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

const initialState: MoviesSliceState = {
  loading: false,
  movies: [],
  error: "",
  moviesApiResponse: {} as NowPlayingMoviesApiResponse,
  movie: {} as Movie,
};

let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore(initialState);
});

describe("Given a moviesSlice", () => {
  describe("When it receives a new state and the action to load now playing movies & request is not fullfilled", () => {
    test("Then it should handle getNowPlayingMovies.pending", () => {
      const action = { type: getNowPlayingMovies.pending.type };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: true,
        movies: [],
        error: "",
        moviesApiResponse: {},
        movie: {},
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
        error: undefined,
        moviesApiResponse: mockMoviesApiResponse,
        movie: {},
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
        movie: {},
        error: "Failed to load",
        moviesApiResponse: {},
      });
    });
  });
});

describe("Given a moviesSlice", () => {
  describe("When it receives a new state and the action to get a movie by ID & request is not fulfilled", () => {
    test("Then it should handle getMovieById.pending", () => {
      const action = { type: getMovieById.pending.type };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: true,
        movies: [],
        error: "",
        moviesApiResponse: {},
        movie: {},
      });
    });
  });

  describe("When it receives a new state and the action to get a movie by ID & request is fulfilled", () => {
    test("Then it should handle getMovieById.fulfilled", () => {
      const payload = { data: mockMovie };
      const action = { type: getMovieById.fulfilled.type, payload };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        movies: [],
        error: "",
        moviesApiResponse: {},
        movie: mockMovie,
      });
    });
  });

  describe("When it receives a new state and the action to get a movie by ID & request is rejected", () => {
    test("Then it should handle getMovieById.rejected", () => {
      const error = { message: "Failed to load movie" };
      const action = { type: getMovieById.rejected.type, error };
      const state = moviesReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        movies: [],
        movie: {},
        error: "Failed to load movie",
        moviesApiResponse: {},
      });
    });
  });
});
