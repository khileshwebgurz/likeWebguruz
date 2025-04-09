"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/ecommerceimage/ecom-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecom-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const EcommerceBanner = () => {
  return (
    <>
      <section className="seobanner-main ecommerce-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Drive Traffic, Boost Sales with
                <br /> <span>eCommerce SEO Services</span>
              </h1>
              <p className="strong-contnt">
                We specialize in helping online stores improve their visibility,
                attract targeted traffic, and boost sales. Our expert strategies
                are tailored to your business needs, making sure your store
                ranks higher on search engines and converts visitors into loyal
                customers.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="eCommerce SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceBanner;
