"use client";
import Image from "next/image";
import serviceright from "../../../public/images/hubspot-developer-img/developer-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("hub-developer-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const HubDeveloperBanner = () => {
  return (
    <>
      <section className="service-banner hub-developer-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
              Hire Certified <span>Hubspot CRM Developers </span>
              </h1>
              <p>
              As certified HubSpot Development Agency, we offer custom solutions tailored to meet your unique business needs. With a team of seasoned experts, we deliver innovative and result-driven HubSpot development services across the globe.
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
              <Image src={serviceright} alt="Certified Hubspot CRM Developers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubDeveloperBanner;
