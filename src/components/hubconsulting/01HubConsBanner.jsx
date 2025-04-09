"use client";
import Image from "next/image";
import Hbstptimg from "../../../public/images/hubspotconsultimages/consult-banner.webp";

const handleScrollToJobs = () => {
  const jobSection = document.getElementById("hubrank-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
function HubConsBanner() {
  return (
    <section className="hubsptbanner consulting-banner py-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main mb-5 mb-md-0">
              <h1>
                <span>Expert HubSpot Consulting </span>
                Services for Businesses Worldwide
              </h1>
              <p className="unls">
                <strong>
                  Work with a Certified HubSpot Partner for Strategic Business
                  Growth
                </strong>
              </p>
              <p>
                At WebGuruz, we specialize in delivering impactful HubSpot
                consulting services tailored to help businesses like yours
                unlock the full potential of this powerful platform. As a
                certified HubSpot partner, we bring expertise, experience, and a
                proven track record of helping organizations streamline their
                marketing, sales, and customer service processes through
                HubSpot. Whether you&apos;re new to HubSpot or seeking to
                optimize your existing workflows, our team of certified
                consultants is here to guide you.
              </p>
              <div className="gtintchbtn">
                <button
                  className="explore-btn"
                  aria-label="Get in Touch"
                  onClick={handleScrollToJobs}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="banner-image-right">
              <Image
                src={Hbstptimg}
                className="img-fluid"
                alt="HubSpot Consulting Services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubConsBanner;
