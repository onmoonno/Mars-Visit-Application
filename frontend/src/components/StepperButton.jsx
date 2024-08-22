import React from "react";
import { Button, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import FormContainer from "./FormContainer";

const StepperButtons = ({
  activeStep,
  stepsLength,
  handleBack,
  handleNext,
  handleReset,
}) => {
  return (
    <FormContainer>
      {activeStep === stepsLength ? (
        <Row>
          <Col className="d-flex justify-content-start" md={8}>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Application Submitted - Ready To Mars!
            </Typography>
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
            <Button onClick={handleNext}>
              {activeStep === stepsLength - 1 ? "Submit" : "Next"}
            </Button>
          </Col>
        </Row>
      )}
    </FormContainer>
  );
};

export default StepperButtons;
