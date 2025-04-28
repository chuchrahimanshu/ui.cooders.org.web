import { Button } from "@mui/material";
import React from "react";

const MUIButton: React.FC<MUIButtonPropsInterface> = ({
  content,
  color,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  disabled,
  endIcon,
  fullWidth,
  href,
  loadingIndicator,
  loadingPosition,
  size,
  startIcon,
  sx,
  variant,
  onClickHandler,
}) => {
  return (
    <Button
      color={color}
      disableElevation={disableElevation}
      disableRipple={disableRipple}
      disabled={disabled}
      endIcon={endIcon}
      startIcon={startIcon}
      fullWidth={fullWidth}
      href={href}
      loadingIndicator={loadingIndicator}
      loadingPosition={loadingPosition}
      size={size}
      sx={sx}
      variant={variant}
      disableFocusRipple={disableFocusRipple}
      onClick={onClickHandler}>
      {content}
    </Button>
  );
};

export default MUIButton;
