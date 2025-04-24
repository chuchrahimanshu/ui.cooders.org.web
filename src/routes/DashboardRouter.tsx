import { Route } from "react-router-dom";
import { DashboardLayout } from "../layouts/index.layouts";
import { Community, Dashboard, SolveX } from "../pages/index.pages";

export const DashboardRouter = (
  <>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="community" element={<Community />} />
      <Route path="solvex" element={<SolveX />} />
    </Route>
  </>
);
