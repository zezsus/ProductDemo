/** @format */

import { InferType } from "yup";
import { productSchemas } from "../schemas/product.schemas";

export type IProduct = InferType<typeof productSchemas>;
