import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index.components";
import { MUIBox } from "../lib/index.lib";

const GlobalLayout: React.FC = () => {
  return (
    <MUIBox component="section">
      <Header />
      <Outlet />
    </MUIBox>
  );
};

export default GlobalLayout;
