import { Route } from "react-router-dom";
import { GlobalLayout } from "../layouts/index.layouts";
import { Home, SignUp } from "../pages/index.pages";

export const GlobalRouter = (
  <>
    <Route path="/" element={<GlobalLayout />}>
      <Route path="" element={<Home />} />
      <Route path="accounts/signup" element={<SignUp />} />
    </Route>
  </>
);
