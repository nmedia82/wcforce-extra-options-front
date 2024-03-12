import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

import React from "react";

export default function TextInput({ field }) {
  const { title, variant, color, size, type, default_value, position } = field;
  return (
    <Box>
      <TextField
        fullWidth
        label={title}
        variant={variant}
        color={color}
        size={size}
        type={type}
        default_value={default_value}
        InputProps={{
          startAdornment: (
            <InputAdornment position={position}>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
