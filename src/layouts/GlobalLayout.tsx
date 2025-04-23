import React from "react";
import { Outlet } from "react-router-dom";

const GlobalLayout: React.FC = () => {
  return (
    <section>
      <Outlet />
    </section>
  );
};

export default GlobalLayout;
