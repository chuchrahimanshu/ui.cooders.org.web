import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const MUIOTPInput: React.FC<MUIOTPInputPropsInterface> = ({
  value,
  handleOTPChange,
}) => {
  return (
    <MuiOtpInput
      value={value}
      onChange={handleOTPChange}
      length={6}
      sx={{
        "& .MuiInputBase-root": {
          height: 40,
        },
        "& input": {
          height: "100%",
          padding: 0,
          textAlign: "center",
        },
      }}
    />
  );
};

export default MUIOTPInput;
