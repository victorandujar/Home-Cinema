import { act, fireEvent, render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";
import { mockImages } from "@/mocks/moviesMocks";

jest.useFakeTimers();

describe("Given a HeroSection component", () => {
  describe("When it is rendered", () => {
    test("Then it should update currentImageIndex when the timer is activated", () => {
      render(<HeroSection images={mockImages} />);

      expect(screen.getByAltText("Avengers")).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(screen.getByAltText("Inception")).toBeInTheDocument();
    });

    test("Then it should change to the next image when sumPage is called", () => {
      render(<HeroSection images={mockImages} />);

      expect(screen.getByAltText("Avengers")).toBeInTheDocument();

      fireEvent.click(screen.getByText(">"));

      expect(screen.getByAltText("Catwoman")).toBeInTheDocument();
    });

    test("Then it should change to the previous image when lessPage is called", () => {
      render(<HeroSection images={mockImages} />);

      expect(screen.getByAltText("Avengers")).toBeInTheDocument();

      fireEvent.click(screen.getByText("<"));

      expect(screen.getByAltText("Joker")).toBeInTheDocument();
    });

    test("Then it should show first image when sumPage is called in the last image", () => {
      render(<HeroSection images={mockImages} />);

      expect(screen.getByAltText("Avengers")).toBeInTheDocument();

      fireEvent.click(screen.getByText(">"));

      fireEvent.click(screen.getByText(">"));

      fireEvent.click(screen.getByText(">"));

      expect(screen.getByAltText("Joker")).toBeInTheDocument();
    });

    test("Then it should show last image when lessPage is called in the last image", () => {
      render(<HeroSection images={mockImages} />);

      expect(screen.getByAltText("Avengers")).toBeInTheDocument();

      fireEvent.click(screen.getByText("<"));

      expect(screen.getByAltText("Joker")).toBeInTheDocument();
    });
  });
});
