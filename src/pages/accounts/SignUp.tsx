import React from "react";
import {
  MUIBox,
  MUICheckbox,
  MUILink,
  MUITextField,
} from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";

const SignUp: React.FC = () => {
  return (
    <AccountFormTemplate
      socialIconsSupport={true}
      submitButtonLabel="Create Account"
      title="Sign Up"
      description="Create your new account">
      <MUITextField
        fullWidth
        size="small"
        label="Email Address"
        type="email"
        required
      />
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
          href="/accounts/signin">
          Already have an account?
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default SignUp;
