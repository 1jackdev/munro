import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <span className="title">Munro Coffee Co</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/roasts">Roasts</Nav.Link>
              <Nav.Link href="/order">Order Now</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
