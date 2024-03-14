import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Checkboxes({ field }) {
  const { title, type, reverse, inline } = field;
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (index) => {
    if (selectedCheckbox === index) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(index);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      {[...Array(3)].map((_, index) => (
        <Form.Check
          key={index}
          type={type}
          label={title}
          reverse={reverse}
          inline={inline}
          style={{ marginRight: "10px" }} // Added spacing between checkboxes
          checked={selectedCheckbox === index}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
    </div>
  );
}

export default Checkboxes;
