"use client"
import Image from "next/image";
import serviceright from "../../../public/images/crmmigrationimages/crm-migrate-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("crmigration-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const HubCrmBanner = () => {
  return (
    <>
      <section className="service-banner hub-crm-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
            
              <h1>
              Transform Your Business with HubSpot <span> CRM Migration Services</span>
              </h1>
              <p>
              HubSpot CRM migration is the cornerstone for businesses looking to streamline operations, enhance customer relationships, and optimize sales processes. As a certified HubSpot partner, WebGuruz brings unmatched expertise in migrating complex CRM systems, ensuring a smooth, secure, and efficient transition. No matter your business size or industry, we make it effortless for you to unlock HubSpot’s full potential.
              </p>
              <button className="explore-btn" aria-label="Go ahead" onClick={handleScrollToJobs} >
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

export default HubCrmBanner;
