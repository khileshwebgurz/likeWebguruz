import React from "react";

const DrupalProcess = () => {
  return (
    <div className="drupalprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
          <h2 className="mb-2">
            <span>  Our Drupal </span>  Development Process
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="process-card">
              <h4>Requirement Analysis & Planning</h4>
              <p>
                We understand your business needs, target audience, and
                objectives to define the right Drupal strategy.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="process-card">
              <h4>UI/UX Design & Development</h4>
              <p>
                Our design team creates an intuitive, user-friendly interface,
                while our developers bring the design to life with powerful
                Drupal functionalities.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="process-card">
              <h4>Testing & Quality Assurance</h4>
              <p>
                We conduct rigorous testing for performance, security, and
                functionality to ensure a flawless user experience.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="process-card">
              <h4>Deployment & Ongoing Support</h4>
              <p>
                After launch, we provide ongoing maintenance, security updates,
                and feature enhancements to keep your Drupal site running
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalProcess;
