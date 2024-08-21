import { useState } from "react";
import HorizonalStepper from "../components/HorizonalStepper";
import StepperButtons from "../components/StepperButton";
import PersonalInfo from "./PersonalInfo";
import TravelPreference from "./TravelPreference";
import HealthAndSafety from "./HealthAndSafety";

const Homepage = () => {
  const steps = ["Personal Info", "Travel Preference", "Health and Safety"];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <HorizonalStepper steps={steps} activeStep={activeStep} />
      <HealthAndSafety />
      <PersonalInfo />
      <TravelPreference />
      <StepperButtons
        stepsLength={steps.length}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </>
  );
};

export default Homepage;
