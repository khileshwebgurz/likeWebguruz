"use client";
import Image from "next/image";
import serviceright from "../../../public/images/webflowwimages/webflow-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("webflow-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const WebflowBanner = () => {
  return (
    <>
      <section className="service-banner webflow-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Webflow Development </span> Services
              </h1>
              <p>
                We create visually stunning, scalable, and fully responsive
                websites that drive engagement and conversions. Whether you need
                a business website, an eCommerce platform, or a custom web
                application, our expert Webflow developers ensure seamless
                execution from design to deployment.
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
              <Image src={serviceright} alt="Webflow Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebflowBanner;
