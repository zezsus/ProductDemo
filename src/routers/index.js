/** @format */
import NewProduct from "../products/components/newproduct.component";
import ListProductComponent from "../products/components/listproduct.component";

export const routes = [
  {
    path: "/",
    page: ListProductComponent,
    isShowHeader: true,
  },
  {
    path: "/newproduct",
    page: NewProduct,
    isShowHeader: true,
  },
];
