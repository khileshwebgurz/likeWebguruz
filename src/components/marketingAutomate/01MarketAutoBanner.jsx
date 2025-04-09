"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/whyautomationimg/market-auto-banne.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("market-auto-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MarketAutoBanner = () => {
  return (
    <>
      <section className="seobanner-main marketing-automate-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transform Your Business with Powerful{" "}
                <span> B2B Marketing Automation</span>
              </h1>
              <p className="strong-contnt">
                At WebGuruz, we deliver cutting-edge B2B marketing automation
                solutions that streamline your marketing efforts, nurture leads,
                and drive conversions. As India&apos;s premier marketing automation
                service provider, we help businesses of all sizes implement
                powerful automation strategies that save time, reduce costs, and
                maximize ROI. Our team of experts works closely with you to
                understand your unique business needs and design customized
                automation workflows that deliver measurable results.
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

export default MarketAutoBanner;
