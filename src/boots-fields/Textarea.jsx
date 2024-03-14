import React from "react";
import Form from "react-bootstrap/Form";

function TextArea({ field }) {
  const { title, type, lines } = field;
  return (
    <>
      <Form.Label>{title}</Form.Label>
      <Form.Control type={type} as="textarea" />
    </>
  );
}

export default TextArea;
