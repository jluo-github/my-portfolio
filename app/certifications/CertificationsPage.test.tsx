import { render, screen } from "@testing-library/react";
import CertificationsPage from "./page";

describe("CertificationsPage", () => {
  test("render CertificationsPage", () => {
    render(<CertificationsPage />);

    const heading = screen.getByRole("heading", { level: 1, name: /Certifications/i });
    expect(heading).toBeInTheDocument();

    const title = screen.getByText(/AWS Certified Cloud Practitioner/i);
    expect(title).toBeInTheDocument();

    const imgAlt = screen.getByAltText(/AWS Certified Cloud Practitioner/i);
    expect(imgAlt).toBeInTheDocument();
  });
});
