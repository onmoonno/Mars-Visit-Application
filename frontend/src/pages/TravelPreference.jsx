import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { handleFormChange } from "../utils/handleFormChange";

const TravelPreference = ({ data, setData }) => {
  const submitHandler = () => {};

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        {/* Departure Date Section */}
        <Form.Group className="my-2" controlId="departureDate">
          <Row>
            <Col md={3}>
              <Form.Label>Departure Date</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={data.departureDate}
                onChange={handleFormChange(setData, "departureDate")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Return Date Section */}
        <Form.Group className="my-2" controlId="returnDate">
          <Row>
            <Col md={3}>
              <Form.Label>Return Date</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={data.returnDate}
                onChange={handleFormChange(setData, "returnDate")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Accommodation Preference */}
        <Form.Group className="my-2" controlId="accommodation">
          <Row>
            <Col md={3}>
              <Form.Label>Accommodation Preference</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                as="select"
                value={data.accommodation}
                onChange={handleFormChange(setData, "accommodation")}
              >
                <option value="">Select An Option...</option>
                <option value="Space Hotel">Space Hotel</option>
                <option value="Martian Base">Martian Base</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        {/* Special Request */}
        <Form.Group className="my-2" controlId="specialRequest">
          <Row>
            <Col md={3}>
              <Form.Label>Special Request</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Any Other Preferences? "
                value={data.specialRequest}
                onChange={handleFormChange(setData, "specialRequest")}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default TravelPreference;
