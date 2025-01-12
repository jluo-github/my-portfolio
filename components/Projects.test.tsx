import { render, screen } from "@testing-library/react";

import Projects from "./Projects";

describe("Projects", () => {
  test("render Projects component", () => {
    render(<Projects />);

    const title = screen.getByText(/Soft & Sweet Home/i);
    expect(title).toBeInTheDocument();

    const imgAlt = screen.getByAltText(/Soft & Sweet Home/i);
    expect(imgAlt).toBeInTheDocument();
  });
});
