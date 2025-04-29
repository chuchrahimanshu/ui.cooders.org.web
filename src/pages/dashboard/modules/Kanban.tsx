import React from "react";
import {
  BoardColumn,
  CreateBoardColumn,
} from "../../../components/index.components";
import { MUIBox } from "../../../lib/index.lib";

const Kanban: React.FC = () => {
  return (
    <MUIBox sx={{ display: "flex", alignItems: "flex-start" }}>
      <BoardColumn title="TODO" />
      <BoardColumn title="TODO" />
      <CreateBoardColumn />
    </MUIBox>
  );
};

export default Kanban;
