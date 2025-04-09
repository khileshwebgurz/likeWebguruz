"use client";
import Image from "next/image";
import serviceright from "../../../public/images/hubSpot-marketing-autoimg/market-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("new-automate-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const NewAutomateBanner = () => {
  return (
    <>
      <section className="service-banner new-automate-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transform Your Marketing Strategy with HubSpot{" "}
                <span> Marketing Automation </span>
              </h1>
              <span className="dot">
                Simplify, Optimize, and Grow Your Business
              </span>
              <p>
                Staying ahead in a fast-paced digital world requires more than
                traditional marketing efforts. Enter HubSpot Marketing
                Automation– a game-changing tool that helps businesses
                streamline their marketing operations, nurture leads, and drive
                measurable growth. At WebGuruz, we combine our HubSpot expertise
                with years of industry experience to offer tailored marketing
                automation solutions. Whether you’re a startup aiming to scale
                quickly or an established enterprise looking for efficiency, our
                services can help you save time, optimize campaigns, and boost
                ROI.
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
              <Image src={serviceright} alt="HubSpot Marketing Automation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAutomateBanner;
