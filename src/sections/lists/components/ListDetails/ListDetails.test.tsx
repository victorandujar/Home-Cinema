import renderWithProviders from "@/sections/shared/utils/tests/renderWithProviders";
import { ListDetails } from "./ListDetails";
import { mockFullList } from "@/mocks/listsMocks";
import { screen } from "@testing-library/react";

describe("Given a ListDetails component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show a list of movies", () => {
      renderWithProviders(<ListDetails />, {
        lists: {
          list: mockFullList,
          listId: 1,
          lists: [],
          loading: false,
          success: true,
        },
      });

      const expectedLsit = screen.getByRole("list");

      expect(expectedLsit).toBeInTheDocument();
    });

    test("Then it should show the name of the list", () => {
      renderWithProviders(<ListDetails />, {
        lists: {
          list: mockFullList,
          listId: 1,
          lists: [],
          loading: false,
          success: true,
        },
      });

      const expectedListName = screen.getByText(mockFullList.name);

      expect(expectedListName).toBeInTheDocument();
    });
  });
});
