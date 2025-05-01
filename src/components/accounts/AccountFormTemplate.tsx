import React from "react";
import {
  MUIBox,
  MUIButton,
  MUIPaper,
  MUITypography,
} from "../../lib/index.lib";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CircularProgress } from "@mui/material";

const AccountFormTemplate: React.FC<AccountFormTemplatePropsInterface> = ({
  children,
  title,
  description,
  submitButtonLabel,
  socialIconsSupport,
  formEndJSX,
  submitFormHandler,
  isLoading,
}) => {
  return (
    <MUIBox
      component="section"
      sx={{
        height: "calc(100vh - 65px)",
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
          content={title}
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        />
        {description && (
          <MUITypography
            content={description}
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mb: 3 }}
          />
        )}
        <form className="flex flex-col gap-4 w-full">
          {children}
          <MUIButton
            content={submitButtonLabel}
            variant="contained"
            fullWidth
            size="medium"
            onClickHandler={submitFormHandler}
            loadingIndicator={<CircularProgress />}
            loading={isLoading}
          />
          {formEndJSX}
        </form>
        {socialIconsSupport && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </MUIPaper>
    </MUIBox>
  );
};

export default AccountFormTemplate;
