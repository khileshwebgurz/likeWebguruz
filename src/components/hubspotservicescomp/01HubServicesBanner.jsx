"use client";
import Image from "next/image";
import serviceright from "../../../public/images/hubservicesimg/hub-service-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("hub-services-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }


};
const HubServicesBanner = () => {
  return (
    <>
      <section className="service-banner hub-services-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
              Transform Your Business with Our <span> HubSpot Services</span>
              </h1>
              <p>
              WebGuruz, a certified HubSpot partner, empowers businesses to streamline their marketing, sales, and customer service operations. Whether you’re looking to automate workflows, enhance customer engagement, or scale your business, our HubSpot services deliver tailored solutions to meet your unique needs.
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
              <Image src={serviceright} alt="HubSpot Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubServicesBanner;
