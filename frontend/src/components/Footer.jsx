import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/CoziiProptech-logo_web2-01.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="CoziiProptech" />
          </Col>
          <Col className="text-center py-3">
            <p>&copy; {currentYear} Cozii Technologies Inc </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
