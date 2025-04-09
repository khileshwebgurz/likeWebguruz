"use client";
import { useState } from "react";

const WebflowProcess = () => {
  const [activeTab, setActiveTab] = useState(1);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description:
        "We conduct thorough research to ensure that our approach aligns perfectly with your brand identity and business objectives. This step sets the foundation for a well-structured, high-performing website that meets your expectations.",
    },
    {
      id: 2,
      title: "UI/UX Design & Wireframing",
      description:
        "Our expert UI/UX designers create wireframes and interactive prototypes to visualize the website layout, navigation flow, and user interactions. Every design element is crafted with usability and aesthetics in mind, ensuring a smooth, intuitive, and engaging experience for visitors.",
    },
    {
      id: 3,
      title: "Webflow Development",
      description:
        "We leverage Webflow’s advanced features to build a fully responsive, dynamic, and SEO-optimized website tailored to your business needs. Our development process follows industry best practices, ensuring clean code, fast load times, and seamless third-party integrations.",
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      description:
        "Our QA specialists run multiple tests, including functionality testing, mobile responsiveness checks, speed optimization, and security assessments. We also perform usability testing to ensure that visitors can easily navigate your website and interact with all features without any friction.",
    },
    {
      id: 5,
      title: "Deployment & Maintenance",
      description:
        "Our team ensures a smooth and secure launch, optimizing your website for search engines and configuring analytics tools to track performance. But our job doesn’t end there- we offer ongoing maintenance and support to keep your website updated, secure, and performing at its best. ",
    },
  ];

  return (
    <div className="webflowprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 md-mb-5">
            <h2 className="mb-2">
            <span>    Our Webflow </span>  Development Process 
            </h2>
            <p>
            We follow a structured approach to deliver high-quality Webflow websites.
            </p>
          </div>
        </div>
        <div className="row webflow-process">
          <div className="process-tabs">
            <ul>
              {processSteps.map((step) => (
                <li
                  key={step.id}
                  className={`process-clickable ${
                    activeTab === step.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(step.id)}
                >
                  <span>
                    <div className="tabs-title">{step.title}</div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="process-tabs-description">
            {processSteps.map((step) =>
              activeTab === step.id ? (
                <div key={step.id} className={`process-tabs-decription active`}>
                  <p>{step.description}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebflowProcess;
