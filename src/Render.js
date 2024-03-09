import React from "react";
import TextInput from "./fields/TextInput";

export default function RenderField({ field }) {
  const field_type = field.input;

  return (
    <div>
      {field_type === "text" && <TextInput field={field} />}
      {field_type === "textz" && <TextInput field={field} />}
    </div>
  );
}
