/** @format */

import { LeftMenu, Title } from "../common/assets/menu.style";
import Menu from "../element/menu.element";

const MenuComponent = () => {

  const listItemUser = [
    { name: "Profile", path: "/profile" },
    { name: "List", path: "/user" },
    { name: "Create", path: "/newuser" },
    { name: "Edit", path: "/user/:id" },
    { name: "Account", path: "/user:id" },
  ];
  const listItemProduct = [
    { name: "List", path: "/" },
    { name: "Detail", path: "/product/:id" },
    { name: "Create", path: "/newproduct" },
    { name: "Edit", path: "//product/:id" },
  ];
  const listItemOrder = [
    { name: "List", path: "/order" },
    { name: "Detail", path: "/order/:id" },
  ];
  return (
    <LeftMenu>
      <Title variant='h6'>Management</Title>
      <Menu title={"User"} listItem={listItemUser} />
      <Menu title={"Product"} listItem={listItemProduct} />
      <Menu title={"Order"} listItem={listItemOrder} />
    </LeftMenu>
  );
};

export default MenuComponent;
