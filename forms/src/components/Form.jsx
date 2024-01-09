import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [validationError, setValidationError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === "") {
        setValidationError(
          `Please enter your ${key === "phoneNumber" ? "phone number" : key}!`
        );
        return;
      }
    }
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationError("Invalid phone number.");
      return;
    }
    setValidationError("");
    alert("Registration successful!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>

      {validationError && <p style={{ color: "red" }}>{validationError}</p>}
    </div>
  );
};

export default RegistrationForm;
