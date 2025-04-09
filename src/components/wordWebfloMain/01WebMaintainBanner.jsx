"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/webflow-mainteane.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("webflowdev-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const WebMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Keep Your Webflow <span>Website Running Smoothly </span>
              </h1>
              <p className="strong-contnt">
                Your Webflow website is your digital storefront, and keeping it
                running smoothly is crucial for your business success. At
                WebGuruz Technologies, we understand the challenges of
                maintaining a Webflow site. From regular updates to
                troubleshooting issues, our dedicated team of Webflow experts
                provides comprehensive maintenance and support services. We
                handle the technical aspects so you can focus on growing your
                business. With our proactive approach, your website will stay
                secure, functional, and optimized for peak performance.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="Webflow maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebMaintainBanner;
