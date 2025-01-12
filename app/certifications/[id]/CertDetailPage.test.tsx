import { render, screen } from "@testing-library/react";
import CertDetailPage from "./page";

describe("CertDetailPage", () => {
  test("render CertDetailPage", () => {
    const params = { id: "1" };
    render(<CertDetailPage params={params} />);

    const link = screen.getByRole("link", { name: /Back to Certifications/i });
    expect(link).toBeInTheDocument();

    const title = screen.getByText(/AWS Certified Cloud Practitioner/i);
    expect(title).toBeInTheDocument();

    const imgAlt = screen.getByAltText(/AWS Certified Cloud Practitioner/i);
    expect(imgAlt).toBeInTheDocument();
  });
});
