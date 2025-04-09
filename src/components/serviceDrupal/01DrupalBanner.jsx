"use client";
import Image from "next/image";
import serviceright from "../../../public/images/drupaldevimages/druapl-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("drupal-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const DrupalBanner = () => {
  return (
    <>
      <section className="service-banner drupal-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Drupal  </span> Development Services
              </h1>
              <span className="dot">
                Build Powerful, Scalable & Secure Websites with Our Expert
                Drupal Development
              </span>
              <p>
                We specialize in crafting high-performance Drupal websites that
                align perfectly with your business goals. Whether you need a
                corporate website, an enterprise-grade solution, or an eCommerce
                platform, our team of Drupal experts ensures that your website
                is secure, scalable, and feature-rich.
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
              <Image src={serviceright} alt="Drupal Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrupalBanner;
