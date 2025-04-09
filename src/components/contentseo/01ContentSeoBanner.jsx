"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/contentseoimgages/content-seo-banner.webp";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("content-seo-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const ContentSeoBanner = () => {
  return (
    <>
      <section className="seobanner-main content-seo-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                <span>SEO Content</span> <br /> Writing Services
              </h1>
              <p className="strong-contnt">
                Your business deserves content that drives traffic and delivers
                results. With our SEO Content Writing Services, we craft
                engaging, optimized content that enhances your visibility and
                resonates with your audience.
              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Try Us!
                </button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="SEO Content Writing Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSeoBanner;
