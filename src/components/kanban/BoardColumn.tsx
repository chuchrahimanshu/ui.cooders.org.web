import React from "react";
import {
  MUIBox,
  MUIIconButton,
  MUIPaper,
  MUITypography,
} from "../../lib/index.lib";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ColumnCard from "./ColumnCard";

const BoardColumn: React.FC<BoardColumnPropsInterface> = ({ title, color }) => {
  return (
    <MUIPaper
      sx={{
        width: "300px",
        padding: "10px",
        marginLeft: "30px",
        marginTop: "30px",
        height: "auto",
      }}>
      <MUIBox
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "8px",
        }}>
        <MUITypography
          content={title?.toUpperCase()}
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: color ? color : "text.primary",
            marginLeft: "5px",
          }}
        />
        <MUIIconButton label="menu" size="small">
          <MoreVertIcon sx={{ fontSize: "20px" }} />
        </MUIIconButton>
      </MUIBox>
      <ColumnCard />
    </MUIPaper>
  );
};

export default BoardColumn;
