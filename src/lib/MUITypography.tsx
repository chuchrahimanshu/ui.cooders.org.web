import { Typography } from "@mui/material";
import React from "react";

const MUITypography: React.FC<MUITypographyPropsInterface> = ({
  gutterBottom,
  sx,
  variant,
  align,
  color,
  content,
}) => {
  return (
    <Typography
      gutterBottom={gutterBottom}
      sx={sx}
      variant={variant}
      align={align}
      color={color}>
      {content}
    </Typography>
  );
};

export default MUITypography;
