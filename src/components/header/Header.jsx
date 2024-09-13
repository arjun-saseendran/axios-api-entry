import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Account
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Cart
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Orders
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
