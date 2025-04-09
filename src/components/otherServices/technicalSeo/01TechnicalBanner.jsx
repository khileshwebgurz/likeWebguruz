"use client"
import Image from "next/image";
import seobannertop from "../../../../public/images/technicalimages/technicalbanner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("tech-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
const TechnicalBanner = () => {
  return (
    <>
      <section className="seobanner-main py-5 service-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                <span>Technical SEO </span> SERVICES
              </h1>
              <p className="strong-contnt">
              When it comes to improving your website&apos;s visibility, Technical SEO is the backbone of your SEO strategy. Technical SEO services from WebGuruz are designed to optimize the foundational aspects of your website, ensuring it&apos;s easily accessible, indexed, and ranked by search engines.
              </p>
              <p>
              Our Technical SEO experts in Mohali help businesses create a seamless user experience while enhancing website performance, mobile usability, and security. With WebGuruz, you&apos;ll receive top-tier support from a leading Technical SEO agency that has helped hundreds of businesses improve their organic rankings and grow their online presence.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>Contact Now!</button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 bannerimage">
              <Image src={seobannertop} alt="Technical SEO SERVICES" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalBanner;
