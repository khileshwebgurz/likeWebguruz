"use client";
import Image from "next/image";
import serviceright from "../../../public/images/amazeimages/amazon-ppc-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("amazonppc-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const AmazonPpcBanner = () => {
  return (
    <>
      <section className="service-banner amazon-ppc-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Amazon PPC Management </span> Services
              </h1>
              <p>
                Tailored PPC solutions that help you achieve maximum visibility,
                drive qualified traffic, and boost sales.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get Started Now!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Amazon PPC Management Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmazonPpcBanner;
