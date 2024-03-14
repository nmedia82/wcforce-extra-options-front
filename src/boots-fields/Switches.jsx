import React from "react";
import Form from "react-bootstrap/Form";

function Switches({ field }) {
  const { label, type } = field;
  return (
    <div className="d-flex justify-content-center">
      <Form.Check type={type} label={label} />
    </div>
  );
}

export default Switches;
