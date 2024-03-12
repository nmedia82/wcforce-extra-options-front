import React from "react";
import Form from "react-bootstrap/Form";

function FormText({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>{title}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeholder}
            boots_size={boots_size}
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default FormText;
