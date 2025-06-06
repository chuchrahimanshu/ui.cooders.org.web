import React, { useState } from "react";
import { MUIBox, MUITextField, MUILink } from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";
import { useChangePasswordMutation } from "../../redux/accounts.service";
import { changePasswordValidationSchema } from "../../validators/accounts.validators";

const ChangePassword: React.FC = () => {
  const [dispatchAPI, { isLoading }] = useChangePasswordMutation();

  const initialState: ChangePasswordStateInterface = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] =
    useState<ChangePasswordStateInterface>(initialState);

  const handleInputChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event?: any) => {
    event.preventDefault();
    try {
      changePasswordValidationSchema.parse(formData);
      const apiData = {
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const response = await dispatchAPI(apiData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountFormTemplate
      socialIconsSupport={false}
      submitButtonLabel="Update Password"
      title="Change Password"
      description="Update your credentials securely"
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
        label="New Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type="password"
        required
      />
      <MUITextField
        fullWidth
        size="small"
        label="Confirm New Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        type="password"
        required
      />
      <MUIBox sx={{ display: "flex", justifyContent: "center" }}>
        <MUILink underline="hover" sx={{ cursor: "pointer", fontSize: "14px" }}>
          Back to Sign In?
        </MUILink>
      </MUIBox>
    </AccountFormTemplate>
  );
};

export default ChangePassword;
