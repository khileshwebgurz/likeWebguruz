"use client";
import Image from "next/image";
import serviceright from "../../../public/images/manualsoftimages/manual-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("manualtest-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const ManualBanner = () => {
  return (
    <>
      <section className="service-banner manual-testing-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Manual Software Testing </span> Services
              </h1>
              <p>
              At WebGuruz Technologies, we understand that software bugs can damage your reputation and cost you customers. Our manual software testing services ensure your applications work flawlessly across all platforms and devices. With our expert testers and proven methodologies, we help you deliver error-free software that your users will love.
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

export default ManualBanner;
