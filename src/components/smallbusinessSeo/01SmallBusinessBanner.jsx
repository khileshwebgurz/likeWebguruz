"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/smallbussinesimg/small-buss-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("small-buss-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const SmallBusinessBanner = () => {
  return (
    <>
      <section className="seobanner-main small-business-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Maximize Your Online Presence with Expert
                <br /> <span>Small Business SEO Services</span>
              </h1>
              <p className="strong-contnt">
                At WebGuruz, we specialize in providing cost-effective and
                result-driven SEO solutions tailored to small businesses. Our
                expert team will work closely with you to create an SEO plan
                that enhances your brand’s online presence, ensuring you reach
                the right audience at the right time.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="Small Business SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallBusinessBanner;
