import { render } from "@testing-library/react";
import { GoBackButton } from "./GoBackButton";
import userEvent from "@testing-library/user-event";

const mockedFunction = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: mockedFunction,
  }),
}));

describe("GoBackButton", () => {
  test("navigates back when the button is clicked", async () => {
    const { getByText } = render(<GoBackButton />);
    const backButton = getByText("Back");
    await userEvent.click(backButton);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
