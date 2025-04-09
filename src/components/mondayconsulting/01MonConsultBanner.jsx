"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/mondayconsimages/monday-cloud.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("monday-consult-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const MonConsultBanner = () => {
  return (
    <>
      <section className="seobanner-main monday-com-consult-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Turn Your Workflow Dreams into Reality with{" "}
                <span>Monday.com Consulting</span>
              </h1>
              <p className="strong-contnt">
                Are you struggling to get the most out of your Monday.com
                platform? WebGuruz Technologies is India&apos;s leading Monday.com
                setup partner, helping businesses transform their work processes
                through expert implementation, customization, and training. Our
                team of certified Monday.com consultants has helped hundreds of
                Indian companies streamline operations, boost productivity, and
                achieve their business goals faster. Let us help you turn
                Monday.com from just another tool into your competitive
                advantage.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get Started!
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="Mobile SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MonConsultBanner;
