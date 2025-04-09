import React from "react";
import mobile1 from "../../../public/images/mobileseoimg/mobile-tick-1.webp";
import mobile2 from "../../../public/images/mobileseoimg/mobile-tick-2.webp";
import mobile3 from "../../../public/images/mobileseoimg/mobile-tick-3.webp";
import Image from "next/image";
const MobileSeoServices = () => {
  return (
    <div className="Mobileseo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Mobile <span>SEO Services</span>
            </h2>
            <p>
              At Webguruz, we specialize in delivering tailored Mobile SEO
              solutions. We ensure your website is not only<br/> mobile-friendly but
              also ranks high on search engines to attract valuable traffic.
            </p>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="mobile-seo-card">
              <Image src={mobile1} alt="Mobile-Friendly Design Icon" />
              <h4>
                Mobile-Friendly
                <br /> Design Optimization
              </h4>
              <p>
                We analyze your website’s design and usability to ensure it’s
                responsive and delivers a seamless experience across all
                devices.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="mobile-seo-card">
              <Image src={mobile2} alt="Mobile Speed Optimization Icon" />
              <h4>
                Mobile Speed
                <br />
                Optimization
              </h4>
              <p>
                Slow-loading sites lose visitors. Our team enhances your
                website’s speed to keep users engaged.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="mobile-seo-card">
              <Image src={mobile3} alt="Local SEO for Mobile Users Icon" />
              <h4>
                Local SEO for
                <br /> Mobile Users
              </h4>
              <p>
                Target customers in your area with location-based optimization
                strategies that drive in-store visits and online inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSeoServices;
