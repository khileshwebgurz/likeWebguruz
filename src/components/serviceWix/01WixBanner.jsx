"use client";
import Image from "next/image";
import serviceright from "../../../public/images/wiximages/wix-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wix-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const WixBanner = () => {
  return (
    <>
      <section className="service-banner wix-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Wix Development </span> Services
              </h1>
              <p>
                At WebGuruz Technologies Pvt Ltd, we specialize in Wix website
                development to help businesses build high-performing, visually
                stunning, and easy-to-manage websites. Whether you’re a startup,
                a growing business, or an established enterprise, our expert Wix
                developers create custom solutions that align with your goals.
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
              <Image src={serviceright} alt="Wix Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WixBanner;
