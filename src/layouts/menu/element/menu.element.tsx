/** @format */

import { MemuSelectd, MenuItem, MenuTitle } from "../common/assets/menu.style";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Menu = ({ title, listItem }: any) => {
  return (
    <MemuSelectd>
      <MenuTitle expandIcon={<ExpandMoreIcon />}>{title}</MenuTitle>
      <MenuItem>
        {listItem?.map((item: string) => {
          return (
            <ListItem sx={{ p: 0 }}>
              <ListItemButton sx={{ cursor: "pointer", borderRadius: 5 }}>
                <ListItemText primary={item} sx={{ px: 2 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </MenuItem>
    </MemuSelectd>
  );
};

export default Menu;
