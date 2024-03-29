/** @format */

import { MemuSelectd, MenuItem, MenuTitle } from "../common/assets/menu.style";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
const Menu = ({ title, listItem }: any) => {
  const navigate = useNavigate();
  return (
    <MemuSelectd>
      <MenuTitle expandIcon={<ExpandMoreIcon />}>{title}</MenuTitle>
      <MenuItem>
        {listItem?.map((item: any) => {
          return (
            <ListItem sx={{ p: 0 }}>
              <ListItemButton sx={{ cursor: "pointer", borderRadius: 5 }}>
                <ListItemText
                  primary={item.name}
                  sx={{ px: 2 }}
                  onClick={() => navigate(item.path)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </MenuItem>
    </MemuSelectd>
  );
};

export default Menu;
