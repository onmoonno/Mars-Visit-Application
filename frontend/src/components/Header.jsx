import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/CoziiProptech-logo_web-01.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="CoziiProtech" />
          </Navbar.Brand>
          <Navbar.Text>Welcome TO Mars</Navbar.Text>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
