"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/devecomerceimg/ecomdev-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecomdev-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const DevEcomBanner = () => {
  return (
    <>
      <section className="seobanner-main ecommerce-development-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>eCommerce Website Development </span> Services
              </h1>
              <p className="strong-contnt">
                At WebGuruz, we specialize in creating powerful, user-friendly,
                and high-performance eCommerce websites that drive growth. As a
                certified eCommerce website development service provider, we
                bring innovative solutions tailored to meet your unique business
                needs. Our expert team of developers and consultants is ready to
                elevate your online presence and help you build a scalable,
                secure, and successful eCommerce platform.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get in Touch!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="eCommerce Website Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevEcomBanner;
