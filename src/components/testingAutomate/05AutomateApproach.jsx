import React from "react";
import tools1 from "../../../public/images/automationtestimg/auto-priority-1.webp";
import tools2 from "../../../public/images/automationtestimg/auto-priority-2.webp";
import tools3 from "../../../public/images/automationtestimg/auto-priority-3.webp";
import tools4 from "../../../public/images/automationtestimg/auto-priority-4.webp";
import tools5 from "../../../public/images/automationtestimg/auto-priority-5.webp";
import tools6 from "../../../public/images/automationtestimg/auto-priority-6.webp";
import tools7 from "../../../public/images/automationtestimg/auto-priority-7.webp";
import tools8 from "../../../public/images/automationtestimg/auto-priority-8.webp";
import Image from "next/image";
const AutomateApproach = () => {
  return (
    <div className="automation-beyond-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              <span>The WebGuruz</span> Testing Advantage
            </h2>
            <p>
              At WebGuruz, we&apos;ve developed a comprehensive approach to
              testing automation that delivers real results for businesses of
              all sizes. Our testing advantage comes from combining technical
              expertise with business understanding, allowing us to create
              automation solutions that address your specific challenges. We
              don&apos;t just run tests; we build testing ecosystems that grow
              with your business and provide ongoing value.
            </p>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools1} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Continuous Testing Framework</h3>
                <p>
                  We implement continuous testing throughout your development
                  lifecycle, catching issues early when they&apos;re easier and
                  cheaper to fix. Our automated test suites run with each code
                  change, providing immediate feedback to your development team.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5 ">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools2} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Cross-Platform Compatibility</h3>
                <p>
                  Our automated tests verify that your applications work
                  perfectly across different operating systems, browsers, and
                  devices. We ensure consistent performance no matter how your
                  customers access your products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools3} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Data-Driven Testing</h3>
                <p>
                  We use real-world data to create test scenarios that mirror
                  actual user behavior. This approach ensures that your
                  applications are tested under realistic conditions, improving
                  the relevance and effectiveness of your testing efforts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5 ">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools4} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Scalable Testing Solutions</h3>
                <p>
                  As your business grows, your testing needs will evolve. Our
                  automation frameworks are designed to scale with your
                  business, allowing you to add new tests and expand coverage
                  without starting from scratch.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools5} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Performance Optimization</h3>
                <p>
                  We don&apos;t just test functionality; we also assess performance.
                  Our automated performance tests identify bottlenecks and help
                  you optimize your applications for speed and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5 ">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools6} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Reduced Time-to-Market</h3>
                <p>
                  By automating repetitive testing tasks, we help you release
                  products and updates faster without compromising on quality.
                  This gives you a competitive edge in today&apos;s fast-paced
                  market.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools7} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Detailed Reporting</h3>
                <p>
                  Our testing tools generate comprehensive reports that provide
                  clear insights into your application&apos;s quality. These reports
                  help you make informed decisions about product releases and
                  improvements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5 ">
            <div className="beyond-list">
              <div className="beyond-icon">
                <Image src={tools8} alt="custom-tools" />
              </div>
              <div className="autobeyond-content">
                <h3 className="mb-3">Cost Efficiency</h3>
                <p>
                  Our automation solutions significantly reduce the cost of
                  testing over time. While there&apos;s an initial investment, the
                  long-term savings in time and resources make automation a
                  smart business decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateApproach;
