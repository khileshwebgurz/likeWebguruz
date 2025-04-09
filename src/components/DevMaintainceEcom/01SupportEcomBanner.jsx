"use client";
import Image from "next/image";
import serviceright from "../../../public/images/ecommercemainteimg/maintain-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("maintain-support-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SupportEcomBanner = () => {
  return (
    <>
      <section className="service-banner ecommerce-maintain-support-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Efficient, Reliable, and Scalable</span>
              <h1>
                <span>eCommerce Website Support </span> & Maintenance Services
              </h1>
              <p className="mt-2">
                At WebGuruz, we understand the critical role of website support
                and maintenance in driving eCommerce success. Our certified team
                of experts provides tailored solutions to keep your online store
                running smoothly, securely, and efficiently. Whether you are a
                startup or a global brand, our services are designed to align
                with your unique business needs.
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
                alt="eCommerce Website Support"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportEcomBanner;
