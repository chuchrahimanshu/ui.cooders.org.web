import React from "react";
import MUIPaper from "../../lib/MUIPaper";
import MUIBox from "../../lib/MUIBox";
import MUITextField from "../../lib/MUITextField";

const CreatePost: React.FC = () => {
  return (
    <MUIPaper>
      <MUIBox component="div">
        <MUITextField
          multiline={true}
          rows={4}
          maxRows={4}
          variant="standard"
          sx={{
            "& .MuiInputBase-inputMultiline": {
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
        />
      </MUIBox>
    </MUIPaper>
  );
};

export default CreatePost;
