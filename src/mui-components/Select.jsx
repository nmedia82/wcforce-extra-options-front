import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";

export default function BasicSelect({ field }) {
  const { label, variant, size, options } = field;
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel> {label}</InputLabel>
        <Select
          value={selectedValue}
          label={label}
          // variant={variant}
          size={size}
          onChange={handleChange}>
          {options.map((option) => (
            <MenuItem value={option.label}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
