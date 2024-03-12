import React from "react";
import Form from "react-bootstrap/Form";

function TextArea({ field }) {
  const { title, type, lines } = field;
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>{title}</Form.Label>
          <Form.Control type={type} as="textarea" />
        </Form.Group>
      </Form>
    </>
  );
}

export default TextArea;
