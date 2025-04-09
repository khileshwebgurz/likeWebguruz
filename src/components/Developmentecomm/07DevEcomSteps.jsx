import React from "react";

const DevEcomSteps = () => {
  const steps = [
    "We meet with you to understand your project needs.",
    "Once we’ve reviewed the requirements, we provide a tailored proposal.",
    "We bring your ideas to life with custom designs and features.",
    "We deliver the completed website along with the necessary training for smooth operations.",
  ];

  return (
    <section className="ecommerce-steps-conclude py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main mb-5">
            <h2>
              Steps to <span>Engage</span>
            </h2>
          </div>
        </div>
        <div className="row step-row">
          {steps.map((step, index) => (
            <div className="col-md-6 col-12 col-lg-3 mb-5 mb-lg-0" key={index}>
              <div className="ecom-dev-steps">
                <span className="step-counts">{index + 1}</span>
                <div className="step-details">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevEcomSteps;
