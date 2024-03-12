import React from "react";
import TextInput from "./mui-fields/TextInput";
import NumberInput from "./mui-fields/NumberInput";
import EmailInput from "./mui-fields/EmailInput";
import  RadioButtons from "./mui-components/RadioButton"
import { Box } from "@mui/material";
import TextArea from "./mui-components/Textarea";
import BasicSelect from "./mui-components/Select";
import CheckBox from "./mui-components/Checkbox";
import BasicRating from "./mui-components/Rating";
import BasicSlider from "./mui-components/Slider"

export default function RenderField({ field }) {
  const field_type = field.input;

  return (
    <Box sx={
      {width:500,maxWidth:'100%'}
    }>
      {field_type === "text" && <TextInput field={field} />}
      {field_type === "number" && <NumberInput field={field} />}
      {field_type === "email" && <EmailInput field={field} />}
      {field_type === "radio" && <RadioButtons field={field} />}
      {field_type === "textarea" && <TextArea field={field} />}
      {field_type === "select" && <BasicSelect field={field} />}
      {field_type === "checks" && <CheckBox field={field} />}
      {field_type === "rating" && <BasicRating field={field} />}
      {field_type === "slider" && <BasicSlider field={field} />}
    </Box>
  );
}
