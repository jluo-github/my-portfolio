import * as React from "react";

export const EmailTemplate = ({ email, subject, message }) => (
  <div>
    <h1> {subject}</h1>
    <p> New message from {email}</p>
    <p>Thank you for contacting us! </p>
    <p>New message submitted: </p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
