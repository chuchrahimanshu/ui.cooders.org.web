import { createTheme, Grid } from "@mui/material";
import { Navigation, PageContainer } from "@toolpad/core";
import { DashboardLayout as MUIDashboardLayout } from "@toolpad/core/DashboardLayout";
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Logo } from "../elements/index.elements";

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
    segment: "dashboard/community",
    title: "Community",
    icon: <PeopleAltIcon />,
  },
  {
    kind: "header",
    title: "Tools",
  },
  {
    segment: "dashboard/tools/er-diagram",
    title: "ER Diagram",
    icon: <PeopleAltIcon />,
  },
];

const DashboardLayout: React.FC = (props: any) => {
  const { window } = props;

  const dashboardTheme = createTheme({
    colorSchemes: { light: true, dark: true },
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
          logo: <Logo />,
        }}
        disableCollapsibleSidebar={true}
        sidebarExpandedWidth={300}>
        <PageContainer>
          <Grid container spacing={1}>
            <Outlet />
          </Grid>
        </PageContainer>
      </MUIDashboardLayout>
    </ReactRouterAppProvider>
  );
};

export default DashboardLayout;
