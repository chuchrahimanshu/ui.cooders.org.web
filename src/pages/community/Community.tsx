import { Grid } from "@mui/material";
import React from "react";
import CreatePost from "./CreatePost";

const Community: React.FC = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        padding: "50px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 5,
      }}>
      <Grid size={6}>
        <CreatePost />
      </Grid>
      <Grid size={5}>Something</Grid>
    </Grid>
  );
};

export default Community;
