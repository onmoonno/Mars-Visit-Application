import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const TravelPreference = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const submitHandler = () => {};

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="ddepartureDate">
          <Row>
            <Col md={3}>
              <Form.Label>Departure Date</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="returnDate">
          <Row>
            <Col md={3}>
              <Form.Label>Return Date</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="accommodation">
          <Row>
            <Col md={3}>
              <Form.Label>Accommodation Preference</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                as="select"
                value={accommodation}
                onChange={(e) => {
                  setAccommodation(e.target.value);
                }}
              >
                <option value="">Select An Option...</option>
                <option value="Space Hotel">Space Hotel</option>
                <option value="Martian Base">Martian Base</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-2" controlId="specialRequest">
          <Row>
            <Col md={3}>
              <Form.Label>Special Request</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Any Other Preferences? "
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default TravelPreference;
