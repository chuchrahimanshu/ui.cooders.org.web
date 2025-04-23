import { Box } from "@mui/material";
import React from "react";

const MUIBox: React.FC<MUIBoxPropsInterface> = ({
  component,
  sx,
  children,
}) => {
  return (
    <Box component={component} sx={sx}>
      {children}
    </Box>
  );
};

export default MUIBox;
