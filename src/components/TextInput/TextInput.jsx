import React from "react";
import { Input } from "reactstrap";

function TextInput({
  handleChange,
  value,
  placeholder,
  type = "text",
  name,
  label,
  disabled,
  isRequired,
  ...props
}) {
  console.log(type);
  return (
    <>
      {type === "text" ||
        (type === "number" && (
          <Input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleChange}
            disabled={disabled}
            value={value}
            autoComplete="off"
          />
        ))}
    </>
  );
}

export default TextInput;
