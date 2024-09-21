import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" style={{ background: "#603F26" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          ShopeZone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>

            <Link to="/account" className="text-white nav-link">
              Account
            </Link>
            <Link to="/cart" className="text-white nav-link">
              Cart
            </Link>
            <Link to="/orders" className="text-white nav-link">
              Orders
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
