import React, { useEffect, useState } from "react";
import {
  MUIBox,
  MUITextField,
  MUITypography,
  MUILink,
} from "../../lib/index.lib";
import MUIOTPInput from "../../lib/MUIOTPInput";
import { AccountFormTemplate } from "../../components/index.components";

const EmailVerification: React.FC = () => {
  const initialState: EmailVerificationStateInterface = {
    username: "",
    otp: "",
  };

  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(120);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [formData, setFormData] =
    useState<EmailVerificationStateInterface>(initialState);

  const handleInputChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event?: any) => {
    event.preventDefault();
  };

  const handleOTPChange = (value: string) => {
    setOtp(value);
    setFormData((prev) => ({ ...prev, ["otp"]: value }));
  };

  const handleGenerateOtp = () => {
    setTimer(120);
    setIsTimerRunning(true);
  };

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
    <AccountFormTemplate
      socialIconsSupport={false}
      submitButtonLabel="Submit"
      title="Email Verification"
      description="Please check your email address for the OTP."
      submitFormHandler={handleFormSubmit}>
      <MUITextField
        fullWidth
        size="small"
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
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
          clickHandler={!isTimerRunning ? handleGenerateOtp : undefined}>
          Generate OTP
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default EmailVerification;
