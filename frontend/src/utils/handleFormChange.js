// Handle data updating when fill in forms

export const handleFormChange = (setData) => (event) => {
  const field = event.target.id;
  const value = event.target.value;
  setData((prevData) => ({
    ...prevData,
    [field]: value,
  }));
};
