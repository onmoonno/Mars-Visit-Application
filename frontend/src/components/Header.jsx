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
                <img
                  width="100px"
                  src={logo}
                  alt="Cozii Proptech"
                  style={{ paddingTop: "20px" }}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand>
                <h1 style={{ marginTop: "20px", marginBottom: "0px" }}>
                  Welcome To Mars
                </h1>
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
