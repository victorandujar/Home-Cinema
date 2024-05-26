import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import { ListCard } from "./ListCard";
import { mockFullList, mockLists } from "@/mocks/listsMocks";
import { screen } from "@testing-library/react";

describe("Given a ListCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the list name", () => {
      renderWithProviders(<ListCard list={mockFullList} />);

      const expectedListname = screen.getByRole("heading", {
        name: mockFullList.name,
      });

      expect(expectedListname).toBeInTheDocument();
    });

    test("Then it should show two buttons", () => {
      renderWithProviders(<ListCard list={mockFullList} />);

      const expectedButtons = screen.getByRole("button");

      expect(expectedButtons).toBeInTheDocument();
    });
  });
});
