/** @format */

import {
  CardMedia,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import TableMoreMenu from "./tablemoremubu.element";

const ProductTableRow = ({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
}: any) => {
  return (
    <TableRow hover selected={selected}>
      <TableCell padding='checkbox'>
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component={"img"}
          alt={"demo"}
          src={"cover"}
          sx={{ borderRadius: 1.5, width: 48, height: 48, mr: 2 }}
        />
        <Typography variant='subtitle2' noWrap>
          demo
        </Typography>
      </TableCell>

      <TableCell>created at</TableCell>

      <TableCell align='center'>abc</TableCell>

      <TableCell align='right'>price</TableCell>

      <TableCell align='right'>
        <TableMoreMenu />
      </TableCell>
    </TableRow>
  );
};
export default ProductTableRow;
