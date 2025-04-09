"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/whiteseoimg/white-seo-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("white-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const WhiteSeoBanner = () => {
  return (
    <>
      <section className="seobanner-main white-seo-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Boost Business Growth with
                <br /> <span>White Label SEO Services</span>
              </h1>
              <p className="strong-contnt">
                Expand your offerings and focus on the core services while still
                delivering outstanding results. Whether you&apos;re a digital
                agency or a business looking to grow online, our white-label SEO
                services can help you improve website rankings, drive more
                traffic, and increase revenue.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="White Label SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhiteSeoBanner;
