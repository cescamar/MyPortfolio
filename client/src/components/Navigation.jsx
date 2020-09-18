import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar.Collapse
      expand="lg"
      className="d-flex justify-content-between navbar"
    >
      <Nav>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/home" className="navtitle">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/about" className="navtitle">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/portfolio" className="navtitle">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/contact" className="navtitle">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  );
};

export default Navigation;
