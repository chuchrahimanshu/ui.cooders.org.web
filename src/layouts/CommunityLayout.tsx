import React from "react";
import { CommunityHeader } from "../components/index.components";
import { Outlet } from "react-router-dom";

const CommunityLayout: React.FC = () => {
  return (
    <React.Fragment>
      <CommunityHeader />
      <Outlet />
    </React.Fragment>
  );
};

export default CommunityLayout;
