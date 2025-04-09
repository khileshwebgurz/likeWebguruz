import Link from "next/link";
import React from "react";
const RmmServices = () => {
  return (
    <>
      <div className="rmm-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4">
              <h2 className="mb-4">
                Our <span> RMM Services</span>
              </h2>
              <p>
                At WebGuruz, we offer a full suite of RMM services tailored to
                your business needs. Our certified experts help you with RMM
                administration, configuration, and maintenance to keep your IT
                infrastructure running efficiently.
              </p>
            </div>
          </div>
          <div className="row rmm">
            <div className="col-md-6 col-12 ">
              <div className="rmm-card">
                <div className="card-title-main">
                  <h3>RMM Administration</h3>
                  <p>We take complete control of your IT environment with:</p>
                </div>

                <div className="rmm-services-list">
                  <ul>
                    <li>
                      Proactive tracking of servers, networks, and endpoints.
                    </li>
                    <li>
                      Rapid issue detection and resolution to minimize downtime.
                    </li>
                    <li>
                      Secure management of user privileges and permissions.
                    </li>
                    <li>Continuous tuning for maximum efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="rmm-card">
                <div className="card-title-main">
                  <h3>RMM Configuration</h3>
                  <p>
                    Our team ensures a seamless RMM setup that enhances security
                    and efficiency:
                  </p>
                </div>

                <div className="rmm-services-list">
                  <ul>
                    <li>
                      Tailored configurations for your specific IT environment.
                    </li>
                    <li>Immediate reporting of anomalies and threats.</li>
                    <li>Keeping systems updated and secure.</li>
                    <li>Streamlining IT resources for optimal performance.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="rmm-card">
                <div className="card-title-main">
                  <h3>RMM Maintenance</h3>
                  <p>
                    We provide ongoing support and updates to keep your IT
                    systems robust:
                  </p>
                </div>
                <div className="rmm-services-list">
                  <ul>
                    <li>Ensuring smooth system operation and performance.</li>
                    <li>
                      Identifying vulnerabilities before they cause damage.
                    </li>
                    <li>
                      Protecting your critical data and ensuring business
                      continuity.
                    </li>
                    <li>Dedicated assistance whenever you need it.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-3 mt-lg-4 mb-3">
              <Link href="/contact-us" className="get-btn">
                GET STARTED{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RmmServices;
