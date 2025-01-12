import { render, screen } from "@testing-library/react";

import Hero from "./Hero";
import console from "console";

 
describe("Test Hero component", () => {
  test("render Hero", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1, name: /Hello,/i });

    expect(heading).toBeInTheDocument();
  });
});
