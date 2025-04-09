"use client"
import Image from "next/image";
import Hbstptimg from "../../../../public/images/localseoimages/localbanner.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("local-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector('.hs-firstname input').focus();
  }
};
function LocalSeoBanner() {
  return (
    <section className="hubsptbanner service-banner local-seo py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="heading-main inner-page">
              <h1>
                <span>Local SEO</span> Services
              </h1>
              <p className="unls">
                <strong>Boost your local visibility with WebGuruz- your trusted local SEO agency in India.</strong>
              </p>
              <p>
              We help businesses rank higher in local searches, bringing you closer to the customers near you. Our local SEO strategies are tailored to put your business on the map- literally. Whether you&apos;re in a bustling city or a quiet town, we ensure your business shows up when local customers search.
              </p>
              <div className="gtintchbtn">
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hbsptbnrimg">
              <Image src={Hbstptimg} className="img-fluid" alt="Local SEO Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalSeoBanner;
