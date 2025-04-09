"use client";
import Image from "next/image";
import serviceright from "../../../public/images/ecommerceconstimg/ecommerce-consult-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecom-consult-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const DevEcomConsultBanner = () => {
  return (
    <>
      <section className="service-banner ecommerce-consulting-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>eCommerce Consulting </span> Services
              </h1>
              <span className="dot">
                Transform Your eCommerce Strategy with Expert Consulting
              </span>
              <p className="mt-2">
                At WebGuruz, we specialize in offering comprehensive eCommerce
                consulting services that help businesses elevate their online
                presence, optimize sales channels, and achieve long-term
                success. Our team of certified consultants works closely with
                you to understand your business goals and create tailored
                strategies that drive results. Whether you are starting from
                scratch or looking to enhance your existing eCommerce platform,
                we have the expertise to make your vision a reality.
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
              <Image
                src={serviceright}
                alt="eCommerce Consulting Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevEcomConsultBanner;
