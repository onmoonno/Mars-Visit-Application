import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { handleFormChange } from "../utils/handleFormChange";

const HealthAndSafety = ({ data, setData }) => {
  const submitHandler = () => {};

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        {/* Health Declaration */}
        <Form.Group className="my-2" controlId="healthy">
          <Row>
            <Col md={3}>
              <Form.Label>Health Declaration</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                as="select"
                value={data.healthy}
                onChange={handleFormChange(setData, "healthy")}
              >
                <option value="">Select An Option...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Emergency Contact */}
        <Form.Group className="my-2" controlId="emergencyContact">
          <Row>
            <Col md={3}>
              <Form.Label>Emergency Contact</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Emergency Contact"
                value={data.emergencyContact}
                onChange={handleFormChange(setData, "emergencyContact")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Emergency Contact Phone */}
        <Form.Group className="my-2" controlId="emergencyContactPhone">
          <Row>
            <Col md={3}>
              <Form.Label>Emergency Contact Phone</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="tel"
                placeholder="Enter Emergency Contact Phone"
                value={data.emergencyContactPhone}
                onChange={handleFormChange(setData, "emergencyContactPhone")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Medical Condition */}
        <Form.Group className="my-2" controlId="medicalCondition">
          <Row>
            <Col md={3}>
              <Form.Label>Medical Condition</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Any Medical Conditions? "
                value={data.medicalCondition}
                onChange={handleFormChange(setData, "medicalCondition")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default HealthAndSafety;
