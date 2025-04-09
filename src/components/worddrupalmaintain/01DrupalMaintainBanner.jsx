"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/drupal-maintean.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("drupalmaintain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const DrupalMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Drupal Maintenance </span> & Support Services
              </h1>
              <p className="strong-contnt">
                Your Drupal website is the foundation of your online presence,
                but without regular updates, security patches, and performance
                optimizations, it can become slow, vulnerable, or even crash. At
                WebGuruz Technologies Pvt Ltd, we provide expert Drupal
                Maintenance & Support to keep your website running at peak
                performance. Whether you need security updates, bug fixes,
                backups, or enhancements, our team ensures a seamless user
                experience with minimal downtime. Let us handle the technical
                complexities while you focus on growing your business.
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
                alt="Drupal maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrupalMaintainBanner;
