import React from "react";
import {
  MUIAvatar,
  MUIBox,
  MUIIconButton,
  MUIPaper,
  MUITypography,
} from "../../../lib/index.lib";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const IndividualPost: React.FC = () => {
  return (
    <MUIBox sx={{ width: "500px" }}>
      <MUIPaper sx={{ padding: "15px" }}>
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
          <MUIIconButton label="post-menu">
            <MoreVertIcon />
          </MUIIconButton>
        </MUIBox>
        <MUITypography
          content="jsnfjewn wkfbewq ewqjbfwq jwqbhfhqew ewqjhbqefwhj wjqhbfewqhj wjqehbfqweh wqhbfew"
          sx={{ fontSize: "15px" }}
        />
      </MUIPaper>
    </MUIBox>
  );
};

export default IndividualPost;
