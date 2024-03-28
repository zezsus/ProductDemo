/** @format */

import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import {
  Arow,
  ButtonLogout,
  UserMenuBody,
  UserMenuFooter,
  UserMenuHeader,
} from "../common/assets/user.style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const User = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Avatar
        alt='Remy Sharp'
        src='/static/images/avatar/1.jpg'
        sx={{ cursor: "pointer" }}
        onClick={handleOpenMenu}
      />
      {open && (
        <Arow>
          <ArrowDropUpIcon fontSize='large' sx={{ color: "white" }} />
        </Arow>
      )}

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <UserMenuHeader>user info</UserMenuHeader>
        <UserMenuBody>
          <MenuItem onClick={handleClose} sx={{ borderRadius: "5px" }}>
            My account
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ borderRadius: "5px" }}>
            My account
          </MenuItem>
        </UserMenuBody>
        <UserMenuFooter onClick={handleClose}>
          <ButtonLogout>Logout</ButtonLogout>
        </UserMenuFooter>
      </Menu>
    </Box>
  );
};

export default User;
