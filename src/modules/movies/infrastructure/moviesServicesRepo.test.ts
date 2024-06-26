import { configureStore } from "@reduxjs/toolkit";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import { getMovieById, getNowPlayingMovies } from "./moviesServicesRepository";
import { moviesReducer } from "@/store/features/moviesSlice/moviesSlice";
import { mockMovie } from "@/mocks/moviesMocks";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const mockData = {
  results: [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ],
};

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

describe("Given a getNowPlayingMovies function", () => {
  describe("When it is called and it is fullfilled", () => {
    test("should fetch now playing movies successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockData,
      });

      const response = await store.dispatch(
        getNowPlayingMovies({ page: 1, language: "en-US" }),
      );

      expect(response.payload).toEqual({
        success: true,
        data: mockData,
      });
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Falided to load",
      });

      const response = await store.dispatch(
        getNowPlayingMovies({ page: 1, language: "en-US" }),
      );

      expect(response.payload).toEqual({
        error: "Falided to load",
        success: false,
      });
    });
  });
});

describe("Given a getMovieById function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("should fetch movie by ID successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockMovie,
      });

      const response = await store.dispatch(getMovieById({ id: 786892 }));

      expect(response.payload).toEqual({
        success: true,
        data: mockMovie,
      });
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Failed to load movie",
      });

      const response = await store.dispatch(getMovieById({ id: 786892 }));

      expect(response.payload).toEqual({
        error: "Failed to load movie",
        success: false,
      });
    });
  });
});
