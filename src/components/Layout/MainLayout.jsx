import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-3"></div>
      </div>
      <Footer />
    </>
  );
};
