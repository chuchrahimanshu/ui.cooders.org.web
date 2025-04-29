import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const MUIDialog: React.FC<MUIDialogPropsInterface> = ({
  open,
  handleDialogClose,
  title,
  dialogActions,
  fullScreen,
  fullWidth,
  maxWidth,
  scroll,
  sx,
  dialogActionsSX,
  disableDialogActionsSpacing,
  dialogTitleSX,
  dialogContent,
  dialogContentDividers,
  dialogContentSX,
}) => {
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleDialogClose}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      scroll={scroll}
      sx={sx}>
      <DialogTitle sx={dialogTitleSX}>{title}</DialogTitle>
      <DialogContent dividers={dialogContentDividers} sx={dialogContentSX}>
        {dialogContent}
      </DialogContent>
      {dialogActions && (
        <DialogActions
          sx={dialogActionsSX}
          disableSpacing={disableDialogActionsSpacing}>
          {dialogActions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MUIDialog;
