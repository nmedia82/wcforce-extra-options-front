import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NumberInputs({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        boots_size={boots_size}
      />
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </>
  );
}

export default NumberInputs;
