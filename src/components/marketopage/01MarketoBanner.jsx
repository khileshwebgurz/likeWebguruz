"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/marketoconsultimg/marketo-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("marketo-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MarketoBanner = () => {
  return (
    <>
      <section className="seobanner-main marketo-consulting-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Revolutionize Your Marketing Automation with{" "}
                <span> WebGuruz Marketo Consulting</span>
              </h1>
              <p className="strong-contnt">
                WebGuruz Technologies is your trusted Marketo consulting
                partner, dedicated to elevating your marketing automation to
                unprecedented heights. As India&apos;s leading Marketo experts, we
                transform complex marketing challenges into streamlined,
                data-driven strategies that deliver measurable results. Our team
                of certified professionals combines deep technical expertise
                with creative marketing insights to help businesses unlock the
                full potential of Marketo&apos;s powerful platform.
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

export default MarketoBanner;
