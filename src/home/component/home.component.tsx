/** @format */

import MenuComponent from "../../layouts/menu/component/menu.component";
import HeaderComponent from "../../layouts/header/components/header.component";
import {
  ContentBody,
  HomeContent,
  HomePage,
} from "../common/assets/home.style";

const HomeComponent = ({ children }: any) => {
  return (
    <HomePage>
      <MenuComponent />
      <HomeContent>
        <HeaderComponent />
        <ContentBody>{children}</ContentBody>
      </HomeContent>
    </HomePage>
  );
};

export default HomeComponent;
