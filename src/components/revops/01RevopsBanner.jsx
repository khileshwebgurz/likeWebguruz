"use client";
import Image from "next/image";
import serviceright from "../../../public/images/revoppsimage/revop-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("revenue-op-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const RevopsBanner = () => {
  return (
    <>
      <section className="service-banner revops-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Unlock Revenue Potential with{" "}
                <span>Expert RevOps Services </span>
              </h1>

              <p>
                Revenue Operations (RevOps) is the secret weapon behind
                high-performing businesses. At WebGuruz Technologies, we align
                your marketing, sales, and customer success teams to create a
                seamless revenue-generating machine. Our RevOps experts break
                down silos, automate workflows, and optimize your tech stack to
                ensure every lead turns into a customer and every customer stays
                loyal. Let us help you increase efficiency, scale faster, and
                drive predictable revenue growth.
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

export default RevopsBanner;
