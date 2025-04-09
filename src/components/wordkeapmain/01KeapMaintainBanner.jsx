"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/keap-mainteance.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("keapmain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const KeapMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Keep Your Business Running Smoothly with Expert{" "}
                <span>Keap Maintenance & Support </span>
              </h1>
              <p className="strong-contnt">
                At WebGuruz Technologies, we understand that your Keap system is
                the backbone of your marketing automation and CRM processes.
                When it slows down or stops working properly, your entire
                business can grind to a halt. Our specialized Keap Maintenance &
                Support services ensure your system runs smoothly, allowing you
                to focus on growing your business rather than troubleshooting
                technical issues. With our expert team of certified Keap
                specialists, we deliver prompt, reliable support that keeps your
                marketing automation functioning at peak performance.
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
                alt="Keap maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeapMaintainBanner;
