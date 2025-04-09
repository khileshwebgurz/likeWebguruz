"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/EcommerceImplementimg/ecom-implant.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecom-imply-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const ImplementEcoBanner = () => {
  return (
    <>
      <section className="seobanner-main ecommerce-implement-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>eCommerce Implementation </span> Services
              </h1>
              <p className="strong-contnt">
                Transform your business with seamless eCommerce solutions
                tailored to your needs. At WebGuruz, we provide certified
                eCommerce implementation services designed to help businesses of
                all sizes succeed in the digital marketplace. Our team of
                experienced eCommerce implementation experts is committed to
                delivering customized solutions that meet your unique business
                needs, ensuring a smooth, efficient transition to the world of
                eCommerce.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get in Touch!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="eCommerce Implementation Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementEcoBanner;
