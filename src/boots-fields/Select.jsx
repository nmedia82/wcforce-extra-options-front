import Form from "react-bootstrap/Form";

function SelectBasic({ field }) {
  const { label, variant, size, options } = field;
  return (
    <Form.Select size={size}>
      <option>Open this select menu</option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Form.Select>
  );
}

export default SelectBasic;
