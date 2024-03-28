/** @format */

import MenuComponent from "../../layouts/menu/component/menu.component";
import HeaderComponent from "../../layouts/header/components/header.component";
import { HomeContent, HomePage } from "../common/assets/home.style";
import ListProductComponent from "../../products/components/listproduct.component";

const HomeComponent = () => {
  return (
    <HomePage>
      <MenuComponent />
      <HomeContent>
        <HeaderComponent />
        <ListProductComponent />
      </HomeContent>
    </HomePage>
  );
};

export default HomeComponent;
