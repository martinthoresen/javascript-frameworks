import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Navigation() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SwiftShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
          <button>
            <FontAwesomeIcon icon={icon({ name: "cart-shopping" })} />
          </button>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
