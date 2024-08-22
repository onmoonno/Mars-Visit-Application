import React from "react";
import { Button, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import FormContainer from "./FormContainer";
import Message from "../components/Message";

const StepperButtons = ({
  activeStep,
  stepsLength,
  handleBack,
  handleNext,
  handleReset,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      {/* if finished all the steps, show submit message, 
      and show 'Reset' button to allow inputting another application */}

      {/* elseif still filling the form, show 'Back' and 'Next' button, 
      in the last step use 'Submit' button instead of 'Next' */}
      {activeStep === stepsLength ? (
        <Row>
          <Col className="d-flex justify-content-start" md={8}>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
              Application Submitted - Ready To Mars!
            </Typography> */}
            <Message variant="success">
              Application Submitted - Ready To Mars!
            </Message>
          </Col>
          <Col className="d-flex justify-content-end" md={4}>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="d-flex justify-content-start">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            {activeStep === stepsLength - 1 ? (
              <Button onClick={handleSubmit}>Submit</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Col>
        </Row>
      )}
    </FormContainer>
  );
};

export default StepperButtons;
