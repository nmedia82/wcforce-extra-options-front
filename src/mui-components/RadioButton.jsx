import React from "react";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

export default function RadioButtons({ field }) {
  const { variant, color, size, labelPlacement, options } = field;
  return (
    <div>
      <FormControl>
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
      </FormControl>
    </div>
  );
}
