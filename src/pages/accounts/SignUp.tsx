import React, { useState } from "react";
import {
  MUIBox,
  MUICheckbox,
  MUILink,
  MUITextField,
} from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";
import { useSignupMutation } from "../../redux/accounts.service";
import { signUpValidationSchema } from "../../validators/index.validators";

const SignUp: React.FC = () => {
  const [dispatchAPI, { isLoading }] = useSignupMutation();

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

  const handleCheckboxInputChange = (event: any) => {
    const checkedValue = event.target.checked;
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: checkedValue,
    }));
  };

  const handleFormSubmit = async (event?: any) => {
    event.preventDefault();
    try {
      signUpValidationSchema.parse(formData);
      const apiData = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        remember: formData.remember,
      };
      const response = await dispatchAPI(apiData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountFormTemplate
      socialIconsSupport={true}
      submitButtonLabel="Create Account"
      title="Sign Up"
      description="Create your new account"
      submitFormHandler={handleFormSubmit}
      isLoading={isLoading}>
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
          href="/accounts/signin">
          Already member?
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default SignUp;
