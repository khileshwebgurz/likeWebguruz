import React from "react";
import comprehensive1 from "../../../public/images/wordpressdevimages/wordpress-call-1.webp";
import comprehensive2 from "../../../public/images/wordpressdevimages/wordpress-call-2.webp";
import comprehensive3 from "../../../public/images/wordpressdevimages/wordpress-call-3.webp";
import comprehensive4 from "../../../public/images/wordpressdevimages/wordpress-call-4.webp";
import Image from "next/image";
const WordpressHiring = () => {
  return (
    <>
      <section className="wordpress-hire-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading-main mb-4 mb-md-5">
            <h2 className="mb-2">
                Hire Our <span>WordPress Developers</span>
              </h2>
              <p>
                Are you looking for skilled and dedicated WordPress developers
                to build, customize, or manage your website? At WebGuruz
                Technologies Pvt Ltd, we offer highly experienced WordPress
                developers who specialize in creating high-performance,
                scalable, and feature-rich websites tailored to your business
                needs. Whether you need a brand-new website, theme
                customization, plugin development, WooCommerce integration, or
                ongoing maintenance, our developers are equipped with the latest
                WordPress technologies, frameworks, and best practices to
                deliver outstanding results.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="wordpress-box">
                <div className="wordpress-box-icon">
                  <Image src={comprehensive1} alt="Computer Icon" />
                </div>
                <p>Experienced WordPress Experts</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="wordpress-box">
                <div className="wordpress-box-icon">
                  <Image src={comprehensive2} alt="Time Icon" />
                </div>
                <p>On-Time Project Delivery</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="wordpress-box">
                <div className="wordpress-box-icon">
                  <Image src={comprehensive3} alt="Card Icon" />
                </div>
                <p>Transparent Pricing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="wordpress-box">
                <div className="wordpress-box-icon">
                  <Image src={comprehensive4} alt="Customer Icon" />
                </div>
                <p>24/7 Support & Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordpressHiring;
