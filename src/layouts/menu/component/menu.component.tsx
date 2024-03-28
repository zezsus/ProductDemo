/** @format */

import { LeftMenu, Title } from "../common/assets/menu.style";
import Menu from "../element/menu.element";

const MenuComponent = () => {
  const listItemUser = ["Profile", "List", "Create", "Edit", "Account"];
  const listItemProduct = ["List", "Detail", "Create", "Edit"];
  const listItemOrder = ["List", "Detail"];

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
