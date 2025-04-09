import React from "react";
import Image from "next/image";
import black1 from "../../../public/images/automationtestimg/automate-pie-1.webp";
import black2 from "../../../public/images/automationtestimg/automate-pie-2.webp";
import black3 from "../../../public/images/automationtestimg/automate-pie-3.webp";
import black4 from "../../../public/images/automationtestimg/automate-pie-4.webp";
import black5 from "../../../public/images/automationtestimg/automate-pie-5.webp";
import black6 from "../../../public/images/automationtestimg/automate-pie-6.webp";
import black7 from "../../../public/images/automationtestimg/automate-pie-7.webp";
import black8 from "../../../public/images/automationtestimg/automate-pie-8.webp";
import black9 from "../../../public/images/automationtestimg/automate-pie-9.webp";
const AutomateTestServe = () => {
  return (
    <div className="automate-test-serve py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Our <span> Automation Testing Services </span>
            </h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black1} alt="commerce" />
                <h5>Web Application Testing</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Web Application Testing</h3>
                  <p>
                    Comprehensive automated testing for web applications across
                    browsers and devices. Our web testing solutions verify
                    functionality, performance, and user experience across
                    Chrome, Firefox, Safari, Edge, and other browsers. We test
                    responsive design elements to ensure your application looks
                    and works perfectly on every screen size, from desktop
                    monitors to mobile phones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black2} alt="commerce" />
                <h5>API and Web Services Testing</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">API and Web Services Testing</h3>
                  <p>
                    Automated verification of API functionality, performance,
                    and security. We test REST, SOAP, and GraphQL APIs to ensure
                    reliable data exchange between systems. Our comprehensive
                    API testing covers request validation, response
                    verification, error handling, authentication, and
                    authorization checks. We also perform load testing to verify
                    API performance under varying conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black3} alt="commerce" />
                <h5>Mobile Application Testing</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Mobile Application Testing</h3>
                  <p>
                    Automated testing for native, hybrid, and progressive web
                    apps on iOS and Android. We validate app performance,
                    functionality, and user experience across different devices,
                    screen sizes, and operating system versions. Our mobile
                    testing includes installation processes, offline
                    functionality, notifications, and device-specific features
                    to ensure consistent quality across all platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black4} alt="commerce" />
                <h5>Performance Testing</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Performance Testing</h3>
                  <p>
                    Load, stress, and endurance testing to ensure your
                    applications perform under pressure. We simulate real-world
                    user scenarios with thousands of concurrent users to
                    identify bottlenecks before they affect customers. Our
                    performance testing measures response times, server resource
                    utilization, database performance, and system stability to
                    help you optimize your application for speed and
                    reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black5} alt="commerce" />
                <h5>Security Testing</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Security Testing</h3>
                  <p>
                    Automated scanning and testing to identify and address
                    security vulnerabilities. We conduct comprehensive security
                    assessments that include vulnerability scanning, penetration
                    testing, and compliance verification. Our security tests
                    check for common vulnerabilities like SQL injection,
                    cross-site scripting (XSS), broken authentication, and
                    sensitive data exposure to help you protect customer
                    information and business data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black6} alt="commerce" />
                <h5>Test Environment Setup</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Test Environment Setup</h3>
                  <p>
                    Configuration and maintenance of reliable, consistent test
                    environments. We create isolated, reproducible testing
                    environments that mirror your production setup. Our
                    environment management includes containerization,
                    configuration management, and environment monitoring to
                    ensure tests run consistently. We also implement
                    environment-specific test data management and cleanup
                    procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black7} alt="commerce" />
                <h5>DevOps and CI/CD Integration</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">DevOps and CI/CD Integration</h3>
                  <p>
                    Seamless integration of automated tests into your continuous
                    integration pipeline. We implement testing at every stage of
                    your development process, providing immediate feedback on
                    code changes. Our CI/CD integration ensures that tests run
                    automatically with each build, enabling faster releases
                    while maintaining quality. We work with popular tools like
                    Jenkins, GitHub Actions, CircleCI, and Azure DevOps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black8} alt="commerce" />
                <h5>Test Data Management</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Test Data Management</h3>
                  <p>
                    Creation and management of test data that reflects
                    real-world scenarios. We develop comprehensive test data
                    strategies that include data generation, masking,
                    subsetting, and refresh mechanisms. Our approach ensures
                    that your tests have the right data at the right time,
                    maintaining data integrity and relationships while
                    protecting sensitive information. We also implement database
                    snapshots and rollback procedures for efficient test
                    execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="big-card">
              <div className="big-card-icon-content">
                <Image src={black9} alt="commerce" />
                <h5>Automated Reporting and Analytics</h5>
              </div>
              <div className="bigcommerce-ser-content">
                <div className="bigcommerce-content-inner">
                  <h3 className="font25">Automated Reporting and Analytics</h3>
                  <p>
                    Detailed test results and metrics to track quality and guide
                    improvements. Our reporting solutions provide real-time
                    insights into test execution, coverage, and defect trends.
                    We generate customizable dashboards that highlight key
                    metrics and areas for improvement. Our analytics help you
                    understand the impact of your testing efforts and make
                    data-driven decisions about quality and release readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateTestServe;
