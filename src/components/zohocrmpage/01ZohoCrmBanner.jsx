"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/zohocrmimages/zoho-crm-ban.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("zohocrm-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const ZohoCrmBanner = () => {
  return (
    <>
      <section className="seobanner-main zoho-crm-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>Expert Zoho CRM Plus </span> Implementation & Consulting
              </h1>
              <p className="strong-contnt">
                Are you struggling to streamline your sales, marketing, and
                customer support processes? At WebGuruz Technologies Pvt Ltd, we
                offer top-notch Zoho CRM Plus Implementation & Consulting
                Services to help businesses optimize their operations. Whether
                you’re looking to automate workflows, improve customer
                engagement, or boost team productivity, our expert consultants
                ensure a seamless CRM transition tailored to your business
                needs. Partner with us and experience the power of a fully
                customized Zoho CRM Plus solution that drives growth and
                efficiency.
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

export default ZohoCrmBanner;
