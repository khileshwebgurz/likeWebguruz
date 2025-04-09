"use client";
import Image from "next/image";
import serviceright from "../../../public/images/internationalseoimg/consult-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("internet-seo-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const InternetSeoBanner = () => {
  return (
    <>
      <section className="service-banner international-seo-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Expand Your Business Worldwide with</span>
              <h1>
                Professional <span>International SEO Services</span>
              </h1>
              <p>
                At WebGuruz, we specialize in providing top-tier international
                SEO services that help businesses increase their visibility and
                grow across global markets. Our team of experienced SEO experts
                uses data-driven strategies and cutting-edge tools to optimize
                your website for multiple countries and languages.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get Started Now!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="International SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternetSeoBanner;
