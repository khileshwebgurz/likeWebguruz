"use client"
import Image from "next/image";
import seobannertop from "../../../../public/images/seoimages/seobannertop.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("seo-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};

const SeoBanner = () => {
  return (
    <>
      <section className="seobanner-main py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
              Maximize Your Online Visibility with Professional <span>SEO SERVICES</span> 
              </h1>
              <p className="strong-contnt">
              Having a powerful online presence is essential for success. At WebGuruz, we specialize in delivering customized SEO solutions that drive organic traffic, improve search engine rankings, and help businesses of all sizes achieve their goals. 

              </p>
              <p>
              
              Whether you&apos;re a startup or an established brand, our team of SEO experts will craft strategies tailored to your specific needs, ensuring long-term visibility, increased leads, and enhanced ROI. From technical SEO to local optimization, we provide comprehensive solutions that keep you ahead of the curve.

              </p>
              <div className="button-merge">
                <button className="explore-btn" onClick={handleScrollToJobs}>Consult Now</button>
              </div>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="SEO Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoBanner;
