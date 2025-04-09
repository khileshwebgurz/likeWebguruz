"use client";
import Image from "next/image";
import serviceright from "../../../public/images/wocommercesimg/woo-commerce-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("woocomm-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const DevWoCommerceBanner = () => {
  return (
    <>
      <section className="service-banner woocommerce-development-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>WooCommerce Development Services </span> Tailored for
                Success
              </h1>
              <p>
                We specialize in delivering cutting-edge WooCommerce Development
                Services designed to take your business to the next level. With
                a certified team of WooCommerce developers and consultants, we
                cater to businesses worldwide, offering custom solutions that
                align with your unique business needs.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get in touch Today!
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

export default DevWoCommerceBanner;
