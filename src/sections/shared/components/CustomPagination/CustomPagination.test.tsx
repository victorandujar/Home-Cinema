import { screen, waitFor } from "@testing-library/react";
import CustomPagination from "./CustomPagination";
import renderWithProviders from "../../utils/tests/renderWithProviders";

const mockedUseRouter = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockedUseRouter,
  }),
}));

describe("Given a CustomPagination component", () => {
  describe("When it is rendered with currentPage=1 and total_pages=10", () => {
    test("Then it should render a Pagination component with the same props", () => {
      renderWithProviders(<CustomPagination currentPage={1} pageName="" />);
      const nextPageButton = screen.getByLabelText("Go to page 1");
      expect(nextPageButton).toBeInTheDocument();
    });
  });
});
