import { screen } from "@testing-library/react";
import MovieDetail from "./MovieDetail";
import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import {
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";
import { mockMovie } from "@/mocks/moviesMocks";

describe("Given a MovieDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Oppenheimer'", () => {
      renderWithProviders(<MovieDetail />, {
        movies: {
          movie: mockMovie,
          loading: false,
          error: "",
          movies: [],
          moviesApiResponse: {} as NowPlayingMoviesApiResponse,
        },
      });

      const expectedTitle = screen.getByRole("heading", {
        name: mockMovie.title,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
