import { useState } from "react";
import HorizonalStepper from "../components/HorizonalStepper";
import StepperButtons from "../components/StepperButton";
import PersonalInfo from "./PersonalInfo";
import TravelPreference from "./TravelPreference";
import HealthAndSafety from "./HealthAndSafety";

const Homepage = () => {
  // Control application steps
  const steps = ["Personal Info", "Travel Preference", "Health and Safety"];
  const [activeStep, setActiveStep] = useState(0);

  // Hold the form data
  const initialData = {
    name: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    departureDate: "",
    returnDate: "",
    specialRequest: "",
    accommodation: "",
    healthy: "",
    emergencyContact: "",
    emergencyContactPhone: "",
    medicalCondition: "",
  };
  const [data, setData] = useState(initialData);

  // Handle the buttons
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setData(initialData);
  };

  return (
    <>
      <HorizonalStepper steps={steps} activeStep={activeStep} />

      {activeStep === 0 ? (
        <PersonalInfo data={data} setData={setData} />
      ) : activeStep === 1 ? (
        <TravelPreference data={data} setData={setData} />
      ) : (
        <HealthAndSafety data={data} setData={setData} />
      )}

      <StepperButtons
        stepsLength={steps.length}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        handleReset={handleReset}
      />
    </>
  );
};

export default Homepage;
