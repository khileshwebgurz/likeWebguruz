"use client";
import Image from "next/image";
import serviceright from "../../../public/images/remarketingimg/remarketing-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("remarkseo-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const EcomPpcBanner = () => {
  return (
    <>
      <section className="service-banner remarking-seo-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Turn Visitors into Customers with</span>
              <h1>
                Expert Google Ads <span> Remarketing Services</span>
              </h1>
              <p>
                Have you ever wondered why some ads seem to follow you around
                the web? That’s the power of Google Ads Remarketing. At
                WebGuruz, we specialize in helping businesses reconnect with
                potential customers who have already shown interest in their
                products or services. Our tailored remarketing campaigns bring
                them back to your site, increasing conversions and maximizing
                your ad spend. Ready to see the magic of remarketing?
              </p>
              <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
               Let’s make it happen!
              </button>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="Google Ads Remarketing Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcomPpcBanner;
