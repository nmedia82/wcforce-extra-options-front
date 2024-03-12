import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function CheckBoxs({ field }) {
  const { title, color, size, labelPlacement, defaultChecked } = field;
  return (
    <Box>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox color={color} size={size} />}
          label={title}
          labelPlacement={labelPlacement}
        />
        <Checkbox defaultChecked={defaultChecked} />
      </FormGroup>
    </Box>
  );
}
