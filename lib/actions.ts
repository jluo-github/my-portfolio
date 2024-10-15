"use server";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

// send email
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;
const toEmail = process.env.TO_EMAIL!;
export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string;

  if (!message || !senderEmail) {
    return { error: "Please fill out all fields" };
  }

  try {
    // send email
    await resend.batch.send([
      {
        from: `Jin Luo <${fromEmail}>`,
        to: [senderEmail],
        subject: "Thank You for Reaching Out!",
        text: `
    Hi there,

    Thank you for reaching out to me! 
    I will get back to you as soon as possible.

    Best regards,
    Jin Luo
  `,
      },
      {
        from: `My Portfolio Contact Form <${fromEmail}>`,
        to: [toEmail],
        subject: "New message from my-portfolio contact form",
        replyTo: senderEmail,
        text: message,
      },
    ]);
    return { message: `Email sent successfully from ${senderEmail}!` };
  } catch (error: unknown) {
    return { message: "An error occurred" };
  }
};
