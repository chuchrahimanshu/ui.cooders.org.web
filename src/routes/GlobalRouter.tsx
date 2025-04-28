import { Route } from "react-router-dom";
import { GlobalLayout } from "../layouts/index.layouts";
import { Home } from "../pages/index.pages";
import { AccountRouter } from "./AccountRouter";

export const GlobalRouter = (
  <>
    <Route path="/" element={<GlobalLayout />}>
      <Route path="" element={<Home />} />
      {AccountRouter}
    </Route>
  </>
);
