/** @format */

import { faker } from "@faker-js/faker";
import { IProduct } from "../../../common/interface/product.interface";

const productList = [];

export const generateProductData = () => {
  const productData = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    images: [
      faker.image.imageUrl(),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
    ],
    stock: faker.number.int(),
    createdAt: faker.date.anytime(),
    code: faker.string.alphanumeric(6),
    sku: faker.random.word(),
    price: faker.number.bigInt(),
    priceSale: faker.number.bigInt(),
    tags: faker.random.words(),
    category: faker.random.word(),
  };

  return productData;
};

export const listProduct: any = faker.helpers.multiple(generateProductData, {
  count: 30,
});
