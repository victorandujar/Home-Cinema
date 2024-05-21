import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Test } from "./Test";

describe("Test test", () => {
  test("It should show text test", () => {
    render(<Test />);

    const text = screen.getByText("Test");

    expect(text).toBeInTheDocument();
  });
});
