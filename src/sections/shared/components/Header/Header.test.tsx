import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "./Header";
import renderWithProviders from "../../utils/tests/renderWithProviders";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo title and its logo image", () => {
      const title = "Home cinema";

      renderWithProviders(<Header />);

      const expectedTitle = screen.getByRole("heading", { name: title });
      const expectedLogoImage = screen.getByRole("img");

      expect(expectedLogoImage).toBeInTheDocument();
      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
