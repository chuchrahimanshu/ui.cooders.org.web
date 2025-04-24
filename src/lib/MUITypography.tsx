import { Typography } from "@mui/material";
import React from "react";

const MUITypography: React.FC<MUITypographyPropsInterface> = ({
  gutterBottom,
  sx,
  variant,
  align,
  color,
  content,
  id,
  className,
}) => {
  return (
    <Typography
      className={className}
      id={id}
      sx={sx}
      variant={variant}
      align={align}
      color={color}
      gutterBottom={gutterBottom}>
      {content}
    </Typography>
  );
};

export default MUITypography;
