import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";

const AppLayoutComponent = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayoutComponent;
