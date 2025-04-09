"use client";
import Image from "next/image";
import serviceright from "../../../public/images/graphmotionimg/motion-graph-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("infograph-motion-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const ContInfoBanner = () => {
  return (
    <>
      <section className="service-banner infographic-motion-graphic-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transform Your Ideas into Engaging{" "}
                <span>Visual Stories with WebGuruz </span>
              </h1>
              <span className="dot">
                Infographics & Motion Graphics Services That Elevate Your Brand
              </span>
              <p className="mt-2">
                Captivating visuals can make or break your message. At WebGuruz,
                we specialize in Infographics & Motion Graphics Services that
                turn complex information into eye-catching designs and dynamic
                animations. Whether you need infographics for marketing, motion
                graphics for product demos, or animated explainer videos, we
                craft engaging content that resonates with your audience. As the
                leading Infographics & Motion Graphics services provider in
                India, we ensure your brand communicates its message effectively
                and creatively.
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
              <Image src={serviceright} alt="eCommerce Consulting Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContInfoBanner;
