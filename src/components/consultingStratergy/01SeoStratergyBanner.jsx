"use client";
import Image from "next/image";
import serviceright from "../../../public/images/seoconsultingimg/stratergy-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("consult-stratergy-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SeoStratergyBanner = () => {
  return (
    <>
      <section className="service-banner seo-stratergy-consulting-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Expert SEO Strategy & <span> Consulting Services </span>
              </h1>
              <p>
                Success online starts with the right strategy. Our SEO Strategy
                & Consulting Services are designed to help businesses like yours
                stand out in a crowded digital world. From boosting your
                website&apos;s visibility to driving meaningful traffic, we create
                customized plans that deliver real results. With our expertise,
                you’ll reach your target audience, increase conversions, and
                achieve sustainable growth.
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
              <Image src={serviceright} alt="SEO Strategy & Consulting Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoStratergyBanner;
