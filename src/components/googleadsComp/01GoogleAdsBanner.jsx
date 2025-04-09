"use client";
import Image from "next/image";
import serviceright from "../../../public/images/googleadsimg/google-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("google-ad-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const GoogleAdsBanner = () => {
  return (
    <>
      <section className="service-banner google-ads-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Drive Results, Not Just <span> Traffic with Google Ads </span>
              </h1>
              <p>
                We specialize in creating customized campaigns that focus on
                your unique business needs, ensuring that you reach the right
                audience at the right time. Let us help you grow your business
                by getting the most out of your Google Ads investment.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get Started!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Google Ads Optimization" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleAdsBanner;
