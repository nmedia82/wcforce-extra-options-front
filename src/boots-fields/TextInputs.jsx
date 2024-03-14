import React from "react";
import Form from "react-bootstrap/Form";

function FormText({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        boots_size={boots_size}
      />
    </>
  );
}

export default FormText;
