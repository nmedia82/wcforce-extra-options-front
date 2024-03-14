import React from "react";
import FormText from "./boots-fields/TextInputs";
import EmailFields from "./boots-fields/Email";
import NumberInputs from "./boots-fields/NumberInputs";
import UrlInputs from "./boots-fields/URLInputs";
import SelectBasic from "./boots-fields/Select";
import TextArea from "./boots-fields/Textarea";
import Checkboxes from "./boots-fields/Checkbox";
import RadioButton from "./boots-fields/Radiobuttons";
import Switches from "./boots-fields/Switches";
import Slider from "./boots-fields/Progressbar"

export default function BootsrapFields({ field }) {
  const field_type = field.input;
    return (
      <div sx={
        { width: 500, maxWidth: '100%' }}>
        {field_type === "text" && <FormText field={field} />}
        {field_type === "email" && <EmailFields field={field} />}
        {field_type === "number" && <NumberInputs field={field} />}
        {field_type === "url" && <UrlInputs field={field} />}
        {field_type === "select" && <SelectBasic field={field} />}
        {field_type === "textarea" && <TextArea field={field} />}
        {field_type === "checks" && <Checkboxes field={field} />}
        {field_type === "radio" && <RadioButton field={field} />}
        {field_type === "switches" && <Switches field={field} />}
         {field_type === "slider" && <Slider field={field} />}
    </div>
)
}
