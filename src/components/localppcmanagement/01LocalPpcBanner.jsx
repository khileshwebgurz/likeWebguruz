"use client";
import Image from "next/image";
import serviceright from "../../../public/images/localppcimages/local-ppc-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("localppc-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const LocalPpcBanner = () => {
  return (
    <>
      <section className="service-banner local-ppc-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Local PPC Marketing Services </span> That Deliver Results
              </h1>
              <p>
                Optimize your campaigns for maximum ROI, ensuring every dollar
                you spend works harder to achieve your goals.
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
              <Image src={serviceright} alt="Local PPC Marketing Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalPpcBanner;
