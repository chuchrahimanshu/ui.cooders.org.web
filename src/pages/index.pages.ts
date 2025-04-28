// Import Section - GLOBAL
import Home from "./global/Home";
import NotFound from "./global/NotFound";

// Import Section - AUTH
import SignUp from "./accounts/SignUp";
import SignIn from "./accounts/SignIn";
import ForgetPassword from "./accounts/ForgetPassword";
import ChangePassword from "./accounts/ChangePassword";
import EmailVerification from "./accounts/EmailVerification";
import TFA from "./accounts/TFA";

// Import Section - DASHBOARD
import Dashboard from "./dashboard/Dashboard";

// Import Section - DASHBOARD/MODULES
import SolveX from "./dashboard/modules/SolveX";
import Community from "./dashboard/modules/Community";
import Kanban from "./dashboard/modules/Kanban";
import Snippets from "./dashboard/modules/Snippets";
import Documentation from "./dashboard/modules/Documentation";
import Courses from "./dashboard/modules/Courses";
import Marketplace from "./dashboard/modules/Marketplace";
import CodeSharing from "./dashboard/modules/CodeSharing";

// Import Section - DASHBOARD/TOOLS
import ERDiagram from "./dashboard/tools/ERDiagram";
import JSON from "./dashboard/tools/JSON";

// Export Section
export {
  Home,
  SignUp,
  Dashboard,
  Community,
  SolveX,
  CodeSharing,
  Courses,
  Documentation,
  ERDiagram,
  JSON,
  Kanban,
  Marketplace,
  Snippets,
  SignIn,
  ChangePassword,
  EmailVerification,
  ForgetPassword,
  TFA,
  NotFound,
};
