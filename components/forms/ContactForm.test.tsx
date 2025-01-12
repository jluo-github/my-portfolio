import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";
import { sendEmail } from "@/lib/actions";

// Mock the `sendEmail` function and `toast` notifications
jest.mock("@/lib/actions", () => ({
  sendEmail: jest.fn(),
}));

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("ContactForm", () => {
  test("render ContactForm", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    const email = screen.getByPlaceholderText(/Your Email/i);
    expect(email).toBeInTheDocument();

    const msg = screen.getByPlaceholderText(/Your Message/i);
    expect(msg).toBeInTheDocument();

    const btn = screen.getByText(/Contact Me/i);
    expect(btn).toBeInTheDocument();

  });
});
