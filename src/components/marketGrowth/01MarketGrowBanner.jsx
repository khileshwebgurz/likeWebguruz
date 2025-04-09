"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/marketingautomationimg/auomte-grow-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("market-grow-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MarketGrowBanner = () => {
  return (
    <>
      <section className="seobanner-main marketing-growth-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transform Your Business with Smart{" "}
                <span>Marketing Automation Solutions</span>
              </h1>
              <p className="strong-contnt">
                At WebGuruz Technologies, we understand that growing your
                business requires more than just great products- it demands
                smart marketing. Our cutting-edge Marketing Automation Solutions
                help Indian businesses of all sizes streamline their marketing
                efforts, engage customers more effectively, and drive measurable
                results. By combining powerful technology with proven
                strategies, we help you create personalized customer journeys
                that convert prospects into loyal customers. Say goodbye to
                manual marketing tasks and hello to efficient, data-driven
                campaigns that deliver real ROI.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="Mobile SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketGrowBanner;
