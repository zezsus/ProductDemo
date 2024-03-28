/** @format */

import * as yup from "yup";
export const productSchemas = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().notRequired(),
  images: yup.array().of(yup.string()).required(),
  code: yup.string().required(),
  sku: yup.string().required(), //đơn vị quản lý
  price: yup.number().required(),
  priceSale: yup.number().notRequired(),
  tags: yup.string().notRequired(),
  category: yup.string().required(),
});

export const listProductSchemas = yup.array().of(productSchemas);
