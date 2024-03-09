import { Box, TextField } from "@mui/material";
import React from "react";

export default function TextInput({ field }) {
  const { title, variant, color, size } = field;
  return (
    <Box>
      <TextField label={title} variant={variant} color={color} size={size} />
    </Box>
  );
}
