import React from "react";
import { TextField } from "@mui/material";

const MUITextField: React.FC<MUITextFieldPropsInterface> = ({
  color,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  label,
  name,
  onChange,
  placeholder,
  required,
  size,
  sx,
  type,
  value,
  variant,
}) => {
  return (
    <TextField
      color={color}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      size={size}
      sx={sx}
      type={type}
      value={value}
      variant={variant}
    />
  );
};

export default MUITextField;
