"use client";
import Image from "next/image";
import serviceright from "../../../public/images/automationtestimg/automate-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("autotesting-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const AutomateBanner = () => {
  return (
    <>
      <section className="service-banner automation-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Testing Automation Services- </span> Accelerate Quality
                Assurance with WebGuruz
              </h1>
              <p>
                At WebGuruz, we transform how businesses approach software
                testing. Our testing automation services help you detect bugs
                faster, release products quicker, and maintain high-quality
                standards consistently. We combine the latest testing tools with
                our technical expertise to create custom automation solutions
                that fit your specific business needs. Our team ensures your
                applications work perfectly across different platforms and
                devices, giving you peace of mind and helping you deliver
                exceptional user experiences.
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get in touch!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image
                src={serviceright}
                alt="WooCommerce Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomateBanner;
