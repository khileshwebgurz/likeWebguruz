"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/voicesearchimg/voice-search-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("voice-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const VoiceSeoBanner = () => {
  return (
    <>
      <section className="seobanner-main voice-seo-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Discover the Future of Search with
                <br /> <span>Voice Search Optimization Services</span>
              </h1>
              <p className="strong-contnt">
                Voice search is transforming how people interact with the
                internet. With the rise of virtual assistants like Siri, Alexa,
                and Google Assistant, users are turning to voice commands for
                faster and more convenient searches. Voice Search Optimization
                ensures your business is ready for this shift. By tailoring your
                website’s content to meet voice search criteria, you can attract
                more visitors, enhance user experiences, and stay ahead of the
                competition. Let’s help you make your brand discoverable with
                just a simple voice command.
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
                alt="Voice Search Optimization Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceSeoBanner;
