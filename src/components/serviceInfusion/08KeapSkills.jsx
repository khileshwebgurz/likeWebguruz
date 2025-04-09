import React from "react";
import Image from "next/image";
import done from "../../../public/images/keapimages/Done-white.svg";
const KeapSkills = () => {
  return (
    <div className="keapskills-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              USPs of Our <span>Keap Web Development </span>
            </h2>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="keapskills-box">
              <div className="keapskills-box-img">
                <Image src={done} alt="skills" />
              </div>
              <div className="keapskills-box-description">
                <h5>Agile Development Methodology</h5>
                <p>
                  We follow an agile approach that ensures quick iterations,
                  regular feedback, and the flexibility to adapt to changing
                  requirements throughout the development process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="keapskills-box">
              <div className="keapskills-box-img">
                <Image src={done} alt="skills" />
              </div>
              <div className="keapskills-box-description">
                <h5>End-to-End Testing</h5>
                <p>
                  Our comprehensive testing protocols ensure that your Keap
                  solution works flawlessly across all devices and integrates
                  seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="keapskills-box">
              <div className="keapskills-box-img">
                <Image src={done} alt="skills" />
              </div>
              <div className="keapskills-box-description">
                <h5>Performance Optimization</h5>
                <p>
                  We optimize your Keap implementation for speed and efficiency,
                  ensuring smooth operation even with large databases and
                  complex automation sequences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="keapskills-box">
              <div className="keapskills-box-img">
                <Image src={done} alt="skills" />
              </div>
              <div className="keapskills-box-description">
                <h5>Custom Reporting</h5>
                <p>
                  Gain valuable insights with our custom reporting solutions
                  that provide clear visibility into your key performance
                  indicators and business metrics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="keapskills-box">
              <div className="keapskills-box-img">
                <Image src={done} alt="skills" />
              </div>
              <div className="keapskills-box-description">
                <h5>Future-Proof Solutions</h5>
                <p>
                  We build with scalability in mind, ensuring your Keap
                  implementation can grow and evolve as your business needs
                  change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapSkills;
