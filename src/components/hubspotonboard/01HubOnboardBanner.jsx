"use client";
import Image from "next/image";
import serviceright from "../../../public/images/hubonboardingimg/hub-onboard-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("onboard-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const HubOnboardBanner = () => {
  return (
    <>
      <section className="service-banner hub-onboard-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Custom Hubspot Onboarding </span> Services
              </h1>
              <p>
                Streamline your business operations, boost your marketing
                efforts, and drive growth with WebGuruz’s tailored HubSpot
                Onboarding services. As a certified HubSpot Solutions partner,
                we ensure a smooth transition, helping you maximize the
                platform’s capabilities for optimal results.
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
              <Image src={serviceright} alt="Hubspot Onboarding Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubOnboardBanner;
