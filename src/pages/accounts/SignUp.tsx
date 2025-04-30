import React, { useState } from "react";
import {
  MUIBox,
  MUICheckbox,
  MUILink,
  MUITextField,
} from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";

const SignUp: React.FC = () => {
  const initialState: SignUpStateInterface = {
    email: "",
    username: "",
    password: "",
    remember: false,
  };

  const [formData, setFormData] = useState<SignUpStateInterface>(initialState);

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
      submitButtonLabel="Create Account"
      title="Sign Up"
      description="Create your new account"
      submitFormHandler={handleFormSubmit}>
      <MUITextField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        fullWidth
        size="small"
      />
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
          href="/accounts/signin">
          Already have an account?
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default SignUp;
