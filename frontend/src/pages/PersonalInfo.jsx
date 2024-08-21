import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const submitHandler = () => {};

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Row>
            <Col md={3}>
              <Form.Label>Full Name</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="dateOfBirth">
          <Row>
            <Col md={3}>
              <Form.Label>Date of Birth</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="nationality">
          <Row>
            <Col md={3}>
              <Form.Label>Nationality</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Your Nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Row>
            <Col md={3}>
              <Form.Label>Email Address</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="phone">
          <Row>
            <Col md={3}>
              <Form.Label>Phone</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="tel"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default PersonalInfo;
