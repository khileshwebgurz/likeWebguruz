"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/mobileseoimg/mobile-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("mobile-seo-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MobileSeoBanner = () => {
  return (
    <>
      <section className="seobanner-main mobile-seo-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Boost Conversions with Expert
                <br /> <span>Mobile SEO Services</span>
              </h1>
              <p className="strong-contnt">
                Mobile devices dominate the way people browse the internet. With
                Webguruz’s Mobile SEO Services, you can improve your visibility,
                attract more visitors, and drive business growth. Whether you’re
                targeting local customers or a global audience, our strategies
                are designed to meet your goals.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="Mobile SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileSeoBanner;
