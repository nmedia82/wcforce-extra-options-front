import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function BasicSlider({ field }) {
  const { orientation, color, size, default_value, valueLabelDisplay } = field;
  return (
    <Box sx={{ height: 300 }}>
      <Slider
        size={size}
        defaultValue={default_value}
        valueLabelDisplay={valueLabelDisplay}
        color={color}
        orientation={orientation}
      />
    </Box>
  );
}
