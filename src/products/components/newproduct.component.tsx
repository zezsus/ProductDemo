/** @format */

import { Box, Container, Typography } from "@mui/material";
import { AddNewProduct } from "../common/assets/newproduct.style";
import DetailProduct from "../elements/detailproduct.element";
import PropertiesProduct from "../elements/propertiesproduct.element";
import PricingProduct from "../elements/pricingproduct.element";

const NewProductComponent = () => {
  return (
    <AddNewProduct>
      <Container>
        <Box>
          <Typography variant='h4'>Create a new product</Typography>
          <div>link</div>
        </Box>
      </Container>
      <Container>
        <DetailProduct />
        <PropertiesProduct />
        <PricingProduct />
      </Container>
    </AddNewProduct>
  );
};

export default NewProductComponent;
