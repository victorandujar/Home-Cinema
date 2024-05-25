import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/tests/renderWithProviders";
import ReusableButton from "./ReusableButton";
import userEvent from "@testing-library/user-event";

describe("Given a ReusableButton component", () => {
  describe("When it is rendered with its props", () => {
    test("Then it should show the text `Create` and when clicked call onClick func", async () => {
      const buttonText = "Create";
      const mockedFunc = jest.fn();

      renderWithProviders(
        <ReusableButton onClick={mockedFunc} text="Create" />,
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(expectedButton);

      expect(mockedFunc).toHaveBeenCalled();
    });
  });
});
