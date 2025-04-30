import React from "react";
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
  return (
    <AccountFormTemplate
      socialIconsSupport={true}
      submitButtonLabel="Sign In"
      title="Sign In"
      description="Welcome back! Please login to your account"
      formEndJSX={<FormEndJSX />}>
      <MUITextField
        fullWidth
        size="small"
        label="Username"
        type="text"
        required
      />
      <MUITextField
        fullWidth
        size="small"
        label="Password"
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
