"use client";
import Image from "next/image";
import serviceright from "../../../public/images/contentmarketingimg/content-market-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("contentmarket-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const ContMarketBanner = () => {
  return (
    <>
      <section className="service-banner content-marketing-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transform Your Business with{" "}
                <span>Content Marketing Services at WebGuruz </span>
              </h1>
              <p className="mt-2">
                At WebGuruz Technologies Pvt Ltd, we believe that great content
                can change everything. Our Content Marketing Services are
                designed to help you engage your audience, boost your online
                presence, and drive more conversions. With years of experience
                in SEO copywriting, we provide quality content that speaks
                directly to your target market. Our approach is simple and
                effective, ensuring that every word works to build your brand.
                Let us help you create compelling narratives that not only rank
                well on search engines but also resonate with your readers.
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
              <Image src={serviceright} alt="eCommerce Consulting Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContMarketBanner;
