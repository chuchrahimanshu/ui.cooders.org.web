import React from "react";
import { MUIBox } from "../../../lib/index.lib";
import { IndividualPost } from "../../../components/index.components";

const Community: React.FC = () => {
  return (
    <MUIBox component="section" sx={{ display: "flex", padding: "50px" }}>
      <IndividualPost />
    </MUIBox>
  );
};

export default Community;
