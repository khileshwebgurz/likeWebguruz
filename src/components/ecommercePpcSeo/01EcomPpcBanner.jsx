"use client";
import Image from "next/image";
import serviceright from "../../../public/images/EcommercPPCimg/ecomppc-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("ecome-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const EcomPpcBanner = () => {
  return (
    <>
      <section className="service-banner international-seo-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Skyrocket Your Online Sales with</span>
              <h1>
                Expert eCommerce <span> PPC Management Services</span>
              </h1>
              <p>
                Are you struggling to get your eCommerce store noticed? With
                millions of online stores competing for attention, standing out
                can feel impossible. That’s where WebGuruz’s eCommerce PPC
                Management Services company come in. Our team of certified experts helps
                you drive traffic, increase conversions, and maximize ROI with
                targeted, data-driven strategies. We focus on getting results so
                you can focus on growing your business.
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
              <Image src={serviceright} alt="eCommerce PPC Management Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcomPpcBanner;
