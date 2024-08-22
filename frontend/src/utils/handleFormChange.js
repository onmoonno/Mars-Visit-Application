// Handle data updating when fill in forms

export const handleFormChange = (setData, field) => (event) => {
  setData((prevData) => ({
    ...prevData,
    [field]: event.target.value,
  }));
};
