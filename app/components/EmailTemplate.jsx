import * as React from "react";

export const EmailTemplate = ({ subject, message }) => (
 <div>
  <h1> {subject}</h1>
  <p>Thank you for contacting us! </p>
  <p>We will get back to you as soon as possible.</p>
  <p>{message}</p>
 </div>
);

export default EmailTemplate;
