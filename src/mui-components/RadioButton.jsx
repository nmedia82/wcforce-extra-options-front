import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioButtons({ field }) {
  const { variant, color, size, labelPlacement, options } = field;
  return (
    <div>
      <RadioGroup row>
        {options.map((option) => (
          <FormControlLabel
            control={<Radio />}
            value={option.label}
            label={option.label}
            size={size}
            color={color}
            variant={variant}
            labelPlacement={option.labelPlacement}></FormControlLabel>
        ))}
      </RadioGroup>
    </div>
  );
}
