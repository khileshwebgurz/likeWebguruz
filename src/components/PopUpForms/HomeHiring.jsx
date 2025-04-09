"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./hiring.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { useRouter } from "next/navigation";

const HomeHiring = () => {
  const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //show
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptions = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    handleChange("position", value);
  };
  const initialFormData = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    position: "",
    resume: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [fileClass, setFileClass] = useState("");
  const validateForm = () => {
    const newErrors = {};
    if (!validator.trim(formData.firstname))
      newErrors.firstname = "First Name is required";
    if (!validator.trim(formData.lastname))
      newErrors.lastname = "Last Name is required";
    if (!validator.isEmail(formData.email)) {
      newErrors.email = formData.email
        ? "Email is invalid"
        : "Business Email is required";
    }
    if (!validator.trim(formData.phone))
      newErrors.phone = "Phone Number is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.resume) newErrors.resume = "Resume file is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
    const name = file ? file.name : "";
    setFileName(name);

    // Dynamically set the class based on file name
    setFileClass(
      name !== "Choose File" && name ? "file-selected" : "default-class"
    );
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);

      const formdata = new FormData();
      formdata.append("_wpcf7_unit_tag", "wpcf7-f6708-o3");
      formdata.append("Firstname", formData.firstname);
      formdata.append("Lastname", formData.lastname);
      formdata.append("Phone", formData.phone);
      formdata.append("Email", formData.email);
      formdata.append("POSITION", formData.position);
      formdata.append("resume", formData.resume);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${BASE_URL_API}/wp-json/contact-form-7/v1/contact-forms/6708/feedback`,
          requestOptions
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Response from server:", data);

        // Reset the form data to initial state
        setFormData(initialFormData);
        setErrors({}); // Clear any existing errors

        if (data.status === "mail_sent") {
          // Reset the form data to initial state
          setFormData(initialFormData);
          setErrors({}); // Clear any existing errors

          // Push dataLayer event
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "we_are_hiring_submitform",
            form_name: "Hiring Form",
            form_id: "hiringForm",
          });

          // Redirect to thank-you page only if mail was sent successfully
          router.push("/resume-thank-you");
        } else if (data.status === "mail_failed") {
          // Handle mail failure - maybe show an error message to the user
          console.error("Mail sending failed");
          // You might want to set an error state here to show to the user
          setErrors({
            submit: "Failed to send application. Please try again later.",
          });
        }
      } catch (error) {
        console.error("Error posting data:", error);
        setErrors({
          submit: "An error occurred. Please try again later.",
        });
      }
    } else {
      console.log("Form has errors.");
    }
  };
  // close

  return (
    <div className="container text-center">
      <Button
        variant="primary"
        size="lg"
        className="hiring-btn"
        onClick={handleShow}
      >
        we are hiring
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`scale-modal ${show ? "show" : ""}`}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="home-hiring">
            <form
              className="contact-right-form new-single-page-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3>we are hiring</h3>

              <label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                {errors.firstname && (
                  <span className="error">{errors.firstname}</span>
                )}
              </label>

              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                {errors.lastname && (
                  <span className="error">{errors.lastname}</span>
                )}
              </label>

              <label>
                <input
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>

              <label>
                <PhoneInput
                  country={"in"}
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(phone) => handleChange("phone", phone)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>

              <label>
                <select
                  value={selectedOption}
                  onChange={handleOptions}
                  name="POSITION"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Pre Sales Consultant">
                    Pre Sales Consultant
                  </option>
                  <option value="Business Developer Executive">
                    Business Developer Executive
                  </option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Direct Sales Consultant">
                    Direct Sales Consultant
                  </option>
                  <option value="Email Marketing Specialist">
                    Email Marketing Specialist
                  </option>
                  <option value="Business Development Manager">
                    Business Development Manager
                  </option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Creative Designer Intern">
                    Creative Designer Intern
                  </option>
                  <option value="GROWTH AUTOMATION SPECIALIST">
                    GROWTH AUTOMATION SPECIALIST
                  </option>
                  <option value="HUBSPOT CRM DEVELOPER">
                    HUBSPOT CRM DEVELOPER
                  </option>
                  <option value="HubSpot CRM/CMS Specialist">
                    HubSpot CRM/CMS Specialist
                  </option>
                  <option value="HR Generalist">HR Generalist</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="IT Admin">IT Admin</option>
                  <option value="Mern Developer  Intern">
                    Mern Developer Intern
                  </option>
                  <option value="Mern Developer">Mern Developer</option>
                  <option value="React JS Developer">React JS Developer</option>
                  <option value="Marketing Specialist">
                    Marketing Specialist
                  </option>
                  <option value="Flutter Developer">Flutter Developer</option>
                  <option value="Android Developer">Android Developer</option>
                  <option value="React Native">React Native</option>
                  <option value="IOS Developer">IOS Developer</option>
                  <option value="Java Developer">Java Developer</option>
                  <option value="Quality Analyst Team Lead">
                    Quality Analyst Team Lead
                  </option>
                  <option value="Quality Analyst">Quality Analyst</option>
                  <option value="SEO Analyst">SEO Analyst</option>
                  <option value="SEO Interns">SEO Interns</option>
                  <option value="Sr. SEO Executive">Sr. SEO Executive</option>
                  <option value="Guest Post Outreach">
                    Guest Post Outreach
                  </option>
                  <option value="SEO Team Lead">SEO Team Lead</option>
                  <option value="SEO Executive">SEO Executive</option>
                  <option value="SOCIAL MEDIA EXECUTIVE">
                    SOCIAL MEDIA EXECUTIVE
                  </option>
                  <option value="Web UIUX Designer">Web UIUX Designer</option>
                  <option value="Graphic Designers">Graphic Designers</option>
                  <option value="UI/UX Developer">UI/UX Developer</option>
                  <option value="Web Designer">Web Designer</option>
                  <option value="Senior Technical Project Manager">
                    Senior Technical Project Manager
                  </option>
                  <option value="Web Developers">Web Developers</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="WordPress Developer">
                    WordPress Developer
                  </option>
                  <option value="Laravel Developer">Laravel Developer</option>
                  <option value="PHP Developer">PHP Developer</option>
                  <option value="Shopify Developers">Shopify Developers</option>
                </select>
                {errors.position && (
                  <span className="error">{errors.position}</span>
                )}
              </label>

              <label className="choose-file hire-wgz">
                <span className={fileClass}>
                  {fileName ? fileName : "Choose File"}
                </span>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                />
                {errors.resume && (
                  <span className="error">{errors.resume}</span>
                )}
              </label>
              {errors.submit && <span className="error">{errors.submit}</span>}
              <button
                type="button"
                className="new-hire-btn"
                onClick={handleSubmit}
              >
                Apply Now
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomeHiring;
