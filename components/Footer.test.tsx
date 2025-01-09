import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  test("render Footer", () => {
    render(<Footer />);

    expect(screen.getByText(/All rights reserved./i)).toBeInTheDocument();
  });
});
