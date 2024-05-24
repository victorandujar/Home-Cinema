import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import { screen } from "@testing-library/react";
import { MovieCardList } from "./MovieCardList";

describe("Given a MovieCardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of movies", () => {
      renderWithProviders(<MovieCardList />);

      const expectedList = screen.getByRole("list");

      expect(expectedList).toBeInTheDocument();
    });
  });
});
