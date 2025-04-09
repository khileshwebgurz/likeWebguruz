"use client";
import Image from "next/image";
import serviceright from "../../../public/images/squarespaceimg/square-space-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("squarespace-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SquareBanner = () => {
  return (
    <>
      <section className="service-banner squarespace-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> Squarespace Web Development </span> Services
              </h1>
              <p>
                A well-designed website is the backbone of any successful
                business. At WebGuruz, we specialize in Squarespace Web
                Development to create sleek, responsive, and high-converting
                websites. Whether you need a business website, an eCommerce
                store, or a portfolio, our expert Squarespace developers ensure
                your site is optimized, fast, and visually engaging.
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
              <Image src={serviceright} alt="Squarespace Web Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SquareBanner;
