import React from "react";
import { Button, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import FormContainer from "./FormContainer";

const StepperButtons = ({
  activeStep,
  stepsLength,
  handleBack,
  handleNext,
}) => {
  return (
    <FormContainer>
      {activeStep === stepsLength ? (
        <Row>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
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
              {activeStep === stepsLength - 1 ? "Finish" : "Next"}
            </Button>
          </Col>
        </Row>
      )}
    </FormContainer>
  );
};

export default StepperButtons;
