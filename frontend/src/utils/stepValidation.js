const stepValidation = (data, activeStep) => {
  const validationConfig = {
    0: ["name", "dateOfBirth", "nationality", "email", "phone"], // Personal Info
    1: ["departureDate", "returnDate", "accommodation"], // Travel Preference
    2: ["healthy", "emergencyContact", "emergencyContactPhone"], // Health and Safety
  };

  const fieldsToValidate = validationConfig[activeStep];
  let isValid = true;
  let errorMessage = "";

  fieldsToValidate.forEach((field) => {
    const value = data[field];

    // Check if the field is empty
    if (!value) {
      isValid = false;
      errorMessage = `${field} is required!`;
      return; // Exit loop on first error
    }

    // Additional field-specific validation
    switch (field) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          isValid = false;
          errorMessage = "Invalid email format";
        }
        break;
      case "phone":
      case "emergencyContactPhone":
        if (!/^\d{10}$/.test(value)) {
          isValid = false;
          errorMessage = "Invalid phone format. It must be a 10-digit number.";
        }
        break;
      case "dateOfBirth":
        if (new Date(value) > new Date()) {
          isValid = false;
          errorMessage = "Date of birth must be before today.";
        }
        break;
      case "returnDate":
        const departureDate = new Date(data.departureDate);
        if (new Date(value) <= departureDate) {
          isValid = false;
          errorMessage = "Return date must be after departure date.";
        }
        break;
      default:
        break;
    }

    if (!isValid) {
      return; // Exit loop on first validation failure
    }
  });

  if (!isValid) {
    alert(errorMessage);
  }

  return isValid;
};

export default stepValidation;
