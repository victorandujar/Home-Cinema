import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/tests/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a spinner with an aria-label text `loading`", () => {
      const ariaLabelText = "loading";

      renderWithProviders(<Loader />);

      const expectedLoader = screen.getByLabelText(ariaLabelText);

      expect(expectedLoader).toBeInTheDocument();
    });
  });
});
