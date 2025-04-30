import React from "react";
import { MUIBox, MUITextField, MUILink } from "../../lib/index.lib";
import { AccountFormTemplate } from "../../components/index.components";

const ChangePassword: React.FC = () => {
  return (
    <AccountFormTemplate
      socialIconsSupport={false}
      submitButtonLabel="Update Password"
      title="Change Password"
      description="Update your credentials securely">
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
        label="New Password"
        type="password"
        required
      />
      <MUITextField
        fullWidth
        size="small"
        label="Confirm New Password"
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
