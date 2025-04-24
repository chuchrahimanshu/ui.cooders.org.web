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

const SignUp: React.FC = () => {
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
      <MUIPaper className="p-5 shadow-2xl">
        <MUITypography
          content="Sign Up"
          sx={{ fontSize: "25px", fontWeight: 500 }}
        />
        <form className="mt-5 flex flex-col gap-4 w-[350px]">
          <MUITextField size="small" label="Email Address" type="text" />
          <MUITextField size="small" label="Username" type="text" />
          <MUITextField
            size="small"
            label="Password"
            type="password"
            sx={{ marginBottom: "-10px" }}
          />
          <MUIBox
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <MUICheckbox size="small" label="Remember Me" />
            <MUILink underline="none" sx={{ cursor: "pointer" }}>
              Already a member?
            </MUILink>
          </MUIBox>
          <MUIButton content="Create Account" variant="contained" />
        </form>
      </MUIPaper>
    </MUIBox>
  );
};

export default SignUp;
