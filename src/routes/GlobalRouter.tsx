import React from "react";
import { Route } from "react-router-dom";
import { GlobalLayout } from "../layouts/index.layouts";
import { Home } from "../pages/index.pages";

const GlobalRouter: React.FC = () => {
  return (
    <Route path="/" Component={GlobalLayout}>
      <Route path="" Component={Home} />
    </Route>
  );
};

export default GlobalRouter;
