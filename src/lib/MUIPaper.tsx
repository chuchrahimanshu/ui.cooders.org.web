import { Paper } from "@mui/material";
import React from "react";

const MUIPaper: React.FC<MUIPaperPropsInterface> = ({
  children,
  elevation,
  square,
  sx,
  variant,
}) => {
  return (
    <Paper elevation={elevation} square={square} sx={sx} variant={variant}>
      {children}
    </Paper>
  );
};

export default MUIPaper;
