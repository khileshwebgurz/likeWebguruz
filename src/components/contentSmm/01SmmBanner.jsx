"use client";
import Image from "next/image";
import serviceright from "../../../public/images/Socialmediaimg/smm-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("smm-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SmmBanner = () => {
  return (
    <>
      <section className="service-banner social-media-management-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Revolutionize Your Digital Presence with{" "}
                <span>Social Media Management </span>
              </h1>

              <p className="mt-2">
                Social media has transformed from a simple communication
                platform to a critical business strategy that can make or break
                your brand&apos;s success. WebGuruz Technologies stands at the
                forefront of digital innovation, offering cutting-edge social
                media management services beyond traditional marketing
                approaches. Our holistic methodology combines creative
                storytelling, data-driven insights, and strategic execution to
                elevate your brand&apos;s online presence. We don&apos;t just manage
                social media; we craft digital experiences that connect, engage,
                and convert your target audience into loyal brand advocates.
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

export default SmmBanner;
