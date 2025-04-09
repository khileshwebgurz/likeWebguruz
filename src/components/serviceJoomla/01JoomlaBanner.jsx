"use client";
import Image from "next/image";
import serviceright from "../../../public/images/joomlaimages/joomla.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("joomla-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const JoomlaBanner = () => {
  return (
    <>
      <section className="service-banner joomla-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Joomla Development </span> Services
              </h1>
              <p>
                We offer customized Joomla Development Services that meet your
                unique business needs. Whether you require a simple website or a
                complex enterprise portal, our expertise ensures seamless
                performance, mobile responsiveness, and outstanding user
                experience.
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
              <Image src={serviceright} alt="Joomla Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoomlaBanner;
