"use client";
import Image from "next/image";
import ppcbannerimage from "../../../public/images/hubspotcmsdevimg/cms-dev-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("cms-dev-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const CrmDevBanner = () => {
  return (
    <>
      <section className="ppcbanner py-5 service-banner  cms-dev-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12 banner-content-left heading-main">
              <h1>
                <span>HubSpot CMS Development </span> Services
              </h1>
              <p className="mb-3">
              At WebGuruz, we offer cutting-edge HubSpot CMS Development services to help businesses build powerful, engaging websites that deliver superior user experiences and drive measurable results. As a certified HubSpot partner, we provide tailor-made solutions that align with your business objectives, ensuring a seamless digital transformation.
              </p>
              <button className="explore-btn" onClick={handleScrollToJobs}>
                Get Started!
              </button>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={ppcbannerimage} alt="HubSpot CMS Development" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrmDevBanner;
