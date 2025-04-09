"use client";
import Image from "next/image";
import serviceright from "../../../public/images/keapimages/keap-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("keap-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const KeapBanner = () => {
  return (
    <>
      <section className="service-banner keap-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Trusted Keap Development </span> Services Company in
                India
              </h1>
              <p>
                At WebGuruz Technologies Pvt Ltd, we specialize in creating
                powerful, customized Keap web solutions that drive growth for
                businesses of all sizes. Our team of expert developers
                understands the ins and outs of the Keap platform and can help
                you harness its full potential to streamline your operations,
                enhance customer engagement, and boost your sales. Whether you
                need a simple integration or a complete custom solution, we have
                the skills and experience to deliver results that exceed your
                expectations.
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
              <Image src={serviceright} alt="HubSpot CRM Migration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeapBanner;
