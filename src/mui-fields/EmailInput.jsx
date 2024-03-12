import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import React from "react";

export default function EmailInput({ field }) {
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
          endAdornment: (
            <InputAdornment position={position}>
              <Visibility />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
