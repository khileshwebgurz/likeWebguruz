"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/square-mainteance.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("sqauremain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const SquareMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Squarespace Maintenance </span> & Support Services
              </h1>
              <p className="strong-contnt">
                Your Squarespace website is the digital face of your business.
                Don&apos;t let technical issues or outdated content drive customers
                away. At WebGuruz Technologies, we provide reliable Squarespace
                maintenance and support services that ensure your website
                remains in peak condition. Our team of skilled Squarespace
                specialists handles everything from regular updates and bug
                fixes to performance optimization and content management,
                allowing you to focus on what matters most- growing your
                business.
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
                alt="Voice Search Optimization Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SquareMaintainBanner;
