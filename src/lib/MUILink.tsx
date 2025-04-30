import { Link } from "@mui/material";
import React from "react";

const MUILink: React.FC<MUILinkPropsInterface> = ({
  children,
  color,
  href,
  sx,
  underline,
  variant,
  clickHandler,
}) => {
  return (
    <Link
      color={color}
      href={href}
      sx={sx}
      underline={underline}
      variant={variant}
      onClick={clickHandler}>
      {children}
    </Link>
  );
};

export default MUILink;
