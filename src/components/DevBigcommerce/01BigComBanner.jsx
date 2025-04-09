"use client";
import Image from "next/image";
import serviceright from "../../../public/images/bigcommerceimg/bigcomm-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("bigcom-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const BigComBanner = () => {
  return (
    <>
      <section className="service-banner bigcommerce-development-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>BigCommerce Development </span> Services
              </h1>
              <p>
                Your online store is more than just a website, it&apos;s the heart of
                your business, the face of your brand, and the key to unlocking
                limitless growth opportunities. At WebGuruz, we offer
                tailor-made BigCommerce solutions designed to help you build,
                scale, and optimize your eCommerce store with ease.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get in touch!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image
                src={serviceright}
                alt="WooCommerce Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigComBanner;
