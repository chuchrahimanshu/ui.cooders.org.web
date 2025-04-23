import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import GlobalRouter from "./GlobalRouter";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <GlobalRouter />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
