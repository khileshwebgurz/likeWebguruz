import Link from "next/link";
import React from "react";
const SoftTestPerform = () => {
  return (
    <>
      <div className="testing-perform py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4">
              <h2 className="mb-2">
                <span> Testing </span> Types
              </h2>
            </div>
          </div>
          <div className="row rmm">
            <div className="col-md-6 col-12 ">
              <div className="rmm-card">
                <div className="card-title-main">
                  <h3>Functional Testing</h3>
                </div>
                <div className="rmm-services-list">
                  <ul>
                    <li>
                      <strong>Smoke Testing:</strong> Quick evaluations to
                      verify that the most critical functions work properly
                    </li>
                    <li>
                      <strong>Regression Testing:</strong> Ensuring that new
                      changes don&apos;t break existing functionality
                    </li>
                    <li>
                      <strong>Integration Testing:</strong> Checking how
                      different parts of your application work together
                    </li>
                    <li>
                      <strong>API Testing:</strong> Validating the reliability,
                      performance, and security of your application programming
                      interfaces
                    </li>
                    <li>
                      <strong>User Acceptance Testing:</strong> Verifying that
                      your software meets user requirements and expectations
                    </li>
                    <li>
                      <strong>Compatibility Testing:</strong> Ensuring your
                      software works across different browsers, devices, and
                      operating systems
                    </li>
                    <li>
                      <strong>Localization Testing:</strong> Validating that
                      your software functions correctly in different languages
                      and regions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="rmm-card">
                <div className="card-title-main">
                  <h3>Non-Functional Testing</h3>
                </div>

                <div className="rmm-services-list">
                  <ul>
                    <li>
                      <strong>Performance Testing:</strong> Evaluating system
                      responsiveness and stability under various conditions
                    </li>
                    <li>
                      <strong>Load Testing:</strong> Assessing how your system
                      handles multiple users and high traffic
                    </li>
                    <li>
                      <strong>Stress Testing:</strong> Testing your system&apos;s
                      stability under extreme conditions
                    </li>
                    <li>
                      <strong>Security Testing:</strong> Identifying
                      vulnerabilities that could compromise your data or users
                    </li>
                    <li>
                      <strong>Usability Testing:</strong> Evaluating how
                      user-friendly your software is
                    </li>
                    <li>
                      <strong>Accessibility Testing:</strong> Ensuring your
                      software is usable by people with disabilities
                    </li>
                    <li>
                      <strong>Scalability Testing:</strong> Verifying that your
                      system can handle growth in users or data volume
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftTestPerform;
