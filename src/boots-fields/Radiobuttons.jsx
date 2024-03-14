import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function RadioButton({ field }) {
  const { type, reverse, inline, options } = field;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      {options.map((option, index) => (
        <Form.Check
          key={index}
          type={type}
          label={option.label}
          value={option.value}
          inline={inline}
          checked={selectedOption === index}
          onChange={() => handleOptionChange(index)}
        />
      ))}
    </>
  );
}

export default RadioButton;
