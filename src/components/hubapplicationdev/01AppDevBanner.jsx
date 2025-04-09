"use client";
import Image from "next/image";
import ppcbannerimage from "../../../public/images/Hubspotappimages/banner.jpg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("hub-app-dev");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const AppDevBanner = () => {
  return (
    <>
      <section className="hubspot-app-developer py-5 service-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12 banner-content-left heading-main">
              <h1>
              Maximize Business Potential with Expert  <span>HubSpot Application Developers</span>
                 
              </h1>
              <p className="mb-3">
              Are you ready to elevate your business with powerful, custom-built applications tailored to your needs?
               Our team of experienced HubSpot Application Developers can help you streamline operations, enhance customer engagement, and drive growth. With our expertise, 
              we turn your ideas into seamless applications that integrate perfectly with HubSpot CRM.
              </p>
              <button className="explore-btn" onClick={handleScrollToJobs}>
               Get Started
              </button>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={ppcbannerimage} alt="HubSpot Application Developers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDevBanner;
