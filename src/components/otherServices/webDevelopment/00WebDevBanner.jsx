"use client"
import Image from "next/image";
import serviceright from "/public/images/webimages/webbanner.svg";
import Link from "next/link";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("webdev-com");
  if (jobSection) {
    const yOffset = -150; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};

const WebDevBanner = () => {
  return (
    <>
      <section className="service-banner web-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1 className="mb-3">
              Website Development Services<span> Your Vision, Our Expertise.</span>
              </h1>
              <p className="fw-bold">
              Work with a client-focused and customer-centric website development company.
              </p>
              <p>
              Your website is your online storefront. At WebGuruz, we understand the importance of a visually appealing, user-friendly, and functional website. Our team of skilled developers is dedicated to crafting custom web solutions that not only captivate your audience but also drive business growth.
              </p>
              <button className="explore-btn" aria-label="Explore More" onClick={handleScrollToJobs}>
                Get Started!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Website Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevBanner;
