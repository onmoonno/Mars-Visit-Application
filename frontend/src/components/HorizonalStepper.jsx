import * as React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import FormContainer from "./FormContainer";

const HorizonalStepper = ({ steps, activeStep }) => {
  return (
    <FormContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </FormContainer>
  );
};

export default HorizonalStepper;
