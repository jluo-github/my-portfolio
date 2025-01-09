import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

// Mock child components
jest.mock("@/components/Hero", () => {
  const Hero = () => <div data-testid='hero'>Hero Component</div>;
  Hero.displayName = "Hero";
  return Hero;
});
jest.mock("@/components/Experience", () => () => (
  <div data-testid='experience'>Experience Component</div>
));
jest.mock("@/components/About", () => () => (
  <div data-testid='about'>About Component</div>
));
jest.mock("@/components/Projects", () => () => (
  <div data-testid='projects'>Projects Component</div>
));
jest.mock("@/components/Contact", () => () => (
  <div data-testid='contact'>Contact Component</div>
));

describe("Test HomePage", () => {
  test("render HomePage", () => {
    render(<HomePage />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("experience")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("projects")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  test("matches the snapshot", () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
