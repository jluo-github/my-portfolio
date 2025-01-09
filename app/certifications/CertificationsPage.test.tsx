import { render, screen } from "@testing-library/react";
import CertificationsPage from "./page";

describe("CertificationsPage", () => {
  test("render CertificationsPage", () => {
    render(<CertificationsPage />);

    const heading = screen.getByRole("heading", { level: 1, name: /Certifications/i });

    expect(heading).toBeInTheDocument();
  });
});
