"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/ecommercewebdesignimg/webdesign-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecomdesigining-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const DesignEcomBanner = () => {
  return (
    <>
      <section className="seobanner-main ecommerce-design-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Expert eCommerce <span>Website Design Services</span>
              </h1>
              <span className="dot">
                Certified eCommerce Website Design Professionals for Your
                Business Needs
              </span>
              <p className="strong-contnt mt-2">
                Your website is your most powerful marketing tool, and we’re
                here to make it extraordinary. WebGuruz is a certified eCommerce
                Website Design Services provider with a proven track record of
                delivering results. Our team of experienced designers
                collaborates with you to ensure your website is tailored to your
                unique business needs. From enhanced user experiences to
                seamless navigation, we focus on creating designs that look
                stunning and convert visitors into loyal customers.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get in Touch!
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="eCommerce Website Design Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignEcomBanner;
