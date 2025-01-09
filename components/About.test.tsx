import { render, screen } from "@testing-library/react";
import About from "./About"; 

describe("Test About component", () => {
  test("render About", () => {
    render(<About />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Building skills and Pursuing Continuous Growth/i,
    });
    expect(heading).toBeDefined();
  });
});
