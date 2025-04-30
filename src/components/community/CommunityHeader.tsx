import React from "react";
import { MUIButton, MUIPaper } from "../../lib/index.lib";
import AddIcon from "@mui/icons-material/Add";
import { NavigateFunction, useNavigate } from "react-router-dom";

const CommunityHeader: React.FC = ({}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleCreatePostNavigation = () => {
    navigate("/dashboard/modules/community/create-post");
  };

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
          onClickHandler={handleCreatePostNavigation}
        />
      </MUIPaper>
    </React.Fragment>
  );
};

export default CommunityHeader;
