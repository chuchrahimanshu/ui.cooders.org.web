import React, { useState } from "react";
import {
  MUIBox,
  MUICheckbox,
  MUILink,
  MUITextField,
} from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";
import { useSigninMutation } from "../../redux/accounts.service";

const FormEndJSX = () => (
  <MUILink
    underline="hover"
    sx={{ cursor: "pointer", fontSize: "14px", textAlign: "center" }}
    href="/accounts/signup">
    Don't have an account?
  </MUILink>
);

const SignIn: React.FC = () => {
  const [dispatchAPI, { isLoading }] = useSigninMutation();

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

  const handleCheckboxInputChange = (event: any) => {
    const checkedValue = event.target.checked;
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: checkedValue,
    }));
  };

  const handleFormSubmit = async (event?: any) => {
    event.preventDefault();

    const apiData = {
      username: formData.username,
      password: formData.password,
      remember: formData.remember,
    };

    const response = await dispatchAPI(apiData);
    console.log(response);
  };

  return (
    <AccountFormTemplate
      socialIconsSupport={true}
      submitButtonLabel="Sign In"
      title="Sign In"
      description="Welcome back! Please login to your account"
      formEndJSX={<FormEndJSX />}
      submitFormHandler={handleFormSubmit}
      isLoading={isLoading}>
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
        <MUICheckbox
          size="small"
          label="Remember Me"
          name="remember"
          onChange={handleCheckboxInputChange}
          value={formData.remember}
        />
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
