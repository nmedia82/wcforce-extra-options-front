import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";

export default function NumberInput({ field }) {
  const { title, variant, color, size, type, position } = field;
  return (
    <Box>
      <TextField
        fullWidth
        label={title}
        variant={variant}
        color={color}
        size={size}
        type={type}
        InputProps={{
          endAdornment: <InputAdornment position={position}>Kg</InputAdornment>,
        }}
      />
    </Box>
  );
}
