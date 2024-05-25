import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import { screen } from "@testing-library/react";
import { ListCardList } from "./ListCardList";

describe("Given a ListCardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of movies", () => {
      renderWithProviders(<ListCardList />);

      const expectedList = screen.getByRole("list");

      expect(expectedList).toBeInTheDocument();
    });
  });
});
