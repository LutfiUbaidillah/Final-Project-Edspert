import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Halo aku adalah top layout</div>
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <Button onClick={() => navigate("/")}>Product</Button>
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
