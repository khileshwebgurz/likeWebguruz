"use client";
import Image from "next/image";
import seobannertop from "../../../public/images/wordpressmaintenanceimg/wix-mainteance.svg";
const handleScrollToJobs = () => {
  const jobSection = document.getElementById("wixmain-form");
  if (jobSection) {
    const yOffset = -170; // Adjust this value to control the scroll offset
    const yPosition =
      jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
    document.querySelector(".hs-firstname input").focus();
  }
};

const WixMaintainBanner = () => {
  return (
    <>
      <section className="seobanner-main wordpress-maintainance-banner py-5 service-banner inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 col-xs-12 heading-main">
              <h1>
                Keep Your Wix <span>Website Running Smoothly </span>
              </h1>
              <p className="strong-contnt">
                Your Wix website is the face of your business online. But
                without proper maintenance, it can quickly become outdated,
                slow, or vulnerable to security issues. At WebGuruz
                Technologies, we specialize in keeping your Wix website running
                at peak performance. Our dedicated team handles all the
                technical details so you can focus on what matters most- growing
                your business. From regular updates to emergency fixes, we&apos;ve
                got your Wix website covered with our comprehensive maintenance
                and support services.
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
                alt="Wix maintenance packages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WixMaintainBanner;
