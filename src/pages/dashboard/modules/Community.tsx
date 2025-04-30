import React, { useState } from "react";
import { MUIBox } from "../../../lib/index.lib";
import {
  CommunityHeader,
  IndividualPost,
} from "../../../components/index.components";

const Community: React.FC = () => {
  const [toggleCreatePostDialog, setToggleCreatePostDialog] =
    useState<boolean>(false);

  const handleCreatePostDialogToggle = () => {
    setToggleCreatePostDialog((prev) => !prev);
  };

  return (
    <MUIBox component="section">
      <CommunityHeader
        toggleCreatePostDialog={toggleCreatePostDialog}
        handleCreatePostDialogToggle={handleCreatePostDialogToggle}
      />
      <IndividualPost />
    </MUIBox>
  );
};

export default Community;
