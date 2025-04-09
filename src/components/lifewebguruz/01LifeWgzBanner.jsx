"use client";
import Image from "next/image";
import serviceright from "../../../public/images/lifewebguruzimages/life-webguruz.webp";

const LifeWgzBanner = () => {
  return (
    <>
      <section className="service-banner life-at-wgz-banner py-5 inner-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <span className="dot">Life at WebGuruz</span>
              <h1>
                Where Innovation <span>Meets Passion</span>
              </h1>
              <p>
                At WebGuruz, every day is an opportunity to grow, learn, and
                collaborate. Join our dynamic team and experience a workplace
                that fosters creativity, embraces diversity, and thrives on
                innovation. Be a part of a company that is always moving forward
                and making an impact.
              </p>
              {/* <button
                className="explore-btn"
                aria-label="Go ahead"
                onClick={handleScrollToJobs}
              >
                Get Started Now!
              </button> */}
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="WebGuruz Technologies Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeWgzBanner;
