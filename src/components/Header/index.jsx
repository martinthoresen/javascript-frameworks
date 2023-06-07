import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ShoppingCartIcon from "./ShoppingCartIcon";

function Navigation() {
  return (
    <header className="mb-5">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SwiftShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="mx-1 text-decoration-none text-light" to="/">
              Home
            </Link>
            <Link className="mx-1 text-decoration-none text-light" to="/contact">
              Contact Us
            </Link>
          </Nav>
          <ShoppingCartIcon />
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
