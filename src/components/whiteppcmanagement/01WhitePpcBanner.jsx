"use client";
import Image from "next/image";
import serviceright from "../../../public/images/whitelabelppcimage/white-label-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("whiteppc-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const WhitePpcBanner = () => {
  return (
    <>
      <section className="service-banner white-ppc-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Empower your business with seamless{" "}
                <span>White Label PPC Services</span>
              </h1>
              <p>
                Scalable solutions tailored to your business goals, ensuring
                every campaign delivers measurable results. Whether you&apos;re an
                agency looking to expand your offerings or a business aiming for
                superior performance, our White Label PPC services are the
                perfect solution.
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
              <Image src={serviceright} alt="White Label PPC Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhitePpcBanner;
