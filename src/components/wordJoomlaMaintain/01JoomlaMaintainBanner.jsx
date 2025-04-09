"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/joomla-maintean.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("joomlamain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const JoomlaMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Expert Joomla Maintenance </span> & Support Services
              </h1>
              <p className="strong-contnt">
                At WebGuruz Technologies Pvt Ltd, we understand that your Joomla
                website is a critical business asset that needs constant care
                and attention. Our specialized Joomla maintenance and support
                services ensure your website remains secure, updated, and
                performing at its best. With our team of certified Joomla
                experts, we handle everything from regular updates and security
                patches to performance optimization and emergency fixes,
                allowing you to focus on your core business while we take care
                of your website&apos;s health.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="Joomla maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoomlaMaintainBanner;
