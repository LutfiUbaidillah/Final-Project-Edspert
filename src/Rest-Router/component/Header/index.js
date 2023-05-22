import { Container, Nav, Navbar, Col, Button } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

import Registrasi from "../Button/Registrasi";
import Logo from "../../Assets/img/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import list from "../Header/style.module.css";

function Header() {
  const navigate = useNavigate();
  return (
    // <div style={{width:'100%', backgroundColor:'#2c3f59', padding:'20px', color:'white'}}>
    <div className={list.Header}>
      <Navbar expand='lg'>
        <Container>
          <Col sm='2'>
            <Navbar.Brand href='#home' style={{ color: "white" }}>
              <img src={Logo} width='100%' alt='' />
            </Navbar.Brand>
          </Col>
          <Col style={{ display: "grid", justifyContent: "flex-end" }} sm='5'>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto '>
                <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                  <Link to='/' onClick={() => navigate("/")}>
                    home
                  </Link>
                  <Button onClick={() => navigate("/")}>Product</Button>
                  <Button onClick={() => navigate("/detail/123")}>
                    Detail
                  </Button>
                  <Button onClick={() => navigate("payment")}>Payment</Button>
                  <Button onClick={() => navigate("checkout")}>Checkout</Button>
                </div>
                <Registrasi />
              </Nav>
            </Navbar.Collapse>
            {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto bg="primary" variant="dark"'>
                <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                  <Nav.Link className='custom-link' href='#home'>
                    Home
                  </Nav.Link>
                  <Nav.Link href='#link'>Program</Nav.Link>
                  <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.2'>
                      Laravel
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      react
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </div>
              </Nav>
            </Navbar.Collapse> */}
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
