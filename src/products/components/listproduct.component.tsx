/** @format */

import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TableHeader from "../elements/tableheader.element";
import { useEffect, useState } from "react";
import { listProduct } from "../common/mockData";
import { IProduct } from "../../common/interface/product.interface";
import SearchProduct from "../elements/searchproduct.element";
import TableToolBar from "../elements/tabletoolbar.element";
import { useTable } from "../../common/hook/usetable.hook";
import TableMoreMenu from "../elements/tablemoremubu.element";
import AddIcon from "@mui/icons-material/Add";
import { ListHeader } from "../common/assets/listproduct.syte";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  { id: "name", label: "Product", align: "left" },
  { id: "createdAt", label: "Create at", align: "left" },
  { id: "inventoryType", label: "Status", align: "center", width: 180 },
  { id: "price", label: "Price", align: "right" },
  { id: "" },
];

const ListProductComponent = () => {
  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    selected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (listProduct.length) {
      setTableData(listProduct);
    }
  }, []);

  return (
    <Box>
      <Container>
        <ListHeader>
          <Box>
            <Typography variant="h4">List</Typography>
            <div>link</div>
          </Box>

          <Button
            variant='contained'
            startIcon={<AddIcon />}
            sx={{ fontWeight: "bold", height:45}}
            onClick={() => navigate("/newproduct")}>
            New Product
          </Button>
        </ListHeader>
      </Container>
      <Container>
        <Card sx={{ my: 2 }}>
          <Box sx={{ display: "flex" }}>
            <SearchProduct />
            <TableToolBar numSelected={selected.length} />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader sx={{ minWidth: 750 }}>
                <TableHeader
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={onSelectAllRows}
                />
                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((product: IProduct) => {
                      return (
                        <TableRow
                          hover
                          onClick={() => onSelectRow(product.id)}
                          role='checkbox'
                          tabIndex={-1}
                          key={product.id}
                          sx={{ cursor: "pointer" }}>
                          <TableCell padding='checkbox'>
                            <Checkbox color='primary' />
                          </TableCell>
                          <TableCell scope='row' padding='none'>
                            {product.name}
                          </TableCell>
                          <TableCell align='right'>{product.sku}</TableCell>
                          <TableCell align='right'>{product.price}</TableCell>
                          <TableCell align='right'>{product.code}</TableCell>
                          <TableCell>
                            <TableMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={listProduct.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ListProductComponent;
