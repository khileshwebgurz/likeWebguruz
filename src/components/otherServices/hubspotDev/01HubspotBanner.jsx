"use client"
import Image from "next/image";
import Hbstptimg from "../../../../public/images/hubspotimages/hubbanner.svg";

const handleScrollToJobs = () => {
  const jobSection = document.getElementById("hubrank-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
function Hubspotbanner() {
  return (
    <section className="hubsptbanner service-banner py-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main">
              <h1>
                <span>Expert HubSpot Development</span>
                <br />
                Services
              </h1>
              <p className="unls">
                <strong>Leverage the Power of HubSpot to Drive Growth and Efficiency</strong>
              </p>
              <p>
              HubSpot, the leading CRM and marketing platform, offers a comprehensive suite of tools to help you attract, engage, and delight customers. At WebGuruz, we deliver top-notch HubSpot development services tailored to your unique needs. Our team of skilled Hubspot developers and marketers will work closely with you to create a customized HubSpot solution that drives results.
              </p>
              <div className="gtintchbtn">
                <button className="explore-btn" aria-label="Get in Touch" onClick={handleScrollToJobs}>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="banner-image-right">
              <Image src={Hbstptimg} className="img-fluid" alt="HubSpot Development Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hubspotbanner;
