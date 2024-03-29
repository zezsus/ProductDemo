/** @format */

import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TableMoreMenu = () => {
  const [openMenu, setOpenMenuActions] = useState(null);
  const open = Boolean(openMenu);

  const handleOpenMenu = (e: any) => {
    setOpenMenuActions(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };
  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <MoreVertIcon width={20} height={20} />
      </IconButton>
      {openMenu && (
        <Menu
          id='basic-menu'
          anchorEl={openMenu}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          <MenuItem onClick={handleCloseMenu} sx={{ color: "#446CF7" }}>
            <VisibilityIcon />
            View
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} sx={{ color: "#FFC300" }}>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} sx={{ color: "#FF5733" }}>
            <DeleteForeverIcon />
            Delete
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default TableMoreMenu;
