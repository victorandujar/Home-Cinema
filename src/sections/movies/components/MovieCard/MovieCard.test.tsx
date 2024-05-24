import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import { mockMovies } from "@/mocks/moviesMocks";
import { screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("Given a MovieCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image from the movie", () => {
      renderWithProviders(<MovieCard movie={mockMovies[0]} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show the title of the movie", () => {
      renderWithProviders(<MovieCard movie={mockMovies[0]} />);

      const expectedTitle = screen.getByText(mockMovies[0].title);

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
