import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const MUICheckbox: React.FC<MUICheckboxPropsInterface> = ({
  checked,
  checkedIcon,
  color,
  defaultChecked,
  disableRipple,
  disabled,
  icon,
  id,
  label,
  onChange,
  required,
  size,
  sx,
  value,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          checkedIcon={checkedIcon}
          color={color}
          defaultChecked={defaultChecked}
          disableRipple={disableRipple}
          disabled={disabled}
          icon={icon}
          id={id}
          onChange={onChange}
          required={required}
          size={size}
          sx={sx}
          value={value}
        />
      }
      label={label}
    />
  );
};

export default MUICheckbox;
