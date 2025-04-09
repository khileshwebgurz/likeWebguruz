"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/zohoservicesimg/zoho-cn-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("zohoserve-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const ZohoServeBanner = () => {
  return (
    <>
      <section className="seobanner-main zoho-service-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Your Premier Zoho </span> Implementation Partner in India
              </h1>
              <p className="strong-contnt">
                At WebGuruz, we excel in implementing Zoho&apos;s powerful suite of
                business applications to streamline your operations. As India&apos;s
                leading Zoho implementation partner, we take pride in delivering
                customized solutions that address your unique business
                challenges. Our certified Zoho experts work closely with you to
                understand your requirements and implement the right tools to
                boost your productivity, enhance customer relationships, and
                drive growth.
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

export default ZohoServeBanner;
