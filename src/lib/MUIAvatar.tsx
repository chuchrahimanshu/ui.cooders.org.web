import { Avatar } from "@mui/material";
import React from "react";

const MUIAvatar: React.FC<MUIAvatarPropsInterface> = ({
  alt,
  src,
  className,
  sx,
  variant,
}) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      className={className}
      sx={sx}
      variant={variant}
    />
  );
};

export default MUIAvatar;
