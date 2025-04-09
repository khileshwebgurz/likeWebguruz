"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

const ServiceFormCl = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!validator.trim(formData.firstName))
      newErrors.firstName = "First Name is required";
    if (!validator.trim(formData.lastName))
      newErrors.lastName = "Last Name is required";
    if (!validator.isEmail(formData.email)) {
      newErrors.email = formData.email
        ? "Email is invalid"
        : "Email Address is required";
    }
    if (!validator.trim(formData.phone))
      newErrors.phone = "Phone Number is required";
    if (!validator.trim(formData.projectDetails))
      newErrors.projectDetails = "Project Details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Response from server:", data);

        // Reset the form data to initial state
        setFormData(initialFormData);
        setErrors({}); // Clear any existing errors
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
      <div className="merge-main">
        <label>
          First Name*
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </label>
        <label>
          Last Name*
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </label>
      </div>
      <div className="merge-main">
        <label>
          Email*
          <input
            type="text"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Phone Number*
          <PhoneInput
            country={"in"}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(phone) => handleChange("phone", phone)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
      </div>
      <label>
        Brief About the Project*
        <textarea
          placeholder="Brief About The Project"
          value={formData.projectDetails}
          onChange={(e) => handleChange("projectDetails", e.target.value)}
        ></textarea>
        {errors.projectDetails && (
          <span className="error">{errors.projectDetails}</span>
        )}
      </label>
      <button type="button" className="explore-btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ServiceFormCl;
