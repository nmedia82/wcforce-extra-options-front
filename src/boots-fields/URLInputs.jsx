import React from "react";
import Form from "react-bootstrap/Form";

function UrlInputs({ field }) {
  const { title, type, placeholder, boots_size } = field;
  return (
    <>
      <Form.Control
        type={type}
        placeholder={placeholder}
        boots_size={boots_size}
      />
    </>
  );
}

export default UrlInputs;
