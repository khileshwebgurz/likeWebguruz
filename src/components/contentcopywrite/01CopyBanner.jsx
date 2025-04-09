"use client";
import Image from "next/image";
import serviceright from "../../../public/images/seocopywriteimg/copywrite-banner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("copywriting-form");
  if (jobSection) {
    const yOffset = -200; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};
const CopyBanner = () => {
  return (
    <>
      <section className="service-banner seo-copywriting-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h1>
                Attain Digital Success with Powerful{" "}
                <span>SEO Copywriting Services </span>
              </h1>
              <p className="mt-2">
                Content is king, but strategic SEO copywriting is the crown
                jewel. At WebGuruz Technologies, we blend creative writing with
                advanced SEO techniques to elevate your online presence. Our
                expert team understands the delicate art of creating content
                that not only captivates your audience but also satisfies search
                engine algorithms, ensuring your brand stands out in the crowded
                digital marketplace.
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
              <Image src={serviceright} alt="eCommerce Consulting Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopyBanner;
