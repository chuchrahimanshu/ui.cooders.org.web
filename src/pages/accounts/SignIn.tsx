import React, { useState } from "react";
import {
  MUIBox,
  MUICheckbox,
  MUILink,
  MUITextField,
} from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";

const FormEndJSX = () => (
  <MUILink
    underline="hover"
    sx={{ cursor: "pointer", fontSize: "14px", textAlign: "center" }}
    href="/accounts/signup">
    Don't have an account?
  </MUILink>
);

const SignIn: React.FC = () => {
  const initialState: SignInStateInterface = {
    username: "",
    password: "",
    remember: false,
  };

  const [formData, setFormData] = useState<SignInStateInterface>(initialState);

  const handleInputChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event?: any) => {
    event.preventDefault();
  };

  return (
    <AccountFormTemplate
      socialIconsSupport={true}
      submitButtonLabel="Sign In"
      title="Sign In"
      description="Welcome back! Please login to your account"
      formEndJSX={<FormEndJSX />}
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
      <MUITextField
        fullWidth
        size="small"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type="password"
        required
      />
      <MUIBox
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <MUICheckbox size="small" label="Remember Me" />
        <MUILink
          underline="hover"
          sx={{ cursor: "pointer", fontSize: "14px" }}
          href="/accounts/password/forgot">
          Forgot Password
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default SignIn;
