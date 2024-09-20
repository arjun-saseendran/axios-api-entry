import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AdminHeader() {
  return (
    <Navbar expand="lg" style={{ background: "#603F26" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          AdminZone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/all-account" className="text-white">
              All Accounts
            </Nav.Link>
            <Nav.Link href="/admin-panel" className="text-white">
              Admin Panel
            </Nav.Link>
            <Nav.Link href="/all-orders" className="text-white">
              All Orders
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
