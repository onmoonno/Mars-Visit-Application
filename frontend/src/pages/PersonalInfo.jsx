// PersonalInfo form
import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { handleFormChange } from "../utils/handleFormChange";

const PersonalInfo = ({ data, setData }) => {
  return (
    <FormContainer>
      <Form>
        {/* Name Section */}
        <Form.Group className="my-2" controlId="name">
          <Row>
            <Col md={3}>
              <Form.Label>Full Name</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={data.name}
                onChange={handleFormChange(setData)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Date of Birth */}
        <Form.Group className="my-2" controlId="dateOfBirth">
          <Row>
            <Col md={3}>
              <Form.Label>Date of Birth</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={data.dateOfBirth}
                onChange={handleFormChange(setData)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        {/* Nationality Section */}
        <Form.Group className="my-2" controlId="nationality">
          <Row>
            <Col md={3}>
              <Form.Label>Nationality</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Enter Your Nationality"
                value={data.nationality}
                onChange={handleFormChange(setData)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        {/* Email Section */}
        <Form.Group className="my-2" controlId="email">
          <Row>
            <Col md={3}>
              <Form.Label>Email Address</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleFormChange(setData)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        {/* Phone Section */}
        <Form.Group className="my-2" controlId="phone">
          <Row>
            <Col md={3}>
              <Form.Label>Phone</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="tel"
                placeholder="Enter Phone"
                value={data.phone}
                onChange={handleFormChange(setData)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default PersonalInfo;
