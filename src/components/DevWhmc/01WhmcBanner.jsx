"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/whmcsimages/whmc-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("whmcdev-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const WhmcBanner = () => {
  return (
    <>
      <section className="seobanner-main whmcs-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>WHMCS Development Services </span> Company in India
              </h1>
              <p className="strong-contnt">
                At WebGuruz, we are proud to offer comprehensive WHMCS
                development services to businesses around the world. As a
                certified WHMCS development services provider, we specialize in
                delivering tailored solutions that meet your unique business
                requirements. Whether you&apos;re looking to integrate WHMCS with
                your existing infrastructure or need a custom module designed to
                streamline your processes, our team of experienced developers is
                here to help you succeed.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Start Today!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image
                src={seobannertop}
                alt="WHMCS Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhmcBanner;
