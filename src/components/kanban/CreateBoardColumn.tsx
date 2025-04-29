import React from "react";
import { MUIButton } from "../../lib/index.lib";
import AddIcon from "@mui/icons-material/Add";

const CreateBoardColumn: React.FC = () => {
  return (
    <MUIButton
      content="Add Column"
      endIcon={<AddIcon />}
      variant="contained"
      sx={{ marginLeft: "30px", marginTop: "30px" }}
    />
  );
};

export default CreateBoardColumn;
