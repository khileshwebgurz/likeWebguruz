"use client";
import Image from "next/image";
import serviceright from "../../../public/images/traningdevimg/training-dev-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("training-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const TrainBanner = () => {
  return (
    <>
      <section className="service-banner training-development-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Transformative Employee Training </span> & Development
                Solutions
              </h1>
              <p>
                At WebGuruz Technologies, we understand that your employees are
                your most valuable asset. Our comprehensive Employee Training &
                Development programs are meticulously designed to transform your
                workforce into a powerhouse of innovation, efficiency, and
                unparalleled performance. As the leading Marketo Consulting
                provider in India, we bring world-class training methodologies
                that align perfectly with your organization&apos;s unique goals and
                challenges
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

export default TrainBanner;
