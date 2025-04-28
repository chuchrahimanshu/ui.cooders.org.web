import React from "react";
import {
  MUIBox,
  MUIButton,
  MUITextField,
  MUIPaper,
  MUITypography,
  MUILink,
} from "../../lib/index.lib";

const ChangePassword: React.FC = () => {
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
          content="Change Password"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        />
        <MUITypography
          content="Update your credentials securely"
          variant="body2"
          align="center"
          sx={{ color: "text.secondary", mb: 3 }}
        />

        <form className="flex flex-col gap-4 w-full">
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

          {/* Link placed here */}
          <MUIBox sx={{ display: "flex", justifyContent: "center" }}>
            <MUILink
              underline="hover"
              sx={{ cursor: "pointer", fontSize: "14px" }}>
              Back to Sign In?
            </MUILink>
          </MUIBox>

          <MUIButton
            content="Update Password"
            variant="contained"
            fullWidth
            size="medium"
          />
        </form>
      </MUIPaper>
    </MUIBox>
  );
};

export default ChangePassword;
