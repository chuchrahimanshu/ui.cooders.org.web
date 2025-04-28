import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index.components";

const GlobalLayout: React.FC = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default GlobalLayout;
