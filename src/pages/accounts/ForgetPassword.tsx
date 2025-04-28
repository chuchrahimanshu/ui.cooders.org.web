import React, { useEffect, useState } from "react";
import {
  MUIBox,
  MUIButton,
  MUITextField,
  MUIPaper,
  MUITypography,
  MUILink,
} from "../../lib/index.lib";
import MUIOTPInput from "../../lib/MUIOTPInput";

const ForgetPassword: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(120);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const handleOTPChange = (value: string) => {
    setOtp(value);
  };

  // const handleGenerateOtp = () => {
  //   // Reset timer when user clicks "Generate OTP"
  //   setTimer(2); // Reset to 2 seconds
  //   setIsTimerRunning(true);
  //   // Trigger OTP generation logic here if needed
  // };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <MUIBox
      component="section"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <MUIPaper
        className="p-8 shadow-2xl"
        sx={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
          padding: 4,
        }}>
        <MUITypography
          content="Forgot Password"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        />

        <MUITypography
          content="Please check your email address for the OTP."
          sx={{
            fontSize: "12px",
            fontStyle: "italic",
            color: "text.secondary",
            textAlign: "center",
            mb: 3,
          }}
        />
        <form className="flex flex-col gap-4 w-full">
          <MUITextField
            fullWidth
            size="small"
            label="Username"
            type="text"
            required
          />

          <MUIBox sx={{ display: "flex", justifyContent: "center" }}>
            <MUIOTPInput value={otp} handleOTPChange={handleOTPChange} />
          </MUIBox>

          <MUIBox
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0,
              mt: 0,
            }}>
            <MUITypography
              content={formatTime(timer)}
              sx={{
                color: timer === 0 ? "text.disabled" : "error.main",
                fontSize: "14px",
              }}
            />

            <MUILink
              underline="hover"
              sx={{
                cursor: isTimerRunning ? "not-allowed" : "pointer",
                fontSize: "14px",
                color: isTimerRunning ? "text.disabled" : "primary.main",
                pointerEvents: isTimerRunning ? "none" : "auto",
              }}
              // onClick={!isTimerRunning ? handleGenerateOtp : undefined}
            >
              Generate OTP
            </MUILink>
          </MUIBox>

          <MUIButton
            content="Verify OTP"
            variant="contained"
            fullWidth
            size="medium"
          />
        </form>
      </MUIPaper>
    </MUIBox>
  );
};

export default ForgetPassword;
