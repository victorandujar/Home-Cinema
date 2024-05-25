import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/tests/renderWithProviders";
import { DropdownMenu } from "./DropdownMenu";
import menuOptions from "./utils/menuOptions/menuOptions";

describe("Given a DropdownMenu component", () => {
  describe("When it is rendered and it receives an array of menu options", () => {
    test("Then it should show an option with the text 'My lists'", () => {
      const anchorElement = document.createElement("div");

      renderWithProviders(
        <DropdownMenu
          anchorEl={anchorElement}
          setAnchorEl={jest.fn()}
          options={menuOptions}
        />,
      );
      const expectedText = screen.getByText(menuOptions[0].name);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
