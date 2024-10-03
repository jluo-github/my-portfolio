import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import About from "../../components/About";

test("About Page", () => {
  render(<About />);
  // Check if the heading is in the document
  const heading = screen.getByRole("heading", { level: 2, name: /Building skills and Pursuing Continuous Growth/i });

  expect(heading).toBeDefined();
});
