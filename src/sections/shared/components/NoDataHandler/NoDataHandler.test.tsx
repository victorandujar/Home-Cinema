import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/tests/renderWithProviders";
import NoDataHandler from "./NoDataHandler";

describe("Given a NoDataHandler component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a message with the text set by props", () => {
      const text = "No hay datos";

      renderWithProviders(<NoDataHandler text={text} />);

      const expectedMessage = screen.getByText(text);

      expect(expectedMessage).toBeInTheDocument();
    });
  });
});
