"use client";
import Image from "next/image";
import ppcbannerimage from "../../../public/images/hubautomateimages/new-auto-page.webp";

const handleScrollToJobs = () => {
  const jobSection = document.getElementById("crm-auto-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const CrmAutomateBanner = () => {
  return (
    <>
      <section className="crm-automate-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12 banner-content-left heading-main mt-md-5">
              <h1>
                Maximize Efficiency with <span>HubSpot CRM Automation</span>
              </h1>
              <p className="mb-3">
                Realize the full potential of your business by automating your
                customer relationship management processes with HubSpot. With
                streamlined workflows, automated communications, and data-driven
                insights, you’ll boost efficiency, enhance customer
                relationships, and drive growth like never before.
              </p>
              <button className="explore-btn" onClick={handleScrollToJobs}>
                Schedule a Call
              </button>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={ppcbannerimage} alt="HubSpot CRM Automation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrmAutomateBanner;
