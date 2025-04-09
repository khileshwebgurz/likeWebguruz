"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/mondaycomimages/monday-dot-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("monday-dot-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MonDotBanner = () => {
  return (
    <>
      <section className="seobanner-main monday-com-partners-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Transform Your Business with India&apos;s
                <br /> <span>Premier Monday.com Partner</span>
              </h1>
              <p className="strong-contnt">
                WebGuruz stands as the leading Monday.com setup partner across
                India, helping businesses streamline their operations and boost
                productivity. Our expert team specializes in customizing
                Monday.com solutions that align perfectly with your unique
                business needs. With years of experience implementing Monday.com
                for diverse industries, we provide end-to-end services from
                initial setup to ongoing support, ensuring your team maximizes
                the platform&apos;s powerful capabilities.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="Mobile SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MonDotBanner;
