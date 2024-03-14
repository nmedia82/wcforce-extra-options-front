import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Slider({ field }) {
  const { title, animated, variant, striped } = field;
  return (
    <ProgressBar
      striped={striped}
      now={40}
      label={title}
      variant={variant}
      animated={animated}
    />
  );
}

export default Slider;
