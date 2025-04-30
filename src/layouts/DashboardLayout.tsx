import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { createTheme } from "@mui/material";
import { Navigation } from "@toolpad/core";
import { DashboardLayout as MUIDashboardLayout } from "@toolpad/core/DashboardLayout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Logo } from "../elements/index.elements";
import BugReportIcon from "@mui/icons-material/BugReport";
import SchemaIcon from "@mui/icons-material/Schema";
import DataObjectIcon from "@mui/icons-material/DataObject";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import MUIAvatar from "../lib/MUIAvatar";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Global",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard/modules/kanban",
    title: "Kanban",
    icon: <ViewKanbanIcon />,
  },
  {
    segment: "dashboard/modules/community",
    title: "Community",
    icon: <PeopleAltIcon />,
  },
  {
    segment: "dashboard/modules/solvex",
    title: "SolveX",
    icon: <BugReportIcon />,
  },
  {
    segment: "dashboard/modules/snippets",
    title: "Snippets",
    icon: <CodeIcon />,
  },
  {
    segment: "dashboard/modules/documentation",
    title: "Documentation",
    icon: <DescriptionIcon />,
  },
  {
    segment: "dashboard/modules/courses",
    title: "Courses",
    icon: <OndemandVideoIcon />,
  },
  {
    segment: "dashboard/modules/marketplace",
    title: "Marketplace",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "dashboard/modules/code-sharing",
    title: "Code Sharing",
    icon: <DeveloperModeIcon />,
  },
  {
    kind: "header",
    title: "Tools",
  },
  {
    segment: "dashboard/tools/er-diagram",
    title: "ER Diagram",
    icon: <SchemaIcon />,
  },
  {
    segment: "dashboard/tools/json",
    title: "JSON",
    icon: <DataObjectIcon />,
  },
];

const DashboardLayout: React.FC = (props: any) => {
  const { window } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const dashboardTheme = createTheme({
    colorSchemes: { dark: true },
    cssVariables: {
      colorSchemeSelector: "class",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      theme={dashboardTheme}
      window={window?.()}>
      <MUIDashboardLayout
        branding={{
          title: "",
          logo: <Logo onClickHandler={toggleSidebar} />,
          homeUrl: "",
        }}
        disableCollapsibleSidebar={true}
        sidebarExpandedWidth={isSidebarOpen ? 260 : 0}
        sx={{ padding: "30px" }}
        slots={{
          toolbarAccount: () => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <MUIAvatar alt="Himanshu Chuchra" sx={{ cursor: "pointer" }} />
            </div>
          ),
        }}>
        <Outlet />
      </MUIDashboardLayout>
    </ReactRouterAppProvider>
  );
};

export default DashboardLayout;
