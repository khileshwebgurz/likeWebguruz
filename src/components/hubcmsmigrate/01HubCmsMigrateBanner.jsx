"use client";
import Image from "next/image";
import serviceright from "../../../public/images/Hubspotcmsimages/cms-migrate.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("cmsmigrt-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();

  }
};
const HubCmsMigrateBanner = () => {
  return (
    <>
      <section className="service-banner hub-cms-migrate-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Migrate to Hubspot CMS with Ease</span>
              <h1>
              Seamless HubSpot <span>CMS Migration Services</span>
              </h1>
              <p>
                Upgrade your digital presence by migrating to HubSpot CMS, the
                all-in-one platform designed to enhance your website’s
                performance, user experience, and marketing results. Trust
                WebGuruz, a certified HubSpot partner, to make your transition
                smooth and stress-free.
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
              <Image src={serviceright} alt="HubSpot CMS Migration Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubCmsMigrateBanner;
