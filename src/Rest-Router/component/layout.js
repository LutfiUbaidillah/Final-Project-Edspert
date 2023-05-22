import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* <Link to='/checkout'>Checkout</Link> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
