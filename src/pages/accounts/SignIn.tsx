import React from "react";
import {
  MUIBox,
  MUIButton,
  MUICheckbox,
  MUILink,
  MUIPaper,
  MUITextField,
  MUITypography,
} from "../../lib/index.lib";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const SignIn: React.FC = () => {
  return (
    <MUIBox
      component="section"
      sx={{
        height: "calc(100vh - 65px)",
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
          content="Sign In"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        />
        <MUITypography
          content="Welcome back! Please login to your account"
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

          <MUIButton
            content="Sign In"
            variant="contained"
            fullWidth
            size="medium"
          />
          <MUILink
            underline="hover"
            sx={{ cursor: "pointer", fontSize: "14px", textAlign: "center" }}
            href="/accounts/signup">
            Don't have an account?
          </MUILink>
        </form>
        <MUIBox
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            my: 3,
          }}>
          <MUIBox
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "divider",
            }}
          />
          <MUITypography
            content="OR"
            variant="caption"
            sx={{ color: "text.secondary", px: 2 }}
          />
          <MUIBox
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "divider",
            }}
          />
        </MUIBox>

        <MUIBox
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            width: "100%",
          }}>
          <MUIButton
            content="Continue with Google"
            variant="outlined"
            fullWidth
            size="small"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          />
          <MUIButton
            content="Continue with GitHub"
            variant="outlined"
            fullWidth
            size="small"
            startIcon={<GitHubIcon />}
            sx={{ textTransform: "none", fontWeight: 500 }}
          />
        </MUIBox>
      </MUIPaper>
    </MUIBox>
  );
};

export default SignIn;
