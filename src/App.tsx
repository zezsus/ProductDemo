/** @format */

import { Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import HomeComponent from "./home/component/home.component";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? HomeComponent : Fragment;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
