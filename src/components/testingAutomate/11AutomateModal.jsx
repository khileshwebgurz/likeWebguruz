import React from "react";
import model1 from "../../../public/images/automationtestimg/auto-team-1.webp";
import model2 from "../../../public/images/automationtestimg/auto-team-2.webp";
import model3 from "../../../public/images/automationtestimg/auto-team-3.webp";
import model4 from "../../../public/images/automationtestimg/auto-team-4.webp";
import Image from "next/image";
const AutomateModal = () => {
  return (
    <div className="automationmodel-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Our Engagement <span>Models </span>
            </h2>
            <p>
              We offer flexible engagement options to meet your specific needs
              and budget constraints:
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="model-card">
              <div className="model-img-text">
                <div className="model-img">
                  <Image src={model1} alt="testing" />
                </div>
                <div className="model-title">
                  <p>Project-Based Model</p>
                </div>
              </div>
              <div className="hover-text">
                <p>
                  A fixed-scope, fixed-price option ideal for well-defined
                  testing projects with clear requirements. We deliver a
                  complete testing solution within agreed timelines and budgets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="model-card">
              <div className="model-img-text">
                <div className="model-img">
                  <Image src={model2} alt="testing" />
                </div>
                <div className="model-title">
                  <p>Dedicated Team Model</p>
                </div>
              </div>
              <div className="hover-text">
                <p>
                  A monthly subscription model where we provide a dedicated team
                  of testing professionals who work exclusively on your
                  projects. This model offers flexibility and scalability for
                  ongoing testing needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="model-card">
              <div className="model-img-text">
                <div className="model-img">
                  <Image src={model3} alt="testing" />
                </div>
                <div className="model-title">
                  <p>Staff Augmentation</p>
                </div>
              </div>
              <div className="hover-text">
                <p>
                  We provide skilled testing professionals to work alongside
                  your existing team, filling specific skill gaps and increasing
                  your testing capacity without the overhead of hiring full-time
                  employees.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="model-card">
              <div className="model-img-text">
                <div className="model-img">
                  <Image src={model4} alt="testing" />
                </div>
                <div className="model-title">
                  <p>Consulting Services</p>
                </div>
              </div>
              <div className="hover-text">
                <p>
                  Expert guidance on testing strategy, tool selection, and best
                  practices. Our consultants help you establish effective
                  testing processes and make informed decisions about automation
                  investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateModal;
