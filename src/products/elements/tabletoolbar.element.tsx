/** @format */

import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TableToolBar = (props: any) => {
  const { numSelected } = props;

  return (
    <Toolbar>
      {numSelected > 0 && (
        <Typography
          sx={{ flex: 1 }}
          color='inherit'
          variant='subtitle1'
          component='div'>
          {numSelected} selected
        </Typography>
      )}
      {numSelected > 0 && (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon color='error' />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
export default TableToolBar;
