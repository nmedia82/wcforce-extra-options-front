import React from "react";
import FormText from "./boots-fields/TextInputs";
import EmailFields from "./boots-fields/Email";
import NumberInputs from "./boots-fields/NumberInputs";
import UrlInputs from "./boots-fields/URLInputs";
import SelectBasic from "./boots-components/Select";
import TextArea from "./boots-components/Textarea"

export default function BootsrapFields({ field }) {
  const field_type = field.input;
    return (
        <div>
        {field_type === "text" && <FormText field={field} />}
        {field_type === "email" && <EmailFields field={field} />}
        {field_type === "number" && <NumberInputs field={field} />}
        {field_type === "url" && <UrlInputs field={field} />}
        {field_type === "select" && <SelectBasic field={field} />}
        {field_type === "textarea" && <TextArea field={field} />}
        
    </div>
)
}
