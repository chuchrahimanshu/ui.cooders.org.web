import { IconButton } from "@mui/material";
import React from "react";

const MUIIconButton: React.FC<MUIIconButtonPropsInterface> = ({
  children,
  color,
  disableFocusRipple,
  disableRipple,
  disabled,
  edge,
  loading,
  loadingIndicator,
  size,
  sx,
  label,
}) => {
  return (
    <IconButton
      aria-label={label}
      size={size}
      color={color}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      disabled={disabled}
      edge={edge}
      loading={loading}
      loadingIndicator={loadingIndicator}
      sx={sx}>
      {children}
    </IconButton>
  );
};

export default MUIIconButton;
