import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalRouter } from "./GlobalRouter";
import { DashboardRouter } from "./DashboardRouter";
import { NotFound } from "../pages/index.pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {GlobalRouter}
        {DashboardRouter}
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
