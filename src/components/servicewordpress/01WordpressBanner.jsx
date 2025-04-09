"use client";
import Image from "next/image";
import serviceright from "../../../public/images/wordpressdevimages/wordpress-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wordpress-dev-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const WordpressBanner = () => {
  return (
    <>
      <section className="service-banner wordpress-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span> WordPress CMS </span> Development Services
              </h1>
              <span className="dot">
                Scalable, Secure & Custom WordPress Solutions for Your Business
              </span>
              <p>
                Boost your brand, attract more customers, and enhance your
                online presence with our custom WordPress solutions. Our skilled
                developers can help you create high-performance WordPress
                websites that are fast, secure, and easy to manage.
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
              <Image src={serviceright} alt="WordPress CMS Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordpressBanner;
