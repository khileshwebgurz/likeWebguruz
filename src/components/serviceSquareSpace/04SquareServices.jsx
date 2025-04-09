import React from "react";
import Image from "next/image";
import square1 from "../../../public/images/squarespaceimg/square-box-1.webp";
import square2 from "../../../public/images/squarespaceimg/square-box-2.webp";
import square3 from "../../../public/images/squarespaceimg/square-box-3.webp";
import square4 from "../../../public/images/squarespaceimg/square-box-4.webp";
import Link from "next/link";
const SquareServices = () => {
  return (
    <div className="squarespace-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              <span> Our Squarespace </span> Web Development Services
            </h2>
            <p>
              We offer a wide range of Squarespace development services to help
              businesses scale and grow online.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square1} alt="Background Image" />
              </div>
              <div className="squarspace-card-title">
                <h4>Custom Squarespace Website Design</h4>
                <p>
                  We craft visually appealing and highly functional custom
                  Squarespace websites that align with your brand identity. Our
                  expert designers ensure that your website is engaging,
                  user-friendly, and conversion-optimized to leave a lasting
                  impact on your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square2} alt="Square Box" />
              </div>
              <div className="squarspace-card-title">
                <h4>Squarespace eCommerce Development</h4>
                <p>
                  Looking to start or expand your online store? Our Squarespace
                  eCommerce solutions help you build a seamless shopping
                  experience. We integrate secure payment gateways, inventory
                  management, and mobile-responsive layouts to boost your online
                  sales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square3} alt="Square Box Background" />
              </div>
              <div className="squarspace-card-title">
                <h4>SEO & Performance Optimization</h4>
                <p>
                  A beautiful website is useless if it doesn’t rank on search
                  engines. Our Squarespace SEO experts optimize your site
                  structure, content, and speed to improve your Google rankings
                  and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square4} alt="24/7 IT Support Icon" />
              </div>
              <div className="squarspace-card-title">
                <h4>Squarespace Website Maintenance & Support</h4>
                <p>
                  We provide ongoing maintenance and support to keep your
                  website running smoothly. From updates to security
                  enhancements, our team ensures your site remains optimized and
                  secure at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareServices;
