import { useState, useEffect } from "react";
import HorizonalStepper from "../components/HorizonalStepper";
import StepperButtons from "../components/StepperButton";
import PersonalInfo from "./PersonalInfo";
import TravelPreference from "./TravelPreference";
import HealthAndSafety from "./HealthAndSafety";
import initialData from "../utils/initialData";
import applicationSteps from "../utils/applicationSteps";
import stepValidation from "../utils/stepValidation";
import axios from "axios";

const Homepage = () => {
  // test to fetch data from backend
  // const [infos, setInfos] = useState([]);
  // useEffect(() => {
  //   const fetchinfos = async () => {
  //     const { data } = await axios.get("/api/infos");
  //     setInfos(data);
  //   };
  //   fetchinfos();
  // }, []);

  // Control application steps
  const [activeStep, setActiveStep] = useState(0);

  // Hold the form data
  const [data, setData] = useState(initialData);

  // Handle the buttons
  // Call useStepValidation at the top level of the component

  const handleNext = () => {
    const isValid = stepValidation(data, activeStep);
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setData(initialData);
  };

  const handleSubmit = async (e) => {
    const isValid = stepValidation(data, activeStep);
    if (isValid) {
      const {
        name,
        dateOfBirth,
        nationality,
        email,
        phone,
        departureDate,
        returnDate,
        specialRequest,
        accommodation,
        healthy,
        emergencyContact,
        emergencyContactPhone,
        medicalCondition,
      } = data;
      e.preventDefault();
      try {
        await axios.post("/api/infos/submit", {
          name,
          dateOfBirth,
          nationality,
          email,
          phone,
          departureDate,
          returnDate,
          specialRequest,
          accommodation,
          healthy,
          emergencyContact,
          emergencyContactPhone,
          medicalCondition,
        });

        handleNext();
      } catch (error) {
        alert("Registration failed!");
        console.log(error);
      }
    }
  };

  return (
    <>
      <HorizonalStepper steps={applicationSteps} activeStep={activeStep} />

      {activeStep === 0 ? (
        <PersonalInfo data={data} setData={setData} />
      ) : activeStep === 1 ? (
        <TravelPreference data={data} setData={setData} />
      ) : (
        <HealthAndSafety data={data} setData={setData} />
      )}

      <StepperButtons
        stepsLength={applicationSteps.length}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />

      {/* test fetch data from backend*/}
      {/* {infos.map((info, index) => (
        <div key={index}>
          <p>Name: {info.name}</p>
          <p>Date of Birth: {info.dateOfBirth}</p>
          <p>Nationality: {info.nationality}</p>
          <p>Email: {info.email}</p>
        </div>
      ))} */}
    </>
  );
};

export default Homepage;
