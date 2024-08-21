import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const HealthAndSafety = () => {
  const [health, setHealth] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");

  const submitHandler = () => {};

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="health">
          <Row>
            <Col md={3}>
              <Form.Label>Health Declaration</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                as="select"
                value={health}
                onChange={(e) => {
                  setHealth(e.target.value);
                }}
              >
                <option value="">Select An Option...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="emergencyContact">
          <Row>
            <Col md={3}>
              <Form.Label>Emergency Contact</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Emergency Contact"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="emergencyContactPhone">
          <Row>
            <Col md={3}>
              <Form.Label>Emergency Contact Phone</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="tel"
                placeholder="Enter Emergency Contact Phone"
                value={emergencyContactPhone}
                onChange={(e) => setEmergencyContactPhone(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="medicalCondition">
          <Row>
            <Col md={3}>
              <Form.Label>Medical Condition</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Any Medical Conditions? "
                value={medicalCondition}
                onChange={(e) => setMedicalCondition(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default HealthAndSafety;
