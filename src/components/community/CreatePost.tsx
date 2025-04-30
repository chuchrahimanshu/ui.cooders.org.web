import React from "react";
import {
  MUIAvatar,
  MUIBox,
  MUIIconButton,
  MUITypography,
} from "../../lib/index.lib";
import CloseIcon from "@mui/icons-material/Close";

const CreatePost: React.FC<CreatePostPropsInterface> = ({
  handleCreatePostDialogToggle,
}) => {
  return (
    <MUIBox sx={{ width: "500px" }}>
      <MUIBox
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "15px",
        }}>
        <MUIBox
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
          }}>
          <MUIAvatar
            alt="Himanshu Chuchra"
            sx={{ height: "48px", width: "48px" }}
          />
          <MUIBox component="div">
            <MUITypography variant="body1" content="Himanshu Chuchra" />
            <MUITypography
              variant="body2"
              color="text.secondary"
              content="@himanshu"
            />
          </MUIBox>
        </MUIBox>
        <MUIIconButton label="Close Dialog">
          <CloseIcon onClick={handleCreatePostDialogToggle} />
        </MUIIconButton>
      </MUIBox>
    </MUIBox>
  );
};

export default CreatePost;
