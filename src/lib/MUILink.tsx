import { Link } from "@mui/material";
import React from "react";

const MUILink: React.FC<MUILinkPropsInterface> = ({
  children,
  color,
  href,
  sx,
  underline,
  variant,
}) => {
  return (
    <Link
      color={color}
      href={href}
      sx={sx}
      underline={underline}
      variant={variant}>
      {children}
    </Link>
  );
};

export default MUILink;
