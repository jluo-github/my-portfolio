import * as React from "react";

export const EmailTemplate = ({ subject, message }) => (
 <div>
  <h1> {subject}</h1>
  <p>Thank you for contacting us! </p>
  <p>New message submitted: </p>
  <p>{message}</p>
 </div>
);

export default EmailTemplate;
