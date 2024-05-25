import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListCreateForm from "./ListCreateForm";
import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";

describe("Given a ListCreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create list'", () => {
      const buttonText = "Create list";

      renderWithProviders(<ListCreateForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should set `SciFi` as value when the user writes it", async () => {
      const labelText = "Name";
      const userText = "SciFi";

      renderWithProviders(<ListCreateForm />);

      const expectedInput = screen.getByLabelText(labelText);

      await waitFor(async () => {
        await userEvent.type(expectedInput, userText);
      });

      expect(expectedInput).toBeInTheDocument();
      expect(expectedInput).toHaveValue(userText);
    });
  });
});
