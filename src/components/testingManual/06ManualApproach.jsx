import React from "react";

const ManualApproach = () => {
  return (
    <div className="manualapporache-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Manual <span> Software Testing Approach</span>
            </h2>
            <p>
              We follow a structured, comprehensive approach to manual testing
              that ensures thorough coverage while maintaining efficiency. Our
              methodology has been refined over years of experience to deliver
              maximum value to our clients.
            </p>
          </div>
          <div className="col-12">
            <div className="approach-list">
              <ul>
                <li>
                  <span className="count">01</span>
                  <h4>Requirements Analysis</h4>
                  <p>
                    We start by thoroughly understanding your software
                    requirements and business objectives to create targeted test
                    plans.
                  </p>
                </li>
                <li>
                  <span className="count">02</span>
                  <h4>Test Planning</h4>
                  <p>
                    Our team develops detailed test plans and strategies
                    tailored to your specific application and quality goals.
                  </p>
                </li>
                <li>
                  <span className="count">03</span>
                  <h4>Test Case Development</h4>
                  <p>
                    We create comprehensive test cases that cover all functional
                    and non-functional aspects of your software.
                  </p>
                </li>
                <li>
                  <span className="count">04</span>
                  <h4>Test Execution</h4>
                  <p>
                    Our skilled testers methodically execute test cases,
                    documenting results and identifying defects.
                  </p>
                </li>
                <li>
                  <span className="count">05</span>
                  <h4>Defect Reporting</h4>
                  <p>
                    We provide clear, detailed bug reports with reproduction
                    steps, screenshots, and environment information.
                  </p>
                </li>
                <li>
                  <span className="count">06</span>
                  <h4>Defect Tracking</h4>
                  <p>
                    We maintain a systematic approach to tracking issues from
                    discovery to resolution, ensuring nothing falls through the
                    cracks.
                  </p>
                </li>
                <li>
                  <span className="count">07</span>
                  <h4>Regression Testing</h4>
                  <p>
                    After fixes are implemented, we verify that the solutions
                    work and don&apos;t introduce new problems.
                  </p>
                </li>
                <li>
                  <span className="count">08</span>
                  <h4>Exploratory Testing</h4>
                  <p>
                    We complement structured testing with exploratory sessions
                    to uncover unexpected issues and edge cases.
                  </p>
                </li>
                <li>
                  <div className="col-container">
                    <span className="count">09</span>
                    <h4>Cross-browser and Cross-device Testing</h4>
                  </div>
                  <p>
                    We ensure your application works consistently across various
                    browsers, devices, and screen sizes.
                  </p>
                </li>
                <li>
                  <span className="count">10</span>
                  <h4>Final Quality Assessment</h4>
                  <p>
                    We provide a comprehensive quality report highlighting test
                    coverage, discovered issues, and recommendations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualApproach;
