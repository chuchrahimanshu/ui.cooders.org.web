import React from "react";
import { MUIButton, MUIDialog, MUIPaper } from "../../lib/index.lib";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "./CreatePost";

const CommunityHeader: React.FC<CommunityHeaderPropsInterface> = ({
  handleCreatePostDialogToggle,
  toggleCreatePostDialog,
}) => {
  return (
    <React.Fragment>
      <MUIPaper
        sx={{
          height: "80px",
          width: "100%",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingInline: "25px",
        }}>
        <MUIButton
          content="Create Post"
          endIcon={<AddIcon />}
          variant="contained"
          size="large"
          onClickHandler={handleCreatePostDialogToggle}
        />
      </MUIPaper>
      {toggleCreatePostDialog && (
        <MUIDialog
          dialogContent={
            <CreatePost
              handleCreatePostDialogToggle={handleCreatePostDialogToggle}
            />
          }
          handleDialogClose={handleCreatePostDialogToggle}
          open={toggleCreatePostDialog}
        />
      )}
    </React.Fragment>
  );
};

export default CommunityHeader;
