import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ field }) {
  const [value, setValue] = React.useState(2);
  const { color, size } = field;

  return (
    <Box>
      <Typography component="legend">Controlled</Typography>
      <Rating
        value={value}
        size={size}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
