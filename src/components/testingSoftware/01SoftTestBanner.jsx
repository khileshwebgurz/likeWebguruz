"use client";
import Image from "next/image";
import serviceright from "../../../public/images/softwereimages/software-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("softwaretest-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SoftTestBanner = () => {
  return (
    <>
      <section className="service-banner software-testing-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Software Testing Services </span> - Ensuring Quality
                Software for Your Business
              </h1>
              <p>
                At WebGuruz Technologies Pvt Ltd, we understand that quality
                software is crucial for your business success. Our comprehensive
                software testing services help you deliver flawless applications
                that your customers will love. We combine expert knowledge with
                proven methodologies to find and fix issues before they impact
                your business. Our team works closely with you to understand
                your specific needs and create testing strategies that ensure
                your software meets the highest quality standards.
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

export default SoftTestBanner;
