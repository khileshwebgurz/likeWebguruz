"use client";
import Image from "next/image";
import serviceright from "../../../public/images/salesforceconsultimg/sale-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("salesforce-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const SalesBanner = () => {
  return (
    <>
      <section className="service-banner salesforce-consult-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Transforming Businesses with Expert{" "}
                <span>Salesforce Consulting Services </span>
              </h1>
              <p>
                At WebGuruz, we deliver top-notch Salesforce consulting services
                that help businesses streamline operations, boost sales, and
                improve customer relationships. As India&apos;s leading Salesforce
                consultants, we understand the unique challenges businesses face
                in today&apos;s competitive market. Our team of certified Salesforce
                experts works closely with you to design, implement, and
                optimize Salesforce solutions that align perfectly with your
                business goals, ensuring maximum ROI and long-term success.
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
              <Image src={serviceright} alt="Drupal Development Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesBanner;
