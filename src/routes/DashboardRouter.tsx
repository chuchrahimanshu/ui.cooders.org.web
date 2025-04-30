import { Route } from "react-router-dom";
import { CommunityLayout, DashboardLayout } from "../layouts/index.layouts";
import {
  CodeSharing,
  Community,
  Courses,
  CreatePost,
  Dashboard,
  Documentation,
  ERDiagram,
  JSON,
  Kanban,
  Marketplace,
  Snippets,
  SolveX,
} from "../pages/index.pages";

export const DashboardRouter = (
  <>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="modules/kanban" element={<Kanban />} />
      <Route path="modules/community" element={<CommunityLayout />}>
        <Route path="" element={<Community />} />
        <Route path="create-post" element={<CreatePost />} />
      </Route>
      <Route path="modules/solvex" element={<SolveX />} />
      <Route path="modules/snippets" element={<Snippets />} />
      <Route path="modules/documentation" element={<Documentation />} />
      <Route path="modules/courses" element={<Courses />} />
      <Route path="modules/marketplace" element={<Marketplace />} />
      <Route path="modules/code-sharing" element={<CodeSharing />} />
      <Route path="tools/er-diagram" element={<ERDiagram />} />
      <Route path="tools/json" element={<JSON />} />
    </Route>
  </>
);
