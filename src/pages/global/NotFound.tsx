import React from "react";
import { MUIBox, MUITypography } from "../../lib/index.lib";

const NotFoundPage: React.FC = () => {
  return (
    <MUIBox
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}>
      <MUITypography
        variant="h1"
        sx={{
          fontSize: "20rem",
          fontWeight: "bold",
          color: "primary.main",
          marginBottom: 2,
          animation: "fadeIn 1s ease-in-out",
        }}
        content="404"
      />
    </MUIBox>
  );
};

export default NotFoundPage;
