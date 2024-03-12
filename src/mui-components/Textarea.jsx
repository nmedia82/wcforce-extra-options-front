import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextArea({ field }) {
  const { title, variant, color, size, default_value, position, lines } = field;
  return (
    <Box>
      <TextField
        fullWidth
        label={title}
        variant={variant}
        size={size}
        color={color}
        default_value={default_value}
        position={position}
        lines={lines}
      />
    </Box>
  );
}
