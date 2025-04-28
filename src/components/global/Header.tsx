import React from "react";
import { Logo } from "../../elements/index.elements";
import { MUIButton } from "../../lib/index.lib";
import { Divider } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSignInNavigation = () => {
    navigate("/accounts/signin");
  };

  return (
    <React.Fragment>
      <header className="py-2 max-w-[1200px] mx-auto flex items-center justify-between">
        <Logo />
        <MUIButton
          content="Sign In"
          variant="contained"
          size="small"
          onClickHandler={handleSignInNavigation}
        />
      </header>
      <Divider />
    </React.Fragment>
  );
};

export default Header;
