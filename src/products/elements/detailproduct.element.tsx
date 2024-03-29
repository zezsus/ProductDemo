/** @format */

import { Card, TextField, Typography } from "@mui/material";
import {
  DetailLeft,
  DetailProducts,
  DetailRight,
} from "../common/assets/detailproduct.style";

const DetailProduct = () => {
  return (
    <DetailProducts>
      <DetailLeft>
        <Typography variant='h5'>Details</Typography>
        <Typography component={"div"}>
          Title, short description, image...
        </Typography>
      </DetailLeft>
      <Card sx={{ width: "100%", p: 2 }}>
        <DetailRight>
          <TextField label='Product name' variant='outlined' fullWidth />
          <TextField label='Sub Description' multiline rows={4} />
        </DetailRight>
      </Card>
    </DetailProducts>
  );
};

export default DetailProduct;
