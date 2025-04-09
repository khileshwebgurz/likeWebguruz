"use client";
import Image from "next/image";
import Hbstptimg from "../../../public/images/hubautomateimages/automate-banner.webp";

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
function HubAutomateBanner() {
  return (
    <section className="hubsptbanner service-banner marketing-automate py-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
              <h1>
                Maximize Efficiency with{" "}
                <span>HubSpot Automation Services</span>
              </h1>
              <p className="unls">
                <strong>
                  Streamline Processes and Drive Revenue with HubSpot-Powered
                  Solutions
                </strong>
              </p>
              <p>
                Your business needs efficient systems to stay competitive.
                HubSpot automation is just what it needs, enabling you to
                centralize operations, nurture leads, and enhance customer
                experiences. At WebGuruz, we bring unparalleled expertise as
                certified HubSpot partners, providing customized Hubspot
                automation services tailored to your unique needs. Whether it’s
                marketing automation to engage customers, sales automation to
                boost conversions, or workflow automation to save time, we
                ensure your business reaches its full potential.
              </p>
              <div className="gtintchbtn">
                <button
                  className="explore-btn"
                  aria-label="Get in Touch"
                  onClick={handleScrollToJobs}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="banner-image-right">
              <Image
                src={Hbstptimg}
                className="img-fluid"
                alt="HubSpot Automation Services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubAutomateBanner;
