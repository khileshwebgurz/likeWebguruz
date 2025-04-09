"use client";
import Image from "next/image";
import serviceright from "../../../public/images/magentoimg/magento-dev.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("magento-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const DevMagnetoBanner = () => {
  return (
    <>
      <section className="service-banner magento-developer-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Expert <span>Magento Development Services </span>
              </h1>
              <p>
                At WebGuruz, we bring the power of Magento to businesses across
                the globe. As a certified Magento Development Services provider,
                our expert developers and consultants deliver solutions tailored
                to your unique requirements. Whether you&apos;re looking to launch a
                new online store or optimize an existing one, we&apos;ve got you
                covered with precision and expertise.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get in Touch!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image
                src={serviceright}
                alt="Magento Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevMagnetoBanner;
