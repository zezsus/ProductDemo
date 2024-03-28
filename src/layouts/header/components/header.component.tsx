/** @format */

import { Toolbar } from "@mui/material";
import { ContentHeader, Header } from "../common/assets/header.style";
import SettingsIcon from "@mui/icons-material/Settings";
import Search from "../elements/search.element";
import User from "../elements/user.element";

const HeaderComponent = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Search />
        <ContentHeader>
          <SettingsIcon sx={{ cursor: "pointer" }} />
          <User />
        </ContentHeader>
      </Toolbar>
    </Header>
  );
};

export default HeaderComponent;
