"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/word-maintean.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wordmaintain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const WordMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Reliable <span>WordPress Maintenance & Support</span>
              </h1>
              <p className="strong-contnt">
                Your WordPress website is an essential part of your business,
                but managing updates, security, and performance can be
                time-consuming and challenging. At WebGuruz Technologies Pvt
                Ltd, we offer expert WordPress Maintenance & Support services to
                keep your website secure, optimized, and running without
                interruptions. Our team of professionals handles all necessary
                updates, security patches, and performance enhancements so you
                can focus on growing your business without technical worries.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="WordPress maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordMaintainBanner;
