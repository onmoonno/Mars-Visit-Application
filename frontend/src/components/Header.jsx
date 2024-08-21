import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand>
                <img width="60px" src={logo} alt="Cozii Proptech" />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand>Welcome To Mars</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
