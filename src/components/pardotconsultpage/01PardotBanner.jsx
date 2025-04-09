"use client";
import Image from "next/image";
import serviceright from "../../../public/images/pardotimg/pardot-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("pardotconsult-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const PardotBanner = () => {
  return (
    <>
      <section className="service-banner pardot-consult-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Expert Pardot Consulting </span> Services in India
              </h1>
              <p>
                Revolutionize your digital marketing strategy with WebGuruz
                Technologies, India&apos;s premier Pardot Consulting partner. We
                transform complex marketing challenges into streamlined,
                data-driven solutions that propel your business forward. Our
                expert team specializes in leveraging Pardot&apos;s powerful
                automation tools to enhance your marketing efficiency, generate
                high-quality leads, and drive unprecedented growth for your
                organization.
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
              <Image src={serviceright} alt="Drupal Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PardotBanner;
