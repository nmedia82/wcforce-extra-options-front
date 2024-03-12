import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function EmailFields({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <InputGroup.Radio />
      <Form.Control
        type={type}
        placeholder={placeholder}
        boots_size={boots_size}
      />
    </>
  );
}

export default EmailFields;
