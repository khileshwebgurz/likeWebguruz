"use client";
import Image from "next/image";
import serviceright from "../../../public/images/loadtestingimg/load-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("loadconsult-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const LoadTestBanner = () => {
  return (
    <>
      <section className="service-banner load-test-consulting-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Load Testing Services: </span> Ensure Your Website
                Performs Under Pressure
              </h1>
              <p>
                At WebGuruz, we help businesses ensure their websites and
                applications can handle real-world traffic demands. Our
                load-testing services identify performance bottlenecks before
                they affect your customers. With years of experience testing
                high-traffic websites across industries, we deliver actionable
                insights that improve user experience, increase conversions, and
                protect your online reputation.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get Started!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="HubSpot CRM Migration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadTestBanner;
