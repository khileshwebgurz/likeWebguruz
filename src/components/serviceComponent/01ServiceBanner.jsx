"use client";
import Image from "next/image";
import serviceright from "../../../public/images/digital-marketing.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("boostrank");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const Service = () => {
  return (
    <>
      <section className="service-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">
                Attract More Leads and Grow Your Business
              </span>
              <h1>
                Best <span>Digital Marketing Services</span>
              </h1>
              <p>
                WebGuruz can help you realize the power of digital marketing for
                business growth. We&apos;ve successfully implemented the best
                marketing strategies for our clients and can effectively put
                them to work for you as well.
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
              <Image src={serviceright} alt="Digital Marketing Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
