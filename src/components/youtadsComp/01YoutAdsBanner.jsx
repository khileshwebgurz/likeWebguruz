"use client";
import Image from "next/image";
import serviceright from "../../../public/images/youtubeimg/you-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("youtads-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const YoutAdsBanner = () => {
  return (
    <>
      <section className="service-banner youtube-ads-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>YouTube Advertising </span> Services
              </h1>
              <ul>
                <li>
                  Capture attention with dynamic pre-roll and in-video ads via
                  our YouTube Ad Services.
                </li>
                <li>
                  Leverage advanced targeting and performance insights for
                  campaign success.
                </li>
                <li>
                  Maximize conversions and retarget with the Google Display
                  Network.
                </li>
              </ul>

              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get in Touch Today!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="YouTube Advertising Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutAdsBanner;
