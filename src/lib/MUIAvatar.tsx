import { Avatar } from "@mui/material";
import React from "react";

const MUIAvatar: React.FC<MUIAvatarPropsInterface> = ({
  alt,
  src,
  className,
  sx,
  variant,
}) => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.includes(" ") ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}` : `${name[0]}`}`,
    };
  }

  return (
    <React.Fragment>
      {src ? (
        <Avatar
          alt={alt}
          src={src}
          className={className}
          variant={variant}
          sx={sx}
        />
      ) : (
        <Avatar
          {...stringAvatar(alt)}
          alt={alt}
          className={className}
          variant={variant}
          sx={sx}
        />
      )}
    </React.Fragment>
  );
};

export default MUIAvatar;
