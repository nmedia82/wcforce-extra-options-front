import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function UrlInputs({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control
          type={type}
          placeholder={placeholder}
          boots_size={boots_size}
        />
      </InputGroup>
    </>
  );
}

export default UrlInputs;
