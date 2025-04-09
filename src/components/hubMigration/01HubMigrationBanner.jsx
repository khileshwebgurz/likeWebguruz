"use client"
import Image from "next/image";
import Hbstptimg from "../../../public/images/hubspotmigrationimages/migration-banner.webp";

const handleScrollToJobs = () => {
  const jobSection = document.getElementById("migrate-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
function HubmigrationBanner() {
  return (
    <section className="hubsptbanner service-banner migrayion-banner py-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
              <h1>
                <span>HubSpot Migration Services- </span>
                <br />
                Transition Seamlessly with WebGuruz
              </h1>
              
              <p>
              Smooth workflows, minimal downtime, and maximum efficiency for businesses worldwide.
              </p>
              <div className="gtintchbtn">
                <button className="explore-btn" aria-label="Get in Touch" onClick={handleScrollToJobs}>
                  Get Started Today!
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mt-md-0">
            <div className="banner-image-right">
              <Image src={Hbstptimg} className="img-fluid" alt="HubSpot Migration Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubmigrationBanner;
